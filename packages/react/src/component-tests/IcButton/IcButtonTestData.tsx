import { IcButtonVariants } from "@ukic/web-components";
import { SlottedSVG, IcButton, IcPopoverMenu, IcMenuItem } from "../../";
import React, { ReactElement, useRef } from "react";

export const DARK_BG_STYLE = {
  backgroundColor: "#17191C",
  display: "inline-block",
  padding: "6px 10px",
};

export const iconProps = {
  iconDefault: {
    title: "Default",
    size: "medium",
    theme: "light",
    loading: false,
    disabled: false,
    monochrome: false,
  },
  iconLarge: {
    title: "Large",
    size: "large",
    theme: "light",
    loading: false,
    disabled: false,
    monochrome: false,
  },
  iconSmall: {
    title: "Small",
    size: "small",
    theme: "light",
    loading: false,
    disabled: false,
    monochrome: false,
  },
  iconLoading: {
    title: "Default",
    size: "medium",
    theme: "light",
    loading: true,
    disabled: false,
    monochrome: false,
  },
  iconDisabled: {
    title: "Disabled",
    size: "medium",
    theme: "light",
    loading: false,
    disabled: true,
    monochrome: false,
  },
  iconDark: {
    title: "Dark",
    size: "medium",
    theme: "dark",
    loading: false,
    disabled: false,
    monochrome: true,
  },
  iconDarkLoading: {
    title: "Dark",
    size: "medium",
    theme: "dark",
    loading: true,
    disabled: false,
    monochrome: false,
  },
  iconDarkLoadingMonochrome: {
    title: "Dark",
    size: "medium",
    theme: "dark",
    loading: true,
    disabled: false,
    monochrome: true,
  },
  iconLight: {
    title: "Light",
    size: "medium",
    theme: "light",
    loading: false,
    disabled: false,
    monochrome: true,
  },
  iconLightLoadingMonochrome: {
    title: "Light",
    size: "medium",
    theme: "light",
    loading: true,
    disabled: false,
    monochrome: true,
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

export const SlottedTopIcon = () => {
  return (
    <SlottedSVG
      slot="top-icon"
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

export const ReusableIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
    </svg>
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
    <div style={{ padding: "6px" }}>
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
          backgroundColor:
            props.theme === "dark" && props.monochrome ? "#17191C" : "#fff",
          display: "flex",
          gap: "0.5rem",
          margin: "1rem",
          width: "fit-content",
          padding:
            props.theme === "dark" && props.monochrome ? "6px 10px" : "none",
        }}
      >
        <IcButton
          variant="icon-primary"
          size={props.size}
          theme={props.theme}
          loading={props.loading}
          disabled={props.disabled}
          aria-label="refresh"
          id="testButton"
          monochrome={props.monochrome}
        >
          <ReusableIcon />
        </IcButton>
        <IcButton
          variant="icon-secondary"
          size={props.size}
          theme={props.theme}
          loading={props.loading}
          disabled={props.disabled}
          aria-label="refresh"
          id="testButton"
          monochrome={props.monochrome}
        >
          <ReusableIcon />
        </IcButton>
        <IcButton
          variant="icon-tertiary"
          size={props.size}
          theme={props.theme}
          loading={props.loading}
          disabled={props.disabled}
          aria-label="refresh"
          id="testButton"
          monochrome={props.monochrome}
        >
          <ReusableIcon />
        </IcButton>
        <IcButton
          variant="icon-destructive"
          size={props.size}
          theme={props.theme}
          loading={props.loading}
          disabled={props.disabled}
          aria-label="refresh"
          id="testButton"
          monochrome={props.monochrome}
        >
          <ReusableIcon />
        </IcButton>
      </div>
    </>
  );
};

export const TextPrimaryButton = (): ReactElement => {
  return (
    <div>
      <div id="primary-buttons">
        <IcButton
          variant="primary"
          id="mybuttonid"
          onClick={() => alert("test")}
        >
          Button
        </IcButton>
        <IcButton variant="primary" disabled>
          Button
        </IcButton>
        <IcButton variant="primary" loading>
          Button
        </IcButton>
        <IcButton variant="primary" onClick={() => alert("test")} monochrome>
          Button
        </IcButton>
        <IcButton variant="primary" disabled monochrome>
          Button
        </IcButton>
        <IcButton variant="primary" loading monochrome>
          Button
        </IcButton>
        <div style={DARK_BG_STYLE}>
          <IcButton
            variant="primary"
            theme="dark"
            monochrome
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="primary" disabled theme="dark" monochrome>
            Button
          </IcButton>
          <IcButton variant="primary" loading theme="dark" monochrome>
            Button
          </IcButton>
        </div>
      </div>
    </div>
  );
};

