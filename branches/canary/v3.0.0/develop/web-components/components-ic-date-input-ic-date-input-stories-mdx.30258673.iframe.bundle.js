/*! For license information please see components-ic-date-input-ic-date-input-stories-mdx.30258673.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[523],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-date-input/ic-date-input.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,customHelperText:()=>customHelperText,customValidation:()=>customValidation,dateObject:()=>dateObject,default:()=>ic_date_input_stories,defaultStory:()=>defaultStory,disabled:()=>disabled,disabledFutureDates:()=>disabledFutureDates,disabledPastDates:()=>disabledPastDates,epochTime:()=>epochTime,form:()=>ic_date_input_stories_form,hideHelperText:()=>hideHelperText,icChangeEvent:()=>icChangeEvent,minAndMax:()=>minAndMax,required:()=>required,sizes:()=>sizes,withClearingValue:()=>withClearingValue,withHyphens:()=>withHyphens,withValue:()=>withValue,zuluTime:()=>zuluTime});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const createDateInputForm=()=>{const form=document.createElement("form"),dateInput=document.createElement("ic-date-input"),submitBtn=document.createElement("ic-button"),resetBtn=document.createElement("ic-button"),formActions=document.createElement("div");return formActions.style.display="flex",formActions.style.gap="var(--ic-space-xs)",formActions.style.marginTop="var(--ic-space-xs)",submitBtn.type="submit",submitBtn.textContent="Submit",resetBtn.type="reset",resetBtn.textContent="Reset",form.id="date-input-form",dateInput.value="13/03/1951",dateInput.label="When would you like to collect your coffee?",form.appendChild(dateInput),form.appendChild(formActions),formActions.appendChild(submitBtn),formActions.appendChild(resetBtn),form.addEventListener("submit",(ev=>{ev.preventDefault(),console.log(dateInput.querySelector('input[name^="ic-date-input-"]')?.value)})),form};var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-date-input\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property               | Attribute                | Description                                                                                                                                                                                                                                            | Type                                           | Default                                                                                                 |\n| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |\n| `dateFormat`           | `date-format`            | The format in which the date will be displayed.                                                                                                                                                                                                        | `"DD/MM/YYYY" \\| "MM/DD/YYYY" \\| "YYYY/MM/DD"` | `"DD/MM/YYYY"`                                                                                          |\n| `disableDays`          | --                       | The days of the week to disable.                                                                                                                                                                                                                       | `IcWeekDays[]`                                 | `[]`                                                                                                    |\n| `disableDaysMessage`   | `disable-days-message`   | The text to display as the validation message when `disableDays` is set and a disabled date is entered.                                                                                                                                                | `string`                                       | `"The date you have selected is on a day of the week that is not allowed. Please select another date."` |\n| `disableFuture`        | `disable-future`         | If `true`, dates in the future are not allowed. A validation message will appear if a date in the future is entered.                                                                                                                                   | `boolean`                                      | `false`                                                                                                 |\n| `disableFutureMessage` | `disable-future-message` | The text to display as the validation message when `disableFuture` is true and a date in the future is entered.                                                                                                                                        | `string`                                       | `"Dates in the future are not allowed. Please select a date in the past."`                              |\n| `disablePast`          | `disable-past`           | If `true`, dates in the past are not allowed. A validation message will appear if a date in the past is entered.                                                                                                                                       | `boolean`                                      | `false`                                                                                                 |\n| `disablePastMessage`   | `disable-past-message`   | The text to display as the validation message when `disablePast` is true and a date in the past is entered.                                                                                                                                            | `string`                                       | `"Dates in the past are not allowed. Please select a date in the future."`                              |\n| `disabled`             | `disabled`               | If `true`, the disabled state will be set.                                                                                                                                                                                                             | `boolean`                                      | `false`                                                                                                 |\n| `helperText`           | `helper-text`            | The helper text that will be displayed for additional field guidance. This will default to the text "Use format" along with the `dateFormat` value.                                                                                                    | `string`                                       | `undefined`                                                                                             |\n| `hideHelperText`       | `hide-helper-text`       | If `true`, the helper text will be visually hidden, but still read out by screenreaders.                                                                                                                                                               | `boolean`                                      | `false`                                                                                                 |\n| `inputId`              | `input-id`               | The ID for the input.                                                                                                                                                                                                                                  | `string`                                       | ``ic-date-input-${inputIds++}``                                                                         |\n| `label` _(required)_   | `label`                  | The label for the date input.                                                                                                                                                                                                                          | `string`                                       | `undefined`                                                                                             |\n| `max`                  | `max`                    | The latest date that will be allowed. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object. The value of this prop is ignored if `disableFuture` is set to `true`. | `Date \\| string`                               | `""`                                                                                                    |\n| `min`                  | `min`                    | The earliest date that will be allowed. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object. The value of this prop is ignored if `disablePast` is set to `true`. | `Date \\| string`                               | `""`                                                                                                    |\n| `name`                 | `name`                   | The name of the control, which is submitted with the form data.                                                                                                                                                                                        | `string`                                       | `this.inputId`                                                                                          |\n| `required`             | `required`               | If `true`, the input will require a value.                                                                                                                                                                                                             | `boolean`                                      | `false`                                                                                                 |\n| `showClearButton`      | `show-clear-button`      | If `true`, a button which clears the date input when clicked will be displayed.                                                                                                                                                                        | `boolean`                                      | `true`                                                                                                  |\n| `size`                 | `size`                   | The size of the date input to be displayed.                                                                                                                                                                                                            | `"default" \\| "large" \\| "small"`              | `"default"`                                                                                             |\n| `validationStatus`     | `validation-status`      | The validation status - e.g. \'error\' \\| \'warning\' \\| \'success\'. This will override the built-in date validation.                                                                                                                                       | `"" \\| "error" \\| "success" \\| "warning"`      | `""`                                                                                                    |\n| `validationText`       | `validation-text`        | The text to display as the validation message. This will override the built-in date validation.                                                                                                                                                        | `string`                                       | `""`                                                                                                    |\n| `value`                | `value`                  | The value of the date input. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.                                                                                 | `Date \\| string`                               | `""`                                                                                                    |\n\n\n## Events\n\n| Event      | Description                         | Type                            |\n| ---------- | ----------------------------------- | ------------------------------- |\n| `icBlur`   | Emitted when the input loses focus. | `CustomEvent<{ value: Date; }>` |\n| `icChange` | Emitted when the value has changed. | `CustomEvent<{ value: Date; }>` |\n| `icFocus`  | Emitted when the input gains focus. | `CustomEvent<{ value: Date; }>` |\n\n\n## Methods\n\n### `getDate() => Promise<Date>`\n\nReturns the value as a Date object\n\n#### Returns\n\nType: `Promise<Date>`\n\nDate\n\n\n## Dependencies\n\n### Used by\n\n - [ic-date-picker](../ic-date-picker)\n\n### Depends on\n\n- ic-input-container\n- ic-input-label\n- ic-input-component-container\n- ic-button\n- ic-input-validation\n\n### Graph\n```mermaid\ngraph TD;\n  ic-date-input --\x3e ic-input-container\n  ic-date-input --\x3e ic-input-label\n  ic-date-input --\x3e ic-input-component-container\n  ic-date-input --\x3e ic-button\n  ic-date-input --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  ic-date-picker --\x3e ic-date-input\n  style ic-date-input fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h3:"h3",ul:"ul",li:"li",pre:"pre",a:"a",h4:"h4"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Date Input",component:"ic-date-input",parameters:{componentAPI:{data:readme_namespaceObject}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"canary-date-input",children:"[Canary]: Date Input"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use the date input component to manually type in a date in different formats."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The input ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," is the only required attribute for date input."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Click the 'Component API' tab to view all the available attributes, events and slots for date input."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use the date input component, import ",(0,jsx_runtime.jsx)(_components.code,{children:"@ukic/canary-web-components"})," into your application."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Each example below demonstrates the date input in three different date formats:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"DD/MM/YYYY (Default date format)"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"MM/DD/YYYY"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"YYYY/MM/DD"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Dates can be added by manually typing into the input or using the up and down arrow keys."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To move between day, month and year using the keyboard, provide the required values based on the placeholders or use ",(0,jsx_runtime.jsx)(_components.code,{children:"/"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"-"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"By default, the helper text displays the date format."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <script>
        var dateInput = document.querySelector("ic-date-input");
        {
          dateInput.addEventListener("icChange", function (event) {
            console.log("icChange", event.detail.value);
          });
        }
      </script>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
        date-format="MM/DD/YYYY"
      ></ic-date-input>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
        date-format="YYYY/MM/DD"
      ></ic-date-input> `})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n></ic-date-input>\n\n<ic-date-input\n  label="When would you like to collect your coffee?"\n  format="MM/DD/YYYY"\n></ic-date-input>\n\n<ic-date-input\n  label="When would you like to collect your coffee?"\n  format="YYYY/MM/DD"\n></ic-date-input>\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Retrieving the date input value via ",(0,jsx_runtime.jsx)(_components.code,{children:"icChange"})," returns the date as a Date object."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The event returns the Date object once day, month and year have been entered."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"icChange event",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <script>
        var dateInput = document.querySelector("ic-date-input");
        dateInput.addEventListener("icChange", function (event) {
          console.log(event.detail.value);
        });
      </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n></ic-date-input>\n<script>\n  const dateInput = document.querySelector("ic-date-input");\n  dateInput.addEventListener("icChange", function (event) {\n    console.log(event.detail.value);\n  });\n<\/script>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-value",children:"With value"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To set a value to the date input, pass the date value in the relevant date format."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"With value",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
      id="date-input-default-date-with-value"
      label="When would you like to collect your coffee?"
      date-format="DD/MM/YYYY"
      value="21/01/2001"
    ></ic-date-input>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n  date-format="DD/MM/YYYY"\n  value="21/01/2001"\n></ic-date-input>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The date input also accepts a number of different date formats within the value attribute."}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#date-object",children:"Date object"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#zulu-datetime",children:"Zulu datetime"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#with-hyphens",children:"With hyphens (DD-MM-YYYY)"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#epoch-time",children:"Epoch time"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"date-object",children:"Date object"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Date object",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
        id="date-input-default-date-date"
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <script>
        var dateInputDate = document.querySelector(
          "#date-input-default-date-date"
        );
        dateInputDate.value = new Date("28 November 2021");
      </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n></ic-date-input>\n<script>\n  const dateInputDate = document.querySelector("ic-date-input");\n  dateInputDate.value = new Date("28 November 2021");\n<\/script>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"zulu-datetime",children:"Zulu datetime"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Zulu time",parameters:{loki:{skip:!0}},children:lit_html.dy`<div>
        <ic-date-input
          id="date-input-default-zulu-date"
          label="When would you like to collect your coffee?"
        ></ic-date-input>
      </div>
      <script>
        var dateInputDate = document.querySelector(
          "#date-input-default-zulu-date"
        );
        dateInputDate.value = new Date("1 May 1990").toISOString();
      </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n></ic-date-input>\n<script>\n  const dateInputDate = document.querySelector("ic-date-input");\n  dateInputDate.value = new Date("1 May 1990").toISOString();\n<\/script>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"with-hyphens",children:"With hyphens"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"With hyphens",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
        id="date-input-default-date-string"
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <script>
        var dateInputString = document.querySelector(
          "#date-input-default-date-string"
        );
        dateInputString.value = "25-05-2005";
      </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n></ic-date-input>\n<script>\n  const dateInputDate = document.querySelector("ic-date-input");\n  dateInputDate.value = "25-05-2005";\n<\/script>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"epoch-time",children:"Epoch time"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Epoch time",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
        id="date-input-default-date-epoch"
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <script>
        var dateInputString = document.querySelector(
          "#date-input-default-date-epoch"
        );
        dateInputString.value = Date.now();
      </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n></ic-date-input>\n<script>\n  const dateInputDate = document.querySelector("ic-date-input");\n  dateInputString.value = Date.now();\n<\/script>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"required",children:"Required."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To set the date input as a required field, set the ",(0,jsx_runtime.jsx)(_components.code,{children:"required"})," attribute to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),". This will add an asterisk at the end of the date input label."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Required",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      required
    ></ic-date-input>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n  date-format="DD/MM/YYYY"\n  required="true"\n></ic-date-input>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(_components.code,{children:"disabled"})," attribute to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"})," to prevent interaction with the date input."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      disabled
    ></ic-date-input>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n  disabled="true"\n></ic-date-input>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The date input is available in three different sizes:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"small"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"default"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"large"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Sizes",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
        label="When would you like to collect your coffee?"
        size="small"
      ></ic-date-input>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
        size="large"
      ></ic-date-input> `})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n  size="small"\n></ic-date-input>\n\n<ic-date-input\n  label="When would you like to collect your coffee?"\n></ic-date-input>\n\n<ic-date-input\n  label="When would you like to collect your coffee?"\n  size="large"\n></ic-date-input>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-helper-text",children:"Custom helper text"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use the helper text to add additional detail for the date input."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom helper text",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      helper-text="We will have your order ready for you on this date"
    ></ic-date-input>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n  helper-text="We will have your order ready for you on this date"\n></ic-date-input>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hide-helper-text",children:"Hide helper text"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Hide visible helper text."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Hide helper text",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      helper-text="You cannot see me, but you can hear me"
      hide-helper-text="true"
    ></ic-date-input>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n  helper-text="You cannot see me, but you can hear me"\n  hide-helper-text="true"\n></ic-date-input>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-validation",children:"Custom validation"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Validation on date input is set via ",(0,jsx_runtime.jsx)(_components.code,{children:"validation-status"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"validation-text"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"validation-status"})," will set the style of the validation message. ",(0,jsx_runtime.jsx)(_components.code,{children:"validation-status"})," accepts:"]}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"error"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"warning"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"success"})}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"validation-status"})," is required for the ",(0,jsx_runtime.jsx)(_components.code,{children:"validation-text"})," to appear."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom validation",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
        label="When would you like to collect your coffee?"
        validation-status="error"
        validation-text="There is a coffee shortage forecast for that day. Please choose a different date."
      ></ic-date-input>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
        validation-status="warning"
        validation-text="Please be aware that there may be a coffee shortage on that day."
      ></ic-date-input>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
        validation-status="success"
        validation-text="Your coffee will be available for you to collect on this day."
      ></ic-date-input> `})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n  validation-status="error"\n  validation-text="There is a coffee shortage forecast for that day. Please choose a different date."\n></ic-date-input>\n\n<ic-date-input\n  label="When would you like to collect your coffee?"\n  validation-status="warning"\n  validation-text="Please be aware that there may be a coffee shortage on that day."\n></ic-date-input>\n\n<ic-date-input\n  label="When would you like to collect your coffee?"\n  validation-status="success"\n  validation-text="Your coffee will be available for you to collect on this day."\n></ic-date-input>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-past-dates",children:"Disabled past dates"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Validation can be set on the date input if a date in the past has been set by setting the ",(0,jsx_runtime.jsx)(_components.code,{children:"disable-past"})," attribute to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Enter a date in the past to view the validation message."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled past dates",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      disable-past
    ></ic-date-input>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n  disable-past="true"\n></ic-date-input>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-future-dates",children:"Disabled future dates"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Validation can be set on the date input if a date in the future has been set by setting the ",(0,jsx_runtime.jsx)(_components.code,{children:"disable-future"})," attribute to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Enter a date in the future to view the validation message."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled future dates",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      disable-future
    ></ic-date-input>`})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n  disable-future="true"\n></ic-date-input>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"min-and-max",children:"Min and max"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It is possible to set a min and max date range. If a date is set and it is before the min or after the max date, a validation error will appear."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The min or max dates accept the following date formats:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"#with-value",children:"Date string"})," (with slashes i.e. DD/MM/YYYY)"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"#with-hyphens",children:"Date string"})," (with hyphens i.e. DD-MM-YYYY)"]}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#date-object",children:"Date object"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#zulu-time",children:"Zulu time"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Enter a date after 2nd Jan 2023 and before 20th July to view the validation message."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Min and max",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      min="02/01/2023"
      max="20-07-2023"
    ></ic-date-input>`})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In this code snippet, the min and max have been set using two different date formats to demonstrate its flexibility."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-date-input\n  label="When would you like to collect your coffee?"\n  min="02/01/2023"\n  max="20-07-2023"\n></ic-date-input>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"form",children:"Form"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When the date input component is used within a form, the date value is returned as an ISO string."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The value is console logged to the browser dev tools."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Form",parameters:{loki:{skip:!0}},children:createDateInputForm()})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<form>\n  <ic-date-input\n    label="When would you like to collect your coffee?"\n    value="13/03/1951"\n  ></ic-date-input>\n  <input type="submit" value="Submit" />\n  <input type="reset" value="Reset" />\n  <script>\n    document.querySelector("form").addEventListener("submit", (ev) => {\n      ev.preventDefault();\n      console.log(\n        document.querySelector(\'input[name^="ic-date-input-"]\').value\n      );\n    });\n  <\/script>\n</form>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-clearing-value",children:"With clearing value"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The date input can be cleared by setting the the value attribute to one of the following:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"empty string"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"null"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"undefined"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"With clearing value",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-date-input
        id="date-input-clear-value"
        label="When would you like to collect your coffee?"
        date-format="DD/MM/YYYY"
        value="21/01/2001"
      ></ic-date-input>
      <br />
      <ic-button id="update">Update date</ic-button>
      <ic-button id="null-btn">set null</ic-button>
      <ic-button id="empty-btn">set empty string</ic-button>
      <ic-button id="undef-btn">set undefined</ic-button>
      <script>
        var input = document.querySelector("#date-input-clear-value");
        var btn = document.querySelector("#update");
        btn.addEventListener("click", () => {
          input.value = new Date("05 May 2005");
        });
        var btn2 = document.querySelector("#null-btn");
        btn2.addEventListener("click", () => {
          input.value = null;
        });
        var btn3 = document.querySelector("#empty-btn");
        btn3.addEventListener("click", () => {
          input.value = "";
        });
        var btn4 = document.querySelector("#undef-btn");
        btn4.addEventListener("click", () => {
          input.value = undefined;
        });
      </script>`})})]})}const defaultStory=()=>lit_html.dy`<ic-date-input
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <script>
        var dateInput = document.querySelector("ic-date-input");
        {
          dateInput.addEventListener("icChange", function (event) {
            console.log("icChange", event.detail.value);
          });
        }
      </script>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
        date-format="MM/DD/YYYY"
      ></ic-date-input>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
        date-format="YYYY/MM/DD"
      ></ic-date-input> `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'html`<ic-date-input\n        label="When would you like to collect your coffee?"\n      ></ic-date-input>\n      <script>\n        var dateInput = document.querySelector("ic-date-input");\n        {\n          dateInput.addEventListener("icChange", function (event) {\n            console.log("icChange", event.detail.value);\n          });\n        }\n      <\/script>\n      <br />\n      <br />\n      <ic-date-input\n        label="When would you like to collect your coffee?"\n        date-format="MM/DD/YYYY"\n      ></ic-date-input>\n      <br />\n      <br />\n      <ic-date-input\n        label="When would you like to collect your coffee?"\n        date-format="YYYY/MM/DD"\n      ></ic-date-input> `'},loki:{skip:!0}};const icChangeEvent=()=>lit_html.dy`<ic-date-input
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <script>
        var dateInput = document.querySelector("ic-date-input");
        dateInput.addEventListener("icChange", function (event) {
          console.log(event.detail.value);
        });
      </script>`;icChangeEvent.storyName="icChange event",icChangeEvent.parameters={storySource:{source:'html`<ic-date-input\n        label="When would you like to collect your coffee?"\n      ></ic-date-input>\n      <script>\n        var dateInput = document.querySelector("ic-date-input");\n        dateInput.addEventListener("icChange", function (event) {\n          console.log(event.detail.value);\n        });\n      <\/script>`'},loki:{skip:!0}};const withValue=()=>lit_html.dy`<ic-date-input
      id="date-input-default-date-with-value"
      label="When would you like to collect your coffee?"
      date-format="DD/MM/YYYY"
      value="21/01/2001"
    ></ic-date-input>`;withValue.storyName="With value",withValue.parameters={storySource:{source:'html`<ic-date-input\n      id="date-input-default-date-with-value"\n      label="When would you like to collect your coffee?"\n      date-format="DD/MM/YYYY"\n      value="21/01/2001"\n    ></ic-date-input>`'},loki:{skip:!0}};const dateObject=()=>lit_html.dy`<ic-date-input
        id="date-input-default-date-date"
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <script>
        var dateInputDate = document.querySelector(
          "#date-input-default-date-date"
        );
        dateInputDate.value = new Date("28 November 2021");
      </script>`;dateObject.storyName="Date object",dateObject.parameters={storySource:{source:'html`<ic-date-input\n        id="date-input-default-date-date"\n        label="When would you like to collect your coffee?"\n      ></ic-date-input>\n      <script>\n        var dateInputDate = document.querySelector(\n          "#date-input-default-date-date"\n        );\n        dateInputDate.value = new Date("28 November 2021");\n      <\/script>`'},loki:{skip:!0}};const zuluTime=()=>lit_html.dy`<div>
        <ic-date-input
          id="date-input-default-zulu-date"
          label="When would you like to collect your coffee?"
        ></ic-date-input>
      </div>
      <script>
        var dateInputDate = document.querySelector(
          "#date-input-default-zulu-date"
        );
        dateInputDate.value = new Date("1 May 1990").toISOString();
      </script>`;zuluTime.storyName="Zulu time",zuluTime.parameters={storySource:{source:'html`<div>\n        <ic-date-input\n          id="date-input-default-zulu-date"\n          label="When would you like to collect your coffee?"\n        ></ic-date-input>\n      </div>\n      <script>\n        var dateInputDate = document.querySelector(\n          "#date-input-default-zulu-date"\n        );\n        dateInputDate.value = new Date("1 May 1990").toISOString();\n      <\/script>`'},loki:{skip:!0}};const withHyphens=()=>lit_html.dy`<ic-date-input
        id="date-input-default-date-string"
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <script>
        var dateInputString = document.querySelector(
          "#date-input-default-date-string"
        );
        dateInputString.value = "25-05-2005";
      </script>`;withHyphens.storyName="With hyphens",withHyphens.parameters={storySource:{source:'html`<ic-date-input\n        id="date-input-default-date-string"\n        label="When would you like to collect your coffee?"\n      ></ic-date-input>\n      <script>\n        var dateInputString = document.querySelector(\n          "#date-input-default-date-string"\n        );\n        dateInputString.value = "25-05-2005";\n      <\/script>`'},loki:{skip:!0}};const epochTime=()=>lit_html.dy`<ic-date-input
        id="date-input-default-date-epoch"
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <script>
        var dateInputString = document.querySelector(
          "#date-input-default-date-epoch"
        );
        dateInputString.value = Date.now();
      </script>`;epochTime.storyName="Epoch time",epochTime.parameters={storySource:{source:'html`<ic-date-input\n        id="date-input-default-date-epoch"\n        label="When would you like to collect your coffee?"\n      ></ic-date-input>\n      <script>\n        var dateInputString = document.querySelector(\n          "#date-input-default-date-epoch"\n        );\n        dateInputString.value = Date.now();\n      <\/script>`'},loki:{skip:!0}};const required=()=>lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      required
    ></ic-date-input>`;required.storyName="Required",required.parameters={storySource:{source:'html`<ic-date-input\n      label="When would you like to collect your coffee?"\n      required\n    ></ic-date-input>`'},loki:{skip:!0}};const disabled=()=>lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      disabled
    ></ic-date-input>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'html`<ic-date-input\n      label="When would you like to collect your coffee?"\n      disabled\n    ></ic-date-input>`'},loki:{skip:!0}};const sizes=()=>lit_html.dy`<ic-date-input
        label="When would you like to collect your coffee?"
        size="small"
      ></ic-date-input>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
      ></ic-date-input>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
        size="large"
      ></ic-date-input> `;sizes.storyName="Sizes",sizes.parameters={storySource:{source:'html`<ic-date-input\n        label="When would you like to collect your coffee?"\n        size="small"\n      ></ic-date-input>\n      <br />\n      <br />\n      <ic-date-input\n        label="When would you like to collect your coffee?"\n      ></ic-date-input>\n      <br />\n      <br />\n      <ic-date-input\n        label="When would you like to collect your coffee?"\n        size="large"\n      ></ic-date-input> `'},loki:{skip:!0}};const customHelperText=()=>lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      helper-text="We will have your order ready for you on this date"
    ></ic-date-input>`;customHelperText.storyName="Custom helper text",customHelperText.parameters={storySource:{source:'html`<ic-date-input\n      label="When would you like to collect your coffee?"\n      helper-text="We will have your order ready for you on this date"\n    ></ic-date-input>`'},loki:{skip:!0}};const hideHelperText=()=>lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      helper-text="You cannot see me, but you can hear me"
      hide-helper-text="true"
    ></ic-date-input>`;hideHelperText.storyName="Hide helper text",hideHelperText.parameters={storySource:{source:'html`<ic-date-input\n      label="When would you like to collect your coffee?"\n      helper-text="You cannot see me, but you can hear me"\n      hide-helper-text="true"\n    ></ic-date-input>`'},loki:{skip:!0}};const customValidation=()=>lit_html.dy`<ic-date-input
        label="When would you like to collect your coffee?"
        validation-status="error"
        validation-text="There is a coffee shortage forecast for that day. Please choose a different date."
      ></ic-date-input>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
        validation-status="warning"
        validation-text="Please be aware that there may be a coffee shortage on that day."
      ></ic-date-input>
      <br />
      <br />
      <ic-date-input
        label="When would you like to collect your coffee?"
        validation-status="success"
        validation-text="Your coffee will be available for you to collect on this day."
      ></ic-date-input> `;customValidation.storyName="Custom validation",customValidation.parameters={storySource:{source:'html`<ic-date-input\n        label="When would you like to collect your coffee?"\n        validation-status="error"\n        validation-text="There is a coffee shortage forecast for that day. Please choose a different date."\n      ></ic-date-input>\n      <br />\n      <br />\n      <ic-date-input\n        label="When would you like to collect your coffee?"\n        validation-status="warning"\n        validation-text="Please be aware that there may be a coffee shortage on that day."\n      ></ic-date-input>\n      <br />\n      <br />\n      <ic-date-input\n        label="When would you like to collect your coffee?"\n        validation-status="success"\n        validation-text="Your coffee will be available for you to collect on this day."\n      ></ic-date-input> `'},loki:{skip:!0}};const disabledPastDates=()=>lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      disable-past
    ></ic-date-input>`;disabledPastDates.storyName="Disabled past dates",disabledPastDates.parameters={storySource:{source:'html`<ic-date-input\n      label="When would you like to collect your coffee?"\n      disable-past\n    ></ic-date-input>`'},loki:{skip:!0}};const disabledFutureDates=()=>lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      disable-future
    ></ic-date-input>`;disabledFutureDates.storyName="Disabled future dates",disabledFutureDates.parameters={storySource:{source:'html`<ic-date-input\n      label="When would you like to collect your coffee?"\n      disable-future\n    ></ic-date-input>`'},loki:{skip:!0}};const minAndMax=()=>lit_html.dy`<ic-date-input
      label="When would you like to collect your coffee?"
      min="02/01/2023"
      max="20-07-2023"
    ></ic-date-input>`;minAndMax.storyName="Min and max",minAndMax.parameters={storySource:{source:'html`<ic-date-input\n      label="When would you like to collect your coffee?"\n      min="02/01/2023"\n      max="20-07-2023"\n    ></ic-date-input>`'},loki:{skip:!0}};const ic_date_input_stories_form=()=>createDateInputForm();ic_date_input_stories_form.storyName="Form",ic_date_input_stories_form.parameters={storySource:{source:"createDateInputForm()"},loki:{skip:!0}};const withClearingValue=()=>lit_html.dy`<ic-date-input
        id="date-input-clear-value"
        label="When would you like to collect your coffee?"
        date-format="DD/MM/YYYY"
        value="21/01/2001"
      ></ic-date-input>
      <br />
      <ic-button id="update">Update date</ic-button>
      <ic-button id="null-btn">set null</ic-button>
      <ic-button id="empty-btn">set empty string</ic-button>
      <ic-button id="undef-btn">set undefined</ic-button>
      <script>
        var input = document.querySelector("#date-input-clear-value");
        var btn = document.querySelector("#update");
        btn.addEventListener("click", () => {
          input.value = new Date("05 May 2005");
        });
        var btn2 = document.querySelector("#null-btn");
        btn2.addEventListener("click", () => {
          input.value = null;
        });
        var btn3 = document.querySelector("#empty-btn");
        btn3.addEventListener("click", () => {
          input.value = "";
        });
        var btn4 = document.querySelector("#undef-btn");
        btn4.addEventListener("click", () => {
          input.value = undefined;
        });
      </script>`;withClearingValue.storyName="With clearing value",withClearingValue.parameters={storySource:{source:'html`<ic-date-input\n        id="date-input-clear-value"\n        label="When would you like to collect your coffee?"\n        date-format="DD/MM/YYYY"\n        value="21/01/2001"\n      ></ic-date-input>\n      <br />\n      <ic-button id="update">Update date</ic-button>\n      <ic-button id="null-btn">set null</ic-button>\n      <ic-button id="empty-btn">set empty string</ic-button>\n      <ic-button id="undef-btn">set undefined</ic-button>\n      <script>\n        var input = document.querySelector("#date-input-clear-value");\n        var btn = document.querySelector("#update");\n        btn.addEventListener("click", () => {\n          input.value = new Date("05 May 2005");\n        });\n        var btn2 = document.querySelector("#null-btn");\n        btn2.addEventListener("click", () => {\n          input.value = null;\n        });\n        var btn3 = document.querySelector("#empty-btn");\n        btn3.addEventListener("click", () => {\n          input.value = "";\n        });\n        var btn4 = document.querySelector("#undef-btn");\n        btn4.addEventListener("click", () => {\n          input.value = undefined;\n        });\n      <\/script>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Date Input",parameters:{componentAPI:{data:readme_namespaceObject}},tags:["stories-mdx"],includeStories:["defaultStory","icChangeEvent","withValue","dateObject","zuluTime","withHyphens","epochTime","required","disabled","sizes","customHelperText","hideHelperText","customValidation","disabledPastDates","disabledFutureDates","minAndMax","form","withClearingValue"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_date_input_stories=componentMeta,__namedExportsOrder=["defaultStory","icChangeEvent","withValue","dateObject","zuluTime","withHyphens","epochTime","required","disabled","sizes","customHelperText","hideHelperText","customValidation","disabledPastDates","disabledFutureDates","minAndMax","form","withClearingValue"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-date-input-ic-date-input-stories-mdx.30258673.iframe.bundle.js.map