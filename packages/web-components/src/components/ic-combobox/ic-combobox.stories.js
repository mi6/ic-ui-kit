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
  validationStatus: "no status",
  ["validation-text"]: "",
  ["show-clear-button"]: false,
  theme: "inherit",
  timeout: "",
};

export default {
  title: "Web Components/Combobox",
  component: "ic-combobox",
};

export const Default = {
  render: () =>
    html`
      <script>
        var combobox = document.querySelector("ic-combobox");
        combobox.options =  [
          { label: "Cappuccino", value: "cappuccino", description: "Coffee frothed up with pressurised steam" },
          { label: "Americano", value: "americano", description: "Espresso coffee diluted with hot water" },
          { label: "Mocha", value: "mocha", description: "Coffee with chocolate" },
          { label: "Cortado", value: "cortado" },
          { label: "Flat white", value: "flat", recommended: true },
          { label: "Latte", value: "latte" },
        ];
      </script>
      <ic-combobox label="my label"></ic-combobox>
    `,

  name: "Default",
};

export const Recommended = {
  render: () =>
    html`
      <script>
        var combobox = document.querySelector("ic-combobox");
        combobox.options =  [
          { label: "Cappuccino", value: "cappuccino", description: "Coffee frothed up with pressurised steam" },
          { label: "Americano", value: "americano", description: "Espresso coffee diluted with hot water", recommended: true },
          { label: "Mocha", value: "mocha", description: "Coffee with chocolate" },
          { label: "Cortado", value: "cortado" },
          { label: "Flat white", value: "flat", recommended: true },
          { label: "Latte", value: "latte" },
        ];
      </script>
      <ic-combobox label="my label"></ic-combobox>
    `,

  name: "Recommended",
};

export const GroupedOptions = {
  render: () =>
    html`
      <script>
        var combo = document.querySelector("#combo-0");
        combo.options = [
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
        var combo1 = document.querySelector("#combo-1");
        combo1.options = [
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
      <ic-combobox id="combo-0" label="Includes group titles in search" include-group-titles-in-search="true"></ic-combobox>
      <ic-combobox id="combo-1" label="Doesn't include group titles in search" include-group-titles-in-search="false"></ic-combobox>
    `,

  name: "Grouped options",
};

export const GroupedOptionsRecommended = {
  render: () =>
    html`
      <script>
        var combobox = document.querySelector("#combobox-0");
        combobox.options = [
          {
            label: "Fancy",
            children: [
              { label: "Cappuccino", value: "Cap" },
              { label: "Flat white", value: "Fla", recommended: true },
              { label: "Macchiato", value: "Mac" },
            ],
          },
          {
            label: "Boring",
            children: [
              { label: "Filter", value: "Fil" },
              { label: "Latte", value: "Lat" },
              { label: "Americano", value: "Ame"},
            ],
          },
        ];
        var comboboxOne = document.querySelector("#combobox-1");
        comboboxOne.options = [
          {
            label: "Boring",
            children: [
              { label: "Filter", value: "Fil" },
              { label: "Latte", value: "Lat" },
              { label: "Americano", value: "Ame"},
            ],
          },
          {
            label: "Fancy",
            recommended: true,
            children: [
              { label: "Cappuccino", value: "Cap" },
              { label: "Flat white", value: "Fla" },
              { label: "Macchiato", value: "Mac"},
            ],
          },
        ];
      </script>
      <ic-combobox id="combobox-0" label="Recommended children"></ic-combobox>
      <ic-combobox id="combobox-1" label="Recommended group"></ic-combobox>
    `,

  name: "Grouped options with recommended",
};

export const Validation = {
  render: () =>
    html`<ic-combobox
        id="combobox-success"
        label="What is your favourite coffee?"
        validation-status="success"
        validation-text="Coffee available"
      ></ic-combobox>
      <script>
        var combo1 = document.querySelector("#combobox-success");
        var option1 = "Cappuccino";
        combo1.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        combo1.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>
      <ic-combobox
        id="combobox-warning"
        label="What is your favourite coffee?"
        validation-status="warning"
        validation-text="Only a few left"
      ></ic-combobox>
      <script>
        var combo2 = document.querySelector("#combobox-warning");
        var option2 = "Cappuccino";
        combo2.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        combo2.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>
      <ic-combobox
        id="combobox-error"
        label="What is your favourite coffee?"
        validation-status="error"
        validation-text="Coffee unavailable"
      ></ic-combobox>
      <script>
        var combo3 = document.querySelector("#combobox-error");
        var option3 = "Cappuccino";
        combo3.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        combo3.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,

  name: "Validation",
};

export const Playground = {
  render: (args) =>
    html` <ic-combobox
      id="combobox-playground"
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
      timeout=${args.timeout}
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
    </ic-combobox>
    <script>
      var combobox = document.querySelector("#combobox-playground");
      combobox.options = [
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
      combobox.addEventListener("icChange", function (event) {
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