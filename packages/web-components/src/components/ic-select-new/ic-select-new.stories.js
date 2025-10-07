/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { html } from "lit-html";

const defaultArgs = {
  disabled: false,
  ["full-width"]: false,
  ["helper-text"]: "Select one option from the list",
  ["hide-label"]: false,
  loading: false,
  loadingLabel: "Loading...",
  label: "What is your favourite coffee?",
  placeholder: "Select an option",
  readonly: false,
  required: false,
  size: "medium",
  searchable: false,
  validationStatus: "no status",
  ["validation-text"]: "",
  ["show-clear-button"]: false,
  theme: "inherit",
};

export default {
  title: "Web Components/Select new",
  component: "ic-select-new",
};

export const Default = {
  render: () =>
    html`
      <script>
        var select = document.querySelector("ic-select-new");
        select.options =  [
          { label: "Cappuccino", value: "cappuccino", description: "Coffee frothed up with pressurised steam" },
          { label: "Americano", value: "americano", description: "Espresso coffee diluted with hot water" },
          { label: "Mocha", value: "mocha", description: "Coffee with chocolate" },
          { label: "Cortado", value: "cortado" },
          { label: "Flat white", value: "flat", recommended: true },
          { label: "Latte", value: "latte" },
        ];
      </script>
      <ic-select-new label="my label"></ic-select-new>
    `,

  name: "Default",
};

export const Clearable = {
  render: () =>
    html`
      <script>
        var select = document.querySelector("ic-select-new");
        select.options =  [
          { label: "Cappuccino", value: "cappuccino", description: "Coffee frothed up with pressurised steam" },
          { label: "Americano", value: "americano", description: "Espresso coffee diluted with hot water" },
          { label: "Mocha", value: "mocha", description: "Coffee with chocolate" },
          { label: "Cortado", value: "cortado" },
          { label: "Flat white", value: "flat", recommended: true },
          { label: "Latte", value: "latte" },
        ];
      </script>
      <ic-select-new label="my label" show-clear-button></ic-select-new>
    `,

  name: "Clearable",
};

export const Multiple = {
  render: () =>
    html`
      <script>
        var select = document.querySelector("ic-select-new");
        select.options =  [
          { label: "Cappuccino", value: "cappuccino", description: "Coffee frothed up with pressurised steam" },
          { label: "Americano", value: "americano", description: "Espresso coffee diluted with hot water" },
          { label: "Mocha", value: "mocha", description: "Coffee with chocolate" },
          { label: "Cortado", value: "cortado" },
          { label: "Flat white", value: "flat", recommended: true },
          { label: "Latte", value: "latte" },
        ];
      </script>
      <ic-select-new label="my label" multiple></ic-select-new>
    `,

  name: "Multiple",
};

export const GroupedOptions = {
  render: () =>
    html`
      <script>
        var select = document.querySelector("ic-select-new");
        select.options = [
          {
            label: "Fancy",
            children: [
              { label: "Cappuccino", value: "Cap" },
              { label: "Flat white", value: "Fla" },
              {
                label: "Macchiato",
                value: "Mac",
              },
            ],
          },
          {
            label: "Boring",
            children: [
              { label: "Filter", value: "Fil" },
              { label: "Latte", value: "Lat" },
              {
                label: "Americano",
                value: "Ame",
              },
            ],
          },
        ];
      </script>
      <ic-select-new label="my label"></ic-select-new>
    `,

  name: "Grouped options",
};

export const Playground = {
  render: (args) =>
    html` <ic-select-new
      id="select-playground"
      disabled=${args.disabled}
      full-width=${args["full-width"]}
      helper-text=${args["helper-text"]}
      hide-label=${args["hide-label"]}
      loading=${args.loading}
      loading-label=${args["loading-label"]}
      label=${args.label}
      placeholder=${args.placeholder}
      readonly=${args.readonly}
      required=${args.required}
      searchable=${args.searchable}
      show-clear-button=${args["show-clear-button"]}
      size=${args.size}
      validation-status=${args.validationStatus === "no status"
        ? ""
        : args.validationStatus}
      validation-text=${args["validation-text"]}
      theme=${args.theme}
    >
      ${args.showIcon &&
      html` <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
        />
      </svg>`}
    </ic-select-new>
    <script>
      var select = document.querySelector("#select-playground");
      select.options = [
        {
          label: "Cappuccino",
          value: "Cap",
          description:
            "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
        },
        {
          label: "Boring",
          children: [
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
            },
            {
              label: "Filter",
              value: "Fil",
              description: "Coffee filtered using paper or a mesh",
            },
          ],
        },
        {
          label: "Fancy",
          children: [
            {
              label: "Flat white",
              value: "Fla",
              description:
                "Coffee without froth made with espresso and hot steamed milk",
            },
            {
              label: "Macchiato",
              value: "Mac",
              description:
                "Espresso coffee with a dash of frothy steamed milk",
            },
          ],
        },
        {
          label: "Americano",
          value: "Ame",
          description: "Espresso coffee diluted with hot water",
        },
        {
          label: "Mocha",
          value: "Moc",
          description: "A mixture of coffee and chocolate",
        },
      ];
      select.addEventListener("icChange", function (event) {
        console.log("icChange: " + event.detail.value);
      });
    </script>
  `,

  name: "Playground",
  args: defaultArgs,

  argTypes: {
    validationStatus: {
      defaultValue: "no status",
      options: ["no status", "error", "success", "warning"],

      control: {
        type: "select",
      },
    },

    size: {
      options: ["small", "medium", "large"],

      control: {
        type: "inline-radio",
      },
    },

    showIcon: {
      control: {
        type: "boolean",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },
};
