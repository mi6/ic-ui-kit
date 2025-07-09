// IcDialogSinglePage displays a single dialog for the purpose of performance testing of the IcDialog component.
import React, { useState } from "react";
import {
  IcButton,
  IcDialog,
  IcTypography,
  IcTheme,
} from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcDialogSinglePage: React.FC<PageProps> = ({ theme }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(true);
  const handleDialogOpen = () => {
    console.log("Dialog opened");
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    console.log("Dialog closed");
    setOpenDialog(false);
  };
  const handleDialogConfirmed = () => {
    console.log("Dialog confirmed");
    setOpenDialog(false);
  };

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Dialog Page</h1>
        </IcTypography>
        <IcButton variant="primary" onClick={handleDialogOpen}>
          Launch auto opening dialog
        </IcButton>
        <IcDialog
          id="auto-opening-dialog"
          heading="This dialog opens automatically using the open prop"
          label="Auto opening dialog"
          open={openDialog}
          onIcDialogClosed={handleDialogClose}
          onIcDialogConfirmed={handleDialogConfirmed}
        >
          <IcTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </IcTypography>
        </IcDialog>
      </div>
    </IcTheme>
  );
};

export default IcDialogSinglePage;
