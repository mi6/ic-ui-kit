import { newSpecPage } from "@stencil/core/testing";
import { Calendar } from "../../ic-calendar";
import { Button } from "../../../../../../web-components/src/components/ic-button/ic-button";
import {
  waitForTimeout,
  testKeyboardEvent as keyboardEvent,
} from "../../../../testspec.setup";
import {
  // clampDate,
  dateIsToday,
  dateMatches,
} from "../../../../utils/date-helpers";

const DELAY_MS = 350;

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-calendar visual regression tests for its props", () => {
  it("should render default size", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar value="11/07/2023"></ic-calendar>`,
    });

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it("should render small calendar", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar size="small" value="11/07/2023"></ic-calendar>`,
    });

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it("should render large calendar", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar size="large" value="11/07/2023"></ic-calendar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with today & clear buttons hidden", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar show-today-button="false" show-clear-button="false" value="11/07/2023"></ic-calendar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar disabled="true" value="11/07/2023"></ic-calendar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with MM/DD/YYYY format", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar date-format="MM/DD/YYYY" value="07-11-2023"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2023, 6, 11));
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render with YYYY/MM/DD format", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar date-format="YYYY/MM/DD" value="2023/07/11"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2023, 6, 11));
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render with saturday and sundays disabled", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar value="11/07/2023"></ic-calendar>`,
    });

    if (page.root) {
      page.root.disableDays = [0, 6];
    }

    page.rootInstance.setSelectedDate(new Date(2023, 6, 11));
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should open at a specified date", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it("should test the start-of-week prop and set sunday as first day of week", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022" start-of-week="0"></ic-calendar>`,
    });

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });
});

describe("ic-calendar expected behaviour", () => {
  it("should have correct date focussed on open", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    Object.defineProperty(page.rootInstance.focussedDayEl, "focus", {
      value: jest.fn(),
    });

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.rootInstance.focussedDate).toEqual(
      page.rootInstance.selectedDate
    );
  });

  it("should update date when day clicked", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    const calendar = page.rootInstance;

    calendar.focussedDayEl = { focus: jest.fn() } as any;

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const dayButton = page.root!.shadowRoot!.querySelector(
      "tr:nth-child(4) > td:nth-child(5) > div.day-button-container > button"
    );

    (dayButton as HTMLElement).click();
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.rootInstance.selectedDate).toEqual(new Date(2022, 11, 23));
  });

  it("should show month picker view when button clicked", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    Object.defineProperty(page.rootInstance.focussedDayEl, "focus", {
      value: jest.fn(),
    });

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const monthButton = page.root!.shadowRoot!.querySelector(
      ".month-picker-button"
    ) as HTMLIcButtonElement;
    monthButton.click();
    expect(monthButton).not.toBeNull();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.root).toMatchSnapshot();

    expect(page.rootInstance.monthPickerVisible).toBe(true);
    monthButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.rootInstance.monthPickerVisible).toBe(false);
  });

  it("should show year picker view when button clicked", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const yearButton = page.root!.shadowRoot!.querySelector(
      ".year-picker-button"
    ) as HTMLIcButtonElement;
    yearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.root).toMatchSnapshot();

    expect(page.rootInstance.yearPickerVisible).toBe(true);

    yearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.rootInstance.yearPickerVisible).toBe(false);
  });

  it("should only allow selection in specified month", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar min="01/10/2023" max="31/10/2023"></ic-calendar>`,
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.root).toMatchSnapshot();
  });

  it("should select month when button clicked", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const monthButton = page.root!.shadowRoot!.querySelector(
      ".month-picker-button"
    ) as HTMLIcButtonElement;
    monthButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const janButton = page.root!.shadowRoot!.querySelector(
      "div.month-picker-row > ic-button:nth-child(1)"
    ) as HTMLIcButtonElement;
    janButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.rootInstance.monthPickerVisible).toBe(false);
    expect(page.rootInstance.monthInView).toBe(0);
    expect(page.rootInstance.liveRegionEl.innerText).toEqual(
      "January selected. January 2022 currently in view."
    );
  });

  it("should select year when button clicked", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const yearButton = page.root!.shadowRoot!.querySelector(
      ".year-picker-button"
    ) as HTMLIcButtonElement;
    yearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const firstYearButton = page.root!.shadowRoot!.querySelector(
      "div.year-picker-row:nth-child(1) > ic-button:nth-child(2)"
    ) as HTMLIcButtonElement;
    firstYearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.rootInstance.yearPickerVisible).toBe(false);
    expect(page.rootInstance.yearInView).toBe(2020);
  });

  it("should go to previous decade when button clicked", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const yearButton = page.root!.shadowRoot!.querySelector(
      ".year-picker-button"
    ) as HTMLIcButtonElement;
    yearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const prevDecadeButton = page.root!.shadowRoot!.querySelector(
      "div.year-picker-row:nth-child(1) >  ic-button.prev-decade"
    ) as HTMLIcButtonElement;
    prevDecadeButton.click();
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const firstYearButton = page.root!.shadowRoot!.querySelector(
      "div.year-picker-row:nth-child(1) > ic-button:nth-child(2)"
    ) as HTMLIcButtonElement;
    firstYearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.rootInstance.yearInView).toBe(2010);
  });

  it("should go to next decade when button clicked", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const yearButton = page.root!.shadowRoot!.querySelector(
      ".year-picker-button"
    ) as HTMLIcButtonElement;
    yearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const nextDecadeButton = page.root!.shadowRoot!.querySelector(
      "div.year-picker-row > ic-button.next-decade"
    ) as HTMLIcButtonElement;
    nextDecadeButton.click();
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const firstYearButton = page.root!.shadowRoot!.querySelector(
      "div.year-picker-row:nth-child(1) > ic-button:nth-child(2)"
    ) as HTMLIcButtonElement;
    firstYearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.rootInstance.yearInView).toBe(2030);
  });

  it("should test disableFuture prop", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar disable-future="true"></ic-calendar>`,
    });
    await page.waitForChanges();

    page.rootInstance.setSelectedDate(new Date(2222, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(dateIsToday(page.rootInstance.maxDate)).toBe(true);
    expect(dateMatches(page.rootInstance.focussedDate, new Date())).toBe(true);

    page.rootInstance.disableFuture = false;
    page.rootInstance.setSelectedDate(new Date(2222, 11, 25));
    await page.waitForChanges();

    expect(page.rootInstance.maxDate.toString()).toBe("Invalid Date");
    expect(dateMatches(page.rootInstance.focussedDate, new Date())).toBe(true);
  });

  it("should test disablePast prop", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar disable-past="true"></ic-calendar>`,
    });
    await page.waitForChanges();

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(dateMatches(page.rootInstance.minDate, new Date())).toBe(true);
    expect(dateMatches(page.rootInstance.focussedDate, new Date())).toBe(true);

    await page.waitForChanges();

    //check dates in past allowed when prop is changed
    page.rootInstance.disablePast = false;
    page.rootInstance.handleSelectDay(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.minDate.toString()).toBe("Invalid Date");
    // expect(page.root).toMatchSnapshot();
    expect(
      dateMatches(page.rootInstance.focussedDate, new Date(2022, 11, 25))
    ).toBe(true);
  });

  it("should test 'go to today' button", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const todayButton = page.root!.shadowRoot!.querySelector(
      "div.bottom-buttons > #today-button"
    ) as HTMLIcButtonElement;
    todayButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(dateIsToday(page.rootInstance.focussedDate)).toBe(true);
  });

  it("should test 'go to today' button - month view", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    page.rootInstance.monthPickerVisible = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const todayButton = page.root!.shadowRoot!.querySelector(
      "div.bottom-buttons > #today-button"
    ) as HTMLIcButtonElement;
    todayButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.monthPickerVisible).toBe(false);
    expect(dateIsToday(page.rootInstance.focussedDate)).toBe(true);
  });

  it("should test 'go to today' button - year view", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    page.rootInstance.yearPickerVisible = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const todayButton = page.root!.shadowRoot!.querySelector(
      "div.bottom-buttons > #today-button"
    ) as HTMLIcButtonElement;
    todayButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.yearPickerVisible).toBe(false);
    expect(dateIsToday(page.rootInstance.focussedDate)).toBe(true);
  });

  it("should test clear button", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar value="25/12/2022"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    Object.defineProperty(page.rootInstance.focussedDayEl, "focus", {
      value: jest.fn(),
    });
    expect(page.rootInstance.focussedDayEl.focus).not.toHaveBeenCalled();
    expect(page.rootInstance.selectedDate).not.toBe(null);

    const clearButton = page.root!.shadowRoot!.querySelector(
      "div.bottom-buttons > #clear-button"
    ) as HTMLIcButtonElement;
    clearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.selectedDate).toBe(null);
    expect(page.rootInstance.focussedDayEl.focus).toHaveBeenCalled();
    expect(page.rootInstance.liveRegionEl.textContent).toBe(
      "Selected date cleared. December 2022 currently in view."
    );
  });

  it("should test clear button - month view", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar value="25/12/2022"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    page.rootInstance.monthPickerVisible = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    Object.defineProperty(page.rootInstance.focussedMonthEl, "setFocus", {
      value: jest.fn(),
    });
    expect(page.rootInstance.focussedMonthEl.setFocus).not.toHaveBeenCalled();
    expect(page.root!.value).not.toBe("");

    const clearButton = page.root!.shadowRoot!.querySelector(
      "div.bottom-buttons > #clear-button"
    ) as HTMLIcButtonElement;
    clearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.selectedDate).toBe(null);
    expect(page.rootInstance.monthPickerVisible).toBe(true);
    expect(page.rootInstance.focussedMonthEl.setFocus).toHaveBeenCalled();
    expect(page.rootInstance.liveRegionEl.textContent).toBe(
      "Selected date cleared."
    );
  });

  it("should test clear button - year view", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar value="25/12/2022"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    page.rootInstance.yearPickerVisible = true;
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    Object.defineProperty(page.rootInstance.focussedYearEl, "setFocus", {
      value: jest.fn(),
    });
    expect(page.rootInstance.focussedYearEl.setFocus).not.toHaveBeenCalled();
    expect(page.root!.value).not.toBe("");

    const clearButton = page.root!.shadowRoot!.querySelector(
      "div.bottom-buttons > #clear-button"
    ) as HTMLIcButtonElement;
    clearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.root!.value).toBeNull();
    expect(page.rootInstance.yearPickerVisible).toBe(true);
    expect(page.rootInstance.focussedYearEl.setFocus).toHaveBeenCalled();
    expect(page.rootInstance.liveRegionEl.textContent).toBe(
      "Selected date cleared."
    );
  });

  it("should test month & year nav buttons", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar value="25/12/2022"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const prevMonthButton = page.root!.shadowRoot!.querySelector(
      "#previous-month-button"
    ) as HTMLIcButtonElement;
    await page.waitForChanges();
    prevMonthButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 10, 25));

    const nextMonthButton = page.root!.shadowRoot!.querySelector(
      "#next-month-button"
    ) as HTMLIcButtonElement;
    nextMonthButton.click();
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 25));

    const prevYearButton = page.root!.shadowRoot!.querySelector(
      "#previous-year-button"
    ) as HTMLIcButtonElement;
    prevYearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.focussedDate).toEqual(new Date(2021, 11, 25));

    const nextYearButton = page.root!.shadowRoot!.querySelector(
      "#next-year-button"
    ) as HTMLIcButtonElement;
    nextYearButton.click();
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 25));
  });

  it("should test nav button mouse down handler", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const dayButton = page.root!.shadowRoot!.querySelector(
      "#previous-month-button"
    );
    const mouseEvent = new window.window.MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
    });

    Object.defineProperty(mouseEvent, "preventDefault", {
      value: jest.fn(),
    });

    dayButton!.dispatchEvent(mouseEvent);
    await page.waitForChanges();

    expect(mouseEvent.preventDefault).toHaveBeenCalled();
  });

  it("should test keyboard navigation when weekends disabled", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
    });

    page.root!.disableDays = [0, 6];
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    page.rootInstance.handleCalendarKeyDown(keyboardEvent("ArrowRight"));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 26));

    page.rootInstance.handleCalendarKeyDown(keyboardEvent("ArrowLeft"));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 23));
  });

  it("should test blur of day button", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.dayButtonFocussed).toBe(true);

    const dayButton = page.root!.shadowRoot!.querySelector(
      "tr:nth-child(4) > td:nth-child(5) > div.day-button-container > button"
    );

    (dayButton as HTMLButtonElement).blur();

    expect(page.rootInstance.dayButtonFocussed).toBe(false);
  });
  // TODO: why is the other version different?
  it("should test setAriaLiveRegionText", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const text = "some text in the aria live region";
    page.rootInstance.setAriaLiveRegionText(text);
    await page.waitForChanges();

    expect(page.rootInstance.liveRegionEl.innerText).toEqual(text);
  });

  it("should test focus and blur of year button", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const yearButton = page.root!.shadowRoot!.querySelector(
      ".year-picker-button"
    ) as HTMLIcButtonElement;
    yearButton.click();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.yearButtonFocussed).toBe(false);

    const firstYearButton = page.root!.shadowRoot!.querySelector(
      "div.year-picker-row:nth-child(1) > ic-button:nth-child(2)"
    ) as HTMLIcButtonElement;
    firstYearButton.focus();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.yearButtonFocussed).toBe(true);

    firstYearButton.blur();

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.yearButtonFocussed).toBe(false);
  });

  it("should test change of startOfWeek", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button],
      html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.rootInstance.orderedDaysOfWeek).toEqual([
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ]);

    page.root!.startOfWeek = 4;
    await page.waitForChanges();

    expect(page.rootInstance.orderedDaysOfWeek).toEqual([
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
    ]);
  });

  describe("ic-calendar expected behaviour specific to ic-date-picker", () => {
    it("should test tab on 'go to today' button goes to first element on dialog when clear disabled", async () => {
      const page = await newSpecPage({
        components: [Calendar, Button],
        html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
      });

      const calendar = page.rootInstance;

      calendar.parentIsDatePicker = true;
      calendar.focussedDayEl = { focus: jest.fn() } as any;
      const focusFirstElementSpy = jest.spyOn(calendar, "focusFirstElement");

      await page.waitForChanges();
      await waitForTimeout(DELAY_MS);

      page.rootInstance.todayButtonKeyDownHandler(keyboardEvent("Tab"));

      await page.waitForChanges();
      expect(focusFirstElementSpy).toHaveBeenCalled();
    });

    it("should test tab on clear button goes to first element on dialog", async () => {
      const page = await newSpecPage({
        components: [Calendar, Button],
        html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
      });

      const calendar = page.rootInstance;

      calendar.parentIsDatePicker = true;
      calendar.focussedDayEl = { focus: jest.fn() } as any;
      const focusFirstElementSpy = jest.spyOn(calendar, "focusFirstElement");

      await page.waitForChanges();
      await waitForTimeout(DELAY_MS);

      page.rootInstance.clearButtonKeyDownHandler(keyboardEvent("Tab"));

      await page.waitForChanges();
      expect(focusFirstElementSpy).toHaveBeenCalled();
    });
  });
});

