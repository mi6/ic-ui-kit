import { newSpecPage } from "@stencil/core/testing";
import { DateInput } from "../../ic-date-input";
import {
  handleEvent,
  createDateInputEnv,
  keyboardEvent,
} from "../helpers/ic-date-input";
import { IcButton } from "@ukic/web-components/dist/components/ic-button";
import { IcInputLabel } from "@ukic/web-components/dist/components/ic-input-label";

const DATE_1970 = "01/01/1970";
const DATE_2000 = "01/01/2000";
const ZULU_TIME_2000 = new Date("28 November 2001").toISOString();
const HYPHEN = "-";

const ARIA_INVALID = "aria-invalid";

describe("ic-date-input component", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [DateInput, IcInputLabel],
      html: `<ic-date-input label="Test label"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as required", async () => {
    const page = await newSpecPage({
      components: [DateInput, IcInputLabel],
      html: `<ic-date-input label="Test label" required></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as disabled", async () => {
    const page = await newSpecPage({
      components: [DateInput, IcInputLabel],
      html: `<ic-date-input label="Test label" disabled></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render small", async () => {
    const page = await newSpecPage({
      components: [DateInput, IcInputLabel],
      html: `<ic-date-input label="Test label" size="small" show-calendar-button="true"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render large", async () => {
    const page = await newSpecPage({
      components: [DateInput, IcInputLabel],
      html: `<ic-date-input label="Test label" size="large" show-calendar-button="true"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with custom helper text", async () => {
    const page = await newSpecPage({
      components: [DateInput, IcInputLabel],
      html: `<ic-date-input label="Test label" helper-text="Test helper text"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render correctly with MM/DD/YYYY format", async () => {
    const page = await newSpecPage({
      components: [DateInput, IcInputLabel],
      html: `<ic-date-input label="Test label" date-format="MM/DD/YYYY"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render correctly with YYYY/MM/DD format", async () => {
    const page = await newSpecPage({
      components: [DateInput, IcInputLabel],
      html: `<ic-date-input label="Test label" date-format="YYY/MM/DD"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with custom validation status and text", async () => {
    const page = await newSpecPage({
      components: [DateInput, IcInputLabel],
      html: `<ic-date-input label="Test label" validation-status="error" validation-text="Test error text"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with open calendar button", async () => {
    const page = await newSpecPage({
      components: [DateInput, IcInputLabel, IcButton],
      html: `<ic-date-input label="Test label" value="21/01/2001" show-calendar-button="true"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled, with calendar button", async () => {
    const page = await newSpecPage({
      components: [DateInput, IcInputLabel, IcButton],
      html: `<ic-date-input label="Test label" value="21/01/2001" show-calendar-button="true" disabled></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  describe("date format conversion", () => {
    it("should handle single digit day and month", async () => {
      const page = await newSpecPage({
        components: [DateInput, IcInputLabel],
        html: `<ic-date-input label="Test label" value="1/1/2001"></ic-date-input>`,
      });

      expect(page.root).toMatchSnapshot();
    });

    it("should handle US format value - DD/MM/YYYY date format", async () => {
      const page = await newSpecPage({
        components: [DateInput, IcInputLabel],
        html: `<ic-date-input label="Test label" value="07/26/2001"></ic-date-input>`,
      });

      expect(page.root).toMatchSnapshot();
    });

    it("should handle US format value - MM/DD/YYYY date format", async () => {
      const page = await newSpecPage({
        components: [DateInput, IcInputLabel],
        html: `<ic-date-input label="Test label" value="07/26/2001" date-format="MM/DD/YYYY"></ic-date-input>`,
      });

      expect(page.root).toMatchSnapshot();
    });

    it("should handle US format value - YYYY/MM/DD date format", async () => {
      const page = await newSpecPage({
        components: [DateInput, IcInputLabel],
        html: `<ic-date-input label="Test label" value="07/26/2001" date-format="YYYY/MM/DD"></ic-date-input>`,
      });

      expect(page.root).toMatchSnapshot();
    });

    it("should handle ambiguous value - DD/MM/YYYY date format", async () => {
      const page = await newSpecPage({
        components: [DateInput, IcInputLabel],
        html: `<ic-date-input label="Test label" value="07/10/2001" date-format="DD/MM/YYYY"></ic-date-input>`,
      });

      expect(page.root).toMatchSnapshot();
    });

    it("should handle ambiguous value - MM/DD/YYYY date format", async () => {
      const page = await newSpecPage({
        components: [DateInput, IcInputLabel],
        html: `<ic-date-input label="Test label" value="07/10/2001" date-format="MM/DD/YYYY"></ic-date-input>`,
      });

      expect(page.root).toMatchSnapshot();
    });

    it("should handle ambiguous value - YYYY/MM/DD date format", async () => {
      const page = await newSpecPage({
        components: [DateInput, IcInputLabel],
        html: `<ic-date-input label="Test label" value="07/10/2001" date-format="YYYY/MM/DD"></ic-date-input>`,
      });

      expect(page.root).toMatchSnapshot();
    });
  });

  describe("handleInput", () => {
    it("should call moveToNextInput, setinputValue and setPreventInput when day set to 4", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");
      const spySetPreventInput = jest.spyOn(
        componentInstance,
        "setPreventInput"
      );

      componentInstance.preventAutoFormatting = false;

      dayInput.value = "4";
      componentInstance.handleInput(handleEvent(dayInput));

      expect(spyMoveToInput).toHaveBeenCalled();
      expect(spySetInputValue).toHaveBeenCalled();
      expect(spySetPreventInput).toHaveBeenCalled();
    });

    it("should call setInputValue, setPreventInput and moveToNextInput when preventFormatting is set to true and value has 2 characters", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");
      const spySetPreventInput = jest.spyOn(
        componentInstance,
        "setPreventInput"
      );

      componentInstance.preventAutoFormatting = true;

      dayInput.value = "11";
      componentInstance.handleInput(handleEvent(dayInput));

      expect(spyMoveToInput).toHaveBeenCalled();
      expect(spySetInputValue).toHaveBeenCalled();
      expect(spySetPreventInput).toHaveBeenCalled();
    });

    it("should call setInputValue when formatting is true and event is Arrow key", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");

      componentInstance.preventAutoFormatting = true;

      dayInput.value = "1"; // Line 249
      componentInstance.handleInput(handleEvent(dayInput));

      expect(spyMoveToInput).not.toHaveBeenCalled();
      expect(spySetInputValue).toHaveBeenCalled();
    });

    it("should not call moveToNextInput and setinputValue when day set to 1", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");
      const spySetPreventInput = jest.spyOn(
        componentInstance,
        "setPreventInput"
      );

      componentInstance.preventAutoFormatting = false;

      dayInput.value = "1";
      componentInstance.handleInput(handleEvent(dayInput));

      expect(spyMoveToInput).not.toHaveBeenCalled();
      expect(spySetInputValue).not.toHaveBeenCalled();
      expect(spySetPreventInput).toHaveBeenCalled();
    });

    it("should call moveToNextInput and setinputValue when month set to 2", async () => {
      const { monthInput, componentInstance } = await createDateInputEnv();

      const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");

      componentInstance.preventAutoFormatting = false;

      monthInput.value = "2";
      componentInstance.handleInput(handleEvent(monthInput));

      expect(spyMoveToInput).toHaveBeenCalled();
      expect(spySetInputValue).toHaveBeenCalled();
    });

    it("should not call moveToNextInput and setinputValue when month set to 1", async () => {
      const { monthInput, componentInstance } = await createDateInputEnv();

      const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");

      componentInstance.preventAutoFormatting = false;

      monthInput.value = "1";
      componentInstance.handleInput(handleEvent(monthInput));

      expect(spyMoveToInput).not.toHaveBeenCalled();
      expect(spySetInputValue).not.toHaveBeenCalled();
    });

    it("should set day input value to 01 if 00 is day value", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");
      const spySetPreventInput = jest.spyOn(
        componentInstance,
        "setPreventInput"
      );

      componentInstance.preventAutoFormatting = false;

      dayInput.value = "00";
      componentInstance.handleInput(handleEvent(dayInput));

      expect(dayInput.value).toBe("01");
      expect(spyMoveToInput).toHaveBeenCalled();
      expect(spySetInputValue).toHaveBeenCalled();
      expect(spySetPreventInput).toHaveBeenCalled();
    });

    it("should set month input value to 01 if 00 is month value", async () => {
      const { monthInput, componentInstance } = await createDateInputEnv();

      const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");
      const spySetPreventInput = jest.spyOn(
        componentInstance,
        "setPreventInput"
      );

      componentInstance.preventAutoFormatting = false;

      monthInput.value = "00";
      componentInstance.handleInput(handleEvent(monthInput));

      expect(monthInput.value).toBe("01");
      expect(spyMoveToInput).toHaveBeenCalled();
      expect(spySetInputValue).toHaveBeenCalled();
      expect(spySetPreventInput).toHaveBeenCalled();
    });

    it("should call moveToNextInput, setinputValue and setPreventInput when year set to 2001", async () => {
      const { yearInput, componentInstance } = await createDateInputEnv();

      const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");
      const spySetPreventInput = jest.spyOn(
        componentInstance,
        "setPreventInput"
      );

      componentInstance.preventAutoFormatting = false;

      yearInput.value = "2001";
      componentInstance.handleInput(handleEvent(yearInput));

      expect(spyMoveToInput).toHaveBeenCalled();
      expect(spySetInputValue).toHaveBeenCalled();
      expect(spySetPreventInput).toHaveBeenCalled();
    });

    it("should not call moveToNextInput when year set to 20", async () => {
      const { yearInput, componentInstance } = await createDateInputEnv();

      const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");

      componentInstance.preventAutoFormatting = false;

      yearInput.value = "20";
      componentInstance.handleInput(handleEvent(yearInput));

      expect(spyMoveToInput).not.toHaveBeenCalled();
    });

    it("should not have fit-to-value class when empty string value is set for day input", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      dayInput.value = "";
      componentInstance.handleInput(handleEvent(dayInput));

      expect(dayInput.className.includes("fit-to-value")).toBeFalsy();
    });
  });

  describe("handleKeyDown", () => {
    it("should call moveToNextInput when a hyphen, dash or dot are inputted", async () => {
      const { componentInstance, component } = await createDateInputEnv();
      const spyMoveToInput = jest.spyOn(componentInstance, "moveToNextInput");
      const spyPreventInput = jest.spyOn(componentInstance, "preventInput");
      // const spyNotifyScreenReader = jest.spyOn(
      //   componentInstance,
      //   "notifyScreenReader"
      // );
      const event = new KeyboardEvent("keydown", { key: "/" });
      component?.dispatchEvent(event);

      componentInstance.handleKeyDown(event, false);

      expect(spyMoveToInput).toHaveBeenCalled();
      expect(spyPreventInput).toHaveBeenCalled();
      // expect(spyNotifyScreenReader).toHaveBeenCalled();

      expect(componentInstance.isDateSetFromKeyboardEvent).toBe(true);
    });

    it("should call handleLeftRightArrowKeyPress when ArrowLeft is pressed", async () => {
      const { componentInstance } = await createDateInputEnv();
      const spyHandleLeftRightArrowKeyPress = jest.spyOn(
        componentInstance,
        "handleLeftRightArrowKeyPress"
      );

      const keyboardEvent = {
        preventDefault: (): null => null,
        key: "ArrowLeft",
      };

      componentInstance.handleKeyDown(keyboardEvent);

      expect(spyHandleLeftRightArrowKeyPress).toHaveBeenCalled();
    });

    it("should set preventAutoFormatting as true and call handleUpDownArrowKeyPress when the ArrowUp key is pressed", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const keyboardEvent = {
        key: "ArrowUp",
        preventDefault: (): null => null,
        target: dayInput,
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
      expect(componentInstance.isDateSetFromKeyboardEvent).toBe(true);
    });

    it("should set preventAutoFormatting as true and call handleUpDownArrowKeyPress when the ArrowDown key is pressed", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      const keyboardEvent = {
        key: "ArrowDown",
        preventDefault: (): null => null,
        target: dayInput,
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
      expect(componentInstance.isDateSetFromKeyboardEvent).toBe(true);
    });
  });

  describe("handleBlur", () => {
    it("should call autocompleteInput method", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      const spyAutocompleteInput = jest.spyOn(
        componentInstance,
        "autocompleteInput"
      );

      componentInstance.handleBlur(handleEvent(dayInput));

      expect(spyAutocompleteInput).toHaveBeenCalled();
    });
  });

  describe("handleLeftRightArrowKeyPress", () => {
    it("should call moveToNextInput if ArrowRight is pressed", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      const spyMoveToNextInput = jest.spyOn(
        componentInstance,
        "moveToNextInput"
      );

      componentInstance.handleLeftRightArrowKeyPress(dayInput, "arrowright");

      expect(spyMoveToNextInput).toBeCalled();
    });

    it("should call moveToPreviousInput if ArrowLeft is pressed", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      const spyMoveToPreviousInput = jest.spyOn(
        componentInstance,
        "moveToPreviousInput"
      );

      componentInstance.handleLeftRightArrowKeyPress(dayInput, "ArrowLeft");

      expect(spyMoveToPreviousInput).toBeCalled();
    });
  });

  describe("handleUpDownArrowKeyPress", () => {
    it("should set day value to 1 if day value is 31 and ArrowUp is pressed", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      dayInput.value = "31";

      componentInstance.handleUpDownArrowKeyPress(
        dayInput,
        keyboardEvent("ArrowUp")
      );

      expect(dayInput.value).toBe("01");
    });
    it("should set day value to 13 if day value is 12 and ArrowUp is pressed", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      dayInput.value = "12";

      componentInstance.handleUpDownArrowKeyPress(
        dayInput,
        keyboardEvent("ArrowUp")
      );

      expect(dayInput.value).toBe("13");
    });
    it("should set month value to 1 if month value is 12 and ArrowUp is pressed", async () => {
      const { monthInput, componentInstance } = await createDateInputEnv();

      monthInput.value = "12";

      componentInstance.handleUpDownArrowKeyPress(
        monthInput,
        keyboardEvent("ArrowUp")
      );

      expect(monthInput.value).toBe("01");
    });
    it("should set month value to 11 if month value is 10 and ArrowUp is pressed", async () => {
      const { monthInput, componentInstance } = await createDateInputEnv();

      monthInput.value = "10";

      componentInstance.handleUpDownArrowKeyPress(
        monthInput,
        keyboardEvent("ArrowUp")
      );

      expect(monthInput.value).toBe("11");
    });
    it("should set year value to 0 if year value is 9999 and ArrowUp is pressed", async () => {
      const { yearInput, componentInstance } = await createDateInputEnv();

      yearInput.value = "9999";

      componentInstance.handleUpDownArrowKeyPress(
        yearInput,
        keyboardEvent("ArrowUp")
      );

      expect(yearInput.value).toBe("00");
    });
    it("should set day value to 31 if day value is 1 and ArrowDown is pressed", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      dayInput.value = "1";

      componentInstance.handleUpDownArrowKeyPress(
        dayInput,
        keyboardEvent("ArrowDown")
      );

      expect(dayInput.value).toBe("31");
    });
    it("should set day value to 10 if day value is 11 and ArrowDown is pressed", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      dayInput.value = "11";

      componentInstance.handleUpDownArrowKeyPress(
        dayInput,
        keyboardEvent("ArrowDown")
      );

      expect(dayInput.value).toBe("10");
    });
    it("should set month value to 12 if month value is 1 and ArrowDown is pressed", async () => {
      const { monthInput, componentInstance } = await createDateInputEnv();

      monthInput.value = "1";

      componentInstance.handleUpDownArrowKeyPress(
        monthInput,
        keyboardEvent("ArrowDown")
      );

      expect(monthInput.value).toBe("12");
    });
    it("should set year value to 9999 if year value is 0 and ArrowDown is pressed", async () => {
      const { yearInput, componentInstance } = await createDateInputEnv();

      yearInput.value = "0";

      componentInstance.handleUpDownArrowKeyPress(
        yearInput,
        keyboardEvent("ArrowDown")
      );

      expect(yearInput.value).toBe("9999");
    });
    it("should set day value to 31 if day value is empty and ArrowDown is pressed", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();

      dayInput.value = "";

      componentInstance.handleUpDownArrowKeyPress(
        dayInput,
        keyboardEvent("ArrowDown")
      );

      expect(dayInput.value).toBe("31");
    });
    it("should set month value to 12 if month value is empty and ArrowDown is pressed", async () => {
      const { monthInput, componentInstance } = await createDateInputEnv();

      monthInput.value = "";

      componentInstance.handleUpDownArrowKeyPress(
        monthInput,
        keyboardEvent("ArrowDown")
      );

      expect(monthInput.value).toBe("12");
    });
    it("should set year value to this year if year value is empty and ArrowDown is pressed", async () => {
      const { yearInput, componentInstance } = await createDateInputEnv();

      yearInput.value = "";

      componentInstance.handleUpDownArrowKeyPress(
        yearInput,
        keyboardEvent("ArrowDown")
      );

      expect(yearInput.value).toBe(`${new Date().getFullYear()}`);
    });
    it("should set year value to this year if year value is empty and ArrowUp is pressed", async () => {
      const { yearInput, componentInstance } = await createDateInputEnv();

      yearInput.value = "";

      componentInstance.handleUpDownArrowKeyPress(
        yearInput,
        keyboardEvent("ArrowUp")
      );

      expect(yearInput.value).toBe(`${new Date().getFullYear()}`);
    });
  });

  describe("handleDateChange", () => {
    it("should emit icChange with 1st January 2000 as Date object if day, month and year is set", async () => {
      const { component, componentInstance } = await createDateInputEnv();

      const eventSpy = jest.fn();

      componentInstance.day = "01";
      componentInstance.month = "01";
      componentInstance.year = "2000";
      componentInstance.invalidDateText = "";

      const date = new Date(
        +componentInstance.year,
        +componentInstance.month - 1,
        +componentInstance.day
      );

      componentInstance.selectedDate = date;

      component?.addEventListener("icChange", eventSpy);

      componentInstance.handleDateChange();

      expect(eventSpy).toBeCalledWith(
        expect.objectContaining({
          detail: expect.objectContaining({
            value: date,
          }),
        })
      );
    });
    it("should set value as 1st January 2000 as Date object if day, month and year is set", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.day = "01";
      componentInstance.month = "01";
      componentInstance.year = "2000";
      componentInstance.invalidDateText = "";

      const date = new Date(
        +componentInstance.year,
        +componentInstance.month - 1,
        +componentInstance.day
      );

      componentInstance.selectedDate = date;

      componentInstance.handleDateChange();

      expect(componentInstance.value).toBe(date);
    });
    it("should set selectedDateInfoEl with 1st January 2000 as string if day, month and year is set", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.day = "01";
      componentInstance.month = "01";
      componentInstance.year = "2000";
      componentInstance.invalidDateText = "";

      const date = new Date(
        +componentInstance.year,
        +componentInstance.month - 1,
        +componentInstance.day
      );

      componentInstance.selectedDate = date;

      componentInstance.handleDateChange();

      expect(componentInstance.selectedDateInfoEl.textContent).toBe(
        "Selected date: Saturday, 1 January 2000"
      );
    });
    it("should set value to null if day, month or year is not set", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.day = "";
      componentInstance.month = "";
      componentInstance.year = "2000";
      componentInstance.invalidDateText = "";

      const date = new Date(
        +componentInstance.year,
        +componentInstance.month - 1,
        +componentInstance.day
      );

      componentInstance.selectedDate = date;

      componentInstance.handleDateChange();

      expect(componentInstance.value).toBe(null);
    });
    it("should set selectedDateInfoEl with empty string if day, month and year is set", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.day = "";
      componentInstance.month = "";
      componentInstance.year = "2000";
      componentInstance.invalidDateText = "";

      const date = new Date(
        +componentInstance.year,
        +componentInstance.month - 1,
        +componentInstance.day
      );

      componentInstance.selectedDate = date;

      componentInstance.handleDateChange();

      expect(componentInstance.selectedDateInfoEl.textContent).toBe("");
    });

    it("should set previousSelectedDate as selectedDate if not previously matching", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.day = "01";
      componentInstance.month = "01";
      componentInstance.year = "2000";
      componentInstance.invalidDateText = "";

      const date = new Date(
        +componentInstance.year,
        +componentInstance.month - 1,
        +componentInstance.day
      );

      componentInstance.selectedDate = date;

      componentInstance.handleDateChange();

      expect(componentInstance.previousSelectedDate).toBe(
        componentInstance.selectedDate
      );
    });
    it("should call updateInputValues if isDateSetFromKeyboardEvent is false", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.day = "01";
      componentInstance.month = "01";
      componentInstance.year = "2000";
      componentInstance.invalidDateText = "";

      const date = new Date(
        +componentInstance.year,
        +componentInstance.month - 1,
        +componentInstance.day
      );

      componentInstance.selectedDate = date;

      const spyUpdateInputValues = jest.spyOn(
        componentInstance,
        "updateInputValues"
      );

      componentInstance.isDateSetFromKeyboardEvent = false;

      componentInstance.handleDateChange();

      expect(spyUpdateInputValues).toBeCalled();
    });
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

    it("should set day, month and year input values from paste event with 01/01/2000", async () => {
      const { componentInstance, dayInput, monthInput, yearInput } =
        await createDateInputEnv();

      componentInstance.handlePaste(clipboardEvent(DATE_2000));

      expect(dayInput.value).toBe("01");
      expect(monthInput.value).toBe("01");
      expect(yearInput.value).toBe("2000");
    });
    it("should set day, month and year input values from paste event with 01-01-2000", async () => {
      const { componentInstance, dayInput, monthInput, yearInput } =
        await createDateInputEnv();

      componentInstance.handlePaste(clipboardEvent("01-01-2000"));

      expect(dayInput.value).toBe("01");
      expect(monthInput.value).toBe("01");
      expect(yearInput.value).toBe("2000");
    });

    it("should set day, month and year input values from paste event with 2000/01/01", async () => {
      const { componentInstance, dayInput, monthInput, yearInput } =
        // eslint-disable-next-line sonarjs/no-duplicate-string
        await createDateInputEnv("YYYY/MM/DD");

      componentInstance.handlePaste(clipboardEvent("2000/01/01"));

      expect(dayInput.value).toBe("01");
      expect(monthInput.value).toBe("01");
      expect(yearInput.value).toBe("2000");
    });

    it(`should set day, month and year input values from paste event with ${ZULU_TIME_2000}`, async () => {
      const { componentInstance, dayInput, monthInput, yearInput } =
        await createDateInputEnv("YYYY/MM/DD");

      componentInstance.handlePaste(clipboardEvent(ZULU_TIME_2000)); // 2001-11-28T00:00:00.000Z

      expect(dayInput.value).toBe("28");
      expect(monthInput.value).toBe("11");
      expect(yearInput.value).toBe("2001");
    });

    it("should call setInputValue if date valid", async () => {
      const { componentInstance } = await createDateInputEnv();

      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");

      componentInstance.handlePaste(clipboardEvent(DATE_2000));

      expect(spySetInputValue).toBeCalled();
    });
    it("should not call setInputValue if date invalid", async () => {
      const { componentInstance } = await createDateInputEnv();

      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");

      componentInstance.handlePaste(clipboardEvent("01:01:2000"));

      expect(spySetInputValue).not.toBeCalled();
    });

    it("should call checkSingleCopiedValueIsValid if copied value is 1", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const spyCheckSingleCopiedValueIsValid = jest.spyOn(
        componentInstance,
        "checkSingleCopiedValueIsValid"
      );

      componentInstance.handlePaste(clipboardEvent("1", dayInput));

      expect(spyCheckSingleCopiedValueIsValid).toBeCalled();
    });
    it("should call checkSingleCopiedValueIsValid if copied value is 31", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const spyCheckSingleCopiedValueIsValid = jest.spyOn(
        componentInstance,
        "checkSingleCopiedValueIsValid"
      );

      componentInstance.handlePaste(clipboardEvent("31", dayInput));

      expect(spyCheckSingleCopiedValueIsValid).toBeCalled();
    });
    it("should call checkSingleCopiedValueIsValid if copied value is 2001", async () => {
      const { componentInstance, yearInput } = await createDateInputEnv();

      const spyCheckSingleCopiedValueIsValid = jest.spyOn(
        componentInstance,
        "checkSingleCopiedValueIsValid"
      );

      componentInstance.handlePaste(clipboardEvent("2001", yearInput));

      expect(spyCheckSingleCopiedValueIsValid).toBeCalled();
    });
    it("should not call checkSingleCopiedValueIsValid if copied value is :1", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const spyCheckSingleCopiedValueIsValid = jest.spyOn(
        componentInstance,
        "checkSingleCopiedValueIsValid"
      );

      componentInstance.handlePaste(clipboardEvent(":1", dayInput));

      expect(spyCheckSingleCopiedValueIsValid).not.toBeCalled();
    });
    it("should not call checkSingleCopiedValueIsValid if copied value is :14", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const spyCheckSingleCopiedValueIsValid = jest.spyOn(
        componentInstance,
        "checkSingleCopiedValueIsValid"
      );

      componentInstance.handlePaste(clipboardEvent(":14", dayInput));

      expect(spyCheckSingleCopiedValueIsValid).not.toBeCalled();
    });
    it("should not call checkSingleCopiedValueIsValid if copied value is -39", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const spyCheckSingleCopiedValueIsValid = jest.spyOn(
        componentInstance,
        "checkSingleCopiedValueIsValid"
      );

      componentInstance.handlePaste(clipboardEvent("-39", dayInput));

      expect(spyCheckSingleCopiedValueIsValid).not.toBeCalled();
    });
    it("should not call checkSingleCopiedValueIsValid if copied value is 5 digits", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const spyCheckSingleCopiedValueIsValid = jest.spyOn(
        componentInstance,
        "checkSingleCopiedValueIsValid"
      );

      componentInstance.handlePaste(clipboardEvent("12345", dayInput));

      expect(spyCheckSingleCopiedValueIsValid).not.toBeCalled();
    });

    it("should update invalidText and set validationStatus if invalid copied single value", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      componentInstance.handlePaste(clipboardEvent("-1", dayInput));

      expect(componentInstance.invalidDateText).toBe(
        "Please paste a valid day"
      );
      expect(componentInstance.validationStatus).toBe("error");
    });
  });

  describe("setValidationMessage", () => {
    it("should set invalidDateText if date (day) is not valid", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.day = "32";
      componentInstance.month = "1";
      componentInstance.year = "2000";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        "Please enter a valid date."
      );
    });
    it("should set invalidDateText if date (month) is not valid", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.day = "1";
      componentInstance.month = "13";
      componentInstance.year = "2000";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        "Please enter a valid date."
      );
    });
    it("should set invalidDateText as empty string if date is not complete", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.day = "";
      componentInstance.month = "1";
      componentInstance.year = "2000";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe("");
    });
    it("should set invalidDateText to disablePastMessage if date is in past", async () => {
      const { component, componentInstance } = await createDateInputEnv();

      component.disablePast = true;

      componentInstance.day = "10";
      componentInstance.month = "8";
      componentInstance.year = "2022";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        componentInstance.disablePastMessage
      );
    });
    it("should set invalidDateText to disableFutureMessage if date is in future", async () => {
      const { component, componentInstance } = await createDateInputEnv();

      component.disableFuture = true;

      componentInstance.day = "31";
      componentInstance.month = "8";
      componentInstance.year = "2024";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        componentInstance.disableFutureMessage
      );
    });
    it("should set invalidDateText empty string if date valid", async () => {
      const { component, componentInstance } = await createDateInputEnv();

      component.disableFuture = true;

      componentInstance.day = "1";
      componentInstance.month = "1";
      componentInstance.year = "2000";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe("");
    });
    it("should set invalidDateText to min message if date is before min date", async () => {
      const { component, componentInstance } = await createDateInputEnv();

      component.min = "10-07-2023";

      componentInstance.day = "1";
      componentInstance.month = "1";
      componentInstance.year = "2023";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        "Please enter a date after 10/07/2023."
      );

      component.dateFormat = "MM/DD/YYYY";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        "Please enter a date after 07/10/2023."
      );

      component.dateFormat = "YYYY/MM/DD";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        "Please enter a date after 2023/07/10."
      );
    });
    it("should set invalidDateText to disablePastMessage if both dateUntilNow and min prop have been set", async () => {
      const { component, componentInstance } = await createDateInputEnv();

      component.disablePast = true;
      component.min = "30-07-2024";

      componentInstance.day = "1";
      componentInstance.month = "1";
      componentInstance.year = "2000";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        componentInstance.disablePastMessage
      );
    });
    it("should set invalidDateText to max message if date is after max date", async () => {
      const { component, componentInstance } = await createDateInputEnv();

      component.max = "10-07-2023";

      componentInstance.day = "1";
      componentInstance.month = "8";
      componentInstance.year = "2023";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        "Please enter a date before 10/07/2023."
      );

      component.dateFormat = "MM/DD/YYYY";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        "Please enter a date before 07/10/2023."
      );

      component.dateFormat = "YYYY/MM/DD";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        "Please enter a date before 2023/07/10."
      );
    });
    it("should set invalidDateText to disableFutureMessage if both dateFromNow and max prop have been set", async () => {
      const { component, componentInstance } = await createDateInputEnv();

      component.disableFuture = true;
      component.max = "30-07-2023";

      componentInstance.day = "1";
      componentInstance.month = "8";
      componentInstance.year = "2025";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        componentInstance.disableFutureMessage
      );
    });
    it("should set invalidDateText to disableDays message if date is on a disabled weekday", async () => {
      const { component, componentInstance } = await createDateInputEnv();

      component.disableDays = [0, 1];

      componentInstance.day = "16";
      componentInstance.month = "7";
      componentInstance.year = "2023";

      componentInstance.setValidationMessage();

      expect(componentInstance.invalidDateText).toBe(
        componentInstance.disableDaysMessage
      );
    });
  });

  describe("setDate", () => {
    it("should set a date in Date format and call setValidationMessage", async () => {
      const { componentInstance } = await createDateInputEnv();

      const spySetValidationMessage = jest.spyOn(
        componentInstance,
        "setValidationMessage"
      );

      componentInstance.setDate(new Date(500000000000));

      expect(spySetValidationMessage).toHaveBeenCalled();
    });

    it("should set a date in string format and call setValidationMessage", async () => {
      const { componentInstance } = await createDateInputEnv();

      const spySetValidationMessage = jest.spyOn(
        componentInstance,
        "setValidationMessage"
      );

      componentInstance.setDate(DATE_1970);

      expect(componentInstance.year).toMatch("1970");

      expect(spySetValidationMessage).toHaveBeenCalled();
    });
    it("should set the Zulu ISOString into the correct date variables", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.setDate(ZULU_TIME_2000); // 2001-11-28T00:00:00.000Z

      expect(componentInstance.day).toMatch("28");
      expect(componentInstance.month).toMatch("11");
      expect(componentInstance.year).toMatch("2001");
    });
    it("should set inputs to null if date is null", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.setDate(null);

      expect(componentInstance.day).toBeNull();
      expect(componentInstance.month).toBeNull();
      expect(componentInstance.year).toBeNull();
    });
  });

  describe("autocompleteInput", () => {
    it("should call autocompleteYear method if input is the year", async () => {
      const { componentInstance, yearInput } = await createDateInputEnv();

      const spyAutocompleteYear = jest.spyOn(
        componentInstance,
        "autocompleteYear"
      );

      yearInput.value = "2000";

      componentInstance.autocompleteInput(yearInput);

      expect(spyAutocompleteYear).toBeCalled();
    });
    it("should set day to 01 if 0 has been entered as an input value", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      dayInput.value = "0";

      componentInstance.autocompleteInput(dayInput);

      expect(dayInput.value).toBe("01");
    });
    it("should set day to 05 if 5 has been entered as an input value", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      dayInput.value = "5";

      componentInstance.autocompleteInput(dayInput);

      expect(dayInput.value).toBe("05");
    });
    it("should set month to 01 if 0 has been entered as an input value", async () => {
      const { componentInstance, monthInput } = await createDateInputEnv();

      monthInput.value = "0";

      componentInstance.autocompleteInput(monthInput);

      expect(monthInput.value).toBe("01");
    });
    it("should set month to 05 if 5 has been entered as an input value", async () => {
      const { componentInstance, monthInput } = await createDateInputEnv();

      monthInput.value = "5";

      componentInstance.autocompleteInput(monthInput);

      expect(monthInput.value).toBe("05");
    });
    it("should call setInputValue method", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");

      dayInput.value = "0";

      componentInstance.autocompleteInput(dayInput);

      expect(spySetInputValue).toBeCalled();
    });
  });

  describe("autocompleteYear", () => {
    it("should set the year input value to 2001 if 1 is inputted as year value", async () => {
      const { componentInstance, yearInput } = await createDateInputEnv();

      yearInput.value = "1";

      componentInstance.autocompleteYear();

      expect(yearInput.value).toBe("2001");
    });
    it("should set the year input value to 2010", async () => {
      const { componentInstance, yearInput } = await createDateInputEnv();

      yearInput.value = "10";

      componentInstance.autocompleteYear();

      expect(yearInput.value).toBe("2010");
    });
    it("should set the year input value to 2100", async () => {
      const { componentInstance, yearInput } = await createDateInputEnv();

      yearInput.value = "100";

      componentInstance.autocompleteYear();

      expect(yearInput.value).toBe("2100");
    });
    it("should not call setInputValue method if no year has been set", async () => {
      const { componentInstance } = await createDateInputEnv();

      const spySetInputValue = jest.spyOn(componentInstance, "setInputValue");

      componentInstance.autocompleteYear();

      expect(spySetInputValue).not.toBeCalled();
    });
  });

  describe("handleFormReset", () => {
    it("should call the setDate, setValidationMessage & handleDateChange event handlers", async () => {
      const { componentInstance } = await createDateInputEnv();

      const spySetDate = jest.spyOn(componentInstance, "setDate");
      const spySetValidationMessage = jest.spyOn(
        componentInstance,
        "setValidationMessage"
      );
      const spyHandleDateChange = jest.spyOn(
        componentInstance,
        "handleDateChange"
      );

      componentInstance.handleFormReset();

      expect(spySetDate).toHaveBeenCalled();
      expect(spySetValidationMessage).toHaveBeenCalled();
      expect(spyHandleDateChange).toHaveBeenCalled();
    });
  });

  describe("convertToDate", () => {
    it("should return null if either the year, month or day strings are empty", async () => {
      const { componentInstance } = await createDateInputEnv();
      expect(componentInstance.convertToDate("", "03", "09")).toBeNull();
      expect(componentInstance.convertToDate("1970", "", "09")).toBeNull();
      expect(componentInstance.convertToDate("2000", "12", "")).toBeNull();
    });

    it("should return the Date format of a date string", async () => {
      const { componentInstance } = await createDateInputEnv();
      expect(componentInstance.convertToDate("2000", "01", "01")).toEqual(
        new Date(+"2000", +"01" - 1, +"01")
      );
    });
  });

  describe("preventInput", () => {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    it("should return undefined if isInputPrevented is false", async () => {
      const { componentInstance } = await createDateInputEnv();

      const getSelectedTextMock = jest.fn().mockReturnValue(false);
      window.getSelection = jest
        .fn()
        .mockReturnValue({ toString: getSelectedTextMock });

      let keyboardEvent = {
        key: "e",
        preventDefault: jest.fn(),
      };

      componentInstance.preventInput(keyboardEvent, true);
      expect(keyboardEvent.preventDefault).toHaveBeenCalled();

      keyboardEvent = {
        key: ".",
        preventDefault: jest.fn(),
      };

      componentInstance.preventInput(keyboardEvent, true);
      expect(keyboardEvent.preventDefault).toHaveBeenCalled();

      keyboardEvent = {
        key: HYPHEN,
        preventDefault: jest.fn(),
      };

      componentInstance.preventInput(keyboardEvent, true);
      expect(keyboardEvent.preventDefault).toHaveBeenCalled();
    });

    it('should return undefined if isInputPrevented is false or if a key other than "e", "." or "-" is pressed', async () => {
      const { componentInstance, component } = await createDateInputEnv();

      const getSelectedTextMock = jest.fn().mockReturnValue(false);
      window.getSelection = jest
        .fn()
        .mockReturnValue({ toString: getSelectedTextMock });

      let event = new KeyboardEvent("keydown", { key: HYPHEN });
      component?.dispatchEvent(event);

      expect(componentInstance.preventInput(event, false)).toBeUndefined();

      event = new KeyboardEvent("keydown", { key: "a" });
      component?.dispatchEvent(event);

      expect(componentInstance.preventInput(event, true)).toBeUndefined();
    });
  });

  describe("handleHostBlur", () => {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    it("should return undefined if isInputPrevented is false", async () => {
      const { componentInstance, component } = await createDateInputEnv();
      const eventSpy = jest.fn();
      component?.addEventListener("icBlur", eventSpy);
      const value = new Date(500000000000);
      componentInstance.handleHostBlur();

      expect(eventSpy).toHaveBeenCalledWith(
        expect.objectContaining({ detail: expect.objectContaining(value) })
      );
    });
  });

  describe("handleHostFocus", () => {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    it("should return undefined if isInputPrevented is false", async () => {
      const { componentInstance, component } = await createDateInputEnv();
      const eventSpy = jest.fn();
      component?.addEventListener("icFocus", eventSpy);
      const value = new Date(500000000000);
      componentInstance.handleHostFocus();

      expect(eventSpy).toHaveBeenCalledWith(
        expect.objectContaining({ detail: expect.objectContaining(value) })
      );
    });
  });

  describe("handleClear", () => {
    it("should clear the inputs", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.day = "1";
      componentInstance.month = "1";
      componentInstance.year = "2000";

      componentInstance.handleClear();

      expect(componentInstance.day).toMatch("");
      expect(componentInstance.month).toMatch("");
      expect(componentInstance.year).toMatch("");
    });
  });

  describe("handleCalendarOpen", () => {
    it("should emit calendarButtonClicked with 1st January 2000 as Date object if calendar button is clicked", async () => {
      const { component, componentInstance } = await createDateInputEnv();

      const eventSpy = jest.fn();

      componentInstance.day = "01";
      componentInstance.month = "01";
      componentInstance.year = "2000";

      const date = new Date(
        +componentInstance.year,
        +componentInstance.month - 1,
        +componentInstance.day
      );

      componentInstance.selectedDate = date;

      component?.addEventListener("calendarButtonClicked", eventSpy);

      componentInstance.handleCalendarOpen({
        stopImmediatePropagation: jest.fn(),
      });

      expect(eventSpy).toBeCalledWith(
        expect.objectContaining({
          detail: expect.objectContaining({
            value: date,
          }),
        })
      );
    });
  });

  describe("notifyScreenReader", () => {
    it("should call notifyScreenReaderArrowKeys if event isKeyboardOrEvent is true", async () => {
      const { dayInput, componentInstance } = await createDateInputEnv();
      const spyNotifyScreenReaderArrowKeys = jest.spyOn(
        componentInstance,
        "notifyScreenReaderArrowKeys"
      );

      componentInstance.isKeyboardOrEvent = jest
        .fn()
        .mockReturnValueOnce(() => true);

      componentInstance.notifyScreenReader(dayInput, keyboardEvent("ArrowUp"));

      expect(spyNotifyScreenReaderArrowKeys).toBeCalled();
    });
  });

  describe("componentWillLoad", () => {
    it("should set helperText to default value if not set", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.helperText = "";

      componentInstance.componentWillLoad();

      expect(componentInstance.helperText).toBe(
        "Use format " + componentInstance.dateFormat
      );
    });

    it("should call setDate when value is set", async () => {
      const { componentInstance } = await createDateInputEnv();

      const spySetDate = jest.spyOn(componentInstance, "setDate");

      componentInstance.value = DATE_2000;

      componentInstance.componentWillLoad();

      expect(spySetDate).toBeCalled();
    });
  });

  describe("componentWillUpdate", () => {
    it("should call setDate if isDateSetFromKeyboardEvent is set to false", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.isDateSetFromKeyboardEvent = false;

      const spySetDate = jest.spyOn(componentInstance, "setDate");

      componentInstance.componentWillUpdate();

      expect(spySetDate).toBeCalled();
    });

    it("should call setValidationMessage and handleDateChange", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.isDateSetFromKeyboardEvent = false;

      const spySetValidationMessage = jest.spyOn(
        componentInstance,
        "setValidationMessage"
      );
      const spyHandleDateChange = jest.spyOn(
        componentInstance,
        "handleDateChange"
      );

      componentInstance.componentWillUpdate();

      expect(spySetValidationMessage).toBeCalled();
      expect(spyHandleDateChange).toBeCalled();
    });

    it("should set isDateSetFromKeyboardEvent to false", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.isDateSetFromKeyboardEvent = true;

      componentInstance.componentWillUpdate();

      expect(componentInstance.isDateSetFromKeyboardEvent).toBeFalsy();
    });
  });

  describe("getArialLabel", () => {
    it("should get aria-label day from input", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const ariaLabel = componentInstance.getAriaLabel(dayInput);

      expect(ariaLabel).toBe("day");
    });
  });

  describe("setAriaInvalid", () => {
    it("should set aria-invalid on day input if validDay is invalid", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const validDay = false;
      const validMonth = true;
      const validDate = true;
      const disanbledDate = false;

      componentInstance.setAriaInvalid(
        validDay,
        validMonth,
        validDate,
        disanbledDate
      );

      expect(dayInput).toHaveAttribute(ARIA_INVALID);
      expect(dayInput.getAttribute(ARIA_INVALID)).toBe("true");
    });

    it("should set aria-invalid on month input if validMonth is invalid", async () => {
      const { componentInstance, monthInput } = await createDateInputEnv();

      const validDay = true;
      const validMonth = false;
      const validDate = true;
      const disanbledDate = false;

      componentInstance.setAriaInvalid(
        validDay,
        validMonth,
        validDate,
        disanbledDate
      );

      expect(monthInput).toHaveAttribute(ARIA_INVALID);
      expect(monthInput.getAttribute(ARIA_INVALID)).toBe("true");
    });
  });

  describe("getDate()", () => {
    it("should return null from getDate if no value is entered", async () => {
      const { componentInstance } = await createDateInputEnv();

      componentInstance.selectedDate = null;

      const dateValue = await componentInstance.getDate();

      expect(dateValue).toBeNull();
    });

    it("should return partial date due to date object if incomplete date", async () => {
      const { componentInstance } = await createDateInputEnv();

      const date = new Date("37/01");

      componentInstance.selectedDate = date;

      const dateValue = await componentInstance.getDate();

      expect(dateValue).toBe(date);
    });

    it("should return invalid date if invalid date", async () => {
      const { componentInstance } = await createDateInputEnv();

      const date = new Date("37/99/99");

      componentInstance.selectedDate = date;

      const dateValue = await componentInstance.getDate();

      expect(dateValue).toBeInstanceOf(Date);
      expect(dateValue.toString()).toBe("Invalid Date");
    });

    it("should return valid date", async () => {
      const { componentInstance } = await createDateInputEnv();

      const date = new Date("01/01/2001");

      componentInstance.selectedDate = date;

      const dateValue = await componentInstance.getDate();

      expect(dateValue).toBe(date);
    });
  });
  describe("checkSingleCopiedValueIsValid", () => {
    it("should return true if dayInput pasted value is 1", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const isValid = componentInstance.checkSingleCopiedValueIsValid(
        dayInput,
        "1"
      );

      expect(isValid).toBeTruthy();
    });
    it("should return true if dayInput pasted value is 31", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const isValid = componentInstance.checkSingleCopiedValueIsValid(
        dayInput,
        "31"
      );

      expect(isValid).toBeTruthy();
    });
    it("should return true if dayInput pasted value is 24", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const isValid = componentInstance.checkSingleCopiedValueIsValid(
        dayInput,
        "24"
      );

      expect(isValid).toBeTruthy();
    });
    it("should return false if dayInput pasted value is 0", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const isValid = componentInstance.checkSingleCopiedValueIsValid(
        dayInput,
        "0"
      );

      expect(isValid).toBeFalsy();
    });
    it("should return false if dayInput pasted value is above 31", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();

      const isValid = componentInstance.checkSingleCopiedValueIsValid(
        dayInput,
        "32"
      );

      expect(isValid).toBeFalsy();
    });
    it("should return false if monthInput pasted value is 0", async () => {
      const { componentInstance, monthInput } = await createDateInputEnv();

      const isValid = componentInstance.checkSingleCopiedValueIsValid(
        monthInput,
        "0"
      );

      expect(isValid).toBeFalsy();
    });
    it("should return true if monthInput pasted value is 1", async () => {
      const { componentInstance, monthInput } = await createDateInputEnv();

      const isValid = componentInstance.checkSingleCopiedValueIsValid(
        monthInput,
        "1"
      );

      expect(isValid).toBeTruthy();
    });
    it("should return true if monthInput pasted value is 12", async () => {
      const { componentInstance, monthInput } = await createDateInputEnv();

      const isValid = componentInstance.checkSingleCopiedValueIsValid(
        monthInput,
        "12"
      );

      expect(isValid).toBeTruthy();
    });
    it("should return false if monthInput pasted value is 13", async () => {
      const { componentInstance, monthInput } = await createDateInputEnv();

      const isValid = componentInstance.checkSingleCopiedValueIsValid(
        monthInput,
        "13"
      );

      expect(isValid).toBeFalsy();
    });
    it("should return true if yearMonth pasted value passed in", async () => {
      const { componentInstance, yearInput } = await createDateInputEnv();

      const isValid = componentInstance.checkSingleCopiedValueIsValid(
        yearInput,
        "11"
      );

      expect(isValid).toBeTruthy();
    });
    it("should return false if undefined input with pasted value passed in", async () => {
      const { componentInstance } = await createDateInputEnv();

      const isValid = componentInstance.checkSingleCopiedValueIsValid(
        undefined,
        "11"
      );

      expect(isValid).toBeFalsy();
    });
  });
  describe("setInputPasteValue", () => {
    it("should set CSS class and paste value into input", async () => {
      const { componentInstance, dayInput } = await createDateInputEnv();
      const VALUE = "11";

      componentInstance.setInputPasteValue(dayInput, VALUE);

      expect(dayInput.value).toBe(VALUE);
      expect(dayInput).toHaveClass("fit-to-value");
    });
  });

  describe("isPastedStringDateValid", () => {
    it("should return true if 1/1/2001 is value", async () => {
      const { componentInstance } = await createDateInputEnv();

      expect(
        componentInstance.isPastedStringDateValid("1/1/2001")
      ).toBeTruthy();
    });
    it("should return true if 1-1-2001 is value", async () => {
      const { componentInstance } = await createDateInputEnv();

      expect(
        componentInstance.isPastedStringDateValid("1-1-2001")
      ).toBeTruthy();
    });
    it("should return true if 1.1.2001 is value", async () => {
      const { componentInstance } = await createDateInputEnv();

      expect(
        componentInstance.isPastedStringDateValid("1.1.2001")
      ).toBeTruthy();
    });
    it("should return true if abc is value", async () => {
      const { componentInstance } = await createDateInputEnv();

      expect(componentInstance.isPastedStringDateValid("abc")).toBeFalsy();
    });
    it("should return true if 123456789 is value", async () => {
      const { componentInstance } = await createDateInputEnv();

      expect(
        componentInstance.isPastedStringDateValid("123456789")
      ).toBeFalsy();
    });
  });

  describe("setDisableDays", () => {
    it("should test setting disableDays ", async () => {
      const { component, componentInstance } = await createDateInputEnv();
      await component.setDisableDays([0, 1]);

      expect(componentInstance.disableDays).toEqual([0, 1]);
    });
  });
});
