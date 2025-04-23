/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable sonarjs/no-duplicate-string */
import React, { useState } from "react";
import { SlottedSVG } from "../";
import {
  IcAlert,
  IcButton,
  IcCheckbox,
  IcCheckboxGroup,
  IcChip,
  IcDialog,
  IcLink,
  IcMenuGroup,
  IcMenuItem,
  IcPopoverMenu,
  IcRadioGroup,
  IcRadioOption,
  IcSearchBar,
  IcSelect,
  IcSwitch,
  IcTextField,
  IcTooltip,
  IcTypography,
} from "../components";

const options = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame" },
];

const showSmallDialog = () => {
  const dialog = document.querySelector("#small-dialog");
  dialog.open = true;
};

const showMediumDialog = () => {
  const dialog = document.querySelector("#medium-dialog");
  dialog.open = true;
};

const showLargeDialog = () => {
  const dialog = document.querySelector("#large-dialog");
  dialog.open = true;
};

const showDialog = () => {
  const dialog = document.querySelector("ic-dialog");
  dialog.open = true;
};

const showClosePreventedDialog = () => {
  const dialog = document.querySelector("ic-dialog");
  dialog.open = true;
};

const showScrollableDialog = () => {
  const dialog = document.querySelector("ic-dialog");
  dialog.open = true;
};

const showSelectDialog = () => {
  const dialog = document.querySelector("#select-dialog");
  dialog.open = true;
};

const showSearchBarDialog = () => {
  const dialog = document.querySelector("#search-bar-dialog");
  dialog.open = true;
};

const showTooltipDialog = () => {
  const dialog = document.querySelector("#tooltip-dialog");
  dialog.open = true;
};

const showLongTextDialog = () => {
  const dialog = document.querySelector("#long-text-select-dialog");
  dialog.open = true;
};

const dropdownItems = () => {
  return Array.from(Array(10).keys()).map((i) => {
    return {
      label: "Item " + i,
      value: "item-" + i,
    };
  });
};

const showShowHideContentDialog = () => {
  const dialog = document.querySelector("#show-hide-content-dialog");
  dialog.open = true;
};

const ShowHideContent = () => {
  const [showEl1, setShowEl1] = useState(false);
  const [showEl2, setShowEl2] = useState(false);
  const handleShow = (show) => {
    // Delay prevents false positive by ensuring the two slot updates happen at separate times
    setTimeout(() => {
      setShowEl1(show);
    }, 2000);
    setShowEl2(show);
  };
  return (
    <>
      <IcTypography>
        Demonstrates changes to slotted elements happening after first load.
        <br />
        The button which is a child of an existing slotted element will update after a 2s delay.
      </IcTypography>
      <br />
      <IcButton onClick={() => handleShow(true)}>Show</IcButton>
      <IcButton onClick={() => handleShow(false)}>Hide</IcButton>
      <div>
        {showEl1 && (
          <IcButton>Child of slotted element</IcButton>
        )}
      </div>
      {showEl2 && (
        <>
          <IcButton>Slotted element</IcButton>
          <IcTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </IcTypography>
        </>
      )}
    </>
  );
};

const showHiddenCloseButtonDialog = () => {
  const dialog = document.querySelector("#hidden-close-button-dialog");
  dialog.open = true;
};

const showAutoOpenCloseButtonDialog = () => {
  const dialog = document.querySelector("#auto-opening-dialog");
  dialog.open = true;
};

const defaultArgs = {
  closeOnBackdropClick: true,
  destructive: false,
  dismissLabel: "Dismiss",
  disableHeightConstraint: false,
  disableWidthConstraint: false,
  hideCloseButton: false,
  hideDefaultControls: false,
  heading: "This is a dialog",
  label: "Dialog",
  open: true,
  size: "medium",
  theme: "inherit",
};

export default {
  title: "Dialog",
  component: IcDialog,
};

export const Sizes = {
  render: () => (
    <>
      <IcButton variant="primary" onclick={showSmallDialog}>
      Launch small dialog
    </IcButton>
    <IcButton variant="primary" onclick={showMediumDialog}>
      Launch medium dialog
    </IcButton>
    <IcButton variant="primary" onclick={showLargeDialog}>
      Launch large dialog
    </IcButton>
    <IcDialog heading="This is a small dialog" label="Small" id="small-dialog">
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
    <IcDialog
      heading="This is a medium dialog"
      label="Medium"
      size="medium"
      id="medium-dialog"
    >
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
    <IcDialog
      heading="This is a large dialog"
      label="Large"
      size="large"
      id="large-dialog"
    >
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
    </>
  ),

  name: "Sizes",
};

