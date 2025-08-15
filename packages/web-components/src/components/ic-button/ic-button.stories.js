import { html } from "lit-html";

const defaultArgs = {
  message: "Custom Button",
  disabled: false,
  loading: false,
  theme: "inherit",
  size: "medium",
  variant: "secondary",
  fullWidth: false,
  iconPlacement: "right-icon",
  monochrome: false,
  dropdown: false,
  transparentBackground: true,
};

export default {
  title: "Web Components/Button",
  component: "ic-button",
};

export const Primary = {
  render: () =>
    html`<div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="primary" theme="light" id="mybuttonid">
              Primary
            </ic-button>
            <ic-button variant="primary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="primary" monochrome theme="light">
              Monochrome
            </ic-button>
            <ic-button variant="primary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="primary" theme="dark" id="mybuttonid">
              Primary
            </ic-button>
            <ic-button variant="primary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="primary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="primary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`,

  name: "Primary",
};

export const Secondary = {
  render: () =>
    html` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="secondary" theme="light" id="mybuttonid">
              Secondary
            </ic-button>
            <ic-button variant="secondary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="secondary" monochrome theme="light">
              Monochrome
            </ic-button>
            <ic-button variant="secondary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              transparent-background="false"
              theme="light"
            >
              Solid
            </ic-button>
            <ic-button
              variant="secondary"
              disabled
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome, non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              theme="light"
              monochrome
              transparent-background="false"
            >
              Mono-Solid
            </ic-button>
            <ic-button
              variant="secondary"
              disabled
              monochrome
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#232629; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="secondary" theme="dark" id="mybuttonid">
              Secondary
            </ic-button>
            <ic-button variant="secondary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="secondary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="secondary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              theme="dark"
              id="mybuttonid"
              transparent-background="false"
            >
              Solid
            </ic-button>
            <ic-button
              variant="secondary"
              theme="dark"
              disabled
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome, non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              monochrome
              theme="dark"
              transparent-background="false"
            >
              Mono-solid
            </ic-button>
            <ic-button
              variant="secondary"
              disabled
              monochrome
              theme="dark"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`,

  name: "Secondary",
};

export const Tertiary = {
  render: () =>
    html` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="light" id="mybuttonid">
              Tertiary
            </ic-button>
            <ic-button variant="tertiary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="light" monochrome>
              Monochrome
            </ic-button>
            <ic-button variant="tertiary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="tertiary"
              transparent-background="false"
              theme="light"
            >
              Solid
            </ic-button>
            <ic-button
              variant="tertiary"
              disabled
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome, non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="tertiary"
              theme="light"
              monochrome
              transparent-background="false"
            >
              Mono-Solid
            </ic-button>
            <ic-button
              variant="tertiary"
              disabled
              monochrome
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#232629; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="dark" id="mybuttonid">
              Tertiary
            </ic-button>
            <ic-button variant="tertiary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="tertiary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="tertiary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="tertiary"
              theme="dark"
              id="mybuttonid"
              transparent-background="false"
            >
              Solid
            </ic-button>
            <ic-button
              variant="tertiary"
              theme="dark"
              disabled
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome, non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="tertiary"
              monochrome
              theme="dark"
              transparent-background="false"
            >
              Mono-solid
            </ic-button>
            <ic-button
              variant="tertiary"
              disabled
              monochrome
              theme="dark"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`,

  name: "Tertiary",
};

export const Destructive = {
  render: () =>
    html` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="destructive" theme="light" id="mybuttonid">
              Destructive
            </ic-button>
            <ic-button variant="destructive" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="destructive" theme="dark" id="mybuttonid">
              Destructive
            </ic-button>
            <ic-button variant="destructive" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`,

  name: "Destructive",
};

export const IconVariants = {
  render: () =>
    html`<div style="display:flex; gap: 1rem; flex-direction:column;">
      <div>
        <ic-typography>Default</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Small</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Large</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Loading</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            theme="light"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Disabled</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Light - monochrome</ic-typography>
        <div
          style="width: fit-content; background-color: #ececec; padding: 0.5rem;"
        >
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark Loading</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark - monochrome</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
    </div>`,

  name: "Icon variants",
};

