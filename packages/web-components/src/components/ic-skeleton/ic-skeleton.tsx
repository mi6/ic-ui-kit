import { Component, Element, Host, Prop, h } from "@stencil/core";
import { IcSkeletonVariants } from "./ic-skeleton.types";
import { IcThemeMode } from "../../utils/types";

const DEFAULT_HEIGHTS = {
  text: "1em",
  circle: "25px",
  rectangle: "93px",
};

const DEFAULT_WIDTHS = {
  text: "260px",
  circle: "25px",
  rectangle: "260px",
};

@Component({
  tag: "ic-skeleton",
  styleUrl: "ic-skeleton.css",
  shadow: true,
})
export class Skeleton {
  @Element() el: HTMLIcSkeletonElement;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The variant of the skeleton that will be displayed.
   */
  @Prop() variant?: IcSkeletonVariants = "rectangle";

  /**
   * Height of the skeleton. Accepts any valid CSS length (e.g. "24px", "2rem", "100%").
   */
  @Prop() height?: string;

  /**
   * Width of the skeleton. Accepts any valid CSS length (e.g. "24px", "2rem", "100%").
   */
  @Prop() width?: string;

  render() {
    const { variant = "rectangle", theme, el } = this;

    let height = this.height;
    let width = this.width;

    if (variant === "circle") {
      if (height && !width) {
        width = height;
      } else if (width && !height) {
        height = width;
      }
    }

    const style = !el.firstElementChild
      ? {
          height: el.style.height || height || DEFAULT_HEIGHTS[variant!],
          width: el.style.width || width || DEFAULT_WIDTHS[variant!],
        }
      : undefined;

    return (
      <Host
        class={{
          skeleton: true,
          "ic-skeleton-circle": variant === "circle",
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        style={style}
        aria-disabled="true"
      >
        <slot />
      </Host>
    );
  }
}
