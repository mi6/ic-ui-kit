import { newSpecPage } from "@stencil/core/testing";
import { resizeTo } from "../../../../testspec.setup";
import { Step } from "../../../ic-step/ic-step";
import { Stepper } from "../../ic-stepper";

describe("default variant of ic-stepper component", () => {
  it("should render a full-width stepper", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update"></ic-step>
      <ic-step heading="Delete"></ic-step></ic-stepper>`,
    });
    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance.variant).toMatch("default");

    const steps = page.root.querySelectorAll("ic-step");

    steps.forEach((step) => {
      expect(step.classList.contains("aligned-full-width")).toBeTruthy();
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a left-aligned stepper", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper aligned="left">
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update"></ic-step>
      <ic-step heading="Delete"></ic-step></ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();
    await page.waitForChanges();

    expect(page.rootInstance.variant).toMatch("default");
    expect(page.rootInstance.aligned).toMatch("left");
    expect(
      page.root.classList.contains("ic-stepper-aligned-left")
    ).toBeTruthy();

    expect(page.root).toMatchSnapshot();
  });

  it("should render a stepper with hidden step info", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper hide-step-info>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update"></ic-step>
      <ic-step heading="Delete"></ic-step></ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance.variant).toMatch("default");

    expect(page.rootInstance.hideStepInfo).toBeTruthy();

    const steps = page.root.querySelectorAll("ic-step");

    steps.forEach((step) => {
      const stepTitleArea = step.shadowRoot.querySelector(
        ".step > .heading-area"
      );

      expect(stepTitleArea.classList.contains("visually-hidden")).toBeTruthy();
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a stepper without step titles", async () => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper>
      <ic-step type="completed"></ic-step>
      <ic-step type="current"></ic-step>
      <ic-step type="disabled"></ic-step>
      <ic-step type="active"></ic-step></ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();

    expect(page.rootInstance.hideStepInfo).toBeFalsy();

    const steps = page.root.querySelectorAll("ic-step");

    expect(page.rootInstance["variantOverride"]).toBeTruthy();

    expect(page.rootInstance["stepsWithStepTitles"].length).toBeLessThan(
      page.rootInstance["steps"].length
    );

    expect(page.rootInstance.variant).toMatch("default");

    expect(page.rootInstance["noOfResizes"]).toBe(0);

    steps.forEach((step) => {
      expect(step["heading"]).toBeUndefined();
      expect(step["subheading"]).toBeUndefined();

      const stepTitleArea = step.shadowRoot.querySelector(
        ".step > .heading-area"
      );
      expect(stepTitleArea).toBeNull();
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance["noOfResizes"]).toBe(0);
  });

  it("should render a stepper with a custom connector width", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper aligned="left" connector-width="150">
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update"></ic-step>
      <ic-step heading="Delete"></ic-step></ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();

    expect(
      page.root.classList.contains("ic-stepper-aligned-left")
    ).toBeTruthy();
  });

  it("should ignore the connectorWidth prop if the stepper is set to be aligned full-width", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper connector-width="150">
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update"></ic-step>
      <ic-step heading="Delete"></ic-step></ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();

    expect(page.root.classList.contains("ic-stepper-aligned-left")).toBeFalsy();
  });

  it("should add 'disabled step' to the aria labels of all disabled steps", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper variant="compact" id="custom-stepper">
        <ic-step variant="compact" type="disabled" heading="First"></ic-step>
        <ic-step
          variant="compact"
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Third"
          type="disabled"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
        ></ic-step>
      </ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    const disabledSteps = page.root.querySelectorAll(
      'ic-step[type="disabled"]'
    );

    disabledSteps.forEach((step) => {
      expect(step.getAttribute("aria-label")).toMatch(/. Non-required step/i);
    });
  });

  it("should add the className 'last-step' to the last step in the stepper", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `
    <ic-stepper>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update"></ic-step>
      <ic-step last-step heading="Delete"></ic-step>
    </ic-stepper>
    `,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();

    const lastStep = await page.root.querySelector("ic-step[last-step='']");

    expect(lastStep.classList.contains("last-step")).toBeTruthy();
  });
});

describe("resizeObserver for ic-stepper", () => {
  it("shouldn't call the resizeObserver if the resizeObserver is null", async () => {
    const page = await newSpecPage({
      components: [Stepper],
      html: `
    <ic-stepper>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update"></ic-step>
      <ic-step heading="Delete"></ic-step>
    </ic-stepper>
    `,
    });

    await page.rootInstance.runResizeObserver();

    page.setContent("");
  });

  it("should call the functions in the resizeObserver", async () => {
    const page = await newSpecPage({
      components: [Stepper],
      html: `
    <ic-stepper>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update"></ic-step>
      <ic-step heading="Delete"></ic-step>
    </ic-stepper>
    `,
    });

    await page.waitForChanges();

    await page.rootInstance.runResizeObserver();

    await page.rootInstance.getChildren();

    await page.rootInstance.checkStepTitles();

    await page.rootInstance.overrideVariant();

    await page.rootInstance.setStepperWidth();

    await page.rootInstance.initialiseStepStates();
  });
});

describe("compact variant of ic-stepper component", () => {
  it("should render a compact step with no step status", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper variant="compact" id="custom-stepper">
        <ic-step heading="First"></ic-step>
        <ic-step
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          heading="Third"
          type="disabled"
        ></ic-step>
        <ic-step
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
          type="completed"
        ></ic-step>
      </ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();

    expect(page.rootInstance["variantOverride"]).toBeFalsy();

    expect(page.rootInstance.hideStepInfo).toBeFalsy();

    const steps = page.root.querySelectorAll("ic-step");

    steps.forEach((step) => {
      const heading = step.shadowRoot.querySelector(
        ".step > .heading-area > .heading"
      );

      expect(heading).not.toBeNull();
      expect(heading.classList.contains("hide")).toBeFalsy();
    });
  });

  it("should render a stepper with hidden step information", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper hide-step-info>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update"></ic-step>
      <ic-step heading="Delete"></ic-step></ic-stepper>`,
    });

    page.rootInstance.el.clientWidth = 50;

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance.variant).toMatch("compact");

    expect(page.rootInstance.hideStepInfo).toBeTruthy();

    const steps = page.root.querySelectorAll("ic-step");

    steps.forEach((step) => {
      const heading = step.shadowRoot.querySelector(
        ".step > .heading-area > .heading"
      );

      expect(heading).not.toBeNull();
      expect(heading.classList.contains("visually-hidden")).toBeFalsy();
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a stepper without step titles", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper >
      <ic-step type="completed"></ic-step>
      <ic-step type="current"></ic-step>
      <ic-step type="disabled"></ic-step>
      <ic-step type="active" ></ic-step></ic-stepper>`,
    });

    page.rootInstance.el.clientWidth = 50;

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();

    const steps = page.root.querySelectorAll("ic-step");

    expect(page.rootInstance["variantOverride"]).toBeTruthy();

    expect(page.rootInstance["stepsWithStepTitles"].length).toBeLessThan(
      page.rootInstance["steps"].length
    );

    expect(page.rootInstance.variant).toMatch("compact");

    expect(page.rootInstance["noOfResizes"]).toBe(0);

    steps.forEach((step) => {
      const heading = "Step " + step["stepNum"];
      expect(step["heading"]).toMatch(heading);
      expect(step["subheading"]).toBeUndefined();
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance["noOfResizes"]).toBe(1);
  });

  it("should only show the current step", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper variant="compact" id="custom-stepper">
        <ic-step heading="First"></ic-step>
        <ic-step
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          heading="Third"
          type="disabled"
        ></ic-step>
        <ic-step
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
          type="completed"
        ></ic-step>
      </ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance.variant).toMatch("compact");

    const currentStep = page.root.querySelector('ic-step[current=""]');

    expect(
      currentStep.shadowRoot
        .querySelector(".step")
        .classList.contains("current")
    );

    expect(currentStep.classList.contains("show")).toBeTruthy;

    expect(currentStep.classList.contains("hide")).toBeFalsy;

    const notCurrentStep = page.root.querySelector('ic-step:not([current=""])');

    expect(notCurrentStep.classList.contains("show")).toBeFalsy;

    expect(notCurrentStep.classList.contains("hide")).toBeTruthy;

    notCurrentStep.classList.add("show");

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(notCurrentStep.classList.contains("show")).toBeFalsy;

    expect(notCurrentStep.classList.contains("hide")).toBeTruthy;
  });

  it("shouldn't add the 'show' and 'hide' classes to default steps", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper>
        <ic-step heading="First"></ic-step>
        <ic-step
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          heading="Third"
          type="disabled"
        ></ic-step>
        <ic-step
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
          type="completed"
        ></ic-step>
      </ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance.variant).toMatch("default");

    const currentStep = page.root.querySelector('ic-step[current=""]');

    expect(
      currentStep.shadowRoot
        .querySelector(".step")
        .classList.contains("current")
    );

    const steps = page.root.querySelectorAll("ic-step");

    steps.forEach((step) => {
      expect(step.classList.contains("show")).toBeFalsy();
      expect(step.classList.contains("hide")).toBeFalsy();
    });
  });

  it("should only add the 'show' and 'hide' classes to compact steps", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper variant="compact">
        <ic-step variant="compact" heading="First"></ic-step>
        <ic-step
          variant="compact"
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Third"
          type="disabled"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
          type="completed"
        ></ic-step>
      </ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance.variant).toMatch("compact");

    const currentStep = page.root.querySelector('ic-step[current=""]');

    expect(
      currentStep.shadowRoot
        .querySelector(".step")
        .classList.contains("current")
    );

    expect(currentStep.classList.contains("show")).toBeTruthy;

    expect(currentStep.classList.contains("hide")).toBeFalsy;

    const notCurrentSteps = page.root.querySelector(
      'ic-step:not([current=""])'
    );

    expect(notCurrentSteps.classList.contains("show")).toBeFalsy;

    expect(notCurrentSteps.classList.contains("hide")).toBeTruthy;
  });

  it("should render status icons next to all steps with a disabled type", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper variant="compact" id="custom-stepper">
        <ic-step variant="compact" heading="First"></ic-step>
        <ic-step
          variant="compact"
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Third"
          status="required"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fifth and final step"
          type="disabled"
        ></ic-step>
      </ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    const notRequiredSteps = page.root.querySelectorAll(
      'ic-step[type="disabled"]'
    );

    notRequiredSteps.forEach((step) => {
      const textContent = step.shadowRoot.querySelector(
        ".step > .heading-area > .info-line > .step-status > ic-typography"
      ).textContent;

      expect(textContent).toBe("Not required");

      const statusIcon = step.shadowRoot.querySelector(
        ".step > .heading-area > .info-line > .step-status > .step-icon"
      );

      expect(statusIcon).toEqualHtml(
        `<span class="warning-icon step-icon" aria-hidden="true">svg</span>`
      );

      expect(step.getAttribute("aria-label")).toMatch(/. Non-required step/i);
    });
  });

  it("should render status icons next to all steps with a completed type", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper variant="compact" id="custom-stepper">
        <ic-step variant="compact" heading="First"></ic-step>
        <ic-step
          variant="compact"
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Third"
          type="disabled"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fourth title that is long and should wrap"
          type="completed"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fifth and final step"
          subheading="Optional Subtitle"
        ></ic-step>
      </ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    const completeSteps = page.root.querySelectorAll(
      'ic-step[type="completed"]'
    );

    completeSteps.forEach((step) => {
      const textContent = step.shadowRoot.querySelector(
        ".step > .heading-area > .info-line > .step-status > ic-typography"
      ).textContent;

      expect(textContent).toBe("Completed");

      const statusIcon = step.shadowRoot.querySelector(
        ".step > .heading-area > .info-line > .step-status > span.step-icon"
      );

      expect(statusIcon).toEqualHtml(
        `<span class="check-icon step-icon" aria-hidden="true">svg</span>`
      );

      expect(step.getAttribute("aria-label")).toMatch(/. Completed step/i);
    });
  });

  it("should update the aria label of a step if its status is set to 'optional'", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper variant="compact" id="custom-stepper">
        <ic-step variant="compact" heading="First"></ic-step>
        <ic-step
          variant="compact"
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Third"
          status="optional"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
        ></ic-step>
      </ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    const optionalSteps = page.root.querySelectorAll(
      'ic-step[status="optional"]'
    );

    optionalSteps.forEach((step) => {
      expect(step.getAttribute("aria-label")).toMatch(/. Optional step/i);
    });
  });

  it("should update the aria label of a step if its status is set to 'required'", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper variant="compact" id="custom-stepper">
        <ic-step variant="compact" heading="First"></ic-step>
        <ic-step
          variant="compact"
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Third"
          status="required"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          variant="compact"
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
        ></ic-step>
      </ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    const requiredSteps = page.root.querySelectorAll(
      'ic-step[status="required"]'
    );

    requiredSteps.forEach((step) => {
      expect(step.getAttribute("aria-label")).toMatch(/. Required step/i);
    });
  });

  it("should only show the title of the next step if it isn't the last step", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper variant="compact" id="custom-stepper">
        <ic-step heading="First"></ic-step>
        <ic-step
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          heading="Third"
          type="disabled"
        ></ic-step>
        <ic-step
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          heading="Fifth and final step"
          subheading="Optional Subtitle"
        ></ic-step>
      </ic-stepper>`,
    });

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance.variant).toMatch("compact");

    const steps = page.root.querySelectorAll("ic-step");

    steps.forEach((step) => {
      expect(step["variant"]).toMatch("compact");
    });

    for (let i = 0; i < steps.length; i++) {
      if (steps[i] !== steps[steps.length - 1]) {
        expect(steps[i]["nextStepHeading"]).toBe(steps[i + 1]["heading"]);
      } else {
        expect(steps[i]["nextStepHeading"]).toBeUndefined();
      }
    }
  });
});

