/*! For license information please see components-ic-tab-context-ic-tabs-mdx.87a1e104.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[756,582,6199,6763,2718],{"./src/components/ic-tab-context/ic-tabs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-tab-context\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property           | Attribute            | Description                                                                                                                               | Type                                          | Default       |\n| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------- |\n| `activationType`   | `activation-type`    | Determines whether tabs have to be manually activated (by pressing \'Enter\' or \'Space\') when they receive focus using keyboard navigation. | `"automatic" \\| "manual" \\| undefined`        | `"automatic"` |\n| `contextId`        | `context-id`         | The unique context needed if using multiple tabs inside one another i.e. rendering another set of tabs inside a tab panel.                | `string \\| undefined`                         | `"default"`   |\n| `monochrome`       | `monochrome`         | If `true`, the tabs will display as black in the light theme.                                                                             | `boolean \\| undefined`                        | `false`       |\n| `selectedTabIndex` | `selected-tab-index` | The selected tab to be controlled by the user. Must be used alongside the icTabSelect event to manage tab selection.                      | `number \\| undefined`                         | `undefined`   |\n| `theme`            | `theme`              | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.   | `"dark" \\| "inherit" \\| "light" \\| undefined` | `"inherit"`   |\n\n\n## Events\n\n| Event         | Description                        | Type                                  |\n| ------------- | ---------------------------------- | ------------------------------------- |\n| `icTabSelect` | Emitted when a user selects a tab. | `CustomEvent<IcTabSelectEventDetail>` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the tab context.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n----------------------------------------------\n\n\n',ic_tab_readme_namespaceObject='# ic-tab\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property   | Attribute  | Description                                | Type                   | Default |\n| ---------- | ---------- | ------------------------------------------ | ---------------------- | ------- |\n| `disabled` | `disabled` | If `true`, the disabled state will be set. | `boolean \\| undefined` | `false` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the tab.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot      | Description                                     |\n| --------- | ----------------------------------------------- |\n| `"badge"` | Badge component displayed inline with the tab.  |\n| `"icon"`  | Content will be rendered next to the tab label. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tab --\x3e ic-typography\n  style ic-tab fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_tab_group_readme_namespaceObject="# ic-tab-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute | Description                                                                  | Type                   | Default     |\n| -------------------- | --------- | ---------------------------------------------------------------------------- | ---------------------- | ----------- |\n| `inline`             | `inline`  | If `true`, the tabs and tab panels will be positioned separately.            | `boolean \\| undefined` | `false`     |\n| `label` _(required)_ | `label`   | The label to describe the purpose of the set of tabs to screen reader users. | `string`               | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-horizontal-scroll](../ic-horizontal-scroll)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tab-group --\x3e ic-horizontal-scroll\n  ic-horizontal-scroll --\x3e ic-button\n  ic-button --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-tab-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n",ic_tab_panel_readme_namespaceObject="# ic-tab-panel\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n----------------------------------------------\n\n\n";var ic_tabs_stories=__webpack_require__("./src/components/ic-tab-context/ic-tabs.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_tabs_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject+ic_tab_group_readme_namespaceObject+ic_tab_readme_namespaceObject+ic_tab_panel_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-tab-context/ic-tabs.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,IcTabSelectEvent:()=>IcTabSelectEvent,Inline:()=>Inline,ManualActivation:()=>ManualActivation,MinAndMaxContent:()=>MinAndMaxContent,NestedTabs:()=>NestedTabs,Playground:()=>Playground,Responsive:()=>Responsive,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Tabs",component:"ic-tab-context"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`,name:"Default"},WithIcons={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-tab-context>
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
    </ic-tab-context>`,name:"With icons"},Disabled={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab disabled>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`,name:"Disabled"},Inline={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-tab-context>
      <ic-tab-group label="Example tab group" inline>
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`,name:"Inline"},ManualActivation={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-tab-context activation-type="manual">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`,name:"Manual activation"},Responsive={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Responsive"},NestedTabs={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-tab-context id="main">
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
      </script> `,name:"Nested tabs"},IcTabSelectEvent={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-tab-context>
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
      </script>`,name:"icTabSelect event"},MinAndMaxContent={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="max-width:500px">
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
    </div>`,name:"Min and max content"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div>
      <ic-tab-context
        activation-type=${args.activationType}
        theme=${args.theme}
        monochrome=${args.monochrome}
      >
        <ic-tab-group label=${args.groupLabel} inline=${args.inline}>
          <ic-tab disabled=${args.disabled}>One</ic-tab>
          <ic-tab>
            Two
            <ic-badge
              label="1"
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
          <ic-tab>Four</ic-tab>
        </ic-tab-group>
        <ic-tab-panel>Tab One</ic-tab-panel>
        <ic-tab-panel>Tab Two</ic-tab-panel>
        <ic-tab-panel>Tab Three</ic-tab-panel>
        <ic-tab-panel>Tab Four</ic-tab-panel>
      </ic-tab-context>
    </div>`,args:{activationType:"automatic",disabled:!1,inline:!1,groupLabel:"Example tab group",theme:"inherit",monochrome:!1},argTypes:{activationType:{options:["automatic","manual"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","WithIcons","Disabled","Inline","ManualActivation","Responsive","NestedTabs","IcTabSelectEvent","MinAndMaxContent","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab\n          >One\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg\n        ></ic-tab>\n        <ic-tab\n          >Two\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"\n            /></svg\n        ></ic-tab>\n        <ic-tab\n          >Three\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path\n              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"\n            />\n          </svg>\n        </ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`,\n  name: "With icons"\n}',...WithIcons.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab disabled>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-tab-context>\n      <ic-tab-group label="Example tab group" inline>\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`,\n  name: "Inline"\n}',...Inline.parameters?.docs?.source}}},ManualActivation.parameters={...ManualActivation.parameters,docs:{...ManualActivation.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-tab-context activation-type="manual">\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n    </ic-tab-context>`,\n  name: "Manual activation"\n}',...ManualActivation.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab>One</ic-tab>\n        <ic-tab>Two</ic-tab>\n        <ic-tab>Three</ic-tab>\n        <ic-tab>Four</ic-tab>\n        <ic-tab>Five</ic-tab>\n        <ic-tab>Six</ic-tab>\n        <ic-tab>Seven</ic-tab>\n        <ic-tab>Eight</ic-tab>\n        <ic-tab>Nine</ic-tab>\n        <ic-tab>Ten</ic-tab>\n        <ic-tab>Eleven</ic-tab>\n        <ic-tab>Twelve</ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Tab One</ic-tab-panel>\n      <ic-tab-panel>Tab Two</ic-tab-panel>\n      <ic-tab-panel>Tab Three</ic-tab-panel>\n      <ic-tab-panel>Tab Four</ic-tab-panel>\n      <ic-tab-panel>Tab Five</ic-tab-panel>\n      <ic-tab-panel>Tab Six</ic-tab-panel>\n      <ic-tab-panel>Tab Seven</ic-tab-panel>\n      <ic-tab-panel>Tab Eight</ic-tab-panel>\n      <ic-tab-panel>Tab Nine</ic-tab-panel>\n      <ic-tab-panel>Tab Ten</ic-tab-panel>\n      <ic-tab-panel>Tab Eleven</ic-tab-panel>\n      <ic-tab-panel>Tab Twelve</ic-tab-panel>\n    </ic-tab-context>\n  `,\n  name: "Responsive"\n}',...Responsive.parameters?.docs?.source}}},NestedTabs.parameters={...NestedTabs.parameters,docs:{...NestedTabs.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-tab-context id="main">\n        <ic-tab-group label="Example tab group">\n          <ic-tab>Outer One</ic-tab>\n          <ic-tab>Outer Two</ic-tab>\n          <ic-tab>Outer Three</ic-tab>\n        </ic-tab-group>\n        <ic-tab-panel>\n          <ic-tab-context context-id="context-nested" id="nested">\n            <ic-tab-group label="Example tab group">\n              <ic-tab>Nested One</ic-tab>\n              <ic-tab>Nested Two</ic-tab>\n              <ic-tab>Nested Three</ic-tab>\n            </ic-tab-group>\n            <ic-tab-panel>Nested Tab One</ic-tab-panel>\n            <ic-tab-panel>Nested Tab Two</ic-tab-panel>\n            <ic-tab-panel>Nested Tab Three</ic-tab-panel>\n          </ic-tab-context>\n        </ic-tab-panel>\n        <ic-tab-panel>Outer Tab Two</ic-tab-panel>\n        <ic-tab-panel>Outer Tab Three</ic-tab-panel>\n      </ic-tab-context>\n      <script>\n        const main = document.querySelector("#main");\n        const nested = document.querySelector("#nested");\n        main.addEventListener("icTabSelect", () => console.log("main"));\n        nested.addEventListener("icTabSelect", () => console.log("nested"));\n      <\/script> `,\n  name: "Nested tabs"\n}',...NestedTabs.parameters?.docs?.source}}},IcTabSelectEvent.parameters={...IcTabSelectEvent.parameters,docs:{...IcTabSelectEvent.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-tab-context>\n        <ic-tab-group label="Example tab group">\n          <ic-tab>One</ic-tab>\n          <ic-tab>Two</ic-tab>\n          <ic-tab>Three</ic-tab>\n        </ic-tab-group>\n        <ic-tab-panel>Tab One</ic-tab-panel>\n        <ic-tab-panel>Tab Two</ic-tab-panel>\n        <ic-tab-panel>Tab Three</ic-tab-panel>\n      </ic-tab-context>\n      <script>\n        function handleIcTabSelect(ev) {\n          console.log(ev.detail, "icTabSelect");\n        }\n        document\n          .querySelector("ic-tab-context")\n          .addEventListener("icTabSelect", handleIcTabSelect);\n      <\/script>`,\n  name: "icTabSelect event"\n}',...IcTabSelectEvent.parameters?.docs?.source}}},MinAndMaxContent.parameters={...MinAndMaxContent.parameters,docs:{...MinAndMaxContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="max-width:500px">\n      <ic-tab-context>\n        <ic-tab-group label="Example tab group">\n          <ic-tab>Extremely long tab label made of plenty of words</ic-tab>\n          <ic-tab>A</ic-tab>\n          <ic-tab>Antidisestablishmentarianismbutmadeevenlonger</ic-tab>\n        </ic-tab-group>\n        <ic-tab-panel\n          >Testing tab behaviour with lots of words in label</ic-tab-panel\n        >\n        <ic-tab-panel>Testing minimum label length</ic-tab-panel>\n        <ic-tab-panel\n          >Testing tab behaviour with one really long word in\n          label</ic-tab-panel\n        >\n      </ic-tab-context>\n    </div>`,\n  name: "Min and max content"\n}',...MinAndMaxContent.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div>\n      <ic-tab-context\n        activation-type=${args.activationType}\n        theme=${args.theme}\n        monochrome=${args.monochrome}\n      >\n        <ic-tab-group label=${args.groupLabel} inline=${args.inline}>\n          <ic-tab disabled=${args.disabled}>One</ic-tab>\n          <ic-tab>\n            Two\n            <ic-badge\n              label="1"\n              slot="badge"\n              position="inline"\n              accessible-label="1 notification found"\n            >\n            </ic-badge>\n          </ic-tab>\n          <ic-tab>\n            Three\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />\n            </svg>\n          </ic-tab>\n          <ic-tab>Four</ic-tab>\n        </ic-tab-group>\n        <ic-tab-panel>Tab One</ic-tab-panel>\n        <ic-tab-panel>Tab Two</ic-tab-panel>\n        <ic-tab-panel>Tab Three</ic-tab-panel>\n        <ic-tab-panel>Tab Four</ic-tab-panel>\n      </ic-tab-context>\n    </div>`,\n  args: defaultArgs,\n  argTypes: {\n    activationType: {\n      options: ["automatic", "manual"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-tab-context-ic-tabs-mdx.87a1e104.iframe.bundle.js.map