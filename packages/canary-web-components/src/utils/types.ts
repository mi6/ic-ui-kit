export enum IcInformationStatus {
  Warning = "warning",
  Error = "error",
  Success = "success",
}

export type IcSizes = "default" | "large" | "small";

export type IcInformationStatusOrEmpty = "warning" | "error" | "success" | "";

export enum IcThemeForegroundEnum {
  Default = "default",
  Dark = "dark",
  Light = "light",
}

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

export type IcSearchMatchPositions = "start" | "anywhere";

export interface IcValueEventDetail {
  value: string | string[];
  keyPressed?: string;
}
