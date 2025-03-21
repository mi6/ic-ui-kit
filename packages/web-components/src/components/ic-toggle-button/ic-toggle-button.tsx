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
  @Prop({ mutable: true, reflect: true }) checked?: boolean = false;

  /**
   * If `true`, the toggle button will be in disabled state.
   */
  @Prop({ mutable: true }) disabled?: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * If `true`, the toggle button will fill the width of the container.
   */
  @Prop({ mutable: true }) fullWidth?: boolean = false;

  /**
   * The placement of the icon in relation to the toggle button label.
   */
  @Prop() iconPlacement?: IcIconPlacementOptions = "left";

  /**
   * The label to display in the toggle button. This is required for the default variant of toggle buttons.
   */
  @Prop() label?: string;

  /**
   * If `true`, the toggle button will be in loading state.
   */
  @Prop({ mutable: true }) loading?: boolean = false;

  /**
   * If `true`, the toggle button will display as black in the light theme, and white in dark theme.
   */
  @Prop({ mutable: true }) monochrome?: boolean = false;

  /**
   * The size of the toggle button to be displayed.
   */
  @Prop({ mutable: true }) size?: IcSizes = "medium";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop({ mutable: true }) theme?: IcThemeMode = "inherit";

  /**
   * The position of the tooltip in relation to the toggle button.
   */
  @Prop() tooltipPlacement?: IcButtonTooltipPlacement = "bottom";

  /**
   * The variant of the toggle button.
   */
  @Prop({ reflect: true, mutable: true }) variant?: "default" | "icon" =
    "default";

  /**
   * Emitted when the user clicks a toggle button.
   */
  @Event() icToggleChecked: EventEmitter<{
    checked: boolean;
  }>;

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);

    if (isSlottedInGroup(this.el)) {
      this.loopAttributes();
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

  private loopAttributes = () => {
    const trackedAttributes: string[] = [
      "loading",
      "disabled",
      "full-width",
      "icon-placement",
      "variant",
      "size",
      "theme",
      "monochrome",
    ];
    const parentAttributes = this.el.parentElement?.attributes;
    for (let i = 0; i < trackedAttributes.length; i++) {
      if (
        parentAttributes &&
        parentAttributes.getNamedItem(trackedAttributes[i]) !== null
      ) {
        const attribute = parentAttributes.getNamedItem(trackedAttributes[i]);
        if (attribute) {
          switch (attribute.name) {
            case trackedAttributes[0]:
              this.loading = attribute.value !== "false";
              break;
            case trackedAttributes[1]:
              this.disabled = attribute.value !== "false";
              break;
            case trackedAttributes[2]:
              this.fullWidth = attribute.value !== "false";
              break;
            case trackedAttributes[3]:
              this.iconPlacement = attribute.value as "left" | "right" | "top";
              break;
            case trackedAttributes[4]:
              this.variant = attribute.value as "default" | "icon";
              break;
            case trackedAttributes[5]:
              this.size = attribute.value as IcSizes;
              break;
            case trackedAttributes[6]:
              this.theme = attribute.value as IcThemeMode;
              break;
            case trackedAttributes[7]:
              this.monochrome = attribute.value !== "false";
              break;
          }
        }
      }
    }
  };

  private handleFocus = (ev: FocusEvent) => {
    ev.stopImmediatePropagation();
  };

  private handleClick = (): void => {
    !this.loading &&
      !this.disabled &&
      this.icToggleChecked.emit({
        checked: this.checked!,
      });
  };

  render() {
    return (
      <Host
        class={{
          [`ic-theme-${this.theme}`]: this.theme !== "inherit",
          ["ic-toggle-button-disabled"]: !!this.disabled,
          ["ic-toggle-button-checked"]: !!this.checked,
          ["ic-toggle-button-icon"]: this.variant === "icon",
          [`ic-toggle-button-${this.size}`]: true,
          ["ic-toggle-button-loading"]: !!this.loading,
          ["ic-toggle-button-monochrome"]: !!this.monochrome,
          [`ic-theme-${this.theme}`]: this.theme !== "inherit",
        }}
        onFocus={this.handleFocus}
      >
        <ic-button
          aria-pressed={this.checked!.toString()}
          variant={this.variant === "icon" ? "icon" : "secondary"}
          onClick={this.handleClick}
          title={this.accessibleLabel}
          aria-label={`${
            this.accessibleLabel ? this.accessibleLabel : this.label
          }, ${this.checked ? "ticked" : "unticked"}`}
          disabled={this.disabled}
          size={this.size}
          fullWidth={this.fullWidth}
          loading={this.loading}
          tooltipPlacement={this.tooltipPlacement}
        >
          {this.variant !== "icon" && this.label}
          <slot />
          {isSlotUsed(this.el, "icon") && (
            <slot name="icon" slot={`${this.iconPlacement}-icon`}></slot>
          )}
          {isSlotUsed(this.el, "badge") && (
            <slot name="badge" slot="badge"></slot>
          )}
        </ic-button>
      </Host>
    );
  }
}
