import {
  Component,
  Host,
  Prop,
  h,
  Element,
  Method,
  Watch,
} from "@stencil/core";

import chevronIcon from "../../assets/chevron-icon.svg";
import backIcon from "../../assets/back-icon.svg";
import { getSlotElements, isSlotUsed } from "../../utils/helpers";
import { IcThemeMode } from "../../utils/types";

/**
 * @slot icon - Content will be rendered to the left of the breadcrumb page title.
 */
@Component({
  tag: "ic-breadcrumb",
  styleUrl: "ic-breadcrumb.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Breadcrumb {
  private HREF_ATTR = "href";
  private linkSlotContent: HTMLElement | null = null;
  private slottedLinkEl: HTMLElement | null = null;
  private slottedLinkHref: string | null = null;

  @Element() el: HTMLIcBreadcrumbElement;

  /**
   * If `true`, aria-current will be set on the breadcrumb.
   */
  @Prop() current = false;
  @Watch("current")
  watchCurrentHandler(): void {
    this.updatedSlottedLinkFocus();
    this.el.ariaCurrent = this.current ? "page" : null;
  }

  /**
   * The URL that the breadcrumb link points to.
   */
  @Prop() href?: string;

  /**
   * @internal If `true`, the breadcrumb will display as black in the light theme, and white in the dark theme.
   */
  @Prop() monochrome = false;

  /**
   * The title of the breadcrumb.
   */
  @Prop() pageTitle!: string;

  /**
   * @internal If `true`, back icon will be displayed.
   */
  @Prop({ reflect: true }) showBackIcon = false;

  /**
   * @internal Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  // Prevent focus on breadcrumb if current page and contains slotted link
  private updatedSlottedLinkFocus = () => {
    // Sets tabindex on wrong element in unit test snapshots
    // - related to known Jest issue: https://github.com/ionic-team/stencil/issues/2830
    if (this.linkSlotContent) {
      this.linkSlotContent.tabIndex = this.current ? -1 : 0; // Prevent focus
    }

    if (this.current) {
      this.slottedLinkEl?.removeAttribute(this.HREF_ATTR); // Prevent screen reader announcing breadcrumb as a link
    } else if (this.slottedLinkHref) {
      this.slottedLinkEl?.setAttribute(this.HREF_ATTR, this.slottedLinkHref);
    }
  };

  private getSlottedLinkEl = () => {
    if (!this.linkSlotContent) return null;

    return this.linkSlotContent.hasAttribute(this.HREF_ATTR)
      ? this.linkSlotContent
      : this.linkSlotContent.querySelector<HTMLElement>("[href]");
  };

  componentDidLoad(): void {
    const slottedLinkWrapper =
      this.el.shadowRoot?.querySelector(".link-wrapper");

    if (slottedLinkWrapper) {
      const slotEls = getSlotElements(slottedLinkWrapper);
      if (slotEls) {
        this.linkSlotContent = slotEls[0] as HTMLElement;
        this.slottedLinkEl = this.getSlottedLinkEl();
        this.slottedLinkHref = this.slottedLinkEl?.getAttribute("href") || null;
      }
      this.updatedSlottedLinkFocus();
    }
  }

  componentWillRender(): void {
    const icLink = this.el.querySelector("ic-link");
    if (icLink) {
      const CURRENT_PAGE = "current-page";
      icLink.classList.remove(CURRENT_PAGE);

      if (this.current && !icLink.classList.contains(CURRENT_PAGE)) {
        icLink.classList.add("breadcrumb-link", CURRENT_PAGE);
      }
    }
  }

  /**
   * Sets focus on the breadcrumb.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.el.shadowRoot?.querySelector("ic-link")?.focus();
  }

  private renderBackIcon = () => (
    <div class="back-icon" innerHTML={backIcon}></div>
  );

  render() {
    const { current, href, monochrome, pageTitle, showBackIcon, theme } = this;
    const describedById = `${pageTitle
      ?.toLowerCase()
      .replace(" ", "-")}-describedby`;

    return (
      <Host
        class={{
          "ic-breadcrumb-back": showBackIcon,
          "ic-breadcrumb-monochrome": monochrome,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        aria-current={current && "page"}
        role="listitem"
      >
        <div class="breadcrumb">
          <span innerHTML={chevronIcon} class="chevron" aria-hidden="true" />
          {showBackIcon && (
            <span
              id={describedById}
              class="hide"
            >{`Back to ${pageTitle}`}</span>
          )}
          {!href ? (
            <div class="slotted-link-container">
              {showBackIcon && this.renderBackIcon()}
              <span class="link-wrapper">
                <slot />
              </span>
            </div>
          ) : current ? (
            <span class="current-page-container">
              {isSlotUsed(this.el, "icon") && <slot name="icon"></slot>}
              {pageTitle}
            </span>
          ) : (
            <ic-link
              theme={theme}
              monochrome={monochrome}
              href={href}
              class="breadcrumb-link"
              aria-describedby={showBackIcon && describedById}
            >
              {showBackIcon && this.renderBackIcon()}
              {isSlotUsed(this.el, "icon") && <slot name="icon"></slot>}
              {pageTitle}
            </ic-link>
          )}
        </div>
      </Host>
    );
  }
}
