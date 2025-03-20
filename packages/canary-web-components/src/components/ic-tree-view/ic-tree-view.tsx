import {
  Component,
  h,
  Prop,
  Element,
  Host,
  Watch,
  State,
  Listen,
} from "@stencil/core";
import { IcSizes, IcThemeMode } from "../../utils/types";
import {
  checkResizeObserver,
  DEVICE_SIZES,
  getCurrentDeviceSize,
  isPropDefined,
  isSlotUsed,
  renderDynamicChildSlots,
} from "../../utils/helpers";

let treeViewIds = 0;

/**
 * @slot heading - Content is set as the tree view heading.
 * @slot icon - Content is placed to the left of the heading.
 */

@Component({
  tag: "ic-tree-view",
  styleUrl: "ic-tree-view.css",
  shadow: true,
})
export class TreeView {
  private treeViewId = `ic-tree-view-${treeViewIds++}`;
  private treeItemTag = "IC-TREE-ITEM";
  private hostMutationObserver: MutationObserver = null;
  private isLoaded = false;
  private resizeObserver: ResizeObserver | null = null;
  private TOOLTIP = "ic-tooltip";

  private previousTruncateHeading: boolean;
  private previousTruncateTreeItems: boolean;

  @Element() el: HTMLIcTreeViewElement;

  @State() smallDevice: boolean = false;
  @Watch("smallDevice")
  watchSmallDeviceHandler(): void {
    if (this.smallDevice) {
      this.previousTruncateHeading = this.truncateHeading;
      this.previousTruncateTreeItems = this.truncateTreeItems;
      this.removeTruncation();
    } else {
      this.truncateHeading = this.previousTruncateHeading;
      this.truncateTreeItems = this.previousTruncateTreeItems;
    }
  }

  @State() treeItems: HTMLIcTreeItemElement[];

  /**
   * If `true`, tree items will have inset focus.
   */
  @Prop() focusInset?: boolean = false;
  @Watch("focusInset")
  watchFocusInsetHandler(): void {
    this.treeItems.forEach((treeItem) => {
      treeItem.focusInset = this.focusInset;
    });
  }

  /**
   * The heading of the tree view.
   */
  @Prop() heading?: string = "";

  /**
   * The size of the tree view.
   */
  @Prop() size?: IcSizes = "medium";
  @Watch("size")
  watchSizeHandler(): void {
    this.treeItems.forEach((treeItem) => {
      treeItem.size = this.size;
    });
  }

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";
  @Watch("theme")
  watchThemeHandler(): void {
    this.treeItems.forEach((treeItem) => {
      treeItem.theme = this.theme;
    });
  }

  /**
   * If `true`, the tree view heading will be truncated instead of text wrapping.
   * When used on small devices, this prop will be overridden and headings will be set to text-wrap.
   */
  @Prop({ mutable: true }) truncateHeading?: boolean = false;

  /**
   * If `true`, tree items will be truncated, unless they are individually overridden.
   * When used on small devices, this prop will be overridden and tree-items will be set to text-wrap.
   */
  @Prop({ mutable: true }) truncateTreeItems?: boolean = false;
  @Watch("truncateTreeItems")
  watchTruncateTreeItemsHandler(): void {
    this.treeItems.forEach((treeItem) => {
      if (this.smallDevice) {
        treeItem.previousTruncateTreeItem = treeItem.truncateTreeItem;
        treeItem.truncateTreeItem = this.truncateTreeItems;
      } else {
        treeItem.truncateTreeItem = treeItem.previousTruncateTreeItem;
      }
    });
  }

  disconnectedCallback(): void {
    this.el?.removeEventListener("slotchange", this.setTreeItems);

    this.hostMutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
  }
  componentWillLoad(): void {
    this.setTreeItems();

    this.previousTruncateHeading = this.truncateHeading;
    this.previousTruncateTreeItems = this.truncateTreeItems;

    checkResizeObserver(this.runResizeObserver);

    this.watchSizeHandler();
    this.watchFocusInsetHandler();
    this.watchThemeHandler();
    this.treeItems.forEach((treeItem) => {
      if (treeItem.truncateTreeItem === undefined) {
        treeItem.truncateTreeItem = this.truncateTreeItems;
      }
    });
  }

