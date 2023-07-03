/* istanbul ignore file */
import {
  Component,
  Element,
  Host,
  h,
  Prop,
  // Listen,
  Watch,
  State,
  // Method,
} from "@stencil/core";
import {
  IcShortDayNames,
  IcDateInputMonths,
  stringEnumToArray,
  createDateFromISOString,
} from "../../utils/helpers";
// import { createPopper } from "@popperjs/core";
import chevron from "../../assets/chevron-icon.svg";
import { dateMatches, dateInRange, WeekDays } from "./ic-date-picker-utils";
import { DayButton } from "./ic-day-button";
import { MonthPicker } from "./ic-month-picker";
import { IcDatePickerSizes } from "./ic-date-picker.types";
// import { YearPicker } from "./ic-year-picker";

const FOCUS_TIMER = 100;

@Component({
  tag: "ic-date-picker",
  styleUrl: "ic-date-picker.css",
  shadow: {
    delegatesFocus: true,
  },
})

// Variables (alphabetised)
// @element
// @State (alphabetised)
// @prop (alphabetised)
// @watch (with watched props behind them)
// @event (alphabetised)
// Lifecycle (folowing lfiecycle process: connection, load, update, render)
// @listen
// @method
// Local private methods
// Render
export class DatePicker {
  // private inputEl: HTMLIcTextFieldElement;
  private calendarButtonEl: HTMLIcButtonElement;
  private daysOfWeek: string[] = [];
  private focusDay: boolean = true;
  private monthButton: HTMLIcButtonElement;
  private monthNames: string[] = [];
  private today = new Date();
  private yearButton: HTMLIcButtonElement;
  private focussedYearEl: HTMLIcButtonElement;

  @Element() host: HTMLIcDatePickerElement;

  @State() calendarOpen: boolean = false;
  @State() currMonthView: Date[] = [];
  @State() currYearPickerView: number[] = [];
  @State() decadeView: number[] = [];
  @State() focussedDate: Date = null;
  @State() focussedDay: number;
  @State() focussedDayEl: HTMLButtonElement;
  @State() focussedMonth: number;
  @State() focussedYear: number;
  @State() inputValue: string = null;
  @State() maxDate: Date = null;
  @State() minDate: Date = null;
  @State() monthInView: number;
  @State() monthPickerVisible: boolean = false;
  @State() orderedDaysOfWeek: string[] = [];
  @State() selectedDate: Date = null;
  @State() yearInView: number;
  @State() yearPickerVisible: boolean = false;

  /**
   * The size of the date picker to be displayed.
   */
  @Prop() backBehaviour?: boolean = false;

  /**
   * Days.
   */
  @Prop() disabledDays?: WeekDays[] = [];

  /**
   * Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
   */
  @Prop() max?: string = "";

  /**
   * Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
   */
  @Prop() min?: string = "";

  /**
   * Determines whether days outside the current month are rendered.
   */
  @Prop() showDaysOutsideMonth?: boolean = true;

  /**
   * The size of the date picker to be displayed.
   */
  @Prop() size?: IcDatePickerSizes = "default";
  /**
   * The first day of the week? `0` for Sunday, `1` for Monday, etc.
   * Default is Monday.
   */
  @Prop() startOfWeek?: WeekDays = WeekDays.Monday;

  /**
   * Determines whether a Go to today button should appear on the picker.
   */
  @Prop() todayButton?: boolean = true;

  /**
   * Determines whether the selected day should receive focus when calendar is opened.
   * If `true` and no day selected then the current day or first focussable day in range will receive focus.
   */
  @Prop() focusDayOnOpen?: boolean = false;

  /**
   * Determines whether the current day should receive focus when calendar is opened, if no date is selected and the current day is in view
   */
  // @Prop() focusTodayOnOpen: boolean = true;

  // @Listen("handleMenuItemClick")
  // handleMenuItemClick(ev: CustomEvent): void {
  //   if (!ev.detail.hasSubMenu && ev.detail.label !== "Back") {
  //     this.closeMenu();
  //   }
  // }

