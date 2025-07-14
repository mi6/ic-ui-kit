/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IcButton, IcTypography, IcSkipLink, SlottedSVG } from "@ukic/react";
import React, { useState, useEffect } from "react";
import treeItemReadme from "../../../canary-web-components/src/components/ic-tree-item/readme.md";
import readme from "../../../canary-web-components/src/components/ic-tree-view/readme.md";
import { IcTreeItem, IcTreeView } from "../components";

export default {
  title: "React Components/Tree view",
  component: IcTreeView,
  parameters: {
    componentAPI: {
      data: readme + treeItemReadme,
    },
  },
};

/**
 * Use the tree view component to display hierarchical data in a tree structure. The tree view component is useful for displaying nested data, such as a file system or a category hierarchy.
 *
 * Click the 'Component API' tab to view all the available attributes, events and slots for tree view.
 *
 * To use the tree view component, import `@ukic/canary-react` into your application.
 */
export const Basic = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView 
        heading="Menu" 
        treeItemData={[
          { label: "Coffee" },
          { label: "Tea" },
          { label: "Hot chocolate" },
        ]}
      />
    </div>
  ),
  name: "Basic",
};

export const BasicSlotted = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" />
        <IcTreeItem label="Tea" />
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  ),
  name: "Basic - slotted",
};

export const Nested = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView 
        heading="Menu" 
        treeItemData={[
          {
            label: "Coffee",
            children: [
              { label: "Americano", children: [{ label: "With milk" }] },
              { label: "Latte" },
              { label: "Espresso" },
            ],
          },
          {
            label: "Tea",
            children: [{ label: "Earl grey" }, { label: "Chai" }],
          },
          { label: "Hot chocolate" },
        ]}
      />
    </div>
  ),
  name: "Nested",
};

export const NestedSlotted = {
  render: () => (
    <div style={{ width: "250px" }}>
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
  name: "Nested - slotted",
};


export const CustomIDs = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView
        heading="Menu"
        treeItemData={[
          { label: "Coffee", treeItemId: "coffee-1"},
          { label: "Tea", treeItemId: "tea-1"},
          { label: "Hot chocolate", treeItemId: "hot-chocolate-1" },
        ]}
      />
    </div>
  ),
  name: "Custom IDs with Tree Item Data",
};

export const SlottedCustomIds = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" treeItemId="coffee-1">
          <IcTreeItem label="Americano" treeItemId="americano-1">
            <IcTreeItem label="With milk" treeItemId="with-milk-1" />
          </IcTreeItem>
        </IcTreeItem>
        <IcTreeItem label="Tea" treeItemId="tea-1" />
      </IcTreeView>
    </div>
  ),
  name: "Custom IDs with Slotted",
};


export const WithIcons = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView 
        heading="Menu" 
        treeItemData={[
          {
            label: "Coffee",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
            children: [
              { label: "Americano" },
              {
                label: "Latte",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
              },
              { label: "Espresso" },
            ],
          },
          {
            label: "Tea",
            children: [{ label: "Earl grey" }, { label: "Chai" }],
          },
          { label: "Hot chocolate" },
        ]}
      >
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </SlottedSVG>
      </IcTreeView>
    </div>
  ),
  name: "With icons",
};

export const WithIconsSlotted = {
  render: () => (
    <div style={{ width: "250px" }}>
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
  name: "With icons - slotted",
};

/**
 * Small and large styling will be passed down from tree view to tree items and nested tree items.
 */
export const Small = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView 
        heading="Menu" 
        size="small"
        treeItemData={[
          {
            label: "Coffee",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
            children: [
              { label: "Americano" },
              {
                label: "Latte",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
              },
              { label: "Espresso" },
            ],
          },
          {
            label: "Tea",
            children: [{ label: "Earl grey" }, { label: "Chai" }],
          },
          { label: "Hot chocolate" },
        ]}
      >
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </SlottedSVG>
      </IcTreeView>
    </div>
  ),
  name: "Small",
};

export const SmallSlotted = {
  render: () => (
    <div style={{ width: "250px" }}>
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
  name: "Small - slotted",
};

export const Large = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView 
        heading="Menu" 
        size="large"
        treeItemData={[
          {
            label: "Coffee",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
            children: [
              { label: "Americano" },
              {
                label: "Latte",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
              },
              { label: "Espresso" },
            ],
          },
          {
            label: "Tea",
            children: [{ label: "Earl grey" }, { label: "Chai" }],
          },
          { label: "Hot chocolate" },
        ]}
      >
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </SlottedSVG>
      </IcTreeView>
    </div>
  ),
  name: "Large",
};

