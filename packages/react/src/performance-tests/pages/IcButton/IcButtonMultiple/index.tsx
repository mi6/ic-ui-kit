import React from "react";
import { IcButton, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcButtonMultiplePage: React.FC<PageProps> = ({ theme }) => {
  const buttons = Array.from({ length: 100 }, (_, index) => (
    <IcButton key={index}>Button {index + 1}</IcButton>
  ));

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Button Multiple Page</h1>
      </IcTypography>
      {buttons}
    </IcTheme>
  );
};

export default IcButtonMultiplePage;
