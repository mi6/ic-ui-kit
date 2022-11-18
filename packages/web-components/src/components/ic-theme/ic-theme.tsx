import {
  Component,
  Host,
  Event,
  EventEmitter,
  h,
  Watch,
  Prop,
} from "@stencil/core";

import { IcColorRGB, IcTheme } from "../../utils/types";
import {
  getThemeForegroundColor,
  hexToRgb,
  rgbStrToObj,
} from "../../utils/helpers";

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

  private setThemeColor = () => {
    if (this.color !== null) {
      let colorRGB = null;
      const firstChar = this.color.slice(0, 1);
      if (firstChar === "#") {
        colorRGB = hexToRgb(this.color);
      } else if (firstChar.toLowerCase() === "r") {
        colorRGB = rgbStrToObj(this.color);
      }
      this.setThemeRGB(colorRGB);
    }
  };

  private setThemeRGB = (colorRGB: IcColorRGB) => {
    if (colorRGB !== null) {
      const root = document.documentElement;
      root.style.setProperty("--ic-theme-primary-r", colorRGB.r.toString());
      root.style.setProperty("--ic-theme-primary-g", colorRGB.g.toString());
      root.style.setProperty("--ic-theme-primary-b", colorRGB.b.toString());
      const foregroundColor = getThemeForegroundColor();
      this.icThemeChange.emit({ mode: foregroundColor, color: colorRGB });
    }
  };

  componentWillLoad(): void {
    this.setThemeColor();
  }

  render() {
    return <Host></Host>;
  }
}
