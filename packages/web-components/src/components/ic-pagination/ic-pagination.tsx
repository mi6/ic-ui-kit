import {
  Component,
  Element,
  Host,
  Prop,
  h,
  Listen,
  State,
  Watch,
  Event,
  EventEmitter,
  Method,
} from "@stencil/core";
import paginationNextPrevious from "../../assets/pagination-next-previous.svg";
import paginationFirstLast from "../../assets/pagination-first-last.svg";
import { IcThemeForeground } from "../../utils/types";
import { IcPaginationTypes, IcChangeEventDetail } from "./ic-pagination.types";
import {
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
} from "../../utils/helpers";

@Component({
  tag: "ic-pagination",
  styleUrl: "ic-pagination.css",
  shadow: true,
})
export class Pagination {
  @Element() el: HTMLIcPaginationElement;

  @State() endEllipsis: boolean = false;
  @State() endItems: number[] = [];
  @State() midItems: number[] = [];
  @State() startEllipsis: boolean = false;
  @State() startItems: number[] = [];

  /**
   * The number of pages displayed adjacent to the current page when using 'complex' type pagination. Accepted values are 0, 1 & 2.
   */
  @Prop({ mutable: true }) adjacentCount: number = 1;

  /**
   * The appearance of the pagination, e.g. dark, light or the default.
   */
  @Prop() appearance: IcThemeForeground = "default";

  /**
   * The number of pages displayed as boundary items to the current page when using 'complex' type pagination. Accepted values are 0, 1 & 2.
   */
  @Prop({ mutable: true }) boundaryCount: number = 1;

  /**
   * The default page to display.
   */
  @Prop() defaultPage: number = 1;

  /**
   * If `true`, the pagination will not allow interaction.
   */
  @Prop() disabled: boolean = false;

  /**
   * If `true`, the current page of the simple pagination will not be displayed.
   */
  @Prop() hideCurrentPage: boolean = false;

  /**
   * If `true`, the first and last page buttons will not be displayed.
   */
  @Prop() hideFirstAndLastPageButton: boolean = false;

  /**
   * The label for the pagination item (applicable when simple pagination is being used).
   */
  @Prop() label: string = "Page";

  /**
   * The total number of pages.
   */
  @Prop() pages!: number;

  @Watch("pages")
  watchNumberPagesHandler(): void {
    this.watchPageChangeHandler();
  }

  /**
   * The type of pagination to be used.
   */
  @Prop() type: IcPaginationTypes = "simple";

  /**
   * The current page displayed by the pagination.
   */
  @Prop({ mutable: true }) currentPage: number = this.defaultPage;

  @Watch("currentPage")
  watchPageChangeHandler(): void {
    if (this.type === "simple") {
      return;
    }

    this.startEllipsis = false;
    this.endEllipsis = false;
    this.startItems = [];
    this.endItems = [];
    this.midItems = [];

    const startItems = [];
    let startItemCount = 0;
    const endItems = [];
    let endStart = this.pages;
    const midItems = [];
    let midStart;
    let midEnd;
    let startEllipsis = false;
    let endEllipsis = false;

    if (this.pages <= this.boundaryCount * 2 + this.adjacentCount * 2 + 3) {
      this.startEllipsis = false;
      this.endEllipsis = false;
      for (let i = 1; i <= this.pages; i++) {
        startItems.push(i);
      }
      this.startItems = startItems;
      return;
    }

    startItemCount = this.boundaryCount === 0 ? 1 : this.boundaryCount;
    endStart =
      this.boundaryCount === 0
        ? this.pages
        : this.pages - this.boundaryCount + 1;

    if (this.currentPage <= this.adjacentCount + this.boundaryCount + 2) {
      startEllipsis = false;
      endEllipsis = true;

      let numItems = 2 * this.adjacentCount + 1;
      if (this.boundaryCount === 0) {
        numItems--;
      }
      midStart = startItemCount + 1;
      midEnd = midStart + numItems;
    } else {
      startEllipsis = true;
      if (
        this.currentPage >
        this.pages - (this.adjacentCount + this.boundaryCount + 2)
      ) {
        let numItems = 2 * this.adjacentCount + 1;
        if (this.boundaryCount === 0) {
          numItems--;
        }
        midEnd =
          this.boundaryCount === 0
            ? this.pages - 1
            : this.pages - this.boundaryCount;
        midStart = midEnd - numItems;
      } else {
        endEllipsis = true;
        midStart = this.currentPage - this.adjacentCount;
        midEnd = this.currentPage + this.adjacentCount;
      }
    }

    //create array of start items
    if (
      this.boundaryCount > 0 ||
      (this.boundaryCount === 0 && startEllipsis === false)
    ) {
      for (let i = 1; i <= startItemCount; i++) {
        startItems.push(i);
      }
    }

    //create array of end items
    if (
      this.boundaryCount > 0 ||
      (this.boundaryCount === 0 && endEllipsis === false)
    ) {
      for (let i = endStart; i <= this.pages; i++) {
        endItems.push(i);
      }
    }

    //create array of mid items
    for (let i = midStart; i <= midEnd; i++) {
      midItems.push(i);
    }

    this.startEllipsis = startEllipsis;
    this.endEllipsis = endEllipsis;
    this.startItems = startItems;
    this.endItems = endItems;
    this.midItems = midItems;
  }

  /**
   * Emitted when a page is selected.
   */
  @Event() icPageChange: EventEmitter<IcChangeEventDetail>;

