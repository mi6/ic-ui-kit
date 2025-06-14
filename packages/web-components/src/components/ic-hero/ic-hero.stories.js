import { html } from "lit-html";

import image from "./assets/example-background.png";

export default {
  title: "Web Components/Hero",
  component: "ic-hero",
};

export const LeftAligned = {
  render: () =>
    html`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
    </ic-hero>`,

  name: "Left aligned",

  parameters: {
    layout: "fullscreen",
  },
};

export const CenterAligned = {
  render: () =>
    html`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
    </ic-hero>`,

  name: "Center aligned",

  parameters: {
    layout: "fullscreen",
  },
};

export const SlottedHeadingAndSubheading = {
  render: () =>
    html`<ic-hero>
      <ic-typography slot="heading" variant="h1">Slotted heading</ic-typography>
      <ic-typography slot="subheading">Slotted subheading</ic-typography>
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
    </ic-hero>`,

  name: "Slotted heading and subheading",

  parameters: {
    layout: "fullscreen",
  },
};

export const LongHeading = {
  render: () =>
    html`<ic-hero
      heading="Hero heading. This is a Hero component, it should be used as a page heading."
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
      <ic-card-vertical
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      ></ic-card-vertical>
    </ic-hero>`,

  name: "Long heading",

  parameters: {
    layout: "fullscreen",
  },
};

export const FullWidth = {
  render: () =>
    html`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="full-width"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
    </ic-hero>`,

  name: "Full width",

  parameters: {
    layout: "fullscreen",
  },
};

export const ContentCenterAligned = {
  render: () =>
    html`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
      content-aligned="center"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
    </ic-hero>`,

  name: "Content center aligned",

  parameters: {
    layout: "fullscreen",
  },
};

export const Small = {
  render: () =>
    html`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
      size="small"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
    </ic-hero>`,

  name: "Small",

  parameters: {
    layout: "fullscreen",
  },
};

export const SecondaryHeading = {
  render: () =>
    html`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      secondary-heading="Secondary Heading"
      secondary-subheading="This is a secondary description."
      aligned="center"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
    </ic-hero>`,

  name: "Secondary heading",

  parameters: {
    layout: "fullscreen",
  },
};

export const SearchBarInteraction = {
  render: () =>
    html`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-search-bar
        slot="interaction"
        full-width
        style="max-width: 322px;"
      ></ic-search-bar>
    </ic-hero>`,

  name: "Search bar interaction",

  parameters: {
    layout: "fullscreen",
  },
};

export const CardRightContent = {
  render: () =>
    html`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="full-width"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <ic-card-vertical
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      ></ic-card-vertical>
    </ic-hero>`,

  name: "Card right content",

  parameters: {
    layout: "fullscreen",
  },
};

export const ImageRightContent = {
  render: () =>
    html`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <svg
        slot="secondary"
        style="width:300px;"
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
    </ic-hero>`,

  name: "Image right content",

  parameters: {
    layout: "fullscreen",
  },
};

export const Brand = {
  render: () =>
    html`<ic-theme
        brand-color="rgb(255, 201, 60)"
        id="brand-story-ic-theme"
      ></ic-theme>
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        aligned="center"
      >
        <div slot="interaction" style="display: flex">
          <ic-text-field
            placeholder="Filter display"
            label="Filter display"
            hide-label
            full-width="true"
          ></ic-text-field>
          <ic-button variant="primary" style="margin-left: var(--ic-space-md)"
            >Filter</ic-button
          >
        </div>
        <ic-card-vertical
          heading="Latest announcement"
          message="This is some example text that can be included in the card copy."
          slot="secondary"
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
        </ic-card-vertical>
      </ic-hero>
      <br />
      <ic-button variant="primary" id="default-btn" onClick="changeBrand()">
        Default brand
      </ic-button>
      <ic-button
        variant="primary"
        id="custom-btn"
        onClick="changeSunriseBrand()"
      >
        Sunrise brand
      </ic-button>
      <script>
        var theme = document.querySelector("#brand-story-ic-theme");
        function changeBrand() {
          theme.brandColor = "rgb(27, 60, 121)";
        }
        function changeSunriseBrand() {
          theme.brandColor = "rgb(255, 201, 60)";
        }
      </script>`,

  name: "Brand",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithBackgroundImageParallaxEffect = {
  render: () =>
    html`<ic-theme brand-color="rgb(27, 60, 121)"></ic-theme>
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
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        background-image="${image}"
      >
        <div slot="interaction">
          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-button
            variant="secondary"
            style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-link
            href="https://google.com"
            style="margin-top: var(--ic-space-sm)"
            >Help</ic-link
          >
        </div>
      </ic-hero>
      <br />
      <ic-typography>You can scroll.</ic-typography>
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').brandColor='rgb(27, 60, 121)'"
        style="margin-bottom:1300px"
      >
        Reset theme
      </ic-button>`,

  name: "With background image (parallax effect)",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithBackgroundImageNoParallaxEffect = {
  render: () =>
    html`<ic-theme brand-color="rgb(27, 60, 121)"></ic-theme>
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
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        background-image="${image}"
        disable-background-parallax
      >
        <div slot="interaction">
          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-button
            variant="secondary"
            style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-link
            href="https://google.com"
            style="margin-top: var(--ic-space-sm)"
            >Help</ic-link
          >
        </div>
      </ic-hero>
      <br />
      <ic-typography>You can scroll.</ic-typography>
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').brandColor='rgb(27, 60, 121)'"
        style="margin-bottom:1300px"
      >
        Reset theme
      </ic-button>`,

  name: "With background image (no parallax effect)",

  parameters: {
    layout: "fullscreen",
  },
};
