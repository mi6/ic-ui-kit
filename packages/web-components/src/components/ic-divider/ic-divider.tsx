import { h, Component, Host, Listen, State } from "@stencil/core";

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

  @Listen("icThemeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.foregroundColor = theme.mode;
  }

  render() {
    return (
      <Host aria-hidden="true">
        <hr
          class={{
            ["light"]: this.foregroundColor === IcThemeForegroundEnum.Light,
          }}
        />
      </Host>
    );
  }
}
