// IcSwitchMultiplePage displays multiple switches for the purpose of performance testing of the IcSwitch component.
import React from "react";
import { IcSwitch, IcTheme, IcTypography } from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const SwitchVariants = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "1rem",
      padding: "10px",
    }}
  >
    <IcSwitch label="Label" />
    <IcSwitch label="Label" helperText="This is some helper text" />
    <IcSwitch label="Label" helperText="This is some helper text" hideLabel />
    <IcSwitch
      label="Label"
      helperText="This is some helper text"
      size="small"
    />
    <IcSwitch label="Label" disabled />
    <IcSwitch label="Label" checked />
    <IcSwitch label="Label" checked disabled />
    <IcSwitch
      label="Coffee preferences"
      helperText="Choose your coffee preferences"
    >
      <SlottedSVG
        slot="right-adornment"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
      </SlottedSVG>
    </IcSwitch>
  </div>
);

const IcSwitchMultiplePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Switch Multiple Page</h1>
        </IcTypography>
        {Array.from({ length: 10 }, (_, i) => (
          <SwitchVariants key={i} />
        ))}
      </div>
    </IcTheme>
  );
};

export default IcSwitchMultiplePage;
