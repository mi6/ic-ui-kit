import { html } from "lit-html";

export default {
  title: "Web Components/Stepper",
  component: "ic-stepper",
};

export const FullWidthStepper = {
  render: () =>
    html`<ic-stepper>
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`,

  name: "Full-width stepper",
};

export const LeftAlignedStepper = {
  render: () =>
    html`<ic-stepper aligned="left">
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`,

  name: "Left-aligned stepper",
};

export const WithHiddenStepInformation = {
  render: () =>
    html`<ic-stepper hide-step-info>
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`,

  name: "With hidden step information",
};

export const WithoutStepTitles = {
  render: () =>
    html`<ic-stepper>
      <ic-step step-type="completed"></ic-step>
      <ic-step step-type="completed"></ic-step>
      <ic-step step-type="current"></ic-step>
      <ic-step></ic-step>
    </ic-stepper>`,

  name: "Without step titles",
};

export const WithErrorAndWarning = {
  render: () =>
    html`<ic-stepper>
      <ic-step step-type="error"></ic-step>
      <ic-step step-type="warning"></ic-step>
      <ic-step step-type="completed"></ic-step>
      <ic-step step-type="current"></ic-step>
      <ic-step></ic-step>
    </ic-stepper>`,
  name: "With error and warning stepper",
};


export const CustomStepper = {
  render: () =>
    html`<ic-stepper>
      <ic-step step-title="First"></ic-step>
      <ic-step
        step-title="Second With a Very Long Title"
        step-subtitle="Optional subtitle that is long and should wrap"
        step-type="current"
      ></ic-step>
      <ic-step step-title="Third" step-type="disabled"></ic-step>
      <ic-step
        step-title="Fourth title that is long and should wrap"
        step-subtitle="Optional Subtitle"
        step-type="completed"
      ></ic-step>
    </ic-stepper>`,

  name: "Custom stepper",
};

export const CustomConnectorWidth = {
  render: () =>
    html`<ic-stepper aligned="left" connector-width="200">
      <ic-step step-title="First"></ic-step>
      <ic-step
        step-title="Second With a Very Long Title"
        step-subtitle="Optional subtitle that is long and should wrap"
        step-type="current"
      ></ic-step>
      <ic-step step-title="Third" step-type="disabled"></ic-step>
      <ic-step
        step-title="Fourth title that is long and should wrap"
        step-subtitle="Optional Subtitle"
        step-type="completed"
      ></ic-step>
    </ic-stepper>`,

  name: "Custom connector width",
};

export const Light = {
  render: () =>
    html`<div style="background-color:#24262b;">
      <ic-stepper appearance="light">
        <ic-step step-title="Create" step-type="completed"></ic-step>
        <ic-step step-title="Read" step-type="current"></ic-step>
        <ic-step step-title="Update" step-type="active"></ic-step>
        <ic-step step-title="Delete" step-type="disabled"></ic-step>
      </ic-stepper>
    </div>`,

  name: "Light",
};

export const CompactStepper = {
  render: () =>
    html`<ic-stepper variant="compact" id="standard-compact-stepper">
        <ic-step step-title="Create"></ic-step>
        <ic-step step-title="Read" step-type="current"></ic-step>
        <ic-step step-title="Update" step-status="optional"></ic-step>
        <ic-step step-title="Delete" step-status="required"></ic-step>
      </ic-stepper>
      <ic-button
        class="back-btn-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousStep()"
        >Back</ic-button
      >
      <ic-button class="next-btn-compact-stepper" onclick="toNextStep()"
        >Next</ic-button
      >
      <script>
        const compactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
        ];
        const backBtn = document.querySelector(".back-btn-compact-stepper");
        const nextBtn = document.querySelector(".next-btn-compact-stepper");
        const steps = document.querySelectorAll(
          "#standard-compact-stepper > ic-step"
        );
        function toPreviousStep() {
          for (let i = steps.length - 1; i > 0; i--) {
            if (steps[i].stepType === "current") {
              steps[i].stepType = compactStepTypes[i];
              steps[i - 1].stepType = "current";
              i--;
            }
          }
          if (steps[steps.length - 2].stepType === "current") {
            nextBtn.setAttribute("disabled", "false");
          }
          if (steps[0].stepType === "current") {
            backBtn.setAttribute("disabled", "true");
          }
        }
        function toNextStep() {
          for (let i = 0; i < steps.length - 1; i++) {
            if (steps[i].stepType === "current") {
              steps[i].stepType = compactStepTypes[i];
              steps[i + 1].stepType = "current";
              i++;
            }
          }
          if (steps[1].stepType === "current") {
            backBtn.setAttribute("disabled", "false");
          }
          if (steps[steps.length - 1].stepType === "current") {
            nextBtn.setAttribute("disabled", "true");
          }
        }
      </script>`,

  name: "Compact stepper",
};

