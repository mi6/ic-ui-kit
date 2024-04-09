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
  Watch,
} from "@stencil/core";
import {
  onComponentRequiredPropUndefined,
  isSlotUsed,
  removeDisabledFalse,
  convertToRGBA,
} from "../../utils/helpers";
import { IcChipAppearance } from "./ic-chip.types";
import { IcColor, IcEmphasisType, IcSizes } from "../../utils/types";
import dismissIcon from "../../assets/dismiss-icon.svg";

/**
 * @slot icon - Content will be rendered at the start of the chip.
 * @slot badge - Badge component overlaying the top right of the chip.
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
   * @deprecated This prop should not be used anymore. Use variant prop instead.
   */
  @Prop() appearance?: IcChipAppearance;

  /**
   * The custom chip colour. This prop will be applied to the chip component if `dismissible` is set to `false`.
   * Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".
   */
  @Prop() customColor?: IcColor = null;

  @Watch("customColor")
  customColorHandler(): void {
    if (!this.dismissible && this.customColor !== null) {
      this.setChipColour();
    }
  }

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
  @Prop() size?: IcSizes = "default";

  /**
   * If `true`, the outlined variant of chip will have a transparent background rather than white.
   */
  @Prop() transparentBackground?: boolean = true;

  /**
   * The emphasis of the chip.
   */
  @Prop() variant?: IcEmphasisType = "filled";

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

    if (!this.dismissible && this.customColor !== null) {
      this.setChipColour();
    }

    if (this.appearance === "outline") {
      this.variant = "outlined";
    }
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

  private setChipColour = () => {
    if (convertToRGBA(this.customColor) !== null) {
      const colorRGBA = convertToRGBA(this.customColor);
      const rgbaValue = `rgba(${colorRGBA.r.toString()}, ${colorRGBA.g.toString()}, ${colorRGBA.b.toString()}, ${colorRGBA.a.toString()})`;

      const brightness =
        (colorRGBA.r * 299 + colorRGBA.g * 587 + colorRGBA.b * 114) / 1000;
      const foregroundColour =
        brightness > 133.3505
          ? "var(--ic-architectural-black)"
          : "var(--ic-architectural-white)";

      this.el.setAttribute(
        "style",
        `--chip-custom-color: ${rgbaValue}; --chip-custom-foreground-color: ${foregroundColour};`
      );
    }
  };

  render() {
    const {
      label,
      appearance,
      variant,
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
            [`${appearance}`]: appearance !== undefined,
            [`${variant}`]: true,
            [`${size}`]: true,
            ["disabled"]: disabled,
            ["dismissible"]: dismissible,
            ["hovered"]: isHovered,
            ["white-background"]:
              this.variant === "outlined" && !this.transparentBackground,
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
          {isSlotUsed(this.el, "badge") && <slot name="badge"></slot>}
        </div>
      )
    );
  }
}
