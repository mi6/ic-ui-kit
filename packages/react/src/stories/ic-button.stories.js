/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { mdiAccountGroup } from "@mdi/js";
import React, { useRef } from "react";
import { iconProps } from "../component-tests/IcButton/IcButtonTestData";
import {
  IcButton,
  IcMenuItem,
  IcPopoverMenu,
  IcTypography,
  IcBadge
} from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

const defaultArgs = {
  message: "Custom Button",
  disabled: false,
  loading: false,
  theme: "inherit",
  size: "medium",
  variant: "secondary",
  fullWidth: false,
  monochrome: false,
  dropdown: false,
  transparentBackground: true,
  iconPlacement: "left-icon",
};

const customSVG = () => {
  return (
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
  );
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
          backgroundColor: iconProps.theme === "light" ? "var(--ic-color-page-background-dark)" : "var(--ic-color-page-background-light)",
          display: "flex",
          gap: "0.5rem",
          marginBottom: "1rem",
          width: "fit-content",
          padding: iconProps.theme === "light" ? "6px 10px" : "none",
        }}
      >
        <IcButton
          variant="icon-primary"
          size={iconProps.size}
          theme={iconProps.theme}
          loading={iconProps.loading}
          disabled={iconProps.disabled}
          monochrome={iconProps.monochrome}
          aria-label="refresh"
          id="testButton"
        >
          {customSVG()}
        </IcButton>
        <IcButton
          variant="icon-secondary"
          size={iconProps.size}
          theme={iconProps.theme}
          loading={iconProps.loading}
          disabled={iconProps.disabled}
          monochrome={iconProps.monochrome}
          aria-label="refresh"
          id="testButton"
        >
          {customSVG()}
        </IcButton>
        <IcButton
          variant="icon-tertiary"
          size={iconProps.size}
          theme={iconProps.theme}
          loading={iconProps.loading}
          disabled={iconProps.disabled}
          monochrome={iconProps.monochrome}
          aria-label="refresh"
          id="testButton"
        >
          {customSVG()}
        </IcButton>
        <IcButton
          variant="icon-destructive"
          size={iconProps.size}
          theme={iconProps.theme}
          loading={iconProps.loading}
          disabled={iconProps.disabled}
          monochrome={iconProps.monochrome}
          aria-label="refresh"
          id="testButton"
        >
          {customSVG()}
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
      <div
        style={{display: "flex", flexDirection: "row", width: "fit-content", backgroundColor: "#ececec"}}
      >
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large"> Light theme </IcTypography>
          <div>
            <IcButton variant="primary" theme="light" id="mybuttonid">
              Primary
            </IcButton>
            <IcButton variant="primary" theme="light" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large">
            Light theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="primary" monochrome theme="light"> Monochrome </IcButton>
            <IcButton variant="primary" disabled monochrome theme="light">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
      <div
        style={{display: "flex", flexDirection: "row", marginTop: "1rem", backgroundColor: "#474A48", borderRadius: "5px", width: "fit-content"}}
      >
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large" style={{color: "white"}}>
            Dark theme
          </IcTypography>
          <div>
            <IcButton variant="primary" theme="dark" id="mybuttonid">
              Primary
            </IcButton>
            <IcButton variant="primary" theme="dark" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large" style={{color: "white"}}>
            Dark theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="primary" monochrome theme="dark">
              Monochrome
            </IcButton>
            <IcButton variant="primary" disabled monochrome theme="dark">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
    </>
  ),

  name: "Primary",
};

export const Secondary = {
  render: () => (
    <>
      <div
        style={{display: "flex", flexDirection: "row", width: "fit-content", backgroundColor: "#ececec"}}
      >
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large"> Light theme </IcTypography>
          <div>
            <IcButton variant="secondary" theme="light" id="mybuttonid">
              Secondary
            </IcButton>
            <IcButton variant="secondary" theme="light" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large">
            Light theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="secondary" monochrome theme="light"> Monochrome </IcButton>
            <IcButton variant="secondary" disabled monochrome theme="light">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
      <div
        style={{display: "flex", flexDirection: "row", marginTop: "1rem", backgroundColor: "#474A48", borderRadius: "5px", width: "fit-content"}}
      >
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large" style={{color: "white"}}>
            Dark theme
          </IcTypography>
          <div>
            <IcButton variant="secondary" theme="dark" id="mybuttonid">
              Secondary
            </IcButton>
            <IcButton variant="secondary" theme="dark" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large" style={{color: "white"}}>
            Dark theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="secondary" monochrome theme="dark">
              Monochrome
            </IcButton>
            <IcButton variant="secondary" disabled monochrome theme="dark">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
    </>
  ),

  name: "Secondary",
};

