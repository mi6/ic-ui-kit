/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef } from "react";
import {
  IcAccordion,
  IcAccordionGroup,
  IcButton,
  IcDialog,
  IcMenuGroup,
  IcMenuItem,
  IcPopoverMenu,
  IcSearchBar,
  IcSelect,
  IcTooltip,
  IcTypography
} from "../components";

const PopoverMenu = () => {
  const [open, setOpen] = useState(false);
  const buttonClick = () => {
    setOpen(true);
  };
  return (
    <>
      <IcButton id="button-1" onClick={buttonClick}>
        Show popover
      </IcButton>
      <IcPopoverMenu anchor="button-1" aria-label="popover" open={open}>
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
};

const Dialog = () => {
  const dialogEl = useRef();
  const showDialog = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton onClick={showDialog}>Show Dialog</IcButton>
      <IcDialog
        heading="This is a medium dialog"
        label="medium"
        size="medium"
        id="medium-dialog"
        ref={dialogEl}
      >
        <IcAccordionGroup label="Title of the Accordion Group">
          <IcAccordion heading="Accordion 1">
            <svg
              slot="icon"
              width="20"
              height="1em"
              viewBox="0 0 512 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
            </svg>
            <IcTypography variant="body">
              This is an example of the main body text
            </IcTypography>
          </IcAccordion>
          <IcAccordion heading="Accordion 2">
            <svg
              slot="icon"
              width="20"
              height="1em"
              viewBox="0 0 512 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
            </svg>
            <IcTypography variant="body">
              This is an example of the main body text
            </IcTypography>
            <IcSelect
              options={[
                { label: "Cappuccino", value: "Cap" },
                { label: "Latte", value: "Lat" },
                { label: "Americano", value: "Ame" },
              ]}
              id="select-2"
              label="What is your favourite coffee?"
            />
          </IcAccordion>
        </IcAccordionGroup>
      </IcDialog>
    </>
  );
};

const defaultArgs = {
  accessibleButtonLabel: "accordions",
  expanded: false,
  label: "Accordion group",
  singleExpansion: false,
  size: "medium",
  disabled: false,
  heading: "Accordion 1",
  message: "This is an example of the main body text.",
  theme: "inherit",
  expandedAccordion: false,
  sizeAccordion: "medium",
  themeAccordion: "inherit",
};

export default {
  title: "Accordion",
  component: IcAccordion,
};

export const Default = {
  render: () => (
    <IcAccordion heading="Accordion 1">
      <IcTypography variant="body">
        This is an example of the main body text.
      </IcTypography>
    </IcAccordion>
  ),

  name: "Default",
};

export const Expanded = {
  render: () => (
    <IcAccordion expanded heading="Accordion 1">
      <IcTypography variant="body">
        This is an example of the main body text.
      </IcTypography>
    </IcAccordion>
  ),

  name: "Expanded",
};

export const Icon = {
  render: () => (
    <>
      <IcAccordion heading="Accordion 1">
      <svg
        slot="icon"
        width="20"
        height="1em"
        viewBox="0 0 512 512"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
      </svg>
      <IcTypography variant="body">
        This is an example of the main body text
      </IcTypography>
    </IcAccordion>
    <IcAccordion heading="Accordion 2">
      <svg
        slot="icon"
        width="20"
        height="1em"
        viewBox="0 0 512 512"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
      </svg>
      <IcTypography variant="body">
        This is an example of the main body text
      </IcTypography>
    </IcAccordion>
    </>
  ),

  name: "Icon",
};

export const GroupTitle = {
  render: () => (
    <IcAccordionGroup label="Title of the Accordion Group">
      <IcAccordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
      <IcAccordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
    </IcAccordionGroup>
  ),

  name: "Group Title",
};

