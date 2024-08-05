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
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundWithTheme,
  IcThemeForegroundEnum,
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
   * The appearance of the divider.
   */
  @Prop() appearance: IcThemeForegroundWithTheme = "default";
  /**
   * The line style of the divider.
   */
  @Prop() borderStyle: IcDividerStyles = "solid";
  /**
   * The thickness of the divider.
   */
  @Prop() weight: IcDividerWeights = "thin";
  /**
   * The orientation of the divider.
   */
  @Prop() orientation: IcOrientation = "horizontal";
  /**
   * The position the label is placed on the divider. `Left` and `right` placement is only applicable when orientation is set to `horizontal`. `Top` and `bottom` placement is only applicable when orientation is set to `vertical`. `Center` placement is applicable for both orientations.
   */
  @Prop() labelPlacement?: IcDividerLabelPlacement = "center";
  /**
   * The label for the divider.
   */
  @Prop() label?: string;

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.foregroundColor = theme.mode;
  }

  render() {
    const {
      orientation,
      borderStyle,
      weight,
      label,
      labelPlacement,
      foregroundColor,
    } = this;

    let { appearance } = this;

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

    if (
      this.el.parentElement.tagName === "IC-SIDE-NAVIGATION" &&
      appearance !== "theme"
    ) {
      if (foregroundColor === IcThemeForegroundEnum.Light) {
        appearance = "light";
      } else if (foregroundColor === IcThemeForegroundEnum.Dark) {
        appearance = "dark";
      }
    }

    return (
      <Host
        class={{
          [`ic-divider-${appearance}`]: true,
          [`ic-divider-${orientation}`]: true,
          [`ic-divider-weight`]: true,
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