export const Tertiary = {
  render: () => (
    <>
      <div
        style={{display: "flex", flexDirection: "row", width: "fit-content", backgroundColor: "#ececec"}}
      >
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large"> Light theme </IcTypography>
          <div>
            <IcButton variant="tertiary" theme="light" id="mybuttonid">
              Tertiary
            </IcButton>
            <IcButton variant="tertiary" theme="light" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large">
            Light theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="tertiary" monochrome theme="light"> Monochrome </IcButton>
            <IcButton variant="tertiary" disabled monochrome theme="light">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
      <div
        style={{display: "flex", flexDirection: "row", marginTop: "1rem", backgroundColor: "#474A48", borderRadius: "5px", width: "fit-content"}}
      >
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large" style={{color: "white"}}>
            Dark theme
          </IcTypography>
          <div>
            <IcButton variant="tertiary" theme="dark" id="mybuttonid">
              Tertiary
            </IcButton>
            <IcButton variant="tertiary" theme="dark" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large" style={{color: "white"}}>
            Dark theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="tertiary" monochrome theme="dark">
              Monochrome
            </IcButton>
            <IcButton variant="tertiary" disabled monochrome theme="dark">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
    </>
  ),

  name: "Tertiary",
};

export const Destructive = {
  render: () => (
    <>
      <div
        style={{display: "flex", flexDirection: "row", width: "fit-content", backgroundColor: "#ececec"}}
      >
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large"> Light theme </IcTypography>
          <div>
            <IcButton variant="destructive" theme="light" id="mybuttonid">
              Destructive
            </IcButton>
            <IcButton variant="destructive" theme="light" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large">
            Light theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="destructive" monochrome theme="light"> Monochrome </IcButton>
            <IcButton variant="destructive" disabled monochrome theme="light">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
      <div
        style={{display: "flex", flexDirection: "row", marginTop: "1rem", backgroundColor: "#474A48", borderRadius: "5px", width: "fit-content"}}
      >
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large" style={{color: "white"}}>
            Dark theme
          </IcTypography>
          <div>
            <IcButton variant="destructive" theme="dark" id="mybuttonid">
              Destructive
            </IcButton>
            <IcButton variant="destructive" theme="dark" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div
          style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}
        >
          <IcTypography variant="subtitle-large" style={{color: "white"}}>
            Dark theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="destructive" monochrome theme="dark">
              Monochrome
            </IcButton>
            <IcButton variant="destructive" disabled monochrome theme="dark">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
    </>
  ),

  name: "Destructive",
};

