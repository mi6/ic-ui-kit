import { PaginationItem } from "./ic-pagination-item";
import { newSpecPage } from "@stencil/core/testing";
import { AnyHTMLElement } from "@stencil/core/internal";

describe("pagination- item", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item />`,
    });

    expect(page.root).toMatchSnapshot("is rendered");
  });
  it("should render", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item type='page' />`,
    });

    expect(page.root).toMatchSnapshot("a page pagination-item type");
  });
  it("should render", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item type='ellipsis' />`,
    });

    expect(page.root).toMatchSnapshot("an ellipsis pagination-item type");
  });
  it("should emit an event", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item type='page' />`,
    });
    const pageEl = (await page.root.shadowRoot.querySelector(
      "button"
    )) as AnyHTMLElement;
    await pageEl.click();
    expect(page.root).toMatchSnapshot(
      "a page pagination-item type with click event"
    );
  });
});
