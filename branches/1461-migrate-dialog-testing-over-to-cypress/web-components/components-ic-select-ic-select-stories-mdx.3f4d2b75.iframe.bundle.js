/*! For license information please see components-ic-select-ic-select-stories-mdx.3f4d2b75.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6005],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-select/ic-select.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,asyncSearchableDefault:()=>asyncSearchableDefault,asyncSelectDefault:()=>asyncSelectDefault,customComponents:()=>customComponents,customPlaceholder:()=>customPlaceholder,default:()=>ic_select_stories,defaultArgs:()=>defaultArgs,defaultInForm:()=>defaultInForm,defaultSelectPlayground:()=>defaultSelectPlayground,defaultStory:()=>defaultStory,defaultValue:()=>defaultValue,deprecatedSmall:()=>deprecatedSmall,disabled:()=>disabled,disabledOptions:()=>disabledOptions,emittingIcOptionSelectOnEnter:()=>emittingIcOptionSelectOnEnter,fullWidth:()=>fullWidth,groups:()=>groups,helperText:()=>helperText,hiddenLabel:()=>hiddenLabel,readOnly:()=>readOnly,recommended:()=>recommended,required:()=>required,scrollBehaviour:()=>scrollBehaviour,searchableDefault:()=>searchableDefault,searchableDefaultValue:()=>searchableDefaultValue,searchableDisabled:()=>searchableDisabled,searchableDisabledOptions:()=>searchableDisabledOptions,searchableEmittingIcOptionSelectOnEnter:()=>searchableEmittingIcOptionSelectOnEnter,searchableExternalFiltering:()=>searchableExternalFiltering,searchableFilterByStartOfOptions:()=>searchableFilterByStartOfOptions,searchableGroups:()=>searchableGroups,searchableGroupsGroupTitlesIncludedInSearch:()=>searchableGroupsGroupTitlesIncludedInSearch,searchableHelperText:()=>searchableHelperText,searchableHiddenLabel:()=>searchableHiddenLabel,searchableRecommended:()=>searchableRecommended,searchableRequired:()=>searchableRequired,searchableResetSubmitInFormSearchable:()=>searchableResetSubmitInFormSearchable,searchableScrollBehaviour:()=>searchableScrollBehaviour,searchableSelectPlayground:()=>searchableSelectPlayground,searchableSmall:()=>searchableSmall,searchableUpdateInputValueFromExternalRequest:()=>searchableUpdateInputValueFromExternalRequest,searchableValidation:()=>searchableValidation,searchableWithDescription:()=>searchableWithDescription,searchableWithDescriptionIncludedInSearch:()=>searchableWithDescriptionIncludedInSearch,small:()=>small,validation:()=>validation,validationArgType:()=>validationArgType,withClearButton:()=>withClearButton,withDescription:()=>withDescription});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-select\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                      | Attribute                        | Description                                                                                                                                                                                                                                                                | Type                                      | Default              |\n| ----------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | -------------------- |\n| `charactersUntilSuggestions`  | `characters-until-suggestions`   | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore.<br/><br/>                                                                                                                                                                            | `number`                                  | `0`                  |\n| `debounce`                    | `debounce`                       | The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.                                                                                                                                                                         | `number`                                  | `0`                  |\n| `disableFilter`               | `disable-filter`                 | If `true`, the built in filtering will be disabled for a searchable variant. For example, if options will already be filtered from external source.                                                                                                                        | `boolean`                                 | `false`              |\n| `disabled`                    | `disabled`                       | If `true`, the disabled state will be set.                                                                                                                                                                                                                                 | `boolean`                                 | `false`              |\n| `emptyOptionListText`         | `empty-option-list-text`         | The text displayed when there are no options in the option list.                                                                                                                                                                                                           | `string`                                  | `"No results found"` |\n| `form`                        | `form`                           | The <form> element to associate the select with.                                                                                                                                                                                                                           | `string`                                  | `undefined`          |\n| `formaction`                  | `formaction`                     | The URL that processes the information submitted by the select. It overrides the action attribute of the select\'s form owner. Does nothing if there is no form owner. This prop should only be used with searchable select and will only be applied if searchable is true. | `string`                                  | `undefined`          |\n| `formenctype`                 | `formenctype`                    | The way the submitted form data is encoded. This prop should only be used with searchable select and will only be applied if searchable is true.                                                                                                                           | `string`                                  | `undefined`          |\n| `formmethod`                  | `formmethod`                     | The HTTP method used to submit the form. This prop should only be used with searchable select and will only be applied if searchable is true.                                                                                                                              | `string`                                  | `undefined`          |\n| `formnovalidate`              | `formnovalidate`                 | If `true`, the form will not be validated when submitted. This prop should only be used with searchable select and will only be applied if searchable is true.                                                                                                             | `boolean`                                 | `undefined`          |\n| `formtarget`                  | `formtarget`                     | The place to display the response from submitting the form. It overrides the target attribute of the select\'s form owner. This prop should only be used with searchable select and will only be applied if searchable is true.                                             | `string`                                  | `undefined`          |\n| `fullWidth`                   | `full-width`                     | If `true`, the select element will fill the width of the container. This prop should only be used with searchable select and will only be applied if searchable is true.                                                                                                   | `boolean`                                 | `false`              |\n| `helperText`                  | `helper-text`                    | The helper text that will be displayed for additional field guidance.                                                                                                                                                                                                      | `string`                                  | `""`                 |\n| `hideLabel`                   | `hide-label`                     | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                                                                                                                         | `boolean`                                 | `false`              |\n| `includeDescriptionsInSearch` | `include-descriptions-in-search` | If `true`, descriptions of options will be included when filtering options in a searchable select. Only applies to built in filtering.                                                                                                                                     | `boolean`                                 | `false`              |\n| `includeGroupTitlesInSearch`  | `include-group-titles-in-search` | If `true`, group titles of grouped options will be included when filtering options in a searchable select. Only applies to built in filtering.                                                                                                                             | `boolean`                                 | `false`              |\n| `label` _(required)_          | `label`                          | The label for the select.                                                                                                                                                                                                                                                  | `string`                                  | `undefined`          |\n| `loading`                     | `loading`                        | If `true`, the loading state will be triggered when fetching options asyncronously.                                                                                                                                                                                        | `boolean`                                 | `false`              |\n| `loadingErrorLabel`           | `loading-error-label`            | The message displayed when external loading times out.                                                                                                                                                                                                                     | `string`                                  | `"Loading Error"`    |\n| `loadingLabel`                | `loading-label`                  | The message displayed whilst the options are being loaded externally.                                                                                                                                                                                                      | `string`                                  | `"Loading..."`       |\n| `name`                        | `name`                           | The name of the control, which is submitted with the form data.                                                                                                                                                                                                            | `string`                                  | `this.inputId`       |\n| `options`                     | --                               | The possible selection options.                                                                                                                                                                                                                                            | `IcMenuOption[]`                          | `[]`                 |\n| `placeholder`                 | `placeholder`                    | The placeholder value to be displayed.                                                                                                                                                                                                                                     | `string`                                  | `"Select an option"` |\n| `readonly`                    | `readonly`                       | If `true`, the readonly state will be set.                                                                                                                                                                                                                                 | `boolean`                                 | `false`              |\n| `required`                    | `required`                       | If `true`, the select will require a value.                                                                                                                                                                                                                                | `boolean`                                 | `false`              |\n| `searchMatchPosition`         | `search-match-position`          | Whether the search string of the searchable select should match the start of or anywhere in the options. Only applies to built in filtering.                                                                                                                               | `"anywhere" \\| "start"`                   | `"anywhere"`         |\n| `searchable`                  | `searchable`                     | If `true`, a searchable variant of the select will be displayed which can be typed in to filter options.                                                                                                                                                                   | `boolean`                                 | `false`              |\n| `selectOnEnter`               | `select-on-enter`                | If `true`, the icOptionSelect event will be fired on enter instead of ArrowUp and ArrowDown.                                                                                                                                                                               | `boolean`                                 | `false`              |\n| `showClearButton`             | `show-clear-button`              | If `true`, a button which clears the select input when clicked will be displayed. The button will always appear on the searchable select.                                                                                                                                  | `boolean`                                 | `false`              |\n| `size`                        | `size`                           | The size of the select component.                                                                                                                                                                                                                                          | `"default" \\| "small"`                    | `"default"`          |\n| `small`                       | `small`                          | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/>                                                                                                                                        | `boolean`                                 | `false`              |\n| `timeout`                     | `timeout`                        | If using external filtering, set a timeout for when loading takes too long.                                                                                                                                                                                                | `number`                                  | `undefined`          |\n| `validationStatus`            | `validation-status`              | The validation status - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                                                                                                                                                            | `"" \\| "error" \\| "success" \\| "warning"` | `""`                 |\n| `validationText`              | `validation-text`                | The text to display as the validation message.                                                                                                                                                                                                                             | `string`                                  | `""`                 |\n| `value`                       | `value`                          | The value of the select, reflected by the value of the currently selected option. For the searchable variant, the value is also reflected by the user input.                                                                                                               | `string`                                  | `undefined`          |\n\n\n## Events\n\n| Event            | Description                                                                                                                                                | Type                                     |\n| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |\n| `icBlur`         | Emitted when the select loses focus.                                                                                                                       | `CustomEvent<void>`                      |\n| `icChange`       | Emitted when the value changes.                                                                                                                            | `CustomEvent<IcValueEventDetail>`        |\n| `icClear`        | Emitted when the clear button is clicked.                                                                                                                  | `CustomEvent<void>`                      |\n| `icFocus`        | Emitted when the select gains focus.                                                                                                                       | `CustomEvent<void>`                      |\n| `icInput`        | Emitted when a keyboard input occurred.                                                                                                                    | `CustomEvent<IcValueEventDetail>`        |\n| `icOptionSelect` | Emitted when an option is highlighted within the menu. Highlighting a menu item will also trigger an `icChange/onIcChange` due to the value being updated. | `CustomEvent<IcOptionSelectEventDetail>` |\n| `icRetryLoad`    | Emitted when the \'retry loading\' button is clicked for a searchable variant.                                                                               | `CustomEvent<IcValueEventDetail>`        |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the input box.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## CSS Custom Properties\n\n| Name                | Description              |\n| ------------------- | ------------------------ |\n| `--ic-z-index-menu` | z-index of select menu   |\n| `--input-width`     | Width of the input field |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-input-container](../ic-input-container)\n- [ic-input-label](../ic-input-label)\n- [ic-input-component-container](../ic-input-component-container)\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n- [ic-menu](../ic-menu)\n- [ic-input-validation](../ic-input-validation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-select --\x3e ic-input-container\n  ic-select --\x3e ic-input-label\n  ic-select --\x3e ic-input-component-container\n  ic-select --\x3e ic-typography\n  ic-select --\x3e ic-button\n  ic-select --\x3e ic-menu\n  ic-select --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-menu --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-typography\n  ic-menu --\x3e ic-button\n  ic-input-validation --\x3e ic-typography\n  style ic-select fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={disabled:!1,"full-width":!1,"helper-text":"Such as Arabica, Robusta or Liberica.","hide-label":!1,label:"What is your favourite coffee?",placeholder:"Select an option",readonly:!1,required:!1,small:!1,"validation-status":"none","validation-text":""},validationArgType={"validation-status":{options:["none","error","success","warning"],control:{type:"inline-radio"}}};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Select",component:"ic-select"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n","\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-1"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-1");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"async-select-default",children:"Async select default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Async select default",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          label="What is your favourite coffee?"
          loading
          id="select-2"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-2");
          select.options = [];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
          setTimeout(() => {
            select.options = [
              { label: "Cappuccino", value: "Cap" },
              { label: "Latte", value: "Lat" },
              { label: "Americano", value: "Ame" },
              { label: "Filter", value: "Fil" },
              { label: "Flat white", value: "Fla" },
              { label: "Mocha", value: "Moc" },
              { label: "Macchiato", value: "Mac" },
              { label: "Café au lait", value: "Caf" },
              { label: "Espresso", value: "Esp" },
              { label: "Cortado", value: "Cor" },
              { label: "Ristretto", value: "Ris" },
            ];
          }, 5000);
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-value",children:"Default value"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default value",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-3"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-3");
          select.value = "Cap";
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-clear-button",children:"With clear button"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With clear button",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-4"
          label="What is your favourite coffee?"
          show-clear-button
        ></ic-select>
        <script>
          var select = document.querySelector("#select-4");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-description",children:"With description"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With description",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-5"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-5");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Helper text",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-6"
          label="What is your favourite coffee?"
          helper-text="Some helper text"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-6");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-placeholder",children:"Custom placeholder"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom placeholder",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-7"
          label="What is your favourite coffee?"
          placeholder="Placeholder goes here"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-7");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-components",children:"Custom components"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom components",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-1"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-1");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
              element: {
                component: \`<ic-status-tag label="Neutral status"></ic-status-tag>\`,
                ariaLabel: "Neutral status tag",
              },
              icon: \`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g id="warning"><path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>\`,
            },
            {
              label: "Americano",
              value: "Ame",
              icon: \`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
            <g id="warning">
            <path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />
            </g>
            </svg>\`,
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Small",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-8"
          label="What is your favourite coffee?"
          size="small"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-8");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Deprecated - small",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-8"
          label="What is your favourite coffee?"
          small
        ></ic-select>
        <script>
          var select = document.querySelector("#select-8");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-9"
          label="What is your favourite coffee?"
          disabled
        ></ic-select>
        <script>
          var select = document.querySelector("#select-9");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-options",children:"Disabled options"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled options",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-10"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-10");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat", disabled: true },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Full width",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-11"
          label="What is your favourite coffee?"
          full-width="true"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-11");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hidden-label",children:"Hidden label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Hidden label",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-12"
          label="What is your favourite coffee?"
          hide-label
        ></ic-select>
        <script>
          var select = document.querySelector("#select-12");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"required",children:"Required"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Required",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-13"
          label="What is your favourite coffee?"
          required
        ></ic-select>
        <script>
          var select = document.querySelector("#select-13");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"read-only",children:"Read-only"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Read-only",parameters:{loki:{skip:!0}},children:()=>lit_html.dy`<ic-select
          id="select-14"
          label="What is your favourite coffee?"
          readonly
          value="Cap"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-14");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"groups",children:"Groups"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Groups",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-15"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-15");
          select.options = [
            {
              label: "Fancy",
              children: [
                { label: "Cappuccino", value: "Cap" },
                { label: "Flat white", value: "Flat" },
              ],
            },
            {
              label: "Boring",
              children: [
                { label: "Filter", value: "Fil" },
                { label: "Latte", value: "Lat" },
              ],
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"recommended",children:"Recommended"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Recommended",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-16"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-16");
          select.options = [
            { label: "Cappuccino", value: "Cappuccino" },
            { label: "Flat white", value: "Flat white", recommended: true },
            { label: "Latte", value: "Latte" },
            { label: "Americano", value: "Americano", recommended: true },
            { label: "Filter", value: "Fil" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Validation",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="ic-select-1"
          label="What is your favourite coffee?"
          validation-status="success"
          validation-text="Success message"
        ></ic-select>
        <script>
          var select1 = document.querySelector("#ic-select-1");
          var option1 = "Cappuccino";
          select1.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select1.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>
        <ic-select
          id="ic-select-2"
          label="What is your favourite coffee?"
          validation-status="warning"
          validation-text="Warning message"
        ></ic-select>
        <script>
          var select2 = document.querySelector("#ic-select-2");
          var option2 = "Cappuccino";
          select2.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select2.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>
        <ic-select
          id="ic-select-3"
          label="What is your favourite coffee?"
          validation-status="error"
          validation-text="Error message"
        ></ic-select>
        <script>
          var select3 = document.querySelector("#ic-select-3");
          var option3 = "Cappuccino";
          select3.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select3.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"scroll-behaviour",children:"Scroll behaviour"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Scroll behaviour",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-17"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-17");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
            { label: "Café au lait", value: "Caf" },
            { label: "Espresso", value: "Esp" },
            { label: "Cortado", value: "Cor" },
            { label: "Ristretto", value: "Ris" },
            { label: "Latte macchiato", value: "Lam" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-in-form---this-shows-how-the-select-works-within-a-form-the-value-will-appear-in-the-consolelog-on-submit",children:"Default in form - This shows how the select works within a form. The value will appear in the console.log on submit."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default in form",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <form>
          <ic-select
            id="select-18"
            label="What is your favourite coffee?"
          ></ic-select>
          <br />
          <br />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          var select = document.querySelector("#select-18");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(document.querySelector("input.ic-input").value);
          });
        </script>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"emitting-icoptionselect-on-enter",children:"Emitting icOptionSelect on enter"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Emitting icOptionSelect on enter",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-1"
          label="What is your favourite coffee?"
          select-on-enter="true"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-1");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icOptionSelect", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-default",children:"Searchable default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable default",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-19"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-19");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"async-searchable-default",children:"Async searchable default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Async searchable default",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-20"
          label="What is your favourite coffee?"
          searchable
          loading
        ></ic-select>
        <script>
          var select = document.querySelector("#select-20");
          select.options = [];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
          setTimeout(() => {
            select.options = [
              { label: "Cappuccino", value: "Cap" },
              { label: "Latte", value: "Lat" },
              { label: "Americano", value: "Ame" },
              { label: "Filter", value: "Fil" },
              { label: "Flat white", value: "Fla" },
              { label: "Mocha", value: "Moc" },
              { label: "Macchiato", value: "Mac" },
              { label: "Café au lait", value: "Caf" },
              { label: "Espresso", value: "Esp" },
              { label: "Cortado", value: "Cor" },
              { label: "Ristretto", value: "Ris" },
            ];
          }, 5000);
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-default-value",children:"Searchable default value"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable default value",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-21"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-21");
          select.value = "Lat";
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-filter-by-start-of-options",children:"Searchable filter by start of options"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable filter by start of options",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-22"
          label="What is your favourite coffee?"
          searchable
          search-match-position="start"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-22");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-with-description",children:"Searchable with description"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable with description",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-23"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-23");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Filter",
              value: "Fil",
              description: "Coffee filtered using paper or a mesh",
            },
            {
              label: "Flat white",
              value: "Fla",
              description:
                "Coffee without froth made with espresso and hot steamed milk",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
            {
              label: "Macchiato",
              value: "Mac",
              description: "Espresso coffee with a dash of frothy steamed milk",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-with-description-included-in-search",children:"Searchable with description (included in search)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable with description (included in search)",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-24"
          label="What is your favourite coffee?"
          searchable
          include-descriptions-in-search
        ></ic-select>
        <script>
          var select = document.querySelector("#select-24");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Filter",
              value: "Fil",
              description: "Coffee filtered using paper or a mesh",
            },
            {
              label: "Flat white",
              value: "Fla",
              description:
                "Coffee without froth made with espresso and hot steamed milk",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
            {
              label: "Macchiato",
              value: "Mac",
              description: "Espresso coffee with a dash of frothy steamed milk",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-helper-text",children:"Searchable helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable helper text",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-25"
          label="What is your favourite coffee?"
          searchable
          helper-text="Some helper text"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-25");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-small",children:"Searchable small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable small",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-26"
          label="What is your favourite coffee?"
          searchable
          size="small"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-26");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-disabled",children:"Searchable disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable disabled",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-27"
          label="What is your favourite coffee?"
          searchable
          disabled
        ></ic-select>
        <script>
          var select = document.querySelector("#select-27");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-disabled-options",children:"Searchable disabled options"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable disabled options",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-28"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-28");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame", disabled: true },
            { label: "Filter", value: "Fil", disabled: true },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac", disabled: true },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-hidden-label",children:"Searchable hidden label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable hidden label",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-29"
          label="What is your favourite coffee?"
          searchable
          hide-label
        ></ic-select>
        <script>
          var select = document.querySelector("#select-29");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-required",children:"Searchable required"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable required",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-30"
          label="What is your favourite coffee?"
          searchable
          required
        ></ic-select>
        <script>
          var select = document.querySelector("#select-30");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-groups",children:"Searchable groups"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable groups",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-31"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-31");
          select.options = [
            {
              label: "Fancy",
              children: [
                { label: "Cappuccino", value: "Cap" },
                { label: "Flat white", value: "Flat" },
              ],
            },
            {
              label: "Boring",
              children: [
                { label: "Filter", value: "Fil" },
                { label: "Latte", value: "Lat" },
              ],
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-group-group-titles-included-in-search",children:"Searchable group (group titles included in search)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable groups (group titles included in search)",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-32"
          label="What is your favourite coffee?"
          searchable
          include-group-titles-in-search
        ></ic-select>
        <script>
          var select = document.querySelector("#select-32");
          select.options = [
            {
              label: "Fancy",
              children: [
                { label: "Cappuccino", value: "Cap" },
                { label: "Flat white", value: "Flat" },
              ],
            },
            {
              label: "Boring",
              children: [
                { label: "Filter", value: "Fil" },
                { label: "Latte", value: "Lat" },
              ],
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-recommended",children:"Searchable recommended"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable recommended",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-33"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-33");
          select.options = [
            { label: "Cappuccino", value: "Cappuccino" },
            { label: "Flat white", value: "Flat white", recommended: true },
            { label: "Latte", value: "Latte" },
            { label: "Americano", value: "Americano", recommended: true },
            { label: "Filter", value: "Fil" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-validation",children:"Searchable validation"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable validation",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="ic-select-4"
          label="What is your favourite coffee?"
          validation-status="success"
          validation-text="Success message"
          searchable
        ></ic-select>
        <script>
          var select1 = document.querySelector("#ic-select-4");
          var option1 = "Cappuccino";
          select1.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select1.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>
        <ic-select
          id="ic-select-5"
          label="What is your favourite coffee?"
          validation-status="warning"
          validation-text="Warning message"
          searchable
        ></ic-select>
        <script>
          var select2 = document.querySelector("#ic-select-5");
          var option2 = "Cappuccino";
          select2.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select2.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>
        <ic-select
          id="ic-select-6"
          label="What is your favourite coffee?"
          validation-status="error"
          validation-text="Error message"
          searchable
        ></ic-select>
        <script>
          var select3 = document.querySelector("#ic-select-6");
          var option3 = "Cappuccino";
          select3.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select3.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-scroll-behaviour",children:"Searchable scroll behaviour"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable scroll behaviour",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-34"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-34");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
            { label: "Café au lait", value: "Caf" },
            { label: "Espresso", value: "Esp" },
            { label: "Cortado", value: "Cor" },
            { label: "Ristretto", value: "Ris" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-external-filtering",children:"Searchable external filtering"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable external filtering",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          label="What is your favourite coffee?"
          searchable="true"
          debounce="300"
          disable-filter="true"
          id="external-filter-select"
          timeout="1000"
        ></ic-select>
        <br />
        <ic-typography>
          Suggested search options: Espresso, Double Espresso, Flat White,
          Filter, Cappuccino, Americano, Mocha, Macchiato.
        </ic-typography>
        <br />
        <ic-typography>
          The IcChange event will trigger 300ms after you finish typing. 1
          second later, the options in the select menu will be updated.
        </ic-typography>
        <script>
          var mockData = [
            { label: "Espresso", value: "Esp" },
            { label: "Double Espresso", value: "Dou" },
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          function handleFilter(event) {
            var option = event.detail.value;
            console.log(option);
            if (option !== selectedValue) {
              if (option) {
                select.loading = true;
                mockAPI = (query) => {
                  filteredResults = mockData.filter((m) =>
                    m.label.toLowerCase().includes(query.toLowerCase())
                  );
                  return new Promise((resolve) =>
                    setTimeout(
                      () => resolve(filteredResults),
                      event.type === "icChange" ? 2000 : 900
                    )
                  );
                };
                mockAPI(option).then((results) => (select.options = results));
              } else {
                select.options = [];
              }
            }
          }
          var select = document.querySelector("#external-filter-select");
          var selectedValue = "";
          select.addEventListener("icClear", function (event) {
            select.options = [];
          });
          select.addEventListener("icOptionSelect", function (event) {
            selectedValue = event.detail.value;
          });
          select.addEventListener("icChange", handleFilter);
          select.addEventListener("icRetryLoad", handleFilter);
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable---resetsubmit-in-form-searchable---this-shows-how-the-select-works-within-a-form-the-value-will-appear-in-the-consolelog-on-submit",children:"Searchable - Reset/Submit in form searchable - This shows how the select works within a form. The value will appear in the console.log on submit."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable: Reset/Submit in form searchable",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <form>
          <ic-select
            id="select-35"
            label="What is your favourite coffee?"
            searchable="true"
          ></ic-select>
          <br />
          <br />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          var select = document.querySelector("#select-35");
          select.value = "Cap";
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(document.querySelector("input.ic-input").value);
          });
        </script>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable---update-input-value-from-external-request",children:"Searchable - Update input value from external request"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable - Update input value from external request",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-section-container>
          <ic-select
            id="search-select"
            searchable="true"
            label="What is your favourite coffee? (searchable)"
          ></ic-select>
        </ic-section-container>
        <script>
          const searchSelect = document.getElementById("search-select");
          let options = [];
          options.push({ label: "unknown", value: "unknown" });
          options.push({ label: "item 1", value: "item-1" });
          options.push({ label: "item 2", value: "item-2" });
          options.push({ label: "item 3", value: "item-3" });
          searchSelect.options = options;
          let searchoption = "";
          searchSelect.addEventListener("icChange", function (event) {
            console.log("icChange", event.detail.value);
            searchoption = event.detail.value;
            if (searchoption === "unknown") {
              searchoption = "item-1";
              searchSelect.value = "item-1";
            } else {
              searchSelect.value = searchoption;
            }
          });
          searchSelect.addEventListener("icOptionSelect", function (event) {
            console.log("icOptionSelect", event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-emitting-icoptionselect-on-enter",children:"Searchable emitting icOptionSelect on enter"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable emitting icOptionSelect on enter",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-select
          id="select-1"
          label="What is your favourite coffee?"
          select-on-enter="true"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-1");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icOptionSelect", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-select-playground",children:"Default select playground"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default select playground",parameters:{loki:{skip:!0}},args:{...defaultArgs,"show-clear-button":!1},argTypes:{...validationArgType},children:args=>lit_html.dy` <ic-select
          id="select-playground"
          disabled=${args.disabled}
          full-width=${args["full-width"]}
          helper-text=${args["helper-text"]}
          hide-label=${args["hide-label"]}
          label=${args.label}
          placeholder=${args.placeholder}
          readonly=${args.readonly}
          required=${args.required}
          show-clear-button=${args["show-clear-button"]}
          small=${args.small}
          validation-status=${args["validation-status"]}
          validation-text=${args["validation-text"]}
        >
        </ic-select>
        <script>
          var select = document.querySelector("#select-playground");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Boring",
              children: [
                {
                  label: "Latte",
                  value: "Lat",
                  description: "A milkier coffee than a cappuccino",
                },
                {
                  label: "Filter",
                  value: "Fil",
                  description: "Coffee filtered using paper or a mesh",
                },
              ],
            },
            {
              label: "Fancy",
              children: [
                {
                  label: "Flat white",
                  value: "Fla",
                  description:
                    "Coffee without froth made with espresso and hot steamed milk",
                },
                {
                  label: "Macchiato",
                  value: "Mac",
                  description:
                    "Espresso coffee with a dash of frothy steamed milk",
                },
              ],
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"searchable-select-playground",children:"Searchable select playground"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Searchable select playground",parameters:{loki:{skip:!0}},args:{...defaultArgs,"include-descriptions-in-search":!1,"include-group-titles-in-search":!1,loading:!1,"loading-label":"Loading...","search-match-position":"anywhere"},argTypes:{...validationArgType,"search-match-position":{options:["anywhere","start"],control:{type:"inline-radio"}}},children:args=>lit_html.dy` <ic-select
          id="select-searchable-playground"
          disabled=${args.disabled}
          full-width=${args["full-width"]}
          helper-text=${args["helper-text"]}
          hide-label=${args["hide-label"]}
          include-descriptions-in-search=${args["include-descriptions-in-search"]}
          include-group-titles-in-search=${args["include-group-titles-in-search"]}
          loading=${args.loading}
          loading-label=${args["loading-label"]}
          label=${args.label}
          placeholder=${args.placeholder}
          readonly=${args.readonly}
          required=${args.required}
          search-match-position=${args["search-match-position"]}
          searchable="true"
          small=${args.small}
          validation-status=${args["validation-status"]}
          validation-text=${args["validation-text"]}
        >
        </ic-select>
        <script>
          var select = document.querySelector("#select-searchable-playground");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Boring",
              children: [
                {
                  label: "Latte",
                  value: "Lat",
                  description: "A milkier coffee than a cappuccino",
                },
                {
                  label: "Filter",
                  value: "Fil",
                  description: "Coffee filtered using paper or a mesh",
                },
              ],
            },
            {
              label: "Fancy",
              children: [
                {
                  label: "Flat white",
                  value: "Fla",
                  description:
                    "Coffee without froth made with espresso and hot steamed milk",
                },
                {
                  label: "Macchiato",
                  value: "Mac",
                  description:
                    "Espresso coffee with a dash of frothy steamed milk",
                },
              ],
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`})})]})}const defaultStory=args=>lit_html.dy`<ic-select
          id="select-1"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-1");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`<ic-select\n          id="select-1"\n          label="What is your favourite coffee?"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-1");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const asyncSelectDefault=args=>lit_html.dy`<ic-select
          label="What is your favourite coffee?"
          loading
          id="select-2"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-2");
          select.options = [];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
          setTimeout(() => {
            select.options = [
              { label: "Cappuccino", value: "Cap" },
              { label: "Latte", value: "Lat" },
              { label: "Americano", value: "Ame" },
              { label: "Filter", value: "Fil" },
              { label: "Flat white", value: "Fla" },
              { label: "Mocha", value: "Moc" },
              { label: "Macchiato", value: "Mac" },
              { label: "Café au lait", value: "Caf" },
              { label: "Espresso", value: "Esp" },
              { label: "Cortado", value: "Cor" },
              { label: "Ristretto", value: "Ris" },
            ];
          }, 5000);
        </script>`;asyncSelectDefault.storyName="Async select default",asyncSelectDefault.parameters={storySource:{source:'args => html`<ic-select\n          label="What is your favourite coffee?"\n          loading\n          id="select-2"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-2");\n          select.options = [];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n          setTimeout(() => {\n            select.options = [\n              { label: "Cappuccino", value: "Cap" },\n              { label: "Latte", value: "Lat" },\n              { label: "Americano", value: "Ame" },\n              { label: "Filter", value: "Fil" },\n              { label: "Flat white", value: "Fla" },\n              { label: "Mocha", value: "Moc" },\n              { label: "Macchiato", value: "Mac" },\n              { label: "Café au lait", value: "Caf" },\n              { label: "Espresso", value: "Esp" },\n              { label: "Cortado", value: "Cor" },\n              { label: "Ristretto", value: "Ris" },\n            ];\n          }, 5000);\n        <\/script>`'},loki:{skip:!0}};const defaultValue=args=>lit_html.dy`<ic-select
          id="select-3"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-3");
          select.value = "Cap";
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;defaultValue.storyName="Default value",defaultValue.parameters={storySource:{source:'args => html`<ic-select\n          id="select-3"\n          label="What is your favourite coffee?"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-3");\n          select.value = "Cap";\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const withClearButton=args=>lit_html.dy`<ic-select
          id="select-4"
          label="What is your favourite coffee?"
          show-clear-button
        ></ic-select>
        <script>
          var select = document.querySelector("#select-4");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;withClearButton.storyName="With clear button",withClearButton.parameters={storySource:{source:'args => html`<ic-select\n          id="select-4"\n          label="What is your favourite coffee?"\n          show-clear-button\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-4");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const withDescription=args=>lit_html.dy`<ic-select
          id="select-5"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-5");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;withDescription.storyName="With description",withDescription.parameters={storySource:{source:'args => html`<ic-select\n          id="select-5"\n          label="What is your favourite coffee?"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-5");\n          select.options = [\n            {\n              label: "Cappuccino",\n              value: "Cap",\n              description: "Coffee frothed up with pressurised steam",\n            },\n            {\n              label: "Latte",\n              value: "Lat",\n              description: "A milkier coffee than a cappuccino",\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              description: "Espresso coffee diluted with hot water",\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const helperText=args=>lit_html.dy`<ic-select
          id="select-6"
          label="What is your favourite coffee?"
          helper-text="Some helper text"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-6");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'args => html`<ic-select\n          id="select-6"\n          label="What is your favourite coffee?"\n          helper-text="Some helper text"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-6");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const customPlaceholder=args=>lit_html.dy`<ic-select
          id="select-7"
          label="What is your favourite coffee?"
          placeholder="Placeholder goes here"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-7");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;customPlaceholder.storyName="Custom placeholder",customPlaceholder.parameters={storySource:{source:'args => html`<ic-select\n          id="select-7"\n          label="What is your favourite coffee?"\n          placeholder="Placeholder goes here"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-7");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const customComponents=args=>lit_html.dy`<ic-select
          id="select-1"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-1");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
              element: {
                component: \`<ic-status-tag label="Neutral status"></ic-status-tag>\`,
                ariaLabel: "Neutral status tag",
              },
              icon: \`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g id="warning"><path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>\`,
            },
            {
              label: "Americano",
              value: "Ame",
              icon: \`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
            <g id="warning">
            <path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />
            </g>
            </svg>\`,
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;customComponents.storyName="Custom components",customComponents.parameters={storySource:{source:'args => html`<ic-select\n          id="select-1"\n          label="What is your favourite coffee?"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-1");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            {\n              label: "Latte",\n              value: "Lat",\n              description: "A milkier coffee than a cappuccino",\n              element: {\n                component: \\`<ic-status-tag label="Neutral status"></ic-status-tag>\\`,\n                ariaLabel: "Neutral status tag",\n              },\n              icon: \\`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g id="warning"><path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>\\`,\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              icon: \\`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">\n            <g id="warning">\n            <path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />\n            </g>\n            </svg>\\`,\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const small=args=>lit_html.dy`<ic-select
          id="select-8"
          label="What is your favourite coffee?"
          size="small"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-8");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;small.storyName="Small",small.parameters={storySource:{source:'args => html`<ic-select\n          id="select-8"\n          label="What is your favourite coffee?"\n          size="small"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-8");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const deprecatedSmall=args=>lit_html.dy`<ic-select
          id="select-8"
          label="What is your favourite coffee?"
          small
        ></ic-select>
        <script>
          var select = document.querySelector("#select-8");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'args => html`<ic-select\n          id="select-8"\n          label="What is your favourite coffee?"\n          small\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-8");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const disabled=args=>lit_html.dy`<ic-select
          id="select-9"
          label="What is your favourite coffee?"
          disabled
        ></ic-select>
        <script>
          var select = document.querySelector("#select-9");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html`<ic-select\n          id="select-9"\n          label="What is your favourite coffee?"\n          disabled\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-9");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const disabledOptions=args=>lit_html.dy`<ic-select
          id="select-10"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-10");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat", disabled: true },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;disabledOptions.storyName="Disabled options",disabledOptions.parameters={storySource:{source:'args => html`<ic-select\n          id="select-10"\n          label="What is your favourite coffee?"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-10");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat", disabled: true },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const fullWidth=args=>lit_html.dy`<ic-select
          id="select-11"
          label="What is your favourite coffee?"
          full-width="true"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-11");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'args => html`<ic-select\n          id="select-11"\n          label="What is your favourite coffee?"\n          full-width="true"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-11");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const hiddenLabel=args=>lit_html.dy`<ic-select
          id="select-12"
          label="What is your favourite coffee?"
          hide-label
        ></ic-select>
        <script>
          var select = document.querySelector("#select-12");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;hiddenLabel.storyName="Hidden label",hiddenLabel.parameters={storySource:{source:'args => html`<ic-select\n          id="select-12"\n          label="What is your favourite coffee?"\n          hide-label\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-12");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const required=args=>lit_html.dy`<ic-select
          id="select-13"
          label="What is your favourite coffee?"
          required
        ></ic-select>
        <script>
          var select = document.querySelector("#select-13");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;required.storyName="Required",required.parameters={storySource:{source:'args => html`<ic-select\n          id="select-13"\n          label="What is your favourite coffee?"\n          required\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-13");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const readOnly=()=>lit_html.dy`<ic-select
          id="select-14"
          label="What is your favourite coffee?"
          readonly
          value="Cap"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-14");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;readOnly.storyName="Read-only",readOnly.parameters={storySource:{source:'() => html`<ic-select\n          id="select-14"\n          label="What is your favourite coffee?"\n          readonly\n          value="Cap"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-14");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const groups=args=>lit_html.dy`<ic-select
          id="select-15"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-15");
          select.options = [
            {
              label: "Fancy",
              children: [
                { label: "Cappuccino", value: "Cap" },
                { label: "Flat white", value: "Flat" },
              ],
            },
            {
              label: "Boring",
              children: [
                { label: "Filter", value: "Fil" },
                { label: "Latte", value: "Lat" },
              ],
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;groups.storyName="Groups",groups.parameters={storySource:{source:'args => html`<ic-select\n          id="select-15"\n          label="What is your favourite coffee?"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-15");\n          select.options = [\n            {\n              label: "Fancy",\n              children: [\n                { label: "Cappuccino", value: "Cap" },\n                { label: "Flat white", value: "Flat" },\n              ],\n            },\n            {\n              label: "Boring",\n              children: [\n                { label: "Filter", value: "Fil" },\n                { label: "Latte", value: "Lat" },\n              ],\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const recommended=args=>lit_html.dy`<ic-select
          id="select-16"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-16");
          select.options = [
            { label: "Cappuccino", value: "Cappuccino" },
            { label: "Flat white", value: "Flat white", recommended: true },
            { label: "Latte", value: "Latte" },
            { label: "Americano", value: "Americano", recommended: true },
            { label: "Filter", value: "Fil" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;recommended.storyName="Recommended",recommended.parameters={storySource:{source:'args => html`<ic-select\n          id="select-16"\n          label="What is your favourite coffee?"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-16");\n          select.options = [\n            { label: "Cappuccino", value: "Cappuccino" },\n            { label: "Flat white", value: "Flat white", recommended: true },\n            { label: "Latte", value: "Latte" },\n            { label: "Americano", value: "Americano", recommended: true },\n            { label: "Filter", value: "Fil" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const validation=args=>lit_html.dy`<ic-select
          id="ic-select-1"
          label="What is your favourite coffee?"
          validation-status="success"
          validation-text="Success message"
        ></ic-select>
        <script>
          var select1 = document.querySelector("#ic-select-1");
          var option1 = "Cappuccino";
          select1.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select1.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>
        <ic-select
          id="ic-select-2"
          label="What is your favourite coffee?"
          validation-status="warning"
          validation-text="Warning message"
        ></ic-select>
        <script>
          var select2 = document.querySelector("#ic-select-2");
          var option2 = "Cappuccino";
          select2.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select2.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>
        <ic-select
          id="ic-select-3"
          label="What is your favourite coffee?"
          validation-status="error"
          validation-text="Error message"
        ></ic-select>
        <script>
          var select3 = document.querySelector("#ic-select-3");
          var option3 = "Cappuccino";
          select3.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select3.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;validation.storyName="Validation",validation.parameters={storySource:{source:'args => html`<ic-select\n          id="ic-select-1"\n          label="What is your favourite coffee?"\n          validation-status="success"\n          validation-text="Success message"\n        ></ic-select>\n        <script>\n          var select1 = document.querySelector("#ic-select-1");\n          var option1 = "Cappuccino";\n          select1.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select1.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="ic-select-2"\n          label="What is your favourite coffee?"\n          validation-status="warning"\n          validation-text="Warning message"\n        ></ic-select>\n        <script>\n          var select2 = document.querySelector("#ic-select-2");\n          var option2 = "Cappuccino";\n          select2.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select2.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="ic-select-3"\n          label="What is your favourite coffee?"\n          validation-status="error"\n          validation-text="Error message"\n        ></ic-select>\n        <script>\n          var select3 = document.querySelector("#ic-select-3");\n          var option3 = "Cappuccino";\n          select3.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select3.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const scrollBehaviour=args=>lit_html.dy`<ic-select
          id="select-17"
          label="What is your favourite coffee?"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-17");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
            { label: "Café au lait", value: "Caf" },
            { label: "Espresso", value: "Esp" },
            { label: "Cortado", value: "Cor" },
            { label: "Ristretto", value: "Ris" },
            { label: "Latte macchiato", value: "Lam" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;scrollBehaviour.storyName="Scroll behaviour",scrollBehaviour.parameters={storySource:{source:'args => html`<ic-select\n          id="select-17"\n          label="What is your favourite coffee?"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-17");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n            { label: "Café au lait", value: "Caf" },\n            { label: "Espresso", value: "Esp" },\n            { label: "Cortado", value: "Cor" },\n            { label: "Ristretto", value: "Ris" },\n            { label: "Latte macchiato", value: "Lam" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const defaultInForm=args=>lit_html.dy`
        <form>
          <ic-select
            id="select-18"
            label="What is your favourite coffee?"
          ></ic-select>
          <br />
          <br />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          var select = document.querySelector("#select-18");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(document.querySelector("input.ic-input").value);
          });
        </script>
      `;defaultInForm.storyName="Default in form",defaultInForm.parameters={storySource:{source:'args => html`\n        <form>\n          <ic-select\n            id="select-18"\n            label="What is your favourite coffee?"\n          ></ic-select>\n          <br />\n          <br />\n          <input type="submit" value="Submit" />\n          <input type="reset" value="Reset" />\n        </form>\n        <script>\n          var select = document.querySelector("#select-18");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n          document.querySelector("form").addEventListener("submit", (ev) => {\n            ev.preventDefault();\n            console.log(document.querySelector("input.ic-input").value);\n          });\n        <\/script>\n      `'},loki:{skip:!0}};const emittingIcOptionSelectOnEnter=args=>lit_html.dy`<ic-select
          id="select-1"
          label="What is your favourite coffee?"
          select-on-enter="true"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-1");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icOptionSelect", function (event) {
            console.log(event.detail.value);
          });
        </script>`;emittingIcOptionSelectOnEnter.storyName="Emitting icOptionSelect on enter",emittingIcOptionSelectOnEnter.parameters={storySource:{source:'args => html`<ic-select\n          id="select-1"\n          label="What is your favourite coffee?"\n          select-on-enter="true"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-1");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icOptionSelect", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableDefault=args=>lit_html.dy`<ic-select
          id="select-19"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-19");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableDefault.storyName="Searchable default",searchableDefault.parameters={storySource:{source:'args => html`<ic-select\n          id="select-19"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-19");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const asyncSearchableDefault=args=>lit_html.dy`<ic-select
          id="select-20"
          label="What is your favourite coffee?"
          searchable
          loading
        ></ic-select>
        <script>
          var select = document.querySelector("#select-20");
          select.options = [];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
          setTimeout(() => {
            select.options = [
              { label: "Cappuccino", value: "Cap" },
              { label: "Latte", value: "Lat" },
              { label: "Americano", value: "Ame" },
              { label: "Filter", value: "Fil" },
              { label: "Flat white", value: "Fla" },
              { label: "Mocha", value: "Moc" },
              { label: "Macchiato", value: "Mac" },
              { label: "Café au lait", value: "Caf" },
              { label: "Espresso", value: "Esp" },
              { label: "Cortado", value: "Cor" },
              { label: "Ristretto", value: "Ris" },
            ];
          }, 5000);
        </script>`;asyncSearchableDefault.storyName="Async searchable default",asyncSearchableDefault.parameters={storySource:{source:'args => html`<ic-select\n          id="select-20"\n          label="What is your favourite coffee?"\n          searchable\n          loading\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-20");\n          select.options = [];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n          setTimeout(() => {\n            select.options = [\n              { label: "Cappuccino", value: "Cap" },\n              { label: "Latte", value: "Lat" },\n              { label: "Americano", value: "Ame" },\n              { label: "Filter", value: "Fil" },\n              { label: "Flat white", value: "Fla" },\n              { label: "Mocha", value: "Moc" },\n              { label: "Macchiato", value: "Mac" },\n              { label: "Café au lait", value: "Caf" },\n              { label: "Espresso", value: "Esp" },\n              { label: "Cortado", value: "Cor" },\n              { label: "Ristretto", value: "Ris" },\n            ];\n          }, 5000);\n        <\/script>`'},loki:{skip:!0}};const searchableDefaultValue=args=>lit_html.dy`<ic-select
          id="select-21"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-21");
          select.value = "Lat";
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableDefaultValue.storyName="Searchable default value",searchableDefaultValue.parameters={storySource:{source:'args => html`<ic-select\n          id="select-21"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-21");\n          select.value = "Lat";\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableFilterByStartOfOptions=args=>lit_html.dy`<ic-select
          id="select-22"
          label="What is your favourite coffee?"
          searchable
          search-match-position="start"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-22");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableFilterByStartOfOptions.storyName="Searchable filter by start of options",searchableFilterByStartOfOptions.parameters={storySource:{source:'args => html`<ic-select\n          id="select-22"\n          label="What is your favourite coffee?"\n          searchable\n          search-match-position="start"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-22");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableWithDescription=args=>lit_html.dy`<ic-select
          id="select-23"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-23");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Filter",
              value: "Fil",
              description: "Coffee filtered using paper or a mesh",
            },
            {
              label: "Flat white",
              value: "Fla",
              description:
                "Coffee without froth made with espresso and hot steamed milk",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
            {
              label: "Macchiato",
              value: "Mac",
              description: "Espresso coffee with a dash of frothy steamed milk",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableWithDescription.storyName="Searchable with description",searchableWithDescription.parameters={storySource:{source:'args => html`<ic-select\n          id="select-23"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-23");\n          select.options = [\n            {\n              label: "Cappuccino",\n              value: "Cap",\n              description: "Coffee frothed up with pressurised steam",\n            },\n            {\n              label: "Latte",\n              value: "Lat",\n              description: "A milkier coffee than a cappuccino",\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              description: "Espresso coffee diluted with hot water",\n            },\n            {\n              label: "Filter",\n              value: "Fil",\n              description: "Coffee filtered using paper or a mesh",\n            },\n            {\n              label: "Flat white",\n              value: "Fla",\n              description:\n                "Coffee without froth made with espresso and hot steamed milk",\n            },\n            {\n              label: "Mocha",\n              value: "Moc",\n              description: "A mixture of coffee and chocolate",\n            },\n            {\n              label: "Macchiato",\n              value: "Mac",\n              description: "Espresso coffee with a dash of frothy steamed milk",\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableWithDescriptionIncludedInSearch=args=>lit_html.dy`<ic-select
          id="select-24"
          label="What is your favourite coffee?"
          searchable
          include-descriptions-in-search
        ></ic-select>
        <script>
          var select = document.querySelector("#select-24");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Filter",
              value: "Fil",
              description: "Coffee filtered using paper or a mesh",
            },
            {
              label: "Flat white",
              value: "Fla",
              description:
                "Coffee without froth made with espresso and hot steamed milk",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
            {
              label: "Macchiato",
              value: "Mac",
              description: "Espresso coffee with a dash of frothy steamed milk",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableWithDescriptionIncludedInSearch.storyName="Searchable with description (included in search)",searchableWithDescriptionIncludedInSearch.parameters={storySource:{source:'args => html`<ic-select\n          id="select-24"\n          label="What is your favourite coffee?"\n          searchable\n          include-descriptions-in-search\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-24");\n          select.options = [\n            {\n              label: "Cappuccino",\n              value: "Cap",\n              description: "Coffee frothed up with pressurised steam",\n            },\n            {\n              label: "Latte",\n              value: "Lat",\n              description: "A milkier coffee than a cappuccino",\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              description: "Espresso coffee diluted with hot water",\n            },\n            {\n              label: "Filter",\n              value: "Fil",\n              description: "Coffee filtered using paper or a mesh",\n            },\n            {\n              label: "Flat white",\n              value: "Fla",\n              description:\n                "Coffee without froth made with espresso and hot steamed milk",\n            },\n            {\n              label: "Mocha",\n              value: "Moc",\n              description: "A mixture of coffee and chocolate",\n            },\n            {\n              label: "Macchiato",\n              value: "Mac",\n              description: "Espresso coffee with a dash of frothy steamed milk",\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableHelperText=args=>lit_html.dy`<ic-select
          id="select-25"
          label="What is your favourite coffee?"
          searchable
          helper-text="Some helper text"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-25");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableHelperText.storyName="Searchable helper text",searchableHelperText.parameters={storySource:{source:'args => html`<ic-select\n          id="select-25"\n          label="What is your favourite coffee?"\n          searchable\n          helper-text="Some helper text"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-25");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableSmall=args=>lit_html.dy`<ic-select
          id="select-26"
          label="What is your favourite coffee?"
          searchable
          size="small"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-26");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableSmall.storyName="Searchable small",searchableSmall.parameters={storySource:{source:'args => html`<ic-select\n          id="select-26"\n          label="What is your favourite coffee?"\n          searchable\n          size="small"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-26");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableDisabled=args=>lit_html.dy`<ic-select
          id="select-27"
          label="What is your favourite coffee?"
          searchable
          disabled
        ></ic-select>
        <script>
          var select = document.querySelector("#select-27");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableDisabled.storyName="Searchable disabled",searchableDisabled.parameters={storySource:{source:'args => html`<ic-select\n          id="select-27"\n          label="What is your favourite coffee?"\n          searchable\n          disabled\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-27");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableDisabledOptions=args=>lit_html.dy`<ic-select
          id="select-28"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-28");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame", disabled: true },
            { label: "Filter", value: "Fil", disabled: true },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac", disabled: true },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableDisabledOptions.storyName="Searchable disabled options",searchableDisabledOptions.parameters={storySource:{source:'args => html`<ic-select\n          id="select-28"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-28");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame", disabled: true },\n            { label: "Filter", value: "Fil", disabled: true },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac", disabled: true },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableHiddenLabel=args=>lit_html.dy`<ic-select
          id="select-29"
          label="What is your favourite coffee?"
          searchable
          hide-label
        ></ic-select>
        <script>
          var select = document.querySelector("#select-29");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableHiddenLabel.storyName="Searchable hidden label",searchableHiddenLabel.parameters={storySource:{source:'args => html`<ic-select\n          id="select-29"\n          label="What is your favourite coffee?"\n          searchable\n          hide-label\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-29");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableRequired=args=>lit_html.dy`<ic-select
          id="select-30"
          label="What is your favourite coffee?"
          searchable
          required
        ></ic-select>
        <script>
          var select = document.querySelector("#select-30");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableRequired.storyName="Searchable required",searchableRequired.parameters={storySource:{source:'args => html`<ic-select\n          id="select-30"\n          label="What is your favourite coffee?"\n          searchable\n          required\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-30");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableGroups=args=>lit_html.dy`<ic-select
          id="select-31"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-31");
          select.options = [
            {
              label: "Fancy",
              children: [
                { label: "Cappuccino", value: "Cap" },
                { label: "Flat white", value: "Flat" },
              ],
            },
            {
              label: "Boring",
              children: [
                { label: "Filter", value: "Fil" },
                { label: "Latte", value: "Lat" },
              ],
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableGroups.storyName="Searchable groups",searchableGroups.parameters={storySource:{source:'args => html`<ic-select\n          id="select-31"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-31");\n          select.options = [\n            {\n              label: "Fancy",\n              children: [\n                { label: "Cappuccino", value: "Cap" },\n                { label: "Flat white", value: "Flat" },\n              ],\n            },\n            {\n              label: "Boring",\n              children: [\n                { label: "Filter", value: "Fil" },\n                { label: "Latte", value: "Lat" },\n              ],\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableGroupsGroupTitlesIncludedInSearch=args=>lit_html.dy`<ic-select
          id="select-32"
          label="What is your favourite coffee?"
          searchable
          include-group-titles-in-search
        ></ic-select>
        <script>
          var select = document.querySelector("#select-32");
          select.options = [
            {
              label: "Fancy",
              children: [
                { label: "Cappuccino", value: "Cap" },
                { label: "Flat white", value: "Flat" },
              ],
            },
            {
              label: "Boring",
              children: [
                { label: "Filter", value: "Fil" },
                { label: "Latte", value: "Lat" },
              ],
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableGroupsGroupTitlesIncludedInSearch.storyName="Searchable groups (group titles included in search)",searchableGroupsGroupTitlesIncludedInSearch.parameters={storySource:{source:'args => html`<ic-select\n          id="select-32"\n          label="What is your favourite coffee?"\n          searchable\n          include-group-titles-in-search\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-32");\n          select.options = [\n            {\n              label: "Fancy",\n              children: [\n                { label: "Cappuccino", value: "Cap" },\n                { label: "Flat white", value: "Flat" },\n              ],\n            },\n            {\n              label: "Boring",\n              children: [\n                { label: "Filter", value: "Fil" },\n                { label: "Latte", value: "Lat" },\n              ],\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableRecommended=args=>lit_html.dy`<ic-select
          id="select-33"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-33");
          select.options = [
            { label: "Cappuccino", value: "Cappuccino" },
            { label: "Flat white", value: "Flat white", recommended: true },
            { label: "Latte", value: "Latte" },
            { label: "Americano", value: "Americano", recommended: true },
            { label: "Filter", value: "Fil" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableRecommended.storyName="Searchable recommended",searchableRecommended.parameters={storySource:{source:'args => html`<ic-select\n          id="select-33"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-33");\n          select.options = [\n            { label: "Cappuccino", value: "Cappuccino" },\n            { label: "Flat white", value: "Flat white", recommended: true },\n            { label: "Latte", value: "Latte" },\n            { label: "Americano", value: "Americano", recommended: true },\n            { label: "Filter", value: "Fil" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableValidation=args=>lit_html.dy`<ic-select
          id="ic-select-4"
          label="What is your favourite coffee?"
          validation-status="success"
          validation-text="Success message"
          searchable
        ></ic-select>
        <script>
          var select1 = document.querySelector("#ic-select-4");
          var option1 = "Cappuccino";
          select1.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select1.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>
        <ic-select
          id="ic-select-5"
          label="What is your favourite coffee?"
          validation-status="warning"
          validation-text="Warning message"
          searchable
        ></ic-select>
        <script>
          var select2 = document.querySelector("#ic-select-5");
          var option2 = "Cappuccino";
          select2.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select2.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>
        <ic-select
          id="ic-select-6"
          label="What is your favourite coffee?"
          validation-status="error"
          validation-text="Error message"
          searchable
        ></ic-select>
        <script>
          var select3 = document.querySelector("#ic-select-6");
          var option3 = "Cappuccino";
          select3.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select3.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableValidation.storyName="Searchable validation",searchableValidation.parameters={storySource:{source:'args => html`<ic-select\n          id="ic-select-4"\n          label="What is your favourite coffee?"\n          validation-status="success"\n          validation-text="Success message"\n          searchable\n        ></ic-select>\n        <script>\n          var select1 = document.querySelector("#ic-select-4");\n          var option1 = "Cappuccino";\n          select1.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select1.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="ic-select-5"\n          label="What is your favourite coffee?"\n          validation-status="warning"\n          validation-text="Warning message"\n          searchable\n        ></ic-select>\n        <script>\n          var select2 = document.querySelector("#ic-select-5");\n          var option2 = "Cappuccino";\n          select2.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select2.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="ic-select-6"\n          label="What is your favourite coffee?"\n          validation-status="error"\n          validation-text="Error message"\n          searchable\n        ></ic-select>\n        <script>\n          var select3 = document.querySelector("#ic-select-6");\n          var option3 = "Cappuccino";\n          select3.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select3.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableScrollBehaviour=args=>lit_html.dy`<ic-select
          id="select-34"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-34");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
            { label: "Café au lait", value: "Caf" },
            { label: "Espresso", value: "Esp" },
            { label: "Cortado", value: "Cor" },
            { label: "Ristretto", value: "Ris" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableScrollBehaviour.storyName="Searchable scroll behaviour",searchableScrollBehaviour.parameters={storySource:{source:'args => html`<ic-select\n          id="select-34"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-34");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n            { label: "Café au lait", value: "Caf" },\n            { label: "Espresso", value: "Esp" },\n            { label: "Cortado", value: "Cor" },\n            { label: "Ristretto", value: "Ris" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableExternalFiltering=args=>lit_html.dy`<ic-select
          label="What is your favourite coffee?"
          searchable="true"
          debounce="300"
          disable-filter="true"
          id="external-filter-select"
          timeout="1000"
        ></ic-select>
        <br />
        <ic-typography>
          Suggested search options: Espresso, Double Espresso, Flat White,
          Filter, Cappuccino, Americano, Mocha, Macchiato.
        </ic-typography>
        <br />
        <ic-typography>
          The IcChange event will trigger 300ms after you finish typing. 1
          second later, the options in the select menu will be updated.
        </ic-typography>
        <script>
          var mockData = [
            { label: "Espresso", value: "Esp" },
            { label: "Double Espresso", value: "Dou" },
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          function handleFilter(event) {
            var option = event.detail.value;
            console.log(option);
            if (option !== selectedValue) {
              if (option) {
                select.loading = true;
                mockAPI = (query) => {
                  filteredResults = mockData.filter((m) =>
                    m.label.toLowerCase().includes(query.toLowerCase())
                  );
                  return new Promise((resolve) =>
                    setTimeout(
                      () => resolve(filteredResults),
                      event.type === "icChange" ? 2000 : 900
                    )
                  );
                };
                mockAPI(option).then((results) => (select.options = results));
              } else {
                select.options = [];
              }
            }
          }
          var select = document.querySelector("#external-filter-select");
          var selectedValue = "";
          select.addEventListener("icClear", function (event) {
            select.options = [];
          });
          select.addEventListener("icOptionSelect", function (event) {
            selectedValue = event.detail.value;
          });
          select.addEventListener("icChange", handleFilter);
          select.addEventListener("icRetryLoad", handleFilter);
        </script>`;searchableExternalFiltering.storyName="Searchable external filtering",searchableExternalFiltering.parameters={storySource:{source:'args => html`<ic-select\n          label="What is your favourite coffee?"\n          searchable="true"\n          debounce="300"\n          disable-filter="true"\n          id="external-filter-select"\n          timeout="1000"\n        ></ic-select>\n        <br />\n        <ic-typography>\n          Suggested search options: Espresso, Double Espresso, Flat White,\n          Filter, Cappuccino, Americano, Mocha, Macchiato.\n        </ic-typography>\n        <br />\n        <ic-typography>\n          The IcChange event will trigger 300ms after you finish typing. 1\n          second later, the options in the select menu will be updated.\n        </ic-typography>\n        <script>\n          var mockData = [\n            { label: "Espresso", value: "Esp" },\n            { label: "Double Espresso", value: "Dou" },\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          function handleFilter(event) {\n            var option = event.detail.value;\n            console.log(option);\n            if (option !== selectedValue) {\n              if (option) {\n                select.loading = true;\n                mockAPI = (query) => {\n                  filteredResults = mockData.filter((m) =>\n                    m.label.toLowerCase().includes(query.toLowerCase())\n                  );\n                  return new Promise((resolve) =>\n                    setTimeout(\n                      () => resolve(filteredResults),\n                      event.type === "icChange" ? 2000 : 900\n                    )\n                  );\n                };\n                mockAPI(option).then((results) => (select.options = results));\n              } else {\n                select.options = [];\n              }\n            }\n          }\n          var select = document.querySelector("#external-filter-select");\n          var selectedValue = "";\n          select.addEventListener("icClear", function (event) {\n            select.options = [];\n          });\n          select.addEventListener("icOptionSelect", function (event) {\n            selectedValue = event.detail.value;\n          });\n          select.addEventListener("icChange", handleFilter);\n          select.addEventListener("icRetryLoad", handleFilter);\n        <\/script>`'},loki:{skip:!0}};const searchableResetSubmitInFormSearchable=args=>lit_html.dy`
        <form>
          <ic-select
            id="select-35"
            label="What is your favourite coffee?"
            searchable="true"
          ></ic-select>
          <br />
          <br />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          var select = document.querySelector("#select-35");
          select.value = "Cap";
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(document.querySelector("input.ic-input").value);
          });
        </script>
      `;searchableResetSubmitInFormSearchable.storyName="Searchable: Reset/Submit in form searchable",searchableResetSubmitInFormSearchable.parameters={storySource:{source:'args => html`\n        <form>\n          <ic-select\n            id="select-35"\n            label="What is your favourite coffee?"\n            searchable="true"\n          ></ic-select>\n          <br />\n          <br />\n          <input type="submit" value="Submit" />\n          <input type="reset" value="Reset" />\n        </form>\n        <script>\n          var select = document.querySelector("#select-35");\n          select.value = "Cap";\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n          document.querySelector("form").addEventListener("submit", (ev) => {\n            ev.preventDefault();\n            console.log(document.querySelector("input.ic-input").value);\n          });\n        <\/script>\n      `'},loki:{skip:!0}};const searchableUpdateInputValueFromExternalRequest=args=>lit_html.dy`<ic-section-container>
          <ic-select
            id="search-select"
            searchable="true"
            label="What is your favourite coffee? (searchable)"
          ></ic-select>
        </ic-section-container>
        <script>
          const searchSelect = document.getElementById("search-select");
          let options = [];
          options.push({ label: "unknown", value: "unknown" });
          options.push({ label: "item 1", value: "item-1" });
          options.push({ label: "item 2", value: "item-2" });
          options.push({ label: "item 3", value: "item-3" });
          searchSelect.options = options;
          let searchoption = "";
          searchSelect.addEventListener("icChange", function (event) {
            console.log("icChange", event.detail.value);
            searchoption = event.detail.value;
            if (searchoption === "unknown") {
              searchoption = "item-1";
              searchSelect.value = "item-1";
            } else {
              searchSelect.value = searchoption;
            }
          });
          searchSelect.addEventListener("icOptionSelect", function (event) {
            console.log("icOptionSelect", event.detail.value);
          });
        </script>`;searchableUpdateInputValueFromExternalRequest.storyName="Searchable - Update input value from external request",searchableUpdateInputValueFromExternalRequest.parameters={storySource:{source:'args => html`<ic-section-container>\n          <ic-select\n            id="search-select"\n            searchable="true"\n            label="What is your favourite coffee? (searchable)"\n          ></ic-select>\n        </ic-section-container>\n        <script>\n          const searchSelect = document.getElementById("search-select");\n          let options = [];\n          options.push({ label: "unknown", value: "unknown" });\n          options.push({ label: "item 1", value: "item-1" });\n          options.push({ label: "item 2", value: "item-2" });\n          options.push({ label: "item 3", value: "item-3" });\n          searchSelect.options = options;\n          let searchoption = "";\n          searchSelect.addEventListener("icChange", function (event) {\n            console.log("icChange", event.detail.value);\n            searchoption = event.detail.value;\n            if (searchoption === "unknown") {\n              searchoption = "item-1";\n              searchSelect.value = "item-1";\n            } else {\n              searchSelect.value = searchoption;\n            }\n          });\n          searchSelect.addEventListener("icOptionSelect", function (event) {\n            console.log("icOptionSelect", event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableEmittingIcOptionSelectOnEnter=args=>lit_html.dy`<ic-select
          id="select-1"
          label="What is your favourite coffee?"
          select-on-enter="true"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-1");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icOptionSelect", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableEmittingIcOptionSelectOnEnter.storyName="Searchable emitting icOptionSelect on enter",searchableEmittingIcOptionSelectOnEnter.parameters={storySource:{source:'args => html`<ic-select\n          id="select-1"\n          label="What is your favourite coffee?"\n          select-on-enter="true"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-1");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icOptionSelect", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const defaultSelectPlayground=args=>lit_html.dy` <ic-select
          id="select-playground"
          disabled=${args.disabled}
          full-width=${args["full-width"]}
          helper-text=${args["helper-text"]}
          hide-label=${args["hide-label"]}
          label=${args.label}
          placeholder=${args.placeholder}
          readonly=${args.readonly}
          required=${args.required}
          show-clear-button=${args["show-clear-button"]}
          small=${args.small}
          validation-status=${args["validation-status"]}
          validation-text=${args["validation-text"]}
        >
        </ic-select>
        <script>
          var select = document.querySelector("#select-playground");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Boring",
              children: [
                {
                  label: "Latte",
                  value: "Lat",
                  description: "A milkier coffee than a cappuccino",
                },
                {
                  label: "Filter",
                  value: "Fil",
                  description: "Coffee filtered using paper or a mesh",
                },
              ],
            },
            {
              label: "Fancy",
              children: [
                {
                  label: "Flat white",
                  value: "Fla",
                  description:
                    "Coffee without froth made with espresso and hot steamed milk",
                },
                {
                  label: "Macchiato",
                  value: "Mac",
                  description:
                    "Espresso coffee with a dash of frothy steamed milk",
                },
              ],
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;defaultSelectPlayground.storyName="Default select playground",defaultSelectPlayground.argTypes={...validationArgType},defaultSelectPlayground.args={...defaultArgs,"show-clear-button":!1},defaultSelectPlayground.parameters={storySource:{source:'args => html` <ic-select\n          id="select-playground"\n          disabled=${args.disabled}\n          full-width=${args["full-width"]}\n          helper-text=${args["helper-text"]}\n          hide-label=${args["hide-label"]}\n          label=${args.label}\n          placeholder=${args.placeholder}\n          readonly=${args.readonly}\n          required=${args.required}\n          show-clear-button=${args["show-clear-button"]}\n          small=${args.small}\n          validation-status=${args["validation-status"]}\n          validation-text=${args["validation-text"]}\n        >\n        </ic-select>\n        <script>\n          var select = document.querySelector("#select-playground");\n          select.options = [\n            {\n              label: "Cappuccino",\n              value: "Cap",\n              description: "Coffee frothed up with pressurised steam",\n            },\n            {\n              label: "Boring",\n              children: [\n                {\n                  label: "Latte",\n                  value: "Lat",\n                  description: "A milkier coffee than a cappuccino",\n                },\n                {\n                  label: "Filter",\n                  value: "Fil",\n                  description: "Coffee filtered using paper or a mesh",\n                },\n              ],\n            },\n            {\n              label: "Fancy",\n              children: [\n                {\n                  label: "Flat white",\n                  value: "Fla",\n                  description:\n                    "Coffee without froth made with espresso and hot steamed milk",\n                },\n                {\n                  label: "Macchiato",\n                  value: "Mac",\n                  description:\n                    "Espresso coffee with a dash of frothy steamed milk",\n                },\n              ],\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              description: "Espresso coffee diluted with hot water",\n            },\n            {\n              label: "Mocha",\n              value: "Moc",\n              description: "A mixture of coffee and chocolate",\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const searchableSelectPlayground=args=>lit_html.dy` <ic-select
          id="select-searchable-playground"
          disabled=${args.disabled}
          full-width=${args["full-width"]}
          helper-text=${args["helper-text"]}
          hide-label=${args["hide-label"]}
          include-descriptions-in-search=${args["include-descriptions-in-search"]}
          include-group-titles-in-search=${args["include-group-titles-in-search"]}
          loading=${args.loading}
          loading-label=${args["loading-label"]}
          label=${args.label}
          placeholder=${args.placeholder}
          readonly=${args.readonly}
          required=${args.required}
          search-match-position=${args["search-match-position"]}
          searchable="true"
          small=${args.small}
          validation-status=${args["validation-status"]}
          validation-text=${args["validation-text"]}
        >
        </ic-select>
        <script>
          var select = document.querySelector("#select-searchable-playground");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Boring",
              children: [
                {
                  label: "Latte",
                  value: "Lat",
                  description: "A milkier coffee than a cappuccino",
                },
                {
                  label: "Filter",
                  value: "Fil",
                  description: "Coffee filtered using paper or a mesh",
                },
              ],
            },
            {
              label: "Fancy",
              children: [
                {
                  label: "Flat white",
                  value: "Fla",
                  description:
                    "Coffee without froth made with espresso and hot steamed milk",
                },
                {
                  label: "Macchiato",
                  value: "Mac",
                  description:
                    "Espresso coffee with a dash of frothy steamed milk",
                },
              ],
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log(event.detail.value);
          });
        </script>`;searchableSelectPlayground.storyName="Searchable select playground",searchableSelectPlayground.argTypes={...validationArgType,"search-match-position":{options:["anywhere","start"],control:{type:"inline-radio"}}},searchableSelectPlayground.args={...defaultArgs,"include-descriptions-in-search":!1,"include-group-titles-in-search":!1,loading:!1,"loading-label":"Loading...","search-match-position":"anywhere"},searchableSelectPlayground.parameters={storySource:{source:'args => html` <ic-select\n          id="select-searchable-playground"\n          disabled=${args.disabled}\n          full-width=${args["full-width"]}\n          helper-text=${args["helper-text"]}\n          hide-label=${args["hide-label"]}\n          include-descriptions-in-search=${args["include-descriptions-in-search"]}\n          include-group-titles-in-search=${args["include-group-titles-in-search"]}\n          loading=${args.loading}\n          loading-label=${args["loading-label"]}\n          label=${args.label}\n          placeholder=${args.placeholder}\n          readonly=${args.readonly}\n          required=${args.required}\n          search-match-position=${args["search-match-position"]}\n          searchable="true"\n          small=${args.small}\n          validation-status=${args["validation-status"]}\n          validation-text=${args["validation-text"]}\n        >\n        </ic-select>\n        <script>\n          var select = document.querySelector("#select-searchable-playground");\n          select.options = [\n            {\n              label: "Cappuccino",\n              value: "Cap",\n              description: "Coffee frothed up with pressurised steam",\n            },\n            {\n              label: "Boring",\n              children: [\n                {\n                  label: "Latte",\n                  value: "Lat",\n                  description: "A milkier coffee than a cappuccino",\n                },\n                {\n                  label: "Filter",\n                  value: "Fil",\n                  description: "Coffee filtered using paper or a mesh",\n                },\n              ],\n            },\n            {\n              label: "Fancy",\n              children: [\n                {\n                  label: "Flat white",\n                  value: "Fla",\n                  description:\n                    "Coffee without froth made with espresso and hot steamed milk",\n                },\n                {\n                  label: "Macchiato",\n                  value: "Mac",\n                  description:\n                    "Espresso coffee with a dash of frothy steamed milk",\n                },\n              ],\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              description: "Espresso coffee diluted with hot water",\n            },\n            {\n              label: "Mocha",\n              value: "Moc",\n              description: "A mixture of coffee and chocolate",\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log(event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Select",tags:["stories-mdx"],includeStories:["defaultStory","asyncSelectDefault","defaultValue","withClearButton","withDescription","helperText","customPlaceholder","customComponents","small","deprecatedSmall","disabled","disabledOptions","fullWidth","hiddenLabel","required","readOnly","groups","recommended","validation","scrollBehaviour","defaultInForm","emittingIcOptionSelectOnEnter","searchableDefault","asyncSearchableDefault","searchableDefaultValue","searchableFilterByStartOfOptions","searchableWithDescription","searchableWithDescriptionIncludedInSearch","searchableHelperText","searchableSmall","searchableDisabled","searchableDisabledOptions","searchableHiddenLabel","searchableRequired","searchableGroups","searchableGroupsGroupTitlesIncludedInSearch","searchableRecommended","searchableValidation","searchableScrollBehaviour","searchableExternalFiltering","searchableResetSubmitInFormSearchable","searchableUpdateInputValueFromExternalRequest","searchableEmittingIcOptionSelectOnEnter","defaultSelectPlayground","searchableSelectPlayground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_select_stories=componentMeta,__namedExportsOrder=["defaultArgs","validationArgType","defaultStory","asyncSelectDefault","defaultValue","withClearButton","withDescription","helperText","customPlaceholder","customComponents","small","deprecatedSmall","disabled","disabledOptions","fullWidth","hiddenLabel","required","readOnly","groups","recommended","validation","scrollBehaviour","defaultInForm","emittingIcOptionSelectOnEnter","searchableDefault","asyncSearchableDefault","searchableDefaultValue","searchableFilterByStartOfOptions","searchableWithDescription","searchableWithDescriptionIncludedInSearch","searchableHelperText","searchableSmall","searchableDisabled","searchableDisabledOptions","searchableHiddenLabel","searchableRequired","searchableGroups","searchableGroupsGroupTitlesIncludedInSearch","searchableRecommended","searchableValidation","searchableScrollBehaviour","searchableExternalFiltering","searchableResetSubmitInFormSearchable","searchableUpdateInputValueFromExternalRequest","searchableEmittingIcOptionSelectOnEnter","defaultSelectPlayground","searchableSelectPlayground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{dy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-select-ic-select-stories-mdx.3f4d2b75.iframe.bundle.js.map