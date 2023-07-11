import {
  Component,
  Element,
  Host,
  Method,
  Prop,
  State,
  h,
} from "@stencil/core";
import {
  IcBadgePositions,
  IcBadgeTypes,
  IcBadgeVariants,
  IcColor,
} from "./ic-badge.types";
import {
  IcColorRGBA,
  IcSizes,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "../../utils/types";
import {
  getCssProperty,
  getParentElement,
  getParentElementType,
  hexToRgba,
  rgbaStrToObj,
} from "../../utils/helpers";

@Component({
  tag: "ic-badge",
  styleUrl: "ic-badge.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Badge {
  private customColorRGBA: IcColorRGBA;
  private foregroundColour: IcThemeForeground;

  @Element() el: HTMLIcBadgeElement;

  @State() visible: boolean = true;

  /**
   * The accessible label of the badge component to provide context for screen reader users.
   */
  @Prop() accessibleLabel?: string;

  /**
   * The custom badge colour. This will only style the badge component if variant="custom".
   * Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".
   */
  @Prop() customColor?: IcColor = null;

  /**
   * The maximum number shown on the badge appended with a +.
   * This will only be displayed if type="text" and textLabel is not empty.
   */
  @Prop() maxNumber?: number;

  /**
   * The positioning of the badge in reference to the parent element.
   */
  @Prop() position?: IcBadgePositions = "far";

  /**
   * The size of the badge to be displayed.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * The text displayed in the badge. This will only be displayed if type="text".
   */
  @Prop() textLabel?: string;

  /**
   * The type of badge to be displayed.
   */
  @Prop() type?: IcBadgeTypes = "text";

  /**
   * The variant of the badge to be displayed.
   */
  @Prop() variant?: IcBadgeVariants = "neutral";

  componentWillLoad(): void {
    this.variant === "custom" && this.setBadgeColour();

    this.getBadgeForeground();

    this.isAccessibleLabelDefined() && this.setAccessibleLabel();
  }

  /**
   * Use to show the badge.
   */
  @Method()
  async showBadge(): Promise<void> {
    this.visible = true;
  }

  /**
   * Use to hide the badge.
   */
  @Method()
  async hideBadge(): Promise<void> {
    this.visible = false;
  }

  private setBadgeColour = () => {
    let colorRGBA = null;
    if (this.customColor !== null) {
      const firstChar = this.customColor.slice(0, 1);
      if (firstChar === "#") {
        colorRGBA = hexToRgba(this.customColor);
      } else if (firstChar.toLowerCase() === "r") {
        colorRGBA = rgbaStrToObj(this.customColor);
      }
      this.customColorRGBA = colorRGBA;
      this.el.style.backgroundColor = `rgba(${colorRGBA.r.toString()}, ${colorRGBA.g.toString()}, ${colorRGBA.b.toString()}, ${colorRGBA.a.toString()})`;
    }
  };

  private getBadgeForeground = () => {
    let red: number;
    let green: number;
    let blue: number;

    switch (this.variant) {
      case "custom":
        red = this.customColorRGBA.r;
        green = this.customColorRGBA.g;
        blue = this.customColorRGBA.b;
        break;
      case "error":
        red = parseInt(getCssProperty("--ic-status-error-r"));
        green = parseInt(getCssProperty("--ic-status-error-g"));
        blue = parseInt(getCssProperty("--ic-status-error-b"));
        break;
      case "success":
        red = parseInt(getCssProperty("--ic-status-success-r"));
        green = parseInt(getCssProperty("--ic-status-success-g"));
        blue = parseInt(getCssProperty("--ic-status-success-b"));
        break;
      case "warning":
        red = parseInt(getCssProperty("--ic-status-warning-r"));
        green = parseInt(getCssProperty("--ic-status-warning-g"));
        blue = parseInt(getCssProperty("--ic-status-warning-b"));
        break;
      case "info": {
        const info = hexToRgba(getCssProperty("--ic-status-info"));
        red = info.r;
        green = info.g;
        blue = info.b;
        break;
      }
      case "neutral": {
        const neutral = hexToRgba(getCssProperty("--ic-architectural-500"));
        red = neutral.r;
        green = neutral.g;
        blue = neutral.b;
        break;
      }
      case "light": {
        const light = hexToRgba(getCssProperty("--ic-architectural-40"));
        red = light.r;
        green = light.g;
        blue = light.b;
        break;
      }
    }

    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    this.foregroundColour =
      brightness > 133.3505
        ? IcThemeForegroundEnum.Dark
        : IcThemeForegroundEnum.Light;
  };

  private getTextLabel = () => {
    let label;
    if (this.textLabel !== null) {
      if (this.maxNumber !== null) {
        label =
          Number(this.textLabel) > this.maxNumber
            ? `${this.maxNumber}+`
            : this.textLabel;
      } else {
        label = this.textLabel;
      }
    }
    return label;
  };

  private setAccessibleLabel = () => {
    if (getParentElement(this.el) !== null) {
      if (getParentElementType(this.el) === "IC-TAB") {
        getParentElement(this.el).setAttribute("aria-describedby", "badge");
      } else {
        getParentElement(
          this.el
        ).ariaLabel = `badge displaying ${this.accessibleLabel}`;
      }
    }
  };

  private isAccessibleLabelDefined = () => {
    return this.accessibleLabel !== undefined && this.accessibleLabel !== null;
  };

  render() {
    const { position, size, type, variant, foregroundColour, visible } = this;

    return (
      <Host
        class={{
          [`${position}`]: true,
          [`${size}`]: true,
          [`${variant}`]: true,
          [`${type}`]: true,
          [`foreground-${foregroundColour}`]: foregroundColour !== null,
          ["show"]: visible,
          ["hide"]: !visible,
        }}
        id="badge"
        aria-label={
          this.isAccessibleLabelDefined() &&
          `badge displaying ${this.accessibleLabel}`
        }
      >
        {type === "icon" && <slot name="badge-icon"></slot>}
        {type === "text" && (
          <ic-typography variant={size === "small" ? "badge-small" : "badge"}>
            {this.getTextLabel()}
          </ic-typography>
        )}
      </Host>
    );
  }
}
