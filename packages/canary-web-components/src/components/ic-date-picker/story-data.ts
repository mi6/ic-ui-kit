/* eslint-disable */
export const DATE_PICKER_LABEL = "When would you like to collect your coffee?";

export const createDatePickerElement = () => {
  const datePicker = document.createElement("ic-date-picker");
  datePicker.label = DATE_PICKER_LABEL;
  return datePicker;
};

export const Default = (): HTMLIcDatePickerElement => createDatePickerElement();

export const Small = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.size = "small";
  return datePicker;
};

export const Large = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.size = "large";
  return datePicker;
};

export const Sizes = (): HTMLElement => {
  const container = document.createElement("div");

  container.appendChild(Small());
  container.appendChild(Default());
  container.appendChild(Large());

  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  return container;
};

export const MaxWidth = (): HTMLElement => {
  const container = document.createElement("div");
  container.className = "dp-max-width-example";

  container.appendChild(Small());
  container.appendChild(Default());
  container.appendChild(Large());

  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  return container;
};

export const MonthFirst = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.dateFormat = "MM/DD/YYYY";
  return datePicker;
};

export const YearFirst = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.dateFormat = "YYYY/MM/DD";
  return datePicker;
};

export const DateFormats = (): HTMLElement => {
  const container = document.createElement("div");

  container.appendChild(Default());
  container.appendChild(MonthFirst());
  container.appendChild(YearFirst());

  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  return container;
};

export const Value = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.value = "01/01/2024";
  return datePicker;
};

export const OpenAt = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.helperText =
    "The calendar will open showing 25th December 2024, if no date selected";
  datePicker.openAtDate = "2024-12-25";
  return datePicker;
};

export const WeekStart = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.startOfWeek = 0;
  return datePicker;
};

export const WorkingWeek = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.disableDays = [0, 6];
  return datePicker;
};

export const MaxMin = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.helperText = "Choose a date between the 1st and 31st of July";
  datePicker.min = "2024-07-01";
  datePicker.max = "2024-07-31";
  datePicker.showPickerTodayButton = false;
  return datePicker;
};

export const Disabled = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.disabled = true;
  return datePicker;
};

export const DisablePast = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.disablePast = true;
  return datePicker;
};

export const DisableFuture = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.disableFuture = true;
  return datePicker;
};

export const HideOutsideMonth = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.showDaysOutsideMonth = false;
  return datePicker;
};

export const HideButtons = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.showPickerClearButton = false;
  datePicker.showPickerTodayButton = false;
  return datePicker;
};

export const JSDates = (): HTMLIcDatePickerElement => {
  const datePicker = createDatePickerElement();
  datePicker.helperText = "Choose a date between the 1st and 31st of July";
  datePicker.showPickerTodayButton = false;
  datePicker.min = new Date(2024, 6, 1);
  datePicker.max = new Date(2024, 6, 31);
  datePicker.value = new Date(2024, 6, 15);
  return datePicker;
};

const updateSelectedDate = (ev: CustomEvent): void => {
  const el = document.querySelector("#selected-date");
  let text = "Selected date: ";
  if (ev.detail.value) {
    text += ev.detail.value;
  }
  el.innerHTML = text;
  console.log("ic-change", ev.detail.value);
};

export const IcChangeDate = (): HTMLElement => {
  const datePicker = createDatePickerElement();
  datePicker.addEventListener("icChange", updateSelectedDate);
  const container = document.createElement("div");

  const selDate = document.createElement("span");
  selDate.innerText = "Selected date:";
  selDate.id = "selected-date";

  container.appendChild(datePicker);
  container.appendChild(selDate);

  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "50px";

  return container;
};
