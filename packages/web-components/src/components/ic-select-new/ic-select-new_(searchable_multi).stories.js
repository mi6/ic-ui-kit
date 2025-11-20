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
  validationAriaLive: "polite",
  validationStatus: "no status",
  ["validation-text"]: "",
  ["show-clear-button"]: false,
  theme: "inherit",
};

export default {
  title: "Web Components/SelectNew/SearchableMulti",
  component: "ic-select-new",
};

export const Default = {
  render: () =>
    html`<ic-select-new
        id="select-default"
        label="What is your favourite coffee?"
        debounce="1000"
        searchable
        multiple
      ></ic-select-new>
      <script>
        var select = document.querySelector("#select-default");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect: " + event.detail.value);
        });
        select.addEventListener("icOpen", function () {
          console.log("select dropdown opened");
        });
        select.addEventListener("icClose", function () {
          console.log("select dropdown closed");
        });
      </script>`,

  name: "Default",
};

const inlineRadioSelector = "inline-radio";

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
        show-clear-button=${args["show-clear-button"]}
        size=${args.size}
        validation-aria-live=${args.validationAriaLive}
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
            label: "Super duper special coffees",
            children: [
              {
                label: "Affogato",
                value: "Aff",
              },
            ],
          },
          {
            label: "Cappuccino",
            value: "Cap",
            description:
              "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
          },
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
                label: "Latte",
                value: "Lat",
                description: "A milkier coffee than a cappuccino",
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
      </script>`,

  name: "Playground",
  args: defaultArgs,

  argTypes: {
    validationAriaLive: {
      options: ["polite", "assertive", "off"],

      control: {
        type: inlineRadioSelector,
      },
    },

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
        type: inlineRadioSelector,
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
        type: inlineRadioSelector,
      },
    },
  },
};
