/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable sonarjs/no-duplicate-string */
import React, { useState } from "react";
import {
  IcButton,
  IcCardVertical,
  IcHero,
  IcLink,
  IcSearchBar,
  IcTextField,
  IcTheme,
  IcTypography
} from "../components";

import image from "./assets/example-background.png";

const Controlled = () => {
  const [color, setColour] = useState("rgb(255, 201, 60)");
  const defaultButtonClickHandler = () => {
    setColour("rgb(27, 60, 121)");
  };
  const differentButtonClickHandler = () => {
    setColour("rgb(255, 201, 60)");
  };
  return (
    <>
      <IcTheme brandColor={color} />
      <IcHero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        aligned="center"
      >
        <div slot="interaction" style={{ display: "flex" }}>
          <IcTextField
            placeholder="Filter display"
            label="Filter display"
            hide-label
            full-width="true"
          />
          <IcButton
            variant="primary"
            style={{ marginLeft: "var(--ic-space-md)" }}
          >
            Filter
          </IcButton>
        </div>
        <IcButton variant="secondary" slot="interaction">
          See all
        </IcButton>
        <IcLink
          href="https://google.com"
          slot="interaction"
          style={{ marginTop: "var(--ic-space-sm)" }}
        >
          Help
        </IcLink>
        <IcCardVertical
          heading="Latest announcement"
          message="This is some example text that can be included in the card copy."
          slot="secondary"
        />
      </IcHero>
      <IcButton variant="primary" onClick={defaultButtonClickHandler}>
        Default brand
      </IcButton>
      <IcButton variant="primary" onClick={differentButtonClickHandler}>
        Sunrise brand
      </IcButton>
    </>
  );
};

const ControlledReset = () => {
  const [color, setColour] = useState("rgb(27, 60, 121)");
  const defaultButtonClickHandler = () => {
    setColour("rgb(27, 60, 121)");
  };
  return (
    <>
      <IcTheme brandColor={color} />
      <IcButton variant="primary" onClick={defaultButtonClickHandler}>
        Reset theme
      </IcButton>
    </>
  );
};

const defaultArgs = {
  aligned: "left",
  backgroundImage: image,
  contentAligned: "left",
  disableBackgroundParallax: false,
  heading: "Hero heading",
  secondaryHeading: "Secondary Heading",
  secondarySubheading: "This is a secondary description.",
  size: "medium",
  subheading:
    "Hero description. This is a Hero component, it should be used as a page heading.",
  showSecondary: false,
};

export default {
  title: "Hero",
  component: IcHero,
};

export const Playground = {
  render: (args) => (
    <IcHero
      aligned={args.aligned}
      backgroundImage={args.backgroundImage}
      contentAligned={args.contentAligned}
      disableBackgroundParallax={args.disableBackgroundParallax}
      heading={args.heading}
      secondaryHeading={args.secondaryHeading}
      secondarySubheading={args.secondarySubheading}
      size={args.size}
      subheading={args.subheading}
    >
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
      {args.showSecondary && (
        <IcCardVertical
          heading="Latest announcement"
          message="This is some example text that can be included in the card copy."
          slot="secondary"
        />
      )}
    </IcHero>
  ),

  args: defaultArgs,
  name: "Playground",

  parameters: {
    layout: "fullscreen",
  },

  argTypes: {
    aligned: {
      options: ["center", "full-width", "left"],

      control: {
        type: "select",
      },
    },

    contentAligned: {
      options: ["center", "left"],

      control: {
        type: "select",
      },
    },

    size: {
      options: ["medium", "small"],

      control: {
        type: "select",
      },
    },
  },
};

export const LeftAligned = {
  render: () => (
    <IcHero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
    >
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>
  ),

  name: "Left aligned",

  parameters: {
    layout: "fullscreen",
  },
};

export const CenterAligned = {
  render: () => (
    <IcHero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>
  ),

  name: "Center aligned",

  parameters: {
    layout: "fullscreen",
  },
};

