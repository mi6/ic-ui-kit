// IcChipMultiplePage displays multiple chips for the purpose of performance testing of the IcChip component.
import React from "react";
import {
  IcChip,
  IcActionChip,
  IcTheme,
  IcTypography,
} from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const ReusableIcon = (
  <SlottedSVG
    slot="icon"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="account"
  >
    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" />
  </SlottedSVG>
);

const ChipVariants = () => (
  <>
    <IcChip label="Medium">{ReusableIcon}</IcChip>
    <IcChip label="Small" size="small">
      {ReusableIcon}
    </IcChip>
    <IcChip label="Large" size="large">
      {ReusableIcon}
    </IcChip>
    <IcActionChip label="Medium">{ReusableIcon}</IcActionChip>
    <IcActionChip label="Small" size="small">
      {ReusableIcon}
    </IcActionChip>
    <IcActionChip label="Large" size="large">
      {ReusableIcon}
    </IcActionChip>
    <IcChip label="Medium" dismissible>
      {ReusableIcon}
    </IcChip>
    <IcChip label="Medium" variant="outlined">
      {ReusableIcon}
    </IcChip>
    <IcActionChip label="Medium" variant="outlined">
      {ReusableIcon}
    </IcActionChip>
    <IcChip label="Medium" dismissible disabled>
      {ReusableIcon}
    </IcChip>
    <IcActionChip label="Medium" disabled>
      {ReusableIcon}
    </IcActionChip>
    <IcChip label="Medium" variant="outlined" dismissible disabled>
      {ReusableIcon}
    </IcChip>
    <IcActionChip label="Medium" variant="outlined" disabled>
      {ReusableIcon}
    </IcActionChip>
    <IcChip label="Medium" customColor="#F8C8DC">
      {ReusableIcon}
    </IcChip>
    <IcChip label="Medium" variant="outlined" customColor="#F8C8DC">
      {ReusableIcon}
    </IcChip>
    <IcChip
      label="Medium"
      variant="outlined"
      transparentBackground={false}
      customColor="#F8C8DC"
    >
      {ReusableIcon}
    </IcChip>
    <IcActionChip label="Medium" monochrome>
      {ReusableIcon}
    </IcActionChip>
    <IcActionChip label="Medium" variant="outlined" monochrome>
      {ReusableIcon}
    </IcActionChip>
    <IcActionChip
      label="Medium"
      variant="outlined"
      transparentBackground={false}
      monochrome
    >
      {ReusableIcon}
    </IcActionChip>
  </>
);

const IcChipMultiplePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Chip Page Multiple</h1>
        </IcTypography>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <ChipVariants key={i} />
          ))}
        </div>
      </div>
    </IcTheme>
  );
};

export default IcChipMultiplePage;
