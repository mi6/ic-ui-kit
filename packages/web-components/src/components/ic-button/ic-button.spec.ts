import { AnyHTMLElement } from "@stencil/core/internal";
import { Button } from "./ic-button";
import { newSpecPage } from "@stencil/core/testing";

describe("button component", () => {
  let page;
  let element: AnyHTMLElement | ShadowRoot;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Button],
      html: "<ic-button>Button</ic-button>",
      supportsShadowDom: true,
    });
    element = page.root;
  });

  it("should correctly render with text", async () => {
    expect(element).toEqualHtml(`
    <ic-button class="button-size-default button-variant-primary">
       <mock:shadow-root>
         <button class="button" type="button">
           <slot></slot>
         </button>
       </mock:shadow-root>
        Button
      </ic-button>
    `);
  });

  it("should correctly render with custom text", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button>Click Me</ic-button>",
    });
    element = page.root;

    expect(element).toEqualHtml(`
    <ic-button class="button-size-default button-variant-primary">
       <mock:shadow-root>
         <button class="button" type="button">
           <slot></slot>
         </button>
       </mock:shadow-root>
        Click Me
      </ic-button>
    `);
  });

  it("should render correct HTML for secondary variant", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='secondary'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toEqualHtml(`
    <ic-button class="button-size-default button-variant-secondary" variant='secondary'>
       <mock:shadow-root>
         <button class="button" type="button">
           <slot></slot>
         </button>
       </mock:shadow-root>
        Button
      </ic-button>
    `);
  });

  it("should render correct HTML for tertiary variant", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='tertiary'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toEqualHtml(`
    <ic-button class="button-size-default button-variant-tertiary" variant='tertiary'>
       <mock:shadow-root>
         <button class="button" type="button">
           <slot></slot>
         </button>
       </mock:shadow-root>
        Button
      </ic-button>
    `);
  });

  it("should render correct HTML for destructive variant", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='destructive'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toEqualHtml(`
    <ic-button class="button-size-default button-variant-destructive" variant='destructive'>
       <mock:shadow-root>
         <button class="button" type="button">
           <slot></slot>
         </button>
       </mock:shadow-root>
        Button
      </ic-button>
    `);
  });

  it("should render correct HTML with Icon", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button>
        <svg slot='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
        Button
      </ic-button>
      `,
    });
    element = page.root;

    expect(element).toEqualHtml(`
    <ic-button class="button-size-default button-variant-primary">
       <mock:shadow-root>
          <button class="button" type="button">
              <div class="icon-container">
                <slot name="icon"></slot>
              </div>
              <slot></slot>
            </button>
          </mock:shadow-root>
          <svg fill="#000000" height="24px" slot="icon" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
          </svg>
           Button
         </ic-button>
    `);
  });

  it("should render correct HTML when loading", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button loading>Button</ic-button>
      `,
    });
    element = page.root;

    expect(element).toEqualHtml(`
    <ic-button class="button-size-default button-variant-primary loading" loading="">
       <mock:shadow-root>
         <button aria-disabled="true" aria-label="Loading" class="button" type="button">
           <div class="loading-container">
            <ic-loading-indicator appearance="light" type="linear"></ic-loading-indicator>
           </div>
         </button>
       </mock:shadow-root>
       Button
     </ic-button>
    `);
  });

  it("render with correct button type when defined", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button type='reset'>Button</ic-button>
      `,
    });
    element = page.root;

    expect(element).toEqualHtml(`
    <ic-button class="button-size-default button-variant-primary" type="reset">
       <mock:shadow-root>
         <button class="button" type="reset">
           <slot></slot>
         </button>
       </mock:shadow-root>
       Button
     </ic-button>
    `);
  });

  it('should render with "a" tag when href is passed', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button href = '#'>Button</ic-button>
      `,
    });
    element = page.root;

    expect(element).toEqualHtml(`
    <ic-button class="button-size-default button-variant-primary" href="#">
       <mock:shadow-root>
         <a href="#" class="button">
         <slot></slot>
         </a>
       </mock:shadow-root>
       Button
     </ic-button>
    `);
  });

  it('should render with defined "a" tag props', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button href = '#' download rel="nofollow" target="_blank">Button</ic-button>
      `,
    });
    element = page.root;

    expect(element).toEqualHtml(`
    <ic-button class="button-size-default button-variant-primary" href="#" download="" rel="nofollow" target="_blank">
       <mock:shadow-root>
         <a href="#" download="" rel="nofollow" target="_blank" class="button">
         <slot></slot>
         </a>
       </mock:shadow-root>
       Button
     </ic-button>
    `);
  });

  it("should render icon variant with a tooltip", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' id='test-button'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toEqualHtml(`
      <ic-button class="button-size-default button-variant-icon" id="test-button" variant="icon">
        <mock:shadow-root>
          <ic-tooltip target="ic-button-with-tooltip-test-button" placement="bottom">
            <button aria-describedby="ic-tooltip-ic-button-with-tooltip-test-button" class="button" id="ic-button-with-tooltip-test-button" type="button">
              <slot></slot>
            </button>
          </ic-tooltip>
        </mock:shadow-root>
        Button
      </ic-button>
    `);
  });

  it("should render icon variant with a tooltip based on title", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' id='test-button' title='Tooltip text'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toEqualHtml(`
      <ic-button class="button-size-default button-variant-icon" id="test-button" variant="icon">
        <mock:shadow-root>
          <ic-tooltip target="ic-button-with-tooltip-test-button" label="Tooltip text" placement="bottom">
            <button aria-describedby="ic-tooltip-ic-button-with-tooltip-test-button" class="button" id="ic-button-with-tooltip-test-button" type="button">
              <slot></slot>
            </button>
          </ic-tooltip>
        </mock:shadow-root>
        Button
      </ic-button>
    `);
  });

  it("should render icon variant with a tooltip based on aria-label", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' id='test-button' aria-label='Tooltip text' tooltip-placement='top'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toEqualHtml(`
      <ic-button class="button-size-default button-variant-icon" id="test-button" variant="icon" tooltip-placement="top">
      <mock:shadow-root>
        <ic-tooltip target="ic-button-with-tooltip-test-button" label="Tooltip text" placement="top">
          <button aria-describedby="ic-tooltip-ic-button-with-tooltip-test-button" aria-label="Tooltip text" class="button" id="ic-button-with-tooltip-test-button" type="button">
            <slot></slot>
          </button>
        </ic-tooltip>
      </mock:shadow-root>
      Button
    </ic-button>
    `);
  });

  it("should disable tooltip when prop set", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' aria-label='Tooltip text' id='test-button' disable-tooltip>Button</ic-button>",
    });
    element = page.root;

    expect(element).toEqualHtml(`
      <ic-button class="button-size-default button-variant-icon" disable-tooltip="" id="test-button" variant="icon">
        <mock:shadow-root>
          <ic-tooltip class="tooltip-disabled" target="ic-button-with-tooltip-test-button" label="Tooltip text" placement="bottom">
            <button aria-describedby="ic-tooltip-ic-button-with-tooltip-test-button" aria-label="Tooltip text" class="button" id="ic-button-with-tooltip-test-button" type="button">
              <slot></slot>
            </button>
          </ic-tooltip>
        </mock:shadow-root>
        Button
      </ic-button>
    `);
  });

  it("should update when method called", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' aria-label='Tooltip text' id='test-button'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toEqualHtml(`
      <ic-button class="button-size-default button-variant-icon" id="test-button" variant="icon">
        <mock:shadow-root>
          <ic-tooltip target="ic-button-with-tooltip-test-button" label="Tooltip text" placement="bottom">
            <button aria-describedby="ic-tooltip-ic-button-with-tooltip-test-button" aria-label="Tooltip text" class="button" id="ic-button-with-tooltip-test-button" type="button">
              <slot></slot>
            </button>
          </ic-tooltip>
        </mock:shadow-root>
        Button
      </ic-button>
      `);

    await element.updateAriaLabel("New tooltip text");
    await page.waitForChanges();

    expect(element).toEqualHtml(`
      <ic-button class="button-size-default button-variant-icon" id="test-button" variant="icon">
        <mock:shadow-root>
          <ic-tooltip target="ic-button-with-tooltip-test-button" label="Tooltip text" placement="bottom">
            <button aria-describedby="ic-tooltip-ic-button-with-tooltip-test-button" aria-label="New tooltip text" class="button" id="ic-button-with-tooltip-test-button" type="button">
              <slot></slot>
            </button>
          </ic-tooltip>
        </mock:shadow-root>
        Button
      </ic-button>
      `);
  });

  it("should stop immediate propagation of a click event when disabled", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button id='test-button' disabled=true onclick='alert('test')'>Button</ic-button>",
    });

    jest.spyOn(window, "alert").mockImplementation();

    const element = await document.getElementById("test-button");

    await element.click();

    await page.waitForChanges();

    await expect(window.alert).not.toHaveBeenCalled;
  });

  it("should call 'setFocus' when button is focussed", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button id='ic-button'>Button</ic-button>",
    });

    await page.rootInstance.focus;

    await page.rootInstance.setFocus().toHaveBeenCalled;
  });
});
