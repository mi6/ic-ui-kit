import { html } from "lit-html";

const defaultArgs = {
  heading: "Create",
  subheading: "Optional",
  theme: "inherit",
};

export default {
  title: "Web Components/Stepper",
  component: "ic-stepper",
};

export const FullWidthStepper = {
  render: () =>
    html`<ic-stepper>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>`,

  name: "Full-width stepper",
};

export const LeftAlignedStepper = {
  render: () =>
    html`<ic-stepper aligned="left">
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>`,

  name: "Left-aligned stepper",
};

export const WithHiddenStepInformation = {
  render: () =>
    html`<ic-stepper hide-step-info>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>`,

  name: "With hidden step information",
};

export const WithoutHeadings = {
  render: () =>
    html`<ic-stepper>
      <ic-step type="completed"></ic-step>
      <ic-step type="completed"></ic-step>
      <ic-step type="current"></ic-step>
      <ic-step></ic-step>
    </ic-stepper>`,

  name: "Without headings",
};

export const CustomStepper = {
  render: () =>
    html`<ic-stepper>
      <ic-step heading="First"></ic-step>
      <ic-step
        heading="Second With a Very Long Title"
        subheading="Optional subtitle that is long and should wrap"
        type="current"
      ></ic-step>
      <ic-step
        heading="Third"
        subheading="Optional subtitle"
        type="disabled"
      ></ic-step>
      <ic-step
        heading="Fourth title that is long and should wrap"
        subheading="Optional Subtitle"
        type="completed"
      ></ic-step>
    </ic-stepper>`,

  name: "Custom stepper",
};

export const CustomConnectorWidth = {
  render: () =>
    html`<ic-stepper aligned="left" connector-width="200">
      <ic-step heading="First"></ic-step>
      <ic-step
        heading="Second With a Very Long Title"
        subheading="Optional subtitle that is long and should wrap"
        type="current"
      ></ic-step>
      <ic-step heading="Third" type="disabled"></ic-step>
      <ic-step
        heading="Fourth title that is long and should wrap"
        subheading="Optional Subtitle"
        type="completed"
      ></ic-step>
    </ic-stepper>`,

  name: "Custom connector width",
};

export const CompactStepper = {
  render: () =>
    html`<ic-stepper variant="compact" id="standard-compact-stepper">
        <ic-step heading="Create"></ic-step>
        <ic-step heading="Read" type="current"></ic-step>
        <ic-step heading="Update" status="optional"></ic-step>
        <ic-step heading="Delete" status="required"></ic-step>
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
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i - 1].type = "current";
              i--;
            }
          }
          if (steps[steps.length - 2].type === "current") {
            nextBtn.setAttribute("disabled", "false");
          }
          if (steps[0].type === "current") {
            backBtn.setAttribute("disabled", "true");
          }
        }
        function toNextStep() {
          for (let i = 0; i < steps.length - 1; i++) {
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i + 1].type = "current";
              i++;
            }
          }
          if (steps[1].type === "current") {
            backBtn.setAttribute("disabled", "false");
          }
          if (steps[steps.length - 1].type === "current") {
            nextBtn.setAttribute("disabled", "true");
          }
        }
      </script>`,

  name: "Compact stepper",
};

export const CustomCompactStepper = {
  render: () =>
    html`<ic-stepper variant="compact" id="custom-compact-stepper">
        <ic-step heading="First"></ic-step>
        <ic-step
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          type="current"
        ></ic-step>
        <ic-step heading="Third" type="disabled"></ic-step>
        <ic-step
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
          type="disabled"
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
            if (customSteps[i].type === "current") {
              customSteps[i].type = customCompactStepTypes[i];
              customSteps[i - 1].type = "current";
              i--;
            }
          }
          if (customSteps[customSteps.length - 2].type === "current") {
            nextBtnCustomCompactStepper.setAttribute("disabled", "false");
          }
          if (customSteps[0].type === "current") {
            backBtnCustomCompactStepper.setAttribute("disabled", "true");
          }
        }
        function toNextCustomStep() {
          for (let i = 0; i < customSteps.length - 1; i++) {
            if (customSteps[i].type === "current") {
              customSteps[i].type = customCompactStepTypes[i];
              customSteps[i + 1].type = "current";
              i++;
            }
          }
          if (customSteps[1].type === "current") {
            backBtnCustomCompactStepper.setAttribute("disabled", "false");
          }
          if (customSteps[customSteps.length - 1].type === "current") {
            nextBtnCustomCompactStepper.setAttribute("disabled", "true");
          }
        }
      </script>`,

  name: "Custom compact stepper",
};

export const Internationalisation = {
  render: () =>
    html`<span lang="de">
        <ic-stepper variant="compact" id="standard-compact-stepper">
          <ic-step heading="Aktualisierung"></ic-step>
          <ic-step id="read-step" heading="Lesen" type="current"></ic-step>
          <ic-step heading="Aktualisierung" status="optional"></ic-step>
          <ic-step heading="Löschen" status="required"></ic-step>
        </ic-stepper>
      </span>
      <p>
        This stepper uses the icI18n prop to customise text elements within the
        stepper.
      </p>
      <p>
        It is also wrapped in a <code>&lt;span lang="de"&gt;</code> to change
        the language for assistive technology
      </p>
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
        const stepper = document.getElementById("standard-compact-stepper");
        stepper.icI18n = {
          next: "Der nächste",
          step: "Schritt",
          steps: "Schritte",
          of: "von",
          lastStep: "Letzter Schritt",
          completed: "abgeschlossen",
          notRequired: "Nicht erforderlich",
          required: "erforderlich",
          optional: "wahlweise",
        };
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
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i - 1].type = "current";
              i--;
            }
          }
          if (steps[steps.length - 2].type === "current") {
            nextBtn.setAttribute("disabled", "false");
          }
          if (steps[0].type === "current") {
            backBtn.setAttribute("disabled", "true");
          }
        }
        function toNextStep() {
          for (let i = 0; i < steps.length - 1; i++) {
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i + 1].type = "current";
              i++;
            }
          }
          if (steps[1].type === "current") {
            backBtn.setAttribute("disabled", "false");
          }
          if (steps[steps.length - 1].type === "current") {
            nextBtn.setAttribute("disabled", "true");
          }
        }
      </script>`,

  name: "Internationalisation",
};

export const SlottedHeading = {
  render: () =>
    html`<ic-stepper>
      <ic-step type="completed"><span slot="heading">Create</span></ic-step>
      <ic-step type="current"><span slot="heading">Read</span></ic-step>
      <ic-step type="active"><span slot="heading">Update</span></ic-step>
      <ic-step type="disabled"><span slot="heading">Delete</span></ic-step>
    </ic-stepper>`,

  name: "Slotted heading",
};

export const Playground = {
  render: (args) =>
    html`<ic-stepper theme=${args.theme}>
      <ic-step
        heading=${args.heading}
        subheading=${args.subheading}
        type="completed"
      ></ic-step>
      <ic-step heading="Read" type="current" subheading="Optional"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled" subheading="Optional"></ic-step>
    </ic-stepper>`,

  args: defaultArgs,

  argTypes: {
    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
