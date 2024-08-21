import { newSpecPage } from "@stencil/core/testing";
import { TreeView } from "../../ic-tree-view";
import { TreeItem } from "../../../ic-tree-item/ic-tree-item";
import { IcTypography as Typography } from "@ukic/web-components/dist/components/ic-typography";

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

    const treeItem: HTMLIcTreeItemElement = page.root.querySelector(
      "ic-tree-item#ic-tree-item-2"
    );
    treeItem.selected = true;
    await page.waitForChanges();

    page.rootInstance.handleTreeItemSelected({
      detail: { id: "ic-tree-item-3" },
    });

    expect(treeItem.selected).toBeFalsy();
  });

  it("should test rendering icon slot after initial render", async () => {
    const page = await newSpecPage({
      components: [TreeView],
      html: `<ic-tree-view heading="Heading"></ic-tree-view>`,
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
