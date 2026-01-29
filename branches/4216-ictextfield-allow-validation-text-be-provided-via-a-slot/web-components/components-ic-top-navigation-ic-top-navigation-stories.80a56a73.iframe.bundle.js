/*! For license information please see components-ic-top-navigation-ic-top-navigation-stories.80a56a73.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9407,582,6199,6763],{"./src/components/ic-top-navigation/ic-top-navigation.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AppIconAndTitle:()=>AppIconAndTitle,Brand:()=>Brand,ContentCenterAligned:()=>ContentCenterAligned,ContentLeftAligned:()=>ContentLeftAligned,LongAppTitle:()=>LongAppTitle,LongSingleWordAppTitle:()=>LongSingleWordAppTitle,Playground:()=>Playground,ShortTitle:()=>ShortTitle,SlottedTitleLink:()=>SlottedTitleLink,StatusAndVersion:()=>StatusAndVersion,TopNavResizedEvent:()=>TopNavResizedEvent,UsingUnnamedSlots:()=>UsingUnnamedSlots,WithGroupedNavigation:()=>WithGroupedNavigation,WithIcons:()=>WithIcons,WithNavigation:()=>WithNavigation,WithSearch:()=>WithSearch,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Top navigation",component:"ic-top-navigation"},AppIconAndTitle={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation app-title="Application Name">
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
    </ic-top-navigation>`,name:"App icon and title",parameters:{layout:"fullscreen"}},SlottedTitleLink={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation>
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
    </ic-top-navigation>`,name:"Slotted title link",parameters:{layout:"fullscreen"}},StatusAndVersion={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
    </ic-top-navigation>`,name:"Status and version",parameters:{layout:"fullscreen"}},WithSearch={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
      </script>`,name:"With search",parameters:{layout:"fullscreen"}},WithIcons={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
    </ic-top-navigation> `,name:"With icons",parameters:{layout:"fullscreen"}},LongAppTitle={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
    </ic-top-navigation>`,name:"Long app title",parameters:{layout:"fullscreen"}},WithNavigation={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
    </ic-top-navigation>`,name:"With navigation",parameters:{layout:"fullscreen"}},UsingUnnamedSlots={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
    </ic-top-navigation>`,name:"Using unnamed slots",parameters:{layout:"fullscreen"}},WithGroupedNavigation={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
    </ic-top-navigation>`,name:"With grouped navigation",parameters:{layout:"fullscreen"}},ContentCenterAligned={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
    </ic-top-navigation>`,name:"Content center aligned",parameters:{layout:"fullscreen"}},ContentLeftAligned={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
    </ic-top-navigation>`,name:"Content left aligned",parameters:{layout:"fullscreen"}},Brand={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-theme brand-color="rgb(27, 60, 121)" id="brand-story-ic-theme">
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
    </ic-theme>`,name:"Brand",parameters:{layout:"fullscreen"}},LongSingleWordAppTitle={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
    </ic-top-navigation>`,name:"Long single-word app title",parameters:{layout:"fullscreen"}},ShortTitle={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
    </ic-top-navigation>`,name:"Short title",parameters:{layout:"fullscreen"}},TopNavResizedEvent={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<script>
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
      </ic-top-navigation>`,name:"Top nav resized event",parameters:{layout:"fullscreen"}},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-top-navigation
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
    </ic-top-navigation>`,args:{appTitle:"Application Name",contentAligned:"full-width",customMobileBreakpoint:992,href:"/",inline:!1,shortAppTitle:"App Name",status:"alpha",version:"0.0.1",appIconSlot:"app-icon",searchSlot:"search",buttonsSlot:"buttons",theme:"inherit"},argTypes:{contentAligned:{options:["full-width","left","center"],control:{type:"select"}},customMobileBreakpoint:{options:[0,576,768,992,1200],control:{type:"select"}},appIconSlot:{options:["app-icon",""],control:{type:"select"}},searchSlot:{options:["search",""],control:{type:"select"}},buttonsSlot:{options:["buttons",""],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["AppIconAndTitle","SlottedTitleLink","StatusAndVersion","WithSearch","WithIcons","LongAppTitle","WithNavigation","UsingUnnamedSlots","WithGroupedNavigation","ContentCenterAligned","ContentLeftAligned","Brand","LongSingleWordAppTitle","ShortTitle","TopNavResizedEvent","Playground"];AppIconAndTitle.parameters={...AppIconAndTitle.parameters,docs:{...AppIconAndTitle.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation app-title="Application Name">\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n    </ic-top-navigation>`,\n  name: "App icon and title",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...AppIconAndTitle.parameters?.docs?.source}}},SlottedTitleLink.parameters={...SlottedTitleLink.parameters,docs:{...SlottedTitleLink.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation>\n      <a slot="app-title" href="/">Application Name</a>\n      <a slot="short-app-title" href="/">App name</a>\n      <a slot="app-icon" href="/">\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="inherit"\n          viewBox="0 0 24 24"\n          width="inherit"\n          fill="inherit"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </a>\n    </ic-top-navigation>`,\n  name: "Slotted title link",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...SlottedTitleLink.parameters?.docs?.source}}},StatusAndVersion.parameters={...StatusAndVersion.parameters,docs:{...StatusAndVersion.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation\n      app-title="Application Name"\n      status="alpha"\n      version="v0.0.7"\n    >\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n    </ic-top-navigation>`,\n  name: "Status and version",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...StatusAndVersion.parameters?.docs?.source}}},WithSearch.parameters={...WithSearch.parameters,docs:{...WithSearch.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation\n        app-title="Application Name"\n        status="alpha"\n        version="v0.0.7"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-search-bar\n          slot="search"\n          placeholder="Search"\n          label="Search"\n        ></ic-search-bar>\n      </ic-top-navigation>\n      <script>\n        const search1 = document.querySelector("ic-search-bar");\n        search1.options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n      <\/script>`,\n  name: "With search",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...WithSearch.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation\n      app-title="Application Name"\n      status="alpha"\n      version="v0.0.7"\n    >\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n      <ic-search-bar\n        slot="search"\n        placeholder="Search"\n        label="Search"\n      ></ic-search-bar>\n      <ic-navigation-button\n        label="Button One"\n        slot="buttons"\n        href="https://www.google.com"\n        target="_blank"\n        title="Google 1"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-badge\n          label="1"\n          slot="badge"\n          custom-color="#d4351c"\n          variant="custom"\n          theme="dark"\n        ></ic-badge>\n      </ic-navigation-button>\n      <ic-navigation-button\n        label="Button Two"\n        slot="buttons"\n        href="https://www.google.com"\n        target="_blank"\n        title="Google 2"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"\n          />\n        </svg>\n        <ic-badge\n          slot="badge"\n          type="dot"\n          custom-color="#d4351c"\n          variant="custom"\n          theme="dark"\n        ></ic-badge>\n      </ic-navigation-button>\n      <ic-navigation-button\n        label="Button Three"\n        slot="buttons"\n        onclick="alert(\'test\')"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"\n          />\n        </svg>\n      </ic-navigation-button>\n    </ic-top-navigation> `,\n  name: "With icons",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...WithIcons.parameters?.docs?.source}}},LongAppTitle.parameters={...LongAppTitle.parameters,docs:{...LongAppTitle.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation\n      app-title="Application with a long name"\n      status="alpha-beta-gamma-delta-epsilon"\n      version="v0.0.7-current-release-name-that-is-long"\n    >\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n      <ic-search-bar\n        slot="search"\n        placeholder="Search"\n        label="Search"\n      ></ic-search-bar>\n      <ic-navigation-button\n        label="Button One"\n        slot="buttons"\n        onclick="alert(\'test\')"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-navigation-button>\n    </ic-top-navigation>`,\n  name: "Long app title",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...LongAppTitle.parameters?.docs?.source}}},WithNavigation.parameters={...WithNavigation.parameters,docs:{...WithNavigation.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation\n      app-title="Application Name"\n      status="alpha"\n      version="v0.0.7"\n    >\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n      <ic-search-bar\n        slot="search"\n        placeholder="Search"\n        label="Search"\n      ></ic-search-bar>\n      <ic-navigation-button\n        label="Button One"\n        slot="buttons"\n        onclick="alert(\'test\')"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-navigation-button>\n      <ic-navigation-item\n        slot="navigation"\n        label="One"\n        href="/"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Two thousand five hundred and sixty three"\n        href="/"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Three"\n        href="/"\n        target="_blank"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Four"\n        href="/"\n        selected="true"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Five"\n        href="/"\n      ></ic-navigation-item>\n    </ic-top-navigation>`,\n  name: "With navigation",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...WithNavigation.parameters?.docs?.source}}},UsingUnnamedSlots.parameters={...UsingUnnamedSlots.parameters,docs:{...UsingUnnamedSlots.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation\n      app-title="Application Name"\n      status="alpha"\n      version="v0.0.7"\n    >\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n      <ic-navigation-item slot="navigation">\n        <a href="/">One</a>\n      </ic-navigation-item>\n      <ic-navigation-item slot="navigation">\n        <a href="/">Two</a>\n      </ic-navigation-item>\n      <ic-navigation-item slot="navigation">\n        <a href="/">Three</a>\n      </ic-navigation-item>\n    </ic-top-navigation>`,\n  name: "Using unnamed slots",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...UsingUnnamedSlots.parameters?.docs?.source}}},WithGroupedNavigation.parameters={...WithGroupedNavigation.parameters,docs:{...WithGroupedNavigation.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation\n      app-title="Application Name"\n      status="alpha"\n      version="v0.0.7"\n    >\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n      <ic-search-bar\n        slot="search"\n        placeholder="Search"\n        label="Search"\n      ></ic-search-bar>\n      <ic-navigation-group\n        slot="navigation"\n        label="Navigation group (expandable on mobile)"\n        expandable="true"\n      >\n        <ic-navigation-item label="One" href="/">\n          <ic-badge\n            label="1"\n            slot="badge"\n            custom-color="#d4351c"\n            variant="custom"\n            theme="dark"\n          ></ic-badge>\n        </ic-navigation-item>\n        <ic-navigation-item label="Two" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Three" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Four" href="/"></ic-navigation-item>\n        <ic-navigation-item\n          label="Five"\n          href="/"\n          selected="true"\n        ></ic-navigation-item>\n        <ic-navigation-item label="Five" href="/"></ic-navigation-item>\n        <ic-navigation-item\n          label="Six"\n          href="/"\n          target="_blank"\n        ></ic-navigation-item>\n        <ic-navigation-item label="Seven" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Eight" href="/"></ic-navigation-item>\n      </ic-navigation-group>\n      <ic-navigation-group slot="navigation" label="Second navigation group">\n        <ic-navigation-item label="Another One" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Two" href="/">\n          <ic-badge\n            label="1"\n            slot="badge"\n            custom-color="#d4351c"\n            variant="custom"\n            theme="dark"\n            position="far"\n          ></ic-badge>\n        </ic-navigation-item>\n        <ic-navigation-item label="Another Three" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Four" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Five" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Six" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Seven" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Eight" href="/"></ic-navigation-item>\n      </ic-navigation-group>\n      <ic-navigation-group\n        slot="navigation"\n        label="Third navigation group"\n        expandable="true"\n      >\n        <ic-navigation-item label="Another One" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Two" href="/"></ic-navigation-item>\n      </ic-navigation-group>\n    </ic-top-navigation>`,\n  name: "With grouped navigation",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...WithGroupedNavigation.parameters?.docs?.source}}},ContentCenterAligned.parameters={...ContentCenterAligned.parameters,docs:{...ContentCenterAligned.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation\n      app-title="Application Name"\n      status="alpha"\n      version="v0.0.7"\n      content-aligned="center"\n    >\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n      <ic-search-bar\n        slot="search"\n        placeholder="Search"\n        label="Search"\n      ></ic-search-bar>\n      <ic-navigation-button\n        label="Button One"\n        slot="buttons"\n        onclick="alert(\'test\')"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-navigation-button>\n      <ic-navigation-item\n        slot="navigation"\n        label="One"\n        href="/"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Two"\n        href="/"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Three"\n        href="/"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Four"\n        href="/"\n        selected="true"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Five"\n        href="/"\n      ></ic-navigation-item>\n    </ic-top-navigation>`,\n  name: "Content center aligned",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...ContentCenterAligned.parameters?.docs?.source}}},ContentLeftAligned.parameters={...ContentLeftAligned.parameters,docs:{...ContentLeftAligned.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation\n      app-title="Application Name"\n      status="alpha"\n      version="v0.0.7"\n      content-aligned="left"\n    >\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n      <ic-search-bar\n        slot="search"\n        placeholder="Search"\n        label="Search"\n      ></ic-search-bar>\n      <ic-navigation-button\n        label="Button One"\n        slot="buttons"\n        onclick="alert(\'test\')"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-navigation-button>\n      <ic-navigation-item\n        slot="navigation"\n        label="One"\n        href="/"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Two"\n        href="/"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Three"\n        href="/"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Four"\n        href="/"\n        selected="true"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Five"\n        href="/"\n      ></ic-navigation-item>\n    </ic-top-navigation>`,\n  name: "Content left aligned",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...ContentLeftAligned.parameters?.docs?.source}}},Brand.parameters={...Brand.parameters,docs:{...Brand.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-theme brand-color="rgb(27, 60, 121)" id="brand-story-ic-theme">\n      <ic-top-navigation\n        app-title="Application Name"\n        status="alpha"\n        version="v0.0.7"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-search-bar\n          slot="search"\n          placeholder="Search"\n          label="Search"\n        ></ic-search-bar>\n        <ic-navigation-button\n          label="Button One"\n          slot="buttons"\n          onclick="alert(\'test\')"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n        </ic-navigation-button>\n        <ic-navigation-item\n          slot="navigation"\n          label="One"\n          href="/"\n          selected="true"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Two"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Three"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Four"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Five"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Six"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Seven"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Eight"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Nine"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Ten"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Eleven"\n          href="/"\n        ></ic-navigation-item>\n      </ic-top-navigation>\n      <br />\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'#brand-story-ic-theme\').brandColor=\'rgb(27, 60, 121)\'"\n      >\n        Default brand\n      </ic-button>\n      <ic-button\n        variant="primary"\n        id="custom-btn"\n        onClick="document.querySelector(\'#brand-story-ic-theme\').brandColor=\'rgb(255, 201, 60)\'"\n      >\n        Sunrise brand\n      </ic-button>\n    </ic-theme>`,\n  name: "Brand",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...Brand.parameters?.docs?.source}}},LongSingleWordAppTitle.parameters={...LongSingleWordAppTitle.parameters,docs:{...LongSingleWordAppTitle.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation\n      app-title="Applicationwithareallyreallylongsinglewordname"\n      status="alpha"\n      version="v0.0.7"\n    >\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n      <ic-search-bar\n        slot="search"\n        placeholder="Search"\n        label="Search"\n      ></ic-search-bar>\n      <ic-navigation-button\n        label="Button One"\n        slot="buttons"\n        onclick="alert(\'test\')"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-navigation-button>\n    </ic-top-navigation>`,\n  name: "Long single-word app title",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...LongSingleWordAppTitle.parameters?.docs?.source}}},ShortTitle.parameters={...ShortTitle.parameters,docs:{...ShortTitle.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-top-navigation\n      app-title="Application Name"\n      short-app-title="App Name"\n    >\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n    </ic-top-navigation>`,\n  name: "Short title",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...ShortTitle.parameters?.docs?.source}}},TopNavResizedEvent.parameters={...TopNavResizedEvent.parameters,docs:{...TopNavResizedEvent.parameters?.docs,source:{originalSource:'{\n  render: () => html`<script>\n        var topNav = document.querySelector("ic-top-navigation");\n        topNav.addEventListener("icTopNavResized", function (event) {\n          console.log(event.detail.size);\n        });\n      <\/script>\n      <ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>`,\n  name: "Top nav resized event",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...TopNavResizedEvent.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-top-navigation\n      app-title=${args.appTitle}\n      content-aligned=${args.contentAligned}\n      custom-mobile-breakpoint=${args.customMobileBreakpoint}\n      href=${args.href}\n      inline=${args.inline}\n      short-app-title=${args.shortAppTitle}\n      status=${args.status}\n      version=${args.version}\n      theme=${args.theme}\n    >\n      <svg\n        slot=${args.appIconSlot}\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n      <ic-search-bar\n        slot=${args.searchSlot}\n        placeholder="Search"\n        label="Search"\n      ></ic-search-bar>\n      <ic-navigation-button\n        label="Button One"\n        slot=${args.buttonsSlot}\n        href="https://www.google.com"\n        target="_blank"\n        title="Google 1"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-badge\n          label="1"\n          slot="badge"\n          custom-color="#d4351c"\n          variant="custom"\n          theme="dark"\n        ></ic-badge>\n      </ic-navigation-button>\n      <ic-navigation-button\n        label="Button Two"\n        slot=${args.buttonsSlot}\n        href="https://www.google.com"\n        target="_blank"\n        title="Google 2"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"\n          />\n        </svg>\n        <ic-badge\n          slot="badge"\n          type="dot"\n          custom-color="#d4351c"\n          variant="custom"\n          theme="dark"\n        ></ic-badge>\n      </ic-navigation-button>\n      <ic-navigation-button\n        label="Button Three"\n        slot=${args.buttonsSlot}\n        onclick="alert(\'test\')"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"\n          />\n        </svg>\n      </ic-navigation-button>\n      <ic-navigation-group slot="navigation" label="Navigation group">\n        <ic-navigation-item label="Another One" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Two" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Three" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Four" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Five" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Six" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Seven" href="/"></ic-navigation-item>\n        <ic-navigation-item label="Another Eight" href="/"></ic-navigation-item>\n      </ic-navigation-group>\n      <ic-navigation-item\n        slot="navigation"\n        label="Two thousand five hundred and sixty three"\n        href="/"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Three"\n        href="/"\n        target="_blank"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="navigation"\n        label="Four"\n        href="/"\n        selected="true"\n      ></ic-navigation-item>\n    </ic-top-navigation>`,\n  args: defaultArgs,\n  argTypes: {\n    contentAligned: {\n      options: ["full-width", "left", "center"],\n      control: {\n        type: "select"\n      }\n    },\n    customMobileBreakpoint: {\n      options: [0, 576, 768, 992, 1200],\n      control: {\n        type: "select"\n      }\n    },\n    appIconSlot: {\n      options: ["app-icon", ""],\n      control: {\n        type: "select"\n      }\n    },\n    searchSlot: {\n      options: ["search", ""],\n      control: {\n        type: "select"\n      }\n    },\n    buttonsSlot: {\n      options: ["buttons", ""],\n      control: {\n        type: "select"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-top-navigation-ic-top-navigation-stories.80a56a73.iframe.bundle.js.map