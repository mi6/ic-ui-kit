/* eslint-disable react/jsx-no-bind */
import { IcBadgeVariants, IcColor } from "@ukic/web-components";
import {
  IcBadge,
  IcButton,
  IcChip,
  IcTab,
  IcTabContext,
  IcTabGroup,
  IcTabPanel,
} from "../../components";
import { SlottedSVG } from "../../";
import React, { ReactElement } from "react";

const ReusableSlottedIcon = (): ReactElement => (
  <SlottedSVG
    slot="badge-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
  </SlottedSVG>
);

export const BadgeTypes = (variant: IcBadgeVariants, customColor?: IcColor) => {
  return (
    <div>
      <div style={{ padding: "16px" }}>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            text-label="1"
            slot="badge"
            variant={variant}
            customColor={customColor}
            size="small"
          />
          Small
        </IcButton>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            text-label="1"
            slot="badge"
            variant={variant}
            customColor={customColor}
          />
          Default
        </IcButton>
        <IcButton variant="secondary">
          <IcBadge
            text-label="1"
            slot="badge"
            variant={variant}
            customColor={customColor}
            size="large"
          />
          Large
        </IcButton>
      </div>
      <div style={{ padding: "16px" }}>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            type="dot"
            slot="badge"
            variant={variant}
            customColor={customColor}
            size="small"
          />
          Small Dot
        </IcButton>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            type="dot"
            slot="badge"
            variant={variant}
            customColor={customColor}
          />
          Default Dot
        </IcButton>
        <IcButton variant="secondary">
          <IcBadge
            type="dot"
            slot="badge"
            variant={variant}
            size="large"
            customColor={customColor}
          />
          Large Dot
        </IcButton>
      </div>
      <div style={{ padding: "16px" }}>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            type="icon"
            slot="badge"
            variant={variant}
            customColor={customColor}
            size="small"
          >
            <ReusableSlottedIcon />
          </IcBadge>
          Small Icon
        </IcButton>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            type="icon"
            slot="badge"
            variant={variant}
            customColor={customColor}
          >
            <ReusableSlottedIcon />
          </IcBadge>
          Default Icon
        </IcButton>
        <IcButton variant="secondary">
          <IcBadge
            type="icon"
            slot="badge"
            variant={variant}
            customColor={customColor}
            size="large"
          >
            <ReusableSlottedIcon />
          </IcBadge>
          Large Icon
        </IcButton>
      </div>
    </div>
  );
};

export const ShowHideBadge = (): ReactElement => {
  const badgeVisibility = () => {
    const badge: any = document.querySelector("ic-badge");
    if (badge.classList.contains("show")) {
      badge.visible = false;
    } else {
      badge.visible = true;
    }
  };

  return (
    <IcButton variant="secondary" onClick={badgeVisibility}>
      <IcBadge text-label="1" slot="badge" />
      Hide/Show badge
    </IcButton>
  );
};

export const AccessibleLabel = (): ReactElement => {
  return (
    <IcButton variant="secondary" style={{ margin: "16px" }}>
      <IcBadge
        text-label="1"
        slot="badge"
        size="large"
        accessible-label="1 notification found"
      />
      Default
    </IcButton>
  );
};

export const Default = (): ReactElement => {
  return (
    <IcButton variant="secondary" style={{ margin: "16px" }}>
      <IcBadge text-label="1" slot="badge" size="large" />
      Default
    </IcButton>
  );
};

export const MaxNumber = (): ReactElement => {
  return (
    <div>
      <div style={{ padding: "16px" }}>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            text-label="1000"
            slot="badge"
            size="small"
            max-number="9"
            variant="success"
          />
          Small
        </IcButton>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            text-label="1000"
            max-number="9"
            slot="badge"
            variant="success"
          />
          Default
        </IcButton>
        <IcButton variant="secondary">
          <IcBadge
            text-label="1000"
            slot="badge"
            size="large"
            max-number="9"
            variant="success"
          />
          Large
        </IcButton>
      </div>
      <div style={{ padding: "16px" }}>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            text-label="1000"
            slot="badge"
            size="small"
            max-number="99"
            variant="success"
          />
          Small
        </IcButton>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            text-label="1000"
            max-number="99"
            slot="badge"
            variant="success"
          />
          Default
        </IcButton>
        <IcButton variant="secondary">
          <IcBadge
            text-label="1000"
            slot="badge"
            size="large"
            max-number="99"
            variant="success"
          />
          Large
        </IcButton>
      </div>
    </div>
  );
};

export const PositionNear = (): ReactElement => {
  return (
    <div>
      <div style={{ padding: "16px" }}>
        <IcChip label="Small" style={{ marginRight: "16px" }}>
          <IcBadge text-label="1" slot="badge" position="near" size="small" />
        </IcChip>
        <IcChip label="Default" style={{ marginRight: "16px" }}>
          <IcBadge text-label="1" slot="badge" position="near" />
        </IcChip>
        <IcChip label="Large">
          <IcBadge text-label="1" slot="badge" position="near" size="large" />
        </IcChip>
      </div>
      <div style={{ padding: "16px" }}>
        <IcChip label="Small Dot" style={{ marginRight: "16px" }}>
          <IcBadge type="dot" slot="badge" position="near" size="small" />
        </IcChip>
        <IcChip label="Default Dot" style={{ marginRight: "16px" }}>
          <IcBadge type="dot" slot="badge" position="near" />
        </IcChip>
        <IcChip label="Large Dot">
          <IcBadge type="dot" slot="badge" position="near" size="large" />
        </IcChip>
      </div>
    </div>
  );
};

export const PositionInline = (): ReactElement => {
  return (
    <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>
          Small
          <IcBadge
            text-label="1"
            slot="badge"
            position="inline"
            size="small"
            accessibleLabel="1 notification found"
          />
        </IcTab>
        <IcTab>
          Default
          <IcBadge
            text-label="1"
            slot="badge"
            position="inline"
            accessibleLabel="1 notification found"
          />
        </IcTab>
        <IcTab>
          Large
          <IcBadge
            text-label="1"
            slot="badge"
            position="inline"
            size="large"
            accessibleLabel="1 notification found"
          />
        </IcTab>
        <IcTab>
          Small Dot
          <IcBadge type="dot" slot="badge" position="inline" size="small" />
        </IcTab>
        <IcTab>
          Dot
          <IcBadge type="dot" slot="badge" position="inline" />
        </IcTab>
        <IcTab>
          Large Dot
          <IcBadge type="dot" slot="badge" position="inline" size="large" />
        </IcTab>
      </IcTabGroup>
      <IcTabPanel>Small badge</IcTabPanel>
      <IcTabPanel>Default badge</IcTabPanel>
      <IcTabPanel>Large badge</IcTabPanel>
      <IcTabPanel>Small dot badge</IcTabPanel>
      <IcTabPanel>Default dot badge</IcTabPanel>
      <IcTabPanel>Large dot badge</IcTabPanel>
    </IcTabContext>
  );
};
