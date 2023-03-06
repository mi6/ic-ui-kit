import {
  Component,
  Element,
  Host,
  Listen,
  Prop,
  h,
  State,
} from "@stencil/core";
import { DEVICE_SIZES, getThemeForegroundColor } from "../../utils/helpers";
import { IcTheme, IcThemeForeground } from "../../utils/types";

type FooterConfig = { small: boolean; grouped: boolean };

@Component({
  tag: "ic-footer-link",
  styleUrl: "ic-footer-link.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class FooterLink {
  @Element() el: HTMLIcFooterLinkElement;

  /**
   * The URL that the link points to.
   */
  @Prop() href?: string = null;

  @State() footerConfig: FooterConfig = { small: false, grouped: false };

  @State() deviceSize: number = DEVICE_SIZES.XL;

  @State() foregroundColor: IcThemeForeground = getThemeForegroundColor();

  private inferConfig(e: HTMLElement): FooterConfig {
    if (e.parentElement !== null) {
      if (e.parentElement.classList.contains("footer")) {
        return {
          small: e.parentElement.classList.contains("footer-small"),
          grouped: e.parentElement.classList.contains("footer-grouped"),
        };
      } else {
        return this.inferConfig(e.parentElement);
      }
    } else {
      return { small: false, grouped: false };
    }
  }

  @Listen("footerResized", { target: "document" })
  footerResizeHandler(): void {
    this.footerConfig = this.inferConfig(this.el);
  }

  @Listen("themeChange", { target: "document" })
  footerThemeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.foregroundColor = theme.mode;
  }

  componentWillLoad(): void {
    this.footerConfig = this.inferConfig(this.el);
  }

  render() {
    const { footerConfig, href } = this;
    const { small, grouped } = footerConfig;

    return (
      <Host
        class={{
          "footer-link": true,
          [`footer-link-${grouped ? "grouped" : "ungrouped"}-${
            small ? "small" : "sparse"
          }`]: true,
          [`footer-link-${this.foregroundColor}`]: true,
        }}
      >
        <a href={href}>
          <slot />
        </a>
      </Host>
    );
  }
}
