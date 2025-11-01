import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  h,
  Prop,
  State,
  Watch,
} from "@stencil/core";

import {
  IcDateFormat,
  IcDateInputMonths,
  IcDateValueFormat,
  IcShortDayNames,
  IcSizes,
  IcThemeMode,
  IcWeekDays,
} from "../../utils/types";

import {
  addSixWeeks,
  clampDate,
  createDate,
  dateInRange,
  dateMatches,
  getMonthStart,
  getMonthEnd,
  getWeekStart,
  yearInRange,
  convertToDoubleDigits,
} from "../../utils/date-helpers";

import chevron from "../../assets/chevron-icon.svg";

import { DayButton } from "./ic-day-button";
import { MonthPicker } from "./ic-month-picker";
import { YearPicker } from "./ic-year-picker";
import { removeDisabledFalse, stringEnumToArray } from "../../utils/helpers";

const FOCUS_TIMER = 100;

@Component({
  tag: "ic-calendar",
  styleUrl: "ic-calendar.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Calendar {
  private clearButtonEl: HTMLIcButtonElement | undefined;
  private daysOfWeek: string[] = [];
  private dayButtonFocussed: boolean = false;
  private dayPickerKeyboardNav: boolean = false;
  private decadeStart: number;
  private decadeEnd: number;
  private dialogDescription: string = "";
  private focusDay: boolean = true;
  private focussedYearEl: HTMLIcButtonElement;
  private isUpdating: boolean = false;
  private liveRegionEl?: HTMLElement = undefined;
  private monthButtonEl: HTMLIcButtonElement | undefined;
  private monthNames: string[] = [];
  private monthInViewUpdateHandled: boolean = false;
  private parentIsDatePicker: boolean = false;
  private today = new Date();
  private todayButtonEl: HTMLIcButtonElement | undefined;
  private yearButtonEl: HTMLIcButtonElement | undefined;
  private yearButtonFocussed: boolean = false;

  @Element() el: HTMLIcCalendarElement;

  @State() clearButtonClicked: boolean = false;
  @State() currMonthView: Date[] = [];
  @State() currYearPickerView: number[] = [];
  @State() decadeView: number[] = [];
  @State() focussedDate: Date | null = null;
  @State() focussedDay: number;
  @State() focussedDayEl: HTMLButtonElement;
  @State() focussedMonth: number;
  @State() focussedMonthEl: HTMLIcButtonElement;
  @State() focussedYear: number;
  @State() maxDate: Date | null = null;
  @State() minDate: Date | null = null;
  @State() monthInView: number;
  @State() monthPickerVisible: boolean = false;
  @State() orderedDaysOfWeek: string[] = [];
  @State() selectedDate: Date | null = null;
  @State() yearInView: number;
  @State() yearPickerVisible: boolean = false;

  /**
   * The format in which the date will be displayed.
   */
  @Prop() dateFormat: IcDateFormat = "DD/MM/YYYY";

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop({ reflect: true }) disabled: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);

    if (this.disabled) {
      this.setSelectedDate(null);
      this.clearButtonEl?.disabled;
      this.todayButtonEl?.disabled;
    } else {
      this.setOpenAtDate();
    }
  }

  /**
   * The days of the week to disable.
   */
  @Prop() disableDays?: IcWeekDays[] = [];

  /**
   * If `true`, dates in the future are not allowed.
   */
  @Prop() disableFuture?: boolean = false;

  @Watch("disableFuture")
  watchDisableFutureHandler(): void {
    this.watchMaxHandler();
  }

  /**
   * If `true`, dates in the past are not allowed.
   */
  @Prop() disablePast?: boolean = false;

  @Watch("disablePast")
  watchDisablePastHandler(): void {
    this.watchMinHandler();
  }

  /**
   * The latest date that will be allowed. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   * The value of this prop is ignored if `disableFuture` is set to `true`.
   */
  @Prop() max: string | Date = "";
  @Watch("max")
  watchMaxHandler(): void {
    if (this.disableFuture) {
      this.maxDate = new Date();
    } else {
      this.maxDate = createDate(this.max, this.dateFormat);
    }
  }

  /**
   * The earliest date that will be allowed. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   * The value of this prop is ignored if `disablePast` is set to `true`.
   */
  @Prop() min: string | Date = "";
  @Watch("min")
  watchMinHandler(): void {
    if (this.disablePast) {
      this.minDate = new Date();
    } else {
      this.minDate = createDate(this.min, this.dateFormat);
    }
  }

  /**
   * The date visible when the calendar opens. Used if no date is currently selected.
   * The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   */
  @Prop() openAtDate: string | Date = "";

  /**
   * If `true`, the `Clear` button on the calendar will be visible.
   */
  @Prop() showClearButton?: boolean = true;

  /**
   * If `true`, days outside the current month will be visible in the calendar.
   */
  @Prop() showDaysOutsideMonth?: boolean = true;

  /**
   * If `true`, the `Go to today` button on the calendar will be visible.
   */
  @Prop() showTodayButton?: boolean = true;

  /**
   * The size of the calendar to be displayed.
   */
  @Prop() size: IcSizes = "medium";

  /**
   * The first day of the week. `0` for Sunday, `1` for Monday, etc.
   * Default is Monday.
   */
  @Prop() startOfWeek: IcWeekDays = IcWeekDays.Monday;

  @Watch("startOfWeek")
  watchStartOfWeekHandler(): void {
    this.orderedDaysOfWeek = this.daysOfWeek
      .slice(this.startOfWeek)
      .concat(this.daysOfWeek.slice(0, this.startOfWeek));
    this.updateMonthInView();
  }

  /**
   * Sets the calendar to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The value of the calendar and the date visible when the calendar opens.
   * The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   */
  @Prop({ mutable: true, reflect: true }) value?: IcDateValueFormat = "";

  @Watch("value")
  @Watch("openAtDate")
  valueChanged(
    newValue: Date | string | null | undefined,
    oldValue: Date | string | null | undefined,
    propName?: string
  ): void {
    if (newValue !== oldValue && this.isValidDateValue(newValue)) {
      if (propName === "value") {
        this.value = newValue;
        if (this.isUpdating) {
          this.setOpenAtDate();
        }
      } else if (propName === "openAtDate") {
        this.setOpenAtDate();
      }
    }
  }

  @Watch("focussedDate")
  watchFocussedDateHandler(current: Date, previous: Date): void {
    if (
      previous === null ||
      !(
        previous.getFullYear() === current.getFullYear() &&
        previous.getMonth() === current.getMonth()
      )
    ) {
      this.updateMonthInView();
    }
  }

  @Watch("monthInView")
  watchMonthInViewHandler(): void {
    this.focussedMonth = this.monthInView;
  }

  @Watch("yearInView")
  watchYearInViewHandler(): void {
    this.setFocussedYear(this.yearInView, false);
  }

  @Watch("yearPickerVisible")
  watchYearPickerVisibleHandler(): void {
    if (!this.yearPickerVisible) {
      this.setFocussedYear(this.yearInView);
    }
  }

  @Watch("monthPickerVisible")
  watchMonthPickerVisibleHandler(): void {
    if (!this.monthPickerVisible) {
      this.focussedMonth = this.monthInView;
    }
  }

  @Watch("focussedDayEl")
  watchFocussedDayEl(): void {
    if (this.focusDay) {
      setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
    }

    this.focusDay = true;
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() icChange: EventEmitter<{
    value: Date | null;
    dateObject: {
      day: string | null;
      month: string | null;
      year: string | null;
    };
    utcValue: Date | null;
  }>;

  /**
   * Emitted when the value has changed.
   */
  @Event() icCalendarClearButtonClick: EventEmitter<void>;

  /**
   * Emitted when a day is selected.
   */
  @Event() icCalendarDaySelect: EventEmitter<void>;

  /**
   * Emitted when a month is selected.
   */
  @Event() icCalendarMonthSelect: EventEmitter<void>;

  /**
   * Emitted when a year is selected.
   */
  @Event() icCalendarYearSelect: EventEmitter<void>;

  componentWillLoad(): void {
    const root = this.el.getRootNode();
    this.parentIsDatePicker =
      root instanceof ShadowRoot && root.host?.tagName === "IC-DATE-PICKER";
    this.monthNames = stringEnumToArray(IcDateInputMonths);
    this.daysOfWeek = stringEnumToArray(IcShortDayNames);
    this.watchStartOfWeekHandler();
    this.watchMaxHandler();
    this.watchMinHandler();
    this.setOpenAtDate();
    removeDisabledFalse(this.disabled, this.el);
    this.isUpdating = true;
  }

  private isValidDateValue = (value: IcDateValueFormat): boolean => {
    if (value == null) return true;

    if (value instanceof Date) {
      return !isNaN(value.getTime());
    }

    if (typeof value !== "string") return false;

    const iso8601Regex =
      /^\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:?\d{2})?)?$/;

    if (iso8601Regex.test(value)) {
      return !isNaN(Date.parse(value));
    }

    const [a, b, c] = value.split("/").map(Number);
    if ([a, b, c].some(isNaN)) return false;
    let day: number, month: number, year: number;
    switch (this.dateFormat) {
      case "DD/MM/YYYY":
        [day, month, year] = [a, b, c];
        break;
      case "MM/DD/YYYY":
        [month, day, year] = [a, b, c];
        break;
      case "YYYY/MM/DD":
        [year, month, day] = [a, b, c];
        break;
      default:
        return false;
    }
    if (month < 1 || month > 12 || day < 1 || day > 31) return false;

    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  private isPresent = (prop: IcDateValueFormat) =>
    prop !== "" && prop !== undefined && prop !== null;

  private setOpenAtDate = () => {
    let openAt: Date | null = null;
    if (this.disabled) {
      openAt = new Date();
    } else {
      if (!this.clearButtonClicked) {
        if (
          !this.disabled &&
          this.value != null &&
          this.isValidDateValue(this.value)
        ) {
          openAt = createDate(this.value, this.dateFormat);
        }

        if (!!openAt && dateInRange(openAt, this.minDate, this.maxDate)) {
          const selectedDay = openAt.getDay();

          if (
            !!this.disableDays &&
            this.disableDays.length > 0 &&
            typeof selectedDay == "number" &&
            this.disableDays.includes(selectedDay)
          ) {
            openAt = createDate(this.value ?? new Date(), this.dateFormat);
            this.setSelectedDate(null);
          } else {
            this.setSelectedDate(openAt);
          }
        } else if (this.isPresent(this.openAtDate)) {
          openAt = createDate(this.openAtDate, this.dateFormat);
        } else {
          openAt = new Date();
        }
      } else {
        openAt = this.focussedDate ? this.focussedDate : new Date();
        this.clearButtonClicked = false;
      }
    }
    this.setFocussedDate(openAt);

    this.updateMonthInView();
    let dialogDesc = this.getMonthInViewText();
    if (this.selectedDate === null) {
      dialogDesc += " No date selected.";
    }
    dialogDesc += ` Use arrow keys to change day. Press enter or space to select a date${
      this.parentIsDatePicker ? " or press escape to close the picker" : ""
    }.`;

    this.dialogDescription = dialogDesc;
    setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
  };

  /* Refs & setters */
  private setFocussedDayEl = (element: HTMLButtonElement) => {
    this.focussedDayEl = element;
  };

  private setFocussedMonthEl = (element: HTMLIcButtonElement) => {
    this.focussedMonthEl = element;
  };

  private setFocussedYearEl = (element: HTMLIcButtonElement) => {
    this.focussedYearEl = element;
  };

  private setFocussedYear = (newYear: number, focus = true): void => {
    const prevYear = this.focussedYear;
    this.focussedYear = newYear;
    if (this.yearPickerVisible) {
      const newDecade = Math.floor(newYear / 10) * 10;
      const oldDecade = Math.floor(prevYear / 10) * 10;
      if (newDecade !== oldDecade) {
        this.setDecadeView(newDecade);
        this.setAriaLiveRegionText(this.getDecadeInViewText());
      }
      if (focus) {
        setTimeout(() => {
          if (this.focussedYearEl !== null) this.focussedYearEl.setFocus();
        }, FOCUS_TIMER);
      }
    } else {
      this.setDecadeView(Math.floor(newYear / 10) * 10);
    }
  };

  private setFocussedDate = (d: Date): void => {
    this.focussedDate = clampDate(d, this.minDate, this.maxDate);
  };

  private setSelectedDate = (d: Date | null, emit = true): void => {
    if (d === null || !dateMatches(d, this.selectedDate)) {
      this.selectedDate = d;
      this.value = d;
      if (emit) {
        this.icChange.emit(this.setDateChangeEventDetail(d));
      }
    }
  };

  private setDateChangeEventDetail = (d: Date | null) => {
    let UTCDate = null;
    let day = null;
    let month = null;
    let year = null;
    if (d !== null) {
      UTCDate = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
      day = convertToDoubleDigits(d.getDate());
      month = convertToDoubleDigits(d.getMonth() + 1);
      year = d.getFullYear().toString();
    }
    return {
      value: d,
      dateObject: {
        day: day === "" ? null : day,
        month: month === "" ? null : month,
        year: year === "" ? null : year,
      },
      utcValue: UTCDate,
    };
  };

  private setAriaLiveRegionText = (text: string) => {
    this.liveRegionEl && (this.liveRegionEl.innerText = text);
  };

  private clearDialogDescription = () => {
    this.dialogDescription = "";
  };

  /* Navigation helpers */
  private goToPreviousMonth = (focusDay = false) => {
    this.focusDay = focusDay;
    this.moveMonths(-1);
  };

  private goToNextMonth = (focusDay = false) => {
    this.focusDay = focusDay;
    this.moveMonths(1);
  };

  private goToPreviousYear = (focusDay = false) => {
    if (this.isPrevYearAllowed()) {
      this.focusDay = focusDay;
      this.moveYears(-1);
    }
  };

  private goToNextYear = (focusDay = false) => {
    if (this.isNextYearAllowed()) {
      this.focusDay = focusDay;
      this.moveYears(1);
    }
  };

  private moveDays = (numDays: number): void => {
    if (this.focussedDate) {
      const d = new Date(this.focussedDate);
      d.setDate(d.getDate() + numDays);
      this.setFocussedDate(d);
    }
  };

  private moveMonths = (numMonths: number): void => {
    if (this.focussedDate) {
      const newMonth = this.focussedDate.getMonth() + numMonths;
      const min = new Date(
        new Date(getMonthStart(this.focussedDate)).setMonth(newMonth)
      );
      const max = getMonthEnd(min);
      const newDate = new Date(new Date(this.focussedDate).setMonth(newMonth));
      this.setFocussedDate(clampDate(newDate, min, max));

      if (
        this.monthPickerVisible === false &&
        this.yearPickerVisible === false &&
        this.monthInViewUpdateHandled === false
      ) {
        this.setAriaLiveRegionText(this.getMonthInViewText());
      }
      this.monthInViewUpdateHandled = false;
    }
  };

  private moveYears = (numYears: number): void => {
    if (this.focussedDate) {
      const newYear = this.focussedDate.getFullYear() + numYears;
      const min = new Date(
        new Date(getMonthStart(this.focussedDate)).setFullYear(newYear)
      );
      const max = getMonthEnd(min);
      const newDate = new Date(
        new Date(this.focussedDate).setFullYear(newYear)
      );
      this.setFocussedDate(clampDate(newDate, min, max));

      if (
        this.monthPickerVisible === false &&
        this.yearPickerVisible === false &&
        this.monthInViewUpdateHandled === false
      ) {
        this.setAriaLiveRegionText(this.getMonthInViewText());
      }
      this.monthInViewUpdateHandled = false;
    }
  };

  private updateFocussedMonth = (adjust: number): void => {
    const d = new Date(this.focussedYear, this.focussedMonth, 1);
    d.setMonth(this.focussedMonth + adjust);
    const newDate = clampDate(d, this.minDate, this.maxDate);
    this.focussedMonth = newDate.getMonth();
    setTimeout(() => this.focussedMonthEl.setFocus(), FOCUS_TIMER);
  };

  private updateFocussedYear = (adjust: number, focusYear = true): void => {
    const d = new Date(new Date().setFullYear(this.focussedYear + adjust));
    const newDate = clampDate(d, this.minDate, this.maxDate);
    this.setFocussedYear(newDate.getFullYear(), focusYear);
  };

  private getNextDayToFocus = (
    currDay: Date,
    forward: boolean,
    level = 1
  ): number => {
    const move = forward ? 1 : -1;
    const nextDay = new Date(currDay);
    nextDay.setDate(nextDay.getDate() + move);
    return this.disableDays?.includes(Number(nextDay.getDay()))
      ? this.getNextDayToFocus(nextDay, forward, level + 1)
      : level;
  };

  /* Focus helpers */
  private focusFirstElement = () => {
    this.monthButtonEl?.setFocus();
  };

  private focusLastElement = () => {
    if (
      this.showClearButton &&
      this.clearButtonEl &&
      !this.clearButtonEl.disabled
    ) {
      this.clearButtonEl.setFocus();
    } else if (
      this.showTodayButton &&
      this.todayButtonEl &&
      !this.todayButtonEl.disabled
    ) {
      this.todayButtonEl.setFocus();
    } else if (this.monthPickerVisible) {
      this.focussedMonthEl.setFocus();
    } else if (this.yearPickerVisible) {
      this.focussedYearEl.setFocus();
    } else {
      this.focussedDayEl.focus();
    }
  };

  private focusFocussedDay = () => {
    this.focussedDayEl.focus();
  };

  /* Click handlers */
  private monthButtonClickHandler = () => {
    this.yearPickerVisible = false;
    this.focusDay = false;
    this.monthPickerVisible = !this.monthPickerVisible;
    if (this.monthPickerVisible) {
      this.setAriaLiveRegionText("Month picker view open");
    } else {
      this.setMonthSelectedLiveRegionText();
      this.icCalendarMonthSelect.emit();
    }
  };

  private yearButtonClickHandler = () => {
    this.monthPickerVisible = false;
    this.focusDay = false;
    this.yearPickerVisible = !this.yearPickerVisible;
    if (this.yearPickerVisible) {
      this.setAriaLiveRegionText(
        `Year picker view open. ${this.getDecadeInViewText()}`
      );
    } else {
      this.setYearSelectedLiveRegionText();
      this.icCalendarYearSelect.emit();
    }
  };

  private todayButtonClickHandler = () => {
    this.yearPickerVisible = false;
    this.monthPickerVisible = false;
    this.setFocussedDate(new Date());
    this.setAriaLiveRegionText(this.getMonthInViewText());

    setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
  };

  private clearButtonClickHandler = () => {
    this.clearButtonClicked = true;
    this.selectedDate && this.setFocussedDate(this.selectedDate);
    this.setSelectedDate(null);
    this.icChange.emit(this.setDateChangeEventDetail(this.selectedDate));
    let text = "Selected date cleared.";
    if (!this.monthPickerVisible && !this.yearPickerVisible) {
      text += ` ${this.getMonthInViewText()}`;
    }
    if (this.monthPickerVisible) {
      this.focussedMonthEl.setFocus();
    } else if (this.yearPickerVisible) {
      this.focussedYearEl.setFocus();
    } else {
      this.focusFocussedDay();
    }
    this.setAriaLiveRegionText(text);
  };

  private monthYearNavClickHandler = (ev: Event): void => {
    const target = ev.target as Element;
    switch (target.id) {
      case "previous-month-button":
        this.goToPreviousMonth(this.dayButtonFocussed);
        break;

      case "next-month-button":
        this.goToNextMonth(this.dayButtonFocussed);
        break;

      case "previous-year-button":
        this.goToPreviousYear(this.dayButtonFocussed);
        break;

      case "next-year-button":
        this.goToNextYear(this.dayButtonFocussed);
        break;
    }
  };

  private handleCalendarClick = (event: MouseEvent): void => {
    this.clearDialogDescription();
    event.stopImmediatePropagation();
  };

  /* Keyboard handlers */
  private handleCalendarKeyDown = (ev: KeyboardEvent): void => {
    let handled = true;
    switch (ev.key) {
      case "ArrowDown":
        this.dayPickerKeyboardNav = true;
        this.moveDays(7);
        break;

      case "ArrowUp":
        this.dayPickerKeyboardNav = true;
        this.moveDays(-7);
        break;

      case "ArrowLeft":
        this.dayPickerKeyboardNav = true;
        if (this.focussedDate)
          this.moveDays(-1 * this.getNextDayToFocus(this.focussedDate, false));
        break;

      case "ArrowRight":
        this.dayPickerKeyboardNav = true;
        if (this.focussedDate)
          this.moveDays(this.getNextDayToFocus(this.focussedDate, true));
        break;

      case "PageUp":
        this.dayPickerKeyboardNav = true;
        ev.shiftKey ? this.moveYears(-1) : this.moveMonths(-1);
        break;

      case "PageDown":
        this.dayPickerKeyboardNav = true;
        ev.shiftKey ? this.moveYears(1) : this.moveMonths(1);
        break;

      case "Home":
        this.dayPickerKeyboardNav = true;
        this.setFocussedDate(
          new Date(this.focussedYear, this.focussedMonth, 1)
        );
        break;

      case "End":
        this.dayPickerKeyboardNav = true;
        this.setFocussedDate(
          new Date(this.focussedYear, this.focussedMonth + 1, 0)
        );
        break;

      case "Tab":
        handled = this.calendarTabHandler(ev);
        break;

      default:
        handled = false;
        break;
    }

    if (handled) {
      ev.preventDefault();
    }
  };

  private monthPickerKeyDownHandler = (ev: KeyboardEvent): void => {
    let handled = true;
    switch (ev.key) {
      case "ArrowUp":
      case "ArrowLeft":
        this.updateFocussedMonth(-1);
        break;

      case "ArrowDown":
      case "ArrowRight":
        this.updateFocussedMonth(1);
        break;

      case "Home":
        this.updateFocussedMonth(-this.focussedMonth);
        break;

      case "End":
        this.updateFocussedMonth(11 - this.focussedMonth);
        break;

      case "Tab":
        handled = this.calendarTabHandler(ev);
        break;

      case "Escape":
        ev.stopImmediatePropagation();
        this.monthPickerVisible = false;
        setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
        break;

      default:
        handled = false;
    }

    if (handled) {
      ev.preventDefault();
    }
  };

  private yearPickerKeyDownHandler = (ev: KeyboardEvent): void => {
    let handled = true;
    switch (ev.key) {
      case "ArrowUp":
      case "ArrowLeft":
        this.updateFocussedYear(-1);
        break;

      case "ArrowDown":
      case "ArrowRight":
        this.updateFocussedYear(1);
        break;

      case "Home":
        if (this.focussedYear > this.decadeStart) {
          this.updateFocussedYear(this.decadeStart - this.focussedYear);
        }
        break;

      case "End":
        if (this.focussedYear < this.decadeEnd) {
          this.updateFocussedYear(this.decadeEnd - this.focussedYear);
        }
        break;

      case "PageUp":
        this.updateFocussedYear(-10);
        break;

      case "PageDown":
        this.updateFocussedYear(10);
        break;

      case "Tab":
        handled = this.calendarTabHandler(ev);
        break;

      case "Escape":
        ev.stopImmediatePropagation();
        this.yearPickerVisible = false;
        setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
        break;

      default:
        handled = false;
    }

    if (handled) {
      ev.preventDefault();
    }
  };

  private monthButtonKeyDownHandler = (ev: KeyboardEvent): void => {
    let handled = false;
    switch (ev.key) {
      case "ArrowLeft":
      case "ArrowUp":
        handled = true;
        this.goToPreviousMonth();
        break;

      case "ArrowRight":
      case "ArrowDown":
        handled = true;
        this.goToNextMonth();
        break;

      case "Home":
        handled = true;
        this.focusDay = false;
        this.moveMonths(-this.monthInView);
        break;

      case "End":
        handled = true;
        this.focusDay = false;
        this.moveMonths(11 - this.monthInView);
        break;

      case "Tab":
        if (ev.shiftKey) {
          handled = true;
          this.focusLastElement();
        }
        break;

      case "Escape":
        if (this.monthPickerVisible) {
          this.monthPickerVisible = false;
          ev.stopImmediatePropagation();
        }
        break;

      default:
        break;
    }

    if (handled) {
      ev.preventDefault();
    }
  };

  private yearButtonKeyDownHandler = (ev: KeyboardEvent): void => {
    let handled = false;
    switch (ev.key) {
      case "ArrowLeft":
      case "ArrowUp":
        handled = true;
        this.goToPreviousYear();
        break;

      case "ArrowRight":
      case "ArrowDown":
        handled = true;
        this.goToNextYear();
        break;

      case "Home":
        if (this.yearPickerVisible && this.yearInView > this.decadeStart) {
          handled = true;
          this.moveYears(this.decadeStart - this.yearInView);
        }
        break;

      case "End":
        if (this.yearPickerVisible && this.yearInView < this.decadeEnd) {
          handled = true;
          this.moveYears(this.decadeEnd - this.focussedYear);
        }
        break;

      case "PageUp":
        handled = true;
        this.focusDay = false;
        this.moveYears(-10);
        break;

      case "PageDown":
        handled = true;
        this.focusDay = false;
        this.moveYears(10);
        break;

      case "Escape":
        if (this.yearPickerVisible) {
          this.yearPickerVisible = false;
          ev.stopImmediatePropagation();
        }
        break;

      default:
        break;
    }

    if (handled) {
      ev.preventDefault();
    }
  };

  private todayButtonKeyDownHandler = (ev: KeyboardEvent) => {
    if (ev.key === "Tab" && !ev.shiftKey && this.clearButtonEl?.disabled) {
      this.focusFirstElement();
      ev.preventDefault();
    }
  };

  private clearButtonKeyDownHandler = (ev: KeyboardEvent) => {
    if (ev.key === "Tab" && !ev.shiftKey) {
      this.focusFirstElement();
      ev.preventDefault();
    }
  };

  private calendarTabHandler = (ev: KeyboardEvent): boolean => {
    let handled = false;
    if (
      !ev.shiftKey &&
      (!this.showTodayButton || this.isCurrentMonth()) &&
      (!this.showClearButton || this.clearButtonEl?.disabled)
    ) {
      this.focusFirstElement();
      handled = true;
    } else if (ev.shiftKey) {
      this.yearButtonEl?.setFocus();
      handled = true;
    }
    return handled;
  };

  /* Utility functions */
  private setMonthSelectedLiveRegionText = () => {
    this.setAriaLiveRegionText(
      `${
        this.monthNames[this.monthInView]
      } selected. ${this.getMonthInViewText()}`
    );
  };

  private setYearSelectedLiveRegionText = () => {
    this.setAriaLiveRegionText(
      `${this.yearInView} selected. ${this.getMonthInViewText()}`
    );
  };

  private setDecadeView = (start: number) => {
    let currYear = start - 1;
    const decadeArr = [];
    while (currYear <= start + 10) {
      decadeArr.push(currYear);
      currYear++;
    }
    this.decadeView = decadeArr;
    this.decadeStart = decadeArr[1];
    this.decadeEnd = decadeArr[10];
  };

  private getMonthInViewText = () => {
    return `${this.monthNames[this.monthInView]} ${
      this.yearInView
    } currently in view.`;
  };

  private getDecadeInViewText = () => {
    return `${this.decadeStart} to ${this.decadeEnd} currently in view.`;
  };

  private isPrevYearAllowed = (): boolean => {
    return this.isYearAllowed(this.yearInView - 1);
  };

  private isNextYearAllowed = (): boolean => {
    return this.isYearAllowed(this.yearInView + 1);
  };

  private isYearAllowed = (yr: number): boolean =>
    yearInRange(yr, this.minDate, this.maxDate);

  private getMonthView = (date: Date): Date[] => {
    const start = getWeekStart(getMonthStart(date), this.startOfWeek);
    const end = addSixWeeks(start);

    const days: Date[] = [];
    let current = start;

    while (!dateMatches(current, end)) {
      days.push(current);
      current = new Date(current);
      current.setDate(current.getDate() + 1);
    }

    days.push(current);

    return days;
  };

  private isCurrentMonth = (): boolean => {
    const d = new Date();
    return (
      d.getFullYear() === this.yearInView && d.getMonth() === this.monthInView
    );
  };

  private updateMonthInView = (): void => {
    if (this.focussedDate) {
      this.currMonthView = this.getMonthView(this.focussedDate);

      this.focussedDay = this.focussedDate.getDate();
      this.monthInView = this.focussedDate.getMonth();
      this.yearInView = this.focussedDate.getFullYear();

      if (this.dayPickerKeyboardNav) {
        this.monthInViewUpdateHandled = true;
        this.setAriaLiveRegionText(this.getMonthInViewText());
        this.dayPickerKeyboardNav = false;
      }
    }
  };

  /* Mouse handlers */
  private navButtonMouseDownHandler = (ev: MouseEvent): void => {
    ev.preventDefault();
  };

  private handleCalendarMouseDown = (event: MouseEvent): void => {
    const target = event.target as HTMLElement;
    if (target.tagName !== "IC-BUTTON") {
      event.preventDefault();
    }
  };

  private handleSelectDay = (day: Date): void => {
    this.setSelectedDate(day);
    this.setFocussedDate(day);
    this.icCalendarDaySelect.emit();
  };

  private handleSelectMonth = (month: number): void => {
    this.moveMonths(month - this.monthInView);
    setTimeout(() => {
      this.monthButtonEl?.setFocus();
      this.monthPickerVisible = false;
      this.setMonthSelectedLiveRegionText();
      this.icCalendarMonthSelect.emit();
    }, FOCUS_TIMER);
  };

  private handleSelectYear = (year: number): void => {
    const yrPos = this.decadeView.indexOf(year);
    if (yrPos > 0 && yrPos < this.decadeView.length - 1) {
      this.moveYears(year - this.yearInView);
      this.focusDay = false;
      const monthName = this.monthNames[this.monthInView];
      this.setAriaLiveRegionText(
        `${year} selected. ${monthName} ${year} currently in view.`
      );
      setTimeout(() => {
        this.yearButtonEl?.setFocus();
        this.yearPickerVisible = false;
        this.icCalendarYearSelect.emit();
      }, FOCUS_TIMER);
    } else {
      const moveYears = year - this.focussedYear > 0 ? 10 : -10;
      this.updateFocussedYear(moveYears, this.yearButtonFocussed);
      this.setAriaLiveRegionText(this.getDecadeInViewText());
    }
  };

  private onDayButtonFocusHandler = () => {
    this.dayButtonFocussed = true;
  };

  private onDayButtonBlurHandler = () => {
    this.dayButtonFocussed = false;
  };

  private onYearButtonFocusHandler = () => {
    this.yearButtonFocussed = true;
  };

  private onYearButtonBlurHandler = () => {
    this.yearButtonFocussed = false;
  };

  /* Render helpers */
  private renderMonthYearNavButton = (
    id: string,
    flip: boolean,
    disabled: boolean
  ): void => {
    const buttonSize = this.size;
    return (
      <ic-button
        id={id}
        disableTooltip={true}
        disabled={disabled}
        onClick={this.monthYearNavClickHandler}
        class={{ flip: flip }}
        variant="icon-tertiary"
        innerHTML={chevron}
        size={buttonSize}
        tabIndex={-1}
        ariaLabel={`Go to ${id.slice(0, -7).replace("-", " ")}`}
        onMouseDown={this.navButtonMouseDownHandler}
      />
    );
  };

  private previousMonthButton = (): void => {
    let disabled = false;
    if (this.disabled) {
      disabled = true;
    } else {
      if (this.focussedDate !== null && this.minDate !== null) {
        const yearMatch =
          this.focussedDate.getFullYear() === this.minDate.getFullYear();
        if (yearMatch) {
          disabled = this.monthInView - 1 < this.minDate.getMonth();
        }
      }
    }
    return this.renderMonthYearNavButton(
      "previous-month-button",
      true,
      disabled
    );
  };

  private nextMonthButton = (): void => {
    let disabled = false;
    if (this.disabled) {
      disabled = true;
    } else {
      if (this.focussedDate !== null && this.maxDate !== null) {
        const yearMatch =
          this.focussedDate.getFullYear() === this.maxDate.getFullYear();
        if (yearMatch) {
          disabled = this.monthInView + 1 > this.maxDate.getMonth();
        }
      }
    }
    return this.renderMonthYearNavButton("next-month-button", false, disabled);
  };

  private previousYearButton = (): void => {
    return this.renderMonthYearNavButton(
      "previous-year-button",
      true,
      this.disabled || !this.isPrevYearAllowed()
    );
  };

  private nextYearButton = (): void => {
    return this.renderMonthYearNavButton(
      "next-year-button",
      false,
      this.disabled || !this.isNextYearAllowed()
    );
  };

  render() {
    const {
      dialogDescription,
      monthNames,
      focussedMonth,
      focussedYear,
      monthInView,
      yearInView,
      monthPickerVisible,
      yearPickerVisible,
      decadeView,
      minDate,
      maxDate,
      orderedDaysOfWeek,
      parentIsDatePicker,
      showClearButton,
      showTodayButton,
      size,
      theme,
    } = this;

    let monthButtonText = "";
    if (monthPickerVisible) {
      monthButtonText = `Use the arrow keys to change the selected month. To return to day picker view, press Enter or Space to select a month, or press Escape.`;
    } else {
      monthButtonText = `Press Enter or Space to open month picker view or use the arrow keys to change month.`;
    }

    let yearButtonText = "";
    if (yearPickerVisible) {
      yearButtonText = `Use the arrow keys to change the selected year. To return to day picker view, press Enter or Space to select a year, or press Escape.`;
    } else {
      yearButtonText = `Press Enter or Space to open year picker view or use the arrow keys to change the selected year.`;
    }

    const dialogLabel = "choose date";

    const monthLabel =
      monthNames && monthNames[monthInView]
        ? monthNames[monthInView]
        : "Open month picker";
    const yearLabel = this.yearInView ? this.yearInView : "Open year picker";

    let minDay = minDate;
    if (minDate && this.disablePast) {
      const yesterday = new Date(minDate);
      yesterday.setDate(minDate.getDate() - 1);
      minDay = yesterday;
    }

    const weeks = [];
    for (let i = 0; i < this.currMonthView.length; i += 7) {
      weeks.push(this.currMonthView.slice(i, i + 7));
    }

    return (
      <Host
        class={{
          [`ic-calendar-${size}`]: true,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <div>
          <span id="dialog-description" class="sr-only">
            {dialogDescription}
          </span>
          <div
            {...(parentIsDatePicker && {
              role: "dialog",
              "aria-modal": "true",
            })}
            aria-label={dialogLabel}
            aria-describedBy="dialog-description"
            class={{
              "calendar-container": true,
            }}
            onMouseDown={this.handleCalendarMouseDown}
            onClick={this.handleCalendarClick}
          >
            <span
              ref={(el) => (this.liveRegionEl = el)}
              id="live-region"
              aria-live="assertive"
              class="sr-only"
            ></span>
            <div
              class={{
                "month-year-nav-container": true,
              }}
            >
              <div class="month-year-nav">
                {this.previousMonthButton()}
                <span id="select-month-hint" aria-hidden="true">
                  {monthButtonText}
                </span>
                <ic-button
                  ref={(el: HTMLIcButtonElement | undefined) =>
                    (this.monthButtonEl = el)
                  }
                  size={size}
                  class="month-picker-button"
                  disabled={this.disabled}
                  aria-haspopup="menu"
                  aria-expanded={monthPickerVisible ? "true" : "false"}
                  full-width="true"
                  variant="tertiary"
                  aria-label={monthLabel}
                  aria-describedby="select-month-hint"
                  onKeyDown={this.monthButtonKeyDownHandler}
                  onClick={this.monthButtonClickHandler}
                >
                  {monthNames[monthInView]}
                </ic-button>
                {this.nextMonthButton()}
              </div>
              <div class="month-year-nav">
                {this.previousYearButton()}
                <span id="select-year-hint" aria-hidden="true">
                  {yearButtonText}
                </span>
                <ic-button
                  ref={(el: HTMLIcButtonElement | undefined) =>
                    (this.yearButtonEl = el)
                  }
                  size={size}
                  class="year-picker-button"
                  disabled={this.disabled}
                  aria-haspopup="menu"
                  aria-expanded={yearPickerVisible ? "true" : "false"}
                  full-width="true"
                  variant="tertiary"
                  ariaLabel={yearLabel}
                  aria-describedby="select-year-hint"
                  onKeyDown={this.yearButtonKeyDownHandler}
                  onClick={this.yearButtonClickHandler}
                >
                  {this.yearInView}
                </ic-button>
                {this.nextYearButton()}
              </div>
            </div>
            {!(monthPickerVisible || yearPickerVisible) && (
              <table
                role="grid"
                class={{
                  calendar: true,
                  hidden: monthPickerVisible || yearPickerVisible,
                }}
                onKeyDown={this.handleCalendarKeyDown}
              >
                <thead class="weekdays-container">
                  <tr class="weekdays">
                    {orderedDaysOfWeek.map((dayName) => {
                      const header =
                        size === "small" ? dayName.charAt(0) : dayName;
                      return (
                        <th scope="col" class="calendar-day-header">
                          <ic-typography variant="caption">
                            {header}
                          </ic-typography>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody class="calendar-days-container">
                  {weeks.map((week, weekIdx) => (
                    <tr key={weekIdx}>
                      {week.map((day) => (
                        <td key={day.toISOString()}>
                          <DayButton
                            day={day}
                            disableDay={
                              this.disabled ||
                              this.disableDays?.includes(Number(day.getDay()))
                            }
                            today={dateMatches(day, this.today)}
                            selected={dateMatches(day, this.selectedDate)}
                            focussed={dateMatches(day, this.focussedDate)}
                            inRange={dateInRange(day, minDay, maxDate)}
                            monthInView={monthInView}
                            onSelectDay={this.handleSelectDay}
                            focussedDayRef={this.setFocussedDayEl}
                            onFocusDay={this.onDayButtonFocusHandler}
                            onBlurDay={this.onDayButtonBlurHandler}
                            showDaysOutsideMonth={this.showDaysOutsideMonth}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <div
              class={{
                "month-picker-container": true,
                hidden: !monthPickerVisible,
              }}
            >
              {monthPickerVisible && (
                <MonthPicker
                  size={size}
                  onSelectMonth={this.handleSelectMonth}
                  monthInView={monthInView}
                  focussedMonth={focussedMonth}
                  onKeyDown={this.monthPickerKeyDownHandler}
                  focussedMonthRef={this.setFocussedMonthEl}
                  minDate={minDate}
                  maxDate={maxDate}
                  yearInView={yearInView}
                ></MonthPicker>
              )}
            </div>
            <div
              class={{
                "year-picker-container": true,
                hidden: !yearPickerVisible,
              }}
            >
              {yearPickerVisible && (
                <YearPicker
                  decadeView={decadeView}
                  size={size}
                  focussedYear={focussedYear}
                  onSelectYear={this.handleSelectYear}
                  onKeyDown={this.yearPickerKeyDownHandler}
                  onFocusYear={this.onYearButtonFocusHandler}
                  onBlurYear={this.onYearButtonBlurHandler}
                  yearInView={yearInView}
                  minDate={minDate}
                  maxDate={maxDate}
                  focussedYearRef={this.setFocussedYearEl}
                ></YearPicker>
              )}
            </div>
            <div
              class={{
                "bottom-buttons": true,
                "no-today": !showTodayButton,
              }}
            >
              {showTodayButton && (
                <ic-button
                  id="today-button"
                  variant="tertiary"
                  ref={(el: HTMLIcButtonElement | undefined) =>
                    (this.todayButtonEl = el)
                  }
                  size={size}
                  aria-label="Navigate to current date"
                  onClick={this.todayButtonClickHandler}
                  onKeyDown={this.todayButtonKeyDownHandler}
                  disabled={this.isCurrentMonth()}
                >
                  Go to today
                </ic-button>
              )}
              {showClearButton && (
                <ic-button
                  id="clear-button"
                  aria-label="clear selected date"
                  ref={(el: HTMLIcButtonElement | undefined) =>
                    (this.clearButtonEl = el)
                  }
                  variant="tertiary"
                  size={size}
                  onClick={this.clearButtonClickHandler}
                  onKeyDown={this.clearButtonKeyDownHandler}
                  disabled={
                    this.value === "" ||
                    this.value === null ||
                    this.value === undefined
                  }
                >
                  Clear
                </ic-button>
              )}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
