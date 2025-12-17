import { newSpecPage } from "@stencil/core/testing";
import { TreeView } from "../../ic-tree-view";
import { TreeItem } from "../../../ic-tree-item/ic-tree-item";
import { IcTypography as Typography } from "@ukic/web-components/dist/components/ic-typography";

const parent = { tagName: "IC-TREE-VIEW", expanded: true };

const mockTreeItem = (
  disabled: boolean,
  setFocus?: jest.Mock,
  overrides = {}
) => ({
  parentElement: parent,
  offsetHeight: 10,
  disabled: disabled,
  setFocus,
  ...overrides,
});

describe("ic-tree-view component", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [TreeView],
      html: `<ic-tree-view heading="Heading"></ic-tree-view>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with icon", async () => {
    const page = await newSpecPage({
      components: [TreeView],
      html: `<ic-tree-view heading="Heading">
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
      </ic-tree-view>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with tree items", async () => {
    const page = await newSpecPage({
      components: [TreeView, TreeItem],
      html: `<ic-tree-view heading="Heading">
          <ic-tree-item label="Item 1"></ic-tree-item>
          <ic-tree-item label="Item 2"></ic-tree-item>
      </ic-tree-view>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with slotted heading", async () => {
    const page = await newSpecPage({
      components: [TreeView, Typography],
      html: `<ic-tree-view>
        <ic-typography slot="heading" variant="subtitle-large">Heading</ic-typography>
      </ic-tree-view>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should test handleTreeItemSelected", async () => {
    const page = await newSpecPage({
      components: [TreeView, TreeItem],
      html: `<ic-tree-view heading="Heading">
          <ic-tree-item label="Item 1"></ic-tree-item>
          <ic-tree-item label="Item 2"></ic-tree-item>
      </ic-tree-view>`,
    });

    const treeItem: HTMLIcTreeItemElement = page.root!.querySelector(
      "ic-tree-item#ic-tree-item-2"
    )!;
    treeItem.selected = true;
    await page.waitForChanges();

    page.rootInstance.handleTreeItemSelected({
      detail: { id: "ic-tree-item-3" },
    });

    expect(treeItem.selected).toBeFalsy();
  });

  it("should call watchTruncateTreeItemsHandler when truncateTreeItems changes", async () => {
    const page = await newSpecPage({
      components: [TreeView],
      html: `<ic-tree-view heading="Heading"></ic-tree-view>`,
    });

    const mockTreeItem1 = {
      truncateTreeItem: false,
      previousTruncateTreeItem: undefined,
    };
    const mockTreeItem2 = {
      truncateTreeItem: false,
      previousTruncateTreeItem: undefined,
    };
    page.rootInstance.treeItems = [mockTreeItem1, mockTreeItem2];

    page.rootInstance.smallDevice = true;
    page.rootInstance.truncateTreeItems = true;
    await page.waitForChanges();

    expect(mockTreeItem1.truncateTreeItem).toBe(true);
    expect(mockTreeItem2.truncateTreeItem).toBe(true);
    expect(mockTreeItem1.previousTruncateTreeItem).toBe(false);
    expect(mockTreeItem2.previousTruncateTreeItem).toBe(false);
  });

  it("should test getNextItemToSelect", async () => {
    const page = await newSpecPage({
      components: [TreeView, TreeItem],
      html: `<ic-tree-view heading="Heading">
          <ic-tree-item label="Item 1"></ic-tree-item>
          <ic-tree-item label="Item 2"></ic-tree-item>
          <ic-tree-item label="Item 3"></ic-tree-item>
      </ic-tree-view>`,
    });

    page.rootInstance.treeItems = [
      mockTreeItem(false),
      mockTreeItem(false),
      mockTreeItem(true),
    ];
    await page.waitForChanges();
    const nextItem = page.rootInstance.getNextItemToSelect(1, true);
    expect(nextItem).toBe(2);

    const previousItem = page.rootInstance.getNextItemToSelect(2, false);
    expect(previousItem).toBe(1);

    const moveToDisabledItem = page.rootInstance.getNextItemToSelect(2, true);
    expect(moveToDisabledItem).toBe(2);
  });

  it("should test handleKeyDown - ArrowDown", async () => {
    const page = await newSpecPage({
      components: [TreeView, TreeItem],
      html: `<ic-tree-view heading="Heading">
          <ic-tree-item label="Item 1"></ic-tree-item>
          <ic-tree-item label="Item 2"></ic-tree-item>
          <ic-tree-item label="Item 3"></ic-tree-item>
      </ic-tree-view>`,
    });

    const setFocus1 = jest.fn();
    const setFocus2 = jest.fn();
    const setFocus3 = jest.fn();

    page.rootInstance.treeItems = [
      mockTreeItem(false, setFocus1),
      mockTreeItem(false, setFocus2),
      mockTreeItem(false, setFocus3),
    ];

    Object.defineProperty(document, "activeElement", {
      value: page.rootInstance.treeItems[0],
      configurable: true,
    });

    const event = { key: "ArrowDown", preventDefault: jest.fn() } as any;
    await page.rootInstance.handleKeyDown(event);
    expect(setFocus2).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();

    Object.defineProperty(document, "activeElement", {
      value: page.rootInstance.treeItems[2],
      configurable: true,
    });
    const eventLast = { key: "ArrowDown", preventDefault: jest.fn() } as any;
    await page.rootInstance.handleKeyDown(eventLast);
    expect(setFocus3).toHaveBeenCalled();
    expect(eventLast.preventDefault).not.toHaveBeenCalled();
  });

  it("should test handleKeyDown - ArrowUp", async () => {
    const page = await newSpecPage({
      components: [TreeView, TreeItem],
      html: `<ic-tree-view heading="Heading">
          <ic-tree-item label="Item 1"></ic-tree-item>
          <ic-tree-item label="Item 2"></ic-tree-item>
          <ic-tree-item label="Item 3"></ic-tree-item>
      </ic-tree-view>`,
    });

    const setFocus1 = jest.fn();
    const setFocus2 = jest.fn();
    const setFocus3 = jest.fn();

    page.rootInstance.treeItems = [
      mockTreeItem(false, setFocus1),
      mockTreeItem(false, setFocus2),
      mockTreeItem(false, setFocus3),
    ];

    Object.defineProperty(document, "activeElement", {
      value: page.rootInstance.treeItems[2],
      configurable: true,
    });

    const event = { key: "ArrowUp", preventDefault: jest.fn() } as any;
    await page.rootInstance.handleKeyDown(event);
    expect(setFocus2).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();

    Object.defineProperty(document, "activeElement", {
      value: page.rootInstance.treeItems[0],
      configurable: true,
    });
    const eventFirst = { key: "ArrowUp", preventDefault: jest.fn() } as any;
    await page.rootInstance.handleKeyDown(eventFirst);
    expect(setFocus1).toHaveBeenCalled();
    expect(eventFirst.preventDefault).not.toHaveBeenCalled();
  });

  it("should test handleKeyDown - ArrowRight", async () => {
    const page = await newSpecPage({
      components: [TreeView, TreeItem],
      html: `<ic-tree-view heading="Heading">
            <ic-tree-item label="Item 1"></ic-tree-item>
            <ic-tree-item label="Item 2"></ic-tree-item>
            <ic-tree-item label="Item 3"></ic-tree-item>
        </ic-tree-view>`,
    });

    const updateAriaLabel = jest.fn();
    page.rootInstance.treeItems = [
      mockTreeItem(false, undefined, {
        isParent: true,
        expanded: false,
        hasParentExpanded: false,
        updateAriaLabel,
        children: [],
      }),
      mockTreeItem(false, undefined, {
        isParent: false,
        expanded: false,
        hasParentExpanded: false,
        updateAriaLabel,
        children: [],
      }),
      mockTreeItem(false, undefined, {
        isParent: false,
        expanded: false,
        hasParentExpanded: false,
        updateAriaLabel,
        children: [],
      }),
    ];
    Object.defineProperty(document, "activeElement", {
      value: page.rootInstance.treeItems[0],
      configurable: true,
    });
    const event = { key: "ArrowRight", preventDefault: jest.fn() } as any;
    await page.rootInstance.handleKeyDown(event);
    expect(page.rootInstance.treeItems[0].expanded).toBe(true);
    expect(page.rootInstance.treeItems[0].hasParentExpanded).toBe(true);
    expect(updateAriaLabel).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();

    const setFocusChild = jest.fn();
    page.rootInstance.treeItems[0].expanded = true;
    page.rootInstance.treeItems[0].children = [{ setFocus: setFocusChild }];
    await page.rootInstance.handleKeyDown(event);
    expect(setFocusChild).toHaveBeenCalled();
  });

  it("should test handleKeyDown - ArrowLeft", async () => {
    const page = await newSpecPage({
      components: [TreeView, TreeItem],
      html: `<ic-tree-view heading="Heading">
            <ic-tree-item label="Item 1"></ic-tree-item>
            <ic-tree-item label="Item 2"></ic-tree-item>
            <ic-tree-item label="Item 3"></ic-tree-item>
        </ic-tree-view>`,
    });

    const updateAriaLabel = jest.fn();
    page.rootInstance.treeItems = [
      mockTreeItem(false, undefined, {
        isParent: true,
        expanded: true,
        hasParentExpanded: true,
        updateAriaLabel,
        children: [],
      }),
      mockTreeItem(false, undefined, {
        isParent: false,
        expanded: false,
        hasParentExpanded: false,
        updateAriaLabel,
        children: [],
      }),
      mockTreeItem(false, undefined, {
        isParent: false,
        expanded: false,
        hasParentExpanded: false,
        updateAriaLabel,
        children: [],
      }),
    ];

    Object.defineProperty(document, "activeElement", {
      value: page.rootInstance.treeItems[0],
      configurable: true,
    });
    const event = { key: "ArrowLeft", preventDefault: jest.fn() } as any;
    await page.rootInstance.handleKeyDown(event);
    expect(page.rootInstance.treeItems[0].expanded).toBe(false);
    expect(page.rootInstance.treeItems[0].hasParentExpanded).toBe(false);
    expect(updateAriaLabel).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();

    const setFocusParent = jest.fn();
    page.rootInstance.treeItems[0].isParent = false;
    page.rootInstance.treeItems[0].expanded = false;
    page.rootInstance.treeItems[0].parentElement = {
      tagName: "IC-TREE-ITEM",
      setFocus: setFocusParent,
    };
    await page.rootInstance.handleKeyDown(event);
    expect(setFocusParent).toHaveBeenCalled();
  });

  it("should test child items are added after initial load", async () => {
    const page = await newSpecPage({
      components: [TreeView, TreeItem],
      html: `<ic-tree-view heading="Heading">
      </ic-tree-view>`,
    });

    expect(page.rootInstance.treeItems.length).toBe(0);

    const treeView = document.querySelector("ic-tree-view");

    treeView!.innerHTML =
      '<ic-tree-item label="Item 1"><ic-tree-item label="Item 2"></ic-tree-item></ic-tree-item><ic-tree-item label="Item 3"></ic-tree-item>';

    await page.waitForChanges();
    page.rootInstance.hostMutationCallback([
      {
        type: "childList",
        addedNodes: [],
        removedNodes: [],
      },
    ]);
    expect(page.rootInstance.treeItems.length).toBe(3);
  });

  it("should render with tree item data instead of slotted tree items", async () => {
    const page = await newSpecPage({
      components: [TreeView, TreeItem],
      html: `<ic-tree-view heading="Heading"></ic-tree-view>`,
    });

    page.rootInstance.treeItemData = [
      { label: "Item 1" },
      { label: "Item 2" },
      { label: "Item 3", disabled: true },
    ];
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render with tree item data with children and icons", async () => {
    const page = await newSpecPage({
      components: [TreeView, TreeItem],
      html: `<ic-tree-view heading="Heading"></ic-tree-view>`,
    });

    page.rootInstance.treeItemData = [
      {
        label: "Item 1",
        children: [{ label: "Item 1.1" }, { label: "Item 1.2" }],
      },
      {
        label: "Item 2",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>',
      },
      { label: "Item 3", disabled: true },
    ];
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should truncate heading and remove truncated heading", async () => {
    const page = await newSpecPage({
      components: [TreeView],
      html: `<ic-tree-view heading="Heading"></ic-tree-view>`,
    });
    page.rootInstance.truncateHeading = true;

    const heading = document.createElement("div");
    heading.className = "tree-view-header";
    Object.defineProperty(heading, "scrollHeight", { value: 40 });

    const headingContainer = document.createElement("div");
    headingContainer.className = "heading-area-container";
    Object.defineProperty(headingContainer, "clientHeight", { value: 20 });

    if (page.root && page.root.shadowRoot) {
      page.root.shadowRoot.querySelector = jest.fn((selector) => {
        if (selector === ".tree-view-header") return heading;
        if (selector === ".heading-area-container") return headingContainer;
        return null;
      });
    }

    page.rootInstance.truncateHeading = true;
    page.rootInstance.componentDidRender();

    expect(heading.classList.contains("ic-text-overflow")).toBe(true);

    page.rootInstance.removeHeadingTruncation();
    expect(heading.classList.contains("ic-text-overflow")).toBe(false);
  });

  it("should restore previousTruncateHeading and previousTruncateTreeItems when smallDevice is false in watchSmallDeviceHandler", async () => {
    const page = await newSpecPage({
      components: [TreeView],
      html: `<ic-tree-view heading="Heading"></ic-tree-view>`,
    });
    page.rootInstance.previousTruncateHeading = true;
    page.rootInstance.previousTruncateTreeItems = true;
    page.rootInstance.truncateHeading = false;
    page.rootInstance.truncateTreeItems = false;
    page.rootInstance.smallDevice = false;

    const treeItem = {
      previousTruncateTreeItem: true,
      truncateTreeItem: false,
    };
    page.rootInstance.treeItems = [treeItem];
    page.rootInstance.watchSmallDeviceHandler();
    page.rootInstance.watchTruncateTreeItemsHandler();
    expect(page.rootInstance.truncateHeading).toBe(true);
    expect(page.rootInstance.truncateTreeItems).toBe(true);
    expect(treeItem.truncateTreeItem).toBe(true);
  });
});
