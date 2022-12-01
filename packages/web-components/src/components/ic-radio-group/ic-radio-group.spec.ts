import { newSpecPage } from "@stencil/core/testing";
import { RadioGroup } from "./ic-radio-group";
import { RadioOption } from "../ic-radio-option/ic-radio-option";

describe("ic-radio-group", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test"></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders");
  });

  it("should render as required", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test"></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-required");
  });

  it("should render as helper text", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" helperText="helper test">
        <ic-radio-option value="test"></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-helpertext");
  });

  it("should render with selected option", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-selected-option");
  });

  it("should render with validation status", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required validation-status="error" validation-text="error">
        <ic-radio-option value="test" selected></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-validation-status");
  });

  it("should render radio option disabled", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test" disabled label="test label" group-label="test group"></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-disabled");
  });

  it("should render with unselected static additional field", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test" disabled label="test label" group-label="test group">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot(
      "renders-with-unselected-additional-field"
    );
  });

  it("should render with selected static additional field", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test" selected label="test label" group-label="test group">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-selected-additional-field");
  });

  it("should render with dynamic additional field", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test" label="test label" group-label="test group" additional-field-display="dynamic" selected>
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-dynamic-additional-field");
  });

  it("should emit an updated checked value when selected", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>    
      </ic-radio-group>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icChange", callbackFn);
    page.rootInstance.selectHandler({ detail: { value: "true" } });
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should get the next item to select", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>   
        <ic-radio-option value="test2"></ic-radio-option>   
      </ic-radio-group>`,
    });

    const nextItemCalc = page.rootInstance.getNextItemToSelect(0, true);

    page.waitForChanges();
    expect(nextItemCalc).toBe(1);
  });

  it("should skip getting the next item when it's disabled", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>   
        <ic-radio-option value="test2" disabled></ic-radio-option> 
        <ic-radio-option value="test3"></ic-radio-option>    
      </ic-radio-group>`,
    });

    const nextItemCalc = page.rootInstance.getNextItemToSelect(0, true);
    page.waitForChanges();
    expect(nextItemCalc).toBe(2);
  });

  it("should not move onto the next item when nextItem < 0", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>    
      </ic-radio-group>`,
    });

    const nextItemCalc = page.rootInstance.getNextItemToSelect(0, false);

    page.waitForChanges();
    expect(nextItemCalc).toBe(0);
  });

  it("should select the first radio when nextItem > numRadios", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>   
        <ic-radio-option value="test"></ic-radio-option>  
        <ic-radio-option value="test"></ic-radio-option>   
      </ic-radio-group>`,
    });

    const nextItemCalc = page.rootInstance.getNextItemToSelect(2, true);

    page.waitForChanges();
    expect(nextItemCalc).toBe(0);
  });

  it("should select the radio option when clicked", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>    
      </ic-radio-group>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("radioOptionSelect", callbackFn);
    page.rootInstance.selectedChangeHandler("true");
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should emit new radio value when text field value given", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>    
      </ic-radio-group>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("radioOptionSelect", callbackFn);
    page.rootInstance.textfieldValueHandler({ detail: { value: "value" } });
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should emit default radio value when no text field value given", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>    
      </ic-radio-group>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("radioOptionSelect", callbackFn);
    page.rootInstance.textfieldValueHandler({ detail: { value: "" } });
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should test form reset event", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<form>
        <ic-radio-option value="test" selected></ic-radio-option>    
        <button id="resetButton" type="reset">Reset</button>  
      </form>`,
    });

    expect(page.root.selected).toBe(true);

    page.root.checked = false;
    await page.waitForChanges();

    expect(page.root.checked).toBe(false);

    await page.rootInstance.handleFormReset();
    await page.waitForChanges();

    expect(page.root.selected).toBe(true);

    //test disconnected callback
    page.setContent("");
  });
});