// describe("ic-calendar methods", () => {
//   it("should update selectedDate when setSelectedDate is called", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar value="11/07/2023"></ic-calendar>`,
//     });
//     page.rootInstance.setSelectedDate(new Date("2022-03-25"));
//     expect(page.rootInstance.selectedDate).toEqual(new Date("2022-03-25"));
//     expect(page.rootInstance.value).toEqual(new Date("2022-03-25"));
//     page.rootInstance.setSelectedDate(null);
//     expect(page.rootInstance.selectedDate).toBeNull();
//     expect(page.rootInstance.value).toBeNull();
//   });

//   it("should update focussedDate when setFocussedDate is called", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar value="11/07/2023"></ic-calendar>`,
//     });
//     page.rootInstance.setFocussedDate(new Date("2024-01-01"));
//     expect(page.rootInstance.focussedDate).toEqual(new Date("2024-01-01"));
//   });

//   it("should test that isValidDateValue validates various date formats and values", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });
//     const calendar = page.rootInstance;

//     // Valid Date object
//     expect(calendar.isValidDateValue(new Date(2023, 6, 11))).toBe(true);
//     // Invalid Date object
//     expect(calendar.isValidDateValue(new Date("invalid"))).toBe(false);
//     // Valid ISO string
//     expect(calendar.isValidDateValue("2023-07-11")).toBe(true);
//     // Invalid ISO string
//     expect(calendar.isValidDateValue("2023-99-99")).toBe(false);

