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

import { IcPosition } from "../../utils/types";

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
import { IcSizes, IcThemeMode } from "../../utils/types";

/**
 * @slot heading - Content will be rendered in the title area, in place of the heading.
 * @slot heading-adornment - Content will be rendered in the title area, to the left of the heading.
 * @slot actions - Content will be rendered in the action area, adjacent to the title area.
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
  private interactiveElementList: HTMLElement[] = [];
  private marginResizeObserver?: ResizeObserver;
  private scrollResizeObserver?: ResizeObserver;
  private sourceElement?: HTMLElement;

  @Element() el: HTMLIcDrawerElement;

  @State() isScrollable: boolean;

  /**
   * The aria label applied to the drawer. This is required when the heading slot is used.
   */
  @Prop() ariaLabel: string = "";

  /**
   * The area within which the drawer should be contained. When set to "parent", the value of the parent element's `position` CSS property must not be "static".
   */
  @Prop() boundary: IcDrawerBoundary = "viewport";

  /**
   * The aria-label of the chevron button (displayed when `trigger="arrow"`). This will default to "Open drawer" / "Close drawer".
   */
  @Prop() chevronButtonAriaLabel?: string;

  /**
   * The aria-label of the close button (displayed when `trigger="controlled"`). This will default to "Close drawer".
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

    // if (this.trigger === "controlled") {
    this.handleDrawerExpanded(true);
    // }
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

  /**
   * Sets the drawer to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * The method in which the drawer is expanded.
   */
  @Prop() trigger: "arrow" | "controlled" = "arrow";

  /**
   * Emitted when the drawer is collapsed and expanded.
   */
  @Event() icDrawerExpanded: EventEmitter<IcDrawerExpandedDetail>;

  @Listen("keydown", { target: "document" })
  handleKeyboard(ev: KeyboardEvent): void {
    if (this.expanded) {
      switch (ev.key) {
        case "Tab":
          const tabKeyPressHandlerResult = handleFocusTrapTabKeyPress(
            this.el,
            this.focusAttemptCount,
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
        case "Escape":
          this.handleDrawerExpanded(false, ev);
          break;
      }
    }
  }

  componentWillLoad(): void {
    if (this.el.parentElement && this.boundary === "parent") {
      this.el.parentElement.style.overflow = "hidden";
    }
  }

  componentDidLoad(): void {
    if (this.expanded) {
      this.handleDrawerExpanded(true);
    }

    this.setContentAreaMutationObserver();
    this.setHostMutationObserver();
    this.setMarginResizeObserver();
    this.setScrollResizeObserver();
  }

  disconnectedCallback(): void {
    removeInteractiveElementSlotChangeListener(
      this.contentAreaSlot,
      this.contentAreaMutationObserver,
      this.getInteractiveElements
    );

    this.hostMutationObserver?.disconnect();
    this.marginResizeObserver?.disconnect();
    this.scrollResizeObserver?.disconnect();
  }

  private renderChevronButton = () => (
    <ic-button
      ref={(el: HTMLIcButtonElement) => (this.chevronButton = el)}
      class="chevron-btn"
      theme={this.theme}
      variant="icon-tertiary"
      innerHTML={chevronIcon}
      aria-controls="drawer-panel"
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
    if (isSlotUsed(this.el, "actions") && this.actionAreaEl) {
      const drawerWidth = this.el.getBoundingClientRect().width;
      const actionAreaWidth = this.actionAreaEl?.getBoundingClientRect().width;
      const threshold = drawerWidth / 2 - 48;

      if (actionAreaWidth > threshold) {
        this.actionAreaEl.classList.add("with-margin");
      } else {
        this.actionAreaEl.classList.remove("with-margin");
      }
    }
  };

  private getAriaAttributes = () => {
    if (!this.expanded) return {};
    if (isSlotUsed(this.el, "heading")) {
      return {
        "aria-label": this.ariaLabel,
      };
    }
    return {
      // "aria-labelledby": !isEmptyString(this.ariaLabel)
      //   ? this.ariaLabel // NEEDS FIXING
      //   : "drawer-heading",
      "aria-labelledby": "drawer-heading",
    };
  };

  private getInteractiveElements = () => {
    // Set first interactive element as the chevron or close button
    this.interactiveElementList = Array.from(
      this.el.shadowRoot?.querySelectorAll("ic-button") || []
    );

    const contentArea = this.el.shadowRoot?.querySelector(
      ".content-area"
    ) as HTMLElement;
    this.isScrollable = contentArea.scrollHeight > contentArea.clientHeight;

    // Include content area as an interactive element if it is scrollable
    if (contentArea && this.isScrollable) {
      contentArea.tabIndex = 0;
      this.interactiveElementList.push(contentArea);
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
        this.el.shadowRoot?.querySelector("#drawer-content") || null,
        this.getInteractiveElements
      );
    this.contentAreaSlot = contentAreaSlot;
    this.contentAreaMutationObserver = contentAreaMutationObserver;
  };

  private setHostMutationObserver = () => {
    this.hostMutationObserver = new MutationObserver((mutationList) =>
      renderDynamicChildSlots(mutationList, "actions", this)
    );
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });
  };

  private setMarginResizeObserver = () => {
    // Stops resize observer running when position is changed to left or right
    if (this.marginResizeObserver) {
      this.marginResizeObserver.disconnect();
      this.marginResizeObserver = undefined;
    }

    if (this.position === "top" || this.position === "bottom") {
      this.marginResizeObserver = new ResizeObserver(() => {
        this.updateActionAreaMargin();
      });
      this.marginResizeObserver.observe(this.el);
      this.updateActionAreaMargin();
    }
  };

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

    // Don't change `expanded` prop value if it has already been changed externally i.e. controlled
    if (!externalTrigger) {
      this.expanded = !this.expanded;
    }

    if (this.expanded) {
      this.chevronButton?.shadowRoot?.querySelector("button")?.blur();

      setTimeout(() => {
        this.getInteractiveElements();

        if (this.trigger === "controlled") {
          this.sourceElement = document.activeElement as HTMLElement;
        }

        if (this.interactiveElementList.length > 0) {
          const newFocusedElementIndex = focusElement(
            this.focusedElementIndex,
            this.interactiveElementList
          );
          if (newFocusedElementIndex) {
            this.focusedElementIndex = newFocusedElementIndex;
          }
        }
      }, this.TRANSITION_DURATION);
    } else {
      const collapsingClassName = "ic-drawer-collapsing";
      this.el.classList.add(collapsingClassName);
      setTimeout(() => {
        this.el.classList.remove(collapsingClassName);
        if (this.trigger === "controlled") {
          this.sourceElement?.focus();
        } else {
          this.chevronButton?.setFocus();
        }
      }, this.TRANSITION_DURATION);
      this.focusedElementIndex = 0; // Reset to first element for when drawer is reopened
    }
  };

  render() {
    const {
      boundary,
      closeButtonAriaLabel,
      expanded,
      heading,
      position,
      hideCloseButton,
      size,
      theme,
      trigger,
    } = this;

    return (
      <Host
        class={{
          "ic-drawer-boundary-parent": boundary === "parent",
          "ic-drawer-collapsed": !expanded,
          "ic-drawer-expanded": expanded,
          [`ic-drawer-${position}-position`]: true,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <div class="overlay" onClick={this.handleBackdropClick}></div>
        <div
          ref={(el) => (this.drawerPanelEl = el)}
          class={{
            controlled: trigger === "controlled",
            "drawer-panel": true,
            [`${size}`]: true,
          }}
          id="drawer-panel"
          tabindex={-1} // Needed to set focus on whole drawer panel when there are no focusable elements
          {...(expanded ? { role: "dialog" } : {})}
          {...this.getAriaAttributes()}
          onClick={(ev) =>
            !expanded ? this.handleDrawerExpanded(false, ev) : undefined
          }
        >
          {trigger === "arrow" && this.renderChevronButton()}
          <div class="inner-drawer-panel">
            {/* <a id="drawer-content"></a> CHECK THIS WORKS */}
            <div class="drawer-header">
              <div class="heading-area">
                <slot name="heading-adornment" />
                <slot name="heading">
                  <ic-typography id="drawer-heading" variant="h4">
                    <h4>{heading}</h4>
                  </ic-typography>
                </slot>
              </div>
              {!hideCloseButton && trigger === "controlled" && (
                <ic-button
                  className="close-btn"
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
                <div id="drawer-content">
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
                position === "bottom" ||
                position === "top") && (
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
