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
   * Adds appropriate margins to the top and bottom of the typography.
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
