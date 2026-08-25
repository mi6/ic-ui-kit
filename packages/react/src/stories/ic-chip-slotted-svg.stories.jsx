import React from "react";

import { IcChip } from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

const ACCOUNT_ICON =
  "M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";

export default {
  title: "Chip",
  component: IcChip,
};

const AccountIcon = () => (
  <SlottedSVG
    slot="icon"
    path={ACCOUNT_ICON}
    viewBox="0 0 24 24"
    aria-label="account"
  />
);

export const SlottedSvg = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <IcChip label="Small" size="small">
        <AccountIcon />
      </IcChip>
      <IcChip label="Medium">
        <AccountIcon />
      </IcChip>
      <IcChip label="Large" size="large">
        <AccountIcon />
      </IcChip>
    </div>
  ),
  name: "With SlottedSVG",
};
