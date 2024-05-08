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
} from "@stencil/core";
import { IcThemeForeground } from "@ukic/web-components/dist/types/interface";
import { checkResizeObserver } from "../../utils/helpers";
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
  private NAN_ERROR = "Please enter a number";

  private resizeObserver: ResizeObserver = null;
  private pageDropdownEl: HTMLIcSelectElement;
  private pageInputEl: HTMLIcTextFieldElement;
  private pageInputTooltipEl: HTMLIcTooltipElement;
  private paginationBarEl: HTMLElement;
  private paginationEl: HTMLIcPaginationElement;

  @Element() el: HTMLIcPaginationBarElement;

  @State() currentPage: number = 1;

  @State() displayedItemsPerPageOptions?: {
    label: string;
    value: string;
  }[];

  @State() inputError: string = "Please enter a valid page";

  @State() itemsPerPage: number = 0;

  @State() lowerBound: number = 1;

  @State() paginationWidth: number;

  @State() paginationWrapped: boolean = false;

  @State() totalPages: number;

  @State() upperBound: number;

  /**
   * Sets the alignment of the items in the pagination bar.
   */
  @Prop() alignment?: IcPaginationAlignmentOptions = "right";

  /**
   * Sets the styling for the items in the pagination bar.
   */
  @Prop() appearance?: IcThemeForeground = "default";

  /**
   * The label which will be used in place of 'items' if type is data. Should be capitalised.
   */
  @Prop() rangeItemLabel?: string = "Item";

  /**
   * The options which will be displayed for 'items per page' select input. Set a maximum of 4 options including a required 'All' option with value equal to total number of items.
   */
  @Prop() itemsPerPageOptions?: {
    label: string;
    value: string;
  }[];

  @Watch("itemsPerPageOptions")
  watchItemsPerPageOptionsHandler(): void {
    this.setPaginationBarContent();
  }

  /**
   * Whether the displayed pagination is simple or complex.
   */
  @Prop() type?: IcPaginationTypes = "simple";

  /**
   * Whether total number of items and current item range or total number of pages and current page is displayed.
   */
  @Prop() rangeLabelType?: IcPaginationLabelTypes = "page";

  /**
   * The label which will be used in place of 'Page' if rangeLabelType is page. Should be capitalised.
   */
  @Prop() pageLabel?: string = "Page";

  /**
   * If `true`, the 'go to page' control should be displayed.
   */
  @Prop() showGoToPageControl?: boolean = false;

  /**
   * If `true`, the number of total items and current item range or number of total pages and current page will be hidden.
   */
  @Prop() hideRangeLabel?: boolean = false;

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
   * Emitted when a page is navigated to via the 'go to' input.
   */
  @Event() icPageChange: EventEmitter<{ value: number }>;

  /**
   * Emitted when the items per page option is changed.
   */
  @Event() icItemsPerPageChange: EventEmitter<{ value: number }>;

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }
  }

  componentWillLoad(): void {
    this.setPaginationBarContent();
  }

  componentDidLoad(): void {
    this.paginationWidth = this.paginationBarEl.clientWidth;
    checkResizeObserver(this.runResizeObserver);
    this.setGoToPageInputStyles();
    this.paginationShouldWrap();
  }

  @Listen("icPageChange")
  pageChangeHandler(ev: CustomEvent): void {
    const page = ev.detail.value;
    this.changePage(page);
  }

  private changeItemsPerPage = () => {
    this.setItemsPerPage(Number(this.pageDropdownEl.value));
  };

  private changePage = (page: number) => {
    this.currentPage = page;
    this.lowerBound = page !== 1 ? (page - 1) * this.itemsPerPage + 1 : page;
    this.setUpperBound();
  };

  private goToPage = () => {
    const input = this.pageInputEl;
    const page = Number(input.value);
    if (page <= this.totalPages && page > 0) {
      this.changePage(page);
      this.paginationEl.setCurrentPage(page);
      this.currentPage = page;
      input.value = "";
      this.icPageChange.emit({ value: page });
      this.pageInputTooltipEl.displayTooltip(false, false);
      input.validationStatus = "";
    } else {
      this.setInputError(input, this.INVALID_PAGE_ERROR);
    }
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
    const textField = this.pageInputEl;
    const inputValue = parseInt(textField.value);

    if (inputValue > this.totalPages || inputValue <= 0) {
      this.setInputError(textField, this.INVALID_PAGE_ERROR);
      this.pageInputTooltipEl.displayTooltip(true, true);
    }
  };

  private handleKeydown = (ev: KeyboardEvent) => {
    const tooltip = this.pageInputTooltipEl;
    const textField = this.pageInputEl;

    if (ev.key === "Enter") {
      if (textField.validationStatus === "error") {
        tooltip.displayTooltip(true, true);
      } else {
        this.goToPage();
      }
    } else {
      tooltip.displayTooltip(false, false);
      textField.validationStatus = "";
    }
  };

  private handleKeyUp = (ev: KeyboardEvent) => {
    const textField = this.pageInputEl;
    const inputValue = parseInt(textField.value);

    if (
      Number.isNaN(inputValue) &&
      ev.key !== "Backspace" &&
      ev.key !== "Enter" &&
      ev.key !== "Tab" &&
      ev.key !== "Shift"
    ) {
      this.setInputError(textField, this.NAN_ERROR, false);
      this.pageInputTooltipEl.displayTooltip(true, false);
    }
  };

  private paginationShouldWrap = () => {
    if (this.type === "simple") {
      if (this.paginationEl.clientHeight > 63) {
        this.paginationWrapped = true;
      } else {
        this.paginationWrapped = false;
      }
    }
  };

  private resizeObserverCallback = (currSize: number) => {
    if (
      currSize - this.paginationWidth > 50 ||
      currSize - this.paginationWidth < -50
    ) {
      this.paginationWidth = currSize;
      this.paginationShouldWrap();
    }
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      const currSize = this.paginationBarEl.clientWidth;
      this.resizeObserverCallback(currSize);
    });

    this.resizeObserver.observe(this.paginationBarEl);
  };

  private setDisplayedItemsPerPageOptions = () => {
    if (
      this.itemsPerPageOptions === undefined ||
      this.itemsPerPageOptions === null
    ) {
      this.displayedItemsPerPageOptions =
        this.totalItems <= 100
          ? [
              { label: "10", value: "10" },
              { label: "25", value: "25" },
              { label: "50", value: "50" },
            ]
          : [
              { label: "25", value: "25" },
              { label: "100", value: "100" },
              { label: "1000", value: "1000" },
            ];
    } else {
      this.displayedItemsPerPageOptions = this.itemsPerPageOptions.slice(0, 3);
    }
  };

  private setGoToPageInputStyles = () => {
    const textField = this.el.shadowRoot?.querySelector(
      `.${this.PAGE_INPUT_FIELD_ID}`
    );
    if (textField !== undefined) {
      const input = textField?.shadowRoot?.querySelector("input");
      if (input !== undefined) {
        input.style.textAlign = "center";
        input.style.padding = "0";
      }
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

  private setItemsPerPage = (newValue: number) => {
    if (this.itemsPerPage !== newValue) {
      this.itemsPerPage = newValue;
      this.icItemsPerPageChange.emit({ value: this.itemsPerPage });
    }
    this.setNumberPages();
    this.setUpperBound();
    if (this.currentPage > this.totalPages) {
      this.paginationEl.setCurrentPage(this.totalPages);
      this.currentPage = this.totalPages;
    }
    this.icPageChange.emit({ value: this.currentPage });
  };

  private setNumberPages = () => {
    const numItemsPerPage = this.itemsPerPage;
    if (this.totalItems <= numItemsPerPage) {
      this.totalPages = 1;
    } else {
      this.totalPages = Math.ceil(this.totalItems / numItemsPerPage);
    }
  };

  private setPaginationBarContent = (): void => {
    this.setDisplayedItemsPerPageOptions();
    this.trimItemsPerPageOptions();
    this.updateItemsPerPage();
  };

  private setUpperBound = () => {
    this.upperBound = Math.min(
      this.lowerBound + this.itemsPerPage - 1,
      this.totalItems
    );
  };

  private trimItemsPerPageOptions = () => {
    this.displayedItemsPerPageOptions.push({
      label: "All",
      value: String(this.totalItems),
    });

    for (let i = 0; i < this.displayedItemsPerPageOptions.length - 1; i++) {
      if (
        this.totalItems <= Number(this.displayedItemsPerPageOptions[i].value)
      ) {
        this.displayedItemsPerPageOptions.splice(
          i,
          this.displayedItemsPerPageOptions.length - (i + 1)
        );
      }
    }
  };

  private updateItemsPerPage = () => {
    let newItemsPerPage = this.itemsPerPage;
    let updated = false;
    let lastOptionValue = 0;
    for (let i = 0; i < this.displayedItemsPerPageOptions.length; i++) {
      lastOptionValue = Number(this.displayedItemsPerPageOptions[i].value);
      if (this.itemsPerPage <= lastOptionValue) {
        newItemsPerPage = lastOptionValue;
        updated = true;
        i = this.displayedItemsPerPageOptions.length;
      }
    }
    if (!updated && this.itemsPerPage > lastOptionValue) {
      newItemsPerPage = lastOptionValue;
    }
    this.setItemsPerPage(newItemsPerPage);
  };

  render() {
    const {
      appearance,
      alignment,
      displayedItemsPerPageOptions,
      PAGE_INPUT_FIELD_ID,
      type,
      rangeLabelType,
      hideRangeLabel,
      showItemsPerPageControl,
      showGoToPageControl,
    } = this;

    const focusElFromLabel = (el: "ic-select" | "ic-text-field") => {
      this.paginationBarEl.querySelector(el)?.setFocus();
    };

    return (
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
                    [`pagination-text-${appearance}`]: true,
                    ["items-per-page-control-label"]: true,
                  }}
                  variant="label"
                  onClick={() => focusElFromLabel("ic-select")}
                >
                  {this.rangeItemLabel}s per {this.pageLabel.toLowerCase()}
                </ic-typography>
                <ic-select
                  small
                  label="items-per-page-input"
                  class="items-per-page-input"
                  hideLabel
                  options={displayedItemsPerPageOptions}
                  value={this.itemsPerPage.toString()}
                  onIcChange={() => this.changeItemsPerPage()}
                  ref={(el: HTMLIcSelectElement) => (this.pageDropdownEl = el)}
                ></ic-select>
              </div>
            )}
            {!hideRangeLabel && rangeLabelType === "data" ? (
              <ic-typography
                class={{
                  [`pagination-text-${appearance}`]: true,
                  ["item-pagination-label"]: true,
                }}
                variant="label"
                aria-live="polite"
              >
                {this.upperBound === 0 &&
                  `0 ${this.rangeItemLabel.toLowerCase()}s`}
                {this.upperBound > 0 &&
                  `${this.lowerBound} - ${this.upperBound} of ${
                    this.totalItems
                  } ${this.rangeItemLabel.toLowerCase()}${
                    this.totalItems > 1 ? "s" : ""
                  }`}
              </ic-typography>
            ) : (
              !hideRangeLabel && (
                <ic-typography
                  class={{
                    [`pagination-text-${appearance}`]: true,
                    ["page-pagination-label"]: true,
                  }}
                  variant="label"
                  aria-live="polite"
                >
                  {this.pageLabel} {this.currentPage} of {this.totalPages}
                </ic-typography>
              )
            )}
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
              appearance={appearance}
              type={type}
              pages={this.totalPages}
              ref={(el: HTMLIcPaginationElement) => (this.paginationEl = el)}
            ></ic-pagination>
          </div>
          {showGoToPageControl && (
            <div class="go-to-page-holder">
              <ic-typography
                class={{ [`pagination-text-${appearance}`]: true }}
                variant="label"
                onClick={() => focusElFromLabel("ic-text-field")}
              >
                Go to {this.pageLabel.toLowerCase()}
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
                  type="number"
                  size="small"
                  label={PAGE_INPUT_FIELD_ID}
                  class={PAGE_INPUT_FIELD_ID}
                  id={PAGE_INPUT_FIELD_ID}
                  hideLabel
                  onKeyDown={(ev: KeyboardEvent) => this.handleKeydown(ev)}
                  onKeyUp={(ev: KeyboardEvent) => this.handleKeyUp(ev)}
                  onInput={() => this.handleInputChange()}
                  max={this.totalPages}
                  min="1"
                  validationInlineInternal
                  onBlur={() => this.handleBlur()}
                  onFocus={() => this.handleFocus()}
                  ref={(el: HTMLIcTextFieldElement) => (this.pageInputEl = el)}
                ></ic-text-field>
              </ic-tooltip>
              <ic-button
                appearance={appearance}
                variant="secondary"
                onClick={() => this.goToPage()}
                size="small"
                class="go-to-page-button"
              >
                Go
              </ic-button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