export const TextSecondaryButton = (): ReactElement => {
  return (
    <div>
      <div id="secondary-buttons">
        <IcButton
          variant="secondary"
          id="mybuttonid"
          onClick={() => alert("test")}
        >
          Button
        </IcButton>
        <IcButton variant="secondary" disabled>
          Button
        </IcButton>
        <IcButton variant="secondary" loading>
          Button
        </IcButton>
        <IcButton variant="secondary" monochrome onClick={() => alert("test")}>
          Button
        </IcButton>
        <IcButton variant="secondary" disabled monochrome>
          Button
        </IcButton>
        <IcButton variant="secondary" loading monochrome>
          Button
        </IcButton>
        <IcButton variant="secondary" transparentBackground={false} monochrome>
          Button
        </IcButton>
        <div style={DARK_BG_STYLE}>
          <IcButton
            variant="secondary"
            theme="dark"
            monochrome
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="secondary" disabled theme="dark" monochrome>
            Button
          </IcButton>
          <IcButton variant="secondary" loading theme="dark" monochrome>
            Button
          </IcButton>
          <IcButton
            variant="secondary"
            transparentBackground={false}
            monochrome
            theme="dark"
          >
            Button
          </IcButton>
        </div>
      </div>
    </div>
  );
};

export const TextTertiaryButton = (): ReactElement => {
  return (
    <div>
      <div id="tertiary-buttons">
        <IcButton
          variant="tertiary"
          id="mybuttonid"
          onClick={() => alert("test")}
        >
          Button
        </IcButton>
        <IcButton variant="tertiary" disabled>
          Button
        </IcButton>
        <IcButton variant="tertiary" loading>
          Button
        </IcButton>
        <IcButton variant="tertiary" onClick={() => alert("test")} monochrome>
          Button
        </IcButton>
        <IcButton variant="tertiary" disabled monochrome>
          Button
        </IcButton>
        <IcButton variant="tertiary" loading monochrome>
          Button
        </IcButton>
        <div style={DARK_BG_STYLE}>
          <IcButton
            variant="tertiary"
            theme="dark"
            monochrome
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="tertiary" disabled theme="dark" monochrome>
            Button
          </IcButton>
          <IcButton variant="tertiary" loading theme="dark" monochrome>
            Button
          </IcButton>
        </div>
      </div>
    </div>
  );
};

export const TextDestructiveButton = (): ReactElement => {
  return (
    <div>
      <div id="destructive-buttons">
        <IcButton
          variant="destructive"
          id="mybuttonid"
          onClick={() => alert("test")}
        >
          Button
        </IcButton>
        <IcButton variant="destructive" disabled>
          Button
        </IcButton>
        <IcButton variant="destructive" loading>
          Button
        </IcButton>
      </div>
    </div>
  );
};