//     // Valid DD/MM/YYYY
//     expect(calendar.isValidDateValue("11/07/2023")).toBe(true);
//     expect(calendar.isValidDateValue("32/07/2023")).toBe(false);

//     // Valid MM/DD/YYYY
//     calendar.dateFormat = "MM/DD/YYYY";
//     expect(calendar.isValidDateValue("07/11/2023")).toBe(true);
//     expect(calendar.isValidDateValue("13/11/2023")).toBe(false);

//     // Valid YYYY/MM/DD
//     calendar.dateFormat = "YYYY/MM/DD";
//     expect(calendar.isValidDateValue("2023/07/11")).toBe(true);
//     expect(calendar.isValidDateValue("2023/13/11")).toBe(false);

//     // Non-string, non-Date
//     expect(calendar.isValidDateValue(12345)).toBe(false);

//     // Null/undefined
//     expect(calendar.isValidDateValue(null)).toBe(true);
//     expect(calendar.isValidDateValue(undefined)).toBe(true);
//   });

//   it("should test isPresent", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });
//     const calendar = page.rootInstance;

//     expect(calendar.isPresent(null)).toBe(false);
//     expect(calendar.isPresent(undefined)).toBe(false);
//     expect(calendar.isPresent("")).toBe(false);
//     expect(calendar.isPresent(new Date())).toBe(true);
//     expect(calendar.isPresent("test")).toBe(true);
//   });

//   it("should test setFocussedDayEl", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });
//     const calendar = page.rootInstance;
//     const testDayEl = document.createElement("button") as HTMLButtonElement;
//     calendar.setFocussedDayEl(testDayEl);
//     expect(calendar.focussedDayEl).toBe(testDayEl);
//   });

//   it("should test setFocussedMonthEl", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });
//     const calendar = page.rootInstance;
//     const testMonthEl = document.createElement("button") as HTMLButtonElement;
//     calendar.setFocussedMonthEl(testMonthEl);
//     expect(calendar.focussedMonthEl).toBe(testMonthEl);
//   });

//   it("should test setFocussedYearEl", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });

//     const calendar = page.rootInstance;

//     const testYearEl = document.createElement("button") as HTMLButtonElement;
//     calendar.setFocussedYearEl(testYearEl);

//     expect(calendar.focussedYearEl).toBe(testYearEl);
//   });

//   it("should test setFocussedDate", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar min="31/12/2022" max="31/01/2023"></ic-calendar>`,
//     });
//     const calendar = page.rootInstance;
//     const mockDate = new Date(2023, 0, 1);

//     calendar.setFocussedDate(mockDate);

//     const clampedDate = clampDate(mockDate, calendar.minDate, calendar.maxDate);

//     expect(calendar.focussedDate).toBe(clampedDate);
//   });

//   it("should test setAriaLiveRegionText", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });
//     const calendar = page.rootInstance;

//     calendar.liveRegionEl = document.createElement("div");
//     page.waitForChanges();
//     calendar.setAriaLiveRegionText("Live region text");
//     page.waitForChanges();
//     expect(calendar.liveRegionEl.innerText).toBe("Live region text");
//   });

//   it("should test clearDialogDescription", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });
//     const calendar = page.rootInstance;
//     calendar.dialogDescription = "Test dialog description";
//     page.waitForChanges();
//     calendar.clearDialogDescription();
//     expect(calendar.dialogDescription).toBe("");
//   });

//   it("should test goToPreviousMonth and goToNextMonth", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });
//     const calendar = page.rootInstance;

//     const moveMonthsSpy = jest
//       .spyOn(calendar, "moveMonths")
//       .mockImplementation(() => {});
//     calendar.goToPreviousMonth();
//     expect(calendar.focusDay).toBe(false);
//     expect(moveMonthsSpy).toHaveBeenCalledWith(-1);

//     calendar.goToPreviousMonth();
//     expect(calendar.focusDay).toBe(false);
//     expect(moveMonthsSpy).toHaveBeenCalledWith(-1);

//     calendar.goToNextMonth();
//     expect(calendar.focusDay).toBe(false);
//     expect(moveMonthsSpy).toHaveBeenCalledWith(1);
//   });

//   it("should test goToPreviousYear and goToNextYear", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });
//     const calendar = page.rootInstance;

//     const moveYearsSpy = jest.spyOn(calendar, "moveYears").mockImplementation();

//     // Test goToPreviousYear when allowed
//     jest.spyOn(calendar, "isPrevYearAllowed").mockReturnValue(true);
//     calendar.goToPreviousYear();
//     expect(calendar.focusDay).toBe(false);
//     expect(moveYearsSpy).toHaveBeenCalledWith(-1);

//     // Test goToPreviousYear when not allowed
//     moveYearsSpy.mockClear();
//     jest.spyOn(calendar, "isPrevYearAllowed").mockReturnValue(false);
//     calendar.goToPreviousYear();
//     expect(moveYearsSpy).not.toHaveBeenCalled();

//     // Test goToNextYear when allowed
//     jest.spyOn(calendar, "isNextYearAllowed").mockReturnValue(true);
//     calendar.goToNextYear();
//     expect(calendar.focusDay).toBe(false);
//     expect(moveYearsSpy).toHaveBeenCalledWith(1);

