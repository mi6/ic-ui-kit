/*! For license information please see components-ic-status-tag-ic-status-tag-stories-mdx.d51835ad.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1194],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-status-tag/ic-status-tag.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,announced:()=>announced,danger:()=>danger,default:()=>__WEBPACK_DEFAULT_EXPORT__,deprecatedAppearance:()=>deprecatedAppearance,deprecatedSmall:()=>deprecatedSmall,neutral:()=>neutral,small:()=>small,success:()=>success,warning:()=>warning});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit-html/lit-html.js"),_readme_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ic-status-tag/readme.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Web Components/Status tag",component:"ic-status-tag"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.dk,{markdown:_readme_md__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"neutral",children:"Neutral"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Neutral",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Neutral"></ic-status-tag>
      <ic-status-tag label="Neutral" variant="outlined"></ic-status-tag>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"success",children:"Success"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Success",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Success" status="success"></ic-status-tag>
      <ic-status-tag
        label="Success"
        status="success"
        variant="outlined"
      ></ic-status-tag>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"warning",children:"Warning"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Warning",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Warning" status="warning"></ic-status-tag>
      <ic-status-tag
        label="Warning"
        status="warning"
        variant="outlined"
      ></ic-status-tag>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"danger",children:"Danger"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Danger",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Danger" status="danger"></ic-status-tag>
      <ic-status-tag
        label="Danger"
        status="danger"
        variant="outlined"
      ></ic-status-tag>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Small",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Small" size="small"></ic-status-tag>
      <ic-status-tag
        label="Small"
        variant="outlined"
        size="small"
      ></ic-status-tag>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Deprecated - small",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Small" size="small"></ic-status-tag>
      <ic-status-tag label="Small" variant="outlined" small></ic-status-tag>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"deprecated---appearance",children:"Deprecated - appearance"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Deprecated - appearance",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Neutral"></ic-status-tag>
      <ic-status-tag label="Neutral" appearance="outlined"></ic-status-tag>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"announced",children:"Announced"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Announced",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag
        label="Warning"
        status="warning"
        id="tag"
        announced="false"
      ></ic-status-tag>
      <br />
      <br />
      <ic-button variant="primary" size="small" onClick="onClick()" id="btn"
        >Toggle announced prop</ic-button
      >
      <script>
        const tag = document.getElementById("tag");
        const btn = document.getElementById("btn");
        btn.addEventListener("click", onClick);
        function onClick(e) {
          e.preventDefault();
          tag.announced
            ? ((tag.announced = "false"),
              (tag.status = "warning"),
              (tag.label = "Warning"))
            : ((tag.announced = "true"),
              (tag.status = "success"),
              (tag.label = "Success"));
        }
      </script>
    `})})]})}const neutral=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Neutral"></ic-status-tag>
      <ic-status-tag label="Neutral" variant="outlined"></ic-status-tag>
    `;neutral.storyName="Neutral",neutral.parameters={storySource:{source:'html`\n      <ic-status-tag label="Neutral"></ic-status-tag>\n      <ic-status-tag label="Neutral" variant="outlined"></ic-status-tag>\n    `'}};const success=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Success" status="success"></ic-status-tag>
      <ic-status-tag
        label="Success"
        status="success"
        variant="outlined"
      ></ic-status-tag>
    `;success.storyName="Success",success.parameters={storySource:{source:'html`\n      <ic-status-tag label="Success" status="success"></ic-status-tag>\n      <ic-status-tag\n        label="Success"\n        status="success"\n        variant="outlined"\n      ></ic-status-tag>\n    `'}};const warning=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Warning" status="warning"></ic-status-tag>
      <ic-status-tag
        label="Warning"
        status="warning"
        variant="outlined"
      ></ic-status-tag>
    `;warning.storyName="Warning",warning.parameters={storySource:{source:'html`\n      <ic-status-tag label="Warning" status="warning"></ic-status-tag>\n      <ic-status-tag\n        label="Warning"\n        status="warning"\n        variant="outlined"\n      ></ic-status-tag>\n    `'}};const danger=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Danger" status="danger"></ic-status-tag>
      <ic-status-tag
        label="Danger"
        status="danger"
        variant="outlined"
      ></ic-status-tag>
    `;danger.storyName="Danger",danger.parameters={storySource:{source:'html`\n      <ic-status-tag label="Danger" status="danger"></ic-status-tag>\n      <ic-status-tag\n        label="Danger"\n        status="danger"\n        variant="outlined"\n      ></ic-status-tag>\n    `'}};const small=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Small" size="small"></ic-status-tag>
      <ic-status-tag
        label="Small"
        variant="outlined"
        size="small"
      ></ic-status-tag>
    `;small.storyName="Small",small.parameters={storySource:{source:'html`\n      <ic-status-tag label="Small" size="small"></ic-status-tag>\n      <ic-status-tag\n        label="Small"\n        variant="outlined"\n        size="small"\n      ></ic-status-tag>\n    `'}};const deprecatedSmall=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Small" size="small"></ic-status-tag>
      <ic-status-tag label="Small" variant="outlined" small></ic-status-tag>
    `;deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'html`\n      <ic-status-tag label="Small" size="small"></ic-status-tag>\n      <ic-status-tag label="Small" variant="outlined" small></ic-status-tag>\n    `'}};const deprecatedAppearance=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag label="Neutral"></ic-status-tag>
      <ic-status-tag label="Neutral" appearance="outlined"></ic-status-tag>
    `;deprecatedAppearance.storyName="Deprecated - appearance",deprecatedAppearance.parameters={storySource:{source:'html`\n      <ic-status-tag label="Neutral"></ic-status-tag>\n      <ic-status-tag label="Neutral" appearance="outlined"></ic-status-tag>\n    `'}};const announced=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-status-tag
        label="Warning"
        status="warning"
        id="tag"
        announced="false"
      ></ic-status-tag>
      <br />
      <br />
      <ic-button variant="primary" size="small" onClick="onClick()" id="btn"
        >Toggle announced prop</ic-button
      >
      <script>
        const tag = document.getElementById("tag");
        const btn = document.getElementById("btn");
        btn.addEventListener("click", onClick);
        function onClick(e) {
          e.preventDefault();
          tag.announced
            ? ((tag.announced = "false"),
              (tag.status = "warning"),
              (tag.label = "Warning"))
            : ((tag.announced = "true"),
              (tag.status = "success"),
              (tag.label = "Success"));
        }
      </script>
    `;announced.storyName="Announced",announced.parameters={storySource:{source:'html`\n      <ic-status-tag\n        label="Warning"\n        status="warning"\n        id="tag"\n        announced="false"\n      ></ic-status-tag>\n      <br />\n      <br />\n      <ic-button variant="primary" size="small" onClick="onClick()" id="btn"\n        >Toggle announced prop</ic-button\n      >\n      <script>\n        const tag = document.getElementById("tag");\n        const btn = document.getElementById("btn");\n        btn.addEventListener("click", onClick);\n        function onClick(e) {\n          e.preventDefault();\n          tag.announced\n            ? ((tag.announced = "false"),\n              (tag.status = "warning"),\n              (tag.label = "Warning"))\n            : ((tag.announced = "true"),\n              (tag.status = "success"),\n              (tag.label = "Success"));\n        }\n      <\/script>\n    `'}};const componentMeta={title:"Web Components/Status tag",tags:["stories-mdx"],includeStories:["neutral","success","warning","danger","small","deprecatedSmall","deprecatedAppearance","announced"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["neutral","success","warning","danger","small","deprecatedSmall","deprecatedAppearance","announced"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/ic-status-tag/readme.md":module=>{"use strict";module.exports='# ic-status-tag\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute    | Description                                                                                                                         | Type                                              | Default     |\n| -------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |\n| `announced`          | `announced`  | If `true`, role=\'status\' is added to the component and it will act as an \'aria-live\' region.                                        | `boolean`                                         | `false`     |\n| `appearance`         | `appearance` | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Use variant prop instead.<br/><br/>           | `"filled" \\| "outlined"`                          | `undefined` |\n| `label` _(required)_ | `label`      | The content rendered within the status tag.                                                                                         | `string`                                          | `undefined` |\n| `size`               | `size`       | The size of the status tag component.                                                                                               | `"default" \\| "small"`                            | `"default"` |\n| `small`              | `small`      | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/> | `boolean`                                         | `false`     |\n| `status`             | `status`     | The colour of the status tag.                                                                                                       | `"danger" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n| `variant`            | `variant`    | The emphasis of the status tag.                                                                                                     | `"filled" \\| "outlined"`                          | `"filled"`  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-status-tag --\x3e ic-typography\n  style ic-status-tag fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}]);
//# sourceMappingURL=components-ic-status-tag-ic-status-tag-stories-mdx.d51835ad.iframe.bundle.js.map