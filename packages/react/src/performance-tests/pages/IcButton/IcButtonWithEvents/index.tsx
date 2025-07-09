// IcButtonMultiplePage displays multiple buttons with events for the purpose of performance testing of the IcButton component.
import React from "react";
import { IcButton, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcButtonEventsPage: React.FC<PageProps> = ({ theme }) => {
  const handleClick = () => console.log("Button clicked");
  const handleFocus = () => console.log("Button gained focus");
  const handleBlur = () => console.log("Button lost focus");

  const buttons = Array.from({ length: 100 }, (_, index) => (
    <IcButton
      key={index}
      style={{ padding: "var(--ic-space-xs)" }}
      onClick={handleClick}
      onIcFocus={handleFocus}
      onIcBlur={handleBlur}
    >
      Button {index + 1}
    </IcButton>
  ));

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Button With Event Listeners Page</h1>
        </IcTypography>
        {buttons}
      </div>
    </IcTheme>
  );
};

export default IcButtonEventsPage;