describe("switch between the compact and default stepper depending on whether the stepper has a scroll", () => {
  it("should change from the default variant to the compact variant if there's a scroll on the stepper", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper >
        <ic-step heading="First"></ic-step>
        <ic-step
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          heading="Third"
          type="disabled"
        ></ic-step>
        <ic-step
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
        ></ic-step>
      </ic-stepper>`,
    });

    expect(page.rootInstance.variant).toMatch("default");

    page.rootInstance.el.clientWidth = 50;

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance.variant).toMatch("compact");

    expect(page.rootInstance["variantOverride"]).toBeTruthy();
  });

  it("should change from the compact variant to the stepper variant if the stepper is greater than the min width for the default stepper", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper>
        <ic-step heading="First"></ic-step>
        <ic-step
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          heading="Third"
          type="disabled"
        ></ic-step>
        <ic-step
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
        ></ic-step>
      </ic-stepper>`,
    });

    page.rootInstance.el.clientWidth = 50;

    resizeTo(window, 375, 812);

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance.variant).toMatch("compact");

    resizeTo(window, 1920, 1080);

    page.rootInstance.el.clientWidth = 1000;

    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance.variant).toMatch("default");

    expect(page.rootInstance["variantOverride"]).toBeTruthy();
  });

  it("should render a light stepper", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper appearance="light">
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update"></ic-step>
      <ic-step heading="Delete"></ic-step></ic-stepper>`,
    });
    page.rootInstance.resizeObserverCallback();

    await page.waitForChanges();

    expect(page.rootInstance.appearance).toMatch("light");

    const steps = page.root.querySelectorAll("ic-step");

    steps.forEach((step) => {
      expect(step.classList.contains("ic-step-light")).toBeTruthy();
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should test the setHideStepInfo method", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update"></ic-step>
      <ic-step heading="Delete"></ic-step></ic-stepper>`,
    });
    await page.waitForChanges();

    expect(page.rootInstance.hideStepInfo).toBeFalsy();

    const steps = page.root.querySelectorAll("ic-step");

    steps.forEach((step) => {
      const heading = step.shadowRoot.querySelector(".step > .heading-area");

      expect(heading).not.toBeNull();
      expect(heading.classList.contains("visually-hidden")).toBeFalsy();
    });

    page.rootInstance.hideStepInfo = true;
    await page.waitForChanges();

    expect(page.rootInstance.hideStepInfo).toBeTruthy();

    steps.forEach((step) => {
      const heading = step.shadowRoot.querySelector(".step > .heading-area");

      expect(heading).not.toBeNull();
      expect(heading.classList.contains("visually-hidden")).toBeTruthy();
    });
  });
});
