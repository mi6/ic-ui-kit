import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Method,
  h,
  Host,
  Prop,
  State,
} from "@stencil/core";

import {
  DEVICE_SIZES,
  getCurrentDeviceSize,
  getThemeForegroundColor,
  getParentElementType,
  getNavItemParentDetails,
} from "../../utils/helpers";
import { IcNavType, IcTheme } from "../../utils/types";

import chevronIcon from "../../assets/chevron-icon.svg";

import OpenInNew from "../../assets/OpenInNew.svg";

/**
 * @part link - The `<a>` within ic-navigation-item
 */

@Component({
  tag: "ic-navigation-item",
  styleUrl: "ic-navigation-item.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class NavigationItem {
  @Element() el: HTMLIcNavigationItemElement;

  /**
   * The label of the navigation item.
   */
  @Prop() label: string;

  /**
   * The destination of the navigation item.
   */
  @Prop() href: string = "";

  /**
   *  The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;

  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string;

  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;

  /**
   * If `true`, the user can save the linked URL instead of navigating to it.
   */
  @Prop() download?: string | boolean = false;

  /**
   *  If `true`, the navigation item will be set in a selected state.
   */
  @Prop() selected: boolean = false;

  /**
   *  @internal If `true`, the navigation item will be expandable.
   */
  @Prop() expandable: boolean = false;
  /**
   * @internal If `true`, the navigation item will be displayed within a tooltip.
   */
  @Prop() displayNavigationTooltip: boolean = false;
  /**
   * @internal If `true`, the icon and label will be displayed when side navigation is collapsed.
   */
  @Prop() collapsedIconLabel: boolean = false;

  @State() isTopNavChild: boolean = false;
  @State() inTopNavSideMenu: boolean = false;
  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() focusStyle = getThemeForegroundColor();
  @State() navigationType: IcNavType | "";
  @State() parentEl: HTMLElement;
  @State() sideNavExpanded: boolean = false;
  @State() isSideNavMobile: boolean = false;

  private itemEl: HTMLElement;
  private navigationSlot: HTMLElement;

  /**
   * @internal - Emitted when item loses focus.
   */
  @Event() childBlur: EventEmitter<void>;

  /**
   * @internal - Emitted when navigation item clicked.
   */
  @Event() navItemClicked: EventEmitter<void>;

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.focusStyle = theme.mode;
  }

  private topNavResizedHandler = (ev: CustomEvent): void => {
    const newSize = ev.detail.size;
    if (newSize !== this.deviceSize) {
      this.deviceSize = newSize;
      this.inTopNavSideMenu = newSize <= DEVICE_SIZES.L;
    }
  };

  private sideNavExpandHandler = (ev: CustomEvent): void => {
    const { sideNavExpanded, sideNavMobile } = ev.detail;
    this.sideNavExpanded = sideNavExpanded;
    this.isSideNavMobile = sideNavMobile;
  };

  /**
   * Sets focus on the nav item.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.itemEl) {
      this.itemEl.focus();
    }
  }

  private handleBlur = (ev: FocusEvent) => {
    if (ev.relatedTarget !== null) {
      const target = ev.relatedTarget as HTMLElement;
      if (target.tagName === "IC-NAVIGATION-ITEM") {
        return;
      }
    }
    this.childBlur.emit();
  };

  private handleClick = () => {
    this.navItemClicked.emit();
  };

  componentWillLoad(): void {
    const navParentDetails = getNavItemParentDetails(this.el);
    this.navigationType = navParentDetails.navType;
    this.parentEl = navParentDetails.parent;

    if (this.navigationType === "side") {
      this.parentEl.addEventListener(
        "sideNavExpanded",
        this.sideNavExpandHandler
      );
    } else if (this.navigationType === "top") {
      this.parentEl.addEventListener(
        "topNavResized",
        this.topNavResizedHandler
      );
    }

    if (
      getParentElementType(this.el) === "IC-NAVIGATION-GROUP" &&
      this.navigationType === "top"
    ) {
      this.isTopNavChild = true;
    }

    this.deviceSize = getCurrentDeviceSize();
    if (this.deviceSize <= DEVICE_SIZES.L && this.navigationType === "top") {
      this.inTopNavSideMenu = true;
    }

    this.navigationSlot = this.el.querySelector('[slot="navigation-item"]');
    if (this.navigationSlot) {
      this.navigationSlot.ariaLabel = this.navigationSlot.textContent.trim();
    }
  }

  private isInitialRender: boolean = true;

  componentDidUpdate(): void {
    this.isInitialRender = false;
  }

  disconnectedCallback(): void {
    if (this.navigationType === "side") {
      this.parentEl.removeEventListener(
        "sideNavExpanded",
        this.sideNavExpandHandler
      );
    } else if (this.navigationType === "top") {
      this.parentEl.removeEventListener(
        "topNavResized",
        this.topNavResizedHandler
      );
    }
  }

  private displayDefaultNavigationItem = (
    href: string,
    hreflang: string,
    target: string,
    rel: string,
    referrerpolicy: ReferrerPolicy,
    download: string | boolean,
    label: string
  ): HTMLElement => {
    const variant =
      this.isTopNavChild || this.inTopNavSideMenu ? "body" : "label";
    const tooltipId = "ic-tooltip-navigation-item";
    const ChevronIconComponent = this.expandable && (
      <div class={{ svg: true }} innerHTML={chevronIcon}></div>
    );
    const IconComponent = this.el.querySelector('[slot="icon"]') && (
      <div class="icon">
        {" "}
        <slot name="icon"></slot>{" "}
      </div>
    );

    if (href !== "") {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          hreflang={hreflang}
          referrerPolicy={referrerpolicy}
          download={download !== false ? download : null}
          class="link"
          ref={(el) => (this.itemEl = el)}
          part="link"
          aria-labelledby={tooltipId}
        >
          {IconComponent}

          <ic-typography variant={variant}>{label}</ic-typography>
          {ChevronIconComponent}
          {target === "_blank" && (
            <span class="open-in-new-icon" innerHTML={OpenInNew} />
          )}
        </a>
      );
    }

    return (
      <div
        tabindex="0"
        class="link"
        ref={(el) => (this.itemEl = el)}
        aria-labelledby={tooltipId}
      >
        {IconComponent}
        <ic-typography variant={variant}>{label}</ic-typography>
        {ChevronIconComponent}
      </div>
    );
  };

  render() {
    const {
      href,
      hreflang,
      target,
      rel,
      referrerpolicy,
      download,
      label,
      inTopNavSideMenu,
      isTopNavChild,
      selected,
      navigationSlot,
    } = this;

    return (
      <Host
        class={{
          ["navigation-item"]: true,
          ["navigation-item-top-nav"]:
            !inTopNavSideMenu && this.navigationType === "top",
          ["navigation-item-top-nav-child-selected"]:
            isTopNavChild && !inTopNavSideMenu && selected,
          [this.focusStyle]:
            (!inTopNavSideMenu && !isTopNavChild) ||
            (this.navigationType === "side" && isTopNavChild),
          ["navigation-item-selected"]: !isTopNavChild && selected,
          ["navigation-item-side-menu"]: inTopNavSideMenu,
          ["navigation-item-side-menu-selected"]: inTopNavSideMenu && selected,
          ["navigation-item-top-nav-child"]: isTopNavChild && !inTopNavSideMenu,
          ["navigation-item-page-header"]:
            this.navigationType === "page-header",
          ["with-transition"]: !this.isInitialRender,
          ["navigation-item-side-nav"]: this.navigationType === "side",
          ["navigation-item-side-nav-collapsed"]:
            (!this.sideNavExpanded || this.displayNavigationTooltip) &&
            this.navigationType === "side",
          ["navigation-item-side-nav-collapsed-with-label"]:
            !this.sideNavExpanded &&
            this.navigationType === "side" &&
            this.collapsedIconLabel &&
            !this.isSideNavMobile,
        }}
        onBlur={isTopNavChild && !inTopNavSideMenu ? this.handleBlur : null}
        onClick={this.handleClick}
        aria-current={selected ? "page" : null}
        role="listitem"
      >
        {/* Tooltip enabled by applying navigation-item-side-nav-collapsed class to host */}
        <ic-tooltip
          label={label || navigationSlot.textContent}
          target="navigation-item"
          placement="right"
          class={{
            ["tooltip-navigation-item"]: true,
            ["tooltip-navigation-item-side-nav-collapsed"]:
              (!this.sideNavExpanded || this.displayNavigationTooltip) &&
              this.navigationType === "side",
            ["tooltip-long-label-navigation-item-side-nav-expanded"]:
              this.el.hasAttribute("[display-navigation-tooltip = 'true']"),
          }}
        >
          {navigationSlot ? (
            <slot name="navigation-item"></slot>
          ) : (
            this.displayDefaultNavigationItem(
              href,
              hreflang,
              target,
              rel,
              referrerpolicy,
              download,
              label
            )
          )}
        </ic-tooltip>
      </Host>
    );
  }
}
