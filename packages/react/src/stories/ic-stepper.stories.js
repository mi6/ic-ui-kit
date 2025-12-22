/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { IcStep, IcStepper, IcButton } from "../components";

const ICI18N = {
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

const defaultArgs = {
  aligned: "full-width",
  connectorWidth: 100,
  variant: "default",
  hideStepInfo: false,
  heading: "Editable step",
  type: "current",
  status: "optional",
  subheading: "Optional subtitle",
  theme: "inherit",
  icI18n: ICI18N,
};

const CompactButtons = () => (
  <div>
    <IcButton
      class="back-btn-compact-stepper"
      style={{ marginRight: "var(--ic-space-lg)" }}
      onClick={() => {
        const backBtn = document.querySelector(".back-btn-compact-stepper");
        const nextBtn = document.querySelector(".next-btn-compact-stepper");
        const steps = document.querySelectorAll(
          "#standard-compact-stepper > ic-step",
        );
        const compactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
        ];
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
      }}
    >
      Back
    </IcButton>
    <IcButton
      class="next-btn-compact-stepper"
      onClick={() => {
        const backBtn = document.querySelector(".back-btn-compact-stepper");
        const nextBtn = document.querySelector(".next-btn-compact-stepper");
        const steps = document.querySelectorAll(
          "#standard-compact-stepper > ic-step",
        );
        const compactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
        ];
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
      }}
    >
      Next
    </IcButton>
  </div>
);

export default {
  title: "Stepper",
  component: IcStepper,
};

export const FullWidthStepper = {
  render: () => (
    <IcStepper>
      <IcStep heading="Create" type="completed" />
      <IcStep heading="Read" type="current" />
      <IcStep heading="Update" type="active" />
      <IcStep heading="Delete" type="disabled" />
    </IcStepper>
  ),

  name: "Full-width stepper",
};

export const LeftAlignedStepper = {
  render: () => (
    <IcStepper aligned="left">
      <IcStep heading="Create" type="completed" />
      <IcStep heading="Read" type="current" />
      <IcStep heading="Update" type="active" />
      <IcStep heading="Delete" type="disabled" />
    </IcStepper>
  ),

  name: "Left-aligned stepper",
};

export const WithHiddenStepInformation = {
  render: () => (
    <IcStepper hideStepInfo>
      <IcStep heading="Create" type="completed" />
      <IcStep heading="Read" type="current" />
      <IcStep heading="Update" type="active" />
      <IcStep heading="Delete" type="disabled" />
    </IcStepper>
  ),

  name: "With hidden step information",
};

export const WithoutHeadings = {
  render: () => (
    <IcStepper>
      <IcStep type="completed" />
      <IcStep type="completed" />
      <IcStep type="current" />
      <IcStep />
    </IcStepper>
  ),

  name: "Without headings",
};

export const CustomStepper = {
  render: () => (
    <IcStepper>
      <IcStep heading="First" />
      <IcStep
        heading="Second With a Very Long Title"
        subheading="Optional subtitle that is long and should wrap"
        type="current"
      />
      <IcStep heading="Third" type="disabled" />
      <IcStep
        heading="Fourth title that is long and should wrap"
        subheading="Optional Subtitle"
        type="completed"
      />
    </IcStepper>
  ),

  name: "Custom stepper",
};

export const CustomConnectorWidth = {
  render: () => (
    <IcStepper aligned="left" connectorWidth="200">
      <IcStep heading="First" />
      <IcStep
        heading="Second With a Very Long Title"
        subheading="Optional subtitle that is long and should wrap"
        type="current"
      />
      <IcStep heading="Third" type="disabled" />
      <IcStep
        heading="Fourth title that is long and should wrap"
        subheading="Optional Subtitle"
        type="completed"
      />
    </IcStepper>
  ),

  name: "Custom connector width",
};

export const CompactStepper = {
  render: () => (
    <>
      <IcStepper variant="compact" id="standard-compact-stepper">
      <IcStep heading="Create" />
      <IcStep heading="Read" type="current" />
      <IcStep heading="Update" status="optional" />
      <IcStep heading="Delete" status="required" />
    </IcStepper>
    <CompactButtons/>
    </>
  ),

  name: "Compact stepper",
};

