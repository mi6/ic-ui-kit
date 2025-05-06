import React from "react";
import { IcDialog, IcTypography, IcTheme } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcDialogAllOpenPage: React.FC<PageProps> = ({ theme }) => {
  const dialogs = Array.from({ length: 20 }, (_, index) => (
    <IcDialog
      key={index}
      open={true}
      label={`Default dialog ${index + 1}`}
      heading={`This is default dialog ${index + 1}`}
    >
      <IcTypography>
        This is default dialog {index + 1}. It is used to display information to
        the user.
      </IcTypography>
    </IcDialog>
  ));

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Dialog All Open Page</h1>
      </IcTypography>
      {dialogs}
    </IcTheme>
  );
};

export default IcDialogAllOpenPage;
