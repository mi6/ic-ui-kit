import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Listen,
  State,
  Watch,
} from "@stencil/core";

import chevronIcon from "../../assets/chevron-icon.svg";

import closeIcon from "../../assets/close-icon.svg";

import {
  focusElement,
  handleFocusTrapTabKeyPress,
  isSlotUsed,
  refreshInteractiveElementsOnSlotChange,
  removeInteractiveElementSlotChangeListener,
  renderDynamicChildSlots,
  slottedInteractiveElements,
} from "../../utils/helpers";
import { IcDrawerBoundary, IcDrawerExpandedDetail } from "./ic-drawer.types";
import { IcPosition, IcSizes, IcThemeMode } from "../../utils/types";

// Imports needed for rendering components in Storybook
import "../../../../web-components/src/components/ic-accordion/ic-accordion";
import "../../../../web-components/src/components/ic-action-chip/ic-action-chip";
import "../../../../web-components/src/components/ic-footer/ic-footer";
import "../../../../web-components/src/components/ic-horizontal-scroll/ic-horizontal-scroll";
import "../../../../web-components/src/components/ic-menu/ic-menu";
import "../../../../web-components/src/components/ic-menu-group/ic-menu-group";
import "../../../../web-components/src/components/ic-menu-item/ic-menu-item";
import "../../../../web-components/src/components/ic-popover-menu/ic-popover-menu";
import "../../../../web-components/src/components/ic-radio-option/ic-radio-option";
import "../../../../web-components/src/components/ic-radio-group/ic-radio-group";
import "../../../../web-components/src/components/ic-search-bar/ic-search-bar";
import "../../../../web-components/src/components/ic-side-navigation/ic-side-navigation";
import "../../../../web-components/src/components/ic-switch/ic-switch";
import "../../../../web-components/src/components/ic-tab/ic-tab";
import "../../../../web-components/src/components/ic-tab-context/ic-tab-context";
import "../../../../web-components/src/components/ic-tab-group/ic-tab-group";
import "../../../../web-components/src/components/ic-tab-panel/ic-tab-panel";

/**
 * @slot heading - Content will be rendered in the title area, in place of the heading.
 * @slot heading-adornment - Content will be rendered in the title area, to the left of the heading.
 * @slot actions - Content will be rendered in the action area at the bottom of the drawer.
 */

@Component({
  tag: "ic-drawer",
  styleUrl: "ic-drawer.css",
  shadow: true,
})
export class Drawer {
  private DEFAULT_CLOSE_BUTTON_ARIA_LABEL = "Close drawer";
  private DEFAULT_OPEN_BUTTON_ARIA_LABEL = "Open drawer";
  private TRANSITION_DURATION = 300;

  private actionAreaEl?: HTMLDivElement;
  private chevronButton?: HTMLIcButtonElement;
  private contentAreaEl?: HTMLDivElement;
  private contentAreaMutationObserver: MutationObserver | null = null;
  private contentAreaShadowBottomEl?: HTMLDivElement;
  private contentAreaShadowTopEl?: HTMLDivElement;
  private contentAreaSlot?: HTMLSlotElement | null;
  private drawerPanelEl?: HTMLDivElement;
  private focusAttemptCount = 0;
  private focusedElementIndex = 0;
  private hostMutationObserver: MutationObserver | null = null;
  private innerDrawerPanelEl?: HTMLDivElement;
  private innerPanelResizeObserver?: ResizeObserver;
  private interactiveElementList: HTMLElement[] = [];
  private marginResizeObserver?: ResizeObserver;
  private scrollResizeObserver?: ResizeObserver;
  private triggerElement?: HTMLElement;

  @Element() el: HTMLIcDrawerElement;

  @State() isScrollable: boolean;

  /**
   * The area within which the drawer should be contained. When set to "parent", the value of the parent element's `position` CSS property must not be "static".
   */
  @Prop() boundary: IcDrawerBoundary = "viewport";
  @Watch("boundary")
  watchBoundaryHandler() {
    this.setInnerPanelResizeObserver();
    this.setParentOverflowHidden();
  }

