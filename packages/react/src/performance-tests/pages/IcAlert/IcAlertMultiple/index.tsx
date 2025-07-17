// IcAlertMultiplePage displays multiple alerts for the purpose of performance testing of the IcAlert component.
import React from "react";
import { IcAlert, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const AlertVariants = () => (
  <>
    <IcAlert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible
    />
    <IcAlert
      variant="info"
      heading="Info"
      message="This alert is for displaying information"
      dismissible
    />
    <IcAlert
      variant="error"
      heading="Error"
      message="This alert is for displaying errors"
      dismissible
    />
    <IcAlert
      variant="warning"
      heading="Warning"
      message="This alert is for displaying warnings"
      dismissible
    />
    <IcAlert
      variant="success"
      heading="Success"
      message="This alert is for displaying success messages"
      dismissible
    />
    <IcAlert
      variant="ai"
      heading="Artificial Intelligence (AI)"
      message="This alert is for displaying AI-related messages"
      dismissible
    />
  </>
);

const IcAlertMultiplePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Alert Multiple Page</h1>
        </IcTypography>
        {Array.from({ length: 15 }).map((_, i) => (
          <AlertVariants key={i} />
        ))}
      </div>
    </IcTheme>
  );
};

export default IcAlertMultiplePage;
