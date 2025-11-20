/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { html } from "lit-html";

// const defaultArgs = {
//   disabled: false,
//   ["full-width"]: false,
//   ["helper-text"]: "Select one option from the list",
//   ["hide-label"]: false,
//   loading: false,
//   loadingLabel: "Loading...",
//   label: "What is your favourite coffee?",
//   placeholder: "Select an option",
//   readonly: false,
//   required: false,
//   size: "medium",
//   validationStatus: "no status",
//   ["validation-text"]: "",
//   ["show-clear-button"]: false,
//   theme: "inherit",
// };

export default {
  title: "Web Components/Listbox",
  component: "ic-listbox",
};

export const Default = {
  render: () =>
    html`
      <script>
        var button = document.querySelector("ic-button");
        var listbox = document.querySelector("ic-listbox");
        listbox.options = [
          {
            label: "Cappuccino",
            value: "cappuccino",
            description: "Coffee frothed up with pressurised steam",
          },
          {
            label: "Americano",
            value: "americano",
            description: "Espresso coffee diluted with hot water",
          },
          {
            label: "Mocha",
            value: "mocha",
            description: "Coffee with chocolate",
          },
        ];
        listbox.anchorEl = button;
        function handleClick() {
          listbox.open = true;
        }
      </script>
      <ic-button onclick="handleClick()">Open listbox</ic-button>
      <ic-listbox open="false"></ic-listbox>
    `,
  name: "Default",
};
