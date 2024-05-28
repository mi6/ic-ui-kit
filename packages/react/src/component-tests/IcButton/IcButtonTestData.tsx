import { SlottedSVG, IcButton, IcPopoverMenu, IcMenuItem } from "../../";
import React, { useRef } from "react";

export const DARK_BG_STYLE = {
  backgroundColor: "#2c2f34",
  display: "inline-block",
  padding: "6px 10px",
};

export const iconProps = {
  iconDefault: {
    title: "Default",
    size: "default",
    appearance: "default",
    loading: false,
    disabled: false,
  },
  iconLarge: {
    title: "Large",
    size: "large",
    appearance: "default",
    loading: false,
    disabled: false,
  },
  iconSmall: {
    title: "Small",
    size: "small",
    appearance: "default",
    loading: false,
    disabled: false,
  },
  iconLoading: {
    title: "Loading",
    size: "default",
    appearance: "default",
    loading: true,
    disabled: false,
  },
  iconDisabled: {
    title: "Disabled",
    size: "default",
    appearance: "default",
    loading: false,
    disabled: true,
  },
  iconDark: {
    title: "Dark",
    size: "default",
    appearance: "dark",
    loading: false,
    disabled: false,
  },
  iconDarkLoading: {
    title: "Dark Loading",
    size: "default",
    appearance: "dark",
    loading: true,
    disabled: false,
  },
  iconLight: {
    title: "Light",
    size: "default",
    appearance: "light",
    loading: false,
    disabled: false,
  },
  iconLightLoading: {
    title: "Light Loading",
    size: "default",
    appearance: "light",
    loading: true,
    disabled: false,
  },
};

export const SlottedIcon = () => {
  return (
    <SlottedSVG
      slot="left-icon"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
    </SlottedSVG>
  );
};

export const SlottedRightIcon = () => {
  return (
    <SlottedSVG
      slot="right-icon"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
    </SlottedSVG>
  );
};

export const SlottedIconNoViewBox = () => {
  return (
    <SlottedSVG
      slot="left-icon"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
    </SlottedSVG>
  );
};

export const PopoverDropdown = () => {
  const buttonEl = useRef<any>();
  const popoverEl = useRef<any>();
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
        aria-label="popover"
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

export const IconBtnGroup = ({ props }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: props.appearance === "light" ? "#2c2f34" : "#fff",
          display: "flex",
          gap: "0.5rem",
          margin: "1rem",
          width: "fit-content",
          padding: props.appearance === "light" ? "6px 10px" : "none",
        }}
      >
        <IcButton
          variant="icon-primary"
          size={props.size}
          appearance={props.appearance}
          loading={props.loading}
          disabled={props.disabled}
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
          size={props.size}
          appearance={props.appearance}
          loading={props.loading}
          disabled={props.disabled}
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
          size={props.size}
          appearance={props.appearance}
          loading={props.loading}
          disabled={props.disabled}
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
          size={props.size}
          appearance={props.appearance}
          loading={props.loading}
          disabled={props.disabled}
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
