import {
  Component,
  Element,
  Host,
  Listen,
  Prop,
  h,
  State,
} from "@stencil/core";
import {
  DEVICE_SIZES,
  getBrandForegroundAppearance,
} from "../../utils/helpers";
import { IcBrand, IcBrandForeground } from "../../utils/types";

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
  @State() foregroundColor: IcBrandForeground = getBrandForegroundAppearance();

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

  @Listen("brandChange", { target: "document" })
  footerBrandChangeHandler(ev: CustomEvent<IcBrand>): void {
    this.foregroundColor = ev.detail.mode;
  }

  private inferConfig(e: HTMLElement): FooterConfig {
    if (e.parentElement !== null) {
      if (e.parentElement.classList.contains("ic-footer")) {
        return {
          small: e.parentElement.classList.contains("ic-footer-small"),
          grouped: e.parentElement.classList.contains("ic-footer-grouped"),
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

    const isLogoLink = !!this.el.closest("div[slot='logo']");

    return (
      <Host
        class={{
          "footer-link": true,
          [`footer-link-${grouped ? "grouped" : "ungrouped"}-${
            small ? "small" : "sparse"
          }`]: true,
          [`footer-link-${this.foregroundColor}`]: true,
          "footer-logo-link": isLogoLink,
        }}
        role="listitem"
      >
        <ic-link
          class="footer-link"
          href={href}
          hreflang={hreflang}
          referrerpolicy={referrerpolicy}
          rel={rel}
          download={download !== false ? download : null}
          target={target}
        >
          <slot />
        </ic-link>
      </Host>
    );
  }
}
