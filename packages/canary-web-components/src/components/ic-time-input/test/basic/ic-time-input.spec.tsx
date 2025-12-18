import { newSpecPage } from "@stencil/core/testing";
import { TimeInput } from "../../ic-time-input";
import {
  handleEvent,
  createTimeInputEnv,
  keyboardEvent,
} from "../helpers/ic-time-input";
import { IcButton } from "@ukic/web-components/dist/components/ic-button";
import { IcInputLabel } from "@ukic/web-components/dist/components/ic-input-label";

const TIME_000000 = "00:00:00";
const TIME_123456 = "12:34:56";
const ZULU_TIME = new Date("2025-07-09T12:34:56Z").toISOString();
const invalidTimeText = "Please enter a valid time.";
const MILLISECOND_FORMAT = "HH:MM:SS.SSS";

const ARIA_INVALID = "aria-invalid";

describe("ic-time-input component", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label"></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render as required", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" required></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
    page.root!.required = false;
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("required-prop-false");
  });

  it("should render as disabled", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" disabled></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render small", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" size="small"></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render large", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" size="large"></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render with custom helper text", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" helper-text="Test helper text"></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render with helper text hidden", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" hide-helper-text="true"></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render with custom validation status and text", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" validation-status="error" validation-text="Test error text"></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render with validation-aria-live", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" validation-status="error" validation-text="Test error text" validation-aria-live="assertive"></ic-time-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with open clock button", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel, IcButton],
      html: `<ic-time-input label="Test label" value="13:45:00" show-clock-button="true"></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled, with clock button", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel, IcButton],
      html: `<ic-time-input label="Test label" value="13:45:00" show-clock-button="true" disabled></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should handle default value", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" value="01:01:20"></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should handle single digit hour and minute", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" value="1:1:20"></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render with min/max times", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" min-time="08:00:00" max-time="20:00:00"></ic-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render with disabled times", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label"></ic-time-input>`,
    });

    page.rootInstance.disabledTimes = ["08:00:00", "20:00:00"];
    expect(page.root).toMatchSnapshot();
  });

  it("should remove handle disabled=false", async () => {
    const page = await newSpecPage({
      components: [TimeInput, IcInputLabel],
      html: `<ic-time-input label="Test label" disabled="false"></ic-time-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should call setInputValue, setPreventInput and moveToNextInput when value is inputted", async () => {
    const { hourInput, componentInstance } = await createTimeInputEnv();

    const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
    const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");
    const spySetPreventInput = jest.spyOn(componentInstance, "setPreventInput");

    componentInstance.preventAutoFormatting = true;

    hourInput.value = "11";
    componentInstance.handleInput(handleEvent(hourInput));

    expect(spyMoveToInput).toHaveBeenCalled();
    expect(spySetInputValue).toHaveBeenCalled();
    expect(spySetPreventInput).toHaveBeenCalled();
  });

  it("should call setInputValue and moveToNextInput when formatting is true and event is ArrowRight key", async () => {
    const { componentInstance, hourInput } = await createTimeInputEnv();

    const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
    const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");

    componentInstance.preventAutoFormatting = true;

    hourInput.value = "1";
    const arrowRightEvent = new KeyboardEvent("keydown", { key: "ArrowRight" });
    hourInput.dispatchEvent(arrowRightEvent);
    componentInstance.handleInput(arrowRightEvent);

    expect(spyMoveToInput).toHaveBeenCalled();
    expect(spySetInputValue).toHaveBeenCalled();
  });

  it("should call moveToPreviousInput when formatting is true and event is ArrowLeft key", async () => {
    const { componentInstance, minuteInput } = await createTimeInputEnv();

    const spyMoveToInput = jest.spyOn(componentInstance, "moveToPreviousInput");

    componentInstance.preventAutoFormatting = true;

    minuteInput.value = "1";
    const arrowLeftEvent = new KeyboardEvent("keydown", { key: "ArrowLeft" });
    minuteInput.dispatchEvent(arrowLeftEvent);
    componentInstance.handleInput(arrowLeftEvent);

    expect(spyMoveToInput).toHaveBeenCalled();
  });

  it("should call setInputValue and moveToPreviousInput when formatting is true and event is backspace key", async () => {
    const { componentInstance, minuteInput } = await createTimeInputEnv();

    const spyMoveToInput = jest.spyOn(componentInstance, "moveToPreviousInput");

    componentInstance.preventAutoFormatting = true;

    minuteInput.value = "";
    const backspaceEvent = new KeyboardEvent("keydown", { key: "backspace" });
    minuteInput.dispatchEvent(backspaceEvent);
    componentInstance.handleInput(backspaceEvent);

    expect(spyMoveToInput).toHaveBeenCalled();
  });

  it("should not have fit-to-value class when empty string value is set for hour input", async () => {
    const { hourInput, componentInstance } = await createTimeInputEnv();

    hourInput.value = "";
    componentInstance.handleInput(handleEvent(hourInput));

    expect(hourInput.className.includes("fit-to-value")).toBeFalsy();
  });

  it("should call moveToNextInput when a colon is inputted", async () => {
    const { componentInstance, component } = await createTimeInputEnv();
    const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
    const spyPreventInput = jest.spyOn(componentInstance, "preventInput");

    const event = new KeyboardEvent("keydown", { key: ":" });
    component?.dispatchEvent(event);

    componentInstance.handleKeyDown(event, false);

    expect(spyMoveToInput).toHaveBeenCalled();
    expect(spyPreventInput).toHaveBeenCalled();

    expect(componentInstance.isTimeSetFromKeyboardEvent).toBe(true);
  });

  it("should call handleUpDownArrowKeyPress when the ArrowUp key is pressed", async () => {
    const { componentInstance, hourInput } = await createTimeInputEnv();

    const keyboardEvent = {
      key: "ArrowUp",
      preventDefault: (): null => null,
      target: hourInput,
    };

    const spyHandleUpDownArrowKeyPress = jest.spyOn(
      componentInstance,
      "handleUpDownArrowKeyPress"
    );

    const spyPreventInput = jest.spyOn(componentInstance, "preventInput");

    componentInstance.handleKeyDown(keyboardEvent, false);

    expect(componentInstance.preventAutoFormatting).toBe(true);
    expect(spyHandleUpDownArrowKeyPress).toHaveBeenCalled();

    expect(spyPreventInput).toHaveBeenCalled();
    expect(componentInstance.isTimeSetFromKeyboardEvent).toBe(true);
  });

  it("should set hour value to 0 if hour value is 23 and ArrowUp is pressed", async () => {
    const { hourInput, componentInstance } = await createTimeInputEnv();

    hourInput.value = "23";

    componentInstance.handleUpDownArrowKeyPress(
      hourInput,
      keyboardEvent("ArrowUp")
    );

    expect(hourInput.value).toBe("00");
  });

  it("should set hour value to 13 if hour value is 12 and ArrowUp is pressed", async () => {
    const { hourInput, componentInstance } = await createTimeInputEnv();

    hourInput.value = "12";

    componentInstance.handleUpDownArrowKeyPress(
      hourInput,
      keyboardEvent("ArrowUp")
    );

    expect(hourInput.value).toBe("13");
  });

  it("should set hour value to 1 if hour value is 12 and time period is 12 and ArrowUp is pressed", async () => {
    const { hourInput, componentInstance } = await createTimeInputEnv();

    hourInput.value = "12";
    componentInstance.timePeriod = "12";

    componentInstance.handleUpDownArrowKeyPress(
      hourInput,
      keyboardEvent("ArrowUp")
    );

    expect(hourInput.value).toBe("01");
  });

  it("should set minute value to 0 if minute value is 59 and ArrowUp is pressed", async () => {
    const { minuteInput, componentInstance } = await createTimeInputEnv();

    minuteInput.value = "59";

    componentInstance.handleUpDownArrowKeyPress(
      minuteInput,
      keyboardEvent("ArrowUp")
    );

    expect(minuteInput.value).toBe("00");
  });

  it("should set second value to 0 if second value is 59 and ArrowUp is pressed", async () => {
    const { secondInput, componentInstance } = await createTimeInputEnv();

    secondInput.value = "59";

    componentInstance.handleUpDownArrowKeyPress(
      secondInput,
      keyboardEvent("ArrowUp")
    );

    expect(secondInput.value).toBe("00");
  });

  it("should set hour value to 23 if hour value is 0 and ArrowDown is pressed", async () => {
    const { hourInput, componentInstance } = await createTimeInputEnv();

    hourInput.value = "00";

    componentInstance.handleUpDownArrowKeyPress(
      hourInput,
      keyboardEvent("ArrowDown")
    );

    expect(hourInput.value).toBe("23");
  });

  it("should set hour value to 12 if hour value is 1 and time period is 12 and ArrowDown is pressed", async () => {
    const { hourInput, componentInstance } = await createTimeInputEnv();

    hourInput.value = "01";
    componentInstance.timePeriod = "12";

    componentInstance.handleUpDownArrowKeyPress(
      hourInput,
      keyboardEvent("ArrowDown")
    );

    expect(hourInput.value).toBe("12");
  });

  it("should set minute value to 59 if minute value is 0 and ArrowDown is pressed", async () => {
    const { minuteInput, componentInstance } = await createTimeInputEnv();

    minuteInput.value = "0";

    componentInstance.handleUpDownArrowKeyPress(
      minuteInput,
      keyboardEvent("ArrowDown")
    );

    expect(minuteInput.value).toBe("59");
  });

  it("should set second value to 59 if second value is 0 and ArrowDown is pressed", async () => {
    const { secondInput, componentInstance } = await createTimeInputEnv();

    secondInput.value = "0";

    componentInstance.handleUpDownArrowKeyPress(
      secondInput,
      keyboardEvent("ArrowDown")
    );

    expect(secondInput.value).toBe("59");
  });

  it("should call autocompleteInput method", async () => {
    const { hourInput, componentInstance } = await createTimeInputEnv();

    const spyAutocompleteInput = jest.spyOn(
      componentInstance,
      "autocompleteInput"
    );

    componentInstance.handleBlur(handleEvent(hourInput));

    expect(spyAutocompleteInput).toHaveBeenCalled();
  });

  it("should pad millisecond input to 3 digits on blur (length 1)", async () => {
    const { componentInstance, millisecondInput } = await createTimeInputEnv(
      MILLISECOND_FORMAT
    );
    millisecondInput.value = "5";
    const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");

    componentInstance.handleBlur({
      target: millisecondInput,
    } as unknown as FocusEvent);

    expect(millisecondInput.value).toBe("005");
    expect(spySetInputValue).toHaveBeenCalledWith(millisecondInput);
  });

  it("should pad millisecond input to 3 digits on blur (length 2)", async () => {
    const { componentInstance, millisecondInput } = await createTimeInputEnv(
      MILLISECOND_FORMAT
    );
    millisecondInput.value = "12";
    const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");

    componentInstance.handleBlur({
      target: millisecondInput,
    } as unknown as FocusEvent);

    expect(millisecondInput.value).toBe("012");
    expect(spySetInputValue).toHaveBeenCalledWith(millisecondInput);
  });

  it("should set selectedTimeInfoEl with 13:30:45 as string if hour, minute and second is set", async () => {
    const { componentInstance } = await createTimeInputEnv();

    componentInstance.hour = "13";
    componentInstance.minute = "30";
    componentInstance.second = "45";
    componentInstance.invalidTimeText = "";

    const date = new Date();
    date.setHours(+componentInstance.hour);
    date.setMinutes(+componentInstance.minute);
    date.setSeconds(+componentInstance.second);

    componentInstance.selectedTime = date;

    componentInstance.handleTimeChange();

    expect(componentInstance.selectedTimeInfoEl.textContent).toBe(
      "Selected time: 13:30:45"
    );
  });

  it("should set selectedTimeInfoEl with 13:30:45.123 as string if hour, minute, second and millisecond is set", async () => {
    const { componentInstance } = await createTimeInputEnv(MILLISECOND_FORMAT);

    componentInstance.hour = "13";
    componentInstance.minute = "30";
    componentInstance.second = "45";
    componentInstance.millisecond = "123";
    componentInstance.invalidTimeText = "";

    const date = new Date();
    date.setHours(+componentInstance.hour);
    date.setMinutes(+componentInstance.minute);
    date.setSeconds(+componentInstance.second);
    date.setMilliseconds(+componentInstance.millisecond);

    componentInstance.selectedTime = date;

    componentInstance.handleTimeChange();

    expect(componentInstance.selectedTimeInfoEl.textContent).toBe(
      "Selected time: 13:30:45.123"
    );
  });

  it("should set selectedTimeInfoEl with 15:30:45 as string if hour, minute, second and period is set", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.timePeriod = "12";
    componentInstance.showAmPmToggle = true;
    componentInstance.hour = "03";
    componentInstance.minute = "30";
    componentInstance.second = "45";
    componentInstance.period = "PM";
    componentInstance.invalidTimeText = "";

    const date = new Date();
    date.setHours(+componentInstance.hour);
    date.setMinutes(+componentInstance.minute);
    date.setSeconds(+componentInstance.second);

    componentInstance.selectedTime = date;

    componentInstance.handleTimeChange();

    expect(componentInstance.selectedTimeInfoEl.textContent).toBe(
      "Selected time: 15:30:45"
    );
  });

  it("should set value to null if hour, minute or second is not set", async () => {
    const { componentInstance } = await createTimeInputEnv();

    componentInstance.hour = "";
    componentInstance.minute = "";
    componentInstance.second = "45";
    componentInstance.invalidTimeText = "";

    const date = new Date();
    date.setHours(+componentInstance.hour);
    date.setMinutes(+componentInstance.minute);
    date.setSeconds(+componentInstance.second);

    componentInstance.selectedTime = date;

    componentInstance.handleTimeChange();

    expect(componentInstance.value).toBe(null);
  });

  it("should set value to null if hour, minute, second or millisecond is not set", async () => {
    const { componentInstance } = await createTimeInputEnv(MILLISECOND_FORMAT);

    componentInstance.hour = "";
    componentInstance.minute = "";
    componentInstance.second = "45";
    componentInstance.millisecond = "";
    componentInstance.invalidTimeText = "";

    const date = new Date();
    date.setHours(+componentInstance.hour);
    date.setMinutes(+componentInstance.minute);
    date.setSeconds(+componentInstance.second);
    date.setMilliseconds(+componentInstance.millisecond);

    componentInstance.selectedTime = date;

    componentInstance.handleTimeChange();

    expect(componentInstance.value).toBe(null);
  });

  it("should set previousSelectedTime as selectedTime if not previously matching", async () => {
    const { componentInstance } = await createTimeInputEnv();

    componentInstance.hour = "13";
    componentInstance.minute = "30";
    componentInstance.second = "45";
    componentInstance.invalidTimeText = "";

    const date = new Date();
    date.setHours(+componentInstance.hour);
    date.setMinutes(+componentInstance.minute);
    date.setSeconds(+componentInstance.second);

    componentInstance.selectedTime = date;

    componentInstance.handleTimeChange();

    expect(componentInstance.previousSelectedTime).toBe(
      componentInstance.selectedTime
    );
  });

  describe("handlePaste", () => {
    const clipboardEvent = (value: string, input?: HTMLInputElement) => {
      return {
        clipboardData: {
          getData: () => value,
        },
        target: input,
        preventDefault: (): null => null,
      };
    };

    it("should set hour, minute and second input values from paste event with 13:30:45", async () => {
      const { componentInstance, hourInput, minuteInput, secondInput } =
        await createTimeInputEnv();

      componentInstance.handlePaste(clipboardEvent("13:30:45"));

      expect(hourInput.value).toBe("13");
      expect(minuteInput.value).toBe("30");
      expect(secondInput.value).toBe("45");
    });

    it("should call setInputValue if time valid", async () => {
      const { componentInstance } = await createTimeInputEnv();

      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");

      componentInstance.handlePaste(clipboardEvent(TIME_123456));

      expect(spySetInputValue).toBeCalled();
    });

    it("should update invalidText if invalid time is entered", async () => {
      const { componentInstance, hourInput } = await createTimeInputEnv();

      componentInstance.handlePaste(clipboardEvent("-1", hourInput));

      expect(componentInstance.invalidTimeText).toBe(invalidTimeText);
    });
  });

  describe("setValidationMessage", () => {
    it("should set invalidTimeText if time (hour) is not valid", async () => {
      const { componentInstance } = await createTimeInputEnv();

      componentInstance.hour = "32";
      componentInstance.minute = "1";
      componentInstance.second = "1";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidTimeText).toBe(invalidTimeText);
    });

    it("should set invalidTimeText if time (minute) is not valid", async () => {
      const { componentInstance } = await createTimeInputEnv();

      componentInstance.hour = "1";
      componentInstance.minute = "61";
      componentInstance.second = "1";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidTimeText).toBe(invalidTimeText);
    });

    it("should set invalidTimeText as empty string if time is not complete", async () => {
      const { componentInstance } = await createTimeInputEnv();

      componentInstance.hour = "";
      componentInstance.minute = "1";
      componentInstance.second = "1";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidTimeText).toBe("");
    });
  });

  it("should set a time in string format and call setValidationMessage", async () => {
    const { componentInstance } = await createTimeInputEnv();

    const spySetValidationMessage = jest.spyOn(
      componentInstance,
      "setValidationMessage"
    );

    componentInstance.setTime(TIME_000000);

    expect(componentInstance.hour).toMatch("00");

    expect(spySetValidationMessage).toHaveBeenCalled();
  });

  it("should set the Zulu ISOString into the correct time variables", async () => {
    const { componentInstance } = await createTimeInputEnv();

    componentInstance.setTime(ZULU_TIME);

    expect(componentInstance.hour).toMatch("12");
    expect(componentInstance.minute).toMatch("34");
    expect(componentInstance.second).toMatch("56");
  });

  it("should set inputs to an empty string if time is null", async () => {
    const { componentInstance } = await createTimeInputEnv();

    componentInstance.setTime(null);

    expect(componentInstance.hour).toBe("");
    expect(componentInstance.minute).toBe("");
    expect(componentInstance.second).toBe("");
  });

  it("should set inputs to an empty string if time is null but time was originally set", async () => {
    const { componentInstance } = await createTimeInputEnv();

    componentInstance.setTime(TIME_123456);

    expect(componentInstance.hour).toBe("12");
    expect(componentInstance.minute).toBe("34");
    expect(componentInstance.second).toBe("56");

    componentInstance.setTime(null);

    expect(componentInstance.hour).toBe("");
    expect(componentInstance.minute).toBe("");
    expect(componentInstance.second).toBe("");
  });

  it("should set hour to 00 if 0 has been entered as an input value", async () => {
    const { componentInstance, hourInput } = await createTimeInputEnv();

    hourInput.value = "0";

    componentInstance.autocompleteInput(hourInput);

    expect(hourInput.value).toBe("00");
  });

  it("should set minute to 00 if 0 has been entered as an input value", async () => {
    const { componentInstance, minuteInput } = await createTimeInputEnv();

    minuteInput.value = "0";

    componentInstance.autocompleteInput(minuteInput);

    expect(minuteInput.value).toBe("00");
  });

  it("should set second to 00 if 0 has been entered as an input value", async () => {
    const { componentInstance, secondInput } = await createTimeInputEnv();

    secondInput.value = "0";

    componentInstance.autocompleteInput(secondInput);

    expect(secondInput.value).toBe("00");
  });

  it("should set millisecond to 000 if 0 has been entered as an input value", async () => {
    const { componentInstance, millisecondInput } = await createTimeInputEnv();

    millisecondInput.value = "0";

    componentInstance.autocompleteInput(millisecondInput);

    expect(millisecondInput.value).toBe("000");
  });

  it("should call the setTime, setValidationMessage & handleTimeChange event handlers when handleFormReset is called", async () => {
    const { componentInstance } = await createTimeInputEnv();

    const spySetTime = jest.spyOn(componentInstance, "setTime");
    const spySetValidationMessage = jest.spyOn(
      componentInstance,
      "setValidationMessage"
    );
    const spyHandleTimeChange = jest.spyOn(
      componentInstance,
      "handleTimeChange"
    );

    componentInstance.handleFormReset();

    expect(spySetTime).toHaveBeenCalled();
    expect(spySetValidationMessage).toHaveBeenCalled();
    expect(spyHandleTimeChange).toHaveBeenCalled();
  });

  it("should return null for convertToTime if either the hour, minute or second strings are empty", async () => {
    const { componentInstance } = await createTimeInputEnv();
    expect(componentInstance.convertToTime("", "03", "09")).toBeNull();
    expect(componentInstance.convertToTime("1970", "", "09")).toBeNull();
    expect(componentInstance.convertToTime("2000", "12", "")).toBeNull();
  });

  it("should clear the inputs", async () => {
    const { componentInstance } = await createTimeInputEnv();

    componentInstance.hour = "13";
    componentInstance.minute = "30";
    componentInstance.second = "45";

    componentInstance.handleClear();

    expect(componentInstance.hour).toMatch("");
    expect(componentInstance.minute).toMatch("");
    expect(componentInstance.second).toMatch("");
  });

  it("should clear the inputs if time format is HH:MM:SS.SSS", async () => {
    const { componentInstance } = await createTimeInputEnv(MILLISECOND_FORMAT);

    componentInstance.hour = "13";
    componentInstance.minute = "30";
    componentInstance.second = "45";
    componentInstance.millisecond = "123";

    componentInstance.handleClear();

    expect(componentInstance.hour).toMatch("");
    expect(componentInstance.minute).toMatch("");
    expect(componentInstance.second).toMatch("");
    expect(componentInstance.millisecond).toMatch("");
  });

  it("should set helperText to default value if not set", async () => {
    const { componentInstance } = await createTimeInputEnv();

    componentInstance.helperText = "";

    componentInstance.componentWillLoad();

    expect(componentInstance.helperText).toBe(
      "Use format " + componentInstance.timeFormat
    );
  });

  it("should call setTime when value is set", async () => {
    const { componentInstance } = await createTimeInputEnv();

    const spySetTime = jest.spyOn(componentInstance, "setTime");

    componentInstance.value = TIME_123456;

    componentInstance.componentWillLoad();

    expect(spySetTime).toBeCalled();
  });

  it("should set aria-invalid on hour input if validHour is invalid", async () => {
    const { componentInstance, hourInput } = await createTimeInputEnv();

    const validHour = false;
    const validMinute = true;
    const validTime = true;
    const disabledTime = false;

    componentInstance.setAriaInvalid(
      validHour,
      validMinute,
      validTime,
      disabledTime
    );

    expect(hourInput).toHaveAttribute(ARIA_INVALID);
    expect(hourInput.getAttribute(ARIA_INVALID)).toBe("true");
  });

  it("should set aria-invalid on minute input if validMinute is invalid", async () => {
    const { componentInstance, minuteInput } = await createTimeInputEnv();

    const validHour = true;
    const validMinute = false;
    const validTime = true;
    const disabledTime = false;

    componentInstance.setAriaInvalid(
      validHour,
      validMinute,
      validTime,
      disabledTime
    );

    expect(minuteInput).toHaveAttribute(ARIA_INVALID);
    expect(minuteInput.getAttribute(ARIA_INVALID)).toBe("true");
  });

  describe("getTime()", () => {
    it("should return null from getTime if no value is entered", async () => {
      const { componentInstance } = await createTimeInputEnv();

      componentInstance.selectedTime = null;

      const timeValue = await componentInstance.getTime();

      expect(timeValue).toBeNull();
    });

    it("should return partial time due to time object if incomplete time", async () => {
      const { componentInstance } = await createTimeInputEnv();

      const time = new Date("37:01");

      componentInstance.selectedTime = time;

      const timeValue = await componentInstance.getTime();

      expect(timeValue).toBe(time);
    });

    it("should return invalid time if invalid time", async () => {
      const { componentInstance } = await createTimeInputEnv();

      const time = new Date("37:99:99");

      componentInstance.selectedTime = time;

      const timeValue = await componentInstance.getTime();

      expect(timeValue).toBeInstanceOf(Date);
      expect(timeValue.toString()).toBe("Invalid Date");
    });

    it("should return valid time", async () => {
      const { componentInstance } = await createTimeInputEnv();

      const time = new Date("13:30:45");

      componentInstance.selectedTime = time;

      const timeValue = await componentInstance.getTime();

      expect(timeValue).toBe(time);
    });
  });

  it("should set CSS class and paste value into input when setInputPasteValue is called", async () => {
    const { componentInstance, hourInput } = await createTimeInputEnv();
    const VALUE = "11";

    componentInstance.setInputPasteValue(hourInput, VALUE);

    expect(hourInput.value).toBe(VALUE);
    expect(hourInput).toHaveClass("fit-to-value");
  });

  it("should return isPastedStringTimeValid as true if 13:30:45 is value", async () => {
    const { componentInstance } = await createTimeInputEnv();

    expect(componentInstance.isPastedStringTimeValid("13:30:45")).toBeTruthy();
  });

  it("should return isPastedStringTimeValid as true if 13:30 is value and time format is HH:MM", async () => {
    const { componentInstance } = await createTimeInputEnv();

    componentInstance.timeFormat = "HH:MM";

    expect(componentInstance.isPastedStringTimeValid("13:30")).toBeTruthy();
  });

  it("should return isPastedStringTimeValid as true if 13:30:45.123 is value and time format is HH:MM:SS.SSS", async () => {
    const { componentInstance } = await createTimeInputEnv();

    componentInstance.timeFormat = MILLISECOND_FORMAT;

    expect(
      componentInstance.isPastedStringTimeValid("13:30:45.123")
    ).toBeTruthy();
  });

  it("should return isPastedStringTimeValid as true if 13:30:45.123Z is value and time format is HH:MM:SS.SSS", async () => {
    const { componentInstance } = await createTimeInputEnv();

    componentInstance.timeFormat = MILLISECOND_FORMAT;

    expect(
      componentInstance.isPastedStringTimeValid("13:30:45.123Z")
    ).toBeTruthy();
  });

  it("should parse time from string and return a valid Date object", async () => {
    const { componentInstance } = await createTimeInputEnv();

    const time = componentInstance.parseTime("13:30:45");

    expect(time).toBeInstanceOf(Date);
    expect(time.getHours()).toBe(13);
    expect(time.getMinutes()).toBe(30);
    expect(time.getSeconds()).toBe(45);
  });

  it("should parse time from string and return a valid Date object with milliseconds", async () => {
    const { componentInstance } = await createTimeInputEnv(MILLISECOND_FORMAT);

    const time = componentInstance.parseTime("13:30:45.123");

    expect(time).toBeInstanceOf(Date);
    expect(time.getHours()).toBe(13);
    expect(time.getMinutes()).toBe(30);
    expect(time.getSeconds()).toBe(45);
    expect(time.getMilliseconds()).toBe(123);
  });

  it("should parse time from Date and return the same Date object", async () => {
    const { componentInstance } = await createTimeInputEnv();

    const date = new Date(2025, 6, 15, 13, 30, 45);

    const time = componentInstance.parseTime(date);

    expect(time).toBeInstanceOf(Date);
    expect(time).toEqual(date);
  });

  it("should call setInputValue and moveToNextInput when minute input value is two digits", async () => {
    const { minuteInput, componentInstance } = await createTimeInputEnv();

    const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");
    const spyMoveToNextInput = jest.spyOn(componentInstance, "moveToNextInput");

    minuteInput.value = "12";
    const inputEvent = new Event("input");
    Object.defineProperty(inputEvent, "target", { value: minuteInput });

    componentInstance.handleInput(inputEvent);

    expect(spySetInputValue).toHaveBeenCalledWith(minuteInput);
    expect(spyMoveToNextInput).toHaveBeenCalledWith(minuteInput);
  });

  it("should format time as HH:MM when isHHMMFormat is true, HH:MM:SS.SSS when isSSSFormat is true, and HH:MM:SS otherwise", async () => {
    const { componentInstance } = await createTimeInputEnv();
    const date = new Date(2025, 6, 15, 9, 8, 7, 123);

    componentInstance.timeFormat = "HH:MM";
    expect(componentInstance.formatTime(date)).toMatch(/^\d{2}:\d{2}$/);

    componentInstance.timeFormat = MILLISECOND_FORMAT;
    expect(componentInstance.formatTime(date)).toMatch(
      /^\d{2}:\d{2}:\d{2}\.\d{3}$/
    );

    componentInstance.timeFormat = "HH:MM:SS";
    expect(componentInstance.formatTime(date)).toMatch(/^\d{2}:\d{2}:\d{2}$/);
  });

  it("should call emitIcTimeChange(null) in watchInputHandler when conditions are met", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.emitTimePartChange = true;
    componentInstance.externalSetTime = false;
    componentInstance.clearInput = false;
    componentInstance.hour = "";
    componentInstance.minute = "";
    componentInstance.second = "";
    componentInstance.selectedTime = null;
    const spyEmitIcTimeChange = jest.spyOn(
      componentInstance,
      "emitIcTimeChange"
    );
    componentInstance.watchInputHandler();
    expect(spyEmitIcTimeChange).toHaveBeenCalledWith(null);
  });

  it("should call setTime and emitIcTimeChange in triggerIcTimeChange, and reset externalSetTime", async () => {
    const { componentInstance } = await createTimeInputEnv();
    const date = new Date(2025, 6, 15, 12, 34, 56);
    const spySetTime = jest.spyOn(componentInstance, "setTime");
    const spyEmitIcTimeChange = jest.spyOn(
      componentInstance,
      "emitIcTimeChange"
    );
    componentInstance.externalSetTime = false;
    await componentInstance.triggerIcTimeChange(date);
    expect(spySetTime).toHaveBeenCalledWith(date);
    expect(spyEmitIcTimeChange).toHaveBeenCalledWith(date);
    expect(componentInstance.externalSetTime).toBe(false);
  });

  it("should call setTime and emitIcTimeChange in triggerIcTimeChange, and reset externalSetTime with milliseconds", async () => {
    const { componentInstance } = await createTimeInputEnv(MILLISECOND_FORMAT);
    const date = new Date(2025, 6, 15, 12, 34, 56, 789);
    const spySetTime = jest.spyOn(componentInstance, "setTime");
    const spyEmitIcTimeChange = jest.spyOn(
      componentInstance,
      "emitIcTimeChange"
    );
    componentInstance.externalSetTime = false;
    await componentInstance.triggerIcTimeChange(date);
    expect(spySetTime).toHaveBeenCalledWith(date);
    expect(spyEmitIcTimeChange).toHaveBeenCalledWith(date);
    expect(componentInstance.externalSetTime).toBe(false);
  });

  it("should call setTime and emitIcTimeChange in triggerIcTimeChange, and reset externalSetTime with just hour and minute", async () => {
    const { componentInstance } = await createTimeInputEnv("HH:MM");
    const date = new Date(2025, 6, 15, 12, 34);
    const spySetTime = jest.spyOn(componentInstance, "setTime");
    const spyEmitIcTimeChange = jest.spyOn(
      componentInstance,
      "emitIcTimeChange"
    );
    componentInstance.externalSetTime = false;
    await componentInstance.triggerIcTimeChange(date);
    expect(spySetTime).toHaveBeenCalledWith(date);
    expect(spyEmitIcTimeChange).toHaveBeenCalledWith(date);
    expect(componentInstance.externalSetTime).toBe(false);
  });

  it("should call setTime and emitIcTimeChange in triggerIcTimeChange, and reset externalSetTime with time period", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.timePeriod = "12";
    componentInstance.showAmPmToggle = true;
    const date = new Date(2025, 6, 15, 12, 34, 56);
    const spySetTime = jest.spyOn(componentInstance, "setTime");
    const spyEmitIcTimeChange = jest.spyOn(
      componentInstance,
      "emitIcTimeChange"
    );
    componentInstance.externalSetTime = false;
    await componentInstance.triggerIcTimeChange(date);
    expect(spySetTime).toHaveBeenCalledWith(date);
    expect(spyEmitIcTimeChange).toHaveBeenCalledWith(date);
    expect(componentInstance.externalSetTime).toBe(false);
  });

  it("should set isValidTime to false and set validation message when selected time is disabled", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.disableTimes = [{ start: "12:00:00", end: "13:00:00" }];
    componentInstance.hour = "12";
    componentInstance.minute = "30";
    componentInstance.second = "00";

    componentInstance.setValidationMessage();
    expect(componentInstance.isValidTime).toBe(false);
    expect(componentInstance.invalidTimeText).toBe(invalidTimeText);
  });

  it("should set isValidTime to false and set validation message when selected time is before min time", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.min = "14:00:00";
    componentInstance.hour = "12";
    componentInstance.minute = "30";
    componentInstance.second = "00";

    componentInstance.setValidationMessage();
    expect(componentInstance.isValidTime).toBe(false);
    expect(componentInstance.invalidTimeText).toBe(
      "Please enter a time after 14:00:00."
    );
  });

  it("should set isValidTime to false and set validation message when selected time is before min time and time format is HH:MM:SS.SSS", async () => {
    const { componentInstance } = await createTimeInputEnv(MILLISECOND_FORMAT);
    componentInstance.min = "14:00:00";
    componentInstance.hour = "12";
    componentInstance.minute = "30";
    componentInstance.second = "00";
    componentInstance.millisecond = "123";

    componentInstance.setValidationMessage();
    expect(componentInstance.isValidTime).toBe(false);
    expect(componentInstance.invalidTimeText).toBe(
      "Please enter a time after 14:00:00.000."
    );
  });

  it("should set isValidTime to false and set validation message when selected time is before min time and period is set", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.timePeriod = "12";
    componentInstance.showAmPmToggle = true;
    componentInstance.min = "14:00:00";
    componentInstance.hour = "01";
    componentInstance.minute = "30";
    componentInstance.second = "00";
    componentInstance.period = "PM";

    componentInstance.setValidationMessage();
    expect(componentInstance.isValidTime).toBe(false);
    expect(componentInstance.invalidTimeText).toBe(
      "Please enter a time after 14:00:00."
    );
  });

  it("should set isValidTime to false and set validation message when selected time is after max time", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.max = "14:00:00";
    componentInstance.hour = "15";
    componentInstance.minute = "30";
    componentInstance.second = "00";

    componentInstance.setValidationMessage();
    expect(componentInstance.isValidTime).toBe(false);
    expect(componentInstance.invalidTimeText).toBe(
      "Please enter a time before 14:00:00."
    );
  });

  it("should set isValidTime to false and set validation message when selected time is after max time and time format is HH:MM:SS.SSS", async () => {
    const { componentInstance } = await createTimeInputEnv(MILLISECOND_FORMAT);
    componentInstance.max = "14:00:00";
    componentInstance.hour = "15";
    componentInstance.minute = "30";
    componentInstance.second = "00";
    componentInstance.millisecond = "123";

    componentInstance.setValidationMessage();
    expect(componentInstance.isValidTime).toBe(false);
    expect(componentInstance.invalidTimeText).toBe(
      "Please enter a time before 14:00:00.000."
    );
  });

  it("should set isValidTime to false and set validation message when selected time is after max time and period is set", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.timePeriod = "12";
    componentInstance.showAmPmToggle = true;
    componentInstance.max = "14:00:00";
    componentInstance.hour = "03";
    componentInstance.minute = "30";
    componentInstance.second = "00";
    componentInstance.period = "PM";

    componentInstance.setValidationMessage();
    expect(componentInstance.isValidTime).toBe(false);
    expect(componentInstance.invalidTimeText).toBe(
      "Please enter a time before 14:00:00."
    );
  });

  it("should match disabled time with 12-hour input and AM/PM toggle", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.timePeriod = "12";
    componentInstance.showAmPmToggle = true;
    componentInstance.hour = "03";
    componentInstance.minute = "30";
    componentInstance.second = "45";
    componentInstance.period = "PM";
    componentInstance.disabledTimes = ["15:30:45"];

    const date = new Date();
    date.setHours(15);
    date.setMinutes(30);
    date.setSeconds(45);
    componentInstance.selectedTime = date;

    componentInstance.setValidationMessage();

    expect(componentInstance.isValidTime).toBe(false);
    expect(componentInstance.invalidTimeText).toBe(
      componentInstance.invalidTimeMessage
    );
  });

  it("should call setInputValue, notifyScreenReader, and moveToNextInput when input value is 1 digit between 6 and 9", async () => {
    const { componentInstance, minuteInput } = await createTimeInputEnv();
    minuteInput.value = "7";
    const inputEvent = new Event("input");
    Object.defineProperty(inputEvent, "target", { value: minuteInput });

    const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");
    const spyNotifyScreenReader = jest.spyOn(
      componentInstance,
      "notifyScreenReader"
    );
    const spyMoveToNextInput = jest.spyOn(componentInstance, "moveToNextInput");
    componentInstance.handleInput(inputEvent);
    expect(spySetInputValue).toHaveBeenCalledWith(minuteInput);
    expect(spyNotifyScreenReader).toHaveBeenCalledWith(minuteInput);
    expect(spyMoveToNextInput).toHaveBeenCalledWith(minuteInput);
  });

  it("should call setInputValue, setPreventInput, and moveToNextInput when preventAutoFormatting is true, input value is 2 digits, and not a keyboard event", async () => {
    const { componentInstance, minuteInput } = await createTimeInputEnv();
    minuteInput.value = "12";
    componentInstance.preventAutoFormatting = true;

    jest.spyOn(componentInstance, "isKeyboardOrEvent").mockReturnValue(false);
    const inputEvent = new Event("input");
    Object.defineProperty(inputEvent, "target", { value: minuteInput });
    const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");
    const spySetPreventInput = jest.spyOn(componentInstance, "setPreventInput");
    const spyMoveToNextInput = jest.spyOn(componentInstance, "moveToNextInput");
    componentInstance.handleInput(inputEvent);
    expect(spySetInputValue).toHaveBeenCalledWith(minuteInput);
    expect(spySetPreventInput).toHaveBeenCalledWith(minuteInput, true);
    expect(spyMoveToNextInput).toHaveBeenCalledWith(minuteInput);
  });

  it("should set removeLabelledBy to false and emit icBlur with selectedTime on handleHostBlur", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.selectedTime = new Date("2025-07-15T12:00:00Z");
    const spyEmit = jest.spyOn(componentInstance.icBlur, "emit");
    componentInstance.removeLabelledBy = true;
    componentInstance.handleHostBlur();
    expect(componentInstance.removeLabelledBy).toBe(false);
    expect(spyEmit).toHaveBeenCalledWith({
      value: componentInstance.selectedTime,
    });
  });

  it("should set removeLabelledBy correctly and emit icFocus with selectedTime on handleHostFocus", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.selectedTime = new Date("2025-07-15T12:00:00Z");
    const spyEmit = jest.spyOn(componentInstance.icFocus, "emit");

    componentInstance.el.shadowRoot = {
      activeElement: { id: "hour-input" },
    } as any;
    componentInstance.removeLabelledBy = true;
    componentInstance.handleHostFocus();
    expect(componentInstance.removeLabelledBy).toBe(false);
    expect(spyEmit).toHaveBeenCalledWith({
      value: componentInstance.selectedTime,
    });

    componentInstance.el.shadowRoot = {
      activeElement: { id: "other-input" },
    } as any;
    componentInstance.removeLabelledBy = false;
    componentInstance.handleHostFocus();
    expect(componentInstance.removeLabelledBy).toBe(true);
    expect(spyEmit).toHaveBeenCalledWith({
      value: componentInstance.selectedTime,
    });
  });

  it("should set removeLabelledBy and clearButtonFocused to true on handleClearFocus", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.removeLabelledBy = false;
    componentInstance.clearButtonFocused = false;
    componentInstance.handleClearFocus();
    expect(componentInstance.removeLabelledBy).toBe(true);
    expect(componentInstance.clearButtonFocused).toBe(true);
  });

  it("should set clearButtonFocused to false and removeLabelledBy to false if relatedTarget is clock-button on handleClearBlur", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.clearButtonFocused = true;
    componentInstance.removeLabelledBy = true;
    const ev = {
      relatedTarget: { id: "clock-button" },
    } as unknown as FocusEvent;
    componentInstance.handleClearBlur(ev);
    expect(componentInstance.clearButtonFocused).toBe(false);
    expect(componentInstance.removeLabelledBy).toBe(false);
  });

  it("should set clearButtonFocused to false and removeLabelledBy to false if relatedTarget id matches /(hour|second)-input$/ on handleClearBlur", async () => {
    const { componentInstance } = await createTimeInputEnv();
    componentInstance.clearButtonFocused = true;
    componentInstance.removeLabelledBy = true;
    const ev = { relatedTarget: { id: "hour-input" } } as unknown as FocusEvent;
    componentInstance.handleClearBlur(ev);
    expect(componentInstance.clearButtonFocused).toBe(false);
    expect(componentInstance.removeLabelledBy).toBe(false);
  });

  it("should update period and set active toggle", async () => {
    const page = await newSpecPage({
      components: [TimeInput],
      html: `<ic-time-input show-am-pm-toggle time-period="12"></ic-time-input>`,
    });

    const instance = page.rootInstance as any;

    const selectedOption = { label: "PM" };
    instance.periodToggleEl = { setActiveToggle: jest.fn() };

    instance.handleAMPM(selectedOption);

    expect(instance.period).toBe("PM");
    expect(instance.periodToggleEl.setActiveToggle).toHaveBeenCalledWith(
      selectedOption
    );
  });
});
