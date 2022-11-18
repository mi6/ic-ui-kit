import { newSpecPage } from "@stencil/core/testing";
import { Switch } from "./ic-switch";

describe("ic-switch component", () => {
  it("should render an aria-label", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title"></ic-switch>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-switch label="Custom title">
      <mock:shadow-root>
        <label class="ic-switch-container" htmlfor="ic-switch-input-0">
        <ic-input-label class="ic-switch-label" for="ic-switch-input-0" helpertext="" label="Custom title" readonly=""></ic-input-label>
          <span class="ic-switch-line-break"></span>
           <input aria-checked="false" aria-describedby="" aria-label="Custom title" class="ic-switch-input" id="ic-switch-input-0" name="toggle" role="switch" type="checkbox">
          <span class="ic-switch-toggle">
            <svg class="ic-switch-icon" aria-hidden="true" focusable="false" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <line class="ic-switch-icon-line" x1="9" y1="1" x2="9" y2="9"></line>
            </svg>
            <svg class="ic-switch-icon" aria-hidden="true" focusable="false" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <circle class="ic-switch-icon-circle" fill="none" cx="5" cy="5" r="4.445"></circle>
            </svg>
          </span>
          <slot name="right-adornment"></slot>
        </label>
      </mock:shadow-root>
      <input class="ic-input" name="ic-switch-input-0" type="hidden" value="">
    </ic-switch>
    `);
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" disabled=true></ic-switch>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-switch disabled=true label="Custom title">
      <mock:shadow-root>
        <label class="ic-switch-container ic-switch-disabled" htmlfor="ic-switch-input-1">
        <ic-input-label class="ic-switch-label" label="Custom title" disabled="" for="ic-switch-input-1" helpertext="" readonly=""></ic-input-label>
        <span class="ic-switch-line-break"></span>
         <input aria-checked="false" aria-describedby="" class="ic-switch-input" aria-label="Custom title" disabled="" id="ic-switch-input-1" name="toggle" role="switch" type="checkbox">
          <span class="ic-switch-toggle">
            <svg class="ic-switch-icon" aria-hidden="true" focusable="false" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <line class="ic-switch-icon-line" x1="9" y1="1" x2="9" y2="9"></line>
            </svg>
            <svg class="ic-switch-icon" aria-hidden="true" focusable="false" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <circle class="ic-switch-icon-circle" fill="none" cx="5" cy="5" r="4.445"></circle>
            </svg>
          </span>
          <slot name="right-adornment"></slot>
        </label>
      </mock:shadow-root>
      <input class="ic-input" disabled="" name="ic-switch-input-1" type="hidden" value="">
    </ic-switch>
    `);
  });

  it("should render checked", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" checked=true></ic-switch>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-switch checked=true label="Custom title">
      <mock:shadow-root>
        <label class="ic-switch-container" htmlfor="ic-switch-input-2">
        <ic-input-label class="ic-switch-label" label="Custom title" for="ic-switch-input-2" helpertext="" readonly=""></ic-input-label>
        <span class="ic-switch-line-break"></span>
         <input aria-checked="true" aria-describedby="" checked="" class="ic-switch-input" aria-label="Custom title" id="ic-switch-input-2" name="toggle" role="switch" type="checkbox">
          <span class="ic-switch-toggle">
            <svg class="ic-switch-icon" aria-hidden="true" focusable="false" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <line class="ic-switch-icon-line" x1="9" y1="1" x2="9" y2="9"></line>
            </svg>
            <svg class="ic-switch-icon" aria-hidden="true" focusable="false" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <circle class="ic-switch-icon-circle" fill="none" cx="5" cy="5" r="4.445"></circle>
            </svg>
          </span>
          <slot name="right-adornment"></slot>
        </label>
      </mock:shadow-root>
      <input class="ic-input" name="ic-switch-input-2" type="hidden" value="on">
    </ic-switch>
    `);
  });

  it("should render small", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" checked=true small></ic-switch>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-switch checked=true small label="Custom title">
      <mock:shadow-root>
        <label class="ic-switch-container ic-switch-small" htmlfor="ic-switch-input-3">
        <ic-input-label class="ic-switch-label ic-switch-label-small" label="Custom title" for="ic-switch-input-3" helpertext="" readonly=""></ic-input-label>
        <span class="ic-switch-line-break"></span>
         <input aria-checked="true" aria-describedby="" checked="" class="ic-switch-input" aria-label="Custom title" id="ic-switch-input-3" name="toggle" role="switch" type="checkbox">
          <span class="ic-switch-toggle">
            <svg class="ic-switch-icon" aria-hidden="true" focusable="false" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <line class="ic-switch-icon-line" x1="9" y1="2" x2="9" y2="8"></line>
            </svg>
            <svg class="ic-switch-icon" aria-hidden="true" focusable="false" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <circle class="ic-switch-icon-circle" fill="none" cx="5" cy="5" r="3.335"></circle>
            </svg>
          </span>
          <slot name="right-adornment"></slot>
        </label>
      </mock:shadow-root>
      <input class="ic-input" name="ic-switch-input-3" type="hidden" value="on">
    </ic-switch>
    `);
  });

  it("should focus", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" checked=true></ic-switch>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icFocus", callbackFn);
    const input = page.root.shadowRoot.querySelector("input");
    await input.focus();
    expect(callbackFn).toHaveBeenCalled();
  });

  it("should blur", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" checked=true></ic-switch>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icBlur", callbackFn);
    const input = page.root.shadowRoot.querySelector("input");
    await input.blur();
    expect(callbackFn).toHaveBeenCalled();
  });

  it("should toggle checkedState", async () => {
    const icSwitch = new Switch();

    expect(icSwitch.checkedState).toBe(false);

    icSwitch["handleChange"]();

    expect(icSwitch.checkedState).toBe(true);
  });
});
