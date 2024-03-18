export type IcFocusableComponents =
  | HTMLIcBreadcrumbElement
  | HTMLIcButtonElement
  | HTMLIcCardElement
  | HTMLIcCheckboxElement
  | HTMLIcChipElement
  | HTMLIcLinkElement
  | HTMLIcNavigationButtonElement
  | HTMLIcNavigationGroupElement
  | HTMLIcNavigationItemElement
  | HTMLIcRadioOptionElement
  | HTMLIcSearchBarElement
  | HTMLIcSelectElement
  | HTMLIcSwitchElement
  | HTMLIcTabElement
  | HTMLIcTextFieldElement;

export type IcStatusVariants =
  | "neutral"
  | "info"
  | "warning"
  | "error"
  | "success";

export enum IcInformationStatus {
  Warning = "warning",
  Error = "error",
  Success = "success",
}

export type IcSearchMatchPositions = "start" | "anywhere";

export type IcSizes = "default" | "large" | "small";

export type IcSizesNoLarge = "default" | "small";

export type IcInformationStatusOrEmpty = "warning" | "error" | "success" | "";

export type IcNavType = "side" | "top" | "page-header";

// From: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
export type IcAutocompleteTypes =
  | "on"
  | "off"
  | "name"
  | "honorific-prefix"
  | "given-name"
  | "additional-name"
  | "family-name"
  | "honorific-suffix"
  | "nickname"
  | "email"
  | "username"
  | "new-password"
  | "current-password"
  | "one-time-code"
  | "organization-title"
  | "organization"
  | "street-address"
  | "address-line1"
  | "address-line2"
  | "address-line3"
  | "address-level4"
  | "address-level3"
  | "address-level2"
  | "address-level1"
  | "country"
  | "country-name"
  | "postal-code"
  | "cc-name"
  | "cc-given-name"
  | "cc-additional-name"
  | "cc-family-name"
  | "cc-family-name"
  | "cc-number"
  | "cc-exp"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-csc"
  | "cc-type"
  | "transaction-currency"
  | "transaction-amount"
  | "language"
  | "bday"
  | "bday-day"
  | "bday-month"
  | "bday-year"
  | "sex"
  | "tel"
  | "tel-country-code"
  | "tel-national"
  | "tel-area-code"
  | "tel-local"
  | "tel-extension"
  | "impp"
  | "url"
  | "photo";

export type IcAlignment = "left" | "center" | "full-width";

export enum IcThemeForegroundEnum {
  Default = "default",
  Dark = "dark",
  Light = "light",
}

export interface IcValueEventDetail {
  value: string | string[];
  keyPressed?: string;
}

export type IcThemeForeground = "default" | "dark" | "light";

export type IcThemeForegroundNoDefault = "dark" | "light";

export type IcTheme = {
  mode: IcThemeForeground;
  color: IcColorRGB;
};

export type IcAdditionalFieldTypes = "static" | "dynamic";

export type IcColorRGB = {
  r: number;
  g: number;
  b: number;
};

export type IcColorRGBA = IcColorRGB & {
  a: number;
};

export type IcActivationTypes = "automatic" | "manual";

export type IcAutocorrectStates = "on" | "off";

export type IcNavParentDetails = {
  navType: IcNavType | "";
  parent: HTMLElement;
};

export type IcTypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subtitle-large"
  | "subtitle-small"
  | "body"
  | "label"
  | "label-uppercase"
  | "caption"
  | "caption-uppercase"
  | "code-large"
  | "code-small"
  | "code-extra-small"
  | "badge"
  | "badge-small";

/**
 * @interface IcMenuOption
 * @field {string} A label field to options. Defaults to "label", but can have any custom name.
 * @field {string} A value field to options. Defaults to "value", but can have any custom name.
 */
export interface IcMenuOption {
  description?: string;
  disabled?: boolean;
  recommended?: boolean;
  children?: IcMenuOption[];
  loading?: boolean;
  timedOut?: boolean;
  [key: string]: any;
  element?: {
    component: any;
    ariaLabel: string;
  };
  icon?: any;
}

export type IcCallbackFunctionNoReturn = (...args: unknown[]) => void;

export type IcDateFormat = "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY/MM/DD";

export enum IcDateInputMonths {
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
}

export enum IcShortDayNames {
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
}

export enum IcDayNames {
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
}

export enum IcWeekDays {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
