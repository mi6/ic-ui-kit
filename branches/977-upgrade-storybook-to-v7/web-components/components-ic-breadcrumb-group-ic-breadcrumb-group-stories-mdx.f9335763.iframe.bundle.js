/*! For license information please see components-ic-breadcrumb-group-ic-breadcrumb-group-stories-mdx.f9335763.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2662],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-breadcrumb-group/ic-breadcrumb-group.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,appearance:()=>appearance,back:()=>back,collapsed:()=>collapsed,default:()=>ic_breadcrumb_group_stories,defaultStory:()=>defaultStory,icon:()=>icon,slottedLinks:()=>slottedLinks,slottedLinksCollapsed:()=>slottedLinksCollapsed});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-breadcrumb-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute              | Description                                                                         | Type                             | Default     |\n| -------------------- | ---------------------- | ----------------------------------------------------------------------------------- | -------------------------------- | ----------- |\n| `appearance`         | `appearance`           | The appearance of the breadcrumb group.                                             | `"dark" \\| "default" \\| "light"` | `"default"` |\n| `backBreadcrumbOnly` | `back-breadcrumb-only` | If `true`, display only a single breadcrumb for the parent page with a back icon.   | `boolean`                        | `false`     |\n| `collapsed`          | `collapsed`            | If `true`, all breadcrumbs between the first and last breadcrumb will be collapsed. | `boolean`                        | `false`     |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-breadcrumb](../ic-breadcrumb)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-breadcrumb-group --\x3e ic-breadcrumb\n  ic-breadcrumb --\x3e ic-link\n  style ic-breadcrumb-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_breadcrumb_readme_namespaceObject='# ic-breadcrumb\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute    | Description                                            | Type      | Default     |\n| ------------------------ | ------------ | ------------------------------------------------------ | --------- | ----------- |\n| `current`                | `current`    | If `true`, aria-current will be set on the breadcrumb. | `boolean` | `false`     |\n| `href`                   | `href`       | The URL that the breadcrumb link points to.            | `string`  | `undefined` |\n| `pageTitle` _(required)_ | `page-title` | The title of the breadcrumb.                           | `string`  | `undefined` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the breadcrumb.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot     | Description                                                        |\n| -------- | ------------------------------------------------------------------ |\n| `"icon"` | Content will be rendered to the left of the breadcrumb page title. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-breadcrumb-group](../ic-breadcrumb-group)\n\n### Depends on\n\n- [ic-link](../ic-link)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-breadcrumb --\x3e ic-link\n  ic-breadcrumb-group --\x3e ic-breadcrumb\n  style ic-breadcrumb fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Breadcrumb",component:"ic-breadcrumb-group"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject+ic_breadcrumb_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:lit_html.dy`
      <ic-breadcrumb-group>
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 3"
          href="/breadcrumb-3"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-links",children:"Slotted links"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Slotted links",children:lit_html.dy`
      <ic-breadcrumb-group>
        <ic-breadcrumb page-title="breadcrumb-1">
          <ic-link>
            <a slot="router-item" href="/breadcrumb-1"> Breadcrumb 1 </a>
          </ic-link>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb current="page" page-title="breadcrumb 1">
          Breadcrumb 1
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb page-title="breadcrumb-1">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-1"
              >Breadcrumb 1</a
            ></ic-link
          >
        </ic-breadcrumb>
        <ic-breadcrumb current="page" page-title="breadcrumb 2">
          Breadcrumb 2
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb page-title="breadcrumb 1">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-1"
              >Breadcrumb 1</a
            ></ic-link
          >
        </ic-breadcrumb>
        <ic-breadcrumb page-title="breadcrumb 2">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-2"
              >Breadcrumb 2</a
            ></ic-link
          >
        </ic-breadcrumb>
        <ic-breadcrumb current="page" page-title="breadcrumb 3">
          Breadcrumb 3
        </ic-breadcrumb>
      </ic-breadcrumb-group>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"back",children:"Back"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Back",children:lit_html.dy`
      <ic-breadcrumb-group back-breadcrumb-only="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group back-breadcrumb-only="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group back-breadcrumb-only="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 3"
          href="/breadcrumb-3"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"appearance",children:"Appearance"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Appearance",children:lit_html.dy`<ic-breadcrumb-group>
        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
        <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group back-breadcrumb-only="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb> </ic-breadcrumb-group
      ><ic-breadcrumb-group appearance="dark">
        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
        <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group appearance="dark" back-breadcrumb-only="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <div style="background-color: black; width: fit-content;">
        <ic-breadcrumb-group appearance="light">
          <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </ic-breadcrumb>
          <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </ic-breadcrumb>
        </ic-breadcrumb-group>
      </div>
      <div style="background-color: black; width: fit-content;">
        <ic-breadcrumb-group appearance="light" back-breadcrumb-only="true">
          <ic-breadcrumb
            page-title="Breadcrumb 1"
            href="/breadcrumb-1"
          ></ic-breadcrumb>
          <ic-breadcrumb
            current="true"
            page-title="Breadcrumb 2"
            href="/breadcrumb-2"
          ></ic-breadcrumb>
        </ic-breadcrumb-group>
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Icon",children:lit_html.dy`
      <ic-breadcrumb-group>
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
          current="true"
        >
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
        <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
        <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"collapsed",children:"Collapsed"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Collapsed",children:lit_html.dy`
      <ic-breadcrumb-group collapsed="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group collapsed="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="page"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group collapsed="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="page"
          page-title="Breadcrumb 3"
          href="/breadcrumb-3"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-links-collapsed",children:"Slotted links collapsed"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Slotted links collapsed",children:lit_html.dy`
      <ic-breadcrumb-group collapsed="true">
        <ic-breadcrumb page-title="breadcrumb 1">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-1"
              >Breadcrumb 1</a
            ></ic-link
          >
        </ic-breadcrumb>
        <ic-breadcrumb page-title="breadcrumb 2">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-2"
              >Breadcrumb 2</a
            ></ic-link
          >
        </ic-breadcrumb>
        <ic-breadcrumb current="page" page-title="breadcrumb 3">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-3"
              >Breadcrumb 3</a
            ></ic-link
          >
        </ic-breadcrumb>
      </ic-breadcrumb-group>
    `})})]})}const defaultStory=()=>lit_html.dy`
      <ic-breadcrumb-group>
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 3"
          href="/breadcrumb-3"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
    `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'html`\n      <ic-breadcrumb-group>\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group>\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group>\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 3"\n          href="/breadcrumb-3"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n    `'}};const slottedLinks=()=>lit_html.dy`
      <ic-breadcrumb-group>
        <ic-breadcrumb page-title="breadcrumb-1">
          <ic-link>
            <a slot="router-item" href="/breadcrumb-1"> Breadcrumb 1 </a>
          </ic-link>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb current="page" page-title="breadcrumb 1">
          Breadcrumb 1
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb page-title="breadcrumb-1">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-1"
              >Breadcrumb 1</a
            ></ic-link
          >
        </ic-breadcrumb>
        <ic-breadcrumb current="page" page-title="breadcrumb 2">
          Breadcrumb 2
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb page-title="breadcrumb 1">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-1"
              >Breadcrumb 1</a
            ></ic-link
          >
        </ic-breadcrumb>
        <ic-breadcrumb page-title="breadcrumb 2">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-2"
              >Breadcrumb 2</a
            ></ic-link
          >
        </ic-breadcrumb>
        <ic-breadcrumb current="page" page-title="breadcrumb 3">
          Breadcrumb 3
        </ic-breadcrumb>
      </ic-breadcrumb-group>
    `;slottedLinks.storyName="Slotted links",slottedLinks.parameters={storySource:{source:'html`\n      <ic-breadcrumb-group>\n        <ic-breadcrumb page-title="breadcrumb-1">\n          <ic-link>\n            <a slot="router-item" href="/breadcrumb-1"> Breadcrumb 1 </a>\n          </ic-link>\n        </ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group>\n        <ic-breadcrumb current="page" page-title="breadcrumb 1">\n          Breadcrumb 1\n        </ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group>\n        <ic-breadcrumb page-title="breadcrumb-1">\n          <ic-link\n            ><a slot="router-item" href="/breadcrumb-1"\n              >Breadcrumb 1</a\n            ></ic-link\n          >\n        </ic-breadcrumb>\n        <ic-breadcrumb current="page" page-title="breadcrumb 2">\n          Breadcrumb 2\n        </ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group>\n        <ic-breadcrumb page-title="breadcrumb 1">\n          <ic-link\n            ><a slot="router-item" href="/breadcrumb-1"\n              >Breadcrumb 1</a\n            ></ic-link\n          >\n        </ic-breadcrumb>\n        <ic-breadcrumb page-title="breadcrumb 2">\n          <ic-link\n            ><a slot="router-item" href="/breadcrumb-2"\n              >Breadcrumb 2</a\n            ></ic-link\n          >\n        </ic-breadcrumb>\n        <ic-breadcrumb current="page" page-title="breadcrumb 3">\n          Breadcrumb 3\n        </ic-breadcrumb>\n      </ic-breadcrumb-group>\n    `'}};const back=()=>lit_html.dy`
      <ic-breadcrumb-group back-breadcrumb-only="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group back-breadcrumb-only="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group back-breadcrumb-only="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 3"
          href="/breadcrumb-3"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
    `;back.storyName="Back",back.parameters={storySource:{source:'html`\n      <ic-breadcrumb-group back-breadcrumb-only="true">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group back-breadcrumb-only="true">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group back-breadcrumb-only="true">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 3"\n          href="/breadcrumb-3"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n    `'}};const appearance=()=>lit_html.dy`<ic-breadcrumb-group>
        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
        <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group back-breadcrumb-only="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb> </ic-breadcrumb-group
      ><ic-breadcrumb-group appearance="dark">
        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
        <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group appearance="dark" back-breadcrumb-only="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <div style="background-color: black; width: fit-content;">
        <ic-breadcrumb-group appearance="light">
          <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </ic-breadcrumb>
          <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </ic-breadcrumb>
        </ic-breadcrumb-group>
      </div>
      <div style="background-color: black; width: fit-content;">
        <ic-breadcrumb-group appearance="light" back-breadcrumb-only="true">
          <ic-breadcrumb
            page-title="Breadcrumb 1"
            href="/breadcrumb-1"
          ></ic-breadcrumb>
          <ic-breadcrumb
            current="true"
            page-title="Breadcrumb 2"
            href="/breadcrumb-2"
          ></ic-breadcrumb>
        </ic-breadcrumb-group>
      </div>`;appearance.storyName="Appearance",appearance.parameters={storySource:{source:'html`<ic-breadcrumb-group>\n        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            ></path>\n          </svg>\n        </ic-breadcrumb>\n        <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            ></path>\n          </svg>\n        </ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group back-breadcrumb-only="true">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb> </ic-breadcrumb-group\n      ><ic-breadcrumb-group appearance="dark">\n        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            ></path>\n          </svg>\n        </ic-breadcrumb>\n        <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            ></path>\n          </svg>\n        </ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group appearance="dark" back-breadcrumb-only="true">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <div style="background-color: black; width: fit-content;">\n        <ic-breadcrumb-group appearance="light">\n          <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              ></path>\n            </svg>\n          </ic-breadcrumb>\n          <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              ></path>\n            </svg>\n          </ic-breadcrumb>\n        </ic-breadcrumb-group>\n      </div>\n      <div style="background-color: black; width: fit-content;">\n        <ic-breadcrumb-group appearance="light" back-breadcrumb-only="true">\n          <ic-breadcrumb\n            page-title="Breadcrumb 1"\n            href="/breadcrumb-1"\n          ></ic-breadcrumb>\n          <ic-breadcrumb\n            current="true"\n            page-title="Breadcrumb 2"\n            href="/breadcrumb-2"\n          ></ic-breadcrumb>\n        </ic-breadcrumb-group>\n      </div>`'}};const icon=()=>lit_html.dy`
      <ic-breadcrumb-group>
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
          current="true"
        >
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
        <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group>
        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
        <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
    `;icon.storyName="Icon",icon.parameters={storySource:{source:'html`\n      <ic-breadcrumb-group>\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n          current="true"\n        >\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            ></path>\n          </svg>\n        </ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group>\n        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            ></path>\n          </svg>\n        </ic-breadcrumb>\n        <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            ></path>\n          </svg>\n        </ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group>\n        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            ></path>\n          </svg>\n        </ic-breadcrumb>\n        <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            ></path>\n          </svg>\n        </ic-breadcrumb>\n      </ic-breadcrumb-group>\n    `'}};const collapsed=()=>lit_html.dy`
      <ic-breadcrumb-group collapsed="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group collapsed="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="page"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group collapsed="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="page"
          page-title="Breadcrumb 3"
          href="/breadcrumb-3"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
    `;collapsed.storyName="Collapsed",collapsed.parameters={storySource:{source:'html`\n      <ic-breadcrumb-group collapsed="true">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group collapsed="true">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="page"\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-breadcrumb-group collapsed="true">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="page"\n          page-title="Breadcrumb 3"\n          href="/breadcrumb-3"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n    `'}};const slottedLinksCollapsed=()=>lit_html.dy`
      <ic-breadcrumb-group collapsed="true">
        <ic-breadcrumb page-title="breadcrumb 1">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-1"
              >Breadcrumb 1</a
            ></ic-link
          >
        </ic-breadcrumb>
        <ic-breadcrumb page-title="breadcrumb 2">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-2"
              >Breadcrumb 2</a
            ></ic-link
          >
        </ic-breadcrumb>
        <ic-breadcrumb current="page" page-title="breadcrumb 3">
          <ic-link
            ><a slot="router-item" href="/breadcrumb-3"
              >Breadcrumb 3</a
            ></ic-link
          >
        </ic-breadcrumb>
      </ic-breadcrumb-group>
    `;slottedLinksCollapsed.storyName="Slotted links collapsed",slottedLinksCollapsed.parameters={storySource:{source:'html`\n      <ic-breadcrumb-group collapsed="true">\n        <ic-breadcrumb page-title="breadcrumb 1">\n          <ic-link\n            ><a slot="router-item" href="/breadcrumb-1"\n              >Breadcrumb 1</a\n            ></ic-link\n          >\n        </ic-breadcrumb>\n        <ic-breadcrumb page-title="breadcrumb 2">\n          <ic-link\n            ><a slot="router-item" href="/breadcrumb-2"\n              >Breadcrumb 2</a\n            ></ic-link\n          >\n        </ic-breadcrumb>\n        <ic-breadcrumb current="page" page-title="breadcrumb 3">\n          <ic-link\n            ><a slot="router-item" href="/breadcrumb-3"\n              >Breadcrumb 3</a\n            ></ic-link\n          >\n        </ic-breadcrumb>\n      </ic-breadcrumb-group>\n    `'}};const componentMeta={title:"Web Components/Breadcrumb",tags:["stories-mdx"],includeStories:["defaultStory","slottedLinks","back","appearance","icon","collapsed","slottedLinksCollapsed"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_breadcrumb_group_stories=componentMeta,__namedExportsOrder=["defaultStory","slottedLinks","back","appearance","icon","collapsed","slottedLinksCollapsed"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-breadcrumb-group-ic-breadcrumb-group-stories-mdx.f9335763.iframe.bundle.js.map