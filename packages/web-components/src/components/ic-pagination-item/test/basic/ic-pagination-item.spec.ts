import { PaginationItem } from "../../ic-pagination-item";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-pagination-item", () => {
  it("should render default pagination item", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item page=1></ic-pagination-item>`,
    });

    expect(page.root).toMatchSnapshot("render default pagination item");
  });

  it("should render with custom label", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item page=1 label="screen"></ic-pagination-item>`,
    });

    expect(page.root).toMatchSnapshot("render with custom label");
  });

  it("should render with dark appearance", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item page=1 type="page" appearance="dark"></ic-pagination-item>`,
    });

    expect(page.root).toMatchSnapshot("render with dark appearance");
  });

  it("should render with light appearance", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item page=1 type="page" appearance="light"></ic-pagination-item>`,
    });

    expect(page.root).toMatchSnapshot("render with light appearance");
  });

  it("should render as selected item", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item page=1 type="page" selected></ic-pagination-item>`,
    });

    expect(page.root).toMatchSnapshot("render as selected item");
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item page=1 type="page" disabled></ic-pagination-item>`,
    });

    expect(page.root).toMatchSnapshot("render disabled");

    page.root?.setAttribute("disabled", "false");

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("disabled-removed");
  });

  it("should render as ellipsis type", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item page=1 type="ellipsis"></ic-pagination-item>`,
    });

    expect(page.root).toMatchSnapshot("render as ellipsis type");
  });

  it("should render disabled ellipsis type", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item page=1 type="ellipsis" disabled></ic-pagination-item>`,
    });

    expect(page.root).toMatchSnapshot("render disabled ellipsis type");
  });

  it("should test paginationItemClick event", async () => {
    const page = await newSpecPage({
      components: [PaginationItem],
      html: `<ic-pagination-item page=1></ic-pagination-item>`,
    });

    const eventSpy = jest.fn();

    document.addEventListener("paginationItemClick", eventSpy);

    page.rootInstance.handleClick();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          page: 1,
        }),
      })
    );
  });
});
