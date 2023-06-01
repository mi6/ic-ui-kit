export interface IcChangeEventDetail {
  value: string;
  selectedOption: {
    radio: HTMLIcRadioOptionElement;
    textFieldValue?: string;
  };
}
