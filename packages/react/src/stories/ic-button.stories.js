/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useRef } from "react";
import { IcButton, IcPopoverMenu, IcMenuItem, IcBadge } from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";
import { iconProps } from "../component-tests/IcButton/IcButtonTestData";
import { mdiAccountGroup } from "@mdi/js";

const defaultArgs = {
  message: "Custom Button",
  disabled: false,
  loading: false,
  appearance: "default",
  size: "default",
  variant: "secondary",
  fullWidth: false,
  hasIcon: true,
  hasBadge: false,
};

const PopoverDropdown = () => {
  const buttonEl = useRef();
  const popoverEl = useRef();
  const handleClick = () => {
    popoverEl.current.open = buttonEl.current.dropdownExpanded;
  };
  const handleClose = () => {
    buttonEl.current.dropdownExpanded = popoverEl.current.open;
  };
  return (
    <div>
      <IcButton
        id="popover-button"
        dropdown
        variant="primary"
        onClick={() => handleClick()}
        ref={buttonEl}
      >
        Button
      </IcButton>
      <IcPopoverMenu
        anchor="popover-button"
        ariaLabel="popover"
        onIcPopoverClosed={() => handleClose()}
        ref={popoverEl}
      >
        <IcMenuItem label="Copy code"></IcMenuItem>
        <IcMenuItem label="Paste code"></IcMenuItem>
        <IcMenuItem label="Actions"></IcMenuItem>
      </IcPopoverMenu>
    </div>
  );
};

const IconBtnGroup = (iconProps) => {
  return (
    <>
      <h1>{iconProps.title}</h1>
      <div
        style={{
          backgroundColor:
            iconProps.appearance === "light" ? "#2c2f34" : "#fff",
          display: "flex",
          gap: "0.5rem",
          marginBottom: "1rem",
          width: "fit-content",
          padding: iconProps.appearance === "light" ? "6px 10px" : "none",
        }}
      >
        <IcButton
          variant="icon-primary"
          size={iconProps.size}
          appearance={iconProps.appearance}
          loading={iconProps.loading}
          disabled={iconProps.disabled}
          aria-label="refresh"
          id="testButton"
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
        <IcButton
          variant="icon-secondary"
          size={iconProps.size}
          appearance={iconProps.appearance}
          loading={iconProps.loading}
          disabled={iconProps.disabled}
          aria-label="refresh"
          id="testButton"
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
        <IcButton
          variant="icon-tertiary"
          size={iconProps.size}
          appearance={iconProps.appearance}
          loading={iconProps.loading}
          disabled={iconProps.disabled}
          aria-label="refresh"
          id="testButton"
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
        <IcButton
          variant="icon-destructive"
          size={iconProps.size}
          appearance={iconProps.appearance}
          loading={iconProps.loading}
          disabled={iconProps.disabled}
          aria-label="refresh"
          id="testButton"
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
      </div>
    </>
  );
};

const FileUpload = () => {
  function updateFileList(fileArray) {
    const fileList = [];
    Array.from(fileArray).forEach((file) => {
      fileList.push(file.name);
    });
    return fileList.join(", ");
  }

  return (
    <div>
      <IcButton
        variant="primary"
        fileUpload="true"
        accept=".doc, text/plain, .json"
        onClick={() =>
          document.addEventListener("icFileSelection", (event) =>
            alert(`Files Selected: ${updateFileList(event.detail)}`),
          )
        }
      >
        Upload File
      </IcButton>
    </div>
  );
};

export default {
  title: "Button",
  component: IcButton,
};

export const Primary = {
  render: () => (
    <>
      <IcButton variant="primary" id="mybuttonid" onClick={() => alert("test")}>
      Button
    </IcButton>
    <IcButton variant="primary" disabled>
      Button
    </IcButton>
    <IcButton variant="primary" loading>
      Button
    </IcButton>
    <IcButton variant="primary" appearance="dark" onClick={() => alert("test")}>
      Button
    </IcButton>
    <IcButton variant="primary" disabled appearance="dark">
      Button
    </IcButton>
    <IcButton variant="primary" loading appearance="dark">
      Button
    </IcButton>
    <div
      style={{
        backgroundColor: "#2c2f34",
        display: "inline-block",
        padding: "6px 10px",
      }}
    >
      <IcButton
        variant="primary"
        appearance="light"
        onClick={() => alert("test")}
      >
        Button
      </IcButton>
      <IcButton variant="primary" disabled appearance="light">
        Button
      </IcButton>
      <IcButton variant="primary" loading appearance="light">
        Button
      </IcButton>
    </div>
    </>
  ),

  name: "Primary",
};

