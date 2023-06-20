import { Component, h, Element, Prop, State, Watch } from "@stencil/core";
import ArrowUpward from "./assets/ArrowUpward.svg";
import {
  onComponentPropUndefinedChange,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";

const backToTopLabel = "Back to top";

@Component({
  tag: "ic-back-to-top",
  styleUrl: "ic-back-to-top.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class BackToTop {
  private isTargetElNull: boolean;
  private targetEl: Element;
  private topObserver: IntersectionObserver = null;

  @Element() el: HTMLIcBackToTopElement;

  @State() bannerOffset: boolean = false;
  @State() footerVisible: boolean = false;
  @State() targetElVisible: boolean = true;

  /**
   * The ID of the element to jump back to when the link is clicked.
   */
  @Prop() target!: string;

  @Watch("target")
  watchPropHandler(newValue: string, oldValue: string): void {
    //added for gatsby rehydration issue where prop is initially undefined but then changes to actual value
    onComponentPropUndefinedChange(oldValue, newValue, () => {
      this.createTopObserver(newValue);
    });
  }

  componentWillLoad(): void {
    this.createTopObserver(this.target);
    this.checkForClassificationBanner();

    //observer for when footer scrolls into view
    let footers = document.querySelectorAll(
      "ic-footer"
    ) as NodeListOf<HTMLElement>;
    if (footers.length === 0) {
      footers = document.querySelectorAll("footer");
    }

    if (footers.length) {
      const footerEl = footers[footers.length - 1];
      const threshold = this.bannerOffset ? 0.15 : 0;
      const footerObserver = new IntersectionObserver(
        this.footerObserverCallback,
        { threshold: [threshold] }
      );
      footerObserver.observe(footerEl);
    }
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.target, propName: "target" }],
      "Back to Top"
    );
  }

  private setTargetElVisible = (visible: boolean) => {
    this.targetElVisible = visible;
  };

  private setFooterVisible = (visible: boolean) => {
    this.checkForClassificationBanner();
    if (typeof window !== "undefined" && window.scrollY === 0) {
      this.footerVisible = false;
    } else {
      this.footerVisible = visible;
    }
  };

  private targetElObserverCallback = (entries: IntersectionObserverEntry[]) => {
    this.setTargetElVisible(entries[0].isIntersecting);
  };

  private footerObserverCallback = (entries: IntersectionObserverEntry[]) => {
    this.setFooterVisible(entries[0].isIntersecting);
  };

  private findTargetEl = (target: string): Element => {
    let targetElement: Element = null;
    if (target === null || target === undefined) {
      console.log(
        "Error: No target ID specified for back to top component - defaulting to top of page"
      );
    } else {
      targetElement = document.querySelector(
        target.indexOf("#") === 0 ? target : "#" + target
      );
      if (targetElement === null) {
        console.log(
          `Error: Back to top target element '${target}' not found - defaulting to top of page`
        );
      }
    }
    return targetElement;
  };

  private createTopObserver = (target: string) => {
    this.targetEl = this.findTargetEl(target);
    let objParent: HTMLElement;

    //remove old element & observer
    if (this.topObserver !== null) {
      const observedEl = document.querySelector("#ic-back-to-top-target");
      if (observedEl !== null) {
        this.topObserver.unobserve(observedEl);
        observedEl.remove();
      }
    }

    if (this.targetEl === null) {
      objParent = document.body;
      this.targetEl = objParent.firstElementChild;
      this.isTargetElNull = true;
    } else {
      objParent = this.targetEl.parentNode as HTMLElement;
      this.isTargetElNull = false;
    }

    //insert a new 0px height element before specified target that can be used to determine when page is scrolled
    const objBackToTopTargetEl = document.createElement("div");
    objBackToTopTargetEl.setAttribute("id", "ic-back-to-top-target");
    objParent.insertBefore(objBackToTopTargetEl, this.targetEl);

    // resize observer needs to factor in any top margin on the target el
    const marginTop = getComputedStyle(this.targetEl).marginTop;
    this.topObserver = new IntersectionObserver(this.targetElObserverCallback, {
      threshold: [0],
      rootMargin: `${marginTop} 0px 0px 0px`,
    });
    this.topObserver.observe(objBackToTopTargetEl);
  };

  private handleClick = () => {
    if (this.isTargetElNull) {
      window.scrollTo(0, 0);
    } else {
      this.targetEl.scrollIntoView();
    }
  };

  private checkForClassificationBanner = () => {
    //adjust position for classification banner at bottom
    const banners = document.querySelectorAll(
      "ic-classification-banner:not([inline='true'])"
    );
    this.bannerOffset = banners.length > 0;
  };

  render() {
    const { bannerOffset, targetElVisible, footerVisible } = this;
    return (
      <button
        class={{
          ["ic-back-to-top-link"]: true,
          ["offset-banner"]: bannerOffset,
          ["show"]: !targetElVisible,
          ["by-footer"]: footerVisible,
        }}
        aria-label={backToTopLabel}
        onClick={this.handleClick}
      >
        <span class="ic-back-to-top-icon" innerHTML={ArrowUpward} />

        <ic-typography variant="subtitle-small">
          <span>{backToTopLabel}</span>
        </ic-typography>
      </button>
    );
  }
}