  @Watch("calendarOpen")
  watchOpenHandler(): void {
    if (this.calendarOpen) {
      this.focusDay = false;
      if (this.selectedDate === null) {
        this.setFocussedDate(new Date());
      } else {
        this.setFocussedDate(this.selectedDate);
      }
      if (this.focusDayOnOpen) {
        this.focusFocussedDay();
      } else {
        setTimeout(() => this.focusFirstElement(), FOCUS_TIMER);
      }
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

  // @Watch("focussedYear")
  // watchFocussedYearHandler(newYear: number, oldYear: number): void {
  //   console.log(newYear, oldYear);
  //   if (this.yearPickerVisible) {
  //     const newDecade = Math.floor(newYear / 10) * 10;
  //     const oldDecade = Math.floor(oldYear / 10) * 10;
  //     if (newDecade !== oldDecade) {
  //       this.setDecadeView(newDecade);
  //     }
  //     if (this.focusYear) {
  //       setTimeout(() => this.focussedYearEl.setFocus(), FOCUS_TIMER);
  //     }
  //     this.focusYear = true;
  //   } else {
  //     this.setDecadeView(Math.floor(newYear / 10) * 10);
  //   }
  // }

  @Watch("max")
  watchMaxHandler(): void {
    this.maxDate = createDateFromISOString(this.max);
  }

  @Watch("min")
  watchMinHandler(): void {
    this.minDate = createDateFromISOString(this.min);
  }

  @Watch("monthInView")
  watchMonthInViewHandler(): void {
    this.focussedMonth = this.monthInView;
  }

  @Watch("yearInView")
  watchYearInViewHandler(): void {
    console.log("yearInView", this.yearInView);
    this.setFocussedYear(this.yearInView);
  }

  @Watch("yearPickerVisible")
  watchYearPickerVisibleHandler(): void {
    if (this.yearPickerVisible) {
      this.setFocussedYear(this.yearInView);
    }
  }

  @Watch("focussedDayEl")
  watchFocussedDayEl(): void {
    if (this.focusDay) {
      this.focusFocussedDay();
    }

    this.focusDay = true;
  }

  componentWillLoad(): void {
    this.monthNames = stringEnumToArray(IcDateInputMonths);
    this.daysOfWeek = stringEnumToArray(IcShortDayNames);
    this.orderedDaysOfWeek = this.daysOfWeek
      .splice(this.startOfWeek, this.daysOfWeek.length)
      .concat(this.daysOfWeek.splice(0, this.startOfWeek));

    // this.setSelectedDate(new Date());
    this.watchMaxHandler();
    this.watchMinHandler();
  }

  // componentDidRender(): void {}

  // componentWillRender(): void {}

  // componentDidLoad(): void {}

  private clampDate = (date: Date, min: Date, max: Date): Date => {
    const time = date.getTime();
    if (min && min instanceof Date && time < min.getTime()) {
      return min;
    }
    if (max && max instanceof Date && time > max.getTime()) {
      return max;
    }
    return date;
  };

  private setDecadeView = (start: number) => {
    let currYear = start - 1;
    const decadeArr = [];
    while (currYear <= start + 10) {
      decadeArr.push(currYear);
      currYear++;
    }
    this.decadeView = decadeArr;
  };

  private setSelectedDate = (d: Date): void => {
    this.selectedDate = d;
    if (d !== null) {
      this.inputValue =
        d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    } else {
      this.inputValue = null;
    }
  };

  private handleInputClick = (event: MouseEvent): void => {
    event.stopImmediatePropagation();
    this.calendarOpen = false;
  };

  private handleCalenderClick = (event: MouseEvent): void => {
    event.stopImmediatePropagation();
  };

  private handleDocumentClick = (): void => {
    this.calendarOpen = false;
  };

  private toggleCalendar = (event: MouseEvent) => {
    event.stopImmediatePropagation();
    this.calendarOpen = !this.calendarOpen;
  };

  private keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      this.closeButtonClickHandler();
    }
  };

  private closeButtonClickHandler = () => {
    this.calendarOpen = false;
  };

  private focusFirstElement = () => {
    this.monthButton.setFocus();
  };

  private focusFocussedDay = () => {
    setTimeout(() => {
      this.focussedDayEl.focus();
    }, FOCUS_TIMER);
  };

  private monthButtonClickHandler = () => {
    this.yearPickerVisible = false;
    this.monthPickerVisible = !this.monthPickerVisible;
  };

  private yearButtonClickHandler = () => {
    this.monthPickerVisible = false;
    this.yearPickerVisible = !this.yearPickerVisible;
  };

  private todayButtonClickHandler = () => {
    this.yearPickerVisible = false;
    this.monthPickerVisible = false;
    this.setFocussedDate(new Date());
    this.focusFocussedDay();
  };

