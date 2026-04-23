// IcToggleButtonGroupVariantsPage displays toggle button group variants for the purpose of performance testing of the IcToggleButton component.
import React from "react";
import {
  IcToggleButtonGroup,
  IcToggleButton,
  IcTheme,
  IcTypography,
} from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const reusableIcon = (
  <SlottedSVG
    slot="icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    fill="#000000"
  >
    <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
  </SlottedSVG>
);

<IcToggleButtonGroup accessibleLabel="Single and manual select toggle group">
  <IcToggleButton
    id="group1-toggle-1"
    label="Single and manual select toggle 1"
  />
  <IcToggleButton
    id="group1-toggle-2"
    label="Single and manual select toggle 2"
  />
  <IcToggleButton
    id="group1-toggle-3"
    label="Single and manual select toggle 3"
  />
</IcToggleButtonGroup>;

const IcToggleButtonGroupVariantsPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Toggle Button Group Variants Page</h1>
        </IcTypography>
        <IcToggleButtonGroup
          selectType="single"
          accessibleLabel="Single and manual select toggle group"
        >
          <IcToggleButton label="Single and manual select toggle 1" />
          <IcToggleButton label="Single and manual select toggle 2" />
          <IcToggleButton label="Single and manual select toggle 3" />
        </IcToggleButtonGroup>
        <br />
        <IcToggleButtonGroup
          selectType="single"
          selectMethod="auto"
          accessibleLabel="Single and auto select toggle group"
        >
          <IcToggleButton label="Single and auto select toggle 1" />
          <IcToggleButton label="Single and auto select toggle 2" />
          <IcToggleButton label="Single and auto select toggle 3" />
        </IcToggleButtonGroup>
        <br />
        <IcToggleButtonGroup
          selectType="multi"
          accessibleLabel="Multi and manual select toggle group"
        >
          <IcToggleButton label="Multi and manual select toggle 1" />
          <IcToggleButton label="Multi and manual select toggle 2" />
          <IcToggleButton label="Multi and manual select toggle 3" />
        </IcToggleButtonGroup>
        <br />
        <IcToggleButtonGroup
          size="small"
          accessibleLabel="Single and manual select toggle group"
        >
          <IcToggleButton label="Small toggle 1" />
          <IcToggleButton label="Small toggle 2" />
          <IcToggleButton label="Small toggle 3" />
        </IcToggleButtonGroup>
        <br />
        <IcToggleButtonGroup
          size="large"
          accessibleLabel="Single and manual select toggle group"
        >
          <IcToggleButton label="Large toggle 1" />
          <IcToggleButton label="Large toggle 2" />
          <IcToggleButton label="Large toggle 3" />
        </IcToggleButtonGroup>
        <br />
        <IcToggleButtonGroup
          fullWidth
          accessibleLabel="Single and manual select toggle group"
        >
          <IcToggleButton label="Full width toggle 1" />
          <IcToggleButton label="Full width toggle 2" />
          <IcToggleButton label="Full width toggle 3" />
        </IcToggleButtonGroup>
        <br />
        <IcToggleButtonGroup
          style={{
            width: "50%",
          }}
          accessibleLabel="Single and manual select toggle group"
        >
          <IcToggleButton label="Custom width toggle 1" />
          <IcToggleButton label="Custom width toggle 2" />
          <IcToggleButton label="Custom width toggle 3" />
        </IcToggleButtonGroup>
        <br />
        <IcToggleButtonGroup
          monochrome
          accessibleLabel="Single and manual select toggle group"
        >
          <IcToggleButton label="Monochrome toggle 1" />
          <IcToggleButton label="Monochrome toggle 2" />
          <IcToggleButton label="Monochrome toggle 3" />
        </IcToggleButtonGroup>
        <br />
        <IcToggleButtonGroup
          disabled
          accessibleLabel="Single and manual select toggle group"
        >
          <IcToggleButton label="Disabled toggle 1" />
          <IcToggleButton label="Disabled toggle 2" />
          <IcToggleButton label="Disabled toggle 3" />
        </IcToggleButtonGroup>
        <br />
        <IcToggleButtonGroup
          loading
          accessibleLabel="Single and manual select toggle group"
        >
          <IcToggleButton label="First toggle" />
          <IcToggleButton label="Second toggle" />
          <IcToggleButton label="Third toggle" />
        </IcToggleButtonGroup>
        <br />
        <IcToggleButtonGroup
          accessibleLabel="Coffee icon variants"
          variant="icon"
        >
          <IcToggleButton variant="icon" accessibleLabel="Coffee icon">
            {reusableIcon}
          </IcToggleButton>
          <IcToggleButton
            variant="icon"
            accessibleLabel="Loading coffee"
            loading
          >
            {reusableIcon}
          </IcToggleButton>
          <IcToggleButton
            variant="icon"
            accessibleLabel="Disabled coffee"
            disabled
          >
            {reusableIcon}
          </IcToggleButton>
        </IcToggleButtonGroup>
        <br />
        <IcToggleButtonGroup
          accessibleLabel="Alternatives to milk selection"
          iconPlacement="top"
        >
          <IcToggleButton label="First toggle" iconPlacement="top">
            {reusableIcon}
          </IcToggleButton>
          <IcToggleButton label="Second toggle" iconPlacement="top">
            {reusableIcon}
          </IcToggleButton>
        </IcToggleButtonGroup>
      </div>
    </IcTheme>
  );
};

export default IcToggleButtonGroupVariantsPage;