export const WithIcon = {
  render: () =>
    html`<div style="padding: 1rem; display: flex; gap: 1rem">
        <ic-button variant="primary">
          Primary
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="secondary">
          Secondary
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="tertiary">
          Tertiary
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="destructive">
          Destructive
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
      </div>
      <div style="padding: 1rem; display: flex; gap: 1rem">
        <ic-button variant="primary">
          Primary
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="secondary">
          Secondary
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="tertiary">
          Tertiary
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="destructive">
          Destructive
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
      </div> `,

  name: "With icon",
};

export const Dropdown = {
  render: () =>
    html`<div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary">Button</ic-button>
        <ic-button dropdown="true" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary">Button</ic-button>
        <ic-button dropdown="true" variant="tertiary">Button</ic-button>
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" disabled="true" variant="primary"
          >Button</ic-button
        >
        <ic-button dropdown="true" disabled="true" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" disabled="true" variant="secondary"
          >Button</ic-button
        >
        <ic-button dropdown="true" disabled="true" variant="tertiary"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" theme="dark"
          >Button</ic-button
        >
        <ic-button dropdown="true" theme="dark" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" theme="dark"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" theme="dark"
          >Button</ic-button
        >
      </div>
      <div
        style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content;"
      >
        <ic-button dropdown="true" variant="primary" theme="light"
          >Button</ic-button
        >
        <ic-button dropdown="true" theme="light" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" theme="light"
          >Button</ic-button
        >
        <ic-button
          dropdown="true"
          variant="tertiary"
          theme="light"
          id="mybuttonid"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" size="small"
          >Button</ic-button
        >
        <ic-button dropdown="true" size="small" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" size="small"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" size="small"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" size="large"
          >Button</ic-button
        >
        <ic-button dropdown="true" size="large" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" size="large"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" size="large"
          >Button</ic-button
        >
      </div>
    </div>`,

  name: "Dropdown",
};

export const DropdownExample = {
  render: () =>
    html`<script>
        var icPopover = document.querySelector("#popover-menu");
        var icButton = document.querySelector("#button-1");
        function handleClick() {
          icPopover.open = icButton.dropdownExpanded;
        }
        icPopover.addEventListener("icPopoverClosed", handleClose);
        function handleClose() {
          icButton.dropdownExpanded = icPopover.open;
        }
      </script>
      <div>
        <ic-button
          dropdown="true"
          variant="primary"
          onclick="handleClick()"
          id="button-1"
          >Button</ic-button
        >
        <ic-popover-menu
          anchor="button-1"
          aria-label="popover"
          id="popover-menu"
        >
          <ic-menu-item label="Copy code"></ic-menu-item>
          <ic-menu-item label="Paste code"></ic-menu-item>
          <ic-menu-item label="Actions"></ic-menu-item>
        </ic-popover-menu>
      </div>`,

  name: "Dropdown example",
};

export const Size = {
  render: () =>
    html` <ic-button variant="primary" size="small">Small</ic-button>
      <ic-button variant="primary">Default</ic-button>
      <ic-button variant="primary" size="large">Large</ic-button>
      <ic-button variant="primary" size="small"
        >Small
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary"
        >Default
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary" size="large"
        >Large
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>`,

  name: "Size",
};

export const RouterLink = {
  render: () =>
    html`<div style="padding: 8px">
        <ic-button size="small">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button>
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button size="large">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button disabled="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="secondary">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="tertiary">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="destructive">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="icon">
          <a slot="router-item" href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button theme="light" monochrome="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button theme="dark" monochrome="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
      </div>`,

  name: "Router link",

  parameters: {
    layout: "fullscreen",
  },
};

export const RouterLinkWithSlottedContent = {
  render: () =>
    html`<div style="padding: 8px">
        <ic-button size="small">
          <a slot="router-item" href="/">
            <svg
              slot="left-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button>
          <a slot="router-item" href="/">
            <svg
              slot="left-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button size="large">
          <a slot="router-item" href="/">
            <svg
              slot="left-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            <ic-badge slot="badge" label="1" position="near"></ic-badge>
            Slotted link
          </a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button disabled="true">
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button variant="secondary">
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button variant="tertiary">
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button variant="destructive">
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button theme="light" monochrome="true">
          <a slot="router-item" href="/">
            <svg
              slot="top-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button theme="dark" monochrome="true">
          <a slot="router-item" href="/">
            <svg
              slot="top-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
      </div>`,

  name: "Router link - with slotted content",

  parameters: {
    layout: "fullscreen",
  },
};