//     // Test goToNextYear when not allowed
//     moveYearsSpy.mockClear();
//     jest.spyOn(calendar, "isNextYearAllowed").mockReturnValue(false);
//     calendar.goToNextYear();
//     expect(moveYearsSpy).not.toHaveBeenCalled();
//   });

//   it("should test getMonthView returns correct days for a month", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });

//     const calendar = page.rootInstance;

//     calendar.startOfWeek = 1;
//     const date = new Date(2024, 0, 1);
//     const days = calendar.getMonthView(date);
//     expect(days[0].getDay()).toBe(1);
//     expect(days.length).toBe(42);
//     expect(days[days.length - 1].getDay()).toBe(0);
//   });

//   it("should test isCurrentMonth", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });

//     const calendar = page.rootInstance;

//     const today = new Date();

//     calendar.yearInView = today.getFullYear();
//     calendar.monthInView = today.getMonth();

//     expect(calendar.isCurrentMonth()).toBe(true);

//     calendar.yearInView = today.getFullYear() - 1;
//     expect(calendar.isCurrentMonth()).toBe(false);

//     calendar.yearInView = today.getFullYear();
//     calendar.monthInView = (today.getMonth() + 1) % 12;
//     expect(calendar.isCurrentMonth()).toBe(false);
//   });

//   it("should test updateMonthInView", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });

//     const calendar = page.rootInstance;

//     calendar.focussedDate = null;
//     expect(calendar.updateMonthInView()).toBeUndefined();

//     calendar.focussedDate = new Date(2024, 2, 15);
//     calendar.dayPickerKeyboardNav = false;
//     calendar.updateMonthInView();
//     expect(calendar.currMonthView.length).toBeGreaterThan(0);
//     expect(calendar.focussedDay).toBe(15);
//     expect(calendar.monthInView).toBe(2);
//     expect(calendar.yearInView).toBe(2024);

//     const setAriaLiveRegionTextSpy = jest.spyOn(
//       calendar,
//       "setAriaLiveRegionText"
//     );
//     calendar.dayPickerKeyboardNav = true;
//     calendar.updateMonthInView();
//     expect(calendar.monthInViewUpdateHandled).toBe(true);
//     expect(setAriaLiveRegionTextSpy).toBeCalled();
//     expect(calendar.dayPickerKeyboardNav).toBe(false);
//   });

//   it("should test moveDays", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });
//     const calendar = page.rootInstance;

//     // Test moveDays when focussedDate is set
//     calendar.focussedDate = "01/01/2023";
//     const setFocussedDateSpy = jest.spyOn(calendar, "setFocussedDate");

//     calendar.moveDays(1);

//     expect(calendar.focussedDate).toEqual(new Date(2023, 0, 2));
//     expect(setFocussedDateSpy).toHaveBeenCalledWith(new Date(2023, 0, 2));

//     // Test moveDays when focussedDate is null
//     setFocussedDateSpy.mockClear();
//     calendar.focussedDate = null;
//     expect(setFocussedDateSpy).not.toHaveBeenCalled();
//   });
//   describe("utility functions", () => {
//     it("should test setMonthSelectedLiveRegionText", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });
//       const calendar = page.rootInstance;

//       const setAriaLiveRegionTextSpy = jest
//         .spyOn(calendar, "setAriaLiveRegionText")
//         .mockImplementation();
//       const getMonthInViewTextSpy = jest
//         .spyOn(calendar, "getMonthInViewText")
//         .mockImplementation(() => "test");

//       calendar.monthNames = ["January"];
//       calendar.monthInView = 0;
//       calendar.yearInView = 2023;

//       calendar.setMonthSelectedLiveRegionText();
//       expect(setAriaLiveRegionTextSpy).toBeCalledWith("January selected. test");
//       expect(getMonthInViewTextSpy).toHaveBeenCalled();
//     });

//     it("should test setYearSelectedLiveRegionText", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });
//       const calendar = page.rootInstance;

//       const setAriaLiveRegionTextSpy = jest
//         .spyOn(calendar, "setAriaLiveRegionText")
//         .mockImplementation();
//       const getMonthInViewTextSpy = jest
//         .spyOn(calendar, "getMonthInViewText")
//         .mockImplementation(() => "test");

//       calendar.yearInView = 2023;

//       calendar.setYearSelectedLiveRegionText();
//       expect(setAriaLiveRegionTextSpy).toBeCalledWith("2023 selected. test");
//       expect(getMonthInViewTextSpy).toHaveBeenCalled();
//     });

//     it("should test getMonthInViewText", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });
//       const calendar = page.rootInstance;

//       calendar.monthInView = 0;
//       calendar.yearInView = 2023;
//       expect(calendar.getMonthInViewText()).toBe(
//         "January 2023 currently in view."
//       );

//       calendar.monthInView = 1;
//       calendar.yearInView = 2005;
//       expect(calendar.getMonthInViewText()).toBe(
//         "February 2005 currently in view."
//       );
//     });

//     it("should test getDecadeInViewText", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });
//       const calendar = page.rootInstance;

//       calendar.decadeStart = 2020;
//       calendar.decadeEnd = 2029;
//       expect(calendar.getDecadeInViewText()).toBe(
//         "2020 to 2029 currently in view."
//       );
//     });

//     it("should test isPrevYearAllowed", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });
//       const calendar = page.rootInstance;
//       // Set yearInView and minDate/maxDate for test
//       calendar.yearInView = 2025;
//       calendar.minDate = new Date(2020, 0, 1);
//       calendar.maxDate = new Date(2030, 11, 31);
//       // Should allow previous year
//       expect(calendar.isPrevYearAllowed()).toBe(true);
//       // Set minDate so previous year is not allowed
//       calendar.yearInView = 2020;
//       expect(calendar.isPrevYearAllowed()).toBe(false);
//     });

//     it("should test isNextYearAllowed", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });
//       const calendar = page.rootInstance;
//       calendar.yearInView = 2025;
//       calendar.minDate = new Date(2020, 0, 1);
//       calendar.maxDate = new Date(2030, 11, 31);
//       // Should allow next year
//       expect(calendar.isNextYearAllowed()).toBe(true);
//       // Set maxDate so next year is not allowed
//       calendar.yearInView = 2030;
//       expect(calendar.isNextYearAllowed()).toBe(false);
//     });

//     it("should test isYearAllowed", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });
//       const calendar = page.rootInstance;
//       calendar.minDate = new Date(2020, 0, 1);
//       calendar.maxDate = new Date(2030, 11, 31);
//       // Year in range
//       expect(calendar.isYearAllowed(2025)).toBe(true);
//       // Year below min
//       expect(calendar.isYearAllowed(2019)).toBe(false);
//       // Year above max
//       expect(calendar.isYearAllowed(2031)).toBe(false);
//     });

//     it("should test setDecadeView", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });
//       const calendar = page.rootInstance;

//       calendar.setDecadeView(2020);

//       expect(calendar.decadeView).toEqual([
//         2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
//       ]);
//       expect(calendar.decadeStart).toBe(2020);
//       expect(calendar.decadeEnd).toBe(2029);
//     });
//   });

//   describe.skip("focus handlers", () => {
//     it("should test focusFirstElement", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.monthButtonEl = { setFocus: jest.fn() } as any;

//       calendar.focusFirstElement();

//       expect(calendar.monthButtonEl.setFocus).toHaveBeenCalled();
//     });

