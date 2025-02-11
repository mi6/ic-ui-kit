import { IcButton, IcTypography, SlottedSVG } from "@ukic/react";
import React, { useState } from "react";
import treeItemReadme from "../../../canary-web-components/src/components/ic-tree-item/readme.md";
import readme from "../../../canary-web-components/src/components/ic-tree-view/readme.md";
import { IcTreeItem, IcTreeView } from "../components";

const TreeItemsUpdate = () => {
  const [treeItems, setTreeItems] = useState([
    { label: "Item 1" },
    { label: "Item 2" },
    { label: "Item 3" },
    { label: "Item 4" },
  ]);

  const updateTreeItems = () => {
    setTreeItems([{ label: "Item 5" }, { label: "Item 6" }]);
  };

  return (
    <>
      <IcTreeView heading="Updating options">
        {treeItems.map((option, index) => (
          <IcTreeItem key={index} label={option.label} />
        ))}
      </IcTreeView>
      <br />
      <IcButton onClick={updateTreeItems}>Update</IcButton>
    </>
  );
};

const defaultArgs = {
  appearance: "dark",
  heading: "Menu",
  size: "default",
  showIcon: false,
  truncateHeading: false,
  truncateTreeItems: false,
  treeItemDisabled: false,
  treeItemHref: "",
  treeItemLabel: "Coffee",
  treeItemSelected: false,
  showTreeItemIcon: false,
};

export default {
  title: "React Components/Tree view",
  component: IcTreeView,

  parameters: {
    componentAPI: {
      data: readme + treeItemReadme,
    },
  },
};

export const Basic = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" />
        <IcTreeItem label="Tea" />
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  ),

  name: "Basic",
};

export const Nested = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee">
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte" />
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  ),

  name: "Nested",
};

export const WithIcons = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu">
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte">
            <SlottedSVG
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
            </SlottedSVG>
          </IcTreeItem>
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  ),

  name: "With icons",
};

export const Small = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu" size="small">
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte">
            <SlottedSVG
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
            </SlottedSVG>
          </IcTreeItem>
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  ),

  name: "Small",
};

export const Large = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu" size="large">
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte">
            <SlottedSVG
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
            </SlottedSVG>
          </IcTreeItem>
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  ),

  name: "Large",
};

export const Light = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu" appearance="light">
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte">
            <SlottedSVG
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
            </SlottedSVG>
          </IcTreeItem>
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  ),

  name: "Light",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const DisabledTreeItems = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu">
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte" disabled>
            <SlottedSVG
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
            </SlottedSVG>
          </IcTreeItem>
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" disabled />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" disabled />
      </IcTreeView>
    </div>
  ),

  name: "Disabled tree items",
};

export const RouterItem = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu">
        <IcTreeItem>
          <a slot="router-item" href="/">
            Slotted coffee
          </a>
        </IcTreeItem>
        <IcTreeItem label="Tea" />
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  ),

  name: "Router item",
};

export const SlottedContent = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView>
        <IcTypography variant="subtitle-large" slot="heading">
          Menu
        </IcTypography>
        <IcTreeItem>
          <IcTypography slot="label">Coffee</IcTypography>
        </IcTreeItem>
        <IcTreeItem label="Tea" />
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  ),

  name: "Slotted content",
};

export const MaxContent = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu with nested options">
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte with extra milk and sugar" />
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate with marshmallows" />
      </IcTreeView>
    </div>
  ),

  name: "Max content",
};

export const TruncationBehaviour = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView
        heading="Menu with nested options"
        truncateHeading
        truncateTreeItems
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte with extra milk and sugar" />
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem
            label="Earl Grey with truncation false"
            truncateTreeItem={false}
          />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate with marshmallows" />
      </IcTreeView>
    </div>
  ),

  name: "Truncation behaviour",
};

export const SelectedTreeItem = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" />
        <IcTreeItem label="Tea" />
        <IcTreeItem label="Hot chocolate" selected />
      </IcTreeView>
    </div>
  ),

  name: "Selected tree item",
};

export const Link = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" href="#" />
        <IcTreeItem label="Tea" selected href="#" />
        <IcTreeItem label="Hot chocolate" disabled href="#" />
      </IcTreeView>
    </div>
  ),

  name: "Link",
};

export const Expanded = {
  render: () => (
    <div
      style={{
        width: "250px",
      }}
    >
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" expanded>
          <IcTreeItem label="Americano" expanded>
            <IcTreeItem label="With milk" />
          </IcTreeItem>
          <IcTreeItem label="Latte" />
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  ),

  name: "Expanded",
};

export const UpdatingOptions = {
  render: () => <TreeItemsUpdate />,
  name: "Updating options",
};

export const PlaygroundExample = {
  render: (args) => (
    <div
      style={{
        width: "250px",
        backgroundColor: args.appearance == "light" ? "black" : null,
      }}
    >
      <IcTreeView
        heading={args.heading}
        appearance={args.appearance}
        size={args.size}
        truncateHeading={args.truncateHeading}
        truncateTreeItems={args.truncateTreeItems}
      >
        {args.showIcon && (
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
          </SlottedSVG>
        )}
        <IcTreeItem
          label={args.treeItemLabel}
          disabled={args.treeItemDisabled}
          selected={args.treeItemSelected}
          href={args.treeItemHref}
        >
          {args.showTreeItemIcon && (
            <SlottedSVG
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
            </SlottedSVG>
          )}
        </IcTreeItem>
        <IcTreeItem label="Tea" />
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  ),

  args: defaultArgs,

  argTypes: {
    appearance: {
      options: ["dark", "light"],

      control: {
        type: "inline-radio",
      },
    },

    size: {
      options: ["default", "small", "large"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground example",
};
