import React from "react";
import {
  IcButton,
  IcDialog,
  IcTypography,
  IcTheme,
} from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const DialogLauncher = ({
  id,
  heading,
  label,
  size,
  content,
  buttonText,
  closeOnBackdropClick = true,
  open = false,
  destructive = false,
  disableWidthConstraint = false,
  disableHeightConstraint = false,
  hideCloseButton = false,
  onOpened,
  onConfirmed,
  onCancelled,
  onClosed,
}: {
  id: string;
  heading: string;
  label: string;
  size?: "small" | "medium" | "large";
  content: React.ReactNode;
  buttonText: string;
  closeOnBackdropClick?: boolean;
  open?: boolean;
  destructive?: boolean;
  disableWidthConstraint?: boolean;
  disableHeightConstraint?: boolean;
  hideCloseButton?: boolean;
  onOpened?: () => void;
  onConfirmed?: () => void;
  onCancelled?: () => void;
  onClosed?: () => void;
}) => {
  const showDialog = () => {
    const dialog = document.querySelector(`#${id}`) as HTMLDialogElement;
    if (dialog) {
      dialog.open = true;
    }
  };

  return (
    <>
      <IcButton onClick={showDialog}>{buttonText}</IcButton>
      <IcDialog
        id={id}
        heading={heading}
        label={label}
        size={size}
        closeOnBackdropClick={closeOnBackdropClick}
        open={open}
        destructive={destructive}
        disableWidthConstraint={disableWidthConstraint}
        disableHeightConstraint={disableHeightConstraint}
        hideCloseButton={hideCloseButton}
        onIcDialogOpened={onOpened}
        onIcDialogConfirmed={onConfirmed}
        onIcDialogCancelled={onCancelled}
        onIcDialogClosed={onClosed}
      >
        <IcTypography>{content}</IcTypography>
      </IcDialog>
    </>
  );
};

const IcDialogMultiplePage: React.FC<PageProps> = ({ theme }) => {
  const handleDialogOpened = () => console.log("Dialog opened");
  const handleDialogClosed = () => console.log("Dialog closed");
  const handleDialogCancelled = () => console.log("Dialog cancelled");
  const handleDialogConfirmed = () => console.log("Dialog confirmed");

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Dialog Multiple Page</h1>
      </IcTypography>
      <DialogLauncher
        id="auto-opening-dialog"
        heading="This dialog opens automatically using the open prop"
        label="Auto opening dialog"
        buttonText="Launch auto opening dialog"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        open={true}
        onOpened={handleDialogOpened}
        onConfirmed={handleDialogConfirmed}
        onCancelled={handleDialogCancelled}
        onClosed={handleDialogClosed}
      />
      <DialogLauncher
        id="small-dialog"
        heading="This is a small dialog"
        label="Small"
        size="small"
        buttonText="Launch small dialog"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onOpened={handleDialogOpened}
        onConfirmed={handleDialogConfirmed}
        onCancelled={handleDialogCancelled}
        onClosed={handleDialogClosed}
      />
      <DialogLauncher
        id="medium-dialog"
        heading="This is a medium dialog"
        label="Medium"
        size="medium"
        buttonText="Launch medium dialog"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onOpened={handleDialogOpened}
        onConfirmed={handleDialogConfirmed}
        onCancelled={handleDialogCancelled}
        onClosed={handleDialogClosed}
      />
      <DialogLauncher
        id="large-dialog"
        heading="This is a large dialog"
        label="Large"
        size="large"
        buttonText="Launch large dialog"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onOpened={handleDialogOpened}
        onConfirmed={handleDialogConfirmed}
        onCancelled={handleDialogCancelled}
        onClosed={handleDialogClosed}
      />
      <DialogLauncher
        id="scrollable-dialog"
        heading="This dialog has overflowing content"
        label="Scrollable"
        buttonText="Launch scrollable dialog"
        content={
          <>
            What is Lorem Ipsum?
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <br />
            <br />
            Why do we use it?
            <br />
            <br />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </>
        }
        onOpened={handleDialogOpened}
        onConfirmed={handleDialogConfirmed}
        onCancelled={handleDialogCancelled}
        onClosed={handleDialogClosed}
      />
      <DialogLauncher
        id="background-close-prevented-dialog"
        heading="This dialog can't be closed by clicking the background"
        label="Background close prevented"
        buttonText="Launch background close prevented dialog"
        content="You are about to add 'Americano' to your basket. Are you sure you want to continue?"
        closeOnBackdropClick={false}
        onOpened={handleDialogOpened}
        onConfirmed={handleDialogConfirmed}
        onCancelled={handleDialogCancelled}
        onClosed={handleDialogClosed}
      />
      <DialogLauncher
        id="default-dialog"
        heading="This is a default dialog"
        label="Default dialog"
        buttonText="Launch default dialog"
        content="Dialog content goes here."
        onOpened={handleDialogOpened}
        onConfirmed={handleDialogConfirmed}
        onCancelled={handleDialogCancelled}
        onClosed={handleDialogClosed}
      />
      <DialogLauncher
        id="destructive-dialog"
        heading="This is a destructive dialog"
        label="Destructive dialog"
        buttonText="Launch destructive dialog"
        content="Dialog content goes here."
        destructive={true}
        onOpened={handleDialogOpened}
        onConfirmed={handleDialogConfirmed}
        onCancelled={handleDialogCancelled}
        onClosed={handleDialogClosed}
      />
      <DialogLauncher
        id="height-width-constraint-disabled-dialog"
        heading="This is a dialog where the height and width constraints are disabled"
        label="Height/width dialog"
        buttonText="Launch height/width constraint disabled dialog"
        content={
          <>
            What is Lorem Ipsum?
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <br />
            <br />
            Why do we use it?
            <br />
            <br />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </>
        }
        disableWidthConstraint={true}
        disableHeightConstraint={true}
        size={"large"}
        onOpened={handleDialogOpened}
        onConfirmed={handleDialogConfirmed}
        onCancelled={handleDialogCancelled}
        onClosed={handleDialogClosed}
      />
      <DialogLauncher
        id="no-close-button-dialog"
        heading="This is a dialog with close button hidden"
        label="No close button dialog"
        buttonText="Launch no close button dialog"
        content="Dialog content goes here."
        hideCloseButton={true}
        onOpened={handleDialogOpened}
        onConfirmed={handleDialogConfirmed}
        onCancelled={handleDialogCancelled}
        onClosed={handleDialogClosed}
      />
    </IcTheme>
  );
};

export default IcDialogMultiplePage;
