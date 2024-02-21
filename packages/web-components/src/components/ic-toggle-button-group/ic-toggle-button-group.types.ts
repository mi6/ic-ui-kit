export interface IcChangeEventDetail {
  toggleChecked: boolean[] | boolean;
  toggledOptions?: {
    toggleButton: HTMLIcToggleButtonElement;
  }[];
  selectedOption: HTMLIcToggleButtonElement;
}
