import { newSpecPage } from "@stencil/core/testing";
import { TabGroup } from "../ic-tab-group/ic-tab-group";
import { TabPanel } from "../ic-tab-panel/ic-tab-panel";
import { Tab } from "../ic-tab/ic-tab";
import { TabContext } from "./ic-tab-context";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-tab-context component", () => {
  it("should render tab context with tabs", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    expect(page.root).toMatchSnapshot();

    //test disconnected callback for automatic activation
    page.setContent("");
  });

  it("should render tab context with tabs - light appearance", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context appearance="light">
      <ic-tab-group label="Example tab group" appearance="light">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render tab context with tabs - selected tab", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context selected-tab-index="2">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should test controlled mode - selected tab", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context selected-tab-index="2">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    expect(page.rootInstance.selectedTab).toBe(2);

    const eventSpy = jest.fn();
    page.root.addEventListener("icTabSelect", eventSpy);

    const tabGroup = page.root.querySelector("ic-tab-group");

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Home",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });

  it("should render tab context with tabs - manual activation", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context activation-type="manual">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    expect(page.root).toMatchSnapshot();

    //test disconnected callback for manual activation
    page.setContent("");
  });

  it("should render tab context with custom contextId", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context context-id="custom-context">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should test setting selected tab", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    expect(page.rootInstance.selectedTab).toBe(0);

    page.root.selectedTabIndex = 1;
    await page.waitForChanges();

    expect(page.rootInstance.selectedTab).toBe(1);
  });

  it("should test tab click handler", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    expect(page.rootInstance.selectedTabIndex).toBe(undefined);

    const eventSpy = jest.fn();
    page.root.addEventListener("icTabSelect", eventSpy);

    await page.rootInstance.tabClickHandler({
      stopImmediatePropagation: jest.fn(),
      detail: {
        contextId: "default",
        position: 1,
        tabId: "ic-tab--1-context-default",
      },
    });

    await page.waitForChanges();
    expect(page.rootInstance.selectedTab).toBe(1);
    expect(eventSpy).toHaveBeenCalled();
  });

  it("should test key down handler - automatic", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    const tabGroup = page.root.querySelector("ic-tab-group");

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "End",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.selectedTab).toBe(2);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Home",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.selectedTab).toBe(0);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowLeft",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.selectedTab).toBe(2);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowLeft",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.selectedTab).toBe(1);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.selectedTab).toBe(2);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.selectedTab).toBe(0);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.selectedTab).toBe(0);
  });

  it("should test key down handler - manual", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context activation-type="manual">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    const tabGroup = page.root.querySelector("ic-tab-group");

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "End",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.selectedTab).toBe(0);
    expect(page.rootInstance.focusedTabIndex).toBe(2);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.selectedTab).toBe(2);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Home",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.focusedTabIndex).toBe(0);
    expect(page.rootInstance.selectedTab).toBe(2);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: " ",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.selectedTab).toBe(0);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowLeft",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.focusedTabIndex).toBe(2);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowLeft",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.focusedTabIndex).toBe(1);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.focusedTabIndex).toBe(2);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.focusedTabIndex).toBe(0);

    tabGroup.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.focusedTabIndex).toBe(0);
  });

  it("should apply tab and panel ids to elements added after initial render of the context", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    const tabGroup = page.root.querySelector("ic-tab-group");

    tabGroup.insertAdjacentHTML("beforeend", "<ic-tab>Four</ic-tab>");
    page.root.insertAdjacentHTML(
      "beforeend",
      "<ic-tab-panel>Four</ic-tab-panel>"
    );
    await page.waitForChanges();

    const newTab = page.root.querySelector(
      '[id*="ic-tab-3-context-default"]'
    ) as HTMLIcTabElement;
    const newTabPanel = page.root.querySelector(
      '[id*="ic-tab-panel-3-context-default"]'
    ) as HTMLIcTabPanelElement;

    expect(newTab.tabId).toBe("ic-tab--3-context-default");
    expect(newTabPanel.panelId).toBe("ic-tab--3-context-default");
  });

  it("should reassign ids if tab and tab panel are dynamically removed", async () => {
    const page = await newSpecPage({
      components: [TabContext, TabGroup, Tab, TabPanel],
      html: `<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>`,
    });

    const tabGroup = page.root.querySelector("ic-tab-group");

    let allTabs = tabGroup.querySelectorAll("ic-tab");
    let allTabPanels = page.root.querySelectorAll("ic-tab-panel");

    expect(allTabs.length).toBe(3);
    expect(allTabPanels.length).toBe(3);

    allTabPanels[allTabPanels.length - 2].remove();
    allTabs[allTabs.length - 2].remove();

    await page.waitForChanges();

    allTabs = tabGroup.querySelectorAll("ic-tab");
    allTabPanels = page.root.querySelectorAll("ic-tab-panel");

    expect(allTabs.length).toBe(2);
    expect(allTabPanels.length).toBe(2);

    const newlyUpdatedTab = page.root.querySelector(
      '[id*="ic-tab-1-context-default"]'
    ) as HTMLIcTabElement;
    const newlyUpdatedTabPanel = page.root.querySelector(
      '[id*="ic-tab-panel-1-context-default"]'
    ) as HTMLIcTabPanelElement;

    expect(newlyUpdatedTab.tabId).toBe("ic-tab--1-context-default");
    expect(newlyUpdatedTabPanel.panelId).toBe("ic-tab--1-context-default");
  });
});