export const LargeSlotted = {
  render: () => (
    <div style={{ width: "250px" }}>
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
  name: "Large - slotted",
};

/**
 * Individual tree-items can be disabled using the `disabled` prop.
 */
export const DisabledTreeItems = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView 
        heading="Menu" 
        treeItemData={[
          {
            label: "Coffee",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
            children: [
              { label: "Americano" },
              {
                label: "Latte",
                disabled: true,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
              },
              { label: "Espresso" },
            ],
          },
          {
            label: "Tea",
            children: [
              { label: "Earl grey" },
              { label: "Chai", disabled: true },
            ],
          },
          { label: "Hot chocolate", disabled: true },
        ]}
      >
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </SlottedSVG>
      </IcTreeView>
    </div>
  ),
  name: "Disabled tree items",
};

export const DisabledTreeItemsSlotted = {
  render: () => (
    <div style={{ width: "250px" }}>
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
  name: "Disabled tree items - slotted",
};

/**
 * Custom links and router-items can be passed in using the `router-item` slot.
 */
export const RouterItem = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView heading="Menu" truncateTreeItems>
        <IcTreeItem>
          <a slot="router-item" href="/">
            Hot chocolate with marshmallows and whipped cream
          </a>
        </IcTreeItem>
        <IcTreeItem>
          <a slot="router-item" href="/tea">
            Tea
          </a>
        </IcTreeItem>
        <IcTreeItem label="Coffee" />
      </IcTreeView>
    </div>
  ),
  name: "Router item",
};

/**
 * Custom content can be passed to both the tree view (using the `heading` slot) and the tree-item (using the `label` slot).
 */
export const SlottedContent = {
  render: () => (
    <div style={{ width: "250px" }}>
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

/**
 * When the heading/label exceeds the width of the container, the text will wrap unless `truncateTreeItem` is set to `true`.
 */
export const MaxContent = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView 
        heading="Menu" 
        treeItemData={[
          {
            label: "Coffee",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
            children: [
              { label: "Americano" },
              { label: "Latte with extra milk and sugar" },
              { label: "Espresso" },
            ],
          },
          {
            label: "Tea",
            children: [{ label: "Earl grey" }, { label: "Chai" }],
          },
          { label: "Hot chocolate with marshmallows" },
        ]}
      >
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </SlottedSVG>
      </IcTreeView>
    </div>
  ),
  name: "Max content",
};

export const MaxContentSlotted = {
  render: () => (
    <div style={{ width: "250px" }}>
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
  name: "Max content - slotted",
};

/**
 * When `truncateTreeItems` or `truncateHeading` are set to `true`, and the heading/label exceeds the width of the container, they will be truncated with an ellipsis.
 */
export const TruncationBehaviour = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView 
        heading="Menu" 
        truncateTreeItems
        truncateHeading
        treeItemData={[
          {
            label: "Coffee",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
            children: [
              { label: "Americano" },
              { label: "Latte with extra milk and sugar" },
              { label: "Espresso" },
            ],
          },
          {
            label: "Tea",
            children: [
              { label: "Earl grey" },
              {
                label: "Earl Grey with truncation false",
                truncateTreeItem: false,
              },
              { label: "Chai" },
            ],
          },
          { label: "Hot chocolate with marshmallows" },
        ]}
      >
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </SlottedSVG>
      </IcTreeView>
    </div>
  ),
  name: "Truncation behaviour",
};

export const TruncationBehaviourSlotted = {
  render: () => (
    <div style={{ width: "250px" }}>
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
        <IcTreeItem label="Coffee" expanded>
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
        <IcTreeItem label="Tea" expanded>
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
  name: "Truncation behaviour - slotted",
};

/**
 * Utilising the `selected` attribute on `IcTreeItem` will turn it into a controlled component, displaying the selected state when set to `true`.
 */
export const SelectedTreeItem = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView 
        heading="Menu" 
        treeItemData={[
          { label: "Coffee" },
          { label: "Tea" },
          { label: "Hot chocolate", selected: true },
        ]}
      />
    </div>
  ),
  name: "Selected tree item",
};

export const SelectedTreeItemSlotted = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" />
        <IcTreeItem label="Tea" />
        <IcTreeItem label="Hot chocolate" selected />
      </IcTreeView>
    </div>
  ),
  name: "Selected tree item - slotted",
};

/**
 * When setting the `href` attribute, the tree-item will function as a link.
 */
export const Link = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView 
        heading="Menu" 
        treeItemData={[
          { label: "Coffee", href: "#" },
          { label: "Tea", href: "#", selected: true },
          { label: "Hot chocolate", disabled: true, href: "#" },
        ]}
      />
    </div>
  ),
  name: "Link",
};

