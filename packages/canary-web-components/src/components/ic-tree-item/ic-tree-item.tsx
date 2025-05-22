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
  Method,
} from "@stencil/core";
import { IcSizes, IcThemeMode } from "../../utils/types";
import {
  isSlotUsed,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
  renderDynamicChildSlots,
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
  private treeItemElement: HTMLElement | undefined;
  private treeItemTag = "IC-TREE-ITEM";
  private routerSlot: HTMLElement | null;
  private hostMutationObserver: MutationObserver | null = null;
  private TOOLTIP = "ic-tooltip";
  private TREE_ITEM_LABEL_CLASS_SELECTOR = ".tree-item-label";
  private TREE_ITEM_CONTENT_CLASS_SELECTOR = ".tree-item-content";

  @Element() el: HTMLIcTreeItemElement;

  @State() childTreeItems: HTMLIcTreeItemElement[];

  /**
   * If `true`, the tree item appears in the disabled state.
   */
  @Prop() disabled: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * If `true`, the tree item appears in the expanded state.
   */
  @Prop({ mutable: true }) expanded: boolean = false;
  @Watch("expanded")
  watchExpandedHandler(): void {
    this.icTreeItemExpanded.emit({ isExpanded: this.expanded });
  }
  /**
   * @internal If `true`, the tree item will have an inset focus border.
   */
  @Prop() focusInset: boolean = false;

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
   * @internal Holds the previous truncation state before the screen switches to a small viewport, so it can be reset when screen size changes again.
   */
  @Prop() previousTruncateTreeItem?: boolean;

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
  watchSelectedHandler(): void {
    if (this.selected) {
      this.icTreeItemSelected.emit({ id: this.el.id });
    }
    this.updateAriaLabel();
  }

  /**
   * @internal Determines the size of the tree item.
   */
  @Prop() size?: IcSizes = "medium";

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * If `true`, the tree item label will be truncated instead of text wrapping.
   */
  @Prop() truncateTreeItem?: boolean;

  /**
   * Emitted when tree item is selected.
   */
  @Event() icTreeItemSelected: EventEmitter<{ id: string }>;

  /**
   * Emitted when tree item is expanded.
   */
  @Event() icTreeItemExpanded: EventEmitter<{ isExpanded: boolean }>;

  disconnectedCallback(): void {
    this.hostMutationObserver?.disconnect();
  }

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);

    this.childTreeItems = Array.from((this.el as HTMLElement).children).filter(
      (child) => child.tagName === this.treeItemTag
    ) as HTMLIcTreeItemElement[];

    if (this.childTreeItems.length > 0) {
      this.isParent = true;
    }
  }

  componentDidLoad(): void {
    this.setTreeItemPadding();

    this.updateAriaLabel();

    !isSlotUsed(this.el, "label") &&
      onComponentRequiredPropUndefined(
        [{ prop: this.label, propName: "label" }],
        "Tree item"
      );

    this.hostMutationObserver = new MutationObserver((mutationList) =>
      renderDynamicChildSlots(mutationList, "icon", this)
    );
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });
  }
  componentDidRender(): void {
    this.truncateTreeItem
      ? this.truncateTreeItemLabel(this.el)
      : this.removeTreeItemTruncation(this.el);
    if (this.expanded) {
      this.childTreeItems.forEach((child: HTMLIcTreeItemElement) => {
        child.truncateTreeItem
          ? this.truncateTreeItemLabel(child)
          : this.removeTreeItemTruncation(child);
      });
    }
  }

  componentDidUpdate(): void {
    if (this.hasParentExpanded) {
      this.childTreeItems.forEach((child: HTMLIcTreeItemElement) => {
        child.truncateTreeItem
          ? this.truncateTreeItemLabel(child)
          : this.removeTreeItemTruncation(child);
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
      ariaLabel = this.routerSlot!.textContent;
    } else if (isSlotUsed(this.el, "label")) {
      ariaLabel = this.el.querySelector('[slot="label"]')!.textContent;
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
      this.routerSlot!.ariaLabel = ariaLabel;
    } else {
      this.treeItemElement!.ariaLabel = ariaLabel;
    }
  }

  private setTreeItemPadding = () => {
    let level = 1;
    let parentElement = this.el.parentElement;
    const treeItemContent = this.el.shadowRoot?.querySelector(
      this.TREE_ITEM_CONTENT_CLASS_SELECTOR
    ) as HTMLElement;

    if (!parentElement) {
      return;
    }

    const isSiblingOfParent = Array.from(parentElement.children).some(
      (sibling) =>
        sibling !== this.el &&
        !sibling.querySelector('[slot="router-item"]') &&
        !sibling.querySelector('[slot="label"]') &&
        sibling.children.length > 0
    );

    if (
      (isSiblingOfParent && !this.el.isParent) ||
      (parentElement.tagName === this.treeItemTag && !this.el.isParent)
    ) {
      if (this.hasRouterSlot()) {
        this.routerSlot!.classList.add("ic-tree-item-single");
      } else {
        treeItemContent.classList.add("ic-tree-item-single");
      }
    }

    while (parentElement) {
      if (parentElement.tagName === this.treeItemTag) {
        level++;
        treeItemContent.style.paddingLeft = !this.el.isParent
          ? `calc(var(--ic-space-${isSiblingOfParent ? "xl" : "xs"}) + ${
              level * (isSiblingOfParent ? 16 : 24)
            }px)`
          : `${level * 16}px`;
      }
      parentElement = parentElement.parentElement;
    }
  };

  private truncateTreeItemLabel = (treeItem: HTMLIcTreeItemElement) => {
    let typographyEl =
      treeItem.shadowRoot?.querySelector<HTMLIcTypographyElement>(
        this.TREE_ITEM_LABEL_CLASS_SELECTOR
      );
    const slottedContent = treeItem.querySelector("[slot='router-item']");
    let contentHeight = slottedContent?.scrollHeight;

    if (!typographyEl && slottedContent) {
      const newTypographyEl = document.createElement("ic-typography");
      newTypographyEl.innerHTML = slottedContent.textContent!;
      newTypographyEl.classList.add("tree-item-label");
      slottedContent.replaceChild(newTypographyEl, slottedContent.firstChild!);
      typographyEl = newTypographyEl;
    } else if (typographyEl) {
      contentHeight = typographyEl.scrollHeight;
    }

    const tooltipAlreadyExists = !!typographyEl?.closest(this.TOOLTIP);
    const treeContent =
      treeItem.shadowRoot?.querySelector(
        this.TREE_ITEM_CONTENT_CLASS_SELECTOR
      ) || slottedContent;

    if (
      contentHeight &&
      treeContent?.clientHeight &&
      contentHeight > treeContent.clientHeight &&
      !tooltipAlreadyExists &&
      typographyEl
    ) {
      const tooltipEl = document.createElement("ic-tooltip");
      tooltipEl.setAttribute("target", this.el.id);
      tooltipEl.setAttribute("label", typographyEl.textContent!);
      tooltipEl.setAttribute("placement", "right");

      if (treeContent === slottedContent) {
        treeContent.addEventListener("focus", () =>
          this.handleDisplayTooltip(true)
        );
        treeContent.addEventListener("blur", () =>
          this.handleDisplayTooltip(false)
        );
        tooltipEl.setAttribute("style", "overflow:hidden;");
        typographyEl.setAttribute(
          "style",
          "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
        );
      } else {
        tooltipEl.classList.add("ic-tooltip-overflow");
        typographyEl.classList.add("ic-text-overflow");
      }

      treeContent.appendChild(tooltipEl);
      tooltipEl.appendChild(typographyEl);
    }
  };

  private removeTreeItemTruncation = (treeItem: HTMLIcTreeItemElement) => {
    const slottedContent = treeItem.querySelector("[slot='router-item']");
    const typographyEl: HTMLIcTypographyElement =
      treeItem.shadowRoot?.querySelector(this.TREE_ITEM_LABEL_CLASS_SELECTOR) ||
      slottedContent!.querySelector(this.TREE_ITEM_LABEL_CLASS_SELECTOR)!;
    const tooltipEl = typographyEl?.closest<HTMLIcTooltipElement>(this.TOOLTIP);
    const treeContent =
      treeItem.shadowRoot?.querySelector(
        this.TREE_ITEM_CONTENT_CLASS_SELECTOR
      ) || slottedContent!;

    if (tooltipEl) {
      typographyEl.classList.remove("ic-text-overflow");
      treeContent.replaceChild(
        treeContent === slottedContent
          ? typographyEl.firstChild!
          : typographyEl,
        tooltipEl
      );
    }
  };

  private hasRouterSlot(): boolean {
    this.routerSlot = this.el.querySelector('[slot="router-item"]');
    return !!this.routerSlot;
  }

  private handleDisplayTooltip = (display: boolean) => {
    const typographyEl =
      this.el.shadowRoot?.querySelector<HTMLIcTypographyElement>(
        this.TREE_ITEM_LABEL_CLASS_SELECTOR
      ) || this.el.querySelector(this.TREE_ITEM_LABEL_CLASS_SELECTOR);
    const tooltip = typographyEl?.closest<HTMLIcTooltipElement>(this.TOOLTIP);

    tooltip?.displayTooltip(display);
  };

  render() {
    const { disabled, label, selected, size, expanded, focusInset, theme } =
      this;

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
          "ic-tree-item-disabled": disabled,
          "ic-tree-item-selected": !disabled && selected,
          [`ic-tree-item-${size}`]: size !== "medium",
          "ic-tree-item-focus-inset": focusInset,
          [`ic-theme-${theme}`]: theme !== "inherit",
          "ic-tree-item-truncate": !!this.truncateTreeItem,
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
