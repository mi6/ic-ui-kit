import { newE2EPage } from "@stencil/core/testing";

describe("ic-loading-indicator component", () => {
  it("should change the label after 8 seconds if a string with forward slashes is passed in", async () => {
    const page = await newE2EPage({
      html: `<ic-loading-indicator label="First label/Second label/Third label"></ic-loading-indicator>`,
    });
    const label = await page.find("ic-loading-indicator >>> #ic-loading-label");

    await page.waitForTimeout(8000);
    await page.waitForChanges();

    expect(label).toEqualText("Second label");
  });

  it("should change the label back to the first in the string after the last has been displayed", async () => {
    const page = await newE2EPage({
      html: `<ic-loading-indicator label="First label/Second label/Third label"></ic-loading-indicator>`,
    });
    const label = await page.find("ic-loading-indicator >>> #ic-loading-label");

    await page.waitForTimeout(24000);
    await page.waitForChanges();

    expect(label).toEqualText("First label");
  });

  it("should change the label after the specified amount of time", async () => {
    const page = await newE2EPage({
      html: `<ic-loading-indicator label="First label/Second label/Third label" label-duration="2000"></ic-loading-indicator>`,
    });
    const label = await page.find("ic-loading-indicator >>> #ic-loading-label");

    await page.waitForTimeout(2000);
    await page.waitForChanges();

    expect(label).toEqualText("Second label");
  });
});
