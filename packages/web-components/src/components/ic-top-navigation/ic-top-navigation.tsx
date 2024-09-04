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
  IcDeviceSizes,
  IcValueEventDetail,
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
  isEmptyString,
  isPropDefined,
} from "../../utils/helpers";
import { IcSearchBarBlurEventDetail } from "../ic-search-bar/ic-search-bar.types";
import searchIcon from "../../assets/top-nav-search.svg";

/**
 * @slot app-icon - Content will be rendered to left of app title. Anything that is slotted here will be hidden from screen readers.
 * @slot app-title - Handle routing by nesting a route in the app title.
 * @slot short-app-title - Handle routing by nesting a route in the short app title (to be displayed in place of app title on small screen sizes).
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
  private hasAppIcon: boolean = false;
  private hasIconButtons: boolean = false;
  private hasNavigation: boolean = false;
  private hasSearchSlotContent: boolean = false;
  private mobileSearchButtonEl: HTMLIcButtonElement;
  private resizeObserver: ResizeObserver = null;
  private searchBar: HTMLIcSearchBarElement = null;

  @Element() el: HTMLIcTopNavigationElement;

  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() foregroundColor: IcThemeForeground = getThemeForegroundColor();
  @State() hasFullWidthSearchBar: boolean = false;
  @State() mobileSearchBarVisible: boolean = false;
  @State() mobileSearchHiddenOnBlur: boolean = false;
  @State() navMenuVisible: boolean = false;
  @State() searchButtonClick: boolean = false;
  @State() searchValue: string = "";

  /**
   * The alignment of the top navigation content.
   */
  @Prop() contentAligned: IcAlignment = "full-width";
  /**
   * Can set a custom breakpoint for the top navigation to switch to mobile mode.
   * Must be one of our specified breakpoints in px: `0`, `576`, `768`, `992`, `1200`.
   */
  @Prop() customMobileBreakpoint: IcDeviceSizes = DEVICE_SIZES.L;
  /**
   *  The URL to navigate to when the app title is clicked.
   */
  @Prop() href: string = "/";

  /**
   * If `true`, the flyout navigation menu on small devices will be contained by the parent element.
   */
  @Prop() inline: boolean = false;

  /**
   * The short title of the app to be displayed at small screen sizes in place of the app title.
   */
  @Prop() shortAppTitle: string = "";

  /**
   * The status info to be displayed.
   */
  @Prop() status: string = "";

  /**
   * The version info to be displayed.
   */
  @Prop() version: string = "";

  /**
   * The app title to be displayed. This is required, unless a slotted app title link is used.
   */
  @Prop() appTitle: string;

  @Watch("appTitle")
  watchPropHandler(newValue: string, oldValue: string): void {
    //added for Gatsby rehydration issue where prop is initially undefined but then changes to actual value
    //this watch can be removed once Gatsby hydration issue is resolved
    onComponentPropUndefinedChange(
      oldValue,
      newValue,
      this.initialiseSearchBar
    );
  }

  /**
   * @internal - Emitted when the menu is closed.
   */
  @Event() icNavigationMenuClosed: EventEmitter<void>;

  /**
   * @internal - Emitted when the menu is opened.
   */
  @Event() icNavigationMenuOpened: EventEmitter<void>;

  /**
   * Emitted when the top navigation is resized.
   */
  @Event() topNavResized: EventEmitter<{ size: number }>;

  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
  }

  componentWillLoad(): void {
    this.checkSlots();
    this.deviceSize = getCurrentDeviceSize();
    this.initialiseSearchBar();
  }

  componentDidLoad(): void {
    checkResizeObserver(this.runResizeObserver);
    !isSlotUsed(this.el, "app-title") &&
      onComponentRequiredPropUndefined(
        [{ prop: this.appTitle, propName: "app-title" }],
        "Top Navigation"
      );
  }

  componentWillRender(): void {
    this.checkSlots();
  }

  @Listen("icNavigationMenuClose", {})
  navBarMenuCloseHandler(): void {
    this.showNavMenu(false);
    this.el.shadowRoot.querySelector<HTMLElement>("#menu-button").focus();
  }

  @Listen("icSearchBarBlur", {})
  searchInputBlurHandler({
    detail,
  }: CustomEvent<IcSearchBarBlurEventDetail>): void {
    if (detail !== null) {
      if (this.mobileSearchBarVisible && !this.searchButtonClick) {
        //don't hide if blur was triggered by click on search button - let the click handler toggle the state
        this.toggleSearchBar();
      }
      this.searchValue = detail.value;
    }
  }

  @Listen("icChange", {})
  searchValueChangeHandler({ detail }: CustomEvent<IcValueEventDetail>): void {
    this.searchValue = detail.value;
  }

  @Listen("themeChange", { target: "document" })
  themeChangeHandler({ detail }: CustomEvent<IcTheme>): void {
    this.foregroundColor = detail.mode;
  }

  private checkSlots = () => {
    this.hasAppIcon = isSlotUsed(this.el, "app-icon");
    this.hasNavigation = isSlotUsed(this.el, "navigation");
    this.hasIconButtons = isSlotUsed(this.el, "buttons");
    this.hasSearchSlotContent = isSlotUsed(this.el, "search");
  };

  private initialiseSearchBar = () => {
    if (this.hasSearchSlotContent) {
      const slot = getSlot(this.el, "search");
      if (slot?.tagName === "IC-SEARCH-BAR") {
        this.searchBar = slot as HTMLIcSearchBarElement;
      } else if (slot?.tagName === "FORM") {
        this.searchBar = slot.querySelector("ic-search-bar");
      }

      if (this.searchBar !== null) {
        this.searchBar.hideLabel = true;
      }
    }
  };

  private toggleSearchBar(): void {
    this.mobileSearchBarVisible = !this.mobileSearchBarVisible;

    if (this.searchBar !== null) {
      this.mobileSearchButtonEl.setAttribute(
        "aria-label",
        `${this.mobileSearchBarVisible ? "Hide" : "Show"} search`
      );
      this.hasFullWidthSearchBar = this.mobileSearchBarVisible;
      this.searchBar.fullWidth = this.mobileSearchBarVisible;
      if (this.mobileSearchBarVisible) {
        setTimeout(() => {
          this.searchBar.focus();
        }, 100);
      }
    }
  }

  private menuButtonClick = () => {
    this.showNavMenu(true);
  };

  private showNavMenu(show: boolean): void {
    this.navMenuVisible = show;
    (show ? this.icNavigationMenuOpened : this.icNavigationMenuClosed).emit();
    document.body.style.height = show ? "100%" : "auto";
    document.body.style.overflow = show ? "hidden" : "auto";
  }

  private searchButtonMouseDownHandler = () => {
    this.searchButtonClick = true;
  };

  private searchButtonClickHandler = () => {
    this.toggleSearchBar();
    this.searchButtonClick = false;
  };

  private resizeObserverCallback = (currSize: number) => {
    if (currSize !== this.deviceSize) {
      this.deviceSize = currSize;
      if (currSize > this.customMobileBreakpoint) {
        this.showNavMenu(false);
        if (this.mobileSearchBarVisible) {
          this.toggleSearchBar();
        }
      }
      this.topNavResized.emit({
        size: currSize,
      });
      if (this.searchBar && document.activeElement === this.searchBar) {
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
      this.resizeObserverCallback(getCurrentDeviceSize());
    });

    this.resizeObserver.observe(this.el);
  };

  render() {
    const {
      appTitle,
      contentAligned,
      customMobileBreakpoint,
      deviceSize,
      el,
      foregroundColor,
      hasAppIcon,
      hasFullWidthSearchBar,
      hasIconButtons,
      hasNavigation,
      hasSearchSlotContent,
      href,
      inline,
      menuButtonClick,
      mobileSearchBarVisible,
      navMenuVisible,
      searchButtonClickHandler,
      searchButtonMouseDownHandler,
      shortAppTitle,
      status,
      version,
    } = this;

    const hasStatus = status !== "";
    const hasVersion = version !== "";
    const hasMenuContent =
      hasNavigation || hasIconButtons || hasStatus || hasVersion;

    const searchButtonSize = deviceSize <= DEVICE_SIZES.S ? "default" : "large";
    const hasTitle = appTitle !== "" && isPropDefined(appTitle);
    const overMobileBreakpoint = deviceSize <= customMobileBreakpoint;

    const appTitleVariant: IcTypographyVariants = overMobileBreakpoint
      ? deviceSize <= DEVICE_SIZES.S
        ? "subtitle-small"
        : "h4"
      : "h3";

    const mobileSearchButtonTitle = `${
      mobileSearchBarVisible ? "Hide" : "Show"
    } search`;
    const menuSize = deviceSize <= DEVICE_SIZES.S ? "small" : "default";

    const shortAppTitleSlot = isSlotUsed(el, "short-app-title");
    const hasAppTitleSlot = isSlotUsed(el, "app-title");
    const Component = hasAppTitleSlot ? "div" : "a";
    const attrs = Component == "a" && {
      href: href,
    };

    return (
      <Host
        class={{
          "fullwidth-searchbar": hasFullWidthSearchBar,
          "mobile-mode": overMobileBreakpoint,
          [IcThemeForegroundEnum.Dark]:
            foregroundColor === IcThemeForegroundEnum.Dark,
        }}
      >
        <div class="top-navigation">
          <ic-section-container aligned={contentAligned} full-height>
            <header role="banner">
              <div class="top-panel-container">
                <div class="app-details-container">
                  {(hasTitle || hasAppTitleSlot) && (
                    <Component class="title-link" {...attrs}>
                      {hasAppIcon && (
                        <div class="app-icon-container">
                          <slot name="app-icon" />
                        </div>
                      )}
                      {deviceSize <= DEVICE_SIZES.S &&
                      (!isEmptyString(shortAppTitle) || shortAppTitleSlot) ? (
                        <ic-typography
                          variant="subtitle-small"
                          aria-label={
                            (!hasAppTitleSlot || !shortAppTitleSlot) &&
                            `${appTitle} (${shortAppTitle})`
                          }
                        >
                          <h1>
                            {shortAppTitleSlot ? (
                              <slot name="short-app-title"></slot>
                            ) : (
                              shortAppTitle
                            )}
                          </h1>
                        </ic-typography>
                      ) : (
                        <ic-typography variant={appTitleVariant}>
                          <h1 class="title-wrap">
                            {hasAppTitleSlot ? (
                              <slot name="app-title"></slot>
                            ) : (
                              appTitle
                            )}
                          </h1>
                        </ic-typography>
                      )}
                    </Component>
                  )}
                  {hasStatus && (
                    <div class="app-status">
                      <ic-typography
                        aria-label="app tag"
                        variant="label-uppercase"
                        class="app-status-text"
                      >
                        {status}
                      </ic-typography>
                    </div>
                  )}
                  {hasVersion && (
                    <div class="app-version">
                      <ic-typography
                        variant="label"
                        class="app-version-text"
                        aria-label="app version"
                      >
                        {version}
                      </ic-typography>
                    </div>
                  )}
                </div>

                {(hasSearchSlotContent || hasMenuContent) && (
                  <div class="search-menu-container">
                    <div class="search-actions-container">
                      {!overMobileBreakpoint && <slot name="search"></slot>}

                      {hasSearchSlotContent && overMobileBreakpoint && (
                        <ic-button
                          id="search-toggle-button"
                          ref={(el) => (this.mobileSearchButtonEl = el)}
                          onMouseDown={searchButtonMouseDownHandler}
                          variant="icon"
                          size={searchButtonSize}
                          aria-label={mobileSearchButtonTitle}
                          appearance={foregroundColor}
                          onClick={searchButtonClickHandler}
                          innerHTML={
                            !isSlotUsed(this.el, "toggle-icon")
                              ? searchIcon
                              : null
                          }
                        >
                          <slot name="toggle-icon"></slot>
                        </ic-button>
                      )}

                      {hasIconButtons && !overMobileBreakpoint && (
                        <div class="icon-buttons-container">
                          <slot name="buttons"></slot>
                        </div>
                      )}
                      {hasMenuContent && overMobileBreakpoint && (
                        <div class="menu-button-container">
                          <span
                            id="navigation-landmark-button-text"
                            class="navigation-landmark-button-text"
                            aria-hidden="true"
                          >
                            Main navigation button
                          </span>
                          <nav
                            aria-labelledby="navigation-landmark-button-text"
                            aria-hidden={`${navMenuVisible}`}
                          >
                            <ic-button
                              id="menu-button"
                              appearance={foregroundColor}
                              variant="secondary"
                              aria-expanded="false"
                              aria-haspopup="true"
                              aria-label={`Open ${
                                hasNavigation ? "navigation" : "app"
                              } menu`}
                              size={menuSize}
                              onClick={menuButtonClick}
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

              {mobileSearchBarVisible && (
                <div class="search-bar-container">
                  <slot name="search"></slot>
                </div>
              )}

              {hasNavigation && !overMobileBreakpoint && (
                <div class="navigation-tabs">
                  <span
                    id="navigation-landmark-text"
                    class="navigation-landmark-text"
                    aria-hidden="true"
                  >
                    Main pages
                  </span>
                  <nav
                    aria-labelledby="navigation-landmark-text"
                    class="nav-panel-container"
                  >
                    <ic-horizontal-scroll appearance={foregroundColor}>
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
        {navMenuVisible && (
          <ic-navigation-menu
            version={version}
            status={status}
            class={{
              ["inline"]: inline,
            }}
          >
            {hasIconButtons && (
              <div class="menu-buttons-slot" slot="buttons">
                <slot name="buttons"></slot>
              </div>
            )}
            <ul slot="navigation">
              <slot name="navigation"></slot>
            </ul>
          </ic-navigation-menu>
        )}
      </Host>
    );
  }
}
