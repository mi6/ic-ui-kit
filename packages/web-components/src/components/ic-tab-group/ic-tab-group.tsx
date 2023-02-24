import {
  Component,
  Element,
  Host,
  Prop,
  h,
  State,
  Method,
  Listen,
} from "@stencil/core";

import LeftArrow from "./assets/left-arrow.svg";
import RightArrow from "./assets/right-arrow.svg";

import {
  checkResizeObserver,
  elementOverflowsX,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import { IcTabClickEventDetail } from "../ic-tab/ic-tab.types";
import {
  IcThemeForegroundNoDefault,
  IcThemeForegroundEnum,
} from "../../utils/types";

const SCROLL_DELAY_MS = 200;

@Component({
  tag: "ic-tab-group",
  styleUrl: "ic-tab-group.css",
  shadow: true,
})
export class TabGroup {
  @Element() host: HTMLIcTabGroupElement;

  /**
   * The unique context needed if using multiple tabs inside one another i.e. rendering another set of tabs inside a tab panel.
   */
  @Prop({ reflect: true }) contextId?: string = "default";

  /**
   * If `true`, the tabs and tab panels will be positioned separately.
   */
  @Prop({ reflect: true }) inline?: boolean = false;

  /**
   * The label to describe the purpose of the set of tabs to screen reader users.
   */
  @Prop() label!: string;

  /** @internal The appearance of the tab group, e.g dark, or light. */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";

  @State() firstTabVisible: boolean = true;
  @State() lastTabVisible: boolean = false;
  @State() tabOverflow: boolean = false;

  private tabs: HTMLIcTabElement[];
  private tabOffsets: number[];
  private tabGroupEl: HTMLElement;
  private splitterEl: HTMLElement;
  private resizeObserver: ResizeObserver;
  private isScrolling: number;
  private scrollDelay: number;
  private buttonStateSet: boolean = false;

  /**
   * @internal if tab side scrolling enabled, scrolls the specified tab into view.
   */
  @Method()
  async scrollTabIntoView(tabNumber: number): Promise<void> {
    this.firstTabVisible = tabNumber <= 0;
    const newScrollPos = tabNumber <= 0 ? 0 : this.tabOffsets[tabNumber - 1];
    this.lastTabVisible =
      this.tabGroupEl.offsetWidth + newScrollPos >= this.tabGroupEl.scrollWidth;
    this.buttonStateSet = true;
    this.tabGroupEl.scrollLeft = newScrollPos;
  }

  @Listen("tabFocus")
  tabFocusHandler(event: CustomEvent<IcTabClickEventDetail>): void {
    if (this.tabOverflow) {
      this.scrollTabIntoView(event.detail.position);
    }
  }

  private resizeObserverCallback = () => {
    if (this.tabGroupEl === null || this.tabGroupEl === undefined) {
      this.tabGroupEl = this.host.shadowRoot.querySelector(".tabs-container");
    }
    this.tabOverflow = elementOverflowsX(this.tabGroupEl);
    if (this.tabOverflow) {
      this.lastTabVisible =
        this.tabGroupEl.offsetWidth + this.tabGroupEl.scrollLeft >=
        this.tabGroupEl.scrollWidth;
    }
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeObserverCallback();
    });
    this.resizeObserver.observe(this.splitterEl);
  };

  private scrollLeft = () => {
    this.scrollTabIntoView(this.getCurrentLeftTab() - 1);
  };

  private scrollRight = () => {
    this.scrollTabIntoView(this.getCurrentLeftTab() + 1);
  };

  private longScrollRight = () => {
    this.scrollRight();
    this.scrollDelay = window.setTimeout(this.longScrollRight, SCROLL_DELAY_MS);
  };

  private longScrollLeft = () => {
    this.scrollLeft();
    this.scrollDelay = window.setTimeout(this.longScrollLeft, SCROLL_DELAY_MS);
  };

  private leftArrowMouseDownHandler = () => {
    this.scrollDelay = window.setTimeout(this.longScrollLeft, SCROLL_DELAY_MS);
  };

  private rightArrowMouseDownHandler = () => {
    this.scrollDelay = window.setTimeout(this.longScrollRight, SCROLL_DELAY_MS);
  };

  private arrowMouseUpHandler = () => {
    window.clearTimeout(this.scrollDelay);
  };

  private getCurrentLeftTab = (): number => {
    const index = this.tabOffsets.findIndex(
      (el) => el > this.tabGroupEl.scrollLeft
    );
    return index < 0 ? 0 : index;
  };

  private scrollHandler = () => {
    window.clearTimeout(this.isScrolling);
    // Set a timeout to run after scrolling ends
    this.isScrolling = window.setTimeout(this.scrollStopped, 50);
  };

  private scrollStopped = () => {
    // if scrollTabIntoView has been called, the button states will already be set
    // can't just handle it here as it causes strange jumping behaviour in positioning
    if (this.buttonStateSet === false) {
      this.firstTabVisible = this.tabGroupEl.scrollLeft === 0;
      this.lastTabVisible =
        this.tabGroupEl.offsetWidth + this.tabGroupEl.scrollLeft >=
        this.tabGroupEl.scrollWidth;
    }
    this.buttonStateSet = false;
  };

  componentDidLoad(): void {
    this.tabs = Array.from(this.host.querySelectorAll("ic-tab"));
    let runningTotal = 0;
    this.tabOffsets = this.tabs.map((tab) => {
      runningTotal += tab.offsetWidth;
      return runningTotal;
    });
    checkResizeObserver(this.runResizeObserver);

    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Tab Group"
    );
  }

  disconnectedCallback(): void {
    this.resizeObserver.disconnect();
  }

  render() {
    const {
      inline,
      appearance,
      label,
      firstTabVisible,
      lastTabVisible,
      tabOverflow,
    } = this;

    return (
      <Host
        role="tablist"
        aria-label={label}
        class={{
          ["light"]: appearance === IcThemeForegroundEnum.Light,
          ["ic-tab-group-not-inline"]: !inline,
        }}
      >
        <div class="ic-tab-group-container">
          {this.tabOverflow && (
            <div
              aria-hidden="true"
              id="scroll-container-left"
              class={{
                ["scroll-container"]: true,
                ["hidden"]: !tabOverflow,
                ["disabled"]: firstTabVisible,
              }}
            >
              <ic-tooltip
                placement="bottom-start"
                label="Scroll left"
                target="left-arrow"
              >
                <span
                  id="left-arrow"
                  class="scroll-arrow"
                  innerHTML={LeftArrow}
                  onClick={this.scrollLeft}
                  onMouseDown={this.leftArrowMouseDownHandler}
                  onMouseUp={this.arrowMouseUpHandler}
                ></span>
              </ic-tooltip>
              <span class="scroll-splitter-left"></span>
            </div>
          )}
          <div
            class="tabs-container"
            ref={(el) => (this.tabGroupEl = el)}
            onScroll={this.scrollHandler}
          >
            <slot></slot>
          </div>
          {this.tabOverflow && (
            <div
              aria-hidden="true"
              id="scroll-container-right"
              class={{
                ["scroll-container"]: true,
                ["hidden"]: !tabOverflow,
                ["disabled"]: lastTabVisible,
              }}
            >
              <span class="scroll-splitter-right"></span>
              <ic-tooltip
                placement="bottom-start"
                label="Scroll right"
                target="right-arrow"
              >
                <span
                  id="right-arrow"
                  class="scroll-arrow"
                  innerHTML={RightArrow}
                  onClick={this.scrollRight}
                  onMouseDown={this.rightArrowMouseDownHandler}
                  onMouseUp={this.arrowMouseUpHandler}
                ></span>
              </ic-tooltip>
            </div>
          )}
        </div>

        <div
          aria-hidden="true"
          class={{
            ["ic-tab-splitter"]: true,
            ["hidden"]: inline,
          }}
          ref={(el) => (this.splitterEl = el)}
        ></div>
      </Host>
    );
  }
}
