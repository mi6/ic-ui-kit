import { Component, Prop, h, Element, Host } from "@stencil/core";

import { IcTypographyVariants } from "../../utils/types";

@Component({
  styleUrl: "ic-typography.css",
  tag: "ic-typography",
  shadow: true,
})
export class Typography {
  @Element() el: HTMLIcTypographyElement;

  /**
   * The ICDS typography style to use.
   */
  @Prop() variant?: IcTypographyVariants = "body";

  /**
   * If `true`, appropriate top and bottom margins will be applied to the typography.
   */
  @Prop() applyVerticalMargins?: boolean = false;

  render() {
    const { variant, applyVerticalMargins } = this;

    return (
      <Host
        class={{
          [`ic-typography-${variant}`]: true,
          [`ic-typography-vertical-margins-${variant}`]: applyVerticalMargins,
        }}
      >
        <slot />
      </Host>
    );
  }
}
