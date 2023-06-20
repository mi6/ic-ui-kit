import {
  Component,
  Host,
  h,
  Prop,
  State,
  Element,
  Listen,
} from "@stencil/core";

import menuIcon from "../../assets/hamburger-menu-icon.svg";
import closeIcon from "../../assets/close-icon.svg";
import chevronIcon from "../../assets/chevron-icon.svg";
import {
  getCurrentDeviceSize,
  DEVICE_SIZES,
  checkResizeObserver,
  isSlotUsed,
  getThemeForegroundColor,
  getCssProperty,
  hasClassificationBanner,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import {
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "../../utils/types";
import { IcTopBar } from "./ic-side-navigation.types";

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
  private resizeObserver: ResizeObserver = null;

  @Element() el: HTMLIcSideNavigationElement;

  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() deviceSizeAppTitle = DEVICE_SIZES.S;
  @State() foregroundColor: IcThemeForeground = getThemeForegroundColor();
  @State() hasSecondaryNavigation: boolean = false;
  @State() menuExpanded: boolean = false;
  @State() menuOpen: boolean = false;

  /**
   * The app title to be displayed. This is required, unless a slotted app title link is used.
   */
  @Prop() appTitle: string;

  /**
   * If `true`, the icon and label will appear when side navigation is collapsed.
   */
  @Prop() collapsedIconLabels: boolean = false;

  /**
   * If `true`, automatic parent wrapper styling will be disabled.
   */
  @Prop() disableAutoParentStyling: boolean = false;

  /**
   * If `true`, the side navigation will load in an expanded state.
   */
  @Prop() expanded: boolean = false;

  /**
   * The URL that the app title link points to.
   */
  @Prop() href: string = "/";

  /**
   * @internal If `true`, side navigation will be contained by its parent element.
   */
  @Prop() inline: boolean = false;

  /**
   * If `true`, the menu expand button will be removed (PLEASE NOTE: This takes effect on screen sizes 992px and above).
   */
  @Prop() static: boolean = false;

  /**
   * The status of the app to be displayed.
   */
  @Prop() status: string;

  /**
   * The version of the app to be displayed.
   */
  @Prop() version: string;

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }
  }

  componentWillLoad(): void {
    if (this.expanded) {
      this.setMenuExpanded(true);
    } else {
      this.setMenuExpanded(false);
    }

    if (this.collapsedIconLabels) {
      this.setCollapsedIconLabels();
    }

    this.hasSecondaryNavigation = isSlotUsed(this.el, "secondary-navigation");
  }

  componentDidLoad(): void {
    this.emitSideNavigationExpanded({
      sideNavExpanded: this.menuExpanded,
      sideNavMobile: this.deviceSize === DEVICE_SIZES.S,
    });

    checkResizeObserver(this.runResizeObserver);
    this.styleSlottedCollapsedIconLabel();
    this.arrangeSlottedNavigationItem(this.menuExpanded);
    this.displayTooltipWithExpandedLongLabel(this.menuExpanded);

    this.setExpandedButtonHeight();

    !isSlotUsed(this.el, "app-title") &&
      onComponentRequiredPropUndefined(
        [{ prop: this.appTitle, propName: "app-title" }],
        "Side Navigation"
      );
  }

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.foregroundColor = theme.mode;
  }

  private emitSideNavigationExpanded = (objDetails: {
    sideNavExpanded: boolean;
    sideNavMobile?: boolean;
  }): void => {
    const event = new CustomEvent("sideNavExpanded", {
      detail: {
        sideNavExpanded: objDetails.sideNavExpanded,
        sideNavMobile: objDetails.sideNavMobile,
      },
    });
    this.el.dispatchEvent(event);
  };

  private toggleMenu = (): void => {
    this.menuOpen = !this.menuOpen;
    this.setMobileMenuAriaAttributes(this.menuOpen);

    this.setToggleMenuFlyoutMenuVisibility(this.menuOpen);

    this.emitSideNavigationExpanded({
      sideNavExpanded: this.menuOpen,
      sideNavMobile: true,
    });
  };

  private setToggleMenuFlyoutMenuVisibility = (menuOpen: boolean) => {
    const sideNav = this.el.shadowRoot.querySelector(
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
    const nativeButton = this.el.shadowRoot
      .querySelector("#menu-button")
      .shadowRoot.querySelector("button");

    if (menuOpen) {
      nativeButton.setAttribute("aria-expanded", "true");
      nativeButton.setAttribute("aria-label", "Close navigation menu");
    } else {
      nativeButton.setAttribute("aria-expanded", "false");
      nativeButton.setAttribute("aria-label", "Open navigation menu");
    }
  };

  private setAndRemoveNoWrapAfterMenuExpanded = () => {
    const appTitle = this.el.shadowRoot.querySelector(
      ".title-link ic-typography"
    );

    appTitle.classList.add("ic-typography-no-wrap");

    setTimeout(() => {
      appTitle.classList.remove("ic-typography-no-wrap");
    }, this.ANIMATION_DURATION);
  };

  private toggleMenuExpanded = (): void => {
    this.menuExpanded = !this.menuExpanded;

    if (this.menuExpanded) {
      this.setAndRemoveNoWrapAfterMenuExpanded();
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
   * rearranges the a tag and labels and adds inline styling expand/collaped animations as external CSS classes are not
   * do not take affect.
   * @param menuExpanded boolean - true or false depending on side navigation state
   */
  private arrangeSlottedNavigationItem = (menuExpanded?: boolean) => {
    const navItems = this.el.querySelectorAll("ic-navigation-item");

    navItems.forEach((navItem) => {
      const hasUsedSlot = isSlotUsed(navItem, "navigation-item");

      if (hasUsedSlot) {
        const navItemSlot = navItem.querySelector("[slot='navigation-item']");
        const iconWrapper = document.createElement("div");
        const icon = navItemSlot.querySelector("svg");
        const label = navItem.textContent.trim();
        const icTypography = document.createElement("ic-typography");
        icTypography.classList.add(
          "ic-typography-label",
          "hydrated",
          "navigation-item-side-nav-slotted-text"
        );

        iconWrapper.className = "icon-container";
        iconWrapper.append(icon);

        navItemSlot.textContent = "";

        icTypography.textContent = label;

        navItemSlot.append(iconWrapper);
        navItemSlot.append(icTypography);

        if (this.collapsedIconLabels) {
          this.styleSlottedCollapsedIconLabels(menuExpanded, icTypography);
        } else {
          this.styleSlottedIconLabels(menuExpanded, icTypography);
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
    const appStatusWrapper = this.el.shadowRoot.querySelector(
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

  private animateCollapsedIconLabels = () => {
    const primaryNavigationWrapper = this.el.shadowRoot.querySelector(
      ".primary-navigation"
    );
    const secondaryNavigationWrapper = this.el.shadowRoot.querySelector(
      ".bottom-wrapper > .secondary-navigation"
    );

    const collapsedIconLabelsEnd = "collapsed-icon-labels-end";
    const collapsedIconLabelsStart = "collapsed-icon-labels-start";

    if (primaryNavigationWrapper) {
      primaryNavigationWrapper.classList.remove(collapsedIconLabelsEnd);
      primaryNavigationWrapper.classList.add(collapsedIconLabelsStart);
    }

    if (secondaryNavigationWrapper) {
      secondaryNavigationWrapper.classList.remove(collapsedIconLabelsEnd);
      secondaryNavigationWrapper.classList.add(collapsedIconLabelsStart);
    }

    this.el.addEventListener("transitionend", () => {
      if (primaryNavigationWrapper) {
        primaryNavigationWrapper.classList.remove(collapsedIconLabelsStart);
        primaryNavigationWrapper.classList.add(collapsedIconLabelsEnd);
      }

      if (secondaryNavigationWrapper) {
        secondaryNavigationWrapper.classList.remove(collapsedIconLabelsStart);
        secondaryNavigationWrapper.classList.add(collapsedIconLabelsEnd);
      }
    });
  };

  private paddingIconWidth = (
    navItems: HTMLIcNavigationItemElement[]
  ): number => {
    const navItemLink =
      (navItems[0].shadowRoot &&
        navItems[0].shadowRoot.querySelector("ic-tooltip a")) ||
      navItems[0].querySelector("a");
    const navItemSVG = navItems[0].querySelector("svg");

    const navStyles = {
      gap: window.getComputedStyle(navItemLink).gap,
      iconWidth: window.getComputedStyle(navItemSVG).width,
      paddingLeft: window.getComputedStyle(navItemLink).paddingLeft,
    };

    return Object.values(navStyles).reduce((prev, curr) => {
      return (prev += parseInt(curr));
    }, 0);
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

            if (icTypographyScrollWidth > sideNavWidth - paddingIconDelta) {
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

  /**
   * As the mobile top bar is fixed, a padding top is required
   * to push main content down the height of the mobile top bar
   * @param value - padding-top css value
   */
  private setParentPaddingTop = (value: string) => {
    this.el.parentElement.style.setProperty("padding-top", value);
  };

  private setParentPaddingLeft = (value: string) => {
    this.el.parentElement.style.setProperty("padding-left", value);
  };

  private resizeObserverCallback = (currSize: number) => {
    this.deviceSize = currSize;

    if (currSize === DEVICE_SIZES.S) {
      if (!this.disableAutoParentStyling) {
        const topBarHeight =
          this.el.shadowRoot.querySelector(".top-bar").scrollHeight;
        this.setParentPaddingTop(`${topBarHeight}px`);
        this.setParentPaddingLeft("0");

        if (this.inline) {
          this.el.parentElement.style.setProperty(
            "height",
            `calc(100% - ${topBarHeight}px)`
          );
        }
      }
      this.emitSideNavigationExpanded({
        sideNavExpanded: this.menuExpanded,
        sideNavMobile: true,
      });
    } else {
      if (!this.disableAutoParentStyling) {
        this.setParentPaddingTop("0");
        this.el.parentElement.style.setProperty("height", "100%");
      }
      this.emitSideNavigationExpanded({
        sideNavExpanded: this.menuExpanded,
        sideNavMobile: false,
      });
    }

    let paddingLeft;

    if (this.collapsedIconLabels) {
      paddingLeft = "calc(var(--ic-space-xxl) * 2)";
    } else {
      paddingLeft = "calc(var(--ic-space-xxl) + var(--ic-space-xs))";
    }

    if (currSize > DEVICE_SIZES.L) {
      if (!this.disableAutoParentStyling) {
        this.setParentPaddingTop("0");
        this.setParentPaddingLeft("0");
      }
    } else if (
      currSize > DEVICE_SIZES.S &&
      currSize <= DEVICE_SIZES.M &&
      this.static &&
      !this.disableAutoParentStyling
    ) {
      this.setParentPaddingLeft(paddingLeft);
    } else if (
      currSize > DEVICE_SIZES.S &&
      currSize <= DEVICE_SIZES.L &&
      !this.disableAutoParentStyling
    ) {
      if (this.static) {
        this.setParentPaddingLeft("calc(var(--ic-space-xl) * 10)");
      } else {
        this.setParentPaddingLeft(paddingLeft);
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
        icTypography?.parentElement?.parentElement?.classList.contains(
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
    appTitle,
  }: IcTopBar) => {
    const hasTitle = this.appTitle !== "" && this.appTitle !== undefined;

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
              appearance={foregroundColor}
              onClick={this.toggleMenu}
              aria-owns="side-navigation"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span
                class="mobile-top-bar-menu-icon"
                slot="icon"
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
              <ic-typography
                variant={isAppNameSubtitleVariant ? "subtitle-small" : "h3"}
              >
                {isSlotUsed(this.el, "app-title") ? (
                  <slot name="app-title"></slot>
                ) : (
                  appTitle
                )}
              </ic-typography>
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

    const isSDevice = this.deviceSize === DEVICE_SIZES.S;
    const isMdDevice = this.deviceSize === DEVICE_SIZES.M;
    const isLgDevice = this.deviceSize >= DEVICE_SIZES.L;
    const isAppNameSubtitleVariant = this.deviceSizeAppTitle === DEVICE_SIZES.S;
    const displayExpandBtn = isMdDevice || (isLgDevice && !this.static);

    const topBarProps: IcTopBar = {
      isSDevice,
      foregroundColor,
      menuOpen,
      href,
      isAppNameSubtitleVariant,
      appTitle,
    };

    return (
      <Host
        class={{
          "xs-menu-open": menuOpen && isSDevice,
          "xs-menu-close": !menuOpen && isSDevice,
          "sm-collapsed": !isSDevice && !menuExpanded,
          "sm-expanded": !isSDevice && menuExpanded,
          [IcThemeForegroundEnum.Dark]:
            foregroundColor === IcThemeForegroundEnum.Dark,
          ["collapsed-labels"]:
            !isSDevice && !menuExpanded && collapsedIconLabels,
          ["inline"]: inline,
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
                  onClick={this.toggleMenuExpanded}
                  aria-label={`${
                    menuExpanded ? "Collapse" : "Expand"
                  } side navigation`}
                ></button>
              )}
              <div class="app-status-wrapper">
                {status !== "" && (
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
                {version !== "" && (
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
