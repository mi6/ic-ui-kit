import { IcMenuOption } from "../../utils/types";

export interface IcSelectOption extends Omit<IcMenuOption, "children"> {
  children?: IcSelectOption[];
  value?: string;
  label?: string;
}