  componentDidRender(): void {
    this.truncateHeading
      ? this.truncateTreeViewHeading()
      : this.removeHeadingTruncation();
  }

  componentDidLoad(): void {
    this.addSlotChangeListener();

    this.hostMutationObserver = new MutationObserver((mutationList) =>
      renderDynamicChildSlots(mutationList, "icon", this)
    );
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });

    this.isLoaded = true;
  }

  @Listen("icTreeItemSelected")
  handleTreeItemSelected(event: CustomEvent): void {
    this.treeItems.forEach((treeItem) => {
      if (treeItem.selected && treeItem.id !== event.detail.id) {
        treeItem.selected = false;
      }
    });
  }

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      const isSmallDevice = getCurrentDeviceSize() <= DEVICE_SIZES.S;
      if (this.smallDevice !== isSmallDevice) this.smallDevice = isSmallDevice;
    });

    this.resizeObserver.observe(document.body);
  };

  private removeTruncation = (): void => {
    this.truncateHeading = undefined;
    this.truncateTreeItems = undefined;
  };

  private handleKeyDown = (event: KeyboardEvent): void => {
    const focussedChild = this.treeItems.indexOf(
      this.treeItems.filter((el) => el === document.activeElement)[0]
    );
    const expanded = this.treeItems[focussedChild]?.expanded;
    switch (event.key) {
      case "ArrowDown":
        this.treeItems[
          this.getNextItemToSelect(focussedChild, true)
        ].setFocus();
        if (focussedChild !== this.treeItems.length - 1) {
          event.preventDefault();
        }
        break;
      case "ArrowUp":
        this.treeItems[
          this.getNextItemToSelect(focussedChild, false)
        ].setFocus();
        if (focussedChild !== 0) {
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        if (this.treeItems[focussedChild].isParent && !expanded) {
          this.treeItems[focussedChild].expanded = true;
          this.treeItems[focussedChild].hasParentExpanded = true;
          this.treeItems[focussedChild].updateAriaLabel();
        } else if (this.treeItems[focussedChild].isParent && expanded) {
          (
            this.treeItems[focussedChild].children[0] as HTMLIcTreeItemElement
          ).setFocus();
        }
        event.preventDefault();
        break;
      case "ArrowLeft":
        if (this.treeItems[focussedChild].isParent && expanded) {
          this.treeItems[focussedChild].expanded = false;
          this.treeItems[focussedChild].hasParentExpanded = false;
          this.treeItems[focussedChild].updateAriaLabel();
        } else if (
          this.treeItems[focussedChild].parentElement.tagName ===
          this.treeItemTag
        ) {
          (
            this.treeItems[focussedChild].parentElement as HTMLIcTreeItemElement
          ).setFocus();
        }
        event.preventDefault();
        break;
    }
  };

  private getNextItemToSelect = (
    currentItem: number,
    movingDown: boolean
  ): number => {
    const numItems = this.treeItems.length - 1;

    if (currentItem < 1) {
      currentItem = 0;
    }

    let nextItem = movingDown ? currentItem + 1 : currentItem - 1;
    if (nextItem < 0) {
      nextItem = 0;
    } else if (nextItem > numItems) {
      nextItem = numItems;
    }

    const maxAttempts = numItems + 1;
    let attempts = 0;

    while (attempts < maxAttempts) {
      if (nextItem < 0 || nextItem > numItems) {
        return currentItem;
      }

      if (
        !this.treeItems[nextItem].disabled &&
        (this.treeItems[nextItem].parentElement.tagName !== this.treeItemTag ||
          (this.treeItems[nextItem].parentElement as HTMLIcTreeItemElement)
            .expanded)
      ) {
        return nextItem;
      }

      if (nextItem === numItems && this.treeItems[nextItem].disabled) {
        return currentItem;
      }

      nextItem = movingDown ? nextItem + 1 : nextItem - 1;
      attempts++;
    }

    return currentItem;
  };

  private linkTreeItems = () => {
    this.treeItems.forEach((treeItem) => {
      treeItem.setAttribute("context-id", this.treeViewId);
    });
  };

  private setTreeItems = () => {
    this.treeItems = this.getAllTreeItems(this.el as HTMLElement);

    this.linkTreeItems();
  };

  private getAllTreeItems(element: HTMLElement): HTMLIcTreeItemElement[] {
    const treeItems: HTMLIcTreeItemElement[] = [];

    const collectTreeItems = (el: HTMLElement) => {
      Array.from(el.children).forEach((child) => {
        if (child.tagName === this.treeItemTag) {
          treeItems.push(child as HTMLIcTreeItemElement);
        }

        collectTreeItems(child as HTMLElement);
      });
    };

    collectTreeItems(element);
    return treeItems;
  }

  private addSlotChangeListener = () => {
    this.el.addEventListener("slotchange", this.setTreeItems);
  };

  private truncateTreeViewHeading = () => {
    const typographyEl: HTMLIcTypographyElement =
      this.el.shadowRoot.querySelector(".tree-view-header");
    const tooltip = typographyEl?.closest(this.TOOLTIP);
    const headingContainer: HTMLElement = this.el.shadowRoot.querySelector(
      ".heading-area-container"
    );

    if (typographyEl?.scrollHeight > headingContainer?.clientHeight) {
      typographyEl.classList.add("ic-text-overflow");

      if (!tooltip) {
        const tooltipEl = document.createElement("ic-tooltip");
        tooltipEl.setAttribute("target", this.el.id);
        tooltipEl.setAttribute("label", typographyEl.textContent);
        tooltipEl.classList.add("ic-tooltip-overflow");
        tooltipEl.setAttribute("placement", "right");
        headingContainer.appendChild(tooltipEl);
        tooltipEl.appendChild(typographyEl);
      }
    }
  };

  private removeHeadingTruncation = () => {
    const typographyEl: HTMLIcTypographyElement =
      this.el.shadowRoot.querySelector(".tree-view-header");
    const tooltipEl: HTMLIcTooltipElement = typographyEl?.closest(this.TOOLTIP);

    if (tooltipEl) {
      typographyEl.classList.remove("ic-text-overflow");
      this.el.shadowRoot
        .querySelector(".heading-area-container")
        .replaceChild(typographyEl, tooltipEl);
    }
  };

  private isHeadingDefined = () =>
    isPropDefined(this.heading) && this.heading !== null;

  private hasHeadingAreaContent = (): boolean => {
    return (
      isSlotUsed(this.el, "heading") ||
      this.isHeadingDefined() ||
      isSlotUsed(this.el, "icon")
    );
  };

  render() {
    const { heading, isLoaded, size, theme, truncateHeading } = this;

    return (
      <Host
        context-id={this.treeViewId}
        class={{
          [`ic-tree-view-${size}`]: size !== "medium",
          [`ic-theme-${theme}`]: theme !== "inherit",
          "ic-tree-view-truncate": truncateHeading,
        }}
        onKeyDown={this.handleKeyDown}
        aria-label={this.isHeadingDefined() ? heading : null}
      >
        {this.hasHeadingAreaContent() && (
          <div class="heading-area-container">
            {isSlotUsed(this.el, "icon") && (
              <div class="icon-container">
                <slot name="icon" />
              </div>
            )}
            <ic-typography
              variant="subtitle-large"
              class={{
                "tree-view-header": true,
                "with-padding": this.truncateHeading && !isLoaded,
              }}
            >
              {isSlotUsed(this.el, "heading") ? (
                <slot name="heading" />
              ) : (
                heading
              )}
            </ic-typography>
          </div>
        )}

        <slot></slot>
      </Host>
    );
  }
}
