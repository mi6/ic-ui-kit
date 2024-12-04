import {
  Component,
  Element,
  Host,
  Prop,
  Event,
  EventEmitter,
  Listen,
  h,
  forceUpdate,
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
  private hostMutationObserver: MutationObserver = null;
  private parentGroup?: HTMLIcToggleButtonGroupElement;

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
  @Prop() size?: IcSizes = "default";

  /**
   * If `true`, the toggle button will be in a checked state.
   */
  @Prop({ mutable: true, reflect: true }) toggleChecked: boolean = false;

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

    this.parentGroup = this.getParentToggleGroup();

    this.iconPosition = this.iconPlacement ?? this.parentGroup?.iconPlacement;
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
    if (typeof MutationObserver !== "undefined") {
      this.hostMutationObserver = new MutationObserver(
        this.hostMutationCallback
      );
      this.hostMutationObserver.observe(this.el, {
        childList: true,
      });
    }
  }

  disconnectedCallback(): void {
    if (
      this.hostMutationObserver !== null &&
      this.hostMutationObserver !== undefined
    ) {
      this.hostMutationObserver.disconnect();
    }
  }

  private hostMutationCallback = (): void => {
    forceUpdate(this);
  };

  @Listen("click", { capture: true })
  handleHostClick(e: Event): void {
    if (this.disabled || this.parentGroup?.disabled) {
      e.stopImmediatePropagation();
    } else if (!(this.loading || this.parentGroup?.loading)) {
      this.toggleChecked = !this.toggleChecked;
    }
  }

  private handleFocus = (ev: FocusEvent) => {
    ev.stopImmediatePropagation();
  };

  private getParentToggleGroup = (): HTMLIcToggleButtonGroupElement | null => {
    if (this.el.parentElement.nodeName === "IC-TOGGLE-BUTTON-GROUP") {
      return this.el.parentElement as HTMLIcToggleButtonGroupElement;
    }
    return null;
  };

  private handleClick = (): void => {
    !(this.loading || this.parentGroup?.loading) &&
      !(this.disabled || this.parentGroup?.disabled) &&
      this.icToggleChecked.emit({
        checked: this.toggleChecked,
      });
  };

  render() {
    return (
      <Host
        class={{
          ["disabled"]: this.disabled || this.parentGroup?.disabled,
          ["checked"]: this.toggleChecked,
          [`${this.parentGroup?.appearance ?? this.appearance}`]: true,
          ["icon"]: this.variant === "icon",
          [`${this.parentGroup?.size ?? this.size}`]: true,
          ["loading"]: this.loading || this.parentGroup?.loading,
        }}
        onFocus={this.handleFocus}
      >
        <ic-button
          aria-pressed={this.toggleChecked.toString()}
          variant={this.variant === "icon" ? "icon" : "secondary"}
          onClick={this.handleClick}
          title={this.accessibleLabel}
          aria-label={`${
            this.accessibleLabel ? this.accessibleLabel : this.label
          }, ${this.toggleChecked ? "ticked" : "unticked"}`}
          disabled={this.disabled || this.parentGroup?.disabled}
          appearance={this.parentGroup?.appearance ?? this.appearance}
          size={this.parentGroup?.size ?? this.size}
          fullWidth={this.fullWidth}
          loading={this.loading || this.parentGroup?.loading}
          aria-disabled={`${this.disabled}`}
        >
          {this.variant !== "icon" && this.label}
          <slot />
          {isSlotUsed(this.el, "icon") && (
            <slot
              name="icon"
              slot={`${
                this.iconPosition ? `${this.iconPosition}-icon` : "icon"
              }`}
            ></slot>
          )}
          {isSlotUsed(this.el, "badge") && (
            <slot name="badge" slot="badge"></slot>
          )}
        </ic-button>
      </Host>
    );
  }
}
