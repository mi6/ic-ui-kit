import { newE2EPage } from "@stencil/core/testing";

describe("ic-text-field", () => {
  it("should trigger max length validation when long value set", async () => {
    const page = await newE2EPage();
    await page.setContent('<ic-text-field label="Test label" max-length="20">');

    await page.waitForChanges();

    const element = await page.find("ic-text-field");
    element.setProperty("value", "a really long test value");

    await page.waitForChanges();

    const input = await page.find("ic-text-field >>> #ic-text-field-input-0");

    const value = await input.getProperty("value");
    expect(value).toBe("a really long test value");

    let icon = await page.find("ic-text-field >>> .icon-error");
    let iconVis = await icon.isVisible();
    expect(iconVis).toBeTruthy();

    const validationText = await page.find(
      "ic-text-field >>> #ic-text-field-input-0-validation-text"
    );
    expect(validationText).toEqualText("Maximum length exceeded");

    const charCountText = await page.find(
      "ic-text-field >>> #ic-text-field-input-0-charcount"
    );
    expect(charCountText).toEqualText("24/20");

    await input.press("Backspace");
    await input.press("Backspace");
    await input.press("Backspace");
    await input.press("Backspace");
    expect(charCountText).toEqualText("20/20");

    expect(validationText).toEqualText("");
    icon = await page.find("ic-text-field >>> .icon-error");
    expect(icon).toBeNull();

    await input.press("a");
    expect(charCountText).toEqualText("21/20");
    expect(validationText).toEqualText("Maximum length exceeded");

    icon = await page.find("ic-text-field >>> .icon-error");
    iconVis = await icon.isVisible();
    expect(iconVis).toBeTruthy();
  });

  it("should focus input when setFocus method called", async () => {
    const page = await newE2EPage();
    await page.setContent('<ic-text-field label="Test label">');
    await page.waitForChanges();

    const element = await page.find("ic-text-field");
    await element.callMethod("setFocus");

    await page.waitForChanges();
    const activeElId = await page.$eval(
      "ic-text-field",
      (el) => el.shadowRoot.activeElement.id
    );

    expect(activeElId).toBe("ic-text-field-input-0");
  });

  it("works on a form", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<form><ic-text-field label="Test label" name="formInputEl"></ic-text-field><button id="resetButton" type="reset">Reset</button></form>'
    );
    await page.waitForChanges();

    let input = await page.find("ic-text-field >>> #ic-text-field-input-0");

    await input.press("s");
    await input.press("o");
    await input.press("m");
    await input.press("e");
    await input.press("Space");
    await input.press("t");
    await input.press("e");
    await input.press("x");
    await input.press("t");

    let value = await input.getProperty("value");
    expect(value).toBe("some text");
    //check value on underlying hidden form control
    const formInput = await page.find("input[name=formInputEl]");

    const visible = await formInput.isVisible();
    expect(visible).toBe(false);

    const formInputvalue = await formInput.getProperty("value");
    expect(formInputvalue).toBe("some text");

    const resetButton = await page.find("#resetButton");
    await resetButton.click();

    input = await page.find("ic-text-field >>> #ic-text-field-input-0");
    value = await input.getProperty("value");
    expect(value).toBe("");
  });
});
