import {
  Component,
  Prop,
  Element,
  h,
  Event,
  EventEmitter,
} from "@stencil/core";
import { IcPaginationItemType } from "./ic-pagination-item.types";
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
   * If `true`, the pagination item will be selected.
   */
  @Prop() selected: boolean = false;
  /**
   * The type of pagination item - 'page' or 'ellipsis'.
   */
  @Prop() type: IcPaginationItemType;
  /**
   * If `true`, the pagination item will be disabled.
   */
  @Prop() disabled: boolean = false;
  /**
   * The appearance of the pagination, e.g. dark, light or the default.
   */
  @Prop() appearance: IcThemeForeground;
  /**
   * The label for the pagination item (applicable when simple pagination is being used).
   */
  @Prop() label: string = "Page ";
  /**
   * If true the aria-label will be set to `Page X of Y`, where X is the current page and Y is the page count.
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
              ["ellipsis"]: true,
              ["disabled"]: disabled,
            }}
          >
            <ic-typography
              class={{
                [`${appearance}`]: true,
              }}
              variant="label"
            >
              ...
            </ic-typography>
          </div>
        ) : type === "page" ? (
          <button
            disabled={disabled}
            onClick={this.handleClick}
            tabindex={selected ? "-1" : "0"}
            role="button"
            aria-current={selected && "Current page"}
            aria-live="polite"
            aria-label={selected ? `${label}: ${page}` : `Go to page ${page}`}
            class={{
              ["selected"]: !disabled && selected,
              ["disabled"]: disabled,
              ["item-container"]: true,
              [`${appearance}`]: true,
              ["page"]: type === "page",
            }}
          >
            <ic-typography
              variant="label"
              class={{
                ["page-selected"]: selected,
                ["disabled"]: disabled,
                [`${appearance}`]: true,
              }}
            >
              {page}
            </ic-typography>
          </button>
        ) : (
          <ic-typography
            aria-live="polite"
            aria-label={
              ariaOverride ? `Page ${page} of ${pages}` : `${label} ${page}`
            }
            class={`simple-current ${appearance}`}
            variant="label"
          >
            {label} {page}
          </ic-typography>
        )}
      </a>
    );
  }
}
