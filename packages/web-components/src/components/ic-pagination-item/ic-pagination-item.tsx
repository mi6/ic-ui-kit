import {
  Component,
  Prop,
  Element,
  h,
  Event,
  EventEmitter,
} from "@stencil/core";
import { IcPaginationItemType } from "../../utils/types";
import { IcThemeForeground } from "../../interface";

@Component({
  tag: "ic-pagination-item",
  styleUrl: "ic-pagination-item.css",
  shadow: true,
})
export class PaginationItem {
  @Element() el: HTMLIcPaginationItemElement;

  /**
   * The current page number.
   */
  @Prop() page: number | null;
  /**
   * If true the pagination item is selected.
   */
  @Prop() selected: boolean = false;
  /**
   * The type of pagination item 'page' or 'ellipsis'.
   */
  @Prop() type: IcPaginationItemType;
  /**
   * If true the item is disabled.
   */
  @Prop() disabled: boolean = false;
  /**
   * The appearance of the pagination, e.g. dark or light. Default appearance if value not set.
   */
  @Prop() appearance: IcThemeForeground;
  /**
   * The label applicable when simple pagination is being used.
   */
  @Prop() label: string = "Page ";
  /**
   * If true the aria-label is set to `Page X of Y`, where X is the current page and Y is the page count.
   */
  @Prop() ariaOverride: boolean = false;
  /**
   * The total number of pages.
   */
  @Prop() pages: number;

  /**
   * @internal - Emitted when a pagination item is clicked.
   */
  @Event() paginationItemClick: EventEmitter<{ page: number }>;

  private handleClick = () => {
    this.paginationItemClick.emit({ page: this.page });
  };

  render() {
    const {
      page,
      selected,
      type,
      disabled,
      appearance,
      label,
      ariaOverride,
      pages,
    } = this;

    return (
      <a>
        {type === "ellipsis" ? (
          <div
            class={{
              ["item-container"]: true,
              [`${appearance}`]: true,
              ["ellipsis"]: true,
            }}
          >
            <ic-typography variant="label">...</ic-typography>
          </div>
        ) : (
          <button
            onClick={this.handleClick}
            tabindex={selected ? "-1" : "0"}
            role="button"
            aria-current={selected && "Current page"}
            aria-label={selected ? `${label}: ${page}` : `Go to page ${page}`}
            class={{
              ["selected"]: selected,
              ["disabled"]: disabled,
              ["item-container"]: true,
              [`${appearance}`]: true,
              ["simple-current"]: type === "simple-current",
              ["page"]: type === "page",
            }}
          >
            {type === "page" && (
              <ic-typography
                variant="label"
                class={{ ["page-selected"]: selected }}
              >
                {page}
              </ic-typography>
            )}
            {type === "simple-current" && (
              <ic-typography
                aria-label={
                  ariaOverride ? `Page ${page} of ${pages}` : `${label} ${page}`
                }
                class={"page-selected"}
                variant="label"
              >
                {label} {page}
              </ic-typography>
            )}
          </button>
        )}
      </a>
    );
  }
}
