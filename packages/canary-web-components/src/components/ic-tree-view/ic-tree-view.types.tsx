import { IcThemeMode } from "../../components";

export type IcTreeItemOptions = {
  label: string;
  icon?: string;
  children?: IcTreeItemOptions[];
  disabled?: boolean;
  expanded?: boolean;
  href?: string;
  selected?: boolean;
  theme?: IcThemeMode;
  truncateTreeItem?: boolean;
};
