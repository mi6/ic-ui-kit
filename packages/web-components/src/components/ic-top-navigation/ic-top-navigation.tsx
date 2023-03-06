import {
  Component,
  Element,
  Host,
  Prop,
  h,
  State,
  Listen,
  Event,
  EventEmitter,
  Watch,
} from "@stencil/core";

import {
  IcTypographyVariants,
  IcAlignment,
  IcThemeForeground,
  IcThemeForegroundEnum,
  IcTheme,
} from "../../utils/types";
import {
  checkResizeObserver,
  DEVICE_SIZES,
  getCurrentDeviceSize,
  getThemeForegroundColor,
  getSlot,
  onComponentPropUndefinedChange,
  onComponentRequiredPropUndefined,
  isSlotUsed,
} from "../../utils/helpers";

/**
 * @slot app-icon - Content will be rendered to left of app title.
 * @slot app-title - Handle routing by nesting a route in the app title.
 * @slot search - Content will be rendered in search area to left of buttons.
 * @slot toggle-icon - Icon to be displayed on the button to toggle search slot content on smaller devices
 * @slot navigation - Content will be rendered in navigation panel.
 * @slot buttons - Content will be rendered to right of search bar.
 */
@Component({
  tag: "ic-top-navigation",
  styleUrl: "ic-top-navigation.css",
  shadow: true,
})
export class TopNavigation {
  @Element() el: HTMLIcTopNavigationElement;

  /**
   * The app title to be displayed. This is required, unless a slotted app title link is used.
   */
  @Prop() appTitle: string;

  /**
   *  The URL to navigate to when the app title is clicked.
   */
  @Prop() href: string = "/";

  /**
   * The version info to be displayed.
   */
  @Prop() version: string = "";

  /**
   * The status info to be displayed.
   */
  @Prop() status: string = "";

  /**
   * The alignment of the top navigation content.
   */
  @Prop() contentAligned: IcAlignment = "full-width";

  /**
   * If `true`, the flyout navigation menu on small devices will be contained by the parent element.
   */
  @Prop() inline: boolean = false;

  @State() menuOpen: boolean = false;
  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() mobileSearchBarVisible: boolean = false;
  @State() navMenuVisible: boolean = false;
  @State() searchValue: string = "";
  @State() mobileSearchHiddenOnBlur: boolean = false;
  @State() searchButtonClick: boolean = false;
  @State() foregroundColor: IcThemeForeground = getThemeForegroundColor();
  @State() hasFullWidthSearchBar: boolean = false;

  @Watch("appTitle")
  watchPropHandler(newValue: string, oldValue: string): void {
    //added for gatsby rehydration issue where prop is initially undefined but then changes to actual value
    //this watch can be removed once gatbsy hydration issue is resolved
    onComponentPropUndefinedChange(
      oldValue,
      newValue,
      this.initialiseSearchBar
    );
  }

  /**
   * @internal - Emitted when the menu is opened.
   */
  @Event() icNavigationMenuOpened: EventEmitter<void>;

  /**
   * @internal - Emitted when the menu is closed.
   */
  @Event() icNavigationMenuClosed: EventEmitter<void>;

  private hasAppIcon: boolean = false;
  private hasNavigation: boolean = false;
  private hasIconButtons: boolean = false;
  private hasSearchSlotContent: boolean = false;
  private searchBar: HTMLIcSearchBarElement = null;
  private mobileSearchButtonEl: HTMLIcButtonElement;

  @Listen("icNavigationMenuClose", {})
  navBarMenuCloseHandler(): void {
    this.showNavMenu(false);
    const menuBtn = this.el.shadowRoot.querySelector(
      "#menu-button"
    ) as HTMLElement;
    menuBtn.focus();
  }

  @Listen("icSearchBarBlur", {})
  searchInputBlurHandler(ev: CustomEvent): void {
    if (ev.detail !== null) {
      if (this.mobileSearchBarVisible && !this.searchButtonClick) {
        //don't hide if blur was triggered by click on search button - let the click handler toggle the state
        this.toggleSearchBar();
      }
      this.searchValue = ev.detail.value;
    }
  }

