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
  ["close-on-select"]: true,
  ["date-format"]: "dd/mm/yyyy",
  disabled: false,
  ["disable-days"]: [],
  ["disable-future"]: false,
  ["disable-past"]: false,
  max: "",
  min: "",
  open: true,
  ["show-clear-button"]: true,
  ["show-days-outside-month"]: true,
  ["show-today-button"]: true,
  size: "medium",
  ["start-of-week"]: 1,
  theme: "inherit",
  value: "",
};

export const Default = {
  args: { open: false },
  render: (args) => {
    const toggleCalendar = () => {
      console.log("hi");
      setTimeout(() => {
        let calendar = document.querySelector("ic-calendar#default");
        if (calendar) calendar.open = !calendar.open;
      });
    };
    return html`
      <ic-button
        variant="icon-primary"
        aria-label="Open calendar"
        id="button-1"
        onclick=${toggleCalendar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>calendar-month</title>
          <path
            d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"
          />
        </svg>
      </ic-button>
      <div>
        <ic-calendar close-on-select="false" id="default"> </ic-calendar>
      </div>
    `;
  },

  name: "Default",
};

export const Playground = {
  render: (args) =>
    html`<ic-calendar
      id="playground"
      open=${args.open}
      disabled=${args.disabled}
      size=${args.size}
      close-on-select=${args["close-on-select"]}
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
      // mapping: {
      //   "0": "Sunday",
      //   "1": "Monday",
      //   "2": "Tuesday",
      //   "3": "Wednesday",
      //   "4": "Thursday",
      //   "5": "Friday",
      //   "6": "Saturday",
      // },
    },
    theme: {
      control: "inline-radio",
      options: ["inherit", "light", "dark"],
    },
  },
};
