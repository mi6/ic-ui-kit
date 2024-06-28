import { Component, Element, Host, h, Prop } from "@stencil/core";
import { IcSizesNoLarge } from "../../utils/types";

/**
 * @slot heading - Content will be placed at the top of the data list.
 */
@Component({
  tag: "ic-data-list",
  styleUrl: "ic-data-list.css",
  shadow: true,
})
export class DataList {
  @Element() el: HTMLIcDataListElement;

  /**
   * The title for the data list.
   */
  @Prop() heading: string;

  /**
   * The size of the data list component.
   */
  @Prop() size?: IcSizesNoLarge = "default";

  /**
   * @deprecated This prop should not be used anymore. Set prop `size` to "small" instead.
   */
  @Prop() small?: boolean = false;

  render() {
    const { el, heading, small, size } = this;

    if (small || size === "small") {
      Array.from(el.children).forEach((child) =>
        child.setAttribute("size", "small")
      );
    }

    return (
      <Host class={{ small: small || size === "small" }}>
        <div class="heading" id="data-list-heading">
          <slot name="heading">
            <ic-typography variant="h3">{heading}</ic-typography>
          </slot>
        </div>
        <div class="divider" />
        <ul aria-labelledby="data-list-heading" class="rows">
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
