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