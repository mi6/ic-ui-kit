(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7539],{"./src/components/ic-badge/ic-badge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent,defaultArgs:()=>defaultArgs});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-badge\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property          | Attribute          | Description                                                                                                                                                                             | Type                                                                              | Default     |\n| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------- |\n| `accessibleLabel` | `accessible-label` | The accessible label of the badge component to provide context for screen reader users.                                                                                                 | `string`                                                                          | `undefined` |\n| `customColor`     | `custom-color`     | The custom badge colour. This will only style the badge component if variant="custom". Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)". | ``#${string}` \\| `rgb(${string})` \\| `rgba(${string})``                           | `null`      |\n| `maxNumber`       | `max-number`       | The maximum number shown on the badge appended with a +. This will only be displayed if type="text" and textLabel is not empty.                                                         | `number`                                                                          | `undefined` |\n| `position`        | `position`         | The positioning of the badge in reference to the parent element.                                                                                                                        | `"far" \\| "inline" \\| "near"`                                                     | `"far"`     |\n| `size`            | `size`             | The size of the badge to be displayed.                                                                                                                                                  | `"default" \\| "large" \\| "small"`                                                 | `"default"` |\n| `textLabel`       | `text-label`       | The text displayed in the badge. This will only be displayed if type="text".                                                                                                            | `string`                                                                          | `undefined` |\n| `type`            | `type`             | The type of badge to be displayed.                                                                                                                                                      | `"dot" \\| "icon" \\| "text"`                                                       | `"text"`    |\n| `variant`         | `variant`          | The variant of the badge to be displayed.                                                                                                                                               | `"custom" \\| "error" \\| "info" \\| "light" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n| `visible`         | `visible`          | If `true`, the badge will be displayed.                                                                                                                                                 | `boolean`                                                                         | `true`      |\n\n\n## Methods\n\n### `hideBadge() => Promise<void>`\n\n<span style="color:red">**[DEPRECATED]**</span> This method should not be used anymore. Use visible prop to set badge visibility.<br/><br/>\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n### `showBadge() => Promise<void>`\n\n<span style="color:red">**[DEPRECATED]**</span> This method should not be used anymore. Use visible prop to set badge visibility.<br/><br/>\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot           | Description                                                    |\n| -------------- | -------------------------------------------------------------- |\n| `"badge-icon"` | Icon will be rendered inside the badge if type is set to icon. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-badge --\x3e ic-typography\n  style ic-badge fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_badge_stories=__webpack_require__("./src/components/ic-badge/ic-badge.stories.js");const defaultArgs={accessibleLabel:"notification",customColor:null,maxNumber:1e3,position:"far",size:"default",textLabel:"1",type:"text",variant:"neutral"};function _createMdxContent(props){const _components={h3:"h3",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_badge_stories}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"success",children:"Success"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.Success})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"error",children:"Error"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.Error})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning",children:"Warning"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.Warning})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"neutral",children:"Neutral"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.Neutral})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light",children:"Light"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.Light})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"info",children:"Info"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.Info})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom",children:"Custom"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.Custom})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"max-number",children:"Max number"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.MaxNumber})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"position-near",children:"Position near"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.PositionNear})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"position-inline",children:"Position inline"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.PositionInline})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hide-badge",children:"Hide badge"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.HideBadge})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"accessible-label",children:"Accessible label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.AccessibleLabel})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_badge_stories.Playground})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);