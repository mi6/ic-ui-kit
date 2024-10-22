import {
  h,
  Component,
  Host,
  Listen,
  State,
  Prop,
  Element,
} from "@stencil/core";

import {
  getThemeForegroundColor,
  isPropDefined,
  slotHasContent,
} from "../../utils/helpers";

import {
  IcOrientation,
  IcThemeForeground,
  IcThemeMode,
} from "../../utils/types";

import {
  IcDividerLabelPlacement,
  IcDividerStyles,
  IcDividerWeights,
} from "./ic-divider.types";

@Component({
  tag: "ic-divider",
  styleUrl: "ic-divider.css",
  scoped: true,
})
export class Divider {
  @Element() el: HTMLIcDividerElement;

  @State() foregroundColor: IcThemeForeground = getThemeForegroundColor();

  /**
   * The line style of the divider.
   */
  @Prop() borderStyle: IcDividerStyles = "solid";

  /**
   * The label for the divider.
   */
  @Prop() label?: string;

  /**
   * The position the label is placed on the divider. `Left` and `right` placement is only applicable when orientation is set to `horizontal`. `Top` and `bottom` placement is only applicable when orientation is set to `vertical`. `Center` placement is applicable for both orientations.
   */
  @Prop() labelPlacement?: IcDividerLabelPlacement = "center";

  /**
   *If `true`, the breadcrumb will display as black in the light theme, and white in the dark theme.
   */
  @Prop({ mutable: true, reflect: true }) monochrome?: boolean = false;

  /**
   * The orientation of the divider.
   */
  @Prop() orientation: IcOrientation = "horizontal";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop({ mutable: true }) theme?: IcThemeMode | IcThemeForeground = "inherit";

  /**
   * The thickness of the divider.
   */
  @Prop() weight: IcDividerWeights = "thin";

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    this.foregroundColor = ev.detail.mode;
  }

  private updateMonochromeState(): void {
    const isBottomSideNav =
      this.el.parentElement.classList.contains("bottom-side-nav");
    const isBottomWrapper =
      this.el.parentElement.parentElement.classList.contains("bottom-wrapper");

    if (
      this.el.parentElement.tagName === "IC-SIDE-NAVIGATION" ||
      (isBottomSideNav && isBottomWrapper)
    ) {
      this.monochrome = true;
      if (this.foregroundColor === "light") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    }
  }

  componentWillRender(): void {
    this.updateMonochromeState();
  }

  render() {
    const {
      borderStyle,
      label,
      labelPlacement,
      monochrome,
      orientation,
      weight,
    } = this;

    const { theme } = this;

    const invalidPropCombination = (
      placement: IcDividerLabelPlacement
    ): void => {
      console.error(
        `${
          placement.charAt(0).toUpperCase() + placement.slice(1)
        } label placement is not applicable for a ${orientation} ic-divider (web-components) / IcDivider (react)`
      );
    };

    if (
      ((labelPlacement === "left" || labelPlacement === "right") &&
        orientation === "vertical") ||
      ((labelPlacement === "top" || labelPlacement === "bottom") &&
        orientation === "horizontal")
    ) {
      invalidPropCombination(labelPlacement);
    }

    const getTypographyVariant = (weight: string) => {
      switch (weight) {
        case "very-thick":
          return "h4";
        case "thick":
          return "subtitle-large";
        default:
          return "label";
      }
    };

    const renderLabel = () => {
      if (slotHasContent(this.el, "label")) {
        return <slot name="label"></slot>;
      } else if (isPropDefined(label)) {
        return (
          <ic-typography
            class="ic-divider-label"
            variant={getTypographyVariant(weight)}
          >
            <p>{label}</p>
          </ic-typography>
        );
      }
      return null;
    };

    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
          [`ic-divider-monochrome`]: monochrome,
          [`ic-divider-${orientation}`]: true,
          [`ic-divider-${weight}`]: true,
          [`ic-divider-${borderStyle}`]: true,
        }}
        {...((orientation === "vertical" ||
          (!!renderLabel() && !!isPropDefined(labelPlacement))) && {
          "aria-orientation": orientation,
          role: "separator",
        })}
      >
        {orientation === "horizontal" &&
          (!renderLabel() || !isPropDefined(labelPlacement)) && <hr />}
        {!!isPropDefined(labelPlacement) && !!renderLabel() && renderLabel()}
        {orientation === "vertical" &&
          (!renderLabel() || !isPropDefined(labelPlacement)) && (
            <div class="vertical-divider"></div>
          )}
      </Host>
    );
  }
}
