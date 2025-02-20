/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { IcStep, IcStepper, IcButton } from "../components";

const defaultArgs = {
  aligned: "full-width",
  connectorWidth: 100,
  appearance: "default",
  variant: "default",
  hideStepInfo: false,
  stepTitle: "Editable step",
  stepType: "current",
  stepStatus: "optional",
  stepSubtitle: "Optional subtitle",
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
      <IcStep stepTitle="Create" stepType="completed" />
      <IcStep stepTitle="Read" stepType="current" />
      <IcStep stepTitle="Update" stepType="active" />
      <IcStep stepTitle="Delete" stepType="disabled" />
    </IcStepper>
  ),

  name: "Full-width stepper",
};

export const LeftAlignedStepper = {
  render: () => (
    <IcStepper aligned="left">
      <IcStep stepTitle="Create" stepType="completed" />
      <IcStep stepTitle="Read" stepType="current" />
      <IcStep stepTitle="Update" stepType="active" />
      <IcStep stepTitle="Delete" stepType="disabled" />
    </IcStepper>
  ),

  name: "Left-aligned stepper",
};

export const WithHiddenStepInformation = {
  render: () => (
    <IcStepper hideStepInfo>
      <IcStep stepTitle="Create" stepType="completed" />
      <IcStep stepTitle="Read" stepType="current" />
      <IcStep stepTitle="Update" stepType="active" />
      <IcStep stepTitle="Delete" stepType="disabled" />
    </IcStepper>
  ),

  name: "With hidden step information",
};

export const WithoutStepTitles = {
  render: () => (
    <IcStepper>
      <IcStep stepType="completed" />
      <IcStep stepType="completed" />
      <IcStep stepType="current" />
      <IcStep />
    </IcStepper>
  ),

  name: "Without step titles",
};

export const CustomStepper = {
  render: () => (
    <IcStepper>
      <IcStep stepTitle="First" />
      <IcStep
        stepTitle="Second With a Very Long Title"
        stepSubtitle="Optional subtitle that is long and should wrap"
        stepType="current"
      />
      <IcStep stepTitle="Third" stepType="disabled" />
      <IcStep
        stepTitle="Fourth title that is long and should wrap"
        stepSubtitle="Optional Subtitle"
        stepType="completed"
      />
    </IcStepper>
  ),

  name: "Custom stepper",
};

export const Light = {
  render: () => (
    <div
      style={{
        backgroundColor: "#2c2f34",
      }}
    >
      <IcStepper appearance="light">
        <IcStep stepTitle="Create" stepType="completed" />
        <IcStep stepTitle="Read" stepType="current" />
        <IcStep stepTitle="Update" stepType="active" />
        <IcStep stepTitle="Delete" stepType="disabled" />
      </IcStepper>
    </div>
  ),

  name: "Light",
};

export const CustomConnectorWidth = {
  render: () => (
    <IcStepper aligned="left" connectorWidth="200">
      <IcStep stepTitle="First" />
      <IcStep
        stepTitle="Second With a Very Long Title"
        stepSubtitle="Optional subtitle that is long and should wrap"
        stepType="current"
      />
      <IcStep stepTitle="Third" stepType="disabled" />
      <IcStep
        stepTitle="Fourth title that is long and should wrap"
        stepSubtitle="Optional Subtitle"
        stepType="completed"
      />
    </IcStepper>
  ),

  name: "Custom connector width",
};

export const CompactStepper = {
  render: () => (
    <IcStepper variant="compact" id="standard-compact-stepper">
      <IcStep stepTitle="Create" />
      <IcStep stepTitle="Read" stepType="current" />
      <IcStep stepTitle="Update" stepStatus="optional" />
      <IcStep stepTitle="Delete" stepStatus="required" />
    </IcStepper>
  ),

  name: "Compact stepper",
};

export const CompactStepperLight = {
  render: () => (
    <>
      <div style={{ backgroundColor: "#2c2f34" }}>
      <IcStepper
        variant="compact"
        id="standard-compact-stepper"
        appearance="light"
      >
        <IcStep stepTitle="Create" />
        <IcStep stepTitle="Read" stepType="current" />
        <IcStep stepTitle="Update" stepStatus="optional" />
        <IcStep stepTitle="Delete" stepStatus="required" />
      </IcStepper>
    </div>
    <CompactButtons/>
    </>
  ),

  name: "Compact stepper light",
};

export const CustomCompactStepper = {
  render: () => (
    <>
      <IcStepper variant="compact" id="custom-compact-stepper">
      <IcStep stepTitle="First" />
      <IcStep
        stepTitle="Second With a Very Long Title"
        stepSubtitle="Optional subtitle that is long and should wrap"
        stepType="current"
      />
      <IcStep stepTitle="Third" stepType="disabled" />
      <IcStep
        stepTitle="Fourth title that is long and should wrap"
        stepSubtitle="Optional Subtitle"
        stepType="completed"
      />
      <IcStep
        stepTitle="Fifth and final step"
        stepSubtitle="Optional Subtitle"
        stepStatus="optional"
        stepType="completed"
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
      }}
    >
      Next
    </IcButton>
    </>
  ),

  name: "Custom compact stepper",
};

export const Playground = {
  render: (args) => (
    <div
      style={{
        backgroundColor: args.appearance === "light" ? "#585858" : null,
        padding: "1rem",
      }}
    >
      <IcStepper
        aligned={args.aligned}
        appearance={args.appearance}
        variant={args.variant}
        connectorWidth={args.connectorWidth}
        hideStepInfo={args.hideStepInfo}
        id={
          args.variant === "compact"
            ? "standard-compact-stepper"
            : "default-stepper"
        }
      >
        <IcStep stepTitle="Create" stepType="completed" />
        <IcStep
          stepTitle={args.stepTitle}
          stepSubtitle={args.stepSubtitle}
          stepType={args.stepType}
          stepStatus={args.stepStatus}
        />
        <IcStep stepTitle="Update" stepType="active" />
        <IcStep stepTitle="Delete" stepType="disabled" />
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

    appearance: {
      options: ["default", "light"],

      control: {
        type: "inline-radio",
      },
    },

    variant: {
      options: ["default", "compact"],

      control: {
        type: "inline-radio",
      },
    },

    stepTitle: {
      control: "text",
    },

    stepType: {
      options: ["active", "completed", "disabled"],

      control: {
        type: "inline-radio",
      },
    },

    stepStatus: {
      options: ["optional", "required"],

      control: {
        type: "inline-radio",
      },
    },

    stepSubtitle: {
      control: "text",
    },
  },
};
