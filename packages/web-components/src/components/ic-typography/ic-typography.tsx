import { Component, Prop, h, Element, Host, State, Watch } from "@stencil/core";

import { IcTypographyVariants } from "../../utils/types";
import { checkResizeObserver } from "../../utils/helpers";

@Component({
  styleUrl: "ic-typography.css",
  tag: "ic-typography",
  shadow: true,
})
export class Typography {
  @Element() el: HTMLIcTypographyElement;

  /**
   * The ICDS typography style to use.
   */
  @Prop() variant?: IcTypographyVariants = "body";

  /**
   * If `true`, appropriate top and bottom margins will be applied to the typography.
   */
  @Prop() applyVerticalMargins?: boolean = false;

  /**
   * The number of lines to display before truncating the text, only used for the 'body' variant.
   */
  @Prop() maxLines?: number;

  @State() expanded: boolean = false;
  @State() truncated: boolean = false;
  @State() truncButtonFocussed: boolean = false;

  private truncWrapperEl: Element;
  private resizeObserver: ResizeObserver = null;

  private resizeInterval: number;
  private lastWidth: number = 0;
  private lastMarkerTop: number = 0;
  private truncatedHeight: number = 0;
  private marker: HTMLElement;
  private focusBtnFromKeyboard: boolean = true;

  @Watch("expanded")
  watchExpandedHandler(): void {
    this.el.setAttribute(
      "style",
      `--truncation-max-lines: ${this.expanded ? "initial" : this.maxLines}`
    );
  }

  private toggleExpanded = () => {
    this.expanded = !this.expanded;
  };

  private checkMaxLines = (height: number) => {
    //24 is the height of a single line
    const numLines = Math.floor(height / 24);
    if (numLines > this.maxLines) {
      this.el.setAttribute("style", `--truncation-max-lines: ${this.maxLines}`);
      this.truncatedHeight = this.el.clientHeight;
      this.truncated = true;
    }
  };

  private checkMarkerPosition = (elTop: number, markerTop: number) => {
    if (markerTop - elTop < this.truncatedHeight) {
      this.truncated = false;
      this.expanded = false;
    } else {
      this.truncated = true;
    }
  };

  private getElementTop = (el: HTMLElement) => {
    return el.getClientRects ? el.getClientRects()[0].top : 0;
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      clearTimeout(this.resizeInterval);
      this.resizeInterval = window.setTimeout(this.resizeObserverCallback, 50);
    });
    this.resizeObserver.observe(this.truncWrapperEl);
  };

  private resizeObserverCallback = () => {
    if (this.lastWidth === this.el.clientWidth) {
      return;
    }

    if (this.truncatedHeight === 0) {
      this.checkMaxLines(this.el.clientHeight);
      return;
    }

    const markerTop = this.getElementTop(this.marker);
    if (markerTop === this.lastMarkerTop) {
      return;
    }

    this.checkMarkerPosition(this.getElementTop(this.el), markerTop);
    this.lastMarkerTop = markerTop;
    this.lastWidth = this.el.clientWidth;
  };

  private truncButtonFocus = (): void => {
    if (this.focusBtnFromKeyboard) {
      this.truncButtonFocussed = true;
    }
  };

  private truncButtonBlur = (): void => {
    this.focusBtnFromKeyboard = true;
    this.truncButtonFocussed = false;
  };

  private truncButtonFocusFromMouse = (): void => {
    this.focusBtnFromKeyboard = false;
  };

  componentDidLoad(): void {
    if (this.variant === "body" && this.maxLines > 0) {
      const marker = document.createElement("span");
      marker.style.visibility = "hidden";
      this.el.appendChild(marker);
      this.marker = marker;
      this.lastWidth = this.el.clientWidth;
      this.checkMaxLines(this.el.clientHeight);
      checkResizeObserver(this.runResizeObserver);
    }
  }

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }
  }

  render() {
    const { variant, applyVerticalMargins, maxLines, truncated, expanded } =
      this;

    return (
      <Host
        class={{
          [`ic-typography-${variant}`]: true,
          [`ic-typography-vertical-margins-${variant}`]: applyVerticalMargins,
        }}
      >
        {variant === "body" && maxLines > 0 ? (
          <div class="trunc-wrapper" ref={(el) => (this.truncWrapperEl = el)}>
            <slot />
          </div>
        ) : (
          <slot />
        )}
        {variant === "body" && maxLines > 0 && truncated && (
          <button
            class={{ "trunc-btn": true, focus: this.truncButtonFocussed }}
            onFocus={this.truncButtonFocus}
            onBlur={this.truncButtonBlur}
            onMouseDown={this.truncButtonFocusFromMouse}
            onClick={this.toggleExpanded}
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}
      </Host>
    );
  }
}
