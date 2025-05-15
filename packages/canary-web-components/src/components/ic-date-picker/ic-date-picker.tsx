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
import { createDate, dateMatches, yearInRange } from "../../utils/date-helpers";
import {
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
} from "../../utils/helpers";
import {
  IcWeekDays,
  IcDateFormat,
  IcSizes,
  IcInformationStatusOrEmpty,
  IcThemeMode,
} from "../../utils/types";

const DEFAULT_DATE_FORMAT = "DD/MM/YYYY";
const DEFAULT_DISABLE_DATES_FROM_NOW_MSG =
  "Dates in the future are not allowed. Please select a date in the past.";
const DEFAULT_DISABLE_DATES_UNTIL_NOW_MSG =
  "Dates in the past are not allowed. Please select a date in the future.";
const DEFAULT_DISABLE_DAYS_MSG =
  "The date you have selected is on a day of the week that is not allowed. Please select another date.";
const PICKER_HEIGHT_SMALL = 360;
const PICKER_HEIGHT_DEFAULT = 400;
const PICKER_HEIGHT_LARGE = 440;

interface IcCalendarProps {
  dateFormat?: IcDateFormat;
  disabled?: boolean;
  disableDays?: IcWeekDays[];
  disableFuture?: boolean;
  disablePast?: boolean;
  max?: Date | string;
  min?: Date | string;
  openAtDate?: Date | string | undefined;
  showClearButton?: boolean;
  showDaysOutsideMonth?: boolean;
  showTodayButton?: boolean;
  size?: IcSizes;
  startOfWeek: IcWeekDays;
  theme?: IcThemeMode;
  value?: Date | string | null | undefined;
}

interface IcDateInputProps {
  dateFormat?: IcDateFormat;
  disabled?: boolean;
  disableDays?: IcWeekDays[];
  disableDaysMessage?: string;
  disableFuture?: boolean;
  disableFutureMessage?: string;
  disablePast?: boolean;
  disablePastMessage?: string;
  emitDatePartChange?: boolean;
  helperText?: string;
  hideHelperText?: boolean;
  hideLabel?: boolean;
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
  theme?: IcThemeMode;
  value?: string | Date | null;
  validationStatus?: IcInformationStatusOrEmpty;
  validationText?: string;
}

/**
 * @slot helper-text - Content is set as the helper text for the date picker.
 */
