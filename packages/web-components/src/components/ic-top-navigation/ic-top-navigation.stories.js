import { html } from "lit-html";

const defaultArgs = {
  appTitle: "Application Name",
  contentAligned: "full-width",
  customMobileBreakpoint: 992,
  href: "/",
  inline: false,
  shortAppTitle: "App Name",
  status: "alpha",
  version: "0.0.1",
  appIconSlot: "app-icon",
  searchSlot: "search",
  buttonsSlot: "buttons",
  theme: "inherit",
};

export default {
  title: "Web Components/Top navigation",
  component: "ic-top-navigation",
};

export const AppIconAndTitle = {
  render: (args) =>
    html`<ic-top-navigation app-title="Application Name">
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
    </ic-top-navigation>`,

  name: "App icon and title",

  parameters: {
    layout: "fullscreen",
  },
};

export const SlottedTitleLink = {
  render: (args) =>
    html`<ic-top-navigation>
      <a slot="app-title" href="/">Application Name</a>
      <a slot="short-app-title" href="/">App name</a>
      <a slot="app-icon" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="inherit"
          viewBox="0 0 24 24"
          width="inherit"
          fill="inherit"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </a>
    </ic-top-navigation>`,

  name: "Slotted title link",

  parameters: {
    layout: "fullscreen",
  },
};

