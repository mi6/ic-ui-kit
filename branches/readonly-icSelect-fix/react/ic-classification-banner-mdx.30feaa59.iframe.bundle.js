(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7357,7719],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/ic-classification-banner.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-classification-banner\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property              | Attribute              | Description                                                                                            | Type                                                                          | Default     |\n| --------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ----------- |\n| `additionalSelectors` | `additional-selectors` | The additional information that will be displayed after the classification.                            | `string`                                                                      | `""`        |\n| `classification`      | `classification`       | The classification level to be displayed - also determines the banner and text colour.                 | `"default" \\| "official" \\| "official-sensitive" \\| "secret" \\| "top-secret"` | `"default"` |\n| `country`             | `country`              | The optional text that will be displayed before classification to specify relevant country/countries.  | `string`                                                                      | `"uk"`      |\n| `inline`              | `inline`               | If `true`, the banner will appear inline with the page, instead of sticking to the bottom of the page. | `boolean`                                                                     | `false`     |\n| `upTo`                | `up-to`                | If `true`, "Up to" will be displayed before the classification and country.                            | `boolean`                                                                     | `false`     |\n\n\n## CSS Custom Properties\n\n| Name                                 | Description                      |\n| ------------------------------------ | -------------------------------- |\n| `--ic-z-index-classification-banner` | z-index of classification banner |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-classification-banner --\x3e ic-typography\n  style ic-classification-banner fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_classification_banner_stories=__webpack_require__("./src/stories/ic-classification-banner.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_classification_banner_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/ic-classification-banner.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalSelectors:()=>AdditionalSelectors,BottomOfPage:()=>BottomOfPage,Classifications:()=>Classifications,Country:()=>Country,Playground:()=>Playground,UpTo:()=>UpTo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Classification banner",component:_components__WEBPACK_IMPORTED_MODULE_1__.tb};var Classifications={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{inline:"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official",inline:"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official-sensitive",inline:"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"secret",inline:"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"top-secret",inline:"true"}))},name:"Classifications"},UpTo={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{inline:"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official",inline:"true","up-to":"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official-sensitive",inline:"true","up-to":"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"secret",inline:"true","up-to":"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"top-secret",inline:"true","up-to":"true"}))},name:"Up to"},BottomOfPage={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official"})},name:"Bottom of page"},Country={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official",inline:"true",country:"us"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official",inline:"true",country:""}))},name:"Country"},AdditionalSelectors={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official",inline:"true","additional-selectors":"UKIC"})},name:"Additional selectors"},Playground={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:args.classification,inline:args.inline,"up-to":args.upTo,country:args.country,"additional-selectors":args.additionalSelectors})},args:{additionalSelectors:"",classification:"official",country:"uk",inline:!0,upTo:!1},argTypes:{classification:{options:["default","official","secret","official-sensitive","top-secret"],control:{type:"select"}}},name:"Playground"};const __namedExportsOrder=["Classifications","UpTo","BottomOfPage","Country","AdditionalSelectors","Playground"];Classifications.parameters={...Classifications.parameters,docs:{...Classifications.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcClassificationBanner inline="true" />\n      <IcClassificationBanner classification="official" inline="true" />\n      <IcClassificationBanner classification="official-sensitive" inline="true" />\n      <IcClassificationBanner classification="secret" inline="true" />\n      <IcClassificationBanner classification="top-secret" inline="true" />\n    </>,\n  name: "Classifications"\n}',...Classifications.parameters?.docs?.source}}},UpTo.parameters={...UpTo.parameters,docs:{...UpTo.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcClassificationBanner inline="true" />\n      <IcClassificationBanner classification="official" inline="true" up-to="true" />\n      <IcClassificationBanner classification="official-sensitive" inline="true" up-to="true" />\n      <IcClassificationBanner classification="secret" inline="true" up-to="true" />\n      <IcClassificationBanner classification="top-secret" inline="true" up-to="true" />\n    </>,\n  name: "Up to"\n}',...UpTo.parameters?.docs?.source}}},BottomOfPage.parameters={...BottomOfPage.parameters,docs:{...BottomOfPage.parameters?.docs,source:{originalSource:'{\n  render: () => <IcClassificationBanner classification="official" />,\n  name: "Bottom of page"\n}',...BottomOfPage.parameters?.docs?.source}}},Country.parameters={...Country.parameters,docs:{...Country.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcClassificationBanner classification="official" inline="true" country="us" />\n      <IcClassificationBanner classification="official" inline="true" country="" />\n    </>,\n  name: "Country"\n}',...Country.parameters?.docs?.source}}},AdditionalSelectors.parameters={...AdditionalSelectors.parameters,docs:{...AdditionalSelectors.parameters?.docs,source:{originalSource:'{\n  render: () => <IcClassificationBanner classification="official" inline="true" additional-selectors="UKIC" />,\n  name: "Additional selectors"\n}',...AdditionalSelectors.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <IcClassificationBanner classification={args.classification} inline={args.inline} up-to={args.upTo} country={args.country} additional-selectors={args.additionalSelectors}></IcClassificationBanner>,\n  args: defaultArgs,\n  argTypes: {\n    classification: {\n      options: ["default", "official", "secret", "official-sensitive", "top-secret"],\n      control: {\n        type: "select"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);