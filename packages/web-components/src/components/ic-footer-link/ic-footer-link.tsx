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

import OpenInNew from "../../assets/OpenInNew.svg";

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

  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() footerConfig: FooterConfig = { small: false, grouped: false };
  @State() foregroundColor: IcThemeForeground = getThemeForegroundColor();

  /**
   * If `true`, the user can save the linked URL instead of navigating to it.
   */
  @Prop() download?: string | boolean = false;

  /**
   * The URL that the link points to.
   */
  @Prop() href?: string = null;

  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string;

  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  componentWillLoad(): void {
    this.footerConfig = this.inferConfig(this.el);
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

  render() {
    const {
      footerConfig,
      href,
      hreflang,
      referrerpolicy,
      rel,
      target,
      download,
    } = this;
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
        <a
          href={href}
          hreflang={hreflang}
          referrerPolicy={referrerpolicy}
          rel={rel}
          download={download !== false ? download : null}
          target={target}
        >
          <slot />
          {target === "_blank" && (
            <span class="open-in-new-icon" innerHTML={OpenInNew} />
          )}
        </a>
      </Host>
    );
  }
}
