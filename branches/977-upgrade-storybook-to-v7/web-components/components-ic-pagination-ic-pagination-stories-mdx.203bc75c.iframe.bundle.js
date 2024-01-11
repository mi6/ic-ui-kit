/*! For license information please see components-ic-pagination-ic-pagination-stories-mdx.203bc75c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6222],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-pagination/ic-pagination.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,complex:()=>complex,complexAdjacentBoundaryItemsSet:()=>complexAdjacentBoundaryItemsSet,default:()=>ic_pagination_stories,simple:()=>simple});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const readme_namespaceObject='# ic-pagination\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                     | Attribute                         | Description                                                                                                                             | Type                             | Default            |\n| ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |\n| `adjacentCount`              | `adjacent-count`                  | The number of pages displayed adjacent to the current page when using \'complex\' type pagination. Accepted values are 0, 1 & 2.          | `number`                         | `1`                |\n| `appearance`                 | `appearance`                      | The appearance of the pagination, e.g. dark, light or the default.                                                                      | `"dark" \\| "default" \\| "light"` | `"default"`        |\n| `boundaryCount`              | `boundary-count`                  | The number of pages displayed as boundary items to the current page when using \'complex\' type pagination. Accepted values are 0, 1 & 2. | `number`                         | `1`                |\n| `currentPage`                | `current-page`                    | The current page displayed by the pagination.                                                                                           | `number`                         | `this.defaultPage` |\n| `defaultPage`                | `default-page`                    | The default page to display.                                                                                                            | `number`                         | `1`                |\n| `disabled`                   | `disabled`                        | If `true`, the pagination will not allow interaction.                                                                                   | `boolean`                        | `false`            |\n| `hideCurrentPage`            | `hide-current-page`               | If `true`, the current page of the simple pagination will not be displayed.                                                             | `boolean`                        | `false`            |\n| `hideFirstAndLastPageButton` | `hide-first-and-last-page-button` | If `true`, the first and last page buttons will not be displayed.                                                                       | `boolean`                        | `false`            |\n| `label`                      | `label`                           | The label for the pagination item (applicable when simple pagination is being used).                                                    | `string`                         | `"Page"`           |\n| `pages` _(required)_         | `pages`                           | The total number of pages.                                                                                                              | `number`                         | `undefined`        |\n| `type`                       | `type`                            | The type of pagination to be used.                                                                                                      | `"complex" \\| "simple"`          | `"simple"`         |\n\n\n## Events\n\n| Event          | Description                      | Type                               |\n| -------------- | -------------------------------- | ---------------------------------- |\n| `icPageChange` | Emitted when a page is selected. | `CustomEvent<IcChangeEventDetail>` |\n\n\n## Methods\n\n### `setCurrentPage(page: number) => Promise<void>`\n\nSets the currently displayed page.\n\n#### Parameters\n\n| Name   | Type     | Description                                |\n| ------ | -------- | ------------------------------------------ |\n| `page` | `number` | The page number to set as the current page |\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-button](../ic-button)\n- [ic-pagination-item](../ic-pagination-item)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-pagination --\x3e ic-button\n  ic-pagination --\x3e ic-pagination-item\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-pagination-item --\x3e ic-typography\n  style ic-pagination fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Pagination",component:"Pagination"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"simple",children:"Simple"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Simple",children:args=>lit_html.dy`
        <p>Default/Dark/Light appearance</p>
        <ic-pagination pages="15"></ic-pagination>
        <br />
        <ic-pagination pages="15" appearance="dark"></ic-pagination>
        <br />
        <div
          style="background-color: black; width: fit-content; padding: 6px 8px;"
        >
          <ic-pagination pages="15" appearance="light"></ic-pagination>
        </div>
        <br />
        <p>Hidden current page</p>
        <ic-pagination pages="15" hide-current-page></ic-pagination>
        <br />
        <p>Hidden first and last page buttons</p>
        <ic-pagination
          pages="15"
          hide-first-and-last-page-button
        ></ic-pagination>
        <br />
        <p>Default page</p>
        <ic-pagination pages="15" default-page="3"></ic-pagination>
        <br />
        <p>Disabled</p>
        <ic-pagination pages="15" disabled></ic-pagination>
        <br />
        <p>Label set</p>
        <ic-pagination pages="15" label="Label"></ic-pagination>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"complex",children:"Complex"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Complex",children:args=>lit_html.dy`
        <p>Default/Dark/Light appearance</p>
        <ic-pagination pages="15" type="complex"></ic-pagination>
        <br />
        <ic-pagination
          pages="15"
          type="complex"
          appearance="dark"
        ></ic-pagination>
        <br />
        <div
          style="background-color: black; width: fit-content; padding: 6px 8px;"
        >
          <ic-pagination
            pages="15"
            type="complex"
            appearance="light"
          ></ic-pagination>
        </div>
        <br />
        <p>Hidden first and last buttons</p>
        <ic-pagination
          pages="15"
          type="complex"
          hide-first-and-last-page-button
        ></ic-pagination>
        <br />
        <p>Default page</p>
        <ic-pagination
          pages="15"
          type="complex"
          default-page="7"
        ></ic-pagination>
        <br />
        <p>Disabled</p>
        <ic-pagination pages="15" type="complex" disabled></ic-pagination>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"complex---adjacent--boundary-items-set",children:"Complex - Adjacent & Boundary Items Set"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Complex - Adjacent & Boundary Items Set",children:args=>lit_html.dy`
  <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="0"
        boundary-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 1</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="0"
        boundary-count="1"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="0"
        boundary-count="2"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="1"
        boundary-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="2"
        boundary-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 1</p>
      <ic-pagination pages="15" type="complex" ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="2"
        boundary-count="2"
      ></ic-pagination>
     `})})]})}const simple=args=>lit_html.dy`
        <p>Default/Dark/Light appearance</p>
        <ic-pagination pages="15"></ic-pagination>
        <br />
        <ic-pagination pages="15" appearance="dark"></ic-pagination>
        <br />
        <div
          style="background-color: black; width: fit-content; padding: 6px 8px;"
        >
          <ic-pagination pages="15" appearance="light"></ic-pagination>
        </div>
        <br />
        <p>Hidden current page</p>
        <ic-pagination pages="15" hide-current-page></ic-pagination>
        <br />
        <p>Hidden first and last page buttons</p>
        <ic-pagination
          pages="15"
          hide-first-and-last-page-button
        ></ic-pagination>
        <br />
        <p>Default page</p>
        <ic-pagination pages="15" default-page="3"></ic-pagination>
        <br />
        <p>Disabled</p>
        <ic-pagination pages="15" disabled></ic-pagination>
        <br />
        <p>Label set</p>
        <ic-pagination pages="15" label="Label"></ic-pagination>
      `;simple.storyName="Simple",simple.parameters={storySource:{source:'args => html`\n        <p>Default/Dark/Light appearance</p>\n        <ic-pagination pages="15"></ic-pagination>\n        <br />\n        <ic-pagination pages="15" appearance="dark"></ic-pagination>\n        <br />\n        <div\n          style="background-color: black; width: fit-content; padding: 6px 8px;"\n        >\n          <ic-pagination pages="15" appearance="light"></ic-pagination>\n        </div>\n        <br />\n        <p>Hidden current page</p>\n        <ic-pagination pages="15" hide-current-page></ic-pagination>\n        <br />\n        <p>Hidden first and last page buttons</p>\n        <ic-pagination\n          pages="15"\n          hide-first-and-last-page-button\n        ></ic-pagination>\n        <br />\n        <p>Default page</p>\n        <ic-pagination pages="15" default-page="3"></ic-pagination>\n        <br />\n        <p>Disabled</p>\n        <ic-pagination pages="15" disabled></ic-pagination>\n        <br />\n        <p>Label set</p>\n        <ic-pagination pages="15" label="Label"></ic-pagination>\n      `'}};const complex=args=>lit_html.dy`
        <p>Default/Dark/Light appearance</p>
        <ic-pagination pages="15" type="complex"></ic-pagination>
        <br />
        <ic-pagination
          pages="15"
          type="complex"
          appearance="dark"
        ></ic-pagination>
        <br />
        <div
          style="background-color: black; width: fit-content; padding: 6px 8px;"
        >
          <ic-pagination
            pages="15"
            type="complex"
            appearance="light"
          ></ic-pagination>
        </div>
        <br />
        <p>Hidden first and last buttons</p>
        <ic-pagination
          pages="15"
          type="complex"
          hide-first-and-last-page-button
        ></ic-pagination>
        <br />
        <p>Default page</p>
        <ic-pagination
          pages="15"
          type="complex"
          default-page="7"
        ></ic-pagination>
        <br />
        <p>Disabled</p>
        <ic-pagination pages="15" type="complex" disabled></ic-pagination>
      `;complex.storyName="Complex",complex.parameters={storySource:{source:'args => html`\n        <p>Default/Dark/Light appearance</p>\n        <ic-pagination pages="15" type="complex"></ic-pagination>\n        <br />\n        <ic-pagination\n          pages="15"\n          type="complex"\n          appearance="dark"\n        ></ic-pagination>\n        <br />\n        <div\n          style="background-color: black; width: fit-content; padding: 6px 8px;"\n        >\n          <ic-pagination\n            pages="15"\n            type="complex"\n            appearance="light"\n          ></ic-pagination>\n        </div>\n        <br />\n        <p>Hidden first and last buttons</p>\n        <ic-pagination\n          pages="15"\n          type="complex"\n          hide-first-and-last-page-button\n        ></ic-pagination>\n        <br />\n        <p>Default page</p>\n        <ic-pagination\n          pages="15"\n          type="complex"\n          default-page="7"\n        ></ic-pagination>\n        <br />\n        <p>Disabled</p>\n        <ic-pagination pages="15" type="complex" disabled></ic-pagination>\n      `'}};const complexAdjacentBoundaryItemsSet=args=>lit_html.dy`
  <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="0"
        boundary-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 1</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="0"
        boundary-count="1"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="0"
        boundary-count="2"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="1"
        boundary-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="2"
        boundary-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 1</p>
      <ic-pagination pages="15" type="complex" ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="2"
        boundary-count="2"
      ></ic-pagination>
     `;complexAdjacentBoundaryItemsSet.storyName="Complex - Adjacent & Boundary Items Set",complexAdjacentBoundaryItemsSet.parameters={storySource:{source:'args => html`\n  <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 0</p>\n      <ic-pagination\n        pages="15"\n        type="complex"\n        adjacent-count="0"\n        boundary-count="0"\n      ></ic-pagination>\n      <br/>\n      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 1</p>\n      <ic-pagination\n        pages="15"\n        type="complex"\n        adjacent-count="0"\n        boundary-count="1"\n      ></ic-pagination>\n      <br/>\n      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 2</p>\n      <ic-pagination\n        pages="15"\n        type="complex"\n        adjacent-count="0"\n        boundary-count="2"\n      ></ic-pagination>\n      <br/>\n      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 0</p>\n      <ic-pagination\n        pages="15"\n        type="complex"\n        adjacent-count="1"\n        boundary-count="0"\n      ></ic-pagination>\n      <br/>\n      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 0</p>\n      <ic-pagination\n        pages="15"\n        type="complex"\n        adjacent-count="2"\n        boundary-count="0"\n      ></ic-pagination>\n      <br/>\n      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 1</p>\n      <ic-pagination pages="15" type="complex" ></ic-pagination>\n      <br/>\n      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 2</p>\n      <ic-pagination\n        pages="15"\n        type="complex"\n        adjacent-count="2"\n        boundary-count="2"\n      ></ic-pagination>\n     `'}};const componentMeta={title:"Web Components/Pagination",tags:["stories-mdx"],includeStories:["simple","complex","complexAdjacentBoundaryItemsSet"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_pagination_stories=componentMeta,__namedExportsOrder=["simple","complex","complexAdjacentBoundaryItemsSet"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-pagination-ic-pagination-stories-mdx.203bc75c.iframe.bundle.js.map