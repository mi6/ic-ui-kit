(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[1775,9833],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/ic-breadcrumb-group.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-breadcrumb-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute              | Description                                                                                                                             | Type                                          | Default     |\n| -------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |\n| `backBreadcrumbOnly` | `back-breadcrumb-only` | If `true`, display only a single breadcrumb for the parent page with a back icon.                                                       | `boolean \\| undefined`                        | `false`     |\n| `collapsed`          | `collapsed`            | If `true`, all breadcrumbs between the first and last breadcrumb will be collapsed.                                                     | `boolean \\| undefined`                        | `false`     |\n| `monochrome`         | `monochrome`           | If `true`, the breadcrumb group will display as black in the light theme, and white in the dark theme.                                  | `boolean \\| undefined`                        | `false`     |\n| `theme`              | `theme`                | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light" \\| undefined` | `"inherit"` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-breadcrumb](../ic-breadcrumb)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-breadcrumb-group --\x3e ic-breadcrumb\n  ic-breadcrumb --\x3e ic-link\n  style ic-breadcrumb-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_breadcrumb_readme_namespaceObject='# ic-breadcrumb\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute    | Description                                            | Type                   | Default     |\n| ------------------------ | ------------ | ------------------------------------------------------ | ---------------------- | ----------- |\n| `current`                | `current`    | If `true`, aria-current will be set on the breadcrumb. | `boolean \\| undefined` | `false`     |\n| `href`                   | `href`       | The URL that the breadcrumb link points to.            | `string \\| undefined`  | `undefined` |\n| `pageTitle` _(required)_ | `page-title` | The title of the breadcrumb.                           | `string`               | `undefined` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the breadcrumb.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot     | Description                                                        |\n| -------- | ------------------------------------------------------------------ |\n| `"icon"` | Content will be rendered to the left of the breadcrumb page title. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-breadcrumb-group](../ic-breadcrumb-group)\n\n### Depends on\n\n- [ic-link](../ic-link)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-breadcrumb --\x3e ic-link\n  ic-breadcrumb-group --\x3e ic-breadcrumb\n  style ic-breadcrumb fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_breadcrumb_group_stories=__webpack_require__("./src/stories/ic-breadcrumb-group.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_breadcrumb_group_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject+ic_breadcrumb_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/ic-breadcrumb-group.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Back:()=>Back,Collapsed:()=>Collapsed,Default:()=>Default,Icon:()=>Icon,Playground:()=>Playground,ReactRouter:()=>ReactRouter,SlottedLinks:()=>SlottedLinks,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),HomePage=function HomePage(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.vU,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h1"},"Hi there!"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,null,"This example is demonstrating the breadcrumb and breadcrumb group components with React Router"))},DailyTippers=function DailyTippers(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.vU,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h1"},"Daily tippers"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,null,"Lorem ipsum doloe sit amet, consectetur adipiscing"))},About=function About(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.vU,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h1"},"About"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,null,"Lorem ipsum doloe sit amet, consectetur adipiscing"))},Breadcrumbs=function Breadcrumbs(){var location=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.zy)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.NX,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"Home",current:"/"===location.pathname},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.D9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.k2,{to:"/",slot:"router-item"},"Home"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"Daily Tippers",current:"/daily-tippers"===location.pathname},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.D9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.k2,{to:"/daily-tippers",slot:"router-item"},"Daily Tippers"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"About",current:"/about"===location.pathname},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.D9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.k2,{to:"/about",slot:"router-item"},"About"))))};const __WEBPACK_DEFAULT_EXPORT__={title:"Breadcrumb",component:_components__WEBPACK_IMPORTED_MODULE_1__.NX};var Default={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.NX,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"foo",href:"/foo"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"bar",href:"/bar"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"baz",href:"/baz",current:!0})))},name:"Default"},SlottedLinks={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.NX,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.D9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{slot:"router-item",href:"/foo"},"Foo"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.D9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{slot:"router-item",href:"/bar"},"Bar"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{current:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.D9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{slot:"router-item",href:"/baz"},"Baz")))))},name:"Slotted links"},Back={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.NX,{backBreadcrumbOnly:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"foo",href:"/foo"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"bar",href:"/bar"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"baz",href:"/baz",current:!0})))},name:"Back"},Icon={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.NX,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"foo",href:"/foo"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"bar",href:"/bar"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"baz",href:"/baz",current:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})))))},name:"Icon"},Collapsed={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.NX,{collapsed:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"foo",href:"/foo"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"bar",href:"/bar"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"baz",href:"/baz"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"qux",href:"/qux"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"quxx",href:"/quxx",current:!0})))},name:"Collapsed"},ReactRouter={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Breadcrumbs,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BV,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.qh,{path:"/",element:react__WEBPACK_IMPORTED_MODULE_0__.createElement(HomePage,null)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.qh,{path:"/daily-tippers",element:react__WEBPACK_IMPORTED_MODULE_0__.createElement(DailyTippers,null)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.qh,{path:"/about",element:react__WEBPACK_IMPORTED_MODULE_0__.createElement(About,null)})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"16px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,null,"Click the links to switch pages and update breadcrumb states:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.D9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.N_,{slot:"router-item",to:"/"},"Home")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.D9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.N_,{slot:"router-item",to:"/daily-tippers"},"Daily Tippers")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.D9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.N_,{slot:"router-item",to:"/about"},"About"))))},name:"React Router",decorators:[function(Story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.fS,{initialEntries:["/"]},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}]},Playground={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.NX,{backBreadcrumbOnly:args.backBreadcrumbOnly,collapsed:args.collapsed,theme:args.theme,monochrome:args.monochrome},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{current:args.current,pageTitle:args.pageTitle,href:args.href},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:args.iconSlot,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"Breadcrumb 2",href:"/breadcrumb-2"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.qM,{pageTitle:"Breadcrumb 3",href:"/breadcrumb-3"}))},args:{backBreadcrumbOnly:!1,collapsed:!1,current:!1,href:"/",pageTitle:"Home",iconSlot:!0,theme:"inherit",monochrome:!1},argTypes:{iconSlot:{mapping:{true:"icon",false:""}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};const __namedExportsOrder=["Default","SlottedLinks","Back","Icon","Collapsed","ReactRouter","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      <IcBreadcrumbGroup>\n        <IcBreadcrumb pageTitle="foo" href="/foo" />\n        <IcBreadcrumb pageTitle="bar" href="/bar" />\n        <IcBreadcrumb pageTitle="baz" href="/baz" current />\n      </IcBreadcrumbGroup>\n    </div>,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},SlottedLinks.parameters={...SlottedLinks.parameters,docs:{...SlottedLinks.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      <IcBreadcrumbGroup>\n        <IcBreadcrumb>\n          <IcLink>\n            <a slot="router-item" href="/foo">\n              Foo\n            </a>\n          </IcLink>\n        </IcBreadcrumb>\n        <IcBreadcrumb>\n          <IcLink>\n            <a slot="router-item" href="/bar">\n              Bar\n            </a>\n          </IcLink>\n        </IcBreadcrumb>\n        <IcBreadcrumb current>\n          <IcLink>\n            <a slot="router-item" href="/baz">\n              Baz\n            </a>\n          </IcLink>\n        </IcBreadcrumb>\n      </IcBreadcrumbGroup>\n    </div>,\n  name: "Slotted links"\n}',...SlottedLinks.parameters?.docs?.source}}},Back.parameters={...Back.parameters,docs:{...Back.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      <IcBreadcrumbGroup backBreadcrumbOnly>\n        <IcBreadcrumb pageTitle="foo" href="/foo" />\n        <IcBreadcrumb pageTitle="bar" href="/bar" />\n        <IcBreadcrumb pageTitle="baz" href="/baz" current />\n      </IcBreadcrumbGroup>\n    </div>,\n  name: "Back"\n}',...Back.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      <IcBreadcrumbGroup>\n        <IcBreadcrumb pageTitle="foo" href="/foo">\n          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />\n          </svg>\n        </IcBreadcrumb>\n        <IcBreadcrumb pageTitle="bar" href="/bar">\n          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />\n          </svg>\n        </IcBreadcrumb>\n        <IcBreadcrumb pageTitle="baz" href="/baz" current>\n          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />\n          </svg>\n        </IcBreadcrumb>\n      </IcBreadcrumbGroup>\n    </div>,\n  name: "Icon"\n}',...Icon.parameters?.docs?.source}}},Collapsed.parameters={...Collapsed.parameters,docs:{...Collapsed.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      <IcBreadcrumbGroup collapsed>\n        <IcBreadcrumb pageTitle="foo" href="/foo" />\n        <IcBreadcrumb pageTitle="bar" href="/bar" />\n        <IcBreadcrumb pageTitle="baz" href="/baz" />\n        <IcBreadcrumb pageTitle="qux" href="/qux" />\n        <IcBreadcrumb pageTitle="quxx" href="/quxx" current />\n      </IcBreadcrumbGroup>\n    </div>,\n  name: "Collapsed"\n}',...Collapsed.parameters?.docs?.source}}},ReactRouter.parameters={...ReactRouter.parameters,docs:{...ReactRouter.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      <Breadcrumbs />\n      <Routes>\n        <Route path="/" element={<HomePage />} />\n        <Route path="/daily-tippers" element={<DailyTippers />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n      <div style={{\n      display: "flex",\n      gap: "10px",\n      marginTop: "16px"\n    }}>\n        <IcTypography>\n          Click the links to switch pages and update breadcrumb states:\n        </IcTypography>\n        <IcLink>\n          <Link slot="router-item" to="/">\n            Home\n          </Link>\n        </IcLink>\n        <IcLink>\n          <Link slot="router-item" to="/daily-tippers">\n            Daily Tippers\n          </Link>\n        </IcLink>\n        <IcLink>\n          <Link slot="router-item" to="/about">\n            About\n          </Link>\n        </IcLink>\n      </div>\n    </div>,\n  name: "React Router",\n  decorators: [Story => <MemoryRouter initialEntries={["/"]}>\n        <Story />\n      </MemoryRouter>]\n}',...ReactRouter.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <IcBreadcrumbGroup backBreadcrumbOnly={args.backBreadcrumbOnly} collapsed={args.collapsed} theme={args.theme} monochrome={args.monochrome}>\n      <IcBreadcrumb current={args.current} pageTitle={args.pageTitle} href={args.href}>\n        <svg slot={args.iconSlot} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor"></path>\n        </svg>\n      </IcBreadcrumb>\n      <IcBreadcrumb pageTitle="Breadcrumb 2" href="/breadcrumb-2" />\n      <IcBreadcrumb pageTitle="Breadcrumb 3" href="/breadcrumb-3" />\n    </IcBreadcrumbGroup>,\n  args: defaultArgs,\n  argTypes: {\n    iconSlot: {\n      mapping: {\n        true: "icon",\n        false: ""\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);