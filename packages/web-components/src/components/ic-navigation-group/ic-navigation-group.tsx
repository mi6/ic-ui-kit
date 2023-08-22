import {
  Component,
  Element,
  Host,
  Prop,
  State,
  Listen,
  h,
  Method,
} from "@stencil/core";

import {
  DEVICE_SIZES,
  getCurrentDeviceSize,
  getThemeForegroundColor,
  getNavItemParentDetails,
} from "../../utils/helpers";
import { IcNavType, IcTheme } from "../../utils/types";

import chevronIcon from "../../assets/chevron-icon.svg";

@Component({
  tag: "ic-navigation-group",
  styleUrl: "ic-navigation-group.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class NavigationGroup {
  private allGroupedNavigationItems: HTMLIcNavigationItemElement[] = [];
  private collapsedIconLabelsNavigationItemsHeight: string;
  private dropdown: HTMLElement;
  private DYNAMIC_GROUPED_LINKS_HEIGHT_MS = 50;
  private groupEl: HTMLElement;
  private IC_NAVIGATION_ITEM = "ic-navigation-item";
  private isCollapsedLabelVariant: boolean;
  private isSideNavExpanded: boolean;
  private mouseGate: boolean = false;
  private nodeName = "IC-NAVIGATION-GROUP";

  @Element() el: HTMLIcNavigationGroupElement;

  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() dropdownOpen: boolean = false;
  @State() expanded: boolean = true;
  @State() focusStyle = getThemeForegroundColor();
  @State() inTopNavSideMenu: boolean = false;
  @State() navigationType: IcNavType | "";
  @State() parentEl: HTMLElement;

  /**
   *  If `true`, the group will be expandable in the side menu.
   */
  @Prop() expandable: boolean = false;

  /**
   * The label to display on the group.
   */
  @Prop() label: string;

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

  componentWillLoad(): void {
    this.deviceSize = getCurrentDeviceSize();
    const navParentDetails = getNavItemParentDetails(this.el);
    this.navigationType = navParentDetails.navType;
    this.parentEl = navParentDetails.parent;
    if (this.deviceSize <= DEVICE_SIZES.L && this.navigationType === "top") {
      this.inTopNavSideMenu = true;
    }

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
  }

  componentDidLoad(): void {
    this.allGroupedNavigationItems = Array.from(
      this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)
    );

    /**
     * debounce is required as the incorrect height was retrieved instantly after
     * componentDidLoad is invoked.
     */
    setTimeout(
      () => this.setInitialGroupedLinksWrapperHeight(),
      this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS
    );
  }

  @Listen("childBlur")
  childBlurHandler(): void {
    this.hideDropdown();
  }

  @Listen("navItemClicked")
  navItemClickHandler(): void {
    this.hideDropdown();
  }

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.focusStyle = theme.mode;
  }

  /**
   * Sets focus on the nav item.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.groupEl) {
      this.groupEl.focus();
    }
  }

  private sideNavExpandHandler = (event?: CustomEvent): void => {
    this.isSideNavExpanded = event.detail.sideNavExpanded;

    if (this.isCollapsedLabelVariant === undefined) {
      this.isCollapsedLabelVariant = !!(
        event.target as HTMLIcSideNavigationElement
      ).getAttribute("collapsed-icon-labels");
    }

    // Store sum of heights on all collapsed icon label items
    if (this.isCollapsedLabelVariant && !this.isSideNavExpanded) {
      this.collapsedIconLabelsNavigationItemsHeight =
        this.getNavigationChildItemsHeight();
    }

    setTimeout(
      () => this.setInitialGroupedLinksWrapperHeight(),
      this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS
    );
  };

  private topNavResizedHandler = (ev: CustomEvent): void => {
    const newSize = ev.detail.size;
    if (newSize !== this.deviceSize) {
      this.deviceSize = newSize;
      this.inTopNavSideMenu = newSize <= DEVICE_SIZES.L;
    }
  };

  private toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  private setGroupedNavItemTabIndex = (tabIndexValue: string) => {
    this.el
      .querySelectorAll(this.IC_NAVIGATION_ITEM)
      .forEach((navigationItem) => {
        const navItem =
          navigationItem.shadowRoot.querySelector("a") ||
          navigationItem.querySelector("a");
        if (navItem) {
          navItem.setAttribute("tabindex", tabIndexValue);
        }
      });
  };

  private toggleGroupedLinkWrapperHeight = (
    wrapper: HTMLElement,
    expanded: boolean
  ) => {
    if (wrapper) {
      if (expanded) {
        wrapper.setAttribute(
          "style",
          `--navigation-child-items-height: ${this.getNavigationChildItemsHeight()}`
        );
        this.setGroupedNavItemTabIndex("0");
      } else {
        wrapper.setAttribute("style", `--navigation-child-items-height: 0`);
        this.setGroupedNavItemTabIndex("-1");
      }
    }
  };

  private toggleExpanded = () => {
    this.expanded = !this.expanded;
    const linkWrapper = this.el.shadowRoot.querySelector(
      ".grouped-links-wrapper"
    ) as HTMLElement;
    this.toggleGroupedLinkWrapperHeight(linkWrapper, this.expanded);
  };

  private showDropdown() {
    if (!this.dropdownOpen) {
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
    const target = ev.relatedTarget as HTMLElement;
    if (!this.el.contains(target)) {
      this.hideDropdown();
    }
  };

  private handleTopNavKeydown = (ev: KeyboardEvent) => {
    if (ev.key === " " || ev.key === "Enter") {
      this.toggleDropdown();
    } else if (!this.inTopNavSideMenu && ev.key === "Escape") {
      this.hideDropdown();
    }
  };

  private handleKeydown = (ev: KeyboardEvent) => {
    if (ev.key === "Enter" || ev.key === " " || ev.key === "Escape") {
      switch (this.navigationType) {
        case "top":
          this.handleTopNavKeydown(ev as KeyboardEvent);
          break;
        case "side":
          this.toggleExpanded();
          ev.preventDefault();
          break;
        default:
          this.toggleExpanded();
          break;
      }
    }
  };

  private handleMouseLeave = (ev: MouseEvent) => {
    const relTarget = ev.relatedTarget as HTMLElement;

    this.mouseGate = false;

    if (
      !this.el.contains(relTarget) &&
      relTarget !== this.dropdown &&
      document.activeElement !== this.el &&
      !this.el.contains(document.activeElement) &&
      relTarget.nodeName === this.nodeName &&
      this.dropdownOpen === true
    ) {
      this.mouseGate = true;
      this.hideDropdown();
    } else if (
      !this.el.contains(relTarget) &&
      relTarget !== this.dropdown &&
      !this.el.contains(document.activeElement)
    ) {
      this.mouseGate = false;
      setTimeout(() => {
        this.dropdownOpen ? this.hideDropdown() : null;
      }, 500);
    }
  };

  private handleMouseEnter = (ev: MouseEvent) => {
    const relTarget = ev.relatedTarget as HTMLElement;
    document.addEventListener("keydown", this.handleKeydown);

    if (relTarget.nodeName === this.nodeName && this.mouseGate === true) {
      this.showDropdown();
    } else if (
      this.dropdownOpen === false &&
      relTarget !== null &&
      this.mouseGate === false
    ) {
      this.mouseGate = true;
      setTimeout(() => {
        this.mouseGate && this.showDropdown();
      }, 500);
    }
  };

  private renderDropdownGroupedLinks = (): HTMLDivElement => (
    <div
      class={{
        ["navigation-group-dropdown"]: !this.inTopNavSideMenu,
        ["navigation-group-dropdown-side-menu"]: this.inTopNavSideMenu,
        ["selected"]: this.dropdownOpen && !this.inTopNavSideMenu,
      }}
      onMouseLeave={!this.inTopNavSideMenu ? this.handleMouseLeave : null}
      ref={(el) => (this.dropdown = el)}
    >
      <nav
        class={{
          ["navigation-group-dropdown-items"]: !this.inTopNavSideMenu,
        }}
      >
        <ul>
          <slot></slot>
        </ul>
      </nav>
    </div>
  );

  private renderGroupedLinks = (): HTMLDivElement => (
    <ul class="grouped-links-wrapper">
      <slot></slot>
    </ul>
  );

  /**
   * Gets the total height of navigation links to improve
   * smoothness of expand/collapse animations
   */
  private getNavigationChildItemsHeight = (): string => {
    let navigationChildItemsHeight = 0;
    this.allGroupedNavigationItems.forEach((navItem) => {
      navigationChildItemsHeight += navItem.clientHeight;
    });

    return `${navigationChildItemsHeight}px`;
  };

  private setInitialGroupedLinksWrapperHeight = () => {
    const linkWrapper = this.el.shadowRoot.querySelector(
      ".grouped-links-wrapper"
    ) as HTMLElement;

    if (
      linkWrapper &&
      this.expanded &&
      !this.isSideNavExpanded &&
      this.isCollapsedLabelVariant
    ) {
      /**
       * Collapsed icon labels height is different depending on if ic-side-navigation is collapsed or expanded.
       * If collapsed, use collapsedIconLabelsNavigationItemsHeight which is set on initial load.
       */
      linkWrapper.setAttribute(
        "style",
        `--navigation-child-items-height: ${this.collapsedIconLabelsNavigationItemsHeight}px`
      );
    } else if (linkWrapper && this.expanded) {
      linkWrapper.setAttribute(
        "style",
        `--navigation-child-items-height: ${this.getNavigationChildItemsHeight()}`
      );
    }
  };

  private renderNavigationItems = (): HTMLDivElement | null => {
    if (this.dropdownOpen || (this.inTopNavSideMenu && !this.expandable)) {
      return this.renderDropdownGroupedLinks();
    }

    if (this.navigationType !== "top") {
      return this.renderGroupedLinks();
    }

    return null;
  };

  render() {
    const { label, dropdownOpen, inTopNavSideMenu, expandable } = this;
    const NavigationGroupElement =
      !inTopNavSideMenu || expandable ? "button" : "div";
    return (
      <Host
        class={{
          ["in-side-menu"]: inTopNavSideMenu,
          expanded: this.expanded,
          collapsed: !this.expanded,
          ["navigation-group-side-nav"]: this.navigationType === "side",
        }}
        role="listitem"
      >
        <NavigationGroupElement
          onMouseEnter={
            !inTopNavSideMenu &&
            this.navigationType === "top" &&
            this.handleMouseEnter
          }
          onMouseLeave={this.navigationType === "top" && this.handleMouseLeave}
          tabindex={inTopNavSideMenu && !expandable ? "-1" : "0"}
          onBlur={this.handleBlur}
          onClick={expandable ? this.handleClick : null}
          onKeyDown={this.handleKeydown}
          class={{
            ["navigation-group"]: true,
            [this.focusStyle]: !inTopNavSideMenu,
            ["navigation-group-side-menu"]: inTopNavSideMenu && !expandable,
            ["navigation-group-side-menu-collapsed"]:
              inTopNavSideMenu && expandable && !dropdownOpen,
            ["navigation-group-side-menu-expanded"]:
              inTopNavSideMenu && expandable && dropdownOpen,
            ["selected"]: dropdownOpen && !inTopNavSideMenu,
          }}
          ref={(el) => (this.groupEl = el)}
          aria-expanded={dropdownOpen || this.expanded ? "true" : "false"}
          aria-haspopup={
            !inTopNavSideMenu && this.navigationType === "top"
              ? "true"
              : "false"
          }
        >
          <ic-typography
            variant={this.navigationType === "side" ? "caption" : "label"}
          >
            {label}
          </ic-typography>
          {this.navigationType === "side" && expandable && (
            <div
              class={{
                "chevron-toggle-icon-wrapper": true,
                "chevron-toggle-icon-closed": this.expanded,
              }}
              innerHTML={chevronIcon}
            ></div>
          )}
        </NavigationGroupElement>
        {this.renderNavigationItems()}
      </Host>
    );
  }
}
