/*! For license information please see components-ic-radio-group-ic-radio-group-stories-mdx.9658e009.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8806],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-radio-group/ic-radio-group.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,conditionalDynamic:()=>conditionalDynamic,conditionalStatic:()=>conditionalStatic,default:()=>ic_radio_group_stories,defaultStory:()=>defaultStory,deprecatedSmall:()=>deprecatedSmall,disabled:()=>disabled,form:()=>ic_radio_group_stories_form,helperText:()=>helperText,horizontal:()=>horizontal,required:()=>required,small:()=>small,validation:()=>validation});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-radio-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute           | Description                                                                                                                                                                                                                      | Type                                      | Default      |\n| -------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------ |\n| `disabled`           | `disabled`          | If `true`, the disabled state will be set.                                                                                                                                                                                       | `boolean`                                 | `false`      |\n| `helperText`         | `helper-text`       | The helper text that will be displayed for additional field guidance.                                                                                                                                                            | `string`                                  | `undefined`  |\n| `hideLabel`          | `hide-label`        | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                                                                               | `boolean`                                 | `false`      |\n| `label` _(required)_ | `label`             | The label for the radio group to be displayed.                                                                                                                                                                                   | `string`                                  | `undefined`  |\n| `name` _(required)_  | `name`              | The name for the radio group to differentiate from other groups.                                                                                                                                                                 | `string`                                  | `undefined`  |\n| `orientation`        | `orientation`       | The orientation of the radio buttons in the radio group. If there are more than two radio buttons in a radio group or either of the radio buttons use the `additional-field` slot, then the orientation will always be vertical. | `"horizontal" \\| "vertical"`              | `"vertical"` |\n| `required`           | `required`          | If `true`, the radio group will require a value.                                                                                                                                                                                 | `boolean`                                 | `false`      |\n| `size`               | `size`              | The size of the radio group component.                                                                                                                                                                                           | `"default" \\| "small"`                    | `"default"`  |\n| `small`              | `small`             | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/>                                                                                              | `boolean`                                 | `false`      |\n| `validationStatus`   | `validation-status` | The validation status - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                                                                                                                  | `"" \\| "error" \\| "success" \\| "warning"` | `""`         |\n| `validationText`     | `validation-text`   | The validation text - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                                                                                                                    | `string`                                  | `""`         |\n\n\n## Events\n\n| Event      | Description                          | Type                               |\n| ---------- | ------------------------------------ | ---------------------------------- |\n| `icChange` | Emitted when a user selects a radio. | `CustomEvent<IcChangeEventDetail>` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-input-label](../ic-input-label)\n- [ic-input-validation](../ic-input-validation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-radio-group --\x3e ic-input-label\n  ic-radio-group --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  style ic-radio-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Radio button",component:"Radio"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:args=>lit_html.dy`
        <ic-radio-group label="This is a label" name="1">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"horizontal",children:"Horizontal"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Horizontal",children:args=>lit_html.dy`
        <ic-radio-group
          orientation="horizontal"
          label="This is a label"
          name="1"
        >
          <ic-radio-option
            value="valueName1"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Unselected / Default"
          ></ic-radio-option>
        </ic-radio-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"required",children:"Required"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Required",children:args=>lit_html.dy`
        <ic-radio-group label="This is a label" required name="1">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",children:args=>lit_html.dy`
        <ic-radio-group label="This is a label" name="1">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Disabled 1"
            disabled
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Unselected / Disabled 2"
            disabled
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled 3"
            disabled
          ></ic-radio-option>
          <ic-radio-option
            value="valueName4"
            label="Selected / Disabled"
            disabled
            selected
          ></ic-radio-option>
        </ic-radio-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Basic",children:args=>lit_html.dy`
        <ic-radio-group label="This is a label" name="1">
          <ic-radio-option value="valueName1"></ic-radio-option>
          <ic-radio-option value="valueName2"></ic-radio-option>
        </ic-radio-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"conditional-dynamic",children:"Conditional dynamic"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Conditional dynamic",children:args=>lit_html.dy`
        <script>
          function handleIcChange(ev) {
            console.log(ev.detail.selectedOption);
          }
          document
            .querySelector("ic-radio-group")
            .addEventListener("icChange", handleIcChange);
        </script>
        <ic-radio-group label="Conditional dynamic" name="1">
          <ic-radio-option
            additional-field-display="dynamic"
            value="valueName1"
            label="option1"
            selected
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-radio-option>
          <ic-radio-option
            additional-field-display="dynamic"
            value="valueName2"
            label="option2 - error example"
          >
            <ic-text-field
              validation-status="error"
              validation-text="Now it has really gone to (coffee) pot"
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            >
            </ic-text-field>
          </ic-radio-option>
          <ic-radio-option
            additional-field-display="dynamic"
            value="valueName3"
            label="option3"
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-radio-option>
        </ic-radio-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"conditional-static",children:"Conditional static"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Conditional static",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <ic-radio-group label=" Conditional static" name="1">
          <ic-radio-option value="valueName1" label="option1">
            <ic-text-field
              slot="additional-field"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-radio-option>
          <ic-radio-option value="valueName2" label="option2">
          </ic-radio-option>
        </ic-radio-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Helper text",children:args=>lit_html.dy`
        <ic-radio-group
          label="This is a label"
          name="1"
          helper-text="Helper text"
        >
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Small",children:args=>lit_html.dy`
        <ic-radio-group label="This is a label" name="1" size="small">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Deprecated - small",children:args=>lit_html.dy`
        <ic-radio-group label="This is a label" name="1" small>
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Validation",children:args=>lit_html.dy`
        <ic-radio-group
          label="This is a label"
          name="1"
          validation-status="error"
          validation-text="Error message"
        >
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"form---this-shows-how-the-radio-button-works-within-a-form-and-is-where-the-value-of-the-radio-button-selected-will-appear-in-the-consolelog",children:"Form - This shows how the radio button works within a form and is where the value of the radio button selected will appear in the console.log"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Form",children:args=>lit_html.dy`
        <form>
          <ic-radio-group label="This is a label" name="1">
            <ic-radio-option
              value="valueName1"
              label="Unselected / Default"
            ></ic-radio-option>
            <ic-radio-option
              value="valueName2"
              label="Selected / Default"
            ></ic-radio-option>
            <ic-radio-option
              value="valueName3"
              label="Unselected / Disabled"
              disabled
            ></ic-radio-option>
          </ic-radio-group>
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(document.querySelector('input[name="1"]').value);
          });
        </script>
      `})})]})}const defaultStory=args=>lit_html.dy`
        <ic-radio-group label="This is a label" name="1">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`\n        <ic-radio-group label="This is a label" name="1">\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'}};const horizontal=args=>lit_html.dy`
        <ic-radio-group
          orientation="horizontal"
          label="This is a label"
          name="1"
        >
          <ic-radio-option
            value="valueName1"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Unselected / Default"
          ></ic-radio-option>
        </ic-radio-group>
      `;horizontal.storyName="Horizontal",horizontal.parameters={storySource:{source:'args => html`\n        <ic-radio-group\n          orientation="horizontal"\n          label="This is a label"\n          name="1"\n        >\n          <ic-radio-option\n            value="valueName1"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Unselected / Default"\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'}};const required=args=>lit_html.dy`
        <ic-radio-group label="This is a label" required name="1">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `;required.storyName="Required",required.parameters={storySource:{source:'args => html`\n        <ic-radio-group label="This is a label" required name="1">\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'}};const disabled=args=>lit_html.dy`
        <ic-radio-group label="This is a label" name="1">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Disabled 1"
            disabled
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Unselected / Disabled 2"
            disabled
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled 3"
            disabled
          ></ic-radio-option>
          <ic-radio-option
            value="valueName4"
            label="Selected / Disabled"
            disabled
            selected
          ></ic-radio-option>
        </ic-radio-group>
      `;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html`\n        <ic-radio-group label="This is a label" name="1">\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Disabled 1"\n            disabled\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Unselected / Disabled 2"\n            disabled\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled 3"\n            disabled\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName4"\n            label="Selected / Disabled"\n            disabled\n            selected\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'}};const basic=args=>lit_html.dy`
        <ic-radio-group label="This is a label" name="1">
          <ic-radio-option value="valueName1"></ic-radio-option>
          <ic-radio-option value="valueName2"></ic-radio-option>
        </ic-radio-group>
      `;basic.storyName="Basic",basic.parameters={storySource:{source:'args => html`\n        <ic-radio-group label="This is a label" name="1">\n          <ic-radio-option value="valueName1"></ic-radio-option>\n          <ic-radio-option value="valueName2"></ic-radio-option>\n        </ic-radio-group>\n      `'}};const conditionalDynamic=args=>lit_html.dy`
        <script>
          function handleIcChange(ev) {
            console.log(ev.detail.selectedOption);
          }
          document
            .querySelector("ic-radio-group")
            .addEventListener("icChange", handleIcChange);
        </script>
        <ic-radio-group label="Conditional dynamic" name="1">
          <ic-radio-option
            additional-field-display="dynamic"
            value="valueName1"
            label="option1"
            selected
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-radio-option>
          <ic-radio-option
            additional-field-display="dynamic"
            value="valueName2"
            label="option2 - error example"
          >
            <ic-text-field
              validation-status="error"
              validation-text="Now it has really gone to (coffee) pot"
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            >
            </ic-text-field>
          </ic-radio-option>
          <ic-radio-option
            additional-field-display="dynamic"
            value="valueName3"
            label="option3"
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-radio-option>
        </ic-radio-group>
      `;conditionalDynamic.storyName="Conditional dynamic",conditionalDynamic.parameters={storySource:{source:'args => html`\n        <script>\n          function handleIcChange(ev) {\n            console.log(ev.detail.selectedOption);\n          }\n          document\n            .querySelector("ic-radio-group")\n            .addEventListener("icChange", handleIcChange);\n        <\/script>\n        <ic-radio-group label="Conditional dynamic" name="1">\n          <ic-radio-option\n            additional-field-display="dynamic"\n            value="valueName1"\n            label="option1"\n            selected\n          >\n            <ic-text-field\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-radio-option>\n          <ic-radio-option\n            additional-field-display="dynamic"\n            value="valueName2"\n            label="option2 - error example"\n          >\n            <ic-text-field\n              validation-status="error"\n              validation-text="Now it has really gone to (coffee) pot"\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            >\n            </ic-text-field>\n          </ic-radio-option>\n          <ic-radio-option\n            additional-field-display="dynamic"\n            value="valueName3"\n            label="option3"\n          >\n            <ic-text-field\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-radio-option>\n        </ic-radio-group>\n      `'}};const conditionalStatic=args=>lit_html.dy`
        <ic-radio-group label=" Conditional static" name="1">
          <ic-radio-option value="valueName1" label="option1">
            <ic-text-field
              slot="additional-field"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-radio-option>
          <ic-radio-option value="valueName2" label="option2">
          </ic-radio-option>
        </ic-radio-group>
      `;conditionalStatic.storyName="Conditional static",conditionalStatic.parameters={storySource:{source:'args => html`\n        <ic-radio-group label=" Conditional static" name="1">\n          <ic-radio-option value="valueName1" label="option1">\n            <ic-text-field\n              slot="additional-field"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-radio-option>\n          <ic-radio-option value="valueName2" label="option2">\n          </ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const helperText=args=>lit_html.dy`
        <ic-radio-group
          label="This is a label"
          name="1"
          helper-text="Helper text"
        >
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'args => html`\n        <ic-radio-group\n          label="This is a label"\n          name="1"\n          helper-text="Helper text"\n        >\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'}};const small=args=>lit_html.dy`
        <ic-radio-group label="This is a label" name="1" size="small">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `;small.storyName="Small",small.parameters={storySource:{source:'args => html`\n        <ic-radio-group label="This is a label" name="1" size="small">\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'}};const deprecatedSmall=args=>lit_html.dy`
        <ic-radio-group label="This is a label" name="1" small>
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `;deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'args => html`\n        <ic-radio-group label="This is a label" name="1" small>\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'}};const validation=args=>lit_html.dy`
        <ic-radio-group
          label="This is a label"
          name="1"
          validation-status="error"
          validation-text="Error message"
        >
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          ></ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            selected
          ></ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      `;validation.storyName="Validation",validation.parameters={storySource:{source:'args => html`\n        <ic-radio-group\n          label="This is a label"\n          name="1"\n          validation-status="error"\n          validation-text="Error message"\n        >\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'}};const ic_radio_group_stories_form=args=>lit_html.dy`
        <form>
          <ic-radio-group label="This is a label" name="1">
            <ic-radio-option
              value="valueName1"
              label="Unselected / Default"
            ></ic-radio-option>
            <ic-radio-option
              value="valueName2"
              label="Selected / Default"
            ></ic-radio-option>
            <ic-radio-option
              value="valueName3"
              label="Unselected / Disabled"
              disabled
            ></ic-radio-option>
          </ic-radio-group>
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(document.querySelector('input[name="1"]').value);
          });
        </script>
      `;ic_radio_group_stories_form.storyName="Form",ic_radio_group_stories_form.parameters={storySource:{source:'args => html`\n        <form>\n          <ic-radio-group label="This is a label" name="1">\n            <ic-radio-option\n              value="valueName1"\n              label="Unselected / Default"\n            ></ic-radio-option>\n            <ic-radio-option\n              value="valueName2"\n              label="Selected / Default"\n            ></ic-radio-option>\n            <ic-radio-option\n              value="valueName3"\n              label="Unselected / Disabled"\n              disabled\n            ></ic-radio-option>\n          </ic-radio-group>\n          <input type="submit" value="Submit" />\n          <input type="reset" value="Reset" />\n        </form>\n        <script>\n          document.querySelector("form").addEventListener("submit", (ev) => {\n            ev.preventDefault();\n            console.log(document.querySelector(\'input[name="1"]\').value);\n          });\n        <\/script>\n      `'}};const componentMeta={title:"Web Components/Radio button",tags:["stories-mdx"],includeStories:["defaultStory","horizontal","required","disabled","basic","conditionalDynamic","conditionalStatic","helperText","small","deprecatedSmall","validation","form"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_radio_group_stories=componentMeta,__namedExportsOrder=["defaultStory","horizontal","required","disabled","basic","conditionalDynamic","conditionalStatic","helperText","small","deprecatedSmall","validation","form"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-radio-group-ic-radio-group-stories-mdx.9658e009.iframe.bundle.js.map