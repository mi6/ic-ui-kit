import { IcValueEventDetail, IcRelatedTarget } from "../../interface";

export interface IcSearchBarBlurEventDetail extends IcValueEventDetail {
  relatedTarget: IcRelatedTarget;
}
