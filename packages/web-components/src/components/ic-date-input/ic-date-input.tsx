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
} from "@stencil/core";
import {
  IcDateFormat,
  IcDateInputMonths,
  IcDisabledDateTypes,
} from "./ic-date-input.types";
import { IcInformationStatusOrEmpty } from "../../interface";
import { IcInformationStatus } from "../../utils/types";
import {
  addFormResetListener,
  getInputDescribedByText,
  isEmptyString,
  isNumeric,
  removeFormResetListener,
  renderHiddenInput,
} from "../../utils/helpers";

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
  private dayInputEl: HTMLInputElement;
  private EVENT_OBJECT_STRING = "[object Event]";
  private FIT_TO_VALUE = "fit-to-value";

  private initialValue = this.value;
  private inputCompContainerEl: HTMLIcInputComponentContainerElement;
  private INPUT_EVENT_OBJECT_STRING = "[object InputEvent]";
  private inputsInOrder: HTMLInputElement[] = [];

  private isDateSetFromKeyboardEvent: boolean = false;
  private isDisabledDate: boolean = false;
  private isPasteValidationDisplayed: boolean;
  private isValidDay: boolean = true;
  private isValidMonth: boolean = true;
  private isValidDate: boolean = true;

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
  @State() month: string = "";
  @State() year: string = "";

  /**
   * The format in which the date will be displayed.
   */
  @Prop() dateFormat?: IcDateFormat = "DD/MM/YYYY";

  /**
   * The text to display as the validation message when `disabledDates` is `from-now` and a disabled date is entered.
   */
  @Prop() dateFromNowMessage?: string =
    "Dates in the future are not allowed. Please select a date in the past.";

  /**
   * The text to display as the validation message when `disabledDates` is `until-now` and a disabled date is entered.
   */
  @Prop() dateUntilNowMessage?: string =
    "Dates in the past are not allowed. Please select a date in the future.";

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;

  /**
   * The dates (until now or from now) that the user cannot select. A validation message will appear if they enter a disabled date.
   */
  @Prop() disabledDates?: IcDisabledDateTypes;

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
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the input will require a value.
   */
  @Prop() required?: boolean = false;

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
   * Emitted when the input loses focus.
   */
  @Event() icBlur: EventEmitter<{ value: Date }>;

  /**
   * Emitted when the value has changed.
   */
  @Event() icChange: EventEmitter<{ value: Date }>;

  /**
   * Emitted when the input gains focus.
   */
  @Event() icFocus: EventEmitter<{ value: Date }>;

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
  }

  componentWillLoad() {
    if (isEmptyString(this.helperText)) {
      this.helperText = this.dateFormat;
    }

    if (this.value) {
      this.setDate(this.value);
    }

    this.screenReaderInfoId = `${this.inputId}-screen-reader-info`;
    this.assistiveHintId = `${this.inputId}-assistive-hint`;
    this.selectedDateInfoId = `${this.inputId}-selected-date-info`;

    addFormResetListener(this.el, this.handleFormReset);
  }

  componentDidLoad() {
    this.setInputsInOrder();

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

  componentWillUpdate() {
    if (!this.isDateSetFromKeyboardEvent) {
      this.setDate(this.value);
    }
    this.setAriaInvalid(
      this.isValidDay,
      this.isValidMonth,
      this.isValidDate,
      this.isDisabledDate
    );
    this.handleDateChange();

    this.isDateSetFromKeyboardEvent = false;
  }

  componentDidRender() {
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
      /-?\d*\.?\d+(e[-+]?\d+)?|[/-]|arrowup|arrowdown|arrowleft|arrowright|shift|tab|backspace/;
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
    this.isDateSetFromKeyboardEvent = true;
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

  private handleDateChange = () => {
    // Prevent icChange being emitted when each individual input is changed
    // This method is used within componentWillUpdate instead of using @Watch('value');
    if (this.selectedDate !== this.previousSelectedDate) {
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

  private isPastedStringDateValid = (value: string) =>
    /\d+-\d+-\d+/.test(value) ||
    /\d+\/\d+\/\d+/.test(value) ||
    /\d+\.\d+\.\d+/.test(value);

  // Set value of each input to value of pasted date part
  // Allows formats separated by '-' or '/'
  private handlePaste = (event: ClipboardEvent) => {
    event.preventDefault();

    const pastedValue = event.clipboardData.getData("Text");
    // Remove /r or /n from string
    const newPastedValue = pastedValue.replace(/^[\r\n]+|\.|[\r\n]+$/g, "");
    const isValidDate = this.isPastedStringDateValid(newPastedValue);

    this.setPastedValueAndValidation(isValidDate, newPastedValue, event);
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
      default:
        break;
    }
  };

  private splitStringDate = (date: string): string[] => {
    if (date.split("/").length > 1) {
      return date.split("/");
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
    }

    this.setValidationMessage();
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
    } else if (this.isDisabledDate) {
      if (this.disabledDates === "until-now") {
        this.invalidDateText = this.dateUntilNowMessage;
      } else {
        this.invalidDateText = this.dateFromNowMessage;
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

  // Get whether date has been disabled using disableDates prop, but always allow current day
  private isSelectedDateDisabled = () => {
    const currentDate = new Date();

    let disabled = false;

    if (
      this.disabledDates &&
      ((this.disabledDates === "until-now" &&
        this.selectedDate < currentDate) ||
        (this.disabledDates === "from-now" &&
          this.selectedDate > currentDate)) &&
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
    this.handleDateChange();
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
    newPastedValue: string,
    event: ClipboardEvent
  ) {
    switch (true) {
      case isValidDate: {
        const dateParts = newPastedValue.split(/-|\/|\./);
        this.inputsInOrder.forEach((input, index) => {
          input.classList.add(this.FIT_TO_VALUE);
          let dateValue;

          if (input === this.dayInputEl || input === this.monthInputEl) {
            dateValue = this.slicePastedDate(2, dateParts[index]);
          } else {
            dateValue = this.slicePastedDate(4, dateParts[index]);
          }

          input.value = dateValue;

          this.setInputValue(input);
          this.autocompleteInput(input);
        });
        break;
      }

      case (newPastedValue.length === 1 ||
        newPastedValue.length === 2 ||
        newPastedValue.length === 4) &&
        isNumeric(newPastedValue):
        if (this.checkSingleCopiedValueIsValid(event.target, newPastedValue)) {
          // Check if copied value can be pasted into input
          this.setInputPasteValue(event.target, newPastedValue);
          this.setInputValue(event.target as HTMLInputElement);
        } else {
          this.displayPastedValidation(event);
        }
        break;

      case newPastedValue.length === 3 && isNumeric(newPastedValue):
        if (event.target !== this.yearInputEl) {
          this.displayPastedValidation(event);
        } else {
          this.setInputPasteValue(event.target, newPastedValue);
          this.setInputValue(event.target as HTMLInputElement);
        }
        break;

      case newPastedValue.length >= 5 && isNumeric(newPastedValue):
        this.displayPastedValidation(event);
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

  render() {
    const { inputId, label, disabled, helperText } = this;

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
          >
            {this.getInputsInOrder()[0]}/{this.getInputsInOrder()[1]}/
            {this.getInputsInOrder()[2]}
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
