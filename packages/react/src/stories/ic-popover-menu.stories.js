/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import {
  IcPopoverMenu,
  IcMenuItem,
  IcButton,
  IcMenuGroup,
} from "../components";

const defaultArgs = {
  open: true,
  groupLabel: "View",
  description: "",
  disabled: false,
  href: "/",
  keyboardShortcut: "Cmd + C",
  label: "Copy code",
  variant: "default",
  iconSlot: true,
};

export default {
  title: "Popover menu",
  component: IcPopoverMenu,
};

export const Default = {
  render: () => {
    function buttonClick() {
      document.querySelector("ic-popover-menu").open =
        !document.querySelector("ic-popover-menu").open;
    }

    return (
      <>
        <IcButton id="button-1" onClick={buttonClick}>
          Show/Hide popover
        </IcButton>
        <IcPopoverMenu
          anchor="button-1"
          aria-label="popover"
          onIcPopoverClosed={(event) => console.log("icPopoverClosed: ", event)}
        >
          <IcMenuItem label="Copy code" disabled />
          <IcMenuGroup label="View">
            <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />
            <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />
          </IcMenuGroup>
          <IcMenuItem label="Actions" submenuTriggerFor="abc" />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="abc">
          <IcMenuItem label="Edit" />
          <IcMenuItem label="Find" submenuTriggerFor="abc123" />
          <IcMenuItem label="Delete" variant="destructive" />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="abc123">
          <IcMenuItem
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          />
          <IcMenuItem label="Find..." />
          <IcMenuItem label="Find icons">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </IcMenuItem>
          <IcMenuItem label="Show found results" variant="toggle" />
        </IcPopoverMenu>
      </>
    );
  },

  name: "Default",
};

export const LeftPlacement = {
  render: () => {
    function buttonClick() {
      document.querySelector("ic-popover-menu").open =
        !document.querySelector("ic-popover-menu").open;
    }

    return (
      <>
        <div
          style={{
            marginLeft: "1000px",
          }}
        >
          <IcButton id="button-1" onClick={buttonClick}>
            Show/Hide popover
          </IcButton>
          <IcPopoverMenu anchor="button-1" aria-label="popover">
            <IcMenuItem label="Copy code" disabled />
            <IcMenuGroup label="View">
              <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />
              <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />
            </IcMenuGroup>
            <IcMenuItem label="Actions" submenuTriggerFor="abc" />
          </IcPopoverMenu>
          <IcPopoverMenu submenuId="abc">
            <IcMenuItem label="Edit" />
            <IcMenuItem label="Find" submenuTriggerFor="abc123" />
            <IcMenuItem label="Delete" variant="destructive" />
          </IcPopoverMenu>
          <IcPopoverMenu submenuId="abc123">
            <IcMenuItem
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            />
            <IcMenuItem label="Find..." />
            <IcMenuItem label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
            </IcMenuItem>
            <IcMenuItem label="Show found results" variant="toggle" />
          </IcPopoverMenu>
        </div>
      </>
    );
  },

  name: "Left placement",
};

export const TopPlacement = {
  render: () => {
    function buttonClick() {
      document.querySelector("ic-popover-menu").open =
        !document.querySelector("ic-popover-menu").open;
    }

    return (
      <>
        <div
          style={{
            marginTop: "540px",
          }}
        >
          <IcButton id="button-1" onClick={buttonClick}>
            Show/Hide popover
          </IcButton>
          <IcPopoverMenu anchor="button-1" aria-label="popover">
            <IcMenuItem label="Copy code" disabled />
            <IcMenuGroup label="View">
              <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />
              <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />
            </IcMenuGroup>
            <IcMenuItem label="Actions" submenuTriggerFor="abc" />
          </IcPopoverMenu>
          <IcPopoverMenu submenuId="abc">
            <IcMenuItem label="Edit" />
            <IcMenuItem label="Find" submenuTriggerFor="abc123" />
            <IcMenuItem label="Delete" variant="destructive" />
          </IcPopoverMenu>
          <IcPopoverMenu submenuId="abc123">
            <IcMenuItem
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            />
            <IcMenuItem label="Find..." />
            <IcMenuItem label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
            </IcMenuItem>
            <IcMenuItem label="Show found results" variant="toggle" />
          </IcPopoverMenu>
        </div>
      </>
    );
  },

  name: "Top placement",
};