  @Listen("icChange", {})
  searchValueChangeHandler(ev: CustomEvent): void {
    this.searchValue = ev.detail.value;
  }

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.foregroundColor = theme.mode;
  }

  private initialiseSearchBar = () => {
    if (this.hasSearchSlotContent) {
      const slot = getSlot(this.el, "search");
      if (slot && slot.tagName === "IC-SEARCH-BAR") {
        this.searchBar = slot as HTMLIcSearchBarElement;
      } else if (slot && slot.tagName === "FORM") {
        this.searchBar = slot.querySelector(
          "ic-search-bar"
        ) as HTMLIcSearchBarElement;
      }

      if (this.searchBar !== null) {
        this.searchBar.hideLabel = true;
      }
    }
  };

  private toggleSearchBar(): void {
    this.mobileSearchBarVisible = !this.mobileSearchBarVisible;

    if (this.searchBar !== null) {
      if (this.mobileSearchBarVisible) {
        this.mobileSearchButtonEl.updateAriaLabel("Hide search");
        this.hasFullWidthSearchBar = true;
        this.searchBar.fullWidth = true;
        setTimeout(() => {
          this.searchBar.focus();
        }, 100);
      } else {
        this.mobileSearchButtonEl.updateAriaLabel("Show search");
        this.hasFullWidthSearchBar = false;
        this.searchBar.fullWidth = false;
      }
    }
  }

  private emitTopNavResized = (size: number): void => {
    const event = new CustomEvent("topNavResized", { detail: { size: size } });
    this.el.dispatchEvent(event);
  };

  private menuButtonClick = () => {
    this.showNavMenu(true);
  };

  private showNavMenu(show: boolean): void {
    this.navMenuVisible = show;
    if (show) {
      this.icNavigationMenuOpened.emit();
    } else {
      this.icNavigationMenuClosed.emit();
    }
  }

  private searchButtonMouseDownHandler = () => {
    this.searchButtonClick = true;
  };

  private searchButtonClickHandler = () => {
    this.toggleSearchBar();
    this.searchButtonClick = false;
  };

  private resizeObserver: ResizeObserver = null;

  private resizeObserverCallback = (currSize: number) => {
    if (currSize !== this.deviceSize) {
      this.deviceSize = currSize;
      if (currSize > DEVICE_SIZES.L) {
        this.showNavMenu(false);
        if (this.mobileSearchBarVisible) {
          this.toggleSearchBar();
        }
      }
      this.emitTopNavResized(currSize);
      if (
        document.activeElement !== null &&
        document.activeElement !== undefined &&
        document.activeElement.tagName === "IC-SEARCH-BAR"
      ) {
        this.searchBar.setAttribute("hidden", "true");
        //remove attribute again as this trigger a redraw & applies css
        this.searchBar.removeAttribute("hidden");
        setTimeout(() => {
          this.searchBar.focus();
        }, 100);
      }
    }
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      const currSize = getCurrentDeviceSize();
      this.resizeObserverCallback(currSize);
    });

    this.resizeObserver.observe(this.el);
  };

  componentWillLoad(): void {
    this.hasAppIcon = isSlotUsed(this.el, "app-icon");
    this.hasNavigation = isSlotUsed(this.el, "navigation");
    this.hasIconButtons = isSlotUsed(this.el, "buttons");
    this.hasSearchSlotContent = isSlotUsed(this.el, "search");
    this.deviceSize = getCurrentDeviceSize();
    this.initialiseSearchBar();
  }

  componentWillRender(): void {
    this.hasNavigation = isSlotUsed(this.el, "navigation");
    this.hasSearchSlotContent = isSlotUsed(this.el, "search");
    this.hasIconButtons = isSlotUsed(this.el, "buttons");
    this.hasAppIcon = isSlotUsed(this.el, "app-icon");
  }

  componentDidLoad(): void {
    checkResizeObserver(this.runResizeObserver);

    !isSlotUsed(this.el, "app-title") &&
      onComponentRequiredPropUndefined(
        [{ prop: this.appTitle, propName: "app-title" }],
        "Top Navigation"
      );
  }

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }
  }

  render() {
    const hasMenuContent =
      this.hasNavigation ||
      this.hasIconButtons ||
      this.status !== "" ||
      this.version !== "";

    const searchButtonSize =
      this.deviceSize <= DEVICE_SIZES.S ? "default" : "large";

    let appTitleVariant: IcTypographyVariants = "h3";

    const hasTitle = this.appTitle !== "" && this.appTitle !== undefined;

    if (this.deviceSize <= DEVICE_SIZES.L) {
      appTitleVariant = "h4";
      if (this.deviceSize <= DEVICE_SIZES.S) {
        appTitleVariant = "subtitle-small";
      }
    }

    const mobileSearchButtonTitle = this.mobileSearchBarVisible
      ? "Hide search"
      : "Show search";
    const menuSize = this.deviceSize <= DEVICE_SIZES.S ? "small" : "default";

    const Component = isSlotUsed(this.el, "app-title") ? "div" : "a";

    const attrs = Component == "a" && {
      href: this.href,
    };

    return (
      <Host
        class={{
          ["fullwidth-searchbar"]: this.hasFullWidthSearchBar,
          [IcThemeForegroundEnum.Dark]:
            this.foregroundColor === IcThemeForegroundEnum.Dark,
        }}
      >
        <div class="top-navigation">
          <ic-section-container aligned="full-width" full-height>
            <header role="banner">
              <div class="top-panel-container">
                <div class="app-details-container">
                  {(hasTitle || isSlotUsed(this.el, "app-title")) && (
                    <Component class="title-link" {...attrs}>
                      {this.hasAppIcon && (
                        <div class="app-icon-container" aria-hidden="true">
                          <slot name="app-icon" />
                        </div>
                      )}
                      <ic-typography variant={appTitleVariant}>
                        <h1 class="title-wrap">
                          {isSlotUsed(this.el, "app-title") ? (
                            <slot name="app-title"></slot>
                          ) : (
                            this.appTitle
                          )}
                        </h1>
                      </ic-typography>
                    </Component>
                  )}
                  {this.status !== "" && (
                    <div class="app-status">
                      <ic-typography
                        aria-label="app tag"
                        variant="label-uppercase"
                        class="app-status-text"
                      >
                        {this.status}
                      </ic-typography>
                    </div>
                  )}
                  {this.version !== "" && (
                    <div class="app-version">
                      <ic-typography
                        variant="label"
                        class="app-version-text"
                        aria-label="app version"
                      >
                        {this.version}
                      </ic-typography>
                    </div>
                  )}
                </div>

                {(this.hasSearchSlotContent || hasMenuContent) && (
                  <div class="search-menu-container">
                    <div class="search-actions-container">
                      {this.deviceSize > DEVICE_SIZES.L && (
                        <slot name="search"></slot>
                      )}

                      {this.hasSearchSlotContent &&
                        this.deviceSize <= DEVICE_SIZES.L && (
                          <ic-button
                            id="search-toggle-button"
                            ref={(el) => (this.mobileSearchButtonEl = el)}
                            onMouseDown={this.searchButtonMouseDownHandler}
                            variant="icon"
                            size={searchButtonSize}
                            aria-label={mobileSearchButtonTitle}
                            appearance={this.foregroundColor}
                            onClick={this.searchButtonClickHandler}
                          >
                            <slot name="toggle-icon" slot="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#ffffff"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                              </svg>
                            </slot>
                          </ic-button>
                        )}

                      {this.hasIconButtons && this.deviceSize > DEVICE_SIZES.L && (
                        <div class="icon-buttons-container">
                          <slot name="buttons"></slot>
                        </div>
                      )}
                      {hasMenuContent && this.deviceSize <= DEVICE_SIZES.L && (
                        <div class="menu-button-container">
                          <nav
                            aria-labelledby="navigation-landmark-text"
                            aria-hidden={
                              !this.hasNavigation || this.navMenuVisible
                                ? "true"
                                : "false"
                            }
                          >
                            <ic-button
                              id="menu-button"
                              appearance={this.foregroundColor}
                              variant="secondary"
                              aria-expanded={this.menuOpen ? "true" : "false"}
                              aria-haspopup="true"
                              aria-label={`Open ${
                                this.hasNavigation ? "navigation" : "app"
                              } menu`}
                              size={menuSize}
                              onClick={this.menuButtonClick}
                            >
                              Menu
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#ffffff"
                                slot="icon"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                              </svg>
                            </ic-button>
                          </nav>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {this.mobileSearchBarVisible && (
                <div class="search-bar-container">
                  <slot name="search"></slot>
                </div>
              )}

              {this.hasNavigation && this.deviceSize > DEVICE_SIZES.L && (
                <div class="navigation-tabs">
                  <span
                    id="navigation-landmark-text"
                    class="navigation-landmark-text"
                    aria-hidden="true"
                  >
                    Main navigation
                  </span>
                  <nav
                    aria-labelledby="navigation-landmark-text"
                    class="nav-panel-container"
                  >
                    <ic-horizontal-scroll appearance={this.foregroundColor}>
                      <ul class="navigation-item-list" tabindex="-1">
                        <slot name="navigation"></slot>
                      </ul>
                    </ic-horizontal-scroll>
                  </nav>
                </div>
              )}
            </header>
          </ic-section-container>
        </div>
        {this.navMenuVisible && (
          <ic-navigation-menu
            version={this.version}
            status={this.status}
            class={{
              ["inline"]: this.inline,
            }}
          >
            <div class="menu-buttons-slot" slot="buttons">
              <slot name="buttons"></slot>
            </div>
            <ul slot="navigation">
              <slot name="navigation"></slot>
            </ul>
          </ic-navigation-menu>
        )}
      </Host>
    );
  }
}
