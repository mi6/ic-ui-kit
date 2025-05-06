// IcStepperPage displays a stepper component with multiple steps for performance testing of the IcStepper component.
import React, { useEffect } from "react";
import { IcStepper, IcStep, IcTheme, IcTypography } from "../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcStepperPage: React.FC<PageProps> = ({ theme }) => {
  useEffect(() => {
    const errorHandler = (e: any) => {
      if (
        e.message.includes(
          "ResizeObserver loop completed with undelivered notifications"
        )
      ) {
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.style.display = "none";
        }
      }
    };
    window.addEventListener("error", errorHandler);
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

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
