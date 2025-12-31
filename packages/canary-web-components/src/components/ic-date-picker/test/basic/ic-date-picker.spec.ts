import { newSpecPage } from "@stencil/core/testing";
import { DatePicker } from "../../ic-date-picker";
import { Calendar } from "../../../ic-calendar/ic-calendar";
import { DateInput } from "../../../ic-date-input/ic-date-input";
import { Button } from "../../../../../../web-components/src/components/ic-button/ic-button";
import { Tooltip } from "../../../../../../web-components/src/components/ic-tooltip/ic-tooltip";
import {
  waitForTimeout,
  testKeyboardEvent as keyboardEvent,
} from "../../../../testspec.setup";
import { dateIsToday, dateMatches } from "../../../../utils/date-helpers";
import { InputLabel } from "../../../../../../web-components/src/components/ic-input-label/ic-input-label";

const DELAY_MS = 350;

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-date-picker", () => {
  it("should render default size", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" value="11/07/2023"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2023, 6, 11);
    datePicker.calendarOpen = true;

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(datePicker.calendarOpen).toBe(true);

    expect(page.root).toMatchSnapshot();
  });

  it("should render small datepicker", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" size="small" value="11/07/2023"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2023, 6, 11);

    datePicker.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render large datepicker", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" size="large" value="11/07/2023"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2023, 6, 11);
    datePicker.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render with today & clear buttons hidden", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" show-picker-today-button="false" show-picker-clear-button="false" value="11/07/2023"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2023, 6, 11);
    datePicker.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" disabled="true"></ic-date-picker>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render as required field", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" required="true"></ic-date-picker>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render with custom inputId and name", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" input-id="custom-id" name="custom-name" ></ic-date-picker>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render with custom validation", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" validation-status="error" validation-text="Text error text"></ic-date-picker>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render with validation-aria-live", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Test label" validation-status="error" validation-text="Test error text" validation-aria-live="assertive"></ic-date-picker>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with DD/MM/YYYY format", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" date-format="DD/MM/YYYY" value="11-07-2023"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2023, 6, 11);
    datePicker.setCalendarProps();
    datePicker.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render with MM/DD/YYYY format", async () => {
    const page = await newSpecPage({
      components: [
        DatePicker,
        DateInput,
        Calendar,
        Button,
        Tooltip,
        InputLabel,
      ],
      html: `<ic-date-picker label="Date picker label" date-format="MM/DD/YYYY" value="07-11-2023" helper-text="Use US Format"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2023, 6, 11);
    datePicker.setCalendarProps();
    datePicker.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render with YYYY/MM/DD format", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" date-format="YYYY/MM/DD" value="2023/07/11"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2023, 6, 11);
    datePicker.calendarOpen = true;
    datePicker.setCalendarProps();
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render with saturday and sundays disabled", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" value="11/07/2023" disable-days-message="Saturday and Sunday not allowed"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    page.root!.disableDays = [0, 6];
    datePicker.selectedDate = new Date(2023, 6, 11);
    datePicker.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
    expect(datePicker.dateInputProps.disableDaysMessage).toEqual(
      "Saturday and Sunday not allowed"
    );
  });

  it("should open at specified date", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" open-at-date="25/12/2022"></ic-date-picker>`,
    });

    page.rootInstance.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should have sunday as first day of week", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" open-at-date="25/12/2022" start-of-week="0"></ic-date-picker>`,
    });

    page.rootInstance.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should only allow selection in specified month", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" min="01/10/2023" max="31/10/2023"></ic-date-picker>`,
    });

    page.rootInstance.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.root).toMatchSnapshot();
  });

  it("should test disableFuture and disableFutureMessage props", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" disable-future="true" disable-future-message="Days in the future not allowed"></ic-date-picker>`,
    });
    await page.waitForChanges();

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2222, 11, 25);
    datePicker.calendarOpen = true;
    datePicker.setCalendarProps?.();
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(dateIsToday(datePicker.maxDate)).toBe(true);
    expect(datePicker.dateInputProps.disableFutureMessage).toEqual(
      "Days in the future not allowed"
    );

    datePicker.inputEl.value = "25/12/2222";
    await page.waitForChanges();

    //check dates in future allowed when prop is changed
    datePicker.disableFuture = false;
    datePicker.selectedDate = new Date(2222, 11, 25);
    datePicker.calendarOpen = true;
    await page.waitForChanges();

    expect(datePicker.maxDate.toString()).toBe("Invalid Date");
  });

  it("should test disablePast and disablePastMessage props", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" disable-past="true" disable-past-message="Days in the past not allowed"></ic-date-picker>`,
    });
    await page.waitForChanges();

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2022, 11, 25);
    datePicker.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(dateMatches(datePicker.minDate, new Date())).toBe(true);
    expect(datePicker.dateInputProps.disablePastMessage).toEqual(
      "Days in the past not allowed"
    );

    datePicker.calendarOpen = false;
    await page.waitForChanges();

    //check dates in past allowed when prop is changed
    datePicker.disablePast = false;
    datePicker.selectedDate = new Date(2022, 11, 25);
    datePicker.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(datePicker.minDate.toString()).toBe("Invalid Date");
  });

  it("should test invalidDateMessage", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" invalid-date-message="Invalid date"></ic-date-picker>`,
    });
    await page.waitForChanges();

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2000, 13, 25);
    await page.waitForChanges();

    expect(datePicker.dateInputProps.invalidDateMessage).toEqual(
      "Invalid date"
    );
  });

  it("should test updateDate with UTC date when source is IC-CALENDAR", async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      html: `<ic-date-picker label="Date picker label"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2022, 0, 1);

    const updateDateSpy = jest.spyOn(datePicker, "updateDate");

    const newDate = new Date(2023, 5, 15);
    const event = {
      detail: { value: newDate },
      composedPath: () => [{ tagName: "IC-CALENDAR" }],
    } as unknown as CustomEvent;
    datePicker.inputEl = { triggerIcChange: jest.fn() } as any;

    datePicker.dateChangeHandler(event);

    const utcDate = new Date(
      Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate())
    );

    expect(updateDateSpy).toHaveBeenCalledWith(newDate, utcDate);
    expect(datePicker.inputEl.triggerIcChange).toHaveBeenCalledWith(newDate);
  });

  it("should call updateDate with correct args when source is IC-DATE-INPUT", async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      html: `<ic-date-picker label="Date picker label"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2022, 0, 1);

    const updateDateSpy = jest.spyOn(datePicker, "updateDate");

    const newDate = new Date(2023, 5, 15);
    const utcDate = new Date(
      Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate())
    );
    const dateObject = { day: "15", month: "06", year: "2023" };
    const event = {
      detail: { value: newDate, utcValue: utcDate, dateObject },
      composedPath: () => [{ tagName: "IC-DATE-INPUT" }],
    } as unknown as CustomEvent;

    datePicker.dateChangeHandler(event);

    expect(updateDateSpy).toHaveBeenCalledWith(
      newDate,
      utcDate,
      false,
      dateObject
    );
    expect(datePicker.openAtDate).toEqual(newDate);
  });

  it("should not call updateDate if source is self", async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      html: `<ic-date-picker label="Date picker label"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.selectedDate = new Date(2022, 0, 1);

    const updateDateSpy = jest.spyOn(datePicker, "updateDate");

    const event = {
      detail: { value: new Date(2023, 5, 15) },
      composedPath: () => [datePicker.el],
    } as unknown as CustomEvent;

    datePicker.dateChangeHandler(event);

    expect(updateDateSpy).not.toHaveBeenCalled();
  });

  it("should update selectedDate, value, and call triggerIcChange when emit is true", async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      html: `<ic-date-picker label="Date picker label"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;

    datePicker.inputEl = { triggerIcChange: jest.fn() } as any;

    datePicker.selectedDate = new Date(2022, 0, 1);

    const newDate = new Date(2023, 5, 15);
    datePicker.updateDate(newDate, newDate, true, {
      day: "15",
      month: "06",
      year: "2023",
    });

    expect(datePicker.selectedDate).toEqual(newDate);
    expect(datePicker.value).toEqual(newDate);

    expect(datePicker.inputEl.triggerIcChange).toHaveBeenCalledWith(newDate);
  });

  it("should not update selectedDate or call triggerIcChange if date matches", async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      html: `<ic-date-picker label="Date picker label"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.inputEl = { triggerIcChange: jest.fn() } as any;

    const sameDate = new Date(2022, 0, 1);
    datePicker.selectedDate = sameDate;

    datePicker.updateDate(sameDate, sameDate);

    expect(datePicker.selectedDate).toEqual(sameDate);

    expect(datePicker.inputEl.triggerIcChange).not.toHaveBeenCalled();
  });

  it("should close picker when another element clicked", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" open-at-date="25/12/2022"></ic-date-picker>`,
    });

    page.rootInstance.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    page.root!.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.rootInstance.calendarOpen).toBe(false);
  });

  it("should close picker when Escape key pressed", async () => {
    const setCalendarFocusSpy = jest.spyOn(
      DateInput.prototype,
      "setCalendarFocus"
    );

    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" open-at-date="25/12/2022"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;
    datePicker.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const closeButtonClickHandlerSpy = jest.spyOn(
      datePicker,
      "closeButtonClickHandler"
    );

    datePicker.keyDownHandler(keyboardEvent("Escape"));

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(closeButtonClickHandlerSpy).toHaveBeenCalled();
    expect(setCalendarFocusSpy).toHaveBeenCalled();
    expect(datePicker.calendarOpen).toBe(false);
  });

  it("should clear dialog description when key pressed", async () => {
    const clearDialogDescriptionSpy = jest.spyOn(
      Calendar.prototype,
      "clearDialogDescription"
    );

    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label" open-at-date="25/12/2022"></ic-date-picker>`,
    });

    page.rootInstance.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    page.rootInstance.keyDownHandler(keyboardEvent("Tab"));

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(clearDialogDescriptionSpy).toHaveBeenCalled();
  });

  it("should test calendarButtonClickHandler", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;

    datePicker.calendarOpen = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    datePicker.calendarButtonClickHandler();

    expect(datePicker.calendarOpen).toBe(false);
    expect(datePicker.myCalendarButtonClicked).toBe(false);
  });

  it("should test localCalendarButtonClickHandler", async () => {
    const page = await newSpecPage({
      components: [DatePicker, DateInput, Calendar, Button, Tooltip],
      html: `<ic-date-picker label="Date picker label"></ic-date-picker>`,
    });

    const datePicker = page.rootInstance;

    const setCalendarPropsSpy = jest.spyOn(datePicker, "setCalendarProps");
    datePicker.localCalendarButtonClickHandler();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(datePicker.myCalendarButtonClicked).toBe(true);
    expect(datePicker.calendarOpen).toBe(true);
    expect(setCalendarPropsSpy).toBeCalled();
  });
});
