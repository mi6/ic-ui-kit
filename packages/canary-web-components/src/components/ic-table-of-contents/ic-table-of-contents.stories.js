import readme from "./readme.md";
import { html } from "lit-html";

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
      <ic-top-navigation app-title="ICDS" status="alpha" version="v0.0.7">
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
        <ic-search-bar
          slot="search"
          placeholder="Search"
          label="Search"
        ></ic-search-bar>
        <ic-navigation-button label="Notifications" slot="buttons">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="#000000"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
        </ic-navigation-button>
        <ic-navigation-item
          slot="navigation"
          label="Get started"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Accessibility"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Styles"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Components"
          href="#"
          selected="true"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Patterns"
          href="#"
        ></ic-navigation-item>
      </ic-top-navigation>
      <ic-side-navigation
        app-title="ACME coffee shop"
        version="v0.0.7"
        status="Alpha"
      >
        <ic-side-navigation-item>test</ic-side-navigation-item>
      </ic-side-navigation>
      <ic-page-header
        heading="Latte recipe"
        subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
        reverse-order="true"
        sticky="true"
      ></ic-page-header>
      <ic-table-of-contents position="right" truncate="true" size="large">
        <div id="content" style="width:100%;">
          <div id="red" style="height:100vh; background:gray">
            <h2>Test something</h2>
            <div>
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              <h3>subheading2</h3>
              <h3>subheading3</h3>
              <h4>subheading4</h4>
              <ic-accordion>
                <ic-accordion-item>
                  <ic-accordion-header>Accordion Header</ic-accordion-header>
                  <ic-accordion-content>Accordion Content</ic-accordion-content>
                </ic-accordion-item>
              </ic-accordion>
              <h5>subheading5</h5>
            </div>
          </div>
          <div id="blue" style="height:100vh; background:darkgray">
            <h2>
              another test with long label that should truncate truncate
              truncate truncate
            </h2>
            <div style="height:500px;"></div>
            <div><h3>another heading sub</h3></div>
          </div>
          <div id="green" style="height:100vh; background:lightgray">
            <h2>test</h2>
          </div>
        </div>
      </ic-table-of-contents>
    </div>
  `,
  name: "Default",
};

export const DefaultTop = {
  render: () => html`
    <ic-table-of-contents position="top" truncate="true">
      <div id="content" style="width:100%;">
        <div id="red" style="height:100vh; background:gray">
          <h2>Test something</h2>
          <div>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            <h3>sub heading</h3>
            <h3>subheading2</h3>
            <h3>subheading3</h3>
            <h4>subheading4</h4>
            <h5>subheading5</h5>
          </div>
        </div>
        <div id="blue" style="height:100vh; background:darkgray">
          <h2>another test with long label that should truncate</h2>
          <div style="height:500px;"></div>
          <div><h3>another heading sub</h3></div>
        </div>
        <div id="green" style="height:100vh; background:lightgray">
          <h2>test</h2>
        </div>
      </div>
    </ic-table-of-contents>
  `,
  name: "Default Top",
};

export const DefaultDark = {
  render: () => html`
    <ic-theme theme="dark">
      <div
        style="position:fixed; height:100vh; width:100vw; background-color:#17191C; z-index:-1; top:0; left:0;"
      ></div>
      <ic-table-of-contents position="right" truncate="true">
        <div id="content" style="width:100%;">
          <div id="red" style="height:100vh; background:gray">
            <h2>Test something</h2>
            <div>
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              <h3>subheading2</h3>
              <h3>subheading3</h3>
              <h4>subheading4</h4>
              <ic-accordion>
                <ic-accordion-item>
                  <ic-accordion-header>Accordion Header</ic-accordion-header>
                  <ic-accordion-content>Accordion Content</ic-accordion-content>
                </ic-accordion-item>
              </ic-accordion>
              <h5>subheading5</h5>
            </div>
          </div>
          <div id="blue" style="height:100vh; background:darkgray">
            <h2>
              another test with long label that should truncate truncate
              truncate truncate
            </h2>
            <div style="height:500px;"></div>
            <div><h3>another heading sub</h3></div>
          </div>
          <div id="green" style="height:100vh; background:lightgray">
            <h2>test</h2>
          </div>
        </div>
      </ic-table-of-contents>
    </ic-theme>
  `,
  name: "Default Dark",
};
