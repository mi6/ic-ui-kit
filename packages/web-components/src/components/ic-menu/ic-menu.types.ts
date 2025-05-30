export interface IcOptionSelectEventDetail {
  value: string | undefined;
  label?: string;
  optionId?: string;
}

export interface IcMenuChangeEventDetail {
  open: boolean;
  focusInput?: boolean;
}

export interface IcMenuOptionIdEventDetail {
  optionId: string | undefined;
}