  componentWillLoad(): void {
    this.watchPageChangeHandler();
    if (this.boundaryCount > 2) {
      this.boundaryCount = 2;
    }
    if (this.adjacentCount > 2) {
      this.adjacentCount = 2;
    }

    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.pages, propName: "pages" }],
      "Pagination"
    );
  }

  @Listen("paginationItemClick")
  paginationItemClickHandler(ev: CustomEvent): void {
    const page = ev.detail.page;
    this.currentPage = page;
    this.icPageChange.emit({ value: this.currentPage });
  }

  /**
   * Sets the currently displayed page.
   */
  @Method()
  async setCurrentPage(page: number): Promise<void> {
    if (typeof page === "number" && page > 0 && page <= this.pages) {
      this.currentPage = page;
    } else {
      console.error(
        "Current page must be a number greater than zero but less than or equal to the total number of pages"
      );
    }
  }

  private handleClickFirst = () => {
    this.currentPage = 1;
    this.icPageChange.emit({ value: this.currentPage });
  };

  private handleClickPrevious = (): void => {
    this.currentPage--;
    this.icPageChange.emit({ value: this.currentPage });
  };

  private handleClickNext = (): void => {
    this.currentPage++;
    this.icPageChange.emit({ value: this.currentPage });
  };

  private handleClickLast = (): void => {
    this.currentPage = this.pages;
    this.icPageChange.emit({ value: this.currentPage });
  };

  // button rendering abstracted from component render methods for clarity
  private firstButton = () => {
    return (
      <ic-button
        id="first-page-button"
        aria-label="Go to first page"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickFirst}
        class="page-button first-last"
        disabled={this.currentPage === 1 || this.disabled}
        variant="icon"
        innerHTML={paginationFirstLast}
      />
    );
  };

  private previousButton = () => {
    return (
      <ic-button
        id="previous-page-button"
        aria-label="Go to previous page"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickPrevious}
        class="page-button next-previous flip"
        disabled={this.currentPage === 1 || this.disabled}
        variant="icon"
        innerHTML={paginationNextPrevious}
      />
    );
  };

  private nextButton = () => {
    return (
      <ic-button
        id="next-page-button"
        aria-label="Go to next page"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickNext}
        class="page-button next-previous"
        disabled={this.currentPage === this.pages || this.disabled}
        variant="icon"
        innerHTML={paginationNextPrevious}
      />
    );
  };

  private lastButton = () => {
    return (
      <ic-button
        id="last-page-button"
        aria-label="Go to last page"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickLast}
        class="page-button first-last flip"
        disabled={this.currentPage === this.pages || this.disabled}
        variant="icon"
        innerHTML={paginationFirstLast}
      />
    );
  };

  private renderStartEllipsis = () => {
    return (
      <ic-pagination-item
        appearance={this.appearance}
        type="ellipsis"
        id="start-ellipsis"
        disabled={this.disabled}
      />
    );
  };

  private renderEndEllipsis = () => {
    return (
      <ic-pagination-item
        appearance={this.appearance}
        type="ellipsis"
        id="end-ellipsis"
        disabled={this.disabled}
      />
    );
  };

  private renderStartItems = () => {
    return this.startItems.map((page: number) => {
      return (
        <ic-pagination-item
          appearance={this.appearance}
          selected={page === this.currentPage}
          id={`pagination-item-${page}`}
          type="page"
          page={page}
          disabled={this.disabled}
        />
      );
    });
  };

  private renderEndItems = () => {
    return this.endItems.map((page: number) => {
      return (
        <ic-pagination-item
          appearance={this.appearance}
          selected={page === this.currentPage}
          id={`pagination-item-${page}`}
          type="page"
          page={page}
          disabled={this.disabled}
        />
      );
    });
  };

  private renderMiddleItems = () => {
    return this.midItems.map((page: number) => {
      return (
        <ic-pagination-item
          appearance={this.appearance}
          selected={page === this.currentPage}
          id={`pagination-item-${page}`}
          type="page"
          page={page}
          disabled={this.disabled}
        />
      );
    });
  };

  render() {
    const {
      type,
      pages,
      currentPage,
      hideCurrentPage,
      disabled,
      hideFirstAndLastPageButton,
      label,
    } = this;

    return (
      <Host>
        {type === "simple" && (
          <nav
            class={{
              ["disabled"]: disabled,
            }}
            role="navigation"
            aria-label="Pagination Navigation"
          >
            {hideFirstAndLastPageButton ? null : this.firstButton()}
            {this.previousButton()}
            <ic-pagination-item
              pages={pages}
              appearance={this.appearance}
              type="simple-current"
              page={currentPage}
              label={label}
              class={{ ["hide-current-page"]: hideCurrentPage }}
            />
            {this.nextButton()}
            {hideFirstAndLastPageButton ? null : this.lastButton()}
          </nav>
        )}
        {type === "complex" && (
          <nav
            class={{
              ["disabled"]: disabled,
            }}
            role="navigation"
            aria-label="Pagination Navigation"
          >
            {hideFirstAndLastPageButton ? null : this.firstButton()}
            {this.previousButton()}
            {this.renderStartItems()}
            {this.startEllipsis && this.renderStartEllipsis()}
            {this.renderMiddleItems()}
            {this.endEllipsis && this.renderEndEllipsis()}
            {this.renderEndItems()}
            {this.nextButton()}
            {hideFirstAndLastPageButton ? null : this.lastButton()}
          </nav>
        )}
      </Host>
    );
  }
}
