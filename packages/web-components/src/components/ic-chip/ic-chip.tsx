import {
  Component,
  h,
  Prop,
  State,
  Listen,
  Event,
  EventEmitter,
  Element,
  Method,
} from "@stencil/core";
import {
  onComponentRequiredPropUndefined,
  isSlotUsed,
  removeDisabledFalse,
} from "../../utils/helpers";
import { IcChipAppearance, IcChipSizes } from "./ic-chip.types";
import dismissIcon from "../../assets/dismiss-icon.svg";

/**
 * @slot icon - Content will be rendered at the start of the chip.
 */
@Component({
  tag: "ic-chip",
  styleUrl: "ic-chip.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Chip {
  @Element() el: HTMLIcChipElement;

  @State() isHovered: boolean = false;
  @State() visible: boolean = true;

  /**
   * The emphasis of the chip.
   */
  @Prop() appearance?: IcChipAppearance = "filled";

  /**
   * If `true`, the chip will appear disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * If `true`, the chip will have a close button at the end to dismiss it.
   */
  @Prop() dismissible?: boolean = false;

  /**
   * The text rendered within the chip.
   */
  @Prop() label!: string;

  /**
   * The size of the chip.
   */
  @Prop() size?: IcChipSizes = "default";

  /**
   * @deprecated This event should not be used anymore. Use icDismiss instead.
   */
  @Event() dismiss: EventEmitter<void>;

  /**
   * Is emitted when the user dismisses the chip.
   */
  @Event() icDismiss: EventEmitter<void>;

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    this.dismissible &&
      this.el.shadowRoot
        .querySelector("span.ic-tooltip-label")
        ?.setAttribute("aria-hidden", "true");
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Chip"
    );
  }

  @Listen("icDismiss", { capture: true })
  handleClick(): void {
    this.visible = !this.visible;
  }

  /**
   * Sets focus on the chip.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.el.shadowRoot.querySelector("button")) {
      this.el.shadowRoot.querySelector("button").focus();
    }
  }

  private dismissAction = (): void => {
    this.dismiss.emit();
    this.icDismiss.emit();
  };

  private mouseEnterHandler = (): void => {
    this.isHovered = true;
  };

  private mouseLeaveHandler = (): void => {
    this.isHovered = false;
  };

  render() {
    const {
      label,
      appearance,
      size,
      dismissible,
      visible,
      disabled,
      isHovered,
    } = this;

    return (
      visible && (
        <div
          class={{
            ["chip"]: true,
            [`${appearance}`]: true,
            [`${size}`]: true,
            ["disabled"]: disabled,
            ["dismissible"]: dismissible,
            ["hovered"]: isHovered,
          }}
        >
          {isSlotUsed(this.el, "icon") && (
            <div class="icon">
              <slot name="icon" />
            </div>
          )}
          <ic-typography
            variant="label"
            apply-vertical-margins={false}
            class="label"
          >
            <span>{label}</span>
          </ic-typography>
          {dismissible && (
            <ic-tooltip
              label="Dismiss"
              target="dismiss-icon"
              class={{ ["tooltip-disabled"]: disabled }}
            >
              <button
                id="dismiss-icon"
                class={{
                  ["dismiss-icon"]: true,
                }}
                aria-label={`Dismiss ${label} chip`}
                disabled={disabled}
                tabindex={disabled ? -1 : 0}
                onClick={this.dismissAction}
                onMouseEnter={this.mouseEnterHandler}
                onMouseLeave={this.mouseLeaveHandler}
                innerHTML={dismissIcon}
              ></button>
            </ic-tooltip>
          )}
        </div>
      )
    );
  }
}
