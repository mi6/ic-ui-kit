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

import { IcColor, IcBrand } from "../../utils/types";
import {
  convertToRGBA,
  getBrandForegroundAppearance,
} from "../../utils/helpers";
import { getBrandColorBrightness } from "../../utils/helpers";
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
   * The brand colour. Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".
   */
  @Prop() brandColor?: IcColor | null = null;

  @Watch("brandColor")
  watchBrandColorPropHandler(): void {
    this.setBrandColor();
  }

  /**
   * The theme mode. Can be "dark", "light", or "system". "system" will use the device or browser settings.
   */
  @Prop() theme?: "dark" | "light" | "system" = "light";

  @Watch("theme")
  watchThemePropHandler(): void {
    this.darkModeChangeHandler();
  }

  /**
   * @internal Emitted when the brand color is changed.
   */
  @Event() brandChange: EventEmitter<IcBrand>;

  componentWillLoad(): void {
    this.darkModeChangeHandler();
    this.setBrandColor();

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

  private checkBrandColorContrast = (): void => {
    if (
      getBrandColorBrightness() < BLACK_MIN_COLOR_BRIGHTNESS &&
      getBrandColorBrightness() > WHITE_MAX_COLOR_BRIGHTNESS
    ) {
      console.warn(
        `The brand colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.`
      );
    }
  };

  private setBrandColor = () => {
    const colorRGBA = this.brandColor ? convertToRGBA(this.brandColor) : null;

    if (colorRGBA) {
      const { r, g, b, a } = colorRGBA;
      const { style } = document.documentElement;
      style.setProperty("--ic-brand-color-primary-r", `${r}`);
      style.setProperty("--ic-brand-color-primary-g", `${g}`);
      style.setProperty("--ic-brand-color-primary-b", `${b}`);
      style.setProperty("--ic-brand-color-primary-a", `${a}`);

      this.checkBrandColorContrast();

      this.brandChange.emit({
        mode: getBrandForegroundAppearance(),
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
