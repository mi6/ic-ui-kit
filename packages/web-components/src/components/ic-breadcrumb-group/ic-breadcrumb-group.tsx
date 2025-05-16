import { Component, Host, h, Element, Prop, State, Watch } from "@stencil/core";
import {
  checkResizeObserver,
  DEVICE_SIZES,
  getCurrentDeviceSize,
} from "../../utils/helpers";
import { IcThemeMode } from "../../utils/types";

@Component({
  tag: "ic-breadcrumb-group",
  styleUrl: "ic-breadcrumb-group.css",
  shadow: true,
})

// Added ResizeObserver to find out width of breadcrumbs and parents. Use side navigation long title for ref.
export class BreadcrumbGroup {
  private ADD_CLASS_DELAY = 50;
  private IC_BREADCRUMB = "ic-breadcrumb";
  private SHOW_BACK_ICON = "show-back-icon";
  private collapsedBreadcrumbEl?: HTMLButtonElement;
  private collapsedBreadcrumbs: HTMLIcBreadcrumbElement[] = [];
  private collapsedBreadcrumbWrapper?: HTMLIcBreadcrumbElement;
  private resizeObserver: ResizeObserver | null = null;
  private lastParentBreadcrumb: HTMLIcBreadcrumbElement | null = null;

  @Element() el: HTMLIcBreadcrumbGroupElement;

  @State() deviceSize: number = DEVICE_SIZES.XL;

  /**
   * If `true`, display only a single breadcrumb for the parent page with a back icon.
   */
  @Prop() backBreadcrumbOnly = false;
  @Watch("backBreadcrumbOnly")
  watchBackBreadcrumbHandler(): void {
    this.setBackBreadcrumb();
  }

  /**
   * If `true`, all breadcrumbs between the first and last breadcrumb will be collapsed.
   */
  @Prop({ mutable: true }) collapsed = false;
  @Watch("collapsed")
  watchCollapsedHandler(): void {
    this.setCollapsed();
  }

  /**
   * If `true`, the breadcrumb group will display as black in the light theme, and white in the dark theme.
   */
  @Prop() monochrome = false;
  @Watch("monochrome")
  watchMonochromeHandler(): void {
    this.setBreadcrumbMonochrome();
  }

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";
  @Watch("theme")
  watchThemeHandler(): void {
    this.setBreadcrumbTheme();
  }

  componentWillLoad(): void {
    this.setBreadcrumbTheme();
    this.setBreadcrumbMonochrome();

    if (this.backBreadcrumbOnly) {
      this.setBackBreadcrumb();
    } else {
      checkResizeObserver(this.runResizeObserver);
    }

    if (
      this.collapsed &&
      this.el.querySelectorAll(this.IC_BREADCRUMB).length > 2
    ) {
      if (getCurrentDeviceSize() === DEVICE_SIZES.S) {
        this.setLastParentCollapsedBackBreadcrumb();
      } else {
        this.setCollapsed();
      }
    }

    this.lastParentBreadcrumb = this.getLastParentBreadcrumb();
  }

  disconnectedCallback(): void {
    this.lastParentBreadcrumb?.removeEventListener(
      "transitionend",
      this.transitionendHandler
    );

    this.collapsedBreadcrumbEl?.removeEventListener("click", this.clickHandler);
  }

  private setBreadcrumbTheme = () => {
    Array.from(
      this.el.querySelectorAll<HTMLIcBreadcrumbElement>(this.IC_BREADCRUMB)
    ).forEach((breadcrumb) => {
      breadcrumb.theme = this.theme;
    });
  };

  private setBreadcrumbMonochrome = () => {
    Array.from(
      this.el.querySelectorAll<HTMLIcBreadcrumbElement>(this.IC_BREADCRUMB)
    ).forEach((breadcrumb) => {
      breadcrumb.monochrome = this.monochrome;
    });
  };

  private setBackBreadcrumb = () => {
    if (this.backBreadcrumbOnly) {
      this.setLastParentCollapsedBackBreadcrumb();
    } else {
      this.revertLastParentCollapsedBreadcrumb();
    }
  };

  private setBackBreadcrumbAttr = () => {
    if (this.lastParentBreadcrumb) {
      this.lastParentBreadcrumb.classList.add("show");
      this.lastParentBreadcrumb.setAttribute(this.SHOW_BACK_ICON, "true");
    }
  };

  private getLastParentBreadcrumb = (): HTMLIcBreadcrumbElement | null => {
    const allBreadcrumbs = this.el.querySelectorAll<HTMLIcBreadcrumbElement>(
      this.IC_BREADCRUMB
    );

    return allBreadcrumbs.length > 1
      ? allBreadcrumbs[allBreadcrumbs.length - 2]
      : null;
  };

