import { Component, Element, Host, Prop, h } from "@stencil/core";
import {
  IcThemeForegroundEnum,
  IcThemeForegroundNoDefault,
} from "../../utils/types";

@Component({
  tag: "ic-tab-panel",
  styleUrl: "ic-tab-panel.css",
  shadow: true,
})
export class TabPanel {
  @Element() host: HTMLIcTabPanelElement;

  /**
   * Provide a unique context if using multiple tabs inside one another i.e. rendering another tabs inside a tab panel.
   */
  @Prop({ reflect: true }) contextId?: string = "default";

  /** @internal The position of the tab panel inside the tabs array in context. */
  @Prop({ reflect: true }) tabPosition?: number;

  /** @internal The shared ID that links the panel and tab. */
  @Prop({ reflect: true }) panelId?: string;

  /** @internal The shared ID of the currently selected tab. */
  @Prop() selectedTab?: string;

  /** @internal Determines whether the light or dark variant of the tabs should be displayed. */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";

  render() {
    const { panelId, selectedTab, appearance } = this;
    return (
      <Host
        class={{
          ["ic-tab-panel-light"]: appearance === IcThemeForegroundEnum.Light,
        }}
        role="tabpanel"
        hidden={
          panelId !== undefined && selectedTab !== undefined
            ? !(panelId === selectedTab)
            : true
        }
      >
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