export const SlottedHeadingAndSubheading = {
  render: () => (
    <IcHero>
      <IcTypography slot="heading" variant="h1">
        Slotted heading
      </IcTypography>
      <IcTypography slot="subheading">Slotted subheading</IcTypography>
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>
  ),

  name: "Slotted heading and subheading",

  parameters: {
    layout: "fullscreen",
  },
};

export const FullWidth = {
  render: () => (
    <IcHero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="full-width"
    >
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>
  ),

  name: "Full width",

  parameters: {
    layout: "fullscreen",
  },
};

export const ContentCenterAligned = {
  render: () => (
    <IcHero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
      contentAligned="center"
    >
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>
  ),

  name: "Content center aligned",

  parameters: {
    layout: "fullscreen",
  },
};

export const SizeSmall = {
  render: () => (
    <IcHero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      size="small"
      aligned="center"
    >
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>
  ),

  name: "Size small",

  parameters: {
    layout: "fullscreen",
  },
};

export const SecondaryHeading = {
  render: () => (
    <IcHero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      secondaryHeading="Secondary Heading"
      secondarySubheading="This is a secondary description."
      aligned="center"
    >
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>
  ),

  name: "Secondary heading",

  parameters: {
    layout: "fullscreen",
  },
};

export const SearchBarInteraction = {
  render: () => (
    <IcHero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <IcSearchBar slot="interaction" />
    </IcHero>
  ),

  name: "Search bar interaction",

  parameters: {
    layout: "fullscreen",
  },
};

export const CardRightContent = {
  render: () => (
    <IcHero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="full-width"
    >
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
      <IcCardVertical
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      />
    </IcHero>
  ),

  name: "Card right content",

  parameters: {
    layout: "fullscreen",
  },
};

export const ImageRightContent = {
  render: () => (
    <IcHero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
      <svg
        slot="secondary"
        style={{
          width: "300px",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="900" />
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
    </IcHero>
  ),

  name: "Image right content",

  parameters: {
    layout: "fullscreen",
  },
};

export const Brand = {
  render: () => <Controlled />,
  name: "Brand",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithBackgroundImageParallaxEffect = {
  render: () => (
    <>
      <ControlledReset />
    <IcTopNavigation app-title="Application Name">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
    </IcTopNavigation>
    <ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      background-image={image}
    >
      <div slot="interaction">
        <IcButton
          variant="primary"
          style={{ marginRight: "var(--ic-space-md)" }}
        >
          Button
        </IcButton>
        <IcButton
          variant="secondary"
          style={{ marginRight: "var(--ic-space-md)" }}
        >
          Button
        </IcButton>
        <IcLink
          href="https://google.com"
          style={{ marginTop: "var(--ic-space-sm)" }}
        >
          Help
        </IcLink>
      </div>
    </ic-hero>
    <br />
    <IcTypography style={{ marginBottom: 1300 }}>You can scroll.</IcTypography>
    </>
  ),
  name: "With background image (parallax effect)",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithBackgroundImageNoParallaxEffect = {
  render: () => (
    <>
      <ControlledReset />
    <ic-top-navigation app-title="Application Name">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
    </ic-top-navigation>
    <ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      background-image={image}
      disable-background-parallax
    >
      <div slot="interaction">
        <IcButton
          variant="primary"
          style={{ marginRight: "var(--ic-space-md)" }}
        >
          Button
        </IcButton>
        <IcButton
          variant="secondary"
          style={{ marginRight: "var(--ic-space-md)" }}
        >
          Button
        </IcButton>
        <IcLink
          href="https://google.com"
          style={{ marginTop: "var(--ic-space-sm)" }}
        >
          Help
        </IcLink>
      </div>
    </ic-hero>
    <br />
    <IcTypography style={{ marginBottom: 1300 }}>You can scroll.</IcTypography>
    </>
  ),
  name: "With background image (no parallax effect)",

  parameters: {
    layout: "fullscreen",
  },
};
