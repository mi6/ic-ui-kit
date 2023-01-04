import { Component, Prop, Host, h } from "@stencil/core";
import { IcAlignment } from "../../utils/types";

@Component({
  tag: "ic-section-container",
  styleUrl: "ic-section-container.css",
  shadow: true,
})
export class SectionContainer {
  /**
   * The alignment of the container.
   */
  @Prop() aligned?: IcAlignment = "left";

  /**
   * If `true`, the standard vertical padding from the container will be removed.
   */
  @Prop() fullHeight?: boolean = false;

  render() {
    const { aligned, fullHeight } = this;
    return (
      <Host
        class={{
          ["aligned-left"]: aligned === "left",
          ["aligned-center"]: aligned === "center",
          ["aligned-full-width"]: aligned === "full-width",
          ["no-vertical-padding"]: fullHeight,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
