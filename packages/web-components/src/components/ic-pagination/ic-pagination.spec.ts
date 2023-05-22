import { Pagination } from "./ic-pagination";
import { Button } from "../ic-button/ic-button";
import { newSpecPage } from "@stencil/core/testing";
import { AnyHTMLElement } from "@stencil/core/internal";
import { PaginationItem } from "./../ic-pagination-item/ic-pagination-item";

describe("ic-pagination simple appearance component", () => {
  it("should render with 10 pages", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=10 ></ic-pagination>`,
    });

    expect(page.root).toMatchSnapshot("render with ten pages");
  });
  it("should renderon the last pages", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages="15" default-page="15" ></ic-pagination>`,
    });

    expect(page.root).toMatchSnapshot("render with ten pages");
  });

  it("should render with the default page selected", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages="15" default-page=4 ></ic-pagination>`,
    });

    expect(page.root).toMatchSnapshot("render at the default page");
  });

  it("should render with first and last buttons disabled", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages="15" hide-first-page-button=true hide-last-page-button=true></ic-pagination>`,
    });

    expect(page.root).toMatchSnapshot("no first or last page button");
  });
  it("should render without current page", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages="15" hide-current-page=true ></ic-pagination>`,
    });

    expect(page.root).toMatchSnapshot("no current page");
  });
  it("should render all pages when total pages less than min width based on boundary-count and adjacent-count", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination
      pages="11"
      type="complex"
      adjacent-count="2"
      boundary-count="2" ></ic-pagination>`,
    });

    expect(page.root).toMatchSnapshot(
      "pages less than adjacent-count + boundary-count"
    );
  });
  it("should render with interactions disabled", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages="15" loading=true ></ic-pagination>`,
    });

    expect(page.root).toMatchSnapshot("loading");
  });
  it("should click the next page button", async () => {
    const page = await newSpecPage({
      components: [Pagination, Button, PaginationItem],
      html: `<ic-pagination pages="15" ></ic-pagination>
      `,
    });

    const btn = (await page.root.shadowRoot.querySelector(
      "#next-page-button"
    )) as HTMLIcButtonElement;
    const pageEl = (await page.root.shadowRoot.querySelector(
      "ic-pagination-item"
    )) as HTMLIcPaginationItemElement;

    await btn.click();
    await page.waitForChanges();

    expect(pageEl.page).toBe(2);
  });

  it("should click the last page button", async () => {
    const page = await newSpecPage({
      components: [Pagination, Button, PaginationItem],
      html: `<ic-pagination pages="15" ></ic-pagination>
      `,
    });

    const btn = (await page.root.shadowRoot.querySelector(
      "#last-page-button"
    )) as HTMLIcButtonElement;
    const pageEl = (await page.root.shadowRoot.querySelector(
      "ic-pagination-item"
    )) as HTMLIcPaginationItemElement;

    await btn.click();
    await page.waitForChanges();

    expect(pageEl.page).toBe(15);
  });
  it("should click the previous page button", async () => {
    const page = await newSpecPage({
      components: [Pagination, Button, PaginationItem],
      html: `<ic-pagination pages="15" default-page=5 ></ic-pagination>
      `,
    });

    const btn = (await page.root.shadowRoot.querySelector(
      "#previous-page-button"
    )) as HTMLIcButtonElement;
    const pageEl = (await page.root.shadowRoot.querySelector(
      "ic-pagination-item"
    )) as HTMLIcPaginationItemElement;

    await btn.click();
    await page.waitForChanges();

    expect(pageEl.page).toBe(4);
  });
  it("should click the first page button", async () => {
    const page = await newSpecPage({
      components: [Pagination, Button, PaginationItem],
      html: `<ic-pagination pages="15" default-page=5 ></ic-pagination>
      `,
    });

    const btn = (await page.root.shadowRoot.querySelector(
      "#first-page-button"
    )) as HTMLIcButtonElement;
    const pageEl = (await page.root.shadowRoot.querySelector(
      "ic-pagination-item"
    )) as HTMLIcPaginationItemElement;

    await btn.click();
    await page.waitForChanges();

    expect(pageEl.page).toBe(1);
  });
});
describe("ic-pagination complex type", () => {
  it("should render as complex type", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type='complex' ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot("render complex pagination");
  });

  it("should render as complex type without first page button", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type='complex' hide-first-page-button=true ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex pagination with no first page button"
    );
  });

  it("should render as complex type without last page button", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type='complex' hide-last-page-button=true ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex pagination with no last page button"
    );
  });

  it("should render as complex type with 20 pages", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination type="complex" pages=20 ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex pagination with 20 pages"
    );
  });

  it("should render as complex type with 0 adjacent items and 0 boundary items", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination
      pages=15
      type="complex"
      adjacent-count=0
    ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex type with 0 adjacent items and 0 boundary items"
    );
  });

  it("should render as complex type with 0 adjacent items and 0 boundary items with default page set at 7", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type="complex" adjacent-count=0 boundary-count=0 default-page=7 ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex type with 0 adjacent items and 0 boundary items and default page 7"
    );
  });

  it("should render as complex type with 0 adjacent items and 0 boundary items with default page set at 15", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type="complex" adjacent-count=0 boundary-count=0 default-page=15 ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex type with 0 adjacent items and 0 boundary items and default page 15"
    );
  });

  it("should render in complex type with 1 adjacent items and 0 boundary items", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type="complex" adjacent-count=1 boundary-count=0 ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex type with 1 adjacent items and 0 boundary items"
    );
  });

  it("should render as complex type with 2 adjacent items and 0 boundary items", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type="complex" adjacent-count=2 boundary-count=0 ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex type with 2 adjacent items and 0 boundary items"
    );
  });

  it("should render as complex type with 0 adjacent items and 1 boundary items", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type="complex" adjacent-count=0 boundary-count=1 ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex type with 0 adjacent items and 1 boundary items"
    );
  });

  it("should render as complex type with 0 adjacent items and 2 boundary items", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type="complex" adjacent-count=0 boundary-count=2 ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex type with 0 adjacent items and 2 boundary items"
    );
  });

  it("should render as complex type with 1 adjacent items and 2 boundary items", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type="complex" adjacent-count=1 boundary-count=2 ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex type with 1 adjacent items and 2 boundary items"
    );
  });

  it("should render as complex type with 2 adjacent items and 1 boundary items", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type="complex" adjacent-count=2 boundary-count=1 ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex type with 2 adjacent items and 1 boundary items"
    );
  });

  it("should render as complex type with 2 adjacent items and 2 boundary items", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages=15 type="complex" adjacent-count=2 boundary-count=2 ></ic-pagination>`,
    });
    expect(page.root).toMatchSnapshot(
      "render complex type with 2 adjacent items and 2 boundary items"
    );
  });

  it("should click the next page button in complex type", async () => {
    const page = await newSpecPage({
      components: [Pagination, Button, PaginationItem],
      html: `<ic-pagination pages=15 type="complex" default-page=5 ></ic-pagination>
      `,
    });

    const btn = (await page.root.shadowRoot.querySelector(
      "#next-page-button"
    )) as HTMLIcButtonElement;
    const pageEl = (await page.root.shadowRoot.querySelector(
      "ic-pagination-item"
    )) as HTMLIcPaginationItemElement;

    await btn.click();
    await page.waitForChanges();

    expect(pageEl.page).toBe(1);
  });
  it("should click the previous page button in complex type", async () => {
    const page = await newSpecPage({
      components: [Pagination, Button, PaginationItem],
      html: `<ic-pagination pages="15" type="complex" default-page=5 ></ic-pagination>
      `,
    });

    const btn = (await page.root.shadowRoot.querySelector(
      "#previous-page-button"
    )) as HTMLIcButtonElement;
    const pageEl = (await page.root.shadowRoot.querySelector(
      "ic-pagination-item"
    )) as HTMLIcPaginationItemElement;

    await btn.click();
    await page.waitForChanges();

    expect(pageEl.page).toBe(1);
  });
  it("should click the last page button in complex type", async () => {
    const page = await newSpecPage({
      components: [Pagination, Button, PaginationItem],
      html: `<ic-pagination pages="15" type="complex" default-page=5 ></ic-pagination>
      `,
    });

    const btn = (await page.root.shadowRoot.querySelector(
      "#last-page-button"
    )) as HTMLIcButtonElement;
    const pageEl = (await page.root.shadowRoot.querySelector(
      "ic-pagination-item"
    )) as HTMLIcPaginationItemElement;

    await btn.click();
    await page.waitForChanges();

    expect(pageEl.page).toBe(1);
  });
  it("should click the first page button in complex type", async () => {
    const page = await newSpecPage({
      components: [Pagination, Button, PaginationItem],
      html: `<ic-pagination pages="15" type="complex" default-page="15" ></ic-pagination>
      `,
    });

    const btn = (await page.root.shadowRoot.querySelector(
      "#first-page-button"
    )) as HTMLIcButtonElement;
    const pageEl = (await page.root.shadowRoot.querySelector(
      "ic-pagination-item"
    )) as HTMLIcPaginationItemElement;

    await pageEl.click();
    await btn.click();
    await page.waitForChanges();

    expect(pageEl.page).toBe(1);
  });
  it("should click the pagination-item in complex type", async () => {
    const page = await newSpecPage({
      components: [Pagination, Button, PaginationItem],
      html: `<ic-pagination pages="15" type="complex" default-page=2 pages="15" ></ic-pagination>
      `,
    });

    const icPagItem = (await page.root.shadowRoot.querySelector(
      "ic-pagination-item"
    )) as HTMLIcPaginationItemElement;

    const btn = (await icPagItem.shadowRoot.querySelector(
      ".item-container.default.page"
    )) as AnyHTMLElement;

    await btn.click();
    await icPagItem.click();
    await page.waitForChanges();

    expect(icPagItem.page).toBe(1);
  });

  it("should emit an event", async () => {
    const page = await newSpecPage({
      components: [Pagination, Button, PaginationItem],
      html: `<ic-pagination pages="15" type="complex" default-page=2 pages="15" ></ic-pagination>
      `,
    });
    await page.rootInstance.paginationItemClickHandler({ detail: { page: 1 } });
    await page.waitForChanges();

    expect(page.root.currentPage).toBe(1);
  });
});
describe("ic-pagination appearance tests", () => {
  it("should render as simple type in dark appearance", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages="15" appearance='dark' ></ic-pagination>`,
    });

    expect(page.root).toMatchSnapshot("render dark simple pagination");
  });
  it("should render as simple type in light appearance", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages="15" appearance='light' ></ic-pagination>`,
    });

    expect(page.root).toMatchSnapshot("render light simple pagination");
  });
  it("should render as complex type in dark appearance", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages="15" type='complex' appearance='dark' ></ic-pagination>`,
    });

    expect(page.root).toMatchSnapshot("render dark complex pagination");
  });
  it("should render as complex type in light appearance", async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ic-pagination pages="15" type='complex' appearance='light' ></ic-pagination>`,
    });

    expect(page.root).toMatchSnapshot("render light complex pagination");
  });

  it("should change page when current page set with public method", async () => {
    const page = await newSpecPage({
      components: [Pagination, Button, PaginationItem],
      html: `<ic-pagination pages="15" type="complex"></ic-pagination>
      `,
    });
    expect(page.rootInstance.currentPage).toBe(1);

    await page.root.setCurrentPage(3);
    await page.waitForChanges();

    expect(page.rootInstance.currentPage).toBe(3);
  });
});
