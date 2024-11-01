/*! For license information please see components-ic-search-bar-ic-search-bar-stories-mdx.cea20ae5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9421],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-search-bar/ic-search-bar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,charactersUntilSuggestion:()=>charactersUntilSuggestion,default:()=>ic_search_bar_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,deprecatedSmall:()=>deprecatedSmall,disabled:()=>disabled,emptyOptionListText:()=>emptyOptionListText,externalFiltering:()=>externalFiltering,externalFilteringWithCustomLoadingMessages:()=>externalFilteringWithCustomLoadingMessages,externalFilteringWithLoading:()=>externalFilteringWithLoading,fullWidth:()=>fullWidth,helperText:()=>helperText,hiddenLabel:()=>hiddenLabel,hintText:()=>hintText,inAForm:()=>inAForm,longOptionLabels:()=>longOptionLabels,playground:()=>playground,querySearchMode:()=>querySearchMode,small:()=>small,withCustomLabelAndValueFields:()=>withCustomLabelAndValueFields,withOptions:()=>withOptions,withOptionsNoFiltering:()=>withOptionsNoFiltering});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-search-bar\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                    | Attribute                     | Description                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Default                                                                                                    |\n| --------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |\n| `autocapitalize`            | `autocapitalize`              | The automatic capitalisation of the text value as it is entered/edited by the user. Available options: "off", "none", "on", "sentences", "words", "characters".              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"off"`                                                                                                    |\n| `autocomplete`              | `autocomplete`                | The state of autocompletion the browser can apply on the text value.                                                                                                         | `"name" \\| "on" \\| "off" \\| "honorific-prefix" \\| "given-name" \\| "additional-name" \\| "family-name" \\| "honorific-suffix" \\| "nickname" \\| "email" \\| "username" \\| "new-password" \\| "current-password" \\| "one-time-code" \\| "organization-title" \\| "organization" \\| "street-address" \\| "address-line1" \\| "address-line2" \\| "address-line3" \\| "address-level4" \\| "address-level3" \\| "address-level2" \\| "address-level1" \\| "country" \\| "country-name" \\| "postal-code" \\| "cc-name" \\| "cc-given-name" \\| "cc-additional-name" \\| "cc-family-name" \\| "cc-number" \\| "cc-exp" \\| "cc-exp-month" \\| "cc-exp-year" \\| "cc-csc" \\| "cc-type" \\| "transaction-currency" \\| "transaction-amount" \\| "language" \\| "bday" \\| "bday-day" \\| "bday-month" \\| "bday-year" \\| "sex" \\| "tel" \\| "tel-country-code" \\| "tel-national" \\| "tel-area-code" \\| "tel-local" \\| "tel-extension" \\| "impp" \\| "url" \\| "photo"` | `"off"`                                                                                                    |\n| `autocorrect`               | `autocorrect`                 | The state of autocorrection the browser can apply when the user is entering/editing the text value.                                                                          | `"off" \\| "on"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `"off"`                                                                                                    |\n| `autofocus`                 | `autofocus`                   | If `true`, the form control will have input focus when the page loads.                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `charactersUntilSuggestion` | `characters-until-suggestion` | The number of characters until suggestions appear. The submit button will be disabled until the inputted value is equal to or greater than this number.                      | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `2`                                                                                                        |\n| `debounce`                  | `debounce`                    | The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.                                                                           | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `0`                                                                                                        |\n| `disableFilter`             | `disable-filter`              | Specify whether to disable the built in filtering. For example, if options will already be filtered from external source. If `true`, all options provided will be displayed. | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `disabled`                  | `disabled`                    | If `true`, the disabled state will be set.                                                                                                                                   | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `emptyOptionListText`       | `empty-option-list-text`      | The text displayed when there are no options in the option list.                                                                                                             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"No results found"`                                                                                       |\n| `focusOnLoad`               | `focus-on-load`               | If `true`, the search bar will be focused when component loaded.                                                                                                             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `fullWidth`                 | `full-width`                  | Specify whether the search bar fills the full width of the container. If `true`, this overrides the --input-width CSS variable.                                              | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `helperText`                | `helper-text`                 | The helper text that will be displayed for additional field guidance.                                                                                                        | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `""`                                                                                                       |\n| `hideLabel`                 | `hide-label`                  | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                           | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `hintText`                  | `hint-text`                   | The hint text for the hidden assistive description element.                                                                                                                  | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"When autocomplete results are available use the up and down arrows to choose and press enter to select"` |\n| `label` _(required)_        | `label`                       | The label for the search bar.                                                                                                                                                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined`                                                                                                |\n| `labelField`                | `label-field`                 | The custom name for the label field to correspond with the IcMenuOption type.                                                                                                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"label"`                                                                                                  |\n| `loading`                   | `loading`                     | Trigger loading state when fetching options asynchronously                                                                                                                   | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `loadingErrorLabel`         | `loading-error-label`         | Change the message displayed when external loading times out.                                                                                                                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"Loading Error"`                                                                                          |\n| `loadingLabel`              | `loading-label`               | Change the message displayed whilst the options are being loaded externally.                                                                                                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"Loading..."`                                                                                             |\n| `name`                      | `name`                        | The name of the control, which is submitted with the form data.                                                                                                              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `this.inputId`                                                                                             |\n| `options`                   | --                            | The suggested search options.                                                                                                                                                | `IcMenuOption[]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `[]`                                                                                                       |\n| `placeholder`               | `placeholder`                 | The placeholder value to display.                                                                                                                                            | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"Search"`                                                                                                 |\n| `readonly`                  | `readonly`                    | If `true`, the readonly state will be set.                                                                                                                                   | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `required`                  | `required`                    | If `true`, the search bar will require a value.                                                                                                                              | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `searchMode`                | `search-mode`                 | Specify the mode search bar uses to search. `navigation` allows for quick lookups of a set of values, `query` allows for more general searches.                              | `"navigation" \\| "query"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `"navigation"`                                                                                             |\n| `size`                      | `size`                        | The size of the search bar component.                                                                                                                                        | `"default" \\| "small"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `"default"`                                                                                                |\n| `small`                     | `small`                       | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/>                                          | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `spellcheck`                | `spellcheck`                  | If `true`, the value of the search will have its spelling and grammar checked.                                                                                               | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                                                                    |\n| `timeout`                   | `timeout`                     | If using external filtering, set a timeout for when loading takes too long.                                                                                                  | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined`                                                                                                |\n| `value`                     | `value`                       | The value of the search input.                                                                                                                                               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `""`                                                                                                       |\n| `valueField`                | `value-field`                 | The custom name for the value field to correspond with the IcMenuOption type.                                                                                                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `"value"`                                                                                                  |\n\n\n## Events\n\n| Event              | Description                                                                                                                    | Type                                      |\n| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |\n| `icChange`         | Emitted when the value has changed.                                                                                            | `CustomEvent<IcValueEventDetail>`         |\n| `icClear`          | Emitted when value is cleared with clear button                                                                                | `CustomEvent<void>`                       |\n| `icInput`          | Emitted when a keyboard input occurred.                                                                                        | `CustomEvent<IcValueEventDetail>`         |\n| `icInputBlur`      | <span style="color:red">**[DEPRECATED]**</span> This event should not be used anymore. Use icSearchBarBlur instead.<br/><br/>  | `CustomEvent<IcSearchBarBlurEventDetail>` |\n| `icInputFocus`     | <span style="color:red">**[DEPRECATED]**</span> This event should not be used anymore. Use icSearchBarFocus instead.<br/><br/> | `CustomEvent<IcValueEventDetail>`         |\n| `icMenuChange`     | Emitted when the state of the menu changes (i.e. open or close)                                                                | `CustomEvent<IcMenuChangeEventDetail>`    |\n| `icOptionSelect`   | Emitted when option is highlighted within the menu                                                                             | `CustomEvent<IcOptionSelectEventDetail>`  |\n| `icRetryLoad`      | Emitted when the \'retry loading\' button is clicked                                                                             | `CustomEvent<IcValueEventDetail>`         |\n| `icSearchBarBlur`  | Emitted when blur is invoked from ic-search-bar                                                                                | `CustomEvent<IcSearchBarBlurEventDetail>` |\n| `icSearchBarFocus` | Emitted when focus is invoked from ic-search-bar                                                                               | `CustomEvent<void>`                       |\n| `icSubmitSearch`   | Emitted when the search value has been submitted                                                                               | `CustomEvent<IcValueEventDetail>`         |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the native `input`.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## CSS Custom Properties\n\n| Name                | Description                |\n| ------------------- | -------------------------- |\n| `--ic-z-index-menu` | z-index of search bar menu |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-text-field](../ic-text-field)\n- [ic-button](../ic-button)\n- [ic-menu](../ic-menu)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-search-bar --\x3e ic-text-field\n  ic-search-bar --\x3e ic-button\n  ic-search-bar --\x3e ic-menu\n  ic-text-field --\x3e ic-input-container\n  ic-text-field --\x3e ic-input-label\n  ic-text-field --\x3e ic-input-component-container\n  ic-text-field --\x3e ic-input-validation\n  ic-text-field --\x3e ic-typography\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-menu --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-typography\n  ic-menu --\x3e ic-button\n  style ic-search-bar fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={autocapitalize:"off",autocorrect:"off",autofocus:!1,disabled:!1,fullWidth:!1,focusOnLoad:!0,helperText:"",hideLabel:!1,label:"What is your favourite coffee?",placeholder:"Search",readonly:!1,required:!1,size:"default",spellcheck:!1};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Search bar",component:"ic-search-bar"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar label="What is your favourite coffee?">
      </ic-search-bar>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Basic",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Ameno", value: "ameno" },
            { label: "Aicano", value: "acano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-custom-label-and-value-fields",children:"With custom label and value fields"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With custom label and value fields",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          label-field="urn"
          value-field="reference"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { urn: "Espresso", reference: "espresso" },
            { urn: "Double Espresso", reference: "doubleespresso" },
            { urn: "Flat White", reference: "flatwhite" },
            { urn: "Cappuccino", reference: "cappuccino" },
            { urn: "Americano", reference: "americano" },
            { urn: "Ameno", reference: "ameno" },
            { urn: "Aicano", reference: "acano" },
            { urn: "Mocha", reference: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-options",children:"With options"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With options",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
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
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano", disabled: true },
            { label: "Cafe au lait", value: "cafe" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-options-no-filtering",children:"With options (no filtering)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With options (no filtering)",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
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
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano", disabled: true },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"in-a-form",children:"In a form"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"In a form",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <form>
        <ic-search-bar
          name="search-01"
          label="What is your favourite coffee?"
        ></ic-search-bar>
      </form>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Helper text",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          helper-text="Some helper text"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Small",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
        label="What is your favourite coffee?"
        size="small"
      ></ic-search-bar>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Deprecated - small",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
        label="What is your favourite coffee?"
        small
      ></ic-search-bar>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hidden-label",children:"Hidden label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Hidden label",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
        label="What is your favourite coffee?"
        hide-label
      ></ic-search-bar>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
        label="What is your favourite coffee?"
        disabled
      ></ic-search-bar>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Full width",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
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
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"external-filtering",children:"External filtering"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"External filtering",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
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
            { label: "Cappuccino", value: "cappuccino" },
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
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"external-filtering-with-loading",children:"External filtering with loading"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"External filtering with loading",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
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
            { label: "Cappuccino", value: "cappuccino" },
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
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"external-filtering-with-custom-loading-messages",children:"External filtering with custom loading messages"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"External filtering with custom loading messages",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
          label="Search for coffee"
          placeholder="Type to search"
          debounce="300"
          disable-filter="true"
          id="external-filter-search"
          timeout="1000"
          loading-label="Loading time"
          loading-error-label="Oops error"
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
            { label: "Cappuccino", value: "cappuccino" },
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
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"query-search-mode",children:"Query search mode"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Query search mode",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          search-mode="query"
        >
        </ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"empty-option-list-text",children:"Empty option list text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Empty option list text",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          empty-option-list-text="There's nothing here"
        >
        </ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"characters-until-suggestion",children:"Characters until suggestion"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Characters until suggestion",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          characters-until-suggestion="5"
        >
        </ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hint-text",children:"Hint text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Hint text",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          hint-text="You can use up and down arrows to navigate the options when they are available, and press enter to select an option."
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Ameno", value: "ameno" },
            { label: "Aicano", value: "acano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"long-option-labels",children:"Long option labels"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Long option labels",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            {
              label: "Espresso because it tastes like coffee",
              value: "espresso",
            },
            {
              label:
                "Double Espresso because it tastes like double the amount of coffee",
              value: "doubleespresso",
            },
            {
              label: "Reallylongonewordanswerthatcouldbethenameofacoffee",
              value: "flatwhite",
            },
          ];
        </script>`})}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,argTypes:{autocapitalize:{options:["off","none","on","sentences","words","characters"],control:{type:"select"}},autocorrect:{options:["on","off"],control:{type:"inline-radio"}},size:{options:["default","small"],control:{type:"inline-radio"}}},name:"Playground",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<ic-search-bar
          autocapitalize=${args.autocapitalize}
          autocorrect=${args.autocorrect}
          autofocus=${args.autofocus}
          label=${args.label}
          required=${args.required}
          readonly=${args.readonly}
          spellcheck=${args.spellcheck}
          disabled=${args.disabled}
          full-width=${args.fullWidth}
          focus-on-load=${args.focusOnLoad}
          helper-text=${args.helperText}
          hide-label=${args.hideLabel}
          placeholder=${args.placeholder}
          size=${args.size}
        >
        </ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`})})]})}const defaultStory=args=>lit_html.qy` <ic-search-bar label="What is your favourite coffee?">
      </ic-search-bar>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html` <ic-search-bar label="What is your favourite coffee?">\n      </ic-search-bar>`'},loki:{skip:!0}};const basic=args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Ameno", value: "ameno" },
            { label: "Aicano", value: "acano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;basic.storyName="Basic",basic.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n        ></ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Ameno", value: "ameno" },\n            { label: "Aicano", value: "acano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const withCustomLabelAndValueFields=args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          label-field="urn"
          value-field="reference"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { urn: "Espresso", reference: "espresso" },
            { urn: "Double Espresso", reference: "doubleespresso" },
            { urn: "Flat White", reference: "flatwhite" },
            { urn: "Cappuccino", reference: "cappuccino" },
            { urn: "Americano", reference: "americano" },
            { urn: "Ameno", reference: "ameno" },
            { urn: "Aicano", reference: "acano" },
            { urn: "Mocha", reference: "mocha" },
          ];
        </script>`;withCustomLabelAndValueFields.storyName="With custom label and value fields",withCustomLabelAndValueFields.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          label-field="urn"\n          value-field="reference"\n        ></ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { urn: "Espresso", reference: "espresso" },\n            { urn: "Double Espresso", reference: "doubleespresso" },\n            { urn: "Flat White", reference: "flatwhite" },\n            { urn: "Cappuccino", reference: "cappuccino" },\n            { urn: "Americano", reference: "americano" },\n            { urn: "Ameno", reference: "ameno" },\n            { urn: "Aicano", reference: "acano" },\n            { urn: "Mocha", reference: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const withOptions=args=>lit_html.qy` <ic-search-bar
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
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano", disabled: true },
            { label: "Cafe au lait", value: "cafe" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;withOptions.storyName="With options",withOptions.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          value="Flat White"\n        ></ic-search-bar>\n        <br />\n        <ic-typography\n          >Suggested search options: Espresso, Double Espresso, Flat White,\n          Cappuccino, Americano, Mocha</ic-typography\n        >\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano", disabled: true },\n            { label: "Cafe au lait", value: "cafe" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const withOptionsNoFiltering=args=>lit_html.qy` <ic-search-bar
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
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano", disabled: true },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;withOptionsNoFiltering.storyName="With options (no filtering)",withOptionsNoFiltering.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          disable-filter\n        ></ic-search-bar>\n        <br />\n        <ic-typography>\n          All options will be displayed as you type\n        </ic-typography>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano", disabled: true },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const inAForm=args=>lit_html.qy` <form>
        <ic-search-bar
          name="search-01"
          label="What is your favourite coffee?"
        ></ic-search-bar>
      </form>`;inAForm.storyName="In a form",inAForm.parameters={storySource:{source:'args => html` <form>\n        <ic-search-bar\n          name="search-01"\n          label="What is your favourite coffee?"\n        ></ic-search-bar>\n      </form>`'},loki:{skip:!0}};const helperText=args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          helper-text="Some helper text"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          helper-text="Some helper text"\n        ></ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const small=args=>lit_html.qy` <ic-search-bar
        label="What is your favourite coffee?"
        size="small"
      ></ic-search-bar>`;small.storyName="Small",small.parameters={storySource:{source:'args => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        size="small"\n      ></ic-search-bar>`'},loki:{skip:!0}};const deprecatedSmall=args=>lit_html.qy` <ic-search-bar
        label="What is your favourite coffee?"
        small
      ></ic-search-bar>`;deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'args => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        small\n      ></ic-search-bar>`'},loki:{skip:!0}};const hiddenLabel=args=>lit_html.qy` <ic-search-bar
        label="What is your favourite coffee?"
        hide-label
      ></ic-search-bar>`;hiddenLabel.storyName="Hidden label",hiddenLabel.parameters={storySource:{source:'args => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        hide-label\n      ></ic-search-bar>`'},loki:{skip:!0}};const disabled=args=>lit_html.qy` <ic-search-bar
        label="What is your favourite coffee?"
        disabled
      ></ic-search-bar>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        disabled\n      ></ic-search-bar>`'},loki:{skip:!0}};const fullWidth=args=>lit_html.qy` <ic-search-bar
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
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          full-width\n          id="search2"\n        ></ic-search-bar>\n        <br />\n        <ic-typography\n          >Suggested search options: Espresso, Double Espresso, Flat White,\n          Cappuccino, Americano, Mocha</ic-typography\n        >\n        <script>\n          document.querySelector("#search2").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const externalFiltering=args=>lit_html.qy` <ic-search-bar
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
            { label: "Cappuccino", value: "cappuccino" },
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
        </script>`;externalFiltering.storyName="External filtering",externalFiltering.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="Search for coffee"\n          placeholder="Type to search"\n          debounce="300"\n          disable-filter="true"\n          id="external-filter-search"\n        ></ic-search-bar>\n        <br />\n        <ic-typography\n          >Suggested search options: Espresso, Double Espresso, Flat White,\n          Cappuccino, Americano, Mocha</ic-typography\n        >\n        <br />\n        <ic-typography\n          >The IcChange event will trigger 300ms after you finish\n          typing.</ic-typography\n        >\n        <script>\n          var mockData = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n          var select = document.querySelector("#external-filter-search");\n          var optionSelected = false;\n          function handleFilter(event) {\n            query = event.detail.value;\n            if (query !== optionSelected) {\n              if (query.length > 1) {\n                optionSelected = false;\n                mockAPI = (query) => {\n                  filteredResults = mockData.filter((m) =>\n                    m.label.toLowerCase().includes(query.toLowerCase())\n                  );\n                  return new Promise((resolve) =>\n                    setTimeout(\n                      () => resolve(filteredResults),\n                      event.type === "icChange" ? 2000 : 1000\n                    )\n                  );\n                };\n                mockAPI(query).then((results) => (select.options = results));\n              } else {\n                select.options = [];\n              }\n            }\n            optionSelected = "";\n          }\n          function handleSelect(event) {\n            optionSelected = true;\n          }\n          select.addEventListener("icOptionSelect", handleSelect);\n          select.addEventListener("icChange", handleFilter);\n          select.addEventListener("icRetryLoad", handleFilter);\n        <\/script>`'},loki:{skip:!0}};const externalFilteringWithLoading=args=>lit_html.qy` <ic-search-bar
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
            { label: "Cappuccino", value: "cappuccino" },
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
        </script>`;externalFilteringWithLoading.storyName="External filtering with loading",externalFilteringWithLoading.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="Search for coffee"\n          placeholder="Type to search"\n          debounce="300"\n          disable-filter="true"\n          id="external-filter-search"\n          timeout="1000"\n        ></ic-search-bar>\n        <br />\n        <ic-typography\n          >Suggested search options: Espresso, Double Espresso, Flat White,\n          Cappuccino, Americano, Mocha</ic-typography\n        >\n        <br />\n        <ic-typography\n          >The IcChange event will trigger 300ms after you finish typing. 1\n          second later, the options in the searchbar menu will be\n          updated.</ic-typography\n        >\n        <script>\n          var mockData = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n          var select = document.querySelector("#external-filter-search");\n          var optionSelected = false;\n          function handleFilter(event) {\n            query = event.detail.value;\n            if (query !== optionSelected) {\n              if (query.length > 1) {\n                if (!optionSelected) {\n                  select.loading = true;\n                }\n                optionSelected = false;\n                mockAPI = (query) => {\n                  filteredResults = mockData.filter((m) =>\n                    m.label.toLowerCase().includes(query.toLowerCase())\n                  );\n                  return new Promise((resolve) =>\n                    setTimeout(\n                      () => resolve(filteredResults),\n                      event.type === "icChange" ? 2000 : 1000\n                    )\n                  );\n                };\n                mockAPI(query).then((results) => (select.options = results));\n              } else {\n                select.options = [];\n              }\n            }\n            optionSelected = "";\n          }\n          function handleSelect(event) {\n            optionSelected = true;\n          }\n          select.addEventListener("icOptionSelect", handleSelect);\n          select.addEventListener("icChange", handleFilter);\n          select.addEventListener("icRetryLoad", handleFilter);\n        <\/script>`'},loki:{skip:!0}};const externalFilteringWithCustomLoadingMessages=args=>lit_html.qy` <ic-search-bar
          label="Search for coffee"
          placeholder="Type to search"
          debounce="300"
          disable-filter="true"
          id="external-filter-search"
          timeout="1000"
          loading-label="Loading time"
          loading-error-label="Oops error"
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
            { label: "Cappuccino", value: "cappuccino" },
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
        </script>`;externalFilteringWithCustomLoadingMessages.storyName="External filtering with custom loading messages",externalFilteringWithCustomLoadingMessages.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="Search for coffee"\n          placeholder="Type to search"\n          debounce="300"\n          disable-filter="true"\n          id="external-filter-search"\n          timeout="1000"\n          loading-label="Loading time"\n          loading-error-label="Oops error"\n        ></ic-search-bar>\n        <br />\n        <ic-typography\n          >Suggested search options: Espresso, Double Espresso, Flat White,\n          Cappuccino, Americano, Mocha</ic-typography\n        >\n        <br />\n        <ic-typography\n          >The IcChange event will trigger 300ms after you finish typing. 1\n          second later, the options in the searchbar menu will be\n          updated.</ic-typography\n        >\n        <script>\n          var mockData = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n          var select = document.querySelector("#external-filter-search");\n          var optionSelected = false;\n          function handleFilter(event) {\n            query = event.detail.value;\n            if (query !== optionSelected) {\n              if (query.length > 1) {\n                if (!optionSelected) {\n                  select.loading = true;\n                }\n                optionSelected = false;\n                mockAPI = (query) => {\n                  filteredResults = mockData.filter((m) =>\n                    m.label.toLowerCase().includes(query.toLowerCase())\n                  );\n                  return new Promise((resolve) =>\n                    setTimeout(\n                      () => resolve(filteredResults),\n                      event.type === "icChange" ? 2000 : 1000\n                    )\n                  );\n                };\n                mockAPI(query).then((results) => (select.options = results));\n              } else {\n                select.options = [];\n              }\n            }\n            optionSelected = "";\n          }\n          function handleSelect(event) {\n            optionSelected = true;\n          }\n          select.addEventListener("icOptionSelect", handleSelect);\n          select.addEventListener("icChange", handleFilter);\n          select.addEventListener("icRetryLoad", handleFilter);\n        <\/script>`'},loki:{skip:!0}};const querySearchMode=args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          search-mode="query"
        >
        </ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;querySearchMode.storyName="Query search mode",querySearchMode.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          search-mode="query"\n        >\n        </ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const emptyOptionListText=args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          empty-option-list-text="There's nothing here"
        >
        </ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;emptyOptionListText.storyName="Empty option list text",emptyOptionListText.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          empty-option-list-text="There\'s nothing here"\n        >\n        </ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const charactersUntilSuggestion=args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          characters-until-suggestion="5"
        >
        </ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;charactersUntilSuggestion.storyName="Characters until suggestion",charactersUntilSuggestion.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          characters-until-suggestion="5"\n        >\n        </ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const hintText=args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
          hint-text="You can use up and down arrows to navigate the options when they are available, and press enter to select an option."
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Ameno", value: "ameno" },
            { label: "Aicano", value: "acano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;hintText.storyName="Hint text",hintText.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n          hint-text="You can use up and down arrows to navigate the options when they are available, and press enter to select an option."\n        ></ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Ameno", value: "ameno" },\n            { label: "Aicano", value: "acano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const longOptionLabels=args=>lit_html.qy` <ic-search-bar
          label="What is your favourite coffee?"
        ></ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            {
              label: "Espresso because it tastes like coffee",
              value: "espresso",
            },
            {
              label:
                "Double Espresso because it tastes like double the amount of coffee",
              value: "doubleespresso",
            },
            {
              label: "Reallylongonewordanswerthatcouldbethenameofacoffee",
              value: "flatwhite",
            },
          ];
        </script>`;longOptionLabels.storyName="Long option labels",longOptionLabels.parameters={storySource:{source:'args => html` <ic-search-bar\n          label="What is your favourite coffee?"\n        ></ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            {\n              label: "Espresso because it tastes like coffee",\n              value: "espresso",\n            },\n            {\n              label:\n                "Double Espresso because it tastes like double the amount of coffee",\n              value: "doubleespresso",\n            },\n            {\n              label: "Reallylongonewordanswerthatcouldbethenameofacoffee",\n              value: "flatwhite",\n            },\n          ];\n        <\/script>`'},loki:{skip:!0}};const playground=args=>lit_html.qy`<ic-search-bar
          autocapitalize=${args.autocapitalize}
          autocorrect=${args.autocorrect}
          autofocus=${args.autofocus}
          label=${args.label}
          required=${args.required}
          readonly=${args.readonly}
          spellcheck=${args.spellcheck}
          disabled=${args.disabled}
          full-width=${args.fullWidth}
          focus-on-load=${args.focusOnLoad}
          helper-text=${args.helperText}
          hide-label=${args.hideLabel}
          placeholder=${args.placeholder}
          size=${args.size}
        >
        </ic-search-bar>
        <script>
          document.querySelector("ic-search-bar").options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ];
        </script>`;playground.storyName="Playground",playground.argTypes={autocapitalize:{options:["off","none","on","sentences","words","characters"],control:{type:"select"}},autocorrect:{options:["on","off"],control:{type:"inline-radio"}},size:{options:["default","small"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`<ic-search-bar\n          autocapitalize=${args.autocapitalize}\n          autocorrect=${args.autocorrect}\n          autofocus=${args.autofocus}\n          label=${args.label}\n          required=${args.required}\n          readonly=${args.readonly}\n          spellcheck=${args.spellcheck}\n          disabled=${args.disabled}\n          full-width=${args.fullWidth}\n          focus-on-load=${args.focusOnLoad}\n          helper-text=${args.helperText}\n          hide-label=${args.hideLabel}\n          placeholder=${args.placeholder}\n          size=${args.size}\n        >\n        </ic-search-bar>\n        <script>\n          document.querySelector("ic-search-bar").options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n        <\/script>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Search bar",tags:["stories-mdx"],includeStories:["defaultStory","basic","withCustomLabelAndValueFields","withOptions","withOptionsNoFiltering","inAForm","helperText","small","deprecatedSmall","hiddenLabel","disabled","fullWidth","externalFiltering","externalFilteringWithLoading","externalFilteringWithCustomLoadingMessages","querySearchMode","emptyOptionListText","charactersUntilSuggestion","hintText","longOptionLabels","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_search_bar_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","basic","withCustomLabelAndValueFields","withOptions","withOptionsNoFiltering","inAForm","helperText","small","deprecatedSmall","hiddenLabel","disabled","fullWidth","externalFiltering","externalFilteringWithLoading","externalFilteringWithCustomLoadingMessages","querySearchMode","emptyOptionListText","charactersUntilSuggestion","hintText","longOptionLabels","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-search-bar-ic-search-bar-stories-mdx.cea20ae5.iframe.bundle.js.map