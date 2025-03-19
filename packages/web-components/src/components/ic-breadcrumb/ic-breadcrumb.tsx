import {
  Component,
  Host,
  Prop,
  h,
  Element,
  Method,
  Watch,
} from "@stencil/core";
import { IcBreadcrumbDefault } from "./ic-breadcrumb.types";

import chevronIcon from "../../assets/chevron-icon.svg";
import backIcon from "../../assets/back-icon.svg";
import {
  getSlotElements,
  isPropDefined,
  isSlotUsed,
} from "../../utils/helpers";
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
  private linkSlotContent: HTMLElement;
  private slottedLinkEl: HTMLElement | null;
  private slottedLinkHref: string | null | undefined;

  @Element() el: HTMLIcBreadcrumbElement;

  /**
   * If `true`, aria-current will be set on the breadcrumb.
   */
  @Prop() current?: boolean = false;
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
  @Prop() monochrome?: boolean = false;

  /**
   * The title of the breadcrumb.
   */
  @Prop() pageTitle!: string;

  /**
   * @internal If `true`, back icon will be displayed.
   */
  @Prop({ reflect: true }) showBackIcon?: boolean = false;

  /**
   * @internal Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  // Prevent focus on breadcrumb if current page and contains slotted link
  private updatedSlottedLinkFocus = (): void => {
    // Sets tabindex on wrong element in unit test snapshots
    // - related to known Jest issue: https://github.com/ionic-team/stencil/issues/2830
    if (this.linkSlotContent) {
      this.linkSlotContent.tabIndex = this.current ? -1 : 0; // Prevent focus
    }

    if (this.slottedLinkEl) {
      if (this.current) {
        this.slottedLinkEl.removeAttribute(this.HREF_ATTR); // Prevent screen reader announcing breadcrumb as a link
      } else {
        this.slottedLinkHref &&
          this.slottedLinkEl.setAttribute(this.HREF_ATTR, this.slottedLinkHref);
      }
    }
  };

  private getSlottedLinkEl = (): HTMLElement | null => {
    const link = this.linkSlotContent;
    if (link) {
      const elWithHref = link.hasAttribute(this.HREF_ATTR)
        ? link
        : link.querySelector("[href]");
      return elWithHref as HTMLElement;
    }
    return null;
  };

  componentDidLoad(): void {
    const slottedLinkWrapper =
      this.el.shadowRoot?.querySelector(".link-wrapper");

    if (slottedLinkWrapper) {
      const slotEls = getSlotElements(slottedLinkWrapper);
      if (slotEls) {
        this.linkSlotContent = slotEls[0] as HTMLElement;
      }
      this.slottedLinkEl = this.getSlottedLinkEl();
      this.slottedLinkHref = this.slottedLinkEl?.getAttribute("href");
      this.updatedSlottedLinkFocus();
    }
  }

  componentWillRender(): void {
    this.setSlottedCurrentPageClass();
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

  private renderDefaultBreadcrumb = (
    current: boolean,
    pageTitle: string,
    describedById: string,
    href: string | undefined
  ): IcBreadcrumbDefault => {
    const hasPageTitle =
      pageTitle !== null && isPropDefined(pageTitle) && pageTitle !== "";

    if (current && hasPageTitle) {
      return (
        <span
          class={{
            "current-page-container": current,
          }}
        >
          {isSlotUsed(this.el, "icon") && <slot name="icon"></slot>}
          {pageTitle}
        </span>
      );
    }

    return (
      <ic-link
        theme={this.theme}
        monochrome={this.monochrome}
        href={href}
        class="breadcrumb-link"
        aria-describedby={this.showBackIcon && describedById && describedById}
      >
        {this.showBackIcon && this.renderBackIcon()}
        {isSlotUsed(this.el, "icon") && <slot name="icon"></slot>}
        {pageTitle}
      </ic-link>
    );
  };

  private setSlottedCurrentPageClass = () => {
    const icLink = this.el.querySelector("ic-link");
    const currentPage = "current-page";
    if (icLink) {
      icLink.classList.remove(currentPage);
      if (this.current) {
        const hasCurrentPageClass = icLink.classList.contains(currentPage);
        if (!hasCurrentPageClass) {
          icLink.classList.add("breadcrumb-link", currentPage);
        }
      }
    }
  };

  render() {
    const { current, href, pageTitle } = this;
    const describedById = `${
      pageTitle && pageTitle.toLowerCase().replace(" ", "-")
    }-describedby`;

    const hasPageTitle =
      pageTitle !== null && isPropDefined(pageTitle) && pageTitle !== "";
    const hasHref = href !== null && isPropDefined(href) && href !== "";

    return (
      <Host
        class={{
          "ic-breadcrumb-back": !!this.showBackIcon,
          [`ic-theme-${this.theme}`]: this.theme !== "inherit",
          "ic-breadcrumb-monochrome": !!this.monochrome,
        }}
        aria-current={current && "page"}
        role="listitem"
      >
        <div class="breadcrumb">
          <span innerHTML={chevronIcon} class="chevron" aria-hidden="true" />
          {this.showBackIcon && describedById && (
            <span
              id={describedById}
              class="hide"
            >{`Back to ${pageTitle}`}</span>
          )}
          {hasPageTitle && hasHref ? (
            this.renderDefaultBreadcrumb(
              !!current,
              pageTitle,
              describedById,
              href
            )
          ) : (
            <div class="slotted-link-container">
              {this.showBackIcon && this.renderBackIcon()}
              <span class="link-wrapper">
                <slot />
              </span>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
