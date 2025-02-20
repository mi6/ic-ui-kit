/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {
  IcBadge,
  IcButton,
  IcChip,
  IcTab,
  IcTabContext,
  IcTabGroup,
  IcTabPanel,
} from "../components";

const showHideBadge = () => {
  const badge = document.querySelector("ic-badge");
  if (badge.classList.contains("ic-badge-show")) {
    badge.visible = false;
  } else {
    badge.visible = true;
  }
};

const defaultArgs = {
  accessibleLabel: "notification",
  customColor: null,
  maxNumber: 1000,
  position: "far",
  size: "medium",
  label: "1",
  type: "text",
  variant: "neutral",
  theme: "inherit",
};

export default {
  title: "Badge",
  component: IcBadge,
};

export const Success = {
  render: () => (
    <>
      <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="success" size="small" />
        Small
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="success" />
        Default
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge label="1" slot="badge" variant="success" size="large" />
        Large
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="success" size="small" />
        Small Dot
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="success" />
        Default Dot
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="dot" slot="badge" variant="success" size="large" />
        Large Dot
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="success" size="small">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Small Icon
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="success">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Default Icon
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="icon" slot="badge" variant="success" size="large">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Large Icon
      </IcButton>
    </div>
    </>
  ),

  name: "Success",
};

export const Error = {
  render: () => (
    <>
      <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="error" size="small" />
        Small
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="error" />
        Default
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge label="1" slot="badge" variant="error" size="large" />
        Large
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="error" size="small" />
        Small Dot
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="error" />
        Default Dot
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="dot" slot="badge" variant="error" size="large" />
        Large Dot
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="error" size="small">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Small Icon
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="error">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Default Icon
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="icon" slot="badge" variant="error" size="large">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Large Icon
      </IcButton>
    </div>
    </>
  ),

  name: "Error",
};

export const Warning = {
  render: () => (
    <>
      <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="warning" size="small" />
        Small
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="warning" />
        Default
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge label="1" slot="badge" variant="warning" size="large" />
        Large
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="warning" size="small" />
        Small Dot
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="warning" />
        Default Dot
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="dot" slot="badge" variant="warning" size="large" />
        Large Dot
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="warning" size="small">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Small Icon
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="warning">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Default Icon
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="icon" slot="badge" variant="warning" size="large">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Large Icon
      </IcButton>
    </div>
    </>
  ),

  name: "Warning",
};

export const Neutral = {
  render: () => (
    <>
      <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="neutral" size="small" />
        Small
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="neutral" />
        Default
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge label="1" slot="badge" variant="neutral" size="large" />
        Large
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="neutral" size="small" />
        Small Dot
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="neutral" />
        Default Dot
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="dot" slot="badge" variant="neutral" size="large" />
        Large Dot
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="neutral" size="small">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Small Icon
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="neutral">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Default Icon
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="icon" slot="badge" variant="neutral" size="large">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Large Icon
      </IcButton>
    </div>
    </>
  ),

  name: "Neutral",
};

export const Light = {
  render: () => (
    <>
      <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="light" size="small" />
        Small
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="light" />
        Default
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge label="1" slot="badge" variant="light" size="large" />
        Large
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="light" size="small" />
        Small Dot
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="light" />
        Default Dot
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="dot" slot="badge" variant="light" size="large" />
        Large Dot
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="light" size="small">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Small Icon
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="light">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Default Icon
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="icon" slot="badge" variant="light" size="large">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Large Icon
      </IcButton>
    </div>
    </>
  ),

  name: "Light",
};

export const Info = {
  render: () => (
    <>
      <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="info" size="small" />
        Small
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" variant="info" />
        Default
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge label="1" slot="badge" variant="info" size="large" />
        Large
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="info" size="small" />
        Small Dot
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="dot" slot="badge" variant="info" />
        Default Dot
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="dot" slot="badge" variant="info" size="large" />
        Large Dot
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="info" size="small">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Small Icon
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge type="icon" slot="badge" variant="info">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Default Icon
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge type="icon" slot="badge" variant="info" size="large">
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Large Icon
      </IcButton>
    </div>
    </>
  ),

  name: "Info",
};

