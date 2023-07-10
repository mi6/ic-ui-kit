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

  it("should remove validation status (from now) when disabled date is updated", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-input
        label="Test label"
        disabled-dates='from-now'
        value='1/1/3000'
      ></ic-date-input>`
    );

    let validation = await page.find("ic-date-input >>> ic-input-validation");

    expect(validation.textContent).toContain(
      "Dates in the future are not allowed. Please select a date in the past."
    );

    const yearInput = await page.find(
      'ic-date-input >>> input[aria-label="year"]'
    );

    yearInput.focus();
    await page.waitForChanges();

    await page.keyboard.press("2");
    await page.keyboard.press("0");
    await page.keyboard.press("0");
    await page.keyboard.press("0");
    await page.waitForChanges();

    validation = await page.find("ic-date-input >>> ic-input-validation");

    expect(validation).toBeNull();
  });

  it("should remove validation status (until now) when disabled date is updated", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-input
        label="Test label"
        disabled-dates='until-now'
        value='1/1/1990'
      ></ic-date-input>`
    );

    let validation = await page.find("ic-date-input >>> ic-input-validation");

    expect(validation.textContent).toContain(
      "Dates in the past are not allowed. Please select a date in the future."
    );

    const yearInput = await page.find(
      'ic-date-input >>> input[aria-label="year"]'
    );

    yearInput.focus();
    await page.waitForChanges();

    await page.keyboard.press("3");
    await page.keyboard.press("0");
    await page.keyboard.press("0");
    await page.keyboard.press("0");
    await page.waitForChanges();

    validation = await page.find("ic-date-input >>> ic-input-validation");

    expect(validation).toBeNull();
  });

  it("should increase day when switching between input and arrow up", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-input
        label="Test label"
      ></ic-date-input>`
    );

    let dayInput = await page.find('ic-date-input >>> input[aria-label="day"]');
    dayInput.focus();

    await page.waitForChanges();

    await page.keyboard.press("1");
    await page.waitForChanges();
    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();
    await page.keyboard.press("/");
    await page.waitForChanges();

    dayInput = await page.find('ic-date-input >>> input[aria-label="day"]');
    await page.waitForChanges();

    expect(await dayInput.getProperty("value")).toBe("02");
  });

  it("should decrease day when switching between input and arrow down", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-input
        label="Test label"
      ></ic-date-input>`
    );

    let dayInput = await page.find('ic-date-input >>> input[aria-label="day"]');
    dayInput.focus();

    await page.waitForChanges();

    await page.keyboard.press("2");
    await page.waitForChanges();
    await page.keyboard.press("ArrowDown");
    await page.waitForChanges();
    await page.keyboard.press("/");
    await page.waitForChanges();

    dayInput = await page.find('ic-date-input >>> input[aria-label="day"]');
    await page.waitForChanges();

    expect(await dayInput.getProperty("value")).toBe("01");

    const focussedElAriaLabel = await page.$eval("ic-date-input", (el) => {
      return el.shadowRoot.activeElement.getAttribute("aria-label");
    });

    expect(focussedElAriaLabel).toBe("month");
  });

  it("should increase month when switching between input and arrow up", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-input
        label="Test label"
      ></ic-date-input>`
    );

    let monthInput = await page.find(
      'ic-date-input >>> input[aria-label="month"]'
    );
    monthInput.focus();

    await page.waitForChanges();

    await page.keyboard.press("1");
    await page.waitForChanges();
    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();
    await page.keyboard.press("/");
    await page.waitForChanges();

    monthInput = await page.find('ic-date-input >>> input[aria-label="month"]');
    await page.waitForChanges();

    expect(await monthInput.getProperty("value")).toBe("02");
  });

  it("should set month to 12 when switching between input and arrow down", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-input
        label="Test label"
      ></ic-date-input>`
    );

    let monthInput = await page.find(
      'ic-date-input >>> input[aria-label="month"]'
    );
    monthInput.focus();

    await page.waitForChanges();

    await page.keyboard.press("1");
    await page.waitForChanges();
    await page.keyboard.press("ArrowDown");
    await page.waitForChanges();
    await page.keyboard.press("/");
    await page.waitForChanges();

    monthInput = await page.find('ic-date-input >>> input[aria-label="month"]');
    await page.waitForChanges();

    expect(await monthInput.getProperty("value")).toBe("12");

    const focussedElAriaLabel = await page.$eval("ic-date-input", (el) => {
      return el.shadowRoot.activeElement.getAttribute("aria-label");
    });

    expect(focussedElAriaLabel).toBe("year");
  });

  it("should increase year when switching between input and arrow up", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-input
        label="Test label"
      ></ic-date-input>`
    );

    let yearInput = await page.find(
      'ic-date-input >>> input[aria-label="year"]'
    );
    yearInput.focus();

    await page.waitForChanges();

    await page.keyboard.press("2");
    await page.keyboard.press("0");
    await page.keyboard.press("0");
    await page.keyboard.press("0");
    await page.waitForChanges();
    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    yearInput = await page.find('ic-date-input >>> input[aria-label="year"]');
    await page.waitForChanges();

    expect(await yearInput.getProperty("value")).toBe("2001");
  });

  it("should decrease year when switching between input and arrow down", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-input
        label="Test label"
      ></ic-date-input>`
    );

    let yearInput = await page.find(
      'ic-date-input >>> input[aria-label="year"]'
    );
    yearInput.focus();

    await page.waitForChanges();

    await page.keyboard.press("2");
    await page.keyboard.press("0");
    await page.keyboard.press("0");
    await page.keyboard.press("0");
    await page.waitForChanges();
    await page.keyboard.press("ArrowDown");
    await page.waitForChanges();

    yearInput = await page.find('ic-date-input >>> input[aria-label="year"]');
    await page.waitForChanges();

    expect(await yearInput.getProperty("value")).toBe("1999");
  });
});