  private clearButtonClickHandler = () => {
    this.setSelectedDate(null);
    this.focusFirstElement();
  };

  private gotoPreviousMonth = () => {
    this.moveMonths(-1);
  };

  private gotoNextMonth = () => {
    this.moveMonths(1);
  };

  private gotoPreviousYear = () => {
    this.moveYears(-1);
  };

  private gotoNextYear = () => {
    this.moveYears(1);
  };

  private navButtonMouseDownHandler = (ev: MouseEvent): void => {
    ev.preventDefault();
  };

  private renderMonthYearNavButton = (id: string, flip: boolean): void => {
    const buttonSize = this.size === "large" ? "default" : "small";
    return (
      <div aria-hidden="true">
        <ic-button
          id={id}
          disableTooltip={true}
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
        this.gotoPreviousMonth();
        break;

      case "next-month-button":
        this.gotoNextMonth();
        break;

      case "previous-year-button":
        this.gotoPreviousYear();
        break;

      case "next-year-button":
        this.gotoNextYear();
        break;
    }
  };

  private previousMonthButton = (): void => {
    return this.renderMonthYearNavButton("previous-month-button", true);
  };

  private nextMonthButton = (): void => {
    return this.renderMonthYearNavButton("next-month-button", false);
  };

  private previousYearButton = (): void => {
    return this.renderMonthYearNavButton("previous-year-button", true);
  };

  private nextYearButton = (): void => {
    return this.renderMonthYearNavButton("next-year-button", false);
  };

  private getWeekStart = (date: Date): Date => {
    const tmpDate = new Date(date);
    const day = tmpDate.getDay();
    const diff = (day < this.startOfWeek ? 7 : 0) + day - this.startOfWeek;

    tmpDate.setDate(tmpDate.getDate() - diff);
    return tmpDate;
  };

  private getWeekEnd = (date: Date): Date => {
    const d = new Date(date);
    const day = d.getDay();
    const diff =
      (day < this.startOfWeek ? -7 : 0) + 6 - (day - this.startOfWeek);

    d.setDate(d.getDate() + diff);
    return d;
  };

