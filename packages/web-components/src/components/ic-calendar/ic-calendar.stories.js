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

const INLINE_RADIO = "inline-radio";

const defaultArgs = {
  ["date-format"]: "DD/MM/YYYY",
  disabled: false,
  ["disable-days"]: [],
  ["disable-future"]: false,
  ["disable-past"]: false,
  max: "",
  min: "",
  ["open-at-date"]: "",
  ["show-clear-button"]: true,
  ["show-days-outside-month"]: true,
  ["show-today-button"]: true,
  size: "medium",
  ["start-of-week"]: 1,
  theme: "inherit",
  value: "",
};

const weekDays = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
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
    return html`<ic-calendar
        id="default"
        open-at-date="04/11/2001"
      ></ic-calendar>
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
      open-at-date=${args.openAtDate}
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
    ["date-format"]: {
      options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY/MM/DD"],
      control: {
        type: INLINE_RADIO,
      },
    },
    size: {
      control: INLINE_RADIO,
      options: ["small", "medium", "large"],
    },
    ["start-of-week"]: {
      options: Object.keys(weekDays),
      mapping: weekDays,
      control: {
        type: INLINE_RADIO,
        labels: {
          Sunday: "Sunday",
          Monday: "Monday",
          Tuesday: "Tuesday",
          Wednesday: "Wednesday",
          Thursday: "Thursday",
          Friday: "Friday",
          Saturday: "Saturday",
        },
      },
    },
    theme: {
      control: INLINE_RADIO,
      options: ["inherit", "light", "dark"],
    },
  },
};
