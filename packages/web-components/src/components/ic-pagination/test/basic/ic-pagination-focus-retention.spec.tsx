import { newSpecPage } from "@stencil/core/testing";
import { Pagination } from "../../ic-pagination";
import { PaginationItem } from "../../../ic-pagination-item/ic-pagination-item";

describe("ic-pagination selected page focus", () => {
  it("keeps focus on the clicked page when the complex page window changes", async () => {
    const page = await newSpecPage({
      components: [Pagination, PaginationItem],
      html: `<ic-pagination type="complex" pages="10" current-page="4"></ic-pagination>`,
    });

    const pageFive = page.root?.shadowRoot?.querySelector(
      "#pagination-item-5"
    ) as HTMLIcPaginationItemElement;
    const pageFiveButton = pageFive.shadowRoot?.querySelector(
      "button"
    ) as HTMLButtonElement;

    pageFiveButton.focus();
    pageFiveButton.click();
    await page.waitForChanges();

    const selectedPage = page.root?.shadowRoot?.querySelector(
      "#pagination-item-5"
    ) as HTMLIcPaginationItemElement;
    const selectedButton = selectedPage.shadowRoot?.querySelector(
      "button"
    ) as HTMLButtonElement;

    expect(page.rootInstance.currentPage).toBe(5);
    expect(selectedPage.shadowRoot?.activeElement).toBe(selectedButton);
  });
});
