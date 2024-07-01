export interface IcChangeEventDetail {
  checked: boolean[] | boolean;
  toggledOptions?: {
    toggleButton: HTMLIcToggleButtonElement;
  }[];
  selectedOption: HTMLIcToggleButtonElement;
}