@Component({
  tag: "ic-date-picker",
  styleUrl: "ic-date-picker.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class DatePicker {
  // private calendarEl?: HTMLIcCalendarElement;
  private inputEl?: HTMLIcDateInputElement;
  private calendarProps: IcCalendarProps;
  private dateInputProps: IcDateInputProps;
  private dayButtonFocussed: boolean = false;
  private dialogDescription: string = "";
  private monthInViewUpdateHandled: boolean = false;
  private myCalendarButtonClicked: boolean = false;
  private showPickerAbove: boolean = false;

  @Element() el: HTMLIcDatePickerElement;

  @State() calendarOpen: boolean = false;
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
  @Prop() disabled: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   *  If `true`, every individual input field completed will emit an icChange event.
   */
  @Prop() emitDatePartChange?: boolean = false;

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
   * If `true`, the label will be visually hidden, but the required label will still be read out by screen readers.
   */
  @Prop() hideLabel?: boolean = false;

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
   * If 'true', the 'X' button on the date input will be visible, which clears the field.
   */
  @Prop() showClearButton?: boolean = true;

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
  @Prop() startOfWeek: IcWeekDays = IcWeekDays.Monday;

  /**
   * Sets the date picker to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

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
      this.setCalendarProps();
      let dialogDesc = "";
      if (this.selectedDate === null) {
        dialogDesc += " No date selected.";
      }
      dialogDesc +=
        " Use arrow keys to change day. Press enter or space to select a date or press escape to close the picker";
      this.dialogDescription = dialogDesc;

      document.addEventListener("click", this.handleDocumentClick);
    } else {
      document.removeEventListener("click", this.handleDocumentClick);
      this.monthPickerVisible = false;
      this.yearPickerVisible = false;
    }
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

    this.watchMaxHandler();
    this.watchMinHandler();
    removeDisabledFalse(this.disabled, this.el);
  }

  componentWillRender(): void {
    this.dateInputProps = this.setDateInputProps();
    this.calendarProps = this.setCalendarProps();
  }

  componentWillUpdate(): void {
    this.dateInputProps = this.setDateInputProps();
    this.calendarProps = this.setCalendarProps();
  }

  @Listen("calendarButtonClicked")
  localCalendarButtonClickHandler(): // ev: CustomEvent<{ value: Date | null }>
  void {
    this.myCalendarButtonClicked = true;
    // if (!this.calendarOpen) {
    //   this.setSelectedDate(ev.detail.value, false);
    // }
    this.calendarOpen = !this.calendarOpen;
    console.log({ calendarOpen: this.calendarOpen });
  }

  @Listen("calendarButtonClicked", { target: "document" })
  calendarButtonClickHandler(): void {
    //closes this picker if calendar button in another clicked
    if (!this.myCalendarButtonClicked) {
      this.calendarOpen = false;
    }
    this.myCalendarButtonClicked = false;
  }

  @Listen("icChange")
  dateChangeHandler(ev: CustomEvent): void {
    const path = ev.composedPath();
    const sourceElement = path[0] as HTMLElement;
    ev.stopPropagation();
    if (sourceElement.tagName === "IC-CALENDAR") {
      if (
        ev.detail.selectedDate === null ||
        !dateMatches(ev.detail.selectedDate, this.selectedDate)
      ) {
        this.value = ev.detail.selectedDate;
        // is this needed?
        this.selectedDate = ev.detail.selectedDate;
        this.inputEl?.triggerIcChange(ev.detail.selectedDate);
        this.calendarOpen = false;
      }
    } else if (
      sourceElement.tagName === "IC-DATE-INPUT" &&
      (ev.detail.value === null ||
        !dateMatches(ev.detail.value, this.selectedDate))
    ) {
      this.selectedDate = ev.detail.value;
      this.value = ev.detail.value;
      this.openAtDate = ev.detail.value;
    }
  }

  private handleDocumentClick = (): void => {
    this.calendarOpen = false;
  };

  private keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      if (this.calendarOpen) {
        this.closeButtonClickHandler();
        this.inputEl?.setCalendarFocus();
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

  private clearDialogDescription = () => {
    this.dialogDescription = "";
  };

  private setCalendarProps = (): IcCalendarProps => {
    const calendarProps: IcCalendarProps = {
      disableDays: this.disableDays,
      disableFuture: this.disableFuture,
      disablePast: this.disablePast,
      openAtDate: this.openAtDate,
      showClearButton: this.showPickerClearButton,
      showDaysOutsideMonth: this.showDaysOutsideMonth,
      showTodayButton: this.showPickerTodayButton,
      startOfWeek: this.startOfWeek,
      theme: this.theme,
      value: this.openAtDate,
    };

    if (this.dateFormat !== DEFAULT_DATE_FORMAT) {
      calendarProps.dateFormat = this.dateFormat;
    }
    if (this.disableFuture) {
      calendarProps.disableFuture = this.disableFuture;
    }
    if (this.disablePast) {
      calendarProps.disablePast = this.disablePast;
    }
    if (this.disableDays && this.disableDays.length > 0) {
      calendarProps.disableDays = this.disableDays;
    }
    if (this.max !== null && this.max !== "" && this.maxDate) {
      calendarProps.max = this.maxDate;
    }
    if (this.min !== null && this.min !== "" && this.minDate) {
      calendarProps.min = this.minDate;
    }
    if (this.disabled) {
      calendarProps.disabled = this.disabled;
    }
    if (this.size !== "medium") {
      calendarProps.size = this.size;
    }

    return calendarProps;
  };

  private setDateInputProps = (): IcDateInputProps => {
    const inputProps: IcDateInputProps = {
      hideLabel: this.hideLabel,
      invalidDateMessage: this.invalidDateMessage,
      label: this.label,
      showClearButton: true,
      showCalendarButton: true,
      value: this.value,
      emitDatePartChange: this.emitDatePartChange,
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
    if (this.disableDays && this.disableDays.length > 0) {
      inputProps.disableDays = this.disableDays;
      if (this.disableDaysMessage !== DEFAULT_DISABLE_DAYS_MSG) {
        inputProps.disableDaysMessage = this.disableDaysMessage;
      }
    }
    if (this.max !== null && this.max !== "" && this.maxDate) {
      inputProps.max = this.maxDate;
    }
    if (this.min !== null && this.min !== "" && this.minDate) {
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
    if (this.showClearButton !== null) {
      inputProps.showClearButton = this.showClearButton;
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
      calendarProps,
      dateInputProps,
      size,
      focussedMonth,
      focussedYear,
      monthInView,
      yearInView,
      orderedDaysOfWeek,
      decadeView,
      minDate,
      maxDate,
      dialogDescription,
      theme,
    } = this;

    

    const dialogLabel = "choose date";

    let minDay = minDate;
    if (minDate && this.disablePast) {
      const yesterday = new Date(minDate);
      yesterday.setDate(minDate.getDate() - 1);
      minDay = yesterday;
    }

    console.log({
      yearInView,
      monthInView,
      decadeView,
      maxDate,
      minDate,
      orderedDaysOfWeek,
      dialogLabel,
      dialogDescription,
      minDay,
      yearInRange,
      dayButtonFocussed: this.dayButtonFocussed,
      focussedMonth,
      focussedYear,
      monthInViewUpdateHandled: this.monthInViewUpdateHandled,
    });

    return (
      <Host
        onKeyDown={this.keyDownHandler}
        class={{
          [`ic-date-picker-${size}`]: true,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <div class="date-input-container">
          <ic-date-input ref={(el) => (this.inputEl = el)} {...dateInputProps}>
            <slot name="helper-text" slot="helper-text"></slot>
          </ic-date-input>
        </div>
        {calendarOpen && (
          <ic-calendar
            class={{ ["ic-date-picker-above"]: this.showPickerAbove }}
            {...calendarProps}
          ></ic-calendar>
        )}
      </Host>
    );
  }
}
