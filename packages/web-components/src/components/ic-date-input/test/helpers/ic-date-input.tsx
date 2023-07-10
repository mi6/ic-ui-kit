import { SpecPage, newSpecPage } from "@stencil/core/testing";
import { DateInput } from "../../ic-date-input";
import { h } from "@stencil/core";
import { InputLabel } from "../../../ic-input-label/ic-input-label";

interface EventType {
  inputType: string;
  target: HTMLInputElement;
  data: string;
}

interface KeyboardEvent {
  key: string;
  preventDefault: () => void;
}

interface DateInputType {
  page: SpecPage;
  component: HTMLIcDateInputElement;
  componentInstance: any;
  dayInput: HTMLInputElement;
  monthInput: HTMLInputElement;
  yearInput: HTMLInputElement;
}

export const createDateInput = (format = "DD/MM/YYYY"): Promise<SpecPage> =>
  newSpecPage({
    components: [DateInput, InputLabel],
    template: () => (
      <ic-date-input label="Test label" date-format={format}></ic-date-input>
    ),
  });

export const handleEvent = (input: HTMLInputElement): EventType => {
  return {
    inputType: "insertText",
    target: input,
    data: input.value,
  };
};

export const keyboardEvent = (keyboardKey: string): KeyboardEvent => {
  return {
    key: `${keyboardKey}`,
    preventDefault: (): void => null,
  };
};

export const createDateInputEnv = async (
  format?: string
): Promise<DateInputType> => {
  const page = await createDateInput(format);

  const component = page.root as HTMLIcDateInputElement;
  const componentInstance = page.rootInstance;

  const dayInput = component.shadowRoot.querySelector(
    ".day-input"
  ) as HTMLInputElement;
  const monthInput = component.shadowRoot.querySelector(
    ".month-input"
  ) as HTMLInputElement;
  const yearInput = component.shadowRoot.querySelector(
    ".year-input"
  ) as HTMLInputElement;

  const mockSelect = jest.fn();

  dayInput.select = mockSelect;
  monthInput.select = mockSelect;
  yearInput.select = mockSelect;

  return {
    page,
    component,
    componentInstance,
    dayInput,
    monthInput,
    yearInput,
  };
};
