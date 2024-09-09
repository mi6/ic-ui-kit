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

@Component({
  tag: "ic-tab-panel",
  styleUrl: "ic-tab-panel.css",
  shadow: true,
})
export class TabPanel {
  @Element() el: HTMLIcTabPanelElement;

  /** @internal Determines whether black variant of the tabs should be displayed. */
  @Prop() monochrome?: boolean = false;

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

  disconnectedCallback(): void {
    document
      .querySelector<HTMLIcTabContextElement>(
        `ic-tab-context[context-id=${this.el.getAttribute("context-id")}]`
      )
      ?.tabRemovedHandler();
  }

  render() {
    const { theme } = this;
    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        role="tabpanel"
      >
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
