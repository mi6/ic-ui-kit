import {
  Component,
  Prop,
  Element,
  Event,
  EventEmitter,
  State,
  Listen,
  h,
} from "@stencil/core";
import { checkResizeObserver } from "../../utils/helpers";
import { IcThemeForeground } from "../../interface";

@Component({
  tag: "ic-pagination-bar",
  styleUrl: "ic-pagination-bar.css",
  shadow: true,
})
export class PaginationBar {
  private PAGINATION = "ic-pagination";
  private TEXT_FIELD = "ic-text-field";
  private TOOLTIP = "ic-tooltip";

  private INVALID_PAGE_ERROR = "Please enter a valid page";
  private NAN_ERROR = "Please enter a number";

  private resizeObserver: ResizeObserver = null;
  private paginationBarEl: HTMLElement;

  @Element() el: HTMLIcPaginationBarElement;

  @State() currentPage: number = 1;

  @State() inputError: string = "Please enter a valid page";

  @State() itemsPerPage: string;

  @State() lowerBound: number = 1;

  @State() paginationWidth: number;

  @State() paginationWrapped: boolean = false;

  @State() totalPages: number;

  @State() upperBound: number;

  /**
   * Sets the alignment of the items in the pagination bar.
   */
  @Prop() alignment?: "left" | "right" | "space-between" = "right";

  /**
   * Sets the styling for the items in the pagination bar.
   */
  @Prop() appearance?: IcThemeForeground = "default";

  /**
   * What label will be used in place of 'items' if paginationType is data, should be capitalised.
   */
  @Prop() itemLabel?: string = "Item";

  /**
   * What options will be displayed for 'items per page' select input, maximum of 4 options including a required 'All' option with value equal to total number of items.
   */
  @Prop({ mutable: true }) itemsPerPageOptions?: {
    label: string;
    value: string;
  }[];

  /**
   * Whether the displayed pagination is simple or complex.
   */
  @Prop() paginationControl?: "simple" | "complex" = "simple";

  /**
   * Whether total number of items and current item range or total number of pages and current page is displayed.
   */
  @Prop() paginationType?: "data" | "page" = "page";

  /**
   * What label will be used in place of 'Page' if paginationType is page, should be capitalised.
   */
  @Prop() pageLabel?: string = "Page";

  /**
   * If `true`, the 'go to page' control should be displayed.
   */
  @Prop() showGoToPageControl?: boolean = false;

  /**
   * If `true`, the number of total items and current item range or number of total pages and current page should be displayed.
   */
  @Prop() showItemsPerPage?: boolean = true;

  /**
   * If `true`, the select input to control 'items per page' should be displayed.
   */
  @Prop() showItemsPerPageControl?: boolean = false;

