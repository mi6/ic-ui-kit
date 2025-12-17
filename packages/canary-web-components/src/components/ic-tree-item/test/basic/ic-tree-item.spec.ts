import { newSpecPage } from "@stencil/core/testing";
import { TreeItem } from "../../ic-tree-item";
import { IcTypography as Typography } from "@ukic/web-components/dist/components/ic-typography";
import * as helpers from "../../../../utils/helpers";

describe("ic-tree-item component", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1"></ic-tree-item>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with icon", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-tree-item>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with child tree items", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1">
          <ic-tree-item label="Item 1.1"></ic-tree-item>
          <ic-tree-item label="Item 1.2"></ic-tree-item>
        </ic-tree-item>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with router item slot", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1">
          <a slot="router-item" href="/">Item 1</a>
        </ic-tree-item>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render custom ids", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1" tree-item-id="item-1"><ic-tree-item>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1" disabled="true"></ic-tree-item>`,
    });

    expect(page.root).toMatchSnapshot();

    page.rootInstance.disabled = false;

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("disabled-removed");
  });

  it("should render selected", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1" selected="true"></ic-tree-item>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with slotted label", async () => {
    const page = await newSpecPage({
      components: [TreeItem, Typography],
      html: `<ic-tree-item>
        <ic-typography slot="label" variant="body">Item 1</ic-typography>
      </ic-tree-item>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as an anchor when href is set and not disabled", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Link Item" href="/test" ></ic-tree-item>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should select tree item on Enter", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1"></ic-tree-item>`,
    });

    expect(page.rootInstance.selected).toBe(false);

    const event = new KeyboardEvent("keydown", { key: "Enter" });

    await page.rootInstance.handleKeyDown(event);

    expect(page.rootInstance.selected).toBe(true);
  });

  it("should select tree item on Space", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1"></ic-tree-item>`,
    });

    expect(page.rootInstance.selected).toBe(false);

    const event = new KeyboardEvent("keydown", { key: " " });

    await page.rootInstance.handleKeyDown(event);

    expect(page.rootInstance.selected).toBe(true);
  });

  it("should expand/collapse parent tree item on Enter", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1">
          <ic-tree-item label="Item 1.1"></ic-tree-item>
          <ic-tree-item label="Item 1.2"></ic-tree-item>
        </ic-tree-item>`,
    });

    expect(page.rootInstance.expanded).toBe(false);

    const event = new KeyboardEvent("keydown", { key: "Enter" });

    await page.rootInstance.handleKeyDown(event);

    expect(page.rootInstance.expanded).toBe(true);
  });

  it("should test rendering icon slot after initial render", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1"></ic-tree-item>`,
    });

    const mockFn = jest.fn();
    Object.defineProperty(helpers, "renderDynamicChildSlots", {
      value: mockFn,
    });

    const icon = document.createElement("svg");
    icon.setAttribute("slot", "icon");

    page.rootInstance.hostMutationCallback([
      {
        type: "childList",
        addedNodes: [icon],
        removedNodes: [],
      },
    ]);

    expect(mockFn).toHaveBeenCalled();
    expect(page.rootInstance.isParent).toBe(false);
  });

  it("should emit icTreeItemSelected only once, when clicked", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1"></ic-tree-item>`,
    });

    const eventSpy = jest.fn();

    page.root!.addEventListener("icTreeItemSelected", eventSpy);

    page.rootInstance.handleTreeItemClicked();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(1);
  });

  it("should test item becomes a parent when child added", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1"></ic-tree-item>`,
    });

    expect(page.rootInstance.isParent).toBe(false);

    const eventSpy = jest.fn();

    page.root!.addEventListener("icTreeItemExpanded", eventSpy);

    page.rootInstance.handleTreeItemClicked();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(0);

    const treeItem = document.querySelector("ic-tree-item");

    treeItem!.innerHTML = '<ic-tree-item label="Item 2"></ic-tree-item>';

    await page.waitForChanges();
    page.rootInstance.hostMutationCallback([
      {
        type: "childList",
        addedNodes: [],
        removedNodes: [],
      },
    ]);
    expect(page.rootInstance.isParent).toBe(true);

    page.rootInstance.handleTreeItemClicked();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(1);
    expect(page.rootInstance.expanded).toBe(true);
  });

  it("should test item is no longer a parent when children removed", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1">
        <ic-tree-item label="Item 2"></ic-tree-item>
      </ic-tree-item>`,
    });

    expect(page.rootInstance.isParent).toBe(true);

    const eventSpy = jest.fn();

    page.root!.addEventListener("icTreeItemExpanded", eventSpy);

    const treeItem = document.querySelector("ic-tree-item");

    page.rootInstance.handleTreeItemClicked();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(1);

    treeItem!.innerHTML = "";

    await page.waitForChanges();
    page.rootInstance.hostMutationCallback([
      {
        type: "childList",
        addedNodes: [],
        removedNodes: [],
      },
    ]);
    expect(page.rootInstance.isParent).toBe(false);

    page.rootInstance.handleTreeItemClicked();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(1);
  });

  it("should call focus on treeItemElement when setFocus is called", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1"></ic-tree-item>`,
    });

    const focusSpy = jest.fn();
    page.rootInstance.treeItemElement = { focus: focusSpy } as any;
    page.rootInstance.routerSlot = null;

    await page.rootInstance.setFocus();
    expect(focusSpy).toHaveBeenCalled();
  });

  it("should call focus on routerSlot when setFocus is called and router slot exists", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1"><a slot="router-item" href="/">Link</a></ic-tree-item>`,
    });

    const routerSlot = document.createElement("a");
    routerSlot.focus = jest.fn();
    page.rootInstance.routerSlot = routerSlot;
    page.rootInstance.treeItemElement = null;

    jest.spyOn(page.rootInstance, "hasRouterSlot").mockReturnValue(true);

    await page.rootInstance.setFocus();
    expect(routerSlot.focus).toHaveBeenCalled();
  });

  it("should call handleDisplayTooltip when onFocus and onBlur are triggered", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1"></ic-tree-item>`,
    });

    const spy = jest.spyOn(page.rootInstance, "handleDisplayTooltip");

    const treeItemContent =
      page.root!.shadowRoot!.querySelector(".tree-item-content");
    expect(treeItemContent).toBeTruthy();

    treeItemContent!.dispatchEvent(new FocusEvent("focus"));
    expect(spy).toHaveBeenCalledWith(true);

    treeItemContent!.dispatchEvent(new FocusEvent("blur"));
    expect(spy).toHaveBeenCalledWith(false);
  });

  it("should display tooltip on focus and blur", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1"></ic-tree-item>`,
    });

    const labelEl = document.createElement("div");
    labelEl.className = "tree-item-label";
    const displayTooltipSpy = jest.fn();
    labelEl.closest = jest.fn(() => ({ displayTooltip: displayTooltipSpy }));

    if (page.root && page.root.shadowRoot) {
      page.root.shadowRoot.querySelector = jest.fn((selector) => {
        if (selector === ".tree-item-label") return labelEl;
        return null;
      });
    }

    await page.rootInstance.handleDisplayTooltip(true);
    expect(displayTooltipSpy).toHaveBeenCalledWith(true);

    await page.rootInstance.handleDisplayTooltip(false);
    expect(displayTooltipSpy).toHaveBeenCalledWith(false);
  });

  it("should not create new typography if truncateTreeItemLabel is called with no slotted content", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="No router slot"></ic-tree-item>`,
    });
    const treeItem = page.rootInstance.el;

    expect(() =>
      page.rootInstance.truncateTreeItemLabel(treeItem)
    ).not.toThrow();
    expect(treeItem.querySelector("ic-typography")).toBeNull();
  });

  it("should create typography and replace firstChild if slotted content exists", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item><a slot="router-item">Test Label</a></ic-tree-item>`,
    });
    const treeItem = page.rootInstance.el;
    const slottedContent = treeItem.querySelector('[slot="router-item"]');

    expect(slottedContent.querySelector(".tree-item-label")).toBeNull();

    page.rootInstance.truncateTreeItemLabel(treeItem);
    const typographyEl = slottedContent.querySelector(
      "ic-typography.tree-item-label"
    );
    expect(typographyEl).not.toBeNull();
    expect(slottedContent.firstChild).toBe(typographyEl);
    expect(typographyEl.textContent).toContain("Test Label");
  });
});