export const Internationalisation = {
  render: () => (
    <>
    <span lang="de">
      <IcStepper variant="compact" id="standard-compact-stepper" icI18n={ICI18N}>
        <IcStep heading="Aktualisierung" />
        <IcStep heading="Lesen" type="current" />
        <IcStep heading="Aktualisierung" status="optional" />
        <IcStep heading="Löschen" status="required" />
      </IcStepper>
    </span>
    <p>This stepper uses the icI18n prop to customise text elements within the stepper.</p>
    <p>It is also wrapped in a <code>&lt;span lang="de"&gt;</code> to change the language for assistive technology</p>
    <CompactButtons/>
    </>
  ),

  name: "Internationalisation",
};

export const CustomCompactStepper = {
  render: () => (
    <>
      <IcStepper variant="compact" id="custom-compact-stepper">
      <IcStep heading="First" />
      <IcStep
        heading="Second With a Very Long Title"
        subheading="Optional subtitle that is long and should wrap"
        type="current"
      />
      <IcStep heading="Third" type="disabled" />
      <IcStep
        heading="Fourth title that is long and should wrap"
        subheading="Optional Subtitle"
        type="completed"
      />
      <IcStep
        heading="Fifth and final step"
        subheading="Optional Subtitle"
        status="optional"
        type="completed"
      />
    </IcStepper>
    <IcButton
      class="back-btn-custom-compact-stepper"
      style={{ marginRight: "var(--ic-space-lg)" }}
      onClick={() => {
        const backBtnCustomCompactStepper = document.querySelector(
          ".back-btn-custom-compact-stepper"
        );
        const nextBtnCustomCompactStepper = document.querySelector(
          ".next-btn-custom-compact-stepper"
        );
        const customSteps = document.querySelectorAll(
          "#custom-compact-stepper > ic-step"
        );
        const customCompactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
          "disabled",
        ];
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
      }}
    >
      Back
    </IcButton>
    <IcButton
      class="next-btn-custom-compact-stepper"
      onClick={() => {
        const backBtnCustomCompactStepper = document.querySelector(
          ".back-btn-custom-compact-stepper"
        );
        const nextBtnCustomCompactStepper = document.querySelector(
          ".next-btn-custom-compact-stepper"
        );
        const customSteps = document.querySelectorAll(
          "#custom-compact-stepper > ic-step"
        );
        const customCompactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
          "disabled",
        ];
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
      }}
    >
      Next
    </IcButton>
    </>
  ),

  name: "Custom compact stepper",
};

export const SlottedHeading = {
  render: () => (
    <IcStepper>
      <IcStep type="completed">
        <span slot="heading">Create</span>
      </IcStep>
      <IcStep type="current">
        <span slot="heading">Read</span>
      </IcStep>
      <IcStep type="active">
        <span slot="heading">Update</span>
      </IcStep>
      <IcStep type="disabled">
        <span slot="heading">Delete</span>
      </IcStep>
    </IcStepper>
  ),

  name: "Slotted heading",
};

export const Playground = {
  render: (args) => (
    <div>
      <IcStepper
        aligned={args.aligned}
        variant={args.variant}
        connectorWidth={args.connectorWidth}
        hideStepInfo={args.hideStepInfo}
        theme={args.theme}
        id={
          args.variant === "compact"
            ? "standard-compact-stepper"
            : "default-stepper"
        }
        icI18n={args.icI18n}
      >
        <IcStep heading="Create" type="completed" />
        <IcStep
          heading={args.heading}
          subheading={args.subheading}
          type={args.type}
          status={args.status}
        />
        <IcStep heading="Update" type="active" />
        <IcStep heading="Delete" type="disabled" />
      </IcStepper>
      {args.variant === "compact" && <CompactButtons />}
    </div>
  ),

  name: "Playground",
  args: defaultArgs,

  argTypes: {
    aligned: {
      options: ["left", "full-width"],

      control: {
        type: "inline-radio",
      },
    },

    connectorWidth: {
      control: {
        type: "range",
        min: 100,
        max: 500,
        step: 5,
      },

      description:
        "Width of the connector, only available when IcStepper is left-aligned.",
    },

    variant: {
      options: ["default", "compact"],

      control: {
        type: "inline-radio",
      },
    },

    heading: {
      control: "text",
    },

    type: {
      options: ["active", "completed", "disabled"],

      control: {
        type: "inline-radio",
      },
    },

    status: {
      options: ["optional", "required"],

      control: {
        type: "inline-radio",
      },
    },

    subheading: {
      control: "text",
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },
};
