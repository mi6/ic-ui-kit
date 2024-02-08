export enum IcInformationStatus {
  Warning = "warning",
  Error = "error",
  Success = "success",
}

export type IcInformationStatusOrEmpty = "warning" | "error" | "success" | "";

export type IcSearchMatchPositions = "start" | "anywhere";

export enum IcThemeForegroundEnum {
  Default = "default",
  Dark = "dark",
  Light = "light",
}

export interface IcValueEventDetail {
  value: string | string[];
  keyPressed?: string;
}
