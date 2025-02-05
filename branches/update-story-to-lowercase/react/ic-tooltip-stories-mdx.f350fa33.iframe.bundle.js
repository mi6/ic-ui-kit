/*! For license information please see ic-tooltip-stories-mdx.f350fa33.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4807],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-tooltip.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,bottomPlacements:()=>bottomPlacements,darkBackground:()=>darkBackground,default:()=>ic_tooltip_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,disabledHover:()=>disabledHover,leftPlacements:()=>leftPlacements,playground:()=>playground,rightPlacements:()=>rightPlacements,topPlacements:()=>topPlacements,truncation:()=>truncation,usingExternalMethod:()=>usingExternalMethod});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-tooltip\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute       | Description                                                                                             | Type                                                                                                                                                                 | Default     |\n| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `disableHover`       | `disable-hover` | If `true`, the tooltip will not be displayed on hover, it will require a click.                         | `boolean`                                                                                                                                                            | `false`     |\n| `label` _(required)_ | `label`         | The text to display on the tooltip.                                                                     | `string`                                                                                                                                                             | `undefined` |\n| `maxLines`           | `max-lines`     | The number of lines to display before truncating the text.                                              | `number`                                                                                                                                                             | `undefined` |\n| `placement`          | `placement`     | The position of the tooltip in relation to the parent element.                                          | `"bottom" \\| "bottom-end" \\| "bottom-start" \\| "left" \\| "left-end" \\| "left-start" \\| "right" \\| "right-end" \\| "right-start" \\| "top" \\| "top-end" \\| "top-start"` | `"bottom"`  |\n| `target`             | `target`        | The ID of the element the tooltip is describing - for when aria-labelledby or aria-describedby is used. | `string`                                                                                                                                                             | `undefined` |\n\n\n## Methods\n\n### `displayTooltip(show: boolean, persistTooltip?: boolean) => Promise<void>`\n\nMethod to programmatically show/hide the tooltip without needing to interact with an anchor element\n\n#### Parameters\n\n| Name             | Type      | Description                                                                                                                          |\n| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |\n| `show`           | `boolean` | Whether to show or hide the tooltip                                                                                                  |\n| `persistTooltip` | `boolean` | Whether the tooltip should stay on the screen when actions are performed that would previously dismiss the tooltip, such as on hover |\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## CSS Custom Properties\n\n| Name                   | Description        |\n| ---------------------- | ------------------ |\n| `--ic-z-index-tooltip` | z-index of tooltip |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-back-to-top](../ic-back-to-top)\n - [ic-button](../ic-button)\n - [ic-card](../ic-card)\n - [ic-chip](../ic-chip)\n - [ic-navigation-item](../ic-navigation-item)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tooltip --\x3e ic-typography\n  ic-back-to-top --\x3e ic-tooltip\n  ic-button --\x3e ic-tooltip\n  ic-card --\x3e ic-tooltip\n  ic-chip --\x3e ic-tooltip\n  ic-navigation-item --\x3e ic-tooltip\n  style ic-tooltip fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={disableHover:!1,maxLines:3,placement:"bottom",label:"This is a description of the button"};function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p",button:"button",div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Tooltip",component:components.sL}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",children:(0,jsx_runtime.jsx)(components.sL,{label:"This is a description of the button",id:"ic-tooltip-test-button-default",target:"test-button-default",children:(0,jsx_runtime.jsx)("button",{"aria-describedby":"ic-tooltip-test-button-default",id:"test-button-default",children:(0,jsx_runtime.jsx)(_components.p,{children:"Default"})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"using-external-method",children:"Using external method"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Using external method",children:()=>{let display=!0;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.button,{onClick:function func(){document.querySelector("ic-tooltip").displayTooltip(display,!0),display=!display},children:"Show tooltip"}),(0,jsx_runtime.jsx)(components.sL,{label:"This is a description of the button",id:"ic-tooltip-test-button-default",target:"test-button-default",children:(0,jsx_runtime.jsx)(_components.button,{"aria-describedby":"ic-tooltip-test-button-default",id:"test-button-default",children:"Default"})})]})}})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-hover",children:"Disabled hover"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled hover",children:(0,jsx_runtime.jsx)(components.sL,{label:"This shows 'Code' has been copied",id:"ic-tooltip-test-button-disable-hover",target:"test-button-disable-hover",disableHover:!0,children:(0,jsx_runtime.jsx)("button",{"aria-describedby":"ic-tooltip-test-button-disable-hover",id:"test-button-disable-hover",onClick:()=>navigator.clipboard.writeText("Code"),children:(0,jsx_runtime.jsx)(_components.p,{children:"Show tooltip"})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"top-placements",children:"Top placements"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Top placements",children:args=>(0,jsx_runtime.jsxs)(_components.div,{style:{margin:"40px"},children:[(0,jsx_runtime.jsx)(components.sL,{placement:"top-start",label:"This is a description of the button",id:"ic-tooltip-test-button-top-start",target:"test-button-top-start",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-top-start","aria-describedby":"ic-tooltip-test-button-top-start",children:"Top start"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"top",label:"This is a description of the button",id:"ic-tooltip-test-button-top",target:"test-button-top",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-top","aria-describedby":"ic-tooltip-test-button-top",children:"Top"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"top-end",label:"This is a description of the button",id:"ic-tooltip-test-button-top-end",target:"test-button-top-end",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-top-end","aria-describedby":"ic-tooltip-test-button-top-end",children:"Top end"})})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bottom-placements",children:"Bottom placements"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Bottom placements",children:args=>(0,jsx_runtime.jsxs)(_components.div,{style:{margin:"40px"},children:[(0,jsx_runtime.jsx)(components.sL,{placement:"bottom-start",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom-start",target:"test-button-bottom-start",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-bottom-start","aria-describedby":"ic-tooltip-test-button-bottom-start",children:"Bottom start"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"bottom",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom",target:"test-button-bottom",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-bottom","aria-describedby":"ic-tooltip-test-button-bottom",children:"Bottom"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"bottom-end",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom-end",target:"test-button-bottom-end",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-bottom-end","aria-describedby":"ic-tooltip-test-button-bottom-end",children:"Bottom end"})})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"right-placements",children:"Right placements"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Right placements",children:args=>(0,jsx_runtime.jsxs)(_components.div,{style:{margin:"40px"},children:[(0,jsx_runtime.jsx)(components.sL,{placement:"right-start",label:"This is a description of the button",id:"ic-tooltip-test-button-right-start",target:"test-button-right-start",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-right-start","aria-describedby":"ic-tooltip-test-button-right-start",children:"Right start"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"right",label:"This is a description of the button",id:"ic-tooltip-test-button-right",target:"test-button-right",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-right","aria-describedby":"ic-tooltip-test-button-right",children:"Right"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"right-end",label:"This is a description of the button",id:"ic-tooltip-test-button-right-end",target:"test-button-right-end",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-right-end","aria-describedby":"ic-tooltip-test-button-right-end",children:"Right end"})})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-placements",children:"Left placements"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Left placements",children:args=>(0,jsx_runtime.jsxs)(_components.div,{style:{marginLeft:"40px"},children:[(0,jsx_runtime.jsx)(components.sL,{placement:"left-start",label:"This is a description of the button",id:"ic-tooltip-test-button-left-start",target:"test-button-left-start",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-left-start","aria-describedby":"ic-tooltip-test-button-left-start",children:"Left start"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"left",label:"This is a description of the button",id:"ic-tooltip-test-button-left",target:"test-button-left",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-left","aria-describedby":"ic-tooltip-test-button-left",children:"Left"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"left-end",label:"This is a description of the button",id:"ic-tooltip-test-button-left-end",target:"test-button-left-end",children:(0,jsx_runtime.jsx)(_components.button,{id:"test-button-left-end","aria-describedby":"ic-tooltip-test-button-left-end",children:"Left end"})})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"truncation",children:"Truncation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Truncation",children:(0,jsx_runtime.jsx)(components.sL,{label:"This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the maxLines prop. The number of lines in the text is clamped to the number passed through the maxLines prop.",maxLines:3,id:"ic-tooltip-test-button-truncation",target:"test-button-truncation",children:(0,jsx_runtime.jsx)("button",{"aria-describedby":"ic-tooltip-test-button-truncation",id:"test-button-truncation",children:(0,jsx_runtime.jsx)(_components.p,{children:"Default"})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dark-background",children:"Dark background"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Dark background",children:(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#333333",height:"100px"},children:(0,jsx_runtime.jsx)(components.sL,{label:"This is a description of the button",id:"ic-tooltip-test-button-dark",target:"test-button-dark",children:(0,jsx_runtime.jsx)("button",{"aria-describedby":"ic-tooltip-test-button-dark",id:"test-button-dark",children:(0,jsx_runtime.jsx)(_components.p,{children:"Default"})})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,argTypes:{placement:{options:["bottom","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom-start","left-end","left","left-start"],control:{type:"select"}}},name:"Playground",children:args=>(0,jsx_runtime.jsx)(_components.div,{style:{margin:"250px"},children:(0,jsx_runtime.jsx)(components.sL,{label:args.label,placement:args.placement,maxLines:args.maxLines,disableHover:args.disableHover,id:"ic-tooltip-test-button-default",target:"button-id",children:(0,jsx_runtime.jsx)(_components.button,{id:"button-id","aria-describedby":"ic-tooltip-test-button-default",children:"Button 1"})})})})})]})}const defaultStory=()=>(0,jsx_runtime.jsx)(components.sL,{label:"This is a description of the button",id:"ic-tooltip-test-button-default",target:"test-button-default",children:(0,jsx_runtime.jsx)("button",{"aria-describedby":"ic-tooltip-test-button-default",id:"test-button-default",children:(0,jsx_runtime.jsx)("p",{children:"Default"})})});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'<IcTooltip label="This is a description of the button" id="ic-tooltip-test-button-default" target="test-button-default"><button aria-describedby="ic-tooltip-test-button-default" id="test-button-default"><p>{"Default"}</p></button></IcTooltip>'}};const usingExternalMethod=()=>{let display=!0;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{onClick:function func(){document.querySelector("ic-tooltip").displayTooltip(display,!0),display=!display},children:"Show tooltip"}),(0,jsx_runtime.jsx)(components.sL,{label:"This is a description of the button",id:"ic-tooltip-test-button-default",target:"test-button-default",children:(0,jsx_runtime.jsx)("button",{"aria-describedby":"ic-tooltip-test-button-default",id:"test-button-default",children:"Default"})})]})};usingExternalMethod.storyName="Using external method",usingExternalMethod.parameters={storySource:{source:'() => {\n  let display = true;\n  function func() {\n    document.querySelector("ic-tooltip").displayTooltip(display, true);\n    display = !display;\n  }\n  return <>\n          <button onClick={func}>Show tooltip</button>\n          <IcTooltip label="This is a description of the button" id="ic-tooltip-test-button-default" target="test-button-default">\n            <button aria-describedby="ic-tooltip-test-button-default" id="test-button-default">\n              Default\n            </button>\n          </IcTooltip>\n        </>;\n}'}};const disabledHover=()=>(0,jsx_runtime.jsx)(components.sL,{label:"This shows 'Code' has been copied",id:"ic-tooltip-test-button-disable-hover",target:"test-button-disable-hover",disableHover:!0,children:(0,jsx_runtime.jsx)("button",{"aria-describedby":"ic-tooltip-test-button-disable-hover",id:"test-button-disable-hover",onClick:()=>navigator.clipboard.writeText("Code"),children:(0,jsx_runtime.jsx)("p",{children:"Show tooltip"})})});disabledHover.storyName="Disabled hover",disabledHover.parameters={storySource:{source:'<IcTooltip label="This shows \'Code\' has been copied" id="ic-tooltip-test-button-disable-hover" target="test-button-disable-hover" disableHover><button aria-describedby="ic-tooltip-test-button-disable-hover" id="test-button-disable-hover" onClick={() => navigator.clipboard.writeText("Code")}><p>{"Show tooltip"}</p></button></IcTooltip>'}};const topPlacements=args=>(0,jsx_runtime.jsxs)("div",{style:{margin:"40px"},children:[(0,jsx_runtime.jsx)(components.sL,{placement:"top-start",label:"This is a description of the button",id:"ic-tooltip-test-button-top-start",target:"test-button-top-start",children:(0,jsx_runtime.jsx)("button",{id:"test-button-top-start","aria-describedby":"ic-tooltip-test-button-top-start",children:"Top start"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"top",label:"This is a description of the button",id:"ic-tooltip-test-button-top",target:"test-button-top",children:(0,jsx_runtime.jsx)("button",{id:"test-button-top","aria-describedby":"ic-tooltip-test-button-top",children:"Top"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"top-end",label:"This is a description of the button",id:"ic-tooltip-test-button-top-end",target:"test-button-top-end",children:(0,jsx_runtime.jsx)("button",{id:"test-button-top-end","aria-describedby":"ic-tooltip-test-button-top-end",children:"Top end"})})]});topPlacements.storyName="Top placements",topPlacements.parameters={storySource:{source:'args => <div style={{\n  margin: "40px"\n}}>\n        <IcTooltip placement="top-start" label="This is a description of the button" id="ic-tooltip-test-button-top-start" target="test-button-top-start">\n          <button id="test-button-top-start" aria-describedby="ic-tooltip-test-button-top-start">\n            Top start\n          </button>\n        </IcTooltip>\n        <IcTooltip placement="top" label="This is a description of the button" id="ic-tooltip-test-button-top" target="test-button-top">\n          <button id="test-button-top" aria-describedby="ic-tooltip-test-button-top">\n            Top\n          </button>\n        </IcTooltip>\n        <IcTooltip placement="top-end" label="This is a description of the button" id="ic-tooltip-test-button-top-end" target="test-button-top-end">\n          <button id="test-button-top-end" aria-describedby="ic-tooltip-test-button-top-end">\n            Top end\n          </button>\n        </IcTooltip>\n      </div>'}};const bottomPlacements=args=>(0,jsx_runtime.jsxs)("div",{style:{margin:"40px"},children:[(0,jsx_runtime.jsx)(components.sL,{placement:"bottom-start",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom-start",target:"test-button-bottom-start",children:(0,jsx_runtime.jsx)("button",{id:"test-button-bottom-start","aria-describedby":"ic-tooltip-test-button-bottom-start",children:"Bottom start"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"bottom",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom",target:"test-button-bottom",children:(0,jsx_runtime.jsx)("button",{id:"test-button-bottom","aria-describedby":"ic-tooltip-test-button-bottom",children:"Bottom"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"bottom-end",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom-end",target:"test-button-bottom-end",children:(0,jsx_runtime.jsx)("button",{id:"test-button-bottom-end","aria-describedby":"ic-tooltip-test-button-bottom-end",children:"Bottom end"})})]});bottomPlacements.storyName="Bottom placements",bottomPlacements.parameters={storySource:{source:'args => <div style={{\n  margin: "40px"\n}}>\n        <IcTooltip placement="bottom-start" label="This is a description of the button" id="ic-tooltip-test-button-bottom-start" target="test-button-bottom-start">\n          <button id="test-button-bottom-start" aria-describedby="ic-tooltip-test-button-bottom-start">\n            Bottom start\n          </button>\n        </IcTooltip>\n        <IcTooltip placement="bottom" label="This is a description of the button" id="ic-tooltip-test-button-bottom" target="test-button-bottom">\n          <button id="test-button-bottom" aria-describedby="ic-tooltip-test-button-bottom">\n            Bottom\n          </button>\n        </IcTooltip>\n        <IcTooltip placement="bottom-end" label="This is a description of the button" id="ic-tooltip-test-button-bottom-end" target="test-button-bottom-end">\n          <button id="test-button-bottom-end" aria-describedby="ic-tooltip-test-button-bottom-end">\n            Bottom end\n          </button>\n        </IcTooltip>\n      </div>'}};const rightPlacements=args=>(0,jsx_runtime.jsxs)("div",{style:{margin:"40px"},children:[(0,jsx_runtime.jsx)(components.sL,{placement:"right-start",label:"This is a description of the button",id:"ic-tooltip-test-button-right-start",target:"test-button-right-start",children:(0,jsx_runtime.jsx)("button",{id:"test-button-right-start","aria-describedby":"ic-tooltip-test-button-right-start",children:"Right start"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"right",label:"This is a description of the button",id:"ic-tooltip-test-button-right",target:"test-button-right",children:(0,jsx_runtime.jsx)("button",{id:"test-button-right","aria-describedby":"ic-tooltip-test-button-right",children:"Right"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"right-end",label:"This is a description of the button",id:"ic-tooltip-test-button-right-end",target:"test-button-right-end",children:(0,jsx_runtime.jsx)("button",{id:"test-button-right-end","aria-describedby":"ic-tooltip-test-button-right-end",children:"Right end"})})]});rightPlacements.storyName="Right placements",rightPlacements.parameters={storySource:{source:'args => <div style={{\n  margin: "40px"\n}}>\n        <IcTooltip placement="right-start" label="This is a description of the button" id="ic-tooltip-test-button-right-start" target="test-button-right-start">\n          <button id="test-button-right-start" aria-describedby="ic-tooltip-test-button-right-start">\n            Right start\n          </button>\n        </IcTooltip>\n        <IcTooltip placement="right" label="This is a description of the button" id="ic-tooltip-test-button-right" target="test-button-right">\n          <button id="test-button-right" aria-describedby="ic-tooltip-test-button-right">\n            Right\n          </button>\n        </IcTooltip>\n        <IcTooltip placement="right-end" label="This is a description of the button" id="ic-tooltip-test-button-right-end" target="test-button-right-end">\n          <button id="test-button-right-end" aria-describedby="ic-tooltip-test-button-right-end">\n            Right end\n          </button>\n        </IcTooltip>\n      </div>'}};const leftPlacements=args=>(0,jsx_runtime.jsxs)("div",{style:{marginLeft:"40px"},children:[(0,jsx_runtime.jsx)(components.sL,{placement:"left-start",label:"This is a description of the button",id:"ic-tooltip-test-button-left-start",target:"test-button-left-start",children:(0,jsx_runtime.jsx)("button",{id:"test-button-left-start","aria-describedby":"ic-tooltip-test-button-left-start",children:"Left start"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"left",label:"This is a description of the button",id:"ic-tooltip-test-button-left",target:"test-button-left",children:(0,jsx_runtime.jsx)("button",{id:"test-button-left","aria-describedby":"ic-tooltip-test-button-left",children:"Left"})}),(0,jsx_runtime.jsx)(components.sL,{placement:"left-end",label:"This is a description of the button",id:"ic-tooltip-test-button-left-end",target:"test-button-left-end",children:(0,jsx_runtime.jsx)("button",{id:"test-button-left-end","aria-describedby":"ic-tooltip-test-button-left-end",children:"Left end"})})]});leftPlacements.storyName="Left placements",leftPlacements.parameters={storySource:{source:'args => <div style={{\n  marginLeft: "40px"\n}}>\n        <IcTooltip placement="left-start" label="This is a description of the button" id="ic-tooltip-test-button-left-start" target="test-button-left-start">\n          <button id="test-button-left-start" aria-describedby="ic-tooltip-test-button-left-start">\n            Left start\n          </button>\n        </IcTooltip>\n        <IcTooltip placement="left" label="This is a description of the button" id="ic-tooltip-test-button-left" target="test-button-left">\n          <button id="test-button-left" aria-describedby="ic-tooltip-test-button-left">\n            Left\n          </button>\n        </IcTooltip>\n        <IcTooltip placement="left-end" label="This is a description of the button" id="ic-tooltip-test-button-left-end" target="test-button-left-end">\n          <button id="test-button-left-end" aria-describedby="ic-tooltip-test-button-left-end">\n            Left end\n          </button>\n        </IcTooltip>\n      </div>'}};const truncation=()=>(0,jsx_runtime.jsx)(components.sL,{label:"This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the maxLines prop. The number of lines in the text is clamped to the number passed through the maxLines prop.",maxLines:3,id:"ic-tooltip-test-button-truncation",target:"test-button-truncation",children:(0,jsx_runtime.jsx)("button",{"aria-describedby":"ic-tooltip-test-button-truncation",id:"test-button-truncation",children:(0,jsx_runtime.jsx)("p",{children:"Default"})})});truncation.storyName="Truncation",truncation.parameters={storySource:{source:'<IcTooltip label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the maxLines prop. The number of lines in the text is clamped to the number passed through the maxLines prop." maxLines={3} id="ic-tooltip-test-button-truncation" target="test-button-truncation"><button aria-describedby="ic-tooltip-test-button-truncation" id="test-button-truncation"><p>{"Default"}</p></button></IcTooltip>'}};const darkBackground=()=>(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#333333",height:"100px"},children:(0,jsx_runtime.jsx)(components.sL,{label:"This is a description of the button",id:"ic-tooltip-test-button-dark",target:"test-button-dark",children:(0,jsx_runtime.jsx)("button",{"aria-describedby":"ic-tooltip-test-button-dark",id:"test-button-dark",children:(0,jsx_runtime.jsx)("p",{children:"Default"})})})});darkBackground.storyName="Dark background",darkBackground.parameters={storySource:{source:'<div style={{\n  backgroundColor: "#333333",\n  height: "100px"\n}}><IcTooltip label="This is a description of the button" id="ic-tooltip-test-button-dark" target="test-button-dark"><button aria-describedby="ic-tooltip-test-button-dark" id="test-button-dark"><p>{"Default"}</p></button></IcTooltip></div>'}};const playground=args=>(0,jsx_runtime.jsx)("div",{style:{margin:"250px"},children:(0,jsx_runtime.jsx)(components.sL,{label:args.label,placement:args.placement,maxLines:args.maxLines,disableHover:args.disableHover,id:"ic-tooltip-test-button-default",target:"button-id",children:(0,jsx_runtime.jsx)("button",{id:"button-id","aria-describedby":"ic-tooltip-test-button-default",children:"Button 1"})})});playground.storyName="Playground",playground.argTypes={placement:{options:["bottom","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom-start","left-end","left","left-start"],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => <div style={{\n  margin: "250px"\n}}>\n        <IcTooltip label={args.label} placement={args.placement} maxLines={args.maxLines} disableHover={args.disableHover} id="ic-tooltip-test-button-default" target="button-id">\n          <button id="button-id" aria-describedby="ic-tooltip-test-button-default">\n            Button 1\n          </button>\n        </IcTooltip>\n      </div>'}};const componentMeta={title:"Tooltip",component:components.sL,tags:["stories-mdx"],includeStories:["defaultStory","usingExternalMethod","disabledHover","topPlacements","bottomPlacements","rightPlacements","leftPlacements","truncation","darkBackground","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_tooltip_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","usingExternalMethod","disabledHover","topPlacements","bottomPlacements","rightPlacements","leftPlacements","truncation","darkBackground","playground"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);