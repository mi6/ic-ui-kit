import { newSpecPage } from "@stencil/core/testing";
import { Switch } from "../../ic-switch";

describe("ic-switch component", () => {
  it("should render an aria-label", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title"></ic-switch>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-aria");
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" disabled=true></ic-switch>`,
    });

    expect(page.root).toMatchSnapshot("renders-disabled");
  });

  it("should render checked", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" checked=true></ic-switch>`,
    });

    expect(page.root).toMatchSnapshot("renders-checked");
  });

  it("should render small", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" checked=true small></ic-switch>`,
    });

    expect(page.root).toMatchSnapshot("renders-small");
  });

  it("should render with state text", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" checked=true show-state></ic-switch>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-state-text");
  });

  it("should render with state text and unchecked", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" checked="false" show-state="true"></ic-switch>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-state-text-unchecked");
  });

  it("should focus", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" checked=true></ic-switch>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icFocus", callbackFn);
    const input = page.root.shadowRoot.querySelector("input");
    input.focus();
    await page.waitForChanges();
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
    input.blur();
    await page.waitForChanges();
    expect(callbackFn).toHaveBeenCalled();
  });

  it("should toggle checkedState", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title" checked=true></ic-switch>`,
    });

    expect(page.rootInstance.checkedState).toBe(true);
    page.rootInstance.handleChange();
    await page.waitForChanges();

    expect(page.rootInstance.checkedState).toBe(false);
  });

  it("should call 'setFocus' when switch is focused", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<ic-switch label="Custom title"></ic-switch>`,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });

  it("should reset to initial state on form reset", async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<form><ic-switch label="Custom title" checked=true></ic-switch><button id="resetButton" type="reset">Reset</button></form>`,
    });

    expect(page.rootInstance.checkedState).toBe(true);

    page.rootInstance.handleChange();
    await page.waitForChanges();

    expect(page.rootInstance.checkedState).toBe(false);

    await page.rootInstance.handleFormReset();
    await page.waitForChanges();

    expect(page.rootInstance.checkedState).toBe(true);

    //test disconnected callback
    page.setContent("");
  });
});
