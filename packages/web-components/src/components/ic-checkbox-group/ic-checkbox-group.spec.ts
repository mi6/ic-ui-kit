import { newSpecPage } from "@stencil/core/testing";
import { CheckboxGroup } from "./ic-checkbox-group";
import { Checkbox } from "../ic-checkbox/ic-checkbox";
import { TextField } from "../ic-text-field/ic-text-field";

describe("ic-checkbox-group", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders");
  });

  it("should render as required", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test" required>
        <ic-checkbox value="test" label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-required");
  });

  it("should render as helper text", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test" helper-text="helper test">
        <ic-checkbox value="test" label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-helpertext");
  });

  it("should render checked", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" checked label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-checked");
  });

  it("should render indeterminate", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" checked indeterminate label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-indeterminate");
  });

  it("should render an aria label when label hidden", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" hide-label name="test">
        <ic-checkbox value="test" label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-hidden-label");
  });

  it("should render in a disabled state", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" disabled label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-disabled");
  });

  it("should render with validation status", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" hide-label name="test" validation-status="error">
        <ic-checkbox value="test" label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-validation");
  });

  it("should render with hidden dynamic additional field", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox, TextField],
      html: `<ic-checkbox-group label="test label" hide-label name="test" validation-status="error">
        <ic-checkbox value="test" additional-field-display="dynamic" label="test label">
        <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-dynamic-field");
  });

  it("should render with dynamic additional field when checked", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox, TextField],
      html: `<ic-checkbox-group label="test label" hide-label name="test" validation-status="error">
        <ic-checkbox value="test" label="test label" additional-field-display="dynamic" checked>
        <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot(
      "renders-with-dynamic-field-when-checked"
    );
  });

  it("should render with disabled static additional field", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox, TextField],
      html: `<ic-checkbox-group label="test label" hide-label name="test" validation-status="error">
        <ic-checkbox value="test" label="test label" additional-field-display="static">
        <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-disabled-additional-field");
  });

  it("should remove disabled attribute from static additional field when checked", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox, TextField],
      html: `<ic-checkbox-group label="test label" hide-label name="test" validation-status="error">
        <ic-checkbox value="test" label="test label" additional-field-display="static" checked>
        <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot(
      "renders-with-disabled-attribute-removed-from-field"
    );
  });

  it("should change checked state", async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<ic-checkbox value="test" label="test label" checked></ic-checkbox>`,
    });

    expect(page.root.checked).toBe(true);

    page.rootInstance.handleClick();
    await page.waitForChanges();

    expect(page.root.checked).toBe(false);
  });

  it("should emit checkboxChecked on click", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" label="test label" checked></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    const eventSpy = jest.fn();

    page.win.addEventListener("checkboxChecked", eventSpy);

    page.root
      .querySelector("ic-checkbox")
      .shadowRoot.querySelector("input")
      .click();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it("should test form reset event", async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<form>
          <ic-checkbox value="test" label="test label" checked></ic-checkbox>    
          <button id="resetButton" type="reset">Reset</button>  
      </form>`,
    });

    expect(page.root.checked).toBe(true);

    page.root.checked = false;
    await page.waitForChanges();

    expect(page.root.checked).toBe(false);

    await page.rootInstance.handleFormReset();
    await page.waitForChanges();

    expect(page.root.checked).toBe(true);

    //test disconnected callback
    page.setContent("");
  });
});
