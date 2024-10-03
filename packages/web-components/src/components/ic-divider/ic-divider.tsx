import { h, Component, Host, Listen, State, Prop } from "@stencil/core";
import { IcThemeMode } from "../../utils/types";

import { getThemeForegroundColor } from "../../utils/helpers";
import {
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "../../utils/types";

@Component({
  tag: "ic-divider",
  styleUrl: "ic-divider.css",
  scoped: true,
})
export class Divider {
  @State() foregroundColor: IcThemeForeground = getThemeForegroundColor();

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.foregroundColor = theme.mode;
  }

  render() {
    const { theme } = this;
    return (
      <Host
        aria-hidden="true"
        class={{
            [`ic-theme-${theme}`]: theme !== "inherit",
          }}
      >
        <hr
          class={{
            ["light"]: this.foregroundColor === IcThemeForegroundEnum.Light,
          }}
        />
      </Host>
    );
  }
}
