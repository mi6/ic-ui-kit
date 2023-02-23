import { Component, Host, h, Prop, Element, State } from "@stencil/core";

import { IcAlignment } from "../../utils/types";

import {
  isSlotUsed,
  DEVICE_SIZES,
  getCurrentDeviceSize,
  checkResizeObserver,
} from "../../utils/helpers";

/**
 * @slot breadcrumbs - Content will be rendered in the breadcrumb area, above the title and action areas.
 * @slot heading - Content will be rendered in the title area, in place of the heading.
 * @slot subheading - Content will be rendered in the title area, in place of the subheading.
 * @slot heading-adornment - Content will be rendered in the title area, adjacent to the heading.
 * @slot actions - Content will be rendered in the action area, adjacent to the title area.
 * @slot input - Content will be rendered in the input area, below the title area and adjacent to the action area.
 * @slot stepper - Content will be rendered in the navigation area, below the title and action areas. Note: stepper slot cannot be used when the tabs slot is being used.
 * @slot tabs - Content will be rendered in the navigation area, below the title and action areas. Note: the stepper slot cannot be used when the tabs slot is being used.
 */

@Component({
  tag: "ic-page-header",
  styleUrl: "ic-page-header.css",
  shadow: true,
})
export class PageHeader {
  @Element() el: HTMLIcPageHeaderElement;
  /**
   * The title to render on the page header.
   */
  @Prop() heading?: string;
  /**
   * The subtitle to render on the page header.
   */
  @Prop() subheading?: string;
  /**
   * The alignment of the page header.
   */
  @Prop() aligned?: IcAlignment = "left";
  /**
   * If `true`, the small styling will be applied to the page header.
   */
  @Prop() small?: boolean = false;
  /**
   * If `true`, a border will be displayed along the bottom of the page header.
   */
  @Prop() border?: boolean = true;
  /**
   * If `true`, the page header will be sticky at all breakpoints.
   */
  @Prop() sticky?: boolean = false;
  /**
   *  If `true`, the page header will only be sticky for viewport widths of 992px and above.
   */
  @Prop() stickyDesktopOnly?: boolean = false;
  /**
   * If `true`, the reading pattern and tab order will change in the action area for viewport widths of above 576px and when actions have not wrapped.
   */
  @Prop() reverseOrder?: boolean = false;

  @State() deviceSize: number = DEVICE_SIZES.XL;

  @State() areButtonsReversed: boolean = false;

  @State() actionContent: Node[];

  private resizeObserver: ResizeObserver = null;

  private resizeObserverCallback = () => {
    if (this.reverseOrder && isSlotUsed(this.el, "actions")) {
      this.applyReverseOrder();
    }
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeObserverCallback();
    });
    this.resizeObserver.observe(this.el);
  };

  private applyReverseOrder = (): void => {
    const currSize = getCurrentDeviceSize();
    if (currSize !== this.deviceSize) {
      this.deviceSize = currSize;
    }

    const actionArea = this.el.shadowRoot.querySelector(
      "div.action-area"
    ) as HTMLElement;
    const actionHeights: number[] = [];

    /* For each button in the actions slot, check the height of the button and push this number into the actionHeights array and then find the greatest number in this array (i.e. find the height of the tallest button) */
    for (let i = 0; i < this.actionContent.length; i++) {
      const action = this.actionContent[i] as HTMLElement;
      let actionHeight = action.offsetHeight;
      if (actionHeight === undefined) {
        actionHeight = 0;
      }
      actionHeights.push(actionHeight);
    }

    const max = Math.max(...actionHeights);

    /* The smallest breakpoint displays buttons in the same order the user has slotted them in. When the device size is larger than the small breakpoiint then the order of the button reverses due to best practice for reading patterns. If the device size is larger than the small breakpoint and the buttons have started to wrap then they follow the order the user has slotted them in. This logic is programmed based on the height of the action-area div that wraps the actions slot. If the height of the action-area div is taller than the height of the tallest button, then it is assumed that the taller height is caused by the buttons wrapping */
    let actionAreaHeight = actionArea.offsetHeight;

    if (actionAreaHeight === undefined) {
      actionAreaHeight = 0;
    }

    if (
      this.deviceSize > DEVICE_SIZES.S &&
      actionAreaHeight <= max &&
      !this.areButtonsReversed
    ) {
      this.actionContent = this.actionContent.reverse();
      this.actionContent.forEach((btn: string | Node) => {
        this.el.append(btn);
      });
      this.areButtonsReversed = !this.areButtonsReversed;
    } else if (
      ((this.deviceSize > DEVICE_SIZES.S && actionAreaHeight > max) ||
        this.deviceSize <= DEVICE_SIZES.S) &&
      this.areButtonsReversed
    ) {
      this.actionContent = this.actionContent.reverse();
      this.actionContent.forEach((btn: string | Node) => {
        this.el.append(btn);
      });
      this.areButtonsReversed = !this.areButtonsReversed;
    }
  };

  componentWillLoad(): void {
    this.actionContent = Array.from(
      this.el.querySelectorAll(`[slot="actions"]`)
    );
  }

  componentDidLoad(): void {
    checkResizeObserver(this.runResizeObserver);
  }

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }
  }

  render() {
    const {
      small,
      border,
      heading,
      subheading,
      aligned,
      sticky,
      stickyDesktopOnly,
    } = this;

    return (
      <Host
        class={{
          ["sticky"]: sticky,
          ["sticky-desktop"]: !sticky && stickyDesktopOnly,
        }}
      >
        <header
          class={{
            ["border-bottom"]: border,
            ["tabs"]: isSlotUsed(this.el, "tabs"),
          }}
        >
          <ic-section-container
            aligned={aligned}
            fullHeight={isSlotUsed(this.el, "tabs")}
          >
            {isSlotUsed(this.el, "breadcrumbs") && (
              <div class="breadcrumb-area">
                <slot name="breadcrumbs" />
              </div>
            )}
            <div class="main-content">
              <div class="title-area">
                <div class="header-content">
                  <slot name="heading">
                    <ic-typography
                      variant={small ? "h4" : "h2"}
                      class="heading"
                    >
                      <h2>{heading}</h2>
                    </ic-typography>
                  </slot>
                  <slot name="heading-adornment" />
                </div>
                <div>
                  <slot name="subheading">
                    {subheading && (
                      <ic-typography
                        variant="body"
                        class={{ ["subheading"]: true, ["small"]: small }}
                      >
                        {subheading}
                      </ic-typography>
                    )}
                  </slot>
                </div>
              </div>
              {isSlotUsed(this.el, "actions") && (
                <div class="action-area">
                  <slot name="actions" />
                </div>
              )}
              {isSlotUsed(this.el, "input") && (
                <div class="input-area">
                  <slot name="input" />
                </div>
              )}
            </div>

            {(isSlotUsed(this.el, "stepper") ||
              isSlotUsed(this.el, "tabs")) && (
              <div class="navigation-area">
                {isSlotUsed(this.el, "stepper") &&
                  !isSlotUsed(this.el, "tabs") && <slot name="stepper" />}
                {isSlotUsed(this.el, "tabs") && (
                  <nav aria-label="navigation-landmark-page-header">
                    <ic-horizontal-scroll>
                      <ul class="tabs-slot">
                        <slot name="tabs" />
                      </ul>
                    </ic-horizontal-scroll>
                  </nav>
                )}
              </div>
            )}
          </ic-section-container>
        </header>
      </Host>
    );
  }
}
