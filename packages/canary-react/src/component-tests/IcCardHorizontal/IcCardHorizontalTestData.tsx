import React, { ReactElement } from "react";
import { IcCardHorizontal } from "../../components";
import { IcButton, IcStatusTag, IcTypography, SlottedSVG } from "@ukic/react";
import { IcThemeMode } from "../../../../web-components/dist/types/utils/types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const BasicCardHorizontal = (cardProps?: any): ReactElement => (
  <IcCardHorizontal heading="Card heading" {...cardProps} />
);

export const Icon = (): ReactElement => (
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

export const ImageLeft = (): ReactElement => (
  <SlottedSVG
    slot="image-left"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1600 900"
  >
    <rect fill="#ff7700" width="1600" height="1600" y="-350" />
    <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
    <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
    <polygon fill="#c50022" points="-60 900 398 662 816 900" />
    <polygon fill="#a3001b" points="337 900 398 662 816 900" />
    <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
    <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
    <polygon fill="#b80066" points="641 695 886 900 367 900" />
    <polygon fill="#960052" points="587 900 641 695 886 900" />
    <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
    <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
    <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
    <polygon fill="#880088" points="943 900 1210 900 971 687" />
  </SlottedSVG>
);

export const ImageRight = (): ReactElement => (
  <SlottedSVG
    slot="image-right"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1600 900"
  >
    <rect fill="#ff7700" width="1600" height="1600" y="-350" />
    <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
    <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
    <polygon fill="#c50022" points="-60 900 398 662 816 900" />
    <polygon fill="#a3001b" points="337 900 398 662 816 900" />
    <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
    <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
    <polygon fill="#b80066" points="641 695 886 900 367 900" />
    <polygon fill="#960052" points="587 900 641 695 886 900" />
    <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
    <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
    <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
    <polygon fill="#880088" points="943 900 1210 900 971 687" />
  </SlottedSVG>
);

export const InteractionButton = (): ReactElement => (
  <IcButton
    slot="interaction-button"
    variant="icon-tertiary"
    aria-label="Refresh"
  >
    <SlottedSVG
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-three-dots-vertical"
      viewBox="0 0 16 16"
    >
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
    </SlottedSVG>
  </IcButton>
);

export const Adornment = (): ReactElement => (
  <IcStatusTag slot="adornment" status="success" label="Adornment" />
);

export const Theme = (
  clickable?: boolean,
  disabled?: boolean
): ReactElement => {
  const ThemeCard = (theme: IcThemeMode = "inherit") => {
    return (
      <IcCardHorizontal
        heading="Americano order"
        message="Extras: Double espresso shot and oat milk."
        clickable={clickable}
        theme={theme}
        disabled={disabled}
      >
        <ImageLeft />
      </IcCardHorizontal>
    );
  };
  return (
    <div>
      <div style={{ margin: "16px" }}>
        <IcTypography style={{ marginBottom: "8px" }}>Inherit</IcTypography>
        {ThemeCard()}
      </div>
      <div style={{ margin: "16px" }}>
        <IcTypography style={{ marginBottom: "8px" }}>Light</IcTypography>
        {ThemeCard("light")}
      </div>
      <div style={{ backgroundColor: "#121212", margin: "16px" }}>
        <IcTypography style={{ color: "white", marginBottom: "8px" }}>
          Dark
        </IcTypography>
        {ThemeCard("dark")}
      </div>
    </div>
  );
};