  private setCollapsed = () => {
    this.collapsedBreadcrumbs.forEach((breadcrumb) => {
      breadcrumb.classList.remove("visuallyhidden");
      breadcrumb.classList.remove("fade");
    });

    if (this.collapsed) {
      this.renderCollapsedBreadcrumb();
      const allBreadcrumbs = Array.from(
        this.el.querySelectorAll<HTMLIcBreadcrumbElement>(this.IC_BREADCRUMB)
      );

      this.collapsedBreadcrumbs = allBreadcrumbs
        .splice(1, allBreadcrumbs.length - 2)
        .filter(
          (breadcrumb) =>
            !breadcrumb.classList.contains("collapsed-breadcrumb-wrapper")
        );
      if (!this.backBreadcrumbOnly) {
        this.collapsedBreadcrumbs.forEach((breadcrumb) =>
          breadcrumb.classList.add("hide")
        );
      }

      if (this.collapsedBreadcrumbWrapper) {
        allBreadcrumbs[0]?.insertAdjacentElement(
          "afterend",
          this.collapsedBreadcrumbWrapper
        );
      }
    } else {
      this.collapsedBreadcrumbWrapper?.remove();
    }
  };

  private clickHandler = () => {
    this.collapsedBreadcrumbWrapper?.remove();
    this.collapsedBreadcrumbs.forEach((breadcrumb) => {
      breadcrumb.classList.add("visuallyhidden");
      breadcrumb.classList.remove("hide");
      setTimeout(() => {
        breadcrumb.classList.add("fade");
      }, this.ADD_CLASS_DELAY);

      breadcrumb.addEventListener("transitionend", this.transitionendHandler);
    });
    this.collapsed = false;
    // Set focus to first unhidden breadcrumb
    this.collapsedBreadcrumbs[0].setFocus();
  };

  private renderCollapsedBreadcrumb = () => {
    if (this.collapsedBreadcrumbEl === undefined) {
      this.collapsedBreadcrumbWrapper = document.createElement("ic-breadcrumb");
      this.collapsedBreadcrumbWrapper.classList.add(
        "collapsed-breadcrumb-wrapper"
      );
      this.collapsedBreadcrumbEl = document.createElement("button");

      const ariaLabel = document.createElement("span");
      ariaLabel.id = "collapsed-button-label";
      ariaLabel.innerText = "Collapsed breadcrumbs";
      ariaLabel.className = "hide";
      this.collapsedBreadcrumbEl.setAttribute("aria-labelledby", ariaLabel.id);

      const ariaDescribed = document.createElement("span");
      ariaDescribed.id = "collapsed-button-described";
      ariaDescribed.innerText = "Select to view collapsed breadcrumbs";
      ariaDescribed.className = "hide";
      this.collapsedBreadcrumbEl.setAttribute(
        "aria-describedby",
        ariaDescribed.id
      );

      this.collapsedBreadcrumbEl.id = "collapsed-ellipsis";
      this.collapsedBreadcrumbEl.innerText = "...";
      this.collapsedBreadcrumbEl.classList.add("collapsed-breadcrumb");
      this.collapsedBreadcrumbEl.addEventListener("click", this.clickHandler);

      this.collapsedBreadcrumbWrapper.append(ariaDescribed);
      this.collapsedBreadcrumbWrapper.append(ariaLabel);
      this.collapsedBreadcrumbWrapper.append(this.collapsedBreadcrumbEl);
    }
  };

  private transitionendHandler = (event: TransitionEvent) => {
    if (event.propertyName === "opacity") {
      (event.target as HTMLElement).classList.remove("visuallyhidden");
    }
  };

  private setLastParentCollapsedBackBreadcrumb = () => {
    this.lastParentBreadcrumb = this.getLastParentBreadcrumb();
    this.setBackBreadcrumbAttr();
    if (this.lastParentBreadcrumb) {
      this.lastParentBreadcrumb.classList.remove("hide");
      this.lastParentBreadcrumb.classList.add("show");
    }
  };

  private revertLastParentCollapsedBreadcrumb = () => {
    if (this.lastParentBreadcrumb) {
      this.lastParentBreadcrumb.setAttribute(this.SHOW_BACK_ICON, "false");
      if (this.collapsed) {
        this.lastParentBreadcrumb.classList.add("hide");
      }
    }
  };

  private resizeObserverCallback = (currSize: number) => {
    if (currSize !== this.deviceSize) {
      this.deviceSize = currSize;

      const isSmallDevice = this.deviceSize <= DEVICE_SIZES.S;
      this.el.setAttribute("back-breadcrumb-only", `${isSmallDevice}`);

      if (isSmallDevice) {
        if (this.collapsed) {
          this.setLastParentCollapsedBackBreadcrumb();
        } else {
          this.setBackBreadcrumb();
        }
      } else {
        const allBreadcrumbs = Array.from(
          this.el.querySelectorAll(this.IC_BREADCRUMB)
        );

        if (this.collapsed && allBreadcrumbs.length > 2) {
          this.revertLastParentCollapsedBreadcrumb();
          this.setCollapsed();
        } else {
          allBreadcrumbs.forEach((breadcrumb) => {
            breadcrumb.setAttribute(this.SHOW_BACK_ICON, "false");
          });
        }
      }
    }
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeObserverCallback(getCurrentDeviceSize());
    });

    this.resizeObserver.observe(this.el);
  };

  render() {
    const { backBreadcrumbOnly, collapsed, theme } = this;

    return (
      <Host
        class={{
          "ic-breadcrumb-group-back": backBreadcrumbOnly,
          "ic-breadcrumb-group-collapsed": collapsed,
          [`ic-theme-${theme}`]: theme !== "inherit",
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
