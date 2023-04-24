import { newE2EPage } from "@stencil/core/testing";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-radio-group component", () => {
  it("Should have tabIndex of first option 0, when no options are selected", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" ></ic-radio-option>    
        </ic-radio-group>
      `);
    await page.waitForChanges();

    const radioButton1 = await page.find("ic-radio-option[value='test1']");
    const input1 = radioButton1.shadowRoot.querySelector("input");

    const radioButton2 = await page.find("ic-radio-option[value='test2']");
    const input2 = radioButton2.shadowRoot.querySelector("input");

    expect(input1.tabIndex).toBe(0);
    expect(input2.tabIndex).toBe(-1);
  });
  it("Should not be clickable when disabled", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" disabled></ic-radio-option>    
        <ic-radio-option value="test2" disabled></ic-radio-option>    
        </ic-radio-group>
      `);

    const radioButton = await page.find("ic-radio-option[value='test2']");
    await radioButton.click();
    await page.waitForChanges();
    expect(await radioButton.getProperty("selected")).toBe(false);
  });
  it("Should be selected when clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" ></ic-radio-option>    
        </ic-radio-group>
      `);
    let radioButton = await page.find("ic-radio-option[value='test2']");
    await radioButton.click();
    await page.waitForChanges();

    expect(await radioButton.getProperty("selected")).toBe(true);

    radioButton = await page.find("ic-radio-option[value='test2']");
    const input = radioButton.shadowRoot.querySelector("input");
    expect(input.tabIndex).toBe(0);
  });
  it("Should enable textfield when associated option is selected when static", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" selected>
          <ic-text-field
              slot="additional-field"
              label="Test label"
          ></ic-text-field>
        </ic-radio-option>    
        </ic-radio-group>
      `);
    const radioButton = await page.find("ic-radio-option[value='test1']");
    const textfield = await page.find("ic-text-field");
    expect(textfield).not.toHaveAttribute("disabled");

    await radioButton.click();
    await page.waitForChanges();

    expect(textfield).toHaveAttribute("disabled");
  });
  it("Should display textfield when associated option is selected when dynamic", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" additional-field-display="dynamic">
          <ic-text-field
              slot="additional-field"
              label="Test label"
          ></ic-text-field>
        </ic-radio-option>    
        </ic-radio-group>
      `);

    const radioButton = await page.find("ic-radio-option[value='test2']");

    let additionalFieldDisplay = await page.evaluate(() => {
      const additionalField = document
        .querySelector("ic-radio-option[value='test2']")
        .shadowRoot.querySelector(".dynamic-container");

      return window.getComputedStyle(additionalField).display;
    });
    expect(additionalFieldDisplay).toBe("none");

    await radioButton.click();
    await page.waitForChanges();

    additionalFieldDisplay = await page.evaluate(() => {
      const additionalField = document
        .querySelector("ic-radio-option[value='test2']")
        .shadowRoot.querySelector(".dynamic-container");

      return window.getComputedStyle(additionalField).display;
    });
    expect(additionalFieldDisplay).not.toBe("none");
  });
  it("Should emit icChange event when radio option is selected", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" >
        </ic-radio-option>    
        </ic-radio-group>
      `);
    const radioButton = await page.find("ic-radio-option[value='test2']");
    const icChange = await page.spyOnEvent("icChange");

    await radioButton.click();
    await page.waitForChanges();

    expect(icChange).toHaveReceivedEventDetail({
      value: "test2",
    });
  });
  it("Should emit icCheck event when radio option is selected", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" ></ic-radio-option>    
        </ic-radio-group>
      `);
    const radioButton = await page.find("ic-radio-option[value='test2']");
    const icChecked = await page.spyOnEvent("icCheck");

    await radioButton.click();
    await page.waitForChanges();

    expect(icChecked).toHaveReceivedEventDetail({
      value: "test2",
    });
  });
  it("Should select when spacebar is pressed", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" >
        </ic-radio-option>    
        </ic-radio-group>
      `);
    const radioButton = await page.find("ic-radio-option[value='test1']");
    expect(await radioButton.getProperty("selected")).toBe(false);

    await page.keyboard.press("Tab");
    await radioButton.press(" ");
    await page.waitForChanges();

    expect(await radioButton.getProperty("selected")).toBe(true);
    const input = radioButton.shadowRoot.querySelector("input");
    expect(input.tabIndex).toBe(0);
  });
  it("Should select next radio option down when arrow down is used", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" ></ic-radio-option>    
        <ic-radio-option value="test3" ></ic-radio-option>    
        </ic-radio-group>
      `);
    const radioButton1 = await page.find("ic-radio-option[value='test1']");
    const radioButton2 = await page.find("ic-radio-option[value='test2']");

    await page.keyboard.press("Tab");
    await radioButton1.press(" ");
    await page.waitForChanges();
    await radioButton1.press("ArrowDown");
    await page.waitForChanges();

    const input = radioButton2.shadowRoot.querySelector("input");
    expect(input.tabIndex).toBe(0);
  });
  it("Should select next radio option down when arrow right is used", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" ></ic-radio-option>    
        <ic-radio-option value="test3" ></ic-radio-option>    
        </ic-radio-group>
      `);
    const radioButton1 = await page.find("ic-radio-option[value='test1']");
    const radioButton2 = await page.find("ic-radio-option[value='test2']");

    await page.keyboard.press("Tab");
    await radioButton1.press(" ");
    await page.waitForChanges();
    await radioButton1.press("ArrowRight");
    await page.waitForChanges();

    const input = radioButton2.shadowRoot.querySelector("input");
    expect(input.tabIndex).toBe(0);
  });
  it("Should select next radio option down when arrow up is used", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" ></ic-radio-option>    
        <ic-radio-option value="test3" ></ic-radio-option>    
        </ic-radio-group>
      `);

    const radioButton2 = await page.find("ic-radio-option[value='test2']");

    const radioButton1 = await page.find("ic-radio-option[value='test1']");

    await radioButton2.click();
    await page.waitForChanges();
    await radioButton2.press("ArrowUp");
    await page.waitForChanges();

    const input = radioButton1.shadowRoot.querySelector("input");
    expect(input.tabIndex).toBe(0);
  });
  it("Should select next radio option down when arrow left is used", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" ></ic-radio-option>    
        <ic-radio-option value="test3" ></ic-radio-option>    
        </ic-radio-group>
      `);

    const radioButton2 = await page.find("ic-radio-option[value='test2']");

    const radioButton1 = await page.find("ic-radio-option[value='test1']");

    await radioButton2.click();
    await page.waitForChanges();
    await radioButton2.press("ArrowLeft");
    await page.waitForChanges();

    const input = radioButton1.shadowRoot.querySelector("input");
    expect(input.tabIndex).toBe(0);
  });
  it("Works on a form", async () => {
    const page = await newE2EPage();

    await page.setContent(` <form>
          <ic-radio-group label="this is a label" name="1">
          <ic-radio-option
              value="valueName1"
              label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
              value="valueName2"
              label="Selected / Default"
              selected
          ></ic-radio-option>
          <ic-radio-option
              value="valueName3"
              label="Unselected / Disabled"
              disabled
          ></ic-radio-option>
          </ic-radio-group>
        <input type="submit" value="Submit">
      </form>
      <script>document.querySelector('form').addEventListener('submit', (ev) => {
        ev.preventDefault();
      })
      </script>
      `);
    await page.waitForChanges();

    const radioButton = await page.find("ic-radio-option[value='valueName1']");

    await radioButton.click();
    await page.waitForChanges();
    const value = await (
      await page.find('input[name="1"]')
    ).getProperty("value");

    expect(value).toBe("valueName1");
  });
  it("Passes the value of radio button correctly when already selected", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" selected ></ic-radio-option>    
        </ic-radio-group>
      `);

    await page.waitForChanges();

    const value = await (
      await page.find('input[name="test"]')
    ).getProperty("value");

    expect(value).toBe("test2");
  });

  it("Passes the value of radio button and textfield correctly when already selected", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
    <ic-radio-option value="test1" ></ic-radio-option>    
    <ic-radio-option value="test2" additional-field-display="dynamic" >
      <ic-text-field
          slot="additional-field"
          label="Test label"
      ></ic-text-field>
    </ic-radio-option>    
    </ic-radio-group>
  `);
    const radioButton = await page.find("ic-radio-option[value='test2']");

    await radioButton.click();
    await page.waitForChanges();

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    await page.keyboard.press("t");
    await page.keyboard.press("e");
    await page.keyboard.press("s");
    await page.keyboard.press("t");

    await page.waitForChanges();

    let value = await (
      await page.find('input[name="test"]')
    ).getProperty("value");

    expect(value).toBe("test");

    await page.keyboard.press("Backspace");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Backspace");

    await page.waitForChanges();

    value = await (await page.find('input[name="test"]')).getProperty("value");

    expect(value).toBe("test2");
  });

  it("Passes the value of radio button and textfield correctly when already selected and has a value in texfield", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-radio-group label="test label" name="test">
    <ic-radio-option value="test1" ></ic-radio-option>    
    <ic-radio-option value="test2" additional-field-display="dynamic" >
      <ic-text-field
          slot="additional-field"
          label="Test label"
          value="testValue1"
      ></ic-text-field>
    </ic-radio-option>    
    </ic-radio-group>
  `);
    const radioButton = await page.find("ic-radio-option[value='test2']");

    await radioButton.click();
    await page.waitForChanges();

    const value = await (
      await page.find('input[name="test"]')
    ).getProperty("value");

    expect(value).toBe("testValue1");
  });

  it("Should reset to initial state on form reset event", async () => {
    const page = await newE2EPage();
    await page.setContent(`<form><ic-radio-group label="test label" name="test">
        <ic-radio-option value="test1" ></ic-radio-option>    
        <ic-radio-option value="test2" selected></ic-radio-option>    
        </ic-radio-group>
        <button type="reset" id="resetButton">Reset</button>
        </form>
      `);

    await page.waitForChanges();

    let radioButton1 = await page.find("ic-radio-option[value='test1']");
    let radioButton2 = await page.find("ic-radio-option[value='test2']");

    expect(await radioButton1.getProperty("selected")).toBe(false);
    expect(await radioButton2.getProperty("selected")).toBe(true);

    await radioButton1.click();
    await page.waitForChanges();

    radioButton1 = await page.find("ic-radio-option[value='test1']");
    radioButton2 = await page.find("ic-radio-option[value='test2']");

    expect(await radioButton1.getProperty("selected")).toBe(true);
    expect(await radioButton2.getProperty("selected")).toBe(false);

    const resetButton = await page.find("#resetButton");
    await resetButton.click();

    await page.waitForChanges();

    radioButton1 = await page.find("ic-radio-option[value='test1']");
    radioButton2 = await page.find("ic-radio-option[value='test2']");

    expect(await radioButton1.getProperty("selected")).toBe(false);
    expect(await radioButton2.getProperty("selected")).toBe(true);
  });
});
