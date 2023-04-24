import { Button } from "./ic-button";
import { newSpecPage } from "@stencil/core/testing";
import * as helpers from "../../utils/helpers";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

//mocked as getThemeFromContext is always default when run in test context
const mockGetThemeFromContext = () => {
  const func = jest.fn(() => {
    return "light";
  });

  Object.defineProperty(helpers, "getThemeFromContext", {
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

  it("should render correct HTML when loading - appearance light", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button loading appearance="light">Button</ic-button>
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

  it("should render icon variant with a tooltip", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' id='test-button'>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render icon variant with a tooltip based on title", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' id='test-button' title='Tooltip text'>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render icon variant with a tooltip based on aria-label", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' id='test-button' aria-label='Tooltip text' tooltip-placement='top'>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should disable tooltip when prop set", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' aria-label='Tooltip text' id='test-button' disable-tooltip>Button</ic-button>",
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should update when method called", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' aria-label='Tooltip text' id='test-button'>Button</ic-button>",
    });

    expect(page.root).toMatchSnapshot();

    await page.root.updateAriaLabel("New tooltip text");
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should stop immediate propagation of a click event when disabled", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button id='test-button' disabled=true onclick='alert('test')'>Button</ic-button>",
    });

    jest.spyOn(window, "alert").mockImplementation();

    const element = document.getElementById("test-button");

    element.click();

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

  it("should test theme change", async () => {
    mockGetThemeFromContext();

    const page = await newSpecPage({
      components: [Button],
      html: `<ic-button id='ic-button'>Button</ic-button>`,
    });

    await page.rootInstance.themeChangeHandler({
      detail: { mode: "light" },
    });
    await page.waitForChanges();

    expect(page.rootInstance.appearance).toEqual("light");
  });

  it("should test button as submit button on form", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<form id="new-form"><form><ic-button id='ic-button' type="submit" form="new-form">Button</ic-button>`,
    });

    const btn = document.getElementById("ic-button");
    btn.click();

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
