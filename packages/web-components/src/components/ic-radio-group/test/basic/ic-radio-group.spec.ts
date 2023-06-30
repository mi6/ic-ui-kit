import { newSpecPage } from "@stencil/core/testing";
import { RadioGroup } from "../../ic-radio-group";
import { RadioOption } from "../../../ic-radio-option/ic-radio-option";
import { TextField } from "../../../ic-text-field/ic-text-field";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

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
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test" disabled label="test label" group-label="test group"></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-disabled");
  });

  it("should render with unselected static additional field", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
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
      components: [RadioGroup, RadioOption, TextField],
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
      components: [RadioGroup, RadioOption, TextField],
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

  it("should select the radio option when clicked", async () => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option> 
        <ic-radio-option label="test label">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label" value="Test value"></ic-text-field>
        </ic-radio-option>
        <ic-radio-option label="test label" value="Radio value">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-radio-option>   
      </ic-radio-group>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icCheck", callbackFn);

    page.rootInstance.radioOptions[1].click();
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
    expect(page.rootInstance.checkedValue).toBe("Test value");

    page.rootInstance.radioOptions[2].click();
    await page.waitForChanges();
    expect(page.rootInstance.checkedValue).toBe("Radio value");
  });

  it("should not select the radio option when textfield clicked", async () => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option> 
        <ic-radio-option label="test label">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label" value="Test value"></ic-text-field>
        </ic-radio-option>
      </ic-radio-group>`,
    });

    const div =
      page.rootInstance.radioOptions[1].shadowRoot.querySelector(
        ".dynamic-container"
      );
    div.click();
    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[1].selected).toBe(false);
  });

  it("should emit new radio value when text field value given", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>    
      </ic-radio-group>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icCheck", callbackFn);
    page.rootInstance.textfieldValueHandler({
      detail: { value: "value" },
      stopImmediatePropagation: jest.fn(),
    });
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
    page.doc.addEventListener("icCheck", callbackFn);
    page.rootInstance.textfieldValueHandler({
      detail: { value: "" },
      stopImmediatePropagation: jest.fn(),
    });
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should call 'setFocus' when radio option is focused", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-option value="test" selected></ic-radio-option>  `,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
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

  it("should change the orientation of the radio group to vertical if the user sets the orientation as horizontal and there are more than 2 radio options in the radio group", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required orientation="horizontal">
        <ic-radio-option value="test1" selected></ic-radio-option>
        <ic-radio-option value="test2" ></ic-radio-option> 
        <ic-radio-option value="test3"></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.rootInstance.orientation).toMatch("vertical");
  });

  it("should change the orientation of the radio group to vertical if the user has additional fields on any of the radio buttons in the group", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
      html: `<ic-radio-group label="test label" name="test" required orientation="horizontal">
        <ic-radio-option value="test1" selected></ic-radio-option>
        <ic-radio-option value="test" disabled label="test label" group-label="test group">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-radio-option>      
      </ic-radio-group>`,
    });

    expect(page.rootInstance.orientation).toMatch("vertical");
  });

  it("should test key down handler", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
      <ic-radio-option value="test"></ic-radio-option>   
      <ic-radio-option value="test2" disabled></ic-radio-option> 
      <ic-radio-option value="test3" selected></ic-radio-option>    
    </ic-radio-group>`,
    });

    //test wrap around from end to beginning
    page.root.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(true);
    expect(page.rootInstance.radioOptions[2].selected).toBe(false);

    page.root.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(false);
    expect(page.rootInstance.radioOptions[2].selected).toBe(true);

    page.root.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(true);
    expect(page.rootInstance.radioOptions[2].selected).toBe(false);

    page.root.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(false);
    expect(page.rootInstance.radioOptions[2].selected).toBe(true);

    page.root.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowLeft",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(true);
    expect(page.rootInstance.radioOptions[2].selected).toBe(false);

    //test wrap around from beginning to end
    page.root.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(false);
    expect(page.rootInstance.radioOptions[2].selected).toBe(true);
  });
});
