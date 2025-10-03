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
        ];
      </script>
      <ic-select-new label="my label"></ic-select-new>
    `,

  name: "Default",
};