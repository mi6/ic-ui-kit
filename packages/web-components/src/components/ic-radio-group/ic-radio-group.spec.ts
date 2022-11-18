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

    expect(page.root).toEqualHtml(`
    <ic-radio-group label="test label" name="test">
      <mock:shadow-root>
        <div aria-label="test label" role="radiogroup">
         <ic-input-label label="test label"></ic-input-label>
           <slot></slot>
        </div>
        <ic-input-validation arialivemode="polite" message="" status=""></ic-input-validation>
      </mock:shadow-root>
      <ic-radio-option additional-field-display="static" value="test">
        <mock:shadow-root>
          <div class="container">
            <input id="ic-radio-option-test-test label" name="test" role="radio" tabindex="0" type="radio" value="test">
              <span class="checkmark"></span>
            <ic-typography class="radio-label" variant="body">
            <label htmlfor="ic-radio-option-test-test label"></label>
            </ic-typography>
          </div>
        </mock:shadow-root>
      </ic-radio-option>
      <input class="ic-input" name="test" type="hidden" value="">
    </ic-radio-group>
    `);
  });

  it("should render as required", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test"></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-radio-group label="test label" name="test" required="">
      <mock:shadow-root>
        <div aria-label="test label, required" role="radiogroup">
          <ic-input-label label="test label" required=""></ic-input-label>
          <slot></slot>
        </div>
        <ic-input-validation arialivemode="polite" message="" status=""></ic-input-validation>
      </mock:shadow-root>
      <ic-radio-option additional-field-display="static" value="test">
        <mock:shadow-root>
          <div class="container">
            <input id="ic-radio-option-test-test label" name="test" role="radio" tabindex="0" type="radio" value="test">
            <span class="checkmark"></span>
            <ic-typography class="radio-label" variant="body">
              <label htmlfor="ic-radio-option-test-test label"></label>
            </ic-typography>
          </div>
        </mock:shadow-root>
      </ic-radio-option>
      <input class="ic-input" name="test" type="hidden" value="">
    </ic-radio-group>
    `);
  });

  it("should render as helper text", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" helperText="helper test">
        <ic-radio-option value="test"></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-radio-group helpertext="helper test" label="test label" name="test">
           <mock:shadow-root>
             <div aria-label="test label" role="radiogroup">
               <ic-input-label label="test label"></ic-input-label>
               <slot></slot>
             </div>
             <ic-input-validation arialivemode="polite" message="" status=""></ic-input-validation>
           </mock:shadow-root>
           <ic-radio-option additional-field-display="static" value="test">
            <mock:shadow-root>
             <div class="container">
                <input id="ic-radio-option-test-test label" name="test" role="radio" tabindex="0" type="radio" value="test">
               <span class="checkmark"></span>
               <ic-typography class="radio-label" variant="body">
                 <label htmlfor="ic-radio-option-test-test label"></label>
               </ic-typography>
             </div>
            </mock:shadow-root>
           </ic-radio-option>
           <input class="ic-input" name="test" type="hidden" value="">
         </ic-radio-group>
    `);
  });

  it("should render with selected option", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-radio-group label="test label" name="test" required="">
      <mock:shadow-root>
        <div aria-label="test label, required" role="radiogroup">
          <ic-input-label label="test label" required=""></ic-input-label>
          <slot></slot>
        </div>
        <ic-input-validation arialivemode="polite" message="" status=""></ic-input-validation>
      </mock:shadow-root>
      <ic-radio-option additional-field-display="static" selected="" value="test">
        <mock:shadow-root>
          <div class="container">
            <input checked="" id="ic-radio-option-test-test label" name="test" role="radio" tabindex="0" type="radio" value="test">
            <span class="checkmark"></span>
            <ic-typography class="radio-label" variant="body">
              <label htmlfor="ic-radio-option-test-test label"></label>
            </ic-typography>
          </div>
        </mock:shadow-root>
      </ic-radio-option>
      <input class="ic-input" name="test" type="hidden" value="test">
    </ic-radio-group>
    `);
  });

  it("should render with validation status", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required validation-status="error" validation-text="error">
        <ic-radio-option value="test" selected></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-radio-group label="test label" name="test" required="" validation-status="error" validation-text="error">
      <mock:shadow-root>
        <div aria-label="test label, required" role="radiogroup">
          <ic-input-label class="error" label="test label" required=""></ic-input-label>
          <slot></slot>
        </div>
        <ic-input-validation arialivemode="polite" message="error" status="error"></ic-input-validation>
      </mock:shadow-root>
      <ic-radio-option additional-field-display="static" selected="" value="test">
        <mock:shadow-root>
          <div class="container">
            <input checked="" id="ic-radio-option-test-test label" name="test" role="radio" tabindex="0" type="radio" value="test">
            <span class="checkmark"></span>
            <ic-typography class="radio-label" variant="body">
              <label htmlfor="ic-radio-option-test-test label"></label>
            </ic-typography>
          </div>
        </mock:shadow-root>
      </ic-radio-option>
      <input class="ic-input" name="test" type="hidden" value="test">
    </ic-radio-group>
    `);
  });

  it("should render radio option disabled", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test" disabled label="test label" group-label="test group"></ic-radio-option>    
      </ic-radio-group>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-radio-option additional-field-display="static" group-label="test group" label="test label" value="test" disabled>
        <mock:shadow-root>
          <div class="container disabled">
            <input disabled id="ic-radio-option-test label-test group" role="radio" tabindex="-1" type="radio" value="test">
              <span class="checkmark"></span>
            <ic-typography class="radio-label" variant="body">
            <label htmlfor="ic-radio-option-test label-test group">
             test label
            </label>
            </ic-typography>
          </div>
        </mock:shadow-root>
      </ic-radio-option>
    `);
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

    expect(page.root).toEqualHtml(`
      <ic-radio-option additional-field-display="static" group-label="test group" label="test label" value="test" disabled>
        <mock:shadow-root>
          <div class="container disabled">
            <input disabled id="ic-radio-option-test label-test group" role="radio" tabindex="-1" type="radio" value="test">
              <span class="checkmark"></span>
            <ic-typography class="radio-label" variant="body">
            <label htmlfor="ic-radio-option-test label-test group">
             test label
            </label>
            </ic-typography>
          </div>
          <div class="dynamic-container">
            <div>
              <div class="addition-field-wrapper">
                <slot name="additional-field"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <ic-text-field disabled="" label="Test label" placeholder="Placeholder" slot="additional-field"></ic-text-field>
      </ic-radio-option>
    `);
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

    expect(page.root).toEqualHtml(`
      <ic-radio-option additional-field-display="static" group-label="test group" label="test label" value="test" selected>
        <mock:shadow-root>
          <div class="container">
            <input checked id="ic-radio-option-test label-test group" role="radio" tabindex="0" type="radio" value="test">
              <span class="checkmark"></span>
            <ic-typography class="radio-label" variant="body">
            <label htmlfor="ic-radio-option-test label-test group">
             test label
            </label>
            </ic-typography>
          </div>
          <div class="dynamic-container">
            <div>
              <div class="addition-field-wrapper">
                <slot name="additional-field"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <ic-text-field label="Test label" placeholder="Placeholder" slot="additional-field"></ic-text-field>
      </ic-radio-option>
    `);
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

    expect(page.root).toEqualHtml(`
      <ic-radio-option additional-field-display="dynamic" group-label="test group" label="test label" value="test" selected>
        <mock:shadow-root>
          <div class="container">
            <input checked id="ic-radio-option-test label-test group" role="radio" tabindex="0" type="radio" value="test">
              <span class="checkmark"></span>
            <ic-typography class="radio-label" variant="body">
            <label htmlfor="ic-radio-option-test label-test group">
             test label
            </label>
            </ic-typography>
          </div>
          <div class="dynamic-container">
            <div class="branch-corner"></div>
            <div>
            <ic-typography variant="caption">
              <p class="dynamic-text">
                This selection requires additional answers
              </p>
            </ic-typography>
              <div>
                <slot name="additional-field"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <ic-text-field label="Test label" placeholder="Placeholder" slot="additional-field"></ic-text-field>
      </ic-radio-option>
    `);
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
});
