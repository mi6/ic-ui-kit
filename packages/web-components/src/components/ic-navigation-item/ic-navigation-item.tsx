import {
  Component,
  Element,
  Event,
  EventEmitter,
  forceUpdate,
  Listen,
  Method,
  h,
  Host,
  Prop,
  State,
  Watch,
} from "@stencil/core";

import {
  DEVICE_SIZES,
  getCssProperty,
  getCurrentDeviceSize,
  getBrandForegroundAppearance,
  getNavItemParentDetails,
} from "../../utils/helpers";
import {
  IcNavType,
  IcBrand,
  IcBrandForeground,
  IcBrandForegroundNoDefault,
  IcThemeMode,
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
  private navigationSlot: HTMLElement | null;
  private isInitialRender = true;
  private itemEl?: HTMLElement;
  private hostMutationObserver: MutationObserver | null = null;
  private ANIMATION_DURATION =
    parseInt(getCssProperty("--ic-transition-duration-slow")) || 0;
  private ARIA_LABEL_STRING = "aria-label";
  private isInSideNav = false;

  @Element() el: HTMLIcNavigationItemElement;

  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() focusStyle: IcBrandForegroundNoDefault | IcBrandForeground =
    getBrandForegroundAppearance();
  @State() inTopNavSideMenu = false;
  @State() isSideNavMobile = false;
  @State() isTopNavChild = false;

  @State() navigationType: IcNavType | "";
  @Watch("navigationType")
  navigationTypeChangeHandler(): void {
    this.isInSideNav = this.navigationType === "side";
  }

  @State() parentEl: HTMLElement | null;
  @State() sideNavExpanded = false;
  @State() ariaLabel = "";

  /**
   * @internal If `true`, the icon and label will be displayed when side navigation is collapsed.
   */
  @Prop() collapsedIconLabel = false;

  /**
   * @internal If `true`, the navigation item will be displayed within a tooltip.
   */
  @Prop() displayNavigationTooltip = false;

  /**
   * If `true`, the user can save the linked URL instead of navigating to it.
   */
  @Prop() download: string | boolean = false;

  /**
   *  @internal If `true`, the navigation item will be expandable.
   */
  @Prop() expandable = false;

  /**
   * The destination of the navigation item.
   */
  @Prop() href = "";

  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string;

  /**
   * The label of the navigation item.
   */
  @Prop() label?: string;

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
  @Prop() selected = false;

  /**
   *  The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * @internal - Emitted when item loses focus.
   */
  @Event() childBlur: EventEmitter<void>;

  /**
   * @internal - Emitted when navigation item clicked.
   */
  @Event() navItemClicked: EventEmitter<void>;

  disconnectedCallback(): void {
    if (this.isInSideNav) {
      this.parentEl?.removeEventListener(
        "icSideNavExpanded",
        this.sideNavExpandHandler as EventListener
      );
    } else if (this.navigationType === "top") {
      this.parentEl?.removeEventListener(
        "icTopNavResized",
        this.topNavResizedHandler as EventListener
      );
    }
    this.hostMutationObserver?.disconnect();
  }

  componentWillLoad(): void {
    const { navType, parent } = getNavItemParentDetails(this.el);
    this.navigationType = navType;
    this.isInSideNav = this.navigationType === "side";
    this.parentEl = parent;
    this.deviceSize = getCurrentDeviceSize();

    this.sideNavExpanded =
      this.parentEl?.classList.contains("sm-expanded") ||
      this.parentEl?.classList.contains("xs-menu-open") ||
      false;

    if (this.isInSideNav) {
      this.parentEl?.addEventListener(
        "icSideNavExpanded",
        this.sideNavExpandHandler as EventListener
      );
    } else if (this.navigationType === "top") {
      this.parentEl?.addEventListener(
        "icTopNavResized",
        this.topNavResizedHandler as EventListener
      );
      if (this.el.parentElement?.tagName === "IC-NAVIGATION-GROUP")
        this.isTopNavChild = true;
      if (
        this.deviceSize <=
        (this.parentEl as HTMLIcTopNavigationElement).customMobileBreakpoint
      )
        this.inTopNavSideMenu = true;
    }

    this.navigationSlot = this.el.querySelector('[slot="navigation-item"]');
    if (this.navigationSlot) {
      this.navigationSlot.ariaLabel =
        this.navigationSlot.textContent?.trim() || null;
    }

    if (this.el.hasAttribute(this.ARIA_LABEL_STRING)) {
      this.ariaLabel = this.el.getAttribute(this.ARIA_LABEL_STRING) || "";
    }
  }

  componentDidLoad(): void {
    this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
    this.hostMutationObserver.observe(this.el, {
      attributes: true,
    });
  }

  componentDidUpdate(): void {
    this.isInitialRender = false;
  }

  @Listen("brandChange", { target: "document" })
  brandChangeHandler({ detail }: CustomEvent<IcBrand>): void {
    this.focusStyle = detail.mode;
  }

  /**
   * Sets focus on the nav item.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.itemEl ? this.itemEl.focus() : this.el.querySelector("a")?.focus();
  }

  private displayDefaultNavigationItem = (
    href: string,
    label: string,
    hreflang?: string,
    target?: string,
    rel?: string,
    referrerpolicy?: ReferrerPolicy,
    download?: string | boolean
  ) => {
    const variant =
      this.isTopNavChild || this.inTopNavSideMenu ? "body" : "label";
    const ChevronIconComponent = this.expandable && (
      <div class={{ svg: true }} innerHTML={chevronIcon}></div>
    );
    const slottedBadgeEl = this.el.querySelector('[slot="badge"]');
    const BadgeComponent = slottedBadgeEl && (
      <div
        class={
          slottedBadgeEl.getAttribute("position") === "inline" ||
          this.inTopNavSideMenu
            ? "inline-badge"
            : "badge"
        }
      >
        <slot name="badge"></slot>
      </div>
    );
    const IconComponent = this.el.querySelector('[slot="icon"]') && (
      <div class="icon">
        <slot name="icon"></slot>
        {this.isInSideNav && BadgeComponent}
      </div>
    );

    return href !== "" ? (
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
        aria-label={this.ariaLabel ? this.ariaLabel : null}
      >
        {IconComponent}
        <ic-typography variant={variant}>{label}</ic-typography>
        {target === "_blank" && (
          <span class="open-in-new-icon" innerHTML={OpenInNew} />
        )}
        {BadgeComponent}
        <div class="chevron-container">{ChevronIconComponent}</div>
      </a>
    ) : (
      <div tabindex="0" class="link" ref={(el) => (this.itemEl = el)}>
        {IconComponent}
        <ic-typography variant={variant}>{label}</ic-typography>
        {ChevronIconComponent}
        {BadgeComponent}
      </div>
    );
  };

  private topNavResizedHandler = ({
    detail,
  }: CustomEvent<{ size: number }>) => {
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
  }: CustomEvent<IcExpandedDetail>) => {
    const { sideNavExpanded, sideNavMobile } = detail;
    this.sideNavExpanded = sideNavExpanded;
    this.isSideNavMobile = sideNavMobile;
    this.sideNavToggleTooltip(!sideNavExpanded && !sideNavMobile);
  };

  private handleBlur = ({ relatedTarget }: FocusEvent) => {
    if (
      relatedTarget === null ||
      (relatedTarget as HTMLElement).tagName !== "IC-NAVIGATION-ITEM"
    ) {
      this.childBlur.emit();
    }
  };

  private handleClick = (event: MouseEvent | KeyboardEvent) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Enter" ||
          (event as KeyboardEvent).key === " "))
    ) {
      this.navItemClicked.emit();
    }
  };

  // triggered when attributes of host element change
  private hostMutationCallback = (mutationList: MutationRecord[]) => {
    let forceComponentUpdate = false;
    mutationList.forEach(({ attributeName }) => {
      if (attributeName) {
        const attribute = this.el.getAttribute(attributeName);
        if (attribute && attributeName === this.ARIA_LABEL_STRING) {
          this.ariaLabel = attribute;
          forceComponentUpdate = true;
        }
      }
    });
    if (forceComponentUpdate) {
      forceUpdate(this);
    }
  };

  private generateTooltipLabel = () => {
    if (this.label) {
      return this.label;
    }

    if (this.navigationSlot) {
      return this.navigationSlot.textContent || "";
    }

    return this.el.children[0]?.textContent || "";
  };

  private renderNavigationItemContent = () => {
    if (!this.label && !this.navigationSlot) return <slot></slot>;

    return this.label ? (
      this.displayDefaultNavigationItem(
        this.href,
        this.label,
        this.hreflang,
        this.target,
        this.rel,
        this.referrerpolicy,
        this.download
      )
    ) : (
      <slot name="navigation-item"></slot>
    );
  };

  // Displays tooltip only once the collapsing animation is finished
  private sideNavToggleTooltip = (showTooltip: boolean) => {
    const tooltip = this.el.shadowRoot?.querySelector("ic-tooltip");
    const collapsedClass = "tooltip-navigation-item-side-nav-collapsed";
    let timer;

    if (!tooltip) return;

    if (showTooltip) {
      tooltip.displayTooltip(false); // Hides tooltip for when mouse is hovering over icon
      timer = setTimeout(() => {
        tooltip.classList.add(collapsedClass);
      }, this.ANIMATION_DURATION);
    } else {
      clearTimeout(timer);
      tooltip.classList.remove(collapsedClass);
    }
  };

  render() {
    const {
      inTopNavSideMenu,
      isTopNavChild,
      selected,
      navigationType,
      focusStyle,
      isInitialRender,
      sideNavExpanded,
      displayNavigationTooltip,
      collapsedIconLabel,
      isSideNavMobile,
      expandable,
      isInSideNav,
      theme,
    } = this;

    const isTopNavChildDesktop = isTopNavChild && !inTopNavSideMenu;

    return (
      <Host
        class={{
          "navigation-item": true,
          "navigation-item-selected": !isTopNavChild && selected,
          "navigation-item-top-nav":
            !inTopNavSideMenu && navigationType === "top",
          "navigation-item-top-nav-child": isTopNavChildDesktop,
          "navigation-item-top-nav-child-selected":
            isTopNavChildDesktop && selected,
          "navigation-item-side-menu": inTopNavSideMenu,
          "navigation-item-side-menu-selected": inTopNavSideMenu && selected,
          "navigation-item-page-header": navigationType === "page-header",
          "navigation-item-side-nav": isInSideNav,
          "navigation-item-side-nav-collapsed":
            (!sideNavExpanded || displayNavigationTooltip) && isInSideNav,
          "navigation-item-side-nav-collapsed-with-label":
            !sideNavExpanded &&
            isInSideNav &&
            collapsedIconLabel &&
            !isSideNavMobile,
          "with-transition": !isInitialRender,
          expandable,
          [focusStyle]: isTopNavChild ? isInSideNav : !inTopNavSideMenu,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        onBlur={isTopNavChildDesktop ? this.handleBlur : null}
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        aria-current={selected ? "page" : null}
        role="listitem"
      >
        {/* Tooltip enabled by applying navigation-item-side-nav-collapsed class to host */}
        <ic-tooltip
          label={this.generateTooltipLabel()}
          target="navigation-item"
          placement="right"
          class={{
            "tooltip-navigation-item": true,
            "tooltip-navigation-item-side-nav-collapsed":
              displayNavigationTooltip && isInSideNav,
            "tooltip-long-label-navigation-item-side-nav-expanded":
              this.el.hasAttribute("[display-navigation-tooltip = 'true']"),
          }}
        >
          {this.renderNavigationItemContent()}
        </ic-tooltip>
      </Host>
    );
  }
}
