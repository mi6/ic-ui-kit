/*! For license information please see components-ic-text-field-ic-text-field-stories-mdx.f5ae4206.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7433],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-text-field/ic-text-field.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,customWidth:()=>customWidth,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,disabled:()=>disabled,form:()=>form,fullWidth:()=>fullWidth,helperText:()=>helperText,loggingIcChange:()=>loggingIcChange,maxLength:()=>maxLength,maxLengthMessage:()=>maxLengthMessage,maximumAndMinimumCharacters:()=>maximumAndMinimumCharacters,minAndMax:()=>minAndMax,placeholderAndRequired:()=>placeholderAndRequired,readOnly:()=>readOnly,textAreaWithResize:()=>textAreaWithResize,validation:()=>validation,withIcon:()=>withIcon,withValue:()=>withValue});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit-html/lit-html.js"),_readme_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ic-text-field/readme.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Web Components/Text field",component:"ic-text-field"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.VY,{markdown:_readme_md__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Default",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field label="What is your favourite coffee?">
        </ic-text-field>
        <ic-text-field rows="6" label="What is your favourite coffee?">
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"placeholder-and-required",children:"Placeholder and required"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Placeholder and required",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
        >
        </ic-text-field>
        <ic-text-field
          rows="6"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
        >
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Helper text",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
        </ic-text-field>
        <ic-text-field
          rows="6"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"with-icon",children:"With icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"With icon",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"with-value",children:"With value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"With value",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"max-length",children:"Max length"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Max length",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          max-length="25"
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          max-length="25"
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"max-length-message",children:"Max length message"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Max length message",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          max-length="25"
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
          max-length-message="You have exceeded the maximum length"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          max-length="25"
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
          max-length-message="You have exceeded the maximum length"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"custom-width",children:"Custom width"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Custom width",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<style>
          ic-text-field {
            --input-width: 400px;
          }
        </style>
        <ic-text-field
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          size="small"
          required="true"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          value="Arabica"
          max-length="25"
          resize
          label="What is your favourite coffee?"
          size="small"
          required="true"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Full width",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="display: flex">
          <ic-text-field
            full-width="true"
            value="Arabica"
            max-length="25"
            label="What is your favourite coffee?"
            size="small"
            required="true"
            placeholder="Placeholder"
            helper-text="Such as Arabica, Robusta or Liberica"
          >
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
              />
            </svg>
          </ic-text-field>
        </div>
        <ic-text-field
          full-width="true"
          rows="6"
          value="Arabica"
          max-length="25"
          resize
          label="What is your favourite coffee?"
          size="small"
          required="true"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Disabled",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          value="Arabica"
          label="What is your favourite coffee?"
          disabled
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          value="Arabica"
          rows="6"
          label="What is your favourite coffee?"
          disabled
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          disabled
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          disabled
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"read-only",children:"Read only"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Read only",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          readonly
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          readonly
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          readonly
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
        </ic-text-field>
        <ic-text-field
          rows="6"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          readonly
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Validation",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          validation-status="success"
          validation-text="Good choice!"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          validation-status="success"
          validation-text="Good choice!"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta, Liberica or something else to make this label long"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="success"
          validation-text="Good choice!"
          validation-inline="true"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="success"
          validation-text="Good choice!"
          validation-inline="true"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          size="small"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="warning"
          validation-text="A very long warning message to test if wrapping works"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          validation-status="warning"
          validation-text="A very long warning message to test if wrapping works"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="Tea"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="Tea"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="Tea with milk and 2 sugars"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="Tea with milk and 2 sugars"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="6"
          inputmode="numeric"
          label="How many coffees do you want?"
          helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
          type="number"
          min="1"
          max="4"
          required
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="0"
          inputmode="numeric"
          label="How many coffees do you want?"
          helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
          type="number"
          min="1"
          max="4"
          required
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="error"
          validation-text="I'm not familiar with this type of coffee"
          validation-inline-internal="true"
          value="Milkshake"
          label="What is your favourite coffee?"
          required
          hide-label
          size="small"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        ></ic-text-field>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"text-area-with-resize",children:"Text area with resize"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Text area with resize",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
        rows="6"
        value="Arabica"
        max-length="25"
        resize
        label="What is your favourite coffee?"
        size="small"
        required="true"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"form---this-shows-how-the-text-field-works-within-a-form-the-field-value-will-appear-in-the-consolelog",children:"Form - This shows how the text field works within a form. The field value will appear in the console.log"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Form",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
        <form>
          <ic-text-field label="What is your favourite coffee?"></ic-text-field>
          <br />
          <br />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(
              document.querySelector('input[name="ic-text-field-input-0"]')
                .value
            );
          });
        </script>
      `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"min-and-max",children:"Min and max"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Min and max",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
      >
      </ic-text-field>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"logging-icchange",children:"Logging icChange"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Logging icChange",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<script>
          function handleIcChange(ev) {
            console.log(ev.detail.value, "icChange");
          }
          document
            .querySelector("ic-text-field")
            .addEventListener("icChange", handleIcChange);
        </script>
        <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"maximum-and-minimum-characters",children:"Maximum and minimum characters"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Maximum and minimum characters",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          max-characters="2"
          label="What is your favourite coffee?"
          helper-text="Short answers only."
        >
        </ic-text-field>
        <ic-text-field
          min-characters="3"
          label="What is your favourite coffee?"
          helper-text="Long answer please."
        >
        </ic-text-field> `})})]})}const defaultStory=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field label="What is your favourite coffee?">
        </ic-text-field>
        <ic-text-field rows="6" label="What is your favourite coffee?">
        </ic-text-field> `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`<ic-text-field label="What is your favourite coffee?">\n        </ic-text-field>\n        <ic-text-field rows="6" label="What is your favourite coffee?">\n        </ic-text-field> `'},loki:{skip:!0}};const placeholderAndRequired=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
        >
        </ic-text-field>
        <ic-text-field
          rows="6"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
        >
        </ic-text-field> `;placeholderAndRequired.storyName="Placeholder and required",placeholderAndRequired.parameters={storySource:{source:'args => html`<ic-text-field\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n        >\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n        >\n        </ic-text-field> `'},loki:{skip:!0}};const helperText=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
        </ic-text-field>
        <ic-text-field
          rows="6"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
        </ic-text-field> `;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'args => html`<ic-text-field\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n        </ic-text-field> `'},loki:{skip:!0}};const withIcon=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `;withIcon.storyName="With icon",withIcon.parameters={storySource:{source:'args => html`<ic-text-field\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'},loki:{skip:!0}};const withValue=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `;withValue.storyName="With value",withValue.parameters={storySource:{source:'args => html`<ic-text-field\n          value="Arabica"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          value="Arabica"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'},loki:{skip:!0}};const maxLength=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          max-length="25"
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          max-length="25"
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `;maxLength.storyName="Max length",maxLength.parameters={storySource:{source:'args => html`<ic-text-field\n          max-length="25"\n          value="Arabica"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          max-length="25"\n          value="Arabica"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'},loki:{skip:!0}};const maxLengthMessage=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          max-length="25"
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
          max-length-message="You have exceeded the maximum length"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          max-length="25"
          value="Arabica"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
          max-length-message="You have exceeded the maximum length"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `;maxLengthMessage.storyName="Max length message",maxLengthMessage.parameters={storySource:{source:'args => html`<ic-text-field\n          max-length="25"\n          value="Arabica"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n          max-length-message="You have exceeded the maximum length"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          max-length="25"\n          value="Arabica"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n          max-length-message="You have exceeded the maximum length"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'},loki:{skip:!0}};const customWidth=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<style>
          ic-text-field {
            --input-width: 400px;
          }
        </style>
        <ic-text-field
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          size="small"
          required="true"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          value="Arabica"
          max-length="25"
          resize
          label="What is your favourite coffee?"
          size="small"
          required="true"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `;customWidth.storyName="Custom width",customWidth.parameters={storySource:{source:'args => html`<style>\n          ic-text-field {\n            --input-width: 400px;\n          }\n        </style>\n        <ic-text-field\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          size="small"\n          required="true"\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          value="Arabica"\n          max-length="25"\n          resize\n          label="What is your favourite coffee?"\n          size="small"\n          required="true"\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'},loki:{skip:!0}};const fullWidth=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="display: flex">
          <ic-text-field
            full-width="true"
            value="Arabica"
            max-length="25"
            label="What is your favourite coffee?"
            size="small"
            required="true"
            placeholder="Placeholder"
            helper-text="Such as Arabica, Robusta or Liberica"
          >
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
              />
            </svg>
          </ic-text-field>
        </div>
        <ic-text-field
          full-width="true"
          rows="6"
          value="Arabica"
          max-length="25"
          resize
          label="What is your favourite coffee?"
          size="small"
          required="true"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'args => html`<div style="display: flex">\n          <ic-text-field\n            full-width="true"\n            value="Arabica"\n            max-length="25"\n            label="What is your favourite coffee?"\n            size="small"\n            required="true"\n            placeholder="Placeholder"\n            helper-text="Such as Arabica, Robusta or Liberica"\n          >\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0z" fill="none" />\n              <path\n                d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n              />\n            </svg>\n          </ic-text-field>\n        </div>\n        <ic-text-field\n          full-width="true"\n          rows="6"\n          value="Arabica"\n          max-length="25"\n          resize\n          label="What is your favourite coffee?"\n          size="small"\n          required="true"\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'},loki:{skip:!0}};const disabled=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          value="Arabica"
          label="What is your favourite coffee?"
          disabled
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          value="Arabica"
          rows="6"
          label="What is your favourite coffee?"
          disabled
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          disabled
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          disabled
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field> `;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html`<ic-text-field\n          value="Arabica"\n          label="What is your favourite coffee?"\n          disabled\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          value="Arabica"\n          rows="6"\n          label="What is your favourite coffee?"\n          disabled\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          disabled\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          disabled\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'},loki:{skip:!0}};const readOnly=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          readonly
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          readonly
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          readonly
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
        </ic-text-field>
        <ic-text-field
          rows="6"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          readonly
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
        </ic-text-field> `;readOnly.storyName="Read only",readOnly.parameters={storySource:{source:'args => html`<ic-text-field\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          readonly\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          readonly\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          readonly\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          readonly\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n        </ic-text-field> `'},loki:{skip:!0}};const validation=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          validation-status="success"
          validation-text="Good choice!"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          validation-status="success"
          validation-text="Good choice!"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta, Liberica or something else to make this label long"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="success"
          validation-text="Good choice!"
          validation-inline="true"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="success"
          validation-text="Good choice!"
          validation-inline="true"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          size="small"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="warning"
          validation-text="A very long warning message to test if wrapping works"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          validation-status="warning"
          validation-text="A very long warning message to test if wrapping works"
          value="Arabica"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="Tea"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="Tea"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="Tea with milk and 2 sugars"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          rows="6"
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="Tea with milk and 2 sugars"
          max-length="25"
          label="What is your favourite coffee?"
          required
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="6"
          inputmode="numeric"
          label="How many coffees do you want?"
          helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
          type="number"
          min="1"
          max="4"
          required
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          value="0"
          inputmode="numeric"
          label="How many coffees do you want?"
          helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
          type="number"
          min="1"
          max="4"
          required
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
        <ic-text-field
          validation-status="error"
          validation-text="I'm not familiar with this type of coffee"
          validation-inline-internal="true"
          value="Milkshake"
          label="What is your favourite coffee?"
          required
          hide-label
          size="small"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        ></ic-text-field>`;validation.storyName="Validation",validation.parameters={storySource:{source:'args => html`<ic-text-field\n          validation-status="success"\n          validation-text="Good choice!"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          validation-status="success"\n          validation-text="Good choice!"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta, Liberica or something else to make this label long"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="success"\n          validation-text="Good choice!"\n          validation-inline="true"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="success"\n          validation-text="Good choice!"\n          validation-inline="true"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          size="small"\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="warning"\n          validation-text="A very long warning message to test if wrapping works"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          validation-status="warning"\n          validation-text="A very long warning message to test if wrapping works"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="Tea"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="Tea"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="Tea with milk and 2 sugars"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="Tea with milk and 2 sugars"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="6"\n          inputmode="numeric"\n          label="How many coffees do you want?"\n          helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."\n          type="number"\n          min="1"\n          max="4"\n          required\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="0"\n          inputmode="numeric"\n          label="How many coffees do you want?"\n          helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."\n          type="number"\n          min="1"\n          max="4"\n          required\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="error"\n          validation-text="I\'m not familiar with this type of coffee"\n          validation-inline-internal="true"\n          value="Milkshake"\n          label="What is your favourite coffee?"\n          required\n          hide-label\n          size="small"\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        ></ic-text-field>`'},loki:{skip:!0}};const textAreaWithResize=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
        rows="6"
        value="Arabica"
        max-length="25"
        resize
        label="What is your favourite coffee?"
        size="small"
        required="true"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `;textAreaWithResize.storyName="Text area with resize",textAreaWithResize.parameters={storySource:{source:'args => html`<ic-text-field\n        rows="6"\n        value="Arabica"\n        max-length="25"\n        resize\n        label="What is your favourite coffee?"\n        size="small"\n        required="true"\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field> `'},loki:{skip:!0}};const form=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
        <form>
          <ic-text-field label="What is your favourite coffee?"></ic-text-field>
          <br />
          <br />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(
              document.querySelector('input[name="ic-text-field-input-0"]')
                .value
            );
          });
        </script>
      `;form.storyName="Form",form.parameters={storySource:{source:'args => html`\n        <form>\n          <ic-text-field label="What is your favourite coffee?"></ic-text-field>\n          <br />\n          <br />\n          <input type="submit" value="Submit" />\n          <input type="reset" value="Reset" />\n        </form>\n        <script>\n          document.querySelector("form").addEventListener("submit", (ev) => {\n            ev.preventDefault();\n            console.log(\n              document.querySelector(\'input[name="ic-text-field-input-0"]\')\n                .value\n            );\n          });\n        <\/script>\n      `'},loki:{skip:!0}};const minAndMax=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
      >
      </ic-text-field>`;minAndMax.storyName="Min and max",minAndMax.parameters={storySource:{source:'args => html`<ic-text-field\n        inputmode="numeric"\n        label="How many coffees do you want?"\n        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."\n        type="number"\n        min="1"\n        max="4"\n      >\n      </ic-text-field>`'},loki:{skip:!0}};const loggingIcChange=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<script>
          function handleIcChange(ev) {
            console.log(ev.detail.value, "icChange");
          }
          document
            .querySelector("ic-text-field")
            .addEventListener("icChange", handleIcChange);
        </script>
        <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`;loggingIcChange.storyName="Logging icChange",loggingIcChange.parameters={storySource:{source:'args => html`<script>\n          function handleIcChange(ev) {\n            console.log(ev.detail.value, "icChange");\n          }\n          document\n            .querySelector("ic-text-field")\n            .addEventListener("icChange", handleIcChange);\n        <\/script>\n        <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`'},loki:{skip:!0}};const maximumAndMinimumCharacters=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-text-field
          max-characters="2"
          label="What is your favourite coffee?"
          helper-text="Short answers only."
        >
        </ic-text-field>
        <ic-text-field
          min-characters="3"
          label="What is your favourite coffee?"
          helper-text="Long answer please."
        >
        </ic-text-field> `;maximumAndMinimumCharacters.storyName="Maximum and minimum characters",maximumAndMinimumCharacters.parameters={storySource:{source:'args => html`<ic-text-field\n          max-characters="2"\n          label="What is your favourite coffee?"\n          helper-text="Short answers only."\n        >\n        </ic-text-field>\n        <ic-text-field\n          min-characters="3"\n          label="What is your favourite coffee?"\n          helper-text="Long answer please."\n        >\n        </ic-text-field> `'},loki:{skip:!0}};const componentMeta={title:"Web Components/Text field",tags:["stories-mdx"],includeStories:["defaultStory","placeholderAndRequired","helperText","withIcon","withValue","maxLength","maxLengthMessage","customWidth","fullWidth","disabled","readOnly","validation","textAreaWithResize","form","minAndMax","loggingIcChange","maximumAndMinimumCharacters"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["defaultStory","placeholderAndRequired","helperText","withIcon","withValue","maxLength","maxLengthMessage","customWidth","fullWidth","disabled","readOnly","validation","textAreaWithResize","form","minAndMax","loggingIcChange","maximumAndMinimumCharacters"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-text-field-ic-text-field-stories-mdx.f5ae4206.iframe.bundle.js.map