/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { html } from "lit-html";
import readme from "./readme.md";

export default {
  title: "Web Components/Horizontal Card",
  component: "Horizontal Card",
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use a horizontal card to display a message or content in a horizontal layout.
 *
 * There is one required prop for a horizontal card:
 * - heading: `string`
 *
 * Click the 'Component API' tab to view all the available props and events for horizontal card.
 *
 * To use the horizontal card component, import `@ukic/canary-web-components` into your application.
 */
export const Default = {
  render: () =>
    html`<ic-card-horizontal heading="Card heading"></ic-card-horizontal>`,
  name: "Default",
};

/**
 * Add more information to the horizontal card by including a message.
 */
export const Message = {
  render: () =>
    html`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
    ></ic-card-horizontal>`,
  name: "Message",
};

/**
 * Add an icon to the horizontal card.
 */
export const Icon = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
  >
    <svg
      slot="icon"
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
  </ic-card-horizontal>`,
  name: "Icon",
};

/**
 * Add an interaction button to horizontal card.
 */
export const InteractionButton = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
  >
    <ic-button
      variant="icon-tertiary"
      title="More information"
      slot="interaction-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-three-dots-vertical"
        viewBox="0 0 16 16"
      >
        <path
          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
        />
      </svg>
    </ic-button>
  </ic-card-horizontal>`,
  name: "Interaction button",
};

/**
 * Add a subheading to horizontal card either via prop or slot.
 */
export const Subheading = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    subheading="Card subheading"
    density="spacious"
  ></ic-card-horizontal>`,
  name: "Subheading",
};

export const SubheadingSlot = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    density="spacious"
  >
    <ic-typography variant="subtitle-small" slot="subheading"
      >Card subheading</ic-typography
    >
  </ic-card-horizontal>`,
  name: "Subheading - slotted",
};

/**
 * Add an adornment to horizontal card.
 */
export const Adornment = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    density="spacious"
  >
    <ic-status-tag
      slot="adornment"
      label="Neutral"
      size="small"
    ></ic-status-tag>
  </ic-card-horizontal>`,
  name: "Adornment",
};

/**
 * Add a badge to horizontal card.
 */
export const Badge = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
  >
    <ic-badge label="1" slot="badge"></ic-badge>
  </ic-card-horizontal>`,
  name: "Badge",
};

/**
 * Enable interaction by making the horizontal card clickable.
 */
export const Clickable = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    clickable="true"
  >
    <svg
      slot="icon"
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
  </ic-card-horizontal>`,
  name: "Clickable",
};

/**
 * Direct users to another page by making the horizontal card clickable with an href.
 */
export const ClickableHref = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    clickable="true"
    href="https://www.google.com"
  >
    <svg
      slot="icon"
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
  </ic-card-horizontal>`,
  name: "Clickable - href",
};

/**
 * Another method of making horizontal card clickable is wrapping it in a link.
 */
export const WrappedByLink = {
  render: () => html`<a href="/">
    <ic-card-horizontal heading="Card heading" message="Card message">
      <svg
        slot="icon"
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
      </svg> </ic-card-horizontal
  ></a>`,
  name: "Wrapped by link",
};

/**
 * Add an image to the horizontal card.
 */
export const ImageLeft = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
  >
    <svg
      slot="icon"
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
    <svg
      slot="image-left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 900"
    >
      <rect fill="#ff7700" width="1600" height="1600" y="-350" />
      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
      <polygon fill="#c50022" points="-60 900 398 662 816 900" />
      <polygon fill="#a3001b" points="337 900 398 662 816 900" />
      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
      <polygon fill="#b80066" points="641 695 886 900 367 900" />
      <polygon fill="#960052" points="587 900 641 695 886 900" />
      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
      <polygon fill="#880088" points="943 900 1210 900 971 687" />
    </svg>
  </ic-card-horizontal>`,
  name: "With image - left",
};

export const ImageRight = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
  >
    <svg
      slot="icon"
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
    <svg
      slot="image-right"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 900"
    >
      <rect fill="#ff7700" width="1600" height="1600" y="-350" />
      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
      <polygon fill="#c50022" points="-60 900 398 662 816 900" />
      <polygon fill="#a3001b" points="337 900 398 662 816 900" />
      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
      <polygon fill="#b80066" points="641 695 886 900 367 900" />
      <polygon fill="#960052" points="587 900 641 695 886 900" />
      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
      <polygon fill="#880088" points="943 900 1210 900 971 687" />
    </svg>
  </ic-card-horizontal>`,
  name: "With image - right",
};

