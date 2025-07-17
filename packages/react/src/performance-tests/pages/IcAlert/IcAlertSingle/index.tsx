// IcAlertSinglePage displays an alert for the purpose of performance testing of the IcAlert component.
import React from "react";
import {
  IcAlert,
  IcButton,
  IcTheme,
  IcTypography,
} from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcAlertSinglePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Alert Page</h1>
        </IcTypography>
        <IcAlert
          heading="Neutral"
          message="This alert is for displaying miscellaneous messages"
          dismissible
        >
          <IcButton slot="action" variant="secondary" monochrome={true}>
            Button
          </IcButton>
        </IcAlert>
      </div>
    </IcTheme>
  );
};

export default IcAlertSinglePage;
