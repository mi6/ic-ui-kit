import { Component, Host, Prop, h, Element, Method } from "@stencil/core";
import { IcBreadcrumbDefault } from "./ic-breadcrumb.types";

import chevronIcon from "../../assets/chevron-icon.svg";
import backIcon from "../../assets/back-icon.svg";
import { isSlotUsed } from "../../utils/helpers";

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
   * The title of the breadcrumb.
   */
  @Prop() pageTitle!: string;

  /**
   * @internal If `true`, back icon will be displayed.
   */
  @Prop({ reflect: true }) showBackIcon: boolean = false;

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
      pageTitle !== null && pageTitle !== undefined && pageTitle !== "";

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
      pageTitle !== null && pageTitle !== undefined && pageTitle !== "";
    const hasHref = href !== null && href !== undefined && href !== "";

    return (
      <Host
        class={{
          back: this.showBackIcon,
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
