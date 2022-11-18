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
  @Element() el: HTMLIcDataRowElement;

  /**
   * Set the label in the leftmost cell of the row
   */
  @Prop() label: string;

  /**
   * Set the value of the middle (right if no addition supplied) cell of the row
   */
  @Prop() value: string;

  /**
   * Set the row to small styling, this is automatically applied if small is set on the parent data heading
   */
  @Prop() small: boolean = false;

  @State() deviceSize: number = DEVICE_SIZES.XL;

  @State() entitySize: "xl" | "m" | "xs";

  private resizeObserver: ResizeObserver = null;

  private hasEndComponent: boolean = false;

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.checkLabelAbove();
    });

    this.resizeObserver.observe(this.el);
  };

  private checkLabelAbove() {
    const rowSize = this.el.shadowRoot.querySelector(".data")?.clientWidth;
    if (rowSize + 46 < DEVICE_SIZES.S) {
      this.entitySize = "xs";
    } else if (rowSize + 46 < DEVICE_SIZES.M) {
      this.entitySize = "m";
    } else {
      this.entitySize = "xl";
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

  componentWillLoad(): void {
    this.deviceSize = getCurrentDeviceSize();
    this.hasEndComponent = slotHasContent(this.el, "end-component");
  }

  componentDidLoad(): void {
    checkResizeObserver(this.runResizeObserver);
    this.checkLabelAbove();
    if (this.hasEndComponent) {
      this.labelEndComponent();
    }
  }

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }
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
