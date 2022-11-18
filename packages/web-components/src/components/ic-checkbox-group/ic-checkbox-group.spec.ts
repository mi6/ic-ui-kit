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

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group label="test label" name="test">
      <mock:shadow-root>
        <fieldset aria-labelledby="" id="test">
          <legend>
            <ic-input-label for="test" helpertext="" label="test label"></ic-input-label>
          </legend>
          <div class="list-items">
            <slot></slot>
          </div>
        </fieldset>
      </mock:shadow-root>
      <ic-checkbox additional-field-display="static" value="test" label="test label">
        <mock:shadow-root>
          <div class="container">
          <input class="checkbox" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
              <ic-typography variant="body">
                <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
                  test label
                </label>
            </ic-typography>
          </div>
        </mock:shadow-root>
      </ic-checkbox>
    </ic-checkbox-group>
    `);
  });

  it("should render as required", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test" required>
        <ic-checkbox value="test" label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group label="test label" name="test" required="">
      <mock:shadow-root>
        <span aria-hidden="true" class="screen-reader-only-text" id="screenReaderOnlyText">
          test label required
        </span>
        <fieldset aria-labelledby="screenReaderOnlyText" id="test">
          <legend>
            <ic-input-label for="test" helpertext="" label="test label" required=""></ic-input-label>
          </legend>
          <div class="list-items">
            <slot></slot>
          </div>
        </fieldset>
      </mock:shadow-root>
       <ic-checkbox additional-field-display="static" value="test" label="test label">
        <mock:shadow-root>
          <div class="container">
          <input class="checkbox" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
            <ic-typography variant="body">
            <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
            test label
          </label>
            </ic-typography>
          </div>
        </mock:shadow-root>
       </ic-checkbox>
     </ic-checkbox-group>
    `);
  });

  it("should render as helper text", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test" helper-text="helper test">
        <ic-checkbox value="test" label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group helper-text="helper test" label="test label" name="test">
      <mock:shadow-root>
        <fieldset aria-labelledby="test-helper-text" id="test">
          <legend>
            <ic-input-label for="test" helpertext="helper test" label="test label"></ic-input-label>
          </legend>
          <div class="list-items">
            <slot></slot>
          </div>
        </fieldset>
      </mock:shadow-root>
      <ic-checkbox additional-field-display="static" value="test" label="test label">
        <mock:shadow-root>
          <div class="container">
          <input class="checkbox" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
            <ic-typography variant="body">
            <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
            test label
          </label>
            </ic-typography>
          </div>
        </mock:shadow-root>
      </ic-checkbox>
    </ic-checkbox-group>
    `);
  });

  it("should render checked", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" checked label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group label="test label" name="test">
      <mock:shadow-root>
        <fieldset aria-labelledby="" id="test">
          <legend>
            <ic-input-label for="test" helpertext="" label="test label"></ic-input-label>
          </legend>
          <div class="list-items">
           <slot></slot>
          </div>
        </fieldset>
      </mock:shadow-root>
      <ic-checkbox additional-field-display="static" checked value="test" label="test label">
        <mock:shadow-root>
          <div class="container">
            <svg class="checkmark" clip-rule="evenodd" fill-rule="evenodd" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <title>checkmark icon</title> 
              <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"></path>
            </svg>
            <input checked="" class="checkbox checked" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
            <ic-typography variant="body">
            <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
                  test label
                </label>
            </ic-typography>
          </div>
        </mock:shadow-root>
        <input class="ic-input" name="test" type="hidden" value="test">
       </ic-checkbox>
      </ic-checkbox-group>
    `);
  });

  it("should render indeterminate", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" checked indeterminate label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group label="test label" name="test">
      <mock:shadow-root>
        <fieldset aria-labelledby="" id="test">
          <legend>
            <ic-input-label for="test" helpertext="" label="test label"></ic-input-label>
          </legend>
          <div class="list-items">
           <slot></slot>
          </div>
        </fieldset>
      </mock:shadow-root>
      <ic-checkbox additional-field-display="static" checked="" indeterminate="" value="test" label="test label">
        <mock:shadow-root>
          <div class="container">
            <div class="indeterminate-symbol"></div>
            <input checked="" class="checkbox checked indeterminate" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
            <ic-typography variant="body">
            <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
                  test label
                </label>
            </ic-typography>
          </div>
        </mock:shadow-root>
        <input class="ic-input" name="test" type="hidden" value="test">
       </ic-checkbox>
      </ic-checkbox-group>
    `);
  });

  it("should render an aria label when label hidden", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" hide-label name="test">
        <ic-checkbox value="test" label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group hide-label="" label="test label" name="test">
      <mock:shadow-root>
        <span aria-hidden="true" class="screen-reader-only-text" id="screenReaderOnlyText">
          test label
        </span>
        <fieldset aria-labelledby="screenReaderOnlyText" id="test">
          <div class="list-items">
           <slot></slot>
          </div>
        </fieldset>
      </mock:shadow-root>
      <ic-checkbox additional-field-display="static" value="test" label="test label">
        <mock:shadow-root>
          <div class="container">
          <input class="checkbox" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
            <ic-typography variant="body">
            <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
                  test label
                </label>
            </ic-typography>
          </div>
        </mock:shadow-root>
       </ic-checkbox>
      </ic-checkbox-group>
    `);
  });

  it("should render in a disabled state", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" disabled label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group label="test label" name="test">
      <mock:shadow-root>
        <fieldset aria-labelledby="" id="test">
          <legend>
            <ic-input-label for="test" helpertext="" label="test label"></ic-input-label>
          </legend>
          <div class="list-items">
            <slot></slot>
          </div>
        </fieldset>
      </mock:shadow-root>
      <ic-checkbox additional-field-display="static" value="test" disabled label="test label">
        <mock:shadow-root>
          <div class="container disabled">
          <input class="checkbox" disabled="" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
              <ic-typography variant="body">
              <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
              test label
            </label>
            </ic-typography>
          </div>
        </mock:shadow-root>
      </ic-checkbox>
    </ic-checkbox-group>
    `);
  });

  it("should render with validation status", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" hide-label name="test" validation-status="error">
        <ic-checkbox value="test" label="test label"></ic-checkbox>    
      </ic-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group hide-label="" label="test label" name="test" validation-status="error">
      <mock:shadow-root>
        <span aria-hidden="true" class="screen-reader-only-text" id="screenReaderOnlyText">
          test label
          invalid data
        </span>
        <fieldset aria-labelledby="screenReaderOnlyText test-validation-text" id="test">
          <div class="list-items">
           <slot></slot>
          </div>
        </fieldset>
        <ic-input-validation arialivemode="polite" for="test" message="" status="error"></ic-input-validation>
      </mock:shadow-root>
      <ic-checkbox additional-field-display="static" value="test" label="test label">
        <mock:shadow-root>
          <div class="container">
          <input class="checkbox" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
            <ic-typography variant="body">
            <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
                  test label
                </label>
            </ic-typography>
          </div>
        </mock:shadow-root>
       </ic-checkbox>
      </ic-checkbox-group>
    `);
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

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group hide-label="" label="test label" name="test" validation-status="error">
      <mock:shadow-root>
        <span aria-hidden="true" class="screen-reader-only-text" id="screenReaderOnlyText">
          test label
          invalid data
        </span>
        <fieldset aria-labelledby="screenReaderOnlyText test-validation-text" id="test">
          <div class="list-items">
           <slot></slot>
          </div>
        </fieldset>
        <ic-input-validation arialivemode="polite" for="test" message="" status="error"></ic-input-validation>
      </mock:shadow-root>
      <ic-checkbox additional-field-display="dynamic" value="test" label="test label">
        <mock:shadow-root>
          <div class="container">
          <input class="checkbox" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
            <ic-typography variant="body">
            <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
                  test label
                </label>
            </ic-typography>
          </div>
          <div class="dynamic-container" style="display: none;">
            <div class="branch-corner"></div>
            <div>
              <ic-typography variant="caption">
                <p aria-live="polite" class="dynamic-text">
                  This selection requires additional answers
                </p>
              </ic-typography>
              <div>
                <slot name="additional-field"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <ic-text-field label="Test label" placeholder="Placeholder" slot="additional-field" value="">
          <mock:shadow-root>
            <ic-input-container>
              <ic-input-label for="ic-text-field-input-0" helpertext="" label="Test label"></ic-input-label>
              <ic-input-component-container validationstatus="">
                <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-0" inputmode="text" name="ic-text-field-input-0" placeholder="Placeholder" type="text" value="">
                <slot name="clear-button"></slot>
                <slot name="search-submit-button"></slot>
              </ic-input-component-container>
              <slot name="menu"></slot>
            </ic-input-container>
          </mock:shadow-root>
        </ic-text-field>
       </ic-checkbox>
      </ic-checkbox-group>
    `);
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

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group hide-label="" label="test label" name="test" validation-status="error">
      <mock:shadow-root>
        <span aria-hidden="true" class="screen-reader-only-text" id="screenReaderOnlyText">
          test label
          invalid data
        </span>
        <fieldset aria-labelledby="screenReaderOnlyText test-validation-text" id="test">
          <div class="list-items">
           <slot></slot>
          </div>
        </fieldset>
        <ic-input-validation arialivemode="polite" for="test" message="" status="error"></ic-input-validation>
      </mock:shadow-root>
      <ic-checkbox additional-field-display="dynamic" value="test" checked label="test label">
        <mock:shadow-root>
          <div class="container">
            <svg class="checkmark" clip-rule="evenodd" fill-rule="evenodd" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <title>
                checkmark icon
              </title>
              <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"></path>
            </svg>
            <input checked="" class="checkbox checked" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
            <ic-typography variant="body">
            <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
                  test label
                </label>
            </ic-typography>
          </div>
          <div class="dynamic-container" style="display: flex;">
            <div class="branch-corner"></div>
            <div>
              <ic-typography variant="caption">
                <p aria-live="polite" class="dynamic-text">
                  This selection requires additional answers
                </p>
              </ic-typography>
              <div>
                <slot name="additional-field"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <ic-text-field label="Test label" placeholder="Placeholder" slot="additional-field" value="">
          <mock:shadow-root>
            <ic-input-container>
              <ic-input-label for="ic-text-field-input-1" helpertext="" label="Test label"></ic-input-label>
              <ic-input-component-container validationstatus="">
                <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-1" inputmode="text" name="ic-text-field-input-1" placeholder="Placeholder" type="text" value="">
                <slot name="clear-button"></slot>
                <slot name="search-submit-button"></slot>
              </ic-input-component-container>
              <slot name="menu"></slot>
            </ic-input-container>
          </mock:shadow-root>
          <input class="ic-input" name="test" type="hidden" value="test">
        </ic-text-field>
        <input class="ic-input" name="undefined" type="hidden" value="test">
       </ic-checkbox>
      </ic-checkbox-group>
    `);
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

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group hide-label="" label="test label" name="test" validation-status="error">
      <mock:shadow-root>
        <span aria-hidden="true" class="screen-reader-only-text" id="screenReaderOnlyText">
          test label
          invalid data
        </span>
        <fieldset aria-labelledby="screenReaderOnlyText test-validation-text" id="test">
          <div class="list-items">
           <slot></slot>
          </div>
        </fieldset>
        <ic-input-validation arialivemode="polite" for="test" message="" status="error"></ic-input-validation>
      </mock:shadow-root>
      <ic-checkbox additional-field-display="static" value="test" label="test label">
        <mock:shadow-root>
          <div class="container">
          <input class="checkbox" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
            <ic-typography variant="body">
            <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
                  test label
                </label>
            </ic-typography>
          </div>
          <div class="dynamic-container">
            <div>
              <div class="additional-field-wrapper">
                <slot name="additional-field"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <ic-text-field label="Test label" placeholder="Placeholder" slot="additional-field" value="" disabled>
          <mock:shadow-root>
            <ic-input-container disabled>
              <ic-input-label for="ic-text-field-input-2" helpertext="" label="Test label" disabled></ic-input-label>
              <ic-input-component-container validationstatus="" disabled>
              <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" disabled="" id="ic-text-field-input-2" inputmode="text" name="ic-text-field-input-2" placeholder="" type="text" value="">
                <slot name="clear-button"></slot>
                <slot name="search-submit-button"></slot>
              </ic-input-component-container>
              <slot name="menu"></slot>
            </ic-input-container>
          </mock:shadow-root>
        </ic-text-field>
       </ic-checkbox>
      </ic-checkbox-group>
    `);
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

    expect(page.root).toEqualHtml(`
    <ic-checkbox-group hide-label="" label="test label" name="test" validation-status="error">
      <mock:shadow-root>
        <span aria-hidden="true" class="screen-reader-only-text" id="screenReaderOnlyText">
          test label
          invalid data
        </span>
        <fieldset aria-labelledby="screenReaderOnlyText test-validation-text" id="test">
          <div class="list-items">
           <slot></slot>
          </div>
        </fieldset>
        <ic-input-validation arialivemode="polite" for="test" message="" status="error"></ic-input-validation>
      </mock:shadow-root>
      <ic-checkbox additional-field-display="static" value="test" checked label="test label">
        <mock:shadow-root>
          <div class="container">
          <svg class="checkmark" clip-rule="evenodd" fill-rule="evenodd" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <title>
                checkmark icon
              </title>
              <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"></path>
            </svg>
            <input checked="" class="checkbox checked" id="ic-checkbox-test label-test label" name="test" role="checkbox" type="checkbox" value="test">
            <ic-typography variant="body">
            <label class="checkbox-label" htmlfor="ic-checkbox-test label-test label">
            test label
          </label>
            </ic-typography>
          </div>
          <div class="dynamic-container">
            <div>
              <div class="additional-field-wrapper">
                <slot name="additional-field"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <ic-text-field label="Test label" placeholder="Placeholder" slot="additional-field" value="">
          <mock:shadow-root>
            <ic-input-container>
              <ic-input-label for="ic-text-field-input-3" helpertext="" label="Test label"></ic-input-label>
              <ic-input-component-container validationstatus="">
              <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-3" inputmode="text" name="ic-text-field-input-3" placeholder="Placeholder" type="text" value="">
                <slot name="clear-button"></slot>
                <slot name="search-submit-button"></slot>
              </ic-input-component-container>
              <slot name="menu"></slot>
            </ic-input-container>
          </mock:shadow-root>
          <input class="ic-input" name="test" type="hidden" value="test">
        </ic-text-field>
        <input class="ic-input" name="undefined" type="hidden" value="test">
       </ic-checkbox>
      </ic-checkbox-group>
    `);
  });

  it("should change checked state", async () => {
    const checkbox = new Checkbox();

    expect(checkbox.checked).toBe(false);
    checkbox["handleClick"]();
    expect(checkbox.checked).toBe(true);
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
});