export const Router = {
  render: () => (
    <IcButton>
      <a slot="router-item" href="/">
        Slotted link
      </a>
    </IcButton>
  ),

  name: "Router",
};

export const Secondary = {
  render: () => (
    <>
      <IcButton variant="secondary">Button</IcButton>
    <IcButton variant="secondary" disabled>
      Button
    </IcButton>
    <IcButton variant="secondary" loading>
      Button
    </IcButton>
    <IcButton variant="secondary" transparentBackground="false">
      Button
    </IcButton>
    <IcButton variant="secondary" appearance="dark">
      Button
    </IcButton>
    <IcButton variant="secondary" disabled appearance="dark">
      Button
    </IcButton>
    <IcButton variant="secondary" loading appearance="dark">
      Button
    </IcButton>
    <IcButton
      variant="secondary"
      transparentBackground="false"
      appearance="dark"
    >
      Button
    </IcButton>
    <div
      style={{
        backgroundColor: "#2c2f34",
        display: "inline-block",
        padding: "6px 10px",
      }}
    >
      <IcButton variant="secondary" appearance="light">
        Button
      </IcButton>
      <IcButton variant="secondary" disabled appearance="light">
        Button
      </IcButton>
      <IcButton variant="secondary" loading appearance="light">
        Button
      </IcButton>
      <IcButton variant="secondary" transparentBackground="false">
        Button
      </IcButton>
    </div>
    </>
  ),
  name: "Secondary",
};

export const Tertiary = {
  render: () => (
    <>
      <IcButton variant="tertiary">Button</IcButton>
    <IcButton variant="tertiary" disabled>
      Button
    </IcButton>
    <IcButton variant="tertiary" loading>
      Button
    </IcButton>
    <IcButton variant="tertiary" appearance="dark">
      Button
    </IcButton>
    <IcButton variant="tertiary" disabled appearance="dark">
      Button
    </IcButton>
    <IcButton variant="tertiary" loading appearance="dark">
      Button
    </IcButton>
    <div
      style={{
        backgroundColor: "#2c2f34",
        display: "inline-block",
        padding: "6px 10px",
      }}
    >
      <IcButton variant="tertiary" appearance="light">
        Button
      </IcButton>
      <IcButton variant="tertiary" disabled appearance="light">
        Button
      </IcButton>
      <IcButton variant="tertiary" loading appearance="light">
        Button
      </IcButton>
    </div>
    </>
  ),
  name: "Tertiary",
};

export const Destructive = {
  render: () => (
    <>
      <IcButton variant="destructive">Button</IcButton>
      <IcButton variant="destructive" disabled>
        Button
      </IcButton>
      <IcButton variant="destructive" loading>
        Button
      </IcButton>
    </>
  ),
  name: "Destructive",
};

export const WithIcon = {
  render: () => (
    <>
    <div>
      <IcButton variant="primary">
        Button
        <svg
          slot="left-icon"
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
      <IcButton variant="secondary">
        Button
        <svg
          slot="left-icon"
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
      <IcButton variant="tertiary">
        Button
        <svg
          slot="left-icon"
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
      <IcButton appearance="dark">
        Button
        <svg
          slot="left-icon"
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
      <IcButton variant="destructive">
        Button
        <svg
          slot="left-icon"
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
      <IcButton variant="destructive" disabled>
        Button
        <svg
          slot="left-icon"
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
      <div
        style={{
          backgroundColor: "#2c2f34",
          display: "inline-block",
          padding: "6px 10px",
        }}
      >
        <IcButton variant="primary" appearance="light">
          Button
          <svg
            slot="left-icon"
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
        <IcButton variant="secondary" appearance="light">
          Button
          <svg
            slot="left-icon"
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
        <IcButton variant="tertiary" appearance="light">
          Button
          <svg
            slot="left-icon"
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
      </div>
    </div>
    <div>
      <IcButton variant="primary">
        Button
        <svg
          slot="right-icon"
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
      <IcButton variant="secondary">
        Button
        <svg
          slot="right-icon"
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
      <IcButton variant="tertiary">
        Button
        <svg
          slot="right-icon"
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
      <IcButton appearance="dark">
        Button
        <svg
          slot="right-icon"
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
      <IcButton variant="destructive">
        Button
        <svg
          slot="right-icon"
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
      <IcButton variant="destructive" disabled>
        Button
        <svg
          slot="right-icon"
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
      <div
        style={{
          backgroundColor: "#2c2f34",
          display: "inline-block",
          padding: "6px 10px",
        }}
      >
        <IcButton variant="primary" appearance="light">
          Button
          <svg
            slot="right-icon"
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
        <IcButton variant="secondary" appearance="light">
          Button
          <svg
            slot="right-icon"
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
        <IcButton variant="tertiary" appearance="light">
          Button
          <svg
            slot="right-icon"
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
      </div>
    </div>
    </>
  ),

  name: "With icon",
};

