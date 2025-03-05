/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcEmptyState, IcLink, IcButton } from "../components";

const defaultArgs = {
  aligned: "left",
  body: "This is the body text for the empty state.",
  bodyMaxLines: 3,
  heading: "This is the heading",
  imageSize: "default",
  subheading: "This is the subheading",
  showImage: false,
  showActions: false,
};

export default {
  title: "Empty state",
  component: IcEmptyState,
};

export const WithSubheadingAndBodyText = {
  render: () => (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    />
  ),

  name: "With subheading and body text",
};

export const WithActions = {
  render: () => (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <IcButton slot="actions">Action</IcButton>
      <IcLink href="/" slot="actions">
        Standalone link
      </IcLink>
    </IcEmptyState>
  ),

  name: "With actions",
};

export const WithImage = {
  render: () => (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <svg
        slot="image"
        style={{
          height: "326px",
          width: "326px",
        }}
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
    </IcEmptyState>
  ),

  name: "With image",
};

export const WithSmallImage = {
  render: () => (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      image-size="small"
    >
      <svg
        slot="image"
        style={{
          height: "326px",
          width: "326px",
        }}
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
    </IcEmptyState>
  ),

  name: "With small image",
};

export const WithLargeImage = {
  render: () => (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      image-size="large"
    >
      <svg
        slot="image"
        style={{
          height: "326px",
          width: "326px",
        }}
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
    </IcEmptyState>
  ),

  name: "With large image",
};

export const WithIcon = {
  render: () => (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <svg
        slot="image"
        aria-labelledby="warning-title"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#D07932"
      >
        <title id="warning-title">Warning</title>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
    </IcEmptyState>
  ),

  name: "With icon",
};

export const CentreAligned = {
  render: () => (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      aligned="center"
    >
      <svg
        slot="image"
        style={{
          height: "326px",
          width: "326px",
        }}
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
      <IcButton slot="actions">Action</IcButton>
      <IcLink href="/" slot="actions">
        Standalone link
      </IcLink>
    </IcEmptyState>
  ),

  name: "Centre aligned",
};

export const RightAligned = {
  render: () => (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      aligned="right"
    >
      <svg
        slot="image"
        style={{
          height: "326px",
          width: "326px",
        }}
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
      <IcButton slot="actions">Action</IcButton>
      <IcLink href="/" slot="actions">
        Standalone link
      </IcLink>
    </IcEmptyState>
  ),

  name: "Right aligned",
};

export const MaxLines = {
  render: () => (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body of text that is truncated to two lines. Click the 'See more' link to expand the text, then click 'See less' to truncate the text once more!\nDripper caramelization java saucer grounds galão, mocha, and robusta kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait. Con panna, cup, cream, body americano affogato cup espresso, rich milk seasonal saucer grinder spoon that cultivar strong redeye frappuccino barista extraction redeye mazagran. Grounds, french press dripper organic and foam id saucer, crema, black rich dark, grounds breve coffee steamed caramelization percolator."
      bodyMaxLines="2"
    >
      <svg
        slot="image"
        style={{
          height: "326px",
          width: "326px",
        }}
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
      <IcButton slot="actions">Action</IcButton>
      <IcLink href="/" slot="actions">
        Standalone link
      </IcLink>
    </IcEmptyState>
  ),

  name: "Max lines",
};

export const WithinDiv = {
  render: () => (
    <div
      style={{
        width: "357px",
        border: "1px solid black",
        background: "#D3D3D3",
      }}
    >
      <IcEmptyState
        heading="Empty state title"
        subheading="Empty state subtitle"
        body="Body text for empty state."
      >
        <svg
          slot="image"
          style={{
            height: "326px",
            width: "326px",
          }}
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
        <IcButton slot="actions">Action</IcButton>
        <IcLink href="/" slot="actions">
          Standalone link
        </IcLink>
      </IcEmptyState>
    </div>
  ),

  name: "Within div",
};

export const Playground = {
  render: (args) => (
    <IcEmptyState
      heading={args.heading}
      subheading={args.subheading}
      body={args.body}
      imageSize={args.imageSize}
      bodyMaxLines={args.bodyMaxLines}
      aligned={args.aligned}
    >
      {args.showImage && (
        <svg
          slot="image"
          height="326px"
          width="326px"
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
      )}
      {args.showActions && (
        <div
          slot="actions"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IcButton>Action</IcButton>
          <IcLink href="/">Standalone link</IcLink>
        </div>
      )}
    </IcEmptyState>
  ),

  args: defaultArgs,

  argTypes: {
    aligned: {
      options: ["left", "center", "right"],

      control: {
        type: "radio",
      },
    },

    imageSize: {
      options: ["default", "small", "large"],

      control: {
        type: "radio",
      },
    },
  },

  name: "Playground",
};
