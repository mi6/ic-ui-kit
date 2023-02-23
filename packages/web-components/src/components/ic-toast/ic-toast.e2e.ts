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

    const dismissButton = await page.find("ic-toast >>> ic-button");
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
    await page.waitForTimeout(300);

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
    await page.waitForTimeout(300);

    const activeElement = await page.$eval(
      "ic-toast",
      (el) => el.shadowRoot.activeElement.id
    );
    expect(activeElement).toBe("dismiss-button");
  });

  it("should set the dimissMode to manual if the action slot is used on an autoDismiss toast", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-toast heading="Heading" dismiss-mode="automatic"><ic-button slot="action">Button</ic-button></ic-toast>`
    );
    await page.waitForChanges();

    const dismissMode = await page.$eval(
      "ic-toast",
      (el) => (el as HTMLIcToastElement).dismissMode
    );
    expect(dismissMode).toBe("manual");
  });

  it("should set the variant to neutral if the neutral-icon slot is used when the variant isn't set", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-toast heading="Heading">
    <svg
      slot="neutral-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"
      />
    </svg></ic-toast>`);
    await page.waitForChanges();

    const variant = await page.$eval(
      "ic-toast",
      (el) => (el as HTMLIcToastElement).variant
    );
    expect(variant).toBe("neutral");
  });

  it("should set the autoDismissTimeout to 5000ms if the prop provided is below", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-toast heading="Heading" auto-dismiss-timeout="100"></ic-toast>`
    );
    await page.waitForChanges();

    const variant = await page.$eval(
      "ic-toast",
      (el) => (el as HTMLIcToastElement).autoDismissTimeout
    );
    expect(variant).toBe(5000);
  });

  it("should not render an icon if the variant is neutral and the neutral-icon slot is not used", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-toast heading="Heading" variant="neutral"></ic-toast>`
    );
    await page.waitForChanges();

    const icon = await page.find("ic-toast >>> span");
    expect(icon).toBeNull();
  });
});
