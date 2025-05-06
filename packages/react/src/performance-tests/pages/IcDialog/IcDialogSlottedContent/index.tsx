import React, { useState } from "react";
import {
  IcButton,
  IcDialog,
  IcTypography,
  IcAlert,
  IcLink,
  IcTheme,
} from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcDialogSlottedContentPage: React.FC<PageProps> = ({ theme }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(true);
  const handleDialogOpen = () => {
    console.log("Dialog opened");
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    console.log("Dialog closed");
    setOpenDialog(false);
  };
  const handleAddToBasket = () => {
    console.log("Added to basket");
    setOpenDialog(false);
  };

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Dialog With Slotted Content Page</h1>
      </IcTypography>
      <IcButton variant="primary" onClick={handleDialogOpen}>
        Launch dialog
      </IcButton>
      <IcDialog
        id="auto-opening-dialog"
        disableWidthConstraint
        hideDefaultControls
        size="large"
        open={openDialog}
        onIcDialogClosed={handleDialogClose}
      >
        <IcTypography slot="heading" variant="h4">
          This is a slotted heading
        </IcTypography>
        <IcTypography slot="label" variant="label">
          Slotted label
        </IcTypography>
        <IcAlert
          variant="info"
          heading="Info"
          message="This alert is for displaying information"
          slot="alert"
        >
          <IcTypography slot="message">
            This is some text and{" "}
            <IcLink href="/">this is an inline link</IcLink> within the text.
          </IcTypography>
          <IcButton slot="action" variant="secondary">
            Button
          </IcButton>
        </IcAlert>
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
        <IcButton
          slot="dialog-controls"
          variant="secondary"
          onClick={handleDialogClose}
        >
          Go back
        </IcButton>
        <IcButton slot="dialog-controls" onClick={handleAddToBasket}>
          Add to basket
        </IcButton>
      </IcDialog>
    </IcTheme>
  );
};

export default IcDialogSlottedContentPage;