export const Custom = {
  render: () => (
    <>
      <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge
          label="1"
          slot="badge"
          variant="custom"
          custom-color="#F8C8DC"
          size="small"
        />
        Small
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge
          label="1"
          slot="badge"
          variant="custom"
          custom-color="#F8C8DC"
        />
        Default
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge
          label="1"
          slot="badge"
          variant="custom"
          custom-color="#F8C8DC"
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
          variant="custom"
          custom-color="#F8C8DC"
          size="small"
        />
        Small Dot
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge
          type="dot"
          slot="badge"
          variant="custom"
          custom-color="#F8C8DC"
        />
        Default Dot
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge
          type="dot"
          slot="badge"
          variant="custom"
          custom-color="#F8C8DC"
          size="large"
        />
        Large Dot
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge
          type="icon"
          slot="badge"
          variant="custom"
          custom-color="#F8C8DC"
          size="small"
        >
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Small Icon
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge
          type="icon"
          slot="badge"
          variant="custom"
          custom-color="#F8C8DC"
        >
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Default Icon
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge
          type="icon"
          slot="badge"
          variant="custom"
          custom-color="#F8C8DC"
          size="large"
        >
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcBadge>
        Large Icon
      </IcButton>
    </div>
    </>
  ),

  name: "Custom",
};

export const MaxNumber = {
  render: () => (
    <>
      <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1000" slot="badge" size="small" max-number="9" />
        Small
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1000" max-number="9" slot="badge" />
        Default
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge label="1000" slot="badge" size="large" max-number="9" />
        Large
      </IcButton>
    </div>
    <div style={{ padding: "16px" }}>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1000" slot="badge" size="small" max-number="99" />
        Small
      </IcButton>
      <IcButton variant="secondary" style={{ marginRight: "16px" }}>
        <IcBadge label="1000" max-number="99" slot="badge" />
        Default
      </IcButton>
      <IcButton variant="secondary">
        <IcBadge label="1000" slot="badge" size="large" max-number="99" />
        Large
      </IcButton>
    </div>
    </>
  ),

  name: "Max number",
};

export const PositionNear = {
  render: () => (
    <>
       <div style={{ padding: "16px" }}>
      <IcChip label="Small" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" position="near" size="small" />
      </IcChip>
      <IcChip label="Default" style={{ marginRight: "16px" }}>
        <IcBadge label="1" slot="badge" position="near" />
      </IcChip>
      <IcChip label="Large">
        <IcBadge label="1" slot="badge" position="near" size="large" />
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
    </>
  ),

  name: "Position near",
};

export const PositionInline = {
  render: () => (
    <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>
          Small
          <IcBadge
            label="1"
            slot="badge"
            position="inline"
            size="small"
            accessibleLabel="1 notification found"
          />
        </IcTab>
        <IcTab>
          Default
          <IcBadge
            label="1"
            slot="badge"
            position="inline"
            accessibleLabel="1 notification found"
          />
        </IcTab>
        <IcTab>
          Large
          <IcBadge
            label="1"
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
  ),

  name: "Position inline",
};

export const HideBadge = {
  render: () => (
    <div
      style={{
        padding: "16px",
      }}
    >
      <IcButton variant="secondary" onclick={showHideBadge}>
        <IcBadge label="1" slot="badge" />
        Hide/Show badge
      </IcButton>
    </div>
  ),

  name: "Hide badge",
};

export const AccessibleLabel = {
  render: () => (
    <div
      style={{
        padding: "16px",
      }}
    >
      <IcButton
        variant="secondary"
        style={{
          marginRight: "16px",
        }}
      >
        <IcBadge
          label="1"
          slot="badge"
          size="large"
          accessibleLabel="1 notification found"
        />
        Default
      </IcButton>
      <IcChip label="Default dot" dismissible="true">
        <IcBadge
          type="dot"
          slot="badge"
          position="near"
          accessibleLabel="Notifications found"
        />
      </IcChip>
    </div>
  ),

  name: "Accessible label",
};

export const Playground = {
  render: (args) => (
    <IcButton variant="secondary">
      <IcBadge
        accessibleLabel={args.accessibleLabel}
        customColor={args.customColor}
        maxNumber={args.maxNumber}
        position={args.position}
        size={args.size}
        label={args.label}
        type={args.type}
        variant={args.variant}
        theme={args.theme}
      >
        <svg
          slot="badge-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          aria-label="retry"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcBadge>
      Default
    </IcButton>
  ),

  args: defaultArgs,

  argTypes: {
    customColor: {
      control: {
        type: "text",
      },
    },

    position: {
      options: ["far", "near", "inline"],

      control: {
        type: "radio",
      },
    },

    size: {
      options: ["small", "medium", "large"],

      control: {
        type: "radio",
      },
    },

    type: {
      options: ["text", "dot", "icon"],

      control: {
        type: "radio",
      },
    },

    variant: {
      options: [
        "neutral",
        "success",
        "warning",
        "error",
        "info",
        "light",
        "custom",
      ],

      control: {
        type: "select",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
