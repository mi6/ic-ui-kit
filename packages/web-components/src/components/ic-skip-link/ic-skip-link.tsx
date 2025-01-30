import { Component, Element, h, Host, Prop } from "@stencil/core";
import { isSlotUsed } from "../../utils/helpers";
import { IcThemeMode } from "../../utils/types";

/**
 * @slot router-item - Handle routing by nesting your routes in this slot.
 */
@Component({
  tag: "ic-skip-link",
  styleUrl: "ic-skip-link.css",
  shadow: true,
})
export class SkipLink {
  @Element() el: HTMLIcSkipLinkElement;

  /**
   * If `true`, the element will fill the width of the container.
   */
  @Prop() fullWidth = false;

  /**
   * If `true`, the element will appear inline with surrounding page content when focused.
   */
  @Prop() inline = false;

  /**
   * The label displayed when the element is focused.
   */
  @Prop() label = "Skip to main content";

  /**
   * If `true`, the link will display as black in the light theme, and white in the dark theme.
   */
  @Prop() monochrome = false;

  /**
   * The target id for the element which should receive focus when triggering the skip link.
   * Not necessary if using the `router-item` slot.
   */
  @Prop() target?: string;

  /**
   * Sets the theme color to the dark or light theme color. `inherit` will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * Determines whether the background should be hidden.
   */
  @Prop() transparentBackground = false;

  render() {
    const {
      fullWidth,
      inline,
      label,
      monochrome,
      target,
      theme,
      transparentBackground,
    } = this;

    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <ic-link
          class={{
            "display-top": !inline,
            "full-width": fullWidth,
            "show-background": !transparentBackground,
          }}
          href={target}
          monochrome={monochrome}
          theme={theme}
        >
          {isSlotUsed(this.el, "router-item") ? (
            <slot name="router-item" />
          ) : (
            label
          )}
        </ic-link>
      </Host>
    );
  }
}
