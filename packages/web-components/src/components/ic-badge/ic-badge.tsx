import { Component, Element, Host, Prop, Watch, h } from "@stencil/core";
import {
  IcBadgePositions,
  IcBadgeTypes,
  IcBadgeVariants,
} from "./ic-badge.types";
import {
  IcSizes,
  IcThemeForeground,
  IcColor,
  IcThemeMode,
} from "../../utils/types";
import {
  convertToRGBA,
  getThemeForegroundColor,
  isPropDefined,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";

/**
 * @slot badge-icon - Icon will be rendered inside the badge if type is set to icon.
 */
@Component({
  tag: "ic-badge",
  styleUrl: "ic-badge.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Badge {
  private ariaLabel: string = null;
  private foregroundColour: IcThemeForeground;
  private parentAriaLabel: string;

  @Element() el: HTMLIcBadgeElement;

  /**
   * The accessible label of the badge component to provide context for screen reader users.
   */
  @Prop() accessibleLabel?: string;

  @Watch("accessibleLabel")
  accessibleLabelHandler(): void {
    this.setAccessibleLabel();
  }

  /**
   * The custom badge colour. This will only style the badge component if variant="custom".
   * Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".
   */
  @Prop() customColor?: IcColor = null;

  @Watch("customColor")
  customColorHandler(): void {
    this.variant === "custom" && this.setBadgeColour();
  }

  /**
   * The maximum number shown on the badge appended with a +.
   * This will only be displayed if type="text" and label is not empty.
   */
  @Prop() maxNumber?: number;

  /**
   * The positioning of the badge in reference to the parent element.
   */
  @Prop() position?: IcBadgePositions = "far";

  /**
   * The size of the badge to be displayed.
   */
  @Prop() size?: IcSizes = "medium";

  /**
   * The text displayed in the badge. This will only be displayed if type="text".
   */
  @Prop() label?: string;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The type of badge to be displayed.
   */
  @Prop() type?: IcBadgeTypes = "text";

  /**
   * The variant of the badge to be displayed.
   */
  @Prop() variant?: IcBadgeVariants = "neutral";

  @Watch("variant")
  variantHandler(): void {
    if (this.variant === "custom") {
      this.setBadgeColour();
    }
  }

  /**
   * If `true`, the badge will be displayed.
   */
  @Prop() visible: boolean = true;

  @Watch("visible")
  visibleHandler(): void {
    this.setAccessibleLabel();
  }

  componentWillLoad(): void {
    this.variant === "custom" && this.setBadgeColour();

    const ariaLabel = this.el.parentElement?.ariaLabel;
    if (ariaLabel) this.parentAriaLabel = ariaLabel;
    this.setAccessibleLabel();
  }

  componentDidLoad(): void {
    this.type === "text" &&
      onComponentRequiredPropUndefined(
        [{ prop: this.label, propName: "label" }],
        "Badge"
      );
  }

  private setBadgeColour = () => {
    const colorRGBA = convertToRGBA(this.customColor);

    if (colorRGBA) {
      const { r, g, b, a } = colorRGBA;
      this.el.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
      this.foregroundColour = getThemeForegroundColor(
        (r * 299 + g * 587 + b * 114) / 1000
      );
    }
  };

  private getLabel = () =>
    this.maxNumber && Number(this.label) > this.maxNumber
      ? `${this.maxNumber}+`
      : this.label;

  // Set aria-label on badge and / or parent element
  // Aria-describedby seems to not work, probably due to shadow DOM
  private setAccessibleLabel = () => {
    const parentEl = this.el.parentElement;
    const defaultAriaLabel = this.isAccessibleLabelDefined()
      ? this.accessibleLabel
      : this.label || "with badge being displayed";

    if (parentEl) {
      const { tagName } = parentEl;
      if (
        tagName !== "IC-CARD" &&
        (tagName !== "IC-TAB" || (tagName === "IC-TAB" && this.parentAriaLabel))
      ) {
        const ariaLabelPrefix = this.parentAriaLabel
          ? `${this.parentAriaLabel} ,`
          : "";
        parentEl.ariaLabel = this.visible
          ? `${ariaLabelPrefix} ${defaultAriaLabel}`
          : undefined;
      } else {
        this.ariaLabel = `, ${defaultAriaLabel}`;
      }
    }
  };

  private isAccessibleLabelDefined = () =>
    isPropDefined(this.accessibleLabel) && this.accessibleLabel !== null;

  render() {
    const {
      ariaLabel,
      el,
      foregroundColour,
      getLabel,
      position,
      size,
      label,
      type,
      variant,
      visible,
      theme,
    } = this;

    return (
      <Host
        class={{
          [`ic-badge-${position}`]: true,
          [`ic-badge-${size}`]: true,
          [`ic-badge-${variant}`]: true,
          [`ic-badge-${type}`]: true,
          [`ic-badge-foreground-${foregroundColour}`]:
            foregroundColour !== null && variant === "custom",
          [`${visible ? "ic-badge-show" : "ic-badge-hide"}`]: true,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        id={el.id || null}
        aria-label={ariaLabel}
        role="status"
      >
        {type === "icon" && <slot name="badge-icon"></slot>}
        {type === "text" && label && (
          <ic-typography variant={size === "small" ? "badge-small" : "badge"}>
            {getLabel()}
          </ic-typography>
        )}
        {type === "dot" && <span class="sr-only">badge</span>}
      </Host>
    );
  }
}
