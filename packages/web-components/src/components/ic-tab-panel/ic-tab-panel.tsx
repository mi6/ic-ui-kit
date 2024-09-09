import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from "@stencil/core";
import { IcThemeMode } from "../../utils/types";
import { isPropDefined } from "../../utils/helpers";

@Component({
  tag: "ic-tab-panel",
  styleUrl: "ic-tab-panel.css",
  shadow: true,
})
export class TabPanel {
  @Element() el: HTMLIcTabPanelElement;

  /** @internal Determines whether black variant of the tabs should be displayed. */
  @Prop() monochrome?: boolean = false;

  /**
   * @internal The shared ID that links the panel and tab.
   */
  @Prop({ reflect: true }) panelId?: string;

  /**
   * @internal The shared ID of the currently selected tab.
   */
  @Prop() selectedTab?: string;

  /**
   * @internal The position of the tab panel inside the tabs array in context.
   */
  @Prop({ reflect: true }) tabPosition?: number;

  /** @internal Determines whether the light or dark variant of the tabs should be displayed. */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * @internal Emitted when a tab panel is dynamically created.
   */
  @Event() tabPanelCreated: EventEmitter<HTMLIcTabPanelElement>;

  /**
   * @internal Emitted when a tab panel is unmounted.
   */
  @Event() tabPanelRemoved: EventEmitter<void>;

  connectedCallback(): void {
    this.tabPanelCreated.emit(this.el);
  }

  render() {
    const { panelId, selectedTab, theme } = this;
    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        role="tabpanel"
        hidden={
          isPropDefined(panelId) && isPropDefined(selectedTab)
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
