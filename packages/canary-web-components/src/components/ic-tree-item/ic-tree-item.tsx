import {
  Component,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Host,
  Watch,
  State,
  Listen,
  forceUpdate,
  Method,
} from "@stencil/core";
import { IcSizes, IcThemeForegroundNoDefault } from "../../utils/types";
import {
  isSlotUsed,
  onComponentRequiredPropUndefined,
  checkSlotInChildMutations,
} from "../../utils/helpers";
import arrowDropdown from "../../assets/arrow-dropdown.svg";

let treeItemIds = 0;

/**
 * @slot label - Content is set as the tree item label.
 * @slot icon - Content is placed to the left of the label.
 * @slot router-item - Handle routing by nesting your routes in this slot.
 */
@Component({
  tag: "ic-tree-item",
  styleUrl: "ic-tree-item.css",
  shadow: true,
})
export class TreeItem {
  private treeItemId = `ic-tree-item-${treeItemIds++}`;
  private treeItemElement: HTMLElement;
  private treeItemTag = "IC-TREE-ITEM";
  private routerSlot: HTMLElement;
  private hostMutationObserver: MutationObserver = null;
  private TOOLTIP = "ic-tooltip";

  @Element() el: HTMLIcTreeItemElement;

  @State() childTreeItems: HTMLIcTreeItemElement[];

  /**
   * @internal Determines whether the light or dark variant of the tree item should be displayed.
   */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";

  /**
   * If `true`, the tree item appears in the disabled state.
   */
  @Prop() disabled?: boolean = false;

  /**
   * @internal If `true`, the tree item appears in the expanded state.
   */
  @Prop({ mutable: true }) expanded: boolean = false;

  /**
   * @internal Determines if the parent tree item has been expanded.
   */
  @Prop({ mutable: true }) hasParentExpanded: boolean = false;

  /**
   * The URL that the tree item link points to. If set, the tree item will render as an "a" tag, otherwise it will render as a div.
   */
  @Prop() href?: string | undefined;

  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string = "";

  /**
   * @internal If `true`, the tree item is a parent of other tree items.
   */
  @Prop({ mutable: true }) isParent: boolean = false;

  /**
   * The label of the tree item.
   */
  @Prop() label: string = "";

  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;

  /**
   * If `true`, the tree item appears in the selected state.
   */
  @Prop({ mutable: true }) selected: boolean = false;
  @Watch("selected")
  watchSelectedHandler() {
    if (this.selected) {
      this.icTreeItemSelected.emit({ id: this.el.id });
    }
    this.updateAriaLabel();
  }

  /**
   * @internal Determines the size of the tree item.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * Emitted when tree item is selected.
   */
  @Event() icTreeItemSelected: EventEmitter<{ id: string }>;

  disconnectedCallback(): void {
    this.hostMutationObserver?.disconnect();
  }

