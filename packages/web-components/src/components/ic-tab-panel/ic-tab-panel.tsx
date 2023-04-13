import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from "@stencil/core";
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
   * The unique context needed if using multiple tabs inside one another i.e. rendering another tabs inside a tab panel.
   */
  @Prop({ reflect: true }) contextId?: string = "default";

  /** @internal The position of the tab panel inside the tabs array in context. */
  @Prop({ reflect: true }) tabPosition?: number;

  /** @internal The shared ID that links the panel and tab. */
  @Prop({ reflect: true }) panelId?: string;

  /** @internal The shared ID of the currently selected tab. */
  @Prop() selectedTab?: string;

  /** @internal The appearance of the tabs, e.g dark, or light. */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";

  @Event() tabPanelCreated: EventEmitter<HTMLIcTabPanelElement>;

  connectedCallback(): void {
    this.tabPanelCreated.emit(this.host);
  }

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
