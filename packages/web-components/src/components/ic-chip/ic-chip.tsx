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
  Host,
} from "@stencil/core";
import {
  onComponentRequiredPropUndefined,
  isSlotUsed,
  removeDisabledFalse,
  convertToRGBA,
  isElInAGGrid,
  getBrandForegroundAppearance,
  renderDynamicChildSlots,
} from "../../utils/helpers";
import {
  IcBrandForegroundNoDefault,
  IcColor,
  IcEmphasisType,
  IcSizes,
  IcThemeMode,
} from "../../utils/types";
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
  private buttonEl?: HTMLButtonElement;
  private hostMutationObserver?: MutationObserver;

  @Element() el: HTMLIcChipElement;

  @State() foregroundColor: IcBrandForegroundNoDefault | null = null;
  @State() hovered = false;
  @State() visible = true;

  /**
   * The custom chip colour. This will override the theme colour.
   * Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".
   */
  @Prop() customColor?: IcColor;
  @Watch("customColor")
  customColorHandler(): void {
    const colorRGBA = this.customColor && convertToRGBA(this.customColor);
    if (!colorRGBA) {
      this.foregroundColor = null;
      return;
    }

    const { r, g, b, a } = colorRGBA;
    this.foregroundColor = getBrandForegroundAppearance(
      (r * 299 + g * 587 + b * 114) / 1000
    );
    this.el.setAttribute(
      "style",
      `--chip-custom-color: rgba(${r}, ${g}, ${b}, ${a});`
    );
  }

  /**
   * If `true`, the chip will appear disabled.
   */
  @Prop() disabled = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * If `true`, the chip will have a close button at the end to dismiss it.
   */
  @Prop() dismissible = false;

  /**
   * The text in the dismiss button tooltip and aria label. Makes the user aware of the action resulting from clicking the 'Dismiss chip' button.
   */
  @Prop() dismissLabel = "Dismiss";

  /**
   * The text rendered within the chip.
   */
  @Prop() label!: string;

  /**
   * The size of the chip.
   */
  @Prop() size: IcSizes = "medium";
  /**
   * Sets the chip to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.
   * Setting the "customColor" prop will override this.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * If `true`, the outlined variant of chip will have a transparent background rather than the theme defined color.
   */
  @Prop() transparentBackground = true;

  /**
   * The emphasis of the chip.
   */
  @Prop() variant: IcEmphasisType = "filled";

  /**
   * Is emitted when the user dismisses the chip.
   */
  @Event() icDismiss: EventEmitter<void>;

  disconnectedCallback(): void {
    this.hostMutationObserver?.disconnect();
  }

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);
    this.customColorHandler();
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Chip"
    );

    this.hostMutationObserver = new MutationObserver((mutationList) =>
      renderDynamicChildSlots(mutationList, ["icon", "badge"], this)
    );
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });
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
    this.buttonEl?.focus();
  }

  private dismissAction = () => {
    this.icDismiss.emit();
  };

  private mouseEnterHandler = () => {
    this.hovered = true;
  };

  private mouseLeaveHandler = () => {
    this.hovered = false;
  };

  render() {
    const {
      label,
      variant,
      size,
      dismissible,
      visible,
      disabled,
      hovered,
      theme,
      foregroundColor,
      dismissLabel,
      transparentBackground,
    } = this;

    const ariaLabel = `${label} chip`;

    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
          [`ic-chip-${foregroundColor}-text`]:
            variant === "filled" && !!foregroundColor,
        }}
      >
        {visible && (
          <div
            class={{
              chip: true,
              [`${variant}`]: true,
              [`${size}`]: true,
              disabled,
              dismissible,
              hovered,
              "non-transparent":
                variant === "outlined" && !transparentBackground,
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
              class={{ label: true, "in-ag-grid": isElInAGGrid(this.el) }}
            >
              <span>{label}</span>
            </ic-typography>
            {dismissible && (
              <ic-tooltip
                label={dismissLabel}
                target="dismiss-icon"
                class={{ "tooltip-disabled": disabled }}
              >
                <button
                  id="dismiss-icon"
                  class="dismiss-icon"
                  ref={(el) => (this.buttonEl = el)}
                  aria-label={`${dismissLabel} ${ariaLabel}`}
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
        )}
        {dismissible && (
          <div class="sr-only" aria-live="polite">
            {!visible ? `Dismissed ${ariaLabel}` : ""}
          </div>
        )}
      </Host>
    );
  }
}
