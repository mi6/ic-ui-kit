/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Component,
  Prop,
  Element,
  Event,
  EventEmitter,
  State,
  Listen,
  h,
  Watch,
  Host,
} from "@stencil/core";
import { IcThemeMode } from "../../utils/types";
import { capitalize, checkResizeObserver } from "../../utils/helpers";
import {
  IcItemsPerPageChangeEventDetail,
  IcPageChangeEventDetail,
} from "./ic-pagination-bar.types";
import {
  IcPaginationAlignmentOptions,
  IcPaginationLabelTypes,
  IcPaginationTypes,
} from "@ukic/web-components/dist/types/components/ic-pagination/ic-pagination.types";

@Component({
  tag: "ic-pagination-bar",
  styleUrl: "ic-pagination-bar.css",
  shadow: true,
})
export class PaginationBar {
  private PAGE_INPUT_FIELD_ID = "go-to-page-input";

  private INVALID_PAGE_ERROR = "Please enter a valid page";

  private resizeObserver: ResizeObserver | null = null;
  private pageDropdownEl: HTMLIcSelectElement;
  private pageInputEl: HTMLIcTextFieldElement;
  private pageInputTooltipEl: HTMLIcTooltipElement;
  private paginationBarEl?: HTMLElement;
  private paginationEl: HTMLIcPaginationElement;
  private userSetItemsPerPage: number;

  @Element() el: HTMLIcPaginationBarElement;

  @State() capitalizedItemLabel: string;

  @State() capitalizedPageLabel: string;

  @State() activePage: number = 1;

  @State() displayedItemsPerPageOptions?: {
    label: string;
    value: string;
  }[];

  @State() inputError: string = "Please enter a valid page";

  @State() itemsPerPage: number = 10;

  @State() itemsPerPageString: string = "10";

  @State() lowerBound: number = 1;

  @State() lowerCaseItemLabel: string;

  @State() lowerCasePageLabel: string;

  @State() paginationWidth: number;

  @State() paginationWrapped: boolean = false;

  @State() totalPages: number;

  @State() upperBound: number;

  /**
   * The accessible label passed down to the pagination component to provide context for screen reader users.
   */
  @Prop() accessibleLabel?: string = "Pagination Navigation";

  /**
   * Sets the alignment of the items in the pagination bar.
   */
  @Prop() alignment?: IcPaginationAlignmentOptions = "right";

  /**
   * The current page number to be displayed on the pagination bar.
   */
  @Prop() currentPage?: number = 1;

  @Watch("currentPage")
  watchPageNumberHandler(): void {
    this.setPaginationBarContent();

    if (typeof this.currentPage === "number" && this.currentPage) {
      if (
        this.currentPage < 1 ||
        (this.totalPages && this.currentPage > this.totalPages)
      ) {
        console.error(
          `The current page (${this.currentPage}) must be a number greater than zero but less than or equal to the total number of pages (${this.totalPages})`
        );
      } else {
        this.activePage = this.currentPage;
      }
    }
  }

  /**
   * The items per page option to be selected.
   */
  @Prop() selectedItemsPerPage?: number;

  @Watch("selectedItemsPerPage")
  watchSelectedItemsPerPageHandler(): void {
    if (
      this.selectedItemsPerPage !== null &&
      this.selectedItemsPerPage !== undefined
    ) {
      this.setSelectedItemsPerPage(
        this.selectedItemsPerPage,
        this.displayedItemsPerPageOptions
      );
    }
  }

  /**
   * If `true`, the 'All' option will be hidden from the 'items per page' select input.
   */
  @Prop() hideAllFromItemsPerPage?: boolean = false;

  /**
   * If `true`, the current page of the simple pagination will not be displayed.
   */
  @Prop() hideCurrentPage?: boolean = false;

  /**
   * If `true`, the first and last page buttons will not be displayed.
   */
  @Prop() hideFirstAndLastPageButton?: boolean = false;

  /**
   * The text which will be used in place of 'Item' on the pagination bar.
   */
  @Prop() itemLabel?: string = "Item";