  componentDidLoad(): void {
    this.childTreeItems = Array.from((this.el as HTMLElement).children).filter(
      (child) => child.tagName === this.treeItemTag
    ) as HTMLIcTreeItemElement[];

    if (this.childTreeItems.length > 0) {
      this.isParent = true;
    }

    this.setTreeItemPadding();

    this.updateAriaLabel();

    this.truncateTreeItemLabel(this.el);

    !isSlotUsed(this.el, "label") &&
      onComponentRequiredPropUndefined(
        [{ prop: this.label, propName: "label" }],
        "Tree item"
      );

    this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });
  }

  componentDidUpdate(): void {
    if (this.hasParentExpanded) {
      this.childTreeItems.forEach((child) => {
        this.truncateTreeItemLabel(child);
      });
      this.hasParentExpanded = false;
    }
  }

  @Listen("keydown", {})
  handleKeyDown(ev: KeyboardEvent): void {
    if (ev.key === "Enter" || ev.key === " ") {
      ev.stopImmediatePropagation();
      this.handleTreeItemClicked();
    }
  }

  /**
   * Sets focus on the native `input`.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.hasRouterSlot()) {
      this.routerSlot?.focus();
    } else {
      this.treeItemElement?.focus();
    }
  }

  private handleTreeItemClicked = (): void => {
    if (this.isParent) {
      this.expanded = !this.expanded;
      this.hasParentExpanded = true;
    }

    this.updateAriaLabel();
    this.selected = true;
    this.watchSelectedHandler();
  };

  /**
   * @internal Updates the aria-label of the tree item.
   */
  @Method()
  async updateAriaLabel(): Promise<void> {
    let ariaLabel;

    if (this.hasRouterSlot()) {
      ariaLabel = this.routerSlot.textContent;
    } else if (isSlotUsed(this.el, "label")) {
      ariaLabel = this.el.querySelector('[slot="label"]').textContent;
    } else {
      ariaLabel = this.label;
    }

    if (this.isParent) {
      ariaLabel = `${ariaLabel}, triggers submenu, ${
        this.expanded ? "expanded" : "collapsed"
      }`;
    }

    if (this.el.parentElement) {
      const treeItems = Array.from(
        (this.el.parentElement as HTMLElement).children
      ).filter(
        (child) => child.tagName === this.treeItemTag
      ) as HTMLIcTreeItemElement[];

      const index = treeItems.indexOf(this.el) + 1;
      const parentChildren = treeItems.length;

      ariaLabel = `${ariaLabel}, ${index} of ${parentChildren}`;
    }

    if (this.selected) {
      ariaLabel = `${ariaLabel}, active`;
    }

    if (this.disabled) {
      ariaLabel = `${ariaLabel}, dimmed`;
    }

    if (this.hasRouterSlot()) {
      this.routerSlot.ariaLabel = ariaLabel;
    } else {
      this.treeItemElement.ariaLabel = ariaLabel;
    }
  }

  private setTreeItemPadding = () => {
    let level = 1;
    let parentElement = this.el.parentElement;
    const treeItemContent = this.el.shadowRoot.querySelector(
      ".tree-item-content"
    ) as HTMLElement;

    const isSiblingOfParent = Array.from(parentElement.children)
      .map((sibling) => {
        if (
          sibling !== this.el &&
          !sibling.querySelector('[slot="router-item"]') &&
          !sibling.querySelector('[slot="label"]')
        ) {
          return sibling.children.length > 0;
        } else {
          return false;
        }
      })
      .includes(true);

    const isChild = parentElement.tagName === this.treeItemTag;

    const isRouterItem = this.hasRouterSlot();

    if (
      (isSiblingOfParent && !this.el.isParent) ||
      (isChild && !this.el.isParent)
    ) {
      if (isRouterItem) {
        this.routerSlot.classList.add("ic-tree-item-single");
      } else {
        treeItemContent.classList.add("ic-tree-item-single");
      }
    }

    while (parentElement) {
      if (parentElement.tagName === this.treeItemTag) {
        level++;
        if (!this.el.isParent && isSiblingOfParent) {
          treeItemContent.style.paddingLeft = `calc(var(--ic-space-xl) + ${
            level * 16
          }px)`;
        } else if (!this.el.isParent) {
          treeItemContent.style.paddingLeft = `calc(var(--ic-space-xs) + ${
            level * 24
          }px`;
        } else {
          treeItemContent.style.paddingLeft = `${level * 16}px`;
        }
      }
      parentElement = parentElement.parentElement;
    }
  };

  private truncateTreeItemLabel = (treeItem: HTMLIcTreeItemElement) => {
    const typographyEl: HTMLIcTypographyElement =
      treeItem.shadowRoot.querySelector(".tree-item-label");
    const tooltip = typographyEl?.closest(this.TOOLTIP);
    const treeContent: HTMLElement =
      treeItem.shadowRoot.querySelector(".tree-item-content");

    if (typographyEl?.scrollHeight > treeContent?.clientHeight) {
      typographyEl.classList.add("ic-text-overflow");

      if (!tooltip) {
        const tooltipEl = document.createElement("ic-tooltip");
        tooltipEl.setAttribute("target", this.el.id);
        tooltipEl.setAttribute("label", typographyEl.textContent);
        tooltipEl.classList.add("ic-tooltip-overflow");
        tooltipEl.setAttribute("placement", "right");
        treeContent.appendChild(tooltipEl);
        tooltipEl.appendChild(typographyEl);
      }
    }
  };

  private hasRouterSlot(): boolean {
    this.routerSlot = this.el.querySelector('[slot="router-item"]');
    return !!this.routerSlot;
  }

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

  private handleDisplayTooltip = (display: boolean) => {
    const typographyEl: HTMLIcTypographyElement =
      this.el.shadowRoot.querySelector(".tree-item-label");
    const tooltip: HTMLIcTooltipElement = typographyEl?.closest(this.TOOLTIP);

    tooltip?.displayTooltip(display);
  };

  render() {
    const { appearance, disabled, label, selected, size, expanded } = this;

    const Component = this.href && !this.disabled ? "a" : "div";

    const attrs = Component == "a" && {
      href: this.href,
      hrefLang: this.hreflang,
      referrerPolicy: this.referrerpolicy,
      rel: this.rel,
      target: this.target,
    };

    return (
      <Host
        class={{
          [`ic-tree-item-${appearance}`]: true,
          "ic-tree-item-disabled": disabled,
          "ic-tree-item-selected": !disabled && selected,
          [`ic-tree-item-${size}`]: size !== "default",
        }}
        id={this.treeItemId}
      >
        {this.hasRouterSlot() ? (
          <slot name="router-item" />
        ) : (
          <Component
            class={{
              "tree-item-content": true,
            }}
            tabIndex={disabled ? -1 : 0}
            onClick={this.handleTreeItemClicked}
            ref={(el) => (this.treeItemElement = el)}
            aria-disabled={disabled ? "true" : "false"}
            aria-live="polite"
            {...attrs}
            onFocus={() => this.handleDisplayTooltip(true)}
            onBlur={() => this.handleDisplayTooltip(false)}
          >
            {this.isParent && (
              <span
                class={{
                  ["arrow-dropdown"]: true,
                  ["tree-item-expanded"]: expanded,
                }}
                aria-hidden="true"
                innerHTML={arrowDropdown}
              />
            )}
            {isSlotUsed(this.el, "icon") && (
              <div class="icon-container">
                <slot name="icon" />
              </div>
            )}
            <ic-typography class="tree-item-label">
              {isSlotUsed(this.el, "label") ? <slot name="label" /> : label}
            </ic-typography>
          </Component>
        )}
        {expanded && (
          <div aria-hidden={`${!expanded}`}>
            <slot />
          </div>
        )}
      </Host>
    );
  }
}
