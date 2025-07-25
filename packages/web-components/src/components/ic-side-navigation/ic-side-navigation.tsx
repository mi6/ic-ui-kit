import {
  Component,
  Host,
  h,
  Prop,
  State,
  Element,
  Listen,
  Event,
  EventEmitter,
  Watch,
} from "@stencil/core";

import menuIcon from "../../assets/hamburger-menu-icon.svg";
import closeIcon from "../../assets/close-icon.svg";
import chevronIcon from "../../assets/chevron-icon.svg";
import {
  getCurrentDeviceSize,
  DEVICE_SIZES,
  checkResizeObserver,
  isSlotUsed,
  getBrandForegroundAppearance,
  getCssProperty,
  hasClassificationBanner,
  onComponentRequiredPropUndefined,
  isEmptyString,
  isPropDefined,
} from "../../utils/helpers";
import {
  IcBrand,
  IcBrandForeground,
  IcBrandForegroundEnum,
} from "../../utils/types";
import { IcTopBar, IcExpandedDetail } from "./ic-side-navigation.types";

/**
 * @slot app-icon - Content will be rendered adjacent to the app title at the very top of the side navigation.
 * @slot app-title - Handle routing by nesting a route in the app title.
 * @slot primary-navigation - Content will be rendered at the top of the side navigation.
 * @slot secondary-navigation - Content will be rendered at the bottom of the side navigation.
 */

@Component({
  tag: "ic-side-navigation",
  styleUrl: "ic-side-navigation.css",
  shadow: true,
})
export class SideNavigation {
  private ANIMATION_DURATION =
    parseInt(getCssProperty("--ic-transition-duration-slow")) || 0;
  private IC_NAVIGATION_ITEM: string = "ic-navigation-item";
  private resizeObserver: ResizeObserver | null = null;
  private COLLAPSED_ICON_LABELS_END = "collapsed-icon-labels-end";
  private COLLAPSED_ICON_LABELS_START = "collapsed-icon-labels-start";
  private menuButton?: HTMLIcButtonElement;

  @Element() el: HTMLIcSideNavigationElement;

  @State() deviceSize: number = getCurrentDeviceSize();
  @State() deviceSizeAppTitle: number = DEVICE_SIZES.S;
  @State() foregroundColor: IcBrandForeground = getBrandForegroundAppearance();
  @State() hasSecondaryNavigation: boolean = false;
  @State() menuExpanded: boolean = false;
  @State() menuOpen: boolean = false;

  /**
   * The app title to be displayed. This is required, unless a slotted app title link is used.
   */
  @Prop() appTitle?: string;

  /**
   * If `true`, the side navigation will close when a navigation item is clicked. This behaviour is only applicable on larger device sizes.
   */
  @Prop() closeOnNavItemClick?: boolean = false;

  /**
   * If `true`, the icon and label will appear when side navigation is collapsed.
   */
  @Prop() collapsedIconLabels?: boolean = false;

  /**
   * If `true`, automatic parent wrapper styling will be disabled.
   */
  @Prop() disableAutoParentStyling?: boolean = false;

  /**
   * If `true`, the side navigation will not display as a top bar on small devices.
   */
  @Prop() disableTopBarBehaviour?: boolean = false;

  /**
   * If `true`, the side navigation will display in an expanded state.
   */
  @Prop() expanded?: boolean = false;

  @Watch("expanded")
  watchExpandedHandler(): void {
    this.toggleMenuExpanded(this.expanded!);
  }

  /**
   * The URL that the app title link points to.
   */
  @Prop() href?: string = "/";

  /**
   * @internal If `true`, side navigation will be contained by its parent element.
   */
  @Prop() inline?: boolean = false;

  /**
   * The short title of the app to be displayed at small screen sizes in place of the app title.
   */
  @Prop() shortAppTitle?: string = "";

  /**
   * If `true`, the menu expand button will be removed (PLEASE NOTE: This takes effect on screen sizes 992px and above).
   */
  @Prop() static?: boolean = false;

