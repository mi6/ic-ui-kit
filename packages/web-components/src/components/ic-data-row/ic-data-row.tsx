import { Component, Element, Host, Prop, h, State } from "@stencil/core";
import {
  checkResizeObserver,
  DEVICE_SIZES,
  getCurrentDeviceSize,
  isSlotUsed,
  slotHasContent,
} from "../../utils/helpers";
import { IcSizesNoLarge, IcThemeMode } from "../../utils/types";

/**
 * @slot label - Content will be rendered in the leftmost cell.
 * @slot value - Content will be rendered to the right of the label.
 * @slot end-component - Content will be displayed in the rightmost cell.
 */
@Component({
  tag: "ic-data-row",
  styleUrl: "ic-data-row.css",
  shadow: true,
})
export class DataRow {
  private hasEndComponent: boolean = false;
  private resizeObserver: ResizeObserver = null;

  @Element() el: HTMLIcDataRowElement;

  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() listSize: "xl" | "m" | "xs";

  /**
   * The label in the leftmost cell of the row.
   */
  @Prop() label: string;

  /**
   * The size of the data row component.
   */
  @Prop() size?: IcSizesNoLarge = "medium";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The value of the middle (right if no end-component supplied) cell of the row.
   */
  @Prop() value: string;

  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
  }

  componentWillLoad(): void {
    this.deviceSize = getCurrentDeviceSize();
    this.hasEndComponent = slotHasContent(this.el, "end-component");
    this.checkLabelAbove();
  }

  componentDidLoad(): void {
    checkResizeObserver(this.runResizeObserver);
    if (this.hasEndComponent) this.labelEndComponent();
  }

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.checkLabelAbove();
    });

    this.resizeObserver.observe(this.el);
  };

  private checkLabelAbove() {
    const rowSize = this.el.shadowRoot.querySelector(".data")?.clientWidth + 46;
    if (rowSize) {
      this.listSize =
        rowSize < DEVICE_SIZES.S ? "xs" : rowSize < DEVICE_SIZES.M ? "m" : "xl";
    }
  }

  private renderCellContent = (cell: "label" | "value") => {
    const isValue = cell === "value";
    return (
      <div class={cell}>
        {isSlotUsed(this.el, cell) ? (
          <slot name={cell}></slot>
        ) : (
          <ic-typography
            variant={
              isValue
                ? "body"
                : this.listSize === "xs"
                ? "label"
                : "subtitle-large"
            }
          >
            {isValue ? this.value : this.label}
          </ic-typography>
        )}
      </div>
    );
  };

  private labelEndComponent(): void {
    this.el.shadowRoot
      .querySelectorAll("slot[name=end-component]")
      .forEach((child) =>
        child.setAttribute("aria-label", `for ${this.label} row`)
      );
  }

  render() {
    const {
      el,
      listSize,
      hasEndComponent,
      label,
      renderCellContent,
      size,
      theme,
      value,
    } = this;

    return (
      <Host
        class={{
          ["ic-data-row-small"]: size === "small",
          ["breakpoint-medium"]: listSize === "m",
          ["breakpoint-xs"]: listSize === "xs",
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        role="listitem"
      >
        <div class="data">
          <div class="text-cells">
            {(isSlotUsed(el, "label") || label) && renderCellContent("label")}
            {(isSlotUsed(el, "value") || value) && renderCellContent("value")}
          </div>
          {hasEndComponent && (
            <div class="end-component">
              <slot name="end-component"></slot>
            </div>
          )}
        </div>
        <div class="divider" />
      </Host>
    );
  }
}
