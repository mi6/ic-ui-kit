import {
  Component,
  Element,
  Host,
  Prop,
  h,
  State,
  Event,
  EventEmitter,
  Listen,
} from "@stencil/core";
import {
  getParentElement,
  isSlotUsed,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
} from "../../utils/helpers";
import { IcMenuItemVariants } from "./ic-menu-item.types";
import Check from "../../assets/check-icon.svg";
import Chevron from "../../assets/chevron-icon.svg";

/**
 * @slot icon - Content will be placed to the left of the menu item label.
 */

@Component({
  tag: "ic-menu-item",
  styleUrl: "ic-menu-item.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class MenuItem {
  @Element() el: HTMLIcMenuItemElement;

  @State() toggleChecked: boolean = false;

  /**
   * The description displayed in the menu item, below the label.
   */
  @Prop() description?: string;

  /**
   * If `true`, the menu item will be in disabled state.
   */
  @Prop() disabled?: boolean = false;

  /**
   * The URL that the link points to. This will render the menu item as an "a" tag.
   */
  @Prop() href?: string;

  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string;

  /**
   * The label describing the keyboard shortcut for a menu item's action.
   */
  @Prop() keyboardShortcut?: string;

  /**
   * The label to display in the menu item.
   */
  @Prop() label!: string;

  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;

  /**
   * This references the popover menu instance that the menu item is a trigger for. If this prop is set, then the variant will always be default.
   */
  @Prop() submenuTriggerFor?: string;

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * The variant of the menu item.
   */
  @Prop({ mutable: true, reflect: true }) variant: IcMenuItemVariants =
    "default";

  /**
   * @internal Emitted when item loses focus.
   */
  @Event() childBlur: EventEmitter<void>;

  /**
   * @internal Emitted when the user clicks a menu item.
   */
  @Event() handleMenuItemClick: EventEmitter<{
    label: string;
    hasSubMenu: boolean;
  }>;

  /**
   * @internal Emitted when the user clicks a menu item that triggers a popover menu instance.
   */
  @Event() triggerPopoverMenuInstance: EventEmitter<void>;

  componentWillLoad(): void {
    // This ensures that trigger menu items are always set to the default variant
    if (this.submenuTriggerFor !== undefined && this.variant !== "default") {
      this.variant = "default";
    }
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Menu Item"
    );
  }

  @Listen("click", { capture: true })
  handleHostClick(e: Event): void {
    if (this.disabled) {
      e.stopImmediatePropagation();
    }
  }

  private handleClick = (e: Event): void => {
    if (this.submenuTriggerFor !== undefined) {
      this.triggerPopoverMenuInstance.emit();
    } else if (this.variant === "toggle") {
      e.preventDefault();
      this.toggleChecked
        ? (this.toggleChecked = false)
        : (this.toggleChecked = true);
    }
    this.handleMenuItemClick.emit({
      label: this.label,
      hasSubMenu: !!this.el.submenuTriggerFor,
    });
  };

  private getMenuItemAriaLabel = (): string => {
    let ariaLabel = this.label;

    if (this.description !== undefined) {
      ariaLabel = `${ariaLabel}, ${this.description}`;
    }

    if (this.keyboardShortcut !== undefined) {
      ariaLabel = `${ariaLabel}, ${this.keyboardShortcut}`;
    }

    if (this.variant === "destructive") {
      ariaLabel = `${ariaLabel}, destructive`;
    }

    if (this.submenuTriggerFor !== undefined) {
      ariaLabel = `${ariaLabel}, triggers submenu`;
    }

    if (this.el.classList.contains("ic-popover-submenu-back-button")) {
      ariaLabel = "Go back to parent menu";
    }
    const parentEl = getParentElement(this.el);

    if (
      parentEl.tagName === "IC-MENU-GROUP" &&
      (parentEl as HTMLIcMenuGroupElement).label
    ) {
      return `${ariaLabel}, ${
        (parentEl as HTMLIcMenuGroupElement).label
      } menu group`;
    } else {
      return ariaLabel;
    }
  };

  render() {
    // A helper function that checks if a prop has been defined
    const isPropDefined = (prop: string) => {
      return prop !== undefined ? prop : null;
    };

    // A sub-component to layout the menu information correctly in ic-button
    const MenuItemInformation = () => {
      return (
        <div class="menu-item-info">
          <div class="menu-labels">
            <ic-typography class="menu-item-label">{this.label}</ic-typography>
            {this.keyboardShortcut && (
              <ic-typography variant="caption" class="shortcut">
                {this.keyboardShortcut}
              </ic-typography>
            )}
          </div>
          {this.description && (
            <ic-typography class="menu-item-description" variant="caption">
              {this.description}
            </ic-typography>
          )}
        </div>
      );
    };

    return (
      <Host
        class={{
          ["disabled"]: this.disabled,
        }}
      >
        <li
          role={this.variant === "toggle" ? "menuitemcheckbox" : "menuitem"}
          aria-disabled={`${this.disabled}`}
          aria-checked={
            this.variant === "toggle" && this.toggleChecked === true
              ? true
              : this.variant === "toggle" && this.toggleChecked === false
              ? false
              : undefined
          }
        >
          <ic-button
            disableTooltip
            fullWidth
            variant="tertiary"
            onClick={this.handleClick}
            href={isPropDefined(this.href)}
            hreflang={isPropDefined(this.hreflang)}
            target={isPropDefined(this.target)}
            rel={isPropDefined(this.rel)}
            referrerpolicy={
              this.referrerpolicy !== undefined ? this.referrerpolicy : null
            }
            aria-disabled={`${this.disabled}`}
            aria-label={this.getMenuItemAriaLabel()}
            aria-controls={
              this.submenuTriggerFor !== undefined
                ? `ic-popover-submenu-${this.submenuTriggerFor}`
                : false
            }
            aria-haspopup={
              this.submenuTriggerFor !== undefined ||
              this.el.classList.contains("ic-popover-submenu-back-button")
                ? "menu"
                : false
            }
            aria-owns={
              this.submenuTriggerFor !== undefined
                ? `ic-popover-submenu-${this.submenuTriggerFor}`
                : false
            }
          >
            <div class="focus-border">
              {isSlotUsed(this.el, "icon") && (
                <span class="icon">
                  <slot name="icon"></slot>
                </span>
              )}
              <MenuItemInformation />
              {this.variant === "toggle" && (
                <span
                  class={{
                    ["check-icon"]: true,
                    ["hide"]: !this.toggleChecked,
                  }}
                  aria-hidden="true"
                  innerHTML={Check}
                />
              )}
              {this.submenuTriggerFor !== undefined && (
                <span
                  class={{ ["submenu-icon"]: true }}
                  aria-hidden="true"
                  innerHTML={Chevron}
                />
              )}
            </div>
          </ic-button>
        </li>
      </Host>
    );
  }
}
