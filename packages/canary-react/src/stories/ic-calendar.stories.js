import React, { useState } from "react";
import { IcCalendar } from "../components";
import readme from "../../../canary-web-components/src/components/ic-calendar/readme.md";

export default {
    title: "React Components/Calendar",
    component: IcCalendar,
    parameters: {
        componentAPI: {
            data: readme
        }
    }
}

const defaultArgs = {
    dateFormat: "DD/MM/YYYY",
    disabled: false,
    disableDays: [],
    disableFuture: false,
    disablePast: false,
    max: "",
    min: "",
    showClearButton: true,
    showDaysOutsideMonth: true,
    showTodayButton: true,
    size:"medium",
    startOfWeek: 1,
    theme: "inherit",
    value: "",
}

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
    const [selectedDate, setSelectedDate] = useState(null);

    return (
      <>
        <IcCalendar 
          onIcChange={(ev) => setSelectedDate(ev.detail.selectedDate)} />
        <span>
          <IcTypography>
            {selectedDate? `Selected date: ${selectedDate}`: "No date selected"}
          </IcTypography>
        </span>
      </>
    );
  },
  name: "Default",
};

/**
 * Use a calendar to ...
 *
 * Click the 'Component API' tab to view all the available props and events for calendar.
 *
 * To use the calendar component, import `@ukic/canary-react` into your application.
 */

// export const Default = {
//   render: () => <IcCalendar />,
//   name: "Default",
// };

export const Playground = {
  render: (args) => <IcCalendar {...args} />,
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
  }
};