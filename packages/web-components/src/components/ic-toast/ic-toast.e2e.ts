import { newE2EPage } from "@stencil/core/testing";

describe("ic-toast component", () => {
  it("should close on dismiss icon click", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-toast heading="Heading"></ic-toast>`);
    await page.waitForChanges();

    let toast = await page.find("ic-toast");
    await toast.callMethod("setVisible");

    await page.waitForChanges();
    expect(toast).not.toHaveClass("hidden");

    const dismissButton = await page.find("ic-toast >>> .dismiss-indicator");
    expect(dismissButton).not.toBeNull();

    await dismissButton.click();

    toast = await page.find("ic-toast");
    expect(toast).toHaveClass("hidden");
  });

  it("should focus slotted action element when opened if an action is provided", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-toast heading="Heading"><ic-button id="button1" slot="action">Button</ic-button></ic-toast>`
    );
    await page.waitForChanges();

    const toast = await page.find("ic-toast");
    await toast.callMethod("setVisible");

    await page.waitForChanges();

    const slottedButton = await page.find("ic-button");
    expect(slottedButton).not.toBeNull;

    const activeElement = await page.evaluate(() => document.activeElement.id);
    expect(activeElement).toBe("button1");
  });

  it("should focus the dismiss button when opened if no action is provided", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-toast heading="Heading"></ic-toast>`);
    await page.waitForChanges();

    const toast = await page.find("ic-toast");
    await toast.callMethod("setVisible");

    await page.waitForChanges();

    const activeElement = await page.$eval(
      "ic-toast",
      (el) => el.shadowRoot.activeElement.id
    );
    expect(activeElement).toBe("dismiss-button");
  });
});
