import { newE2EPage } from "@stencil/core/testing";

describe("ic-pagination", () => {
  it("should emit the correct page value when `page 2` is clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(`<ic-pagination pages="15"
    type="complex"
    adjacent-count="1"
    boundary-count="1" />`);

    const pagItem = await page.find("ic-pagination >>> #pagination-item-2");

    const icPageChange = await page.spyOnEvent("icPageChange");

    await page.waitForChanges();

    await pagItem.click();

    await page.waitForChanges();

    expect(icPageChange).toHaveReceivedEventDetail({ value: 2 });
  });
  it("should emit the correct page value when `next page` is clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(`<ic-pagination pages="15"
    type="complex"
    adjacent-count="1"
    boundary-count="1" />`);

    const nextPage = await page.find("ic-pagination >>> #next-page-button");

    const icPageChange = await page.spyOnEvent("icPageChange");

    await page.waitForChanges();

    await nextPage.click();

    await page.waitForChanges();

    expect(icPageChange).toHaveReceivedEventDetail({ value: 2 });
  });
  it("should emit the correct page value when `page 13` is clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(`<ic-pagination pages="15"
    type="complex"
    adjacent-count="1"
    boundary-count="1" />`);

    const lastPage = await page.find("ic-pagination >>> #last-page-button");

    const icPageChange = await page.spyOnEvent("icPageChange");

    await page.waitForChanges();

    await lastPage.click();

    await page.waitForChanges();

    const pagItem = await page.find("ic-pagination >>> #pagination-item-13");

    await page.waitForChanges();

    await pagItem.click();

    await page.waitForChanges();

    expect(icPageChange).toHaveReceivedEventDetail({ value: 13 });
  });
  it("should emit the correct page value when the `previous page` button is clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(`<ic-pagination pages="15"
    type="complex"
    adjacent-count="1"
    boundary-count="1" />`);

    const lastPage = await page.find("ic-pagination >>> #last-page-button");

    const icPageChange = await page.spyOnEvent("icPageChange");

    await page.waitForChanges();

    await lastPage.click();

    await page.waitForChanges();

    const previousPage = await page.find(
      "ic-pagination >>> #previous-page-button"
    );

    await page.waitForChanges();

    await previousPage.click();

    await page.waitForChanges();

    expect(icPageChange).toHaveReceivedEventDetail({ value: 14 });
  });
  it("should emit the correct page value when the `first page` button is clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(`<ic-pagination pages="15"
    type="complex"
    adjacent-count="1"
    boundary-count="1" />`);

    const lastPage = await page.find("ic-pagination >>> #last-page-button");

    const icPageChange = await page.spyOnEvent("icPageChange");

    await page.waitForChanges();

    await lastPage.click();

    await page.waitForChanges();

    const previousPage = await page.find(
      "ic-pagination >>> #first-page-button"
    );

    await page.waitForChanges();

    await previousPage.click();

    await page.waitForChanges();

    expect(icPageChange).toHaveReceivedEventDetail({ value: 1 });
  });
  it("should emit the correct page value when the midddle state is reached and the adjacent-count `page 7` button is clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(`<ic-pagination pages="15"
    type="complex"
    adjacent-count="1"
    boundary-count="1" />`);

    const nextPage = await page.find("ic-pagination >>> #next-page-button");

    const icPageChange = await page.spyOnEvent("icPageChange");

    await page.waitForChanges();
    await nextPage.click();
    await page.waitForChanges();
    await nextPage.click();
    await page.waitForChanges();
    await nextPage.click();
    await page.waitForChanges();
    await nextPage.click();
    await page.waitForChanges();
    await nextPage.click();
    await page.waitForChanges();

    const pagItem = await page.find("ic-pagination >>> #pagination-item-7");

    await page.waitForChanges();

    await pagItem.click();

    await page.waitForChanges();

    expect(icPageChange).toHaveReceivedEventDetail({ value: 7 });
  });
  it("should return false when the midddle state is reached and the adjacent-count `page 8` (out of bounds) button is clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(`<ic-pagination pages="15"
    type="complex"
    adjacent-count="1"
    boundary-count="1" />`);

    const nextPage = await page.find("ic-pagination >>> #next-page-button");

    await page.waitForChanges();
    await nextPage.click();
    await page.waitForChanges();
    await nextPage.click();
    await page.waitForChanges();
    await nextPage.click();
    await page.waitForChanges();
    await nextPage.click();
    await page.waitForChanges();
    await nextPage.click();
    await page.waitForChanges();

    const pagItem = await page.find("ic-pagination >>> #pagination-item-8");

    await page.waitForChanges();

    expect(pagItem).toBe(null);
  });
});