export const IconWithoutViewBox = {
  render: () =>
    html`<ic-button variant="primary" size="small"
        >Small
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary"
        >Default
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary" size="large"
        >Large
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>`,

  name: "Icon without viewBox",
};

export const FullWidth = {
  render: () => html`
    <ic-button variant="primary" full-width="true"
      >Button
      <svg
        slot="left-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-button>
    <ic-button variant="secondary" full-width="true"
      >Button
      <svg
        slot="left-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-button>
    <ic-button variant="tertiary" full-width="true"
      >Button
      <svg
        slot="left-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-button>
    <ic-button theme="dark" full-width="true"
      >Button
      <svg
        slot="left-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-button>
    <ic-button variant="destructive" full-width="true"
      >Button
      <svg
        slot="left-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-button>
    <ic-button variant="destructive" disabled full-width="true"
      >Button
      <svg
        slot="left-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-button>
    <div
      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px,"
    >
      <ic-button variant="primary" theme="light" full-width="true">
        Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="secondary" theme="light" full-width="true">
        Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="tertiary" theme="light" full-width="true">
        Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
    </div>
  `,

  name: "Full width",
};

export const MinWidth = {
  render: () => html`
    <style>
      ic-button {
        --min-width: 4rem;
      }
    </style>
    <ic-button>Min</ic-button>
    <ic-button variant="secondary">Min</ic-button>
  `,

  name: "Min width",
};

export const Height = {
  render: () => html`
    <style>
      ic-button[name="tall-button"] {
        --height: 9rem;
      }
    </style>
    <ic-button name="tall-button">Tall Button</ic-button>
    <ic-button variant="secondary" name="tall-button">Tall Button</ic-button>
  `,

  name: "Height",
};

export const Tooltips = {
  render: () =>
    html`<ic-button
        variant="icon"
        aria-label="refresh"
        title="aria label sets the icon button's accessible name, title adds a tooltip"
        id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-button
        variant="icon"
        aria-label="you can disable tooltips on icon buttons"
        disable-tooltip="true"
        id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-button
        variant="primary"
        id="testbutton2"
        title="We can add tooltips to text buttons"
        >Button With Title</ic-button
      >
      <ic-button
        variant="primary"
        id="testbutton2"
        title="the tooltipPlacement prop allows us to change the location of the tooltip"
        tooltip-placement="right"
        >Different positions</ic-button
      >`,

  name: "Tooltips",
};

const inlineRadioSelector = "inline-radio";

export const Playground = {
  render: (args) =>
    html`<ic-button
      disabled=${args.disabled}
      variant=${args.variant}
      full-width=${args.fullWidth}
      size=${args.size}
      loading=${args.loading}
      theme=${args.theme}
      monochrome=${args.monochrome}
      dropdown=${args.dropdown}
      transparent-background=${args.transparentBackground}
      >${args.message}</ic-button
    >`,

  args: defaultArgs,

  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", "destructive"],

      control: {
        type: "select",
      },
    },

    size: {
      options: ["medium", "large", "small"],

      control: {
        type: inlineRadioSelector,
      },
    },

    theme: {
      options: ["inherit", "dark", "light"],

      control: {
        type: inlineRadioSelector,
      },
    },

    fullWidth: {
      control: {
        type: "boolean",
      },
    },

    monochrome: {
      control: {
        type: "boolean",
      },
    },

    dropdown: {
      control: {
        type: "boolean",
      },
    },

    transparentBackground: {
      control: {
        type: "boolean",
      },
    },
  },

  name: "Playground",
};

