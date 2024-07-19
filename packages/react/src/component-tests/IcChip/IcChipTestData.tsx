import { IcBadge, IcButton, IcChip } from "../../";
import React, { ReactElement, useRef } from "react";

const ReusableSlottedIcon = (): ReactElement => (
  <svg
    slot="icon"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="account"
  >
    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" />
  </svg>
);

export const SwitchColour = () => {
  const chipEl = useRef<any>();
  return (
    <div style={{ padding: "8px", gap: "8px" }}>
      <IcChip label="Default" customColor="#F8C8DC" ref={chipEl} />
      <IcButton onClick={() => (chipEl.current.customColor = "#00008B")}>
        Switch colour
      </IcButton>
    </div>
  );
};

export const CustomColour = () => {
  return (
    <div style={{ padding: "8px", gap: "8px" }}>
      <IcChip label="Default" customColor="#F8C8DC">
        <ReusableSlottedIcon />
      </IcChip>
      <IcChip label="Default" variant="outlined" customColor="#F8C8DC">
        <ReusableSlottedIcon />
      </IcChip>
      <IcChip label="Default" customColor="#00008B">
        <ReusableSlottedIcon />
      </IcChip>
    </div>
  );
};

export const WhiteBackground = () => {
  return (
    <div
      style={{
        backgroundColor: "#2c2f34",
        padding: "6px 10px",
        width: "fit-content",
      }}
    >
      <IcChip
        label="White background"
        variant="outlined"
        transparentBackground="false"
      >
        <ReusableSlottedIcon />
      </IcChip>
      <IcChip
        label="White background"
        dismissible
        variant="outlined"
        transparentBackground="false"
      >
        <ReusableSlottedIcon />
      </IcChip>
    </div>
  );
};

export const LongLabel = () => {
  return (
    <div style={{ padding: "8px", gap: "8px", maxWidth: "150px" }}>
      <IcChip
        id="small-chip"
        label="Really long name for a chip that should wrap"
        dismissible
        size="small"
      >
        <ReusableSlottedIcon />
      </IcChip>
      <IcChip
        id="default-chip"
        label="Really long name for a chip that should wrap"
        dismissible
      >
        <ReusableSlottedIcon />
      </IcChip>
      <IcChip
        id="large-chip"
        label="Really long name for a chip that should wrap"
        dismissible
        size="large"
      >
        <ReusableSlottedIcon />
      </IcChip>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: "8px" }}>
      <IcChip label="Default" disabled />
      <IcChip label="Default" variant="outlined" disabled />
      <IcChip label="Default" dismissible disabled />
      <IcChip label="Default" dismissible variant="outlined" disabled />
    </div>
  );
};

export const Dismissible = () => {
  return (
    <div style={{ padding: "8px" }}>
      <IcChip id="small-chip" label="Small" size="small" dismissible />
      <IcChip id="default-chip" label="Default" dismissible />
      <IcChip id="large-chip" label="Large" size="large" dismissible />
      <IcChip
        id="small-chip"
        label="Small"
        size="small"
        variant="outlined"
        dismissible
      />
      <IcChip
        id="default-chip"
        label="Default"
        variant="outlined"
        dismissible
      />
      <IcChip
        id="large-chip"
        label="Large"
        size="large"
        variant="outlined"
        dismissible
      />
    </div>
  );
};

export const WithIcon = () => {
  return (
    <div style={{ padding: "8px" }}>
      <IcChip label="Default">
        <ReusableSlottedIcon />
      </IcChip>
    </div>
  );
};

export const WithBadgeSlot = () => {
  return (
    <div style={{ padding: "8px" }}>
      <IcChip label="Default">
        <IcBadge textLabel="1" slot="badge" variant="success" position="near" />
      </IcChip>
      <IcChip label="Default" variant="outlined">
        <IcBadge textLabel="1" slot="badge" variant="success" position="near" />
      </IcChip>
    </div>
  );
};

export const TransparentBackground = () => {
  return (
    <div
      style={{
        padding: "6px 10px",
        width: "fit-content",
      }}
    >
      <IcChip label="White background" variant="outlined" transparentBackground>
        <ReusableSlottedIcon />
      </IcChip>
      <IcChip
        label="White background"
        dismissible
        variant="outlined"
        transparentBackground
      >
        <ReusableSlottedIcon />
      </IcChip>
    </div>
  );
};
