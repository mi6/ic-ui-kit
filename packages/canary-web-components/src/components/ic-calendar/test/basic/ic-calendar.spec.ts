import { newSpecPage } from "@stencil/core/testing";
import { Calendar } from "../../ic-calendar";
import { Button } from "@ukic/web-components/src/components/ic-button/ic-button";
import { Tooltip } from "@ukic/web-components/src/components/ic-tooltip/ic-tooltip";
import {
  waitForTimeout,
  // testKeyboardEvent as keyboardEvent,
} from "@ukic/web-components/src/testspec.setup";
// import { dateMatches } from "../../../../utils/date-helpers";

const DELAY_MS = 350;

// const dateIsToday = (d: Date) => {
//   return dateMatches(d, new Date());
// };

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-calendar", () => {
  it("should render default size", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar value="11/07/2023"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2023, 6, 11));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    expect(page.root).toMatchSnapshot();
  });

  it("should render small calendar", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar size="small" value="11/07/2023"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2023, 6, 11));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render large calendar", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar size="large" value="11/07/2023"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2023, 6, 11));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render with today & clear buttons hidden", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar show-picker-today-button="false" show-picker-clear-button="false" value="11/07/2023"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2023, 6, 11));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar disabled="true" value="11/07/2023"></ic-calendar>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render with DD/MM/YYYY format", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar date-format="DD/MM/YYYY" value="11-07-2023"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2023, 6, 11));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render with MM/DD/YYYY format", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar date-format="MM/DD/YYYY" value="07-11-2023"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2023, 6, 11));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render with YYYY/MM/DD format", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar date-format="YYYY/MM/DD" value="2023/07/11"></ic-calendar>`,
    });

    page.rootInstance.setSelectedDate(new Date(2023, 6, 11));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should render with saturday and sundays disabled", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar value="11/07/2023"></ic-calendar>`,
    });

    if (page.root) {
      page.root.disableDays = [0, 6];
    }
    page.rootInstance.setSelectedDate(new Date(2023, 6, 11));
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
    // expect(page.rootInstance.dateInputProps.disableDaysMessage).toEqual(
    //   "Saturday and Sunday not allowed"
    // );
  });

  it("should open at specified date", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should have sunday as first day of week", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar open-at-date="25/12/2022" start-of-week="0"></ic-calendar>`,
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.root).toMatchSnapshot();
  });

  it("should have correct date focussed on open", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
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

  it.skip("should update date when day clicked", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
      html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
    });

    Object.defineProperty(page.rootInstance.focussedDayEl, "focus", {
      value: jest.fn(),
    });

    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);

    const dayButton = page.root!.shadowRoot!.querySelector(
      "div.calendar-days-container > div.day-button-container:nth-child(26) > button"
    );
    (dayButton as HTMLElement).click();
    await page.waitForChanges();
    await waitForTimeout(DELAY_MS);
    expect(page.rootInstance.selectedDate).toEqual(new Date(2022, 11, 23));
  });

  it("should show month picker view when button clicked", async () => {
    const page = await newSpecPage({
      components: [Calendar, Button, Tooltip],
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
      components: [Calendar, Button, Tooltip],
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

  // it("should only allow selection in specified month", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar min="01/10/2023" max="31/10/2023"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.root).toMatchSnapshot();
  // });

  // it("should select month when button clicked", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const monthButton = page.root!.shadowRoot!.querySelector(
  //     ".month-picker-button"
  //   ) as HTMLIcButtonElement;
  //   monthButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const janButton = page.root!.shadowRoot!.querySelector(
  //     "div.month-picker > ic-button:nth-child(1)"
  //   ) as HTMLIcButtonElement;
  //   janButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);
  //   expect(page.rootInstance.monthPickerVisible).toBe(false);
  //   expect(page.rootInstance.monthInView).toBe(0);
  //   expect(page.rootInstance.liveRegionEl.innerText).toEqual(
  //     "January selected. January 2022 currently in view."
  //   );
  // });

  // it("should select year when button clicked", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const yearButton = page.root!.shadowRoot!.querySelector(
  //     ".year-picker-button"
  //   ) as HTMLIcButtonElement;
  //   yearButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const firstYearButton = page.root!.shadowRoot!.querySelector(
  //     "div.year-picker > ic-button:nth-child(2)"
  //   ) as HTMLIcButtonElement;
  //   firstYearButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);
  //   expect(page.rootInstance.yearPickerVisible).toBe(false);
  //   expect(page.rootInstance.yearInView).toBe(2020);
  // });

  // it("should go to previous decade when button clicked", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const yearButton = page.root!.shadowRoot!.querySelector(
  //     ".year-picker-button"
  //   ) as HTMLIcButtonElement;
  //   yearButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const prevDecadeButton = page.root!.shadowRoot!.querySelector(
  //     "div.year-picker > div.prev-decade > ic-button:nth-child(1)"
  //   ) as HTMLIcButtonElement;
  //   prevDecadeButton.click();
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const firstYearButton = page.root!.shadowRoot!.querySelector(
  //     "div.year-picker > ic-button:nth-child(2)"
  //   ) as HTMLIcButtonElement;
  //   firstYearButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);
  //   expect(page.rootInstance.yearInView).toBe(2010);
  // });

  // it("should go to next decade when button clicked", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const yearButton = page.root!.shadowRoot!.querySelector(
  //     ".year-picker-button"
  //   ) as HTMLIcButtonElement;
  //   yearButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const nextDecadeButton = page.root!.shadowRoot!.querySelector(
  //     "div.year-picker > div.next-decade > ic-button:nth-child(1)"
  //   ) as HTMLIcButtonElement;
  //   nextDecadeButton.click();
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const firstYearButton = page.root!.shadowRoot!.querySelector(
  //     "div.year-picker > ic-button:nth-child(2)"
  //   ) as HTMLIcButtonElement;
  //   firstYearButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);
  //   expect(page.rootInstance.yearInView).toBe(2030);
  // });

  // it("should test disableFuture and disableFutureMessage props", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar disable-future="true" disable-future-message="Days in the future not allowed"></ic-calendar>`,
  //   });
  //   await page.waitForChanges();

  //   page.rootInstance.setSelectedDate(new Date(2222, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(dateIsToday(page.rootInstance.maxDate)).toBe(true);
  //   expect(dateMatches(page.rootInstance.focussedDate, new Date())).toBe(true);
  //   // expect(page.rootInstance.dateInputProps.disableFutureMessage).toEqual(
  //   //   "Days in the future not allowed"
  //   // );

  //   page.rootInstance.disableFuture = false;
  //   page.rootInstance.setSelectedDate(new Date(2222, 11, 25));
  //   await page.waitForChanges();

  //   expect(page.rootInstance.maxDate.toString()).toBe("Invalid Date");
  //   expect(dateMatches(page.rootInstance.focussedDate, new Date())).toBe(true);
  //   await waitForTimeout(DELAY_MS);
  // });

  // it.only("should test disablePast and disablePastMessage props", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar disable-past="true"></ic-calendar>`,
  //   });
  //   await page.waitForChanges();

  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(dateMatches(page.rootInstance.minDate, new Date())).toBe(true);
  //   expect(dateMatches(page.rootInstance.focussedDate, new Date())).toBe(true);
  //   // expect(page.rootInstance.dateInputProps.disablePastMessage).toEqual(
  //   //   "Days in the past not allowed"
  //   // );

  //   await page.waitForChanges();

  //   //check dates in past allowed when prop is changed
  //   page.rootInstance.disablePast = false;
  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.minDate.toString()).toBe("Invalid Date");
  //   expect(page.root).toMatchSnapshot();
  //   expect(
  //     dateMatches(page.rootInstance.focussedDate, new Date(2022, 11, 25))
  //   ).toBe(true);

  // });

  // it("should test invalidDateMessage", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar invalid-date-message="Invalid date"></ic-calendar>`,
  //   });
  //   await page.waitForChanges();

  //   page.rootInstance.setSelectedDate(new Date(2000, 13, 25));
  //   await page.waitForChanges();

  //   expect(page.rootInstance.dateInputProps.invalidDateMessage).toEqual(
  //     "Invalid date"
  //   );
  // });

  // it("should close picker when another element clicked", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.root!.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);
  // });

  // it("should close picker when Escape key pressed", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.keyDownHandler(keyboardEvent("Escape"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);
  // });

  // it("should clear dialog description when key pressed", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.keyDownHandler(keyboardEvent("Tab"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);
  //   expect(page.rootInstance.dialogDescription).toBe("");
  // });

  // it("should test go to today button", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const todayButton = page.root!.shadowRoot!.querySelector(
  //     "div.bottom-buttons > #today-button"
  //   ) as HTMLIcButtonElement;
  //   todayButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(dateIsToday(page.rootInstance.focussedDate)).toBe(true);
  // });

  // it("should test go to today button - month view", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);
  //   page.rootInstance.monthPickerVisible = true;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const todayButton = page.root!.shadowRoot!.querySelector(
  //     "div.bottom-buttons > #today-button"
  //   ) as HTMLIcButtonElement;
  //   todayButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.monthPickerVisible).toBe(false);
  //   expect(dateIsToday(page.rootInstance.focussedDate)).toBe(true);
  // });

  // it("should test go to today button - year view", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.yearPickerVisible = true;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const todayButton = page.root!.shadowRoot!.querySelector(
  //     "div.bottom-buttons > #today-button"
  //   ) as HTMLIcButtonElement;
  //   todayButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.yearPickerVisible).toBe(false);
  //   expect(dateIsToday(page.rootInstance.focussedDate)).toBe(true);
  // });

  // it("should test clear button", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar value="25/12/2022"></ic-calendar>`,
  //   });

  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   Object.defineProperty(page.rootInstance.focussedDayEl, "focus", {
  //     value: jest.fn(),
  //   });
  //   expect(page.rootInstance.focussedDayEl.focus).not.toHaveBeenCalled();
  //   expect(page.rootInstance.selectedDate).not.toBe(null);

  //   const clearButton = page.root!.shadowRoot!.querySelector(
  //     "div.bottom-buttons > #clear-button"
  //   ) as HTMLIcButtonElement;
  //   clearButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.selectedDate).toBe(null);
  //   expect(page.rootInstance.focussedDayEl.focus).toHaveBeenCalled();
  //   expect(page.rootInstance.liveRegionEl.textContent).toBe(
  //     "Selected date cleared. December 2022 currently in view."
  //   );
  // });

  // it("should test clear button - month view", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar value="25/12/2022"></ic-calendar>`,
  //   });

  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.monthPickerVisible = true;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   Object.defineProperty(page.rootInstance.focussedMonthEl, "setFocus", {
  //     value: jest.fn(),
  //   });
  //   expect(page.rootInstance.focussedMonthEl.setFocus).not.toHaveBeenCalled();
  //   expect(page.root!.value).not.toBe("");

  //   const clearButton = page.root!.shadowRoot!.querySelector(
  //     "div.bottom-buttons > #clear-button"
  //   ) as HTMLIcButtonElement;
  //   clearButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.selectedDate).toBe(null);
  //   expect(page.rootInstance.monthPickerVisible).toBe(true);
  //   expect(page.rootInstance.focussedMonthEl.setFocus).toHaveBeenCalled();
  //   expect(page.rootInstance.liveRegionEl.textContent).toBe(
  //     "Selected date cleared."
  //   );
  // });

  // it("should test clear button - year view", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar value="25/12/2022"></ic-calendar>`,
  //   });

  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.yearPickerVisible = true;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   Object.defineProperty(page.rootInstance.focussedYearEl, "setFocus", {
  //     value: jest.fn(),
  //   });
  //   expect(page.rootInstance.focussedYearEl.setFocus).not.toHaveBeenCalled();
  //   expect(page.root!.value).not.toBe("");

  //   const clearButton = page.root!.shadowRoot!.querySelector(
  //     "div.bottom-buttons > #clear-button"
  //   ) as HTMLIcButtonElement;
  //   clearButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.root!.value).toBeNull();
  //   expect(page.rootInstance.yearPickerVisible).toBe(true);
  //   expect(page.rootInstance.focussedYearEl.setFocus).toHaveBeenCalled();
  //   expect(page.rootInstance.liveRegionEl.textContent).toBe(
  //     "Selected date cleared."
  //   );
  // });

  // it.skip("should test month & year nav buttons", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar value="25/12/2022"></ic-calendar>`,
  //   });

  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const prevMonthButton = page.root!.shadowRoot!.querySelector(
  //     "#previous-month-button"
  //   ) as HTMLIcButtonElement;
  //   prevMonthButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 10, 25));

  //   const nextMonthButton = page.root!.shadowRoot!.querySelector(
  //     "#next-month-button"
  //   ) as HTMLIcButtonElement;
  //   nextMonthButton.click();
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 25));

  //   const prevYearButton = page.root!.shadowRoot!.querySelector(
  //     "#previous-year-button"
  //   ) as HTMLIcButtonElement;
  //   prevYearButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2021, 11, 25));

  //   const nextYearButton = page.root!.shadowRoot!.querySelector(
  //     "#next-year-button"
  //   ) as HTMLIcButtonElement;
  //   nextYearButton.click();
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 25));
  // });

  // it("should test tab on goto today button goes to first element on dialog when clear disabled", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.todayButtonKeyDownHandler(keyboardEvent("Tab"));

  //   await page.waitForChanges();
  //   expect(page.rootInstance.focusFirstElement).toHaveBeenCalled;
  // });

  // it("should test tab on clear button goes to first element on dialog", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.clearButtonKeyDownHandler(keyboardEvent("Tab"));

  //   await page.waitForChanges();
  //   expect(page.rootInstance.focusFirstElement).toHaveBeenCalled;
  // });

  // it("should test monthButtonKeyDownHandler", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });
  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.monthPickerVisible = true;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.monthButtonKeyDownHandler(keyboardEvent("ArrowUp"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.monthInView).toBe(10);

  //   page.rootInstance.monthButtonKeyDownHandler(keyboardEvent("ArrowDown"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.monthInView).toBe(11);

  //   page.rootInstance.monthButtonKeyDownHandler(keyboardEvent("ArrowRight"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.monthInView).toBe(0);

  //   page.rootInstance.monthButtonKeyDownHandler(keyboardEvent("ArrowLeft"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.monthInView).toBe(11);

  //   page.rootInstance.monthButtonKeyDownHandler(keyboardEvent("Home"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.monthInView).toBe(0);

  //   page.rootInstance.monthButtonKeyDownHandler(keyboardEvent("End"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.monthInView).toBe(11);

  //   Object.defineProperty(page.rootInstance.clearButtonEl, "setFocus", {
  //     value: jest.fn(),
  //   });

  //   const tabKeyEvent = keyboardEvent("Tab");
  //   tabKeyEvent.shiftKey = true;
  //   page.rootInstance.monthButtonKeyDownHandler(tabKeyEvent);
  //   await page.waitForChanges();

  //   expect(page.rootInstance.clearButtonEl.setFocus).toHaveBeenCalled();

  //   //should focus today button when clear hidden
  //   page.rootInstance.showPickerClearButton = false;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   Object.defineProperty(page.rootInstance.todayButtonEl, "setFocus", {
  //     value: jest.fn(),
  //   });

  //   page.rootInstance.monthButtonKeyDownHandler(tabKeyEvent);

  //   await page.waitForChanges();
  //   expect(page.rootInstance.todayButtonEl.setFocus).toHaveBeenCalled();

  //   // should focus month when today hidden

  //   //should focus month button when month view open and today hidden
  //   page.rootInstance.showPickerTodayButton = false;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   Object.defineProperty(page.rootInstance.focussedMonthEl, "setFocus", {
  //     value: jest.fn(),
  //   });

  //   page.rootInstance.monthButtonKeyDownHandler(tabKeyEvent);

  //   await page.waitForChanges();
  //   expect(page.rootInstance.focussedMonthEl.setFocus).toHaveBeenCalled();

  //   //should focus day
  //   page.rootInstance.monthButtonKeyDownHandler(keyboardEvent("Enter"));
  //   page.rootInstance.monthButtonKeyDownHandler(keyboardEvent("Escape"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.monthPickerVisible).toBe(false);

  //   Object.defineProperty(page.rootInstance.focussedDayEl, "focus", {
  //     value: jest.fn(),
  //   });

  //   page.rootInstance.monthButtonKeyDownHandler(tabKeyEvent);

  //   await page.waitForChanges();
  //   expect(page.rootInstance.focussedDayEl.focus).toHaveBeenCalled();

  //   //should focus year
  //   page.rootInstance.yearPickerVisible = true;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   Object.defineProperty(page.rootInstance.focussedYearEl, "setFocus", {
  //     value: jest.fn(),
  //   });

  //   page.rootInstance.monthButtonKeyDownHandler(tabKeyEvent);

  //   await page.waitForChanges();
  //   expect(page.rootInstance.focussedYearEl.setFocus).toHaveBeenCalled();
  // });

  // it("should test yearButtonKeyDownHandler", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });
  //   page.rootInstance.setSelectedDate(new Date(2022, 11, 25));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.yearPickerVisible = true;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.yearButtonKeyDownHandler(keyboardEvent("ArrowUp"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.yearInView).toBe(2021);

  //   page.rootInstance.yearButtonKeyDownHandler(keyboardEvent("ArrowDown"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.yearInView).toBe(2022);

  //   page.rootInstance.yearButtonKeyDownHandler(keyboardEvent("ArrowRight"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.yearInView).toBe(2023);

  //   page.rootInstance.yearButtonKeyDownHandler(keyboardEvent("ArrowLeft"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.yearInView).toBe(2022);

  //   page.rootInstance.yearButtonKeyDownHandler(keyboardEvent("Home"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.yearInView).toBe(2020);

  //   page.rootInstance.yearButtonKeyDownHandler(keyboardEvent("End"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.yearInView).toBe(2029);

  //   page.rootInstance.yearButtonKeyDownHandler(keyboardEvent("PageUp"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.yearInView).toBe(2019);

  //   page.rootInstance.yearButtonKeyDownHandler(keyboardEvent("PageDown"));

  //   await page.waitForChanges();

  //   expect(page.rootInstance.yearInView).toBe(2029);

  //   page.rootInstance.yearButtonKeyDownHandler(keyboardEvent("Enter"));
  //   page.rootInstance.yearButtonKeyDownHandler(keyboardEvent("Escape"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);
  //   expect(page.rootInstance.yearPickerVisible).toBe(false);
  // });

  // it("should test monthPickerKeyDownHandler", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.monthPickerVisible = true;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.monthPickerKeyDownHandler(keyboardEvent("ArrowUp"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedMonth).toBe(10);

  //   page.rootInstance.monthPickerKeyDownHandler(keyboardEvent("ArrowDown"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedMonth).toBe(11);

  //   page.rootInstance.monthPickerKeyDownHandler(keyboardEvent("ArrowRight"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedMonth).toBe(0);

  //   page.rootInstance.monthPickerKeyDownHandler(keyboardEvent("ArrowLeft"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedMonth).toBe(11);

  //   page.rootInstance.monthPickerKeyDownHandler(keyboardEvent("Home"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedMonth).toBe(0);

  //   page.rootInstance.monthPickerKeyDownHandler(keyboardEvent("End"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedMonth).toBe(11);

  //   page.rootInstance.monthPickerKeyDownHandler(keyboardEvent("Tab"));
  //   page.rootInstance.monthPickerKeyDownHandler(keyboardEvent("Enter"));
  //   page.rootInstance.monthPickerKeyDownHandler(keyboardEvent("Escape"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.monthPickerVisible).toBe(false);
  // });

  // it("should test yearPickerKeyDownHandler ", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.yearPickerVisible = true;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.yearPickerKeyDownHandler(keyboardEvent("ArrowUp"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedYear).toBe(2021);

  //   page.rootInstance.yearPickerKeyDownHandler(keyboardEvent("ArrowDown"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedYear).toBe(2022);

  //   page.rootInstance.yearPickerKeyDownHandler(keyboardEvent("ArrowRight"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedYear).toBe(2023);

  //   page.rootInstance.yearPickerKeyDownHandler(keyboardEvent("ArrowLeft"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedYear).toBe(2022);

  //   page.rootInstance.yearPickerKeyDownHandler(keyboardEvent("Home"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedYear).toBe(2020);

  //   page.rootInstance.yearPickerKeyDownHandler(keyboardEvent("End"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedYear).toBe(2029);

  //   page.rootInstance.yearPickerKeyDownHandler(keyboardEvent("PageUp"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedYear).toBe(2019);

  //   page.rootInstance.yearPickerKeyDownHandler(keyboardEvent("PageDown"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedYear).toBe(2029);

  //   page.rootInstance.yearPickerKeyDownHandler(keyboardEvent("Tab"));
  //   page.rootInstance.yearPickerKeyDownHandler(keyboardEvent("Enter"));
  //   page.rootInstance.yearPickerKeyDownHandler(keyboardEvent("Escape"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.yearPickerVisible).toBe(false);
  // });

  // it("should test handleCalendarKeyDown", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="25/12/2022" show-picker-today-button="false" show-picker-clear-button="false"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("ArrowUp"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 18));

  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("ArrowDown"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 25));

  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("ArrowRight"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 26));

  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("ArrowLeft"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 25));

  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("Home"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 1));

  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("End"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 31));

  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("PageUp"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 10, 30));
  //   expect(page.rootInstance.liveRegionEl.innerText).toEqual(
  //     "November 2022 currently in view."
  //   );

  //   let keyEvent = keyboardEvent("PageUp");
  //   keyEvent.shiftKey = true;
  //   page.rootInstance.handleCalendarKeyDown(keyEvent);

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2021, 10, 30));

  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("PageDown"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2021, 11, 30));

  //   keyEvent = keyboardEvent("PageDown");
  //   keyEvent.shiftKey = true;
  //   page.rootInstance.handleCalendarKeyDown(keyEvent);

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 30));

  //   Object.defineProperty(page.rootInstance.monthButtonEl, "setFocus", {
  //     value: jest.fn(),
  //   });

  //   // simulate pressing enter to handle default behaviour case
  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("Enter"));
  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("Tab"));

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.monthButtonEl.setFocus).toHaveBeenCalled();

  //   //test tab with clear button disabled (rather than hidden)
  //   page.root!.showPickerClearButton = true;
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);
  //   page.rootInstance.clearButtonEl.disabled = true;
  //   await page.waitForChanges();

  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("Tab"));
  //   await page.waitForChanges();

  //   expect(page.rootInstance.monthButtonEl.setFocus).toHaveBeenCalledTimes(2);

  //   Object.defineProperty(page.rootInstance.yearButtonEl, "setFocus", {
  //     value: jest.fn(),
  //   });

  //   keyEvent = keyboardEvent("Tab");
  //   keyEvent.shiftKey = true;
  //   page.rootInstance.handleCalendarKeyDown(keyEvent);
  //   await page.waitForChanges();

  //   expect(page.rootInstance.yearButtonEl.setFocus).toHaveBeenCalled();
  // });

  // it("should test keyboard navigation when weekends disabled", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
  //   });

  //   page.root!.disableDays = [0, 6];
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("ArrowRight"));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 26));

  //   page.rootInstance.handleCalendarKeyDown(keyboardEvent("ArrowLeft"));
  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.focussedDate).toEqual(new Date(2022, 11, 23));
  // });

  // it("should test calendarButtonClickHandler", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   page.rootInstance.calendarButtonClickHandler();

  // });

  // it("should test blur of day button", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.dayButtonFocussed).toBe(true);

  //   const dayButton = page.root!.shadowRoot!.querySelector(
  //     "div.calendar-days-container > div.day-button-container:nth-child(26) > button"
  //   );

  //   (dayButton as HTMLButtonElement).blur();

  //   expect(page.rootInstance.dayButtonFocussed).toBe(false);
  // });

  // it("should test nav button mouse down handler", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const dayButton = page.root!.shadowRoot!.querySelector(
  //     "#previous-month-button"
  //   );
  //   const mouseEvent = new window.window.MouseEvent("mousedown", {
  //     bubbles: true,
  //     cancelable: true,
  //   });

  //   Object.defineProperty(mouseEvent, "preventDefault", {
  //     value: jest.fn(),
  //   });

  //   dayButton!.dispatchEvent(mouseEvent);
  //   await page.waitForChanges();

  //   expect(mouseEvent.preventDefault).toHaveBeenCalled();
  // });

  // it("should test setAriaLiveRegionText", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const text = "some text in the aria live region";
  //   page.rootInstance.setAriaLiveRegionText(text);
  //   await page.waitForChanges();

  //   expect(page.rootInstance.liveRegionEl.innerText).toEqual(text);
  // });

  // it("should test focus and blur of year button", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   const yearButton = page.root!.shadowRoot!.querySelector(
  //     ".year-picker-button"
  //   ) as HTMLIcButtonElement;
  //   yearButton.click();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.yearButtonFocussed).toBe(false);

  //   const firstYearButton = page.root!.shadowRoot!.querySelector(
  //     "div.year-picker > ic-button:nth-child(2)"
  //   ) as HTMLIcButtonElement;
  //   firstYearButton.focus();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.yearButtonFocussed).toBe(true);

  //   firstYearButton.blur();

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.yearButtonFocussed).toBe(false);
  // });

  // it("should test change of startOfWeek", async () => {
  //   const page = await newSpecPage({
  //     components: [Calendar, Button, Tooltip],
  //     html: `<ic-calendar open-at-date="23/12/2022"></ic-calendar>`,
  //   });

  //   await page.waitForChanges();
  //   await waitForTimeout(DELAY_MS);

  //   expect(page.rootInstance.orderedDaysOfWeek).toEqual([
  //     "Mon",
  //     "Tue",
  //     "Wed",
  //     "Thu",
  //     "Fri",
  //     "Sat",
  //     "Sun",
  //   ]);

  //   page.root!.startOfWeek = 4;
  //   await page.waitForChanges();

  //   expect(page.rootInstance.orderedDaysOfWeek).toEqual([
  //     "Thu",
  //     "Fri",
  //     "Sat",
  //     "Sun",
  //     "Mon",
  //     "Tue",
  //     "Wed",
  //   ]);
  // });
});
