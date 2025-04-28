/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
  IcSearchBar,
  IcLink,
  IcRadioGroup,
  IcRadioOption,
  IcChip,
  IcSwitch,
  SlottedSVG,
} from "../..";
import { IcStatusVariants } from "@ukic/web-components";

export const SimpleDialog = () => {
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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

export const SlottedUpdatedContentDialog = () => {
  const [showBtn1, setShowBtn1] = useState(false);
  const [showBtn2, setShowBtn2] = useState(false);
  const dialogEl = useRef<HTMLIcDialogElement>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton id="display-btn-1-btn" onClick={() => setShowBtn1(true)}>
        Display button 1
      </IcButton>
      <IcButton id="display-btn-2-btn" onClick={() => setShowBtn2(true)}>
        Display button 2
      </IcButton>
      <IcButton id="display-dialog-btn" onClick={handleClick}>
        Display dialog
      </IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
      >
        <div>
          {showBtn1 && <IcButton id="test-button-1">Test button 1</IcButton>}
        </div>
        {showBtn2 && <IcButton id="test-button-2">Test button 2</IcButton>}
      </IcDialog>
    </>
  );
};

export const LotsOfSlottedContentDialog = () => {
  const options = [
    { label: "Cappuccino", value: "Cap" },
    { label: "Latte", value: "Lat" },
    { label: "Americano", value: "Ame" },
  ];
  return (
    <>
      <IcDialog disableWidthConstraint size="large" open>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
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
              <IcLink href="/" inline>
                this is an inline link
              </IcLink>{" "}
              within the text.
            </IcTypography>
            <IcButton slot="action" variant="secondary">
              Button
            </IcButton>
          </IcAlert>
          <IcTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </IcTypography>
          <IcRadioGroup label="This is a label" name="1">
            <IcRadioOption
              value="value1"
              label="Unselected / Default"
              additionalFieldDisplay="dynamic"
            >
              <IcTextField
                slot="additional-field"
                placeholder="Placeholder"
                label="What's your favourite type of coffee?"
              ></IcTextField>
            </IcRadioOption>
            <IcRadioOption
              value="value2"
              label="Selected / Default"
              additionalFieldDisplay="static"
              selected
            >
              <IcTextField
                slot="additional-field"
                placeholder="Placeholder"
                label="What's your favourite type of coffee?"
              ></IcTextField>
            </IcRadioOption>
            <IcRadioOption
              value="value3"
              label="Unselected / Disabled"
              disabled
            ></IcRadioOption>
          </IcRadioGroup>
          <IcSearchBar label="What is your favourite coffee?"></IcSearchBar>
          <IcTextField
            id="dialog-text-field"
            label="What is your favourite coffee?"
          />
          <IcSelect label="What is your favourite coffee?" options={options} />
          <IcCheckboxGroup hideLabel label="confirm" name="confirm-checkbox">
            <IcCheckbox
              label="Confirm"
              value="confirm"
              additionalFieldDisplay="static"
            >
              <IcTextField
                slot="additional-field"
                placeholder="Placeholder"
                label="What's your favourite type of coffee?"
              />
            </IcCheckbox>
            <IcCheckbox
              additionalFieldDisplay="dynamic"
              value="disagree"
              label="Disagree"
            >
              <IcTextField
                slot="additional-field"
                placeholder="Placeholder"
                label="What's your favourite type of coffee?"
              />
            </IcCheckbox>
            <IcCheckbox label="Disabled" value="disabled" disabled></IcCheckbox>
          </IcCheckboxGroup>
          <IcChip label="Default" dismissible="true">
            <SlottedSVG
              slot="icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" />
            </SlottedSVG>
          </IcChip>
          <IcSwitch label="Switch label"></IcSwitch>
        </div>
      </IcDialog>
    </>
  );
};

export const DialogAccordion = () => {
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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

export const DialogSearch = () => {
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
        <IcSearchBar
          label="What is your favourite coffee?"
          value="Americano"
        ></IcSearchBar>
        <IcTextField label="What is your favourite coffee?" />
      </IcDialog>
    </>
  );
};

export const NoHeightConstraintDialog = () => {
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
        hideDefaultControls
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
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
        hideDefaultControls
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
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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
  const dialogEl = useRef<HTMLIcDialogElement>(null);
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

export const ThemeDark = () => {
  return (
    <div style={{ backgroundColor: "#17191C" }}>
      <IcDialog
        heading="This is a default dialog"
        label="Dialog"
        theme="dark"
        open
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
      </IcDialog>
    </div>
  );
};
