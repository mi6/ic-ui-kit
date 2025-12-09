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
const SELECTED_DATE_DISPLAY = "selected-date-display";
const SELECTED_DATE = "Selected date: ";
const NO_DATE_SELECTED = "No date selected";

/**
 * Use a calendar to select a single date where visualising that date could be useful.
 *
 * Click the 'Component API' tab to view all the available props and events for calendars.
 *
 * To use the calendar component, import `@ukic/canary-web-components` into your application.
 *
 * The default calendar uses the date format of `DD/MM/YYYY`.
 */
export const Default = {
  render: () => {
    setTimeout(() => {
      document.addEventListener("icChange", function (event) {
        if (event.detail.value) {
          document.getElementById(SELECTED_DATE_DISPLAY).textContent =
            SELECTED_DATE + event.detail.value;
        } else {
          document.getElementById(SELECTED_DATE_DISPLAY).textContent =
            NO_DATE_SELECTED;
        }
      });
    }, 0);
    return html`<ic-calendar id="default"></ic-calendar>
      <span>
        <ic-typography id="selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
      </span>`;
  },
  name: "Default",
};

/**
 * Set the size of the calendar by using the `size` prop. This prop takes the values `small`, `medium` (default) or `large`. Depending on the chosen size, the prop will apply styling to increase or decrease the amount of spacing within the component.
 */
export const Sizes = {
  render: () =>
    html`<div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-calendar id="small-size-calendar" size="small"></ic-calendar>
      <ic-calendar id="medium-size-calendar" size="medium"></ic-calendar>
      <ic-calendar id="large-size-calendar" size="large"></ic-calendar>
    </div>`,
  name: "Sizes",
};

/**
 * The `value` prop sets the selected date in the calendar. The value can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.
 */
export const Value = {
  render: () => html`<ic-calendar id="value" value="01/01/2000"></ic-calendar>`,
  name: "Value",
};

/**
 * The `open-at-date` prop can be used to specify the date in view. This prop can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.
 *
 * If the `value` prop is set, the date set using the `value` prop will take precedence and the calendar will open to that date instead.
 */

export const OpenAtDate = {
  render: () =>
    html`<ic-calendar
      id="open-at-date"
      open-at-date="31/12/1999"
    ></ic-calendar>`,
  name: "Open at date",
};

/**
 * The `min` and `max` props set the minimum and maximum selectable dates in the calendar. The values can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.
 */
export const MinMax = {
  render: () =>
    html`<ic-calendar
      id="min-max"
      min="01/08/2008"
      max="31/08/2008"
    ></ic-calendar>`,
  name: "Min & max",
};

/**
 * Any prop that accepts a date value can be set to a Javascript Date object. The following example sets the `value`, `max` and `min` props.
 */
export const JavascriptDates = {
  render: () => html`<ic-calendar id="js-dates"></ic-calendar>
    <script>
      const calendar = document.querySelector("#js-dates");
      calendar.value = new Date(2024, 6, 1);
      calendar.min = new Date(2024, 6, 31);
      calendar.max = new Date(2024, 6, 31);
    </script>`,
  name: "JavaScript dates",
};

/**
 * The `date-format` prop determines how dates are displayed. The supported formats are `DD/MM/YYYY`, `MM/DD/YYYY` or `YYYY/MM/DD`.
 */
export const DateFormats = {
  render: () =>
    html`<ic-calendar
      id="date-formats"
      date-format="MM/DD/YYYY"
    ></ic-calendar>`,
  name: "Date formats",
};

/**
 * The `start-of-week` prop sets the first day of the week in the calendar. This prop takes a number between 0 and 6, where 0 is Sunday and 6 is Saturday. By default, the first day of the week is set to Monday (1).
 */

export const StartOfWeek = {
  render: () =>
    html`<ic-calendar id="start-of-week"></ic-calendar>
      <script>
        const calendar = document.querySelector("#start-of-week");
        calendar.startOfWeek = 6;
      </script>`,
  name: "Start of week",
};

