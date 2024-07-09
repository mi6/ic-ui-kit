/* eslint-disable react/jsx-no-bind */
import { IcBadgeVariants, IcColor } from "@ukic/web-components";
import { SlottedSVG, IcBadge, IcButton } from "../../";
import React from "react";

export const badgeTypes = (variant: IcBadgeVariants, customColor?: IcColor) => {
  return (
    <div>
      <div style={{ padding: "16px" }}>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            label="1"
            slot="badge"
            variant={variant}
            customColor={customColor}
            size="small"
          />
          Small
        </IcButton>
        <IcButton variant="secondary" style={{ marginRight: "16px" }}>
          <IcBadge
            label="1"
            slot="badge"
            variant={variant}
            customColor={customColor}
          />
          Default
        </IcButton>
        <IcButton variant="secondary">
          <IcBadge
            label="1"
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
          </IcBadge>
          Large Icon
        </IcButton>
      </div>
    </div>
  );
};

export const ShowHideBadge = () => {
  const badgeVisibility = () => {
    const badge: any = document.querySelector("ic-badge");
    if (badge.classList.contains("ic-badge-show")) {
      badge.visible = false;
    } else {
      badge.visible = true;
    }
  };

  return (
    <IcButton variant="secondary" onClick={badgeVisibility}>
      <IcBadge label="1" slot="badge" />
      Hide/Show badge
    </IcButton>
  );
};
