import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Prop,
  State,
  h,
  Watch,
  Method,
} from "@stencil/core";
import {
  IcActivationTypes,
  IcThemeForegroundNoDefault,
  IcThemeForegroundEnum,
} from "../../utils/types";

import {
  IcTabClickEventDetail,
  IcTabSelectEventDetail,
} from "../ic-tab/ic-tab.types";

const CONTEXT_ID_ATTR = "context-id";

@Component({
  tag: "ic-tab-context",
})
export class TabContext {
  private enabledTabs: HTMLIcTabElement[];
  private focusedTabIndex: number;
  private newTabPanels: HTMLIcTabPanelElement[] = [];
  private newTabs: HTMLIcTabElement[] = [];
  private tabs: HTMLIcTabElement[];
  private tabGroup: HTMLIcTabGroupElement;
  private tabPanels: HTMLIcTabPanelElement[];

  @Element() el: HTMLIcTabContextElement;

  @State() selectedTab: number | null;

  /**
   * Determines whether tabs have to be manually activated (by pressing 'Enter' or 'Space') when they receive focus using keyboard navigation.
   */
  @Prop() activationType?: IcActivationTypes = "automatic";

  /**
   * The appearance of the tab context, e.g dark, or light.
   */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";
  @Watch("appearance")
  watchAppearanceHandler(): void {
    this.tabs.forEach((tab, index) => {
      tab.appearance = this.appearance;
      this.tabPanels[index].appearance = this.appearance;
    });
    this.tabGroup.appearance = this.appearance;
  }

  /**
   * The unique context needed if using multiple tabs inside one another i.e. rendering another set of tabs inside a tab panel.
   */
  @Prop({ reflect: true }) contextId?: string = "default";

  /**
   * The selected tab to be controlled by the user. Must be used alongside the icTabSelect event to manage tab selection.
   */
  @Prop() selectedTabIndex?: number;

  @Watch("selectedTabIndex")
  updateSelectedTab(newValue: number): void {
    this.selectedTab = newValue;
  }

  /**
   * Emitted when a user selects a tab.
   */
  @Event({ bubbles: false }) icTabSelect: EventEmitter<IcTabSelectEventDetail>;

  componentDidLoad(): void {
    if (this.selectedTabIndex !== undefined) {
      this.selectedTab = this.selectedTabIndex;
    }
    this.getChildren();
    this.linkTabs();
    this.tabGroup.addEventListener("keydown", this.keydownHandler);
    this.setInitialTab();
    this.configureTabs();
  }

  componentWillUpdate(): void {
    this.configureTabs();
  }

  disconnectedCallback(): void {
    this.tabGroup.removeEventListener("keydown", this.keydownHandler);
  }

  @Listen("tabClick")
  tabClickHandler(event: CustomEvent<IcTabClickEventDetail>): void {
    if (
      this.selectedTabIndex === undefined &&
      event.detail.contextId === this.contextId
    ) {
      this.selectedTab = event.detail.position;
    }
    this.emitEvents(event.detail.position);
    event.stopImmediatePropagation();
  }

  @Listen("tabCreated")
  @Listen("tabPanelCreated")
  tabCreatedHandler(ev: CustomEvent): void {
    if (this.tabs && this.tabPanels) {
      (ev.detail.setFocus ? this.newTabs : this.newTabPanels).push(ev.detail);
      if (this.newTabs.length === this.newTabPanels.length) {
        this.tabs.push(...this.newTabs);
        this.tabPanels.push(...this.newTabPanels);
        this.enabledTabs = this.getEnabledTabs();
        this.linkTabs();
        if (!this.tabs[this.selectedTab] || !this.tabPanels[this.selectedTab])
          this.setInitialTab();
        this.configureTabs();
        this.newTabs = [];
        this.newTabPanels = [];
      }
    }
  }

  @Listen("tabEnabled")
  tabEnabledHandler(): void {
    this.enabledTabs = this.getEnabledTabs();
  }

  /**
   * @internal Used to set tab/tab panel IDs when a tab/tab panel has been removed
   */
  @Method()
  async tabRemovedHandler(hadFocus?: boolean): Promise<void> {
    this.getChildren();
    this.linkTabs();
    if (this.tabs[this.selectedTab] && this.tabPanels[this.selectedTab]) {
      this.tabs[this.selectedTab].selected = true;
      this.tabPanels[this.selectedTab].hidden = false;
    } else {
      this.setInitialTab();
    }

    if (hadFocus) {
      this.tabs[this.selectedTab].setFocus();
    }
  }

  private emitEvents = (tabIndex: number) => {
    const tabLabel = this.el
      .querySelectorAll("ic-tab")
      // eslint-disable-next-line no-unexpected-multiline
      [tabIndex].textContent.trim();
    this.icTabSelect.emit({ tabIndex, tabLabel });
  };

