import { newSpecPage } from "@stencil/core/testing";

import { Drawer } from "../ic-drawer";
import { testKeyboardEvent as keyboardEvent } from "../../../testspec.setup";

describe("ic-drawer", () => {
  it("should render on the right", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test" position="right"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render on the left", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test" position="left"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render at the top of the viewport", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test" position="top"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render at the bottom of the viewport", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test" position="bottom"></ic-drawer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set expanded as false and stop other events propagating when the backdrop is clicked when closeOnBackdropClick is set to true", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test"expanded="true"></ic-drawer>`,
    });

    expect(page.rootInstance.closeOnBackdropClick).toBe(true);

    const mockEvent = {
      stopPropagation: jest.fn(),
    };

    await page.rootInstance.onBackdropClick(mockEvent);

    expect(page.rootInstance.expanded).toBe(false);
  });

  it("should not set expanded as false when the backdrop is clicked when closeOnBackdropClick is set to false", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test" expanded="true" close-on-backdrop-click="false"></ic-drawer>`,
    });

    const mockEvent = {
      stopPropagation: jest.fn(),
    };

    const setDrawerExpandedSpy = jest.spyOn(
      page.rootInstance,
      "setDrawerExpanded"
    );

    await page.rootInstance.onBackdropClick(mockEvent);

    expect(setDrawerExpandedSpy).toHaveBeenCalledTimes(0);
  });

  it("should call the setDrawerExpanded method correctly", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test"><div slot="actions">
          <ic-button id="btn1" >Button 1</ic-button>
          <ic-button id="btn2">Button 2</ic-button>
          <ic-button id="btn3">Button 3</ic-button>
        </div>
      </ic-drawer>`,
    });
    expect(page.rootInstance.expanded).toBe(false);

    await page.rootInstance.setDrawerExpanded();

    expect(page.rootInstance.expanded).toBe(true);

    expect(page.body.style.overflow).toBe("hidden");
  });

  it("should return the correct index of the focused element", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test" expanded="true">
        <div slot="actions">
          <ic-button id="btn1">Button 1</ic-button>
          <ic-button id="btn2">Button 2</ic-button>
          <ic-button id="btn3">Button 3</ic-button>
        </div>
      </ic-drawer>`,
    });

    const getFocusedElementIndexSpy = jest.spyOn(
      page.rootInstance,
      "getFocusedElementIndex"
    );

    const setFocusIndexBasedOnShiftKeySpy = jest.spyOn(
      page.rootInstance,
      "setFocusIndexBasedOnShiftKey"
    );

    const loopNextFocusIndexIfLastElementSpy = jest.spyOn(
      page.rootInstance,
      "loopNextFocusIndexIfLastElement"
    );

    const getNextFocusElSpy = jest.spyOn(page.rootInstance, "getNextFocusEl");

    // Set up the interactiveElementList
    const drawer = page.rootInstance;
    drawer.interactiveElementList = [
      page.root.querySelector("#btn1"),
      page.root.querySelector("#btn2"),
      page.root.querySelector("#btn3"),
    ];

    page.rootInstance.focusedElementIndex = 2;

    // Call the focusNextInteractiveElement function
    drawer.focusNextInteractiveElement(true);

    expect(getFocusedElementIndexSpy).toHaveBeenCalledTimes(1);

    expect(setFocusIndexBasedOnShiftKeySpy).toHaveBeenCalledTimes(1);
    expect(setFocusIndexBasedOnShiftKeySpy).toHaveBeenCalledWith(true);

    // Assert that the focusedElementIndex is now 1
    expect(page.rootInstance.focusedElementIndex).toBe(1);

    expect(loopNextFocusIndexIfLastElementSpy).toHaveBeenCalled();

    expect(getNextFocusElSpy).toHaveBeenCalledWith(1);
  });

  it("should not respond to pressing the escape key when the drawer is not expanded", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test"></ic-drawer>`,
    });

    const setDrawerExpandedSpy = jest.spyOn(
      page.rootInstance,
      "setDrawerExpanded"
    );

    page.win.document.dispatchEvent(
      new KeyboardEvent("keydown", keyboardEvent("Escape"))
    );

    expect(setDrawerExpandedSpy).toHaveBeenCalledTimes(0);
  });

  it("should close when the drawer is expanded and the Escape key is pressed", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test" expanded="true"></ic-drawer>`,
    });

    const setDrawerExpandedSpy = jest.spyOn(
      page.rootInstance,
      "setDrawerExpanded"
    );

    page.win.document.dispatchEvent(
      new KeyboardEvent("keydown", keyboardEvent("Escape"))
    );

    expect(setDrawerExpandedSpy).toHaveBeenCalledTimes(1);
  });

  it("should not create a focus trap when the Tab key is pressed and the drawer is not expanded", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test"></ic-drawer>`,
    });

    const event = new KeyboardEvent("keydown", { key: "Tab" });

    jest.spyOn(event, "preventDefault");

    const focusNextInteractiveElementSpy = jest.spyOn(
      page.rootInstance,
      "focusNextInteractiveElement"
    );

    page.win.document.dispatchEvent(
      new KeyboardEvent("keydown", keyboardEvent("Tab"))
    );

    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(focusNextInteractiveElementSpy).toHaveBeenCalledTimes(0);
  });

  it("should create a focus trap when the Tab key is pressed and the drawer is expanded", async () => {
    const page = await newSpecPage({
      components: [Drawer],
      html: `<ic-drawer heading="Menu" message="test" expanded="true"></ic-drawer>`,
    });

    const event = new KeyboardEvent("keydown", { key: "Tab" });

    jest.spyOn(event, "preventDefault");

    const focusNextInteractiveElementSpy = jest.spyOn(
      page.rootInstance,
      "focusNextInteractiveElement"
    );

    page.win.document.dispatchEvent(event);

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(focusNextInteractiveElementSpy).toHaveBeenCalledTimes(1);
  });

  describe("ic-drawer lifecycle methods", () => {
    it(`should call updateInteractiveElements in componentDidLoad`, async () => {
      const page = await newSpecPage({
        components: [Drawer],
        html: `<ic-drawer heading="Menu" message="test"></ic-drawer>`,
      });

      const updateInteractiveElementsSpy = jest.spyOn(
        page.rootInstance,
        "updateInteractiveElements"
      );

      page.rootInstance.componentDidLoad();

      expect(updateInteractiveElementsSpy).toHaveBeenCalledTimes(1);
    });

    it("should call updateInteractiveElements in componentDidUpdate", async () => {
      const page = await newSpecPage({
        components: [Drawer],
        html: `<ic-drawer heading="Menu" message="test" expanded="true"></ic-drawer>`,
      });

      const updateInteractiveElementsSpy = jest.spyOn(
        page.rootInstance,
        "updateInteractiveElements"
      );

      page.root.expanded = !page.root.expanded;

      page.rootInstance.componentDidUpdate();
      await page.waitForChanges();

      expect(updateInteractiveElementsSpy).toHaveBeenCalledTimes(2);
    });
  });
});