export const Dropdown = {
  render: () => (
    <div>
      <div
        style={{
          padding: "6px",
        }}
      >
        <IcButton dropdown="true" variant="primary">
          Button
        </IcButton>
        <IcButton dropdown="true" variant="primary">
          Button
          <svg
            slot="left-icon"
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
        <IcButton dropdown="true" variant="secondary">
          Button
        </IcButton>
        <IcButton dropdown="true" variant="tertiary">
          Button
        </IcButton>
      </div>
      <div
        style={{
          padding: "6px",
        }}
      >
        <IcButton dropdown="true" disabled="true" variant="primary">
          Button
        </IcButton>
        <IcButton dropdown="true" disabled="true" variant="primary">
          Button
          <svg
            slot="left-icon"
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
        <IcButton dropdown="true" disabled="true" variant="secondary">
          Button
        </IcButton>
        <IcButton dropdown="true" disabled="true" variant="tertiary">
          Button
        </IcButton>
      </div>
      <div
        style={{
          padding: "6px",
        }}
      >
        <IcButton dropdown="true" variant="primary" appearance="dark">
          Button
        </IcButton>
        <IcButton dropdown="true" appearance="dark" variant="primary">
          Button
          <svg
            slot="left-icon"
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
        <IcButton dropdown="true" variant="secondary" appearance="dark">
          Button
        </IcButton>
        <IcButton dropdown="true" variant="tertiary" appearance="dark">
          Button
        </IcButton>
      </div>
      <div
        style={{
          backgroundColor: "#2c2f34",
          padding: "6px 10px",
          width: "fit-content",
        }}
      >
        <IcButton dropdown="true" variant="primary" appearance="light">
          Button
        </IcButton>
        <IcButton dropdown="true" appearance="light" variant="primary">
          Button
          <svg
            slot="left-icon"
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
        <IcButton dropdown="true" variant="secondary" appearance="light">
          Button
        </IcButton>
        <IcButton
          dropdown="true"
          variant="tertiary"
          appearance="light"
          id="mybuttonid"
          onclick="alert('test')"
        >
          Button
        </IcButton>
      </div>
      <div
        style={{
          padding: "6px",
        }}
      >
        <IcButton dropdown="true" variant="primary" size="small">
          Button
        </IcButton>
        <IcButton dropdown="true" size="small" variant="primary">
          Button
          <svg
            slot="left-icon"
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
        <IcButton dropdown="true" variant="secondary" size="small">
          Button
        </IcButton>
        <IcButton dropdown="true" variant="tertiary" size="small">
          Button
        </IcButton>
      </div>
      <div
        style={{
          padding: "6px",
        }}
      >
        <IcButton dropdown="true" variant="primary" size="large">
          Button
        </IcButton>
        <IcButton dropdown="true" size="large" variant="primary">
          Button
          <svg
            slot="left-icon"
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
        <IcButton dropdown="true" variant="secondary" size="large">
          Button
        </IcButton>
        <IcButton dropdown="true" variant="tertiary" size="large">
          Button
        </IcButton>
      </div>
    </div>
  ),

  name: "Dropdown",
};

export const DropdownExample = {
  render: () => <PopoverDropdown />,
  name: "Dropdown example",
};

export const Size = {
  render: () => (
    <>
      <IcButton variant="primary" size="small">
      Small
    </IcButton>
    <IcButton variant="primary">Default</IcButton>
    <IcButton variant="primary" size="large">
      Large
    </IcButton>
    <IcButton variant="primary" size="small">
      Small
      <svg
        slot="left-icon"
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
    <IcButton variant="primary">
      Default
      <svg
        slot="left-icon"
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
    <IcButton variant="primary" size="large">
      Large
      <svg
        slot="left-icon"
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
    </>
  ),

  name: "Size",
};

export const WithMdiIcons = {
  render: () => (
    <>
      <IcButton variant="primary" size="small">
      Small
      <SlottedSVG slot="left-icon" path={mdiAccountGroup} />
    </IcButton>
    <IcButton variant="primary">
      Default
      <SlottedSVG slot="left-icon" path={mdiAccountGroup} />
    </IcButton>
    <IcButton variant="primary" size="large">
      Large
      <SlottedSVG slot="left-icon" path={mdiAccountGroup} />
    </IcButton>
    </>
  ),

  name: "With mdi icons",
};

