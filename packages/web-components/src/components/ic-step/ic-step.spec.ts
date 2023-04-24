import { newSpecPage } from "@stencil/core/testing";
import { Step } from "./ic-step";
import { Typography } from "../ic-typography/ic-typography";
import { LoadingIndicator } from "../ic-loading-indicator/ic-loading-indicator";

describe("default variant of ic-step component", () => {
  it("should render default step with no title", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step variant="default"></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it("should render default step with correct title", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step variant="default" step-title="First"></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render default step with correct title, subtitle and current state", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step variant="default" 
      step-title="Second With a Very Long Title"
      step-subtitle="Optional Subtitle"
      step-type="current"
    ></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled stepType", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step variant="default" 
      step-type="disabled"
    ></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render completed stepType", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step variant="default" 
      step-type="completed"
    ></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});

describe("compact variant of ic-step component", () => {
  it("should render a compact step with no step status", async () => {
    const page = await newSpecPage({
      components: [Step],
      html: `<ic-step
      variant="compact" 
      step-type="current"
      last-step="false"
      step-num="3"
      last-step-num="4"
      progress="75"
      step-title="Third step"
      next-step-title="Fourth step"></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render an step status icon for a step with a disabled stepType", async () => {
    const page = await newSpecPage({
      components: [Step],
      html: `<ic-step
      variant="compact"
      step-type="disabled"
      compact-step-styling = "disabled"
      last-step="false"
      step-num="3"
      last-step-num="4"
      progress="75"
      step-title="Third step"
      next-step-title="next step"
    ></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();

    const stepStatus = page.root.shadowRoot.querySelector(
      ".step-status > ic-typography"
    ).textContent;

    expect(stepStatus).toBe("Not required");

    const statusIcon = page.root.shadowRoot.querySelector("span.step-icon");

    expect(statusIcon).toEqualHtml(
      `<span class="warning-icon step-icon" aria-hidden="true">svg</span>`
    );
  });

  it("should render a step status icon for a step with a completed stepType", async () => {
    const page = await newSpecPage({
      components: [Step],
      html: `<ic-step
      variant="compact"
      last-step="false"
      step-num="3"
      last-step-num="4"
      progress="75"
      step-title="Third step"
      next-step-title="next step"
      step-type="completed"
      compact-step-styling = "completed"
    ></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();

    const stepStatus = page.root.shadowRoot.querySelector(
      ".step-status > ic-typography"
    ).textContent;

    expect(stepStatus).toBe("Completed");

    const statusIcon = page.root.shadowRoot.querySelector("span.step-icon");

    expect(statusIcon).toEqualHtml(
      `<span class="check-icon step-icon" aria-hidden="true">svg</span>`
    );
  });

  it("should set next step text as last step if last step is true", async () => {
    const page = await newSpecPage({
      components: [Step],
      html: `<ic-step
      variant="compact" 
      step-type="current"
      last-step="true"
      step-num=4"
      last-step-num="4"
      progress="100"
      step-title="Final step"
    ></ic-step>`,
    });

    const lastStep =
      page.root.shadowRoot.querySelector(".next-step").textContent;

    expect(lastStep).toBe("Last step");
  });

  it("should set the circular line width of the loading indicator as 40 for all steps", async () => {
    jest.spyOn(console, "warn").mockImplementation(jest.fn());
    const page = await newSpecPage({
      components: [Step, LoadingIndicator],
      html: `<ic-step
      variant="compact" 
      last-step="true"
      step-num=4"
      last-step-num="4"
      progress="100"
      step-title="Final step"
    ></ic-step>`,
    });

    const loadingIndicator = page.root.shadowRoot.querySelector(
      ".step > ic-loading-indicator"
    );

    expect(
      loadingIndicator.classList.contains("compact-step-progress-indicator")
    ).toBeTruthy();
  });

  it("should watch the stepType & change the value of the current prop if stepType = 'current'", async () => {
    const page = await newSpecPage({
      components: [Step],
      html: `<ic-step
      variant="compact" 
      last-step="true"
      step-num=4"
      last-step-num="4"
      progress="100"
      step-title="Final step"
      step-type = "current"
    ></ic-step>`,
    });

    await page.rootInstance.stepTypeChangeHandler();
    await page.waitForChanges();
    expect(page.rootInstance.current).toBeTruthy();
  });

  it("should watch the stepType & shouldn't change the value of the current prop if stepType is not 'current'", async () => {
    const page = await newSpecPage({
      components: [Step],
      html: `<ic-step
      variant="compact" 
      last-step="true"
      step-num=4"
      last-step-num="4"
      progress="100"
      step-title="Final step"
      step-type = "completed"
      compact-step-styling = "completed"
    ></ic-step>`,
    });

    await page.rootInstance.stepTypeChangeHandler();
    await page.waitForChanges();
    expect(page.rootInstance.current).toBeFalsy();
  });
});
