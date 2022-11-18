import { newE2EPage } from "@stencil/core/testing";

describe("ic-alert component", () => {
  it("should close on dismiss icon click", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-alert dismissible=true></ic-alert>`);
    await page.waitForChanges();

    let alert = await page.find("ic-alert >>> .container");
    const dismissButton = await page.find("ic-alert >>> .dismiss-icon");

    expect(alert).not.toBeNull();
    expect(dismissButton).not.toBeNull();

    await dismissButton.click();

    alert = await page.find("ic-alert >>> .container");

    expect(alert).toBeNull();
  });
});
