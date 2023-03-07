import {
  Component,
  Element,
  Host,
  Prop,
  h,
  State,
  Event,
  EventEmitter,
} from "@stencil/core";
import {
  isSlotUsed,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import { IcMenuButtonVariants } from "./ic-menu-button.types";
import Check from "../../assets/check-icon.svg";
import Chevron from "../../assets/chevron-icon.svg";

/**
 * @slot icon - Content will be placed to the left of the menu button label.
 */

@Component({
  tag: "ic-menu-button",
  styleUrl: "ic-menu-button.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class MenuButton {
  @Element() el: HTMLIcMenuButtonElement;

  /**
   * The variant of the menu button.
   */
  @Prop({ mutable: true, reflect: true }) variant: IcMenuButtonVariants =
    "default";
  /**
   * The label to display in the menu button.
   */
  @Prop() label!: string;
  /**
   * The description displayed in the menu button, below the label.
   */
  @Prop() description?: string;
  /**
   * If `true`, the menu button will be in disabled state.
   */
  @Prop() disabled?: boolean = false;
  /**
   * The URL that the link points to. This will render the menu button as an "a" tag.
   */
  @Prop() href?: string;
  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;
  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;
  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string;
  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;
  /**
   * The label describing the keyboard shortcut for a menu button's action.
   */
  @Prop() keyboardShortcut?: string;
  /**
   * This references the popover menu instance that the menu button is a trigger for. If this prop is set, then the variant will always be default.
   */
  @Prop() submenuTriggerFor?: string;

  /**
   * @internal Emitted when item loses focus.
   */
  @Event() childBlur: EventEmitter<void>;

  /**
   * @internal Emitted when the user selects a menu button that triggers a popover menu instance.
   */
  @Event() triggerPopoverMenuInstance: EventEmitter<void>;

  @State() toggleChecked: boolean = false;

  @Event() handleMenuButtonClick: EventEmitter<{
    label: string;
    hasSubMenu: boolean;
  }>;

  private handleClick = (e: Event): void => {
    e.preventDefault();
    if (this.submenuTriggerFor !== undefined) {
      this.triggerPopoverMenuInstance.emit();
    } else if (this.variant === "toggle") {
      this.toggleChecked
        ? (this.toggleChecked = false)
        : (this.toggleChecked = true);
    }
  };

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Menu Button"
    );

    // This ensures that trigger menu buttons are always set to the default variant
    if (this.submenuTriggerFor !== undefined && this.variant !== "default") {
      this.variant = "default";
    }
  }

  render() {
    // A helper function that checks if a prop has been defined
    const isPropDefined = (prop: string) => {
      return prop !== undefined ? prop : null;
    };

    // A sub-component to layout the menu information correctly in ic-button
    const MenuButtonInformation = () => {
      return (
        <div class="menu-button-info">
          <div class="menu-labels">
            <ic-typography class="menu-button-label">
              {this.el.classList.contains("ic-popover-submenu-back-button") && (
                <span class="visually-hidden">Go </span>
              )}
              {this.label}
              {this.el.classList.contains("ic-popover-submenu-back-button") && (
                <span class="visually-hidden"> to previous menu</span>
              )}
            </ic-typography>
            {this.keyboardShortcut && (
              <ic-typography variant="caption" class="shortcut">
                {this.keyboardShortcut}
              </ic-typography>
            )}
          </div>
          {this.description && (
            <ic-typography class="menu-button-description" variant="caption">
              {this.description}
            </ic-typography>
          )}
        </div>
      );
    };

    //const userSetAriaLabel = this.el.shadowRoot.querySelector("li > ic-button");

    // this.el.setAttribute("aria-label",`${this.el.label}. ${userSetAriaLabel? this.el.getAttribute("aria-label") : "no aria"}`)
    // console.log("aria-label", userSetAriaLabel);
    // console.log("aria-label", this.el.getAttribute("aria-label"));

    return (
      <Host
        class={{
          ["disabled"]: this.disabled,
        }}
      >
        <li
          role={this.variant === "toggle" ? "menuitemcheckbox" : "menuitem"}
          aria-disabled={this.disabled ? true : false}
        >
          <ic-button
            disableTooltip
            fullWidth
            disabled={this.disabled}
            variant="tertiary"
            onClick={this.handleClick}
            href={isPropDefined(this.href)}
            hreflang={isPropDefined(this.hreflang)}
            target={isPropDefined(this.target)}
            rel={isPropDefined(this.rel)}
            referrerpolicy={
              this.referrerpolicy !== undefined ? this.referrerpolicy : null
            }
            aria-checked={
              this.variant === "toggle" && this.toggleChecked === true
                ? true
                : this.variant === "toggle" && this.toggleChecked === false
                ? false
                : undefined
            }
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
            {isSlotUsed(this.el, "icon") && (
              <span class="icon">
                <slot name="icon"></slot>
              </span>
            )}
            <MenuButtonInformation />
            {this.variant === "toggle" && (
              <span
                class={{ ["check-icon"]: true, ["hide"]: !this.toggleChecked }}
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
          </ic-button>
        </li>
      </Host>
    );
  }
}
