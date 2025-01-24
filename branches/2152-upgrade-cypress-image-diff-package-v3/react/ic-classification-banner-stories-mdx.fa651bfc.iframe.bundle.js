(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7833],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-classification-banner.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,additionalSelectors:()=>additionalSelectors,bottomOfPage:()=>bottomOfPage,classifications:()=>classifications,country:()=>country,default:()=>ic_classification_banner_stories,defaultArgs:()=>defaultArgs,playground:()=>playground,upTo:()=>upTo});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-classification-banner\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property              | Attribute              | Description                                                                                            | Type                                                                          | Default     |\n| --------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ----------- |\n| `additionalSelectors` | `additional-selectors` | The additional information that will be displayed after the classification.                            | `string`                                                                      | `""`        |\n| `classification`      | `classification`       | The classification level to be displayed - also determines the banner and text colour.                 | `"default" \\| "official" \\| "official-sensitive" \\| "secret" \\| "top-secret"` | `"default"` |\n| `country`             | `country`              | The optional text that will be displayed before classification to specify relevant country/countries.  | `string`                                                                      | `"uk"`      |\n| `inline`              | `inline`               | If `true`, the banner will appear inline with the page, instead of sticking to the bottom of the page. | `boolean`                                                                     | `false`     |\n| `upTo`                | `up-to`                | If `true`, "Up to" will be displayed before the classification and country.                            | `boolean`                                                                     | `false`     |\n\n\n## CSS Custom Properties\n\n| Name                                 | Description                      |\n| ------------------------------------ | -------------------------------- |\n| `--ic-z-index-classification-banner` | z-index of classification banner |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-classification-banner --\x3e ic-typography\n  style ic-classification-banner fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={additionalSelectors:"",classification:"official",country:"uk",inline:!0,upTo:!1};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Classification banner",component:components.tb}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"classifications",children:"Classifications"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Classifications",children:[(0,jsx_runtime.jsx)(components.tb,{inline:"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"official",inline:"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"official-sensitive",inline:"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"secret",inline:"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"top-secret",inline:"true"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"up-to-classifications",children:"Up to classifications"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Up to",children:[(0,jsx_runtime.jsx)(components.tb,{inline:"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"official",inline:"true","up-to":"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"official-sensitive",inline:"true","up-to":"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"secret",inline:"true","up-to":"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"top-secret",inline:"true","up-to":"true"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bottom-of-page",children:"Bottom of page"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Bottom of page",children:(0,jsx_runtime.jsx)(components.tb,{classification:"official"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"country",children:"Country"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Country",children:[(0,jsx_runtime.jsx)(components.tb,{classification:"official",inline:"true",country:"us"}),(0,jsx_runtime.jsx)(components.tb,{classification:"official",inline:"true",country:""})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"additional-selectors",children:"Additional selectors"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Additional selectors",children:(0,jsx_runtime.jsx)(components.tb,{classification:"official",inline:"true","additional-selectors":"UKIC"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,argTypes:{classification:{options:["default","official","secret","official-sensitive","top-secret"],control:{type:"select"}}},name:"Playground",children:args=>(0,jsx_runtime.jsx)(components.tb,{classification:args.classification,inline:args.inline,"up-to":args.upTo,country:args.country,"additional-selectors":args.additionalSelectors})})})]})}const classifications=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.tb,{inline:"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"official",inline:"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"official-sensitive",inline:"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"secret",inline:"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"top-secret",inline:"true"})]});classifications.storyName="Classifications",classifications.parameters={storySource:{source:'<IcClassificationBanner inline="true" />\n<IcClassificationBanner classification="official" inline="true" />\n<IcClassificationBanner classification="official-sensitive" inline="true" />\n<IcClassificationBanner classification="secret" inline="true" />\n<IcClassificationBanner classification="top-secret" inline="true" />'}};const upTo=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.tb,{inline:"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"official",inline:"true","up-to":"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"official-sensitive",inline:"true","up-to":"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"secret",inline:"true","up-to":"true"}),(0,jsx_runtime.jsx)(components.tb,{classification:"top-secret",inline:"true","up-to":"true"})]});upTo.storyName="Up to",upTo.parameters={storySource:{source:'<IcClassificationBanner inline="true" />\n<IcClassificationBanner classification="official" inline="true" up-to="true" />\n<IcClassificationBanner classification="official-sensitive" inline="true" up-to="true" />\n<IcClassificationBanner classification="secret" inline="true" up-to="true" />\n<IcClassificationBanner classification="top-secret" inline="true" up-to="true" />'}};const bottomOfPage=()=>(0,jsx_runtime.jsx)(components.tb,{classification:"official"});bottomOfPage.storyName="Bottom of page",bottomOfPage.parameters={storySource:{source:'<IcClassificationBanner classification="official" />'}};const country=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.tb,{classification:"official",inline:"true",country:"us"}),(0,jsx_runtime.jsx)(components.tb,{classification:"official",inline:"true",country:""})]});country.storyName="Country",country.parameters={storySource:{source:'<IcClassificationBanner classification="official" inline="true" country="us" />\n<IcClassificationBanner classification="official" inline="true" country="" />'}};const additionalSelectors=()=>(0,jsx_runtime.jsx)(components.tb,{classification:"official",inline:"true","additional-selectors":"UKIC"});additionalSelectors.storyName="Additional selectors",additionalSelectors.parameters={storySource:{source:'<IcClassificationBanner classification="official" inline="true" additional-selectors="UKIC" />'}};const playground=args=>(0,jsx_runtime.jsx)(components.tb,{classification:args.classification,inline:args.inline,"up-to":args.upTo,country:args.country,"additional-selectors":args.additionalSelectors});playground.storyName="Playground",playground.argTypes={classification:{options:["default","official","secret","official-sensitive","top-secret"],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:"args => <IcClassificationBanner classification={args.classification} inline={args.inline} up-to={args.upTo} country={args.country} additional-selectors={args.additionalSelectors}></IcClassificationBanner>"}};const componentMeta={title:"Classification banner",component:components.tb,tags:["stories-mdx"],includeStories:["classifications","upTo","bottomOfPage","country","additionalSelectors","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_classification_banner_stories=componentMeta,__namedExportsOrder=["defaultArgs","classifications","upTo","bottomOfPage","country","additionalSelectors","playground"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);