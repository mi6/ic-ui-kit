import {
  Component,
  Host,
  Event,
  EventEmitter,
  h,
  Watch,
  Prop,
} from "@stencil/core";

import { IcColorRGBA, IcTheme } from "../../utils/types";
import {
  getThemeForegroundColor,
  hexToRgba,
  rgbaStrToObj,
} from "../../utils/helpers";
import { getThemeColorBrightness } from "../../utils/helpers";
import {
  BLACK_MIN_COLOR_BRIGHTNESS,
  WHITE_MAX_COLOR_BRIGHTNESS,
} from "../../utils/constants";

@Component({
  tag: "ic-theme",
  shadow: true,
})
export class Theme {
  /**
   * The theme colour. Can be a hex value eg "#ff0000" or RGB eg "rgb(255, 0, 0)"
   */
  @Prop() color?: string = null;

  @Watch("color")
  watchColorPropHandler(): void {
    this.setThemeColor();
  }

  /**
   * Emitted when the theme is changed.
   */
  @Event() icThemeChange: EventEmitter<IcTheme>;

  private checkThemeColorContrast = (): void => {
    if (
      getThemeColorBrightness() < BLACK_MIN_COLOR_BRIGHTNESS &&
      getThemeColorBrightness() > WHITE_MAX_COLOR_BRIGHTNESS
    ) {
      console.warn(
        `The theme colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.`
      );
    }
  };

  private setThemeColor = () => {
    if (this.color !== null) {
      let colorRGBA = null;
      const firstChar = this.color.slice(0, 1);
      if (firstChar === "#") {
        colorRGBA = hexToRgba(this.color);
      } else if (firstChar.toLowerCase() === "r") {
        colorRGBA = rgbaStrToObj(this.color);
      }
      this.setThemeRGBA(colorRGBA);
    }
  };

  private setThemeRGBA = (colorRGBA: IcColorRGBA) => {
    if (colorRGBA !== null) {
      const root = document.documentElement;
      root.style.setProperty("--ic-theme-primary-r", colorRGBA.r.toString());
      root.style.setProperty("--ic-theme-primary-g", colorRGBA.g.toString());
      root.style.setProperty("--ic-theme-primary-b", colorRGBA.b.toString());
      root.style.setProperty("--ic-theme-primary-a", colorRGBA.a.toString());

      this.checkThemeColorContrast();

      const foregroundColor = getThemeForegroundColor();
      this.icThemeChange.emit({ mode: foregroundColor, color: colorRGBA });
    }
  };

  componentWillLoad(): void {
    this.setThemeColor();
  }

  render() {
    return <Host></Host>;
  }
}
