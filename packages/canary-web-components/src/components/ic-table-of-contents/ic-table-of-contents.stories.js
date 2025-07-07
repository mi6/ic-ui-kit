import readme from "./readme.md";
import { html } from "lit-html";

const INLINE_RADIO = "inline-radio";

export default {
  title: "Web Components/Table of Contents",
  component: "Table of Contents",
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const Default = {
  render: () => html`
    <div>
      <ic-top-navigation app-title="ICDS" status="Coffee">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <ic-navigation-item
          slot="navigation"
          label="Latte recipe"
          href="#"
        ></ic-navigation-item>
      </ic-top-navigation>

      <div style="display:flex; flex-direction:column; height:100%;">
        <ic-page-header
          heading="Latte recipe"
          subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
          reverse-order="true"
          sticky="true"
        ></ic-page-header>
        <ic-table-of-contents position="right" set-scroll-height="100">
          <div id="content" style="width:100%;">
            <div style="height:100vh; background:gray">
              <h2>What is a Latte</h2>
              <p>Lorum ipsum etcetera</p>
            </div>
            <div style="height:100vh; background:darkgray">
              <h2>Choosing the right milk</h2>
              <p>
                There is an interactive element here to test focus shifting with
              </p>
              <ic-button>Test Button</ic-button>
            </div>
            <div style="height:100vh; background:gray">
              <h3>How to correctly steam milk</h3>
            </div>
            <div style="height:100vh; background:lightgray">
              <h2>Coffee art</h2>
              <p>Another interactive element shows up.</p>
              <ic-button>Second Button</ic-button>
            </div>
            <div style="height:100vh; background:lightgray">
              <h2>Putting it all together</h2>
            </div>
          </div>
        </ic-table-of-contents>
      </div>
    </div>
  `,
  name: "Default",
};

export const Nested = {
  render: () => html`
    <div>
      <ic-table-of-contents position="right" maximum-heading-level="5">
        <div id="content" style="width:100%;">
          <div style="height:50vh; background:gray">
            <ic-typography variant="h2" color="primary">
              <h2>A Latte</h2>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray">
            <ic-typography variant="h3" color="primary">
              <h3>The Espresso</h3>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray">
            <ic-typography variant="h3" color="primary">
              <h4>Flat White</h4>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray">
            <ic-typography variant="h3" color="primary">
              <h5>Latte</h5>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray">
            <ic-typography variant="h3" color="primary">
              <h5>Faux Latte</h5>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray">
            <ic-typography variant="h3" color="primary">
              <h3>The Big One</h3>
            </ic-typography>
          </div>
        </div>
      </ic-table-of-contents>
    </div>
  `,
  name: "Nested Table of Contents",
};

export const monochrome = {
  render: () => html`
    <div>
      <ic-table-of-contents monochrome>
        <div style="width:fit-content; display:flex; flex-direction:column;">
          <div
            style="height:100vh; max-width:1200px; min-width:600px; background:gray"
          >
            <h2>Latte</h2>
          </div>
          <div style="height:100vh; background:darkgray">
            <h2>Americano</h2>
          </div>
        </div>
      </ic-table-of-contents>
    </div>
  `,
  name: "Monochrome",
};

export const DefaultTop = {
  render: () => html`
    <ic-table-of-contents position="top">
      <div id="content" style="width:100%;">
        <div style="height:100vh; background:gray">
          <h2>How to make coffee</h2>
        </div>
        <div style="height:100vh; background:darkgray">
          <h3>Why you make coffee</h3>
        </div>
        <div style="height:100vh; background:lightgray">
          <h2>The dark truth of coffee</h2>
        </div>
      </div>
    </ic-table-of-contents>
  `,
  name: "Default Top",
};

export const ComplexPageHeadings = {
  render: () => html`
    <ic-table-of-contents>
      <div id="content" style="width:100%;">
        <div style="height:100vh; background:gray">
          <ic-typography variant="h2">
            <h3>How to make coffee</h3>
          </ic-typography>
          <p>This heading is inside an Ic-Typography element</p>
        </div>
        <div style="height:100vh; background:darkgray">
          <ic-typography variant="h2">
            <h3>
              Why you might make coffee
              <ic-link href="www.example.com">More info</ic-link>
            </h3>
          </ic-typography>
          <p>
            This heading has a link element nested inside it. The table of
            contents will only scrape the start of the textContent of the
            heading element and will exclude the link text.
          </p>
        </div>
        <div style="height:100vh;">
          <h2 id="coffee-dark">The dark truth of coffee</h2>
          <p>
            This heading is level 2, after the others being level 3 - which
            means the page has an incorrect heading hierarchy. This is bad
            practice but Table of Contents still renders.
          </p>
        </div>
      </div>
    </ic-table-of-contents>
  `,
  name: "Complex Page Headings",
};

export const DarkTheme = {
  render: () => html`
    <ic-theme theme="dark">
      <div
        style="position:fixed; height:100vh; width:100vw; background-color:#17191C; z-index:-1; top:0; left:0;"
      ></div>
      <ic-table-of-contents>
        <div id="content" style="width:100%;">
          <div id="red" style="height:100vh">
            <h2>Test something</h2>
          </div>
          <div id="blue" style="height:100vh">
            <h2>another test with long label that should truncate</h2>
            <div style="height:500px;"></div>
            <div><h3>another heading sub</h3></div>
          </div>
          <div id="green" style="height:100vh">
            <h2>test</h2>
          </div>
        </div>
      </ic-table-of-contents>
    </ic-theme>
  `,
  name: "Dark theme",
};

const defaultArgs = {
  monochrome: false,
  theme: "inherit",
  truncate: true,
  size: "medium",
  position: "right",
  heading: "Contents",
  setScrollHeight: 50,
  maximumHeadingLevel: 3,
};

export const Playground = {
  render: (args) => html`
    <div style="display:flex; flex-direction:column; height:100%;">
      <ic-table-of-contents
        monochrome=${args.monochrome}
        theme=${args.theme}
        truncate=${args.truncate}
        size=${args.size}
        position=${args.position}
        heading=${args.heading}
        set-scroll-height=${args.setScrollHeight}
        maximum-heading-level=${args.maximumHeadingLevel}
      >
        <div id="content" style="width:100%">
          <div style="height:50vh; background:gray;">
            <ic-typography variant="h2" color="primary">
              <h2>
                H2: A Latte and a really long heading label that should truncate
              </h2>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray;">
            <ic-typography variant="h3" color="primary">
              <h3>H3: The Espresso</h3>
            </ic-typography>
          </div>
          <div style="height:50vh; background:gray;">
            <ic-typography variant="h3" color="primary">
              <h4>H4: Flat White</h4>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray;">
            <ic-typography variant="h3" color="primary">
              <h5>H5: Latte</h5>
            </ic-typography>
          </div>
          <div style="height:50vh; background:gray;">
            <ic-typography variant="h2" color="primary">
              <h2>H2: Other drinks</h2>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray;">
            <ic-typography variant="h3" color="primary">
              <h3>H3: Just Tea</h3>
            </ic-typography>
          </div>
        </div>
      </ic-table-of-contents>
    </div>
  `,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["medium", "large"],
      control: { type: INLINE_RADIO },
    },
    position: {
      options: ["right", "top"],
      control: { type: INLINE_RADIO },
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: { type: INLINE_RADIO },
    },
  },
  name: "Playground",
};
