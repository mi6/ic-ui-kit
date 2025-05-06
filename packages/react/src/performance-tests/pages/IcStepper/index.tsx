import React from "react";
import { IcStepper, IcStep, IcTheme, IcTypography } from "../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcStepperPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Stepper Page</h1>
      </IcTypography>
      <IcStepper aligned="left" connectorWidth={200}>
        <IcStep heading="First" />
        <IcStep
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          type="current"
        />
        <IcStep heading="Third" type="disabled" />
        <IcStep
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        />
      </IcStepper>
    </IcTheme>
  );
};

export default IcStepperPage;