  /** Sets attributes to link tab-group, tabs and tab-panels */
  private linkTabs = () => {
    this.tabs.forEach((tab, index) => {
      const tabId = `ic-tab-${index}-context-${this.contextId}`;
      const tabPanelId = `ic-tab-panel-${index}-context-${this.contextId}`;
      tab.setAttribute("id", tabId);
      tab.tabId = `ic-tab--${index}-context-${this.contextId}`;
      tab.tabPosition = index;
      tab.setAttribute("aria-controls", tabPanelId);
      tab.setAttribute(CONTEXT_ID_ATTR, this.contextId);
      this.tabGroup.setAttribute(CONTEXT_ID_ATTR, this.contextId);
      this.tabPanels[index].setAttribute("id", tabPanelId);
      this.tabPanels[index].setAttribute("aria-labelledby", tabId);
      this.tabPanels[index].setAttribute(CONTEXT_ID_ATTR, this.contextId);

      if (this.appearance === IcThemeForegroundEnum.Light) {
        tab.appearance = this.appearance;
        this.tabPanels[index].appearance = this.appearance;
      }
    });

    if (this.appearance === IcThemeForegroundEnum.Light) {
      this.tabGroup.appearance = this.appearance;
    }
  };

  /**
   * Gets tabs and tabpanels with the same context ID using querySelector to selector the children in relation to the host
   */
  private getChildren = (): void => {
    this.tabGroup = this.el.querySelector("ic-tab-group");
    this.tabs = Array.from(this.tabGroup.querySelectorAll("ic-tab"));
    this.tabPanels = Array.from(this.el.children).filter(
      (child) => child.tagName === "IC-TAB-PANEL"
    ) as HTMLIcTabPanelElement[];
    this.enabledTabs = this.getEnabledTabs();
  };

  private keydownHandler = (event: KeyboardEvent) => {
    const isManual = this.activationType === "manual";
    const enabledTabIndex = this.enabledTabs.findIndex(
      (tab) =>
        tab.tabId ===
        this.tabs[isManual ? this.focusedTabIndex : this.selectedTab].tabId
    );
    const keyboardFunction = isManual
      ? this.keyboardFocusTab
      : this.keyboardSelectTab;
    let preventDefault = true;
    switch (event.key) {
      case "Home":
        keyboardFunction(0);
        break;
      case "End":
        keyboardFunction(this.enabledTabs.length - 1);
        break;
      case "ArrowRight":
        keyboardFunction(
          enabledTabIndex < this.enabledTabs.length - 1
            ? enabledTabIndex + 1
            : 0
        );
        break;
      case "ArrowLeft":
        keyboardFunction(
          (enabledTabIndex > 0 ? enabledTabIndex : this.enabledTabs.length) - 1
        );
        break;
      default:
        if (isManual && (event.key === "Enter" || event.key === " ")) {
          this.keyboardSelectTab(this.focusedTabIndex);
        } else {
          preventDefault = false;
        }
    }
    if (preventDefault) event.preventDefault();
  };

  /** Sets the tab that is selected on initial render */
  private setInitialTab = (): void => {
    if (this.selectedTabIndex !== undefined) {
      this.selectedTab = this.selectedTabIndex;
      this.focusedTabIndex = this.selectedTabIndex;
    } else {
      const firstEnabledTabIndex = this.tabs.findIndex(
        (tab) => tab.tabId === this.enabledTabs[0].tabId
      );
      this.selectedTab = firstEnabledTabIndex;
      this.focusedTabIndex = firstEnabledTabIndex;
    }
  };

  /** Passes the selected tab to the tab and tab panel components */
  private configureTabs = () => {
    this.enabledTabs.forEach((tab) => {
      tab.selected = tab.tabPosition === this.selectedTab;
    });
    this.tabPanels.forEach((tabPanel, index) => {
      tabPanel.hidden = index !== this.selectedTab;
    });
  };

  private getEnabledTabs = () =>
    Array.from(this.tabs).filter((child) => !child.disabled);

  /** Sets focus on tab and selects it */
  private keyboardSelectTab = (enabledTabIndex: number) => {
    const newIndex = this.tabs.findIndex(
      (tab) => tab.tabId === this.enabledTabs[enabledTabIndex].tabId
    );
    this.enabledTabs[enabledTabIndex].focus();
    if (this.selectedTabIndex === undefined) {
      this.selectedTab = newIndex;
    } else {
      this.emitEvents(newIndex);
    }
  };

  /** Sets focus on tab without selecting it (for manual activation) */
  private keyboardFocusTab = (enabledTabIndex: number) => {
    this.enabledTabs[enabledTabIndex].focus();
    this.focusedTabIndex = this.tabs.findIndex(
      (tab) => tab.tabId === this.enabledTabs[enabledTabIndex].tabId
    );
  };

  render() {
    return <slot></slot>;
  }
}
