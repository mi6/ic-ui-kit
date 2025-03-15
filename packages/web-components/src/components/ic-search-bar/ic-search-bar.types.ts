import { IcValueEventDetail, IcRelatedTarget } from "../../utils/types";

export interface IcSearchBarBlurEventDetail extends IcValueEventDetail {
  relatedTarget: IcRelatedTarget | null;
}

export type IcSearchBarSearchModes = "navigation" | "query";
