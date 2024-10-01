import { Component, Host, Prop, h, Element, Method } from "@stencil/core";
import { IcBreadcrumbDefault } from "./ic-breadcrumb.types";

import chevronIcon from "../../assets/chevron-icon.svg";
import backIcon from "../../assets/back-icon.svg";
import { isPropDefined, isSlotUsed } from "../../utils/helpers";
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
  @Element() el: HTMLIcBreadcrumbElement;

  /**
   * If `true`, aria-current will be set on the breadcrumb.
   */
  @Prop() current?: boolean = false;

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
  @Prop({ reflect: true }) showBackIcon: boolean = false;

  /**
   * @internal Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  componentWillRender(): void {
    this.setSlottedCurrentPageClass();
  }

  /**
   * Sets focus on the breadcrumb.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.el.shadowRoot.querySelector("ic-link")) {
      this.el.shadowRoot.querySelector("ic-link").focus();
    }
  }

  private renderDefaultBreadcrumb = (
    current: boolean,
    pageTitle: string,
    describedById: string,
    href: string
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
        {this.showBackIcon && (
          <div class="back-icon" innerHTML={backIcon}></div>
        )}
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
          "ic-breadcrumb-back": this.showBackIcon,
          [`ic-theme-${this.theme}`]: this.theme !== "inherit",
          "ic-breadcrumb-monochrome": this.monochrome,
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
              current,
              pageTitle,
              describedById,
              href
            )
          ) : (
            <slot />
          )}
        </div>
      </Host>
    );
  }
}
