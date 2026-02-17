import { newSpecPage } from "@stencil/core/testing";

import { Drawer } from "../../ic-drawer";
import { Button } from "@ukic/web-components/src/components/ic-button/ic-button";
import * as helpers from "../../../../utils/helpers";

// Time taken for drawer to fully expand / collapse
const DELAY_MS = 300;

describe("ic-drawer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render on the right", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" position="right"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render on the left", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" position="left"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render at the top", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" position="top"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render at the bottom", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" position="bottom"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as expanded", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" expanded="true"></ic-drawer>`,
    });

    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render small", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" size="small"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render large", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" size="large"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with boundary prop set to 'parent'", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" boundary="parent"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with trigger prop set to 'controlled'", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" trigger="controlled"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with hidden close button when trigger prop is set to 'controlled'", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" hide-close-button="true" trigger="controlled"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with theme prop set to 'light'", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" theme="light"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with theme prop set to 'dark'", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" theme="dark"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should apply custom chevron button aria-label to chevron button", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" chevron-button-aria-label="Test aria-label"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should apply custom close button aria-label to close button", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" close-button-aria-label="Test aria-label" trigger="controlled"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with slotted content", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer>
        <svg
          slot="heading-adornment"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
          />
        </svg>
        <ic-typography slot="heading" variant="h4">
          <h4>Test heading</h4>
        </ic-typography>
        <div slot="message">
          <ic-typography>
            <p>
              Test message
            </p>
          </ic-typography>
        <div>
        <ic-button slot="actions">Add to order</ic-button>
      </ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should expand and collapse as the expanded prop is changed, and emit the icDrawerExpanded event", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"></ic-drawer>`,
    });

    const handleDrawerExpandedSpy = jest.spyOn(
      page.rootInstance,
      "handleDrawerExpanded"
    );

    const drawerExpandedEventSpy = jest.fn();
    document.addEventListener("icDrawerExpanded", drawerExpandedEventSpy);

    page.root?.setAttribute("expanded", "true");
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(drawerExpandedEventSpy).toHaveBeenCalledTimes(1);
    expect(drawerExpandedEventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { expanded: true },
      })
    );
    expect(handleDrawerExpandedSpy).toHaveBeenCalledTimes(1);

    page.root?.setAttribute("expanded", "false");
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(drawerExpandedEventSpy).toHaveBeenCalledTimes(2);
    expect(drawerExpandedEventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { expanded: false },
      })
    );
    expect(handleDrawerExpandedSpy).toHaveBeenCalledTimes(2);
  });

  it("should create a margin resize observer when position prop is set to 'top' or 'bottom' and trigger is prop set to 'chevron'", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" position="top" trigger="chevron"></ic-drawer>`,
    });

    const resizeObserverCallback = new ResizeObserver(() =>
      page.rootInstance.updateActionAreaMargin()
    );

    expect(page.rootInstance.marginResizeObserver).toBe(resizeObserverCallback);

    page.rootInstance.marginResizeObserver = undefined;

    page.root?.setAttribute("position", "bottom");
    await page.waitForChanges();

    expect(page.rootInstance.marginResizeObserver).toBe(resizeObserverCallback);
  });

  it("should not create a margin resize observer when trigger prop is set to 'controlled' and position is set to 'right' or 'left'", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" position="right" trigger="controlled"></ic-drawer>`,
    });

    expect(page.rootInstance.marginResizeObserver).toBeUndefined();

    page.root?.setAttribute("position", "left");
    await page.waitForChanges();

    expect(page.rootInstance.marginResizeObserver).toBeUndefined();

    page.root?.setAttribute("trigger", "chevron");
    await page.waitForChanges();

    expect(page.rootInstance.marginResizeObserver).toBeUndefined();

    page.root?.setAttribute("position", "top");
    await page.waitForChanges();

    const resizeObserverCallback = new ResizeObserver(() =>
      page.rootInstance.updateActionAreaMargin()
    );
    expect(page.rootInstance.marginResizeObserver).toBe(resizeObserverCallback);
  });

  it("should handle Tab key press correctly - focussing the next interactive element", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" expanded="true"></ic-drawer>`,
    });

    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    Object.defineProperty(helpers, "handleFocusTrapTabKeyPress", {
      value: jest.fn().mockReturnValue({
        newFocusAttemptCount: 1,
        newFocusedElementIndex: 2,
        preventDefault: true,
      }),
    });

    const tabPress = new KeyboardEvent("keydown", {
      key: "Tab",
      shiftKey: false,
    });
    const preventDefaultSpy = jest.spyOn(tabPress, "preventDefault");

    document.dispatchEvent(tabPress);

    expect(helpers.handleFocusTrapTabKeyPress).toHaveBeenCalled();
    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(page.rootInstance.focusAttemptCount).toBe(1);
    expect(page.rootInstance.focusedElementIndex).toBe(2);
  });

  it("should handle Escape key press correctly - collapsing the drawer", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" expanded="true"></ic-drawer>`,
    });

    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    const escapePress = new KeyboardEvent("keydown", {
      key: "Escape",
    });
    const handleDrawerExpandedSpy = jest.spyOn(
      page.rootInstance,
      "handleDrawerExpanded"
    );

    document.dispatchEvent(escapePress);
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(handleDrawerExpandedSpy).toHaveBeenCalled();
    expect(page.rootInstance.expanded).toBe(false);
  });

  it("should ignore keyboard events when the drawer is collapsed", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"></ic-drawer>`,
    });

    const handleDrawerExpandedSpy = jest.spyOn(
      page.rootInstance,
      "handleDrawerExpanded"
    );

    let keyPress = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(keyPress);
    await page.waitForChanges();

    expect(handleDrawerExpandedSpy).not.toHaveBeenCalled();

    keyPress = new KeyboardEvent("keydown", { key: "Tab" });
    document.dispatchEvent(keyPress);
    await page.waitForChanges();

    expect(handleDrawerExpandedSpy).not.toHaveBeenCalled();
  });

  it("should set overflow to 'hidden' on parent element when boundary is set to 'parent'", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" boundary="parent"></ic-drawer>`,
    });

    expect(page.body.style.overflow).toBe("hidden");
  });

  it("should remove 'hidden' overflow when the drawer is removed from the DOM", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" boundary="parent"></ic-drawer>`,
    });

    page.rootInstance.disconnectedCallback();
    await page.waitForChanges();

    expect(page.body.style.overflow).toBe("");
  });

  it("should expand and collapse when the chevron button is clicked", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"></ic-drawer>`,
    });

    const chevronButton = page.root?.shadowRoot?.querySelector(
      ".chevron-btn"
    ) as HTMLIcButtonElement;

    chevronButton?.click();
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(page.rootInstance.expanded).toBe(true);

    chevronButton?.click();
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(page.rootInstance.expanded).toBe(false);
  });

  it("should move the action area to above the chevron button (using a margin) when there is not enough space (top and bottom position)", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"><ic-button slot="actions">Test button</ic-button></ic-drawer>`,
    });

    jest
      .spyOn(page.rootInstance, "preventActionAreaChevronOverlap")
      .mockReturnValue(true);
    jest
      .spyOn(page.rootInstance.el, "getBoundingClientRect")
      .mockReturnValue({ width: 200 });
    jest
      .spyOn(page.rootInstance.actionAreaEl, "getBoundingClientRect")
      .mockReturnValue({ width: 120 });

    page.rootInstance.updateActionAreaMargin();
    await page.waitForChanges();

    expect(
      page.rootInstance.actionAreaEl.classList.contains("with-margin")
    ).toBe(true);
  });

  it("should not move the action area to above the chevron button (using a margin) when there is enough space (top and bottom position)", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"><ic-button slot="actions">Test button</ic-button></ic-drawer>`,
    });

    jest
      .spyOn(page.rootInstance, "preventActionAreaChevronOverlap")
      .mockReturnValue(true);
    jest
      .spyOn(page.rootInstance.el, "getBoundingClientRect")
      .mockReturnValue({ width: 200 });
    jest
      .spyOn(page.rootInstance.actionAreaEl, "getBoundingClientRect")
      .mockReturnValue({ width: 10 });

    page.rootInstance.updateActionAreaMargin();
    await page.waitForChanges();

    expect(
      page.rootInstance.actionAreaEl.classList.contains("with-margin")
    ).toBe(false);
  });

  it("should set the tab-index of the content area to 0 and include it in the interactive element list when it is scrollable / content overflows", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"></ic-drawer>`,
    });

    Object.defineProperty(page.rootInstance.contentAreaEl, "scrollHeight", {
      value: 200,
    });
    Object.defineProperty(page.rootInstance.contentAreaEl, "clientHeight", {
      value: 100,
    });

    page.rootInstance.getInteractiveElements();
    await page.waitForChanges();

    expect(page.rootInstance.contentAreaEl.tabIndex).toBe(0);
    expect(page.rootInstance.interactiveElementList).toContain(
      page.rootInstance.contentAreaEl
    );
  });

  it("should not set the tab-index of the content area to 0 or include it in the interactive element list when it is not scrollable", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"></ic-drawer>`,
    });

    Object.defineProperty(page.rootInstance.contentAreaEl, "scrollHeight", {
      value: 200,
    });
    Object.defineProperty(page.rootInstance.contentAreaEl, "clientHeight", {
      value: 200,
    });

    page.rootInstance.getInteractiveElements();
    await page.waitForChanges();

    expect(page.rootInstance.contentAreaEl.tabIndex).toBe(-1);
    expect(page.rootInstance.interactiveElementList).not.toContain(
      page.rootInstance.contentAreaEl
    );
  });

  it("should set the drawer panel as an interactive element if there are no other interactive elements", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" trigger="controlled" hide-close-button="true"></ic-drawer>`,
    });

    page.rootInstance.getInteractiveElements();
    await page.waitForChanges();

    expect(page.rootInstance.interactiveElementList).toContain(
      page.rootInstance.drawerPanelEl
    );

    Object.defineProperty(page.root, "shadowRoot", {
      value: undefined,
    });
    page.root?.setAttribute("hide-close-button", "false");
    await page.waitForChanges();

    page.rootInstance.getInteractiveElements();
    await page.waitForChanges();

    expect(page.rootInstance.interactiveElementList).toContain(
      page.rootInstance.drawerPanelEl
    );
  });

  it("should initially remove the margin resize observer when setMarginResizeObserver is called", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"></ic-drawer>`,
    });

    expect(page.rootInstance.marginResizeObserver).toBeUndefined();

    page.rootInstance.marginResizeObserver = new ResizeObserver(() => {});
    await page.waitForChanges();

    expect(page.rootInstance.marginResizeObserver).not.toBeUndefined();

    const disconnectSpy = jest.spyOn(
      page.rootInstance.marginResizeObserver,
      "disconnect"
    );

    page.rootInstance.setMarginResizeObserver();
    await page.waitForChanges();

    expect(disconnectSpy).toHaveBeenCalled();
    expect(page.rootInstance.marginResizeObserver).toBeUndefined();
  });

  it("should collapse when the backdrop is clicked when close-on-backdrop-click prop is set to 'true'", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" expanded="true" close-on-backdrop-click="true"></ic-drawer>`,
    });

    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    const mockEvent = {
      stopPropagation: jest.fn(),
    };

    await page.rootInstance.handleBackdropClick(mockEvent);
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(page.rootInstance.expanded).toBe(false);
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });

  it("should not collapse when the backdrop is clicked when close-on-backdrop-click prop is set to 'false'", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" expanded="true" close-on-backdrop-click="false"></ic-drawer>`,
    });

    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    const mockEvent = {
      stopPropagation: jest.fn(),
    };

    await page.rootInstance.handleBackdropClick(mockEvent);
    await page.waitForChanges();

    expect(page.rootInstance.expanded).toBe(true);
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });

  it("should get the trigger element correctly when expanded", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" trigger="controlled"></ic-drawer>`,
    });

    const mockActiveElement = document.createElement("button");
    document.body.appendChild(mockActiveElement);
    Object.defineProperty(document, "activeElement", {
      value: mockActiveElement,
    });

    page.rootInstance.expanded = true;
    page.rootInstance.handleDrawerExpanded(true);
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(page.rootInstance.triggerElement).toBe(mockActiveElement);
  });

  it("should update the focusedElementIndex correctly when expanded", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"></ic-drawer>`,
    });

    const focusElementSpy = jest
      .spyOn(helpers, "focusElement")
      .mockReturnValue({ newFocusAttemptCount: 0, newFocusedElementIndex: 1 });

    page.rootInstance.focusedElementIndex = 0;
    page.rootInstance.interactiveElementList = [
      document.createElement("button"),
      document.createElement("button"),
    ];
    await page.waitForChanges();

    page.rootInstance.expanded = true;
    page.rootInstance.handleDrawerExpanded(true);
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(focusElementSpy).toHaveBeenCalledWith(
      0,
      0,
      page.rootInstance.interactiveElementList
    );
    expect(page.rootInstance.focusedElementIndex).toBe(1);
  });

  it("should focus the trigger element correctly when collapsed (trigger prop set to 'controlled')", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" trigger="controlled" expanded="true"></ic-drawer>`,
    });

    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    const mockTriggerElement = document.createElement("button");
    page.rootInstance.triggerElement = mockTriggerElement;
    await page.waitForChanges();

    const focusSpy = jest.spyOn(mockTriggerElement, "focus");

    page.rootInstance.handleDrawerExpanded(false);
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it("should not throw an error when trying to focus on the trigger element and the trigger element does not exist", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" trigger="controlled" expanded="true"></ic-drawer>`,
    });

    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    page.rootInstance.triggerElement = undefined;
    await page.waitForChanges();

    expect(() => {
      page.rootInstance.handleDrawerExpanded(false);
      jest.advanceTimersByTime(DELAY_MS);
    }).not.toThrow();
  });

  it("should focus the chevron button correctly when collapsed (trigger prop set to 'chevron')", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" trigger="chevron" expanded="true"></ic-drawer>`,
    });

    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    Object.defineProperty(page.rootInstance.chevronButton, "setFocus", {
      value: jest.fn(),
    });

    page.rootInstance.handleDrawerExpanded(false);
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(page.rootInstance.chevronButton.setFocus).toHaveBeenCalled();
  });

  it("should not throw an error when trying to focus on the chevron button and the chevron button does not exist", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" trigger="chevron" expanded="true"></ic-drawer>`,
    });

    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    page.rootInstance.chevronButton = undefined;
    await page.waitForChanges();

    expect(() => {
      page.rootInstance.handleDrawerExpanded(false);
      jest.advanceTimersByTime(DELAY_MS);
    }).not.toThrow();
  });

  it("should expand when clicked while collapsed", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" expanded="false"></ic-drawer>`,
    });

    page.rootInstance.drawerPanelEl.click();
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(page.rootInstance.expanded).toBe(true);
  });

  it("should not collapse when clicked while expanded", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" expanded="true"></ic-drawer>`,
    });

    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    page.rootInstance.drawerPanelEl.click();
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(page.rootInstance.expanded).toBe(true);
  });

  it("should collapse when the close button is clicked", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message" expanded="true" trigger="controlled"></ic-drawer>`,
    });

    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(page.rootInstance.expanded).toBe(true);

    const closeButton = page.root?.shadowRoot?.querySelector(
      ".close-btn"
    ) as HTMLIcButtonElement;
    closeButton.click();
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(page.rootInstance.expanded).toBe(false);
  });

  it("should call refreshInteractiveElementsOnSlotChange with the correct values", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"></ic-drawer>`,
    });

    const refreshInteractiveElementsOnSlotChangeSpy = jest.spyOn(
      helpers,
      "refreshInteractiveElementsOnSlotChange"
    );

    page.rootInstance.setContentAreaMutationObserver();
    await page.waitForChanges();

    expect(refreshInteractiveElementsOnSlotChangeSpy).toHaveBeenCalledWith(
      page.root?.shadowRoot?.querySelector(".drawer-content"),
      page.rootInstance.getInteractiveElements
    );

    Object.defineProperty(page.root, "shadowRoot", {
      value: undefined,
      configurable: true,
    });
    await page.waitForChanges();

    page.rootInstance.setContentAreaMutationObserver();
    await page.waitForChanges();

    expect(refreshInteractiveElementsOnSlotChangeSpy).toHaveBeenCalledWith(
      null,
      page.rootInstance.getInteractiveElements
    );
  });

  it("should call setInnerPanelResizeObserver and setParentOverflowHidden when the boundary prop value is changed", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"></ic-drawer>`,
    });

    const setInnerPanelResizeObserverSpy = jest.spyOn(
      page.rootInstance,
      "setInnerPanelResizeObserver"
    );
    const setParentOverflowHiddenSpy = jest.spyOn(
      page.rootInstance,
      "setParentOverflowHidden"
    );

    page.root?.setAttribute("boundary", "parent");
    await page.waitForChanges();

    expect(setInnerPanelResizeObserverSpy).toHaveBeenCalled();
    expect(setParentOverflowHiddenSpy).toHaveBeenCalled();
  });

  it("should call setInnerPanelResizeObserver when the expanded prop value is changed", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"></ic-drawer>`,
    });

    const setInnerPanelResizeObserverSpy = jest.spyOn(
      page.rootInstance,
      "setInnerPanelResizeObserver"
    );

    page.root?.setAttribute("expanded", "true");
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(setInnerPanelResizeObserverSpy).toHaveBeenCalled();
  });

  it("should call setInnerPanelResizeObserver when the size prop value is changed", async () => {
    const page = await newSpecPage({
      components: [Button, Drawer],
      html: `<ic-drawer heading="Test heading" message="Test message"></ic-drawer>`,
    });

    const setInnerPanelResizeObserverSpy = jest.spyOn(
      page.rootInstance,
      "setInnerPanelResizeObserver"
    );

    page.root?.setAttribute("size", "small");
    jest.advanceTimersByTime(DELAY_MS);
    await page.waitForChanges();

    expect(setInnerPanelResizeObserverSpy).toHaveBeenCalled();
  });
});
