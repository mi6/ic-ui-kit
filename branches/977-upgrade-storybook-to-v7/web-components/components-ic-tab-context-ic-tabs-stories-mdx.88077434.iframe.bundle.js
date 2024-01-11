/*! For license information please see components-ic-tab-context-ic-tabs-stories-mdx.88077434.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5613],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-tab-context/ic-tabs.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_tabs_stories,defaultStory:()=>defaultStory,disabled:()=>disabled,inline:()=>inline,lightText:()=>lightText,manualActivation:()=>manualActivation,nestedTabs:()=>nestedTabs,responsive:()=>responsive,responsiveLightText:()=>responsiveLightText,withIcons:()=>withIcons});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-tab-context\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property           | Attribute            | Description                                                                                                                               | Type                      | Default       |\n| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------- |\n| `activationType`   | `activation-type`    | Determines whether tabs have to be manually activated (by pressing \'Enter\' or \'Space\') when they receive focus using keyboard navigation. | `"automatic" \\| "manual"` | `"automatic"` |\n| `appearance`       | `appearance`         | The appearance of the tab context, e.g dark, or light.                                                                                    | `"dark" \\| "light"`       | `"dark"`      |\n| `contextId`        | `context-id`         | The unique context needed if using multiple tabs inside one another i.e. rendering another set of tabs inside a tab panel.                | `string`                  | `"default"`   |\n| `selectedTabIndex` | `selected-tab-index` | The selected tab to be controlled by the user. Must be used alongside the icTabSelect event to manage tab selection.                      | `number`                  | `undefined`   |\n\n\n## Events\n\n| Event         | Description                                                                                                               | Type                                  |\n| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |\n| `icTabSelect` | Emitted when a user selects a tab.                                                                                        | `CustomEvent<IcTabSelectEventDetail>` |\n| `tabSelect`   | <span style="color:red">**[DEPRECATED]**</span> This event should not be used anymore. Use icTabSelect instead.<br/><br/> | `CustomEvent<IcTabSelectEventDetail>` |\n\n\n----------------------------------------------\n\n\n',ic_tab_readme_namespaceObject='# ic-tab\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property   | Attribute  | Description                                | Type      | Default |\n| ---------- | ---------- | ------------------------------------------ | --------- | ------- |\n| `disabled` | `disabled` | If `true`, the disabled state will be set. | `boolean` | `false` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the tab.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot      | Description                                     |\n| --------- | ----------------------------------------------- |\n| `"badge"` | Badge component displayed inline with the tab.  |\n| `"icon"`  | Content will be rendered next to the tab label. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tab --\x3e ic-typography\n  style ic-tab fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_tab_group_readme_namespaceObject='# ic-tab-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute    | Description                                                                                                                               | Type      | Default     |\n| -------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |\n| `contextId`          | `context-id` | <span style="color:red">**[DEPRECATED]**</span> This is no longer required. The context id is passed down from `ic-tab-context`<br/><br/> | `string`  | `"default"` |\n| `inline`             | `inline`     | If `true`, the tabs and tab panels will be positioned separately.                                                                         | `boolean` | `false`     |\n| `label` _(required)_ | `label`      | The label to describe the purpose of the set of tabs to screen reader users.                                                              | `string`  | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-horizontal-scroll](../ic-horizontal-scroll)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tab-group --\x3e ic-horizontal-scroll\n  ic-horizontal-scroll --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-tab-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_tab_panel_readme_namespaceObject='# ic-tab-panel\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property    | Attribute    | Description                                                                                                                               | Type     | Default     |\n| ----------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |\n| `contextId` | `context-id` | <span style="color:red">**[DEPRECATED]**</span> This is no longer required. The context id is passed down from `ic-tab-context`<br/><br/> | `string` | `"default"` |\n\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Tabs",component:"ic-tab-context"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject+ic_tab_group_readme_namespaceObject+ic_tab_readme_namespaceObject+ic_tab_panel_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:lit_html.dy`<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icons",children:"With icons"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With icons",children:lit_html.dy` <ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab
          >One
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg
        ></ic-tab>
        <ic-tab
          >Two
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
              d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"
            /></svg
        ></ic-tab>
        <ic-tab
          >Three
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
        </ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",children:lit_html.dy` <ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab disabled>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inline",children:"Inline"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Inline",children:lit_html.dy` <ic-tab-context>
      <ic-tab-group label="Example tab group" inline>
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"manual-activation",children:"Manual activation"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Manual activation",children:lit_html.dy` <ic-tab-context activation-type="manual">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light-text",children:"Light text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Light text",parameters:{backgrounds:{default:"dark"}},children:lit_html.dy` <ic-tab-context appearance="light">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab
          >Three<svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg
        ></ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"responsive",children:"Responsive"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Responsive",children:lit_html.dy`
      <ic-tab-context>
        <ic-tab-group label="Example tab group">
          <ic-tab>One</ic-tab>
          <ic-tab>Two</ic-tab>
          <ic-tab>Three</ic-tab>
          <ic-tab>Four</ic-tab>
          <ic-tab>Five</ic-tab>
          <ic-tab>Six</ic-tab>
          <ic-tab>Seven</ic-tab>
          <ic-tab>Eight</ic-tab>
          <ic-tab>Nine</ic-tab>
          <ic-tab>Ten</ic-tab>
          <ic-tab>Eleven</ic-tab>
          <ic-tab>Twelve</ic-tab>
        </ic-tab-group>
        <ic-tab-panel>Tab One</ic-tab-panel>
        <ic-tab-panel>Tab Two</ic-tab-panel>
        <ic-tab-panel>Tab Three</ic-tab-panel>
        <ic-tab-panel>Tab Four</ic-tab-panel>
        <ic-tab-panel>Tab Five</ic-tab-panel>
        <ic-tab-panel>Tab Six</ic-tab-panel>
        <ic-tab-panel>Tab Seven</ic-tab-panel>
        <ic-tab-panel>Tab Eight</ic-tab-panel>
        <ic-tab-panel>Tab Nine</ic-tab-panel>
        <ic-tab-panel>Tab Ten</ic-tab-panel>
        <ic-tab-panel>Tab Eleven</ic-tab-panel>
        <ic-tab-panel>Tab Twelve</ic-tab-panel>
      </ic-tab-context>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"responsive-light-text",children:"Responsive (Light text)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Responsive (Light text)",parameters:{backgrounds:{default:"dark"}},children:lit_html.dy`
      <ic-tab-context appearance="light">
        <ic-tab-group label="Example tab group">
          <ic-tab>One</ic-tab>
          <ic-tab>Two</ic-tab>
          <ic-tab>Three</ic-tab>
          <ic-tab>Four</ic-tab>
          <ic-tab>Five</ic-tab>
          <ic-tab>Six</ic-tab>
          <ic-tab>Seven</ic-tab>
          <ic-tab>Eight</ic-tab>
          <ic-tab>Nine</ic-tab>
          <ic-tab>Ten</ic-tab>
          <ic-tab>Eleven</ic-tab>
          <ic-tab>Twelve</ic-tab>
        </ic-tab-group>
        <ic-tab-panel>Tab One</ic-tab-panel>
        <ic-tab-panel>Tab Two</ic-tab-panel>
        <ic-tab-panel>Tab Three</ic-tab-panel>
        <ic-tab-panel>Tab Four</ic-tab-panel>
        <ic-tab-panel>Tab Five</ic-tab-panel>
        <ic-tab-panel>Tab Six</ic-tab-panel>
        <ic-tab-panel>Tab Seven</ic-tab-panel>
        <ic-tab-panel>Tab Eight</ic-tab-panel>
        <ic-tab-panel>Tab Nine</ic-tab-panel>
        <ic-tab-panel>Tab Ten</ic-tab-panel>
        <ic-tab-panel>Tab Eleven</ic-tab-panel>
        <ic-tab-panel>Tab Twelve</ic-tab-panel>
      </ic-tab-context>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"nested-tabs",children:"Nested Tabs"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Nested tabs",children:lit_html.dy`<ic-tab-context id="main">
        <ic-tab-group label="Example tab group">
          <ic-tab>Outer One</ic-tab>
          <ic-tab>Outer Two</ic-tab>
          <ic-tab>Outer Three</ic-tab>
        </ic-tab-group>
        <ic-tab-panel>
          <ic-tab-context context-id="context-nested" id="nested">
            <ic-tab-group label="Example tab group">
              <ic-tab>Nested One</ic-tab>
              <ic-tab>Nested Two</ic-tab>
              <ic-tab>Nested Three</ic-tab>
            </ic-tab-group>
            <ic-tab-panel>Nested Tab One</ic-tab-panel>
            <ic-tab-panel>Nested Tab Two</ic-tab-panel>
            <ic-tab-panel>Nested Tab Three</ic-tab-panel>
          </ic-tab-context>
        </ic-tab-panel>
        <ic-tab-panel>Outer Tab Two</ic-tab-panel>
        <ic-tab-panel>Outer Tab Three</ic-tab-panel>
      </ic-tab-context>
      <script>
        const main = document.querySelector("#main");
        const nested = document.querySelector("#nested");
        main.addEventListener("icTabSelect", () => console.log("main"));
        nested.addEventListener("icTabSelect", () => console.log("nested"));
      </script> `})})]})}const defaultStory=()=>lit_html.dy`<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'html`<ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'}};const withIcons=()=>lit_html.dy` <ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab
          >One
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg
        ></ic-tab>
        <ic-tab
          >Two
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
              d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"
            /></svg
        ></ic-tab>
        <ic-tab
          >Three
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
        </ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`;withIcons.storyName="With icons",withIcons.parameters={storySource:{source:'html` <ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab\n          >One\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg\n        ></ic-tab>\n        <ic-tab\n          >Two\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"\n            /></svg\n        ></ic-tab>\n        <ic-tab\n          >Three\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path\n              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"\n            />\n          </svg>\n        </ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'}};const disabled=()=>lit_html.dy` <ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab disabled>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'html` <ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab disabled>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'}};const inline=()=>lit_html.dy` <ic-tab-context>
      <ic-tab-group label="Example tab group" inline>
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`;inline.storyName="Inline",inline.parameters={storySource:{source:'html` <ic-tab-context>\n      <ic-tab-group label="Example tab group" inline>\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'}};const manualActivation=()=>lit_html.dy` <ic-tab-context activation-type="manual">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`;manualActivation.storyName="Manual activation",manualActivation.parameters={storySource:{source:'html` <ic-tab-context activation-type="manual">\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'}};const lightText=()=>lit_html.dy` <ic-tab-context appearance="light">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab
          >Three<svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg
        ></ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`;lightText.storyName="Light text",lightText.parameters={storySource:{source:'html` <ic-tab-context appearance="light">\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab\n          >Three<svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg\n        ></ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'},backgrounds:{default:"dark"}};const responsive=()=>lit_html.dy`
      <ic-tab-context>
        <ic-tab-group label="Example tab group">
          <ic-tab>One</ic-tab>
          <ic-tab>Two</ic-tab>
          <ic-tab>Three</ic-tab>
          <ic-tab>Four</ic-tab>
          <ic-tab>Five</ic-tab>
          <ic-tab>Six</ic-tab>
          <ic-tab>Seven</ic-tab>
          <ic-tab>Eight</ic-tab>
          <ic-tab>Nine</ic-tab>
          <ic-tab>Ten</ic-tab>
          <ic-tab>Eleven</ic-tab>
          <ic-tab>Twelve</ic-tab>
        </ic-tab-group>
        <ic-tab-panel>Tab One</ic-tab-panel>
        <ic-tab-panel>Tab Two</ic-tab-panel>
        <ic-tab-panel>Tab Three</ic-tab-panel>
        <ic-tab-panel>Tab Four</ic-tab-panel>
        <ic-tab-panel>Tab Five</ic-tab-panel>
        <ic-tab-panel>Tab Six</ic-tab-panel>
        <ic-tab-panel>Tab Seven</ic-tab-panel>
        <ic-tab-panel>Tab Eight</ic-tab-panel>
        <ic-tab-panel>Tab Nine</ic-tab-panel>
        <ic-tab-panel>Tab Ten</ic-tab-panel>
        <ic-tab-panel>Tab Eleven</ic-tab-panel>
        <ic-tab-panel>Tab Twelve</ic-tab-panel>
      </ic-tab-context>
    `;responsive.storyName="Responsive",responsive.parameters={storySource:{source:'html`\n      <ic-tab-context>\n        <ic-tab-group label="Example tab group">\n          <ic-tab>One</ic-tab>\n          <ic-tab>Two</ic-tab>\n          <ic-tab>Three</ic-tab>\n          <ic-tab>Four</ic-tab>\n          <ic-tab>Five</ic-tab>\n          <ic-tab>Six</ic-tab>\n          <ic-tab>Seven</ic-tab>\n          <ic-tab>Eight</ic-tab>\n          <ic-tab>Nine</ic-tab>\n          <ic-tab>Ten</ic-tab>\n          <ic-tab>Eleven</ic-tab>\n          <ic-tab>Twelve</ic-tab>\n        </ic-tab-group>\n        <ic-tab-panel>Tab One</ic-tab-panel>\n        <ic-tab-panel>Tab Two</ic-tab-panel>\n        <ic-tab-panel>Tab Three</ic-tab-panel>\n        <ic-tab-panel>Tab Four</ic-tab-panel>\n        <ic-tab-panel>Tab Five</ic-tab-panel>\n        <ic-tab-panel>Tab Six</ic-tab-panel>\n        <ic-tab-panel>Tab Seven</ic-tab-panel>\n        <ic-tab-panel>Tab Eight</ic-tab-panel>\n        <ic-tab-panel>Tab Nine</ic-tab-panel>\n        <ic-tab-panel>Tab Ten</ic-tab-panel>\n        <ic-tab-panel>Tab Eleven</ic-tab-panel>\n        <ic-tab-panel>Tab Twelve</ic-tab-panel>\n      </ic-tab-context>\n    `'}};const responsiveLightText=()=>lit_html.dy`
      <ic-tab-context appearance="light">
        <ic-tab-group label="Example tab group">
          <ic-tab>One</ic-tab>
          <ic-tab>Two</ic-tab>
          <ic-tab>Three</ic-tab>
          <ic-tab>Four</ic-tab>
          <ic-tab>Five</ic-tab>
          <ic-tab>Six</ic-tab>
          <ic-tab>Seven</ic-tab>
          <ic-tab>Eight</ic-tab>
          <ic-tab>Nine</ic-tab>
          <ic-tab>Ten</ic-tab>
          <ic-tab>Eleven</ic-tab>
          <ic-tab>Twelve</ic-tab>
        </ic-tab-group>
        <ic-tab-panel>Tab One</ic-tab-panel>
        <ic-tab-panel>Tab Two</ic-tab-panel>
        <ic-tab-panel>Tab Three</ic-tab-panel>
        <ic-tab-panel>Tab Four</ic-tab-panel>
        <ic-tab-panel>Tab Five</ic-tab-panel>
        <ic-tab-panel>Tab Six</ic-tab-panel>
        <ic-tab-panel>Tab Seven</ic-tab-panel>
        <ic-tab-panel>Tab Eight</ic-tab-panel>
        <ic-tab-panel>Tab Nine</ic-tab-panel>
        <ic-tab-panel>Tab Ten</ic-tab-panel>
        <ic-tab-panel>Tab Eleven</ic-tab-panel>
        <ic-tab-panel>Tab Twelve</ic-tab-panel>
      </ic-tab-context>
    `;responsiveLightText.storyName="Responsive (Light text)",responsiveLightText.parameters={storySource:{source:'html`\n      <ic-tab-context appearance="light">\n        <ic-tab-group label="Example tab group">\n          <ic-tab>One</ic-tab>\n          <ic-tab>Two</ic-tab>\n          <ic-tab>Three</ic-tab>\n          <ic-tab>Four</ic-tab>\n          <ic-tab>Five</ic-tab>\n          <ic-tab>Six</ic-tab>\n          <ic-tab>Seven</ic-tab>\n          <ic-tab>Eight</ic-tab>\n          <ic-tab>Nine</ic-tab>\n          <ic-tab>Ten</ic-tab>\n          <ic-tab>Eleven</ic-tab>\n          <ic-tab>Twelve</ic-tab>\n        </ic-tab-group>\n        <ic-tab-panel>Tab One</ic-tab-panel>\n        <ic-tab-panel>Tab Two</ic-tab-panel>\n        <ic-tab-panel>Tab Three</ic-tab-panel>\n        <ic-tab-panel>Tab Four</ic-tab-panel>\n        <ic-tab-panel>Tab Five</ic-tab-panel>\n        <ic-tab-panel>Tab Six</ic-tab-panel>\n        <ic-tab-panel>Tab Seven</ic-tab-panel>\n        <ic-tab-panel>Tab Eight</ic-tab-panel>\n        <ic-tab-panel>Tab Nine</ic-tab-panel>\n        <ic-tab-panel>Tab Ten</ic-tab-panel>\n        <ic-tab-panel>Tab Eleven</ic-tab-panel>\n        <ic-tab-panel>Tab Twelve</ic-tab-panel>\n      </ic-tab-context>\n    `'},backgrounds:{default:"dark"}};const nestedTabs=()=>lit_html.dy`<ic-tab-context id="main">
        <ic-tab-group label="Example tab group">
          <ic-tab>Outer One</ic-tab>
          <ic-tab>Outer Two</ic-tab>
          <ic-tab>Outer Three</ic-tab>
        </ic-tab-group>
        <ic-tab-panel>
          <ic-tab-context context-id="context-nested" id="nested">
            <ic-tab-group label="Example tab group">
              <ic-tab>Nested One</ic-tab>
              <ic-tab>Nested Two</ic-tab>
              <ic-tab>Nested Three</ic-tab>
            </ic-tab-group>
            <ic-tab-panel>Nested Tab One</ic-tab-panel>
            <ic-tab-panel>Nested Tab Two</ic-tab-panel>
            <ic-tab-panel>Nested Tab Three</ic-tab-panel>
          </ic-tab-context>
        </ic-tab-panel>
        <ic-tab-panel>Outer Tab Two</ic-tab-panel>
        <ic-tab-panel>Outer Tab Three</ic-tab-panel>
      </ic-tab-context>
      <script>
        const main = document.querySelector("#main");
        const nested = document.querySelector("#nested");
        main.addEventListener("icTabSelect", () => console.log("main"));
        nested.addEventListener("icTabSelect", () => console.log("nested"));
      </script> `;nestedTabs.storyName="Nested tabs",nestedTabs.parameters={storySource:{source:'html`<ic-tab-context id="main">\n        <ic-tab-group label="Example tab group">\n          <ic-tab>Outer One</ic-tab>\n          <ic-tab>Outer Two</ic-tab>\n          <ic-tab>Outer Three</ic-tab>\n        </ic-tab-group>\n        <ic-tab-panel>\n          <ic-tab-context context-id="context-nested" id="nested">\n            <ic-tab-group label="Example tab group">\n              <ic-tab>Nested One</ic-tab>\n              <ic-tab>Nested Two</ic-tab>\n              <ic-tab>Nested Three</ic-tab>\n            </ic-tab-group>\n            <ic-tab-panel>Nested Tab One</ic-tab-panel>\n            <ic-tab-panel>Nested Tab Two</ic-tab-panel>\n            <ic-tab-panel>Nested Tab Three</ic-tab-panel>\n          </ic-tab-context>\n        </ic-tab-panel>\n        <ic-tab-panel>Outer Tab Two</ic-tab-panel>\n        <ic-tab-panel>Outer Tab Three</ic-tab-panel>\n      </ic-tab-context>\n      <script>\n        const main = document.querySelector("#main");\n        const nested = document.querySelector("#nested");\n        main.addEventListener("icTabSelect", () => console.log("main"));\n        nested.addEventListener("icTabSelect", () => console.log("nested"));\n      <\/script> `'}};const componentMeta={title:"Web Components/Tabs",tags:["stories-mdx"],includeStories:["defaultStory","withIcons","disabled","inline","manualActivation","lightText","responsive","responsiveLightText","nestedTabs"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_tabs_stories=componentMeta,__namedExportsOrder=["defaultStory","withIcons","disabled","inline","manualActivation","lightText","responsive","responsiveLightText","nestedTabs"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-tab-context-ic-tabs-stories-mdx.88077434.iframe.bundle.js.map