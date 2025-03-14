import { Component, Host, Prop, h } from "@stencil/core";

import { onComponentRequiredPropUndefined } from "../../utils/helpers";
import { IcThemeMode } from "../../utils/types";

@Component({
  tag: "ic-tab-group",
  styleUrl: "ic-tab-group.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class TabGroup {
  /**
   * If `true`, the tabs and tab panels will be positioned separately.
   */
  @Prop({ reflect: true }) inline?: boolean = false;

  /**
   * The label to describe the purpose of the set of tabs to screen reader users.
   */
  @Prop() label!: string;

  /** @internal Determines whether black variant of the tabs should be displayed. */
  @Prop() monochrome?: boolean = false;

  /** @internal Determines whether the light or dark variant of the tabs should be displayed. */
  @Prop() theme?: IcThemeMode = "inherit";

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Tab Group"
    );
  }

  render() {
    const { inline, theme, label, monochrome } = this;

    return (
      <Host
        role="tablist"
        aria-label={label}
        class={{
          ["ic-tab-group-inline"]: !!inline,
          [`ic-theme-${theme}`]: theme !== "inherit",
          ["ic-tab-group-monochrome"]: !!monochrome,
        }}
      >
        <ic-horizontal-scroll
          theme={theme}
          focus-trigger="tabFocus"
          monochrome={monochrome}
        >
          <div class="tabs-container">
            <slot></slot>
          </div>
        </ic-horizontal-scroll>
      </Host>
    );
  }
}
