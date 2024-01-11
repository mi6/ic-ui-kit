/*! For license information please see components-ic-search-bar-ic-search-bar-stories-mdx.f15ce604.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1332],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-search-bar/ic-search-bar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>ic_search_bar_stories,defaultStory:()=>defaultStory,deprecatedSmall:()=>deprecatedSmall,disabled:()=>disabled,externalFiltering:()=>externalFiltering,externalFilteringWithLoading:()=>externalFilteringWithLoading,fullWidth:()=>fullWidth,helperText:()=>helperText,hiddenLabel:()=>hiddenLabel,inAForm:()=>inAForm,querySearchMode:()=>querySearchMode,small:()=>small,withCustomLabelAndValueFields:()=>withCustomLabelAndValueFields,withOptions:()=>withOptions,withOptionsNoFiltering:()=>withOptionsNoFiltering});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-search-bar\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                    | Attribute                     | Description                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Default                                                                                                    |\n| --------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |\n| `autocapitalize`            | `autocapitalize`              | The automatic capitalisation of the text value as it is entered/edited by the user. Available options: "off", "none", "on", "sentences", "words", "characters".              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"off"`                                                                                                    |\n| `autocomplete`              | `autocomplete`                | The state of autocompletion the browser can apply on the text value.                                                                                                         | `"name" \\| "on" \\| "off" \\| "honorific-prefix" \\| "given-name" \\| "additional-name" \\| "family-name" \\| "honorific-suffix" \\| "nickname" \\| "email" \\| "username" \\| "new-password" \\| "current-password" \\| "one-time-code" \\| "organization-title" \\| "organization" \\| "street-address" \\| "address-line1" \\| "address-line2" \\| "address-line3" \\| "address-level4" \\| "address-level3" \\| "address-level2" \\| "address-level1" \\| "country" \\| "country-name" \\| "postal-code" \\| "cc-name" \\| "cc-given-name" \\| "cc-additional-name" \\| "cc-family-name" \\| "cc-number" \\| "cc-exp" \\| "cc-exp-month" \\| "cc-exp-year" \\| "cc-csc" \\| "cc-type" \\| "transaction-currency" \\| "transaction-amount" \\| "language" \\| "bday" \\| "bday-day" \\| "bday-month" \\| "bday-year" \\| "sex" \\| "tel" \\| "tel-country-code" \\| "tel-national" \\| "tel-area-code" \\| "tel-local" \\| "tel-extension" \\| "impp" \\| "url" \\| "photo"` | `"off"`                                                                                                    |\n| `autocorrect`               | `autocorrect`                 | The state of autocorrection the browser can apply when the user is entering/editing the text value.                                                                          | `"off" \\| "on"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `"off"`                                                                                                    |\n| `autofocus`                 | `autofocus`                   | If `true`, the form control will have input focus when the page loads.                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `charactersUntilSuggestion` | `characters-until-suggestion` | The number of characters until suggestions appear. The submit button will be disabled until the inputted value is equal to or greater than this number.                      | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `2`                                                                                                        |\n| `debounce`                  | `debounce`                    | The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.                                                                           | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `0`                                                                                                        |\n| `disableFilter`             | `disable-filter`              | Specify whether to disable the built in filtering. For example, if options will already be filtered from external source. If `true`, all options provided will be displayed. | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `disabled`                  | `disabled`                    | If `true`, the disabled state will be set.                                                                                                                                   | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `emptyOptionListText`       | `empty-option-list-text`      | The text displayed when there are no options in the option list.                                                                                                             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"No results found"`                                                                                       |\n| `focusOnLoad`               | `focus-on-load`               | If `true`, the search bar will be focused when component loaded.                                                                                                             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `fullWidth`                 | `full-width`                  | Specify whether the search bar fills the full width of the container. If `true`, this overrides the --input-width CSS variable.                                              | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `helperText`                | `helper-text`                 | The helper text that will be displayed for additional field guidance.                                                                                                        | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `""`                                                                                                       |\n| `hideLabel`                 | `hide-label`                  | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                           | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `hintText`                  | `hint-text`                   | The hint text for the hidden assistive description element.                                                                                                                  | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"When autocomplete results are available use the up and down arrows to choose and press enter to select"` |\n| `label` _(required)_        | `label`                       | The label for the search bar.                                                                                                                                                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined`                                                                                                |\n| `labelField`                | `label-field`                 | The custom name for the label field to correspond with the IcMenuOption type.                                                                                                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"label"`                                                                                                  |\n| `loading`                   | `loading`                     | Trigger loading state when fetching options asyncronously                                                                                                                    | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `loadingErrorLabel`         | `loading-error-label`         | Change the message displayed when external loading times out.                                                                                                                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"Loading Error"`                                                                                          |\n| `loadingLabel`              | `loading-label`               | Change the message displayed whilst the options are being loaded externally.                                                                                                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"Loading..."`                                                                                             |\n| `name`                      | `name`                        | The name of the control, which is submitted with the form data.                                                                                                              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `this.inputId`                                                                                             |\n| `options`                   | --                            | The suggested search options.                                                                                                                                                | `IcMenuOption[]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `[]`                                                                                                       |\n| `placeholder`               | `placeholder`                 | The placeholder value to display.                                                                                                                                            | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"Search"`                                                                                                 |\n| `readonly`                  | `readonly`                    | If `true`, the readonly state will be set.                                                                                                                                   | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `required`                  | `required`                    | If `true`, the search bar will require a value.                                                                                                                              | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `searchMode`                | `search-mode`                 | Specify the mode search bar uses to search. `navigation` allows for quick lookups of a set of values, `query` allows for more general searches.                              | `"navigation" \\| "query"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `"navigation"`                                                                                             |\n| `size`                      | `size`                        | The size of the search bar component.                                                                                                                                        | `"default" \\| "small"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `"default"`                                                                                                |\n| `small`                     | `small`                       | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/>                                          | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `spellcheck`                | `spellcheck`                  | If `true`, the value of the search will have its spelling and grammar checked.                                                                                               | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `timeout`                   | `timeout`                     | If using external filtering, set a timeout for when loading takes too long.                                                                                                  | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined`                                                                                                |\n| `value`                     | `value`                       | The value of the search input.                                                                                                                                               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `""`                                                                                                       |\n| `valueField`                | `value-field`                 | The custom name for the value field to correspond with the IcMenuOption type.                                                                                                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"value"`                                                                                                  |\n\n\n## Events\n\n| Event              | Description                                                                                                                    | Type                                      |\n| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |\n| `icChange`         | Emitted when the value has changed.                                                                                            | `CustomEvent<IcValueEventDetail>`         |\n| `icClear`          | Emitted when value is cleared with clear button                                                                                | `CustomEvent<void>`                       |\n| `icInput`          | Emitted when a keyboard input occurred.                                                                                        | `CustomEvent<IcValueEventDetail>`         |\n| `icInputBlur`      | <span style="color:red">**[DEPRECATED]**</span> This event should not be used anymore. Use icSearchBarBlur instead.<br/><br/>  | `CustomEvent<IcSearchBarBlurEventDetail>` |\n| `icInputFocus`     | <span style="color:red">**[DEPRECATED]**</span> This event should not be used anymore. Use icSearchBarFocus instead.<br/><br/> | `CustomEvent<IcValueEventDetail>`         |\n| `icMenuChange`     | Emitted when the state of the menu changes (i.e. open or close)                                                                | `CustomEvent<IcMenuChangeEventDetail>`    |\n| `icOptionSelect`   | Emitted when option is highlighted within the menu                                                                             | `CustomEvent<IcOptionSelectEventDetail>`  |\n| `icRetryLoad`      | Emitted when the \'retry loading\' button is clicked                                                                             | `CustomEvent<IcValueEventDetail>`         |\n| `icSearchBarBlur`  | Emitted when blur is invoked from ic-search-bar                                                                                | `CustomEvent<IcSearchBarBlurEventDetail>` |\n| `icSearchBarFocus` | Emitted when focus is invoked from ic-search-bar                                                                               | `CustomEvent<void>`                       |\n| `icSubmitSearch`   | Emitted when the search value has been submitted                                                                               | `CustomEvent<IcValueEventDetail>`         |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the native `input`.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## CSS Custom Properties\n\n| Name                | Description                |\n| ------------------- | -------------------------- |\n| `--ic-z-index-menu` | z-index of search bar menu |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-text-field](../ic-text-field)\n- [ic-button](../ic-button)\n- [ic-menu](../ic-menu)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-search-bar --\x3e ic-text-field\n  ic-search-bar --\x3e ic-button\n  ic-search-bar --\x3e ic-menu\n  ic-text-field --\x3e ic-input-container\n  ic-text-field --\x3e ic-input-label\n  ic-text-field --\x3e ic-input-component-container\n  ic-text-field --\x3e ic-input-validation\n  ic-text-field --\x3e ic-typography\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-menu --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-typography\n  ic-menu --\x3e ic-button\n  style ic-search-bar fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Search bar",component:"ic-search-bar"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:args=>lit_html.dy` <ic-search-bar label="What is your favourite coffee?">
      </ic-search-bar>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Basic",children:args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Ameno", value: "ameno" },
            { label: "Aicano", value: "acano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-custom-label-and-value-fields",children:"With custom label and value fields"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With custom label and value fields",parameters:{loki:{skip:!0}},children:args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          label-field="urn"
          value-field="reference"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { urn: "Espresso", reference: "espresso" },
            { urn: "Double Espresso", reference: "doubleespresso" },
            { urn: "Flat White", reference: "flatwhite" },
            { urn: "Cappuccino", reference: "cappucino" },
            { urn: "Americano", reference: "americano" },
            { urn: "Ameno", reference: "ameno" },
            { urn: "Aicano", reference: "acano" },
            { urn: "Mocha", reference: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-options",children:"With options"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With options",children:args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          value="Flat White"
        ></ic-search-bar>
        <br />
        <ic-typography
          >Suggested search options: Espresso, Double Espresso, Flat White,
          Cappuccino, Americano, Mocha</ic-typography
        >
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano", disabled: true },
            { label: "Cafe au lait", value: "cafe" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-options-no-filtering",children:"With options (no filtering)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With options (no filtering)",children:args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          disable-filter
        ></ic-search-bar>
        <br />
        <ic-typography>
          All options will be displayed as you type
        </ic-typography>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano", disabled: true },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"in-a-form",children:"In a form"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"In a form",children:args=>lit_html.dy` <form>
        <ic-search-bar
          name="search-01"
          label="What is your favourite coffee?"
        ></ic-search-bar>
      </form>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Helper text",children:args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          helper-text="Some helper text"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Small",children:args=>lit_html.dy` <ic-search-bar
        label="What is your favourite coffee?"
        size="small"
      ></ic-search-bar>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Deprecated - small",children:args=>lit_html.dy` <ic-search-bar
        label="What is your favourite coffee?"
        small
      ></ic-search-bar>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hidden-label",children:"Hidden label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Hidden label",children:args=>lit_html.dy` <ic-search-bar
        label="What is your favourite coffee?"
        hide-label
      ></ic-search-bar>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",children:args=>lit_html.dy` <ic-search-bar
        label="What is your favourite coffee?"
        disabled
      ></ic-search-bar>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Full width",children:args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          full-width
          id="search2"
        ></ic-search-bar>
        <br />
        <ic-typography
          >Suggested search options: Espresso, Double Espresso, Flat White,
          Cappuccino, Americano, Mocha</ic-typography
        >
        <script>
          document.querySelector("#search2").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"external-filtering",children:"External filtering"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"External filtering",parameters:{loki:{skip:!0}},children:args=>lit_html.dy` <ic-search-bar
          label="Search for coffee"
          placeholder="Type to search"
          debounce="300"
          disable-filter="true"
          id="external-filter-search"
        ></ic-search-bar>
        <br />
        <ic-typography
          >Suggested search options: Espresso, Double Espresso, Flat White,
          Cappuccino, Americano, Mocha</ic-typography
        >
        <br />
        <ic-typography
          >The IcChange event will trigger 300ms after you finish
          typing.</ic-typography
        >
        <script>
          var mockData = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
          var select = document.querySelector("#external-filter-search");
          var optionSelected = false;
          function handleFilter(event) {
            query = event.detail.value;
            if (query !== optionSelected) {
              if (query.length > 1) {
                optionSelected = false;
                mockAPI = (query) => {
                  filteredResults = mockData.filter((m) =>
                    m.label.toLowerCase().includes(query.toLowerCase())
                  );
                  return new Promise((resolve) =>
                    setTimeout(
                      () => resolve(filteredResults),
                      event.type === "icChange" ? 2000 : 1000
                    )
                  );
                };
                mockAPI(query).then((results) => (select.options = results));
              } else {
                select.options = [];
              }
            }
            optionSelected = "";
          }
          function handleSelect(event) {
            optionSelected = true;
          }
          select.addEventListener("icOptionSelect", handleSelect);
          select.addEventListener("icChange", handleFilter);
          select.addEventListener("icRetryLoad", handleFilter);
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"external-filtering-with-loading",children:"External filtering with loading"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"External filtering with loading",parameters:{loki:{skip:!0}},children:args=>lit_html.dy` <ic-search-bar
          label="Search for coffee"
          placeholder="Type to search"
          debounce="300"
          disable-filter="true"
          id="external-filter-search"
          timeout="1000"
        ></ic-search-bar>
        <br />
        <ic-typography
          >Suggested search options: Espresso, Double Espresso, Flat White,
          Cappuccino, Americano, Mocha</ic-typography
        >
        <br />
        <ic-typography
          >The IcChange event will trigger 300ms after you finish typing. 1
          second later, the options in the searchbar menu will be
          updated.</ic-typography
        >
        <script>
          var mockData = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
          var select = document.querySelector("#external-filter-search");
          var optionSelected = false;
          function handleFilter(event) {
            query = event.detail.value;
            if (query !== optionSelected) {
              if (query.length > 1) {
                if (!optionSelected) {
                  select.loading = true;
                }
                optionSelected = false;
                mockAPI = (query) => {
                  filteredResults = mockData.filter((m) =>
                    m.label.toLowerCase().includes(query.toLowerCase())
                  );
                  return new Promise((resolve) =>
                    setTimeout(
                      () => resolve(filteredResults),
                      event.type === "icChange" ? 2000 : 1000
                    )
                  );
                };
                mockAPI(query).then((results) => (select.options = results));
              } else {
                select.options = [];
              }
            }
            optionSelected = "";
          }
          function handleSelect(event) {
            optionSelected = true;
          }
          select.addEventListener("icOptionSelect", handleSelect);
          select.addEventListener("icChange", handleFilter);
          select.addEventListener("icRetryLoad", handleFilter);
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"query-search-mode",children:"Query search mode"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Query search mode",children:args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          search-mode="query"
        >
        </ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})})]})}const defaultStory=args=>lit_html.dy` <ic-search-bar label="What is your favourite coffee?">
      </ic-search-bar>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html` <ic-search-bar label="What is your favourite coffee?">\n      </ic-search-bar>`'}};const basic=args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Ameno", value: "ameno" },
            { label: "Aicano", value: "acano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;basic.storyName="Basic",basic.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n        ></ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappucino" },\n            { label: "Americano", value: "americano" },\n            { label: "Ameno", value: "ameno" },\n            { label: "Aicano", value: "acano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'}};const withCustomLabelAndValueFields=args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          label-field="urn"
          value-field="reference"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { urn: "Espresso", reference: "espresso" },
            { urn: "Double Espresso", reference: "doubleespresso" },
            { urn: "Flat White", reference: "flatwhite" },
            { urn: "Cappuccino", reference: "cappucino" },
            { urn: "Americano", reference: "americano" },
            { urn: "Ameno", reference: "ameno" },
            { urn: "Aicano", reference: "acano" },
            { urn: "Mocha", reference: "mocha" },
          ];
        </script>`;withCustomLabelAndValueFields.storyName="With custom label and value fields",withCustomLabelAndValueFields.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          label-field="urn"\n          value-field="reference"\n        ></ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { urn: "Espresso", reference: "espresso" },\n            { urn: "Double Espresso", reference: "doubleespresso" },\n            { urn: "Flat White", reference: "flatwhite" },\n            { urn: "Cappuccino", reference: "cappucino" },\n            { urn: "Americano", reference: "americano" },\n            { urn: "Ameno", reference: "ameno" },\n            { urn: "Aicano", reference: "acano" },\n            { urn: "Mocha", reference: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const withOptions=args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          value="Flat White"
        ></ic-search-bar>
        <br />
        <ic-typography
          >Suggested search options: Espresso, Double Espresso, Flat White,
          Cappuccino, Americano, Mocha</ic-typography
        >
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano", disabled: true },
            { label: "Cafe au lait", value: "cafe" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;withOptions.storyName="With options",withOptions.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          value="Flat White"\n        ></ic-search-bar>\n        <br />\n        <ic-typography\n          >Suggested search options: Espresso, Double Espresso, Flat White,\n          Cappuccino, Americano, Mocha</ic-typography\n        >\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappucino" },\n            { label: "Americano", value: "americano", disabled: true },\n            { label: "Cafe au lait", value: "cafe" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'}};const withOptionsNoFiltering=args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          disable-filter
        ></ic-search-bar>
        <br />
        <ic-typography>
          All options will be displayed as you type
        </ic-typography>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano", disabled: true },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;withOptionsNoFiltering.storyName="With options (no filtering)",withOptionsNoFiltering.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          disable-filter\n        ></ic-search-bar>\n        <br />\n        <ic-typography>\n          All options will be displayed as you type\n        </ic-typography>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappucino" },\n            { label: "Americano", value: "americano", disabled: true },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'}};const inAForm=args=>lit_html.dy` <form>
        <ic-search-bar
          name="search-01"
          label="What is your favourite coffee?"
        ></ic-search-bar>
      </form>`;inAForm.storyName="In a form",inAForm.parameters={storySource:{source:'args => html` <form>\n        <ic-search-bar\n          name="search-01"\n          label="What is your favourite coffee?"\n        ></ic-search-bar>\n      </form>`'}};const helperText=args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          helper-text="Some helper text"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          helper-text="Some helper text"\n        ></ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappucino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'}};const small=args=>lit_html.dy` <ic-search-bar
        label="What is your favourite coffee?"
        size="small"
      ></ic-search-bar>`;small.storyName="Small",small.parameters={storySource:{source:'args => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        size="small"\n      ></ic-search-bar>`'}};const deprecatedSmall=args=>lit_html.dy` <ic-search-bar
        label="What is your favourite coffee?"
        small
      ></ic-search-bar>`;deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'args => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        small\n      ></ic-search-bar>`'}};const hiddenLabel=args=>lit_html.dy` <ic-search-bar
        label="What is your favourite coffee?"
        hide-label
      ></ic-search-bar>`;hiddenLabel.storyName="Hidden label",hiddenLabel.parameters={storySource:{source:'args => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        hide-label\n      ></ic-search-bar>`'}};const disabled=args=>lit_html.dy` <ic-search-bar
        label="What is your favourite coffee?"
        disabled
      ></ic-search-bar>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        disabled\n      ></ic-search-bar>`'}};const fullWidth=args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          full-width
          id="search2"
        ></ic-search-bar>
        <br />
        <ic-typography
          >Suggested search options: Espresso, Double Espresso, Flat White,
          Cappuccino, Americano, Mocha</ic-typography
        >
        <script>
          document.querySelector("#search2").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          full-width\n          id="search2"\n        ></ic-search-bar>\n        <br />\n        <ic-typography\n          >Suggested search options: Espresso, Double Espresso, Flat White,\n          Cappuccino, Americano, Mocha</ic-typography\n        >\n        <script>\n          document.querySelector("#search2").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappucino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'}};const externalFiltering=args=>lit_html.dy` <ic-search-bar
          label="Search for coffee"
          placeholder="Type to search"
          debounce="300"
          disable-filter="true"
          id="external-filter-search"
        ></ic-search-bar>
        <br />
        <ic-typography
          >Suggested search options: Espresso, Double Espresso, Flat White,
          Cappuccino, Americano, Mocha</ic-typography
        >
        <br />
        <ic-typography
          >The IcChange event will trigger 300ms after you finish
          typing.</ic-typography
        >
        <script>
          var mockData = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
          var select = document.querySelector("#external-filter-search");
          var optionSelected = false;
          function handleFilter(event) {
            query = event.detail.value;
            if (query !== optionSelected) {
              if (query.length > 1) {
                optionSelected = false;
                mockAPI = (query) => {
                  filteredResults = mockData.filter((m) =>
                    m.label.toLowerCase().includes(query.toLowerCase())
                  );
                  return new Promise((resolve) =>
                    setTimeout(
                      () => resolve(filteredResults),
                      event.type === "icChange" ? 2000 : 1000
                    )
                  );
                };
                mockAPI(query).then((results) => (select.options = results));
              } else {
                select.options = [];
              }
            }
            optionSelected = "";
          }
          function handleSelect(event) {
            optionSelected = true;
          }
          select.addEventListener("icOptionSelect", handleSelect);
          select.addEventListener("icChange", handleFilter);
          select.addEventListener("icRetryLoad", handleFilter);
        </script>`;externalFiltering.storyName="External filtering",externalFiltering.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="Search for coffee"\n          placeholder="Type to search"\n          debounce="300"\n          disable-filter="true"\n          id="external-filter-search"\n        ></ic-search-bar>\n        <br />\n        <ic-typography\n          >Suggested search options: Espresso, Double Espresso, Flat White,\n          Cappuccino, Americano, Mocha</ic-typography\n        >\n        <br />\n        <ic-typography\n          >The IcChange event will trigger 300ms after you finish\n          typing.</ic-typography\n        >\n        <script>\n          var mockData = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappucino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n          var select = document.querySelector("#external-filter-search");\n          var optionSelected = false;\n          function handleFilter(event) {\n            query = event.detail.value;\n            if (query !== optionSelected) {\n              if (query.length > 1) {\n                optionSelected = false;\n                mockAPI = (query) => {\n                  filteredResults = mockData.filter((m) =>\n                    m.label.toLowerCase().includes(query.toLowerCase())\n                  );\n                  return new Promise((resolve) =>\n                    setTimeout(\n                      () => resolve(filteredResults),\n                      event.type === "icChange" ? 2000 : 1000\n                    )\n                  );\n                };\n                mockAPI(query).then((results) => (select.options = results));\n              } else {\n                select.options = [];\n              }\n            }\n            optionSelected = "";\n          }\n          function handleSelect(event) {\n            optionSelected = true;\n          }\n          select.addEventListener("icOptionSelect", handleSelect);\n          select.addEventListener("icChange", handleFilter);\n          select.addEventListener("icRetryLoad", handleFilter);\n        <\/script>`'},loki:{skip:!0}};const externalFilteringWithLoading=args=>lit_html.dy` <ic-search-bar
          label="Search for coffee"
          placeholder="Type to search"
          debounce="300"
          disable-filter="true"
          id="external-filter-search"
          timeout="1000"
        ></ic-search-bar>
        <br />
        <ic-typography
          >Suggested search options: Espresso, Double Espresso, Flat White,
          Cappuccino, Americano, Mocha</ic-typography
        >
        <br />
        <ic-typography
          >The IcChange event will trigger 300ms after you finish typing. 1
          second later, the options in the searchbar menu will be
          updated.</ic-typography
        >
        <script>
          var mockData = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
          var select = document.querySelector("#external-filter-search");
          var optionSelected = false;
          function handleFilter(event) {
            query = event.detail.value;
            if (query !== optionSelected) {
              if (query.length > 1) {
                if (!optionSelected) {
                  select.loading = true;
                }
                optionSelected = false;
                mockAPI = (query) => {
                  filteredResults = mockData.filter((m) =>
                    m.label.toLowerCase().includes(query.toLowerCase())
                  );
                  return new Promise((resolve) =>
                    setTimeout(
                      () => resolve(filteredResults),
                      event.type === "icChange" ? 2000 : 1000
                    )
                  );
                };
                mockAPI(query).then((results) => (select.options = results));
              } else {
                select.options = [];
              }
            }
            optionSelected = "";
          }
          function handleSelect(event) {
            optionSelected = true;
          }
          select.addEventListener("icOptionSelect", handleSelect);
          select.addEventListener("icChange", handleFilter);
          select.addEventListener("icRetryLoad", handleFilter);
        </script>`;externalFilteringWithLoading.storyName="External filtering with loading",externalFilteringWithLoading.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="Search for coffee"\n          placeholder="Type to search"\n          debounce="300"\n          disable-filter="true"\n          id="external-filter-search"\n          timeout="1000"\n        ></ic-search-bar>\n        <br />\n        <ic-typography\n          >Suggested search options: Espresso, Double Espresso, Flat White,\n          Cappuccino, Americano, Mocha</ic-typography\n        >\n        <br />\n        <ic-typography\n          >The IcChange event will trigger 300ms after you finish typing. 1\n          second later, the options in the searchbar menu will be\n          updated.</ic-typography\n        >\n        <script>\n          var mockData = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappucino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n          var select = document.querySelector("#external-filter-search");\n          var optionSelected = false;\n          function handleFilter(event) {\n            query = event.detail.value;\n            if (query !== optionSelected) {\n              if (query.length > 1) {\n                if (!optionSelected) {\n                  select.loading = true;\n                }\n                optionSelected = false;\n                mockAPI = (query) => {\n                  filteredResults = mockData.filter((m) =>\n                    m.label.toLowerCase().includes(query.toLowerCase())\n                  );\n                  return new Promise((resolve) =>\n                    setTimeout(\n                      () => resolve(filteredResults),\n                      event.type === "icChange" ? 2000 : 1000\n                    )\n                  );\n                };\n                mockAPI(query).then((results) => (select.options = results));\n              } else {\n                select.options = [];\n              }\n            }\n            optionSelected = "";\n          }\n          function handleSelect(event) {\n            optionSelected = true;\n          }\n          select.addEventListener("icOptionSelect", handleSelect);\n          select.addEventListener("icChange", handleFilter);\n          select.addEventListener("icRetryLoad", handleFilter);\n        <\/script>`'},loki:{skip:!0}};const querySearchMode=args=>lit_html.dy` <ic-search-bar
          label="What is your favourite coffee?"
          search-mode="query"
        >
        </ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappucino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;querySearchMode.storyName="Query search mode",querySearchMode.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          search-mode="query"\n        >\n        </ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappucino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'}};const componentMeta={title:"Web Components/Search bar",tags:["stories-mdx"],includeStories:["defaultStory","basic","withCustomLabelAndValueFields","withOptions","withOptionsNoFiltering","inAForm","helperText","small","deprecatedSmall","hiddenLabel","disabled","fullWidth","externalFiltering","externalFilteringWithLoading","querySearchMode"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_search_bar_stories=componentMeta,__namedExportsOrder=["defaultStory","basic","withCustomLabelAndValueFields","withOptions","withOptionsNoFiltering","inAForm","helperText","small","deprecatedSmall","hiddenLabel","disabled","fullWidth","externalFiltering","externalFilteringWithLoading","querySearchMode"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-search-bar-ic-search-bar-stories-mdx.f15ce604.iframe.bundle.js.map