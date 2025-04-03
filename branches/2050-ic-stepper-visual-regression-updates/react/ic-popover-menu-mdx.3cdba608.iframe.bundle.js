(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[8751,3481],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/ic-popover-menu.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-popover-menu\n\nThis is a wrapper component to be placed around one or more ic-menu-item components.\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property    | Attribute    | Description                                                                                                                             | Type                                          | Default     |\n| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |\n| `anchor`    | `anchor`     | The ID of the element the popover menu will anchor itself to. This is required unless the popover is a submenu.                         | `string \\| undefined`                         | `undefined` |\n| `open`      | `open`       | If `true`, the popover menu will be displayed.                                                                                          | `boolean \\| undefined`                        | `undefined` |\n| `submenuId` | `submenu-id` | The unique identifier for a popover submenu.                                                                                            | `string \\| undefined`                         | `undefined` |\n| `theme`     | `theme`      | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light" \\| undefined` | `"inherit"` |\n\n\n## Events\n\n| Event             | Description                              | Type                                 |\n| ----------------- | ---------------------------------------- | ------------------------------------ |\n| `icPopoverClosed` | Emitted when the popover menu is closed. | `CustomEvent<HTMLIcMenuItemElement>` |\n\n\n## CSS Custom Properties\n\n| Name                   | Description                         |\n| ---------------------- | ----------------------------------- |\n| `--ic-z-index-popover` | z-index of popover menu.            |\n| `--max-height`         | Maximum height of the popover menu. |\n| `--popover-width`      | Default width of the popover menu.  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-menu-item](../ic-menu-item)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-popover-menu --\x3e ic-menu-item\n  ic-popover-menu --\x3e ic-typography\n  ic-menu-item --\x3e ic-typography\n  ic-menu-item --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-popover-menu fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_menu_item_readme_namespaceObject='# ic-menu-item\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                | Attribute                 | Description                                                                                                                                  | Type                                                                                                                                                                                                  | Default     |\n| ----------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `checked`               | `checked`                 | If `true`, the menu item will be in a checked state. This is only applicable when variant is set to `toggle`.                                | `boolean \\| undefined`                                                                                                                                                                                | `false`     |\n| `description`           | `description`             | The description displayed in the menu item, below the label.                                                                                 | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `disabled`              | `disabled`                | If `true`, the menu item will be in disabled state.                                                                                          | `boolean \\| undefined`                                                                                                                                                                                | `false`     |\n| `href`                  | `href`                    | The URL that the link points to. This will render the menu item as an "a" tag.                                                               | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `hreflang`              | `hreflang`                | The human language of the linked URL.                                                                                                        | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `keyboardShortcutLabel` | `keyboard-shortcut-label` | The label describing the keyboard shortcut for a menu item\'s action.                                                                         | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `label` _(required)_    | `label`                   | The label to display in the menu item.                                                                                                       | `string`                                                                                                                                                                                              | `undefined` |\n| `referrerpolicy`        | `referrerpolicy`          | How much of the referrer to send when following the link.                                                                                    | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url" \\| undefined` | `undefined` |\n| `rel`                   | `rel`                     | The relationship of the linked URL as space-separated link types.                                                                            | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `submenuTriggerFor`     | `submenu-trigger-for`     | This references the popover menu instance that the menu item is a trigger for. If this prop is set, then the variant will always be default. | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `target`                | `target`                  | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                          | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `variant`               | `variant`                 | The variant of the menu item.                                                                                                                | `"default" \\| "destructive" \\| "toggle" \\| undefined`                                                                                                                                                 | `"default"` |\n\n\n## Events\n\n| Event             | Description                                                                 | Type                                 |\n| ----------------- | --------------------------------------------------------------------------- | ------------------------------------ |\n| `icToggleChecked` | Emitted when the user clicks a menu item that is set to the toggle variant. | `CustomEvent<{ checked: boolean; }>` |\n\n\n## Slots\n\n| Slot     | Description                                                |\n| -------- | ---------------------------------------------------------- |\n| `"icon"` | Content will be placed to the left of the menu item label. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-popover-menu](../ic-popover-menu)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-menu-item --\x3e ic-typography\n  ic-menu-item --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-popover-menu --\x3e ic-menu-item\n  style ic-menu-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_menu_group_readme_namespaceObject="# ic-menu-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property | Attribute | Description                                          | Type                  | Default     |\n| -------- | --------- | ---------------------------------------------------- | --------------------- | ----------- |\n| `label`  | `label`   | The label to display as the title of the menu group. | `string \\| undefined` | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-menu-group --\x3e ic-typography\n  style ic-menu-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n";var ic_popover_menu_stories=__webpack_require__("./src/stories/ic-popover-menu.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_popover_menu_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject+ic_menu_item_readme_namespaceObject+ic_menu_group_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/ic-popover-menu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LeftPlacement:()=>LeftPlacement,Playground:()=>Playground,TopPlacement:()=>TopPlacement,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Popover menu",component:_components__WEBPACK_IMPORTED_MODULE_1__.Jo};var Default={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{id:"button-1",onClick:function buttonClick(){document.querySelector("ic-popover-menu").open=!document.querySelector("ic-popover-menu").open}},"Show/Hide popover"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Jo,{anchor:"button-1","aria-label":"popover",onIcPopoverClosed:function onIcPopoverClosed(e){return console.log(e.detail)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Copy code",disabled:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.XH,{label:"View"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Zoom in",keyboardShortcut:"Cmd+"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Actions",submenuTriggerFor:"abc"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Jo,{submenuId:"abc"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Edit"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Find",submenuTriggerFor:"abc123"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Delete",variant:"destructive"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Jo,{submenuId:"abc123"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Search the web",description:"This will search the web to find the thing you are looking for."}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Find..."}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Find icons"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Show found results",variant:"toggle"})))},name:"Default"},LeftPlacement={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginLeft:"1000px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{id:"button-1",onClick:function buttonClick(){document.querySelector("ic-popover-menu").open=!document.querySelector("ic-popover-menu").open}},"Show/Hide popover"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Jo,{anchor:"button-1","aria-label":"popover"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Copy code",disabled:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.XH,{label:"View"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Zoom in",keyboardShortcut:"Cmd+"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Actions",submenuTriggerFor:"abc"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Jo,{submenuId:"abc"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Edit"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Find",submenuTriggerFor:"abc123"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Delete",variant:"destructive"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Jo,{submenuId:"abc123"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Search the web",description:"This will search the web to find the thing you are looking for."}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Find..."}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Find icons"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Show found results",variant:"toggle"}))))},name:"Left placement"},TopPlacement={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginTop:"540px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{id:"button-1",onClick:function buttonClick(){document.querySelector("ic-popover-menu").open=!document.querySelector("ic-popover-menu").open}},"Show/Hide popover"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Jo,{anchor:"button-1","aria-label":"popover"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Copy code",disabled:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.XH,{label:"View"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Zoom in",keyboardShortcut:"Cmd+"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Actions",submenuTriggerFor:"abc"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Jo,{submenuId:"abc"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Edit"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Find",submenuTriggerFor:"abc123"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Delete",variant:"destructive"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Jo,{submenuId:"abc123"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Search the web",description:"This will search the web to find the thing you are looking for."}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Find..."}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Find icons"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Show found results",variant:"toggle"}))))},name:"Top placement"},Playground={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Jo,{ariaLabel:"popover",open:args.open,theme:args.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.XH,{label:args.groupLabel},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{description:args.description,disabled:args.disabled,href:args.href,keyboardShortcutLabel:args.keyboardShortcutLabel,label:args.label,variant:args.variant},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:args.iconSlot,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Zoom out",keyboardShortcut:"Cmd-"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Actions",submenuTriggerFor:"abc"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Jo,{submenuId:"abc",theme:args.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Edit"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Find"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Ns,{label:"Delete",variant:"destructive"})))},args:{open:!0,groupLabel:"View",description:"",disabled:!1,href:"/",keyboardShortcutLabel:"Cmd + C",label:"Copy code",variant:"default",iconSlot:!0,theme:"inherit"},argTypes:{variant:{options:["default","toggle","destructive"],control:{type:"radio"}},iconSlot:{mapping:{true:"icon",false:""}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};const __namedExportsOrder=["Default","LeftPlacement","TopPlacement","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    function buttonClick() {\n      document.querySelector("ic-popover-menu").open = !document.querySelector("ic-popover-menu").open;\n    }\n    return <>\n        <IcButton id="button-1" onClick={buttonClick}>\n          Show/Hide popover\n        </IcButton>\n        <IcPopoverMenu anchor="button-1" aria-label="popover" onIcPopoverClosed={e => console.log(e.detail)}>\n          <IcMenuItem label="Copy code" disabled />\n          <IcMenuGroup label="View">\n            <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />\n            <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />\n          </IcMenuGroup>\n          <IcMenuItem label="Actions" submenuTriggerFor="abc" />\n        </IcPopoverMenu>\n        <IcPopoverMenu submenuId="abc">\n          <IcMenuItem label="Edit" />\n          <IcMenuItem label="Find" submenuTriggerFor="abc123" />\n          <IcMenuItem label="Delete" variant="destructive" />\n        </IcPopoverMenu>\n        <IcPopoverMenu submenuId="abc123">\n          <IcMenuItem label="Search the web" description="This will search the web to find the thing you are looking for." />\n          <IcMenuItem label="Find..." />\n          <IcMenuItem label="Find icons">\n            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />\n            </svg>\n          </IcMenuItem>\n          <IcMenuItem label="Show found results" variant="toggle" />\n        </IcPopoverMenu>\n      </>;\n  },\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},LeftPlacement.parameters={...LeftPlacement.parameters,docs:{...LeftPlacement.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    function buttonClick() {\n      document.querySelector("ic-popover-menu").open = !document.querySelector("ic-popover-menu").open;\n    }\n    return <>\n        <div style={{\n        marginLeft: "1000px"\n      }}>\n          <IcButton id="button-1" onClick={buttonClick}>\n            Show/Hide popover\n          </IcButton>\n          <IcPopoverMenu anchor="button-1" aria-label="popover">\n            <IcMenuItem label="Copy code" disabled />\n            <IcMenuGroup label="View">\n              <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />\n              <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />\n            </IcMenuGroup>\n            <IcMenuItem label="Actions" submenuTriggerFor="abc" />\n          </IcPopoverMenu>\n          <IcPopoverMenu submenuId="abc">\n            <IcMenuItem label="Edit" />\n            <IcMenuItem label="Find" submenuTriggerFor="abc123" />\n            <IcMenuItem label="Delete" variant="destructive" />\n          </IcPopoverMenu>\n          <IcPopoverMenu submenuId="abc123">\n            <IcMenuItem label="Search the web" description="This will search the web to find the thing you are looking for." />\n            <IcMenuItem label="Find..." />\n            <IcMenuItem label="Find icons">\n              <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />\n              </svg>\n            </IcMenuItem>\n            <IcMenuItem label="Show found results" variant="toggle" />\n          </IcPopoverMenu>\n        </div>\n      </>;\n  },\n  name: "Left placement"\n}',...LeftPlacement.parameters?.docs?.source}}},TopPlacement.parameters={...TopPlacement.parameters,docs:{...TopPlacement.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    function buttonClick() {\n      document.querySelector("ic-popover-menu").open = !document.querySelector("ic-popover-menu").open;\n    }\n    return <>\n        <div style={{\n        marginTop: "540px"\n      }}>\n          <IcButton id="button-1" onClick={buttonClick}>\n            Show/Hide popover\n          </IcButton>\n          <IcPopoverMenu anchor="button-1" aria-label="popover">\n            <IcMenuItem label="Copy code" disabled />\n            <IcMenuGroup label="View">\n              <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />\n              <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />\n            </IcMenuGroup>\n            <IcMenuItem label="Actions" submenuTriggerFor="abc" />\n          </IcPopoverMenu>\n          <IcPopoverMenu submenuId="abc">\n            <IcMenuItem label="Edit" />\n            <IcMenuItem label="Find" submenuTriggerFor="abc123" />\n            <IcMenuItem label="Delete" variant="destructive" />\n          </IcPopoverMenu>\n          <IcPopoverMenu submenuId="abc123">\n            <IcMenuItem label="Search the web" description="This will search the web to find the thing you are looking for." />\n            <IcMenuItem label="Find..." />\n            <IcMenuItem label="Find icons">\n              <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />\n              </svg>\n            </IcMenuItem>\n            <IcMenuItem label="Show found results" variant="toggle" />\n          </IcPopoverMenu>\n        </div>\n      </>;\n  },\n  name: "Top placement"\n}',...TopPlacement.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <div>\n      <IcPopoverMenu ariaLabel="popover" open={args.open} theme={args.theme}>\n        <IcMenuGroup label={args.groupLabel}>\n          <IcMenuItem description={args.description} disabled={args.disabled} href={args.href} keyboardShortcutLabel={args.keyboardShortcutLabel} label={args.label} variant={args.variant}>\n            <svg slot={args.iconSlot} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />\n            </svg>\n          </IcMenuItem>\n          <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />\n        </IcMenuGroup>\n        <IcMenuItem label="Actions" submenuTriggerFor="abc" />\n      </IcPopoverMenu>\n      <IcPopoverMenu submenuId="abc" theme={args.theme}>\n        <IcMenuItem label="Edit" />\n        <IcMenuItem label="Find" />\n        <IcMenuItem label="Delete" variant="destructive" />\n      </IcPopoverMenu>\n    </div>,\n  args: defaultArgs,\n  argTypes: {\n    variant: {\n      options: ["default", "toggle", "destructive"],\n      control: {\n        type: "radio"\n      }\n    },\n    iconSlot: {\n      mapping: {\n        true: "icon",\n        false: ""\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);