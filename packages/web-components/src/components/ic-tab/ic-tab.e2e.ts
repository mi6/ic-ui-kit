import { newE2EPage } from "@stencil/core/testing";

describe("ic-tab component", () => {
  it("should call tabClick event when clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tab tab-id="test-id" tab-position="1">IC Tab Test</ic-tab>`
    );
    await page.waitForChanges();

    const tab = await page.find("ic-tab");
    const tabClick = await page.spyOnEvent("tabClick");
    await tab.click();

    await page.waitForChanges();

    expect(tabClick).toHaveReceivedEventDetail({
      tabId: "test-id",
      contextId: "default",
      position: 1,
    });
  });

  it("should call tabFocus event when focussed", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tab tab-id="test-id" tab-position="1">IC Tab Test</ic-tab>`
    );
    await page.waitForChanges();

    const tab = await page.find("ic-tab");
    const tabFocus = await page.spyOnEvent("tabFocus");
    await tab.focus();

    await page.waitForChanges();

    expect(tabFocus).toHaveReceivedEventDetail({
      tabId: "test-id",
      contextId: "default",
      position: 1,
    });
  });
});
