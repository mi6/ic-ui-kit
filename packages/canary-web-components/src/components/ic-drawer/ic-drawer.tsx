import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Listen,
} from "@stencil/core";

import { IcPosition } from "@ukic/web-components/dist/types/utils/types";

import chevronIcon from "../../assets/chevron-icon.svg";

import closeIcon from "../../assets/close-icon.svg";

import { isSlotUsed } from "../../utils/helpers";
import { IcDrawerExpandedDetail } from "./ic-drawer.types";
import { isPropDefined } from "../../utils/helpers";

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
  private IC_ACCORDION: string = "IC-ACCORDION";
  private IC_ACCORDION_GROUP: string = "IC-ACCORDION-GROUP";
  private IC_TEXT_FIELD: string = "IC-TEXT-FIELD";

  private focusedElementIndex = 0;
  private interactiveElementList: HTMLElement[];

  @Element() el: HTMLIcDrawerElement;

  /**
   * The aria label applied to the drawer. This is required when the heading slot is used.
   */
  @Prop() ariaLabel: string = "";

  /**
   * The aria label of the chevron button when trigger is set to "arrow". The default aria label is "Open drawer" / "Close drawer".
   */
  @Prop() chevronButtonAriaLabel?: string = "";

  /**
   * The aria label of the close button when the show-close-button attribute (web-components) / showCloseButton prop (React) is set to `true`. The default aria label is "Open drawer" / "Close drawer".
   */
  @Prop() closeButtonAriaLabel: string = "Close drawer";

  /**
   * If set to `false`, the drawer will not close when the backdrop is clicked.
   */
  @Prop() closeOnBackdropClick?: boolean = true;

  /**
   * If set to `true`, the drawer will display in an expanded state.
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
   * If set to `true`, an X (close) button will be displayed in the drawer.
   */
  @Prop() showCloseButton: boolean = false;

  /**
   * The size of the expanded drawer.
   */
  @Prop() size?: "small" | "medium" | "large" = "medium";

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
          ev.preventDefault();
          this.focusNextInteractiveElement(ev.shiftKey);
          break;
        case "Escape":
          this.setDrawerExpanded();
          break;
      }
    }
  }

  componentDidLoad(): void {
    this.updateInteractiveElements();
  }

  componentDidUpdate(): void {
    this.updateInteractiveElements();
  }

  private getFocusedElementIndex = () => {
    for (let i = 0; i < this.interactiveElementList.length; i++) {
      if (
        (this.interactiveElementList[i] as HTMLElement) ===
        (this.el.shadowRoot.activeElement || document.activeElement)
      ) {
        this.focusedElementIndex = i;
      }
    }
  };

  private getInteractiveElements = () => {
    this.interactiveElementList = Array.from(
      this.el.shadowRoot.querySelectorAll("ic-button")
    );

    const slottedInteractiveElements = Array.from(
      this.el.querySelectorAll(
        `a[href], button, input:not(.ic-input), textarea, select, details, [tabindex]:not([tabindex="-1"]), 
          ic-button, ic-checkbox, ic-select, ic-search-bar, ic-tab-group, ic-radio-group, 
          ic-back-to-top, ic-breadcrumb, ic-chip[dismissible="true"], ic-footer-link, ic-link, ic-navigation-button, 
          ic-navigation-item, ic-switch, ic-text-field, ic-accordion-group, ic-accordion`
      )
    );

    const messageArea = this.el.shadowRoot.querySelector(
      ".message-area"
    ) as HTMLElement;

    const isScrollable = (el: HTMLElement): boolean =>
      el.scrollHeight > el.clientHeight;

    // Check if the message area is scrollable and include it as an interactive element
    if (messageArea && isScrollable(messageArea)) {
      this.interactiveElementList.push(messageArea);
    }

    this.interactiveElementList = [
      ...this.interactiveElementList,
      ...(slottedInteractiveElements as HTMLElement[]),
    ];
  };

  // When trigger is controlled, focus should be set to the first interactive element on drawer expansion

  private getNextFocusEl = (focusedElementIndex: number) =>
    this.interactiveElementList[focusedElementIndex];

  private focusNextInteractiveElement = (shiftKey: boolean) => {
    this.getFocusedElementIndex();
    this.setFocusIndexBasedOnShiftKey(shiftKey);
    this.loopNextFocusIndexIfLastElement();

    let nextFocusEl = this.getNextFocusEl(this.focusedElementIndex);

    const isHidden =
      getComputedStyle(nextFocusEl).visibility === "hidden" ||
      (nextFocusEl.tagName === this.IC_ACCORDION_GROUP &&
        nextFocusEl.hasAttribute("single-expansion"));

    if (nextFocusEl.tagName === this.IC_TEXT_FIELD) {
      (nextFocusEl as HTMLIcTextFieldElement).setFocus();
    } else {
      if (isHidden) {
        this.setFocusIndexBasedOnShiftKey(shiftKey);
        this.loopNextFocusIndexIfLastElement();

        nextFocusEl = this.getNextFocusEl(this.focusedElementIndex);
      }
      if (nextFocusEl.tagName === this.IC_ACCORDION_GROUP) {
        (nextFocusEl as HTMLIcAccordionGroupElement).setFocus();
      } else if (nextFocusEl.tagName === this.IC_ACCORDION) {
        (nextFocusEl as HTMLIcAccordionElement).setFocus();
      } else {
        (nextFocusEl as HTMLElement).focus();
      }
    }
  };

  private loopNextFocusIndexIfLastElement() {
    if (this.focusedElementIndex > this.interactiveElementList.length - 1)
      this.focusedElementIndex = 0;
    else if (this.focusedElementIndex < 0) {
      this.focusedElementIndex = this.interactiveElementList.length - 1;
    }
  }

  private setFocusIndexBasedOnShiftKey(shiftKey: boolean) {
    if (shiftKey) {
      this.focusedElementIndex -= 1;
    } else {
      this.focusedElementIndex += 1;
    }
  }

  private updateInteractiveElements = () => {
    if (this.expanded) {
      this.getInteractiveElements();
    }
  };

  private setDrawerExpanded = (): void => {
    this.expanded = !this.expanded;
    this.getInteractiveElements();
    if (this.expanded && this.interactiveElementList.length > 0) {
      console.log(this.interactiveElementList);
      if (this.interactiveElementList[0].tagName === "IC-BUTTON") {
        (this.interactiveElementList[0] as HTMLIcButtonElement).setFocus();
        console.log(
          (
            this.interactiveElementList[0] as HTMLIcButtonElement
          ).shadowRoot.querySelector("button")
        );
      } else {
        this.interactiveElementList[1].focus();
      }
    }

    this.icDrawerExpanded.emit({ expanded: this.expanded });
  };

  private onBackdropClick = (e: { stopPropagation: () => void }) => {
    if (this.closeOnBackdropClick) {
      this.setDrawerExpanded();
    }
    e.stopPropagation();
  };

  render() {
    const {
      chevronButtonAriaLabel,
      closeButtonAriaLabel,
      expanded,
      heading,
      message,
      position,
      showCloseButton,
      size,
      trigger,
    } = this;

    const chevronButton = (
      <ic-button
        class="chevron-btn"
        size="small"
        variant="icon"
        innerHTML={chevronIcon}
        aria-label={`${
          isPropDefined(chevronButtonAriaLabel)
            ? chevronButtonAriaLabel
            : expanded
            ? this.DEFAULT_CLOSE_BUTTON_ARIA_LABEL
            : "Open drawer"
        }`}
        onClick={this.setDrawerExpanded}
      ></ic-button>
    );

    return (
      <Host
        class={{
          ["ic-drawer"]: true,
          [`ic-${position}-position`]: true,
          ["expanded"]: expanded,
          ["collapsed"]: !expanded,
        }}
        aria-expanded={expanded}
      >
        {!expanded && trigger === "arrow" && (
          <div class="collapsed-drawer">{chevronButton}</div>
        )}
        {expanded && (
          <div
            class={{ ["ic-drawer-overlay"]: true }}
            onClick={this.onBackdropClick}
          ></div>
        )}
        <div
          class={{ ["ic-drawer-panel"]: true, [`${size}`]: true }}
          {...(expanded && { role: "dialog" })}
          {...(!isSlotUsed(this.el, heading)
            ? {
                "aria-labelledby":
                  this.ariaLabel !== "" ? this.ariaLabel : "ic-drawer-heading",
              }
            : {})}
          {...(isSlotUsed(this.el, heading)
            ? { "aria-label": this.ariaLabel }
            : {})}
        >
          {expanded && (
            <ic-section-container
              aligned="full-width"
              fullHeight
              class="inner-drawer-panel"
            >
              <a id="drawer-content"></a>
              <div class="drawer-header">
                <div
                  class={{
                    ["heading-area"]: true,
                    ["no-arrow"]: trigger !== "arrow",
                  }}
                >
                  {trigger === "arrow" && chevronButton}
                  {isSlotUsed(this.el, "heading-adornment") && (
                    <slot name="heading-adornment" />
                  )}
                  {isSlotUsed(this.el, "heading") ? (
                    <slot name="heading" />
                  ) : (
                    <ic-typography
                      class="drawer-heading"
                      id="ic-drawer-heading"
                      variant="h4"
                    >
                      {heading}
                    </ic-typography>
                  )}
                </div>
                {showCloseButton && trigger === "controlled" && (
                  <ic-button
                    className="close-btn"
                    variant="icon"
                    appearance="dark"
                    onClick={this.setDrawerExpanded}
                    innerHTML={closeIcon}
                    aria-label={
                      isPropDefined(closeButtonAriaLabel)
                        ? closeButtonAriaLabel
                        : this.DEFAULT_CLOSE_BUTTON_ARIA_LABEL
                    }
                  ></ic-button>
                )}
              </div>
              <ic-section-container
                aligned="full-width"
                fullHeight
                class="main-content"
              >
                {(isSlotUsed(this.el, "message") || !!message) && (
                  <div
                    class={{
                      ["message-area"]: true,
                      ["message-area-padding"]: isSlotUsed(this.el, "message"),
                    }}
                    tabindex={0}
                  >
                    {isSlotUsed(this.el, "message") ? (
                      <slot name="message" />
                    ) : (
                      <ic-typography
                        class={{
                          ["body-text"]: true,
                          ["message-area-padding"]: !isSlotUsed(
                            this.el,
                            "message"
                          ),
                        }}
                      >
                        <p>{message}</p>
                      </ic-typography>
                    )}
                  </div>
                )}
                {isSlotUsed(this.el, "actions") && (
                  <div
                    class={{
                      ["action-area"]: true,
                      ["main-content-overflow"]: true,
                    }}
                  >
                    <slot name="actions" />
                  </div>
                )}
              </ic-section-container>
            </ic-section-container>
          )}
        </div>
      </Host>
    );
  }
}
