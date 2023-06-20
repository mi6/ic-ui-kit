import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
  Method,
} from "@stencil/core";

import { IcTabClickEventDetail } from "./ic-tab.types";
import {
  IcThemeForegroundNoDefault,
  IcThemeForegroundEnum,
} from "../../utils/types";
import { removeDisabledFalse } from "../../utils/helpers";

/**
 * @slot icon - Content will be rendered next to the tab label.
 */
@Component({
  tag: "ic-tab",
  styleUrl: "ic-tab.css",
  shadow: true,
})
export class Tab {
  private focusFromClick: boolean = false;
  private focusTabId: string;
  private isInitialRender: boolean = true;

  @Element() host: HTMLIcTabElement;

  /** @internal Determines whether the light or dark variant of the tabs should be displayed. */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";

  /** @internal The unique context needed if using multiple tabs inside one another i.e. rendering another tabs inside a tab panel. */
  @Prop({ reflect: true }) contextId?: string = "default";

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;

  /** @internal If `true`, the tab will display with a selected indicator and tabIndex will be set. */
  @Prop({ reflect: true }) selected?: boolean = false;

  /** @internal The shared ID between panel and tab. */
  @Prop({ reflect: true }) tabId?: string;

  /** @internal The position of the tab inside the tabs array in context. */
  @Prop() tabPosition?: number;

  /**
   * @internal Emitted when a tab is selected.
   */
  @Event() tabClick: EventEmitter<IcTabClickEventDetail>;

  /**
   * @internal Emitted when a tab is dynamically created.
   */
  @Event() tabCreated: EventEmitter<HTMLIcTabElement>;

  /**
   * @internal Emitted when a tab is focussed.
   */
  @Event() tabFocus: EventEmitter<IcTabClickEventDetail>;

  /**
   * @internal Emitted when a tab is unmounted.
   */
  @Event() tabRemoved: EventEmitter<void>;

  connectedCallback(): void {
    this.tabCreated.emit(this.host);
  }

  disconnectedCallback(): void {
    const tabContext = document.querySelector(
      `ic-tab-context[context-id=${this.contextId}]`
    ) as HTMLIcTabContextElement;
    if (tabContext) {
      tabContext.tabRemovedHandler(!!this.focusTabId);
    }
  }

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.host);
  }

  componentDidUpdate(): void {
    this.isInitialRender = false;
  }

  /**
   * Sets focus on the tab.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.host) {
      this.host.focus();
    }
  }

  private handleClick = () => {
    this.tabClick.emit({
      tabId: this.tabId,
      contextId: this.contextId,
      position: this.tabPosition,
    });
    if (this.focusFromClick) {
      this.tabFocus.emit({
        tabId: this.tabId,
        contextId: this.contextId,
        position: this.tabPosition,
      });
      this.focusFromClick = false;
    }
  };

  private handleFocus = () => {
    if (!this.focusFromClick) {
      this.focusTabId = this.tabId;

      this.tabFocus.emit({
        tabId: this.tabId,
        contextId: this.contextId,
        position: this.tabPosition,
      });
    }
  };

  private handleMouseDown = () => {
    //set flag so that focus gets handled after click
    //there is a timing issue where a long click only causes focus to happen & not the click
    //the focus does need to be a seperate event though to handle focus from keyboard
    this.focusFromClick = true;
  };

  render() {
    const { disabled, selected, appearance } = this;
    return (
      <Host
        class={{
          ["with-transition"]: !this.isInitialRender,
          ["ic-tab-light"]: appearance === IcThemeForegroundEnum.Light,
          ["selected"]: selected,
          ["disabled"]: disabled,
        }}
        role="tab"
        aria-selected={selected ? "true" : "false"}
        onClick={this.handleClick}
        onFocus={this.handleFocus}
        onMouseDown={this.handleMouseDown}
        aria-disabled={disabled ? "true" : "false"}
        tabindex={this.selected ? 0 : -1}
      >
        {this.host.querySelector('[slot="icon"]') && <slot name="icon"></slot>}
        <ic-typography class="ic-tab-label" variant="label">
          <span>
            <slot></slot>
          </span>
        </ic-typography>
      </Host>
    );
  }
}
