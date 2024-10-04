import {
  Component,
  h,
  Prop,
  Element,
  Host,
  Watch,
  State,
  Listen,
  forceUpdate,
} from "@stencil/core";
import { IcSizes, IcThemeForegroundNoDefault } from "../../utils/types";
import {
  isPropDefined,
  isSlotUsed,
  checkSlotInChildMutations,
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

  @Element() el: HTMLIcTreeViewElement;

  @State() treeItems: HTMLIcTreeItemElement[];

  /**
   * The appearance of the tree view, e.g. dark, or light.
   */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";
  @Watch("appearance")
  watchAppearanceHandler() {
    this.treeItems.forEach((treeItem) => {
      treeItem.appearance = this.appearance;
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
  watchSizeHandler() {
    this.treeItems.forEach((treeItem) => {
      treeItem.size = this.size;
    });
  }

  disconnectedCallback(): void {
    this.el?.removeEventListener("slotchange", this.setTreeItems);

    this.hostMutationObserver?.disconnect();
  }

  componentDidLoad(): void {
    this.setTreeItems();

    this.watchAppearanceHandler();
    this.watchSizeHandler();
    setTimeout(() => {
      this.truncateTreeViewHeading();
    }, 100);

    this.addSlotChangeListener();

    this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });
  }

  @Listen("icTreeItemSelected")
  handleTreeItemSelected(event: CustomEvent): void {
    this.treeItems.forEach((treeItem) => {
      if (treeItem.selected && treeItem.id !== event.detail.id) {
        treeItem.selected = false;
      }
    });
  }

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
    const tooltip = typographyEl.closest("ic-tooltip");
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

  private hostMutationCallback = (mutationList: MutationRecord[]): void => {
    if (
      mutationList.some(({ type, addedNodes, removedNodes }) =>
        type === "childList"
          ? checkSlotInChildMutations(addedNodes, removedNodes, "icon")
          : false
      )
    ) {
      forceUpdate(this);
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
    const { appearance, heading, size } = this;

    return (
      <Host
        context-id={this.treeViewId}
        class={{
          [`ic-tree-view-${appearance}`]: true,
          [`ic-tree-view-${size}`]: size !== "medium",
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
            <ic-typography variant="subtitle-large" class="tree-view-header">
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