export const DynamicPopover = {
  render:(args) => {
    const furtherWorkCheckboxNames = [
      { checkboxName: "beans", verb: "grind"},
      {checkboxName: "coffee", verb: "drink"}
    ];
  
    const parentItems = furtherWorkCheckboxNames.map(({ checkboxName, verb }) => (
              <IcMenuItem
                id={`bulk-${checkboxName.toLowerCase()}-menu`}
                key={`${checkboxName}Menu`}
                label={`${checkboxName} ${verb}`}
                submenuTriggerFor={checkboxName.toLowerCase()}
              />
            ));
  
    const submenus = furtherWorkCheckboxNames.map((tagCheckboxName) => {
          const { checkboxName, verb } = tagCheckboxName;
          return (
            <IcPopoverMenu
              key={`${checkboxName}Menu`}
              submenuId={checkboxName.toLowerCase()}
            >
              <IcMenuItem
                id={`bulk-${checkboxName.toLocaleLowerCase()}-add`}
                label={`${checkboxName} ${verb}`}
              />
              <IcMenuItem
                id={`bulk-${checkboxName.toLocaleLowerCase()}-remove`}
                label={`${checkboxName} not ${verb}`}
              />
            </IcPopoverMenu>
          );
        })
  
    function buttonClick() {
          document.querySelector("ic-popover-menu").open =
            !document.querySelector("ic-popover-menu").open;
        }
        return (
          <>
            <IcButton id="button-dynamic" onClick={buttonClick}>
              Show/Hide popover
            </IcButton>
            <IcPopoverMenu
              id="dynamic-popover"
              anchor="button-dynamic"
              aria-label="popover"
              open="false"
            >
              <IcMenuGroup id="bulk-management" label="Bulk Actions">
                {parentItems}
              </IcMenuGroup>
              
              <IcMenuGroup>
                <IcMenuItem
                  id="bulk-remove"
                  label="Remove Items"
                  variant="destructive"
                />
              </IcMenuGroup>
              
            </IcPopoverMenu>
            {submenus}
        </>
        )
  }, 
  name: "Dynamic popover",
}

export const AutoOpening = {
  render: () => {
    function buttonClick() {
      document.querySelector("ic-popover-menu").open =
        !document.querySelector("ic-popover-menu").open;
    }

    return (
      <>
        <IcButton id="button-1" onClick={buttonClick}>
          Show/Hide popover
        </IcButton>
        <IcPopoverMenu
          anchor="button-1"
          aria-label="popover"
          open
          onIcPopoverClosed={(event) => console.log("icPopoverClosed: ", event)}
        >
          <IcMenuItem label="Copy code" disabled />
          <IcMenuGroup label="View">
            <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />
            <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />
          </IcMenuGroup>
          <IcMenuItem label="Actions" submenuTriggerFor="abc" />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="abc">
          <IcMenuItem label="Edit" />
          <IcMenuItem label="Find" submenuTriggerFor="abc123" />
          <IcMenuItem label="Delete" variant="destructive" />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="abc123">
          <IcMenuItem
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          />
          <IcMenuItem label="Find..." />
          <IcMenuItem label="Find icons">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </IcMenuItem>
          <IcMenuItem label="Show found results" variant="toggle" />
        </IcPopoverMenu>
      </>
    );
  },

  name: "Auto opening",
};

export const Playground = {
  render: (args) => (
    <div>
      <IcPopoverMenu ariaLabel="popover" open={args.open}>
        <IcMenuGroup label={args.groupLabel}>
          <IcMenuItem
            description={args.description}
            disabled={args.disabled}
            href={args.href}
            keyboardShortcut={args.keyboardShortcut}
            label={args.label}
            variant={args.variant}
          >
            <svg
              slot={args.iconSlot}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </IcMenuItem>
          <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />
        </IcMenuGroup>
        <IcMenuItem label="Actions" submenuTriggerFor="abc" />
      </IcPopoverMenu>
      <IcPopoverMenu submenuId="abc">
        <IcMenuItem label="Edit" />
        <IcMenuItem label="Find" />
        <IcMenuItem label="Delete" variant="destructive" />
      </IcPopoverMenu>
    </div>
  ),

  args: defaultArgs,

  argTypes: {
    variant: {
      options: ["default", "toggle", "destructive"],

      control: {
        type: "radio",
      },
    },

    iconSlot: {
      mapping: {
        true: "icon",
        false: "",
      },
    },
  },

  name: "Playground",
};
