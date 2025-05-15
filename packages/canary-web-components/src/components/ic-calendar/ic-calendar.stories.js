/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import readme from "./readme.md";
import { html } from "lit-html";
export default {
  title: "Web Components/Calendar",
  component: "ic-calendar",
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

const defaultArgs = {
  ["date-format"]: "dd/mm/yyyy",
  disabled: false,
  ["disable-days"]: [],
  ["disable-future"]: false,
  ["disable-past"]: false,
  max: "",
  min: "",
  ["show-clear-button"]: true,
  ["show-days-outside-month"]: true,
  ["show-today-button"]: true,
  size: "medium",
  ["start-of-week"]: 1,
  theme: "inherit",
  value: "",
};

export const Default = {
  render: () => {
    setTimeout(() => {
      document.addEventListener("icChange", function (event) {
        if (event.detail.selectedDate) {
          document.getElementById("selected-date-display").textContent =
            "Selected date: " + event.detail.selectedDate;
        } else {
          document.getElementById("selected-date-display").textContent =
            "No date selected";
        }
      });
    }, 0);
    return html`<ic-calendar id="default"></ic-calendar>
      <span>
        <ic-typography id="selected-date-display" style="top: 400px"
          >No date selected</ic-typography
        >
      </span>
      }`;
  },
  name: "Default",
};

export const Playground = {
  render: (args) =>
    html`<ic-calendar
      id="playground"
      disabled=${args.disabled}
      size=${args.size}
      date-format=${args["date-format"]}
      disable-days=${JSON.stringify(args["disable-days"])}
      disable-future=${args["disable-future"]}
      disable-past=${args["disable-past"]}
      max=${args.max}
      min=${args.min}
      show-clear-button=${args["show-clear-button"]}
      show-days-outside-month=${args["show-days-outside-month"]}
      show-today-button=${args["show-today-button"]}
      start-of-week=${args["start-of-week"]}
      theme=${args.theme}
      value=${args.value}
    ></ic-calendar>`,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    ["start-of-week"]: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5", "6"],
    },
    theme: {
      control: "inline-radio",
      options: ["inherit", "light", "dark"],
    },
  },
};
