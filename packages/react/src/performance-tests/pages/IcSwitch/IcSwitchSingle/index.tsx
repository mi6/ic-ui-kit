// IcSwitchSinglePage displays a single switch for the purpose of performance testing of the IcSwitch component.
import React from "react";
import { IcSwitch, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcSwitchSinglePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Switch Page</h1>
        </IcTypography>
        <IcSwitch label="Label" />
      </div>
    </IcTheme>
  );
};

export default IcSwitchSinglePage;