//     it("should test focusLastElement", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar open-at-date="25/12/2022" show-clear-button="true" show-today-button="true"></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.clearButtonEl = { setFocus: jest.fn() } as any;
//       calendar.todayButtonEl = { setFocus: jest.fn() } as any;
//       calendar.focussedDayEl = { focus: jest.fn() } as any;
//       calendar.focussedMonthEl = { setFocus: jest.fn() } as any;
//       calendar.focussedYearEl = { setFocus: jest.fn() } as any;

//       calendar.focusLastElement();
//       expect(calendar.clearButtonEl.setFocus).toHaveBeenCalled();

//       calendar!.clearButtonEl.disabled = true;

//       calendar.focusLastElement();
//       expect(calendar.todayButtonEl.setFocus).toHaveBeenCalled();

//       calendar!.todayButtonEl.disabled = true;
//       calendar.monthPickerVisible = true;

//       calendar.focusLastElement();
//       expect(calendar.focussedMonthEl.setFocus).toHaveBeenCalled();

//       calendar.monthPickerVisible = false;
//       calendar.yearPickerVisible = true;

//       calendar.focusLastElement();
//       expect(calendar.focussedYearEl.setFocus).toHaveBeenCalled();

//       calendar.monthPickerVisible = false;
//       calendar.yearPickerVisible = false;

//       calendar.focusLastElement();
//       expect(calendar.focussedDayEl.focus).toHaveBeenCalled();
//     });

//     it("should test focusFocussedDay", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.focussedDayEl = { focus: jest.fn() } as any;

//       calendar.focusFocussedDay();

//       expect(calendar.focussedDayEl.focus).toHaveBeenCalled();
//     });
//   });

//   describe("keyboard handlers", () => {
//     it("should test handleCalendarKeyDown", async () => {
//       const page = await newSpecPage({
//         components: [Calendar, Button],
//         html: `<ic-calendar open-at-date="25/12/2022" show-today-button="false" show-clear-button="false"></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       const moveDaysSpy = jest.spyOn(calendar, "moveDays");
//       const moveMonthsSpy = jest.spyOn(calendar, "moveMonths");
//       const moveYearsSpy = jest.spyOn(calendar, "moveYears");
//       const setFocussedDateSpy = jest.spyOn(calendar, "setFocussedDate");

//       calendar.handleCalendarKeyDown(keyboardEvent("ArrowDown"));

//       expect(moveDaysSpy).toBeCalledWith(7);
//       expect(calendar.focussedDate).toEqual(new Date(2023, 0, 1));

//       moveDaysSpy.mockClear();
//       calendar.handleCalendarKeyDown(keyboardEvent("ArrowUp"));

//       expect(moveDaysSpy).toBeCalledWith(-7);
//       expect(calendar.focussedDate).toEqual(new Date(2022, 11, 25));

//       moveDaysSpy.mockClear();
//       calendar.handleCalendarKeyDown(keyboardEvent("ArrowLeft"));

//       expect(moveDaysSpy).toBeCalledWith(-1);
//       expect(calendar.focussedDate).toEqual(new Date(2022, 11, 24));

//       moveDaysSpy.mockClear();
//       calendar.handleCalendarKeyDown(keyboardEvent("ArrowRight"));

//       expect(moveDaysSpy).toBeCalledWith(1);
//       expect(calendar.focussedDate).toEqual(new Date(2022, 11, 25));

//       calendar.handleCalendarKeyDown(keyboardEvent("PageUp"));

//       expect(moveMonthsSpy).toBeCalledWith(-1);
//       expect(calendar.focussedDate).toEqual(new Date(2022, 10, 25));
//       expect(calendar.liveRegionEl.innerText).toEqual(
//         "November 2022 currently in view."
//       );

//       let keyEvent = keyboardEvent("PageUp");
//       keyEvent.shiftKey = true;

//       calendar.handleCalendarKeyDown(keyEvent);

//       expect(moveYearsSpy).toBeCalledWith(-1);
//       expect(calendar.focussedDate).toEqual(new Date(2021, 10, 25));
//       expect(calendar.liveRegionEl.innerText).toEqual(
//         "November 2021 currently in view."
//       );

//       moveMonthsSpy.mockClear();
//       calendar.handleCalendarKeyDown(keyboardEvent("PageDown"));

//       expect(moveMonthsSpy).toBeCalledWith(1);
//       expect(calendar.focussedDate).toEqual(new Date(2021, 11, 25));

//       moveYearsSpy.mockClear();
//       keyEvent = keyboardEvent("PageDown");
//       keyEvent.shiftKey = true;
//       calendar.handleCalendarKeyDown(keyEvent);

//       expect(moveYearsSpy).toBeCalledWith(1);
//       expect(calendar.focussedDate).toEqual(new Date(2022, 11, 25));

//       calendar.handleCalendarKeyDown(keyboardEvent("Home"));

//       expect(setFocussedDateSpy).toBeCalled();
//       expect(calendar.focussedDate).toEqual(new Date(2022, 11, 1));

//       calendar.handleCalendarKeyDown(keyboardEvent("End"));

//       expect(setFocussedDateSpy).toBeCalled();
//       expect(calendar.focussedDate).toEqual(new Date(2022, 11, 31));

//       calendar.monthButtonEl = { setFocus: jest.fn() } as any;

//       calendar.handleCalendarKeyDown(keyboardEvent("Tab"));

//       expect(calendar.monthButtonEl.setFocus).toHaveBeenCalled();

//       // simulate pressing enter to handle default behaviour case
//       calendar.handleCalendarKeyDown(keyboardEvent("Enter"));

//       expect(calendar.liveRegionEl.innerText).toEqual(
//         "December 2022 currently in view."
//       );

//       //test tab with clear button disabled (rather than hidden)
//       calendar.clearButtonEl = { setFocus: jest.fn(), disabled: false } as any;
//       page.root!.showClearButton = true;
//       calendar!.clearButtonEl.disabled = true;

//       calendar.handleCalendarKeyDown(keyboardEvent("Tab"));

//       expect(calendar.monthButtonEl.setFocus).toHaveBeenCalledTimes(2);

//       calendar.yearButtonEl.setFocus = jest.fn();

//       keyEvent = keyboardEvent("Tab");
//       keyEvent.shiftKey = true;
//       calendar.handleCalendarKeyDown(keyEvent);
//       await page.waitForChanges();

//       expect(calendar.yearButtonEl.setFocus).toHaveBeenCalled();
//     });

//     it("should test monthPickerKeyDownHandler", async () => {
//       const page = await newSpecPage({
//         components: [Calendar, Button],
//         html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.monthPickerVisible = true;

//       calendar.monthPickerKeyDownHandler(keyboardEvent("ArrowUp"));

//       expect(calendar.focussedMonth).toBe(10);

//       calendar.monthPickerKeyDownHandler(keyboardEvent("ArrowDown"));

//       expect(calendar.focussedMonth).toBe(11);

//       calendar.monthPickerKeyDownHandler(keyboardEvent("ArrowRight"));

//       expect(calendar.focussedMonth).toBe(0);

//       calendar.monthPickerKeyDownHandler(keyboardEvent("ArrowLeft"));

//       expect(calendar.focussedMonth).toBe(11);

//       calendar.monthPickerKeyDownHandler(keyboardEvent("Home"));

//       expect(calendar.focussedMonth).toBe(0);

//       calendar.monthPickerKeyDownHandler(keyboardEvent("End"));

