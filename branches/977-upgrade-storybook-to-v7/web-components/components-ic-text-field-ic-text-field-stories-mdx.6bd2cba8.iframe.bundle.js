"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2309],{"./src/components/ic-text-field/ic-text-field.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,customWidth:()=>customWidth,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,disabled:()=>disabled,form:()=>form,fullWidth:()=>fullWidth,helperText:()=>helperText,loggingIcChange:()=>loggingIcChange,maxLength:()=>maxLength,minAndMax:()=>minAndMax,placeholderAndRequired:()=>placeholderAndRequired,readOnly:()=>readOnly,textAreaWithResize:()=>textAreaWithResize,validation:()=>validation,withIcon:()=>withIcon,withValue:()=>withValue});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit-html/lit-html.js"),_readme_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ic-text-field/readme.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Web Components/Text field",component:"ic-text-field"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.dk,{markdown:_readme_md__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field label="What is your favourite coffee?">
        </ic-text-field>
        <ic-text-field rows="6" label="What is your favourite coffee?">
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"placeholder-and-required",children:"Placeholder and required"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Placeholder and required",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Helper text",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"with-icon",children:"With icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"With icon",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"with-value",children:"With value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"With value",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"max-length",children:"Max length"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Max length",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"custom-width",children:"Custom width"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Custom width",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<style>
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
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Full width",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<div style="display: flex">
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
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Disabled",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"read-only",children:"Read only"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Read only",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Validation",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        ></ic-text-field>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"text-area-with-resize",children:"Text area with resize"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Text area with resize",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
      </ic-text-field> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"form---this-shows-how-the-text-field-works-within-a-form-the-field-value-will-appear-in-the-consolelog",children:"Form - This shows how the text field works within a form. The field value will appear in the console.log"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Form",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
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
      `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"min-and-max",children:"Min and max"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Min and max",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
      >
      </ic-text-field>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"logging-icchange",children:"Logging icChange"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Logging icChange",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<script>
          function handleIcChange(ev) {
            console.log(ev.detail.value, "icChange");
          }
          document
            .querySelector("ic-text-field")
            .addEventListener("icChange", handleIcChange);
        </script>
        <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`})})]})}const defaultStory=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field label="What is your favourite coffee?">
        </ic-text-field>
        <ic-text-field rows="6" label="What is your favourite coffee?">
        </ic-text-field> `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`<ic-text-field label="What is your favourite coffee?">\n        </ic-text-field>\n        <ic-text-field rows="6" label="What is your favourite coffee?">\n        </ic-text-field> `'}};const placeholderAndRequired=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `;placeholderAndRequired.storyName="Placeholder and required",placeholderAndRequired.parameters={storySource:{source:'args => html`<ic-text-field\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n        >\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n        >\n        </ic-text-field> `'}};const helperText=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'args => html`<ic-text-field\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n        </ic-text-field> `'}};const withIcon=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `;withIcon.storyName="With icon",withIcon.parameters={storySource:{source:'args => html`<ic-text-field\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'}};const withValue=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `;withValue.storyName="With value",withValue.parameters={storySource:{source:'args => html`<ic-text-field\n          value="Arabica"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          value="Arabica"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'}};const maxLength=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `;maxLength.storyName="Max length",maxLength.parameters={storySource:{source:'args => html`<ic-text-field\n          max-length="25"\n          value="Arabica"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          max-length="25"\n          value="Arabica"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'}};const customWidth=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<style>
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
        </ic-text-field> `;customWidth.storyName="Custom width",customWidth.parameters={storySource:{source:'args => html`<style>\n          ic-text-field {\n            --input-width: 400px;\n          }\n        </style>\n        <ic-text-field\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          size="small"\n          required="true"\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          value="Arabica"\n          max-length="25"\n          resize\n          label="What is your favourite coffee?"\n          size="small"\n          required="true"\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'}};const fullWidth=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<div style="display: flex">
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
        </ic-text-field> `;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'args => html`<div style="display: flex">\n          <ic-text-field\n            full-width="true"\n            value="Arabica"\n            max-length="25"\n            label="What is your favourite coffee?"\n            size="small"\n            required="true"\n            placeholder="Placeholder"\n            helper-text="Such as Arabica, Robusta or Liberica"\n          >\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0z" fill="none" />\n              <path\n                d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n              />\n            </svg>\n          </ic-text-field>\n        </div>\n        <ic-text-field\n          full-width="true"\n          rows="6"\n          value="Arabica"\n          max-length="25"\n          resize\n          label="What is your favourite coffee?"\n          size="small"\n          required="true"\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'}};const disabled=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html`<ic-text-field\n          value="Arabica"\n          label="What is your favourite coffee?"\n          disabled\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          value="Arabica"\n          rows="6"\n          label="What is your favourite coffee?"\n          disabled\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          disabled\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          disabled\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field> `'}};const readOnly=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        </ic-text-field> `;readOnly.storyName="Read only",readOnly.parameters={storySource:{source:'args => html`<ic-text-field\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          readonly\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          readonly\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          readonly\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          readonly\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n        </ic-text-field> `'}};const validation=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
        ></ic-text-field>`;validation.storyName="Validation",validation.parameters={storySource:{source:'args => html`<ic-text-field\n          validation-status="success"\n          validation-text="Good choice!"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          validation-status="success"\n          validation-text="Good choice!"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta, Liberica or something else to make this label long"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="success"\n          validation-text="Good choice!"\n          validation-inline="true"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="success"\n          validation-text="Good choice!"\n          validation-inline="true"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          size="small"\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="warning"\n          validation-text="A very long warning message to test if wrapping works"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          validation-status="warning"\n          validation-text="A very long warning message to test if wrapping works"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="Tea"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="Tea"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="Tea with milk and 2 sugars"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          rows="6"\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="Tea with milk and 2 sugars"\n          max-length="25"\n          label="What is your favourite coffee?"\n          required\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="6"\n          inputmode="numeric"\n          label="How many coffees do you want?"\n          helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."\n          type="number"\n          min="1"\n          max="4"\n          required\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          value="0"\n          inputmode="numeric"\n          label="How many coffees do you want?"\n          helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."\n          type="number"\n          min="1"\n          max="4"\n          required\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n        <ic-text-field\n          validation-status="error"\n          validation-text="I\'m not familiar with this type of coffee"\n          validation-inline-internal="true"\n          value="Milkshake"\n          label="What is your favourite coffee?"\n          required\n          hide-label\n          size="small"\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        ></ic-text-field>`'}};const textAreaWithResize=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
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
      </ic-text-field> `;textAreaWithResize.storyName="Text area with resize",textAreaWithResize.parameters={storySource:{source:'args => html`<ic-text-field\n        rows="6"\n        value="Arabica"\n        max-length="25"\n        resize\n        label="What is your favourite coffee?"\n        size="small"\n        required="true"\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field> `'}};const form=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
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
      `;form.storyName="Form",form.parameters={storySource:{source:'args => html`\n        <form>\n          <ic-text-field label="What is your favourite coffee?"></ic-text-field>\n          <br />\n          <br />\n          <input type="submit" value="Submit" />\n          <input type="reset" value="Reset" />\n        </form>\n        <script>\n          document.querySelector("form").addEventListener("submit", (ev) => {\n            ev.preventDefault();\n            console.log(\n              document.querySelector(\'input[name="ic-text-field-input-0"]\')\n                .value\n            );\n          });\n        <\/script>\n      `'},loki:{skip:!0}};const minAndMax=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-text-field
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
      >
      </ic-text-field>`;minAndMax.storyName="Min and max",minAndMax.parameters={storySource:{source:'args => html`<ic-text-field\n        inputmode="numeric"\n        label="How many coffees do you want?"\n        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."\n        type="number"\n        min="1"\n        max="4"\n      >\n      </ic-text-field>`'}};const loggingIcChange=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<script>
          function handleIcChange(ev) {
            console.log(ev.detail.value, "icChange");
          }
          document
            .querySelector("ic-text-field")
            .addEventListener("icChange", handleIcChange);
        </script>
        <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`;loggingIcChange.storyName="Logging icChange",loggingIcChange.parameters={storySource:{source:'args => html`<script>\n          function handleIcChange(ev) {\n            console.log(ev.detail.value, "icChange");\n          }\n          document\n            .querySelector("ic-text-field")\n            .addEventListener("icChange", handleIcChange);\n        <\/script>\n        <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Text field",tags:["stories-mdx"],includeStories:["defaultStory","placeholderAndRequired","helperText","withIcon","withValue","maxLength","customWidth","fullWidth","disabled","readOnly","validation","textAreaWithResize","form","minAndMax","loggingIcChange"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["defaultStory","placeholderAndRequired","helperText","withIcon","withValue","maxLength","customWidth","fullWidth","disabled","readOnly","validation","textAreaWithResize","form","minAndMax","loggingIcChange"]}}]);
//# sourceMappingURL=components-ic-text-field-ic-text-field-stories-mdx.6bd2cba8.iframe.bundle.js.map