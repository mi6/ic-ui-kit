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
  getNavItemParentDetails,
  isSlotUsed,
} from "../../utils/helpers";
import {
  IcNavType,
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundNoDefault,
} from "../../utils/types";

import chevronIcon from "../../assets/chevron-icon.svg";

import OpenInNew from "../../assets/OpenInNew.svg";
import { IcExpandedDetail } from "../ic-side-navigation/ic-side-navigation.types";

/**
 * @part link - The `<a>` within ic-navigation-item
 * @slot badge - Badge component overlaying the top right of the icon.
 * @slot icon - Content will be displayed to the left of the label for expanded navigation items, and in replacement of the label for collapsed navigation items.
 */

@Component({
  tag: "ic-navigation-item",
  styleUrl: "ic-navigation-item.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class NavigationItem {
  private navigationSlot: HTMLElement;
  private isInitialRender: boolean = true;
  private itemEl: HTMLElement;

  @Element() el: HTMLIcNavigationItemElement;

  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() focusStyle: IcThemeForegroundNoDefault | IcThemeForeground =
    getThemeForegroundColor();
  @State() inTopNavSideMenu: boolean = false;
  @State() isSideNavMobile: boolean = false;
  @State() isTopNavChild: boolean = false;
  @State() navigationType: IcNavType | "";
  @State() parentEl: HTMLElement;
  @State() sideNavExpanded: boolean = false;

  /**
   * @internal If `true`, the icon and label will be displayed when side navigation is collapsed.
   */
  @Prop() collapsedIconLabel: boolean = false;

  /**
   * @internal If `true`, the navigation item will be displayed within a tooltip.
   */
  @Prop() displayNavigationTooltip: boolean = false;

  /**
   * If `true`, the user can save the linked URL instead of navigating to it.
   */
  @Prop() download?: string | boolean = false;

  /**
   *  @internal If `true`, the navigation item will be expandable.
   */
  @Prop() expandable: boolean = false;

  /**
   * The destination of the navigation item.
   */
  @Prop() href: string = "";

  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string;

  /**
   * The label of the navigation item.
   */
  @Prop() label: string;

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;

  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;

  /**
   *  If `true`, the navigation item will be set in a selected state.
   */
  @Prop() selected: boolean = false;

  /**
   *  The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * @internal - Emitted when item loses focus.
   */
  @Event() childBlur: EventEmitter<void>;

  /**
   * @internal - Emitted when navigation item clicked.
   */
  @Event() navItemClicked: EventEmitter<void>;

  disconnectedCallback(): void {
    if (this.navigationType === "side") {
      this.parentEl.removeEventListener(
        "icSideNavExpanded",
        this.sideNavExpandHandler
      );
    } else if (this.navigationType === "top") {
      this.parentEl.removeEventListener(
        "icTopNavResized",
        this.topNavResizedHandler
      );
    }
  }

  componentWillLoad(): void {
    const { navType, parent } = getNavItemParentDetails(this.el);
    this.navigationType = navType;
    this.parentEl = parent;
    this.deviceSize = getCurrentDeviceSize();

    if (this.navigationType === "side") {
      this.parentEl.addEventListener(
        "icSideNavExpanded",
        this.sideNavExpandHandler
      );
    } else if (this.navigationType === "top") {
      this.parentEl.addEventListener(
        "icTopNavResized",
        this.topNavResizedHandler
      );
      if (this.el.parentElement.tagName === "IC-NAVIGATION-GROUP")
        this.isTopNavChild = true;
      if (
        this.deviceSize <=
        (this.parentEl as HTMLIcTopNavigationElement).customMobileBreakpoint
      )
        this.inTopNavSideMenu = true;
    }

    this.navigationSlot = this.el.querySelector('[slot="navigation-item"]');
    if (this.navigationSlot) {
      this.navigationSlot.ariaLabel = this.navigationSlot.textContent.trim();
    }
  }

  componentDidUpdate(): void {
    this.isInitialRender = false;
  }

  @Listen("themeChange", { target: "document" })
  themeChangeHandler({ detail }: CustomEvent<IcTheme>): void {
    this.focusStyle = detail.mode;
  }

  /**
   * Sets focus on the nav item.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.itemEl?.focus();
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
    const ChevronIconComponent = this.expandable && (
      <div class={{ svg: true }} innerHTML={chevronIcon}></div>
    );
    const IconComponent = this.el.querySelector('[slot="icon"]') && (
      <div class="icon">
        <slot name="icon"></slot>
        {isSlotUsed(this.el, "badge") && <slot name="badge"></slot>}
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
        >
          {IconComponent}

          <ic-typography variant={variant}>{label}</ic-typography>
          <div class="chevron-container">{ChevronIconComponent}</div>
          {target === "_blank" && (
            <span class="open-in-new-icon" innerHTML={OpenInNew} />
          )}
        </a>
      );
    }

    return (
      <div tabindex="0" class="link" ref={(el) => (this.itemEl = el)}>
        {IconComponent}
        <ic-typography variant={variant}>{label}</ic-typography>
        {ChevronIconComponent}
      </div>
    );
  };

  private topNavResizedHandler = ({
    detail,
  }: CustomEvent<{ size: number }>): void => {
    const { size } = detail;
    if (size !== this.deviceSize) {
      this.deviceSize = size;
      this.inTopNavSideMenu =
        size <=
        ((this.parentEl as HTMLIcTopNavigationElement)
          ?.customMobileBreakpoint || DEVICE_SIZES.L);
    }
  };

  private sideNavExpandHandler = ({
    detail,
  }: CustomEvent<IcExpandedDetail>): void => {
    const { sideNavExpanded, sideNavMobile } = detail;
    this.sideNavExpanded = sideNavExpanded;
    this.isSideNavMobile = sideNavMobile;
  };

  private handleBlur = ({ relatedTarget }: FocusEvent) => {
    if (
      relatedTarget === null ||
      (relatedTarget as HTMLElement).tagName !== "IC-NAVIGATION-ITEM"
    ) {
      this.childBlur.emit();
    }
  };

  private handleClick = () => {
    this.navItemClicked.emit();
  };

  private generateTooltipLabel = () => {
    if (this.label) {
      return this.label;
    }

    if (this.navigationSlot) {
      return this.navigationSlot.textContent;
    }

    if (this.el.children[0]) {
      return this.el.children[0].textContent;
    }

    return "";
  };

  private renderNavigationItemContent = () => {
    if (this.label) {
      return this.displayDefaultNavigationItem(
        this.href,
        this.hreflang,
        this.target,
        this.rel,
        this.referrerpolicy,
        this.download,
        this.label
      );
    }

    if (this.navigationSlot) {
      return <slot name="navigation-item"></slot>;
    }
    return <slot></slot>;
  };

  render() {
    const { inTopNavSideMenu, isTopNavChild, selected } = this;

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
          ["expandable"]: this.expandable,
        }}
        onBlur={isTopNavChild && !inTopNavSideMenu ? this.handleBlur : null}
        onClick={this.handleClick}
        aria-current={selected ? "page" : null}
        role="listitem"
      >
        {/* Tooltip enabled by applying navigation-item-side-nav-collapsed class to host */}
        <ic-tooltip
          label={this.generateTooltipLabel()}
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
          {this.renderNavigationItemContent()}
        </ic-tooltip>
      </Host>
    );
  }
}
