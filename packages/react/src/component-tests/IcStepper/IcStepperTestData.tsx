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
        <IcStep heading="Create" type="completed"></IcStep>
        <IcStep heading="Read" type="current"></IcStep>
        <IcStep heading="Update" type="active"></IcStep>
        <IcStep heading="Delete" type="disabled"></IcStep>
      </IcStepper>
    </div>
  );
};

export const Compact = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStepper variant="compact" id="standard-compact-stepper">
        <IcStep heading="Create" />
        <IcStep heading="Read" type="current" />
        <IcStep heading="Update" status="optional" />
        <IcStep heading="Delete" status="required" />
      </IcStepper>
      <IcButton
        class="back-btn-compact-stepper"
        style={{ marginRight: "var(--ic-space-lg)" }}
        onClick={() => {
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
};

export const LeftAligned = () => {
  return (
    <div style={{ padding: "100px" }}>
      <IcStepper aligned="left">
        <IcStep heading="Create" type="completed" />
        <IcStep heading="Read" type="current" />
        <IcStep heading="Update" type="active" />
        <IcStep heading="Delete" type="disabled" />
      </IcStepper>
    </div>
  );
};

export const CustomConnectorWidth = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStepper aligned="left" connectorWidth={200}>
        <IcStep heading="First" />
        <IcStep
          heading="Second with a very long title"
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
    </div>
  );
};

export const SmallConnectorWidth = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStepper aligned="left" connectorWidth={80}>
        <IcStep heading="First" />
        <IcStep
          heading="Second with a very long title"
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
    </div>
  );
};

export const CustomCompact = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStepper variant="compact" id="custom-compact-stepper">
        <IcStep heading="First" />
        <IcStep
          heading="Second with a very long title"
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
    </div>
  );
};

export const WithoutHeadings = () => {
  return (
    <div style={{ padding: "100px" }}>
      <IcStepper>
        <IcStep type="completed" />
        <IcStep type="completed" />
        <IcStep type="current" />
        <IcStep />
      </IcStepper>
    </div>
  );
};

export const WithHiddenStepInformation = () => {
  return (
    <div style={{ padding: "100px" }}>
      <IcStepper hideStepInfo>
        <IcStep heading="Create" type="completed" />
        <IcStep heading="Read" type="current" />
        <IcStep heading="Update" type="active" />
        <IcStep heading="Delete" type="disabled" />
      </IcStepper>
    </div>
  );
};

export const Light = () => {
  return (
    <div style={{ padding: "100px", backgroundColor: "#2c2f34" }}>
      <IcStepper appearance="light">
        <IcStep heading="Create" type="completed" />
        <IcStep heading="Read" type="current" />
        <IcStep heading="Update" type="active" />
        <IcStep heading="Delete" type="disabled" />
      </IcStepper>
    </div>
  );
};
