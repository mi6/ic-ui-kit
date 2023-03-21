import {
  Component,
  Element,
  Host,
  Prop,
  h,
  Listen,
  State,
} from "@stencil/core";
import paginationFirst from "../../assets/pagination-first.svg";
import paginationPrevious from "../../assets/pagination-previous.svg";
import paginationNext from "../../assets/pagination-next.svg";
import paginationLast from "../../assets/pagination-last.svg";
import { IcThemeForeground } from "../../interface";

@Component({
  tag: "ic-pagination",
  styleUrl: "ic-pagination.css",
  shadow: true,
})
export class Pagination {
  @Element() el: HTMLIcPaginationElement;

  /**
   * The type of Pagination to be used.
   */
  @Prop() type: string = "simple";
  /**
   * The default page to display.
   */
  @Prop() defaultPage: number = 1;
  /**
   * The number of pages displayed adjacent to the current page.
   */
  @Prop() adjacentCount: number = 1;
  /**
   * The number of pages displayed as boundary items to the current page.
   */
  @Prop() boundaryCount: number = 1;
  /**
   * If `true` the `firstPageButton` will not be displayed.
   */
  @Prop() hideFirstPageButton: boolean = false;
  /**
   * If `true` the `lastPageButton` will not be displayed.
   */
  @Prop() hideLastPageButton: boolean = false;
  /**
   * If `true` the current page in the `simple` appearance will not be displayed.
   */
  @Prop() hideCurrentPage: boolean = false;
  /**
   * If `true` the Pagination component will not allow interaction.
   */
  @Prop() loading: boolean = false;
  /**
   * The total number of pages.
   */
  @Prop() pages!: number;
  /**
   * The appearance of the pagination, e.g. dark or light. Default appearance if value not set
   */
  @Prop() appearance: IcThemeForeground = "default";

  @State() currentPage: number = this.defaultPage;

  @Listen("paginationItemClick")
  paginationItemClickHandler(ev: CustomEvent) {
    const page = ev.detail.page;
    this.currentPage = page;
  }

  private handleClickFirst = () => {
    this.currentPage = 1;
  };
  private handleClickPrevious = () => {
    this.currentPage--;
  };
  private handleClickNext = () => {
    this.currentPage++;
  };
  private handleClickLast = () => {
    this.currentPage = this.pages;
  };

