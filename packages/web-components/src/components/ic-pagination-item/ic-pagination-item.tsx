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
import { IcThemeMode } from "../../utils/types";
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
   * If `true`, the pagination item will be disabled.
   */
  @Prop() disabled?: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * The label for the pagination item (applicable when simple pagination is being used).
   */
  @Prop() label?: string = "Page";

  @Watch("label")
  watchLabelHandler(): void {
    this.capitalizedLabel = capitalize(this.label!);
  }

  /**
   * If `true`, the pagination item will display as black in the light theme, and white in dark theme.
   */
  @Prop() monochrome?: boolean = false;

  /**
   * The current page number.
   */
  @Prop() page?: number;

  /**
   * If `true`, the pagination item will be selected.
   */
  @Prop() selected: boolean = false;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The type of pagination item - 'page' or 'ellipsis'.
   */
  @Prop() type: IcPaginationItemType;

  /**
   * @internal - Emitted when a pagination item is clicked.
   */
  @Event() paginationItemClick: EventEmitter<{ page: number | null }>;

  componentWillLoad(): void {
    this.watchLabelHandler();
    removeDisabledFalse(this.disabled, this.el);
  }

  private handleClick = () => {
    this.paginationItemClick.emit({ page: this.page || null });
  };

  render() {
    const {
      page,
      selected,
      type,
      disabled,
      label,
      capitalizedLabel,
      monochrome,
    } = this;

    return (
      <a class={{ ["monochrome"]: !!monochrome }}>
        {type === "ellipsis" ? (
          <div
            class={{
              ["item-container"]: true,
              ["ellipsis"]: true,
              ["disabled"]: !!disabled,
            }}
          >
            <ic-typography variant="label">...</ic-typography>
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
              ["disabled"]: !!disabled,
              ["item-container"]: true,
              ["page"]: type === "page",
            }}
          >
            <ic-typography
              variant="label"
              class={{
                ["page-selected"]: selected,
                ["disabled"]: !!disabled,
              }}
            >
              {page}
            </ic-typography>
          </button>
        ) : (
          <ic-typography
            aria-live="polite"
            class={{
              [`simple-current`]: true,
              ["disabled"]: !!disabled,
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
