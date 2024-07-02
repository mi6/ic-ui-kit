import React from "react";
import { IcStepper, IcStep, IcButton } from "../../components";

const backBtn = document.querySelector(".back-btn-compact-stepper");
const nextBtn = document.querySelector(".next-btn-compact-stepper");
const steps = document.querySelectorAll("#standard-compact-stepper > ic-step");
const compactStepTypes = ["active", "completed", "disabled", "completed"];
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

export const FullWidth = () => {
  return (
    <div style={{ padding: "100px" }}>
      <IcStepper>
        <IcStep stepTitle="Create" stepType="completed"></IcStep>
        <IcStep stepTitle="Read" stepType="current"></IcStep>
        <IcStep stepTitle="Update" stepType="active"></IcStep>
        <IcStep stepTitle="Delete" stepType="disabled"></IcStep>
      </IcStepper>
    </div>
  );
};

export const Compact = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStepper variant="compact" id="standard-compact-stepper">
        <IcStep stepTitle="Create" />
        <IcStep stepTitle="Read" stepType="current" />
        <IcStep stepTitle="Update" stepStatus="optional" />
        <IcStep stepTitle="Delete" stepStatus="required" />
      </IcStepper>
      <IcButton
        class="back-btn-compact-stepper"
        style={{ marginRight: "var(--ic-space-lg)" }}
        onClick={() => {
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
};

export const LeftAligned = () => {
  return (
    <div style={{ padding: "100px" }}>
      <IcStepper aligned="left">
        <IcStep stepTitle="Create" stepType="completed" />
        <IcStep stepTitle="Read" stepType="current" />
        <IcStep stepTitle="Update" stepType="active" />
        <IcStep stepTitle="Delete" stepType="disabled" />
      </IcStepper>
    </div>
  );
};

export const CustomConnectorWidth = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStepper aligned="left" connectorWidth={200}>
        <IcStep stepTitle="First" />
        <IcStep
          stepTitle="Second with a very long title"
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
    </div>
  );
};

export const SmallConnectorWidth = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStepper aligned="left" connectorWidth={80}>
        <IcStep stepTitle="First" />
        <IcStep
          stepTitle="Second with a very long title"
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
    </div>
  );
};

export const CustomCompact = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStepper variant="compact" id="custom-compact-stepper">
        <IcStep stepTitle="First" />
        <IcStep
          stepTitle="Second with a very long title"
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
    </div>
  );
};

export const WithoutStepTitles = () => {
  return (
    <div style={{ padding: "100px" }}>
      <IcStepper>
        <IcStep stepType="completed" />
        <IcStep stepType="completed" />
        <IcStep stepType="current" />
        <IcStep />
      </IcStepper>
    </div>
  );
};

export const WithHiddenStepInformation = () => {
  return (
    <div style={{ padding: "100px" }}>
      <IcStepper hideStepInfo>
        <IcStep stepTitle="Create" stepType="completed" />
        <IcStep stepTitle="Read" stepType="current" />
        <IcStep stepTitle="Update" stepType="active" />
        <IcStep stepTitle="Delete" stepType="disabled" />
      </IcStepper>
    </div>
  );
};

export const Light = () => {
  return (
    <div style={{ padding: "100px", backgroundColor: "#2c2f34" }}>
      <IcStepper appearance="light">
        <IcStep stepTitle="Create" stepType="completed" />
        <IcStep stepTitle="Read" stepType="current" />
        <IcStep stepTitle="Update" stepType="active" />
        <IcStep stepTitle="Delete" stepType="disabled" />
      </IcStepper>
    </div>
  );
};