//       expect(calendar.focussedMonth).toBe(11);

//       calendar.monthPickerKeyDownHandler(keyboardEvent("Tab"));
//       calendar.monthPickerKeyDownHandler(keyboardEvent("Enter"));
//       calendar.monthPickerKeyDownHandler(keyboardEvent("Escape"));

//       expect(calendar.monthPickerVisible).toBe(false);
//     });

//     it("should test yearPickerKeyDownHandler ", async () => {
//       const page = await newSpecPage({
//         components: [Calendar, Button],
//         html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.yearPickerVisible = true;

//       calendar.yearPickerKeyDownHandler(keyboardEvent("ArrowUp"));

//       expect(calendar.focussedYear).toBe(2021);

//       calendar.yearPickerKeyDownHandler(keyboardEvent("ArrowDown"));

//       expect(calendar.focussedYear).toBe(2022);

//       calendar.yearPickerKeyDownHandler(keyboardEvent("ArrowRight"));

//       expect(calendar.focussedYear).toBe(2023);

//       calendar.yearPickerKeyDownHandler(keyboardEvent("ArrowLeft"));

//       expect(calendar.focussedYear).toBe(2022);

//       calendar.yearPickerKeyDownHandler(keyboardEvent("Home"));

//       expect(calendar.focussedYear).toBe(2020);

//       calendar.yearPickerKeyDownHandler(keyboardEvent("End"));

//       expect(calendar.focussedYear).toBe(2029);

//       calendar.yearPickerKeyDownHandler(keyboardEvent("PageUp"));

//       expect(calendar.focussedYear).toBe(2019);

//       calendar.yearPickerKeyDownHandler(keyboardEvent("PageDown"));

//       expect(calendar.focussedYear).toBe(2029);

//       calendar.yearPickerKeyDownHandler(keyboardEvent("Tab"));
//       calendar.yearPickerKeyDownHandler(keyboardEvent("Enter"));
//       calendar.yearPickerKeyDownHandler(keyboardEvent("Escape"));

//       expect(calendar.yearPickerVisible).toBe(false);
//     });

//     it("should test monthButtonKeyDownHandler", async () => {
//       const page = await newSpecPage({
//         components: [Calendar, Button],
//         html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.setSelectedDate(new Date(2022, 11, 25));

//       calendar.monthPickerVisible = true;

//       calendar.monthButtonKeyDownHandler(keyboardEvent("ArrowUp"));

//       expect(calendar.monthInView).toBe(10);

//       calendar.monthButtonKeyDownHandler(keyboardEvent("ArrowDown"));

//       expect(calendar.monthInView).toBe(11);

//       calendar.monthButtonKeyDownHandler(keyboardEvent("ArrowRight"));

//       expect(calendar.monthInView).toBe(0);

//       calendar.monthButtonKeyDownHandler(keyboardEvent("ArrowLeft"));

//       expect(calendar.monthInView).toBe(11);

//       calendar.monthButtonKeyDownHandler(keyboardEvent("Home"));

//       expect(calendar.monthInView).toBe(0);

//       calendar.monthButtonKeyDownHandler(keyboardEvent("End"));

//       expect(calendar.monthInView).toBe(11);

//       calendar.clearButtonEl = { setFocus: jest.fn(), disabled: false } as any;
//       calendar.todayButtonEl = { setFocus: jest.fn(), disabled: false } as any;

//       const tabKeyEvent = keyboardEvent("Tab");
//       tabKeyEvent.shiftKey = true;
//       calendar.monthButtonKeyDownHandler(tabKeyEvent);

//       expect(calendar.clearButtonEl.setFocus).toHaveBeenCalled();

//       //should focus today button when clear hidden
//       calendar.showClearButton = false;
//       calendar.todayButtonEl.disabled = true;

//       calendar.monthButtonKeyDownHandler(tabKeyEvent);
//       expect(calendar.todayButtonEl.setFocus).toHaveBeenCalled();

//       // should focus month when today hidden

//       //should focus month button when month view open and today hidden
//       calendar.showTodayButton = false;

//       calendar.focussedMonthEl = { setFocus: jest.fn() } as any;

//       calendar.monthButtonKeyDownHandler(tabKeyEvent);
//       expect(calendar.focussedMonthEl.setFocus).toHaveBeenCalled();

//       //should focus day
//       calendar.monthButtonKeyDownHandler(keyboardEvent("Enter"));
//       calendar.monthButtonKeyDownHandler(keyboardEvent("Escape"));

//       expect(calendar.monthPickerVisible).toBe(false);

//       calendar.focussedDayEl = { focus: jest.fn() } as any;

//       calendar.monthButtonKeyDownHandler(tabKeyEvent);

//       expect(calendar.focussedDayEl.focus).toHaveBeenCalled();

//       //should focus year
//       Object.defineProperty(page.rootInstance.focussedYearEl, "setFocus", {
//         value: jest.fn(),
//       });
//       calendar.yearPickerVisible = true;

//       calendar.monthButtonKeyDownHandler(tabKeyEvent);
//       expect(calendar.focussedYearEl.setFocus).toHaveBeenCalled();
//     });

//     it("should test yearButtonKeyDownHandler", async () => {
//       const page = await newSpecPage({
//         components: [Calendar, Button],
//         html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.setSelectedDate(new Date(2022, 11, 25));
//       await page.waitForChanges();
//       await waitForTimeout(DELAY_MS);

//       calendar.yearPickerVisible = true;
//       await page.waitForChanges();
//       await waitForTimeout(DELAY_MS);

//       calendar.yearButtonKeyDownHandler(keyboardEvent("ArrowUp"));

//       await page.waitForChanges();

//       expect(calendar.yearInView).toBe(2021);

//       calendar.yearButtonKeyDownHandler(keyboardEvent("ArrowDown"));

//       await page.waitForChanges();

//       expect(calendar.yearInView).toBe(2022);

//       calendar.yearButtonKeyDownHandler(keyboardEvent("ArrowRight"));

//       await page.waitForChanges();

//       expect(calendar.yearInView).toBe(2023);

//       calendar.yearButtonKeyDownHandler(keyboardEvent("ArrowLeft"));

//       await page.waitForChanges();

//       expect(calendar.yearInView).toBe(2022);

//       calendar.yearButtonKeyDownHandler(keyboardEvent("Home"));

//       await page.waitForChanges();

//       expect(calendar.yearInView).toBe(2020);

//       calendar.yearButtonKeyDownHandler(keyboardEvent("End"));

//       await page.waitForChanges();

//       expect(calendar.yearInView).toBe(2029);

//       calendar.yearButtonKeyDownHandler(keyboardEvent("PageUp"));

//       await page.waitForChanges();

//       expect(calendar.yearInView).toBe(2019);

//       calendar.yearButtonKeyDownHandler(keyboardEvent("PageDown"));

//       await page.waitForChanges();

//       expect(calendar.yearInView).toBe(2029);

//       calendar.yearButtonKeyDownHandler(keyboardEvent("Enter"));
//       calendar.yearButtonKeyDownHandler(keyboardEvent("Escape"));

//       await page.waitForChanges();
//       await waitForTimeout(DELAY_MS);
//       expect(calendar.yearPickerVisible).toBe(false);
//     });