/**
 * Disable specific days of the week by using the `disable-days` prop. This prop takes an array of numbers between 0 and 6, where 0 is Sunday and 6 is Saturday.
 */

export const DisableDaysOfWeek = {
  render: () =>
    html`<ic-calendar id="disable-weekends"></ic-calendar>
      <script>
        const calendar = document.querySelector("#disable-weekends");
        calendar.disableDays = [0, 6];
      </script>`,
  name: "Disable days of the week",
};

/**
 * Dates before today can be disabled with the `disable-past` prop.
 */
export const DisablePast = {
  render: () => html` <ic-calendar
    id="disable-past"
    disable-past="true"
  ></ic-calendar>`,
  name: "Disable dates in past",
};

/**
 * Dates after today can be disabled with the `disable-future` prop.
 */
export const DisableFuture = {
  render: () =>
    html`<ic-calendar id="disable-future" disable-future="true"></ic-calendar>`,
  name: "Disable dates in future",
};

/**
 * Days outside of the current month in view can be hidden by setting the `show-days-outside-month` prop to `false`.
 */
export const DaysOutsideMonthHidden = {
  render: () =>
    html`<ic-calendar
      id="days-outside-month-hidden"
      show-days-outside-month="false"
    ></ic-calendar>`,
  name: "Days outside month hidden",
};

/**
 * The "Go to today" and "Clear" buttons can be hidden from the calendar view by setting the `show-today-button` and `show-clear-button` props to `false`.
 */
export const ButtonsHidden = {
  render: () =>
    html`<ic-calendar
      id="buttons-hidden"
      show-today-button="false"
      show-clear-button="false"
    ></ic-calendar>`,
  name: "Today & clear buttons hidden",
};

/**
 * The `icChange` event is emitted by the calendar when the selected date changes.
 */
export const IcChangeEvent = {
  render: () => {
    setTimeout(() => {
      document.addEventListener("icChange", function (event) {
        if (event.detail.value) {
          document.getElementById(SELECTED_DATE_DISPLAY).textContent =
            SELECTED_DATE + event.detail.value;
          document.getElementById(
            "icchange-event-display"
          ).innerHTML = `icChange event emitted: {<br>
            value: ${event.detail.value},<br>
            utcValue: ${event.detail.utcValue},<br>
            dateObject: {day: ${event.detail.dateObject.day}, month: ${event.detail.dateObject.month}, year: ${event.detail.dateObject.year}}<br>
          }`;
        } else {
          document.getElementById(SELECTED_DATE_DISPLAY).textContent =
            NO_DATE_SELECTED;
          document.getElementById("icchange-event-display").textContent =
            "No icChange event emitted";
        }
      });
    }, 0);
    return html`<ic-calendar id="ic-change-event"></ic-calendar>
      <span>
        <ic-typography id="selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
        <ic-typography id="icchange-event-display" style="top: 428px">
          No icChange event emitted
        </ic-typography>
      </span>`;
  },
  name: "IcChange event",
};

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

export const Playground = {
  render: (args) => {
    setTimeout(() => {
      document.addEventListener("icChange", function (event) {
        if (event.detail.value) {
          document.getElementById(
            "playground-selected-date-display"
          ).textContent = SELECTED_DATE + event.detail.value;
        } else {
          document.getElementById(
            "playground-selected-date-display"
          ).textContent = NO_DATE_SELECTED;
        }
      });
    }, 0);
    return html`<ic-calendar
        id="playground"
        disabled=${args.disabled}
        size=${args.size}
        date-format=${args["date-format"]}
        disable-days=${JSON.stringify(args["disable-days"])}
        disable-future=${args["disable-future"]}
        disable-past=${args["disable-past"]}
        max=${args.max}
        min=${args.min}
        open-at-date=${args["open-at-date"]}
        show-clear-button=${args["show-clear-button"]}
        show-days-outside-month=${args["show-days-outside-month"]}
        show-today-button=${args["show-today-button"]}
        start-of-week=${args["start-of-week"]}
        theme=${args.theme}
        value=${args.value}
      ></ic-calendar>
      <span>
        <ic-typography id="playground-selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
      </span>`;
  },
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
