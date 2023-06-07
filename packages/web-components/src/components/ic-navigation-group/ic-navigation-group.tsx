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
  @Element() el: HTMLIcNavigationGroupElement;

  /**
   * The label to display on the group.
   */
  @Prop() label: string;

  /**
   *  If `true`, the group will be expandable in the side menu.
   */
  @Prop() expandable: boolean = false;

  @State() dropdownOpen: boolean = false;

  @State() inTopNavSideMenu: boolean = false;

  @State() deviceSize: number = DEVICE_SIZES.XL;

  @State() focusStyle = getThemeForegroundColor();

  @State() navigationType: IcNavType | "";

  @State() parentEl: HTMLElement;

  @State() expanded: boolean = true;

  private groupEl: HTMLElement;
  private dropdown: HTMLElement;
  private DYNAMIC_GROUPED_LINKS_HEIGHT_MS = 50;
  private IC_NAVIGATION_ITEM = "ic-navigation-item";

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

  private sideNavExpandHandler = (): void => {
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
    document.removeEventListener("mousemove", this.isMouseIdle);
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
      document.removeEventListener("mousemove", this.isMouseIdle);
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
    const target = ev.relatedTarget as HTMLElement;
    if (
      !this.el.contains(target) &&
      target !== this.dropdown &&
      document.activeElement !== this.el &&
      !this.el.contains(document.activeElement)
    ) {
      if (target.nodeName === "IC-NAVIGATION-GROUP") {
        this.hideDropdown();
      } else {
        setTimeout(() => {
          this.dropdownOpen ? this.hideDropdown() : null;
        }, 500);
      }
    }
  };

  private triggerShowDropdown = (ev: MouseEvent) => {
    const target = ev.relatedTarget as HTMLElement;
    document.addEventListener("keydown", this.handleKeydown);
    if (this.dropdownOpen === false) {
      if (
        target.nodeName === "IC-NAVIGATION-GROUP" &&
        !this.el.contains(target) &&
        target !== this.dropdown &&
        document.activeElement !== this.el &&
        !this.el.contains(document.activeElement)
      ) {
        this.showDropdown();
      } else {
        document.addEventListener("mousemove", this.isMouseIdle);
      }
    }
  };

  private time: any;
  private isMouseIdle = () => {
    clearTimeout(this.time);
    this.time = setTimeout(() => {
      this.showDropdown();
    }, 500);
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
    const navigationItemLength =
      this.el.querySelectorAll(this.IC_NAVIGATION_ITEM).length || 0;
    const navigationItem =
      this.el.querySelector(this.IC_NAVIGATION_ITEM) || null;

    if (
      this.navigationType === "side" &&
      !!navigationItemLength &&
      navigationItem
    ) {
      return `${
        parseInt(getComputedStyle(navigationItem).height) * navigationItemLength
      }px`;
    }

    return "auto";
  };

  private setInitialGroupedLinksWrapperHeight = () => {
    const linkWrapper = this.el.shadowRoot.querySelector(
      ".grouped-links-wrapper"
    ) as HTMLElement;

    if (linkWrapper && this.expanded) {
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
    /**
     * debounce is required as the incorrect height was retrieved instantly after
     * componentDidLoad is invoked.
     */
    setTimeout(
      () => this.setInitialGroupedLinksWrapperHeight(),
      this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS
    );
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
          tabindex={inTopNavSideMenu && !expandable ? "-1" : "0"}
          onMouseEnter={
            !inTopNavSideMenu && this.navigationType === "top"
              ? this.triggerShowDropdown
              : null
          }
          onMouseLeave={this.navigationType === "top" && this.handleMouseLeave}
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