  /**
   * The aria-label of the chevron button (displayed when `trigger="chevron"`). This will default to "Open drawer" / "Close drawer".
   */
  @Prop() chevronButtonAriaLabel?: string;

  /**
   * The aria-label of the X (close) button (displayed when `trigger="controlled"`). This will default to "Close drawer".
   */
  @Prop() closeButtonAriaLabel?: string;

  /**
   * If `true`, the drawer will close when the backdrop is clicked.
   */
  @Prop() closeOnBackdropClick: boolean = true;

  /**
   * If `true`, the drawer will display in an expanded state.
   */
  @Prop({ reflect: true, mutable: true }) expanded: boolean = false;
  @Watch("expanded")
  watchExpandedHandler(): void {
    this.icDrawerExpanded.emit({ expanded: this.expanded });
    this.handleDrawerExpanded(true);
    this.setInnerPanelResizeObserver();
  }

  /**
   * The heading of the drawer. This is required, unless a slotted heading is used.
   */
  @Prop() heading?: string;

  /**
   * The body content of the drawer.
   */
  @Prop() message?: string;

  /**
   * The position of the drawer.
   */
  @Prop() position: IcPosition = "right";
  @Watch("position")
  watchPositionHandler(): void {
    this.setMarginResizeObserver();
  }

  /**
   * If set to `true`, the X (close) button which is displayed when `trigger` is set to "controlled" will be hidden.
   */
  @Prop() hideCloseButton: boolean = false;

  /**
   * The size of the expanded drawer.
   */
  @Prop() size: IcSizes = "medium";
  @Watch("size")
  watchSizeHandler(): void {
    this.setInnerPanelResizeObserver();
  }

  /**
   * Sets the drawer to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * The method in which the drawer is expanded.
   */
  @Prop() trigger: "chevron" | "controlled" = "chevron";
  @Watch("trigger")
  watchTriggerHandler(): void {
    this.setMarginResizeObserver();
  }

  /**
   * Emitted when the drawer is expanded and collapsed.
   */
  @Event() icDrawerExpanded: EventEmitter<IcDrawerExpandedDetail>;

  @Listen("keydown", { target: "document" })
  handleKeyDown(ev: KeyboardEvent): void {
    if (this.expanded) {
      switch (ev.key) {
        case "Tab": {
          const tabKeyPressHandlerResult = handleFocusTrapTabKeyPress(
            this.el,
            this.focusAttemptCount,
            this.focusedElementIndex,
            this.interactiveElementList,
            ev.shiftKey
          );
          this.focusAttemptCount =
            tabKeyPressHandlerResult.newFocusAttemptCount;
          this.focusedElementIndex =
            tabKeyPressHandlerResult.newFocusedElementIndex;
          if (tabKeyPressHandlerResult.preventDefault) {
            ev.preventDefault();
          }
          break;
        }
        case "Escape":
          this.handleDrawerExpanded(false, ev);
          break;
      }
    }
  }

  componentWillLoad(): void {
    this.setParentOverflowHidden();
  }

  componentDidLoad(): void {
    if (this.expanded) {
      this.handleDrawerExpanded(true);
    }

    this.setContentAreaMutationObserver();
    this.setHostMutationObserver();
    this.setMarginResizeObserver();
    this.setInnerPanelResizeObserver();
    this.setScrollResizeObserver();
  }

  disconnectedCallback(): void {
    removeInteractiveElementSlotChangeListener(
      this.contentAreaSlot,
      this.contentAreaMutationObserver,
      this.getInteractiveElements
    );

    this.contentAreaMutationObserver?.disconnect();
    this.hostMutationObserver?.disconnect();
    this.marginResizeObserver?.disconnect();
    this.innerPanelResizeObserver?.disconnect();
    this.scrollResizeObserver?.disconnect();

    if (this.el.parentElement && this.isParentBoundary()) {
      // Remove hidden overflow which was added to parent element
      this.el.parentElement.style.overflow = "";
    }
  }

  private isChevronTrigger = () => this.trigger === "chevron";

