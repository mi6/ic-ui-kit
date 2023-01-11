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

@Component({
  tag: "ic-tab-context",
})
export class TabContext {
  @Element() host: HTMLIcTabContextElement;

  /**
   * The unique context needed if using multiple tabs inside one another i.e. rendering another set of tabs inside a tab panel.
   */
  @Prop({ reflect: true }) contextId?: string = "default";

  /**
   * Determines whether tabs have to be manually activated (by pressing 'Enter' or 'Space') when they receive focus using keyboard navigation.
   */
  @Prop() activationType?: IcActivationTypes = "automatic";

  /**
   * The selected tab to be controlled by the user. Must be used alongside the icTabSelect event to manage tab selection.
   */
  @Prop() selectedTabIndex?: number;

  /**
   * The appearance of the tab context, e.g dark, or light.
   */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";

  @State() selectedTab: number | null;

  @Watch("selectedTabIndex")
  updateSelectedTab(newValue: number): void {
    this.selectedTab = newValue;
  }

  /**
   * @deprecated This event should not be used anymore. Use icTabSelect instead.
   */
  @Event() tabSelect: EventEmitter<IcTabSelectEventDetail>;

  /**
   * Emitted when a user selects a tab.
   */
  @Event() icTabSelect: EventEmitter<IcTabSelectEventDetail>;

  @Listen("tabClick")
  tabClickHandler(event: CustomEvent<IcTabClickEventDetail>): void {
    if (
      this.selectedTabIndex === undefined &&
      event.detail.contextId === this.contextId
    ) {
      this.selectedTab = event.detail.position;
    }
    this.icTabSelect.emit({
      tabIndex: event.detail.position,
    });
    this.tabSelect.emit({
      tabIndex: event.detail.position,
    });
  }

  private controlledMode: boolean;
  private tabs: HTMLIcTabElement[];
  private enabledTabs: HTMLIcTabElement[];
  private tabPanels: HTMLIcTabPanelElement[];
  private tabGroup: HTMLIcTabGroupElement;
  private focusedTabIndex: number;

  // Sets attributes to link tabs and tabpanels
  private linkTabs = () => {
    this.tabs.forEach((tab, index) => {
      const tabId = `ic-tab-${index}-context-${this.contextId}`;
      const tabPanelId = `ic-tab-panel-${index}-context-${this.contextId}`;
      const shared = `ic-tab--${index}-context-${this.contextId}`;
      tab.setAttribute("id", tabId);
      tab.tabId = shared;
      tab.tabPosition = index;
      tab.setAttribute("aria-controls", tabPanelId);
      tab.setAttribute("context-id", this.contextId);
      this.tabPanels[index].setAttribute("id", tabPanelId);
      this.tabPanels[index].panelId = shared;
      this.tabPanels[index].tabPosition = index;
      this.tabPanels[index].setAttribute("aria-labelledby", tabId);

      if (this.appearance === IcThemeForegroundEnum.Light) {
        tab.appearance = this.appearance;
        this.tabPanels[index].appearance = this.appearance;
      }
    });

    if (this.appearance === IcThemeForegroundEnum.Light) {
      this.tabGroup.appearance = this.appearance;
    }
  };

  // Gets tabs and tabpanels with the same context ID
  private getChildren = (): void => {
    this.tabGroup = Array.from(this.host.querySelectorAll("ic-tab-group")).find(
      (tabGroup) => tabGroup.contextId === this.contextId
    );
    this.tabs = Array.from(this.tabGroup.querySelectorAll("ic-tab")).filter(
      (tab) => tab.contextId === this.contextId
    );
    this.enabledTabs = this.getEnabledTabs();
    this.tabPanels = Array.from(this.host.querySelectorAll("ic-tab-panel"));
  };

  // Determines how keyboard navigation is to be handled based on the activation type
  private attatchEventListeners = (): void => {
    if (this.activationType === "automatic") {
      this.tabGroup.addEventListener("keydown", (event) => {
        this.handleKeyBoardNavAutomatic(event);
      });
    } else {
      this.tabGroup.addEventListener("keydown", (event) => {
        this.handleKeyBoardNavManual(event);
      });
    }
  };

  // Determines whether the selected tab is being controlled within the component
  // or by the user (via selectedTabIndex and onIcTabSelect)
  private setControlledMode = (): void => {
    if (this.selectedTabIndex !== undefined) {
      this.controlledMode = true;
      this.selectedTab = this.selectedTabIndex;
    }
  };