  /**
   * Total number of items to be displayed across all pages.
   */
  @Prop() totalItems!: number;

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
    if (
      this.itemsPerPageOptions === undefined ||
      this.itemsPerPageOptions === null
    ) {
      this.setDefaultItemsPerPageOptions();
    }
    this.trimItemsPerPageOptions();
    this.setDefaultItemsPerPage();
    this.setNumberPages();
    this.setUpperBound();
  }

  componentDidLoad(): void {
    this.paginationWidth = this.paginationBarEl.clientWidth;
    checkResizeObserver(this.runResizeObserver);
    this.setGoToPageInputStyles();
    this.paginationShouldWrap();
  }

  @Listen("icPageChange")
  pageChangeHandler(ev: CustomEvent) {
    const page = ev.detail.value;
    this.changePage(page);
  }

  private changeItemsPerPage = () => {
    const select = this.el.shadowRoot.querySelector("ic-select");
    const value = select.value;
    this.itemsPerPage = value;
    this.setNumberPages();
    this.setUpperBound();
    const pagination = this.el.shadowRoot.querySelector(
      this.PAGINATION
    ) as HTMLIcPaginationElement;
    if (this.currentPage > this.totalPages) {
      pagination.setCurrentPage(this.totalPages);
      this.currentPage = this.totalPages;
    }
    this.icItemsPerPageChange.emit({ value: Number(this.itemsPerPage) });
    this.icPageChange.emit({ value: this.currentPage });
  };

  private changePage = (page: number) => {
    if (page === 1) {
      this.currentPage = 1;
      this.lowerBound = 1;
      this.setUpperBound();
    } else {
      this.currentPage = page;
      this.lowerBound = (page - 1) * Number(this.itemsPerPage) + 1;
      this.setUpperBound();
    }
  };

  private goToPage = () => {
    const input = this.el.shadowRoot.querySelector(
      this.TEXT_FIELD
    ) as HTMLIcTextFieldElement;
    const page = Number(input.value);
    const tooltip = this.el.shadowRoot.querySelector("ic-tooltip");
    if (page <= this.totalPages && page > 0) {
      this.changePage(page);
      const pagination = this.el.shadowRoot.querySelector(
        this.PAGINATION
      ) as HTMLIcPaginationElement;
      pagination.setCurrentPage(page);
      this.currentPage = page;
      input.value = "";
      this.icPageChange.emit({ value: page });
      tooltip.displayTooltip(false, false);
      input.validationStatus = "";
    } else {
      this.inputError = this.INVALID_PAGE_ERROR;
      input.validationStatus = "error";
      input.setFocus();
    }
  };

  private handleBlur = () => {
    const textField = this.el.shadowRoot?.querySelector(
      this.TEXT_FIELD
    ) as HTMLIcTextFieldElement;
    const tooltip = this.el.shadowRoot?.querySelector(
      this.TOOLTIP
    ) as HTMLIcTooltipElement;
    if (
      (Number(textField.value) <= this.totalPages &&
        Number(textField.value) > 0) ||
      textField.value === ""
    ) {
      textField.validationStatus = "";
    }
    tooltip.displayTooltip(false, false);
  };

  private handleFocus = () => {
    const textField = this.el.shadowRoot?.querySelector(
      this.TEXT_FIELD
    ) as HTMLIcTextFieldElement;
    const tooltip = this.el.shadowRoot?.querySelector(
      this.TOOLTIP
    ) as HTMLIcTooltipElement;
    if (textField.validationStatus === "error") {
      tooltip.displayTooltip(true, true);
    }
  };

  private handleInputChange = () => {
    const tooltip = this.el.shadowRoot.querySelector(
      this.TOOLTIP
    ) as HTMLIcTooltipElement;
    const textField = this.el.shadowRoot.querySelector(
      this.TEXT_FIELD
    ) as HTMLIcTextFieldElement;
    const inputValue = parseInt(textField.value);

    if (inputValue > this.totalPages || inputValue <= 0) {
      this.inputError = this.INVALID_PAGE_ERROR;
      tooltip.displayTooltip(true, true);
      textField.validationStatus = "error";
      textField.focus();
    }
  };

  private handleKeydown = (ev: KeyboardEvent) => {
    const tooltip = this.el.shadowRoot.querySelector(
      this.TOOLTIP
    ) as HTMLIcTooltipElement;
    const textField = this.el.shadowRoot.querySelector(
      this.TEXT_FIELD
    ) as HTMLIcTextFieldElement;

    if (ev.key === "Enter") {
      if (textField.validationStatus === "error") {
        tooltip.displayTooltip(false, false);
        setTimeout(() => tooltip.displayTooltip(true, true), 50);
      } else {
        this.goToPage();
      }
    } else if (ev.key === "Backspace") {
      tooltip.displayTooltip(false, true);
      textField.validationStatus = "";
    } else {
      tooltip.displayTooltip(false, false);
      textField.validationStatus = "";
    }
  };

  private handleKeyUp = (ev: KeyboardEvent) => {
    const tooltip = this.el.shadowRoot.querySelector(
      this.TOOLTIP
    ) as HTMLIcTooltipElement;
    const textField = this.el.shadowRoot.querySelector(
      this.TEXT_FIELD
    ) as HTMLIcTextFieldElement;
    const inputValue = parseInt(textField.value);

    if (
      Number.isNaN(inputValue) &&
      ev.key !== "Backspace" &&
      ev.key !== "Enter" &&
      ev.key !== "Tab" &&
      ev.key !== "Shift"
    ) {
      this.inputError = this.NAN_ERROR;
      tooltip.displayTooltip(true, false);
      textField.validationStatus = "error";
    }
  };

  private paginationShouldWrap = () => {
    const pagination = this.el.shadowRoot.querySelector(
      this.PAGINATION
    ) as HTMLIcPaginationElement;
    if (this.paginationControl === "simple") {
      if (pagination.clientHeight > 63) {
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

  private setDefaultItemsPerPage = () => {
    this.itemsPerPage = this.itemsPerPageOptions[0].value;
  };

  private setDefaultItemsPerPageOptions = () => {
    this.itemsPerPageOptions =
      this.totalItems <= 100
        ? [
            { label: "10", value: "10" },
            { label: "25", value: "25" },
            { label: "50", value: "50" },
            { label: "All", value: String(this.totalItems) },
          ]
        : [
            { label: "25", value: "25" },
            { label: "100", value: "100" },
            { label: "1000", value: "1000" },
            { label: "All", value: String(this.totalItems) },
          ];
  };

  private setGoToPageInputStyles = () => {
    const textField = this.el.shadowRoot?.querySelector(".go-to-page-input");
    if (textField !== undefined) {
      const input = textField?.shadowRoot?.querySelector("input");
      if (input !== undefined) {
        input.style.textAlign = "center";
        input.style.padding = "0";
      }
    }
  };

  private setNumberPages = () => {
    this.totalPages = Math.ceil(this.totalItems / Number(this.itemsPerPage));
  };

  private setUpperBound = () => {
    this.upperBound = Math.min(
      this.lowerBound + Number(this.itemsPerPage) - 1,
      this.totalItems
    );
  };

  private trimItemsPerPageOptions = () => {
    this.itemsPerPageOptions = this.itemsPerPageOptions.slice(0, 3);
    this.itemsPerPageOptions.push({
      label: "All",
      value: String(this.totalItems),
    });

    for (let i = 0; i < this.itemsPerPageOptions.length - 1; i++) {
      if (this.totalItems <= Number(this.itemsPerPageOptions[i].value)) {
        this.itemsPerPageOptions.splice(
          i,
          this.itemsPerPageOptions.length - (i + 1)
        );
      }
    }
  };

  render() {
    const {
      appearance,
      alignment,
      itemsPerPageOptions,
      paginationControl,
      paginationType,
      showItemsPerPage,
      showItemsPerPageControl,
      showGoToPageControl,
    } = this;

    return (
      <div
        class={{
          ["pagination-bar"]: true,
          [`pagination-bar-${alignment}`]: true,
        }}
        ref={(el) => (this.paginationBarEl = el)}
      >
        {showItemsPerPage || showItemsPerPageControl ? (
          <div class="item-controls">
            {showItemsPerPageControl ? (
              <div class="items-per-page-holder">
                <ic-typography
                  class={{
                    [`pagination-text-${appearance}`]: true,
                    ["items-per-page-control-label"]: true,
                  }}
                  variant="label"
                >
                  {this.itemLabel}s per {this.pageLabel.toLowerCase()}
                </ic-typography>
                <ic-select
                  small
                  label="items-per-page-input"
                  class="items-per-page-input"
                  hideLabel
                  options={itemsPerPageOptions}
                  value={this.itemsPerPage}
                  onIcChange={() => this.changeItemsPerPage()}
                ></ic-select>
              </div>
            ) : null}
            {showItemsPerPage && paginationType === "data" ? (
              <ic-typography
                class={{
                  [`pagination-text-${appearance}`]: true,
                  ["item-pagination-label"]: true,
                }}
                variant="label"
                aria-live="polite"
              >
                {this.lowerBound} - {this.upperBound} of {this.totalItems}{" "}
                {this.itemLabel.toLowerCase()}
                {this.totalItems > 1 ? "s" : ""}
              </ic-typography>
            ) : showItemsPerPage ? (
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
            ) : null}
          </div>
        ) : null}
        <div
          class={{
            ["pagination-controls"]: true,
            ["pagination-controls-wrap"]: this.paginationWrapped,
          }}
        >
          <div class="pagination-holder">
            <ic-pagination
              appearance={appearance}
              type={paginationControl}
              pages={this.totalPages}
            ></ic-pagination>
          </div>
          {showGoToPageControl ? (
            <div class="go-to-page-holder">
              <ic-typography
                class={{ [`pagination-text-${appearance}`]: true }}
                variant="label"
              >
                Go to {this.pageLabel.toLowerCase()}
              </ic-typography>
              <ic-tooltip
                label={this.inputError}
                target="#go-to-page-input"
                disableHover
                disableClick
              >
                <ic-text-field
                  type="number"
                  small
                  label="go-to-page-input"
                  class="go-to-page-input"
                  id="go-to-page-input"
                  hideLabel
                  onKeyDown={(ev) => this.handleKeydown(ev)}
                  onKeyUp={(ev) => this.handleKeyUp(ev)}
                  onInput={() => this.handleInputChange()}
                  max={this.totalPages}
                  min="1"
                  validationInlineInternal
                  onBlur={() => this.handleBlur()}
                  onFocus={() => this.handleFocus()}
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
          ) : null}
        </div>
      </div>
    );
  }
}