  private isControlledTrigger = () => this.trigger === "controlled";

  private isTopOrBottomPosition = () =>
    this.position === "top" || this.position === "bottom";

  private isParentBoundary = () => this.boundary === "parent";

  private preventActionAreaChevronOverlap = () =>
    this.isTopOrBottomPosition() && this.isChevronTrigger();

  private renderChevronButton = () => (
    <ic-button
      ref={(el) => (this.chevronButton = el)}
      class="chevron-btn"
      theme={this.theme}
      variant="icon-tertiary"
      innerHTML={chevronIcon}
      aria-expanded={this.expanded ? "true" : "false"}
      aria-label={
        this.chevronButtonAriaLabel ||
        (this.expanded
          ? this.DEFAULT_CLOSE_BUTTON_ARIA_LABEL
          : this.DEFAULT_OPEN_BUTTON_ARIA_LABEL)
      }
      onClick={(ev: Event) => this.handleDrawerExpanded(false, ev)}
    ></ic-button>
  );

  // Moves action area to above the chevron button
  // if drawer width is too narrow to display to the right of it
  // (For top and bottom drawer position)
  private updateActionAreaMargin = () => {
    const withMarginClass = "with-margin";

    if (this.actionAreaEl) {
      this.actionAreaEl.classList.remove(withMarginClass);

      if (
        this.preventActionAreaChevronOverlap() &&
        isSlotUsed(this.el, "actions")
      ) {
        const drawerWidth = this.el.getBoundingClientRect().width;
        const actionAreaWidth = this.actionAreaEl.getBoundingClientRect().width;
        const threshold = drawerWidth / 2 - 48;

        if (actionAreaWidth > threshold) {
          this.actionAreaEl.classList.add(withMarginClass);
        }
      }
    }
  };

  private getInteractiveElements = () => {
    // Set first interactive element as the chevron or close button
    this.interactiveElementList = Array.from(
      this.el.shadowRoot?.querySelectorAll("ic-button") || []
    );

    if (this.contentAreaEl) {
      this.isScrollable =
        this.contentAreaEl.scrollHeight > this.contentAreaEl.clientHeight;

      // Include content area as an interactive element if it is scrollable
      if (this.isScrollable) {
        this.contentAreaEl.tabIndex = 0;
        this.interactiveElementList.push(this.contentAreaEl);
      }
    }

    this.interactiveElementList = [
      ...this.interactiveElementList,
      ...slottedInteractiveElements(this.el),
    ];

    // Make drawer panel get focused if there are no focusable elements
    // E.g. when trigger is "controlled" and close button is hidden
    if (this.interactiveElementList.length === 0 && this.drawerPanelEl) {
      this.interactiveElementList = [this.drawerPanelEl];
    }
  };

  private setContentAreaMutationObserver = () => {
    const { contentAreaSlot, contentAreaMutationObserver } =
      refreshInteractiveElementsOnSlotChange(
        this.el.shadowRoot?.querySelector(".drawer-content") || null,
        this.getInteractiveElements
      );
    this.contentAreaSlot = contentAreaSlot;
    this.contentAreaMutationObserver = contentAreaMutationObserver;
  };