  // Sets the tab that is selected on initial render
  private setInitialTab = (): void => {
    if (this.controlledMode) {
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

  // Passes the selected tab to the tab and tab panel components
  private configureTabs = () => {
    this.enabledTabs.forEach((tab) => {
      tab.selected = tab.tabPosition === this.selectedTab;
    });
    this.tabPanels.forEach((tabPanel) => {
      tabPanel.selectedTab = this.tabs[this.selectedTab].tabId;
    });
  };

  private getEnabledTabs = () => {
    return Array.from(this.tabs).filter((child) => !child.disabled);
  };

  private getIndexOfEnabledTab = (allTabsIndex: number) => {
    return this.enabledTabs.findIndex(
      (tab) => tab.tabId === this.tabs[allTabsIndex].tabId
    );
  };

  // Sets focus on tab and selects it
  private keyboardSelectTab = (enabledTabIndex: number) => {
    const newIndex = this.tabs.findIndex(
      (tab) => tab.tabId === this.enabledTabs[enabledTabIndex].tabId
    );
    this.enabledTabs[enabledTabIndex].focus();
    if (!this.controlledMode) {
      this.selectedTab = newIndex;
    } else {
      this.icTabSelect.emit({ tabIndex: newIndex });
      this.tabSelect.emit({ tabIndex: newIndex });
    }
  };

  // Sets focus on tab without selecting it (for manual activation)
  private keyboardFocusTab = (enabledTabIndex: number) => {
    const newIndex = this.tabs.findIndex(
      (tab) => tab.tabId === this.enabledTabs[enabledTabIndex].tabId
    );
    this.enabledTabs[enabledTabIndex].focus();
    this.focusedTabIndex = newIndex;
  };

  private handleKeyBoardNavAutomatic = (event: KeyboardEvent) => {
    const key = event.key;
    const enabledTabIndex = this.getIndexOfEnabledTab(this.selectedTab);
    let preventDefault = true;
    switch (key) {
      case "Home":
        this.keyboardSelectTab(0);
        break;
      case "End":
        this.keyboardSelectTab(this.enabledTabs.length - 1);
        break;
      case "ArrowRight":
        if (enabledTabIndex < this.enabledTabs.length - 1) {
          this.keyboardSelectTab(enabledTabIndex + 1);
        } else {
          this.keyboardSelectTab(0);
        }
        break;
      case "ArrowLeft":
        if (enabledTabIndex > 0) {
          this.keyboardSelectTab(enabledTabIndex - 1);
        } else {
          this.keyboardSelectTab(this.enabledTabs.length - 1);
        }
        break;
      default:
        preventDefault = false;
    }
    if (preventDefault) event.preventDefault();
  };

  private handleKeyBoardNavManual = (event: KeyboardEvent) => {
    const key = event.key;
    const enabledTabIndex = this.getIndexOfEnabledTab(this.focusedTabIndex);
    let preventDefault = true;
    switch (key) {
      case "Home":
        this.keyboardFocusTab(0);
        break;
      case "End":
        this.keyboardFocusTab(this.enabledTabs.length - 1);
        break;
      case "ArrowRight":
        if (enabledTabIndex < this.enabledTabs.length - 1) {
          this.keyboardFocusTab(enabledTabIndex + 1);
        } else {
          this.keyboardFocusTab(0);
        }
        break;
      case "ArrowLeft":
        if (enabledTabIndex > 0) {
          this.keyboardFocusTab(enabledTabIndex - 1);
        } else {
          this.keyboardFocusTab(this.enabledTabs.length - 1);
        }
        break;
      case "Enter":
        this.keyboardSelectTab(this.focusedTabIndex);
        break;
      case " ":
        this.keyboardSelectTab(this.focusedTabIndex);
        break;
      default:
        preventDefault = false;
    }
    if (preventDefault) event.preventDefault();
  };

  componentDidLoad(): void {
    this.setControlledMode();
    this.getChildren();
    this.linkTabs();
    this.attatchEventListeners();
    this.setInitialTab();
    this.configureTabs();
  }

  componentWillUpdate(): void {
    this.configureTabs();
  }

  disconnectedCallback(): void {
    if (this.activationType === "manual") {
      this.tabGroup.removeEventListener("keydown", (event) =>
        this.handleKeyBoardNavManual(event)
      );
    } else {
      this.tabGroup.removeEventListener("keydown", (event) =>
        this.handleKeyBoardNavAutomatic(event)
      );
    }
  }

  render() {
    return <slot></slot>;
  }
}
