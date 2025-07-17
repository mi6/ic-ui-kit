/* eslint-disable react/jsx-no-bind */
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
  IcDisableTimeSelection,
  IcInformationStatus,
  IcInformationStatusOrEmpty,
  IcSizes,
  IcThemeMode,
  IcTimeFormat,
} from "../../utils/types";
import {
  isEmptyString,
  isNumeric,
  addFormResetListener,
  getInputDescribedByText,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
  removeFormResetListener,
  renderHiddenInput,
} from "../../utils/helpers";
import Clear from "../../assets/clear-icon.svg";
import Clock from "../../assets/clock.svg";

let inputIds = 0;

/**
 * @slot helper-text - Content is set as the helper text for the time input.
 */
@Component({
  tag: "ic-time-input",
  styleUrl: "ic-time-input.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class TimeInput {
  private DEFAULT_TIME_FORMAT: IcTimeFormat = "HH:MM:SS";
  private ARIA_INVALID = "aria-invalid";
  private ARIA_LABEL = "aria-label";
  private ARIA_LABELLED_BY = "aria-labelledby";
  private assistiveHintId: string;
  private hourInputEl?: HTMLInputElement;
  private minuteInputEl?: HTMLInputElement;
  private secondInputEl?: HTMLInputElement;
  private defaultHelperText: string;
  private EVENT_OBJECT_STRING = "[object Event]";
  private FIT_TO_VALUE = "fit-to-value";
  private initialValue = this.value;
  private inputCompContainerEl: HTMLIcInputComponentContainerElement;
  private inputsInOrder: HTMLInputElement[] = [];
  private isValidHour: boolean = true;
  private isValidMinute: boolean = true;
  private isValidSecond: boolean = true;
  private isValidTime: boolean = true;
  private isTimeSetFromKeyboardEvent: boolean = false;
  private preventAutoFormatting: boolean;
  private preventHourInput: boolean;
  private preventMinuteInput: boolean;
  private preventSecondInput: boolean;
  private previousSelectedTime: Date | null = null;
  private selectedTime: Date | null = null;
  private selectedTimeInfoEl?: HTMLSpanElement;
  private screenReaderInfoId: string;
  private selectedTimeInfoId: string;
  private externalSetTime: boolean = false;
  private clearInput: boolean = false;
  private maxTime: Date | null = null;
  private minTime: Date | null = null;

  @Element() el: HTMLIcTimeInputElement;

  @State() invalidTimeText: string;
  @State() clockFocused: boolean = false;
  @State() clearButtonFocused: boolean = false;
  @State() removeLabelledBy: boolean = false;
  @State() hour: string = "";
  @State() minute: string = "";
  @State() second: string = "";

  @Watch("hour")
  @Watch("minute")
  @Watch("second")
  watchInputHandler(): void {
    if (
      this.emitTimePartChange &&
      !this.externalSetTime &&
      !this.clearInput &&
      !(this.hour && this.minute && this.second) &&
      this.selectedTime === null
    ) {
      this.emitIcChange(this.selectedTime);
    }
  }

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * An array of times that will be disabled in the time input. The times can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
   */
  @Prop() disableTimes: IcDisableTimeSelection[] = [];

  /**
   * If `true`, every individual input field completed will emit an icChange event.
   */
  @Prop() emitTimePartChange?: boolean = false;

  /**
   * The helper text that will be displayed for additional field guidance. This will default to the text "Use format" along with the `timeFormat` value.
   */
  @Prop({ mutable: true }) helperText: string | null;

  /**
   * If `true`, the helper text will be visually hidden, but still read out by screenreaders.
   */
  @Prop() hideHelperText: boolean = false;

  /**
   * If `true`, the label will be visually hidden, but will still be read out by screen readers.
   */
  @Prop() hideLabel?: boolean = false;

  /**
   * The ID for the input.
   */
  @Prop() inputId: string = `ic-time-input-${inputIds++}`;

  /**
   * The text to display as the validation message when an invalid time is entered.
   */
  @Prop() invalidTimeMessage: string = "Please enter a valid time.";

  /**
   * The label for the time input.
   */
  @Prop() label!: string;

  /**
   * The latest time that will be allowed. The value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
   */
  @Prop() max: string | Date = "";
  @Watch("max")
  watchMaxHandler(): void {
    this.maxTime = this.parseTime(this.max);
  }

  /**
   * The earliest time that will be allowed. The value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
   */
  @Prop() min: string | Date = "";
  @Watch("min")
  watchMinHandler(): void {
    this.minTime = this.parseTime(this.min);
  }

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the input will require a value.
   */
  @Prop() required: boolean = false;
  @Watch("required")
  watchRequiredHandler(): void {
    const labelEl = this.el.shadowRoot?.querySelector("label");
    if (this.required) {
      const asteriskSpan = document.createElement("span");
      asteriskSpan.setAttribute("id", "asterisk-span");
      asteriskSpan.setAttribute("aria-hidden", "true");
      asteriskSpan.textContent = " *";
      labelEl?.appendChild(asteriskSpan);
    } else {
      const asteriskSpan = this.el.shadowRoot?.querySelector("#asterisk-span");
      if (asteriskSpan) {
        asteriskSpan.remove();
      }
    }
  }

  /**
   * If `true`, a button which clears the time input when clicked will be displayed.
   */
  @Prop() showClearButton?: boolean = true;

  /**
   * @internal If `true`, a button which displays the clock view when clicked will be displayed.
   */
  @Prop() showClockButton?: boolean = false;

  /**
   * The size of the time input to be displayed.
   */
  @Prop() size: IcSizes = "medium";

  /**
   * Sets the time picker to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The format in which the time will be displayed.
   */
  @Prop() timeFormat: IcTimeFormat = this.DEFAULT_TIME_FORMAT;

  /**
   * The time period format: "12" for 12-hour, "24" for 24-hour. Defaults to "24".
   */
  @Prop() timePeriod: "12" | "24" = "24";

  /**
   * The value of the time input. The value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
   */
  @Prop({ mutable: true }) value?: string | Date | null | undefined = "";

  /**
   * The validation status - e.g. 'error' | 'warning' | 'success'. This will override the built-in time validation.
   */
  @Prop({ mutable: true }) validationStatus: IcInformationStatusOrEmpty = "";

  /**
   * The text to display as the validation message. This will override the built-in time validation.
   */
  @Prop() validationText?: string = "";

  /**
   * @internal Emitted when the clock is opened.
   */
  @Event() clockButtonClicked: EventEmitter<{ value: Date | null }>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() icBlur: EventEmitter<{ value: Date | null }>;

  /**
   * Emitted when the value has changed.
   */
  @Event() icChange: EventEmitter<{
    value: Date | null;
    timeObject: {
      hour: string | null;
      minute: string | null;
      second: string | null;
    };
  }>;

  /**
   * Emitted when the input gains focus.
   */
  @Event() icFocus: EventEmitter<{ value: Date | null }>;

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
  }

  componentWillLoad(): void {
    this.defaultHelperText = `Use format ${this.timeFormat}`;
    if (isEmptyString(this.helperText))
      this.helperText = this.defaultHelperText;
    if (this.value) {
      this.externalSetTime = true;
      this.setTime(this.value);
    }
    this.screenReaderInfoId = `${this.inputId}-screen-reader-info`;
    this.assistiveHintId = `${this.inputId}-assistive-hint`;
    this.selectedTimeInfoId = `${this.inputId}-selected-time-info`;
    addFormResetListener(this.el, this.handleFormReset);
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    this.setInputsInOrder();
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Time Input"
    );
    if (this.value) {
      this.updateInputValues(this.hour, this.minute, this.second);
      this.inputsInOrder.forEach((input) => {
        input.classList.add(this.FIT_TO_VALUE);
      });
    }
    this.setAriaInvalid(
      this.isValidHour,
      this.isValidMinute,
      this.isValidSecond
    );
    if (this.value) {
      this.notifyScreenReaderSelectedTime();
    }
    this.inputsInOrder.forEach((input) => {
      input.addEventListener("input", this.handleInput);
      input.addEventListener("focus", this.handleFocus);
      input.addEventListener("blur", this.handleBlur);
    });
    this.watchRequiredHandler();
  }

  componentWillUpdate(): void {
    if (isEmptyString(this.helperText))
      this.helperText = this.defaultHelperText;
    if (!this.isTimeSetFromKeyboardEvent) this.setTime(this.value);
    this.setAriaInvalid(
      this.isValidHour,
      this.isValidMinute,
      this.isValidSecond
    );
    this.handleTimeChange(false);
    this.isTimeSetFromKeyboardEvent = false;
  }

  componentDidRender(): void {
    if (this.removeLabelledBy) {
      this.removeAriaLabelledBy();
      return;
    }
    this.setAriaLabelledBy();
  }

  /**
   * Returns the value as a Date object
   * @returns Date
   */
  @Method()
  async getTime(): Promise<Date | null> {
    return this.selectedTime;
  }

  /**
   * @internal Used to enable other components to invoke an IcChange event from the input.
   */
  @Method()
  async triggerIcChange(t: Date | null): Promise<void> {
    this.externalSetTime = true;
    this.setTime(t);
    this.emitIcChange(t);
    this.externalSetTime = false;
  }

  private setInputPasteValue = (
    input: EventTarget | null,
    pastedValue: string
  ) => {
    if (input) {
      const inputEl = input as HTMLInputElement;
      inputEl.value = pastedValue;
      inputEl.classList.add(this.FIT_TO_VALUE);
    }
  };

  private parseTime = (value: string | Date): Date | null => {
    if (!value) return null;
    if (value instanceof Date) return value;
    const parts = value.split(":");
    if (parts.length >= 2) {
      const d = new Date();
      d.setHours(+parts[0], +parts[1], parts[2] ? +parts[2] : 0, 0);
      return d;
    }
    return null;
  };

  private isHHMMFormat = () => this.timeFormat === "HH:MM";

  private isKeyboardOrEvent = (event: Event) => {
    return (
      Object.prototype.toString.call(event) === this.EVENT_OBJECT_STRING ||
      Object.prototype.toString.call(event) === "[object KeyboardEvent]"
    );
  };

  private setTimeValidity = () => {
    const minHour = 0;
    const maxHour = this.timePeriod === "12" ? 11 : 23;
    if (!isEmptyString(this.hour)) {
      this.isValidHour = +this.hour >= minHour && +this.hour <= maxHour;
    } else {
      this.isValidHour = true;
    }
    if (!isEmptyString(this.minute)) {
      this.isValidMinute = +this.minute >= 0 && +this.minute <= 59;
    } else {
      this.isValidMinute = true;
    }
    if (!this.isHHMMFormat()) {
      if (!isEmptyString(this.second)) {
        this.isValidSecond = +this.second >= 0 && +this.second <= 59;
      } else {
        this.isValidSecond = true;
      }
    } else {
      this.isValidSecond = true;
    }
  };

  private setInputValue = (input: HTMLInputElement, clear = false) => {
    const newValue = clear ? "" : input.value;
    if (input === this.hourInputEl) {
      this.hour = newValue;
    } else if (input === this.minuteInputEl) {
      this.minute = newValue;
    } else if (input === this.secondInputEl && !this.isHHMMFormat()) {
      this.second = newValue;
    }
    this.setValidationMessage();
  };

  private setPreventInput = (input: HTMLInputElement, isPrevented: boolean) => {
    if (input === this.hourInputEl) {
      this.preventHourInput = isPrevented;
    } else if (input === this.minuteInputEl) {
      this.preventMinuteInput = isPrevented;
    } else if (input === this.secondInputEl) {
      this.preventSecondInput = isPrevented;
    }
  };

  private setValidationMessage = () => {
    this.maxTime = this.parseTime(this.max);
    this.minTime = this.parseTime(this.min);
    this.setTimeValidity();
    let outOfBoundsMsg = "";
    let isDisabledTime = false;
    if (
      !isEmptyString(this.hour) &&
      !isEmptyString(this.minute) &&
      (this.isHHMMFormat() || !isEmptyString(this.second))
    ) {
      this.selectedTime = this.convertToTime(
        this.hour,
        this.minute,
        this.isHHMMFormat() ? "00" : this.second
      );
      this.isValidTime =
        !!this.selectedTime &&
        this.selectedTime.getHours() == +this.hour &&
        this.selectedTime.getMinutes() == +this.minute &&
        (this.isHHMMFormat() || this.selectedTime.getSeconds() == +this.second);

      if (
        this.selectedTime &&
        Array.isArray(this.disableTimes) &&
        this.disableTimes.length > 0
      ) {
        isDisabledTime = this.disableTimes.some((t) => {
          if (
            typeof t === "object" &&
            t !== null &&
            "start" in t &&
            "end" in t
          ) {
            const start = this.parseTime(t.start);
            const end = this.parseTime(t.end);
            if (start && end) {
              return this.selectedTime! >= start && this.selectedTime! <= end;
            }
            return false;
          }
          const parsed = this.parseTime(t as string | Date);
          return (
            parsed &&
            parsed.getHours() === this.selectedTime!.getHours() &&
            parsed.getMinutes() === this.selectedTime!.getMinutes() &&
            parsed.getSeconds() === this.selectedTime!.getSeconds()
          );
        });
        if (isDisabledTime) {
          this.isValidTime = false;
          outOfBoundsMsg = this.invalidTimeMessage;
        }
      }

      if (this.selectedTime && !isDisabledTime) {
        if (this.minTime && this.selectedTime < this.minTime) {
          this.isValidTime = false;
          outOfBoundsMsg = `Please enter a time after ${this.formatTime(
            this.minTime
          )}.`;
        } else if (this.maxTime && this.selectedTime > this.maxTime) {
          this.isValidTime = false;
          outOfBoundsMsg = `Please enter a time before ${this.formatTime(
            this.maxTime
          )}.`;
        }
      }
      if (!this.isValidTime) {
        this.inputsInOrder.forEach((input) =>
          input.setAttribute(this.ARIA_INVALID, "true")
        );
      } else {
        this.inputsInOrder.forEach((input) =>
          input.removeAttribute(this.ARIA_INVALID)
        );
      }
    } else {
      this.selectedTime = null;
    }
    if (
      !(
        this.isValidHour &&
        this.isValidMinute &&
        this.isValidSecond &&
        this.isValidTime
      )
    ) {
      this.invalidTimeText = outOfBoundsMsg || this.invalidTimeMessage;
    } else {
      this.invalidTimeText = "";
    }
  };

  private formatTime = (time: Date): string => {
    const hh = time.getHours().toString().padStart(2, "0");
    const mm = time.getMinutes().toString().padStart(2, "0");
    const ss = time.getSeconds().toString().padStart(2, "0");
    return this.isHHMMFormat() ? `${hh}:${mm}` : `${hh}:${mm}:${ss}`;
  };

  private handleInput = (event: Event) => {
    const inputEvent = event as InputEvent;
    const input = event.target as HTMLInputElement;
    if (input !== this.hourInputEl) {
      if (
        inputEvent.inputType !== "deleteContentBackward" &&
        !this.preventAutoFormatting
      ) {
        if (
          input.value.length === 1 &&
          +input.value >= 6 &&
          +input.value <= 9
        ) {
          this.setInputValue(input);
          this.notifyScreenReader(input);
          this.moveToNextInput(input);
        }
        if (input.value.length === 2) {
          this.setInputValue(input);
          this.setPreventInput(input, true);
          this.notifyScreenReader(input);
          this.moveToNextInput(input);
        } else {
          this.setPreventInput(input, false);
        }
      } else if (this.preventAutoFormatting) {
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
      if (input.value.length === 2) {
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
    this.setFitToValueStyling(input);
    if (input.value.length === 0) {
      this.setInputValue(input, true);
      this.setValidationMessage();
    }
    this.notifyScreenReader(input);
  };

  private handleKeyDown = (event: KeyboardEvent, isInputPrevented: boolean) => {
    const input = event.target as HTMLInputElement;
    const eventKey = event.key?.toLowerCase();
    const regex =
      /-?\d*\.?\d+(e[-+]?\d+)?|[:]|arrowup|arrowdown|arrowleft|arrowright|shift|tab|backspace|delete/;
    if (
      !regex.test(eventKey) &&
      !(
        (event.ctrlKey || event.metaKey) &&
        (eventKey === "v" || eventKey === "c")
      )
    ) {
      event.preventDefault();
    }
    switch (eventKey) {
      case ":":
      case "arrowright":
        event.preventDefault();
        this.moveToNextInput(input);
        break;
      case "arrowleft":
        event.preventDefault();
        this.moveToPreviousInput(input);
        break;
      case "arrowup":
      case "arrowdown":
        this.preventAutoFormatting = true;
        this.handleUpDownArrowKeyPress(input, event);
        break;
      case "backspace":
        if (input.value.length === 0) {
          event.preventDefault();
          this.moveToPreviousInput(input);
        }
        break;
      default:
        break;
    }
    this.preventInput(event, isInputPrevented);
    this.isTimeSetFromKeyboardEvent = true;
  };

  private handleFocus = (event: FocusEvent) => {
    const input = event.target as HTMLInputElement;
    input.select();
  };

  private handleBlur = (event: FocusEvent) => {
    const input = event.target;
    if (input) {
      this.autocompleteInput(input as HTMLInputElement);
    }
  };

  private handleUpDownArrowKeyPress = (
    input: HTMLInputElement,
    event: KeyboardEvent
  ) => {
    let minValue = 0;
    let maxValue = 59;
    if (input === this.hourInputEl) {
      minValue = 0;
      maxValue = this.timePeriod === "12" ? 11 : 23;
    }
    let val = +input.value;
    if (event.key === "ArrowUp") {
      val = val + 1;
      if (val > maxValue) val = minValue;
      input.value = val.toString().padStart(2, "0");
      this.notifyScreenReader(input);
    }
    if (event.key === "ArrowDown") {
      val = val - 1;
      if (val < minValue) val = maxValue;
      input.value = val.toString().padStart(2, "0");
      this.notifyScreenReader(input);
    }
    this.setInputValue(input);
    this.setFitToValueStyling(input);
  };

  private handleTimeChange = (force: boolean) => {
    if (force || this.selectedTime !== this.previousSelectedTime) {
      if (this.value) {
        this.inputsInOrder.forEach((input) => {
          input.classList.add(this.FIT_TO_VALUE);
        });
      }
      if (
        this.hour &&
        this.minute &&
        (this.isHHMMFormat() || this.second) &&
        this.invalidTimeText === ""
      ) {
        this.setValueAndEmitChange(this.selectedTime);
        this.notifyScreenReaderSelectedTime();
      } else if (
        !(this.selectedTime === null && this.previousSelectedTime === null) &&
        this.selectedTimeInfoEl
      ) {
        this.setValueAndEmitChange(null);
        this.selectedTimeInfoEl.textContent = "";
      }
      this.previousSelectedTime = this.selectedTime;
      if (!this.isTimeSetFromKeyboardEvent) {
        this.updateInputValues(this.hour, this.minute, this.second);
      }
    }
  };

  private setValueAndEmitChange = (value: Date | null) => {
    if (this.value !== value) {
      this.emitIcChange(value);
      this.value = value;
    }
  };

  private emitIcChange = (t: Date | null) => {
    this.selectedTime = t;
    this.icChange.emit({
      value: t,
      timeObject: {
        hour: this.hour === "" ? null : this.hour,
        minute: this.minute === "" ? null : this.minute,
        second: this.second === "" ? null : this.second,
      },
    });
  };

  private setTime = (time?: string | Date | null) => {
    if (time === null || time === "" || time === undefined) {
      if (this.hour) this.hour = "";
      if (this.minute) this.minute = "";
      if (this.second) this.second = "";
      this.inputsInOrder.forEach((input) => {
        input.classList.remove(this.FIT_TO_VALUE);
        this.setPreventInput(input, false);
      });
      this.handleTimeChange(true);
    } else {
      if (typeof time === "string") {
        const zuluMatch = time.match(
          /^(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?Z?$/
        );
        if (zuluMatch) {
          this.hour = zuluMatch[1];
          this.minute = zuluMatch[2];
          this.second = zuluMatch[3];
        } else {
          const parts = time.split(":");
          this.hour = parts[0] || "";
          this.minute = parts[1] || "";
          this.second = parts[2] || "";
        }
      } else if (time instanceof Date) {
        this.hour = time.getHours().toString().padStart(2, "0");
        this.minute = time.getMinutes().toString().padStart(2, "0");
        this.second = time.getSeconds().toString().padStart(2, "0");
      }
    }
    this.setValidationMessage();
  };

  private setAriaInvalid = (
    validHour: boolean,
    validMinute: boolean,
    validSecond: boolean
  ) => {
    if (this.inputsInOrder.length) {
      this.inputsInOrder.forEach((input) => {
        input.removeAttribute(this.ARIA_INVALID);
      });
      if (!validHour) {
        this.hourInputEl?.setAttribute(this.ARIA_INVALID, "true");
      }
      if (!validMinute) {
        this.minuteInputEl?.setAttribute(this.ARIA_INVALID, "true");
      }
      if (!validSecond) {
        this.secondInputEl?.setAttribute(this.ARIA_INVALID, "true");
      }
      if (!(validHour && validMinute && validSecond)) {
        this.inputsInOrder.forEach((input) => {
          input.setAttribute(this.ARIA_INVALID, "true");
        });
      }
    }
  };

  private handleClear = () => {
    this.clearInput = true;
    if (this.hourInputEl) {
      this.hourInputEl.value = "";
    }
    if (this.minuteInputEl) {
      this.minuteInputEl.value = "";
    }
    if (!this.isHHMMFormat() && this.secondInputEl) {
      this.secondInputEl.value = "";
    }
    this.hour = "";
    this.minute = "";
    this.second = "";
    this.handleTimeChange(true);
    this.inputsInOrder.forEach((input) => {
      input.classList.remove(this.FIT_TO_VALUE);
      this.setPreventInput(input, false);
    });
    this.clearInput = false;
    this.isTimeSetFromKeyboardEvent = false;
    this.setValidationMessage();
    this.invalidTimeText = "";
    if (this.hourInputEl) {
      this.hourInputEl.focus();
    }
  };

  private notifyScreenReaderSelectedTime = () => {
    if (this.selectedTime && this.selectedTimeInfoEl) {
      if (this.isHHMMFormat()) {
        this.selectedTimeInfoEl.textContent = `Selected time: ${this.selectedTime
          .getHours()
          .toString()
          .padStart(2, "0")}:${this.selectedTime
          .getMinutes()
          .toString()
          .padStart(2, "0")}`;
      } else {
        this.selectedTimeInfoEl.textContent = `Selected time: ${this.selectedTime
          .getHours()
          .toString()
          .padStart(2, "0")}:${this.selectedTime
          .getMinutes()
          .toString()
          .padStart(2, "0")}:${this.selectedTime
          .getSeconds()
          .toString()
          .padStart(2, "0")}`;
      }
    }
  };

  private setFitToValueStyling = (input: HTMLInputElement) => {
    if (input.value) {
      input.classList.add(this.FIT_TO_VALUE);
    } else {
      input.classList.remove(this.FIT_TO_VALUE);
    }
  };

  private handleHostBlur = () => {
    this.removeLabelledBy = false;
    this.icBlur.emit({ value: this.selectedTime });
  };

  private handleHostFocus = () => {
    if (
      this.el.shadowRoot?.activeElement?.id.match(/(hour|minute|second)-input$/)
    ) {
      this.removeLabelledBy = false;
    } else {
      this.removeLabelledBy = true;
    }
    this.icFocus.emit({ value: this.selectedTime });
  };

  private handleFormReset = () => {
    this.setTime(this.initialValue);
    this.setValidationMessage();
    this.handleTimeChange(false);
  };

  private preventInput = (event: KeyboardEvent, isInputPrevented: boolean) => {
    const key = event.key;
    const input = event.target as HTMLInputElement;
    let selectedString;
    if (input) {
      selectedString = input.value.substring(
        input.selectionStart || 0,
        input.selectionEnd || undefined
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

  private moveToNextInput = (currentInput: HTMLInputElement) => {
    this.preventAutoFormatting = false;
    this.inputsInOrder[
      this.inputsInOrder.findIndex((input) => input === currentInput) + 1
    ]?.focus();
  };

  private moveToPreviousInput = (currentInput: HTMLInputElement) => {
    this.preventAutoFormatting = false;
    this.inputsInOrder[
      this.inputsInOrder.findIndex((input) => input === currentInput) - 1
    ]?.focus();
  };

  private autocompleteInput = (input: HTMLInputElement) => {
    const inputValue = input.value;
    if (inputValue.length === 1) {
      input.value = `0${inputValue}`;
    }
    if (input.value) {
      this.setInputValue(input);
    }
  };

  private convertToTime = (
    hour: string,
    minute: string,
    second: string
  ): Date | null => {
    if (
      !isEmptyString(hour) &&
      !isEmptyString(minute) &&
      (this.isHHMMFormat() || !isEmptyString(second))
    ) {
      const d = new Date();
      d.setHours(+hour, +minute, this.isHHMMFormat() ? 0 : +second, 0);
      return d;
    } else {
      return null;
    }
  };

  private setInputsInOrder = () => {
    this.inputsInOrder = [];
    const shadowInputs = this.el.shadowRoot?.querySelectorAll("input");
    if (shadowInputs) {
      shadowInputs.forEach((input) => this.inputsInOrder.push(input));
    }
  };

  private updateInputValues = (
    hour: string,
    minute: string,
    second: string
  ) => {
    if (this.hourInputEl && this.minuteInputEl && this.secondInputEl) {
      this.hourInputEl.value = hour;
      this.minuteInputEl.value = minute;
      this.secondInputEl.value = second;
    }
  };

  private removeAriaLabelledBy = () => {
    this.inputCompContainerEl?.removeAttribute(this.ARIA_LABELLED_BY);
  };

  private setAriaLabelledBy = () => {
    if (
      this.disabled &&
      this.inputCompContainerEl?.getAttribute(this.ARIA_LABELLED_BY)
    ) {
      this.removeAriaLabelledBy();
      return;
    }
    if (this.disabled) {
      return;
    }
    const labelEl = this.el.shadowRoot?.querySelector("label");
    const labelId = `${this.inputId}-label`;
    if (labelEl !== null && labelEl !== undefined) {
      labelEl.id = labelId;
    }
    const hasValidation =
      !isEmptyString(this.validationStatus) ||
      !isEmptyString(this.invalidTimeText);
    const labelledBy = `${labelEl?.id ?? ""} ${
      this.screenReaderInfoId
    } ${getInputDescribedByText(
      this.el,
      this.inputId,
      this.helperText !== "" && this.helperText !== this.defaultHelperText,
      hasValidation
    )} ${this.selectedTime ? this.selectedTimeInfoId : ""} ${
      this.assistiveHintId
    }`;
    this.inputCompContainerEl?.setAttribute(this.ARIA_LABELLED_BY, labelledBy);
  };

  private getInputsInOrder = () => {
    const timeParts = this.timeFormat.split(":");
    return timeParts.map((part: string) => {
      switch (part.substring(0, 1)) {
        case "H":
          return (
            <input
              class="hour-input"
              id="hour-input"
              ref={(el) => (this.hourInputEl = el)}
              aria-label="hour"
              placeholder="HH"
              disabled={this.disabled}
              inputmode="number"
              pattern="[0-9]*"
              onPaste={this.handlePaste}
              onKeyDown={(event) =>
                this.handleKeyDown(event, this.preventHourInput)
              }
            ></input>
          );
        case "M":
          return (
            <input
              id="minute-input"
              class="minute-input"
              ref={(el) => (this.minuteInputEl = el)}
              aria-label="minute"
              placeholder="MM"
              disabled={this.disabled}
              inputmode="number"
              pattern="[0-9]*"
              onPaste={this.handlePaste}
              onKeyDown={(event) =>
                this.handleKeyDown(event, this.preventMinuteInput)
              }
            ></input>
          );
        case "S":
          if (!this.isHHMMFormat()) {
            return (
              <input
                id="second-input"
                class="second-input"
                ref={(el) => (this.secondInputEl = el)}
                aria-label="second"
                placeholder="SS"
                disabled={this.disabled}
                inputmode="number"
                pattern="[0-9]*"
                onPaste={this.handlePaste}
                onKeyDown={(event) =>
                  this.handleKeyDown(event, this.preventSecondInput)
                }
              ></input>
            );
          }
          return null;
        default:
          return null;
      }
    });
  };

  private getDescOfInputsOrder = () => {
    return "hour, minute, and second";
  };

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

  private notifyScreenReader = (input: HTMLInputElement) => {
    const liveRegion = this.el.shadowRoot?.querySelector("#live-region");
    if (liveRegion) {
      liveRegion.textContent = `${input.value}, ${input.getAttribute(
        this.ARIA_LABEL
      )}`;
    }
  };

  private handlePaste = (event: ClipboardEvent) => {
    event.preventDefault();
    const pastedValue = event.clipboardData?.getData("Text") || "";
    const isValidTime = this.isPastedStringTimeValid(pastedValue);
    this.setPastedValueAndValidation(isValidTime, pastedValue, event);
  };

  private handleClearFocus = () => {
    this.removeLabelledBy = true;
    this.clearButtonFocused = true;
    this.isTimeSetFromKeyboardEvent = true;
  };

  private handleClearBlur = (ev: FocusEvent) => {
    this.clearButtonFocused = false;
    this.isTimeSetFromKeyboardEvent = true;
    const relatedTarget = ev.relatedTarget as HTMLElement | null;
    if (relatedTarget?.id === "clock-button") {
      this.removeLabelledBy = false;
      return;
    }
    if (relatedTarget?.id.match(/(minute|second)-input$/)) {
      this.removeLabelledBy = false;
      return;
    }
    this.removeLabelledBy = true;
  };

  private handleClockFocus = () => {
    this.clockFocused = true;
  };

  private handleClockBlur = () => {
    this.clockFocused = false;
  };

  private isPastedStringTimeValid = (value: string): string | false => {
    if (this.isHHMMFormat()) {
      if (/^\d{2}:\d{2}$/.test(value)) {
        return value;
      }
    } else {
      if (/^\d{2}:\d{2}:\d{2}$/.test(value)) {
        return value;
      }
      if (/^\d{2}:\d{2}:\d{2}Z$/.test(value)) {
        return value.replace("Z", "");
      }
      const isoMatch = value.match(/T(\d{2}:\d{2}:\d{2})/);
      if (isoMatch) {
        return isoMatch[1];
      }
    }
    return false;
  };

  private setPastedValueAndValidation = (
    isValidTime: string | false,
    pastedValue: string,
    event: ClipboardEvent
  ) => {
    if (isValidTime) {
      const timeParts = isValidTime.split(":");
      this.inputsInOrder.forEach((input, index) => {
        input.classList.add(this.FIT_TO_VALUE);
        const timeValue = timeParts[index] || "";
        input.value = timeValue.slice(0, 2);
        this.setInputValue(input);
        this.autocompleteInput(input);
      });
      if (this.isHHMMFormat() && this.second !== "") {
        this.second = "";
      }
    } else {
      const pasted = pastedValue.trim();
      if ((pasted.length === 1 || pasted.length === 2) && isNumeric(pasted)) {
        this.setInputPasteValue(event.target, pasted);
        this.setInputValue(event.target as HTMLInputElement);
      } else {
        this.invalidTimeText = `Please paste a valid ${(
          event.target as HTMLInputElement
        ).getAttribute(this.ARIA_LABEL)}`;
        this.validationStatus = IcInformationStatus.Error;
      }
    }
  };

  render() {
    const {
      inputId,
      label,
      disabled,
      helperText,
      hideHelperText,
      hideLabel,
      showClearButton,
      showClockButton,
      size,
      theme,
    } = this;
    const hasCustomValidation = !isEmptyString(this.validationStatus);
    const validationStatus = hasCustomValidation
      ? this.validationStatus
      : !isEmptyString(this.invalidTimeText)
      ? IcInformationStatus.Error
      : "";
    const assistiveHint = `Type or use the up and down arrow keys to change the values for the ${this.getDescOfInputsOrder()}.`;
    renderHiddenInput(
      true,
      this.el,
      this.name,
      this.convertToTime(this.hour, this.minute, this.second),
      this.disabled
    );
    const showDivider = !!(
      showClearButton &&
      !(
        isEmptyString(this.hour) &&
        isEmptyString(this.minute) &&
        isEmptyString(this.second)
      )
    );
    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
          [`ic-time-input-disabled`]: disabled,
          [`ic-time-input-${size}`]: true,
        }}
        onBlur={this.handleHostBlur}
        onFocus={this.handleHostFocus}
      >
        <ic-input-container disabled={disabled}>
          {!(hideLabel && hideHelperText) && (
            <ic-input-label
              for={inputId}
              label={label}
              hideLabel={hideLabel}
              helperText={!hideHelperText ? helperText : ""}
              disabled={disabled}
            >
              <slot name="helper-text" slot="helper-text"></slot>
            </ic-input-label>
          )}
          <span id={this.screenReaderInfoId} class="sr-only" aria-hidden="true">
            {this.getScreenReaderInfo(validationStatus)}
            {hideLabel && `${label}\n`}
            {hideHelperText && `${helperText}\n`}
            {`${this.defaultHelperText}.`}
          </span>
          <span id={this.assistiveHintId} class="sr-only" aria-hidden="true">
            {assistiveHint}
          </span>
          <span id="live-region" aria-live="assertive" class="sr-only"></span>
          <ic-input-component-container
            id={inputId}
            ref={(el: HTMLIcInputComponentContainerElement) =>
              (this.inputCompContainerEl = el)
            }
            disabled={disabled}
            validationStatus={validationStatus}
            size={size}
            role="group"
            class={{ [`ic-theme-${theme}`]: theme !== "inherit" }}
          >
            <div class="input-container">
              <div class="time-inputs">
                {[
                  this.getInputsInOrder()[0],
                  ":",
                  this.getInputsInOrder()[1],
                  !this.isHHMMFormat()
                    ? [":", this.getInputsInOrder()[2]]
                    : null,
                ]}
              </div>
              <div class="action-buttons">
                {showClearButton && (
                  <ic-button
                    id="clear-button"
                    aria-label="Clear input"
                    class={{
                      ["clear-button"]: true,
                      ["hidden"]:
                        isEmptyString(this.hour) &&
                        isEmptyString(this.minute) &&
                        isEmptyString(this.second),
                    }}
                    disabled={this.disabled}
                    innerHTML={Clear}
                    onClick={this.handleClear}
                    onFocus={this.handleClearFocus}
                    onBlur={this.handleClearBlur}
                    variant="icon-tertiary"
                    theme={this.clearButtonFocused ? "light" : "dark"}
                    size={size}
                  ></ic-button>
                )}
                {showClockButton && (
                  <div class="show-clock-button-wrapper">
                    <div class={{ divider: showDivider, [size]: true }}></div>
                    <ic-button
                      id="clock-button"
                      aria-label="Display clock"
                      aria-haspopup="dialog"
                      class="clock-button"
                      disabled={this.disabled}
                      innerHTML={Clock}
                      variant="icon-tertiary"
                      size={size}
                      onFocus={this.handleClockFocus}
                      onBlur={this.handleClockBlur}
                      theme={this.clockFocused ? "light" : "dark"}
                    ></ic-button>
                  </div>
                )}
              </div>
            </div>
          </ic-input-component-container>
          <span id={this.selectedTimeInfoId} class="sr-only" aria-live="polite">
            <span
              ref={(el) => (this.selectedTimeInfoEl = el)}
              role="status"
            ></span>
          </span>
          {(hasCustomValidation || !isEmptyString(this.invalidTimeText)) && (
            <ic-input-validation
              status={validationStatus}
              message={
                hasCustomValidation ? this.validationText : this.invalidTimeText
              }
              for={inputId}
            ></ic-input-validation>
          )}
        </ic-input-container>
      </Host>
    );
  }
}
