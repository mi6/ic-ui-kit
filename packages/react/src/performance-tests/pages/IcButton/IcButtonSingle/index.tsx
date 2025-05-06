import React from "react";
import { IcButton, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcButtonPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Button Page</h1>
      </IcTypography>
      <IcButton>Button</IcButton>
    </IcTheme>
  );
};

export default IcButtonPage;