  /**
   * The status of the app to be displayed.
   */
  @Prop() status?: string;

  /**
   * The version of the app to be displayed.
   */
  @Prop() version?: string;

  /**
   * Emitted when the side navigation is collapsed and expanded.
   */
  @Event() icSideNavExpanded: EventEmitter<IcExpandedDetail>;

  componentWillLoad(): void {
    this.setMenuExpanded(this.expanded!);

    if (this.collapsedIconLabels) {
      this.setCollapsedIconLabels();
    }

    this.hasSecondaryNavigation = isSlotUsed(this.el, "secondary-navigation");
  }

  componentDidLoad(): void {
    this.emitSideNavigationExpanded({
      sideNavExpanded: this.menuExpanded,
      sideNavMobile:
        this.deviceSize === DEVICE_SIZES.S && !this.disableTopBarBehaviour,
    });

    checkResizeObserver(this.runResizeObserver);
    this.styleSlottedCollapsedIconLabel();
    this.arrangeSlottedNavigationItem(this.menuExpanded);
    this.displayTooltipWithExpandedLongLabel(this.menuExpanded);

    this.setExpandedButtonHeight();

    if (this.closeOnNavItemClick) {
      this.el.addEventListener(
        "navItemClicked",
        this.handleNavItemClicked as EventListener
      );
    }

    !isSlotUsed(this.el, "app-title") &&
      onComponentRequiredPropUndefined(
        [{ prop: this.appTitle, propName: "app-title" }],
        "Side Navigation"
      );
  }

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }

    this.el?.removeEventListener("transitionend", this.transitionEndHandler);

    if (this.closeOnNavItemClick) {
      this.el.removeEventListener(
        "navItemClicked",
        this.handleNavItemClicked as EventListener
      );
    }
  }

  @Listen("brandChange", { target: "document" })
  brandChangeHandler({ detail }: CustomEvent<IcBrand>): void {
    this.foregroundColor = detail.mode;
  }

  private emitSideNavigationExpanded = (objDetails: {
    sideNavExpanded: boolean;
    sideNavMobile?: boolean;
  }): void => {
    this.icSideNavExpanded.emit({
      sideNavExpanded: objDetails.sideNavExpanded,
      sideNavMobile: !!objDetails.sideNavMobile,
    });
  };

  private toggleMenu = (): void => {
    this.menuOpen = !this.menuOpen;
    this.setMobileMenuAriaAttributes(this.menuOpen);

    this.arrangeSlottedNavigationItem(this.menuOpen);

    this.setToggleMenuFlyoutMenuVisibility(this.menuOpen);

    this.emitSideNavigationExpanded({
      sideNavExpanded: this.menuOpen,
      sideNavMobile: true,
    });
  };

  private setToggleMenuFlyoutMenuVisibility = (menuOpen: boolean) => {
    const sideNav = this.el.shadowRoot?.querySelector(
      "#side-navigation"
    ) as HTMLDivElement;
    const sideNavInner = sideNav.querySelector(
      ".side-navigation-inner"
    ) as HTMLElement;
    const bottomWrapper = sideNav.querySelector(
      ".bottom-wrapper"
    ) as HTMLElement;

    const menuVisibilityVisible = "menu-visibility-visible";

    if (menuOpen) {
      bottomWrapper.classList.add(menuVisibilityVisible);
      sideNavInner.classList.add(menuVisibilityVisible);
    } else {
      setTimeout(() => {
        sideNavInner.classList.remove(menuVisibilityVisible);
        bottomWrapper.classList.remove(menuVisibilityVisible);
      }, this.ANIMATION_DURATION);
    }
  };

  private setMobileMenuAriaAttributes = (menuOpen: boolean) => {
    if (this.menuButton) {
      this.menuButton.setAttribute("aria-expanded", `${menuOpen}`);
      this.menuButton.setAttribute(
        "aria-label",
        `${menuOpen ? "Close" : "Open"} navigation menu`
      );
    }
  };

  private setAndRemoveNoWrapAfterMenuExpanded = () => {
    const appTitle =
      this.el.shadowRoot?.querySelector(".title-link ic-typography") ||
      this.el.querySelector("[slot='app-title']");

    appTitle?.classList.add("ic-typography-no-wrap");

    setTimeout(() => {
      appTitle?.classList.remove("ic-typography-no-wrap");
    }, this.ANIMATION_DURATION);
  };

  private toggleMenuExpanded = (expanded: boolean): void => {
    this.menuExpanded = expanded;

    if (this.menuExpanded) {
      this.setAndRemoveNoWrapAfterMenuExpanded();
      this.el.shadowRoot
        ?.querySelector(".app-title-inner-wrapper")
        ?.classList.add("app-title-show");
    } else {
      this.el.style.setProperty("--navigation-item-width", "320px");
      this.el.shadowRoot
        ?.querySelector(".app-title-inner-wrapper")
        ?.classList.remove("app-title-show");

      this.el.addEventListener("transitionend", (e) => {
        if (e.propertyName === "width") {
          this.el.style.setProperty("--navigation-item-width", null);
        }
      });
    }

    this.arrangeSlottedNavigationItem(this.menuExpanded);

    this.displayTooltipWithExpandedLongLabel(this.menuExpanded);

    if (this.collapsedIconLabels) {
      this.animateCollapsedIconLabels();
    }

    this.setExpandedButtonHeight();
    this.emitSideNavigationExpanded({ sideNavExpanded: this.menuExpanded });
  };

  /**
   * In order to style nested slotted elements (e.g. using React Router components), this method
   * rearranges the a tag and labels and adds inline styling expand/collapsed animations as external CSS classes are not
   * do not take affect.
   * @param menuExpanded boolean - true or false depending on side navigation state
   */
  private arrangeSlottedNavigationItem = (menuExpanded?: boolean) => {
    const navItems = this.el.querySelectorAll("ic-navigation-item");
    navItems.forEach((navItem) => {
      const isNamedSlot = isSlotUsed(navItem, "navigation-item");
      const isUnnamedSlot =
        navItem.children[0] && !navItem.children[0].getAttribute("slot");
      if (isNamedSlot || isUnnamedSlot) {
        let navItemSlot;
        if (isNamedSlot) {
          navItemSlot = navItem.querySelector("[slot='navigation-item']");
        } else {
          navItemSlot = navItem.children[0];
        }
        const iconWrapper = document.createElement("div");
        const icon = navItemSlot?.querySelector("svg");
        const badge = navItemSlot?.querySelector("ic-badge");
        const label = navItem.textContent?.trim();
        const icTypography = document.createElement("ic-typography");
        icTypography.classList.add(
          "ic-typography-label",
          "hydrated",
          "navigation-item-side-nav-slotted-text"
        );

        iconWrapper.style.position = "relative";
        iconWrapper.style.height = "var(--ic-space-lg)";

        icon && iconWrapper.append(icon);
        badge && iconWrapper.append(badge);

        if (label) {
          icTypography.textContent = label;
        }

        if (navItemSlot) {
          navItemSlot.textContent = "";
          navItemSlot.append(iconWrapper);
          navItemSlot.append(icTypography);
        }

        if (this.collapsedIconLabels) {
          this.styleSlottedCollapsedIconLabels(!!menuExpanded, icTypography);
        } else {
          this.styleSlottedIconLabels(!!menuExpanded, icTypography);
        }
      }
    });
  };

  private styleSlottedCollapsedIconLabels = (
    menuExpanded: boolean,
    icTypography: HTMLIcTypographyElement
  ) => {
    if (menuExpanded) {
      icTypography.style.marginTop = "0";
      icTypography.style.whiteSpace = "nowrap";
      icTypography.style.overflow = "hidden";
      icTypography.style.textOverflow = "ellipsis";
    } else {
      icTypography.style.marginTop = "10px";
      icTypography.style.whiteSpace = "nowrap";
      icTypography.style.overflow = "hidden";
      icTypography.style.textOverflow = "ellipsis";
    }
  };

  private setExpandedButtonHeight = () => {
    const appStatusWrapper = this.el.shadowRoot?.querySelector(
      "#side-navigation > .bottom-wrapper > .bottom-side-nav > .app-status-wrapper"
    ) as HTMLDivElement;

    if (appStatusWrapper.offsetHeight !== 0) {
      this.el.style.setProperty(
        "--sm-side-navigation-bottom-bar-height",
        `${appStatusWrapper.offsetHeight}px`
      );
    }
  };

  private styleSlottedIconLabels = (
    menuExpanded: boolean,
    icTypography: HTMLSpanElement
  ) => {
    if (menuExpanded) {
      icTypography.style.opacity = "1";
      icTypography.style.visibility = "visible";
      icTypography.style.transition =
        "visibility 0s, opacity var(--ic-easing-transition-slow)";
    } else {
      icTypography.style.opacity = "0";
      icTypography.style.visibility = "hidden";
      icTypography.style.transition =
        "visibility 0s, opacity var(--ic-easing-transition-slow)";
    }
  };

  private transitionHandler = (type: string) => {
    const primaryNavigationWrapper = this.el.shadowRoot?.querySelector(
      ".primary-navigation"
    );

    const secondaryNavigationWrapper = this.el.shadowRoot?.querySelector(
      ".bottom-wrapper > .secondary-navigation"
    );

    const classToRemove =
      type === "start"
        ? this.COLLAPSED_ICON_LABELS_END
        : this.COLLAPSED_ICON_LABELS_START;

    const classToAdd =
      type === "start"
        ? this.COLLAPSED_ICON_LABELS_START
        : this.COLLAPSED_ICON_LABELS_END;

    if (primaryNavigationWrapper) {
      primaryNavigationWrapper.classList.remove(classToRemove);
      primaryNavigationWrapper.classList.add(classToAdd);
    }

    if (secondaryNavigationWrapper) {
      secondaryNavigationWrapper.classList.remove(classToRemove);
      secondaryNavigationWrapper.classList.add(classToAdd);
    }
  };

  private transitionEndHandler = () => {
    this.transitionHandler("end");
  };

  private animateCollapsedIconLabels = () => {
    this.transitionHandler("start");
    this.transitionEndHandler();

    this.el.addEventListener("transitionend", this.transitionEndHandler);
  };

  private paddingIconWidth = (
    navItems: HTMLIcNavigationItemElement[]
  ): number => {
    const navItemLink =
      (navItems[0].shadowRoot &&
        (navItems[0].shadowRoot.querySelector("ic-tooltip a") ||
          navItems[0].shadowRoot.querySelector("ic-tooltip div"))) ||
      navItems[0].querySelector("a") ||
      navItems[0].querySelector("div");
    const navItemSVG = navItems[0].querySelector("svg");

    if (navItemLink && navItemSVG) {
      const navStyles = {
        gap: window.getComputedStyle(navItemLink).gap,
        iconWidth: window.getComputedStyle(navItemSVG).width,
        paddingLeft: window.getComputedStyle(navItemLink).paddingLeft,
      };

      return Object.values(navStyles).reduce((prev, curr) => {
        return (prev += parseInt(curr));
      }, 0);
    }

    return 0;
  };

  private displayTooltipWithExpandedLongLabel = (menuExpanded: boolean) => {
    let timer;

    if (menuExpanded) {
      timer = setTimeout(() => {
        const sideNavWidth = this.el.clientWidth;

        const navigationItems: HTMLIcNavigationItemElement[] = Array.from(
          this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)
        );

        const paddingIconDelta = navigationItems.length
          ? this.paddingIconWidth(navigationItems)
          : 0;

        navigationItems.forEach(
          (navigationItem: HTMLIcNavigationItemElement) => {
            const icTypographyScrollWidth =
              (
                navigationItem.shadowRoot &&
                navigationItem.shadowRoot.querySelector(
                  "ic-tooltip .link ic-typography.ic-typography-label"
                )
              )?.scrollWidth ||
              navigationItem.querySelector("ic-typography.ic-typography-label")
                ?.scrollWidth;

            if (
              icTypographyScrollWidth &&
              icTypographyScrollWidth > sideNavWidth - paddingIconDelta
            ) {
              navigationItem.setAttribute("display-navigation-tooltip", "true");
            }
          }
        );
      }, this.ANIMATION_DURATION);
    } else {
      clearTimeout(timer);

      const navigationItems: HTMLIcNavigationItemElement[] = Array.from(
        this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)
      );
      navigationItems.forEach((navigationItem: HTMLIcNavigationItemElement) => {
        navigationItem.setAttribute("display-navigation-tooltip", "false");
      });
    }
  };

  private setMenuExpanded = (expanded: boolean): void => {
    this.menuExpanded = expanded;
  };

  private handleNavItemClicked = () => {
    if (
      !this.menuOpen &&
      this.deviceSize > DEVICE_SIZES.S &&
      this.menuExpanded
    ) {
      setTimeout(() => {
        this.toggleMenuExpanded(false);
      }, 0);
    }
  };

  /**
   * As the mobile top bar is fixed, a padding top is required
   * to push main content down the height of the mobile top bar
   * @param value - padding-top css value
   */
  private setParentPaddingTop = (value: string) => {
    this.el.parentElement?.style.setProperty("padding-top", value);
  };

  private setParentPaddingLeft = (value: string) => {
    this.el.parentElement?.style.setProperty("padding-left", value);
  };

  private renderAppTitle = (isAppNameSubtitleVariant: boolean) => {
    const displayShortAppTitle =
      this.deviceSize <= DEVICE_SIZES.S && !isEmptyString(this.shortAppTitle);
    return (
      <ic-typography
        variant={
          displayShortAppTitle || isAppNameSubtitleVariant
            ? "subtitle-small"
            : "h3"
        }
        aria-label={
          displayShortAppTitle
            ? `${this.appTitle} (${this.shortAppTitle})`
            : undefined
        }
      >
        <h1>{displayShortAppTitle ? this.shortAppTitle : this.appTitle}</h1>
      </ic-typography>
    );
  };

  private resizeObserverCallback = (currSize: number) => {
    this.deviceSize = currSize;

    const isSDeviceEnableTop =
      currSize === DEVICE_SIZES.S && !this.disableTopBarBehaviour;

    if (!this.disableAutoParentStyling) {
      const topBarHeight =
        this.el.shadowRoot?.querySelector(".top-bar")?.scrollHeight;
      this.setParentPaddingTop(isSDeviceEnableTop ? `${topBarHeight}px` : "0");
      if (isSDeviceEnableTop) this.setParentPaddingLeft("0");
      if (isSDeviceEnableTop && this.inline) {
        this.el.parentElement?.style.setProperty(
          "height",
          `calc(100% - ${topBarHeight}px)`
        );
      } else if (!isSDeviceEnableTop) {
        this.el.parentElement?.style.setProperty("height", "100%");
      }
    }

    const notSmallDisableTop =
      currSize > DEVICE_SIZES.S || this.disableTopBarBehaviour;

    if (!this.disableAutoParentStyling) {
      const paddingLeft = `calc(var(--ic-space-xxl) ${
        this.collapsedIconLabels ? "* 2" : "+ var(--ic-space-xs)"
      })`;

      if (currSize > DEVICE_SIZES.L) {
        this.setParentPaddingTop("0");
        this.setParentPaddingLeft("0");
      } else if (
        notSmallDisableTop &&
        currSize <= DEVICE_SIZES.M &&
        this.static
      ) {
        this.setParentPaddingLeft(paddingLeft);
      } else if (notSmallDisableTop && currSize <= DEVICE_SIZES.L) {
        this.setParentPaddingLeft(
          this.static && this.menuExpanded
            ? "calc(var(--ic-space-xl) * 10)"
            : paddingLeft
        );
      }
    }
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      const currSize = getCurrentDeviceSize();
      this.deviceSizeAppTitle = currSize;
      this.resizeObserverCallback(currSize);
    });

    this.resizeObserver.observe(document.body, { box: "content-box" });
  };

  private setCollapsedIconLabels = () => {
    const navigationItems: HTMLIcNavigationItemElement[] = Array.from(
      this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)
    );
    navigationItems.forEach((navigationItem: HTMLIcNavigationItemElement) => {
      navigationItem.setAttribute("collapsed-icon-label", "true");
    });
  };

  private styleSlottedCollapsedIconLabel = () => {
    const dynamicSlottedIcTypographyComps: HTMLIcTypographyElement[] =
      Array.from(
        this.el.querySelectorAll(".navigation-item-side-nav-slotted-text")
      );

    dynamicSlottedIcTypographyComps.forEach((icTypography) => {
      if (
        icTypography.parentElement?.parentElement?.classList.contains(
          "navigation-item-side-nav-collapsed-with-label"
        )
      ) {
        icTypography.style.whiteSpace = "nowrap";
        icTypography.style.overflow = "hidden";
        icTypography.style.textOverflow = "ellipsis";
        icTypography.style.marginTop = "10px";
      }
    });
  };

  private renderTopBar = ({
    isSDevice,
    foregroundColor,
    menuOpen,
    href,
    isAppNameSubtitleVariant,
  }: IcTopBar) => {
    const hasTitle = this.appTitle !== "" && isPropDefined(this.appTitle);

    const Component = isSlotUsed(this.el, "app-title") ? "div" : "a";

    const attrs = Component == "a" && {
      href: href,
    };

    return (
      <div
        class={{
          "top-bar": true,
          [this.foregroundColor]: true,
        }}
      >
        {isSDevice && (
          <nav
            aria-labelledby="menu-navigation-toggle-button-landmark"
            aria-hidden="false"
          >
            <ic-button
              aria-label="Open navigation menu"
              class="menu-button"
              id="menu-button"
              variant="secondary"
              size="small"
              full-width="true"
              theme={
                foregroundColor == "default" || foregroundColor == "light"
                  ? "light"
                  : "dark"
              }
              monochrome
              onClick={this.toggleMenu}
              ariaOwnsId="side-navigation"
              aria-haspopup="true"
              aria-expanded="false"
              ref={(el) => (this.menuButton = el)}
            >
              <span
                class="mobile-top-bar-menu-icon"
                slot="left-icon"
                innerHTML={menuOpen ? closeIcon : menuIcon}
              ></span>
              {menuOpen ? "Close" : "Menu"}
            </ic-button>
            <span
              id="menu-navigation-toggle-button-landmark"
              class="navigation-landmark-title"
              aria-hidden="true"
            >
              Navigation menu toggle button
            </span>
          </nav>
        )}
        <div class="app-title-wrapper">
          {(hasTitle || isSlotUsed(this.el, "app-title")) && (
            <Component {...attrs} class="title-link">
              <div class="app-icon-container" aria-hidden="true">
                <slot name="app-icon"></slot>
              </div>
              <div class="app-title-inner-wrapper">
                {isSlotUsed(this.el, "app-title") ? (
                  <slot name="app-title"></slot>
                ) : (
                  this.renderAppTitle(isAppNameSubtitleVariant)
                )}
              </div>
            </Component>
          )}
        </div>
      </div>
    );
  };

  render() {
    const {
      appTitle,
      menuOpen,
      foregroundColor,
      menuExpanded,
      href,
      status,
      version,
      collapsedIconLabels,
      inline,
    } = this;

    const isSDevice =
      !this.disableTopBarBehaviour && this.deviceSize === DEVICE_SIZES.S;
    const isSDeviceDisableTop =
      this.disableTopBarBehaviour && this.deviceSize === DEVICE_SIZES.S;
    const isMdDevice = this.deviceSize === DEVICE_SIZES.M;
    const isLgDevice = this.deviceSize >= DEVICE_SIZES.L;
    const isAppNameSubtitleVariant = this.deviceSizeAppTitle === DEVICE_SIZES.S;
    const displayExpandBtn =
      isMdDevice || isSDeviceDisableTop || (isLgDevice && !this.static);

    const topBarProps: IcTopBar = {
      isSDevice,
      foregroundColor,
      menuOpen,
      href: href!,
      isAppNameSubtitleVariant,
      appTitle: appTitle || "",
    };

    return (
      <Host
        class={{
          "xs-menu-open": menuOpen && isSDevice,
          "xs-menu-close": !menuOpen && isSDevice,
          "sm-collapsed": !isSDevice && !menuExpanded,
          "sm-expanded": !isSDevice && menuExpanded,
          "side-display":
            this.deviceSize > DEVICE_SIZES.S || !!this.disableTopBarBehaviour,
          [`ic-side-navigation-${IcBrandForegroundEnum.Dark}`]:
            foregroundColor === IcBrandForegroundEnum.Dark,
          ["collapsed-labels"]:
            !isSDevice && !menuExpanded && !!collapsedIconLabels,
          ["ic-side-navigation-inline"]: !!inline,
        }}
      >
        {isSDevice && this.renderTopBar({ ...topBarProps })}
        <div class="side-navigation" id="side-navigation">
          {!isSDevice && this.renderTopBar({ ...topBarProps })}
          <div class="side-navigation-inner">
            {isSlotUsed(this.el, "primary-navigation") && (
              <nav
                class="primary-navigation"
                aria-labelledby="primary-navigation-landmark"
              >
                <span
                  aria-hidden="true"
                  class="navigation-landmark-title"
                  id="primary-navigation-landmark"
                >
                  Primary
                </span>
                <ul class="navigation-list">
                  <slot name="primary-navigation"></slot>
                </ul>
              </nav>
            )}
          </div>
          <div
            class={{
              ["bottom-wrapper"]: true,
              ["classification-spacing"]: hasClassificationBanner(),
            }}
          >
            {isSlotUsed(this.el, "secondary-navigation") && (
              <nav
                class="secondary-navigation"
                aria-labelledby="secondary-navigation-landmark"
              >
                <span
                  aria-hidden="true"
                  class="navigation-landmark-title"
                  id="secondary-navigation-landmark"
                >
                  Secondary
                </span>
                <ul class="navigation-list">
                  <slot name="secondary-navigation"></slot>
                </ul>
              </nav>
            )}
            <div class="bottom-side-nav">
              {this.hasSecondaryNavigation && <ic-divider></ic-divider>}
              {displayExpandBtn && (
                <button
                  class="menu-expand-button"
                  innerHTML={chevronIcon}
                  onClick={() => this.toggleMenuExpanded(!this.menuExpanded)}
                  aria-label={`${
                    menuExpanded ? "Collapse" : "Expand"
                  } side navigation`}
                ></button>
              )}
              <div class="app-status-wrapper">
                {status && (
                  <div
                    class={{
                      ["app-status"]: true,
                    }}
                  >
                    <ic-typography
                      aria-label="app tag"
                      variant="label-uppercase"
                      class="app-status-text"
                    >
                      {status}
                    </ic-typography>
                  </div>
                )}
                {version && (
                  <ic-typography
                    variant="label"
                    class="app-version"
                    aria-label="app version"
                  >
                    {version}
                  </ic-typography>
                )}
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