export const FullWidth = {
  render: () => (
    <>
      <IcButton variant="primary" fullWidth="true">
      Button
      <svg
        slot="left-icon"
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
    <IcButton variant="secondary" fullWidth="true">
      Button
      <svg
        slot="left-icon"
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
    <IcButton variant="tertiary" fullWidth="true">
      Button
      <svg
        slot="left-icon"
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
    <IcButton appearance="dark" fullWidth="true">
      Button
      <svg
        slot="left-icon"
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
    <IcButton variant="destructive" fullWidth="true">
      Button
      <svg
        slot="left-icon"
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
    <IcButton variant="destructive" disabled fullWidth="true">
      Button
      <svg
        slot="left-icon"
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
    <div style={{ backgroundColor: "#2c2f34", padding: "6px 10px" }}>
      <IcButton variant="primary" appearance="light" fullWidth="true">
        Button
        <svg
          slot="left-icon"
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
      <IcButton variant="secondary" appearance="light" fullWidth="true">
        Button
        <svg
          slot="left-icon"
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
      <IcButton variant="tertiary" appearance="light" fullWidth="true">
        Button
        <svg
          slot="left-icon"
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
    </div>
    </>
  ),

  name: "Full width",
};

export const IconOnly = {
  render: () => (
    <>
      <IcButton variant="icon" size="small" aria-label="refresh">
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
    <IcButton variant="icon" aria-label="refresh">
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
    <IcButton variant="icon" size="large" aria-label="refresh">
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
    <IcButton variant="icon" size="large" aria-label="refresh" disabled>
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
    <IcButton
      variant="icon"
      appearance="dark"
      size="large"
      aria-label="refresh"
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
    <div
      style={{
        backgroundColor: "#2c2f34",
        display: "inline-block",
        padding: "6px 10px",
      }}
    >
      <IcButton
        variant="icon"
        size="large"
        aria-label="refresh"
        appearance="light"
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
      <IcButton
        variant="icon"
        size="large"
        aria-label="refresh"
        appearance="light"
        disabled
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
    </div>
    </>
  ),

  name: "Icon only",
};

export const IconVariants = {
  render: () => [
    IconBtnGroup(iconProps.iconDefault),
    IconBtnGroup(iconProps.iconSmall),
    IconBtnGroup(iconProps.iconLarge),
    IconBtnGroup(iconProps.iconLoading),
    IconBtnGroup(iconProps.iconDisabled),
    IconBtnGroup(iconProps.iconLight),
    IconBtnGroup(iconProps.iconLightLoading),
    IconBtnGroup(iconProps.iconDark),
    IconBtnGroup(iconProps.iconDarkLoading),
  ],

  name: "Icon variants",
};

export const Playground = {
  render: (args) => (
    <IcButton
      disabled={args.disabled}
      variant={args.variant}
      size={args.size}
      loading={args.loading}
      appearance={args.appearance}
      fullWidth={args.fullWidth}
    >
      {args.message}
    </IcButton>
  ),

  args: defaultArgs,

  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", "destructive"],

      control: {
        type: "select",
      },
    },

    size: {
      options: ["default", "large", "small"],

      control: {
        type: "inline-radio",
      },
    },

    appearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "inline-radio",
      },
    },

    fullWidth: {
      control: {
        type: "boolean",
      },
    },
  },

  name: "Playground",
};

export const PlaygroundWithIcon = {
  render: (args) => (
    <IcButton
      disabled={args.disabled}
      variant={args.variant}
      size={args.size}
      loading={args.loading}
      appearance={args.appearance}
      fullWidth={args.fullWidth}
    >
      {args.message}
      {args.hasIcon && (
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      )}
      {args.hasBadge && <IcBadge textLabel="9+" slot="badge" variant="info" />}
    </IcButton>
  ),

  args: {
    ...defaultArgs,
  },

  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", "destructive"],

      control: {
        type: "select",
      },
    },

    size: {
      options: ["default", "large", "small"],

      control: {
        type: "inline-radio",
      },
    },

    appearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "inline-radio",
      },
    },

    fullWidth: {
      control: {
        type: "boolean",
      },
    },

    hasIcon: {
      control: {
        type: "boolean",
      },
    },

    hasBadge: {
      control: {
        type: "boolean",
      },
    },
  },

  name: "Playground with icon",
};

export const FileUpload_ = {
  render: () => <FileUpload />,
  name: "File Upload",
};
