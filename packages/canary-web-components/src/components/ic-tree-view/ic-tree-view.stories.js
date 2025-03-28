/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { html } from "lit-html";
import readme from "./readme.md";
import treeItemReadme from "../ic-tree-item/readme.md";

export default {
  title: "Web Components/Tree view",
  component: "ic-tree-view",
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
 * To use the tree view component, import `@ukic/canary-web-components` into your application.
 */
export const Basic = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee"></ic-tree-item>
        <ic-tree-item label="Tea"></ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Basic",
};

export const Nested = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee">
          <ic-tree-item label="Americano">
            <ic-tree-item label="With milk"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Latte"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Nested",
};

export const WithIcons = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "With icons",
};

/**
 * Small and large styling will be passed down from tree view to tree items and nested tree items.
 */
export const Small = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu" size="small">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Small",
};

export const Large = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu" size="large">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Large",
};

/**
 * Individual tree-items can be disabled using the `disabled` prop.
 */
export const DisabledTreeItems = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte" disabled="true">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai" disabled="true"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Disabled tree items",
};

/**
 * Custom links and router-items can be passed in using the `router-item` slot.
 */
export const RouterItem = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu" truncate-tree-items="true">
        <ic-tree-item>
          <a slot="router-item" href="/"
            >Hot chocolate with marshmallows and whipped cream</a
          >
        </ic-tree-item>
        <ic-tree-item>
          <a slot="router-item" href="/tea">Tea</a>
        </ic-tree-item>
        <ic-tree-item label="Coffee"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Router item",
};

/**
 * Custom content can be passed to both the tree view (using the `heading` slot) and the tree-item (using the `label` slot).
 */
export const SlottedContent = {
  render: () => html`
      <div style="width:250px">
        <ic-tree-view>
          <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>
          <ic-tree-item>
            <ic-typography slot="label">Coffee<ic-typography>
          </ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `,
  name: "Slotted content",
};

/**
 * When the heading/label exceeds the width of the container, the text will wrap unless `truncate-tree-item` is set to `true`.
 */
export const MaxContent = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu with nested options">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Max content",
};

/**
 * When `truncate-tree-items` or `truncate-heading` are set to `true`, and the heading/label exceeds the width of the container, they will be truncated with an ellipsis.
 */
export const TruncationBehaviour = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view
        heading="Menu with nested options"
        truncate-tree-items="true"
        truncate-heading="true"
      >
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee" expanded="true">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea" expanded="true">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item
            label="Earl Grey with truncation false"
            truncate-tree-item="false"
          ></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Truncation behaviour",
};

/**
 * Utilising the `selected` attribute on `ic-tree-item` will turn it into a controlled component, displaying the selected state when set to `true`.
 */
export const SelectedTreeItem = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee"></ic-tree-item>
        <ic-tree-item label="Tea"></ic-tree-item>
        <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Selected tree item",
};

/**
 * When setting the `href` attribute, the tree-item will function as a link.
 */
export const Link = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee" href="#"></ic-tree-item>
        <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>
        <ic-tree-item
          label="Hot chocolate"
          disabled="true"
          href="#"
        ></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Link",
};

/**
 * An example with the `expanded` prop set to `true` on a parent tree item.
 */
export const Expanded = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee" expanded="true">
          <ic-tree-item label="Americano" expanded="true">
            <ic-tree-item label="With milk"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Latte"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Expanded",
};

/**
 * An example with the tree item `focus-inset` prop set to `true`. This sets the focus indicator to appear inside the tree item, around the label.
 */
export const FocusInset = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu" focus-inset="true">
        <ic-tree-item label="Coffee">
          <ic-tree-item label="Americano">
            <ic-tree-item label="With milk"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Latte"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,
  name: "Focus inset",
};
