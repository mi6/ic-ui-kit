import React, { useState } from "react";
import { IcCalendar } from "../components";
import { IcTypography } from "@ukic/react";
import readme from "../../../canary-web-components/src/components/ic-calendar/readme.md";

export default {
  title: "React Components/Calendar",
  component: IcCalendar,
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

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
    const [selectedDate, setSelectedDate] = useState(null);

    return (
      <>
        <IcCalendar onIcChange={(ev) => setSelectedDate(ev.detail.value)} />
        <span>
          <IcTypography style={{ top: "420px" }}>
            {selectedDate
              ? `Selected date: ${selectedDate}`
              : "No date selected"}
          </IcTypography>
        </span>
      </>
    );
  },
  name: "Default",
};

/**
 * Set the size of the calendar by using the `size` prop. This prop takes the values `small`, `medium` (default) or `large`. Depending on the chosen size, the prop will apply styling to increase or decrease the amount of spacing within the component.
 */
export const Sizes = {
  render: () =>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--ic-space-md)" }}>
      <IcCalendar
        id="small-size-calendar"
        size="small"
      />
      <IcCalendar
        id="medium-size-calendar"
        size="medium"
      />
      <IcCalendar
        id="large-size-calendar"
        size="large"
      />
    </div>,
  name: "Sizes",
};

/**
 * The `value` prop sets the selected date in the calendar. The value can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.
 */
export const Value = {
  render: () => <IcCalendar id="value" value="01/01/2000" />,
  name: "Value",
};

/**
 * The `openAtDate` prop can be used to specify the date in view. This prop can be in any format supported by the `dateFormat` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.
 *
 * If the `value` prop is set, the date set using the `value` prop will take precedence and the calendar will open to that date instead.
 */

export const OpenAtDate = {
  render: () => <IcCalendar id="open-at-date" openAtDate="31/12/1999" />,
  name: "Open at date",
};

/**
 * The `min` and `max` props set the minimum and maximum selectable dates in the calendar. The values can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.
 */
export const MinMax = {
  render: () => <IcCalendar id="min-max" min="01/08/2008" max="31/08/2008" />,
  name: "Min & max",
};

/**
 * Any prop that accepts a date value can be set to a Javascript Date object. The following example sets the `value`, `max` and `min` props.
 */
export const JavascriptDates = {
  render: () => (
    <IcCalendar
      id="js-dates"
      value={new Date(2024, 6, 1)}
      min={new Date(2024, 6, 31)}
      max={new Date(2024, 6, 31)}
    />
  ),
  name: "JavaScript dates",
};

/**
 * The `dateFormat` prop determines how dates are displayed. The supported formats are `DD/MM/YYYY`, `MM/DD/YYYY` or `YYYY/MM/DD`.
 */
export const DateFormats = {
  render: () => <IcCalendar id="date-formats" dateFormat="MM/DD/YYYY" />,
  name: "Date formats",
};

/**
 * The `startOfWeek` prop sets the first day of the week in the calendar. This prop takes a number between 0 and 6, where 0 is Sunday and 6 is Saturday. By default, the first day of the week is set to Monday (1).
 */

export const StartOfWeek = {
  render: () => <IcCalendar id="start-of-week" startOfWeek={6} />,
  name: "Start of week",
};

/**
 * Disable specific days of the week by using the `disableDays` prop. This prop takes an array of numbers between 0 and 6, where 0 is Sunday and 6 is Saturday.
 */

export const DisableDaysOfWeek = {
  render: () => <IcCalendar id="disable-weekends" disableDays={[0, 6]} />,
  name: "Disable days of the week",
};

/**
 * Dates before today can be disabled with the `disablePast` prop.
 */
export const DisablePast = {
  render: () => <IcCalendar id="disable-past" disablePast />,
  name: "Disable dates in past",
};

/**
 * Dates after today can be disabled with the `disableFuture` prop.
 */
export const DisableFuture = {
  render: () => <IcCalendar id="disable-future" disableFuture />,
  name: "Disable dates in future",
};

/**
 * Days outside of the current month in view can be hidden by setting the `showDaysOutsideMonth` prop to `false`.
 */
export const DaysOutsideMonthHidden = {
  render: () => (
    <IcCalendar id="days-outside-month-hidden" showDaysOutsideMonth={false} />
  ),
  name: "Days outside month hidden",
};

/**
 * The "Go to today" and "Clear" buttons can be hidden from the calendar view by setting the `showTodayButton` and `showClearButton` props to `false`.
 */
export const ButtonsHidden = {
  render: () => (
    <IcCalendar
      id="buttons-hidden"
      showTodayButton={false}
      showClearButton={false}
    />
  ),
  name: "Today & clear buttons hidden",
};

/**
 * The `onIcChange` event is emitted by the calendar when the selected date changes.
 */
export const IcChangeEvent = {
  render: () => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [eventDetail, setEventDetail] = React.useState(null);

    const handleIcChange = (ev) => {
      setSelectedDate(ev.detail.value);
      setEventDetail(ev.detail);
    };
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <IcCalendar id="ic-change-event" onIcChange={handleIcChange} />
        <span>
          <IcTypography id="selected-date-display" style={{ top: "420px" }}>
            {selectedDate
              ? `Selected date: ${selectedDate}`
              : "No date selected"}
          </IcTypography>
          <IcTypography id="icchange-event-display" style={{ top: "428px" }}>
            {eventDetail && eventDetail.value
              ? (
                  <span>
                    icChange event emitted: {'{'}<br />
                    value: {String(eventDetail.value)},<br />
                    utcValue: {String(eventDetail.utcValue)},<br />
                    dateObject: {'{'}day: {eventDetail.dateObject.day}, month: {eventDetail.dateObject.month}, year: {eventDetail.dateObject.year}{'}'}<br />
                    {'}'}
                  </span>
                )
              : "No icChange event emitted"}
          </IcTypography>
        </span>
      </div>
    );
  },
  name: "IcChange event",
};

const defaultArgs = {
  dateFormat: "DD/MM/YYYY",
  disabled: false,
  disableDays: [],
  disableFuture: false,
  disablePast: false,
  max: null,
  min: null,
  openAtDate: null,
  showClearButton: true,
  showDaysOutsideMonth: true,
  showTodayButton: true,
  size: "medium",
  startOfWeek: 1,
  theme: "inherit",
  value: null,
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
  render: (args) => (<IcCalendar {...args} /> ),
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    dateFormat: {
      options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY/MM/DD"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "inline-radio",
      },
    },
    startOfWeek: {
      options: Object.keys(weekDays),
      mapping: weekDays,
      control: {
        type: "inline-radio",
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
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio",
      },
    },
  },
};
