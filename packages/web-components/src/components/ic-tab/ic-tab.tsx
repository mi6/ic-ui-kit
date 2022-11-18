import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from "@stencil/core";

import { onComponentRequiredPropUndefined } from "../../utils/helpers";
import { IcTabClickEventDetail } from "./ic-tab.types";
import {
  IcThemeForegroundNoDefault,
  IcThemeForegroundEnum,
} from "../../utils/types";

/**
 * @slot icon - Content will be rendered next to the tab label.
 */
@Component({
  tag: "ic-tab",
  styleUrl: "ic-tab.css",
  shadow: true,
})
export class Tab {
  @Element() host: HTMLIcTabElement;

  /** @internal Provide a unique context if using multiple tabs inside one another i.e. rendering another tabs inside a tab panel. */
  @Prop({ reflect: true }) contextId?: string = "default";

  /**
   * Disables the tab.
   */
  @Prop() disabled?: boolean = false;

  /** @internal Will display a selected indicator and set tabIndex. */
  @Prop({ reflect: true }) selected?: boolean = false;

  /** @internal The shared ID between panel and tab. */
  @Prop({ reflect: true }) tabId?: string;

  /** @internal The position of the tab inside the tabs array in context. */
  @Prop() tabPosition!: number;

  /** @internal Determines whether the light or dark variant of the tabs should be displayed. */
  @Prop() appearance?: IcThemeForegroundNoDefault = "light";

  /**
   * Called when a tab is selected.
   */
  @Event() tabClick: EventEmitter<IcTabClickEventDetail>;

  /**
   * @internal Called when a tab is focussed.
   */
  @Event() tabFocus: EventEmitter<IcTabClickEventDetail>;

  private isInitialRender: boolean = true;
  private focusFromClick: boolean = false;

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

  componentDidUpdate(): void {
    this.isInitialRender = false;
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.tabPosition, propName: "tab-position" }],
      "Tab"
    );
  }

  render() {
    const { disabled, selected, appearance } = this;
    return (
      <Host
        class={{
          ["with-transition"]: !this.isInitialRender,
          ["ic-tab-dark"]: appearance === IcThemeForegroundEnum.Dark,
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
