import {
  Component,
  Element,
  h,
  Host,
  State,
  Method,
  Prop,
} from "@stencil/core";

import LeftArrow from "./assets/left-arrow.svg";
import RightArrow from "./assets/right-arrow.svg";
import { getSlotElements } from "../../utils/helpers";

import { checkResizeObserver, elementOverflowsX } from "../../utils/helpers";
import { IcThemeForeground, IcThemeForegroundEnum } from "../../utils/types";

const SCROLL_DELAY_MS = 200;

@Component({
  tag: "ic-horizontal-scroll",
  styleUrl: "./ic-horizontal-scroll.css",
  shadow: true,
})
export class HorizontalScroll {
  @Element() el: HTMLIcHorizontalScrollElement;

  /**
   * The appearance of the horizontal scroll, e.g. dark, light or the default.
   */
  @Prop() appearance?: IcThemeForeground = "default";

  @State() firstItemVisible: boolean = true;
  @State() lastItemVisible: boolean = false;
  @State() itemOverflow: boolean = false;

  private itemOffsets: number[];
  private itemsContainerEl: HTMLElement;
  private items: HTMLElement[];
  private resizeObserver: ResizeObserver;
  private isScrolling: number;
  private scrollDelay: number;
  private buttonStateSet: boolean = false;

  /**
   * @internal if side scrolling enabled, scrolls the specified item into view.
   */
  @Method()
  async scrollItemIntoView(itemPosition: number): Promise<void> {
    this.firstItemVisible = itemPosition <= 0;
    const newScrollPos =
      itemPosition <= 0 ? 0 : this.itemOffsets[itemPosition - 1];
    this.lastItemVisible =
      this.itemsContainerEl.offsetWidth + newScrollPos >=
      this.itemsContainerEl.scrollWidth;
    this.buttonStateSet = true;
    this.itemsContainerEl.scrollLeft = newScrollPos;
  }

  itemFocusHandler(itemPosition: number): void {
    if (this.itemOverflow) {
      this.scrollItemIntoView(itemPosition);
    }
  }

