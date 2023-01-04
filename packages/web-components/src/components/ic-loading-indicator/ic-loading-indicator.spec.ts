import { newSpecPage } from "@stencil/core/testing";
import { LoadingIndicator } from "./ic-loading-indicator";
import { Typography } from "../ic-typography/ic-typography";
import { waitForTimeout } from "../../testspec.setup";

describe("ic-loading-indicator component", () => {
  it("should render an indeterminate loading indicator with the correct label and set aria-labelledby", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a determinate loading indicator with the correct label and aria", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator progress="30" label="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should not display a label is the size is 'icon'", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" size="icon"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set the typography variant for the label to 'label' for the 'small' size", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" size="small"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set the typography variant for the label to 'h4' for the 'default' size", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set the typography variant for the label to 'h2' for the 'large' size", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" size="large"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should apply the description prop as an aria-label", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator description="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should be styled correctly by setting the class names for the chosen indicator type", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator type="linear"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set the correct aria if min and max are provided", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator progress="30" min="10" max="50"></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should update label after label-duration passed", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="waiting/still waiting" label-duration="2000"></ic-loading-indicator>`,
    });

    expect(page.rootInstance.indicatorLabel).toEqual("waiting");

    await waitForTimeout(2001);
    await page.waitForChanges();

    expect(page.rootInstance.indicatorLabel).toEqual("still waiting");

    await waitForTimeout(2001);
    await page.waitForChanges();
    expect(page.rootInstance.indicatorLabel).toEqual("waiting");
  });

  it("should render linear determinate progress bar", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator progress="30" min="10" max="50" type='linear'></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render linear indeterminate progress bar", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator type='linear'></ic-loading-indicator>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should test updating label and progress props", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" size="large"></ic-loading-indicator>`,
    });

    expect(page.rootInstance.label).toBe("IC Loading Indicator Test");
    
    page.root.label = "New label";
    page.root.progress = 20;
    await page.waitForChanges();

    expect(page.rootInstance.label).toBe("New label");
    expect(page.rootInstance.progress).toBe(20);
  });

  it("should test updating progress - linear", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator progress="10" min="10" max="50" type='linear'></ic-loading-indicator>`,
    });
    expect(page.rootInstance.progress).toBe(10);
    page.root.progress = 20;
    await page.waitForChanges();

    expect(page.rootInstance.progress).toBe(20);
  });

  it("should test setting circularDiameter", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    page.root.progress = "20";
    await page.waitForChanges();
    page.rootInstance.circularDiameter = "100";
    await page.waitForChanges();
    page.rootInstance.setCircleXY();
    await page.waitForChanges();

    const circle = page.root.shadowRoot.querySelector("svg circle");
    const x = circle.getAttribute("cx");
    expect(x).toBe("50");
  });

});
