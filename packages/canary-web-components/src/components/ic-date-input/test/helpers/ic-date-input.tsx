import { SpecPage, newSpecPage } from "@stencil/core/testing";
import { DateInput } from "../../ic-date-input";
import { h } from "@stencil/core";
import { IcInputLabel } from "@ukic/web-components/dist/components/ic-input-label";

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
    components: [DateInput, IcInputLabel],
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
    preventDefault: (): null => null,
  };
};

export const createDateInputEnv = async (
  format?: string
): Promise<DateInputType> => {
  const page = await createDateInput(format);

  const component = page.root as HTMLIcDateInputElement;
  const componentInstance = page.rootInstance;

  const dayInput =
    component.shadowRoot!.querySelector<HTMLInputElement>(".day-input")!;
  const monthInput =
    component.shadowRoot!.querySelector<HTMLInputElement>(".month-input")!;
  const yearInput =
    component.shadowRoot!.querySelector<HTMLInputElement>(".year-input")!;

  const mockSelect = jest.fn();

  if (dayInput) dayInput.select = mockSelect;
  if (monthInput) monthInput.select = mockSelect;
  if (yearInput) yearInput.select = mockSelect;

  return {
    page,
    component,
    componentInstance,
    dayInput,
    monthInput,
    yearInput,
  };
};
