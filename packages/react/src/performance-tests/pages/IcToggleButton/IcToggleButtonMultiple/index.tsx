// IcToggleButtonMultiplePage displays multiple toggle button for the purpose of performance testing of the IcToggleButton component.
import React from "react";
import { IcTheme, IcToggleButton, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const ToggleButton = () => <IcToggleButton label="Toggle"></IcToggleButton>;

const IcToggleButtonMultiplePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Toggle Button Multiple Page</h1>
        </IcTypography>
        {Array.from({ length: 50 }).map((_, i) => (
          <ToggleButton key={i} />
        ))}
      </div>
    </IcTheme>
  );
};

export default IcToggleButtonMultiplePage;
