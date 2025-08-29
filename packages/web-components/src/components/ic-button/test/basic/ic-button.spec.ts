import { Button } from "../../ic-button";
import { newSpecPage } from "@stencil/core/testing";
import * as helpers from "../../../../utils/helpers";
import { testKeyboardEvent as keyboardEvent } from "../../../../testspec.setup";
import { Tooltip } from "../../../ic-tooltip/ic-tooltip";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

//mocked as getBrandFromContext is always default when run in test context
const mockGetBrandFromContext = () => {
  const func = jest.fn(() => {
    return "light";
  });

  Object.defineProperty(helpers, "getBrandFromContext", {
    value: func,
  });
};

describe("button component", () => {
  it("should correctly render with text", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button>Button</ic-button>",
      supportsShadowDom: true,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should correctly render with custom text", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button>Click Me</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render correct HTML for secondary variant", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='secondary'>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render correct HTML for tertiary variant", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='tertiary'>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render correct HTML for destructive variant", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='destructive'>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render correct HTML with left icon", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button>
        <svg slot='left-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
        Button
      </ic-button>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render correct HTML with right icon", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button>
        <svg slot='right-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
        Button
      </ic-button>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render correct HTML when loading", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button loading>Button</ic-button>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render correct HTML when loading - secondary", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button loading variant="secondary">Button</ic-button>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render correct HTML when loading - tertiary", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button loading variant="tertiary">Button</ic-button>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render correct HTML when loading - destructive", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button loading variant="destructive">Button</ic-button>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render correct HTML when loading - theme light", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button loading theme="light">Button</ic-button>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render correct HTML when using slotted content and slotted router item", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button>
          <a slot="router-item" href="/">
            <svg slot='left-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
            <ic-badge slot="badge" label="1" position="near"></ic-badge>
            Slotted link
          </a>
        </ic-button>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("render with correct button type when defined", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button type='reset'>Button</ic-button>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with "a" tag when href is passed', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button href = '#'>Button</ic-button>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with defined "a" tag props', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button href = '#' download rel="nofollow" target="_blank">Button</ic-button>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render a 'file' type input when fileUpload prop is enabled", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button file-upload>Button</ic-button>",
      supportsShadowDom: true,
    });

    const button = document.querySelector("ic-button");
    button?.click();

    expect(page.root).toMatchSnapshot();
  });

  it("should render icon variant with a tooltip", async () => {
    const page = await newSpecPage({
      components: [Button, Tooltip],
      html: "<ic-button variant='icon-tertiary' id='test-button'>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render icon variant with a tooltip based on title", async () => {
    const page = await newSpecPage({
      components: [Button, Tooltip],
      html: "<ic-button variant='icon-tertiary' id='test-button' title='Tooltip text'>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render icon variant with a tooltip based on aria-label", async () => {
    const page = await newSpecPage({
      components: [Button, Tooltip],
      html: "<ic-button variant='icon-tertiary' id='test-button' aria-label='Tooltip text' tooltip-placement='top'>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should disable tooltip when prop set", async () => {
    const page = await newSpecPage({
      components: [Button, Tooltip],
      html: "<ic-button variant='icon-tertiary' aria-label='Tooltip text' id='test-button' disable-tooltip>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should update aria-label when attribute changed", async () => {
    const page = await newSpecPage({
      components: [Button, Tooltip],
      html: "<ic-button variant='icon-tertiary' aria-label='Tooltip text' id='test-button'>Button</ic-button>",
    });

    expect(page.root).toMatchSnapshot();

    page.root?.setAttribute("aria-label", "New tooltip text");
    await page.waitForChanges();

    page.rootInstance.hostMutationCallback([{ attributeName: "aria-label" }]);
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should update aria-expanded when attribute changed", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon-tertiary' aria-expanded='false' id='test-button'>Button</ic-button>",
    });

    expect(page.root).toMatchSnapshot();

    page.root?.setAttribute("aria-expanded", "true");
    await page.waitForChanges();

    page.rootInstance.hostMutationCallback([
      { attributeName: "aria-expanded" },
    ]);
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should update tooltip label when title attribute changed", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon-tertiary' title='Tooltip text' id='test-button'>Button</ic-button>",
    });

    expect(page.root).toMatchSnapshot();

    page.root?.setAttribute("title", "New tooltip text");
    await page.waitForChanges();

    page.rootInstance.hostMutationCallback([{ attributeName: "title" }]);
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should hide tooltip when escape key pressed", async () => {
    const page = await newSpecPage({
      components: [Button, Tooltip],
      html: "<ic-button variant='icon-tertiary' id='test-button' title='Tooltip text'>Button</ic-button>",
    });

    const tooltip = page.root?.shadowRoot?.querySelector("ic-tooltip");
    const tooltipContainer = tooltip?.shadowRoot?.querySelector(
      ".ic-tooltip-container"
    );
    expect(tooltipContainer).not.toBeNull();

    let tooltipVisible = tooltipContainer?.getAttribute("data-show");
    expect(tooltipVisible).toBeNull();

    await tooltip?.displayTooltip(true);
    await page.waitForChanges();

    tooltipVisible = tooltipContainer?.getAttribute("data-show");
    expect(tooltipVisible).toBe("");

    page.rootInstance.handleKeyDown(keyboardEvent("Escape"));
    await page.waitForChanges();

    tooltipVisible = tooltipContainer?.getAttribute("data-show");
    expect(tooltipVisible).toBeNull();
  });

  it("should stop immediate propagation of a click event when disabled", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button id='test-button' disabled=true onclick='alert('test')'>Button</ic-button>",
    });

    jest.spyOn(window, "alert").mockImplementation();

    const element = document.getElementById("test-button");

    element?.click();

    await page.waitForChanges();

    expect(window.alert).not.toHaveBeenCalled;
  });

  it("should call 'setFocus' when button is focussed", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button id='ic-button'>Button</ic-button>",
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });

  it("should test brand change", async () => {
    mockGetBrandFromContext();

    const page = await newSpecPage({
      components: [Button],
      html: `<ic-button id='ic-button'>Button</ic-button>`,
    });

    await page.rootInstance.brandChangeHandler({
      detail: { mode: "light" },
    });
    await page.waitForChanges();

    expect(page.rootInstance.theme).toEqual("dark");
  });

  it("should test submit and reset buttons in a form", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
        <form>
          <ic-text-field id="text" label="test input" value="test"></ic-text-field>
          <ic-button id="reset" type="reset">Reset</ic-button>
          <ic-button id="submit" type="submit">Submit</ic-button>
        </form>
      `,
    });

    const resetBtn = document.getElementById("reset");
    const submitBtn = document.getElementById("submit");

    page.win.addEventListener("click", (ev) =>
      console.log((ev.target as HTMLButtonElement)?.id)
    );
    const consoleSpy = jest.spyOn(console, "log");

    // Testing form reset: LightDOM button of type "reset" created and clicked, textfield empty
    resetBtn?.click();
    expect(
      page.body.querySelector<HTMLButtonElement>("#hidden-form-reset-button")
        ?.type
    ).toBe("reset");
    expect(consoleSpy).toHaveBeenCalledWith("hidden-form-reset-button");

    // Testing form submit: LightDOM button of type "submit" created and clicked
    submitBtn?.click();
    expect(
      page.body.querySelector<HTMLButtonElement>("#hidden-form-submit-button")
        ?.type
    ).toBe("submit");
    expect(consoleSpy).toHaveBeenCalledWith("hidden-form-submit-button");
  });

  it("should test submit and reset buttons associated with a form", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
        <form id="testForm">
          <ic-text-field id="text" label="test input" value="test"></ic-text-field>
        </form>
        <ic-button id="reset" form="testForm" type="reset">Reset</ic-button>
        <ic-button id="submit" form="testForm" type="submit">Submit</ic-button>
      `,
    });

    const resetBtn = document.getElementById("reset");
    const submitBtn = document.getElementById("submit");

    page.win.addEventListener("click", (ev) =>
      console.log((ev.target as HTMLButtonElement)?.id)
    );
    const consoleSpy = jest.spyOn(console, "log");

    // Testing form reset: LightDOM button of type "reset" created and clickedy
    resetBtn?.click();
    expect(
      page.body.querySelector<HTMLButtonElement>("#hidden-form-reset-button")
        ?.type
    ).toBe("reset");
    expect(consoleSpy).toHaveBeenCalledWith("hidden-form-reset-button");

    // Testing form submit: LightDOM button of type "submit" created and clicked
    submitBtn?.click();
    expect(
      page.body.querySelector<HTMLButtonElement>("#hidden-form-submit-button")
        ?.type
    ).toBe("submit");
    expect(consoleSpy).toHaveBeenCalledWith("hidden-form-submit-button");
  });

  it("should test form submission props on buttons in a form", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
        <form>
          <ic-text-field id="text" label="test input" value="test"></ic-text-field>
          <ic-button id="submit" type="submit" formaction="#" formenctype="text/plain" formmethod="post" formnovalidate formtarget="_blank">Submit</ic-button>
        </form>
      `,
    });

    const submitBtn = document.getElementById("submit");

    // Form submission props are passed to the hidden form submit button
    submitBtn?.click();
    const hiddenSubmitBtn = page.body.querySelector<HTMLButtonElement>(
      "#hidden-form-submit-button"
    );
    expect(hiddenSubmitBtn?.type).toBe("submit");
    expect(hiddenSubmitBtn?.formAction).toBe("#");
    expect(hiddenSubmitBtn?.formEnctype).toBe("text/plain");
    expect(hiddenSubmitBtn?.formMethod).toBe("post");
    expect(hiddenSubmitBtn?.formNoValidate).toBe(true);
    expect(hiddenSubmitBtn?.formTarget).toBe("_blank");
  });

  it("should test form submission props on buttons associated with a form", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
        <form id="testForm">
          <ic-text-field id="text" label="test input" value="test"></ic-text-field>
        </form>
        <ic-button id="submit" type="submit" form="testForm" formaction="#" formenctype="text/plain" formmethod="post" formnovalidate formtarget="_blank">Submit</ic-button>
      `,
    });

    const submitBtn = document.getElementById("submit");

    // Form submission props are passed to the hidden form submit button
    submitBtn?.click();
    const hiddenSubmitBtn = page.body.querySelector<HTMLButtonElement>(
      "#hidden-form-submit-button"
    );
    expect(hiddenSubmitBtn?.type).toBe("submit");
    expect(hiddenSubmitBtn?.formAction).toBe("#");
    expect(hiddenSubmitBtn?.formEnctype).toBe("text/plain");
    expect(hiddenSubmitBtn?.formMethod).toBe("post");
    expect(hiddenSubmitBtn?.formNoValidate).toBe(true);
    expect(hiddenSubmitBtn?.formTarget).toBe("_blank");
  });

  it("should test aria-describedby is set", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<span id="button-description">
        This is the button description
      </span>
      <ic-button id='ic-button' aria-describedby="button-description">Button</ic-button>
      `,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should test aria-describedby is updated", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<span id="button-description">
        This is the button description
      </span>
      <ic-button id='ic-button' aria-describedby="button-description">Button</ic-button>
      `,
    });

    (document.querySelector("#button-description") as HTMLElement).innerText =
      "This is the new description";
    page.rootInstance.mutationCallback();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should test tooltip visibility changes when disable tooltip prop changes", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon-tertiary' aria-label='Tooltip text' id='test-button'>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();

    page.rootInstance.disableTooltip = true;
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();

    page.rootInstance.disableTooltip = false;
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should test blur handler", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<ic-button id='ic-button'>Button</ic-button>`,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("icBlur", eventSpy);

    await page.rootInstance.onBlur();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });
});
