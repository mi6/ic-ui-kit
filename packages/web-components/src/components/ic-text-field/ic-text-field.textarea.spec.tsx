import { TextField } from "./ic-text-field";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-text-field", () => {
  it("renders a textarea", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" rows="6" value="">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-0" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container multiline="" validationstatus=""><textarea aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" class="no-resize" id="ic-text-field-input-0" inputmode="text" name="ic-text-field-input-0" placeholder="" rows="6" value=""></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
      </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="ic-text-field-input-0" type="hidden" value="">
      </ic-text-field>
    `);
  });

  it("renders textarea with placeholder", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" placeholder="placeholder"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" placeholder="placeholder" rows="6" value="">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-1" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container multiline="" validationstatus=""><textarea aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" class="no-resize" id="ic-text-field-input-1" inputmode="text" name="ic-text-field-input-1" placeholder="placeholder" rows="6" value=""></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
      </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="ic-text-field-input-1" type="hidden" value="">
      </ic-text-field>
    `);
  });

  it("renders textarea with value", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" value="test value"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" rows="6" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-2" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container multiline="" validationstatus=""><textarea aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" class="no-resize" id="ic-text-field-input-2" inputmode="text" name="ic-text-field-input-2" placeholder="" rows="6" value="test value"></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
      </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="ic-text-field-input-2" type="hidden" value="test value">
      </ic-text-field>
    `);
  });

  it("renders textarea with helperText, required and small", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" helper-text="helper text value" required=true small=true></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field small="" helper-text="helper text value" label="Test label" required="true" rows="6" value="">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-3" helpertext="helper text value" label="Test label" required=""></ic-input-label>
            <ic-input-component-container small="" multiline="" validationstatus=""><textarea aria-describedby="ic-text-field-input-3-helper-text" aria-invalid="false" aria-label="Test label" autocapitalize="off" class="no-resize" id="ic-text-field-input-3" inputmode="text" name="ic-text-field-input-3" placeholder="" required="" rows="6" value=""></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
      </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="ic-text-field-input-3" type="hidden" value="">
      </ic-text-field>
    `);
  });

  it("renders textarea with autoprops", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" value="test value" autofocus=true autocapitalize="on" autocomplete="on" autocorrect="on"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field autocapitalize="on" autocomplete="on" autocorrect="on" autofocus="true" label="Test label" rows="6" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-4" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container multiline="" validationstatus=""><textarea aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="on" class="no-resize" id="ic-text-field-input-4" inputmode="text" name="ic-text-field-input-4" placeholder="" rows="6" value="test value"></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
      </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="ic-text-field-input-4" type="hidden" value="test value">
      </ic-text-field>
    `);
  });

  it("renders textarea with hidden label", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" value="test value" hide-label=true></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field hide-label="true" label="Test label" rows="6" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-component-container multiline="" validationstatus=""><textarea aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" class="no-resize" id="ic-text-field-input-5" inputmode="text" name="ic-text-field-input-5" placeholder="" rows="6" value="test value"></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
      </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="ic-text-field-input-5" type="hidden" value="test value">
      </ic-text-field>
    `);
  });

  it("renders textarea with icon", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label">
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" rows="6" value="">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-6" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container multiline="" validationstatus="">
              <span slot="left-icon">
                <slot name="icon"></slot>
              </span><textarea aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" class="no-resize" id="ic-text-field-input-6" inputmode="text" name="ic-text-field-input-6" placeholder="" rows="6" value=""></textarea>
              <slot name="clear-button"></slot>
              <slot name="search-submit-button"></slot>
            </ic-input-component-container>
            <slot name="menu"></slot>
        </ic-input-container>
        </mock:shadow-root>
        <svg fill="#000000" height="24px" slot="icon" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path>
        </svg>
        <input class="ic-input" name="ic-text-field-input-6" type="hidden" value="">
      </ic-text-field>
    `);
  });

  it("renders textarea disabled", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" value="test value" disabled=true></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field disabled="true" label="Test label" rows="6" value="test value">
        <mock:shadow-root>
          <ic-input-container disabled="">
            <ic-input-label disabled="" for="ic-text-field-input-7" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container disabled="" multiline="" validationstatus=""><textarea aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" class="no-resize" disabled="" id="ic-text-field-input-7" inputmode="text" name="ic-text-field-input-7" placeholder="" rows="6" value="test value"></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
      </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" disabled="" name="ic-text-field-input-7" type="hidden" value="test value">
      </ic-text-field>
    `);
  });

  it("renders textarea readonly", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" value="test value" readonly=true></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" readonly="" rows="6" value="test value">
        <mock:shadow-root>
          <ic-input-container disabled="" readonly="">
            <ic-input-label for="ic-text-field-input-8" helpertext="" label="Test label" readonly=""></ic-input-label>
            <ic-input-component-container disabled="" multiline="" readonly="" validationstatus=""><textarea aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" class="no-left-pad no-resize readonly" disabled="" id="ic-text-field-input-8" inputmode="text" name="ic-text-field-input-8" placeholder="" readonly="" rows="6" value="test value"></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
      </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" disabled="" name="ic-text-field-input-8" type="hidden" value="test value">
      </ic-text-field>
    `);
  });

  it("renders textarea with max length", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=6 label="Test label" value="a long test value to exceed limit" max-length=25></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-text-field label="Test label" max-length="25" rows="6" value="a long test value to exceed limit">
      <mock:shadow-root>
        <ic-input-container>
          <ic-input-label for="ic-text-field-input-9" helpertext="" label="Test label"></ic-input-label>
          <ic-input-component-container multiline="" validationstatus="error"><textarea aria-describedby="ic-text-field-input-9-charcount-desc ic-text-field-input-9-validation-text" aria-invalid="true" aria-label="Test label" autocapitalize="off" class="no-resize" id="ic-text-field-input-9" inputmode="text" name="ic-text-field-input-9" placeholder="" rows="6" value="a long test value to exceed limit"></textarea>
          <slot name="clear-button"></slot>
          <slot name="search-submit-button"></slot>
        </ic-input-component-container>
        <slot name="menu"></slot>
    <ic-input-validation arialivemode="assertive" for="ic-text-field-input-9" message="Maximum length exceeded" status="error">
            <div slot="validation-message-adornment">
              <ic-typography class="exceeded maxlengthtext" variant="caption">
                <span aria-live="polite" id="ic-text-field-input-9-charcount" class="charcount">
                  33/25
                </span>
                <span hidden="" id="ic-text-field-input-9-charcount-desc">
                  Field can contain a maximum of 25 characters.
                </span>
              </ic-typography>
            </div>
          </ic-input-validation>
        </ic-input-container>
      </mock:shadow-root>
      <input class="ic-input" name="ic-text-field-input-9" type="hidden" value="a long test value to exceed limit">
    </ic-text-field>
    `);
  });

  it("renders textarea with name & full width", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=2 label="Test label" value="test value" name="mycontolname" full-width=true></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field class="fullwidth" full-width="true" label="Test label" name="mycontolname" rows="2" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-10" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container fullwidth="" multiline="" validationstatus=""><textarea aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" class="no-resize" id="ic-text-field-input-10" inputmode="text" name="mycontolname" placeholder="" rows="2" value="test value"></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
      </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="mycontolname" type="hidden" value="test value">
      </ic-text-field>
    `);
  });

  it("renders textarea with success validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=6 label="Test label" validation-status="success" validation-text="Good choice!" value="test value"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" rows="6" validation-status="success" validation-text="Good choice!" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-11" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container multiline="" validationstatus="success"><textarea aria-describedby="ic-text-field-input-11-validation-text" aria-invalid="false" aria-label="Test label" autocapitalize="off" class="no-resize" id="ic-text-field-input-11" inputmode="text" name="ic-text-field-input-11" placeholder="" rows="6" value="test value"></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
        <ic-input-validation arialivemode="polite" for="ic-text-field-input-11" message="Good choice!" status="success"></ic-input-validation>
          </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="ic-text-field-input-11" type="hidden" value="test value">
      </ic-text-field>
    `);
  });

  it("renders textarea with warning validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=6 label="Test label" validation-status="warning" validation-text="warning text" value="test value"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" rows="6" validation-status="warning" validation-text="warning text" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-12" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container multiline="" validationstatus="warning"><textarea aria-describedby="ic-text-field-input-12-validation-text" aria-invalid="false" aria-label="Test label" autocapitalize="off" class="no-resize" id="ic-text-field-input-12" inputmode="text" name="ic-text-field-input-12" placeholder="" rows="6" value="test value"></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
        <ic-input-validation arialivemode="polite" for="ic-text-field-input-12" message="warning text" status="warning"></ic-input-validation>
          </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="ic-text-field-input-12" type="hidden" value="test value">
      </ic-text-field>
    `);
  });

  it("renders textarea with error validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=6 label="Test label" validation-status="error" validation-text="error text" value="test value"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" rows="6" validation-status="error" validation-text="error text" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-13" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container multiline="" validationstatus="error"><textarea aria-describedby="ic-text-field-input-13-validation-text" aria-invalid="true" aria-label="Test label" autocapitalize="off" class="no-resize" id="ic-text-field-input-13" inputmode="text" name="ic-text-field-input-13" placeholder="" rows="6" value="test value"></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
        <ic-input-validation arialivemode="assertive" for="ic-text-field-input-13" message="error text" status="error"></ic-input-validation>
          </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="ic-text-field-input-13" type="hidden" value="test value">
      </ic-text-field>
    `);
  });

  it("renders textarea with resize", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=6 label="Test label" resize=true value="test value"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" resize="true" rows="6" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-14" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container multiline="" validationstatus=""><textarea aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" id="ic-text-field-input-14" inputmode="text" name="ic-text-field-input-14" placeholder="" rows="6" value="test value"></textarea>
            <slot name="clear-button"></slot>
            <slot name="search-submit-button"></slot>
          </ic-input-component-container>
          <slot name="menu"></slot>
      </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="ic-text-field-input-14" type="hidden" value="test value">
      </ic-text-field>
    `);
  });
});