//     it("should test todayButtonKeyDownHandler focuses first element when clear button is disabled and Tab pressed", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.clearButtonEl = { disabled: true } as any;
//       const focusFirstElementSpy = jest
//         .spyOn(calendar, "focusFirstElement")
//         .mockImplementation();
//       const event = new window.KeyboardEvent("keydown", { key: "Tab" });

//       calendar.todayButtonKeyDownHandler(event);

//       expect(focusFirstElementSpy).toHaveBeenCalled();
//       expect(event.defaultPrevented).toBe(true);

//       focusFirstElementSpy.mockClear();

//       const shiftEvent = new window.KeyboardEvent("keydown", {
//         key: "Tab",
//         shiftKey: true,
//       });
//       calendar.todayButtonKeyDownHandler(shiftEvent);

//       expect(focusFirstElementSpy).not.toHaveBeenCalled();
//       expect(shiftEvent.defaultPrevented).toBe(false);
//     });

//     it("should test clearButtonKeyDownHandler focuses first element when Tab pressed", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       const focusFirstElementSpy = jest
//         .spyOn(calendar, "focusFirstElement")
//         .mockImplementation();
//       const event = new window.KeyboardEvent("keydown", { key: "Tab" });

//       calendar.clearButtonKeyDownHandler(event);

//       expect(focusFirstElementSpy).toHaveBeenCalled();
//       expect(event.defaultPrevented).toBe(true);

//       focusFirstElementSpy.mockClear();

//       const shiftEvent = new window.KeyboardEvent("keydown", {
//         key: "Tab",
//         shiftKey: true,
//       });

//       calendar.clearButtonKeyDownHandler(shiftEvent);

//       expect(focusFirstElementSpy).not.toHaveBeenCalled();
//       expect(shiftEvent.defaultPrevented).toBe(false);
//     });

//     it("should test calendarTabHandler handles Tab and Shift+Tab keydown events", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       // Case: Tab, showTodayButton false, showClearButton false
//       calendar.showTodayButton = false;
//       calendar.showClearButton = false;

//       const focusFirstElementSpy = jest
//         .spyOn(calendar, "focusFirstElement")
//         .mockImplementation();
//       const event = new window.KeyboardEvent("keydown", { key: "Tab" });

//       const handled = calendar.calendarTabHandler(event);

//       expect(focusFirstElementSpy).toHaveBeenCalled();
//       expect(handled).toBe(true);

//       // Case: Shift+Tab, should focus yearButtonEl
//       calendar.showTodayButton = true;
//       calendar.showClearButton = true;
//       calendar.yearButtonEl = { setFocus: jest.fn() } as any;
//       const shiftEvent = new window.KeyboardEvent("keydown", {
//         key: "Tab",
//         shiftKey: true,
//       });

//       const handledShift = calendar.calendarTabHandler(shiftEvent);

//       expect(calendar.yearButtonEl.setFocus).toHaveBeenCalled();
//       expect(handledShift).toBe(true);
//     });
//   });

//   describe("mouse handlers", () => {
//     it("should test navButtonMouseDownHandler", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;
//       await page.waitForChanges();

//       const mouseEvent = new window.window.MouseEvent("mousedown", {
//         bubbles: true,
//         cancelable: true,
//       });

//       Object.defineProperty(mouseEvent, "preventDefault", {
//         value: jest.fn(),
//       });

//       calendar.navButtonMouseDownHandler(mouseEvent);

//       expect(mouseEvent.preventDefault).toHaveBeenCalled();
//     });

//     it("should test handleCalendarMouseDown", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });
//       const calendar = page.rootInstance;

//       // When target is not IC-BUTTON
//       const mouseEvent = new window.MouseEvent("mousedown", {
//         bubbles: true,
//         cancelable: true,
//       });

//       Object.defineProperty(mouseEvent, "preventDefault", {
//         value: jest.fn(),
//       });
//       Object.defineProperty(mouseEvent, "target", {
//         value: document.createElement("div"),
//       });

//       calendar.handleCalendarMouseDown(mouseEvent);

//       expect((mouseEvent.target! as HTMLElement).tagName).not.toEqual(
//         "IC-BUTTON"
//       );
//       expect(mouseEvent.preventDefault).toHaveBeenCalled();

//       // When target is IC-BUTTON
//       const mouseEvent2 = new window.MouseEvent("mousedown", {
//         bubbles: true,
//         cancelable: true,
//       });

//       Object.defineProperty(mouseEvent2, "preventDefault", {
//         value: jest.fn(),
//       });
//       Object.defineProperty(mouseEvent2, "target", {
//         value: document.createElement("ic-button"),
//       });

//       calendar.handleCalendarMouseDown(mouseEvent2);

//       expect((mouseEvent2.target! as HTMLElement).tagName).toEqual("IC-BUTTON");
//       expect(mouseEvent2.preventDefault).not.toHaveBeenCalled();
//     });

//     it.skip("should test handleSelectMonth", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.monthInView = 2;

//       const moveMonthsSpy = jest
//         .spyOn(calendar, "moveMonths")
//         .mockImplementation();

//       calendar.monthButtonEl = { setFocus: jest.fn() } as any;

//       calendar.monthPickerVisible = true;

//       const setMonthSelectedLiveRegionTextSpy = jest
//         .spyOn(calendar, "setMonthSelectedLiveRegionText")
//         .mockImplementation();

//       const emitSpy = jest
//         .spyOn(calendar.icCalendarMonthSelect, "emit")
//         .mockImplementation();

//       // calendar.focussedDayEl = { focus: jest.fn() } as any;

//       calendar.handleSelectMonth(5);

//       expect(moveMonthsSpy).toHaveBeenCalledWith(3);

//       // Wait for setTimeout
//       // await new Promise((resolve) => setTimeout(resolve, 110));

//       await waitForTimeout(110);

//       expect(calendar.monthButtonEl.setFocus).toHaveBeenCalled();
//       expect(calendar.monthPickerVisible).toBe(false);
//       expect(setMonthSelectedLiveRegionTextSpy).toHaveBeenCalled();
//       expect(emitSpy).toHaveBeenCalled();
//     });

//     it.skip("should test handleSelectMonth", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.monthInView = 2;
//       calendar.monthPickerVisible = true;
//       calendar.monthButtonEl = { setFocus: jest.fn() } as any;

//       const moveMonthsSpy = jest
//         .spyOn(calendar, "moveMonths")
//         .mockImplementation();
//       const setMonthSelectedLiveRegionTextSpy = jest
//         .spyOn(calendar, "setMonthSelectedLiveRegionText")
//         .mockImplementation();
//       const emitSpy = jest
//         .spyOn(calendar.icCalendarMonthSelect, "emit")
//         .mockImplementation();

//       calendar.handleSelectMonth(5);

//       expect(moveMonthsSpy).toHaveBeenCalledWith(3);

//       await waitForTimeout(110);

//       expect(calendar.monthButtonEl.setFocus).toHaveBeenCalled();
//       expect(calendar.monthPickerVisible).toBe(false);
//       expect(setMonthSelectedLiveRegionTextSpy).toHaveBeenCalled();
//       expect(emitSpy).toHaveBeenCalled();
//     });
//   });

//   describe("render helpers", () => {
//     it("should test previousMonthButton", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.renderMonthYearNavButton = jest.fn();

