/*! For license information please see components-ic-tree-view-ic-tree-view-stories-mdx.fcff1c3a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[6721],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-tree-view/ic-tree-view.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>ic_tree_view_stories,disabledTreeItems:()=>disabledTreeItems,large:()=>large,light:()=>light,link:()=>ic_tree_view_stories_link,maxContent:()=>maxContent,nested:()=>nested,routerItem:()=>routerItem,selectedTreeItem:()=>selectedTreeItem,slottedContent:()=>slottedContent,small:()=>small,withIcons:()=>withIcons});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const readme_namespaceObject='# ic-tree-view\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property     | Attribute    | Description                                           | Type                             | Default    |\n| ------------ | ------------ | ----------------------------------------------------- | -------------------------------- | ---------- |\n| `appearance` | `appearance` | The appearance of the tree view, e.g. dark, or light. | `"dark" \\| "light"`              | `"dark"`   |\n| `heading`    | `heading`    | The heading of the tree view.                         | `string`                         | `""`       |\n| `size`       | `size`       | The size of the tree view.                            | `"large" \\| "medium" \\| "small"` | `"medium"` |\n\n\n## Slots\n\n| Slot        | Description                                   |\n| ----------- | --------------------------------------------- |\n| `"heading"` | Content is set as the tree view heading.      |\n| `"icon"`    | Content is placed to the left of the heading. |\n\n\n## CSS Custom Properties\n\n| Name                | Description            |\n| ------------------- | ---------------------- |\n| `--tree-view-width` | Width of the tree view |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-tooltip\n- ic-typography\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tree-view --\x3e ic-tooltip\n  ic-tree-view --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-tree-view fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_tree_item_readme_namespaceObject='# ic-tree-item\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                                                    | Type                                                                                                                                                                                     | Default     |\n| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `disabled`       | `disabled`       | If `true`, the tree item appears in the disabled state.                                                                        | `boolean`                                                                                                                                                                                | `false`     |\n| `href`           | `href`           | The URL that the tree item link points to. If set, the tree item will render as an "a" tag, otherwise it will render as a div. | `string`                                                                                                                                                                                 | `undefined` |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                                                          | `string`                                                                                                                                                                                 | `""`        |\n| `label`          | `label`          | The label of the tree item.                                                                                                    | `string`                                                                                                                                                                                 | `""`        |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                                                      | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                                              | `string`                                                                                                                                                                                 | `undefined` |\n| `selected`       | `selected`       | If `true`, the tree item appears in the selected state.                                                                        | `boolean`                                                                                                                                                                                | `false`     |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                            | `string`                                                                                                                                                                                 | `undefined` |\n\n\n## Events\n\n| Event                | Description                         | Type                           |\n| -------------------- | ----------------------------------- | ------------------------------ |\n| `icTreeItemSelected` | Emitted when tree item is selected. | `CustomEvent<{ id: string; }>` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the native `input`.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot            | Description                                         |\n| --------------- | --------------------------------------------------- |\n| `"icon"`        | Content is placed to the left of the label.         |\n| `"label"`       | Content is set as the tree item label.              |\n| `"router-item"` | Handle routing by nesting your routes in this slot. |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-tooltip\n- ic-typography\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tree-item --\x3e ic-tooltip\n  ic-tree-item --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-tree-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h3:"h3",h4:"h4",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Tree view",component:"ic-tree-view",parameters:{componentAPI:{data:readme_namespaceObject+ic_tree_item_readme_namespaceObject}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"canary-tree-view",children:"[Canary]: Tree view"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use the tree view component to display hierarchical data in a tree structure. The tree view component is useful for displaying nested data, such as a file system or a category hierarchy."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Click the 'Component API' tab to view all the available attributes, events and slots for tree view."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use the tree view component, import ",(0,jsx_runtime.jsx)(_components.code,{children:"@ukic/canary-web-components"})," into your application."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A basic example with one level of tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Basic",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee"></ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"basic-code-example",children:"Basic code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <ic-tree-item label="Coffee"></ic-tree-item>\n  <ic-tree-item label="Tea"></ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"nested",children:"Nested"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with nested tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Nested",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee">
            <ic-tree-item label="Americano">
              <ic-tree-item label="With milk"></ic-tree-item>
            </ic-tree-item>
            <ic-tree-item label="Latte"></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"nested-code-example",children:"Nested code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <ic-tree-item label="Coffee">\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte"></ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icons",children:"With icons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with icons."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"With icons",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"icon-code-example",children:"Icon code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte">\n      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n        <path\n          d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n        />\n      </svg>\n    </ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with small styling passed down from tree view to tree items and nested tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Small",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" size="small">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"small-code-example",children:"Small code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu" size="small">\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte">\n      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n        <path\n          d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n        />\n      </svg>\n    </ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"large",children:"Large"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with large styling passed down from tree view to tree items and nested tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Large",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" size="large">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"large-code-example",children:"Large code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu" size="large">\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte">\n      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n        <path\n          d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n        />\n      </svg>\n    </ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"appearance-light",children:"Appearance light"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with a light appearance."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Light",parameters:{backgrounds:{default:"dark"},loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px;">
        <ic-tree-view heading="Menu" appearance="light">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"appearance-light-code-example",children:"Appearance light code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu" appearance="light">\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte">\n      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n        <path\n          d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n        />\n      </svg>\n    </ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-tree-items",children:"Disabled tree items"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with disabled tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled tree items",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte" disabled="true">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai" disabled="true"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"disabled-tree-items-code-example",children:"Disabled tree items code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte" disabled="true">\n      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n        <path\n          d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n        />\n      </svg>\n    </ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai" disabled="true"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"router-item",children:"Router item"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with a tree item that is replaced by a router item."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Router item",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item>
            <a slot="router-item" href="/">Slotted coffee</a>
          </ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"router-item-code-example",children:"Router item code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <ic-tree-item>\n    <a slot="router-item" href="/">Slotted coffee</a>\n  </ic-tree-item>\n  <ic-tree-item label="Tea"></ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-content",children:"Slotted content"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with slotted content for tree view heading and slotted content for tree item label."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted content",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view>
          <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>
          <ic-tree-item>
            <ic-typography slot="label">Coffee<ic-typography>
          </ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"slotted-content-code-example",children:"Slotted content code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view>\n  <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>\n  <ic-tree-item>\n    <ic-typography slot="label">Coffee</ic-typography>\n  </ic-tree-item>\n  <ic-tree-item label="Tea"></ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"max-content",children:"Max content"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with max content. When the heading/label exceeds the width of the container, it will be truncated with an ellipsis."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Max content",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu with nested options">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item
              label="Latte with extra milk and sugar"
            ></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"max-content-code-example",children:"Max content code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu with nested options">\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"selected-tree-item",children:"Selected tree item"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["An example where the tree item with ",(0,jsx_runtime.jsx)(_components.code,{children:'selected="true"'})," is selected on initial render."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Selected tree item",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee"></ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"selected-tree-item-code-example",children:"Selected tree item code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <ic-tree-item label="Coffee"></ic-tree-item>\n  <ic-tree-item label="Tea"></ic-tree-item>\n  <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"link",children:"Link"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example where the tree item is rendered as a link."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Link",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee" href="#"></ic-tree-item>
          <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>
          <ic-tree-item
            label="Hot chocolate"
            disabled="true"
            href="#"
          ></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"link-code-example",children:"Link code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <ic-tree-item label="Coffee" href="#"></ic-tree-item>\n  <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>\n  <ic-tree-item label="Hot chocolate" disabled="true" href="#"></ic-tree-item>\n</ic-tree-view>\n'})})]})}const basic=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee"></ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;basic.storyName="Basic",basic.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <ic-tree-item label="Coffee"></ic-tree-item>\n          <ic-tree-item label="Tea"></ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},loki:{skip:!0}};const nested=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee">
            <ic-tree-item label="Americano">
              <ic-tree-item label="With milk"></ic-tree-item>
            </ic-tree-item>
            <ic-tree-item label="Latte"></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;nested.storyName="Nested",nested.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <ic-tree-item label="Coffee">\n            <ic-tree-item label="Americano">\n              <ic-tree-item label="With milk"></ic-tree-item>\n            </ic-tree-item>\n            <ic-tree-item label="Latte"></ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},loki:{skip:!0}};const withIcons=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;withIcons.storyName="With icons",withIcons.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item label="Latte">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n              >\n                <path\n                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n                />\n              </svg>\n            </ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},loki:{skip:!0}};const small=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" size="small">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;small.storyName="Small",small.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu" size="small">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item label="Latte">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n              >\n                <path\n                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n                />\n              </svg>\n            </ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},loki:{skip:!0}};const large=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" size="large">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;large.storyName="Large",large.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu" size="large">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item label="Latte">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n              >\n                <path\n                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n                />\n              </svg>\n            </ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},loki:{skip:!0}};const light=()=>lit_html.qy`
      <div style="width:250px;">
        <ic-tree-view heading="Menu" appearance="light">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;light.storyName="Light",light.parameters={storySource:{source:'html`\n      <div style="width:250px;">\n        <ic-tree-view heading="Menu" appearance="light">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item label="Latte">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n              >\n                <path\n                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n                />\n              </svg>\n            </ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},backgrounds:{default:"dark"},loki:{skip:!0}};const disabledTreeItems=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte" disabled="true">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai" disabled="true"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;disabledTreeItems.storyName="Disabled tree items",disabledTreeItems.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item label="Latte" disabled="true">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n              >\n                <path\n                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n                />\n              </svg>\n            </ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai" disabled="true"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},loki:{skip:!0}};const routerItem=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item>
            <a slot="router-item" href="/">Slotted coffee</a>
          </ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;routerItem.storyName="Router item",routerItem.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <ic-tree-item>\n            <a slot="router-item" href="/">Slotted coffee</a>\n          </ic-tree-item>\n          <ic-tree-item label="Tea"></ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},loki:{skip:!0}};const slottedContent=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view>
          <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>
          <ic-tree-item>
            <ic-typography slot="label">Coffee<ic-typography>
          </ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;slottedContent.storyName="Slotted content",slottedContent.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view>\n          <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>\n          <ic-tree-item>\n            <ic-typography slot="label">Coffee<ic-typography>\n          </ic-tree-item>\n          <ic-tree-item label="Tea"></ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},loki:{skip:!0}};const maxContent=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu with nested options">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item
              label="Latte with extra milk and sugar"
            ></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;maxContent.storyName="Max content",maxContent.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu with nested options">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item\n              label="Latte with extra milk and sugar"\n            ></ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},loki:{skip:!0}};const selectedTreeItem=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee"></ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;selectedTreeItem.storyName="Selected tree item",selectedTreeItem.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <ic-tree-item label="Coffee"></ic-tree-item>\n          <ic-tree-item label="Tea"></ic-tree-item>\n          <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},loki:{skip:!0}};const ic_tree_view_stories_link=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee" href="#"></ic-tree-item>
          <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>
          <ic-tree-item
            label="Hot chocolate"
            disabled="true"
            href="#"
          ></ic-tree-item>
        </ic-tree-view>
      </div>
    `;ic_tree_view_stories_link.storyName="Link",ic_tree_view_stories_link.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <ic-tree-item label="Coffee" href="#"></ic-tree-item>\n          <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>\n          <ic-tree-item\n            label="Hot chocolate"\n            disabled="true"\n            href="#"\n          ></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'},loki:{skip:!0}};const componentMeta={title:"Web Components/Tree view",parameters:{componentAPI:{data:readme_namespaceObject+ic_tree_item_readme_namespaceObject}},tags:["stories-mdx"],includeStories:["basic","nested","withIcons","small","large","light","disabledTreeItems","routerItem","slottedContent","maxContent","selectedTreeItem","link"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_tree_view_stories=componentMeta,__namedExportsOrder=["basic","nested","withIcons","small","large","light","disabledTreeItems","routerItem","slottedContent","maxContent","selectedTreeItem","link"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-tree-view-ic-tree-view-stories-mdx.fcff1c3a.iframe.bundle.js.map