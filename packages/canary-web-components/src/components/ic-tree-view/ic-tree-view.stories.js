import readme from "./readme.md";
import treeItemReadme from "../ic-tree-item/readme.md";
import { html } from "lit-html";

export default {
  title: "Web Components/Tree view",
  component: "ic-tree-view",

  parameters: {
    componentAPI: {
      data: readme + treeItemReadme,
    },
  },
};

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

export const Light = {
  render: () => html`
    <div style="width:250px;">
      <ic-tree-view heading="Menu" appearance="light">
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

  name: "Light",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

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

export const RouterItem = {
  render: () => html`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item>
          <a slot="router-item" href="/">Slotted coffee</a>
        </ic-tree-item>
        <ic-tree-item label="Tea"></ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,

  name: "Router item",
};

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
