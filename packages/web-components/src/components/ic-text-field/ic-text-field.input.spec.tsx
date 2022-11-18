import { TextField } from "./ic-text-field";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-text-field", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" rows=1></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" rows="1" value="">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-0" helpertext="" label="Test label"></ic-input-label>
              <ic-input-component-container validationstatus="">
                <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-0" inputmode="text" name="ic-text-field-input-0" placeholder="" type="text" value="">
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

  it("should render with placeholder", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" placeholder="placeholder" rows=0></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" placeholder="placeholder" rows="0" value="">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-1" helpertext="" label="Test label"></ic-input-label>
              <ic-input-component-container validationstatus="">
                <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-1" inputmode="text" name="ic-text-field-input-1" placeholder="placeholder" type="text" value="">
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

  it("should render with value", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-2" helpertext="" label="Test label"></ic-input-label>
              <ic-input-component-container validationstatus="">
                <input  aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-2" inputmode="text" name="ic-text-field-input-2" placeholder="" type="text" value="test value">
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

  it("should render with helperText, required and small", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" helper-text="helper text value" required=true small=true></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field small="true" helper-text="helper text value" label="Test label" required="true" value="">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-3" helpertext="helper text value" label="Test label" required=""></ic-input-label>
            <ic-input-component-container small="" validationstatus="">
              <input  aria-describedby="ic-text-field-input-3-helper-text" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-3" inputmode="text" name="ic-text-field-input-3" placeholder="" required="" type="text" value="">
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

  it("should render with autoprops", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value" autofocus=true autocapitalize="on" autocomplete="on" autocorrect="on"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field autocapitalize="on" autocomplete="on" autocorrect="on" autofocus="true" label="Test label" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-4" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container validationstatus="">
              <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="on" autocomplete="on" id="ic-text-field-input-4" inputmode="text" name="ic-text-field-input-4" placeholder="" type="text" value="test value">
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

  it("should render with hidden label", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value" hide-label=true></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field hide-label="true" label="Test label" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-component-container validationstatus="">
              <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-5" inputmode="text" name="ic-text-field-input-5" placeholder="" type="text" value="test value">
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

  it("should render with icon", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label">
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
      <ic-text-field label="Test label" value="">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-6" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container validationstatus="">
              <span slot="left-icon">
                <slot name="icon"></slot>
              </span>
              <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-6" inputmode="text" name="ic-text-field-input-6" placeholder="" type="text" value="">
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

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value" disabled=true></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field disabled="true" label="Test label" value="test value">
        <mock:shadow-root>
          <ic-input-container disabled="">
            <ic-input-label disabled="" for="ic-text-field-input-7" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container disabled="" validationstatus="">
              <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" disabled="" id="ic-text-field-input-7" inputmode="text" name="ic-text-field-input-7" placeholder="" type="text" value="test value">
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

  it("should render readonly", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value" readonly=true></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" readonly="true" value="test value">
        <mock:shadow-root>
          <ic-input-container disabled="" readonly="">
            <ic-input-label for="ic-text-field-input-8" helpertext="" label="Test label" readonly=""></ic-input-label>
            <ic-input-component-container disabled="" readonly="" validationstatus="">
              <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" class="no-left-pad readonly" disabled="" id="ic-text-field-input-8" inputmode="text" name="ic-text-field-input-8" placeholder="" readonly="" type="text" value="test value">
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

  it("should render with max length", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="a long test value to exceed limit" max-length=25></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" max-length="25" value="a long test value to exceed limit">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-9" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container validationstatus="error">
              <input aria-describedby="ic-text-field-input-9-charcount-desc ic-text-field-input-9-validation-text" aria-invalid="true" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-9" inputmode="text" name="ic-text-field-input-9" placeholder="" type="text" value="a long test value to exceed limit">
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

  it("should render with name & full width", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value" name="mycontolname" full-width=true></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field class="fullwidth" full-width="true" label="Test label" name="mycontolname" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-10" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container fullwidth="" validationstatus="">
              <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-10" inputmode="text" name="mycontolname" placeholder="" type="text" value="test value">
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

  it("should render with success validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" validation-status="success" validation-text="Good choice!" value="test value"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" validation-status="success" validation-text="Good choice!" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-11" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container validationstatus="success">
              <input aria-describedby="ic-text-field-input-11-validation-text" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-11" inputmode="text" name="ic-text-field-input-11" placeholder="" type="text" value="test value">
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

  it("should render with warning validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" validation-status="warning" validation-text="warning text" value="test value"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" validation-status="warning" validation-text="warning text" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-12" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container validationstatus="warning">
              <input aria-describedby="ic-text-field-input-12-validation-text" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-12" inputmode="text" name="ic-text-field-input-12" placeholder="" type="text" value="test value">
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

  it("should render with error validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" validation-status="error" validation-text="error text" value="test value"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" validation-status="error" validation-text="error text" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-13" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container validationstatus="error">
              <input aria-describedby="ic-text-field-input-13-validation-text" aria-invalid="true" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-13" inputmode="text" name="ic-text-field-input-13" placeholder="" type="text" value="test value">
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

  it("should render with inline success validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" validation-status="success" validation-text="Good choice!" validation-inline="true" value="test value"></ic-text-field>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-text-field label="Test label" validation-inline="true" validation-status="success" validation-text="Good choice!" value="test value">
        <mock:shadow-root>
          <ic-input-container>
            <ic-input-label for="ic-text-field-input-14" helpertext="" label="Test label"></ic-input-label>
            <ic-input-component-container validationinline="" validationstatus="success">
              <input aria-describedby="" aria-invalid="false" aria-label="Test label" autocapitalize="off" autocomplete="off" id="ic-text-field-input-14" inputmode="text" name="ic-text-field-input-14" placeholder="" type="text" value="test value">
              <slot name="clear-button"></slot>
              <slot name="search-submit-button"></slot>
            </ic-input-component-container>
            <slot name="menu"></slot>
          <ic-input-validation arialivemode="polite" for="ic-text-field-input-14" message="" status=""></ic-input-validation>
          </ic-input-container>
        </mock:shadow-root>
        <input class="ic-input" name="ic-text-field-input-14" type="hidden" value="test value">
      </ic-text-field>
    `);
  });

  it("should focus", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" rows=1></ic-text-field>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icFocus", callbackFn);
    const input = page.root.shadowRoot.querySelector("input");
    await input.focus();
    expect(callbackFn).toHaveBeenCalled();
  });

  it("should blur", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" rows=1></ic-text-field>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icBlur", callbackFn);
    const input = page.root.shadowRoot.querySelector("input");
    await input.blur();
    expect(callbackFn).toHaveBeenCalled();
  });

  it("should not show left icon if text field is disabled", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" rows=1 disabled>
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

    const slot = page.root.shadowRoot.querySelector(`[slot="icon"]`);
    expect(slot).toBeNull();
    expect(page.rootInstance.showLeftIcon).toBe(false);
  });

  it("should not exceed max length if new value < max length", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" rows=1 max-length=5></ic-text-field>`,
    });

    page.rootInstance.watchValueHandler("test");
    expect(page.rootInstance.maxLengthExceeded).toBe(false);
  });
});
