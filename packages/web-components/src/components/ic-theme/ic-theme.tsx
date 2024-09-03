import {
  Component,
  Host,
  Event,
  EventEmitter,
  h,
  Watch,
  Prop,
  State,
} from "@stencil/core";

import { IcColor, IcTheme } from "../../utils/types";
import { convertToRGBA, getThemeForegroundColor } from "../../utils/helpers";
import { getThemeColorBrightness } from "../../utils/helpers";
import {
  BLACK_MIN_COLOR_BRIGHTNESS,
  WHITE_MAX_COLOR_BRIGHTNESS,
} from "../../utils/constants";

@Component({
  tag: "ic-theme",
})
export class Theme {
  @State() themeClass: string = "";

  /**
   * The theme colour. Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".
   */
  @Prop() color?: IcColor = null;

  @Watch("color")
  watchColorPropHandler(): void {
    this.setThemeColor();
  }

  /**
   * The theme mode. Can be "dark", "light", or "system". "system" will use the device or browser settings.
   */
  @Prop() theme: "dark" | "light" | "system" = "light";

  @Watch("theme")
  watchThemePropHandler(): void {
    this.darkModeChangeHandler();
  }

  /**
   * @internal Emitted when the theme is changed.
   */
  @Event() themeChange: EventEmitter<IcTheme>;

  componentWillLoad(): void {
    this.darkModeChangeHandler();
    this.setThemeColor();

    window.matchMedia &&
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", this.darkModeChangeHandler);
  }

  private darkModeChangeHandler = (): void => {
    if (this.theme === "system") {
      this.themeClass =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "ic-theme-dark"
          : "ic-theme-light";
    } else {
      this.themeClass = `ic-theme-${this.theme}`;
    }
  };

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
    const colorRGBA = convertToRGBA(this.color);

    if (colorRGBA) {
      const { r, g, b, a } = colorRGBA;
      const { style } = document.documentElement;
      style.setProperty("--ic-theme-primary-r", `${r}`);
      style.setProperty("--ic-theme-primary-g", `${g}`);
      style.setProperty("--ic-theme-primary-b", `${b}`);
      style.setProperty("--ic-theme-primary-a", `${a}`);

      this.checkThemeColorContrast();

      this.themeChange.emit({
        mode: getThemeForegroundColor(),
        color: colorRGBA,
      });
    }
  };

  render() {
    const { themeClass } = this;

    return (
      <Host class={themeClass}>
        <slot></slot>
      </Host>
    );
  }
}
