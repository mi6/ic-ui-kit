import readme from "./readme.md";
import {
  DateFormats,
  Default,
  Disabled,
  DisableFuture,
  DisablePast,
  HideButtons,
  HideOutsideMonth,
  IcChangeDate,
  JSDates,
  MaxMin,
  MaxWidth,
  OpenAt,
  Sizes,
  Value,
  WeekStart,
  WorkingWeek,
} from "./story-data";

export default {
  title: "Web Components/Date Picker",
  component: "Date Picker",

  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const DefaultExample = {
  render: () => Default(),
  name: "Default",
  height: "540px",
};

export const SizesExample = {
  render: () => Sizes(),
  name: "Sizes",
  height: "790px",
};

export const MaxWidthExample = {
  render: () => MaxWidth(),
  name: "Max width",
  height: "790px",
};

export const DisabledExample = {
  render: () => Disabled(),
  name: "Disabled",
  height: "100px",
};

export const DateFormatsExample = {
  render: () => DateFormats(),
  name: "Date formats",
  height: "750px",
};

export const ValueExample = {
  render: () => Value(),
  name: "Value",
  height: "540px",
};

export const OpenAtDate = {
  render: () => OpenAt(),
  name: "Open at date",
  height: "540px",
};

export const StartOfWeek = {
  render: () => WeekStart(),
  name: "Start of week",
  height: "540px",
};

export const DisableDaysOfWeek = {
  render: () => WorkingWeek(),
  name: "Disable days of week",
  height: "540px",
};

export const MaxMinExample = {
  render: () => MaxMin(),
  name: "Max & Min",
  height: "500px",
};

export const DisableDatesInPast = {
  render: () => DisablePast(),
  name: "Disable dates in past",
  height: "540px",
};

export const DisableDatesInFuture = {
  render: () => DisableFuture(),
  name: "Disable dates in future",
  height: "540px",
};

export const DaysOutsideMonthHidden = {
  render: () => HideOutsideMonth(),
  name: "Days outside month hidden",
  height: "540px",
};

export const TodayClearButtonsHidden = {
  render: () => HideButtons(),
  name: "Today & clear buttons hidden",
  height: "480px",
};

export const JavaScriptDates = {
  render: () => JSDates(),
  name: "JavaScript dates",
  height: "500px",
};

export const IcChangeEvent = {
  render: () => IcChangeDate(),
  name: "IcChange event",
  height: "540px",
};
