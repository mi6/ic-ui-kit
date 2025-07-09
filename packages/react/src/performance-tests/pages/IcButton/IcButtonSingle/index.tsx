// IcButtonSinglePage displays a single button for the purpose of performance testing of the IcButton component.
import React from "react";
import { IcButton, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcButtonSinglePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Button Page</h1>
        </IcTypography>
        <IcButton>Button</IcButton>
      </div>
    </IcTheme>
  );
};

export default IcButtonSinglePage;