export const SlottedContent = {
  render: () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const showPopover = () => setPopoverOpen(true);
    const handlePopoverClosed = () => setPopoverOpen(false);
    return(
    <>
      <IcButton variant="primary" onclick={showDialog}>
        Launch dialog
      </IcButton>
      <IcDialog disableWidthConstraint size="large">
        <div style={{
          display:"flex",
          flexDirection: "column",
          gap: "0.75rem"
        }}>
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
              This is some text and <IcLink href="/" inline>this is an inline link</IcLink> within the text.
            </IcTypography>
            <IcButton slot="action" variant="secondary">Button</IcButton>
          </IcAlert>
          <IcTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </IcTypography>
          <IcRadioGroup label="This is a label" name="1">
            <IcRadioOption
              value="valueName1"
              label="Unselected / Default" 
              additionalFieldDisplay="dynamic"       
            >
              <IcTextField
                slot="additional-field"
                placeholder="Placeholder"
                label="What's your favourite type of coffee?"
              >
              </IcTextField>
            </IcRadioOption>
            <IcRadioOption
              value="valueName2"
              label="Selected / Default"
              additionalFieldDisplay="static"
              selected
            >
              <IcTextField
                slot="additional-field"
                placeholder="Placeholder"
                label="What's your favourite type of coffee?"
              >
              </IcTextField>
            </IcRadioOption>
            <IcRadioOption
              value="valueName3"
              label="Unselected / Disabled"
              disabled
            ></IcRadioOption>
          </IcRadioGroup>
          <IcSearchBar label="What is your favourite coffee?"></IcSearchBar>
          <IcTextField label="What is your favourite coffee?" />
          <IcSelect label="What is your favourite coffee?" options={options} />
          <IcButton id="button-1" onclick={showPopover}>Show popover</IcButton>      
          <div>
            <IcPopoverMenu anchor="button-1" aria-label="popover" open={popoverOpen} onIcPopoverClosed={handlePopoverClosed}>
              <IcMenuItem label="Copy code" disabled="true"></IcMenuItem>
              <IcMenuGroup label="View">
                <IcMenuItem
                  label="Zoom in"
                  keyboard-shortcut-label="Cmd+"
                ></IcMenuItem>
              </IcMenuGroup>
              <IcMenuItem
                label="Actions"
                submenu-trigger-for="abc"
              ></IcMenuItem>
            </IcPopoverMenu>
            <IcPopoverMenu submenu-id="abc">
              <IcMenuItem
                label="Find"
                submenu-trigger-for="abc123"
              ></IcMenuItem>
            </IcPopoverMenu>
            <IcPopoverMenu submenu-id="abc123">
              <IcMenuItem
                disabled="true"
                label="Search the web"
                description="This will search the web to find the thing you are looking for."
              ></IcMenuItem>
              <IcMenuItem label="Find icons">
                <svg
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                  />
                </svg>
              </IcMenuItem>
            </IcPopoverMenu>
          </div>      
          <IcCheckboxGroup
            hideLabel
            label="confirm"
            name="confirm-checkbox"
          >
            <IcCheckbox label="Confirm" value="confirm" additionalFieldDisplay="static">
              <IcTextField
                slot="additional-field"
                placeholder="Placeholder"
                label="What's your favourite type of coffee?"
              />
            </IcCheckbox>
            <IcCheckbox additionalFieldDisplay="dynamic" value="disagree" label="Disagree">
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
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
              />
            </SlottedSVG>
          </IcChip>
          <IcSwitch label="Switch label"></IcSwitch>
        </div>
      </IcDialog>
    </>
  )},

  name: "Slotted content",
};

export const BackgroundClosePrevented = {
  render: () => (
    <>
      <IcButton variant="primary" onclick={showClosePreventedDialog}>
      Launch close prevented dialog
    </IcButton>
    <IcDialog
      heading="This dialog can't be closed by clicking the background"
      label="Background close prevented"
      closeOnBackdropClick="false"
    >
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
    </>
  ),

  name: "Background close prevented",
};

