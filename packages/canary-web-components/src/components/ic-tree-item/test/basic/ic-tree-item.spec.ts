import { newSpecPage } from "@stencil/core/testing";
import { TreeItem } from "../../ic-tree-item";
import { IcTypography as Typography } from "@ukic/web-components/dist/components/ic-typography";

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

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [TreeItem],
      html: `<ic-tree-item label="Item 1" disabled="true"></ic-tree-item>`,
    });

    expect(page.root).toMatchSnapshot();
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

    const icon = document.createElement("svg");
    icon.setAttribute("slot", "icon");

    page.rootInstance.hostMutationCallback([
      {
        type: "childList",
        addedNodes: [icon],
        removedNodes: [],
      },
    ]);
  });
});
