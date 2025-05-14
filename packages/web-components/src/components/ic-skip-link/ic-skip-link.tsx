import { Component, Element, h, Host, Method, Prop } from "@stencil/core";
import { IcThemeMode } from "../../utils/types";

@Component({
  tag: "ic-skip-link",
  styleUrl: "ic-skip-link.css",
  shadow: true,
})
export class SkipLink {
  private linkEl?: HTMLIcLinkElement;

  @Element() el: HTMLIcSkipLinkElement;

  /**
   * If `true`, the skip link will fill the width of the page.
   */
  @Prop() fullWidth: boolean = false;

  /**
   * If `true`, the skip link will appear inline with surrounding page content when focused.
   */
  @Prop() inline: boolean = false;

  /**
   * The label displayed when the skip link is focused.
   */
  @Prop() label: string = "Skip to main content";

  /**
   * If `true`, the skip link will display as black in the light theme, and white in the dark theme.
   */
  @Prop() monochrome: boolean = false;

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
  @Prop() transparentBackground: boolean = false;

  /**
   * Sets focus on the element.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.linkEl) this.linkEl.setFocus();
  }

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
            "full-width": !!fullWidth,
            "show-background": !transparentBackground,
            inline: !!inline,
          }}
          href={`#${target}`}
          monochrome={monochrome}
          theme={theme}
          ref={(el) => (this.linkEl = el)}
        >
          {label}
        </ic-link>
      </Host>
    );
  }
}