export const WithIcons = (): ReactElement => {
  return (
    <div>
      <div id="left-buttons">
        <IcButton
          variant="primary"
          id="mybuttonid"
          onClick={() => alert("test")}
        >
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton variant="secondary">
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton variant="tertiary">
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton variant="destructive">
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton variant="primary" disabled>
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton variant="primary" monochrome onClick={() => alert("test")}>
          Button
          <SlottedIcon />
        </IcButton>
        <div style={DARK_BG_STYLE}>
          <IcButton
            variant="primary"
            theme="dark"
            monochrome
            onClick={() => alert("test")}
          >
            Button
            <SlottedIcon />
          </IcButton>
        </div>
      </div>
      <div id="right-buttons">
        <IcButton
          variant="primary"
          id="mybuttonid"
          onClick={() => alert("test")}
        >
          Button
          <SlottedRightIcon />
        </IcButton>
        <IcButton variant="secondary">
          Button
          <SlottedRightIcon />
        </IcButton>
        <IcButton variant="tertiary">
          Button
          <SlottedRightIcon />
        </IcButton>
        <IcButton variant="destructive">
          Button
          <SlottedRightIcon />
        </IcButton>
        <IcButton variant="primary" disabled>
          Button
          <SlottedRightIcon />
        </IcButton>
        <IcButton variant="primary" monochrome onClick={() => alert("test")}>
          Button
          <SlottedRightIcon />
        </IcButton>
        <div style={DARK_BG_STYLE}>
          <IcButton
            variant="primary"
            theme="dark"
            monochrome
            onClick={() => alert("test")}
          >
            Button
            <SlottedRightIcon />
          </IcButton>
        </div>
      </div>
      <div id="top-buttons">
        <IcButton
          variant="primary"
          id="mybuttonid"
          onClick={() => alert("test")}
        >
          Button
          <SlottedTopIcon />
        </IcButton>
        <IcButton variant="secondary">
          Button
          <SlottedTopIcon />
        </IcButton>
        <IcButton variant="tertiary">
          Button
          <SlottedTopIcon />
        </IcButton>
        <IcButton variant="destructive">
          Button
          <SlottedTopIcon />
        </IcButton>
        <IcButton variant="primary" disabled>
          Button
          <SlottedTopIcon />
        </IcButton>
        <IcButton variant="primary" monochrome onClick={() => alert("test")}>
          Button
          <SlottedTopIcon />
        </IcButton>
        <div style={DARK_BG_STYLE}>
          <IcButton
            variant="primary"
            theme="dark"
            monochrome
            onClick={() => alert("test")}
          >
            Button
            <SlottedTopIcon />
          </IcButton>
        </div>
      </div>
    </div>
  );
};

export const DifferentSizes = (): ReactElement => {
  return (
    <div>
      <div id="primary-buttons">
        <IcButton variant="primary" size="small">
          Small
        </IcButton>
        <IcButton variant="primary">Default</IcButton>
        <IcButton variant="primary" size="large">
          Large
        </IcButton>
        <IcButton variant="primary" size="small">
          Small
          <SlottedIcon />
        </IcButton>
        <IcButton variant="primary">
          Default
          <SlottedIcon />
        </IcButton>
        <IcButton variant="primary" size="large">
          Large
          <SlottedIcon />
        </IcButton>
      </div>
    </div>
  );
};

export const IconNoViewbox = (): ReactElement => {
  return (
    <div>
      <div id="primary-buttons">
        <IcButton variant="primary" size="small">
          Small
          <SlottedIconNoViewBox />
        </IcButton>
        <IcButton variant="primary">
          Default
          <SlottedIconNoViewBox />
        </IcButton>
        <IcButton variant="primary" size="large">
          Large
          <SlottedIconNoViewBox />
        </IcButton>
      </div>
    </div>
  );
};

export const FullWidth = (): ReactElement => {
  return (
    <div>
      <div style={{ padding: "6px" }} id="left-buttons">
        <IcButton variant="primary" fullWidth>
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton variant="secondary" fullWidth>
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton variant="tertiary" fullWidth>
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton variant="destructive" fullWidth>
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton variant="primary" disabled fullWidth>
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton variant="primary" monochrome fullWidth>
          Button
          <SlottedIcon />
        </IcButton>
      </div>
    </div>
  );
};

export const IconButtons = (): ReactElement => {
  return (
    <div>
      <div id="icon-buttons">
        <IcButton
          aria-label="friendly button label"
          variant="icon"
          size="small"
        >
          <ReusableIcon />
        </IcButton>
        <IcButton aria-label="friendly button label" variant="icon">
          <ReusableIcon />
        </IcButton>
        <IcButton
          aria-label="friendly button label"
          variant="icon"
          size="large"
        >
          <ReusableIcon />
        </IcButton>
        <IcButton aria-label="friendly button label" variant="icon" disabled>
          <ReusableIcon />
        </IcButton>
        <IcButton
          aria-label="friendly button label"
          variant="icon"
          theme="light"
        >
          <ReusableIcon />
        </IcButton>
        <div style={DARK_BG_STYLE}>
          <IcButton
            aria-label="friendly button label"
            variant="icon"
            theme="dark"
          >
            <ReusableIcon />
          </IcButton>
          <IcButton
            aria-label="friendly button label"
            variant="icon"
            theme="dark"
            disabled
          >
            <ReusableIcon />
          </IcButton>
        </div>
      </div>
    </div>
  );
};

