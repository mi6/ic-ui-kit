/*! For license information please see components-ic-top-navigation-ic-top-navigation-stories-mdx.0fdd25fd.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2161],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-top-navigation/ic-top-navigation.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,appIconAndTitle:()=>appIconAndTitle,contentCenterAligned:()=>contentCenterAligned,contentLeftAligned:()=>contentLeftAligned,default:()=>ic_top_navigation_stories,defaultArgs:()=>defaultArgs,longAppTitle:()=>longAppTitle,longSingleWordAppTitle:()=>longSingleWordAppTitle,playground:()=>playground,shortTitle:()=>shortTitle,slottedTitleLink:()=>slottedTitleLink,statusAndVersion:()=>statusAndVersion,theming:()=>theming,topNavResizedEvent:()=>topNavResizedEvent,usingUnnamedSlots:()=>usingUnnamedSlots,withGroupedNavigation:()=>withGroupedNavigation,withIcons:()=>withIcons,withNavigation:()=>withNavigation,withSearch:()=>withSearch});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-top-navigation\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute                  | Description                                                                                                                                                    | Type                                 | Default          |\n| ------------------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------- |\n| `appTitle`               | `app-title`                | The app title to be displayed. This is required, unless a slotted app title link is used.                                                                      | `string`                             | `undefined`      |\n| `contentAligned`         | `content-aligned`          | The alignment of the top navigation content.                                                                                                                   | `"center" \\| "full-width" \\| "left"` | `"full-width"`   |\n| `customMobileBreakpoint` | `custom-mobile-breakpoint` | Can set a custom breakpoint for the top navigation to switch to mobile mode. Must be one of our specified breakpoints in px: `0`, `576`, `768`, `992`, `1200`. | `0 \\| 1200 \\| 576 \\| 768 \\| 992`     | `DEVICE_SIZES.L` |\n| `href`                   | `href`                     | The URL to navigate to when the app title is clicked.                                                                                                          | `string`                             | `"/"`            |\n| `inline`                 | `inline`                   | If `true`, the flyout navigation menu on small devices will be contained by the parent element.                                                                | `boolean`                            | `false`          |\n| `shortAppTitle`          | `short-app-title`          | The short title of the app to be displayed at small screen sizes in place of the app title.                                                                    | `string`                             | `""`             |\n| `status`                 | `status`                   | The status info to be displayed.                                                                                                                               | `string`                             | `""`             |\n| `version`                | `version`                  | The version info to be displayed.                                                                                                                              | `string`                             | `""`             |\n\n\n## Events\n\n| Event           | Description                                 | Type                             |\n| --------------- | ------------------------------------------- | -------------------------------- |\n| `topNavResized` | Emitted when the top navigation is resized. | `CustomEvent<{ size: number; }>` |\n\n\n## Slots\n\n| Slot                | Description                                                                                                             |\n| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |\n| `"app-icon"`        | Content will be rendered to left of app title. Anything that is slotted here will be hidden from screen readers.        |\n| `"app-title"`       | Handle routing by nesting a route in the app title.                                                                     |\n| `"buttons"`         | Content will be rendered to right of search bar.                                                                        |\n| `"navigation"`      | Content will be rendered in navigation panel.                                                                           |\n| `"search"`          | Content will be rendered in search area to left of buttons.                                                             |\n| `"short-app-title"` | Handle routing by nesting a route in the short app title (to be displayed in place of app title on small screen sizes). |\n| `"toggle-icon"`     | Icon to be displayed on the button to toggle search slot content on smaller devices                                     |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-section-container](../ic-section-container)\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n- [ic-horizontal-scroll](../ic-horizontal-scroll)\n- [ic-navigation-menu](../ic-navigation-menu)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-top-navigation --\x3e ic-section-container\n  ic-top-navigation --\x3e ic-typography\n  ic-top-navigation --\x3e ic-button\n  ic-top-navigation --\x3e ic-horizontal-scroll\n  ic-top-navigation --\x3e ic-navigation-menu\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-horizontal-scroll --\x3e ic-button\n  ic-navigation-menu --\x3e ic-button\n  ic-navigation-menu --\x3e ic-typography\n  style ic-top-navigation fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_navigation_button_readme_namespaceObject='# ic-navigation-button\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute        | Description                                                                                         | Type                                                                                                                                                                                     | Default     |\n| -------------------- | ---------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `download`           | `download`       | If `true`, the user can save the linked URL instead of navigating to it.                            | `boolean \\| string`                                                                                                                                                                      | `false`     |\n| `href`               | `href`           | The URL that the link points to. This will render the button as an "a" tag.                         | `string`                                                                                                                                                                                 | `undefined` |\n| `hreflang`           | `hreflang`       | The human language of the linked URL.                                                               | `string`                                                                                                                                                                                 | `undefined` |\n| `label` _(required)_ | `label`          | The label info to display.                                                                          | `string`                                                                                                                                                                                 | `undefined` |\n| `referrerpolicy`     | `referrerpolicy` | How much of the referrer to send when following the link.                                           | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`                | `rel`            | The relationship of the linked URL as space-separated link types.                                   | `string`                                                                                                                                                                                 | `undefined` |\n| `target`             | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe). | `string`                                                                                                                                                                                 | `undefined` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the native `button`.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot      | Description                                             |\n| --------- | ------------------------------------------------------- |\n| `"badge"` | Badge component overlaying the top right of the button. |\n| `"icon"`  | Content will be placed to the left of the button label. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-navigation-button --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-navigation-button fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_navigation_item_readme_namespaceObject='# ic-navigation-item\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                         | Type                                                                                                                                                                                     | Default     |\n| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `download`       | `download`       | If `true`, the user can save the linked URL instead of navigating to it.                            | `boolean \\| string`                                                                                                                                                                      | `false`     |\n| `href`           | `href`           | The destination of the navigation item.                                                             | `string`                                                                                                                                                                                 | `""`        |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                               | `string`                                                                                                                                                                                 | `undefined` |\n| `label`          | `label`          | The label of the navigation item.                                                                   | `string`                                                                                                                                                                                 | `undefined` |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                           | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                   | `string`                                                                                                                                                                                 | `undefined` |\n| `selected`       | `selected`       | If `true`, the navigation item will be set in a selected state.                                     | `boolean`                                                                                                                                                                                | `false`     |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe). | `string`                                                                                                                                                                                 | `undefined` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the nav item.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot      | Description                                                                                                                                       |\n| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `"badge"` | Badge component overlaying the top right of the icon.                                                                                             |\n| `"icon"`  | Content will be displayed to the left of the label for expanded navigation items, and in replacement of the label for collapsed navigation items. |\n\n\n## Shadow Parts\n\n| Part     | Description                         |\n| -------- | ----------------------------------- |\n| `"link"` | The `<a>` within ic-navigation-item |\n\n\n## CSS Custom Properties\n\n| Name                           | Description                |\n| ------------------------------ | -------------------------- |\n| `--ic-z-index-navigation-item` | z-index of navigation item |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-tooltip](../ic-tooltip)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-navigation-item --\x3e ic-typography\n  ic-navigation-item --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-navigation-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_navigation_group_readme_namespaceObject="# ic-navigation-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property     | Attribute    | Description                                               | Type      | Default     |\n| ------------ | ------------ | --------------------------------------------------------- | --------- | ----------- |\n| `expandable` | `expandable` | If `true`, the group will be expandable in the side menu. | `boolean` | `false`     |\n| `label`      | `label`      | The label to display on the group.                        | `string`  | `undefined` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the nav item.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## CSS Custom Properties\n\n| Name                           | Description                      |\n| ------------------------------ | -------------------------------- |\n| `--ic-z-index-navigation-item` | z-index of navigation group item |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-navigation-group --\x3e ic-typography\n  style ic-navigation-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={appTitle:"Application Name",contentAligned:"full-width",customMobileBreakpoint:992,href:"/",inline:!1,shortAppTitle:"App Name",status:"alpha",version:"0.0.1",appIconSlot:"app-icon",searchSlot:"search",buttonsSlot:"buttons"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Top navigation",component:"ic-top-navigation"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject+ic_navigation_item_readme_namespaceObject+ic_navigation_group_readme_namespaceObject+ic_navigation_button_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"app-icon-and-title",children:"App icon and title"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"App icon and title",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation app-title="Application Name">
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
      </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-title-link",children:"Slotted title link"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted title link",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation>
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
      </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-status-and-version",children:"With Status and version"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Status and version",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-search",children:"With Search"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With search",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
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
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icons",children:"With Icons"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With icons",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
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
            text-label="1"
            slot="badge"
            position="near"
            variant="light"
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
            position="near"
            variant="light"
            type="dot"
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
      </ic-top-navigation> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"long-app-title",children:"Long app title"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Long app title",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-navigation",children:"With navigation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With navigation",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"using-unnamed-slots",children:"Using unnamed slots"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Using unnamed slots",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-grouped-navigation",children:"With grouped navigation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With grouped navigation",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
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
        <ic-navigation-group slot="navigation" label="Navigation group">
          <ic-navigation-item label="One" href="/"></ic-navigation-item>
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
          <ic-navigation-item label="Another Two" href="/"></ic-navigation-item>
          <ic-navigation-item
            label="Another Three"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Four"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Five"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item label="Another Six" href="/"></ic-navigation-item>
          <ic-navigation-item
            label="Another Seven"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Eight"
            href="/"
          ></ic-navigation-item>
        </ic-navigation-group>
      </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"content-center-aligned",children:"Content center aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Content center aligned",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"content-left-aligned",children:"Content left aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Content left aligned",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"theming",children:"Theming"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Theming",parameters:{loki:{skip:!0},layout:"fullscreen"},children:args=>lit_html.qy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
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
          onClick="document.querySelector('ic-theme').color='rgb(27, 60, 121)'"
        >
          Default theme
        </ic-button>
        <ic-button
          variant="primary"
          id="custom-btn"
          onClick="document.querySelector('ic-theme').color='rgb(255, 201, 60)'"
        >
          Sunrise theme
        </ic-button> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"long-single-word-app-title",children:"Long single-word app title"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Long single-word app title",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"short-title",children:"Short title"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Short title",parameters:{layout:"fullscreen",loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"top-nav-resized-event",children:"Top nav resized event"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Top nav resized event",parameters:{loki:{skip:!0},layout:"fullscreen"},children:args=>lit_html.qy`<script>
          var topNav = document.querySelector("ic-top-navigation");
          topNav.addEventListener("topNavResized", function (event) {
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
        </ic-top-navigation>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,argTypes:{contentAligned:{options:["full-width","left","center"],control:{type:"select"}},customMobileBreakpoint:{options:[0,576,768,992,1200],control:{type:"select"}},appIconSlot:{options:["app-icon",""],control:{type:"select"}},searchSlot:{options:["search",""],control:{type:"select"}},buttonsSlot:{options:["buttons",""],control:{type:"select"}}},name:"Playground",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<ic-top-navigation
        app-title=${args.appTitle}
        content-aligned=${args.contentAligned}
        custom-mobile-breakpoint=${args.customMobileBreakpoint}
        href=${args.href}
        inline=${args.inline}
        short-app-title=${args.shortAppTitle}
        status=${args.status}
        version=${args.version}
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
            text-label="1"
            slot="badge"
            position="near"
            variant="light"
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
            position="near"
            variant="light"
            type="dot"
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
          <ic-navigation-item
            label="Another Three"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Four"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Five"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item label="Another Six" href="/"></ic-navigation-item>
          <ic-navigation-item
            label="Another Seven"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Eight"
            href="/"
          ></ic-navigation-item>
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
      </ic-top-navigation>`})})]})}const appIconAndTitle=args=>lit_html.qy`<ic-top-navigation app-title="Application Name">
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
      </ic-top-navigation>`;appIconAndTitle.storyName="App icon and title",appIconAndTitle.parameters={storySource:{source:'args => html`<ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>`'},layout:"fullscreen",loki:{skip:!0}};const slottedTitleLink=args=>lit_html.qy`<ic-top-navigation>
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
      </ic-top-navigation>`;slottedTitleLink.storyName="Slotted title link",slottedTitleLink.parameters={storySource:{source:'args => html`<ic-top-navigation>\n        <a slot="app-title" href="/">Application Name</a>\n        <a slot="short-app-title" href="/">App name</a>\n        <a slot="app-icon" href="/">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="inherit"\n            viewBox="0 0 24 24"\n            width="inherit"\n            fill="inherit"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n        </a>\n      </ic-top-navigation>`'},layout:"fullscreen",loki:{skip:!0}};const statusAndVersion=args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`;statusAndVersion.storyName="Status and version",statusAndVersion.parameters={storySource:{source:'args => html`<ic-top-navigation\n        app-title="Application Name"\n        status="alpha"\n        version="v0.0.7"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>`'},layout:"fullscreen",loki:{skip:!0}};const withSearch=args=>lit_html.qy`<ic-top-navigation
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
        </script>`;withSearch.storyName="With search",withSearch.parameters={storySource:{source:'args => html`<ic-top-navigation\n          app-title="Application Name"\n          status="alpha"\n          version="v0.0.7"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-search-bar\n            slot="search"\n            placeholder="Search"\n            label="Search"\n          ></ic-search-bar>\n        </ic-top-navigation>\n        <script>\n          const search1 = document.querySelector("ic-search-bar");\n          search1.options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'},layout:"fullscreen",loki:{skip:!0}};const withIcons=args=>lit_html.qy`<ic-top-navigation
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
            text-label="1"
            slot="badge"
            position="near"
            variant="light"
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
            position="near"
            variant="light"
            type="dot"
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
      </ic-top-navigation> `;withIcons.storyName="With icons",withIcons.parameters={storySource:{source:'args => html`<ic-top-navigation\n        app-title="Application Name"\n        status="alpha"\n        version="v0.0.7"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-search-bar\n          slot="search"\n          placeholder="Search"\n          label="Search"\n        ></ic-search-bar>\n        <ic-navigation-button\n          label="Button One"\n          slot="buttons"\n          href="https://www.google.com"\n          target="_blank"\n          title="Google 1"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-badge\n            text-label="1"\n            slot="badge"\n            position="near"\n            variant="light"\n          ></ic-badge>\n        </ic-navigation-button>\n        <ic-navigation-button\n          label="Button Two"\n          slot="buttons"\n          href="https://www.google.com"\n          target="_blank"\n          title="Google 2"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"\n            />\n          </svg>\n          <ic-badge\n            slot="badge"\n            position="near"\n            variant="light"\n            type="dot"\n          ></ic-badge>\n        </ic-navigation-button>\n        <ic-navigation-button\n          label="Button Three"\n          slot="buttons"\n          onclick="alert(\'test\')"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"\n            />\n          </svg>\n        </ic-navigation-button>\n      </ic-top-navigation> `'},layout:"fullscreen",loki:{skip:!0}};const longAppTitle=args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`;longAppTitle.storyName="Long app title",longAppTitle.parameters={storySource:{source:'args => html`<ic-top-navigation\n        app-title="Application with a long name"\n        status="alpha-beta-gamma-delta-epsilon"\n        version="v0.0.7-current-release-name-that-is-long"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-search-bar\n          slot="search"\n          placeholder="Search"\n          label="Search"\n        ></ic-search-bar>\n        <ic-navigation-button\n          label="Button One"\n          slot="buttons"\n          onclick="alert(\'test\')"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n        </ic-navigation-button>\n      </ic-top-navigation>`'},layout:"fullscreen",loki:{skip:!0}};const withNavigation=args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`;withNavigation.storyName="With navigation",withNavigation.parameters={storySource:{source:'args => html`<ic-top-navigation\n        app-title="Application Name"\n        status="alpha"\n        version="v0.0.7"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-search-bar\n          slot="search"\n          placeholder="Search"\n          label="Search"\n        ></ic-search-bar>\n        <ic-navigation-button\n          label="Button One"\n          slot="buttons"\n          onclick="alert(\'test\')"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n        </ic-navigation-button>\n        <ic-navigation-item\n          slot="navigation"\n          label="One"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Two thousand five hundred and sixty three"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Three"\n          href="/"\n          target="_blank"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Four"\n          href="/"\n          selected="true"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Five"\n          href="/"\n        ></ic-navigation-item>\n      </ic-top-navigation>`'},layout:"fullscreen",loki:{skip:!0}};const usingUnnamedSlots=args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`;usingUnnamedSlots.storyName="Using unnamed slots",usingUnnamedSlots.parameters={storySource:{source:'args => html`<ic-top-navigation\n        app-title="Application Name"\n        status="alpha"\n        version="v0.0.7"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-navigation-item slot="navigation">\n          <a href="/">One</a>\n        </ic-navigation-item>\n        <ic-navigation-item slot="navigation">\n          <a href="/">Two</a>\n        </ic-navigation-item>\n        <ic-navigation-item slot="navigation">\n          <a href="/">Three</a>\n        </ic-navigation-item>\n      </ic-top-navigation>`'},layout:"fullscreen",loki:{skip:!0}};const withGroupedNavigation=args=>lit_html.qy`<ic-top-navigation
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
        <ic-navigation-group slot="navigation" label="Navigation group">
          <ic-navigation-item label="One" href="/"></ic-navigation-item>
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
          <ic-navigation-item label="Another Two" href="/"></ic-navigation-item>
          <ic-navigation-item
            label="Another Three"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Four"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Five"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item label="Another Six" href="/"></ic-navigation-item>
          <ic-navigation-item
            label="Another Seven"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Eight"
            href="/"
          ></ic-navigation-item>
        </ic-navigation-group>
      </ic-top-navigation>`;withGroupedNavigation.storyName="With grouped navigation",withGroupedNavigation.parameters={storySource:{source:'args => html`<ic-top-navigation\n        app-title="Application Name"\n        status="alpha"\n        version="v0.0.7"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-search-bar\n          slot="search"\n          placeholder="Search"\n          label="Search"\n        ></ic-search-bar>\n        <ic-navigation-button\n          label="Button One"\n          slot="buttons"\n          onclick="alert(\'test\')"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n        </ic-navigation-button>\n        <ic-navigation-group slot="navigation" label="Navigation group">\n          <ic-navigation-item label="One" href="/"></ic-navigation-item>\n          <ic-navigation-item label="Two" href="/"></ic-navigation-item>\n          <ic-navigation-item label="Three" href="/"></ic-navigation-item>\n          <ic-navigation-item label="Four" href="/"></ic-navigation-item>\n          <ic-navigation-item\n            label="Five"\n            href="/"\n            selected="true"\n          ></ic-navigation-item>\n          <ic-navigation-item label="Five" href="/"></ic-navigation-item>\n          <ic-navigation-item\n            label="Six"\n            href="/"\n            target="_blank"\n          ></ic-navigation-item>\n          <ic-navigation-item label="Seven" href="/"></ic-navigation-item>\n          <ic-navigation-item label="Eight" href="/"></ic-navigation-item>\n        </ic-navigation-group>\n        <ic-navigation-group slot="navigation" label="Second navigation group">\n          <ic-navigation-item label="Another One" href="/"></ic-navigation-item>\n          <ic-navigation-item label="Another Two" href="/"></ic-navigation-item>\n          <ic-navigation-item\n            label="Another Three"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            label="Another Four"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            label="Another Five"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item label="Another Six" href="/"></ic-navigation-item>\n          <ic-navigation-item\n            label="Another Seven"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            label="Another Eight"\n            href="/"\n          ></ic-navigation-item>\n        </ic-navigation-group>\n      </ic-top-navigation>`'},layout:"fullscreen",loki:{skip:!0}};const contentCenterAligned=args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`;contentCenterAligned.storyName="Content center aligned",contentCenterAligned.parameters={storySource:{source:'args => html`<ic-top-navigation\n        app-title="Application Name"\n        status="alpha"\n        version="v0.0.7"\n        content-aligned="center"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-search-bar\n          slot="search"\n          placeholder="Search"\n          label="Search"\n        ></ic-search-bar>\n        <ic-navigation-button\n          label="Button One"\n          slot="buttons"\n          onclick="alert(\'test\')"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n        </ic-navigation-button>\n        <ic-navigation-item\n          slot="navigation"\n          label="One"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Two"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Three"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Four"\n          href="/"\n          selected="true"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Five"\n          href="/"\n        ></ic-navigation-item>\n      </ic-top-navigation>`'},layout:"fullscreen",loki:{skip:!0}};const contentLeftAligned=args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`;contentLeftAligned.storyName="Content left aligned",contentLeftAligned.parameters={storySource:{source:'args => html`<ic-top-navigation\n        app-title="Application Name"\n        status="alpha"\n        version="v0.0.7"\n        content-aligned="left"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-search-bar\n          slot="search"\n          placeholder="Search"\n          label="Search"\n        ></ic-search-bar>\n        <ic-navigation-button\n          label="Button One"\n          slot="buttons"\n          onclick="alert(\'test\')"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n        </ic-navigation-button>\n        <ic-navigation-item\n          slot="navigation"\n          label="One"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Two"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Three"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Four"\n          href="/"\n          selected="true"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Five"\n          href="/"\n        ></ic-navigation-item>\n      </ic-top-navigation>`'},layout:"fullscreen",loki:{skip:!0}};const theming=args=>lit_html.qy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
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
          onClick="document.querySelector('ic-theme').color='rgb(27, 60, 121)'"
        >
          Default theme
        </ic-button>
        <ic-button
          variant="primary"
          id="custom-btn"
          onClick="document.querySelector('ic-theme').color='rgb(255, 201, 60)'"
        >
          Sunrise theme
        </ic-button> `;theming.storyName="Theming",theming.parameters={storySource:{source:'args => html`<ic-theme color="rgb(27, 60, 121)"></ic-theme>\n        <ic-top-navigation\n          app-title="Application Name"\n          status="alpha"\n          version="v0.0.7"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-search-bar\n            slot="search"\n            placeholder="Search"\n            label="Search"\n          ></ic-search-bar>\n          <ic-navigation-button\n            label="Button One"\n            slot="buttons"\n            onclick="alert(\'test\')"\n          >\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n              />\n            </svg>\n          </ic-navigation-button>\n          <ic-navigation-item\n            slot="navigation"\n            label="One"\n            href="/"\n            selected="true"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Two"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Three"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Four"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Five"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Six"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Seven"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Eight"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Nine"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Ten"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Eleven"\n            href="/"\n          ></ic-navigation-item>\n        </ic-top-navigation>\n        <br />\n        <ic-button\n          variant="primary"\n          id="default-btn"\n          onClick="document.querySelector(\'ic-theme\').color=\'rgb(27, 60, 121)\'"\n        >\n          Default theme\n        </ic-button>\n        <ic-button\n          variant="primary"\n          id="custom-btn"\n          onClick="document.querySelector(\'ic-theme\').color=\'rgb(255, 201, 60)\'"\n        >\n          Sunrise theme\n        </ic-button> `'},loki:{skip:!0},layout:"fullscreen"};const longSingleWordAppTitle=args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`;longSingleWordAppTitle.storyName="Long single-word app title",longSingleWordAppTitle.parameters={storySource:{source:'args => html`<ic-top-navigation\n        app-title="Applicationwithareallyreallylongsinglewordname"\n        status="alpha"\n        version="v0.0.7"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-search-bar\n          slot="search"\n          placeholder="Search"\n          label="Search"\n        ></ic-search-bar>\n        <ic-navigation-button\n          label="Button One"\n          slot="buttons"\n          onclick="alert(\'test\')"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n        </ic-navigation-button>\n      </ic-top-navigation>`'},layout:"fullscreen",loki:{skip:!0}};const shortTitle=args=>lit_html.qy`<ic-top-navigation
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
      </ic-top-navigation>`;shortTitle.storyName="Short title",shortTitle.parameters={storySource:{source:'args => html`<ic-top-navigation\n        app-title="Application Name"\n        short-app-title="App Name"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>`'},layout:"fullscreen",loki:{skip:!0}};const topNavResizedEvent=args=>lit_html.qy`<script>
          var topNav = document.querySelector("ic-top-navigation");
          topNav.addEventListener("topNavResized", function (event) {
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
        </ic-top-navigation>`;topNavResizedEvent.storyName="Top nav resized event",topNavResizedEvent.parameters={storySource:{source:'args => html`<script>\n          var topNav = document.querySelector("ic-top-navigation");\n          topNav.addEventListener("topNavResized", function (event) {\n            console.log(event.detail.size);\n          });\n        <\/script>\n        <ic-top-navigation app-title="Application Name">\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n        </ic-top-navigation>`'},loki:{skip:!0},layout:"fullscreen"};const playground=args=>lit_html.qy`<ic-top-navigation
        app-title=${args.appTitle}
        content-aligned=${args.contentAligned}
        custom-mobile-breakpoint=${args.customMobileBreakpoint}
        href=${args.href}
        inline=${args.inline}
        short-app-title=${args.shortAppTitle}
        status=${args.status}
        version=${args.version}
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
            text-label="1"
            slot="badge"
            position="near"
            variant="light"
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
            position="near"
            variant="light"
            type="dot"
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
          <ic-navigation-item
            label="Another Three"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Four"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Five"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item label="Another Six" href="/"></ic-navigation-item>
          <ic-navigation-item
            label="Another Seven"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            label="Another Eight"
            href="/"
          ></ic-navigation-item>
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
      </ic-top-navigation>`;playground.storyName="Playground",playground.argTypes={contentAligned:{options:["full-width","left","center"],control:{type:"select"}},customMobileBreakpoint:{options:[0,576,768,992,1200],control:{type:"select"}},appIconSlot:{options:["app-icon",""],control:{type:"select"}},searchSlot:{options:["search",""],control:{type:"select"}},buttonsSlot:{options:["buttons",""],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`<ic-top-navigation\n        app-title=${args.appTitle}\n        content-aligned=${args.contentAligned}\n        custom-mobile-breakpoint=${args.customMobileBreakpoint}\n        href=${args.href}\n        inline=${args.inline}\n        short-app-title=${args.shortAppTitle}\n        status=${args.status}\n        version=${args.version}\n      >\n        <svg\n          slot=${args.appIconSlot}\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-search-bar\n          slot=${args.searchSlot}\n          placeholder="Search"\n          label="Search"\n        ></ic-search-bar>\n        <ic-navigation-button\n          label="Button One"\n          slot=${args.buttonsSlot}\n          href="https://www.google.com"\n          target="_blank"\n          title="Google 1"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-badge\n            text-label="1"\n            slot="badge"\n            position="near"\n            variant="light"\n          ></ic-badge>\n        </ic-navigation-button>\n        <ic-navigation-button\n          label="Button Two"\n          slot=${args.buttonsSlot}\n          href="https://www.google.com"\n          target="_blank"\n          title="Google 2"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"\n            />\n          </svg>\n          <ic-badge\n            slot="badge"\n            position="near"\n            variant="light"\n            type="dot"\n          ></ic-badge>\n        </ic-navigation-button>\n        <ic-navigation-button\n          label="Button Three"\n          slot=${args.buttonsSlot}\n          onclick="alert(\'test\')"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"\n            />\n          </svg>\n        </ic-navigation-button>\n        <ic-navigation-group slot="navigation" label="Navigation group">\n          <ic-navigation-item label="Another One" href="/"></ic-navigation-item>\n          <ic-navigation-item label="Another Two" href="/"></ic-navigation-item>\n          <ic-navigation-item\n            label="Another Three"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            label="Another Four"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            label="Another Five"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item label="Another Six" href="/"></ic-navigation-item>\n          <ic-navigation-item\n            label="Another Seven"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            label="Another Eight"\n            href="/"\n          ></ic-navigation-item>\n        </ic-navigation-group>\n        <ic-navigation-item\n          slot="navigation"\n          label="Two thousand five hundred and sixty three"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Three"\n          href="/"\n          target="_blank"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="navigation"\n          label="Four"\n          href="/"\n          selected="true"\n        ></ic-navigation-item>\n      </ic-top-navigation>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Top navigation",tags:["stories-mdx"],includeStories:["appIconAndTitle","slottedTitleLink","statusAndVersion","withSearch","withIcons","longAppTitle","withNavigation","usingUnnamedSlots","withGroupedNavigation","contentCenterAligned","contentLeftAligned","theming","longSingleWordAppTitle","shortTitle","topNavResizedEvent","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_top_navigation_stories=componentMeta,__namedExportsOrder=["defaultArgs","appIconAndTitle","slottedTitleLink","statusAndVersion","withSearch","withIcons","longAppTitle","withNavigation","usingUnnamedSlots","withGroupedNavigation","contentCenterAligned","contentLeftAligned","theming","longSingleWordAppTitle","shortTitle","topNavResizedEvent","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-top-navigation-ic-top-navigation-stories-mdx.0fdd25fd.iframe.bundle.js.map