  private getMonthStart = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };

  private getMonthEnd = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };

  private getMonthView = (date: Date): Date[] => {
    const start = this.getWeekStart(this.getMonthStart(date));
    const end = this.getWeekEnd(this.getMonthEnd(date));

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

  private updateMonthInView = (/*month:number, year:number*/): void => {
    this.focussedDay = this.focussedDate.getDate();
    this.monthInView = this.focussedDate.getMonth();
    this.yearInView = this.focussedDate.getFullYear();

    this.currMonthView = this.getMonthView(this.focussedDate);
  };

  private handleSelectDay = (day: Date): void => {
    // const isInRange = inRange(day, parseISODate(this.min), parseISODate(this.max))
    // const isAllowed = !this.isDateDisabled(day)

    // if (isInRange && isAllowed) {
    //   this.setValue(day)
    //   this.hide()
    // } else {
    //   // for consistency we should set the focused day in cases where
    //   // user has selected a day that has been specifically disallowed
    //   this.setFocusedDay(day)
    // }
    // const month = day.getMonth();
    // if (month !== this.monthInView){
    //   this.monthInView = month;
    //   this.updateMonthInView();
    // }

    this.setSelectedDate(day);
    this.calendarOpen = false;
    this.calendarButtonEl.setFocus();
  };

  private handleSelectMonth = (month: number): void => {
    this.moveMonths(month - this.monthInView);
    this.monthPickerVisible = false;
    setTimeout(() => this.monthButton.setFocus(), FOCUS_TIMER);
  };

  private handleSelectYear = (ev: MouseEvent): void => {
    const button = ev.target as HTMLElement;
    const year = Number(button.innerText);
    this.moveYears(year - this.yearInView);
    this.yearPickerVisible = false;
    setTimeout(() => this.yearButton.setFocus(), FOCUS_TIMER);
  };

  private monthPickerKeyDownHandler = (ev: KeyboardEvent): void => {
    let handled = true;
    const adjust = this.size === "small" ? 2 : 3;
    switch (ev.key) {
      case "ArrowUp":
        handled = true;
        this.updateFocussedMonth(-adjust);
        break;

      case "ArrowDown":
        this.updateFocussedMonth(adjust);
        break;

      case "ArrowLeft":
        this.updateFocussedMonth(-1);
        break;

      case "ArrowRight":
        this.updateFocussedMonth(1);
        break;

      case "Home":
        this.updateFocussedMonth(-this.focussedMonth);
        break;

      case "End":
        this.updateFocussedMonth(11 - this.focussedMonth);
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
    const adjust = this.size === "small" ? 2 : 3;
    switch (ev.key) {
      case "ArrowUp":
        this.updateFocussedYear(-adjust);
        break;

      case "ArrowDown":
        this.updateFocussedYear(adjust);
        break;

      case "ArrowLeft":
        this.updateFocussedYear(-1);
        break;

      case "ArrowRight":
        this.updateFocussedYear(1);
        break;

      // case "Home":
      //   this.moveMonths(-this.monthInView);
      //   break;

      // case "End":
      //   this.moveMonths(11 - this.monthInView);
      //   break;

      default:
        handled = false;
    }

    if (handled) {
      ev.preventDefault();
    }
  };

  private backButtonClickHandler = (): void => {
    let button = this.monthButton;
    if (this.yearPickerVisible) {
      button = this.yearButton;
    }
    this.monthPickerVisible = false;
    this.yearPickerVisible = false;
    setTimeout(() => button.setFocus(), FOCUS_TIMER);
  };

  private monthNavKeyHandler = (ev: KeyboardEvent): void => {
    if (ev.key === "ArrowLeft") {
      this.focusDay = false;
      this.gotoPreviousMonth();
    } else if (ev.key === "ArrowRight") {
      this.focusDay = false;
      this.gotoNextMonth();
    }
  };

  private yearNavKeyHandler = (ev: KeyboardEvent): void => {
    if (ev.key === "ArrowLeft") {
      this.focusDay = false;
      this.gotoPreviousYear();
    } else if (ev.key === "ArrowRight") {
      this.focusDay = false;
      this.gotoNextYear();
    }
  };

  private handleCalendarKeyDown = (ev: KeyboardEvent): void => {
    let handleKey = true;

    switch (ev.key) {
      case "ArrowDown":
        this.moveDays(7);
        break;

      case "ArrowUp":
        this.moveDays(-7);
        break;

      case "ArrowLeft":
        this.moveDays(-1 * this.getNextDayToFocus(this.focussedDate, false));
        break;

      case "ArrowRight":
        this.moveDays(this.getNextDayToFocus(this.focussedDate, true));
        break;

      case "PageUp":
        ev.shiftKey ? this.moveYears(-1) : this.moveMonths(-1);
        break;

      case "PageDown":
        ev.shiftKey ? this.moveYears(1) : this.moveMonths(1);
        break;

      case "Home":
        this.setFocussedDate(this.getWeekStart(this.focussedDate));
        break;

      case "End":
        this.setFocussedDate(this.getWeekEnd(this.focussedDate));
        break;

      default:
        handleKey = false;
        break;
    }

    if (handleKey) {
      ev.preventDefault();
    }
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
    if (this.disabledDays.includes(nextDayNum)) {
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
    const min = this.setMonth(this.getMonthStart(this.focussedDate), newMonth);
    const max = this.getMonthEnd(min);
    const newDate = this.setMonth(this.focussedDate, newMonth);
    this.setFocussedDate(this.clampDate(newDate, min, max));
  };

  private setMonth = (date: Date, month: number): Date => {
    const d = new Date(date);
    d.setMonth(month);
    return d;
  };

  private moveYears = (numYears: number): void => {
    const newYear = this.focussedDate.getFullYear() + numYears;
    const min = this.setYear(this.getMonthStart(this.focussedDate), newYear);
    const max = this.getMonthEnd(min);
    const newDate = this.setYear(this.focussedDate, newYear);
    this.setFocussedDate(this.clampDate(newDate, min, max));
  };

  private setYear = (date: Date, year: number): Date => {
    const d = new Date(date);
    d.setFullYear(year);
    return d;
  };

  private updateFocussedMonth = (adjust: number): void => {
    const d = new Date();
    d.setMonth(this.focussedMonth + adjust);
    this.focussedMonth = d.getMonth();
  };

  private updateFocussedYear = (adjust: number): void => {
    const d = new Date();
    d.setFullYear(this.focussedYear + adjust);
    this.setFocussedYear(d.getFullYear());
  };

  private setFocussedDate = (d: Date): void => {
    this.focussedDate = this.clampDate(d, this.minDate, this.maxDate);
    console.log("this.focussedDate", this.focussedDate);
  };

  private setFoccussedDayEl = (element: HTMLButtonElement) => {
    this.focussedDayEl = element;
  };

  private setFocussedYear = (newYear: number, focus = true): void => {
    const prevYear = this.focussedYear;
    this.focussedYear = newYear;
    if (this.yearPickerVisible) {
      const newDecade = Math.floor(newYear / 10) * 10;
      const oldDecade = Math.floor(prevYear / 10) * 10;
      if (newDecade !== oldDecade) {
        this.setDecadeView(newDecade);
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

  render() {
    const {
      calendarOpen,
      todayButton,
      monthNames,
      size,
      focussedMonth,
      focussedYear,
      monthInView,
      yearInView,
      monthPickerVisible,
      yearPickerVisible,
      orderedDaysOfWeek,
      backBehaviour,
      // currYearPickerView,
      decadeView,
    } = this;

    const headerButtonSize = size === "large" ? "default" : "small";

    const yearButtonSize = size === "small" ? "small" : "default";
    // const decadeBtnType = backBehaviour ? "secondary" : "tertiary";

    // const prevDecade = decadeView[0] - 10;
    // const nextDecade = decadeView[0] + 10;
    // const prevDecade = decadeView[0] - 1;
    // const nextDecade = decadeView[0] + 10;

    return (
      <Host onKeyDown={this.keyDownHandler} class={size}>
        <div class="date-input-container">
          <ic-text-field
            // ref={(el)=>this.inputEl = el}
            label="Date"
            helperText="DD/MM/YYYY"
            placeholder="DD/MM/YYYY"
            onClick={this.handleInputClick}
            value={this.inputValue}
          ></ic-text-field>
          <ic-button
            ref={(el: HTMLIcButtonElement) => (this.calendarButtonEl = el)}
            class="calendar-button"
            variant="icon"
            aria-label="open calendar"
            disable-tooltip="true"
            onClick={this.toggleCalendar}
          >
            <svg
              slot="icon"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V7H18V20Z"
                fill="currentColor"
              />
            </svg>
          </ic-button>
        </div>
        <div
          role="dialog"
          aria-modal="true"
          aria-label="choose date"
          class={{
            "calendar-container": true,
            open: calendarOpen,
          }}
          onClick={this.handleCalenderClick}
        >
          <div
            class={{
              "month-year-nav-container": true,
              hidden:
                (monthPickerVisible || yearPickerVisible) && backBehaviour,
            }}
          >
            <div class="month-year-nav">
              {this.previousMonthButton()}
              <span
                id="select-month-hint"
                aria-hidden="true"
              >{`${monthNames[monthInView]} selected. Click to choose a month or use the left and right arrow keys to change month`}</span>
              <ic-button
                ref={(el: HTMLIcButtonElement) => (this.monthButton = el)}
                id="month-picker-button"
                size={headerButtonSize}
                class="month-picker-button"
                full-width="true"
                variant="tertiary"
                aria-label={`select month`}
                aria-describedby="select-month-hint"
                onKeyDown={this.monthNavKeyHandler}
                onClick={this.monthButtonClickHandler}
              >
                {monthNames[monthInView]}
              </ic-button>
              {this.nextMonthButton()}
            </div>
            <div class="month-year-nav">
              {this.previousYearButton()}
              <span
                id="select-year-hint"
                aria-hidden="true"
              >{`${this.yearInView} selected. Click to choose a year or use the left and right arrow keys to change year`}</span>
              <ic-button
                ref={(el: HTMLIcButtonElement) => (this.yearButton = el)}
                id="year-picker-button"
                size={headerButtonSize}
                class="year-picker-button"
                full-width="true"
                variant="tertiary"
                aria-label="select year"
                aria-describedby="select-year-hint"
                onKeyDown={this.yearNavKeyHandler}
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
              aria-label={`${monthNames[monthInView]} ${yearInView}`}
              onKeyDown={this.handleCalendarKeyDown}
            >
              <div class="weekdays">
                {orderedDaysOfWeek.map((dayName) => {
                  const header = size === "small" ? dayName.charAt(0) : dayName;
                  return (
                    <div class="calendar-day-header">
                      <ic-typography variant="caption">{header}</ic-typography>
                    </div>
                  );
                })}
              </div>

              <div class="calendar-days-container">
                {this.currMonthView.map((day) => (
                  <DayButton
                    size={size}
                    day={day}
                    disabledDay={this.disabledDays.includes(
                      Number(day.getDay())
                    )}
                    today={dateMatches(day, this.today)}
                    selected={dateMatches(day, this.selectedDate)}
                    focussed={dateMatches(day, this.focussedDate)}
                    inRange={dateInRange(day, this.minDate, this.maxDate)}
                    monthInView={monthInView}
                    onSelectDay={this.handleSelectDay}
                    focussedDayRef={this.setFoccussedDayEl}
                    showDaysOutsideMonth={this.showDaysOutsideMonth}
                  ></DayButton>
                ))}
              </div>
            </div>
          )}
          {backBehaviour && (monthPickerVisible || yearPickerVisible) && (
            <div style={{ width: "100%" }}>
              <ic-button
                size={headerButtonSize}
                class="flip"
                variant="tertiary"
                onClick={this.backButtonClickHandler}
                aria-label="back to day selection view"
              >
                Back
                <svg
                  slot="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z"
                    fill="currentColor"
                  />
                </svg>
              </ic-button>
            </div>
          )}
          {monthPickerVisible && (
            <MonthPicker
              size={size}
              onSelectMonth={this.handleSelectMonth}
              monthInView={monthInView}
              focussedMonth={focussedMonth}
              monthNames={monthNames}
              onKeyDown={this.monthPickerKeyDownHandler}
            ></MonthPicker>
          )}
          {yearPickerVisible && (
            <div class="year-picker">
              <div class="year-picker-container">
                {/* <ic-button
                  class="year-button outside-decade"
                  size={yearButtonSize}
                  tabIndex={-1}
                  variant="tertiary"
                  // aria-label="go to previous decade"
                  onClick={this.handlePreviousDecadeClick}
                >{prevDecade}</ic-button> */}
                {decadeView.map((yr, index) => {
                  const current = yearInView === yr;
                  const focussed = focussedYear === yr;
                  const inDecade = index > 0 && index < decadeView.length - 1;
                  return (
                    <ic-button
                      class={{
                        "year-button": true,
                        selected: current,
                        "outside-decade": !inDecade,
                      }}
                      data-year={yr}
                      tabIndex={focussed ? 0 : -1}
                      variant={current ? "primary" : "tertiary"}
                      onClick={this.handleSelectYear}
                      aria-label={current ? `choose ${yr}` : `${yr} selected`}
                      onKeyDown={this.yearPickerKeyDownHandler}
                      size={yearButtonSize}
                      ref={(el: HTMLIcButtonElement) => {
                        if (focussed) {
                          this.focussedYearEl = el;
                        }
                      }}
                    >
                      {yr}
                    </ic-button>
                  );
                })}
                {/* <ic-button
                  class="year-button outside-decade"
                  tabIndex={-1}
                  size={yearButtonSize}
                  variant="tertiary"
                  // aria-label="go to next decade"
                  onClick={this.handleNextDecadeClick}
                >{nextDecade}</ic-button> */}
              </div>
            </div>
            // <div></div>
            // <YearPicker
            //   size={size}
            //   focussedYear={focussedYear}
            //   onSelectYear={this.handleSelectYear}
            //   yearInView={yearInView}
            //   onKeyDown={this.yearPickerKeyDownHandler}
            //   // decade={}
            //   backMode={backBehaviour}
            // ></YearPicker>
          )}
          <div
            class={{
              "bottom-buttons": true,
              "no-today": !todayButton,
              hidden:
                (monthPickerVisible || yearPickerVisible) && backBehaviour,
            }}
          >
            {todayButton && (
              <ic-button
                variant="tertiary"
                size={headerButtonSize}
                aria-label="go to today"
                onClick={this.todayButtonClickHandler}
                disabled={this.isCurrentMonth()}
              >
                Go to today
              </ic-button>
            )}
            <ic-button
              id="clear-button"
              variant="tertiary"
              size={headerButtonSize}
              onClick={this.clearButtonClickHandler}
              disabled={this.inputValue === null}
            >
              Clear
            </ic-button>
            {/* <ic-button id="close-button" variant="tertiary" aria-label="close date picker" onClick={this.closeButtonClickHandler} ref={(el)=> this.closeButtonEl = el}>Close</ic-button> */}
          </div>
        </div>
      </Host>
    );
  }
}