export const WithIcon = {
  render: () => (
    <>
      <div style={{padding: "1rem", display:"flex", gap: "1rem"}}>
      <IcButton variant="primary">
        Primary
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
        Secondary
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
        Tertiary
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
        Destructive
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
    <div style={{padding: "1rem", display:"flex", gap: "1rem"}}>
      <IcButton variant="primary">
        Primary
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
        Secondary
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
        Tertiary
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
        Destructive
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
        <IcButton dropdown={true} variant="primary">
          Button
        </IcButton>
        <IcButton dropdown={true} variant="primary">
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
        <IcButton dropdown={true} variant="secondary">
          Button
        </IcButton>
        <IcButton dropdown={true} variant="tertiary">
          Button
        </IcButton>
      </div>
      <div
        style={{
          padding: "6px",
        }}
      >
        <IcButton dropdown={true} disabled="true" variant="primary">
          Button
        </IcButton>
        <IcButton dropdown={true} disabled="true" variant="primary">
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
        <IcButton dropdown={true} disabled="true" variant="secondary">
          Button
        </IcButton>
        <IcButton dropdown={true} disabled="true" variant="tertiary">
          Button
        </IcButton>
      </div>
      <div
        style={{
          padding: "6px",
        }}
      >
        <IcButton dropdown={true} variant="primary" theme="dark">
          Button
        </IcButton>
        <IcButton dropdown={true} theme="dark" variant="primary">
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
        <IcButton dropdown={true} variant="secondary" theme="dark">
          Button
        </IcButton>
        <IcButton dropdown={true} variant="tertiary" theme="dark">
          Button
        </IcButton>
      </div>
      <div
        style={{
          backgroundColor: "var(--ic-color-page-background-dark)",
          padding: "6px 10px",
          width: "fit-content",
        }}
      >
        <IcButton dropdown={true} variant="primary" theme="light">
          Button
        </IcButton>
        <IcButton dropdown={true} theme="light" variant="primary">
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
        <IcButton dropdown={true} variant="secondary" theme="light">
          Button
        </IcButton>
        <IcButton
          dropdown={true}
          variant="tertiary"
          theme="light"
          id="mybuttonid"
          onClick={() => alert("test")}
        >
          Button
        </IcButton>
      </div>
      <div
        style={{
          padding: "6px",
        }}
      >
        <IcButton dropdown={true} variant="primary" size="small">
          Button
        </IcButton>
        <IcButton dropdown={true} size="small" variant="primary">
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
        <IcButton dropdown={true} variant="secondary" size="small">
          Button
        </IcButton>
        <IcButton dropdown={true} variant="tertiary" size="small">
          Button
        </IcButton>
      </div>
      <div
        style={{
          padding: "6px",
        }}
      >
        <IcButton dropdown={true} variant="primary" size="large">
          Button
        </IcButton>
        <IcButton dropdown={true} size="large" variant="primary">
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
        <IcButton dropdown={true} variant="secondary" size="large">
          Button
        </IcButton>
        <IcButton dropdown={true} variant="tertiary" size="large">
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

export const RouterLinkWithSlottedContent = {
  render: () => (
    <>
      <div style={{padding: "1rem", display:"flex", gap: "1rem", alignItems: "center"}}>
        <IcButton size="small">
          <a slot="router-item" href="/">
            <svg
              slot="left-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton>
          <a slot="router-item" href="/">
            <svg
              slot="left-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton size="large">
          <a slot="router-item" href="/">
            <svg
              slot="left-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            <IcBadge slot="badge" label="1" position="near" />
            Slotted link
          </a>
        </IcButton>
      </div>
      <div style={{padding: "1rem", display:"flex", gap: "1rem"}}>
        <IcButton disabled>
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton variant="secondary">
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton variant="tertiary">
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton variant="destructive">
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </IcButton>
      </div>
      <div style={{padding: "1rem", display:"flex", gap: "1rem"}}>
        <IcButton theme="light" monochrome>
          <a slot="router-item" href="/">
            <svg
              slot="top-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton theme="dark" monochrome>
          <a slot="router-item" href="/">
            <svg
              slot="top-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </IcButton>
      </div>
      </>),

  name: "Router link - with slotted content",
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
      <IcButton variant="primary" fullWidth={true}>
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
    <IcButton variant="secondary" fullWidth={true}>
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
    <IcButton variant="tertiary" fullWidth={true}>
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
    <IcButton theme="dark" fullWidth={true}>
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
    <IcButton variant="destructive" fullWidth={true}>
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
    <IcButton variant="destructive" disabled fullWidth={true}>
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
    <div style={{ backgroundColor: "var(--ic-color-page-background-dark)", padding: "6px 10px" }}>
      <IcButton variant="primary" theme="light" fullWidth={true}>
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
      <IcButton variant="secondary" theme="light" fullWidth={true}>
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
      <IcButton variant="tertiary" theme="light" fullWidth={true}>
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
      theme="dark"
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
        backgroundColor: "var(--ic-color-page-background-dark)",
        display: "inline-block",
        padding: "6px 10px",
      }}
    >
      <IcButton
        variant="icon"
        size="large"
        aria-label="refresh"
        theme="light"
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
        theme="light"
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
    IconBtnGroup(iconProps.iconDisabled),
    IconBtnGroup(iconProps.iconLight),
    IconBtnGroup(iconProps.iconDark),
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
      theme={args.theme}
      fullWidth={args.fullWidth}
      monochrome={args.monochrome}
      dropdown={args.dropdown}
      transparentBackground={args.transparentBackground}
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
      options: ["medium", "large", "small"],

      control: {
        type: "inline-radio",
      },
    },

    theme: {
      options: ["inherit", "dark", "light"],

      control: {
        type: "inline-radio",
      },
    },

    fullWidth: {
      control: {
        type: "boolean",
      },
    },

    monochrome: {
      control: {
        type: "boolean",
      },
    },

    dropdown: {
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
      theme={args.theme}
      fullWidth={args.fullWidth}
      monochrome={args.monochrome}
      transparentBackground={args.transparentBackground}
    >
      {args.message}
      <svg
        slot={args.iconPlacement}
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
      options: ["medium", "large", "small"],

      control: {
        type: "inline-radio",
      },
    },

    theme: {
      options: ["inherit", "dark", "light"],

      control: {
        type: "inline-radio",
      },
    },

    fullWidth: {
      control: {
        type: "boolean",
      },
    },

    monochrome: {
      control: {
        type: "boolean",
      },
    },

    iconPlacement: {
      options: ["left-icon", "right-icon", "top-icon"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground with icon",
};

export const FileUpload_ = {
  render: () => <FileUpload />,
  name: "File Upload",
};