export const CompactStepperLight = {
  render: () =>
    html`<div style="background-color:#24262b;">
        <ic-stepper
          variant="compact"
          id="standard-compact-stepper"
          appearance="light"
        >
          <ic-step step-title="Create"></ic-step>
          <ic-step step-title="Read" step-type="current"></ic-step>
          <ic-step step-title="Update" step-status="optional"></ic-step>
          <ic-step step-title="Delete" step-status="required"></ic-step>
        </ic-stepper>
      </div>
      <ic-button
        class="back-btn-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousStep()"
        >Back</ic-button
      >
      <ic-button class="next-btn-compact-stepper" onclick="toNextStep()"
        >Next</ic-button
      >
      <script>
        const compactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
        ];
        const backBtn = document.querySelector(".back-btn-compact-stepper");
        const nextBtn = document.querySelector(".next-btn-compact-stepper");
        const steps = document.querySelectorAll(
          "#standard-compact-stepper > ic-step"
        );
        function toPreviousStep() {
          for (let i = steps.length - 1; i > 0; i--) {
            if (steps[i].stepType === "current") {
              steps[i].stepType = compactStepTypes[i];
              steps[i - 1].stepType = "current";
              i--;
            }
          }
          if (steps[steps.length - 2].stepType === "current") {
            nextBtn.setAttribute("disabled", "false");
          }
          if (steps[0].stepType === "current") {
            backBtn.setAttribute("disabled", "true");
          }
        }
        function toNextStep() {
          for (let i = 0; i < steps.length - 1; i++) {
            if (steps[i].stepType === "current") {
              steps[i].stepType = compactStepTypes[i];
              steps[i + 1].stepType = "current";
              i++;
            }
          }
          if (steps[1].stepType === "current") {
            backBtn.setAttribute("disabled", "false");
          }
          if (steps[steps.length - 1].stepType === "current") {
            nextBtn.setAttribute("disabled", "true");
          }
        }
      </script>`,

  name: "Compact stepper light",
};

export const CustomCompactStepper = {
  render: () =>
    html`<ic-stepper variant="compact" id="custom-compact-stepper">
        <ic-step step-title="First"></ic-step>
        <ic-step
          step-title="Second With a Very Long Title"
          step-subtitle="Optional subtitle that is long and should wrap"
          step-type="current"
        ></ic-step>
        <ic-step step-title="Third" step-type="disabled"></ic-step>
        <ic-step
          step-title="Fourth title that is long and should wrap"
          step-subtitle="Optional Subtitle"
          step-type="completed"
        ></ic-step>
        <ic-step
          step-title="Fifth and final step"
          step-subtitle="Optional Subtitle"
          step-status="optional"
          step-type="disabled"
        ></ic-step>
      </ic-stepper>
      <ic-button
        class="back-btn-custom-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousCustomStep()"
        >Back</ic-button
      >
      <ic-button
        class="next-btn-custom-compact-stepper"
        onclick="toNextCustomStep()"
        >Next</ic-button
      >
      <script>
        const customCompactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
          "disabled",
        ];
        const backBtnCustomCompactStepper = document.querySelector(
          ".back-btn-custom-compact-stepper"
        );
        const nextBtnCustomCompactStepper = document.querySelector(
          ".next-btn-custom-compact-stepper"
        );
        const customSteps = document.querySelectorAll(
          "#custom-compact-stepper > ic-step"
        );
        function toPreviousCustomStep() {
          for (let i = customSteps.length - 1; i > 0; i--) {
            if (customSteps[i].stepType === "current") {
              customSteps[i].stepType = customCompactStepTypes[i];
              customSteps[i - 1].stepType = "current";
              i--;
            }
          }
          if (customSteps[customSteps.length - 2].stepType === "current") {
            nextBtnCustomCompactStepper.setAttribute("disabled", "false");
          }
          if (customSteps[0].stepType === "current") {
            backBtnCustomCompactStepper.setAttribute("disabled", "true");
          }
        }
        function toNextCustomStep() {
          for (let i = 0; i < customSteps.length - 1; i++) {
            if (customSteps[i].stepType === "current") {
              customSteps[i].stepType = customCompactStepTypes[i];
              customSteps[i + 1].stepType = "current";
              i++;
            }
          }
          if (customSteps[1].stepType === "current") {
            backBtnCustomCompactStepper.setAttribute("disabled", "false");
          }
          if (customSteps[customSteps.length - 1].stepType === "current") {
            nextBtnCustomCompactStepper.setAttribute("disabled", "true");
          }
        }
      </script>`,

  name: "Custom compact stepper",
};