  @Watch("itemLabel")
  watchItemLabelHandler(): void {
    this.capitalizedItemLabel = capitalize(this.itemLabel!);
    this.lowerCaseItemLabel = this.itemLabel!.toLowerCase();
  }

  /**
   * The options which will be displayed for 'items per page' select input.
   */
  @Prop() itemsPerPageOptions?: {
    label: string;
    value: string;
  }[];

  @Watch("itemsPerPageOptions")
  watchItemsPerPageOptionsHandler(
    newVal: {
      label: string;
      value: string;
    }[],
    oldVal: {
      label: string;
      value: string;
    }[]
  ): void {
    if (JSON.stringify(newVal) === JSON.stringify(oldVal)) return;
    this.setPaginationBarContent();
  }

  /**
   * If `true`, the pagination bar will display as black in the light theme, and white in dark theme.
   */
  @Prop() monochrome?: boolean = false;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * Whether the displayed pagination is simple or complex.
   */
  @Prop() type?: IcPaginationTypes = "simple";

  /**
   * Whether total number of items and current item range or total number of pages and current page is displayed.
   */
  @Prop() rangeLabelType?: IcPaginationLabelTypes = "page";

  /**
   * The text which will be used in place of 'Page' on the pagination bar.
   */
  @Prop() pageLabel?: string = "Page";

  @Watch("pageLabel")
  watchPageLabelHandler(): void {
    this.capitalizedPageLabel = capitalize(this.pageLabel!);
    this.lowerCasePageLabel = this.pageLabel!.toLowerCase();
  }

  /**
   * If `true`, the 'go to page' control should be displayed.
   */
  @Prop() showGoToPageControl?: boolean = false;

  /**
   * If `true`, the number of total items and current item range or number of total pages and current page will be hidden.
   */
  @Prop() hideRangeLabel?: boolean = false;

  /**
   * If `false`, the value in the items per page control will be set immediately on ArrowUp and ArrowDown instead of when Enter is pressed.
   */
  @Prop() selectItemsPerPageOnEnter: boolean = true;

  /**
   * If `true`, the select input to control 'items per page' should be displayed.
   */
  @Prop() showItemsPerPageControl?: boolean = false;

  /**
   * Total number of items to be displayed across all pages.
   */
  @Prop() totalItems!: number;

  @Watch("totalItems")
  watchTotalItemsHandler(): void {
    this.setPaginationBarContent();
  }

  /**
   If `true`, the pagination bar is set to the first page when the 'items per page' changes
   */
  @Prop() setToFirstPageOnPaginationChange?: boolean = false;

  @Watch("setToFirstPageOnPaginationChange")
  watchSetToFirstPageOnPaginationChange(): void {
    this.setPaginationBarContent();
  }

  /**
   * Emitted when a page is navigated to via the 'go to' input.
   * The `detail` property contains `value` (i.e. the page number) and a `fromItemsPerPage` flag to indicate if the event was triggered by the `icItemsPerPageChange` event also occurring.
   */
  @Event() icPageChange: EventEmitter<IcPageChangeEventDetail>;

