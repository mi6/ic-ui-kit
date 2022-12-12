import {
  Component,
  h,
  Prop,
  State,
  Listen,
  Event,
  EventEmitter,
  Element,
} from "@stencil/core";
import {
  onComponentRequiredPropUndefined,
  isSlotUsed,
} from "../../utils/helpers";
import { IcChipAppearance, IcChipSizes } from "./ic-chip.types";
import dismissIcon from "../../assets/dismiss-icon.svg";

/**
 * @slot icon - Content will be rendered at the start of the chip.
 */
@Component({
  tag: "ic-chip",
  styleUrl: "ic-chip.css",
  shadow: true,
})
export class Chip {
  @Element() el: HTMLIcChipElement;

  /**
   * The text rendered within the chip.
   */
  @Prop() label!: string;
  /**
   * The emphasis of the chip.
   */
  @Prop() appearance?: IcChipAppearance = "filled";
  /**
   * The size of the chip.
   */
  @Prop() size?: IcChipSizes = "default";
  /**
   * If `true`, the chip will have a close button at the end to dismiss it.
   */
  @Prop() dismissible?: boolean = false;
  /**
   * If `true`, the chip will appear disabled.
   */
  @Prop() disabled?: boolean = false;

  @State() visible: boolean = true;

  @State() isHovered: boolean = false;

  @Listen("dismiss", { capture: true })
  handleClick(): void {
    this.visible = !this.visible;
  }
  /**
   * Is emitted when the user dismisses the chip.
   */
  @Event() dismiss: EventEmitter<void>;

  private dismissAction = (): void => {
    this.dismiss.emit();
  };

  private mouseEnterHandler = (): void => {
    this.isHovered = true;
  };

  private mouseLeaveHandler = (): void => {
    this.isHovered = false;
  };

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Chip"
    );
  }

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
