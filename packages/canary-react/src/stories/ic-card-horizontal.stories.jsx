/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IcBadge, IcButton, IcStatusTag, IcTypography } from "@ukic/react";
import React from "react";
import readme from "../../../canary-web-components/src/components/ic-card-horizontal/readme.md";
import { IcCardHorizontal } from "../components";

export default {
  title: "React Components/Horizontal Card",
  component: IcCardHorizontal,
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
 * To use the horizontal card component, import `@ukic/canary-react` into your application.
 */
export const Default = {
  render: () => <IcCardHorizontal heading="Card heading" />,
  name: "Default",
};

/**
 * Add more information to the horizontal card by including a message.
 */
export const Message = {
  render: () => (
    <IcCardHorizontal heading="Card heading" message="Card message" />
  ),
  name: "With message",
};

/**
 * Add an icon to the horizontal card using the `icon` slot.
 */
export const Icon = {
  render: () => (
    <IcCardHorizontal heading="Card heading" message="Card message">
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcCardHorizontal>
  ),
  name: "Icon",
};

/**
 * Add an interaction button to horizontal card.
 */
export const InteractionButton = {
  render: () => (
    <IcCardHorizontal heading="Card heading" message="Card message">
      <IcButton slot="interaction-button" variant="icon-tertiary" title="More information">
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
      </IcButton>
    </IcCardHorizontal>
  ),
  name: "Interaction button",
};

/**
 * Add a subheading to the horizontal card either via a prop or slot.
 * This is only available when `density="spacious"`.
 */
export const Subheading = {
  render: () => (
    <IcCardHorizontal
      heading="Card heading"
      message="Card message"
      subheading="Card subheading"
      density="spacious"
    />
  ),
  name: "Subheading",
};

export const SubheadingSlot = {
  render: () => (
    <IcCardHorizontal
      heading="Card heading"
      message="Card message"
      density="spacious"
    >
      <IcTypography variant="subtitle-small" slot="subheading">
        Card subheading
      </IcTypography>
    </IcCardHorizontal>
  ),
  name: "Subheading - slotted",
};

/**
 * Add an adornment to the horizontal card. This is only available when `density="spacious"`.
 */
export const Adornment = {
  render: () => (
    <IcCardHorizontal
      heading="Card heading"
      message="Card message"
      density="spacious"
    >
      <IcStatusTag slot="adornment" label="Neutral" size="small" />
    </IcCardHorizontal>
  ),
  name: "Adornment",
};

/**
 * Add a badge to the horizontal card.
 */
export const Badge = {
  render: () => (
    <IcCardHorizontal heading="Card heading" message="Card message">
      <IcBadge label="1" slot="badge" />
    </IcCardHorizontal>
  ),
  name: "Badge",
};

/**
 * Allow users to perform actions by making the horizontal card clickable.
 */
export const Clickable = {
  render: () => (
    <IcCardHorizontal
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
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcCardHorizontal>
  ),
  name: "Clickable",
};

/**
 * Direct users to another page by making the horizontal card clickable with an href.
 */
export const ClickableHref = {
  render: () => (
    <IcCardHorizontal
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
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcCardHorizontal>
  ),
  name: "Clickable - href",
};

/**
 * Wrap a link around the horizontal card as a method of implementing custom routing.
 */
export const WrappedByLink = {
  render: () => (
    <a href="/">
      <IcCardHorizontal heading="Card heading" message="Card message">
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcCardHorizontal>
    </a>
  ),
  name: "Wrapped by link",
};

/**
 * Add an image to the horizontal card.
 */
export const ImageLeft = {
  render: () => (
    <IcCardHorizontal heading="Card heading" message="Card message">
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
    </IcCardHorizontal>
  ),
  name: "With image - left",
};

export const ImageRight = {
  render: () => (
    <IcCardHorizontal heading="Card heading" message="Card message">
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
    </IcCardHorizontal>
  ),
  name: "With image - right",
};

/**
 * The horizontal card can be displayed in different sizes:
 * - `small`
 * - `medium`
 * - `large`
 */
export const Sizes = {
  render: () => (
    <div>
      <IcCardHorizontal
        heading="Card heading"
        message="This card is used for small bits of text."
        size="small"
      > 
        <IcButton slot="interaction-button" variant="icon-tertiary" title="More information">
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
      </IcButton>
      <IcBadge label="1" slot="badge" />
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
      </IcCardHorizontal>
      <br />
      <IcCardHorizontal
        heading="Card heading"
        message="This card is used for small to medium bits of text. It's slightly bigger."
        size="medium"
      >
        <IcButton slot="interaction-button" variant="icon-tertiary" title="More information">
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
      </IcButton>
      <IcBadge label="1" slot="badge" />
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
      </IcCardHorizontal>
      <br />
      <IcCardHorizontal
        heading="Card heading"
        message="This card is used for medium to large bits of text. This will take up more space on the page."
        size="large"
      >
        <IcButton slot="interaction-button" variant="icon-tertiary" title="More information">
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
      </IcButton>
      <IcBadge label="1" slot="badge" />
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
      </IcCardHorizontal>
      <br />
    </div>
  ),
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
  render: () => (
    <div>
      <IcCardHorizontal
        heading="Card heading"
        subheading="Card subheading"
        message="This card is used for small bits of text."
        density="spacious"
        size="small"
      > 
        <IcButton slot="interaction-button" variant="icon-tertiary" title="More information">
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
      </IcButton>
      <IcBadge label="1" slot="badge" />
      <IcStatusTag slot="adornment" label="Neutral" size="small" />
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
      </IcCardHorizontal>
      <br />
      <IcCardHorizontal
        heading="Card heading"
        subheading="Card subheading"
        message="This card is used for small to medium bits of text. It's slightly bigger."
        density="spacious"
        size="medium"
      >
        <IcButton slot="interaction-button" variant="icon-tertiary" title="More information">
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
      </IcButton>
      <IcBadge label="1" slot="badge" />
      <IcStatusTag slot="adornment" label="Neutral" size="small" />
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
      </IcCardHorizontal>
      <br />
      <IcCardHorizontal
        heading="Card heading"
        subheading="Card subheading"
        message="This card is used for medium to large bits of text. This will take up more space on the page."
        density="spacious"
        size="large"
      >
        <IcButton slot="interaction-button" variant="icon-tertiary" title="More information">
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
      </IcButton>
      <IcBadge label="1" slot="badge" />
      <IcStatusTag slot="adornment" label="Neutral" size="small" />
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
      </IcCardHorizontal>
      <br />
    </div>
  ),
  name: "Density - spacious",
};

/**
 * When there is too much text content for the horizontal card, the heading and message with truncate.
 */
export const Truncation = {
  render: () => (
    <div>
      <IcCardHorizontal
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
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
      </IcCardHorizontal>
      <br />
      <IcCardHorizontal
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
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
      </IcCardHorizontal>
      <br />
      <IcCardHorizontal
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
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
      </IcCardHorizontal>
    </div>
  ),
  name: "Truncation",
};

/**
 * Disable the horizontal card to prevent users from interacting with it.
 */
export const Disabled = {
  render: () => (
    <IcCardHorizontal
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
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
    </IcCardHorizontal>
  ),
  name: "Disabled",
};

/**
 * Slot custom content into a horizontal card using the `heading` and `message` slots.
 */
export const SlottedContent = {
  render: () => (
    <IcCardHorizontal>
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
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcCardHorizontal>
  ),
  name: "Slotted heading and message",
};

/**
 * Set the width of the horizontal card by using the `--card-horizontal-width` CSS custom property. The horizontal card will grow, but not exceed its maximum supported width.
 */
export const CustomWidth = {
  render: () => (
    <IcCardHorizontal
      heading="Card heading"
      message="Card message"
      style={{ "--card-horizontal-width": "500px" }}
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
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
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
    </IcCardHorizontal>
  ),
  name: "Custom width",
};

const defaultArgs = {
  clickable: false,
  disabled: false,
  heading: "Heading",
  subheading: "Subheading",
  density: "default",
  href: "/",
  message: "Message",
  size: "medium",
  iconSlot: true,
  badgeSlot: true,
  adornmentSlot: true,
  interactionButtonSlot: true,
  showImage: false,
  imagePlacement: "left",
  theme: "inherit",
};

/**
 * Go to the <ic-link href="/?path=/story/react-components-horizontal-card--playground">separate page for the playground example</ic-link> to view the prop controls.
 */
export const Playground = {
  render: (args) => (
    <IcCardHorizontal
      clickable={args.clickable}
      disabled={args.disabled}
      heading={args.heading}
      href={args.href}
      message={args.message}
      size={args.size}
      theme={args.theme}
      subheading={args.subheading}
      density={args.density}
    >
      <svg
        slot={args.iconSlot}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
      <IcBadge type="dot" slot={args.badgeSlot} />
      <IcButton slot={args.interactionButtonSlot} variant="icon-tertiary" title="More information">
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
      </IcButton>
      <IcStatusTag slot={args.adornmentSlot} label="Neutral" size="small" />
      {args.showImage && (
        <svg
          slot={`image-${args.imagePlacement}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#edb99d" width="1600" height="1600" y="-350" />
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
      )}
    </IcCardHorizontal>
  ),
  args: defaultArgs,
  argTypes: {
    iconSlot: {
      mapping: {
        true: "icon",
        false: "",
      },
    },
    badgeSlot: {
      mapping: {
        true: "badge",
        false: "",
      },
    },
    interactionButtonSlot: {
      mapping: {
        true: "interaction-button",
        false: "",
      },
    },
    adornmentSlot: {
      mapping: {
        true: "adornment",
        false: "",
      },
    },
    density: {
      options: ["default", "spacious"],
      control: { type: "inline-radio" },
    },
    showImage: {
      control: { type: "boolean" },
    },
    imagePlacement: {
      options: ["left", "right"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: { type: "inline-radio" },
    },
  },
  name: "Playground",
};