//       const cases = [
//         // Case 1: minDate does not restrict previous month (button enabled)
//         {
//           focussedDate: new Date(2025, 5, 15),
//           minDate: new Date(2025, 0, 1),
//           monthInView: 5,
//           expectedDisabled: false,
//         },
//         // Case 2: minDate restricts previous month in same year (button disabled)
//         {
//           focussedDate: new Date(2025, 0, 15),
//           minDate: new Date(2025, 0, 1),
//           monthInView: 0,
//           expectedDisabled: true,
//         },
//         // Case 3: years do not match, minDate does not restrict (button enabled)
//         {
//           focussedDate: new Date(2026, 5, 15),
//           minDate: new Date(2025, 0, 1),
//           monthInView: 5,
//           expectedDisabled: false,
//         },
//         // Case 4: null dates, previous month enabled
//         {
//           focussedDate: null,
//           minDate: null,
//           monthInView: 5,
//           expectedDisabled: false,
//         },
//       ];

//       cases.forEach(
//         ({ focussedDate, minDate, monthInView, expectedDisabled }) => {
//           calendar.focussedDate = focussedDate;
//           calendar.minDate = minDate;
//           calendar.monthInView = monthInView;
//           calendar.previousMonthButton();
//           expect(calendar.renderMonthYearNavButton).toHaveBeenCalledWith(
//             "previous-month-button",
//             true,
//             expectedDisabled
//           );
//           calendar.renderMonthYearNavButton.mockClear();
//         }
//       );
//     });

//     it("should test nextMonthButton", async () => {
//       const page = await newSpecPage({
//         components: [Calendar],
//         html: `<ic-calendar></ic-calendar>`,
//       });

//       const calendar = page.rootInstance;

//       calendar.renderMonthYearNavButton = jest.fn();

//       const cases = [
//         // Case 1: maxDate is before focussedDate's year, disables next month
//         {
//           focussedDate: new Date(2025, 5, 15),
//           maxDate: new Date(2025, 0, 1),
//           monthInView: 5,
//           expectedDisabled: true,
//         },
//         // Case 2: maxDate restricts next month in same year
//         {
//           focussedDate: new Date(2025, 0, 15),
//           maxDate: new Date(2025, 0, 1),
//           monthInView: 0,
//           expectedDisabled: true,
//         },
//         // Case 3: maxDate is after focussedDate's year, enables next month
//         {
//           focussedDate: new Date(2026, 5, 15),
//           maxDate: new Date(2025, 0, 1),
//           monthInView: 5,
//           expectedDisabled: false,
//         },
//         // Case 4: null dates, enables next month
//         {
//           focussedDate: null,
//           maxDate: null,
//           monthInView: 5,
//           expectedDisabled: false,
//         },
//       ];

//       cases.forEach(
//         ({ focussedDate, maxDate, monthInView, expectedDisabled }) => {
//           calendar.focussedDate = focussedDate;
//           calendar.maxDate = maxDate;
//           calendar.monthInView = monthInView;
//           calendar.nextMonthButton();
//           expect(calendar.renderMonthYearNavButton).toHaveBeenCalledWith(
//             "next-month-button",
//             false,
//             expectedDisabled
//           );
//           calendar.renderMonthYearNavButton.mockClear();
//         }
//       );
//     });
//   });
//   // TODO
//   it.skip("should test handleSelectYear", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });

//     const calendar = page.rootInstance;

//     calendar.monthInView = 0;
//     calendar.yearInView = 2021;
//     calendar.decadeView = [
//       2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
//     ];
//     calendar.monthNames = ["January"];
//     calendar.focussedYear = 2021;
//     calendar.yearButtonFocussed = true;

//     calendar.monthButtonEl = { setFocus: jest.fn() };

//     const moveYearsSpy = jest.spyOn(calendar, "moveYears");
//     const setAriaLiveRegionTextSpy = jest.spyOn(
//       calendar,
//       "setAriaLiveRegionText"
//     );
//     const emitSpy = jest.spyOn(calendar.icCalendarDaySelect, "emit");
//     const updateFocussedYearSpy = jest.spyOn(calendar, "updateFocussedYear");
//     const getDecadeInViewTextSpy = jest.spyOn(calendar, "getDecadeInViewText");

//     calendar.handleSelectYear(2023);

//     expect(moveYearsSpy).toBeCalledWith(2);
//     expect(calendar.focusDay).toBe(false);
//     expect(setAriaLiveRegionTextSpy).toBeCalledWith(
//       "2023 selected. January 2023 currently in view."
//     );

//     // setTimeout
//     expect(calendar.monthButtonEl.setFocus).toBeCalled();
//     expect(calendar.yearPickerVisible).toBe(false);
//     expect(emitSpy).toBeCalled();

//     setAriaLiveRegionTextSpy.mockClear();
//     emitSpy.mockClear();

//     calendar.handleSelectYear(2019);

//     expect(updateFocussedYearSpy).toBeCalledWith(-10, true);
//     expect(setAriaLiveRegionTextSpy).toBeCalledWith(getDecadeInViewTextSpy);
//   });

//   it("should test onDayButtonFocusHandler", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });

//     const calendar = page.rootInstance;

//     calendar.dayButtonFocussed = true;
//     calendar.onDayButtonFocusHandler();
//     expect(calendar.dayButtonFocussed).toBe(true);

//     calendar.dayButtonFocussed = false;
//     calendar.onDayButtonFocusHandler();
//     expect(calendar.dayButtonFocussed).toBe(true);
//   });

//   it("should test onDayButtonBlurHandler", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });

//     const calendar = page.rootInstance;

//     calendar.dayButtonFocussed = true;
//     calendar.onDayButtonBlurHandler();
//     expect(calendar.dayButtonFocussed).toBe(false);

//     calendar.dayButtonFocussed = false;
//     calendar.onDayButtonBlurHandler();
//     expect(calendar.dayButtonFocussed).toBe(false);
//   });

//   it("should test onYearButtonFocusHandler", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });

//     const calendar = page.rootInstance;

//     calendar.yearButtonFocussed = true;
//     calendar.onYearButtonFocusHandler();
//     expect(calendar.yearButtonFocussed).toBe(true);

//     calendar.yearButtonFocussed = false;
//     calendar.onYearButtonFocusHandler();
//     expect(calendar.yearButtonFocussed).toBe(true);
//   });

//   it("should test onYearButtonBlurHandler", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });

//     const calendar = page.rootInstance;

//     calendar.yearButtonFocussed = true;
//     calendar.onYearButtonBlurHandler();
//     expect(calendar.yearButtonFocussed).toBe(false);

//     calendar.yearButtonFocussed = false;
//     calendar.onYearButtonBlurHandler();
//     expect(calendar.yearButtonFocussed).toBe(false);
//   });

//   it("should test handleSelectDay", async () => {
//     const page = await newSpecPage({
//       components: [Calendar],
//       html: `<ic-calendar></ic-calendar>`,
//     });

//     const calendar = page.rootInstance;

//     const testDate = new Date(2023, 6, 15);

//     const setSelectedDateSpy = jest.spyOn(calendar, "setSelectedDate");
//     const setFocussedDateSpy = jest.spyOn(calendar, "setFocussedDate");
//     const emitSpy = jest
//       .spyOn(calendar.icCalendarDaySelect, "emit")
//       .mockImplementation();

//     calendar.handleSelectDay(testDate);

//     expect(setSelectedDateSpy).toHaveBeenCalledWith(testDate);
//     expect(setFocussedDateSpy).toHaveBeenCalledWith(testDate);
//     expect(emitSpy).toBeCalled();
//   });
// });
