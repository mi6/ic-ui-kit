import { html } from "lit-html";

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
  title: "Web Components/Badge",
  component: "ic-badge",
};

export const Success = {
  render: () =>
    html`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="success"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="success"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="success"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="success"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="success"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="success"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="success" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="success">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="success" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,

  name: "Success",
};

export const Error = {
  render: () =>
    html`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="error"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="error"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="error"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="error"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="error"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="error"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="error" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="error">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="error" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,

  name: "Error",
};

export const Warning = {
  render: () =>
    html`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="warning"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="warning"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="warning"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="warning"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="warning"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="warning"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="warning" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="warning">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="warning" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,

  name: "Warning",
};

export const Neutral = {
  render: () =>
    html`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="neutral"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="neutral"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="neutral"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="neutral"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="neutral"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="neutral"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="neutral" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="neutral">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="neutral" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,

  name: "Neutral",
};

export const Light = {
  render: () =>
    html`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="light"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="light"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="light"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="light"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="light"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="light"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="light" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="light">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="light" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,

  name: "Light",
};

export const Info = {
  render: () =>
    html`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="info"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="info"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="info"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="info"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="info"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="info"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="info" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="info">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="info" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,

  name: "Info",
};

export const AI = {
  render: () =>
    html`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="ai" size="small"></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="ai"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge label="1" slot="badge" variant="ai" size="large"></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="ai"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="ai"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="ai"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px">
          <ic-badge type="icon" slot="badge" variant="ai" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="Artificial Intelligence (AI)"
            >
              <path
                d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"
              />
            </svg>
          </ic-badge>
          Small Icon
        </ic-button>
        <ic-button variant="secondary" style="margin-right:16px">
          <ic-badge type="icon" slot="badge" variant="ai">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="Artificial Intelligence (AI)"
            >
              <path
                d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"
              />
            </svg>
          </ic-badge>
          Default Icon
        </ic-button>
        <ic-button variant="secondary">
          <ic-badge type="icon" slot="badge" variant="ai" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="Artificial Intelligence (AI)"
            >
              <path
                d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"
              />
            </svg>
          </ic-badge>
          Large Icon
        </ic-button>
      </div>`,

  name: "AI",
};

export const Custom = {
  render: () =>
    html`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
          ></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
          ></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
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
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
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
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
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
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,

  name: "Custom",
};

export const MaxNumber = {
  render: () =>
    html`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1000"
            slot="badge"
            size="small"
            max-number="9"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1000" max-number="9" slot="badge"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1000"
            slot="badge"
            size="large"
            max-number="9"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1000"
            slot="badge"
            size="small"
            max-number="99"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1000" max-number="99" slot="badge"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1000"
            slot="badge"
            size="large"
            max-number="99"
          ></ic-badge
          >Large</ic-button
        >
      </div>`,

  name: "Max number",
};

export const PositionNear = {
  render: () =>
    html`<div style="padding:16px;">
        <ic-chip label="Small" style="margin-right:16px;"
          ><ic-badge
            label="1"
            slot="badge"
            position="near"
            size="small"
          ></ic-badge
        ></ic-chip>
        <ic-chip label="Default" style="margin-right:16px;"
          ><ic-badge label="1" slot="badge" position="near"></ic-badge
        ></ic-chip>
        <ic-chip label="Large"
          ><ic-badge
            label="1"
            slot="badge"
            position="near"
            size="large"
          ></ic-badge
        ></ic-chip>
      </div>
      <div style="padding:16px;">
        <ic-chip label="Small Dot" style="margin-right:16px;"
          ><ic-badge
            type="dot"
            slot="badge"
            position="near"
            size="small"
          ></ic-badge
        ></ic-chip>
        <ic-chip label="Default Dot" style="margin-right:16px;"
          ><ic-badge type="dot" slot="badge" position="near"></ic-badge
        ></ic-chip>
        <ic-chip label="Large Dot"
          ><ic-badge
            type="dot"
            slot="badge"
            position="near"
            size="large"
          ></ic-badge
        ></ic-chip>
      </div>`,

  name: "Position near",
};

export const PositionInline = {
  render: () =>
    html`<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab
          >Small<ic-badge
            label="1"
            slot="badge"
            position="inline"
            size="small"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Default<ic-badge
            label="1"
            slot="badge"
            position="inline"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Large<ic-badge
            label="1"
            slot="badge"
            position="inline"
            size="large"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Small Dot<ic-badge
            type="dot"
            slot="badge"
            position="inline"
            size="small"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Dot<ic-badge type="dot" slot="badge" position="inline"></ic-badge
        ></ic-tab>
        <ic-tab
          >Large Dot<ic-badge
            type="dot"
            slot="badge"
            position="inline"
            size="large"
          ></ic-badge
        ></ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Small badge</ic-tab-panel>
      <ic-tab-panel>Default badge</ic-tab-panel>
      <ic-tab-panel>Large badge</ic-tab-panel>
      <ic-tab-panel>Small dot badge</ic-tab-panel>
      <ic-tab-panel>Default dot badge</ic-tab-panel>
      <ic-tab-panel>Large dot badge</ic-tab-panel>
    </ic-tab-context>`,

  name: "Position inline",
};

export const HideBadge = {
  render: () =>
    html`<script>
        function showHideBadge() {
          badge = document.querySelector("ic-badge");
          if (badge.classList.contains("ic-badge-show")) {
            badge.visible = false;
          } else {
            badge.visible = true;
          }
        }
      </script>
      <div style="padding:16px;">
        <ic-button variant="secondary" onclick="showHideBadge()"
          ><ic-badge label="1" slot="badge"></ic-badge>Show/Hide
          badge</ic-button
        >
      </div> `,

  name: "Hide badge",
};

export const AccessibleLabel = {
  render: () =>
    html`<div style="padding:16px;">
      <ic-button variant="secondary" style="margin-right:16px"
        ><ic-badge
          label="1"
          slot="badge"
          size="large"
          accessible-label="1 notification found"
        ></ic-badge
        >Default</ic-button
      >
      <ic-chip label="Default dot" dismissible="true"
        ><ic-badge
          type="dot"
          slot="badge"
          position="near"
          accessible-label="Notifications found"
        ></ic-badge
      ></ic-chip>
    </div> `,

  name: "Accessible label",
};

export const Playground = {
  render: (args) =>
    html`<ic-button variant="secondary">
      <ic-badge
        slot="badge"
        accessible-label=${args.accessibleLabel}
        custom-color=${args.customColor}
        max-number=${args.maxNumber}
        position=${args.position}
        size=${args.size}
        label=${args.label}
        type=${args.type}
        variant=${args.variant}
        theme=${args.theme}
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
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-badge>
      Default
    </ic-button>`,

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
        "ai",
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
