import { newSpecPage, SpecPage } from "@stencil/core/testing";
import { LoadingIndicator } from "../../ic-loading-indicator";
import { Typography } from "../../../ic-typography/ic-typography";
import { waitForTimeout } from "../../../../testspec.setup";

let page: SpecPage;

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

afterEach(() => {
  page.setContent("");
});

describe("ic-loading-indicator component", () => {
  it("should update the state when switching from linear to circular after initial render", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="Waiting" type="linear"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();

    page.rootInstance.type = "circular";
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render an indeterminate loading indicator with the correct label and set aria-labelledby", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a determinate loading indicator with the correct label and aria", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator progress="30" label="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should not display a label is the size is 'icon'", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" size="icon"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set the typography variant for the label to 'label' for the 'small' size", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" size="small"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set the typography variant for the label to 'h4' for the 'medium' size", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set the typography variant for the label to 'h2' for the 'large' size", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" size="large"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should apply the description prop as an aria-label", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator description="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should be styled correctly by setting the class names for the chosen indicator type", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator type="linear"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set the correct aria if min and max are provided", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator progress="30" min="10" max="50"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render an indeterminate loading indicator with a custom --circular-diameter", async () => {
    Object.defineProperty(window, "getComputedStyle", {
      value: jest.fn(() => ({ width: "24px" } as CSSStyleDeclaration)),
    });
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" style="--circular-diameter: 1.5rem;"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should update label after label-duration passed", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label-duration="2000"></ic-loading-indicator>`,
    });

    page.rootInstance.label = ["waiting", "still waiting"];

    expect(page.rootInstance.indicatorLabel).toEqual("waiting");

    await waitForTimeout(2001);
    await page.waitForChanges();

    expect(page.rootInstance.indicatorLabel).toEqual("still waiting");

    await waitForTimeout(2001);
    await page.waitForChanges();
    expect(page.rootInstance.indicatorLabel).toEqual("waiting");
  });

  it("should render linear determinate progress bar", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator progress="30" min="10" max="50" type='linear'></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render linear indeterminate progress bar", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator type='linear'></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should test updating label and progress props", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" size="large"></ic-loading-indicator>`,
    });

    expect(page.rootInstance.label).toBe("IC Loading Indicator Test");

    page.rootInstance.label = "New label";
    page.rootInstance.progress = 20;
    await page.waitForChanges();

    expect(page.rootInstance.label).toBe("New label");
    expect(page.rootInstance.progress).toBe(20);
  });

  it("should test updating progress - linear", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator progress="10" min="10" max="50" type='linear'></ic-loading-indicator>`,
    });
    expect(page.rootInstance.progress).toBe(10);
    page.rootInstance.progress = 20;
    await page.waitForChanges();

    expect(page.rootInstance.progress).toBe(20);
  });

  it("should test setting circularDiameter", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    page.rootInstance.progress = "20";
    await page.waitForChanges();
    page.rootInstance.circularDiameter = "100";
    await page.waitForChanges();
    page.rootInstance.setCircleDimensions();
    await page.waitForChanges();

    const circle = page.root?.shadowRoot?.querySelector("svg circle");
    const x = circle?.getAttribute("cx");
    expect(x).toBe("50");
  });

  it("should have a default label duration of 8 seconds, if no value given", async () => {
    page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="Waiting/Still waiting"></ic-loading-indicator>`,
    });

    expect(page.rootInstance.labelDuration).toBe(8000);
  });
});
