// IcButtonMultiplePage displays multiple buttons for the purpose of performance testing of the IcButton component.
import React from "react";
import { IcButton, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcButtonMultiplePage: React.FC<PageProps> = ({ theme }) => {
  const buttons = Array.from({ length: 100 }, (_, index) => (
    <IcButton key={index} style={{ padding: "var(--ic-space-xs)" }}>
      Button {index + 1}
    </IcButton>
  ));

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Button Multiple Page</h1>
        </IcTypography>
        {buttons}
      </div>
    </IcTheme>
  );
};

export default IcButtonMultiplePage;
