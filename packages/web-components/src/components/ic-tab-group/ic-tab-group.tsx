import { Component, Element, Host, Prop, h } from "@stencil/core";

import { onComponentRequiredPropUndefined } from "../../utils/helpers";
import {
  IcThemeForegroundNoDefault,
  IcThemeForegroundEnum,
} from "../../utils/types";

@Component({
  tag: "ic-tab-group",
  styleUrl: "ic-tab-group.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class TabGroup {
  @Element() host: HTMLIcTabGroupElement;

  /**
   * @deprecated This is no longer required.
   * The context id is passed down from `ic-tab-context`
   */
  @Prop({ reflect: true }) contextId?: string = "default";

  /**
   * If `true`, the tabs and tab panels will be positioned separately.
   */
  @Prop({ reflect: true }) inline?: boolean = false;

  /**
   * The label to describe the purpose of the set of tabs to screen reader users.
   */
  @Prop() label!: string;

  /**
   * @internal The appearance of the tab group, e.g dark, or light.
   */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Tab Group"
    );
  }

  render() {
    const { appearance, label } = this;

    return (
      <Host
        role="tablist"
        aria-label={label}
        class={{
          ["light"]: appearance === IcThemeForegroundEnum.Light,
        }}
      >
        <ic-horizontal-scroll
          appearance={
            appearance === IcThemeForegroundEnum.Dark
              ? IcThemeForegroundEnum.Default
              : appearance
          }
        >
          <div class="tabs-container">
            <slot></slot>
          </div>
        </ic-horizontal-scroll>
      </Host>
    );
  }
}
