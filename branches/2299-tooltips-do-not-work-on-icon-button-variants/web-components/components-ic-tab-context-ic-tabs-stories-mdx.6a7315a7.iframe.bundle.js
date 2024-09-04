/*! For license information please see components-ic-tab-context-ic-tabs-stories-mdx.6a7315a7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7340],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-tab-context/ic-tabs.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_tabs_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,disabled:()=>disabled,icTabSelectEvent:()=>icTabSelectEvent,inline:()=>inline,lightText:()=>lightText,manualActivation:()=>manualActivation,minAndMaxContent:()=>minAndMaxContent,nestedTabs:()=>nestedTabs,playground:()=>playground,responsive:()=>responsive,responsiveLightText:()=>responsiveLightText,withIcons:()=>withIcons});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-tab-context\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property           | Attribute            | Description                                                                                                                               | Type                      | Default       |\n| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------- |\n| `activationType`   | `activation-type`    | Determines whether tabs have to be manually activated (by pressing \'Enter\' or \'Space\') when they receive focus using keyboard navigation. | `"automatic" \\| "manual"` | `"automatic"` |\n| `appearance`       | `appearance`         | The appearance of the tab context, e.g dark, or light.                                                                                    | `"dark" \\| "light"`       | `"dark"`      |\n| `contextId`        | `context-id`         | The unique context needed if using multiple tabs inside one another i.e. rendering another set of tabs inside a tab panel.                | `string`                  | `"default"`   |\n| `selectedTabIndex` | `selected-tab-index` | The selected tab to be controlled by the user. Must be used alongside the icTabSelect event to manage tab selection.                      | `number`                  | `undefined`   |\n\n\n## Events\n\n| Event         | Description                                                                                                               | Type                                  |\n| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |\n| `icTabSelect` | Emitted when a user selects a tab.                                                                                        | `CustomEvent<IcTabSelectEventDetail>` |\n| `tabSelect`   | <span style="color:red">**[DEPRECATED]**</span> This event should not be used anymore. Use icTabSelect instead.<br/><br/> | `CustomEvent<IcTabSelectEventDetail>` |\n\n\n----------------------------------------------\n\n\n',ic_tab_readme_namespaceObject='# ic-tab\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property   | Attribute  | Description                                | Type      | Default |\n| ---------- | ---------- | ------------------------------------------ | --------- | ------- |\n| `disabled` | `disabled` | If `true`, the disabled state will be set. | `boolean` | `false` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the tab.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot      | Description                                     |\n| --------- | ----------------------------------------------- |\n| `"badge"` | Badge component displayed inline with the tab.  |\n| `"icon"`  | Content will be rendered next to the tab label. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tab --\x3e ic-typography\n  style ic-tab fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_tab_group_readme_namespaceObject='# ic-tab-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute    | Description                                                                                                                               | Type      | Default     |\n| -------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |\n| `contextId`          | `context-id` | <span style="color:red">**[DEPRECATED]**</span> This is no longer required. The context id is passed down from `ic-tab-context`<br/><br/> | `string`  | `"default"` |\n| `inline`             | `inline`     | If `true`, the tabs and tab panels will be positioned separately.                                                                         | `boolean` | `false`     |\n| `label` _(required)_ | `label`      | The label to describe the purpose of the set of tabs to screen reader users.                                                              | `string`  | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-horizontal-scroll](../ic-horizontal-scroll)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tab-group --\x3e ic-horizontal-scroll\n  ic-horizontal-scroll --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-tab-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_tab_panel_readme_namespaceObject='# ic-tab-panel\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property    | Attribute    | Description                                                                                                                               | Type     | Default     |\n| ----------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |\n| `contextId` | `context-id` | <span style="color:red">**[DEPRECATED]**</span> This is no longer required. The context id is passed down from `ic-tab-context`<br/><br/> | `string` | `"default"` |\n\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={activationType:"automatic",appearance:"dark",disabled:!1,inline:!1,groupLabel:"Example tab group"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Tabs",component:"ic-tab-context"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject+ic_tab_group_readme_namespaceObject+ic_tab_readme_namespaceObject+ic_tab_panel_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icons",children:"With icons"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With icons",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-tab-context>
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
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab disabled>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inline",children:"Inline"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Inline",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-tab-context>
      <ic-tab-group label="Example tab group" inline>
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"manual-activation",children:"Manual activation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Manual activation",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-tab-context activation-type="manual">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light-text",children:"Light text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Light text",parameters:{backgrounds:{default:"dark"},loki:{skip:!0}},children:lit_html.qy` <ic-tab-context appearance="light">
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
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"responsive",children:"Responsive"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Responsive",parameters:{loki:{skip:!0}},children:lit_html.qy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"responsive-light-text",children:"Responsive (Light text)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Responsive (Light text)",parameters:{backgrounds:{default:"dark"},loki:{skip:!0}},children:lit_html.qy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"nested-tabs",children:"Nested Tabs"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Nested tabs",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-tab-context id="main">
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
      </script> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"ictabselect-event",children:"icTabSelect event"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"icTabSelect event",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<ic-tab-context>
          <ic-tab-group label="Example tab group">
            <ic-tab>One</ic-tab>
            <ic-tab>Two</ic-tab>
            <ic-tab>Three</ic-tab>
          </ic-tab-group>
          <ic-tab-panel>Tab One</ic-tab-panel>
          <ic-tab-panel>Tab Two</ic-tab-panel>
          <ic-tab-panel>Tab Three</ic-tab-panel>
        </ic-tab-context>
        <script>
          function handleIcTabSelect(ev) {
            console.log(ev.detail, "icTabSelect");
          }
          document
            .querySelector("ic-tab-context")
            .addEventListener("icTabSelect", handleIcTabSelect);
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"min-and-max-content",children:"Min and max content"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Min and max content",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="max-width:500px">
      <ic-tab-context>
        <ic-tab-group label="Example tab group">
          <ic-tab>Extremely long tab label made of plenty of words</ic-tab>
          <ic-tab>A</ic-tab>
          <ic-tab>Antidisestablishmentarianismbutmadeevenlonger</ic-tab>
        </ic-tab-group>
        <ic-tab-panel
          >Testing tab behaviour with lots of words in label</ic-tab-panel
        >
        <ic-tab-panel>Testing minimum label length</ic-tab-panel>
        <ic-tab-panel
          >Testing tab behaviour with one really long word in
          label</ic-tab-panel
        >
      </ic-tab-context>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{activationType:{options:["automatic","manual"],control:{type:"inline-radio"}},appearance:{options:["dark","light"],control:{type:"inline-radio"}}},name:"Playground",children:args=>lit_html.qy`<div
        style="background-color: ${"light"==args.appearance?"black":""};"
      >
        <ic-tab-context
          activation-type=${args.activationType}
          appearance=${args.appearance}
        >
          <ic-tab-group label=${args.groupLabel} inline=${args.inline}>
            <ic-tab disabled=${args.disabled}> One </ic-tab>
            <ic-tab>
              Two
              <ic-badge
                text-label="1"
                slot="badge"
                position="inline"
                accessible-label="1 notification found"
              >
              </ic-badge>
            </ic-tab>
            <ic-tab>
              Three
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
              </svg>
            </ic-tab>
          </ic-tab-group>
          <ic-tab-panel>Tab One</ic-tab-panel>
          <ic-tab-panel>Tab Two</ic-tab-panel>
          <ic-tab-panel>Tab Three</ic-tab-panel>
        </ic-tab-context>
      </div>`})})]})}const defaultStory=()=>lit_html.qy`<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'html`<ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'},loki:{skip:!0}};const withIcons=()=>lit_html.qy` <ic-tab-context>
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
    </ic-tab-context>`;withIcons.storyName="With icons",withIcons.parameters={storySource:{source:'html` <ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab\n          >One\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg\n        ></ic-tab>\n        <ic-tab\n          >Two\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"\n            /></svg\n        ></ic-tab>\n        <ic-tab\n          >Three\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path\n              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"\n            />\n          </svg>\n        </ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'},loki:{skip:!0}};const disabled=()=>lit_html.qy` <ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab disabled>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'html` <ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab disabled>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'},loki:{skip:!0}};const inline=()=>lit_html.qy` <ic-tab-context>
      <ic-tab-group label="Example tab group" inline>
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`;inline.storyName="Inline",inline.parameters={storySource:{source:'html` <ic-tab-context>\n      <ic-tab-group label="Example tab group" inline>\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'},loki:{skip:!0}};const manualActivation=()=>lit_html.qy` <ic-tab-context activation-type="manual">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`;manualActivation.storyName="Manual activation",manualActivation.parameters={storySource:{source:'html` <ic-tab-context activation-type="manual">\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'},loki:{skip:!0}};const lightText=()=>lit_html.qy` <ic-tab-context appearance="light">
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
    </ic-tab-context>`;lightText.storyName="Light text",lightText.parameters={storySource:{source:'html` <ic-tab-context appearance="light">\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab\n          >Three<svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg\n        ></ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`'},backgrounds:{default:"dark"},loki:{skip:!0}};const responsive=()=>lit_html.qy`
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
    `;responsive.storyName="Responsive",responsive.parameters={storySource:{source:'html`\n      <ic-tab-context>\n        <ic-tab-group label="Example tab group">\n          <ic-tab>One</ic-tab>\n          <ic-tab>Two</ic-tab>\n          <ic-tab>Three</ic-tab>\n          <ic-tab>Four</ic-tab>\n          <ic-tab>Five</ic-tab>\n          <ic-tab>Six</ic-tab>\n          <ic-tab>Seven</ic-tab>\n          <ic-tab>Eight</ic-tab>\n          <ic-tab>Nine</ic-tab>\n          <ic-tab>Ten</ic-tab>\n          <ic-tab>Eleven</ic-tab>\n          <ic-tab>Twelve</ic-tab>\n        </ic-tab-group>\n        <ic-tab-panel>Tab One</ic-tab-panel>\n        <ic-tab-panel>Tab Two</ic-tab-panel>\n        <ic-tab-panel>Tab Three</ic-tab-panel>\n        <ic-tab-panel>Tab Four</ic-tab-panel>\n        <ic-tab-panel>Tab Five</ic-tab-panel>\n        <ic-tab-panel>Tab Six</ic-tab-panel>\n        <ic-tab-panel>Tab Seven</ic-tab-panel>\n        <ic-tab-panel>Tab Eight</ic-tab-panel>\n        <ic-tab-panel>Tab Nine</ic-tab-panel>\n        <ic-tab-panel>Tab Ten</ic-tab-panel>\n        <ic-tab-panel>Tab Eleven</ic-tab-panel>\n        <ic-tab-panel>Tab Twelve</ic-tab-panel>\n      </ic-tab-context>\n    `'},loki:{skip:!0}};const responsiveLightText=()=>lit_html.qy`
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
    `;responsiveLightText.storyName="Responsive (Light text)",responsiveLightText.parameters={storySource:{source:'html`\n      <ic-tab-context appearance="light">\n        <ic-tab-group label="Example tab group">\n          <ic-tab>One</ic-tab>\n          <ic-tab>Two</ic-tab>\n          <ic-tab>Three</ic-tab>\n          <ic-tab>Four</ic-tab>\n          <ic-tab>Five</ic-tab>\n          <ic-tab>Six</ic-tab>\n          <ic-tab>Seven</ic-tab>\n          <ic-tab>Eight</ic-tab>\n          <ic-tab>Nine</ic-tab>\n          <ic-tab>Ten</ic-tab>\n          <ic-tab>Eleven</ic-tab>\n          <ic-tab>Twelve</ic-tab>\n        </ic-tab-group>\n        <ic-tab-panel>Tab One</ic-tab-panel>\n        <ic-tab-panel>Tab Two</ic-tab-panel>\n        <ic-tab-panel>Tab Three</ic-tab-panel>\n        <ic-tab-panel>Tab Four</ic-tab-panel>\n        <ic-tab-panel>Tab Five</ic-tab-panel>\n        <ic-tab-panel>Tab Six</ic-tab-panel>\n        <ic-tab-panel>Tab Seven</ic-tab-panel>\n        <ic-tab-panel>Tab Eight</ic-tab-panel>\n        <ic-tab-panel>Tab Nine</ic-tab-panel>\n        <ic-tab-panel>Tab Ten</ic-tab-panel>\n        <ic-tab-panel>Tab Eleven</ic-tab-panel>\n        <ic-tab-panel>Tab Twelve</ic-tab-panel>\n      </ic-tab-context>\n    `'},backgrounds:{default:"dark"},loki:{skip:!0}};const nestedTabs=()=>lit_html.qy`<ic-tab-context id="main">
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
      </script> `;nestedTabs.storyName="Nested tabs",nestedTabs.parameters={storySource:{source:'html`<ic-tab-context id="main">\n        <ic-tab-group label="Example tab group">\n          <ic-tab>Outer One</ic-tab>\n          <ic-tab>Outer Two</ic-tab>\n          <ic-tab>Outer Three</ic-tab>\n        </ic-tab-group>\n        <ic-tab-panel>\n          <ic-tab-context context-id="context-nested" id="nested">\n            <ic-tab-group label="Example tab group">\n              <ic-tab>Nested One</ic-tab>\n              <ic-tab>Nested Two</ic-tab>\n              <ic-tab>Nested Three</ic-tab>\n            </ic-tab-group>\n            <ic-tab-panel>Nested Tab One</ic-tab-panel>\n            <ic-tab-panel>Nested Tab Two</ic-tab-panel>\n            <ic-tab-panel>Nested Tab Three</ic-tab-panel>\n          </ic-tab-context>\n        </ic-tab-panel>\n        <ic-tab-panel>Outer Tab Two</ic-tab-panel>\n        <ic-tab-panel>Outer Tab Three</ic-tab-panel>\n      </ic-tab-context>\n      <script>\n        const main = document.querySelector("#main");\n        const nested = document.querySelector("#nested");\n        main.addEventListener("icTabSelect", () => console.log("main"));\n        nested.addEventListener("icTabSelect", () => console.log("nested"));\n      <\/script> `'},loki:{skip:!0}};const icTabSelectEvent=args=>lit_html.qy`<ic-tab-context>
          <ic-tab-group label="Example tab group">
            <ic-tab>One</ic-tab>
            <ic-tab>Two</ic-tab>
            <ic-tab>Three</ic-tab>
          </ic-tab-group>
          <ic-tab-panel>Tab One</ic-tab-panel>
          <ic-tab-panel>Tab Two</ic-tab-panel>
          <ic-tab-panel>Tab Three</ic-tab-panel>
        </ic-tab-context>
        <script>
          function handleIcTabSelect(ev) {
            console.log(ev.detail, "icTabSelect");
          }
          document
            .querySelector("ic-tab-context")
            .addEventListener("icTabSelect", handleIcTabSelect);
        </script>`;icTabSelectEvent.storyName="icTabSelect event",icTabSelectEvent.parameters={storySource:{source:'args => html`<ic-tab-context>\n          <ic-tab-group label="Example tab group">\n            <ic-tab>One</ic-tab>\n            <ic-tab>Two</ic-tab>\n            <ic-tab>Three</ic-tab>\n          </ic-tab-group>\n          <ic-tab-panel>Tab One</ic-tab-panel>\n          <ic-tab-panel>Tab Two</ic-tab-panel>\n          <ic-tab-panel>Tab Three</ic-tab-panel>\n        </ic-tab-context>\n        <script>\n          function handleIcTabSelect(ev) {\n            console.log(ev.detail, "icTabSelect");\n          }\n          document\n            .querySelector("ic-tab-context")\n            .addEventListener("icTabSelect", handleIcTabSelect);\n        <\/script>`'},loki:{skip:!0}};const minAndMaxContent=()=>lit_html.qy`<div style="max-width:500px">
      <ic-tab-context>
        <ic-tab-group label="Example tab group">
          <ic-tab>Extremely long tab label made of plenty of words</ic-tab>
          <ic-tab>A</ic-tab>
          <ic-tab>Antidisestablishmentarianismbutmadeevenlonger</ic-tab>
        </ic-tab-group>
        <ic-tab-panel
          >Testing tab behaviour with lots of words in label</ic-tab-panel
        >
        <ic-tab-panel>Testing minimum label length</ic-tab-panel>
        <ic-tab-panel
          >Testing tab behaviour with one really long word in
          label</ic-tab-panel
        >
      </ic-tab-context>
    </div>`;minAndMaxContent.storyName="Min and max content",minAndMaxContent.parameters={storySource:{source:'html`<div style="max-width:500px">\n      <ic-tab-context>\n        <ic-tab-group label="Example tab group">\n          <ic-tab>Extremely long tab label made of plenty of words</ic-tab>\n          <ic-tab>A</ic-tab>\n          <ic-tab>Antidisestablishmentarianismbutmadeevenlonger</ic-tab>\n        </ic-tab-group>\n        <ic-tab-panel\n          >Testing tab behaviour with lots of words in label</ic-tab-panel\n        >\n        <ic-tab-panel>Testing minimum label length</ic-tab-panel>\n        <ic-tab-panel\n          >Testing tab behaviour with one really long word in\n          label</ic-tab-panel\n        >\n      </ic-tab-context>\n    </div>`'},loki:{skip:!0}};const playground=args=>lit_html.qy`<div
        style="background-color: ${"light"==args.appearance?"black":""};"
      >
        <ic-tab-context
          activation-type=${args.activationType}
          appearance=${args.appearance}
        >
          <ic-tab-group label=${args.groupLabel} inline=${args.inline}>
            <ic-tab disabled=${args.disabled}> One </ic-tab>
            <ic-tab>
              Two
              <ic-badge
                text-label="1"
                slot="badge"
                position="inline"
                accessible-label="1 notification found"
              >
              </ic-badge>
            </ic-tab>
            <ic-tab>
              Three
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
              </svg>
            </ic-tab>
          </ic-tab-group>
          <ic-tab-panel>Tab One</ic-tab-panel>
          <ic-tab-panel>Tab Two</ic-tab-panel>
          <ic-tab-panel>Tab Three</ic-tab-panel>
        </ic-tab-context>
      </div>`;playground.storyName="Playground",playground.argTypes={activationType:{options:["automatic","manual"],control:{type:"inline-radio"}},appearance:{options:["dark","light"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`<div\n        style="background-color: ${args.appearance == "light" ? "black" : ""};"\n      >\n        <ic-tab-context\n          activation-type=${args.activationType}\n          appearance=${args.appearance}\n        >\n          <ic-tab-group label=${args.groupLabel} inline=${args.inline}>\n            <ic-tab disabled=${args.disabled}> One </ic-tab>\n            <ic-tab>\n              Two\n              <ic-badge\n                text-label="1"\n                slot="badge"\n                position="inline"\n                accessible-label="1 notification found"\n              >\n              </ic-badge>\n            </ic-tab>\n            <ic-tab>\n              Three\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n                fill="#000000"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />\n              </svg>\n            </ic-tab>\n          </ic-tab-group>\n          <ic-tab-panel>Tab One</ic-tab-panel>\n          <ic-tab-panel>Tab Two</ic-tab-panel>\n          <ic-tab-panel>Tab Three</ic-tab-panel>\n        </ic-tab-context>\n      </div>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Tabs",tags:["stories-mdx"],includeStories:["defaultStory","withIcons","disabled","inline","manualActivation","lightText","responsive","responsiveLightText","nestedTabs","icTabSelectEvent","minAndMaxContent","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_tabs_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","withIcons","disabled","inline","manualActivation","lightText","responsive","responsiveLightText","nestedTabs","icTabSelectEvent","minAndMaxContent","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-tab-context-ic-tabs-stories-mdx.6a7315a7.iframe.bundle.js.map