export const LinkSlotted = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" href="#" />
        <IcTreeItem label="Tea" selected href="#" />
        <IcTreeItem label="Hot chocolate" disabled href="#" />
      </IcTreeView>
    </div>
  ),
  name: "Link - slotted",
};

/**
 * An example with the `expanded` prop set to `true` on a parent tree item.
 */
export const Expanded = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView 
        onIcTreeItemExpanded={(event) => console.log("onIcTreeItemExpanded: ", event.detail)}
        heading="Menu" 
        treeItemData={[
          {
            label: "Coffee",
            expanded: true,
            children: [
              {
                label: "Americano",
                expanded: true,
                children: [{ label: "With milk" }],
              },
              { label: "Latte" },
              { label: "Espresso" },
            ],
          },
          {
            label: "Tea",
            children: [{ label: "Earl grey" }, { label: "Chai" }],
          },
          { label: "Hot chocolate" },
        ]}
      />
    </div>
  ),
  name: "Expanded",
};

export const ExpandedSlotted = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcTreeView heading="Menu" onIcTreeItemExpanded={(event) => console.log("[Slotted] onIcTreeItemExpanded: ", event.detail)}>
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
  name: "Expanded - slotted",
};

export const UpdatingOptions = {
  render: () => {
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
        <IcTreeView heading="Updating options" treeItemData={treeItems} />
        <br />
        <IcButton onClick={updateTreeItems}>Update</IcButton>
      </>
    );
  },
  name: "Updating options",
};

export const UpdatingOptionsSlotted = {
  render: () => {
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
  },
  name: "Updating options - slotted",
};

export const WithNestedSkipLink = {
  render: () => (
    <div style={{ width: "250px" }}>
      <IcSkipLink target="next-content" inline />
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee">
          <IcTreeItem label="Americano">
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
  name: "Nested skip link",
};

export const AddChildNodes = {
  render: () => {
    const [childNodes, setChildNodes] = useState([]);

  useEffect(() => {
    const childData = [
      { label: "PG Tips" },
      { label: "Yorkshire Tea" },
      { label: "Earl Grey" },
    ];

    setTimeout(() => {
      setChildNodes(childData);
    }, 3000);
  }, []);
  return (
    <div style={{ width: "250px" }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" />
        <IcTreeItem label="Tea" expanded={childNodes.length}>
          {childNodes.map((childNode) => (
            <IcTreeItem label={childNode.label} key={childNode.label} />
          ))}
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  );
},
  name: "Adding child nodes",
};

const defaultArgs = {
  heading: "Menu",
  size: "medium",
  truncateTreeItems: false,
  treeItemDisabled: false,
  treeItemHref: "",
  treeItemId: "",
  treeItemLabel: "Coffee",
  treeItemSelected: false,
  showTreeItemIcon: false,
  theme: "inherit",
};

export const Playground = {
  render: (args) => (
    <IcTreeView 
      heading={args.heading}
      size={args.size}
      theme={args.theme}
      truncateTreeItems={args.truncateTreeItems}
      treeItemData={[
        {
          label: args.treeItemLabel,
          href: args.treeItemHref,
          disabled: args.treeItemDisabled,
          selected: args.treeItemSelected,
          icon: args.showTreeItemIcon && '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
          treeItemId: args.treeItemId
        },
        { label: "Tea" },
        { label: "Hot chocolate" }
      ]}
    />
  ),
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["medium", "small", "large"],
      control: { type: "inline-radio" },
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: { type: "inline-radio" },
    },
  },
  name: "Playground",
};

const defaultSlottedArgs = {
  heading: "Menu",
  size: "medium",
  showIcon: false,
  truncateHeading: false,
  truncateTreeItems: false,
  treeItemDisabled: false,
  treeItemHref: "",
  treeItemId: "",
  treeItemLabel: "Coffee",
  treeItemSelected: false,
  showTreeItemIcon: false,
  theme: "inherit",
};

/**
 * Go to the <ic-link href="/?path=/story/react-components-tree-view--playground">separate page for the playground example</ic-link> to view the prop controls.
 */
export const PlaygroundSlotted = {
  render: (args) => (
    <IcTreeView
      heading={args.heading}
      size={args.size}
      theme={args.theme}
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
        treeItemId={args.treeItemId}
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
  ),
  args: defaultSlottedArgs,
  argTypes: {
    size: {
      options: ["medium", "small", "large"],
      control: { type: "inline-radio" },
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: { type: "inline-radio" },
    },
  },
  name: "Playground - slotted",
};