  /**
   * Emitted when the items per page option is changed.
   */
  @Event() icItemsPerPageChange: EventEmitter<IcItemsPerPageChangeEventDetail>;

  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
  }

  componentWillLoad(): void {
    this.watchPageNumberHandler();
    this.watchPageLabelHandler();
    this.watchItemLabelHandler();
    this.setPaginationBarContent();
  }

  componentDidLoad(): void {
    this.paginationWidth = this.paginationBarEl?.clientWidth || 0;
    checkResizeObserver(this.runResizeObserver);
    const textField = this.el.shadowRoot?.querySelector(
      `.${this.PAGE_INPUT_FIELD_ID}`
    );
    if (textField) {
      const input = textField?.shadowRoot?.querySelector("input");
      if (input) {
        input.style.textAlign = "center";
        input.style.padding = "0";
      }
    }
    this.paginationShouldWrap();
  }

  @Listen("icPageChange")
  pageChangeHandler(ev: CustomEvent): void {
    const page = ev.detail.value;
    this.changePage(page);
  }

  private setSelectedItemsPerPage = (
    selectedItemsPerPage: number,
    displayedItemsPerPageOptions: { label: string; value: string }[] = []
  ) => {
    const isSelectedItemsPerPagePresent = displayedItemsPerPageOptions?.some(
      ({ value }) => value === this.selectedItemsPerPage?.toString()
    );
    if (isSelectedItemsPerPagePresent) {
      this.setItemsPerPage(selectedItemsPerPage, false);
    } else {
      console.error(
        `The selected items per page option "${this.selectedItemsPerPage}" does not exist`
      );
      this.setItemsPerPage(+this.totalItems, false);
    }
  };

  private changeItemsPerPage = () => {
    this.setItemsPerPage(Number(this.pageDropdownEl.value));

    this.userSetItemsPerPage = Number(this.pageDropdownEl.value);
  };

  private changePage = (page: number) => {
    this.activePage = page;
    this.lowerBound = page !== 1 ? (page - 1) * this.itemsPerPage + 1 : page;
    this.setUpperBound();
  };

  private focusElFromLabel = (el: "ic-select" | "ic-text-field") => {
    this.paginationBarEl?.querySelector(el)?.setFocus();
  };

  private goToPage = () => {
    const input = this.pageInputEl;
    const page = Number(input.value);
    if (page <= this.totalPages && page > 0) {
      this.changePage(page);
      this.paginationEl?.setCurrentPage(page);
      this.activePage = page;
      input.value = "";
      this.icPageChange.emit({ value: page });
      this.pageInputTooltipEl.displayTooltip(false, false);
      input.validationStatus = "";
    } else {
      this.setInputError(input, this.INVALID_PAGE_ERROR);
    }
  };

  private goToPageLabelClickHandler = () => {
    this.focusElFromLabel("ic-text-field");
  };

  private handleBlur = () => {
    const textField = this.pageInputEl;
    if (
      (Number(textField.value) <= this.totalPages &&
        Number(textField.value) > 0) ||
      textField.value === ""
    ) {
      textField.validationStatus = "";
    }
    this.pageInputTooltipEl.displayTooltip(false, false);
  };

  private handleFocus = () => {
    if (this.pageInputEl.validationStatus === "error") {
      this.pageInputTooltipEl.displayTooltip(true, true);
    }
  };

  private handleInputChange = () => {
    const inputValue = parseInt(this.pageInputEl.value);

    if (inputValue > this.totalPages || inputValue <= 0) {
      this.setInputError(this.pageInputEl, this.INVALID_PAGE_ERROR);
      this.pageInputTooltipEl.displayTooltip(true, true);
    }
  };

  private handleKeydown = (ev: KeyboardEvent) => {
    if (ev.key === "Enter") {
      if (this.pageInputEl.validationStatus === "error") {
        this.pageInputTooltipEl.displayTooltip(true, true);
      } else {
        this.goToPage();
      }
    } else {
      this.pageInputTooltipEl.displayTooltip(false, false);
      this.pageInputEl.validationStatus = "";
    }
  };

  private handleKeyUp = (ev: KeyboardEvent) => {
    if (
      Number.isNaN(parseInt(this.pageInputEl.value)) &&
      ev.key !== "Backspace" &&
      ev.key !== "Enter" &&
      ev.key !== "Tab" &&
      ev.key !== "Shift"
    ) {
      this.setInputError(this.pageInputEl, "Please enter a number", false);
      this.pageInputTooltipEl.displayTooltip(true, false);
    }
  };

  private itemsPerPageLabelClickHandler = () => {
    this.focusElFromLabel("ic-select");
  };

  private paginationShouldWrap = () => {
    if (this.type === "simple") {
      this.paginationWrapped = this.paginationEl.clientHeight > 63;
    }
  };

  private runResizeObserver = () => {
    if (this.paginationBarEl) {
      this.resizeObserver = new ResizeObserver(() => {
        const { clientWidth } = this.paginationBarEl!;
        if (
          clientWidth - this.paginationWidth > 50 ||
          clientWidth - this.paginationWidth < -50
        ) {
          this.paginationWidth = clientWidth;
          this.paginationShouldWrap();
        }
      });

      this.resizeObserver.observe(this.paginationBarEl);
    }
  };

  private setInputError = (
    el: HTMLIcTextFieldElement,
    error: string,
    focus = true
  ) => {
    this.inputError = error;
    el.validationStatus = "error";
    if (focus) el.setFocus();
  };

  private setToFirstPage = () => {
    const firstPage = 1;
    this.changePage(firstPage);
    this.paginationEl?.setCurrentPage(firstPage);
    this.activePage = firstPage;
    this.icPageChange.emit({ value: firstPage });
  };

  private setItemsPerPage = (newValue: number, isUserAction = true) => {
    if (this.itemsPerPage !== newValue) {
      this.itemsPerPage = newValue;
      this.itemsPerPageString = newValue.toString();
      this.icItemsPerPageChange.emit({
        value: this.itemsPerPage,
        isUserAction,
      });

      if (this.setToFirstPageOnPaginationChange) {
        this.setToFirstPage();
      }
    }

    this.totalPages =
      this.totalItems > this.itemsPerPage
        ? Math.ceil(this.totalItems / this.itemsPerPage)
        : 1;

    this.setUpperBound();
    if (this.activePage > this.totalPages) {
      this.paginationEl?.setCurrentPage(this.totalPages);
      this.activePage = this.totalPages;
    }
    this.icPageChange.emit({ value: this.activePage, fromItemsPerPage: true });
  };

  private setPaginationBarContent = (): void => {
    const clonedItemsPerPageOptions: {
      label: string;
      value: string;
    }[] = this.itemsPerPageOptions
      ? JSON.parse(JSON.stringify(this.itemsPerPageOptions))
      : null;

    const displayedItemsPerPageOptions =
      clonedItemsPerPageOptions ||
      (this.totalItems <= 100
        ? [
            { label: "10", value: "10" },
            { label: "25", value: "25" },
            { label: "50", value: "50" },
          ]
        : [
            { label: "25", value: "25" },
            { label: "100", value: "100" },
            { label: "1000", value: "1000" },
          ]);

    !this.hideAllFromItemsPerPage &&
      displayedItemsPerPageOptions.push({
        label: "All",
        value: String(this.totalItems),
      });

    this.displayedItemsPerPageOptions = displayedItemsPerPageOptions.filter(
      ({ value }) => this.totalItems >= Number(value)
    );

    let lastOptionValue = 0;

    if (this.userSetItemsPerPage) {
      this.displayedItemsPerPageOptions.some(({ value }) => {
        lastOptionValue = Number(value);
        return this.userSetItemsPerPage <= lastOptionValue;
      });
      this.setItemsPerPage(lastOptionValue);
    } else {
      if (
        this.selectedItemsPerPage !== null &&
        this.selectedItemsPerPage !== undefined
      ) {
        this.setSelectedItemsPerPage(
          this.selectedItemsPerPage,
          this.displayedItemsPerPageOptions
        );
      } else {
        const updated = this.displayedItemsPerPageOptions.some(({ value }) => {
          lastOptionValue = Number(value);
          return this.itemsPerPage <= lastOptionValue;
        });
        this.setItemsPerPage(
          updated || (!updated && this.itemsPerPage > lastOptionValue)
            ? lastOptionValue
            : this.itemsPerPage,
          false
        );
      }
    }
  };

  private setUpperBound = () => {
    this.upperBound = Math.min(
      this.lowerBound + this.itemsPerPage - 1,
      this.totalItems
    );
  };

  render() {
    const {
      accessibleLabel,
      alignment,
      displayedItemsPerPageOptions,
      PAGE_INPUT_FIELD_ID,
      type,
      rangeLabelType,
      hideRangeLabel,
      showItemsPerPageControl,
      showGoToPageControl,
      pageLabel,
      capitalizedPageLabel,
      lowerCasePageLabel,
      capitalizedItemLabel,
      lowerCaseItemLabel,
      totalPages,
      activePage,
      itemsPerPageString,
      theme,
      monochrome,
      selectItemsPerPageOnEnter,
      hideCurrentPage,
      hideFirstAndLastPageButton,
    } = this;

    return (
      <Host class={{ [`ic-theme-${theme}`]: theme !== "inherit" }}>
        <div
          class={{
            ["pagination-bar"]: true,
            [`pagination-bar-${alignment}`]: true,
          }}
          ref={(el) => (this.paginationBarEl = el)}
        >
          {(!hideRangeLabel || showItemsPerPageControl) && (
            <div class="item-controls">
              {showItemsPerPageControl && (
                <div class="items-per-page-holder">
                  <ic-typography
                    class={{
                      ["items-per-page-control-label"]: true,
                    }}
                    variant="label"
                    onClick={this.itemsPerPageLabelClickHandler}
                  >
                    {capitalizedItemLabel}s per {lowerCasePageLabel}
                  </ic-typography>
                  <ic-select
                    theme={theme}
                    size="small"
                    label="items-per-page-input"
                    class="items-per-page-input"
                    hideLabel
                    options={displayedItemsPerPageOptions}
                    selectOnEnter={selectItemsPerPageOnEnter}
                    value={itemsPerPageString}
                    onIcChange={this.changeItemsPerPage}
                    ref={(el: HTMLIcSelectElement) =>
                      (this.pageDropdownEl = el)
                    }
                  ></ic-select>
                </div>
              )}
              {!hideRangeLabel &&
                (rangeLabelType === "data" ? (
                  <ic-typography
                    class={{
                      ["item-pagination-label"]: true,
                    }}
                    variant="label"
                    aria-live="polite"
                  >
                    {this.upperBound === 0 && `0 ${lowerCaseItemLabel}s`}
                    {this.upperBound > 0 &&
                      `${this.lowerBound} - ${this.upperBound} of ${
                        this.totalItems
                      } ${lowerCaseItemLabel}${this.totalItems > 1 ? "s" : ""}`}
                  </ic-typography>
                ) : (
                  <ic-typography
                    class={{
                      ["page-pagination-label"]: true,
                    }}
                    variant="label"
                    aria-live="polite"
                  >
                    {capitalizedPageLabel} {activePage} of {totalPages}
                  </ic-typography>
                ))}
            </div>
          )}
          <div
            class={{
              ["pagination-controls"]: true,
              ["pagination-controls-wrap"]: this.paginationWrapped,
            }}
          >
            <div class="pagination-holder">
              <ic-pagination
                accessibleLabel={accessibleLabel}
                type={type}
                pages={totalPages}
                label={pageLabel}
                ref={(el: HTMLIcPaginationElement) => (this.paginationEl = el)}
                currentPage={activePage}
                theme={theme}
                monochrome={monochrome}
                hideCurrentPage={hideCurrentPage}
                hideFirstAndLastPageButton={hideFirstAndLastPageButton}
              ></ic-pagination>
            </div>
            {showGoToPageControl && (
              <div class="go-to-page-holder">
                <ic-typography
                  variant="label"
                  onClick={this.goToPageLabelClickHandler}
                >
                  Go to {lowerCasePageLabel}
                </ic-typography>
                <ic-tooltip
                  label={this.inputError}
                  target={`#${PAGE_INPUT_FIELD_ID}`}
                  disableHover
                  disableClick
                  ref={(el: HTMLIcTooltipElement) =>
                    (this.pageInputTooltipEl = el)
                  }
                >
                  <ic-text-field
                    theme={theme}
                    type="number"
                    size="small"
                    label={PAGE_INPUT_FIELD_ID}
                    class={PAGE_INPUT_FIELD_ID}
                    id={PAGE_INPUT_FIELD_ID}
                    hideLabel
                    onKeyDown={this.handleKeydown}
                    onKeyUp={this.handleKeyUp}
                    onInput={this.handleInputChange}
                    max={totalPages}
                    min="1"
                    validationInlineInternal
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    ref={(el: HTMLIcTextFieldElement) =>
                      (this.pageInputEl = el)
                    }
                  ></ic-text-field>
                </ic-tooltip>
                <ic-button
                  variant="secondary"
                  onClick={this.goToPage}
                  size="small"
                  class="go-to-page-button"
                >
                  Go
                </ic-button>
              </div>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