export const Sizes = {
  render: () => (
    <>
      <IcAccordionGroup label="Small Accordion Group" size="small">
      <IcAccordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
      <IcAccordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
    </IcAccordionGroup>
    <IcAccordionGroup label="Default Accordion Group" size="medium">
      <IcAccordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
      <IcAccordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
    </IcAccordionGroup>
    <IcAccordionGroup label="Large Accordion Group" size="large">
      <IcAccordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
      <IcAccordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
    </IcAccordionGroup>
    </>
  ),

  name: "Sizes",
};

export const SingleExpansion = {
  render: () => (
    <IcAccordionGroup
      label="Title of the Accordion Group"
      single-expansion="true"
    >
      <IcAccordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
      <IcAccordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
    </IcAccordionGroup>
  ),

  name: "Single expansion",
};

export const Parent = {
  render: () => (
    <IcAccordionGroup label="Title of the Accordion Group">
      <IcAccordion heading="Accordion 1">
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
      <IcAccordion heading="Accordion 2">
        <IcAccordion heading="Child Accordion 1">
          <IcTypography variant="body">
            This is an example of the child main body text
          </IcTypography>
        </IcAccordion>
        <IcAccordion heading="Child Accordion 2">
          <IcTypography variant="body">
            This is an example of the child main body text
          </IcTypography>
        </IcAccordion>
        <IcAccordion heading="Child Accordion 3">
          <IcTypography variant="body">
            This is an example of the child main body text
          </IcTypography>
        </IcAccordion>
      </IcAccordion>
    </IcAccordionGroup>
  ),

  name: "Parent",
};

export const Disabled = {
  render: () => (
    <>
      <IcAccordion heading="Accordion 1">
      <IcTypography variant="body">
        This is an example of the main body text.
      </IcTypography>
    </IcAccordion>
    <IcAccordion heading="Accordion 2" disabled>
      <IcTypography variant="body">
        This is an example of the main body text.
      </IcTypography>
    </IcAccordion>
    <IcAccordion heading="Accordion 3">
      <IcTypography variant="body">
        This is an example of the main body text.
      </IcTypography>
    </IcAccordion>
    </>
  ),

  name: "Disabled",
};

export const WithPopoverContent = {
  render: () => (
    <>
      <IcAccordion expanded heading="With Select">
      <IcSelect
        label="What is your favourite coffee?"
        options={[
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ]}
      />
    </IcAccordion>
    <IcAccordion heading="With Tooltip">
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
    </IcAccordion>
    <IcAccordion heading="With Search Bar">
      <IcSearchBar
        label="What is your favourite coffee?"
        options={[
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ]}
      />
    </IcAccordion>
    <IcAccordion heading="With Popover Menu">
      <PopoverMenu />
    </IcAccordion>
    <Dialog />
    </>
  ),

  name: "With Popover Content",
};

export const SlottedHeadings = {
  render: () => (
    <IcAccordionGroup>
      <h1 slot="label">Group title</h1>
      <IcAccordion>
        <h2 slot="heading">Heading</h2>
        <IcTypography variant="body">Text</IcTypography>
      </IcAccordion>
    </IcAccordionGroup>
  ),

  name: "Slotted headings",
};

export const Playground = {
  render: (args) => (
    <IcAccordionGroup
      accessibleButtonLabel={args.accessibleButtonLabel}
      label={args.label}
      expanded={args.expanded}
      singleExpansion={args.singleExpansion}
      size={args.size}
      theme={args.theme}
    >
      <IcAccordion
        heading={args.heading}
        disabled={args.disabled}
        expanded={args.expandedAccordion || args.expanded}
        size={args.sizeAccordion}
        message={args.message}
        theme={args.themeAccordion}
      />
      <IcAccordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <IcTypography variant="body">
          This is an example of the main body text
        </IcTypography>
      </IcAccordion>
    </IcAccordionGroup>
  ),

  args: defaultArgs,
  name: "Playground",

  argTypes: {
    size: {
      options: ["small", "medium", "large"],

      control: {
        type: "inline-radio",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },

    sizeAccordion: {
      options: ["small", "medium", "large"],

      control: {
        type: "inline-radio",
      },
    },

    themeAccordion: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },
};
