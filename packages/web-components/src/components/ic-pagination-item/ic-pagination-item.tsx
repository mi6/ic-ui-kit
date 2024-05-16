import {
  Component,
  Prop,
  State,
  Element,
  h,
  Event,
  EventEmitter,
  Watch,
} from "@stencil/core";
import { IcPaginationItemType } from "./ic-pagination-item.types";
import { IcThemeForeground } from "../../utils/types";
import { removeDisabledFalse, capitalize } from "../../utils/helpers";

@Component({
  tag: "ic-pagination-item",
  styleUrl: "ic-pagination-item.css",
  shadow: true,
})
export class PaginationItem {
  @Element() el: HTMLIcPaginationItemElement;

  @State() capitalizedLabel: string;

  /**
   * The appearance of the pagination, e.g. dark, light or the default.
   */
  @Prop() appearance: IcThemeForeground = "default";

  /**
   * If `true`, the pagination item will be disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * The label for the pagination item (applicable when simple pagination is being used).
   */
  @Prop() label: string = "Page";

  @Watch("label")
  watchLabelHandler(): void {
    this.capitalizedLabel = capitalize(this.label);
  }

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
   * @internal - Emitted when a pagination item is clicked.
   */
  @Event() paginationItemClick: EventEmitter<{ page: number }>;

  componentWillLoad(): void {
    this.watchLabelHandler();
    removeDisabledFalse(this.disabled, this.el);
  }

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
      capitalizedLabel,
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
            aria-current={selected && "page"}
            aria-label={
              selected ? `${label}: ${page}` : `Go to ${label} ${page}`
            }
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
            class={{
              [`simple-current ${appearance}`]: true,
              ["disabled"]: disabled,
            }}
            variant="label"
          >
            {capitalizedLabel} {page}
          </ic-typography>
        )}
      </a>
    );
  }
}
