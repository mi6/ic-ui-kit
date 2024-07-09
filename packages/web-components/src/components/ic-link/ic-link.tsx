import {
  Component,
  Element,
  Prop,
  h,
  Host,
  Listen,
  Method,
  forceUpdate,
} from "@stencil/core";

import OpenInNew from "../../assets/OpenInNew.svg";
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
  private inheritedAttributes: { [k: string]: string } = {};
  private routerSlot: HTMLElement;
  private hostMutationObserver: MutationObserver = null;

  @Element() el: HTMLIcLinkElement;

  /**
   * The appearance of the link, e.g. dark, light, or default.
   */
  @Prop({ mutable: true }) appearance?: IcThemeForeground = "default";

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
   * @deprecated This prop should not be used anymore. The 'open in new tab/window' icon will display automatically if target="_blank".
   */
  @Prop() showIcon?: boolean;

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.el, IC_INHERITED_ARIA);
    this.updateTheme();
  }

  componentDidLoad(): void {
    this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
    this.hostMutationObserver.observe(this.el, {
      attributes: true,
    });
  }

  disconnectedCallback(): void {
    this.hostMutationObserver?.disconnect();
  }

  @Listen("themeChange", { target: "document" })
  themeChangeHandler({ detail }: CustomEvent<IcTheme>): void {
    this.updateTheme(detail.mode);
  }

  /**
   * Sets focus on the link.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.el.shadowRoot.querySelector("a")?.focus();
  }

  private updateTheme(newTheme: IcThemeForeground = null): void {
    const theme = getThemeFromContext(this.el, newTheme);

    if (theme !== IcThemeForegroundEnum.Default) {
      this.appearance = theme;
    }
  }

  private hasRouterSlot(): boolean {
    this.routerSlot = this.el.querySelector('[slot="router-item"]');
    if (this.routerSlot) {
      this.routerSlot.ariaLabel = this.routerSlot.textContent;
    }
    return !!this.routerSlot;
  }

  // triggered when attributes of host element change
  private hostMutationCallback = (mutationList: MutationRecord[]): void => {
    let forceComponentUpdate = false;
    mutationList.forEach(({ attributeName }) => {
      if (IC_INHERITED_ARIA.includes(attributeName)) {
        this.inheritedAttributes[attributeName] =
          this.el.getAttribute(attributeName);
        forceComponentUpdate = true;
      }
    });
    if (forceComponentUpdate) {
      forceUpdate(this);
    }
  };

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
      <Host class={{ ["ic-link"]: true, [`ic-link-${appearance}`]: true }}>
        {this.hasRouterSlot() ? (
          <slot name="router-item"></slot>
        ) : (
          <a
            class={{
              ["link"]: href !== null,
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
            {(showIcon || target === "_blank") && (
              <span class="ic-link-open-in-new-icon" innerHTML={OpenInNew} />
            )}
          </a>
        )}
      </Host>
    );
  }
}
