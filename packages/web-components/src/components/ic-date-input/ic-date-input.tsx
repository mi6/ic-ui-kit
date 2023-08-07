import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
  Host,
  Method,
  Watch,
} from "@stencil/core";
import {
  IcInformationStatus,
  IcInformationStatusOrEmpty,
  IcSizes,
  IcThemeForegroundEnum,
  IcDateFormat,
  IcDateInputMonths,
  IcWeekDays,
} from "../../utils/types";
import {
  addFormResetListener,
  getInputDescribedByText,
  isEmptyString,
  isNumeric,
  onComponentRequiredPropUndefined,
  removeFormResetListener,
  renderHiddenInput,
} from "../../utils/helpers";
import Clear from "../../assets/clear-icon.svg";
import Calendar from "../../assets/calendar.svg";

let inputIds = 0;

@Component({
  tag: "ic-date-input",
  styleUrl: "ic-date-input.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class DateInput {
  private ARIA_INVALID = "aria-invalid";
  private ARIA_LABEL = "aria-label";
  private assistiveHintId: string;
  private calendarButtonEl: HTMLIcButtonElement;
  private dayInputEl: HTMLInputElement;
  private EVENT_OBJECT_STRING = "[object Event]";
  private FIT_TO_VALUE = "fit-to-value";

  private initialValue = this.value;
  private inputCompContainerEl: HTMLIcInputComponentContainerElement;
  private INPUT_EVENT_OBJECT_STRING = "[object InputEvent]";
  private inputsInOrder: HTMLInputElement[] = [];

  private isAfterMax: boolean = false;
  private isBeforeMin: boolean = false;
  private isDateSetFromKeyboardEvent: boolean = false;
  private isDisabledDate: boolean = false;
  private isLarge = this.size === "large";
  private isPasteValidationDisplayed: boolean;
  private isValidDay: boolean = true;
  private isValidMonth: boolean = true;
  private isValidDate: boolean = true;
  private isZuluTime: boolean = false;

  private KEYBOARD_EVENT_OBJECT_STRING = "[object KeyboardEvent]";
  private MAX_DAY = 31;
  private MAX_MONTH = 12;
  private monthInputEl: HTMLInputElement;

  private preventAutoFormatting: boolean;
  private preventDayInput: boolean;
  private preventMonthInput: boolean;
  private preventYearInput: boolean;

  private previousInvalidDateTest: string;
  private previousSelectedDate: Date = null;

  private selectedDate: Date = null;
  private selectedDateInfoEl: HTMLSpanElement;
  private screenReaderInfoId: string;
  private selectedDateInfoId: string;

  private yearInputEl: HTMLInputElement;

  @Element() el: HTMLIcDateInputElement;

  @State() day: string = "";
  @State() invalidDateText: string;
  @State() maxDate: Date;
  @State() minDate: Date;
  @State() month: string = "";
  @State() year: string = "";

  /**
   * The format in which the date will be displayed.
   */
  // eslint-disable-next-line sonarjs/no-duplicate-string
  @Prop() dateFormat?: IcDateFormat = "DD/MM/YYYY";

  /**
   * The text to display as the validation message when `disableFromNow` is true and a disabled date is entered.
   */
  @Prop() dateFromNowMessage?: string =
    "Dates in the future are not allowed. Please select a date in the past.";

  /**
   * The text to display as the validation message when `disableUntilNow` is true and a disabled date is entered.
   */
  @Prop() dateUntilNowMessage?: string =
    "Dates in the past are not allowed. Please select a date in the future.";

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;

  /**
   * The days of the week to disable.
   */
  @Prop() disableDays?: IcWeekDays[] = [];

  /**
   * The text to display as the validation message when `disableDays` is set and a disabled date is entered.
   */
  @Prop() disableDaysMessage?: string =
    "The date you have selected is on a day of the week that is not allowed. Please select another date.";

  /**
   * If `true`, the user cannot select dates from now. A validation message will appear if they enter a disabled date.
   */
  @Prop() disableFromNow?: boolean = false;

  /**
   * If `true`, the user cannot select dates until now. A validation message will appear if they enter a disabled date.
   */
  @Prop() disableUntilNow?: boolean = false;

  /**
   * The helper text that will be displayed for additional field guidance. This will default to the `dateFormat` value.
   */
  @Prop({ mutable: true }) helperText?: string;

  /**
   * The ID for the input.
   */
  @Prop() inputId?: string = `ic-date-input-${inputIds++}`;

  /**
   * The label for the date input.
   */
  @Prop() label!: string;

  /**
   * The latest date that will be allowed - in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   * The value of this prop is ignored if `disableFromNow` is set to `true`.
   */
  @Prop() max?: string | Date = "";

  @Watch("max")
  watchMaxHandler(): void {
    if (this.disableFromNow) {
      this.maxDate = new Date();
    } else {
      this.maxDate = this.setMinMax(this.max);
    }
  }

  /**
   * The earliest date that will be allowed - in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   * The value of this prop is ignored if `disableUntilNow` is set to `true`.
   */
  @Prop() min?: string | Date = "";

  @Watch("min")
  watchMinHandler(): void {
    if (this.disableUntilNow) {
      this.minDate = new Date();
    } else {
      this.minDate = this.setMinMax(this.min);
    }
  }

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the input will require a value.
   */
  @Prop() required?: boolean = false;

  /**
   * @internal If `true`, a button which displays the calendar view when clicked will be displayed.
   */
  @Prop() showCalendarButton?: boolean = false;

  /**
   * If `true`, a button which clears the date input when clicked will be displayed.
   */
  @Prop() showClearButton?: boolean = true;

  /**
   * The size of the date input to be displayed.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * The value of the date input - in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   */
  @Prop({ mutable: true }) value?: string | Date = "";

  /**
   * The validation status - e.g. 'error' | 'warning' | 'success'. This will override the built-in date validation.
   */
  @Prop({ mutable: true }) validationStatus?: IcInformationStatusOrEmpty = "";

  /**
   * The text to display as the validation message. This will override the built-in date validation.
   */
  @Prop() validationText?: string = "";

  /**
   * @internal Emitted when the calendar is opened.
   */
  @Event() calendarButtonClicked: EventEmitter<{ value: Date }>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() icBlur: EventEmitter<{ value: Date }>;

  /**
   * Emitted when the value has changed.
   */
  @Event() icChange: EventEmitter<{ value: Date }>;

  /**
   * Emitted when value is cleared with clear button
   */
  @Event() icClear: EventEmitter<void>;

  /**
   * Emitted when the input gains focus.
   */
  @Event() icFocus: EventEmitter<{ value: Date }>;

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
  }

  componentWillLoad(): void {
    if (isEmptyString(this.helperText)) {
      this.helperText = this.dateFormat;
    }

    this.watchMinHandler();
    this.watchMaxHandler();

    if (this.value) {
      this.setDate(this.value);
    }

    this.screenReaderInfoId = `${this.inputId}-screen-reader-info`;
    this.assistiveHintId = `${this.inputId}-assistive-hint`;
    this.selectedDateInfoId = `${this.inputId}-selected-date-info`;

    addFormResetListener(this.el, this.handleFormReset);
  }

  componentDidLoad(): void {
    this.setInputsInOrder();

    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Date Input"
    );

    if (this.value) {
      this.updateInputValues(this.day, this.month, this.year);
      this.inputsInOrder.forEach((input) => {
        input.classList.add(this.FIT_TO_VALUE);
      });
    }

    this.setAriaInvalid(
      this.isValidDay,
      this.isValidMonth,
      this.isValidDate,
      this.isDisabledDate
    );

    if (this.value) {
      this.notifyScreenReaderSelectedDate();
    }

    this.inputsInOrder.forEach((input) => {
      input.addEventListener("input", this.handleInput);
      input.addEventListener("focus", this.handleFocus);
      input.addEventListener("blur", this.handleBlur);
    });

    // Prevent asterisk being read out after the label by screen reader (by applying aria-hidden)
    // Needed because label is included in 'aria-labelledby' instead of using 'aria-label'
    const labelEl = this.el.shadowRoot.querySelector("label");
    if (this.required) {
      const asteriskSpan = document.createElement("span");
      asteriskSpan.setAttribute("aria-hidden", "true");
      asteriskSpan.textContent = " *";
      labelEl?.appendChild(asteriskSpan);
    }
  }

  componentWillUpdate(): void {
    if (!this.isDateSetFromKeyboardEvent) {
      this.setDate(this.value);
    }
    this.setAriaInvalid(
      this.isValidDay,
      this.isValidMonth,
      this.isValidDate,
      this.isDisabledDate
    );
    this.handleDateChange(false);
    this.isDateSetFromKeyboardEvent = false;
  }

  componentDidRender(): void {
    this.setAriaLabelledBy();
  }

  /**
   * Returns the value as a Date object
   * @returns Date
   */
  @Method()
  async getDate(): Promise<Date> {
    return this.selectedDate;
  }

  /**
   * @internal Sets focus on the calendar button.
   */
  @Method()
  async setCalendarFocus(): Promise<void> {
    if (this.calendarButtonEl) {
      this.calendarButtonEl.focus();
    }
  }

  /**
   * @internal Used to pass disabledDays from parent component.
   */
  @Method()
  async setDisabledDays(days: IcWeekDays[]): Promise<void> {
    this.disableDays = days;
  }

  private setInputPasteValue = (input: EventTarget, pastedValue: string) => {
    const inputEl = input as HTMLInputElement;

    inputEl.value = pastedValue;
    inputEl.classList.add(this.FIT_TO_VALUE);
  };

  private checkSingleCopiedValueIsValid = (
    input: EventTarget,
    pastedValue: string
  ) => {
    let isValid = false;
    const value = Number(pastedValue);

    switch (input) {
      case this.dayInputEl:
        isValid = value >= 1 && value <= this.MAX_DAY;
        break;
      case this.monthInputEl:
        isValid = value >= 1 && value <= this.MAX_MONTH;
        break;
      case this.yearInputEl:
        isValid = true;
        break;
      default:
        isValid = false;
        break;
    }

    return isValid;
  };

  /**
   * Using Object.prototype.string to determine type if event from user
   * @param event - event object used to differentiate keyboard, generic or input event
   * @returns boolean
   */
  private isKeyboardOrEvent = (event: Event) => {
    return (
      Object.prototype.toString.call(event) === this.EVENT_OBJECT_STRING ||
      Object.prototype.toString.call(event) ===
        this.KEYBOARD_EVENT_OBJECT_STRING
    );
  };

  private setDateValidity = () => {
    if (!isEmptyString(this.day)) {
      if (+this.day > this.MAX_DAY) {
        this.isValidDay = false;
      } else {
        this.isValidDay = true;
      }
    } else {
      this.isValidDay = true;
    }

    if (!isEmptyString(this.month)) {
      if (+this.month > this.MAX_MONTH) {
        this.isValidMonth = false;
      } else {
        this.isValidMonth = true;
      }
    } else {
      this.isValidMonth = true;
    }
  };

  private handleInput = (event: Event) => {
    const inputEvent = event as InputEvent;
    const input = event.target as HTMLInputElement;

    if (input !== this.yearInputEl) {
      // Only auto-format if input event is not a character being deleted
      // and not as user is changing value using up / down keys
      if (
        inputEvent.inputType !== "deleteContentBackward" &&
        !this.preventAutoFormatting
      ) {
        if (
          input.value.length === 1 &&
          ((input === this.dayInputEl && +input.value >= 4) ||
            (input === this.monthInputEl && +input.value >= 2)) &&
          +input.value <= 9
        ) {
          this.setInputValue(input);
          this.notifyScreenReader(input, event);
          this.moveToNextInput(input);
        }

        if (input.value.length === 2) {
          if (+input.value === 0) {
            input.value = "01";
          }
          this.setInputValue(input);
          this.setPreventInput(input, true);
          this.notifyScreenReader(input, event);
          this.moveToNextInput(input);
        } else {
          this.setPreventInput(input, false);
        }
      } else if (this.preventAutoFormatting) {
        /**
         * Using arrow keys prevents auto formatting so need to deal with
         * switching from arrow keys to inputting numbers
         **/
        if (input.value.length === 2 && !this.isKeyboardOrEvent(event)) {
          this.setInputValue(input);
          this.setPreventInput(input, true);
          this.moveToNextInput(input);
        } else {
          this.setInputValue(input);
        }
      }

      if (input.value.length !== 2) {
        this.setPreventInput(input, false);
      }
    } else {
      if (input.value.length === 4) {
        this.setInputValue(input);
        if (
          Object.prototype.toString.call(event) !== this.EVENT_OBJECT_STRING
        ) {
          this.moveToNextInput(input);
        }
        this.setPreventInput(input, true);
      } else {
        this.setInputValue(input, true);
        this.setPreventInput(input, false);
      }
    }

    // Add / remove class to make input width match size of value i.e. 2 digits' width for day / month, 4 for year
    this.setFitToValueStyling(input);

    if (input.value.length === 0) {
      this.setInputValue(input, true);
      this.setValidationMessage();
    }

    this.notifyScreenReader(input, event);
  };

  private handleKeyDown = (event: KeyboardEvent, isInputPrevented: boolean) => {
    const input = event.target as HTMLInputElement;

    const eventKey = event.key.toLowerCase();
    // Regex required due to FF allowing all characters as values for number text field.
    const regex =
      /-?\d*\.?\d+(e[-+]?\d+)?|[/-]|arrowup|arrowdown|arrowleft|arrowright|shift|tab|backspace|delete/;
    if (
      !regex.test(eventKey) &&
      !(
        (event.ctrlKey || event.metaKey) &&
        (eventKey === "v" || eventKey === "c")
      )
    ) {
      event.preventDefault();
    }

    if (eventKey === "/" || eventKey === "-" || eventKey === ".") {
      event.preventDefault();
      this.setPasteInvalidText();
      this.moveToNextInput(input);
    } else if (eventKey === "arrowright" || eventKey === "arrowleft") {
      event.preventDefault();
      this.handleLeftRightArrowKeyPress(input, eventKey);
    } else if (eventKey === "arrowup" || eventKey === "arrowdown") {
      this.preventAutoFormatting = true;
      this.handleUpDownArrowKeyPress(input, event);
    }

    this.preventInput(event, isInputPrevented);
    this.isDateSetFromKeyboardEvent = true;
  };

  private handleFocus = (event: FocusEvent) => {
    // Highlight / select all characters in input for easy replacement
    const input = event.target as HTMLInputElement;

    input.select();
  };

  private handleBlur = (event: FocusEvent) => {
    const input = event.target as HTMLInputElement;

    this.setPasteInvalidText();
    this.autocompleteInput(input);
  };

  private handleLeftRightArrowKeyPress = (
    input: HTMLInputElement,
    key: string
  ) => {
    if (key === "arrowright") {
      this.moveToNextInput(input);
    } else {
      this.moveToPreviousInput(input);
    }

    this.setPasteInvalidText();
  };

  private notifyScreenReaderSelectedDate = () => {
    this.selectedDateInfoEl.textContent = this.selectedDate.toDateString();
  };

  private handleUpDownArrowKeyPress = (
    input: HTMLInputElement,
    event: KeyboardEvent
  ) => {
    const minValue = input === this.yearInputEl ? 0 : 1;

    let maxValue;

    switch (input) {
      case this.dayInputEl:
        maxValue = this.MAX_DAY;
        break;
      case this.monthInputEl:
        maxValue = this.MAX_MONTH;
        break;
      case this.yearInputEl:
        maxValue = 9999;
    }

    // Make value loop round when min / max reached
    if (input?.value) {
      if (event.key === "ArrowUp") {
        if (+input.value === maxValue) {
          event.preventDefault();
          input.value = `0${minValue}`;
        } else {
          input.value =
            +input.value + 1 < 10
              ? `0${+input.value + 1}`
              : (+input.value + 1).toString();
        }
        this.notifyScreenReader(input, event);
      }

      if (event.key === "ArrowDown") {
        if (+input.value === minValue) {
          event.preventDefault();
          input.value = maxValue.toString();
        } else {
          input.value =
            +input.value - 1 < 10
              ? `0${+input.value - 1}`
              : (+input.value - 1).toString();
        }
        this.notifyScreenReader(input, event);
      }
    } else {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (input === this.yearInputEl) {
          input.value = new Date().getFullYear().toString();
        } else {
          input.value = maxValue.toString();
        }
        this.notifyScreenReader(input, event);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (input === this.yearInputEl) {
          input.value = new Date().getFullYear().toString();
        } else {
          input.value = `0${minValue}`;
        }
        this.notifyScreenReader(input, event);
      }
    }

    this.setFitToValueStyling(input);
  };

  private handleDateChange = (force: boolean) => {
    // Prevent icChange being emitted when each individual input is changed
    // This method is used within componentWillUpdate instead of using @Watch('value');
    if (force || this.selectedDate !== this.previousSelectedDate) {
      if (this.value) {
        this.inputsInOrder.forEach((input) => {
          input.classList.add(this.FIT_TO_VALUE);
        });
      }
      if (this.day && this.month && this.year && this.invalidDateText === "") {
        this.icChange.emit({ value: this.selectedDate });
        this.value = this.selectedDate;
        this.selectedDateInfoEl.textContent = ` ${this.selectedDate.toDateString()}`;
      } else {
        this.icChange.emit({ value: null });
        this.value = null;
        this.selectedDateInfoEl.textContent = "";
      }
      this.previousSelectedDate = this.selectedDate;

      if (!this.isDateSetFromKeyboardEvent) {
        this.updateInputValues(this.day, this.month, this.year);
      }
    }
  };

  private slicePastedDate = (valueLength: number, datePart: string): string => {
    return datePart.length > valueLength
      ? datePart.slice(0, valueLength)
      : datePart;
  };

  private isPastedStringDateValid = (value: string) => {
    if (
      /\d+-\d+-\d+$/.test(value) ||
      /\d+\/\d+\/\d+/.test(value) ||
      /\d+\.\d+\.\d+/.test(value)
    ) {
      return true;
    }

    if (
      /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}(?::[0-9]{2}(?:\.\d+)?)?Z/.test(
        value
      )
    ) {
      this.isZuluTime = true;
      return true;
    }

    return false;
  };

  // Set value of each input to value of pasted date part
  // Allows formats separated by '-' or '/'
  private handlePaste = (event: ClipboardEvent) => {
    event.preventDefault();

    const pastedValue = event.clipboardData.getData("Text");
    const isValidDate = this.isPastedStringDateValid(pastedValue);

    this.setPastedValueAndValidation(isValidDate, pastedValue, event);
  };

  private setDayMonthValue = (datePart: string, value: string) => {
    switch (datePart) {
      case "D":
        this.day =
          value.length === 1 ? this.convertToDoubleDigits(value) : value;
        break;
      case "M":
        this.month =
          value.length === 1 ? this.convertToDoubleDigits(value) : value;
        break;
      case "Y":
        if (this.isZuluTime) {
          this.day =
            value.length === 1 ? this.convertToDoubleDigits(value) : value;
        }
        break;
      default:
        break;
    }
  };

  private extractDateFromZuluDateTime = (zuluDateTime: string) =>
    zuluDateTime.slice(0, zuluDateTime.indexOf("T"));

  private splitStringDate = (date: string): string[] => {
    if (date.split("/").length > 1) {
      return date.split("/");
    }

    if (date.includes("T") && date.includes("Z")) {
      const nextDate = this.extractDateFromZuluDateTime(date);
      this.isZuluTime = true;
      return nextDate.split("-");
    }

    if (date.split("-").length > 1) {
      return date.split("-");
    }

    return [];
  };

  private convertToDoubleDigits = (value: string | number): string => {
    if (+value < 10) {
      return `0${value}`;
    }
    return value.toString();
  };

  private isDateOrEpoch = (date: Date | string) => {
    return date instanceof Date || !isNaN(+new Date(+date));
  };

  private setDate = (date: string | Date) => {
    const dateParts = this.dateFormat.split("/");

    if (date === null || date === "" || date === undefined) {
      this.day = null;
      this.month = null;
      this.year = null;
      this.inputsInOrder.forEach((input) => {
        input.classList.remove(this.FIT_TO_VALUE);
        this.setPreventInput(input, false);
      });
      this.handleDateChange(true);
    } else {
      if (this.isDateOrEpoch(date)) {
        let newDate;
        if (typeof date === "string") {
          // Checking if epoch date time
          newDate = new Date(+date);
        } else {
          newDate = date;
        }

        this.day = this.convertToDoubleDigits(newDate.getDate());
        this.month = this.convertToDoubleDigits(newDate.getMonth() + 1);
        this.year = newDate.getFullYear().toString();
      } else if (typeof date === "string") {
        const defaultDateArray = this.splitStringDate(date);

        defaultDateArray.forEach((d, i) => {
          if (d.length === 4) {
            this.year = d;
          } else {
            this.setDayMonthValue(dateParts[i].substring(0, 1), d);
          }
        });

        if (this.isZuluTime) {
          // Reset Zulu flag as ISO string has been parsed
          this.isZuluTime = false;
        }
      }
    }

    this.setValidationMessage();
  };

  private formatMinMax = (date: Date) => {
    let formattedDate;

    const day = this.convertToDoubleDigits(date.getDate());
    const month = this.convertToDoubleDigits(date.getMonth() + 1);
    const year = date.getFullYear();

    switch (this.dateFormat) {
      case "DD/MM/YYYY":
        formattedDate = `${day}/${month}/${year}`;
        break;
      case "MM/DD/YYYY":
        formattedDate = `${month}/${day}/${year}`;
        break;
      case "YYYY/MM/DD":
        formattedDate = `${year}/${month}/${day}`;
        break;
      default:
        break;
    }
    return formattedDate;
  };

  private setMinMax = (date: string | Date) => {
    const dateParts = this.dateFormat.split("/");
    let newDate;
    if (this.isDateOrEpoch(date)) {
      if (typeof date === "string") {
        newDate = new Date(date);
      } else {
        newDate = date;
      }
    } else if (typeof date === "string") {
      const dateArray = this.splitStringDate(date);

      let year;
      let month;
      let day;

      dateArray.forEach((d, i) => {
        if (d.length === 4) {
          year = d;
        } else {
          switch (dateParts[i].substring(0, 1)) {
            case "D":
              day = d;
              break;
            case "M":
              month = Number(d) - 1;
              break;
            case "Y":
              if (this.isZuluTime) {
                day = d;
              }
              break;
            default:
              break;
          }
        }
      });

      newDate = new Date(year, month, day);
    }
    return newDate;
  };

  private updateInputValues = (day: string, month: string, year: string) => {
    this.dayInputEl.value = day;
    this.monthInputEl.value = month;
    this.yearInputEl.value = year;
  };

  // Set value in state based on input
  private setInputValue = (input: HTMLInputElement, clear = false) => {
    const newValue = clear ? "" : input.value;

    switch (input) {
      case this.dayInputEl:
        this.day = newValue;
        break;
      case this.monthInputEl:
        this.month = newValue;
        break;
      case this.yearInputEl:
        if (this.year !== newValue) {
          this.year = newValue;
        }
    }

    this.setValidationMessage();
  };

  private setValidationMessage = () => {
    this.setDateValidity();

    if (
      !isEmptyString(this.day) &&
      !isEmptyString(this.month) &&
      !isEmptyString(this.year)
    ) {
      // Check whether date actually exists
      // (used https://www.hectane.com/blog/javascript-date-validation-with-leap-year)
      this.selectedDate = this.convertToDate(this.year, this.month, this.day);
      this.isValidDate =
        +this.selectedDate !== 0 && this.selectedDate.getDate() == +this.day;
      this.isDisabledDate = this.isSelectedDateDisabled();

      if (!this.isValidDate || this.isDisabledDate) {
        this.inputsInOrder.forEach((input) =>
          input.setAttribute(this.ARIA_INVALID, "true")
        );
      } else {
        this.inputsInOrder.forEach((input) =>
          input.removeAttribute(this.ARIA_INVALID)
        );
      }
    } else {
      this.selectedDate = null;
    }

    if (!(this.isValidDay && this.isValidMonth && this.isValidDate)) {
      this.invalidDateText = "Please enter a valid date.";
    } else if (this.isDisabledDate && this.selectedDate !== null) {
      if (this.isBeforeMin) {
        if (this.disableUntilNow) {
          this.invalidDateText = this.dateUntilNowMessage;
        } else {
          this.invalidDateText = `Please enter a date after ${this.formatMinMax(
            this.minDate
          )}.`;
        }
      } else if (this.isAfterMax) {
        if (this.disableFromNow) {
          this.invalidDateText = this.dateFromNowMessage;
        } else {
          this.invalidDateText = `Please enter a date before ${this.formatMinMax(
            this.maxDate
          )}.`;
        }
      } else if (this.disableDays.length !== 0) {
        this.invalidDateText = this.disableDaysMessage;
      } else {
        if (this.disableUntilNow) {
          this.invalidDateText = this.dateUntilNowMessage;
        }
        if (this.disableFromNow) {
          this.invalidDateText = this.dateFromNowMessage;
        }
      }
    } else {
      this.invalidDateText = "";
    }
  };

  // Set refs to the input elements in the order they are displayed (based on the dateFormat)
  private setInputsInOrder = () => {
    const inputs = this.el.shadowRoot.querySelectorAll("input");
    inputs.forEach((input) => this.inputsInOrder.push(input));
  };

  // Includes text usually added using aria-describedby
  // (which doesn't work on input component container)
  private setAriaLabelledBy = () => {
    const labelEl = this.el.shadowRoot.querySelector("label");
    const labelId = `${this.inputId}-label`;
    if (labelEl !== null && labelEl !== undefined) {
      labelEl.id = labelId;

      const hasValidation =
        (!isEmptyString(this.validationStatus) &&
          !isEmptyString(this.validationText)) ||
        !isEmptyString(this.invalidDateText);

      const labelledBy = `${labelId} ${
        this.screenReaderInfoId
      } ${getInputDescribedByText(
        this.inputId,
        this.helperText !== "" && this.helperText !== this.dateFormat,
        hasValidation
      )} ${this.selectedDate ? this.selectedDateInfoId : ""} ${
        this.assistiveHintId
      }`;
      this.inputCompContainerEl.setAttribute("aria-labelledby", labelledBy);
    }
  };

  // Sets boolean for each input, used to limit the number of characters within each field (2 for day / month, 4 for year)
  private setPreventInput = (input: HTMLInputElement, isPrevented: boolean) => {
    switch (input) {
      case this.dayInputEl:
        this.preventDayInput = isPrevented;
        break;
      case this.monthInputEl:
        this.preventMonthInput = isPrevented;
        break;
      case this.yearInputEl:
        this.preventYearInput = isPrevented;
    }
  };

  // Get input based on letter representing each date part ("D", "M" or "Y")
  // (retrieved from dateFormat)
  private getInputFromDatePart = (datePart: string) => {
    const dayInput = (
      <input
        class="day-input"
        ref={(el) => (this.dayInputEl = el)}
        aria-label="day"
        placeholder="DD"
        disabled={this.disabled}
        onPaste={this.handlePaste}
        inputmode="number"
        pattern="[0-9]*"
        onKeyDown={(event) => this.handleKeyDown(event, this.preventDayInput)}
      ></input>
    );

    const monthInput = (
      <input
        class="month-input"
        ref={(el) => (this.monthInputEl = el)}
        aria-label="month"
        placeholder="MM"
        disabled={this.disabled}
        onPaste={this.handlePaste}
        inputmode="number"
        pattern="[0-9]*"
        onKeyDown={(event) => this.handleKeyDown(event, this.preventMonthInput)}
      ></input>
    );

    const yearInput = (
      <input
        class="year-input"
        ref={(el) => (this.yearInputEl = el)}
        aria-label="year"
        placeholder="YYYY"
        maxLength={4}
        disabled={this.disabled}
        onPaste={this.handlePaste}
        inputmode="number"
        pattern="[0-9]*"
        onKeyDown={(event) => this.handleKeyDown(event, this.preventYearInput)}
      ></input>
    );

    let input;

    switch (datePart) {
      case "D":
        input = dayInput;
        break;
      case "M":
        input = monthInput;
        break;
      case "Y":
        input = yearInput;
    }

    return input;
  };

  // Get input elements in order of chosen date format
  private getInputsInOrder = () => {
    const dateParts = this.dateFormat.split("/");

    const inputsInOrder: HTMLInputElement[] = [];

    dateParts.forEach((part: string) => {
      inputsInOrder.push(this.getInputFromDatePart(part.substring(0, 1)));
    });

    return inputsInOrder;
  };

  // To add to the end of assistive hint to make it clearer that each date part has its own input
  // that can be changed individually
  private getDescOfInputsOrder = () => {
    let description;

    switch (this.dateFormat) {
      case "DD/MM/YYYY":
        description = "day, month, and year";
        break;
      case "MM/DD/YYYY":
        description = "month, day, and year";
        break;
      case "YYYY/MM/DD":
        description = "year, month, and day";
    }

    return description;
  };

  // Add 'required' or 'invalid data' to span used in aria-labelledby
  // Many ARIA attributes aren't read out by screen reader when on the input component container
  private getScreenReaderInfo = (validationStatus: string) => {
    let inputDescriptors = "";

    if (this.required) {
      inputDescriptors += "required";
    }

    if (validationStatus === IcInformationStatus.Error) {
      inputDescriptors += " invalid data";
    }

    return inputDescriptors === "" ? "" : inputDescriptors + ", ";
  };

  // Prevent non-number characters being entered
  // ('e' or '.' - which are usually allowed in <input type="number">)
  // And limit the number of characters within each field (2 for day / month, 4 for year)
  // (because 'maxlength' doesn't work on <input type="number">)
  private preventInput = (event: KeyboardEvent, isInputPrevented: boolean) => {
    const key = event.key;
    const input = event.target as HTMLInputElement;
    let selectedString;

    if (input) {
      selectedString = input.value.substring(
        input.selectionStart,
        input.selectionEnd
      );
    }

    if (
      key === "e" ||
      key === "." ||
      key === "-" ||
      (event.key >= "0" &&
        event.key <= "9" &&
        isInputPrevented &&
        !selectedString)
    ) {
      event.preventDefault();
    }
  };

  // Get whether date has been disabled using disableFromNow or disableUntilNow prop, but always allow current day
  private isSelectedDateDisabled = () => {
    const currentDate = new Date();
    this.isAfterMax = false;
    this.isBeforeMin = false;

    let disabled = false;

    if (this.min && this.selectedDate < this.minDate) {
      this.isBeforeMin = true;
      disabled = true;
    }

    if (this.max && this.selectedDate > this.maxDate) {
      this.isAfterMax = true;
      disabled = true;
    }

    if (this.disableDays.includes(this.selectedDate.getDay())) {
      disabled = true;
    }

    if (
      ((this.disableUntilNow && this.selectedDate < currentDate) ||
        (this.disableFromNow && this.selectedDate > currentDate)) &&
      this.selectedDate.getDate() !== currentDate.getDate()
    ) {
      disabled = true;
    }

    return disabled;
  };

  private moveToNextInput = (currentInput: HTMLInputElement) => {
    const currentInputPos = this.inputsInOrder.findIndex(
      (input) => input === currentInput
    );
    const nextInput = this.inputsInOrder[currentInputPos + 1];

    this.preventAutoFormatting = false;

    if (nextInput) {
      nextInput.focus();
    }
  };

  private moveToPreviousInput = (currentInput: HTMLInputElement) => {
    const currentInputPos = this.inputsInOrder.findIndex(
      (input) => input === currentInput
    );

    this.preventAutoFormatting = false;

    if (this.inputsInOrder[currentInputPos - 1]) {
      this.inputsInOrder[currentInputPos - 1].focus();
    }
  };

  private autocompleteInput = (input: HTMLInputElement) => {
    if (input === this.yearInputEl) {
      this.autocompleteYear();
    } else {
      const inputValue = input.value;

      // Autocomplete input as 2 characters (leading zero) when only 1 character entered (for day and month)
      if (inputValue.length === 1) {
        if (+inputValue === 0) {
          input.value = "01";
        } else {
          input.value = `0${inputValue}`;
        }
      }
    }

    if (input.value) {
      this.setInputValue(input);
    }
  };

  // Autocomplete year as current millennium when fewer than 4 characters entered
  private autocompleteYear = () => {
    const inputValue = this.yearInputEl.value;
    const yearNumbers = ["2", "0", "0"];

    let autocompletedInput = "";

    if (inputValue) {
      yearNumbers.forEach((number, index) => {
        if (inputValue.length + index <= 3) {
          autocompletedInput += number;
        }
      });

      this.yearInputEl.value = `${autocompletedInput}${inputValue}`;
    }
  };

  private convertToDate = (
    year: string,
    month: string,
    day: string
  ): Date | null => {
    if (!isEmptyString(year) && !isEmptyString(month) && !isEmptyString(day)) {
      return new Date(+year, +month - 1, +day);
    } else {
      return null;
    }
  };

  private handleHostBlur = () => {
    this.icBlur.emit({ value: this.selectedDate });
  };

  private handleHostFocus = () => {
    this.icFocus.emit({ value: this.selectedDate });
  };

  private handleFormReset = () => {
    // Get the initial value and populate day, month and year again.
    this.setDate(this.initialValue);
    this.setValidationMessage();
    this.handleDateChange(false);
  };

  private getAriaLabel = (input: HTMLInputElement): string => {
    return input.getAttribute(this.ARIA_LABEL);
  };

  private notifyScreenReaderArrowKeys = (input: HTMLInputElement) => {
    const liveRegion = this.el.shadowRoot.querySelector("#live-region");
    let announcement = "";
    const ariaLabel = this.getAriaLabel(input);

    if (liveRegion && input.value) {
      if (
        input === this.monthInputEl &&
        !!IcDateInputMonths[+input.value - 1]
      ) {
        announcement = `${input.value} - ${
          IcDateInputMonths[+input.value - 1]
        }, ${ariaLabel}`;
      }

      if (input === this.dayInputEl || input === this.yearInputEl) {
        announcement = `${input.value}, ${ariaLabel}`;
      }

      liveRegion.textContent = announcement;
    }
  };

  private setPastedValueAndValidation(
    isValidDate: boolean,
    pastedValue: string,
    event: ClipboardEvent
  ) {
    switch (true) {
      case isValidDate: {
        const nextParsedValue = this.isZuluTime
          ? this.extractDateFromZuluDateTime(pastedValue)
          : pastedValue;
        const dateParts = nextParsedValue.split(/-|\/|\./);
        this.inputsInOrder.forEach((input, index) => {
          input.classList.add(this.FIT_TO_VALUE);

          if (this.isZuluTime) {
            this.pasteZuluDateTime(dateParts, index);
          } else {
            let dateValue;

            if (input === this.dayInputEl || input === this.monthInputEl) {
              dateValue = this.slicePastedDate(2, dateParts[index]);
            } else {
              dateValue = this.slicePastedDate(4, dateParts[index]);
            }

            input.value = dateValue;

            this.setInputValue(input);
            this.autocompleteInput(input);
          }
        });
        this.isZuluTime = false;
        break;
      }

      case (pastedValue.length === 1 ||
        pastedValue.length === 2 ||
        pastedValue.length === 4) &&
        isNumeric(pastedValue):
        if (this.checkSingleCopiedValueIsValid(event.target, pastedValue)) {
          // Check if copied value can be pasted into input
          this.setInputPasteValue(event.target, pastedValue);
          this.setInputValue(event.target as HTMLInputElement);
        } else {
          this.displayPastedValidation(event);
        }
        break;

      case pastedValue.length === 3 && isNumeric(pastedValue):
        if (event.target !== this.yearInputEl) {
          this.displayPastedValidation(event);
        } else {
          this.setInputPasteValue(event.target, pastedValue);
          this.setInputValue(event.target as HTMLInputElement);
        }
        break;

      case pastedValue.length >= 5 && isNumeric(pastedValue):
        this.displayPastedValidation(event);
    }
  }

  private pasteZuluDateTime(dateParts: string[], index: number) {
    // ['YYYY', 'MM', 'DD']
    if (index === 0) {
      const dateValue = this.slicePastedDate(4, dateParts[index]);
      this.yearInputEl.value = dateValue;
      this.setInputValue(this.yearInputEl);
    } else if (index === 1) {
      // The month value is the second item in the array
      const dateValue = this.slicePastedDate(2, dateParts[index]);
      this.monthInputEl.value = dateValue;
      this.setInputValue(this.monthInputEl);
    } else {
      const dateValue = this.slicePastedDate(2, dateParts[index]);
      this.dayInputEl.value = dateValue;
      this.setInputValue(this.dayInputEl);
    }
  }

  private displayPastedValidation(event: ClipboardEvent) {
    if (this.invalidDateText?.length > 0) {
      this.previousInvalidDateTest = this.invalidDateText;
    }

    this.invalidDateText = `Please paste a valid ${this.getAriaLabel(
      event.target as HTMLInputElement
    )}`;

    this.validationStatus = IcInformationStatus.Error;
    this.isPasteValidationDisplayed = true;
  }

  private setPasteInvalidText() {
    if (this.isPasteValidationDisplayed) {
      this.invalidDateText = this.previousInvalidDateTest ?? "";
      this.isPasteValidationDisplayed = false;

      // This is to prevent setDate from triggering within componentWillUpdate
      this.isDateSetFromKeyboardEvent = true;
    }
  }

  private notifyScreenReader(input: HTMLInputElement, event: Event) {
    const liveRegion = this.el.shadowRoot.querySelector("#live-region");

    if (liveRegion) {
      if (this.isKeyboardOrEvent(event)) {
        this.notifyScreenReaderArrowKeys(input);
      } else if (
        Object.prototype.toString.call(event) === this.INPUT_EVENT_OBJECT_STRING
      ) {
        this.notifyScreenReaderInput(input, liveRegion as HTMLElement);
      }
    }
  }

  private notifyScreenReaderInput = (
    input: HTMLInputElement,
    liveRegion: HTMLElement
  ) => {
    let announcement = "";
    const ariaLabel = this.getAriaLabel(input);

    if (input === this.dayInputEl || input === this.monthInputEl) {
      if (input.value.length === 2) {
        if (
          input === this.monthInputEl &&
          !!IcDateInputMonths[+input.value - 1] &&
          this.isValidMonth
        ) {
          announcement = `${input.value} - ${
            IcDateInputMonths[+input.value - 1]
          }, ${ariaLabel}`;
        }

        if (input === this.dayInputEl && this.isValidDay) {
          announcement = `${input.value}, ${ariaLabel}`;
        }
      } else {
        announcement = "";
      }
    } else {
      if (input.value.length === 4) {
        announcement = `${input.value}, ${ariaLabel}`;
      } else {
        announcement = "";
      }
    }
    liveRegion.textContent = announcement;
  };

  private setFitToValueStyling = (input: HTMLInputElement) => {
    if (input.value) {
      input.classList.add(this.FIT_TO_VALUE);
    } else {
      input.classList.remove(this.FIT_TO_VALUE);
    }
  };

  private setAriaInvalid = (
    validDay: boolean,
    validMonth: boolean,
    validDate: boolean,
    disabledDate: boolean
  ) => {
    if (this.inputsInOrder.length) {
      this.inputsInOrder.forEach((input) => {
        input.removeAttribute(this.ARIA_INVALID);
      });

      if (!validDay) {
        this.dayInputEl.setAttribute(this.ARIA_INVALID, "true");
      }

      if (!validMonth) {
        this.monthInputEl.setAttribute(this.ARIA_INVALID, "true");
      }

      if (!validDate || disabledDate) {
        this.inputsInOrder.forEach((input) => {
          input.setAttribute(this.ARIA_INVALID, "true");
        });
      }
    }
  };

  private handleClear = () => {
    this.inputsInOrder.forEach((input) => {
      input.classList.remove(this.FIT_TO_VALUE);
      this.setInputValue(input, true);
      this.setPreventInput(input, false);
    });
    this.isDateSetFromKeyboardEvent = false;
    this.value = null;
    this.setValidationMessage();
    this.handleDateChange(true);

    this.inputsInOrder[0].focus();
  };

  private handleCalendarOpen = (ev: MouseEvent) => {
    ev.stopImmediatePropagation();
    this.calendarButtonClicked.emit({ value: this.selectedDate });
  };

  render() {
    const {
      inputId,
      label,
      disabled,
      helperText,
      showClearButton,
      showCalendarButton,
      size,
      isLarge,
    } = this;

    const hasCustomValidation =
      !isEmptyString(this.validationStatus) &&
      !isEmptyString(this.validationText);

    const validationStatus = hasCustomValidation
      ? this.validationStatus
      : !isEmptyString(this.invalidDateText)
      ? IcInformationStatus.Error
      : "";

    const assistiveHint = `Type or use the up and down arrow keys to change the values for the ${this.getDescOfInputsOrder()}.`;

    renderHiddenInput(
      true,
      this.el,
      this.name,
      this.convertToDate(this.year, this.month, this.day),
      this.disabled
    );

    return (
      <Host onBlur={this.handleHostBlur} onFocus={this.handleHostFocus}>
        <ic-input-container disabled={disabled}>
          <ic-input-label
            for={inputId}
            label={label}
            helperText={helperText}
            disabled={disabled}
          ></ic-input-label>
          <span id={this.screenReaderInfoId} class="sr-only" aria-hidden="true">
            {this.getScreenReaderInfo(validationStatus)}
            {`Date format: ${this.dateFormat}.`}
          </span>
          <span id={this.assistiveHintId} class="sr-only" aria-hidden="true">
            {assistiveHint}
          </span>
          <span id="live-region" aria-live="assertive" class="sr-only"></span>
          <ic-input-component-container
            id={inputId}
            ref={(el) => (this.inputCompContainerEl = el)}
            disabled={disabled}
            validationStatus={validationStatus}
            size={size}
          >
            <div class="input-container">
              <div class="date-inputs">
                {this.getInputsInOrder()[0]}/{this.getInputsInOrder()[1]}/
                {this.getInputsInOrder()[2]}
              </div>
              <div class="action-buttons">
                {showClearButton && (
                  <ic-button
                    id="clear-button"
                    aria-label="Clear input"
                    class={{
                      ["clear-button"]: true,
                      ["hidden"]:
                        isEmptyString(this.day) &&
                        isEmptyString(this.month) &&
                        isEmptyString(this.year),
                    }}
                    innerHTML={Clear}
                    onClick={this.handleClear}
                    variant="icon"
                    appearance={IcThemeForegroundEnum.Dark}
                    size={isLarge ? "default" : "small"}
                  ></ic-button>
                )}
                {(this.day || this.month || this.year) &&
                  showClearButton &&
                  showCalendarButton && (
                    <div
                      class={{ divider: true, "large-divider": isLarge }}
                    ></div>
                  )}
                {showCalendarButton && (
                  <ic-button
                    id="calendar-button"
                    ref={(el) => (this.calendarButtonEl = el)}
                    aria-label="Display calendar"
                    class="calendar-button"
                    innerHTML={Calendar}
                    onClick={this.handleCalendarOpen}
                    variant="icon"
                    size={isLarge ? "default" : "small"}
                  ></ic-button>
                )}
              </div>
            </div>
          </ic-input-component-container>
          <span id={this.selectedDateInfoId} class="sr-only" aria-live="polite">
            Selected date:
            <span
              ref={(el) => (this.selectedDateInfoEl = el)}
              role="status"
            ></span>
          </span>
          {(hasCustomValidation || !isEmptyString(this.invalidDateText)) && (
            <ic-input-validation
              status={validationStatus}
              message={
                hasCustomValidation ? this.validationText : this.invalidDateText
              }
              for={inputId}
            ></ic-input-validation>
          )}
        </ic-input-container>
      </Host>
    );
  }
}