  // button rendering abstracted from component render methos for clarity
  private firstButton = () => {
    return (
      <ic-button
        id="first-page-button"
        aria-label="Go to first page"
        size="small"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickFirst}
        class="page-button first-last"
        disabled={this.currentPage === 1}
        variant="icon"
        innerHTML={paginationFirst}
      />
    );
  };
  private previousButton = () => {
    return (
      <ic-button
        id="previous-page-button"
        aria-label="Go to previous page"
        size="small"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickPrevious}
        class="page-button next-previous"
        disabled={this.currentPage === 1}
        variant="icon"
        innerHTML={paginationPrevious}
      />
    );
  };
  private nextButton = () => {
    return (
      <ic-button
        id="next-page-button"
        aria-label="Go to next page"
        size="small"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickNext}
        class="page-button next-previous"
        disabled={this.currentPage === this.pages}
        variant="icon"
        innerHTML={paginationNext}
      />
    );
  };
  private lastButton = () => {
    return (
      <ic-button
        id="last-page-button"
        aria-label="Go to last page"
        size="small"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickLast}
        class="page-button first-last"
        disabled={this.currentPage === this.pages}
        variant="icon"
        innerHTML={paginationLast}
      />
    );
  };

  // transforms the pages count into an array to be iterated over in the adjacentBoundaryCalculator
  private pagesToArray = (pages: number) => {
    const items = [];
    for (let i = 1; i <= pages; i++) {
      items.push(i);
    }
    return items;
  };

  // used in the adjacentBoundaryCalculator to calculate the number needed to standardise width across complex pagination 'start', 'middle' and 'end' states
  private ABCalc = (a: number, b: number): number => {
    let result: number;
    if (a === 2 && b === 2) result = 8;
    if (a === 2 && b === 1) result = 7;
    if ((a === 2 && b === 0) || (a === 1 && b === 2)) result = 6;
    if (a === 1 && b === 1) result = 5;
    if ((a === 1 && b === 0) || (a === 0 && b === 2)) result = 4;
    if (a === 0 && b === 0) result = 2;
    if (a === 0 && b === 1) result = 3;
    return result;
  };

  // renders the 'start', 'middle' and 'end' states used in complex pagination
  private adjacentBoundaryCalculator = (
    pagesArray: number[],
    adjacentCount: number,
    boundaryCount: number,
    currentPage: number
  ) => {
    const ellipsis: HTMLElement = (
      <ic-pagination-item appearance={this.appearance} type="ellipsis" />
    );
    const width = this.ABCalc(adjacentCount, boundaryCount);
    //! Starting state
    if (currentPage >= 1 && currentPage <= width) {
      return [
        pagesArray.slice(0, width).map((page: number) => {
          return (
            <ic-pagination-item
              appearance={this.appearance}
              selected={page === currentPage}
              type="page"
              page={page}
            />
          );
        }),
        ellipsis,
        boundaryCount > 0 &&
          pagesArray.slice(-boundaryCount).map((page: number) => {
            return (
              <ic-pagination-item
                appearance={this.appearance}
                selected={page === currentPage}
                type="page"
                page={page}
              />
            );
          }),
      ];
    }

    //! Middle state
    if (currentPage >= width + 1 && currentPage <= pagesArray.length - width) {
      return [
        pagesArray.slice(0, boundaryCount).map((page: number) => {
          return (
            <ic-pagination-item
              appearance={this.appearance}
              selected={page === currentPage}
              type="page"
              page={page}
            />
          );
        }),
        ellipsis,
        pagesArray
          .slice(currentPage - (adjacentCount + 1), currentPage + adjacentCount)
          .map((page: number) => {
            return (
              <ic-pagination-item
                appearance={this.appearance}
                selected={page === currentPage}
                type="page"
                page={page}
              />
            );
          }),
        ellipsis,
        boundaryCount > 0 &&
          pagesArray.slice(boundaryCount * -1).map((page: number) => {
            return (
              <ic-pagination-item
                appearance={this.appearance}
                selected={page === currentPage}
                type="page"
                page={page}
              />
            );
          }),
      ];
    }

    //! End state
    return [
      boundaryCount > 0 &&
        pagesArray.slice(0, boundaryCount).map((page: number) => {
          return (
            <ic-pagination-item
              appearance={this.appearance}
              selected={page === currentPage}
              type="page"
              page={page}
            />
          );
        }),
      ellipsis,
      pagesArray.slice(-width, pagesArray.length).map((page: number) => {
        return (
          <ic-pagination-item
            appearance={this.appearance}
            selected={page === currentPage}
            type="page"
            page={page}
          />
        );
      }),
    ];
  };

  render() {
    const {
      type,
      pages,
      pagesToArray,
      currentPage,
      hideCurrentPage,
      adjacentBoundaryCalculator,
      adjacentCount,
      boundaryCount,
      loading,
      hideFirstPageButton,
      hideLastPageButton,
    } = this;

    return (
      <Host>
        {type === "simple" && (
          <nav
            class={{
              ["loading"]: loading,
            }}
          >
            {hideFirstPageButton ? null : this.firstButton()}
            {this.previousButton()}
            {hideCurrentPage ? null : (
              <ic-pagination-item
                pages={pages}
                appearance={this.appearance}
                type="simple-current"
                page={currentPage}
              />
            )}
            {this.nextButton()}
            {hideLastPageButton ? null : this.lastButton()}
          </nav>
        )}
        {type === "complex" && (
          <nav
            class={{
              ["loading"]: loading,
            }}
          >
            {this.hideFirstPageButton ? null : this.firstButton()}
            {this.previousButton()}
            {adjacentBoundaryCalculator(
              pagesToArray(pages),
              adjacentCount,
              boundaryCount,
              currentPage
            )}
            {this.nextButton()}
            {this.hideLastPageButton ? null : this.lastButton()}
          </nav>
        )}
      </Host>
    );
  }
}
