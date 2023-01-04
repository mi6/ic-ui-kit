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
  @Element() el: HTMLIcBreadcrumbGroupElement;
  /**
   * If `true`, display only a single breadcrumb for the parent page with a back icon.
   */
  @Prop() backBreadcrumbOnly: boolean = false;
  /**
   * If `true`, all breadcrumbs between the first and last breadcrumb will be collapsed.
   */
  @Prop() collapsed: boolean = false;

  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() expandedBreadcrumbs: boolean = false;

  private breadcrumbs: HTMLIcBreadcrumbElement[];
  private breadcrumb: HTMLIcBreadcrumbElement;
  private collapsedBreadcrumbs: HTMLIcBreadcrumbElement[];
  private ADD_CLASS_DELAY = 50;
  private collapsedBreadcrumbWrapper: HTMLIcBreadcrumbElement;

  private setBackBreadcrumb = () => {
    if (this.backBreadcrumbOnly) {
      this.setBackBreadcrumbAttr();
    }
  };

  private setBackBreadcrumbAttr = () => {
    const lastParentBreadcrumb = this.getLastParentBreadcrumb();
    if (lastParentBreadcrumb) {
      lastParentBreadcrumb.classList.add("show");
      lastParentBreadcrumb.setAttribute("show-back-icon", "true");
    }
  };

  private getLastParentBreadcrumb = (): HTMLIcBreadcrumbElement | null => {
    const allBreadcrumbs = Array.from(
      this.el.querySelectorAll("ic-breadcrumb")
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

  private setDefaultBreadcrumbs = () => {
    const allBreadcrumbs = Array.from(
      this.el.querySelectorAll("ic-breadcrumb")
    );
    allBreadcrumbs.forEach((breadcrumb) => {
      breadcrumb.setAttribute("show-back-icon", "false");
    });
  };

  private setCollapsed = () => {
    if (this.collapsed) {
      const allBreadcrumbs = Array.from(
        this.el.querySelectorAll("ic-breadcrumb")
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

  private renderCollapsedBreadcrumb = () => {
    this.collapsedBreadcrumbWrapper = document.createElement("ic-breadcrumb");
    this.collapsedBreadcrumbWrapper.classList.add(
      "collapsed-breadcrumb-wrapper"
    );
    const collapsedBreadcrumbEl = document.createElement("button");

    const ariaLabel = document.createElement("span");
    ariaLabel.id = "collapsed-button-label";
    ariaLabel.innerText = "Collapsed breadcrumbs";
    ariaLabel.className = "hide";
    collapsedBreadcrumbEl.setAttribute(
      "aria-labelledby",
      "collapsed-button-label"
    );

    const ariaDescribed = document.createElement("span");
    ariaDescribed.id = "collapsed-button-described";
    ariaDescribed.innerText = "Select to view collapsed breadcrumbs";
    ariaDescribed.className = "hide";
    collapsedBreadcrumbEl.setAttribute(
      "aria-describedby",
      "collapsed-button-described"
    );

    collapsedBreadcrumbEl.id = "collapsed-ellipsis";
    collapsedBreadcrumbEl.innerText = "...";
    collapsedBreadcrumbEl.classList.add("collapsed-breadcrumb");
    collapsedBreadcrumbEl.addEventListener("click", () => {
      this.handleHiddenCollapsedBreadcrumbs(this.collapsedBreadcrumbWrapper);
    });

    this.collapsedBreadcrumbWrapper.append(ariaDescribed);
    this.collapsedBreadcrumbWrapper.append(ariaLabel);
    this.collapsedBreadcrumbWrapper.append(collapsedBreadcrumbEl);

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

  private removeVisuallyHiddenClass = (breadcrumb: HTMLIcBreadcrumbElement) => {
    breadcrumb.addEventListener("transitionend", (e) => {
      if (e.propertyName === "opacity") {
        breadcrumb.classList.remove("visuallyhidden");
      }
    });
  };

  private setLastParentCollapsedBackBreadcrumb = () => {
    const lastParentBreadcrumb = this.getLastParentBreadcrumb();
    this.setBackBreadcrumbAttr();
    lastParentBreadcrumb.classList.remove("hide");
  };

  private revertLastParentCollapsedBreadcrumb = () => {
    const lastParentBreadcrumb = this.getLastParentBreadcrumb();
    lastParentBreadcrumb.setAttribute("show-back-icon", "false");
  };

  private resizeObserver: ResizeObserver = null;

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

  componentWillLoad(): void {
    const allBreadcrumbs = Array.from(
      this.el.querySelectorAll("ic-breadcrumb")
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
