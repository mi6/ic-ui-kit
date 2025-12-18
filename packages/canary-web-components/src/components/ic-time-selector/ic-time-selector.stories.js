/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { html } from "lit-html";
import readme from "./readme.md";

export default {
  title: "Web Components/Time Selector",
  component: "ic-time-selector",
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use the time selector component to manually select a time in different formats.
 *
 * Click the 'Component API' tab to view all the available attributes, events and slots for time selector.
 *
 * To use the time selector component, import `@ukic/canary-web-components` into your application.
 *
 * Times can be selected by scrolling through each column or using the up and down arrow keys.
 *
 * To move between hour, minute and second using the keyboard, provide the required values based on the placeholders or use `:`.
 *
 */
export const Default = {
  render: () => html`<ic-time-selector></ic-time-selector>`,
  name: "Default",
};

/**
 * Retrieving the time selector value via `icChange` returns the time as a Date object.
 *
 * The event returns the Date object once hour, minute and second have been selected by clicking the tick icon button.
 */
export const IcChangeEvent = {
  render: () => html`<ic-time-selector></ic-time-selector>
    <script>
      var timeSelector = document.querySelector("ic-time-selector");
      timeSelector.addEventListener("icChange", (event) => {
        console.log("icChange event detail:", event.detail);
      });
    </script>`,
  name: "icChange Event",
};

/**
 * To set a value to the time selector, pass the time value in the relevant time format.
 */
export const WithValue = {
  render: () => html`<ic-time-selector value="14:30:40"></ic-time-selector>`,
  name: "With value",
};

/**
 * The time selector also accepts a number of different time formats within the value attribute:
 * - [Date object](#date-object)
 * - [Zulu time](#zulu-time)
 */
export const DateObject = {
  render: () => html`<ic-time-selector
      id="time-selector-default-time-date"
    ></ic-time-selector>
    <script>
      var timeSelectorDate = document.querySelector(
        "#time-selector-default-time-date"
      );
      timeSelectorDate.value = new Date("2025-07-14T15:30:45");
    </script>`,
  name: "Date object",
};

export const ZuluTime = {
  render: () => html`<div>
      <ic-time-selector id="time-selector-default-zulu-time"></ic-time-selector>
    </div>
    <script>
      var timeSelectorZulu = document.querySelector(
        "#time-selector-default-zulu-time"
      );
      timeSelectorZulu.value = "15:30:45Z";
    </script>`,
  name: "Zulu time",
};

/**
 * Demonstrates the `time-period` prop for 12-hour selection.
 */
export const TimePeriod = {
  render: () => html`<ic-time-selector time-period="12"></ic-time-selector>`,
  name: "12-Hour",
};

export const IcChangeEventTimePeriod = {
  render: () => html`<ic-time-selector time-period="12"></ic-time-selector>
    <script>
      var icTimeSelector = document.querySelector("ic-time-selector");
      icTimeSelector.addEventListener("icChange", (event) => {
        console.log("icChange event detail:", event.detail);
      });
    </script>`,
  name: "icChange Event - with time period",
};

export const DefaultValue12Hour = {
  render: () =>
    html`<ic-time-selector
      value="14:30:40"
      time-period="12"
    ></ic-time-selector>`,
  name: "Default value - 12 hour",
};

/**
 * Demonstrates the time format HH:MM.
 */
export const TimeFormat = {
  render: () => html`<ic-time-selector time-format="HH:MM"></ic-time-selector>`,
  name: "Time format HH:MM",
};

export const DefaultValueTimeFormat = {
  render: () =>
    html`<ic-time-selector
      value="14:30"
      time-format="HH:MM"
    ></ic-time-selector>`,
  name: "Default value - Time format HH:MM",
};

/**
 * Setting min time allows you to restrict the earliest time that can be selected.
 * The value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
 */
export const MinTime = {
  render: () => html`<ic-time-selector min="09:30:00"></ic-time-selector>`,
  name: "Min time (09:30)",
};

/**
 * Setting max time allows you to restrict the latest time that can be selected.
 * The value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
 */
export const MaxTime = {
  render: () => html`<ic-time-selector max="18:00:00"></ic-time-selector>`,
  name: "Max time (18:00)",
};

/**
 * To disable specific times in the time selector, set the `disable-times` prop.
 * The `disable-times` prop accepts an array of time objects or strings.
 * Each time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.
 * The time can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
 */
export const DisableTimes = {
  render: () => html`<ic-time-selector
      id="time-selector-default-disable-time"
    ></ic-time-selector>
    <script>
      var timeSelectorDisable = document.querySelector(
        "#time-selector-default-disable-time"
      );
      timeSelectorDisable.disableTimes = [{ start: "08:00", end: "10:00" }];
    </script>`,
  name: "Disabled times (08:00-10:00)",
};

/**
 * Demonstrates the size options for the time selector component.
 */
export const Small = {
  render: () =>
    html`<ic-time-selector size="small" time-period="12"></ic-time-selector>`,
  name: "Small",
};

export const Large = {
  render: () =>
    html`<ic-time-selector size="large" time-period="12"></ic-time-selector>`,
  name: "Large",
};