  private resizeObserverCallback = () => {
    if (this.el.clientWidth >= this.itemsContainerEl.scrollWidth) {
      this.itemOverflow = false;
    } else {
      this.itemOverflow = elementOverflowsX(this.itemsContainerEl);
    }

    if (this.itemOverflow) {
      this.lastItemVisible =
        this.itemsContainerEl.offsetWidth + this.itemsContainerEl.scrollLeft >=
        this.itemsContainerEl.scrollWidth;
    }
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeObserverCallback();
    });
    this.resizeObserver.observe(this.itemsContainerEl);
  };

  private scrollLeft = () => {
    this.scrollItemIntoView(this.getCurrentLeftItem() - 1);
  };

  private scrollRight = () => {
    this.scrollItemIntoView(this.getCurrentLeftItem() + 1);
  };

  private longScrollRight = () => {
    this.scrollRight();
    this.scrollDelay = window.setTimeout(this.longScrollRight, SCROLL_DELAY_MS);
  };

  private longScrollLeft = () => {
    this.scrollLeft();
    this.scrollDelay = window.setTimeout(this.longScrollLeft, SCROLL_DELAY_MS);
  };

  private leftArrowMouseDownHandler = (e: MouseEvent) => {
    e.preventDefault();
    this.scrollDelay = window.setTimeout(this.longScrollLeft, SCROLL_DELAY_MS);
  };

  private rightArrowMouseDownHandler = (e: MouseEvent) => {
    e.preventDefault();
    this.scrollDelay = window.setTimeout(this.longScrollRight, SCROLL_DELAY_MS);
  };

  private arrowMouseUpHandler = () => {
    window.clearTimeout(this.scrollDelay);
  };

  private getCurrentLeftItem = (): number => {
    const index = this.itemOffsets.findIndex(
      (el) => el > Math.round(this.itemsContainerEl.scrollLeft)
    );
    return index < 0 ? 0 : index;
  };

  private scrollHandler = () => {
    window.clearTimeout(this.isScrolling);
    // Set a timeout to run after scrolling ends
    this.isScrolling = window.setTimeout(this.scrollStopped, 50);
  };

  private scrollStopped = () => {
    // If scrollItemIntoView has been called, the button states will already be set
    // Can't just handle it here as it causes strange jumping behaviour in positioning
    const scrollLeft = Math.round(this.itemsContainerEl.scrollLeft);
    if (this.buttonStateSet === false) {
      this.firstItemVisible = scrollLeft === 0;
      this.lastItemVisible =
        this.itemsContainerEl.offsetWidth + scrollLeft >=
        this.itemsContainerEl.scrollWidth;
    }
    this.buttonStateSet = false;
  };

  componentWillLoad(): void {
    this.itemsContainerEl = this.el.children[0] as HTMLElement;
    this.itemsContainerEl.addEventListener("scroll", this.scrollHandler);

    this.items = (getSlotElements(this.itemsContainerEl) ||
      Array.from(this.itemsContainerEl.children)) as HTMLElement[];
    this.items.forEach((item) => {
      if (item.addEventListener) {
        item.addEventListener("focus", () =>
          this.itemFocusHandler(Array.from(this.items).indexOf(item))
        );
      }
    });
  }

  componentDidLoad(): void {
    let runningTotal = 0;
    this.itemOffsets = this.items.map((item) => {
      runningTotal += item.offsetWidth;
      return runningTotal;
    });

    checkResizeObserver(this.runResizeObserver);

    // Add event listener to scroll containers as mouse events are not fired on disabled elements (ic-button's <button>)
    // 'mouseleave' needed in case the user moves their mouse while holding the arrow buttons
    // - 'mouseup' otherwise not detected and scrolling not stopped
    const scrollArrows = Array.from(
      this.el.shadowRoot.querySelectorAll("div")
    ) as HTMLElement[];
    ["mouseup", "mouseleave"].forEach((event) => {
      scrollArrows.forEach((arrow) =>
        arrow.addEventListener(event, this.arrowMouseUpHandler)
      );
    });
  }

  disconnectedCallback(): void {
    if (this.resizeObserver !== undefined) {
      this.resizeObserver.disconnect();
    }
  }

  render() {
    const { appearance, firstItemVisible, lastItemVisible, itemOverflow } =
      this;

    return (
      <Host
        class={{
          ["visible"]: itemOverflow,
          ["dark"]: this.appearance === IcThemeForegroundEnum.Dark,
          ["light"]: this.appearance === IcThemeForegroundEnum.Light,
        }}
      >
        <div
          aria-hidden="true"
          class={{
            ["scroll-container-left"]: true,
            ["hidden"]: !itemOverflow,
            ["disabled"]: firstItemVisible,
          }}
        >
          <ic-button
            class="scroll-arrow"
            variant="icon"
            aria-label="Scroll left"
            appearance={appearance}
            innerHTML={LeftArrow}
            disabled={firstItemVisible}
            tabindex="-1"
            onClick={this.scrollLeft}
            onMouseDown={this.leftArrowMouseDownHandler}
          ></ic-button>
          <span class="scroll-splitter-left"></span>
        </div>
        <slot></slot>
        <div
          aria-hidden="true"
          class={{
            ["scroll-container-right"]: true,
            ["hidden"]: !itemOverflow,
            ["disabled"]: lastItemVisible,
          }}
        >
          <span class="scroll-splitter-right"></span>
          <ic-button
            class="scroll-arrow"
            variant="icon"
            aria-label="Scroll right"
            appearance={appearance}
            innerHTML={RightArrow}
            disabled={lastItemVisible}
            tabindex="-1"
            onClick={this.scrollRight}
            onMouseDown={this.rightArrowMouseDownHandler}
          ></ic-button>
        </div>
      </Host>
    );
  }
}
