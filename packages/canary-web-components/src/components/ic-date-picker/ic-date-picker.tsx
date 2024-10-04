import {
  Component,
  Element,
  Host,
  h,
  Prop,
  Listen,
  Watch,
  State,
  Event,
  EventEmitter,
} from "@stencil/core";
import {
  createDate,
  clampDate,
  dateMatches,
  dateInRange,
  getMonthStart,
  getMonthEnd,
  getWeekEnd,
  getWeekStart,
  yearInRange,
} from "../../utils/date-helpers";
import {
  stringEnumToArray,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import {
  IcWeekDays,
  IcShortDayNames,
  IcDateInputMonths,
  IcDateFormat,
  IcSizes,
  IcInformationStatusOrEmpty,
} from "../../utils/types";
import chevron from "../../assets/chevron-icon.svg";
import { DayButton } from "./ic-day-button";
import { MonthPicker } from "./ic-month-picker";
import { YearPicker } from "./ic-year-picker";

const DEFAULT_DATE_FORMAT = "DD/MM/YYYY";
const DEFAULT_DISABLE_DATES_FROM_NOW_MSG =
  "Dates in the future are not allowed. Please select a date in the past.";
const DEFAULT_DISABLE_DATES_UNTIL_NOW_MSG =
  "Dates in the past are not allowed. Please select a date in the future.";
const DEFAULT_DISABLE_DAYS_MSG =
  "The date you have selected is on a day of the week that is not allowed. Please select another date.";
const FOCUS_TIMER = 100;
const PICKER_HEIGHT_SMALL = 360;
const PICKER_HEIGHT_DEFAULT = 400;
const PICKER_HEIGHT_LARGE = 440;

interface IcDateInputProps {
  dateFormat?: IcDateFormat;
  disabled?: boolean;
  disableDays?: IcWeekDays[];
  disableDaysMessage?: string;
  disableFuture?: boolean;
  disableFutureMessage?: string;
  disablePast?: boolean;
  disablePastMessage?: string;
  helperText?: string;
  hideHelperText?: boolean;
  inputId?: string;
  invalidDateMessage?: string;
  label: string;
  max?: string | Date;
  min?: string | Date;
  name?: string;
  required?: boolean;
  showClearButton?: boolean;
  showCalendarButton?: boolean;
  size?: IcSizes;
  value?: string | Date;
  validationStatus?: IcInformationStatusOrEmpty;
  validationText?: string;
}

@Component({
  tag: "ic-date-picker",
  styleUrl: "ic-date-picker.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class DatePicker {
  private inputEl: HTMLIcDateInputElement;
  private clearButtonEl: HTMLIcButtonElement = null;
  private dateInputProps: IcDateInputProps;
  private daysOfWeek: string[] = [];
  private dayButtonFocussed: boolean = false;
  private dayPickerKeyboardNav: boolean = false;
  private decadeStart: number;
  private decadeEnd: number;
  private dialogDescription: string = "";
  private focusDay: boolean = true;
  private focussedYearEl: HTMLIcButtonElement;
  private liveRegionEl: HTMLElement = null;
  private monthButtonEl: HTMLIcButtonElement;
  private monthNames: string[] = [];
  private monthInViewUpdateHandled: boolean = false;
  private myCalendarButtonClicked: boolean = false;
  private showPickerAbove: boolean = false;
  private today = new Date();
  private todayButtonEl: HTMLIcButtonElement = null;
  private yearButtonEl: HTMLIcButtonElement;
  private yearButtonFocussed: boolean = false;

  @Element() el: HTMLIcDatePickerElement;

  @State() calendarOpen: boolean = false;
  @State() currMonthView: Date[] = [];
  @State() currYearPickerView: number[] = [];
  @State() decadeView: number[] = [];
  @State() focussedDate: Date = null;
  @State() focussedDay: number;
  @State() focussedDayEl: HTMLButtonElement;
  @State() focussedMonth: number;
  @State() focussedMonthEl: HTMLIcButtonElement;
  @State() focussedYear: number;
  @State() maxDate: Date = null;
  @State() minDate: Date = null;
  @State() monthInView: number;
  @State() monthPickerVisible: boolean = false;
  @State() orderedDaysOfWeek: string[] = [];
  @State() selectedDate: Date = null;
  @State() yearInView: number;
  @State() yearPickerVisible: boolean = false;

  /**
   * The format in which the date will be displayed.
   */
  @Prop() dateFormat?: IcDateFormat = "DD/MM/YYYY";

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;

  /**
   * The days of the week to disable.
   */
  @Prop() disableDays?: IcWeekDays[] = [];

  /**
   * The text to display as the validation message when `disableDays` is `true` and a disabled date is entered.
   */
  @Prop() disableDaysMessage?: string =
    "The date you have selected is on a day of the week that is not allowed. Please select another date.";

  /**
   * If `true`, dates in the future are not allowed. A validation message will appear if a date in the future is entered.
   */
  @Prop() disableFuture?: boolean = false;

  @Watch("disableFuture")
  watchDisableFutureHandler(): void {
    this.watchMaxHandler();
  }

  /**
   * The text to display as the validation message when `disableFuture` is `true` and a date in the future is entered.
   */
  @Prop() disableFutureMessage?: string =
    "Dates in the future are not allowed. Please select a date in the past.";

  /**
   * If `true`, dates in the past are not allowed. A validation message will appear if a date in the past is entered.
   */
  @Prop() disablePast?: boolean = false;

  @Watch("disablePast")
  watchDisablePastHandler(): void {
    this.watchMinHandler();
  }

  /**
   * The text to display as the validation message when `disablePast` is `true` and a date in the past is entered.
   */
  @Prop() disablePastMessage?: string =
    "Dates in the past are not allowed. Please select a date in the future.";

  /**
   * The helper text that will be displayed for additional field guidance. This will default to the text "Use format" along with the `dateFormat` value.
   */
  @Prop() helperText?: string;

  /**
   * If `true`, the helper text will be visually hidden, but still read out by screenreaders.
   */
  @Prop() hideHelperText: boolean = false;

  /**
   * The ID for the input field. The default will be an automatically generated value.
   */
  @Prop() inputId?: string;

  /**
   * The text to display as the validation message when an invalid date is entered.
   */
  @Prop() invalidDateMessage?: string = "Please enter a valid date.";

  /**
   * The label for the date input.
   */
  @Prop() label!: string;

  /**
   * The latest date that will be allowed. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   * The value of this prop is ignored if `disableFuture` is set to `true`.
   */
  @Prop() max?: string | Date = "";

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
  @Prop() min?: string | Date = "";

  @Watch("min")
  watchMinHandler(): void {
    if (this.disablePast) {
      this.minDate = new Date();
    } else {
      this.minDate = createDate(this.min, this.dateFormat);
    }
  }

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name?: string;

  /**
   * The date visible when the calendar opens. Used if no date is currently selected.
   * The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   */
  @Prop() openAtDate: string | Date = "";

  /**
   * If `true`, the input will require a value.
   */
  @Prop() required?: boolean = false;

  /**
   * If `true`, days outside the current month will be visible in the date picker.
   */
  @Prop() showDaysOutsideMonth?: boolean = true;

  /**
   * If `true`, the `Clear` button on the date picker will be visible.
   */
  @Prop() showPickerClearButton?: boolean = true;

  /**
   * If `true`, the `Go to today` button on the date picker will be visible.
   */
  @Prop() showPickerTodayButton?: boolean = true;

  /**
   * The size of the date picker to be displayed.
   */
  @Prop() size?: IcSizes = "medium";

  /**
   * The first day of the week. `0` for Sunday, `1` for Monday, etc.
   * Default is Monday.
   */
  @Prop() startOfWeek?: IcWeekDays = IcWeekDays.Monday;

  @Watch("startOfWeek")
  watchStartOfWeekHandler(): void {
    this.orderedDaysOfWeek = this.daysOfWeek
      .slice(this.startOfWeek)
      .concat(this.daysOfWeek.slice(0, this.startOfWeek));
    if (this.calendarOpen) {
      this.updateMonthInView();
    }
  }

  /**
   * The validation status - e.g. 'error' | 'warning' | 'success'. This will override the built-in date validation.
   */
  @Prop() validationStatus?: IcInformationStatusOrEmpty = "";

  /**
   * The text to display as the validation message. This will override the built-in date validation.
   */
  @Prop() validationText?: string = "";

  /**
   * The value of the date picker. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   */
  @Prop({ mutable: true }) value?: string | Date | null | undefined = "";

  @Watch("calendarOpen")
  watchOpenHandler(): void {
    if (this.calendarOpen) {
      if (this.inputEl) {
        let pickerHeight = PICKER_HEIGHT_DEFAULT;
        if (this.size === "small") {
          pickerHeight = PICKER_HEIGHT_SMALL;
        } else if (this.size === "large") {
          pickerHeight = PICKER_HEIGHT_LARGE;
        }
        if (
          this.el.offsetTop + this.inputEl.offsetHeight + pickerHeight >
            window.innerHeight &&
          this.el.offsetTop > pickerHeight
        ) {
          this.showPickerAbove = true;
        } else {
          this.showPickerAbove = false;
        }
      }
      if (
        this.selectedDate === null ||
        !dateInRange(this.selectedDate, this.minDate, this.maxDate)
      ) {
        let openAt = new Date();
        if (this.openAtDate !== "") {
          openAt = createDate(this.openAtDate, this.dateFormat);
        }
        this.setFocussedDate(openAt);
      } else {
        this.setFocussedDate(this.selectedDate);
      }
      let dialogDesc = this.getMonthInViewText();
      if (this.selectedDate === null) {
        dialogDesc += " No date selected.";
      }
      dialogDesc +=
        " Use arrow keys to change day. Press enter or space to select a date or press escape to close the picker";
      this.dialogDescription = dialogDesc;
      setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
      document.addEventListener("click", this.handleDocumentClick);
    } else {
      document.removeEventListener("click", this.handleDocumentClick);
      this.monthPickerVisible = false;
      this.yearPickerVisible = false;
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
  @Event() icChange: EventEmitter<{ value: Date }>;

  componentWillLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Date Picker"
    );

    this.monthNames = stringEnumToArray(IcDateInputMonths);
    this.daysOfWeek = stringEnumToArray(IcShortDayNames);

    this.watchStartOfWeekHandler();
    this.watchMaxHandler();
    this.watchMinHandler();
  }

  componentWillRender(): void {
    this.dateInputProps = this.setDateInputProps();
  }

  componentWillUpdate(): void {
    this.dateInputProps = this.setDateInputProps();
  }

  @Listen("calendarButtonClicked")
  localCalendarButtonClickHandler(ev: CustomEvent): void {
    this.myCalendarButtonClicked = true;
    if (!this.calendarOpen) {
      this.setSelectedDate(ev.detail.value, false);
    }

    this.calendarOpen = !this.calendarOpen;
  }

  @Listen("calendarButtonClicked", { target: "document" })
  calendarButtonClickHandler(): void {
    //closes this picker if calendar button in another clicked
    if (!this.myCalendarButtonClicked) {
      this.calendarOpen = false;
    }
    this.myCalendarButtonClicked = false;
  }

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

  private setSelectedDate = (d: Date, emit = true): void => {
    if (d === null || !dateMatches(d, this.selectedDate)) {
      this.selectedDate = d;
      this.value = d;
      if (emit) {
        this.inputEl.triggerIcChange(d);
      }
    }
  };

  private handleCalendarMouseDown = (event: MouseEvent): void => {
    const target = event.target as HTMLElement;
    if (target.tagName !== "IC-BUTTON") {
      event.preventDefault();
    }
  };

  private handleCalendarClick = (event: MouseEvent): void => {
    this.clearDialogDescription();
    event.stopImmediatePropagation();
  };

  private handleDocumentClick = (): void => {
    this.calendarOpen = false;
  };

  private keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      if (this.calendarOpen) {
        this.closeButtonClickHandler();
        this.inputEl.setCalendarFocus();
        event.stopImmediatePropagation();
      }
    } else {
      this.clearDialogDescription();
      event.stopImmediatePropagation();
    }
  };

  private closeButtonClickHandler = () => {
    this.calendarOpen = false;
  };

  private focusFirstElement = () => {
    this.monthButtonEl.setFocus();
  };

  private focusLastElement = () => {
    if (this.showPickerClearButton && !this.clearButtonEl.disabled) {
      this.clearButtonEl.setFocus();
    } else if (this.showPickerTodayButton && !this.todayButtonEl.disabled) {
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

  private monthButtonClickHandler = () => {
    this.yearPickerVisible = false;
    this.focusDay = false;
    this.monthPickerVisible = !this.monthPickerVisible;
    if (this.monthPickerVisible) {
      this.setAriaLiveRegionText("Month picker view open");
    } else {
      this.setMonthSelectedLiveRegionText();
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
    }
  };

  private todayButtonClickHandler = () => {
    this.yearPickerVisible = false;
    this.monthPickerVisible = false;
    this.setFocussedDate(new Date());
    this.setAriaLiveRegionText(this.getMonthInViewText());

    setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
  };

  private todayButtonKeyDownHandler = (ev: KeyboardEvent) => {
    if (ev.key === "Tab" && !ev.shiftKey && this.clearButtonEl.disabled) {
      this.focusFirstElement();
      ev.preventDefault();
    }
  };

  private clearButtonClickHandler = () => {
    this.setSelectedDate(null);
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

  private getMonthInViewText = () => {
    return `${this.monthNames[this.monthInView]} ${
      this.yearInView
    } currently in view.`;
  };

  private getDecadeInViewText = () => {
    return `${this.decadeStart} to ${this.decadeEnd} currently in view.`;
  };

  private setAriaLiveRegionText = (text: string) => {
    this.liveRegionEl && (this.liveRegionEl.innerText = text);
  };

  private clearDialogDescription = () => {
    this.dialogDescription = "";
  };

  private clearButtonKeyDownHandler = (ev: KeyboardEvent) => {
    if (ev.key === "Tab" && !ev.shiftKey) {
      this.focusFirstElement();
      ev.preventDefault();
    }
  };

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

  private navButtonMouseDownHandler = (ev: MouseEvent): void => {
    ev.preventDefault();
  };

  private renderMonthYearNavButton = (
    id: string,
    flip: boolean,
    disabled: boolean
  ): void => {
    const buttonSize = this.size;
    return (
      <div aria-hidden="true">
        <ic-button
          id={id}
          disableTooltip={true}
          disabled={disabled}
          onClick={this.monthYearNavClickHandler}
          class={{ flip: flip }}
          variant="icon"
          innerHTML={chevron}
          size={buttonSize}
          tabIndex={-1}
          aria-hidden="true"
          onMouseDown={this.navButtonMouseDownHandler}
        />
      </div>
    );
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

  private previousMonthButton = (): void => {
    let disabled = false;
    if (this.focussedDate !== null && this.minDate !== null) {
      const yearMatch =
        this.focussedDate.getFullYear() === this.minDate.getFullYear();
      if (yearMatch) {
        disabled = this.monthInView - 1 < this.minDate.getMonth();
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
    if (this.focussedDate !== null && this.maxDate !== null) {
      const yearMatch =
        this.focussedDate.getFullYear() === this.maxDate.getFullYear();
      if (yearMatch) {
        disabled = this.monthInView + 1 > this.maxDate.getMonth();
      }
    }
    return this.renderMonthYearNavButton("next-month-button", false, disabled);
  };

  private previousYearButton = (): void => {
    return this.renderMonthYearNavButton(
      "previous-year-button",
      true,
      !this.isPrevYearAllowed()
    );
  };

  private nextYearButton = (): void => {
    return this.renderMonthYearNavButton(
      "next-year-button",
      false,
      !this.isNextYearAllowed()
    );
  };

  private isPrevYearAllowed = (): boolean => {
    return this.isYearAllowed(this.yearInView - 1);
  };

  private isNextYearAllowed = (): boolean => {
    return this.isYearAllowed(this.yearInView + 1);
  };

  private isYearAllowed = (yr: number): boolean => {
    return yearInRange(yr, this.minDate, this.maxDate);
  };

  private getMonthView = (date: Date): Date[] => {
    const start = getWeekStart(getMonthStart(date), this.startOfWeek);
    const end = getWeekEnd(getMonthEnd(date), this.startOfWeek);

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
    this.currMonthView = this.getMonthView(this.focussedDate);

    this.focussedDay = this.focussedDate.getDate();
    this.monthInView = this.focussedDate.getMonth();
    this.yearInView = this.focussedDate.getFullYear();

    if (this.dayPickerKeyboardNav) {
      this.monthInViewUpdateHandled = true;
      this.setAriaLiveRegionText(this.getMonthInViewText());
      this.dayPickerKeyboardNav = false;
    }
  };

  private handleSelectDay = (day: Date): void => {
    this.setSelectedDate(day);
    this.calendarOpen = false;
    this.inputEl.setCalendarFocus();
  };

  private handleSelectMonth = (month: number): void => {
    this.moveMonths(month - this.monthInView);
    setTimeout(() => {
      this.monthButtonEl.setFocus();
      this.monthPickerVisible = false;
      this.setMonthSelectedLiveRegionText();
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
        this.yearButtonEl.setFocus();
        this.yearPickerVisible = false;
      }, FOCUS_TIMER);
    } else {
      const moveYears = year - this.focussedYear > 0 ? 10 : -10;
      this.updateFocussedYear(moveYears, this.yearButtonFocussed);
      this.setAriaLiveRegionText(this.getDecadeInViewText());
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

  private onYearButtonFocusHandler = () => {
    this.yearButtonFocussed = true;
  };

  private onYearButtonBlurHandler = () => {
    this.yearButtonFocussed = false;
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
        this.moveDays(-1 * this.getNextDayToFocus(this.focussedDate, false));
        break;

      case "ArrowRight":
        this.dayPickerKeyboardNav = true;
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

  private calendarTabHandler = (ev: KeyboardEvent): boolean => {
    let handled = false;
    if (
      !ev.shiftKey &&
      (!this.showPickerTodayButton || this.isCurrentMonth()) &&
      (!this.showPickerClearButton || this.clearButtonEl.disabled)
    ) {
      this.focusFirstElement();
      handled = true;
    } else if (ev.shiftKey) {
      this.yearButtonEl.setFocus();
      handled = true;
    }
    return handled;
  };

  private onDayButtonFocusHandler = () => {
    this.dayButtonFocussed = true;
  };

  private onDayButtonBlurHandler = () => {
    this.dayButtonFocussed = false;
  };

  private getNextDayToFocus = (
    currDay: Date,
    forward: boolean,
    level = 1
  ): number => {
    const move = forward ? 1 : -1;
    const nextDay = new Date(currDay);
    nextDay.setDate(nextDay.getDate() + move);
    const nextDayNum = Number(nextDay.getDay());
    if (this.disableDays.includes(nextDayNum)) {
      return this.getNextDayToFocus(nextDay, forward, level + 1);
    } else {
      return level;
    }
  };

  private moveDays = (numDays: number): void => {
    const d = new Date(this.focussedDate);
    d.setDate(d.getDate() + numDays);
    this.setFocussedDate(d);
  };

  private moveMonths = (numMonths: number): void => {
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
  };

  private moveYears = (numYears: number): void => {
    const newYear = this.focussedDate.getFullYear() + numYears;
    const min = new Date(
      new Date(getMonthStart(this.focussedDate)).setFullYear(newYear)
    );
    const max = getMonthEnd(min);
    const newDate = new Date(new Date(this.focussedDate).setFullYear(newYear));
    this.setFocussedDate(clampDate(newDate, min, max));

    if (
      this.monthPickerVisible === false &&
      this.yearPickerVisible === false &&
      this.monthInViewUpdateHandled === false
    ) {
      this.setAriaLiveRegionText(this.getMonthInViewText());
    }
    this.monthInViewUpdateHandled = false;
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

  private setFocussedDate = (d: Date): void => {
    this.focussedDate = clampDate(d, this.minDate, this.maxDate);
  };

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

  private setDateInputProps = (): IcDateInputProps => {
    const inputProps: IcDateInputProps = {
      invalidDateMessage: this.invalidDateMessage,
      label: this.label,
      showClearButton: true,
      showCalendarButton: true,
      value: this.value,
    };

    if (this.dateFormat !== DEFAULT_DATE_FORMAT) {
      inputProps.dateFormat = this.dateFormat;
    }
    if (this.disableFuture) {
      inputProps.disableFuture = this.disableFuture;
      if (this.disableFutureMessage !== DEFAULT_DISABLE_DATES_FROM_NOW_MSG) {
        inputProps.disableFutureMessage = this.disableFutureMessage;
      }
    }
    if (this.disablePast) {
      inputProps.disablePast = this.disablePast;
      if (this.disablePastMessage !== DEFAULT_DISABLE_DATES_UNTIL_NOW_MSG) {
        inputProps.disablePastMessage = this.disablePastMessage;
      }
    }
    if (this.disableDays.length > 0) {
      inputProps.disableDays = this.disableDays;
      if (this.disableDaysMessage !== DEFAULT_DISABLE_DAYS_MSG) {
        inputProps.disableDaysMessage = this.disableDaysMessage;
      }
    }
    if (this.max !== null && this.max !== "") {
      inputProps.max = this.maxDate;
    }
    if (this.min !== null && this.min !== "") {
      inputProps.min = this.minDate;
    }
    if (this.helperText !== undefined) {
      inputProps.helperText = this.helperText;
    }
    if (this.hideHelperText !== false) {
      inputProps.hideHelperText = this.hideHelperText;
    }
    if (this.inputId !== undefined) {
      inputProps.inputId = this.inputId;
    }
    if (this.name !== undefined) {
      inputProps.name = this.name;
    }
    if (this.disabled) {
      inputProps.disabled = this.disabled;
    }
    if (this.required) {
      inputProps.required = this.required;
    }
    if (this.size !== "medium") {
      inputProps.size = this.size;
    }
    if (this.validationStatus !== "") {
      inputProps.validationStatus = this.validationStatus;
    }
    if (this.validationText !== "") {
      inputProps.validationText = this.validationText;
    }
    return inputProps;
  };

  render() {
    const {
      calendarOpen,
      dateInputProps,
      monthNames,
      size,
      focussedMonth,
      focussedYear,
      monthInView,
      yearInView,
      monthPickerVisible,
      yearPickerVisible,
      orderedDaysOfWeek,
      decadeView,
      minDate,
      maxDate,
      showPickerClearButton,
      showPickerTodayButton,
      dialogDescription,
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
    if (this.disablePast) {
      const yesterday = new Date(minDate);
      yesterday.setDate(minDate.getDate() - 1);
      minDay = yesterday;
    }

    return (
      <Host
        onKeyDown={this.keyDownHandler}
        class={{ [`ic-date-picker-${size}`]: true }}
      >
        <div class="date-input-container">
          <ic-date-input
            ref={(el) => (this.inputEl = el)}
            {...dateInputProps}
          ></ic-date-input>
        </div>
        {calendarOpen && (
          <div>
            <span id="dialog-description" class="sr-only">
              {dialogDescription}
            </span>
            <div
              role="dialog"
              aria-modal="true"
              aria-label={dialogLabel}
              aria-describedBy="dialog-description"
              class={{
                "calendar-container": true,
                above: this.showPickerAbove,
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
                    ref={(el: HTMLIcButtonElement) => (this.monthButtonEl = el)}
                    size={size}
                    class="month-picker-button"
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
                    ref={(el: HTMLIcButtonElement) => (this.yearButtonEl = el)}
                    size={size}
                    class="year-picker-button"
                    aria-haspopup="menu"
                    aria-expanded={yearPickerVisible ? "true" : "false"}
                    full-width="true"
                    variant="tertiary"
                    aria-label={yearLabel}
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
                <div
                  class={{
                    calendar: true,
                    hidden: monthPickerVisible || yearPickerVisible,
                  }}
                  onKeyDown={this.handleCalendarKeyDown}
                >
                  <div class="weekdays" aria-hidden="true">
                    {orderedDaysOfWeek.map((dayName) => {
                      const header =
                        size === "small" ? dayName.charAt(0) : dayName;
                      return (
                        <div class="calendar-day-header">
                          <ic-typography variant="caption">
                            {header}
                          </ic-typography>
                        </div>
                      );
                    })}
                  </div>

                  <div class="calendar-days-container">
                    {this.currMonthView.map((day) => (
                      <DayButton
                        day={day}
                        disableDay={this.disableDays.includes(
                          Number(day.getDay())
                        )}
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
                      ></DayButton>
                    ))}
                  </div>
                </div>
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
                  "no-today": !showPickerTodayButton,
                }}
              >
                {showPickerTodayButton && (
                  <ic-button
                    id="today-button"
                    variant="tertiary"
                    ref={(el: HTMLIcButtonElement) => (this.todayButtonEl = el)}
                    size={size}
                    aria-label="Navigate to current date"
                    onClick={this.todayButtonClickHandler}
                    onKeyDown={this.todayButtonKeyDownHandler}
                    disabled={this.isCurrentMonth()}
                  >
                    Go to today
                  </ic-button>
                )}
                {showPickerClearButton && (
                  <ic-button
                    id="clear-button"
                    aria-label="clear selected date"
                    ref={(el: HTMLIcButtonElement) => (this.clearButtonEl = el)}
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
        )}
      </Host>
    );
  }
}
