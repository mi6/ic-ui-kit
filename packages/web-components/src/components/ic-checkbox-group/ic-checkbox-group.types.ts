export interface IcChangeEventDetail {
  value: string[];
  checkedOptions: {
    checkbox: HTMLIcCheckboxElement;
    textFieldValue?: string;
  }[];
  selectedOption: HTMLIcCheckboxElement;
}
