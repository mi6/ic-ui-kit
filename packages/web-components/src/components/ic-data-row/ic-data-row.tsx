import { Component, Element, Host, Prop, h, State } from "@stencil/core";
import {
  checkResizeObserver,
  DEVICE_SIZES,
  getCurrentDeviceSize,
  slotHasContent,
} from "../../utils/helpers";

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
  @State() entitySize: "xl" | "m" | "xs";

  /**
   * The label in the leftmost cell of the row.
   */
  @Prop() label: string;

  /**
   * If `true`, the small styling will be applied to the row. This is automatically applied if small is set on the parent data heading.
   */
  @Prop() small: boolean = false;

  /**
   * The value of the middle (right if no end-component supplied) cell of the row.
   */
  @Prop() value: string;

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }
  }

  componentWillLoad(): void {
    this.deviceSize = getCurrentDeviceSize();
    this.hasEndComponent = slotHasContent(this.el, "end-component");
    this.checkLabelAbove();
  }

  componentDidLoad(): void {
    checkResizeObserver(this.runResizeObserver);
    if (this.hasEndComponent) {
      this.labelEndComponent();
    }
  }

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.checkLabelAbove();
    });

    this.resizeObserver.observe(this.el);
  };

  private checkLabelAbove() {
    const rowSize = this.el.shadowRoot.querySelector(".data")?.clientWidth;
    if (rowSize) {
      if (rowSize + 46 < DEVICE_SIZES.S) {
        this.entitySize = "xs";
      } else if (rowSize + 46 < DEVICE_SIZES.M) {
        this.entitySize = "m";
      } else {
        this.entitySize = "xl";
      }
    }
  }

  private labelEndComponent(): void {
    const component = this.el.shadowRoot.querySelectorAll(
      "slot[name=end-component]"
    );

    component.forEach((child: HTMLElement) =>
      child.setAttribute("aria-label", "for " + this.label + " row")
    );
  }

  render() {
    const { label, value, small } = this;

    return (
      <Host
        class={{
          ["small"]: small,
          ["breakpoint-medium"]: this.entitySize === "m",
          ["breakpoint-xs"]: this.entitySize === "xs",
        }}
        role="listitem"
      >
        <div class="data">
          <div class="text-cells">
            <div class="label">
              <slot name="label">
                <ic-typography
                  variant={
                    this.entitySize === "xs" ? "label" : "subtitle-large"
                  }
                >
                  {label}
                </ic-typography>
              </slot>
            </div>
            <div class="value">
              <slot name="value">
                <ic-typography variant="body">{value}</ic-typography>
              </slot>
            </div>
          </div>
          {this.hasEndComponent && (
            <div class="end-component">
              <div role="cell">
                <slot name="end-component"></slot>
              </div>
            </div>
          )}
        </div>
        <div class="divider" />
      </Host>
    );
  }
}
