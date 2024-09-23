import React, { ReactElement } from "react";
import { IcToggleButton, IcToggleButtonGroup } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

const ReusableSlottedIcon = (): ReactElement => (
  <SlottedSVG
    slot="icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
  </SlottedSVG>
);

export const ToggleGroupSingle = (): ReactElement => {
  return (
    <div style={{ margin: "10px  0 0 10px" }}>
      <IcToggleButtonGroup
        selectType="single"
        onIcChange={(ev: Event) => console.log(ev)}
      >
        <IcToggleButton label="First toggle"></IcToggleButton>
        <IcToggleButton label="Second toggle"></IcToggleButton>
        <IcToggleButton label="Third toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupMulti = (): ReactElement => {
  return (
    <div style={{ margin: "10px  0 0 10px" }}>
      <IcToggleButtonGroup
        selectType="multi"
        onIcChange={(ev: Event) => console.log(ev)}
      >
        <IcToggleButton label="First toggle"></IcToggleButton>
        <IcToggleButton label="Second toggle"></IcToggleButton>
        <IcToggleButton label="Third toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupSmall = (): ReactElement => {
  return (
    <div style={{ margin: "10px  0 0 10px" }}>
      <IcToggleButtonGroup size="small">
        <IcToggleButton label="First toggle"></IcToggleButton>
        <IcToggleButton label="Second toggle"></IcToggleButton>
        <IcToggleButton label="Third toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupLarge = (): ReactElement => {
  return (
    <div style={{ margin: "10px  0 0 10px" }}>
      <IcToggleButtonGroup size="large">
        <IcToggleButton label="First toggle"></IcToggleButton>
        <IcToggleButton label="Second toggle"></IcToggleButton>
        <IcToggleButton label="Third toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};
export const ToggleGroupLight = (): ReactElement => {
  return (
    <div style={{ margin: "10px  0 0 10px" }}>
      <IcToggleButtonGroup appearance="light">
        <IcToggleButton label="First toggle"></IcToggleButton>
        <IcToggleButton label="Second toggle"></IcToggleButton>
        <IcToggleButton label="Third toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupDark = (): ReactElement => {
  return (
    <div style={{ margin: "10px  0 0 10px" }}>
      <IcToggleButtonGroup appearance="dark">
        <IcToggleButton label="First toggle"></IcToggleButton>
        <IcToggleButton label="Second toggle"></IcToggleButton>
        <IcToggleButton label="Third toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupLoading = (): ReactElement => {
  return (
    <div style={{ margin: "10px  0 0 10px" }}>
      <IcToggleButtonGroup loading={true}>
        <IcToggleButton label="First toggle"></IcToggleButton>
        <IcToggleButton label="Second toggle"></IcToggleButton>
        <IcToggleButton label="Third toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupLoadingLight = (): ReactElement => {
  return (
    <div style={{ margin: "10px  0 0 10px" }}>
      <IcToggleButtonGroup loading={true} appearance="light">
        <IcToggleButton
          label="First toggle"
          appearance="light"
        ></IcToggleButton>
        <IcToggleButton
          label="Second toggle"
          appearance="light"
        ></IcToggleButton>
        <IcToggleButton
          label="Third toggle"
          appearance="light"
        ></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupLoadingDark = (): ReactElement => {
  return (
    <div style={{ margin: "10px  0 0 10px" }}>
      <IcToggleButtonGroup loading={true} appearance="dark">
        <IcToggleButton label="First toggle" appearance="dark"></IcToggleButton>
        <IcToggleButton
          label="Second toggle"
          appearance="dark"
        ></IcToggleButton>
        <IcToggleButton label="Third toggle" appearance="dark"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupDisabled = (): ReactElement => {
  return (
    <div style={{ margin: "10px  0 0 10px" }}>
      <IcToggleButtonGroup disabled={true}>
        <IcToggleButton label="First toggle"></IcToggleButton>
        <IcToggleButton label="Second toggle"></IcToggleButton>
        <IcToggleButton label="Third toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupFullWidth = (): ReactElement => {
  return (
    <div style={{ margin: "1rem" }}>
      <IcToggleButtonGroup fullWidth={true}>
        <IcToggleButton label="First toggle"></IcToggleButton>
        <IcToggleButton label="Second toggle"></IcToggleButton>
        <IcToggleButton label="Third toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupCustomWidth = (): ReactElement => {
  return (
    <div style={{ margin: "1rem" }}>
      <IcToggleButtonGroup style={{ width: "50%" }}>
        <IcToggleButton label="First toggle"></IcToggleButton>
        <IcToggleButton label="Second toggle"></IcToggleButton>
        <IcToggleButton label="Third toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};
export const ToggleGroupLargeLabel = (): ReactElement => {
  return (
    <div style={{ margin: "1rem" }}>
      <IcToggleButtonGroup style={{ width: "50%" }}>
        <IcToggleButton label="First toggle"></IcToggleButton>
        <IcToggleButton label="Second toggle with a very very long label"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupIconRight = (): ReactElement => {
  return (
    <div style={{ margin: "1rem" }}>
      <IcToggleButtonGroup iconPlacement="right">
        <IcToggleButton label="First toggle" iconPlacement="right">
          <ReusableSlottedIcon />
        </IcToggleButton>
        <IcToggleButton label="Second toggle" iconPlacement="right">
          <ReusableSlottedIcon />
        </IcToggleButton>
        <IcToggleButton label="Third toggle" iconPlacement="right">
          <ReusableSlottedIcon />
        </IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupIconLeft = (): ReactElement => {
  return (
    <div style={{ margin: "1rem" }}>
      <IcToggleButtonGroup iconPlacement="left">
        <IcToggleButton label="First toggle">
          <ReusableSlottedIcon />
        </IcToggleButton>
        <IcToggleButton label="Second toggle">
          <ReusableSlottedIcon />
        </IcToggleButton>
        <IcToggleButton label="Third toggle">
          <ReusableSlottedIcon />
        </IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};
export const ToggleGroupIconTop = (): ReactElement => {
  return (
    <div style={{ margin: "1rem" }}>
      <IcToggleButtonGroup iconPlacement="top">
        <IcToggleButton label="First toggle" iconPlacement="top">
          <ReusableSlottedIcon />
        </IcToggleButton>
        <IcToggleButton label="Second toggle" iconPlacement="top">
          <ReusableSlottedIcon />
        </IcToggleButton>
        <IcToggleButton label="Third toggle" iconPlacement="top">
          <ReusableSlottedIcon />
        </IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupIconOnly = (): ReactElement => {
  return (
    <div style={{ margin: "1rem" }}>
      <IcToggleButtonGroup variant="icon" accessibleLabel="toggle button">
        <IcToggleButton label="toggle">
          <ReusableSlottedIcon />
        </IcToggleButton>
        <IcToggleButton label="toggle">
          <ReusableSlottedIcon />
        </IcToggleButton>
        <IcToggleButton label="toggle">
          <ReusableSlottedIcon />
        </IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};
