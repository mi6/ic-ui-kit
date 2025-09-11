import {
  Component,
  Element,
  Host,
  Prop,
  Event,
  EventEmitter,
  Listen,
  h,
  Watch,
} from "@stencil/core";
import {
  isSlotUsed,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
  isSlottedInGroup,
} from "../../utils/helpers";
import {
  IcSizes,
  IcThemeMode,
  IcIconPlacementOptions,
  IcButtonTooltipPlacement,
} from "../../utils/types";

const TRACKED_ATTRIBUTES = [
  "loading",
  "disabled",
  "full-width",
  "icon-placement",
  "variant",
  "size",
  "theme",
  "monochrome",
  "outline",
];

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
  @Element() el: HTMLIcToggleButtonElement;

  /**
   * The accessible label that will be applied to the toggle button. This is required for the icon variant of toggle buttons.
   */
  @Prop() accessibleLabel?: string;

  /**
   * If `true`, the toggle button will be in a checked state.
   */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /**
   * If `true`, the toggle button will be in disabled state.
   */
  @Prop({ mutable: true }) disabled = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * If `true`, the toggle button will fill the width of the container.
   */
  @Prop({ mutable: true }) fullWidth = false;

  /**
   * The placement of the icon in relation to the toggle button label.
   */
  @Prop() iconPlacement: IcIconPlacementOptions = "left";

  /**
   * The label to display in the toggle button. This is required for the default variant of toggle buttons.
   */
  @Prop() label?: string;

  /**
   * If `true`, the toggle button will be in loading state.
   */
  @Prop({ mutable: true }) loading = false;

  /**
   * If `true`, the toggle button will display as black in the light theme, and white in dark theme.
   */
  @Prop({ mutable: true }) monochrome = false;

  /**
   * If `true`, the toggle button will display with an outline.
   */
  @Prop({ mutable: true }) outline = true;

  /**
   * The size of the toggle button to be displayed.
   */
  @Prop({ mutable: true }) size: IcSizes = "medium";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop({ mutable: true }) theme: IcThemeMode = "inherit";

  /**
   * The position of the tooltip in relation to the toggle button.
   */
  @Prop() tooltipPlacement: IcButtonTooltipPlacement = "bottom";

  /**
   * The variant of the toggle button.
   */
  @Prop({ reflect: true, mutable: true }) variant: "default" | "icon" =
    "default";

  /**
   * Emitted when the user clicks a toggle button.
   */
  @Event() icToggleChecked: EventEmitter<{
    checked: boolean;
  }>;

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);

    if (!isSlottedInGroup(this.el)) return;

    const parentAttributes = this.el.parentElement?.attributes;
    if (!parentAttributes) return;

    for (let i = 0; i < TRACKED_ATTRIBUTES.length; i++) {
      const attribute = parentAttributes.getNamedItem(TRACKED_ATTRIBUTES[i]);
      if (!attribute) continue;

      switch (attribute.name) {
        case TRACKED_ATTRIBUTES[0]:
          this.loading = attribute.value !== "false";
          break;
        case TRACKED_ATTRIBUTES[1]:
          this.disabled = attribute.value !== "false";
          break;
        case TRACKED_ATTRIBUTES[2]:
          this.fullWidth = attribute.value !== "false";
          break;
        case TRACKED_ATTRIBUTES[3]:
          this.iconPlacement = attribute.value as IcIconPlacementOptions;
          break;
        case TRACKED_ATTRIBUTES[4]:
          this.variant = attribute.value as "default" | "icon";
          break;
        case TRACKED_ATTRIBUTES[5]:
          this.size = attribute.value as IcSizes;
          break;
        case TRACKED_ATTRIBUTES[6]:
          this.theme = attribute.value as IcThemeMode;
          break;
        case TRACKED_ATTRIBUTES[7]:
          this.monochrome = attribute.value !== "false";
          break;
        case TRACKED_ATTRIBUTES[8]:
          this.outline = attribute.value !== "false";
          break;
      }
    }
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

  private handleClick = () => {
    if (!this.loading && !this.disabled) {
      this.icToggleChecked.emit({
        checked: this.checked,
      });
    }
  };

  render() {
    const {
      accessibleLabel,
      checked,
      disabled,
      fullWidth,
      iconPlacement,
      monochrome,
      label,
      loading,
      outline,
      size,
      theme,
      tooltipPlacement,
      variant,
    } = this;

    const iconVariant = variant === "icon";

    return (
      <Host
        class={{
          "ic-toggle-button-checked": checked,
          "ic-toggle-button-disabled": disabled,
          "ic-toggle-button-icon": iconVariant,
          "ic-toggle-button-loading": loading,
          "ic-toggle-button-monochrome": monochrome,
          "ic-toggle-button-full-width": fullWidth,
          "ic-toggle-button-hide-outline": !outline,
          [`ic-toggle-button-${size}`]: true,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        onFocus={this.handleFocus}
      >
        <ic-button
          aria-pressed={`${checked}`}
          variant={iconVariant ? "icon-tertiary" : "secondary"}
          onClick={this.handleClick}
          title={accessibleLabel}
          aria-label={`${accessibleLabel ? accessibleLabel : label}, ${
            checked ? "ticked" : "unticked"
          }`}
          disabled={disabled}
          size={size}
          fullWidth={fullWidth}
          loading={loading}
          tooltipPlacement={tooltipPlacement}
        >
          {!iconVariant && label}
          <slot />
          {isSlotUsed(this.el, "icon") && (
            <slot name="icon" slot={`${iconPlacement}-icon`}></slot>
          )}
          {isSlotUsed(this.el, "badge") && (
            <slot name="badge" slot="badge"></slot>
          )}
        </ic-button>
      </Host>
    );
  }
}
