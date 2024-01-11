/*! For license information please see components-ic-classification-banner-ic-classification-bannner-stories-mdx.f895d094.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[348],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-classification-banner/ic-classification-bannner.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,additionalSelectors:()=>additionalSelectors,bottomOfPage:()=>bottomOfPage,classifications:()=>classifications,country:()=>country,default:()=>__WEBPACK_DEFAULT_EXPORT__,upTo:()=>upTo});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit-html/lit-html.js"),_readme_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ic-classification-banner/readme.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Web Components/Classification banner",component:"ic-classification-banner"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.dk,{markdown:_readme_md__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"classifications",children:"Classifications"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Classifications",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-classification-banner inline="true"></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
      ></ic-classification-banner>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"up-to-classifications",children:"Up to classifications"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Up to",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-classification-banner inline="true"></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
        up-to="true"
      ></ic-classification-banner>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"bottom-of-page",children:"Bottom of page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Bottom of page",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-classification-banner
      classification="official"
    ></ic-classification-banner>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"country",children:"Country"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Country",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-classification-banner
        classification="official"
        inline="true"
        country="us"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        country=""
      ></ic-classification-banner>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"additional-selectors",children:"Additional selectors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Additional selectors",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-classification-banner
      classification="official"
      inline="true"
      additional-selectors="ukic"
    />`})})]})}const classifications=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-classification-banner inline="true"></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
      ></ic-classification-banner>`;classifications.storyName="Classifications",classifications.parameters={storySource:{source:'html`<ic-classification-banner inline="true"></ic-classification-banner>\n      <ic-classification-banner\n        classification="official"\n        inline="true"\n      ></ic-classification-banner>\n      <ic-classification-banner\n        classification="official-sensitive"\n        inline="true"\n      ></ic-classification-banner>\n      <ic-classification-banner\n        classification="secret"\n        inline="true"\n      ></ic-classification-banner>\n      <ic-classification-banner\n        classification="top-secret"\n        inline="true"\n      ></ic-classification-banner>`'}};const upTo=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-classification-banner inline="true"></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
        up-to="true"
      ></ic-classification-banner>`;upTo.storyName="Up to",upTo.parameters={storySource:{source:'html`<ic-classification-banner inline="true"></ic-classification-banner>\n      <ic-classification-banner\n        classification="official"\n        inline="true"\n        up-to="true"\n      ></ic-classification-banner>\n      <ic-classification-banner\n        classification="official-sensitive"\n        inline="true"\n        up-to="true"\n      ></ic-classification-banner>\n      <ic-classification-banner\n        classification="secret"\n        inline="true"\n        up-to="true"\n      ></ic-classification-banner>\n      <ic-classification-banner\n        classification="top-secret"\n        inline="true"\n        up-to="true"\n      ></ic-classification-banner>`'}};const bottomOfPage=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-classification-banner
      classification="official"
    ></ic-classification-banner>`;bottomOfPage.storyName="Bottom of page",bottomOfPage.parameters={storySource:{source:'html`<ic-classification-banner\n      classification="official"\n    ></ic-classification-banner>`'}};const country=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-classification-banner
        classification="official"
        inline="true"
        country="us"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        country=""
      ></ic-classification-banner>`;country.storyName="Country",country.parameters={storySource:{source:'html`<ic-classification-banner\n        classification="official"\n        inline="true"\n        country="us"\n      ></ic-classification-banner>\n      <ic-classification-banner\n        classification="official"\n        inline="true"\n        country=""\n      ></ic-classification-banner>`'}};const additionalSelectors=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-classification-banner
      classification="official"
      inline="true"
      additional-selectors="ukic"
    />`;additionalSelectors.storyName="Additional selectors",additionalSelectors.parameters={storySource:{source:'html`<ic-classification-banner\n      classification="official"\n      inline="true"\n      additional-selectors="ukic"\n    />`'}};const componentMeta={title:"Web Components/Classification banner",tags:["stories-mdx"],includeStories:["classifications","upTo","bottomOfPage","country","additionalSelectors"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["classifications","upTo","bottomOfPage","country","additionalSelectors"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/ic-classification-banner/readme.md":module=>{"use strict";module.exports='# ic-classification-banner\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property              | Attribute              | Description                                                                                            | Type                                                                          | Default     |\n| --------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ----------- |\n| `additionalSelectors` | `additional-selectors` | The additional information that will be displayed after the classification.                            | `string`                                                                      | `""`        |\n| `classification`      | `classification`       | The classification level to be displayed - also determines the banner and text colour.                 | `"default" \\| "official" \\| "official-sensitive" \\| "secret" \\| "top-secret"` | `"default"` |\n| `country`             | `country`              | The optional text that will be displayed before classification to specify relevant country/countries.  | `string`                                                                      | `"uk"`      |\n| `inline`              | `inline`               | If `true`, the banner will appear inline with the page, instead of sticking to the bottom of the page. | `boolean`                                                                     | `false`     |\n| `upTo`                | `up-to`                | If `true`, "Up to" will be displayed before the classification and country.                            | `boolean`                                                                     | `false`     |\n\n\n## CSS Custom Properties\n\n| Name                                 | Description                      |\n| ------------------------------------ | -------------------------------- |\n| `--ic-z-index-classification-banner` | z-index of classification banner |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-classification-banner --\x3e ic-typography\n  style ic-classification-banner fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}]);
//# sourceMappingURL=components-ic-classification-banner-ic-classification-bannner-stories-mdx.f895d094.iframe.bundle.js.map