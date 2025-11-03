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
  slottedInteractiveElements,
} from "../../utils/helpers";
import { IcDrawerBoundary, IcDrawerExpandedDetail } from "./ic-drawer.types";
import { IcSizes, IcThemeMode } from "../../utils/types";

/**
 * @slot heading - Content will be rendered in the title area, in place of the heading.
 * @slot heading-adornment - Content will be rendered in the title area, to the left of the heading.
 * @slot message - Content will be rendered below the title area, in place of the message.
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

  private focusedElementIndex = 0;
  private interactiveElementList: HTMLElement[];
  private messageAreaEl?: HTMLDivElement;
  private messageAreaShadowBottomEl?: HTMLDivElement;
  private messageAreaShadowTopEl?: HTMLDivElement;
  private sourceElement: HTMLElement;

  @Element() el: HTMLIcDrawerElement;

  @State() isScrollable: boolean;

  // /**
  //  * The aria label applied to the drawer. This is required when the heading slot is used.
  //  */
  // @Prop() ariaLabel: string = "";

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
  @Prop() closeOnBackdropClick?: boolean = true;

  /**
   * If `true`, the drawer will display in an expanded state.
   */
  @Prop({ reflect: true, mutable: true }) expanded: boolean = false;

  /**
   * The heading to render in the drawer.
   */
  @Prop() heading?: string;

  /**
   * The main body text in the drawer.
   */
  @Prop() message?: string;

  /**
   * The position of the drawer.
   */
  @Prop() position: IcPosition = "right";

  /**
   * If set to `true`, the X (close) button which is displayed when `trigger` is set to "controlled" will be hidden.
   */
  @Prop() hideCloseButton: boolean = false;

  /**
   * The size of the expanded drawer.
   */
  @Prop() size?: IcSizes = "medium";

  /**
   * Sets the drawer to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The method in which the drawer is expanded.
   */
  @Prop() trigger: "arrow" | "controlled" = "arrow";

  /**
   * The variant of the drawer. TODO - figure out how this works
   */
  @Prop() variant: "temporary" | "persistent" = "temporary";

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
            this.interactiveElementList,
            ev.shiftKey
          );
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

  @Watch("expanded")
  watchExpandedHandler(): void {
    this.icDrawerExpanded.emit({ expanded: this.expanded });

    if (this.trigger === "controlled") {
      this.handleDrawerExpanded(true);
    }
  }

  // if (this.expanded) {
  //   this.sourceElement = document.activeElement as HTMLElement;
  //   this.getInteractiveElements();
  //   if (this.interactiveElementList.length > 0) {
  //     if (this.interactiveElementList[0].tagName === "IC-BUTTON") {
  //       requestAnimationFrame(() => {
  //         setTimeout(() => {
  //           (
  //             this.interactiveElementList[0] as HTMLIcButtonElement
  //           ).setFocus();
  //         }, this.TRANSITION_DURATION);
  //       });
  //     } else {
  //       this.interactiveElementList[1].focus();
  //     }
  //   }
  // } else {
  //   setTimeout(() => {
  //     this.sourceElement?.focus();
  //   }, this.TRANSITION_DURATION);
  // }
  // }

  componentWillLoad(): void {
    if (this.el.parentElement && this.boundary === "parent") {
      this.el.parentElement.style.overflow = "hidden";
    }
  }

  componentDidLoad(): void {
    this.handleMessageAreaScroll();
  }

  // componentDidUpdate(): void {
  //   this.updateInteractiveElements();
  // }

  // private getFocusedElementIndex = () => {
  //   for (let i = 0; i < this.interactiveElementList.length; i++) {
  //     if (
  //       (this.interactiveElementList[i] as HTMLElement) ===
  //       (this.el?.shadowRoot?.activeElement || document.activeElement)
  //     ) {
  //       this.focusedElementIndex = i;
  //     }
  //   }
  // };

  // private focusElement = (element: HTMLElement, shiftKey = false) => {
  //   let nextFocusEl = element;

  //   if (this.shouldSkipElement(element)) {
  //     this.setFocusIndexBasedOnShiftKey(shiftKey);
  //     this.loopNextFocusIndexIfLastElement();

  //     nextFocusEl = this.getNextFocusEl(this.focusedElementIndex);
  //     this.focusElement(nextFocusEl, shiftKey);
  //   } else {
  //     switch (element.tagName) {
  //       case this.IC_ACCORDION_GROUP:
  //       case this.IC_ACCORDION:
  //       case this.IC_SEARCH_BAR:
  //       case this.IC_TEXT_FIELD:
  //       case this.IC_CHECKBOX:
  //         (element as IcFocusableComponents).setFocus();
  //         break;
  //       default:
  //         (element as HTMLElement).focus();
  //     }
  //   }
  // };

  // private loopNextFocusIndexIfLastElement() {
  //   if (this.focusedElementIndex > this.interactiveElementList.length - 1)
  //     this.focusedElementIndex = 0;
  //   else if (this.focusedElementIndex < 0) {
  //     this.focusedElementIndex = this.interactiveElementList.length - 1;
  //   }
  // }

  // private onTabKeyPress = (shiftKey: boolean): boolean => {
  //   this.getFocusedElementIndex();

  //   if (
  //     this.interactiveElementList[this.focusedElementIndex].tagName ===
  //     this.IC_SEARCH_BAR
  //   ) {
  //     return false;
  //   }

  //   this.setFocusIndexBasedOnShiftKey(shiftKey);
  //   this.loopNextFocusIndexIfLastElement();

  //   this.focusElement(this.getNextFocusEl(this.focusedElementIndex), shiftKey);
  //   return true;
  // };

  // private shouldSkipElement = (element: HTMLElement): boolean => {
  //   const isHidden =
  //     getComputedStyle(element).visibility === "hidden" ||
  //     element.offsetHeight === 0 ||
  //     element.hasAttribute("disabled") ||
  //     (element.tagName === this.IC_ACCORDION_GROUP &&
  //       element.hasAttribute("single-expansion"));

  //   const radioEl = element.closest("ic-radio-option");

  //   return (
  //     isHidden ||
  //     (element.getAttribute("type") === "radio" &&
  //       !!radioEl &&
  //       !(radioEl.hasAttribute("selected") || element.tabIndex === 0))
  //   );
  // };

  // private getNextFocusEl = (focusedElementIndex: number) =>
  //   this.interactiveElementList[focusedElementIndex];

  // // When trigger is controlled, focus should be set to the first interactive element on drawer expansion

  // private focusNextInteractiveElement = (shiftKey: boolean) => {
  //   this.getFocusedElementIndex();
  //   this.setFocusIndexBasedOnShiftKey(shiftKey);
  //   this.loopNextFocusIndexIfLastElement();

  //   let nextFocusEl = this.getNextFocusEl(this.focusedElementIndex);

  //   const isHidden =
  //     getComputedStyle(nextFocusEl).visibility === "hidden" ||
  //     (nextFocusEl.tagName === this.IC_ACCORDION_GROUP &&
  //       nextFocusEl.hasAttribute("single-expansion"));

  //   if (nextFocusEl.tagName === this.IC_TEXT_FIELD) {
  //     (nextFocusEl as HTMLIcTextFieldElement).setFocus();
  //   } else {
  //     if (isHidden) {
  //       this.setFocusIndexBasedOnShiftKey(shiftKey);
  //       this.loopNextFocusIndexIfLastElement();

  //       nextFocusEl = this.getNextFocusEl(this.focusedElementIndex);
  //     }
  //     if (nextFocusEl.tagName === this.IC_ACCORDION_GROUP) {
  //       (nextFocusEl as HTMLIcAccordionGroupElement).setFocus();
  //     } else if (nextFocusEl.tagName === this.IC_ACCORDION) {
  //       (nextFocusEl as HTMLIcAccordionElement).setFocus();
  //     } else {
  //       (nextFocusEl as HTMLElement).focus();
  //     }
  //   }
  // };

  // private loopNextFocusIndexIfLastElement() {
  //   if (this.focusedElementIndex > this.interactiveElementList.length - 1)
  //     this.focusedElementIndex = 0;
  //   else if (this.focusedElementIndex < 0) {
  //     this.focusedElementIndex = this.interactiveElementList.length - 1;
  //   }
  // }

  // private setFocusIndexBasedOnShiftKey(shiftKey: boolean) {
  //   if (shiftKey) {
  //     this.focusedElementIndex -= 1;
  //   } else {
  //     this.focusedElementIndex += 1;
  //   }
  // }

  // private updateInteractiveElements = () => {
  //   if (this.expanded) {
  //     this.getInteractiveElements();
  //   }
  // };

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
      setTimeout(() => {
        this.setInteractiveElements();
        if (this.trigger === "controlled") {
          this.sourceElement = document.activeElement as HTMLElement;
        }
        this.focusedElementIndex = focusElement(
          this.interactiveElementList[this.focusedElementIndex],
          this.focusedElementIndex,
          this.interactiveElementList
        );
      }, this.TRANSITION_DURATION);

      // this.sourceElement = document.activeElement as HTMLElement;
      // this.setInteractiveElements();
      // console.log(this.interactiveElementList);
      // MAKE SURE TO SORT FOR WHEN PREFERS-REDUCED-MOTION IS ON
      // this.el.classList.add("ic-drawer-expanding");
      // requestAnimationFrame(() => {
      //   this.el.classList.remove("ic-drawer-expanding");
      // });
      // this.getInteractiveElements();
      // setTimeout(() => {
      //   this.getFocusedElementIndex();
      // }, this.TRANSITION_DURATION); // CHANGE FOR WHEN PREFERS-REDUCED-MOTION IS ON
      // if (this.interactiveElementList.length > 0) {
      //   if (this.interactiveElementList[0].tagName === "IC-BUTTON") {
      //     (this.interactiveElementList[0] as HTMLIcButtonElement).setFocus();
      //   } else {
      //     this.interactiveElementList[1].focus();
      //   }
      // }
    } else {
      const collapsingClassName = "ic-drawer-collapsing";
      this.el.classList.add(collapsingClassName);
      setTimeout(() => {
        this.el.classList.remove(collapsingClassName);
        this.sourceElement?.focus();
      }, this.TRANSITION_DURATION);
    }
  };

  // Show and hide shadows at top and bottom of message area to indicate scrollability
  private handleMessageAreaScroll = () => {
    if (
      this.messageAreaEl &&
      this.messageAreaShadowTopEl &&
      this.messageAreaShadowBottomEl
    ) {
      this.messageAreaShadowTopEl.classList.toggle(
        "show",
        this.messageAreaEl.scrollTop > 0
      );

      this.messageAreaShadowBottomEl.classList.toggle(
        "show",
        this.messageAreaEl.scrollHeight - this.messageAreaEl.scrollTop >
          this.messageAreaEl.clientHeight + 1
      );
    }
  };

  private onBackdropClick = (ev: Event) => {
    if (this.closeOnBackdropClick) {
      this.handleDrawerExpanded(false, ev);
    }
    ev.stopPropagation();
  };

  // private getFocusedElementIndex = () => {
  //   for (let i = 0; i < this.interactiveElementList.length; i++) {
  //     if (
  //       (this.interactiveElementList[i] as HTMLElement) ===
  //       (this.el.shadowRoot?.activeElement || document.activeElement)
  //     ) {
  //       this.focusedElementIndex = i;
  //     }
  //   }
  // };

  // private getNextFocusEl = (focusedElementIndex: number) =>
  //   this.interactiveElementList[focusedElementIndex];

  // private setFocusIndexBasedOnShiftKey(shiftKey: boolean) {
  //   if (shiftKey) {
  //     this.focusedElementIndex -= 1;
  //   } else {
  //     this.focusedElementIndex += 1;
  //   }
  // }

  private setInteractiveElements = () => {
    // Set first interactive element as the chevron or close button
    this.interactiveElementList = Array.from(
      this.el.shadowRoot?.querySelectorAll("ic-button") || []
    );

    const messageArea = this.el.shadowRoot?.querySelector(
      ".message-area"
    ) as HTMLElement;
    this.isScrollable = messageArea.scrollHeight > messageArea.clientHeight;

    // Include message area as an interactive element if it is scrollable
    if (messageArea && this.isScrollable) {
      this.interactiveElementList.push(messageArea);
    }

    this.interactiveElementList = [
      ...this.interactiveElementList,
      ...slottedInteractiveElements(this.el),
    ];
  };

  render() {
    const {
      boundary,
      chevronButtonAriaLabel,
      closeButtonAriaLabel,
      expanded,
      heading,
      message,
      position,
      hideCloseButton,
      size,
      theme,
      trigger,
    } = this;

    const chevronButton = (
      <ic-button
        class="chevron-btn"
        theme={theme}
        variant="icon-tertiary"
        aria-label={
          chevronButtonAriaLabel ||
          (expanded
            ? this.DEFAULT_CLOSE_BUTTON_ARIA_LABEL
            : this.DEFAULT_OPEN_BUTTON_ARIA_LABEL)
        }
        innerHTML={chevronIcon}
        onClick={(ev: Event) => this.handleDrawerExpanded(false, ev)}
      ></ic-button>
    );

    return (
      <Host
        class={{
          "ic-drawer-collapsed": !expanded,
          "ic-drawer-expanded": expanded,
          "ic-drawer-boundary-parent": boundary === "parent",
          [`ic-drawer-${position}-position`]: true,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        aria-expanded={expanded}
      >
        <div class="overlay" onClick={this.onBackdropClick}></div>
        <div
          class={{
            controlled: trigger === "controlled",
            "drawer-panel": true,
            [`${size}`]: true,
          }}
          {...(expanded && { role: "dialog" })}
          // {...(expanded && !isSlotUsed(this.el, "heading")
          //   ? {
          //       "aria-labelledby":
          //         this.ariaLabel !== "" ? this.ariaLabel : "ic-drawer-heading",
          //     }
          //   : {})}
          // {...(expanded && isSlotUsed(this.el, "heading")
          //   ? { "aria-label": this.ariaLabel }
          //   : {})}
          onClick={(ev) =>
            !expanded ? this.handleDrawerExpanded(false, ev) : undefined
          }
        >
          {trigger === "arrow" && chevronButton}
          <div class="inner-drawer-panel">
            <a id="drawer-content"></a> {/* CHECK THIS WORKS */}
            <div class="drawer-header">
              <div class="heading-area">
                {isSlotUsed(this.el, "heading-adornment") && (
                  <slot name="heading-adornment" />
                )}
                {isSlotUsed(this.el, "heading") ? (
                  <slot name="heading" />
                ) : (
                  <ic-typography id="ic-drawer-heading" variant="h4">
                    <h4>{heading}</h4>
                  </ic-typography>
                )}
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
              {/* IS THIS CONDITION NEEDED OR SHOULD THE MESSAGE AREA ALWAYS BE HERE? */}
              {(isSlotUsed(this.el, "message") || !!message) && (
                <div
                  ref={(el) => (this.messageAreaEl = el)}
                  class={{
                    scrollable: this.isScrollable,
                    "message-area": true,
                  }}
                  // ["message-area-padding"]: isSlotUsed(this.el, "message"),
                  tabindex={this.isScrollable ? 0 : -1}
                  onScroll={() => this.handleMessageAreaScroll()}
                >
                  <div
                    ref={(el) => (this.messageAreaShadowTopEl = el)}
                    class="message-area-shadow-top"
                  ></div>
                  {isSlotUsed(this.el, "message") ? (
                    <slot name="message" />
                  ) : (
                    <ic-typography
                      class={{
                        ["body-text"]: true,
                        // ["message-area-padding"]: !isSlotUsed(
                        //   this.el,
                        //   "message"
                        // ),
                      }}
                    >
                      <p>{message}</p>
                    </ic-typography>
                  )}

                  <div
                    ref={(el) => (this.messageAreaShadowBottomEl = el)}
                    class="message-area-shadow-bottom"
                  ></div>
                </div>
              )}
              {(isSlotUsed(this.el, "actions") ||
                position === "bottom" ||
                position === "top") && (
                <div class="action-area">
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