export const PlaygroundWithIcon = {
  render: (args) =>
    html`<ic-button
      disabled=${args.disabled}
      variant=${args.variant}
      size=${args.size}
      full-width=${args.fullWidth}
      loading=${args.loading}
      theme=${args.theme}
      monochrome=${args.monochrome}
      >${args.message}
      <svg
        slot=${args.iconPlacement}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        /></svg
    ></ic-button>`,

  args: {
    ...defaultArgs,
  },

  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", "destructive"],

      control: {
        type: "select",
      },
    },

    size: {
      options: ["medium", "large", "small"],

      control: {
        type: inlineRadioSelector,
      },
    },

    theme: {
      options: ["default", "dark", "light"],

      control: {
        type: inlineRadioSelector,
      },
    },

    fullWidth: {
      control: {
        type: "boolean",
      },
    },

    iconPlacement: {
      options: ["left-icon", "right-icon", "top-icon"],

      control: {
        type: inlineRadioSelector,
      },
    },

    monochrome: {
      control: {
        type: "boolean",
      },
    },
  },

  name: "Playground with icon",
};

export const Loading = {
  render: () => html`
    <div style="padding: 6px">
      <ic-button variant="primary" loading>Button</ic-button>
    </div>
    <div style="padding: 6px">
      <ic-button variant="primary" loading theme="dark">Button</ic-button>
    </div>
    <div
      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content"
    >
      <ic-button variant="primary" loading theme="light">Button</ic-button>
    </div>
    <div style="padding: 6px">
      <ic-button variant="secondary" loading>Button</ic-button>
    </div>
    <div style="padding: 6px">
      <ic-button variant="secondary" loading theme="dark">Button</ic-button>
    </div>
    <div
      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content"
    >
      <ic-button variant="secondary" loading theme="light">Button</ic-button>
    </div>
    <div style="padding: 6px">
      <ic-button variant="tertiary" loading>Button</ic-button>
    </div>
    <div style="padding: 6px">
      <ic-button variant="tertiary" loading theme="dark">Button</ic-button>
    </div>
    <div
      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content"
    >
      <ic-button variant="tertiary" loading theme="light">Button</ic-button>
    </div>
    <ic-button variant="destructive" loading>Button</ic-button>
  `,

  name: "Loading",
};

export const AriaDescribedby = {
  render: () => html`
    <script>
      function btnClick() {
        var descEl = document.querySelector("#button-description");
        descEl.innerText = "See, I told you it was amazing!";
      }
    </script>
    <div style="padding: 6px">
      <span id="button-description">This button does something amazing</span>
      <br />
      <ic-button
        variant="primary"
        onclick="btnClick()"
        aria-describedby="button-description"
        >Button</ic-button
      >
    </div>
  `,

  name: "Aria-describedby",
};

export const FileUploadInAForm = {
  render: (args) => html`
    <form method="POST" action="someurl" enctype="multipart/form-data">
      <span id="selected-file">No File Selected</span>
      <div style="padding: 6px">
        <ic-button
          variant="primary"
          id="file-button"
          multiple="true"
          file-upload="true"
          accept=".doc, text/plain, .json"
          >Upload File true</ic-button
        >
      </div>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
    <script>
      var descEl = document.querySelector("#selected-file");
      var file;
      onclick = document
        .querySelector("#file-button")
        .addEventListener("icFileSelection", (ev) => {
          const fileArray = ev.detail;
          const fileList = [];
          Array.from(fileArray).forEach((file) => {
            fileList.push(file.name);
          });
          descEl.innerText = "Files Selected: " + fileList.join(", ");
          file = ev;
        });
      document.querySelector("form").addEventListener("submit", (ev) => {
        if (file == undefined) return;
      });
    </script>
  `,

  name: "File upload in a form",
};

export const FileUpload = {
  render: (args) => html`
    <span id="selected-file">No File Selected</span>
    <div style="padding: 6px">
      <ic-button
        variant="primary"
        id="file-button"
        file-upload="true"
        accept=".doc, text/plain, .json"
        >Upload File true</ic-button
      >
    </div>
    <script>
      var descEl = document.querySelector("#selected-file");
      var file;
      onclick = document
        .querySelector("#file-button")
        .addEventListener("icFileSelection", (ev) => {
          const fileArray = ev.detail;
          const fileList = [];
          Array.from(fileArray).forEach((file) => {
            fileList.push(file.name);
          });
          descEl.innerText = "Files Selected: " + fileList.join(", ");
        });
    </script>
  `,

  name: "File upload",
};