  private setHostMutationObserver = () => {
    this.hostMutationObserver = new MutationObserver((mutationList) => {
      renderDynamicChildSlots(mutationList, "actions", this);
    });
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });
  };

  // Add resize observer to manage inner drawer panel size
  private setInnerPanelResizeObserver = () => {
    if (this.innerPanelResizeObserver) {
      this.innerPanelResizeObserver.disconnect();
      this.innerPanelResizeObserver = undefined;
    }

    this.innerPanelResizeObserver = new ResizeObserver(() => {
      if (this.expanded) {
        this.setInnerDrawerPanelSize();
      }
    });

    if (this.isParentBoundary()) {
      if (this.el.parentElement) {
        this.innerPanelResizeObserver.observe(this.el.parentElement);
      }
    } else {
      this.innerPanelResizeObserver.observe(document.documentElement);
    }
    this.setInnerDrawerPanelSize();
  };

  // Set inner drawer panel size to make sliding animation work correctly
  // and also prevent overflow when boundary is smaller than drawer size
  private setInnerDrawerPanelSize = () => {
    const isRightOrLeftPosition =
      this.position === "right" || this.position === "left";

    const drawerSize = getComputedStyle(this.el)
      .getPropertyValue(
        isRightOrLeftPosition ? "--ic-drawer-width" : "--ic-drawer-height"
      )
      .trim();

    let drawerSizePx = 0;

    if (drawerSize.endsWith("rem")) {
      drawerSizePx =
        parseFloat(drawerSize) *
        parseFloat(getComputedStyle(document.documentElement).fontSize); // Convert REM to PX for following calculations
    } else if (drawerSize.endsWith("px")) {
      drawerSizePx = parseFloat(drawerSize);
    }

    const parentElRect = this.el.parentElement?.getBoundingClientRect();
    const parentElSize = parentElRect
      ? isRightOrLeftPosition
        ? parentElRect.width
        : parentElRect.height
      : 0;

    const boundarySize = this.isParentBoundary()
      ? parentElSize
      : isRightOrLeftPosition
      ? window.innerWidth
      : window.innerHeight;

    if (this.innerDrawerPanelEl) {
      const minSize = Math.min(boundarySize, drawerSizePx); // Set width / height to default, or to width / height of parent element if it's smaller
      const sizeProperty = isRightOrLeftPosition ? "minWidth" : "minHeight";
      this.innerDrawerPanelEl.style[sizeProperty] = `${minSize}px`;
    }
  };

  // Add resize observer to manage action area margin
  // when position is top or bottom and trigger is "chevron" - otherwise remove resize observer
  private setMarginResizeObserver = () => {
    if (this.marginResizeObserver) {
      this.marginResizeObserver.disconnect();
      this.marginResizeObserver = undefined;
    }

    if (this.preventActionAreaChevronOverlap()) {
      this.marginResizeObserver = new ResizeObserver(() => {
        this.updateActionAreaMargin();
      });
      this.marginResizeObserver.observe(this.el);
    }
    this.updateActionAreaMargin();
  };

  // Set overflow to hidden on parent element to prevent content overflowing during sliding animation
  // when boundary is set to "parent"
  private setParentOverflowHidden = () => {
    if (this.el.parentElement) {
      if (this.isParentBoundary()) {
        this.el.parentElement.style.overflow = "hidden";
      } else {
        this.el.parentElement.style.overflow = "";
      }
    }
  };

  // Add resize observer to manage scroll behaviour for long content
  private setScrollResizeObserver = () => {
    this.scrollResizeObserver = new ResizeObserver(() => {
      this.handleContentAreaScroll();
    });
    if (this.contentAreaEl) {
      this.scrollResizeObserver.observe(this.contentAreaEl);
    }
    this.handleContentAreaScroll();
  };

  private handleBackdropClick = (ev: Event) => {
    if (this.closeOnBackdropClick) {
      this.handleDrawerExpanded(false, ev);
    }
    ev.stopPropagation();
  };

  // Show and hide shadows at top and bottom of content area to indicate scrollability
  private handleContentAreaScroll = () => {
    if (
      this.contentAreaEl &&
      this.contentAreaShadowTopEl &&
      this.contentAreaShadowBottomEl
    ) {
      this.contentAreaShadowTopEl.classList.toggle(
        "show",
        this.contentAreaEl.scrollTop > 0
      );

      this.contentAreaShadowBottomEl.classList.toggle(
        "show",
        this.contentAreaEl.scrollHeight - this.contentAreaEl.scrollTop >
          this.contentAreaEl.clientHeight + 1
      );
    }
  };

  private handleDrawerExpanded = (
    externalTrigger: boolean,
    ev?: Event
  ): void => {
    ev?.stopPropagation();

    // Don't change value of expanded prop if it has already been changed externally i.e. controlled
    if (!externalTrigger) {
      this.expanded = !this.expanded;
    }

    if (this.expanded) {
      setTimeout(() => {
        this.getInteractiveElements();

        if (this.isControlledTrigger()) {
          this.triggerElement = document.activeElement as HTMLElement;
        }

        if (this.interactiveElementList.length > 0) {
          const focusElementResult = focusElement(
            this.focusAttemptCount,
            this.focusedElementIndex,
            this.interactiveElementList
          );
          if (focusElementResult) {
            this.focusAttemptCount = focusElementResult.newFocusAttemptCount;
            this.focusedElementIndex =
              focusElementResult?.newFocusedElementIndex;
          }
        }
      }, this.TRANSITION_DURATION);
    } else {
      const collapsingClass = "ic-drawer-collapsing";
      this.el.classList.add(collapsingClass);

      setTimeout(() => {
        this.el.classList.remove(collapsingClass);
        if (this.isControlledTrigger()) {
          this.triggerElement?.focus();
        } else {
          this.chevronButton?.setFocus();
        }
      }, this.TRANSITION_DURATION);

      this.focusedElementIndex = 0; // Reset to first element in case drawer is reopened
    }
  };

  render() {
    const {
      closeButtonAriaLabel,
      expanded,
      heading,
      position,
      hideCloseButton,
      size,
      theme,
    } = this;

    return (
      <Host
        class={{
          "ic-drawer-boundary-parent": this.isParentBoundary(),
          "ic-drawer-collapsed": !expanded,
          "ic-drawer-expanded": expanded,
          [`ic-drawer-${position}`]: true,
          [`ic-drawer-${size}`]: true,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <div class="overlay" onClick={this.handleBackdropClick}></div>
        <div
          ref={(el) => (this.drawerPanelEl = el)}
          class={{
            controlled: this.isControlledTrigger(),
            "drawer-panel": true,
            [`${size}`]: true,
          }}
          id="drawer-panel"
          // Tab-index needed to set focus programmatically on whole drawer panel
          // when trigger is "controlled" and close button is hidden
          // i.e. when there are no focusable elements
          tabindex={-1}
          {...(expanded
            ? { role: "dialog", "aria-labelledby": "drawer-heading" }
            : {})}
          onClick={(ev) =>
            !expanded ? this.handleDrawerExpanded(false, ev) : undefined
          }
        >
          {this.isChevronTrigger() && this.renderChevronButton()}
          <div
            ref={(el) => (this.innerDrawerPanelEl = el)}
            class="inner-drawer-panel"
          >
            <div class="drawer-header">
              <div class="heading-area">
                <slot name="heading-adornment" />
                <div id="drawer-heading">
                  <slot name="heading">
                    <ic-typography variant="h4">
                      <h4>{heading}</h4>
                    </ic-typography>
                  </slot>
                </div>
              </div>
              {!hideCloseButton && this.isControlledTrigger() && (
                <ic-button
                  class="close-btn"
                  variant="icon-tertiary"
                  theme={theme}
                  onClick={(ev: Event) => this.handleDrawerExpanded(false, ev)}
                  innerHTML={closeIcon}
                  aria-label={
                    closeButtonAriaLabel || this.DEFAULT_CLOSE_BUTTON_ARIA_LABEL
                  }
                ></ic-button>
              )}
            </div>
            <div class="main-content">
              <div
                ref={(el) => (this.contentAreaEl = el)}
                class={{
                  scrollable: this.isScrollable,
                  "content-area": true,
                }}
                onScroll={this.handleContentAreaScroll}
              >
                <div
                  ref={(el) => (this.contentAreaShadowTopEl = el)}
                  class="content-area-shadow-top"
                ></div>
                <div class="drawer-content">
                  <slot name="message">
                    <ic-typography>
                      <p>{this.message}</p>
                    </ic-typography>
                  </slot>
                </div>
                <div
                  ref={(el) => (this.contentAreaShadowBottomEl = el)}
                  class="content-area-shadow-bottom"
                ></div>
              </div>
              {(isSlotUsed(this.el, "actions") ||
                this.isTopOrBottomPosition()) && (
                <div ref={(el) => (this.actionAreaEl = el)} class="action-area">
                  <slot name="actions" />
                </div>
              )}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
