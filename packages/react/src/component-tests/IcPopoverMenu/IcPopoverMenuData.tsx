import React, { useRef } from "react";
import {
  IcButton,
  IcPopoverMenu,
  IcMenuItem,
  IcMenuGroup,
} from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

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
    <div style={{ padding: "1rem" }}>
      <>
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
          <IcMenuItem
            label="Actions"
            submenuTriggerFor="actions"
            id="submenu-trigger-actions"
          />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="actions" aria-label="popover">
          <IcMenuItem label="Edit" />
          <IcMenuItem label="Find" />
          <IcMenuItem label="Delete" variant="destructive" />
        </IcPopoverMenu>
      </>
    </div>
  );
};

export const PopoverMenuDescription = () => {
  const buttonEl = useRef<any>();
  const popoverEl = useRef<any>();
  const handleClick = () => {
    popoverEl.current.open = buttonEl.current.dropdownExpanded;
  };
  const handleClose = () => {
    buttonEl.current.dropdownExpanded = popoverEl.current.open;
  };
  return (
    <div style={{ padding: "1rem" }}>
      <>
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
          <IcMenuItem label="Copy code" id="copy-code-btn"></IcMenuItem>
          <IcMenuItem
            label="Paste code"
            description="add description details"
          ></IcMenuItem>
          <IcMenuItem label="Actions" submenuTriggerFor="actions" />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="actions" aria-label="popover">
          <IcMenuItem label="Edit" />
          <IcMenuItem label="Find" />
          <IcMenuItem label="Delete" variant="destructive" />
        </IcPopoverMenu>
      </>
    </div>
  );
};

export const DisabledPopoverMenu = () => {
  const buttonEl = useRef<any>();
  const popoverEl = useRef<any>();
  const handleClick = () => {
    popoverEl.current.open = buttonEl.current.dropdownExpanded;
  };
  const handleClose = () => {
    buttonEl.current.dropdownExpanded = popoverEl.current.open;
  };
  return (
    <div style={{ padding: "1rem" }}>
      <>
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
          <IcMenuItem disabled={true} label="Copy code"></IcMenuItem>
          <IcMenuItem disabled={true} label="Paste code"></IcMenuItem>
          <IcMenuItem
            disabled={true}
            label="Actions"
            submenuTriggerFor="actions"
          />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="actions" aria-label="popover">
          <IcMenuItem label="Edit" />
          <IcMenuItem label="Find" />
          <IcMenuItem label="Delete" variant="destructive" />
        </IcPopoverMenu>
      </>
    </div>
  );
};

export const PopoverMenuWithVariants = () => {
  const buttonEl = useRef<any>();
  const popoverEl = useRef<any>();
  const handleClick = () => {
    popoverEl.current.open = buttonEl.current.dropdownExpanded;
  };
  const handleClose = () => {
    buttonEl.current.dropdownExpanded = popoverEl.current.open;
  };

  return (
    <>
      <div style={{ padding: "1rem" }}>
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
          <IcMenuItem label="Copy" disabled />
          <IcMenuItem label="Paste" keyboardShortcut="Cmd + V" />
          <IcMenuItem
            label="Edit"
            description="This is used to edit the original."
          />
          <IcMenuItem label="Show/Hide" variant="toggle" />
          <IcMenuItem label="Find icons">
            <SlottedSVG
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </SlottedSVG>
          </IcMenuItem>
          <IcMenuItem label="Delete" disabled variant="destructive" />
          <IcMenuItem label="Log out" variant="destructive" />
        </IcPopoverMenu>
      </div>
    </>
  );
};

export const PopoverWithMenuGroups = () => {
  const buttonEl = useRef<any>();
  const popoverEl = useRef<any>();
  const handleClick = () => {
    popoverEl.current.open = !popoverEl.current.open;
  };

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <IcButton
          title="More information"
          id="button-3"
          onClick={() => handleClick()}
          ref={buttonEl}
        >
          Button
        </IcButton>
        <IcPopoverMenu anchor="button-3" aria-label="popover" ref={popoverEl}>
          <IcMenuGroup label="Edit options">
            <IcMenuItem label="Copy" disabled />
            <IcMenuItem label="Paste" keyboardShortcut="Cmd + V" />
          </IcMenuGroup>
          <IcMenuGroup>
            <IcMenuItem label="Format" />
            <IcMenuItem label="Help" />
          </IcMenuGroup>
        </IcPopoverMenu>
      </div>
    </>
  );
};

export const MaxHeight = () => {
  const buttonEl = useRef<any>();
  const popoverEl = useRef<any>();
  const handleClick = () => {
    popoverEl.current.open = buttonEl.current.dropdownExpanded;
  };
  const handleClose = () => {
    buttonEl.current.dropdownExpanded = popoverEl.current.open;
  };
  return (
    <div style={{ padding: "1rem" }}>
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
        style={{ maxHeight: "100px", overflowY: "auto" }}
      >
        <IcMenuItem label="Copy code"></IcMenuItem>
        <IcMenuItem label="Paste code"></IcMenuItem>
        <IcMenuItem label="Edit"></IcMenuItem>
        <IcMenuItem label="Find"></IcMenuItem>
        <IcMenuItem label="Delete" variant="destructive"></IcMenuItem>
      </IcPopoverMenu>
    </div>
  );
};

export const PopoverTheme = ({ theme }) => {
  const buttonEl = useRef<any>();
  const popoverEl = useRef<any>();
  const handleClick = () => {
    popoverEl.current.open = buttonEl.current.dropdownExpanded;
  };
  const handleClose = () => {
    buttonEl.current.dropdownExpanded = popoverEl.current.open;
  };
  return (
    <div style={{ padding: "1rem" }}>
      <>
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
          theme={theme}
          open
        >
          <IcMenuItem label="Copy code"></IcMenuItem>
          <IcMenuItem label="Paste code"></IcMenuItem>
          <IcMenuItem
            label="Actions"
            submenuTriggerFor="actions"
            id="submenu-trigger-actions"
          />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="actions" aria-label="popover" theme={theme}>
          <IcMenuItem label="Edit" />
          <IcMenuItem label="Find" />
          <IcMenuItem label="Delete" variant="destructive" />
        </IcPopoverMenu>
      </>
    </div>
  );
};
