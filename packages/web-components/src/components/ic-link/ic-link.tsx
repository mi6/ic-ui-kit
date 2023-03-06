import {
  Component,
  Element,
  Prop,
  h,
  Host,
  Listen,
  Method,
} from "@stencil/core";

import OpenInNew from "./assets/OpenInNew.svg";
import { getThemeFromContext, inheritAttributes } from "../../utils/helpers";
import { IC_INHERITED_ARIA } from "../../utils/constants";
import {
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "../../utils/types";

/**
 * @slot router-item - Handle routing by nesting your routes in this slot.
 */

@Component({
  tag: "ic-link",
  styleUrl: "ic-link.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Link {
  private inheritedAttributes: { [k: string]: unknown } = {};
  private routerSlot: HTMLElement;

  @Element() el: HTMLIcLinkElement;

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

  /**
   * If `true`, the 'open in new tab/window' icon will be displayed.
   */
  @Prop() showIcon?: boolean;

  /**
   * The appearance of the link, e.g. dark, light, or default.
   */
  @Prop({ mutable: true }) appearance?: IcThemeForeground = "default";

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.updateTheme(theme.mode);
  }

  private updateTheme(newTheme: IcThemeForeground = null): void {
    const theme = getThemeFromContext(this.el, newTheme || null);

    switch (theme) {
      case IcThemeForegroundEnum.Light:
        this.appearance = IcThemeForegroundEnum.Light;
        break;
      case IcThemeForegroundEnum.Dark:
        this.appearance = IcThemeForegroundEnum.Dark;
        break;
    }
  }

  /**
   * Sets focus on the link.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.el.shadowRoot.querySelector("a")) {
      this.el.shadowRoot.querySelector("a").focus();
    }
  }

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.el, [
      ...IC_INHERITED_ARIA,
      "aria-expanded",
    ]);

    this.updateTheme();
  }

  private hasRouterSlot(): boolean {
    this.routerSlot = this.el.querySelector('[slot="router-item"]');
    if (this.routerSlot) {
      this.routerSlot.ariaLabel = this.routerSlot.textContent;
    }
    return !!this.routerSlot;
  }

  render() {
    const {
      download,
      href,
      hreflang,
      referrerpolicy,
      rel,
      target,
      showIcon,
      appearance,
    } = this;

    return (
      <Host class={{ ["link"]: true, [`${appearance}`]: true }}>
        {this.hasRouterSlot() ? (
          <slot name="router-item"></slot>
        ) : (
          <a
            class={{
              ["ic-link"]: href !== null,
              [`${appearance}`]: href !== null,
            }}
            download={download !== false ? download : null}
            href={href}
            hrefLang={hreflang}
            referrerPolicy={referrerpolicy}
            rel={rel}
            target={target}
            tabindex={href !== null ? "0" : "-1"}
            {...this.inheritedAttributes}
          >
            <slot />
            {showIcon && (
              <span class="ic-link-open-in-new-icon" innerHTML={OpenInNew} />
            )}
          </a>
        )}
      </Host>
    );
  }
}
