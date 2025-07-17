// IcToggleButtonVariantsPage displays toggle button variants for the purpose of performance testing of the IcToggleButton component.
import React from "react";
import {
  IcToggleButton,
  IcTheme,
  IcTypography,
  IcBadge,
} from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const reusableIcon = (
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

const IcToggleButtonVariantsPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Toggle Button Variants Page</h1>
        </IcTypography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: "1rem",
            margin: "1rem",
            padding: "10px",
          }}
        >
          <IcToggleButton label="Default" />
          <IcToggleButton label="Checked" checked={true} />
          <IcToggleButton label="With icon">{reusableIcon}</IcToggleButton>
          <IcToggleButton label="Disabled" disabled={true} />
          <IcToggleButton label="Small" size="small" />
          <IcToggleButton label="Large" size="large" />
          <IcToggleButton label="With badge">
            <IcBadge label="1" slot="badge" variant="success" />
          </IcToggleButton>
          <IcToggleButton label="Monochrome" monochrome />
          <IcToggleButton label="Full width" fullWidth />
          <IcToggleButton label="Loading" loading />
          <IcToggleButton label="Toggle" outline={false} />
          <IcToggleButton variant="icon" accessibleLabel="Refresh the page">
            {reusableIcon}
          </IcToggleButton>
          <IcToggleButton
            variant="icon"
            accessibleLabel="Refresh the page"
            disabled
          >
            {reusableIcon}
          </IcToggleButton>
        </div>
      </div>
    </IcTheme>
  );
};

export default IcToggleButtonVariantsPage;
