import { newE2EPage } from "@stencil/core/testing";

describe("ic-date-input", () => {
  it("should update value on ArrowUp on day input", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-date-input label="Test label"></ic-date-input>`);

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");
    await page.keyboard.press("ArrowUp");
    await page.keyboard.press("/");
    await page.waitForChanges();

    const dayInput = await page.find("ic-date-input >>> .day-input");

    expect(await dayInput.getProperty("value")).toBe("02");
  });
  it("should update value on ArrowDown on day input", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-date-input label="Test label"></ic-date-input>`);

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("/");
    await page.waitForChanges();

    const dayInput = await page.find("ic-date-input >>> .day-input");

    expect(await dayInput.getProperty("value")).toBe("30");
  });
  it("should set date using forward slashes to switch inputs", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-input label="Test label"></ic-date-input>
          <button>Button</button>`
    );

    const icChange = await page.spyOnEvent("icChange");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    await page.keyboard.press("/");
    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    await page.keyboard.press("/");
    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    const btn = await page.find("button");

    btn.focus();

    await page.waitForChanges();

    expect(icChange).toHaveReceivedEventDetail({
      value: new Date(`Jan 1 ${new Date().getFullYear()}`).toISOString(),
    });
  });
  it("should set date using forward slashes to switch inputs", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-input label="Test label"></ic-date-input>
        <button>Button</button>`
    );

    const icChange = await page.spyOnEvent("icChange");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    await page.keyboard.press("-");
    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    await page.keyboard.press("-");
    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    const btn = await page.find("button");

    btn.focus();

    await page.waitForChanges();

    expect(icChange).toHaveReceivedEventDetail({
      value: new Date(`Jan 1 ${new Date().getFullYear()}`).toISOString(),
    });
  });
  it("should select each date and update value", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-input label="Test label"></ic-date-input>
        <button>Button</button>`
    );

    const icChange = await page.spyOnEvent("icChange");
    const dateInput = await page.find("ic-date-input");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    await page.keyboard.press("/");
    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    await page.keyboard.press("/");
    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    const btn = await page.find("button");

    btn.focus();
    await page.waitForChanges();

    expect(icChange).toHaveReceivedEventDetail({
      value: new Date(`Jan 1 ${new Date().getFullYear()}`).toISOString(),
    });

    dateInput.focus();
    await page.waitForChanges();

    const valueSelected = await page.evaluate(() => {
      return window.getSelection().toString();
    });

    expect(valueSelected).toBe("01");

    await page.keyboard.press("5");
    await page.waitForChanges();
    await page.keyboard.press("/");
    await page.waitForChanges();

    await page.keyboard.press("1");
    await page.waitForChanges();
    await page.keyboard.press("2");
    await page.waitForChanges();

    await page.keyboard.press("2");
    await page.waitForChanges();
    await page.keyboard.press("0");
    await page.waitForChanges();

    btn.focus();
    await page.waitForChanges();

    expect(icChange).toHaveReceivedEventDetail({
      value: new Date("Dec 05 2020").toISOString(),
    });
  });
});

/**
 * @todo
 * Add tests for:
 * - Pasting dates
 * - Switching between arrow keys and input
 * - Validation statuss
 * - Focus moving between inputs
 */
