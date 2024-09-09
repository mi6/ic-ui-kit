import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
  Method,
  Watch,
} from "@stencil/core";

import { IcTabClickEventDetail } from "./ic-tab.types";
import { IcThemeMode } from "../../utils/types";
import { isSlotUsed, removeDisabledFalse } from "../../utils/helpers";

/**
 * @slot icon - Content will be rendered next to the tab label.
 * @slot badge - Badge component displayed inline with the tab.
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

  @Element() el: HTMLIcTabElement;

  /** @internal The unique context needed if using multiple tabs inside one another i.e. rendering another tabs inside a tab panel. */
  @Prop({ reflect: true }) contextId?: string = "default";

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;

  /** @internal Determines whether black variant of the tabs should be displayed. */
  @Prop() monochrome?: boolean = false;

  /** @internal If `true`, the tab will display with a selected indicator and tabIndex will be set. */
  @Prop({ reflect: true }) selected?: boolean = false;

  /** @internal The shared ID between panel and tab. */
  @Prop({ reflect: true }) tabId?: string;

  /** @internal The position of the tab inside the tabs array in context. */
  @Prop() tabPosition?: number;

  /** @internal Determines whether the light or dark variant of the tabs should be displayed. */
  @Prop() theme?: IcThemeMode = "inherit";

  @Watch("disabled")
  disabledWatchHandler(): void {
    this.tabEnabled.emit();
  }

  /**
   * @internal Emitted when a tab is selected.
   */
  @Event() tabClick: EventEmitter<IcTabClickEventDetail>;

  /**
   * @internal Emitted when a tab is dynamically created.
   */
  @Event() tabCreated: EventEmitter<HTMLIcTabElement>;

  /**
   * @internal Emitted when a tab's disabled prop changes
   */
  @Event() tabEnabled: EventEmitter<void>;

  /**
   * @internal Emitted when a tab is focussed.
   */
  @Event() tabFocus: EventEmitter<IcTabClickEventDetail>;

  /**
   * @internal Emitted when a tab is unmounted.
   */
  @Event() tabRemoved: EventEmitter<void>;

  connectedCallback(): void {
    this.tabCreated.emit(this.el);
  }

  disconnectedCallback(): void {
    document
      .querySelector<HTMLIcTabContextElement>(
        `ic-tab-context[context-id=${this.contextId}]`
      )
      ?.tabRemovedHandler(!!this.focusTabId);
  }

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidUpdate(): void {
    this.isInitialRender = false;
  }

  /**
   * Sets focus on the tab.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.el) {
      this.el.focus();
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
    //the focus does need to be a separate event though to handle focus from keyboard
    this.focusFromClick = true;
  };

  render() {
    const {
      disabled,
      selected,
      theme,
      monochrome,
      isInitialRender,
      handleClick,
      handleFocus,
      handleMouseDown,
    } = this;
    return (
      <Host
        class={{
          ["with-transition"]: !isInitialRender,
          ["ic-tab-selected"]: selected,
          ["ic-tab-disabled"]: disabled,
          [`ic-theme-${theme}`]: theme !== "inherit",
          ["ic-tab-monochrome"]: monochrome,
        }}
        role="tab"
        aria-selected={`${selected}`}
        onClick={handleClick}
        onFocus={handleFocus}
        onMouseDown={handleMouseDown}
        aria-disabled={`${disabled}`}
        tabindex={selected ? 0 : -1}
      >
        {isSlotUsed(this.el, "icon") && <slot name="icon"></slot>}
        <ic-typography class="ic-tab-label" variant="label">
          <span>
            <slot></slot>
          </span>
        </ic-typography>
        {isSlotUsed(this.el, "badge") && <slot name="badge"></slot>}
      </Host>
    );
  }
}