export const DropdownButtons = (): ReactElement => {
  return (
    <div>
      <div style={{ padding: "6px" }}>
        <IcButton dropdown variant="primary">
          Button
        </IcButton>
        <IcButton dropdown variant="primary">
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton dropdown variant="secondary">
          Button
        </IcButton>
        <IcButton dropdown variant="tertiary">
          Button
        </IcButton>
      </div>
      <div style={{ padding: "6px" }}>
        <IcButton dropdown disabled variant="primary">
          Button
        </IcButton>
        <IcButton dropdown disabled variant="primary">
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton dropdown disabled variant="secondary">
          Button
        </IcButton>
        <IcButton dropdown disabled variant="tertiary">
          Button
        </IcButton>
      </div>
      <div style={{ padding: "6px" }}>
        <IcButton dropdown variant="primary" monochrome>
          Button
        </IcButton>
        <IcButton dropdown variant="primary" monochrome>
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton dropdown variant="secondary" monochrome>
          Button
        </IcButton>
        <IcButton dropdown variant="tertiary" monochrome>
          Button
        </IcButton>
      </div>
      <div
        style={{
          backgroundColor: "#17191C",
          padding: "6px 10px",
          width: "fit-content",
        }}
      >
        <IcButton dropdown variant="primary" theme="dark" monochrome>
          Button
        </IcButton>
        <IcButton dropdown theme="dark" variant="primary" monochrome>
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton dropdown variant="secondary" theme="dark" monochrome>
          Button
        </IcButton>
        <IcButton dropdown variant="tertiary" theme="dark" monochrome>
          Button
        </IcButton>
      </div>
      <div style={{ padding: "6px" }}>
        <IcButton dropdown variant="primary" size="small">
          Button
        </IcButton>
        <IcButton dropdown size="small" variant="primary">
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton dropdown variant="secondary" size="small">
          Button
        </IcButton>
        <IcButton dropdown variant="tertiary" size="small">
          Button
        </IcButton>
      </div>
      <div style={{ padding: "6px" }}>
        <IcButton dropdown variant="primary" size="large">
          Button
        </IcButton>
        <IcButton dropdown size="large" variant="primary">
          Button
          <SlottedIcon />
        </IcButton>
        <IcButton dropdown variant="secondary" size="large">
          Button
        </IcButton>
        <IcButton dropdown variant="tertiary" size="large">
          Button
        </IcButton>
      </div>
    </div>
  );
};

export const IconButtonGroup = (): ReactElement => {
  return (
    <>
      <IconBtnGroup props={iconProps.iconDefault} />
      <IconBtnGroup props={iconProps.iconLarge} />
      <IconBtnGroup props={iconProps.iconSmall} />
      <IconBtnGroup props={iconProps.iconLoading} />
      <IconBtnGroup props={iconProps.iconDisabled} />
      <IconBtnGroup props={iconProps.iconDark} />
      <IconBtnGroup props={iconProps.iconDarkLoading} />
      <IconBtnGroup props={iconProps.iconDarkLoadingMonochrome} />
      <IconBtnGroup props={iconProps.iconLight} />
      <IconBtnGroup props={iconProps.iconLightLoadingMonochrome} />
    </>
  );
};

export const IconBtnWithTooltip = (variant: IcButtonVariants): ReactElement => {
  return (
    <div style={{ padding: "6px" }}>
      <IcButton
        variant={variant}
        title="This is a tooltip"
        tooltipPlacement="bottom"
        aria-label="refresh"
      >
        <ReusableIcon />
      </IcButton>
    </div>
  );
};

export const CustomHeightMinWidth = () => {
  const customHeightStyle = {
    "--height": "9rem",
  };

  const minStyle = {
    "--min-width": "4rem",
  };
  return (
    <>
      <IcButton style={customHeightStyle} name="tall-button">
        Tall Button
      </IcButton>
      <IcButton style={minStyle} name="min-width">
        Min
      </IcButton>
    </>
  );
};

export const FileUpload = () => {
  function updateFileList(fileArray) {
    const fileList = [];
    Array.from(fileArray).forEach((file) => {
      fileList.push(file.name);
    });
    return fileList.join(", ");
  }

  return (
    <div>
      <span id="selected-file">No File Selected</span>
      <IcButton
        fileUpload={true}
        accept=".doc, text/plain, .json"
        aria-describedby="selected-file"
        onClick={(event) =>
          document.addEventListener("icFileSelection", (event) =>
            alert(`Files Selected: ${updateFileList(event.detail)}`)
          )
        }
      >
        Upload File
      </IcButton>
    </div>
  );
};
