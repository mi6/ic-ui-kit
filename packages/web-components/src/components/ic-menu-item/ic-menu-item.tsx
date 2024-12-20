import {
  Component,
  Element,
  Host,
  Prop,
  h,
  Event,
  EventEmitter,
  Listen,
} from "@stencil/core";
import {
  isSlotUsed,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
  isPropDefined,
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

  /**
   * If `true`, the menu item will be in a checked state. This is only applicable when variant is set to `toggle`.
   */
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

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
  @Prop() keyboardShortcutLabel?: string;

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
  @Event() handleMenuItemClick: EventEmitter<HTMLIcMenuItemElement>;

  /**
   * Emitted when the user clicks a menu item that is set to the toggle variant.
   */
  @Event() icToggleChecked: EventEmitter<{
    checked: boolean;
  }>;

  /**
   * @internal Emitted when the user clicks a menu item that triggers a popover menu instance.
   */
  @Event() triggerPopoverMenuInstance: EventEmitter<void>;

  componentWillLoad(): void {
    // This ensures that trigger menu items are always set to the default variant
    if (isPropDefined(this.submenuTriggerFor) && this.variant !== "default") {
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
    if (isPropDefined(this.submenuTriggerFor)) {
      this.triggerPopoverMenuInstance.emit();
    } else if (this.variant === "toggle") {
      e.preventDefault();
      this.checked = !this.checked;
      this.icToggleChecked.emit({
        checked: this.checked,
      });
    }
    this.handleMenuItemClick.emit(this.el);
  };

  private getMenuItemAriaLabel = (): string => {
    let ariaLabel = this.label;

    if (isPropDefined(this.description)) {
      ariaLabel = `${ariaLabel}, ${this.description}`;
    }

    if (isPropDefined(this.keyboardShortcutLabel)) {
      ariaLabel = `${ariaLabel}, ${this.keyboardShortcutLabel}`;
    }

    if (this.variant === "destructive") {
      ariaLabel = `${ariaLabel}, destructive`;
    }

    if (isPropDefined(this.submenuTriggerFor)) {
      ariaLabel = `${ariaLabel}, triggers submenu`;
    }

    if (this.el.classList.contains("ic-popover-submenu-back-button")) {
      ariaLabel = "Go back to parent menu";
    }
    const parentEl = this.el.parentElement;

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
    const { label, description, keyboardShortcutLabel, variant, disabled } =
      this;
    // A sub-component to layout the menu information correctly in ic-button
    const MenuItemInformation = () => {
      return (
        <div class="menu-item-info">
          <div class="menu-labels">
            <ic-typography class="menu-item-label">{label}</ic-typography>
            {keyboardShortcutLabel && (
              <ic-typography variant="caption" class="shortcut">
                {keyboardShortcutLabel}
              </ic-typography>
            )}
          </div>
          {description && (
            <ic-typography class="menu-item-description" variant="caption">
              {description}
            </ic-typography>
          )}
        </div>
      );
    };

    return (
      <Host
        class={{
          ["ic-menu-item-disabled"]: disabled,
        }}
      >
        <li
          role={variant === "toggle" ? "menuitemcheckbox" : "menuitem"}
          aria-disabled={`${disabled}`}
          aria-checked={
            variant === "toggle" ? (this.checked ? "true" : "false") : undefined
          }
          {...(variant === "toggle" && {
            onClick: this.handleClick,
            tabIndex: -1,
          })}
        >
          {this.variant === "toggle" && (
            <div class="focus-border">
              {isSlotUsed(this.el, "icon") && (
                <span class="icon">
                  <slot name="icon"></slot>
                </span>
              )}
              <MenuItemInformation />
              <span
                class={{
                  ["check-icon"]: true,
                  ["hide"]: !this.checked,
                }}
                aria-hidden="true"
                innerHTML={Check}
              />
            </div>
          )}
          {variant !== "toggle" && (
            <ic-button
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
              aria-haspopup={
                isPropDefined(this.submenuTriggerFor) ||
                this.el.classList.contains("ic-popover-submenu-back-button")
                  ? "menu"
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
                {isPropDefined(this.submenuTriggerFor) && (
                  <span
                    class={{ ["submenu-icon"]: true }}
                    aria-hidden="true"
                    innerHTML={Chevron}
                  />
                )}
              </div>
            </ic-button>
          )}
        </li>
      </Host>
    );
  }
}
