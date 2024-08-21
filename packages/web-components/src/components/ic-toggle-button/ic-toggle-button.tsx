import {
  Component,
  Element,
  Host,
  Prop,
  Event,
  EventEmitter,
  Listen,
  h,
} from "@stencil/core";
import {
  isSlotUsed,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
} from "../../utils/helpers";
import { IcSizes, IcThemeForeground } from "../../utils/types";

/**
 * @slot icon - Content will be displayed alongside the toggle button label.
 * @slot badge - Badge component overlaying the top right of the toggle button.
 */

@Component({
  tag: "ic-toggle-button",
  styleUrl: "ic-toggle-button.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class ToggleButton {
  private iconPosition: "left" | "right" | "top";

  @Element() el: HTMLIcToggleButtonElement;

  /**
   * The accessible label that will be applied to the toggle button. This is required for the icon variant of toggle buttons.
   */
  @Prop() accessibleLabel?: string;

  /**
   * The appearance of the toggle button.
   */
  @Prop() appearance?: IcThemeForeground = "default";

  /**
   * If `true`, the toggle button will be in disabled state.
   */
  @Prop() disabled?: boolean = false;

  /**
   * If `true`, the toggle button will fill the width of the container.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * The placement of the icon in relation to the toggle button label.
   */
  @Prop() iconPlacement?: "left" | "right" | "top";

  /**
   * The label to display in the toggle button. This is required for the default variant of toggle buttons.
   */
  @Prop() label?: string;

  /**
   * If `true`, the toggle button will be in loading state.
   */
  @Prop() loading?: boolean = false;

  /**
   * The size of the toggle button to be displayed.
   */
  @Prop() size?: IcSizes = "medium";

  /**
   * If `true`, the toggle button will be in a checked state.
   */
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

  /**
   * The variant of the toggle button.
   */
  @Prop({ reflect: true }) variant: "default" | "icon" = "default";

  /**
   * Emitted when the user clicks a toggle button.
   */
  @Event() icToggleChecked: EventEmitter<{
    checked: boolean;
  }>;

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);

    const parentIconPlacement = (
      this.el.parentElement as HTMLIcToggleButtonGroupElement
    ).iconPlacement;
    this.iconPosition = this.iconPlacement || parentIconPlacement || "left";
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [
        {
          prop: this.variant === "icon" ? this.accessibleLabel : this.label,
          propName: this.variant === "icon" ? "accessible-label" : "label",
        },
      ],
      "Toggle button"
    );
  }

  @Listen("click", { capture: true })
  handleHostClick(e: Event): void {
    if (this.disabled) {
      e.stopImmediatePropagation();
    } else if (!this.loading) {
      this.checked = !this.checked;
    }
  }

  private handleFocus = (ev: FocusEvent) => {
    ev.stopImmediatePropagation();
  };

  private handleClick = (): void => {
    !this.loading &&
      !this.disabled &&
      this.icToggleChecked.emit({
        checked: this.checked,
      });
  };

  render() {
    return (
      <Host
        class={{
          ["ic-toggle-button-disabled"]: this.disabled,
          ["ic-toggle-button-checked"]: this.checked,
          [`ic-toggle-button-${this.appearance}`]: true,
          ["ic-toggle-button-icon"]: this.variant === "icon",
          [`ic-toggle-button-${this.size}`]: true,
          ["ic-toggle-button-loading"]: this.loading,
        }}
        onFocus={this.handleFocus}
      >
        <ic-button
          aria-pressed={this.checked.toString()}
          variant={this.variant === "icon" ? "icon" : "secondary"}
          onClick={this.handleClick}
          title={this.accessibleLabel}
          aria-label={`${
            this.accessibleLabel ? this.accessibleLabel : this.label
          }, ${this.checked ? "ticked" : "unticked"}`}
          disabled={this.disabled}
          appearance={this.appearance}
          size={this.size}
          fullWidth={this.fullWidth}
          loading={this.loading}
          aria-disabled={`${this.disabled}`}
        >
          {this.variant !== "icon" && this.label}
          <slot />
          {isSlotUsed(this.el, "icon") && (
            <slot name="icon" slot={`${this.iconPosition}-icon`}></slot>
          )}
          {isSlotUsed(this.el, "badge") && (
            <slot name="badge" slot="badge"></slot>
          )}
        </ic-button>
      </Host>
    );
  }
}
