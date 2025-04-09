import { Component, Element, h, Host, Prop } from "@stencil/core";
import { IcThemeMode } from "../../utils/types";

@Component({
  tag: "ic-skip-link",
  styleUrl: "ic-skip-link.css",
  shadow: true,
})
export class SkipLink {
  @Element() el: HTMLIcSkipLinkElement;

  /**
   * If `true`, the link will fill the width of the page.
   */
  @Prop() fullWidth = false;

  /**
   * If `true`, the link will appear inline with surrounding page content when focused.
   */
  @Prop() inline = false;

  /**
   * The label displayed when the link is focused.
   */
  @Prop() label = "Skip to main content";

  /**
   * If `true`, the link will display as black in the light theme, and white in the dark theme.
   */
  @Prop() monochrome = false;

  /**
   * The target ID for the element which should receive focus when triggering the skip link.
   */
  @Prop() target!: string;

  /**
   * Sets the theme color to the dark or light theme color. `inherit` will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * If `true`, the background will be hidden.
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
          {label}
        </ic-link>
      </Host>
    );
  }
}
