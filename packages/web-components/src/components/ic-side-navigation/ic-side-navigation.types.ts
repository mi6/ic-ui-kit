import { IcThemeForeground } from "../../utils/types";

export interface IcTopBar {
  isSDevice: boolean;
  foregroundColor: IcThemeForeground;
  menuOpen: boolean;
  href: string;
  isAppNameSubtitleVariant: boolean;
  appTitle: string;
}

export interface IcExpandedDetail {
  sideNavExpanded: boolean;
  sideNavMobile: boolean;
}