export const StatusAndVersion = {
  render: (args) =>
    html`<ic-top-navigation
      app-title="Application Name"
      status="alpha"
      version="v0.0.7"
    >
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
    </ic-top-navigation>`,

  name: "Status and version",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithSearch = {
  render: (args) =>
    html`<ic-top-navigation
        app-title="Application Name"
        status="alpha"
        version="v0.0.7"
      >
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
        <ic-search-bar
          slot="search"
          placeholder="Search"
          label="Search"
        ></ic-search-bar>
      </ic-top-navigation>
      <script>
        const search1 = document.querySelector("ic-search-bar");
        search1.options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Mocha", value: "mocha" },
        ];
      </script>`,

  name: "With search",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithIcons = {
  render: (args) =>
    html`<ic-top-navigation
      app-title="Application Name"
      status="alpha"
      version="v0.0.7"
    >
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
      <ic-search-bar
        slot="search"
        placeholder="Search"
        label="Search"
      ></ic-search-bar>
      <ic-navigation-button
        label="Button One"
        slot="buttons"
        href="https://www.google.com"
        target="_blank"
        title="Google 1"
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
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <ic-badge
          label="1"
          slot="badge"
          custom-color="#d4351c"
          variant="custom"
          theme="dark"
        ></ic-badge>
      </ic-navigation-button>
      <ic-navigation-button
        label="Button Two"
        slot="buttons"
        href="https://www.google.com"
        target="_blank"
        title="Google 2"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
          />
        </svg>
        <ic-badge
          slot="badge"
          type="dot"
          custom-color="#d4351c"
          variant="custom"
          theme="dark"
        ></ic-badge>
      </ic-navigation-button>
      <ic-navigation-button
        label="Button Three"
        slot="buttons"
        onclick="alert('test')"
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
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
          />
        </svg>
      </ic-navigation-button>
    </ic-top-navigation> `,

  name: "With icons",

  parameters: {
    layout: "fullscreen",
  },
};

export const LongAppTitle = {
  render: (args) =>
    html`<ic-top-navigation
      app-title="Application with a long name"
      status="alpha-beta-gamma-delta-epsilon"
      version="v0.0.7-current-release-name-that-is-long"
    >
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
      <ic-search-bar
        slot="search"
        placeholder="Search"
        label="Search"
      ></ic-search-bar>
      <ic-navigation-button
        label="Button One"
        slot="buttons"
        onclick="alert('test')"
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
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-navigation-button>
    </ic-top-navigation>`,

  name: "Long app title",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithNavigation = {
  render: (args) =>
    html`<ic-top-navigation
      app-title="Application Name"
      status="alpha"
      version="v0.0.7"
    >
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
      <ic-search-bar
        slot="search"
        placeholder="Search"
        label="Search"
      ></ic-search-bar>
      <ic-navigation-button
        label="Button One"
        slot="buttons"
        onclick="alert('test')"
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
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-navigation-button>
      <ic-navigation-item
        slot="navigation"
        label="One"
        href="/"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Two thousand five hundred and sixty three"
        href="/"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Three"
        href="/"
        target="_blank"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Four"
        href="/"
        selected="true"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Five"
        href="/"
      ></ic-navigation-item>
    </ic-top-navigation>`,

  name: "With navigation",

  parameters: {
    layout: "fullscreen",
  },
};

export const UsingUnnamedSlots = {
  render: (args) =>
    html`<ic-top-navigation
      app-title="Application Name"
      status="alpha"
      version="v0.0.7"
    >
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
      <ic-navigation-item slot="navigation">
        <a href="/">One</a>
      </ic-navigation-item>
      <ic-navigation-item slot="navigation">
        <a href="/">Two</a>
      </ic-navigation-item>
      <ic-navigation-item slot="navigation">
        <a href="/">Three</a>
      </ic-navigation-item>
    </ic-top-navigation>`,

  name: "Using unnamed slots",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithGroupedNavigation = {
  render: (args) =>
    html`<ic-top-navigation
      app-title="Application Name"
      status="alpha"
      version="v0.0.7"
    >
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
      <ic-search-bar
        slot="search"
        placeholder="Search"
        label="Search"
      ></ic-search-bar>
      <ic-navigation-group
        slot="navigation"
        label="Navigation group (expandable on mobile)"
        expandable="true"
      >
        <ic-navigation-item label="One" href="/">
          <ic-badge
            label="1"
            slot="badge"
            custom-color="#d4351c"
            variant="custom"
            theme="dark"
          ></ic-badge>
        </ic-navigation-item>
        <ic-navigation-item label="Two" href="/"></ic-navigation-item>
        <ic-navigation-item label="Three" href="/"></ic-navigation-item>
        <ic-navigation-item label="Four" href="/"></ic-navigation-item>
        <ic-navigation-item
          label="Five"
          href="/"
          selected="true"
        ></ic-navigation-item>
        <ic-navigation-item label="Five" href="/"></ic-navigation-item>
        <ic-navigation-item
          label="Six"
          href="/"
          target="_blank"
        ></ic-navigation-item>
        <ic-navigation-item label="Seven" href="/"></ic-navigation-item>
        <ic-navigation-item label="Eight" href="/"></ic-navigation-item>
      </ic-navigation-group>
      <ic-navigation-group slot="navigation" label="Second navigation group">
        <ic-navigation-item label="Another One" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Two" href="/">
          <ic-badge
            label="1"
            slot="badge"
            custom-color="#d4351c"
            variant="custom"
            theme="dark"
            position="far"
          ></ic-badge>
        </ic-navigation-item>
        <ic-navigation-item label="Another Three" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Four" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Five" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Six" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Seven" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Eight" href="/"></ic-navigation-item>
      </ic-navigation-group>
      <ic-navigation-group
        slot="navigation"
        label="Third navigation group"
        expandable="true"
      >
        <ic-navigation-item label="Another One" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Two" href="/"></ic-navigation-item>
      </ic-navigation-group>
    </ic-top-navigation>`,

  name: "With grouped navigation",

  parameters: {
    layout: "fullscreen",
  },
};

export const ContentCenterAligned = {
  render: (args) =>
    html`<ic-top-navigation
      app-title="Application Name"
      status="alpha"
      version="v0.0.7"
      content-aligned="center"
    >
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
      <ic-search-bar
        slot="search"
        placeholder="Search"
        label="Search"
      ></ic-search-bar>
      <ic-navigation-button
        label="Button One"
        slot="buttons"
        onclick="alert('test')"
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
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-navigation-button>
      <ic-navigation-item
        slot="navigation"
        label="One"
        href="/"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Two"
        href="/"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Three"
        href="/"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Four"
        href="/"
        selected="true"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Five"
        href="/"
      ></ic-navigation-item>
    </ic-top-navigation>`,

  name: "Content center aligned",

  parameters: {
    layout: "fullscreen",
  },
};

export const ContentLeftAligned = {
  render: (args) =>
    html`<ic-top-navigation
      app-title="Application Name"
      status="alpha"
      version="v0.0.7"
      content-aligned="left"
    >
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
      <ic-search-bar
        slot="search"
        placeholder="Search"
        label="Search"
      ></ic-search-bar>
      <ic-navigation-button
        label="Button One"
        slot="buttons"
        onclick="alert('test')"
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
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-navigation-button>
      <ic-navigation-item
        slot="navigation"
        label="One"
        href="/"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Two"
        href="/"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Three"
        href="/"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Four"
        href="/"
        selected="true"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Five"
        href="/"
      ></ic-navigation-item>
    </ic-top-navigation>`,

  name: "Content left aligned",

  parameters: {
    layout: "fullscreen",
  },
};

export const Brand = {
  render: (args) =>
    html`<ic-theme brand-color="rgb(27, 60, 121)" id="brand-story-ic-theme">
      <ic-top-navigation
        app-title="Application Name"
        status="alpha"
        version="v0.0.7"
      >
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
        <ic-search-bar
          slot="search"
          placeholder="Search"
          label="Search"
        ></ic-search-bar>
        <ic-navigation-button
          label="Button One"
          slot="buttons"
          onclick="alert('test')"
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
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
            />
          </svg>
        </ic-navigation-button>
        <ic-navigation-item
          slot="navigation"
          label="One"
          href="/"
          selected="true"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Two"
          href="/"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Three"
          href="/"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Four"
          href="/"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Five"
          href="/"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Six"
          href="/"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Seven"
          href="/"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Eight"
          href="/"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Nine"
          href="/"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Ten"
          href="/"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Eleven"
          href="/"
        ></ic-navigation-item>
      </ic-top-navigation>
      <br />
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('#brand-story-ic-theme').brandColor='rgb(27, 60, 121)'"
      >
        Default brand
      </ic-button>
      <ic-button
        variant="primary"
        id="custom-btn"
        onClick="document.querySelector('#brand-story-ic-theme').brandColor='rgb(255, 201, 60)'"
      >
        Sunrise brand
      </ic-button>
    </ic-theme>`,

  name: "Brand",

  parameters: {
    layout: "fullscreen",
  },
};

export const LongSingleWordAppTitle = {
  render: (args) =>
    html`<ic-top-navigation
      app-title="Applicationwithareallyreallylongsinglewordname"
      status="alpha"
      version="v0.0.7"
    >
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
      <ic-search-bar
        slot="search"
        placeholder="Search"
        label="Search"
      ></ic-search-bar>
      <ic-navigation-button
        label="Button One"
        slot="buttons"
        onclick="alert('test')"
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
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-navigation-button>
    </ic-top-navigation>`,

  name: "Long single-word app title",

  parameters: {
    layout: "fullscreen",
  },
};

export const ShortTitle = {
  render: (args) =>
    html`<ic-top-navigation
      app-title="Application Name"
      short-app-title="App Name"
    >
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
    </ic-top-navigation>`,

  name: "Short title",

  parameters: {
    layout: "fullscreen",
  },
};

export const TopNavResizedEvent = {
  render: (args) =>
    html`<script>
        var topNav = document.querySelector("ic-top-navigation");
        topNav.addEventListener("icTopNavResized", function (event) {
          console.log(event.detail.size);
        });
      </script>
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
      </ic-top-navigation>`,

  name: "Top nav resized event",

  parameters: {
    layout: "fullscreen",
  },
};

export const Playground = {
  render: (args) =>
    html`<ic-top-navigation
      app-title=${args.appTitle}
      content-aligned=${args.contentAligned}
      custom-mobile-breakpoint=${args.customMobileBreakpoint}
      href=${args.href}
      inline=${args.inline}
      short-app-title=${args.shortAppTitle}
      status=${args.status}
      version=${args.version}
      theme=${args.theme}
    >
      <svg
        slot=${args.appIconSlot}
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
      <ic-search-bar
        slot=${args.searchSlot}
        placeholder="Search"
        label="Search"
      ></ic-search-bar>
      <ic-navigation-button
        label="Button One"
        slot=${args.buttonsSlot}
        href="https://www.google.com"
        target="_blank"
        title="Google 1"
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
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <ic-badge
          label="1"
          slot="badge"
          custom-color="#d4351c"
          variant="custom"
          theme="dark"
        ></ic-badge>
      </ic-navigation-button>
      <ic-navigation-button
        label="Button Two"
        slot=${args.buttonsSlot}
        href="https://www.google.com"
        target="_blank"
        title="Google 2"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
          />
        </svg>
        <ic-badge
          slot="badge"
          type="dot"
          custom-color="#d4351c"
          variant="custom"
          theme="dark"
        ></ic-badge>
      </ic-navigation-button>
      <ic-navigation-button
        label="Button Three"
        slot=${args.buttonsSlot}
        onclick="alert('test')"
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
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
          />
        </svg>
      </ic-navigation-button>
      <ic-navigation-group slot="navigation" label="Navigation group">
        <ic-navigation-item label="Another One" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Two" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Three" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Four" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Five" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Six" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Seven" href="/"></ic-navigation-item>
        <ic-navigation-item label="Another Eight" href="/"></ic-navigation-item>
      </ic-navigation-group>
      <ic-navigation-item
        slot="navigation"
        label="Two thousand five hundred and sixty three"
        href="/"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Three"
        href="/"
        target="_blank"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="navigation"
        label="Four"
        href="/"
        selected="true"
      ></ic-navigation-item>
    </ic-top-navigation>`,

  args: defaultArgs,

  argTypes: {
    contentAligned: {
      options: ["full-width", "left", "center"],

      control: {
        type: "select",
      },
    },

    customMobileBreakpoint: {
      options: [0, 576, 768, 992, 1200],

      control: {
        type: "select",
      },
    },

    appIconSlot: {
      options: ["app-icon", ""],

      control: {
        type: "select",
      },
    },

    searchSlot: {
      options: ["search", ""],

      control: {
        type: "select",
      },
    },

    buttonsSlot: {
      options: ["buttons", ""],

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
