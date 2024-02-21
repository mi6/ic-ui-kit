import React, { ReactElement } from "react";
import { IcToggleButton, IcToggleButtonGroup } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

export const ToggleGroupSingle = (): ReactElement => {
  return (
    <div style={{ margin: "5rem" }}>
      <IcToggleButtonGroup
        selectType="single"
        onIcToggleChecked={(ev) => console.log(ev)}
      >
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupMulti = (): ReactElement => {
  return (
    <div style={{ margin: "5rem" }}>
      <IcToggleButtonGroup
        selectType="multi"
        onIcChange={(ev) => console.log(ev)}
      >
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupSmall = (): ReactElement => {
  return (
    <div style={{ margin: "5rem" }}>
      <IcToggleButtonGroup size="small">
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupLarge = (): ReactElement => {
  return (
    <div style={{ margin: "5rem" }}>
      <IcToggleButtonGroup size="small">
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};
export const ToggleGroupLight = (): ReactElement => {
  return (
    <div style={{ margin: "5rem" }}>
      <IcToggleButtonGroup appearance="light">
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupDark = (): ReactElement => {
  return (
    <div style={{ margin: "5rem" }}>
      <IcToggleButtonGroup appearance="dark">
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupLoading = (): ReactElement => {
  return (
    <div style={{ margin: "5rem" }}>
      <IcToggleButtonGroup loading={true}>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupDisabled = (): ReactElement => {
  return (
    <div style={{ margin: "5rem" }}>
      <IcToggleButtonGroup disabled={true}>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupFullWidth = (): ReactElement => {
  return (
    <div style={{ margin: "1rem" }}>
      <IcToggleButtonGroup fullWidth={true}>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
        <IcToggleButton label="toggle"></IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupIconRight = (): ReactElement => {
  return (
    <div style={{ margin: "1rem" }}>
      <IcToggleButtonGroup iconPlacement="right">
        <IcToggleButton label="toggle" iconPlacement="right">
          {" "}
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
        </IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};

export const ToggleGroupIconLeft = (): ReactElement => {
  return (
    <div style={{ margin: "1rem" }}>
      <IcToggleButtonGroup iconPlacement="left">
        <IcToggleButton label="toggle" iconPlacement="left">
          {" "}
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
        </IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};
export const ToggleGroupIconTop = (): ReactElement => {
  return (
    <div style={{ margin: "1rem" }}>
      <IcToggleButtonGroup iconPlacement="top">
        <IcToggleButton label="toggle" iconPlacement="top">
          {" "}
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
          {" "}
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
        </IcToggleButton>
      </IcToggleButtonGroup>
    </div>
  );
};
