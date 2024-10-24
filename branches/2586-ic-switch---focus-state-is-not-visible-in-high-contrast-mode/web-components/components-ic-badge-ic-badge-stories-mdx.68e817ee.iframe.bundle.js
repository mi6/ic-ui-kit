/*! For license information please see components-ic-badge-ic-badge-stories-mdx.68e817ee.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4695],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-badge/ic-badge.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,accessibleLabel:()=>accessibleLabel,custom:()=>custom,default:()=>ic_badge_stories,defaultArgs:()=>defaultArgs,error:()=>error,hideBadge:()=>hideBadge,info:()=>info,light:()=>light,maxNumber:()=>maxNumber,neutral:()=>neutral,playground:()=>playground,positionInline:()=>positionInline,positionNear:()=>positionNear,success:()=>success,warning:()=>warning});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-badge\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property          | Attribute          | Description                                                                                                                                                                             | Type                                                                              | Default     |\n| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------- |\n| `accessibleLabel` | `accessible-label` | The accessible label of the badge component to provide context for screen reader users.                                                                                                 | `string`                                                                          | `undefined` |\n| `customColor`     | `custom-color`     | The custom badge colour. This will only style the badge component if variant="custom". Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)". | ``#${string}` \\| `rgb(${string})` \\| `rgba(${string})``                           | `null`      |\n| `maxNumber`       | `max-number`       | The maximum number shown on the badge appended with a +. This will only be displayed if type="text" and textLabel is not empty.                                                         | `number`                                                                          | `undefined` |\n| `position`        | `position`         | The positioning of the badge in reference to the parent element.                                                                                                                        | `"far" \\| "inline" \\| "near"`                                                     | `"far"`     |\n| `size`            | `size`             | The size of the badge to be displayed.                                                                                                                                                  | `"default" \\| "large" \\| "small"`                                                 | `"default"` |\n| `textLabel`       | `text-label`       | The text displayed in the badge. This will only be displayed if type="text".                                                                                                            | `string`                                                                          | `undefined` |\n| `type`            | `type`             | The type of badge to be displayed.                                                                                                                                                      | `"dot" \\| "icon" \\| "text"`                                                       | `"text"`    |\n| `variant`         | `variant`          | The variant of the badge to be displayed.                                                                                                                                               | `"custom" \\| "error" \\| "info" \\| "light" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n| `visible`         | `visible`          | If `true`, the badge will be displayed.                                                                                                                                                 | `boolean`                                                                         | `true`      |\n\n\n## Methods\n\n### `hideBadge() => Promise<void>`\n\n<span style="color:red">**[DEPRECATED]**</span> This method should not be used anymore. Use visible prop to set badge visibility.<br/><br/>\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n### `showBadge() => Promise<void>`\n\n<span style="color:red">**[DEPRECATED]**</span> This method should not be used anymore. Use visible prop to set badge visibility.<br/><br/>\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot           | Description                                                    |\n| -------------- | -------------------------------------------------------------- |\n| `"badge-icon"` | Icon will be rendered inside the badge if type is set to icon. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-badge --\x3e ic-typography\n  style ic-badge fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={accessibleLabel:"notification",customColor:null,maxNumber:1e3,position:"far",size:"default",textLabel:"1",type:"text",variant:"neutral"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Badge",component:"ic-badge"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"success",children:"Success"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Success",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"error",children:"Error"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Error",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning",children:"Warning"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Warning",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"neutral",children:"Neutral"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Neutral",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light",children:"Light"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Light",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"info",children:"Info"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Info",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom",children:"Custom"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Custom",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"max-number",children:"Max number"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Max number",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="padding:16px;">
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
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"position-near",children:"Position near"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Position near",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="padding:16px;">
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
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"position-inline",children:"Position inline"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Position inline",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-tab-context>
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
      <ic-tab-panel>Small badge</ic-tab-panel>
      <ic-tab-panel>Default badge</ic-tab-panel>
      <ic-tab-panel>Large badge</ic-tab-panel>
      <ic-tab-panel>Small dot badge</ic-tab-panel>
      <ic-tab-panel>Default dot badge</ic-tab-panel>
      <ic-tab-panel>Large dot badge</ic-tab-panel>
    </ic-tab-context>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hide-badge",children:"Hide badge"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Hide badge",parameters:{loki:{skip:!0}},children:lit_html.qy`<script>
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
      </div> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"accessible-label",children:"Accessible label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Accessible label",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="padding:16px;">
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
          accessible-label="Notifications found"
        ></ic-badge
      ></ic-chip>
    </div> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{customColor:{control:{type:"text"}},position:{options:["far","near","inline"],control:{type:"radio"}},size:{options:["small","default","large"],control:{type:"radio"}},type:{options:["text","dot","icon"],control:{type:"radio"}},variant:{options:["neutral","success","warning","error","info","light","custom"],control:{type:"select"}}},name:"Playground",children:args=>lit_html.qy`<ic-button variant="secondary">
        <ic-badge
          slot="badge"
          accessible-label=${args.accessibleLabel}
          custom-color=${args.customColor}
          max-number=${args.maxNumber}
          position=${args.position}
          size=${args.size}
          text-label=${args.textLabel}
          type=${args.type}
          variant=${args.variant}
        >
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-badge>
        Default
      </ic-button>`})})]})}const success=()=>lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;success.storyName="Success",success.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="success"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="success"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="success"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="success"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="success"></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="success"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="success" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="success">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="success" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'},loki:{skip:!0}};const error=()=>lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;error.storyName="Error",error.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="error"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="error"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="error"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="error"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="error"></ic-badge>Default\n          Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="error"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="error" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="error">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="error" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'},loki:{skip:!0}};const warning=()=>lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;warning.storyName="Warning",warning.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="warning"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="warning"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="warning"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="warning"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="warning"></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="warning"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="warning" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="warning">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="warning" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'},loki:{skip:!0}};const neutral=()=>lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;neutral.storyName="Neutral",neutral.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="neutral"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="neutral"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="neutral"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="neutral"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="neutral"></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="neutral"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="neutral" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="neutral">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="neutral" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'},loki:{skip:!0}};const light=()=>lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;light.storyName="Light",light.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="light"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="light"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="light"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="light"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="light"></ic-badge>Default\n          Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="light"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="light" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="light">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="light" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'},loki:{skip:!0}};const info=()=>lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;info.storyName="Info",info.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="info"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1" slot="badge" variant="info"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="info"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="info"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="info"></ic-badge>Default\n          Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="info"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="info" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="info">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="info" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'},loki:{skip:!0}};const custom=()=>lit_html.qy`<div style="padding:16px;">
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
              aria-label="retry"
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
              aria-label="retry"
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
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`;custom.storyName="Custom",custom.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n          ></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n          ></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="icon"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="small"\n          >\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="icon"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n          >\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="icon"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="large"\n          >\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`'},loki:{skip:!0}};const maxNumber=()=>lit_html.qy`<div style="padding:16px;">
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
      </div>`;maxNumber.storyName="Max number",maxNumber.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1000"\n            slot="badge"\n            size="small"\n            max-number="9"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1000" max-number="9" slot="badge"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1000"\n            slot="badge"\n            size="large"\n            max-number="9"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            text-label="1000"\n            slot="badge"\n            size="small"\n            max-number="99"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge text-label="1000" max-number="99" slot="badge"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            text-label="1000"\n            slot="badge"\n            size="large"\n            max-number="99"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>`'},loki:{skip:!0}};const positionNear=()=>lit_html.qy`<div style="padding:16px;">
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
      </div>`;positionNear.storyName="Position near",positionNear.parameters={storySource:{source:'html`<div style="padding:16px;">\n        <ic-chip label="Small" style="margin-right:16px;"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            position="near"\n            size="small"\n          ></ic-badge\n        ></ic-chip>\n        <ic-chip label="Default" style="margin-right:16px;"\n          ><ic-badge text-label="1" slot="badge" position="near"></ic-badge\n        ></ic-chip>\n        <ic-chip label="Large"\n          ><ic-badge\n            text-label="1"\n            slot="badge"\n            position="near"\n            size="large"\n          ></ic-badge\n        ></ic-chip>\n      </div>\n      <div style="padding:16px;">\n        <ic-chip label="Small Dot" style="margin-right:16px;"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            position="near"\n            size="small"\n          ></ic-badge\n        ></ic-chip>\n        <ic-chip label="Default Dot" style="margin-right:16px;"\n          ><ic-badge type="dot" slot="badge" position="near"></ic-badge\n        ></ic-chip>\n        <ic-chip label="Large Dot"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            position="near"\n            size="large"\n          ></ic-badge\n        ></ic-chip>\n      </div>`'},loki:{skip:!0}};const positionInline=()=>lit_html.qy`<ic-tab-context>
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
      <ic-tab-panel>Small badge</ic-tab-panel>
      <ic-tab-panel>Default badge</ic-tab-panel>
      <ic-tab-panel>Large badge</ic-tab-panel>
      <ic-tab-panel>Small dot badge</ic-tab-panel>
      <ic-tab-panel>Default dot badge</ic-tab-panel>
      <ic-tab-panel>Large dot badge</ic-tab-panel>
    </ic-tab-context>`;positionInline.storyName="Position inline",positionInline.parameters={storySource:{source:'html`<ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab\n          >Small<ic-badge\n            text-label="1"\n            slot="badge"\n            position="inline"\n            size="small"\n            accessible-label="1 notification found"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Default<ic-badge\n            text-label="1"\n            slot="badge"\n            position="inline"\n            accessible-label="1 notification found"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Large<ic-badge\n            text-label="1"\n            slot="badge"\n            position="inline"\n            size="large"\n            accessible-label="1 notification found"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Small Dot<ic-badge\n            type="dot"\n            slot="badge"\n            position="inline"\n            size="small"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Dot<ic-badge type="dot" slot="badge" position="inline"></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Large Dot<ic-badge\n            type="dot"\n            slot="badge"\n            position="inline"\n            size="large"\n          ></ic-badge\n        ></ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Small badge</ic-tab-panel>\n      <ic-tab-panel>Default badge</ic-tab-panel>\n      <ic-tab-panel>Large badge</ic-tab-panel>\n      <ic-tab-panel>Small dot badge</ic-tab-panel>\n      <ic-tab-panel>Default dot badge</ic-tab-panel>\n      <ic-tab-panel>Large dot badge</ic-tab-panel>\n    </ic-tab-context>`'},loki:{skip:!0}};const hideBadge=()=>lit_html.qy`<script>
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
      </div> `;hideBadge.storyName="Hide badge",hideBadge.parameters={storySource:{source:'html`<script>\n        function showHideBadge() {\n          badge = document.querySelector("ic-badge");\n          if (badge.classList.contains("show")) {\n            badge.visible = false;\n          } else {\n            badge.visible = true;\n          }\n        }\n      <\/script>\n      <div style="padding:16px;">\n        <ic-button variant="secondary" onclick="showHideBadge()"\n          ><ic-badge text-label="1" slot="badge"></ic-badge>Show/Hide\n          badge</ic-button\n        >\n      </div> `'},loki:{skip:!0}};const accessibleLabel=()=>lit_html.qy`<div style="padding:16px;">
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
          accessible-label="Notifications found"
        ></ic-badge
      ></ic-chip>
    </div> `;accessibleLabel.storyName="Accessible label",accessibleLabel.parameters={storySource:{source:'html`<div style="padding:16px;">\n      <ic-button variant="secondary" style="margin-right:16px"\n        ><ic-badge\n          text-label="1"\n          slot="badge"\n          size="large"\n          accessible-label="1 notification found"\n        ></ic-badge\n        >Default</ic-button\n      >\n      <ic-chip label="Default dot" dismissible="true"\n        ><ic-badge\n          type="dot"\n          slot="badge"\n          position="near"\n          accessible-label="Notifications found"\n        ></ic-badge\n      ></ic-chip>\n    </div> `'},loki:{skip:!0}};const playground=args=>lit_html.qy`<ic-button variant="secondary">
        <ic-badge
          slot="badge"
          accessible-label=${args.accessibleLabel}
          custom-color=${args.customColor}
          max-number=${args.maxNumber}
          position=${args.position}
          size=${args.size}
          text-label=${args.textLabel}
          type=${args.type}
          variant=${args.variant}
        >
          <svg
            slot="badge-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            aria-label="retry"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-badge>
        Default
      </ic-button>`;playground.storyName="Playground",playground.argTypes={customColor:{control:{type:"text"}},position:{options:["far","near","inline"],control:{type:"radio"}},size:{options:["small","default","large"],control:{type:"radio"}},type:{options:["text","dot","icon"],control:{type:"radio"}},variant:{options:["neutral","success","warning","error","info","light","custom"],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`<ic-button variant="secondary">\n        <ic-badge\n          slot="badge"\n          accessible-label=${args.accessibleLabel}\n          custom-color=${args.customColor}\n          max-number=${args.maxNumber}\n          position=${args.position}\n          size=${args.size}\n          text-label=${args.textLabel}\n          type=${args.type}\n          variant=${args.variant}\n        >\n          <svg\n            slot="badge-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            aria-label="retry"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-badge>\n        Default\n      </ic-button>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Badge",tags:["stories-mdx"],includeStories:["success","error","warning","neutral","light","info","custom","maxNumber","positionNear","positionInline","hideBadge","accessibleLabel","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_badge_stories=componentMeta,__namedExportsOrder=["defaultArgs","success","error","warning","neutral","light","info","custom","maxNumber","positionNear","positionInline","hideBadge","accessibleLabel","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-badge-ic-badge-stories-mdx.68e817ee.iframe.bundle.js.map