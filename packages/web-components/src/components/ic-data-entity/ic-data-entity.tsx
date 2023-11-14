import { Component, Element, Host, h, Prop } from "@stencil/core";
import { IcSizesNoLarge } from "../../utils/types";

/**
 * @slot heading - Content will be placed at the top of the data entity.
 */
@Component({
  tag: "ic-data-entity",
  styleUrl: "ic-data-entity.css",
  shadow: true,
})
export class DataEntity {
  @Element() el: HTMLIcDataEntityElement;

  /**
   * The title for the data entity.
   */
  @Prop() heading: string;

  /**
   * The size of the data entity component.
   */
  @Prop() size?: IcSizesNoLarge = "default";

  /**
   * @deprecated This prop should not be used anymore. Set prop `size` to "small" instead.
   */
  @Prop() small?: boolean = false;

  render() {
    const { heading, small, size } = this;

    const children = this.el.children;

    if (small || size === "small") {
      for (let i = 0; i < children.length; i++) {
        children[i].setAttribute("size", "small");
      }
    }

    return (
      <Host class={{ ["small"]: small || size === "small" }}>
        <div class="heading" id="data-entity-heading">
          <slot name="heading">
            <ic-typography variant="h3">{heading}</ic-typography>
          </slot>
        </div>
        <div class="divider" />
        <ul aria-labelledby="data-entity-heading" class="rows">
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
