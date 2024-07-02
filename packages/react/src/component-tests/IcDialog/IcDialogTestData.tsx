/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from "react";
import {
  IcDialog,
  IcButton,
  IcTypography,
  IcTextField,
  IcCheckbox,
  IcCheckboxGroup,
  IcSelect,
  IcAlert,
  IcAccordion,
  IcAccordionGroup,
} from "../..";
import { IcStatusVariants } from "@ukic/web-components";

export const SimpleDialog = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display dialog</IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
      </IcDialog>
    </>
  );
};

export const SlottedContentDialog = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  const options = [
    { label: "Cappuccino", value: "Cap" },
    { label: "Latte", value: "Lat" },
    { label: "Americano", value: "Ame" },
  ];
  return (
    <>
      <IcButton id="slotted-dialog-btn" onClick={handleClick}>
        Display dialog
      </IcButton>
      <IcDialog ref={dialogEl}>
        <>
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
          ></IcAlert>
          <IcTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </IcTypography>
          <IcSelect label="What is your favourite coffee?" options={options} />
          <IcTextField label="What is your favourite coffee?" />
          <IcCheckboxGroup
            style={{ marginTop: "8px" }}
            hideLabel
            label="confirm"
            name="confirm-checkbox"
          >
            <IcCheckbox label="Confirm" value="confirm" />
          </IcCheckboxGroup>
          <IcButton id="test-button">Test button</IcButton>
        </>
      </IcDialog>
    </>
  );
};

export const DialogAccordion = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton id="slotted-dialog-btn" onClick={handleClick}>
        Display dialog
      </IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
        <IcAccordion heading="Accordion 1">Text</IcAccordion>
        <IcTextField label="What is your favourite coffee?" />
      </IcDialog>
    </>
  );
};

export const DialogAccordionGroup = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton id="slotted-dialog-btn" onClick={handleClick}>
        Display dialog
      </IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
      >
        <IcAccordionGroup label="Title">
          <IcAccordion heading="Accordion 1">Text</IcAccordion>
          <IcAccordion heading="Accordion 2">Text 2</IcAccordion>
          <IcAccordion heading="Accordion 3">Text 3</IcAccordion>
        </IcAccordionGroup>
      </IcDialog>
    </>
  );
};

export const DialogAccordionGroupSingleExpansion = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton id="slotted-dialog-btn" onClick={handleClick}>
        Display dialog
      </IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
      >
        <IcAccordionGroup label="Title" singleExpansion>
          <IcAccordion heading="Accordion 1">Text</IcAccordion>
          <IcAccordion heading="Accordion 2">Text 2</IcAccordion>
          <IcAccordion heading="Accordion 3">Text 3</IcAccordion>
        </IcAccordionGroup>
      </IcDialog>
    </>
  );
};

export const NoHeightConstraintDialog = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  const options = [
    { label: "Cappuccino", value: "Cap" },
    { label: "Latte", value: "Lat" },
    { label: "Americano", value: "Ame" },
    { label: "Espresso", value: "Esp" },
    { label: "Iced Coffee", value: "Ice" },
    { label: "Cafe au lait", value: "Caf" },
    { label: "Frappe", value: "Fra" },
    { label: "Mocha", value: "Moc" },
    { label: "Flat white", value: "Fla" },
  ];
  return (
    <>
      <IcButton id="slotted-dialog-btn" onClick={handleClick}>
        Display dialog
      </IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
        disableHeightConstraint
      >
        <>
          <IcTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </IcTypography>
          <IcSelect label="What is your favourite coffee?" options={options} />
        </>
      </IcDialog>
    </>
  );
};

export const NoBackgroundClickDialog = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display dialog</IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
        closeOnBackdropClick={false}
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
      </IcDialog>
    </>
  );
};

export const ScrollableDialog = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  const options = [
    { label: "Cappuccino", value: "Cap" },
    { label: "Latte", value: "Lat" },
    { label: "Americano", value: "Ame" },
  ];
  return (
    <>
      <IcButton onClick={handleClick}>Display dialog</IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
        <IcSelect label="What is your favourite coffee?" options={options} />
        <br />
        <IcTypography>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
          <br />
          Why do we use it?
          <br />
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </IcTypography>
      </IcDialog>
    </>
  );
};

export const AlertDialog = (variant: IcStatusVariants) => {
  return (
    <>
      <IcDialog heading="This is a default dialog" label="Dialog" open>
        <IcAlert
          variant={variant}
          heading={`This is the ${variant} alert`}
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          titleAbove
        />
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
      </IcDialog>
    </>
  );
};

export const SizeDialog = (size: "small" | "large") => {
  return (
    <>
      <IcDialog
        heading="This is a default dialog"
        label="Dialog"
        open
        size={size}
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
      </IcDialog>
    </>
  );
};

export const NoWidthConstraintDialog = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton id="full-width-dialog-btn" onClick={handleClick}>
        Full Width Text Dialog
      </IcButton>
      <IcDialog
        ref={dialogEl}
        heading="Full Width Text"
        label="Test"
        id="full-width-dialog"
        size="large"
        disableWidthConstraint
      >
        <>
          <IcTypography>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </IcTypography>
        </>
      </IcDialog>
    </>
  );
};

export const NoButtonDialog = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display dialog</IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
        buttons={false}
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
      </IcDialog>
    </>
  );
};

export const DestructiveButtonDialog = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display dialog</IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
        destructive={true}
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
      </IcDialog>
    </>
  );
};

export const CustomButtonDialog = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton id="custom-dialog-btn" onClick={handleClick}>
        Display dialog
      </IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
        <IcButton variant="tertiary" slot="dialog-controls">
          Go back
        </IcButton>
        <IcButton variant="primary" slot="dialog-controls">
          Move forward
        </IcButton>
      </IcDialog>
    </>
  );
};

export const HideCloseDialog = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display dialog</IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
        hideCloseButton={true}
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
      </IcDialog>
    </>
  );
};

export const DynamicDialog = () => {
  const dialogEl = useRef<any>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  const [show, setShow] = useState(false);
  const handleShow = (show: boolean) => {
    setShow(show);
  };
  return (
    <>
      <IcButton id="dynamic-dialog-btn" onClick={handleClick}>
        Display dialog
      </IcButton>
      <IcDialog
        heading="This is a dialog"
        label="This a dialog with dynamic content"
        ref={dialogEl}
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
        <IcButton onClick={() => handleShow(true)} id="show-btn">
          Show
        </IcButton>
        <IcButton onClick={() => handleShow(false)} id="hide-btn">
          Hide
        </IcButton>
        {show && (
          <>
            <IcButton id="tab-btn">Tab Here</IcButton>
            <IcTypography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </IcTypography>
          </>
        )}
      </IcDialog>
    </>
  );
};