export const Scrollable = {
  render: () => (
    <>
      <IcButton variant="primary" onclick={showScrollableDialog}>
      Launch scrollable dialog
    </IcButton>
    <IcDialog heading="This dialog has overflowing content" label="Scrollable">
      <IcTypography>
        What is Lorem Ipsum?
        <br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
      </IcTypography>
      <IcSelect label="What is your favourite coffee?" options={options} />
      <IcTypography>
        <br />
        Why do we use it?
        <br />
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
  ),

  name: "Scrollable",
};

export const Popover = {
  render: () => (
    <>
      <IcButton variant="primary" onclick={showSelectDialog}>
      Launch Select dialog
    </IcButton>
    <IcButton variant="primary" onclick={showSearchBarDialog}>
      Launch Search dialog
    </IcButton>
    <IcButton variant="primary" onclick={showTooltipDialog}>
      Launch Tooltip dialog
    </IcButton>
    <IcButton variant="primary" onclick={showLongTextDialog}>
      Launch Long long text dialog
    </IcButton>
    <IcDialog heading="Select Dialog" id="select-dialog">
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
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
      <IcSelect
        label="What is your favourite coffee?"
        options={dropdownItems()}
      />
    </IcDialog>
    <IcDialog heading="Search" id="search-bar-dialog">
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
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
      <IcSearchBar
        label="What is your favourite coffee?"
        options={dropdownItems()}
      />
    </IcDialog>
    <IcDialog heading="Tooltip" id="tooltip-dialog">
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
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
      <IcTooltip
        label="This is a description of the button"
        target="test-button-default"
      >
        <button
          id="test-button-default"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Default
        </button>
      </IcTooltip>
      <IcButton
        variant="icon"
        size="small"
        aria-label="refresh"
        id="testbutton"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
      <IcChip label="Small" dismissible="true" size="small">
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
    </IcDialog>
    <IcDialog heading="Long Text Select" id="long-text-select-dialog">
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
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
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
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
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
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
      <IcSelect
        label="What is your favourite coffee?"
        options={dropdownItems()}
      />
    </IcDialog>
    </>
  ),

  name: "Popover",
};

export const ShowHideInteractiveElements = {
  render: () => (
    <>
      <IcButton onClick={showShowHideContentDialog}>Launch show / hide content dialog</IcButton>
      <IcDialog
        id="show-hide-content-dialog"
        heading="This dialog allows showing and hiding of content"
      >
        <ShowHideContent />
      </IcDialog>
    </>
  ),

  name: "Show / hide interactive elements",
}

export const HiddenCloseButton = {
  render: () => (
    <>
      <IcButton variant="primary" onClick={showHiddenCloseButtonDialog}>
      Launch dialog with hidden close button
    </IcButton>
    <IcDialog
      id="hidden-close-button-dialog"
      heading="This dialog does not have a close button"
      label="Hidden Close Button Dialog"
      hideCloseButton
    >
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
    </>
  ),

  name: "Hidden close button",
};

export const AutoOpening = {
  render: () => (
    <>
      <IcButton variant="primary" onClick={showAutoOpenCloseButtonDialog}>
      Launch auto opening dialog
    </IcButton>
    <IcDialog
      id="auto-opening-dialog"
      heading="This dialog opens automatically using the open prop"
      label="Auto opening dialog"
      open
    >
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
    </>
  ),

  name: "Auto Opening",
};

export const Playground = {
  render: (args) => (
    <IcDialog
      heading={args.heading}
      label={args.label}
      size={args.size}
      open={args.open}
      closeOnBackdropClick={args.closeOnBackdropClick}
      destructive={args.destructive}
      dismissLabel={args.dismissLabel}
      disableHeightConstraint={args.disableHeightConstraint}
      disableWidthConstraint={args.disableWidthConstraint}
      hideCloseButton={args.hideCloseButton}
      hideDefaultControls={args.hideDefaultControls}
      theme={args.theme}
      id="medium-dialog"
    >
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
  ),

  args: defaultArgs,

  argTypes: {
    size: {
      options: ["small", "medium", "large"],

      control: {
        type: "radio",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
