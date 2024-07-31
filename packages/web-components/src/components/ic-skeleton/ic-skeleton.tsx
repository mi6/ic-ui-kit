import { Component, Element, Host, Prop, h } from "@stencil/core";
import { IcSkeletonVariants } from "./ic-skeleton.types";

const DEFAULT_HEIGHTS = {
  text: "1em",
  circle: "25px",
  rectangle: "93px",
};

@Component({
  tag: "ic-skeleton",
  styleUrl: "ic-skeleton.css",
  shadow: true,
})
export class Skeleton {
  @Element() el: HTMLIcSkeletonElement;

  /**
   * The appearance of the skeleton.
   */
  @Prop() appearance?: "light" | "default" = "default";

  /**
   * The variant of the skeleton that will be displayed.
   */
  @Prop() variant?: IcSkeletonVariants = "rectangle";

  render() {
    const { variant, appearance, el } = this;

    const style = !el.firstElementChild
      ? {
          height: el.style.height || DEFAULT_HEIGHTS[variant],
          width: el.style.width || (variant === "circle" ? "25px" : "260px"),
        }
      : undefined;

    return (
      <Host
        class={{
          skeleton: true,
          "ic-skeleton-circle": variant === "circle",
          "ic-skeleton-light": appearance === "light",
        }}
        style={style}
        aria-disabled="true"
      >
        <slot />
      </Host>
    );
  }
}
