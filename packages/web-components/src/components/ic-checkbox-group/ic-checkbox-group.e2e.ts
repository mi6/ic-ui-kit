import { newE2EPage } from "@stencil/core/testing";

describe("ic-checkbox-group component", () => {
  it("Should not be interactable when disabled", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test1" label="checkbox label 1" disabled></ic-checkbox>    
        <ic-checkbox value="test2" label="checkbox label 2" disabled></ic-checkbox>    
        </ic-checkbox-group>
      `);

    const checkbox = await page.find("ic-checkbox[value='test2']");
    await checkbox.click();
    await page.waitForChanges();
    expect(await checkbox.getProperty("checked")).toBe(false);

    await checkbox.press(" ");
    await page.waitForChanges();
    expect(await checkbox.getProperty("checked")).toBe(false);
  });
  it("Should set checkbox to checked when clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test1" label="checkbox label 1"></ic-checkbox>    
        <ic-checkbox value="test2" label="checkbox label 2"></ic-checkbox>    
        </ic-checkbox-group>
      `);
    let checkbox = await page.find("ic-checkbox[value='test2']");
    let input = checkbox.shadowRoot.querySelector("input");

    expect(input.className).toBe("checkbox");

    await checkbox.click();
    await page.waitForChanges();

    checkbox = await page.find("ic-checkbox[value='test2']");
    input = checkbox.shadowRoot.querySelector("input");

    expect(checkbox.getAttribute("value")).toBe("test2");

    expect(input.className).toBe("checkbox checked");

    expect(await checkbox.getProperty("checked")).toBe(true);

    await checkbox.click();
    await page.waitForChanges();

    checkbox = await page.find("ic-checkbox[value='test2']");

    expect(checkbox.getAttribute("value")).toBe("test2");
  });
  it("Should enable statictextfield when associated checkbox is checked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test1" label="checkbox label 1"></ic-checkbox>    
        <ic-checkbox value="test2" label="checkbox label 2" checked>
          <ic-text-field
              slot="additional-field"
              label="Test label"
          ></ic-text-field>
        </ic-checkbox>    
        </ic-checkbox-group>
      `);
    const checkbox = await page.find("ic-checkbox[value='test2']");
    const textfield = await page.find("ic-text-field");

    expect(textfield).not.toHaveAttribute("disabled");

    await checkbox.click();
    await page.waitForChanges();

    expect(textfield).toHaveAttribute("disabled");
  });
  it("Should display dynamic textfield when associated checkbox is checked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test1" label="checkbox label 1"></ic-checkbox>    
        <ic-checkbox value="test2" label="checkbox label 2" additional-field-display="dynamic">
          <ic-text-field
              slot="additional-field"
              label="Test label"
          ></ic-text-field>
        </ic-checkbox>    
        </ic-checkbox-group>
      `);
    const checkbox = await page.find("ic-checkbox[value='test2']");
    let additionalFieldDisplay = await page.evaluate(() => {
      const additionalField = document
        .querySelector("ic-checkbox[value='test2']")
        .shadowRoot.querySelector(".dynamic-container");

      return window.getComputedStyle(additionalField).display;
    });
    expect(additionalFieldDisplay).toBe("none");

    await checkbox.click();
    await page.waitForChanges();

    additionalFieldDisplay = await page.evaluate(() => {
      const additionalField = document
        .querySelector("ic-checkbox[value='test2']")
        .shadowRoot.querySelector(".dynamic-container");

      return window.getComputedStyle(additionalField).display;
    });
    expect(additionalFieldDisplay).not.toBe("none");
  });
  it("Should emit icChange event when checkbox is checked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test1" label="checkbox label 1"></ic-checkbox>    
        <ic-checkbox value="test2" label="checkbox label 2">
        </ic-checkbox>    
        </ic-checkbox-group>
      `);
    const checkbox = await page.find("ic-checkbox[value='test2']");
    const icChange = await page.spyOnEvent("icChange");

    await checkbox.click();
    await page.waitForChanges();

    const checkboxElement = await page.evaluate(
      () =>
        document.querySelector(
          "ic-checkbox[value='test2']"
        ) as HTMLIcCheckboxElement
    );
    expect(icChange).toHaveReceivedEventDetail({
      value: ["test2"],
      checkedOptions: [checkboxElement],
      textFieldValues: [null],
      selectedOption: checkboxElement,
    });

    await checkbox.click();
    await page.waitForChanges();

    expect(icChange).toHaveReceivedEventDetail({
      value: [],
      checkedOptions: [],
      textFieldValues: [],
      selectedOption: checkboxElement,
    });
  });
  it("Should set checkbox to checked when space is pressed", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test1" label="checkbox label 1"></ic-checkbox>    
        <ic-checkbox value="test2" label="checkbox label 2"></ic-checkbox>    
        </ic-checkbox-group>
      `);
    const checkbox = await page.find("ic-checkbox[value='test1']");
    expect(await checkbox.getProperty("checked")).toBe(false);

    await page.keyboard.press("Tab");
    await checkbox.press(" ");
    await page.waitForChanges();

    expect(checkbox.getAttribute("value")).toBe("test1");
    expect(await checkbox.getProperty("checked")).toBe(true);

    await checkbox.press(" ");
    await page.waitForChanges();

    expect(checkbox.getAttribute("value")).toBe("test1");
  });
  it("Works on a form", async () => {
    const page = await newE2EPage();

    await page.setContent(` <form>
          <ic-checkbox-group label="this is a label" name="1">
          <ic-checkbox
              value="valueName1"
              label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
              value="valueName2"
              label="Selected / Default"
              selected
          ></ic-checkbox>
          <ic-checkbox
              value="valueName3"
              label="Unselected / Disabled"
              disabled
          ></ic-checkbox>
          </ic-checkbox-group>
        <input type="submit" value="Submit">
      </form>
      <script>document.querySelector('form').addEventListener('submit', (ev) => {
        ev.preventDefault();
      })
      </script>
      `);
    await page.waitForChanges();

    const checkbox = await page.find("ic-checkbox[value='valueName1']");

    await checkbox.click();
    await page.waitForChanges();
    const value = await (
      await page.find('ic-checkbox[value="valueName1"] >>> input[name="1"]')
    ).getProperty("value");

    expect(value).toBe("valueName1");
  });
  it("Passes the value of checkboxes correctly when already selected", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-checkbox-group label="test label" name="test">
        <ic-checkbox name="test1" value="test1" label="checkbox label 1"></ic-checkbox>    
        <ic-checkbox name="test2" value="test2" label="checkbox label 2" checked></ic-checkbox>    
        </ic-checkbox-group>
      `);

    await page.waitForChanges();

    const value = await await (
      await page.find('ic-checkbox[name="test2"]')
    ).getAttribute("checked");

    expect(value).toBe("");
  });

  it("resets checked state on form reset", async () => {
    const page = await newE2EPage();

    await page.setContent(` <form>
        <ic-checkbox-group label="this is a label" name="1">
          <ic-checkbox
              value="valueName1"
              label="Unselected / Default"
          ></ic-checkbox>
        </ic-checkbox-group>
        <button type="reset" id="resetButton">Reset</button>
      </form>
    `);
    await page.waitForChanges();

    let checkbox = await page.find("ic-checkbox[value='valueName1']");
    await checkbox.click();
    await page.waitForChanges();
    expect(await checkbox.getProperty("checked")).toBe(true);

    const resetButton = await page.find("#resetButton");
    await resetButton.click();
    await page.waitForChanges();

    checkbox = await page.find("ic-checkbox[value='valueName1']");
    expect(await checkbox.getProperty("checked")).toBe(false);
  });
});
