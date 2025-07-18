import React, { useEffect, useState } from "react";
import { IcActionChip, IcTheme, IcTypography } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

export const UserIcon = (): JSX.Element => (
  <SlottedSVG
    slot="icon"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="account"
  >
    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" />
  </SlottedSVG>
);

const ActionChipExamples = () => (
  <>
    <IcActionChip label="Default">
      <UserIcon />
    </IcActionChip>
    <IcActionChip label="Outlined" variant="outlined">
      <UserIcon />
    </IcActionChip>
    <IcActionChip
      label="Non transparent"
      variant="outlined"
      transparentBackground={false}
    >
      <UserIcon />
    </IcActionChip>
    <IcActionChip label="Monochrome" monochrome>
      <UserIcon />
    </IcActionChip>
    <IcActionChip label="Outlined monochrome" variant="outlined" monochrome>
      <UserIcon />
    </IcActionChip>
    <IcActionChip
      label="Non transparent monochrome"
      variant="outlined"
      transparentBackground={false}
      monochrome
    >
      <UserIcon />
    </IcActionChip>
  </>
);

export const ThemeMonochromeExample = (): JSX.Element => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ backgroundColor: "white", padding: "8px" }}>
      <IcTheme theme="light">
        <IcTypography variant="body">Light</IcTypography>
        <ActionChipExamples />
      </IcTheme>
    </div>
    <div style={{ backgroundColor: "black", padding: "8px" }}>
      <IcTheme theme="dark">
        <IcTypography variant="body">Dark</IcTypography>
        <ActionChipExamples />
      </IcTheme>
    </div>
  </div>
);

export const HideIconExample = (): JSX.Element => {
  const [iconRendered, setIconRendered] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIconRendered(!iconRendered);
    }, 5000);
  }, [iconRendered]);

  return (
    <IcActionChip label="Default">{iconRendered && <UserIcon />}</IcActionChip>
  );
};
