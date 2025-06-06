import {
  Component,
  Element,
  Host,
  Prop,
  State,
  Listen,
  h,
  Method,
  Event,
  EventEmitter,
} from "@stencil/core";

import {
  DEVICE_SIZES,
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
import {
  IcNavigationExpandEventDetail,
  IcNavigationOpenEventDetail,
} from "./ic-navigation-group.types";

const IC_NAVIGATION_ITEM = "ic-navigation-item";
const DYNAMIC_GROUPED_LINKS_HEIGHT_MS = 100;
const NODE_NAME = "IC-NAVIGATION-GROUP";

@Component({
  tag: "ic-navigation-group",
  styleUrl: "ic-navigation-group.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class NavigationGroup {
  private allGroupedNavigationItemHeights = "";
  private collapsedNavItemsHeight: string | null = null;
  private dropdown?: HTMLElement;
  private expandedNavItemsHeight: string | null = null;
  private groupEl?: HTMLElement;
  private mouseGate = false;
  private linkWrapper?: HTMLUListElement;

  @Element() el: HTMLIcNavigationGroupElement;

  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() dropdownOpen = false;
  @State() expanded = true;
  @State() focusStyle: IcBrandForegroundNoDefault | IcBrandForeground =
    getBrandForegroundAppearance();
  @State() inTopNavSideMenu = false;
  @State() navigationType: IcNavType | "";
  @State() parentEl: HTMLElement | null;
  @State() isSideNavExpanded = false;

  /**
   *  If `true`, the group will be expandable when in an ic-side-navigation component, or, when in an ic-top-navigation component, in the side menu displayed at small screen sizes.
   */
  @Prop() expandable = false;

  /**
   * The label to display on the group.
   */
  @Prop() label!: string;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * @internal Emitted when a navigation group is opened - when within an ic-top-navigation at large screen sizes.
   */
  @Event() navigationGroupOpened: EventEmitter<IcNavigationOpenEventDetail>;

  /**
   * @internal Emitted when a navigation group is expanded - when within an ic-top-navigation at small screen sizes.
   */
  @Event() navigationGroupExpanded: EventEmitter<IcNavigationExpandEventDetail>;

  disconnectedCallback(): void {
    if (this.navigationType === "side") {
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
  }

  componentWillLoad(): void {
    this.deviceSize = getCurrentDeviceSize();
    const { navType, parent } = getNavItemParentDetails(this.el);
    this.navigationType = navType;
    this.parentEl = parent;

    if (this.navigationType === "side") {
      this.parentEl?.addEventListener(
        "icSideNavExpanded",
        this.sideNavExpandHandler as EventListener
      );
    } else if (this.navigationType === "top") {
      this.parentEl?.addEventListener(
        "icTopNavResized",
        this.topNavResizedHandler as EventListener
      );
      if (
        this.deviceSize <=
        (this.parentEl as HTMLIcTopNavigationElement).customMobileBreakpoint
      )
        this.inTopNavSideMenu = true;
    }
  }

  componentDidLoad(): void {
    this.allGroupedNavigationItemHeights = `${Array.from(
      this.el.querySelectorAll(IC_NAVIGATION_ITEM)
    ).reduce(
      (childrenHeights, { offsetHeight }) => childrenHeights + offsetHeight,
      0
    )}px`;

    /**
     * debounce is required as the incorrect height was retrieved instantly after
     * componentDidLoad is invoked.
     */
    setTimeout(() => {
      if (!this.linkWrapper || !this.expanded) return;

      if (!this.isSideNavExpanded)
        this.collapsedNavItemsHeight = this.allGroupedNavigationItemHeights;
      else this.expandedNavItemsHeight = this.allGroupedNavigationItemHeights;

      this.setGroupedLinksElementHeight(this.allGroupedNavigationItemHeights);
    }, DYNAMIC_GROUPED_LINKS_HEIGHT_MS);
  }

  @Listen("childBlur")
  childBlurHandler(): void {
    this.hideDropdown();
  }

  @Listen("navigationGroupOpened", { target: "document" })
  handleNavigationGroupOpened(event: CustomEvent): void {
    if (event.detail.source !== this.el) {
      this.hideDropdown();
    }
  }

  @Listen("navItemClicked")
  navItemClickHandler(): void {
    this.hideDropdown();
  }

  @Listen("brandChange", { target: "document" })
  brandChangeHandler(ev: CustomEvent<IcBrand>): void {
    this.focusStyle = ev.detail.mode;
  }

  /**
   * Sets focus on the nav item.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.groupEl?.focus();
  }

  private sideNavExpandHandler = (event: CustomEvent) => {
    this.isSideNavExpanded = event.detail.sideNavExpanded;

    if (!this.linkWrapper || !this.expanded) return;

    const navItemsHeight = this.isSideNavExpanded
      ? this.expandedNavItemsHeight
      : this.collapsedNavItemsHeight;

    if (navItemsHeight) {
      this.setGroupedLinksElementHeight(navItemsHeight);
    } else {
      setTimeout(() => {
        if (this.isSideNavExpanded) {
          this.expandedNavItemsHeight = this.allGroupedNavigationItemHeights;
        } else {
          this.collapsedNavItemsHeight = this.allGroupedNavigationItemHeights;
        }

        this.setGroupedLinksElementHeight(this.allGroupedNavigationItemHeights);
      }, DYNAMIC_GROUPED_LINKS_HEIGHT_MS);
    }
  };

  private topNavResizedHandler = ({
    detail: { size },
  }: CustomEvent<{ size: number }>) => {
    if (size === this.deviceSize) return;

    this.deviceSize = size;
    this.inTopNavSideMenu =
      size <=
      ((this.parentEl as HTMLIcTopNavigationElement)?.customMobileBreakpoint ||
        DEVICE_SIZES.L);
  };

  private toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.inTopNavSideMenu) {
      this.navigationGroupExpanded.emit({ expanded: this.dropdownOpen });
    }
  }

  private toggleExpanded = () => {
    this.expanded = !this.expanded;
    if (!this.linkWrapper) return;

    this.setGroupedLinksElementHeight(
      !this.expanded
        ? "0"
        : this.isSideNavExpanded
        ? this.expandedNavItemsHeight
        : this.collapsedNavItemsHeight
    );

    this.el.querySelectorAll(IC_NAVIGATION_ITEM).forEach((navigationItem) => {
      const navItem =
        navigationItem.shadowRoot?.querySelector("a") ||
        navigationItem.querySelector("a");
      navItem?.setAttribute("tabindex", this.expanded ? "0" : "-1");
    });
  };

  private showDropdown() {
    if (!this.dropdownOpen) {
      this.navigationGroupOpened.emit({
        source: this.el,
      });

      this.toggleDropdown();
    }
  }

  private hideDropdown() {
    document.removeEventListener("keydown", this.handleKeydown);
    if (this.dropdownOpen) {
      this.toggleDropdown();
    }
  }

  private handleClick = (ev: MouseEvent) => {
    if (this.navigationType === "top" && ev.detail) {
      this.toggleDropdown();
    } else {
      this.toggleExpanded();
    }
  };

  private handleBlur = (ev: FocusEvent) => {
    if (!this.el.contains(ev.relatedTarget as HTMLElement)) {
      this.hideDropdown();
    }
  };

  private handleKeydown = (ev: KeyboardEvent) => {
    const { key } = ev;
    if (key !== "Enter" && key !== " " && key !== "Escape") return;

    switch (this.navigationType) {
      case "top":
        if (key === " " || key === "Enter") {
          this.toggleDropdown();
        } else if (!this.inTopNavSideMenu) {
          this.hideDropdown();
        }
        break;
      case "side":
        this.toggleExpanded();
        ev.preventDefault();
        break;
      default:
        this.toggleExpanded();
        break;
    }
  };

  private handleMouseLeave = (ev: MouseEvent) => {
    const relTarget = ev.relatedTarget as HTMLElement;

    this.mouseGate = false;

    if (
      this.el.contains(relTarget) ||
      relTarget === this.dropdown ||
      this.el.contains(document.activeElement)
    )
      return;

    if (
      document.activeElement !== this.el &&
      relTarget?.nodeName === NODE_NAME &&
      this.dropdownOpen
    ) {
      this.mouseGate = true;
      this.hideDropdown();
    } else {
      this.mouseGate = false;
      setTimeout(() => {
        this.dropdownOpen ? this.hideDropdown() : null;
      }, 500);
    }
  };

  private handleMouseEnter = (ev: MouseEvent) => {
    const relTarget = ev.relatedTarget as HTMLElement | null;
    document.addEventListener("keydown", this.handleKeydown);

    if (relTarget?.nodeName === NODE_NAME && this.mouseGate) {
      this.showDropdown();
    } else if (!this.dropdownOpen && !this.mouseGate) {
      this.mouseGate = true;
      setTimeout(() => {
        if (this.mouseGate) this.showDropdown();
      }, 500);
    }
  };

  private renderGroupTitleText = () => (
    <ic-typography
      id="nav-group-title"
      variant={this.navigationType === "side" ? "caption" : "label"}
    >
      {this.label}
    </ic-typography>
  );

  private renderNavigationItems = () => {
    if (this.dropdownOpen || (this.inTopNavSideMenu && !this.expandable)) {
      return (
        <div
          class={{
            [this.inTopNavSideMenu
              ? "navigation-group-dropdown-side-menu"
              : "navigation-group-dropdown"]: true,
            selected: this.dropdownOpen && !this.inTopNavSideMenu,
          }}
          onMouseLeave={
            !this.inTopNavSideMenu ? this.handleMouseLeave : undefined
          }
          ref={(el) => (this.dropdown = el)}
        >
          <nav
            class={{
              "navigation-group-dropdown-items": !this.inTopNavSideMenu,
            }}
            aria-labelledby="nav-group-title"
          >
            <ul>
              <slot></slot>
            </ul>
          </nav>
        </div>
      );
    }

    if (this.navigationType !== "top") {
      return (
        <ul ref={(el) => (this.linkWrapper = el)} class="grouped-links-wrapper">
          <slot></slot>
        </ul>
      );
    }

    return null;
  };

  private setGroupedLinksElementHeight = (height: string | null) => {
    this.linkWrapper?.style.setProperty(
      "--navigation-child-items-height",
      height
    );
  };

  render() {
    const {
      dropdownOpen,
      expanded,
      inTopNavSideMenu,
      expandable,
      theme,
      isSideNavExpanded,
      focusStyle,
    } = this;

    const getExpandedClassSuffix = (prop: boolean) =>
      prop ? "expanded" : "collapsed";

    const navGroupTitleClassNames = {
      "navigation-group": true,
      [focusStyle]: !inTopNavSideMenu,
      [`navigation-group-side-menu-${getExpandedClassSuffix(dropdownOpen)}`]:
        inTopNavSideMenu && expandable,
      selected: dropdownOpen && !inTopNavSideMenu,
    };

    const isSideNav = this.navigationType === "side";
    const isTopNav = this.navigationType === "top";
    const isTopNavDesktop = !inTopNavSideMenu && isTopNav;

    const ariaExpanded = (isSideNav && expanded) || (isTopNav && dropdownOpen);

    return (
      <Host
        class={{
          "in-side-menu": inTopNavSideMenu,
          "ic-navigation-group-expandable": expandable,
          "ic-navigation-group-side-nav": isSideNav,
          [`ic-navigation-group-${getExpandedClassSuffix(expanded)}`]: true,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        role="listitem"
      >
        {expandable || isTopNavDesktop ? (
          <button
            onMouseEnter={isTopNavDesktop ? this.handleMouseEnter : undefined}
            onMouseLeave={isTopNav ? this.handleMouseLeave : undefined}
            onBlur={this.handleBlur}
            onClick={this.handleClick}
            onKeyDown={this.handleKeydown}
            class={navGroupTitleClassNames}
            ref={(el) => (this.groupEl = el)}
            aria-expanded={`${ariaExpanded}`}
            aria-haspopup={`${isTopNavDesktop}`}
          >
            {this.renderGroupTitleText()}
            {isSideNav && expandable && (
              <div
                class={{
                  "chevron-toggle-icon-wrapper": true,
                  "chevron-toggle-icon-closed": expanded,
                }}
                innerHTML={chevronIcon}
              ></div>
            )}
          </button>
        ) : (
          (!isSideNav || isSideNavExpanded) && (
            <div class={navGroupTitleClassNames}>
              {this.renderGroupTitleText()}
            </div>
          )
        )}
        {this.renderNavigationItems()}
      </Host>
    );
  }
}
