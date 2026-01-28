// Compatible with IcMenuOption, but stricter
export type IcSelectOption =
  | IcSelectOptionBase
  | IcSelectOptionGroup
  | IcSelectOptionLoading
  | IcSelectOptionTimedOut;

type IcSelectOptionElement = {
  component: any;
  ariaLabel: string;
};

export type IcSelectOptionBase = {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
  recommended?: boolean;
  icon?: string;
  hideLabel?: boolean;
  htmlProps?: Record<string, string>;
  element?: IcSelectOptionElement;
};

export type IcSelectOptionGroup = {
  label: string;
  children: IcSelectOptionBase[];
};

type IcSelectOptionLoading = {
  label: string;
  value: "";
  loading: true;
};

type IcSelectOptionTimedOut = {
  label: string;
  value: "";
  timedOut: true;
};

export type IcSelectOptionFlat = {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
  recommended?: boolean;
  icon?: string;
  hideLabel?: boolean;
  htmlProps?: Record<string, string>;
  element?: IcSelectOptionElement;
  group?: string;
};
