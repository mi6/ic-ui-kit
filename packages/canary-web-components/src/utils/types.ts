import {
  IcPaginationLabelTypes,
  IcPaginationTypes,
  IcPaginationAlignmentOptions,
} from "../components";

export type IcFocusableComponents =
  | HTMLIcBreadcrumbElement
  | HTMLIcButtonElement
  | HTMLIcCardVerticalElement
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

export type IcSizes = "medium" | "large" | "small";

export type IcSizesNoLarge = "medium" | "small";

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

export enum IcBrandForegroundEnum {
  Default = "default",
  Dark = "dark",
  Light = "light",
}

export type IcThemeMode = "dark" | "light" | "inherit";

export type IcBrandForeground = "default" | "dark" | "light";

export type IcBrandForegroundNoDefault = "dark" | "light";

export type IcBrand = {
  mode: IcBrandForeground;
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
  parent: HTMLElement | null;
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
 * Set "label" and "value" props to use as the option's label and value.
 * Alternatively, custom names for these props can be used e.g. by setting the "labelField" and "valueField" props on the relevant component.
 *
 * Any props supplied to the "htmlProps" object will be spread onto the option's underlying <li> element.
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
  htmlProps?: Record<string, any>;
}

export type IcSearchMatchPositions = "start" | "anywhere";

export type IcCallbackFunctionNoReturn = (...args: unknown[]) => void;

export type IcRequiredPropsTypes =
  | string
  | boolean
  | number
  | HTMLElement
  | IcMenuOption[]
  | undefined;

export type IcPropObject = { prop: IcRequiredPropsTypes; propName: string };

export type IcRelatedTarget = EventTarget | undefined;

export type IcOrientation = "horizontal" | "vertical";

export type IcEmphasisType = "filled" | "outlined";

export interface IcValueEventDetail {
  value: string;
  keyPressed?: string;
}

export interface IcMultiValueEventDetail {
  value: string | string[] | null;
  keyPressed?: string;
}

export interface IcBlurEventDetail {
  relatedTarget: IcRelatedTarget | null;
}

export type IcSelectTypes = "single" | "multi";

export type IcSelectMethodTypes = "auto" | "manual";

export type IcDeviceSizes = 0 | 576 | 768 | 992 | 1200;

type RGB = `rgb(${string})`;
type RGBA = `rgba(${string})`;
type HEX = `#${string}`;

export type IcColor = RGB | RGBA | HEX;

export type IcIconPlacementOptions = "left" | "right" | "top";

export type IcButtonTooltipPlacement = "top" | "right" | "bottom" | "left";

export type IcThemeSettings = "dark" | "light" | "system";

export interface IcPaginationBarOptions {
  alignment?: IcPaginationAlignmentOptions;
  hideAllFromItemsPerPage?: boolean;
  hideCurrentPage?: boolean;
  hideFirstAndLastPageButton?: boolean;
  hideRangeLabel?: boolean;
  itemLabel?: string;
  itemsPerPageOptions?: { label: string; value: string }[];
  monochrome?: boolean;
  pageLabel?: string;
  rangeLabelType?: IcPaginationLabelTypes;
  selectedItemsPerPage?: number;
  selectItemsPerPageOnEnter?: boolean;
  setToFirstPageOnPaginationChange?: boolean;
  showGoToPageControl?: boolean;
  showItemsPerPageControl?: boolean;
  theme?: IcThemeMode;
  type?: IcPaginationTypes;
}

export type IcDateFormat = "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY/MM/DD";

export type IcDateValueFormat = string | Date | null | undefined;

export type IcTimeFormat = "HH:MM" | "HH:MM:SS" | "HH:MM:SS.SSS";

export type IcTimeFormatSelector = "HH:MM" | "HH:MM:SS";

export type IcDisableTimeSelection =
  | string
  | Date
  | { start: string | Date; end: string | Date };

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

export type IcPositionTopOrRight = "top" | "right";

// Matches HTML aria-live attribute options
export type IcAriaLive = "polite" | "assertive" | "off";

export type IcCardDensity = "default" | "spacious";
