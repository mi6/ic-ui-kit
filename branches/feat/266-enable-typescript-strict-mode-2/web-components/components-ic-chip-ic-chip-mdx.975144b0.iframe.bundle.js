(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4725],{"./src/components/ic-chip/ic-chip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-chip\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                | Attribute                | Description                                                                                                                                                                          | Type                                                    | Default     |\n| ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ----------- |\n| `customColor`           | `custom-color`           | The custom chip colour. This will override the theme colour. Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".                        | ``#${string}` \\| `rgb(${string})` \\| `rgba(${string})`` | `undefined` |\n| `disabled`              | `disabled`               | If `true`, the chip will appear disabled.                                                                                                                                            | `boolean`                                               | `false`     |\n| `dismissLabel`          | `dismiss-label`          | The text in the dismiss button tooltip and aria label.                                                                                                                               | `string`                                                | `"Dismiss"` |\n| `dismissible`           | `dismissible`            | If `true`, the chip will have a close button at the end to dismiss it.                                                                                                               | `boolean`                                               | `false`     |\n| `label` _(required)_    | `label`                  | The text rendered within the chip.                                                                                                                                                   | `string`                                                | `undefined` |\n| `size`                  | `size`                   | The size of the chip.                                                                                                                                                                | `"large" \\| "medium" \\| "small"`                        | `"medium"`  |\n| `theme`                 | `theme`                  | Sets the chip to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component. Setting the "customColor" prop will override this. | `"dark" \\| "inherit" \\| "light"`                        | `"inherit"` |\n| `transparentBackground` | `transparent-background` | If `true`, the outlined variant of chip will have a transparent background rather than the theme defined color.                                                                      | `boolean`                                               | `true`      |\n| `variant`               | `variant`                | The emphasis of the chip.                                                                                                                                                            | `"filled" \\| "outlined"`                                | `"filled"`  |\n\n\n## Events\n\n| Event       | Description                                  | Type                |\n| ----------- | -------------------------------------------- | ------------------- |\n| `icDismiss` | Is emitted when the user dismisses the chip. | `CustomEvent<void>` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the chip.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot      | Description                                           |\n| --------- | ----------------------------------------------------- |\n| `"badge"` | Badge component overlaying the top right of the chip. |\n| `"icon"`  | Content will be rendered at the start of the chip.    |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-tooltip](../ic-tooltip)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-chip --\x3e ic-typography\n  ic-chip --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-chip fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_chip_stories=__webpack_require__("./src/components/ic-chip/ic-chip.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_chip_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);