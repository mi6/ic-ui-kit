import { IcBrandForeground } from "../../utils/types";

export interface IcTopBar {
  isSDevice: boolean;
  foregroundColor: IcBrandForeground;
  menuOpen: boolean;
  href: string;
  isAppNameSubtitleVariant: boolean;
  appTitle: string;
}

export interface IcExpandedDetail {
  sideNavExpanded: boolean;
  sideNavMobile: boolean;
}
