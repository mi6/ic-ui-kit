import { Component, Host, h, Element, Prop, State } from "@stencil/core";
import {
  checkResizeObserver,
  DEVICE_SIZES,
  getCurrentDeviceSize,
} from "../../utils/helpers";

@Component({
  tag: "ic-breadcrumb-group",
  styleUrl: "ic-breadcrumb-group.css",
  shadow: true,
})

// Added ResizeObserver to find out width of breadcrumbs and parents. Use side navigation long title for ref.
export class BreadcrumbGroup {
  private ADD_CLASS_DELAY = 50;
  private breadcrumb: HTMLIcBreadcrumbElement;
  private breadcrumbs: HTMLIcBreadcrumbElement[];
  private collapsedBreadcrumbEl: HTMLButtonElement;
  private collapsedBreadcrumbs: HTMLIcBreadcrumbElement[];
  private collapsedBreadcrumbWrapper: HTMLIcBreadcrumbElement;
  private IC_BREADCRUMB: string = "ic-breadcrumb";
  private resizeObserver: ResizeObserver = null;
  private SHOW_BACK_ICON: string = "show-back-icon";

  @Element() el: HTMLIcBreadcrumbGroupElement;

  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() expandedBreadcrumbs: boolean = false;

  /**
   * If `true`, display only a single breadcrumb for the parent page with a back icon.
   */
  @Prop() backBreadcrumbOnly: boolean = false;
  /**
   * If `true`, all breadcrumbs between the first and last breadcrumb will be collapsed.
   */
  @Prop() collapsed: boolean = false;

  componentWillLoad(): void {
    const allBreadcrumbs = Array.from(
      this.el.querySelectorAll(this.IC_BREADCRUMB)
    );

    if (this.backBreadcrumbOnly) {
      this.setBackBreadcrumb();
    } else {
      checkResizeObserver(this.runResizeObserver);
    }

    if (this.collapsed) {
      this.collapsedBreadcrumbWrapper = this.renderCollapsedBreadcrumb();

      if (allBreadcrumbs.length > 2) {
        if (getCurrentDeviceSize() === DEVICE_SIZES.S) {
          this.setLastParentCollapsedBackBreadcrumb();
        } else {
          this.setCollapsed();
        }
      }
    }
  }

  disconnectedCallback(): void {
    this.breadcrumb.removeEventListener(
      "transitionend",
      this.transitionendHandler
    );
    this.collapsedBreadcrumbEl.removeEventListener("click", this.clickHandler);
  }

  private setBackBreadcrumb = () => {
    if (this.backBreadcrumbOnly) {
      this.setBackBreadcrumbAttr();
    }
  };

  private setBackBreadcrumbAttr = () => {
    if (this.lastParentBreadcrumb) {
      this.lastParentBreadcrumb.classList.add("show");
      this.lastParentBreadcrumb.setAttribute(this.SHOW_BACK_ICON, "true");
    }
  };

  private getLastParentBreadcrumb = (): HTMLIcBreadcrumbElement | null => {
    const allBreadcrumbs: HTMLIcBreadcrumbElement[] = Array.from(
      this.el.querySelectorAll(this.IC_BREADCRUMB)
    );

    if (allBreadcrumbs.length === 1) {
      return null;
    }

    this.breadcrumbs = allBreadcrumbs.filter(
      (breadcrumb) => !breadcrumb.getAttribute("current")
    );
    this.breadcrumb = this.breadcrumbs[this.breadcrumbs.length - 1];

    return this.breadcrumb;
  };

  private lastParentBreadcrumb = this.getLastParentBreadcrumb();

  private setDefaultBreadcrumbs = () => {
    const allBreadcrumbs = Array.from(
      this.el.querySelectorAll(this.IC_BREADCRUMB)
    );
    allBreadcrumbs.forEach((breadcrumb) => {
      breadcrumb.setAttribute(this.SHOW_BACK_ICON, "false");
    });
  };

  private setCollapsed = () => {
    if (this.collapsed) {
      const allBreadcrumbs: HTMLIcBreadcrumbElement[] = Array.from(
        this.el.querySelectorAll(this.IC_BREADCRUMB)
      );
      this.collapsedBreadcrumbs = allBreadcrumbs
        .splice(1, allBreadcrumbs.length - 2)
        .filter(
          (breadcrumb) =>
            !breadcrumb.classList.contains("collapsed-breadcrumb-wrapper")
        );

      this.collapsedBreadcrumbs.forEach((breadcrumb) =>
        breadcrumb.classList.add("hide")
      );

      const firstBreadcrumb = allBreadcrumbs[0];

      if (firstBreadcrumb) {
        firstBreadcrumb.insertAdjacentElement(
          "afterend",
          this.collapsedBreadcrumbWrapper
        );
      }
    }
  };

