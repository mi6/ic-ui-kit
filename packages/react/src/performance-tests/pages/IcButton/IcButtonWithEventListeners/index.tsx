import React from "react";
import { IcButton, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcButtonEventListenersPage: React.FC<PageProps> = ({ theme }) => {
  const handleClick = () => console.log("Button clicked");
  const handleFocus = () => console.log("Button gained focus");
  const handleBlur = () => console.log("Button lost focus");

  const buttons = Array.from({ length: 100 }, (_, index) => (
    <IcButton
      key={index}
      onClick={handleClick}
      onIcFocus={handleFocus}
      onIcBlur={handleBlur}
    >
      Button {index + 1}
    </IcButton>
  ));

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Button With Event Listeners Page</h1>
      </IcTypography>
      {buttons}
    </IcTheme>
  );
};

export default IcButtonEventListenersPage;
