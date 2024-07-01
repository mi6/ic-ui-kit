import { newSpecPage } from "@stencil/core/testing";
import { Step } from "../../ic-step";
import { Typography } from "../../../ic-typography/ic-typography";
import { LoadingIndicator } from "../../../ic-loading-indicator/ic-loading-indicator";

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
      html: `<ic-step variant="default" heading="First"></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render default step with correct title, subtitle and current state", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step variant="default" 
      heading="Second With a Very Long Title"
      subheading="Optional Subtitle"
      type="current"
    ></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled type", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step variant="default" 
      type="disabled"
    ></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render completed type", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step variant="default" 
      type="completed"
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
      type="current"
      last-step="false"
      step-num="3"
      last-step-num="4"
      progress="75"
      heading="Third step"
      next-step-heading="Fourth step"></ic-step>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render an step status icon for a step with a disabled type", async () => {
    const page = await newSpecPage({
      components: [Step],
      html: `<ic-step
      variant="compact"
      type="disabled"
      compact-step-styling = "disabled"
      last-step="false"
      step-num="3"
      last-step-num="4"
      progress="75"
      heading="Third step"
      next-step-heading="next step"
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

  it("should render a step status icon for a step with a completed type", async () => {
    const page = await newSpecPage({
      components: [Step],
      html: `<ic-step
      variant="compact"
      last-step="false"
      step-num="3"
      last-step-num="4"
      progress="75"
      heading="Third step"
      next-step-heading="next step"
      type="completed"
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
      type="current"
      last-step="true"
      step-num=4"
      last-step-num="4"
      progress="100"
      heading="Final step"
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
      heading="Final step"
    ></ic-step>`,
    });

    const loadingIndicator = page.root.shadowRoot.querySelector(
      ".step > ic-loading-indicator"
    );

    expect(
      loadingIndicator.classList.contains("compact-step-progress-indicator")
    ).toBeTruthy();
  });

  it("should watch the type & change the value of the current prop if type = 'current'", async () => {
    const page = await newSpecPage({
      components: [Step],
      html: `<ic-step
      variant="compact" 
      last-step="true"
      step-num=4"
      last-step-num="4"
      progress="100"
      heading="Final step"
      type = "current"
    ></ic-step>`,
    });

    await page.rootInstance.typeChangeHandler();
    await page.waitForChanges();
    expect(page.rootInstance.current).toBeTruthy();
  });

  it("should watch the type & shouldn't change the value of the current prop if type is not 'current'", async () => {
    const page = await newSpecPage({
      components: [Step],
      html: `<ic-step
      variant="compact" 
      last-step="true"
      step-num=4"
      last-step-num="4"
      progress="100"
      heading="Final step"
      type = "completed"
      compact-step-styling = "completed"
    ></ic-step>`,
    });

    await page.rootInstance.typeChangeHandler();
    await page.waitForChanges();
    expect(page.rootInstance.current).toBeFalsy();
  });
});