  private clickHandler = () => {
    this.handleHiddenCollapsedBreadcrumbs(this.collapsedBreadcrumbWrapper);
  };

  private renderCollapsedBreadcrumb = () => {
    this.collapsedBreadcrumbWrapper = document.createElement("ic-breadcrumb");
    this.collapsedBreadcrumbWrapper.classList.add(
      "collapsed-breadcrumb-wrapper"
    );
    this.collapsedBreadcrumbEl = document.createElement("button");

    const ariaLabel = document.createElement("span");
    ariaLabel.id = "collapsed-button-label";
    ariaLabel.innerText = "Collapsed breadcrumbs";
    ariaLabel.className = "hide";
    this.collapsedBreadcrumbEl.setAttribute(
      "aria-labelledby",
      "collapsed-button-label"
    );

    const ariaDescribed = document.createElement("span");
    ariaDescribed.id = "collapsed-button-described";
    ariaDescribed.innerText = "Select to view collapsed breadcrumbs";
    ariaDescribed.className = "hide";
    this.collapsedBreadcrumbEl.setAttribute(
      "aria-describedby",
      "collapsed-button-described"
    );

    this.collapsedBreadcrumbEl.id = "collapsed-ellipsis";
    this.collapsedBreadcrumbEl.innerText = "...";
    this.collapsedBreadcrumbEl.classList.add("collapsed-breadcrumb");
    this.collapsedBreadcrumbEl.addEventListener("click", this.clickHandler);

    this.collapsedBreadcrumbWrapper.append(ariaDescribed);
    this.collapsedBreadcrumbWrapper.append(ariaLabel);
    this.collapsedBreadcrumbWrapper.append(this.collapsedBreadcrumbEl);

    return this.collapsedBreadcrumbWrapper;
  };

  private handleHiddenCollapsedBreadcrumbs = (
    collapsedBreadcrumbWrapper: HTMLIcBreadcrumbElement
  ) => {
    collapsedBreadcrumbWrapper.remove();
    this.collapsedBreadcrumbs.forEach((breadcrumb) => {
      breadcrumb.classList.add("visuallyhidden");
      breadcrumb.classList.remove("hide");
      setTimeout(() => {
        breadcrumb.classList.add("fade");
      }, this.ADD_CLASS_DELAY);

      this.removeVisuallyHiddenClass(breadcrumb);
    });
    this.expandedBreadcrumbs = true;
  };

  private transitionendHandler = (event: TransitionEvent) => {
    if (event.propertyName === "opacity") {
      (event.target as HTMLElement).classList.remove("visuallyhidden");
    }
  };

  private removeVisuallyHiddenClass = (breadcrumb: HTMLIcBreadcrumbElement) => {
    breadcrumb.addEventListener("transitionend", this.transitionendHandler);
  };

  private setLastParentCollapsedBackBreadcrumb = () => {
    this.setBackBreadcrumbAttr();
    this.lastParentBreadcrumb.classList.remove("hide");
  };

  private revertLastParentCollapsedBreadcrumb = () => {
    this.lastParentBreadcrumb.setAttribute(this.SHOW_BACK_ICON, "false");
  };

  private resizeObserverCallback = (currSize: number) => {
    if (currSize !== this.deviceSize) {
      this.deviceSize = currSize;

      if (this.deviceSize <= DEVICE_SIZES.S) {
        this.el.setAttribute("back-breadcrumb-only", "true");
        if (this.collapsed) {
          this.setLastParentCollapsedBackBreadcrumb();
        } else {
          this.setBackBreadcrumb();
        }
      } else {
        this.el.setAttribute("back-breadcrumb-only", "false");
        if (this.collapsed && this.breadcrumbs && this.breadcrumbs.length > 2) {
          this.revertLastParentCollapsedBreadcrumb();
          if (this.expandedBreadcrumbs) {
            this.setDefaultBreadcrumbs();
          } else {
            this.setCollapsed();
          }
        } else {
          this.setDefaultBreadcrumbs();
        }
      }
    }
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      const currSize = getCurrentDeviceSize();
      this.resizeObserverCallback(currSize);
    });

    this.resizeObserver.observe(this.el);
  };

  render() {
    return (
      <Host
        class={{
          back: this.backBreadcrumbOnly,
          collapsed: this.collapsed,
        }}
      >
        <nav aria-label="breadcrumbs">
          <ol>
            <slot />
          </ol>
        </nav>
      </Host>
    );
  }
}
