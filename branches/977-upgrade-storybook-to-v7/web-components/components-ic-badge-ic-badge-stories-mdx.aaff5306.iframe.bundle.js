/*! For license information please see components-ic-badge-ic-badge-stories-mdx.aaff5306.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[953],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-badge/ic-badge.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,accessibleLabel:()=>accessibleLabel,custom:()=>custom,default:()=>ic_badge_stories,error:()=>error,hideBadge:()=>hideBadge,info:()=>info,light:()=>light,maxNumber:()=>maxNumber,neutral:()=>neutral,positionInline:()=>positionInline,positionNear:()=>positionNear,success:()=>success,warning:()=>warning});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-badge\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property          | Attribute          | Description                                                                                                                                                                             | Type                                                                              | Default     |\n| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------- |\n| `accessibleLabel` | `accessible-label` | The accessible label of the badge component to provide context for screen reader users.                                                                                                 | `string`                                                                          | `undefined` |\n| `customColor`     | `custom-color`     | The custom badge colour. This will only style the badge component if variant="custom". Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)". | ``#${string}` \\| `rgb(${string})` \\| `rgba(${string})``                           | `null`      |\n| `maxNumber`       | `max-number`       | The maximum number shown on the badge appended with a +. This will only be displayed if type="text" and textLabel is not empty.                                                         | `number`                                                                          | `undefined` |\n| `position`        | `position`         | The positioning of the badge in reference to the parent element.                                                                                                                        | `"far" \\| "inline" \\| "near"`                                                     | `"far"`     |\n| `size`            | `size`             | The size of the badge to be displayed.                                                                                                                                                  | `"default" \\| "large" \\| "small"`                                                 | `"default"` |\n| `textLabel`       | `text-label`       | The text displayed in the badge. This will only be displayed if type="text".                                                                                                            | `string`                                                                          | `undefined` |\n| `type`            | `type`             | The type of badge to be displayed.                                                                                                                                                      | `"dot" \\| "icon" \\| "text"`                                                       | `"text"`    |\n| `variant`         | `variant`          | The variant of the badge to be displayed.                                                                                                                                               | `"custom" \\| "error" \\| "info" \\| "light" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n| `visible`         | `visible`          | If `true`, the badge will be displayed.                                                                                                                                                 | `boolean`                                                                         | `true`      |\n\n\n## Methods\n\n### `hideBadge() => Promise<void>`\n\n<span style="color:red">**[DEPRECATED]**</span> This method should not be used anymore. Use visible prop to set badge visibility.<br/><br/>\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n### `showBadge() => Promise<void>`\n\n<span style="color:red">**[DEPRECATED]**</span> This method should not be used anymore. Use visible prop to set badge visibility.<br/><br/>\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot           | Description                                                    |\n| -------------- | -------------------------------------------------------------- |\n| `"badge-icon"` | Icon will be rendered inside the badge if type is set to icon. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-badge --\x3e ic-typography\n  style ic-badge fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Badge",component:"ic-badge"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"success",children:"Success"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Success",children:lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="success"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="success"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="success"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="success"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="success"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="success"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="success" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="success">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="success" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"error",children:"Error"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Error",children:lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="error"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="error"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="error"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="error"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="error"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="error"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="error" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="error">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="error" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning",children:"Warning"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Warning",children:lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="warning"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="warning"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="warning"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="warning"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="warning"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="warning"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="warning" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="warning">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="warning" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"neutral",children:"Neutral"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Neutral",children:lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="neutral"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="neutral"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="neutral"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="neutral"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="neutral"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="neutral"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="neutral" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="neutral">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="neutral" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light",children:"Light"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Light",children:lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="light"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="light"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="light"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="light"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="light"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="light"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="light" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="light">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="light" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"info",children:"Info"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Info",children:lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="info"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="info"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="info"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="info"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="info"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="info"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="info" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="info">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="info" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom",children:"Custom"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom",children:lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
          ></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
          ></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="icon"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="small"
          >
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="icon"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
          >
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="icon"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="large"
          >
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"max-number",children:"Max number"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Max number",children:lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1000"
            slot="badge"
            size="small"
            max-number="9"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1000" max-number="9" slot="badge"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1000"
            slot="badge"
            size="large"
            max-number="9"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1000"
            slot="badge"
            size="small"
            max-number="99"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1000" max-number="99" slot="badge"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1000"
            slot="badge"
            size="large"
            max-number="99"
          ></ic-badge
          >Large</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"position-near",children:"Position near"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Position near",children:lit_html.dy`<div style="padding:16px;">
        <ic-chip label="Small" style="margin-right:16px;"
          ><ic-badge
            text-label="1"
            slot="badge"
            position="near"
            size="small"
          ></ic-badge
        ></ic-chip>
        <ic-chip label="Default" style="margin-right:16px;"
          ><ic-badge text-label="1" slot="badge" position="near"></ic-badge
        ></ic-chip>
        <ic-chip label="Large"
          ><ic-badge
            text-label="1"
            slot="badge"
            position="near"
            size="large"
          ></ic-badge
        ></ic-chip>
      </div>
      <div style="padding:16px;">
        <ic-chip label="Small Dot" style="margin-right:16px;"
          ><ic-badge
            type="dot"
            slot="badge"
            position="near"
            size="small"
          ></ic-badge
        ></ic-chip>
        <ic-chip label="Default Dot" style="margin-right:16px;"
          ><ic-badge type="dot" slot="badge" position="near"></ic-badge
        ></ic-chip>
        <ic-chip label="Large Dot"
          ><ic-badge
            type="dot"
            slot="badge"
            position="near"
            size="large"
          ></ic-badge
        ></ic-chip>
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"position-inline",children:"Position inline"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Position inline",children:lit_html.dy`<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab
          >Small<ic-badge
            text-label="1"
            slot="badge"
            position="inline"
            size="small"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Default<ic-badge
            text-label="1"
            slot="badge"
            position="inline"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Large<ic-badge
            text-label="1"
            slot="badge"
            position="inline"
            size="large"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Small Dot<ic-badge
            type="dot"
            slot="badge"
            position="inline"
            size="small"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Dot<ic-badge type="dot" slot="badge" position="inline"></ic-badge
        ></ic-tab>
        <ic-tab
          >Large Dot<ic-badge
            type="dot"
            slot="badge"
            position="inline"
            size="large"
          ></ic-badge
        ></ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Default badge</ic-tab-panel>
      <ic-tab-panel>Small badge</ic-tab-panel>
      <ic-tab-panel>Large badge</ic-tab-panel>
      <ic-tab-panel>Small dot badge</ic-tab-panel>
      <ic-tab-panel>Default dot badge</ic-tab-panel>
      <ic-tab-panel>Large dot badge</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hide-badge",children:"Hide badge"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Hide badge",children:lit_html.dy`<script>
        function showHideBadge() {
          badge = document.querySelector("ic-badge");
          if (badge.classList.contains("show")) {
            badge.visible = false;
          } else {
            badge.visible = true;
          }
        }
      </script>
      <div style="padding:16px;">
        <ic-button variant="secondary" onclick="showHideBadge()"
          ><ic-badge text-label="1" slot="badge"></ic-badge>Show/Hide
          badge</ic-button
        >
      </div> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"accessible-label",children:"Accessible label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Accessible label",children:lit_html.dy`<div style="padding:16px;">
      <ic-button variant="secondary" style="margin-right:16px"
        ><ic-badge
          text-label="1"
          slot="badge"
          size="large"
          accessible-label="1 notification found"
        ></ic-badge
        >Default</ic-button
      >
      <ic-chip label="Default dot" dismissible="true"
        ><ic-badge
          type="dot"
          slot="badge"
          position="near"
          accessible-label="1 notification found"
        ></ic-badge
      ></ic-chip>
    </div> `})})]})}const success=()=>lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="success"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="success"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="success"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="success"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="success"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="success"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="success" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="success">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="success" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;success.storyName="Success",success.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="success"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="success"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="success"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="success"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="success"></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="success"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="success" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="success">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="success" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'}};const error=()=>lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="error"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="error"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="error"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="error"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="error"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="error"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="error" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="error">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="error" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;error.storyName="Error",error.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="error"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="error"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="error"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="error"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="error"></ic-badge>Default\n          Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="error"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="error" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="error">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="error" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'}};const warning=()=>lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="warning"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="warning"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="warning"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="warning"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="warning"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="warning"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="warning" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="warning">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="warning" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;warning.storyName="Warning",warning.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="warning"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="warning"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="warning"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="warning"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="warning"></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="warning"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="warning" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="warning">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="warning" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'}};const neutral=()=>lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="neutral"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="neutral"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="neutral"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="neutral"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="neutral"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="neutral"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="neutral" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="neutral">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="neutral" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;neutral.storyName="Neutral",neutral.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="neutral"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="neutral"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="neutral"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="neutral"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="neutral"></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="neutral"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="neutral" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="neutral">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="neutral" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'}};const light=()=>lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="light"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="light"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="light"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="light"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="light"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="light"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="light" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="light">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="light" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;light.storyName="Light",light.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="light"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="light"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="light"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="light"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="light"></ic-badge>Default\n          Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="light"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="light" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="light">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="light" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'}};const info=()=>lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="info"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1" slot="badge" variant="info"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="info"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="info"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="info"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="info"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="info" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="info">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="info" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;info.storyName="Info",info.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="info"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="info"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="info"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="info"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="info"></ic-badge>Default\n          Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="info"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="info" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="info">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="info" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'}};const custom=()=>lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
          ></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
          ></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="icon"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="small"
          >
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="icon"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
          >
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="icon"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="large"
          >
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;custom.storyName="Custom",custom.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n          ></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n          ></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="icon"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="small"\n          >\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="icon"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n          >\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="icon"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="large"\n          >\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'}};const maxNumber=()=>lit_html.dy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1000"
            slot="badge"
            size="small"
            max-number="9"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1000" max-number="9" slot="badge"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1000"
            slot="badge"
            size="large"
            max-number="9"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            text-label="1000"
            slot="badge"
            size="small"
            max-number="99"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge text-label="1000" max-number="99" slot="badge"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            text-label="1000"
            slot="badge"
            size="large"
            max-number="99"
          ></ic-badge
          >Large</ic-button
        >
      </div>`;maxNumber.storyName="Max number",maxNumber.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1000"\n            slot="badge"\n            size="small"\n            max-number="9"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1000" max-number="9" slot="badge"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1000"\n            slot="badge"\n            size="large"\n            max-number="9"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1000"\n            slot="badge"\n            size="small"\n            max-number="99"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1000" max-number="99" slot="badge"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1000"\n            slot="badge"\n            size="large"\n            max-number="99"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>`'}};const positionNear=()=>lit_html.dy`<div style="padding:16px;">
        <ic-chip label="Small" style="margin-right:16px;"
          ><ic-badge
            text-label="1"
            slot="badge"
            position="near"
            size="small"
          ></ic-badge
        ></ic-chip>
        <ic-chip label="Default" style="margin-right:16px;"
          ><ic-badge text-label="1" slot="badge" position="near"></ic-badge
        ></ic-chip>
        <ic-chip label="Large"
          ><ic-badge
            text-label="1"
            slot="badge"
            position="near"
            size="large"
          ></ic-badge
        ></ic-chip>
      </div>
      <div style="padding:16px;">
        <ic-chip label="Small Dot" style="margin-right:16px;"
          ><ic-badge
            type="dot"
            slot="badge"
            position="near"
            size="small"
          ></ic-badge
        ></ic-chip>
        <ic-chip label="Default Dot" style="margin-right:16px;"
          ><ic-badge type="dot" slot="badge" position="near"></ic-badge
        ></ic-chip>
        <ic-chip label="Large Dot"
          ><ic-badge
            type="dot"
            slot="badge"
            position="near"
            size="large"
          ></ic-badge
        ></ic-chip>
      </div>`;positionNear.storyName="Position near",positionNear.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-chip label="Small" style="margin-right:16px;"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            position="near"\n            size="small"\n          ></ic-badge\n        ></ic-chip>\n        <ic-chip label="Default" style="margin-right:16px;"\n          ><ic-badge text-label="1" slot="badge" position="near"></ic-badge\n        ></ic-chip>\n        <ic-chip label="Large"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            position="near"\n            size="large"\n          ></ic-badge\n        ></ic-chip>\n      </div>\n      <div style="padding:16px;">\n        <ic-chip label="Small Dot" style="margin-right:16px;"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            position="near"\n            size="small"\n          ></ic-badge\n        ></ic-chip>\n        <ic-chip label="Default Dot" style="margin-right:16px;"\n          ><ic-badge type="dot" slot="badge" position="near"></ic-badge\n        ></ic-chip>\n        <ic-chip label="Large Dot"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            position="near"\n            size="large"\n          ></ic-badge\n        ></ic-chip>\n      </div>`'}};const positionInline=()=>lit_html.dy`<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab
          >Small<ic-badge
            text-label="1"
            slot="badge"
            position="inline"
            size="small"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Default<ic-badge
            text-label="1"
            slot="badge"
            position="inline"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Large<ic-badge
            text-label="1"
            slot="badge"
            position="inline"
            size="large"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Small Dot<ic-badge
            type="dot"
            slot="badge"
            position="inline"
            size="small"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Dot<ic-badge type="dot" slot="badge" position="inline"></ic-badge
        ></ic-tab>
        <ic-tab
          >Large Dot<ic-badge
            type="dot"
            slot="badge"
            position="inline"
            size="large"
          ></ic-badge
        ></ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Default badge</ic-tab-panel>
      <ic-tab-panel>Small badge</ic-tab-panel>
      <ic-tab-panel>Large badge</ic-tab-panel>
      <ic-tab-panel>Small dot badge</ic-tab-panel>
      <ic-tab-panel>Default dot badge</ic-tab-panel>
      <ic-tab-panel>Large dot badge</ic-tab-panel>
    </ic-tab-context>`;positionInline.storyName="Position inline",positionInline.parameters={storySource:{source:'html`<ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab\n          >Small<ic-badge\n            text-label="1"\n            slot="badge"\n            position="inline"\n            size="small"\n            accessible-label="1 notification found"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Default<ic-badge\n            text-label="1"\n            slot="badge"\n            position="inline"\n            accessible-label="1 notification found"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Large<ic-badge\n            text-label="1"\n            slot="badge"\n            position="inline"\n            size="large"\n            accessible-label="1 notification found"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Small Dot<ic-badge\n            type="dot"\n            slot="badge"\n            position="inline"\n            size="small"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Dot<ic-badge type="dot" slot="badge" position="inline"></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Large Dot<ic-badge\n            type="dot"\n            slot="badge"\n            position="inline"\n            size="large"\n          ></ic-badge\n        ></ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Default badge</ic-tab-panel>\n      <ic-tab-panel>Small badge</ic-tab-panel>\n      <ic-tab-panel>Large badge</ic-tab-panel>\n      <ic-tab-panel>Small dot badge</ic-tab-panel>\n      <ic-tab-panel>Default dot badge</ic-tab-panel>\n      <ic-tab-panel>Large dot badge</ic-tab-panel>\n    </ic-tab-context>`'}};const hideBadge=()=>lit_html.dy`<script>
        function showHideBadge() {
          badge = document.querySelector("ic-badge");
          if (badge.classList.contains("show")) {
            badge.visible = false;
          } else {
            badge.visible = true;
          }
        }
      </script>
      <div style="padding:16px;">
        <ic-button variant="secondary" onclick="showHideBadge()"
          ><ic-badge text-label="1" slot="badge"></ic-badge>Show/Hide
          badge</ic-button
        >
      </div> `;hideBadge.storyName="Hide badge",hideBadge.parameters={storySource:{source:'html`<script>\n        function showHideBadge() {\n          badge = document.querySelector("ic-badge");\n          if (badge.classList.contains("show")) {\n            badge.visible = false;\n          } else {\n            badge.visible = true;\n          }\n        }\n      <\/script>\n      <div style="padding:16px;">\n        <ic-button variant="secondary" onclick="showHideBadge()"\n          ><ic-badge text-label="1" slot="badge"></ic-badge>Show/Hide\n          badge</ic-button\n        >\n      </div> `'}};const accessibleLabel=()=>lit_html.dy`<div style="padding:16px;">
      <ic-button variant="secondary" style="margin-right:16px"
        ><ic-badge
          text-label="1"
          slot="badge"
          size="large"
          accessible-label="1 notification found"
        ></ic-badge
        >Default</ic-button
      >
      <ic-chip label="Default dot" dismissible="true"
        ><ic-badge
          type="dot"
          slot="badge"
          position="near"
          accessible-label="1 notification found"
        ></ic-badge
      ></ic-chip>
    </div> `;accessibleLabel.storyName="Accessible label",accessibleLabel.parameters={storySource:{source:'html`<div style="padding:16px;">\n      <ic-button variant="secondary" style="margin-right:16px"\n        ><ic-badge\n          text-label="1"\n          slot="badge"\n          size="large"\n          accessible-label="1 notification found"\n        ></ic-badge\n        >Default</ic-button\n      >\n      <ic-chip label="Default dot" dismissible="true"\n        ><ic-badge\n          type="dot"\n          slot="badge"\n          position="near"\n          accessible-label="1 notification found"\n        ></ic-badge\n      ></ic-chip>\n    </div> `'}};const componentMeta={title:"Web Components/Badge",tags:["stories-mdx"],includeStories:["success","error","warning","neutral","light","info","custom","maxNumber","positionNear","positionInline","hideBadge","accessibleLabel"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_badge_stories=componentMeta,__namedExportsOrder=["success","error","warning","neutral","light","info","custom","maxNumber","positionNear","positionInline","hideBadge","accessibleLabel"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-badge-ic-badge-stories-mdx.aaff5306.iframe.bundle.js.map