/**
 * The horizontal card can be displayed in different sizes:
 * - `small`
 * - `medium`
 * - `large`
 */
export const Sizes = {
  render: () => html`<div>
    <ic-card-horizontal
      heading="Card heading"
      message="This card is used for small bits of text."
      size="small"
    >
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <ic-badge label="1" slot="badge"></ic-badge>
      <svg
        slot="icon"
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
      <svg
        slot="image-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      message="This card is used for small to medium bits of text. It's slightly bigger."
      size="medium"
    >
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <ic-badge label="1" slot="badge"></ic-badge>
      <svg
        slot="icon"
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
      <svg
        slot="image-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      message="This card is used for medium to large bits of text. This will take up more space on the page."
      size="large"
    >
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <ic-badge label="1" slot="badge"></ic-badge>
      <svg
        slot="icon"
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
      <svg
        slot="image-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>
  </div>`,
  name: "Sizes",
};

/**
 * The horizontal card also has different density options:
 * - `default`
 * - `spacious`
 *
 * The spacious density option allows for a subheading and an adornment to be added to the horizontal card.
 */
export const Density = {
  render: () => html`<div>
    <ic-card-horizontal
      heading="Card heading"
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
      size="small"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
      <svg
        slot="icon"
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
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <svg
        slot="image-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
      <svg
        slot="icon"
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
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <svg
        slot="image-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
      size="large"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
      <svg
        slot="icon"
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
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <svg
        slot="image-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>
  </div>`,
  name: "Density - spacious",
};

/**
 * When there is too much text content for the horizontal card, the heading and message with truncate.
 */
export const Truncation = {
  render: () => html`<div>
    <ic-card-horizontal
      heading="Really long card heading to show truncation"
      message="This card is used for small bits of text. More text has been added to show truncation."
      size="small"
    >
      <svg
        slot="icon"
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
      <svg
        slot="image-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Really long card heading to show truncation"
      message="This card is used for small to medium bits of text. It's slightly bigger. More text has been added to show truncation."
      size="medium"
    >
      <svg
        slot="icon"
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
      <svg
        slot="image-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Really long card heading to show truncation in the large size variant"
      message="This card is used for medium to large bits of text. This will take up more space on the page. More text has been added to show truncation. The large card can hold 3 lines of text before it gets cut off, displaying an ellipsis instead of all the text."
      size="large"
    >
      <svg
        slot="icon"
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
      <svg
        slot="image-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>
  </div>`,
  name: "Truncation",
};

/**
 * Disable the horizontal card to prevent users from interacting with it.
 */
export const Disabled = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    subheading="Card subheading"
    clickable="true"
    disabled="true"
    density="spacious"
  >
    <svg
      slot="icon"
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
    <svg
      slot="image-left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 900"
    >
      <rect fill="#ff7700" width="1600" height="1600" y="-350" />
      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
      <polygon fill="#c50022" points="-60 900 398 662 816 900" />
      <polygon fill="#a3001b" points="337 900 398 662 816 900" />
      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
      <polygon fill="#b80066" points="641 695 886 900 367 900" />
      <polygon fill="#960052" points="587 900 641 695 886 900" />
      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
      <polygon fill="#880088" points="943 900 1210 900 971 687" />
    </svg>
  </ic-card-horizontal>`,
  name: "Disabled",
};

/**
 * Slot custom content into a horizontal card using the `heading` and `message` slots.
 */
export const SlottedContent = {
  render: () => html`<ic-card-horizontal>
    <h4 slot="heading">Card heading</h4>
    <p slot="message">Card message</p>
    <svg
      slot="icon"
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
  </ic-card-horizontal>`,
  name: "Slotted heading and message",
};

/**
 * Set the width of the horizontal card by using the `--card-horizontal-width` CSS custom property. The horizontal card will grow, but not exceed its maximum supported width.
 */
export const CustomWidth = {
  render: () => html`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    style="--card-horizontal-width: 400px"
  >
    <svg
      slot="icon"
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
    <svg
      slot="image-left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 900"
    >
      <rect fill="#ff7700" width="1600" height="1600" y="-350" />
      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
      <polygon fill="#c50022" points="-60 900 398 662 816 900" />
      <polygon fill="#a3001b" points="337 900 398 662 816 900" />
      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
      <polygon fill="#b80066" points="641 695 886 900 367 900" />
      <polygon fill="#960052" points="587 900 641 695 886 900" />
      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
      <polygon fill="#880088" points="943 900 1210 900 971 687" />
    </svg>
  </ic-card-horizontal>`,
  name: "Custom width",
};
