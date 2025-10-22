import { SpecPage, newSpecPage } from "@stencil/core/testing";
import { TimeInput } from "../../ic-time-input";
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

interface TimeInputType {
  page: SpecPage;
  component: HTMLIcTimeInputElement;
  componentInstance: any;
  hourInput: HTMLInputElement;
  minuteInput: HTMLInputElement;
  secondInput: HTMLInputElement;
  millisecondInput: HTMLInputElement;
}

export const createTimeInput = (format = "HH:MM:SS"): Promise<SpecPage> =>
  newSpecPage({
    components: [TimeInput, IcInputLabel],
    template: () => (
      <ic-time-input label="Test label" time-format={format}></ic-time-input>
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

export const createTimeInputEnv = async (
  format?: string
): Promise<TimeInputType> => {
  const page = await createTimeInput(format);

  const component = page.root as HTMLIcTimeInputElement;
  const componentInstance = page.rootInstance;

  const hourInput =
    component.shadowRoot!.querySelector<HTMLInputElement>(".hour-input")!;
  const minuteInput =
    component.shadowRoot!.querySelector<HTMLInputElement>(".minute-input")!;
  const secondInput =
    component.shadowRoot!.querySelector<HTMLInputElement>(".second-input")!;
  const millisecondInput =
    component.shadowRoot!.querySelector<HTMLInputElement>(
      ".millisecond-input"
    )!;

  const mockSelect = jest.fn();

  if (hourInput) hourInput.select = mockSelect;
  if (minuteInput) minuteInput.select = mockSelect;
  if (secondInput) secondInput.select = mockSelect;

  return {
    page,
    component,
    componentInstance,
    hourInput,
    minuteInput,
    secondInput,
    millisecondInput,
  };
};
