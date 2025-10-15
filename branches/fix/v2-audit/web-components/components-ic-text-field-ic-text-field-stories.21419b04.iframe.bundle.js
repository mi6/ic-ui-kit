/*! For license information please see components-ic-text-field-ic-text-field-stories.21419b04.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3719],{"./src/components/ic-text-field/ic-text-field.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomWidth:()=>CustomWidth,Default:()=>Default,Disabled:()=>Disabled,Form:()=>Form,FullWidth:()=>FullWidth,HelperText:()=>HelperText,LoggingIcChange:()=>LoggingIcChange,MaxLength:()=>MaxLength,MaxLengthMessage:()=>MaxLengthMessage,MaximumAndMinimumCharacters:()=>MaximumAndMinimumCharacters,MinAndMax:()=>MinAndMax,PlaceholderAndRequired:()=>PlaceholderAndRequired,Playground:()=>Playground,ReadOnly:()=>ReadOnly,TextAreaWithResize:()=>TextAreaWithResize,Validation:()=>Validation,WithIcon:()=>WithIcon,WithValue:()=>WithValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Text field",component:"ic-text-field"},Default={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field label="What is your favourite coffee?"> </ic-text-field>
      <ic-text-field rows="6" label="What is your favourite coffee?">
      </ic-text-field> `,name:"Default"},PlaceholderAndRequired={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
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
      </ic-text-field> `,name:"Placeholder and required"},HelperText={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
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
      </ic-text-field> `,name:"Helper text"},WithIcon={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
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
      </ic-text-field> `,name:"With icon"},WithValue={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
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
      </ic-text-field> `,name:"With value"},MaxLength={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
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
      </ic-text-field> `,name:"Max length"},MaxLengthMessage={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
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
      </ic-text-field> `,name:"Max length message"},CustomWidth={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<style>
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
      </ic-text-field> `,name:"Custom width"},FullWidth={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: flex">
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
      </ic-text-field> `,name:"Full width"},Disabled={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
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
      </ic-text-field> `,name:"Disabled"},ReadOnly={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
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
      </ic-text-field> `,name:"Read only"},Validation={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
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
      ></ic-text-field>`,name:"Validation"},TextAreaWithResize={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
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
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </svg>
    </ic-text-field> `,name:"Text area with resize"},Form={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
          document.querySelector('input[name="ic-text-field-input-0"]').value
        );
      });
    </script>
  `,name:"Form"},MinAndMax={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
      inputmode="numeric"
      label="How many coffees do you want?"
      helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
      type="number"
      min="1"
      max="4"
    >
    </ic-text-field>`,name:"Min and max"},LoggingIcChange={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<script>
        function handleIcChange(ev) {
          console.log(ev.detail.value, "icChange");
        }
        document
          .querySelector("ic-text-field")
          .addEventListener("icChange", handleIcChange);
      </script>
      <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`,name:"Logging icChange"},MaximumAndMinimumCharacters={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
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
      </ic-text-field> `,name:"Maximum and minimum characters"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-text-field
      label=${args.label}
      disabled=${args.disabled}
      full-width=${args.fullWidth}
      helper-text=${args.helperText}
      hide-label=${args.hideLabel}
      input-id=${args.inputId}
      inputmode=${args.inputmode}
      max=${args.max}
      max-characters=${args.maxCharacters}
      max-length=${args.maxLength}
      max-length-message=${args.maxLengthMessage}
      min=${args.min}
      min-characters=${args.minCharacters}
      name=${args.name}
      placeholder=${args.placeholder}
      readonly=${args.readonly}
      required=${args.required}
      resize=${args.resize}
      rows=${args.rows}
      size=${args.size}
      spellcheck=${args.spellcheck}
      type=${args.type}
      validation-status=${args.validationStatus}
      validation-text=${args.validationText}
      validation-inline=${args.validationInline}
      debounce=${args.debounce}
    >
      {${args.showIconSlot} && (
      <SlottedSVG
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </SlottedSVG>
    </ic-text-field> `,name:"Playground",args:{disabled:!1,fullWidth:!1,helperText:"",hideLabel:!1,inputId:"ic-text-field-input-0",inputmode:"text",label:"Text Field",maxCharacters:0,maxLength:0,maxLengthMessage:"Too many characters",minCharacters:0,name:"0",placeholder:"",readonly:!1,required:!1,resize:!1,rows:1,size:"default",spellcheck:!1,type:"text",validationInline:!1,validationStatus:"none",validationText:"",debounce:0},argTypes:{inputmode:{options:["none","text","tel","url","email","numeric","decimal","search"],control:{type:"select"}},size:{options:["default","small"],control:{type:"inline-radio"}},type:{options:["email","password","tel","text","url","number","search"],control:{type:"select"}},validationStatus:{options:["warning","error","success","none"],mapping:{warning:"warning",error:"error",success:"success",none:""},control:{type:"select"}},showIconSlot:{control:{type:"boolean"}}}},__namedExportsOrder=["Default","PlaceholderAndRequired","HelperText","WithIcon","WithValue","MaxLength","MaxLengthMessage","CustomWidth","FullWidth","Disabled","ReadOnly","Validation","TextAreaWithResize","Form","MinAndMax","LoggingIcChange","MaximumAndMinimumCharacters","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field label="What is your favourite coffee?"> </ic-text-field>\n      <ic-text-field rows="6" label="What is your favourite coffee?">\n      </ic-text-field> `,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},PlaceholderAndRequired.parameters={...PlaceholderAndRequired.parameters,docs:{...PlaceholderAndRequired.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n      >\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n      >\n      </ic-text-field> `,\n  name: "Placeholder and required"\n}',...PlaceholderAndRequired.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n      </ic-text-field> `,\n  name: "Helper text"\n}',...HelperText.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field> `,\n  name: "With icon"\n}',...WithIcon.parameters?.docs?.source}}},WithValue.parameters={...WithValue.parameters,docs:{...WithValue.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n        value="Arabica"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        value="Arabica"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field> `,\n  name: "With value"\n}',...WithValue.parameters?.docs?.source}}},MaxLength.parameters={...MaxLength.parameters,docs:{...MaxLength.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n        max-length="25"\n        value="Arabica"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        max-length="25"\n        value="Arabica"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field> `,\n  name: "Max length"\n}',...MaxLength.parameters?.docs?.source}}},MaxLengthMessage.parameters={...MaxLengthMessage.parameters,docs:{...MaxLengthMessage.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n        max-length="25"\n        value="Arabica"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n        max-length-message="You have exceeded the maximum length"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        max-length="25"\n        value="Arabica"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n        max-length-message="You have exceeded the maximum length"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field> `,\n  name: "Max length message"\n}',...MaxLengthMessage.parameters?.docs?.source}}},CustomWidth.parameters={...CustomWidth.parameters,docs:{...CustomWidth.parameters?.docs,source:{originalSource:'{\n  render: args => html`<style>\n        ic-text-field {\n          --input-width: 400px;\n        }\n      </style>\n      <ic-text-field\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        size="small"\n        required="true"\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        value="Arabica"\n        max-length="25"\n        resize\n        label="What is your favourite coffee?"\n        size="small"\n        required="true"\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field> `,\n  name: "Custom width"\n}',...CustomWidth.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div style="display: flex">\n        <ic-text-field\n          full-width="true"\n          value="Arabica"\n          max-length="25"\n          label="What is your favourite coffee?"\n          size="small"\n          required="true"\n          placeholder="Placeholder"\n          helper-text="Such as Arabica, Robusta or Liberica"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>\n        </ic-text-field>\n      </div>\n      <ic-text-field\n        full-width="true"\n        rows="6"\n        value="Arabica"\n        max-length="25"\n        resize\n        label="What is your favourite coffee?"\n        size="small"\n        required="true"\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field> `,\n  name: "Full width"\n}',...FullWidth.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n        value="Arabica"\n        label="What is your favourite coffee?"\n        disabled\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        value="Arabica"\n        rows="6"\n        label="What is your favourite coffee?"\n        disabled\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        disabled\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        disabled\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field> `,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        readonly\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        readonly\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        readonly\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        readonly\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n      </ic-text-field> `,\n  name: "Read only"\n}',...ReadOnly.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n        validation-status="success"\n        validation-text="Good choice!"\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        validation-status="success"\n        validation-text="Good choice!"\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta, Liberica or something else to make this label long"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        validation-status="success"\n        validation-text="Good choice!"\n        validation-inline="true"\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        validation-status="success"\n        validation-text="Good choice!"\n        validation-inline="true"\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        required\n        size="small"\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        validation-status="warning"\n        validation-text="A very long warning message to test if wrapping works"\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        validation-status="warning"\n        validation-text="A very long warning message to test if wrapping works"\n        value="Arabica"\n        max-length="25"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        validation-status="error"\n        validation-text="now it has really gone to (coffee) pot"\n        value="Tea"\n        max-length="25"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        validation-status="error"\n        validation-text="now it has really gone to (coffee) pot"\n        value="Tea"\n        max-length="25"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        validation-status="error"\n        validation-text="now it has really gone to (coffee) pot"\n        value="Tea with milk and 2 sugars"\n        max-length="25"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        rows="6"\n        validation-status="error"\n        validation-text="now it has really gone to (coffee) pot"\n        value="Tea with milk and 2 sugars"\n        max-length="25"\n        label="What is your favourite coffee?"\n        required\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        validation-status="error"\n        validation-text="now it has really gone to (coffee) pot"\n        value="6"\n        inputmode="numeric"\n        label="How many coffees do you want?"\n        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."\n        type="number"\n        min="1"\n        max="4"\n        required\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        validation-status="error"\n        validation-text="now it has really gone to (coffee) pot"\n        value="0"\n        inputmode="numeric"\n        label="How many coffees do you want?"\n        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."\n        type="number"\n        min="1"\n        max="4"\n        required\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>\n      </ic-text-field>\n      <ic-text-field\n        validation-status="error"\n        validation-text="I\'m not familiar with this type of coffee"\n        validation-inline-internal="true"\n        value="Milkshake"\n        label="What is your favourite coffee?"\n        required\n        hide-label\n        size="small"\n        placeholder="Placeholder"\n        helper-text="Such as Arabica, Robusta or Liberica"\n      ></ic-text-field>`,\n  name: "Validation"\n}',...Validation.parameters?.docs?.source}}},TextAreaWithResize.parameters={...TextAreaWithResize.parameters,docs:{...TextAreaWithResize.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n      rows="6"\n      value="Arabica"\n      max-length="25"\n      resize\n      label="What is your favourite coffee?"\n      size="small"\n      required="true"\n      placeholder="Placeholder"\n      helper-text="Such as Arabica, Robusta or Liberica"\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0z" fill="none" />\n        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />\n      </svg>\n    </ic-text-field> `,\n  name: "Text area with resize"\n}',...TextAreaWithResize.parameters?.docs?.source}}},Form.parameters={...Form.parameters,docs:{...Form.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <form>\n      <ic-text-field label="What is your favourite coffee?"></ic-text-field>\n      <br />\n      <br />\n      <input type="submit" value="Submit" />\n      <input type="reset" value="Reset" />\n    </form>\n    <script>\n      document.querySelector("form").addEventListener("submit", (ev) => {\n        ev.preventDefault();\n        console.log(\n          document.querySelector(\'input[name="ic-text-field-input-0"]\').value\n        );\n      });\n    <\/script>\n  `,\n  name: "Form"\n}',...Form.parameters?.docs?.source}}},MinAndMax.parameters={...MinAndMax.parameters,docs:{...MinAndMax.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n      inputmode="numeric"\n      label="How many coffees do you want?"\n      helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."\n      type="number"\n      min="1"\n      max="4"\n    >\n    </ic-text-field>`,\n  name: "Min and max"\n}',...MinAndMax.parameters?.docs?.source}}},LoggingIcChange.parameters={...LoggingIcChange.parameters,docs:{...LoggingIcChange.parameters?.docs,source:{originalSource:'{\n  render: args => html`<script>\n        function handleIcChange(ev) {\n          console.log(ev.detail.value, "icChange");\n        }\n        document\n          .querySelector("ic-text-field")\n          .addEventListener("icChange", handleIcChange);\n      <\/script>\n      <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`,\n  name: "Logging icChange"\n}',...LoggingIcChange.parameters?.docs?.source}}},MaximumAndMinimumCharacters.parameters={...MaximumAndMinimumCharacters.parameters,docs:{...MaximumAndMinimumCharacters.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n        max-characters="2"\n        label="What is your favourite coffee?"\n        helper-text="Short answers only."\n      >\n      </ic-text-field>\n      <ic-text-field\n        min-characters="3"\n        label="What is your favourite coffee?"\n        helper-text="Long answer please."\n      >\n      </ic-text-field> `,\n  name: "Maximum and minimum characters"\n}',...MaximumAndMinimumCharacters.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-text-field\n      label=${args.label}\n      disabled=${args.disabled}\n      full-width=${args.fullWidth}\n      helper-text=${args.helperText}\n      hide-label=${args.hideLabel}\n      input-id=${args.inputId}\n      inputmode=${args.inputmode}\n      max=${args.max}\n      max-characters=${args.maxCharacters}\n      max-length=${args.maxLength}\n      max-length-message=${args.maxLengthMessage}\n      min=${args.min}\n      min-characters=${args.minCharacters}\n      name=${args.name}\n      placeholder=${args.placeholder}\n      readonly=${args.readonly}\n      required=${args.required}\n      resize=${args.resize}\n      rows=${args.rows}\n      size=${args.size}\n      spellcheck=${args.spellcheck}\n      type=${args.type}\n      validation-status=${args.validationStatus}\n      validation-text=${args.validationText}\n      validation-inline=${args.validationInline}\n      debounce=${args.debounce}\n    >\n      {${args.showIconSlot} && (\n      <SlottedSVG\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0z" fill="none" />\n        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />\n      </SlottedSVG>\n    </ic-text-field> `,\n  name: "Playground",\n  args: defaultArgs,\n  argTypes: {\n    inputmode: {\n      options: ["none", "text", "tel", "url", "email", "numeric", "decimal", "search"],\n      control: {\n        type: "select"\n      }\n    },\n    size: {\n      options: ["default", "small"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    type: {\n      options: ["email", "password", "tel", "text", "url", "number", "search"],\n      control: {\n        type: "select"\n      }\n    },\n    validationStatus: {\n      options: ["warning", "error", "success", "none"],\n      mapping: {\n        warning: "warning",\n        error: "error",\n        success: "success",\n        none: ""\n      },\n      control: {\n        type: "select"\n      }\n    },\n    showIconSlot: {\n      control: {\n        type: "boolean"\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-text-field-ic-text-field-stories.21419b04.iframe.bundle.js.map