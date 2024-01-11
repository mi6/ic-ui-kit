/*! For license information please see components-ic-checkbox-group-ic-checkbox-group-stories-mdx.b1c948c2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1645],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-checkbox-group/ic-checkbox-group.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,conditionalDynamic:()=>conditionalDynamic,conditionalStatic:()=>conditionalStatic,default:()=>ic_checkbox_group_stories,defaultStory:()=>defaultStory,disabled:()=>disabled,form:()=>ic_checkbox_group_stories_form,helperText:()=>helperText,hiddenLabel:()=>hiddenLabel,indeterminate:()=>indeterminate,required:()=>required,sizes:()=>sizes,textFieldValueChange:()=>textFieldValueChange,validation:()=>validation});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-checkbox-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute           | Description                                                                                                                         | Type                                      | Default     |\n| -------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------- |\n| `disabled`           | `disabled`          | If `true`, the checkbox group will be set to the disabled state.                                                                    | `boolean`                                 | `false`     |\n| `helperText`         | `helper-text`       | The helper text that will be displayed for additional field guidance.                                                               | `string`                                  | `""`        |\n| `hideLabel`          | `hide-label`        | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                  | `boolean`                                 | `false`     |\n| `label` _(required)_ | `label`             | The label for the checkbox group to be displayed.                                                                                   | `string`                                  | `undefined` |\n| `name` _(required)_  | `name`              | The name for the checkbox group to differentiate from other groups.                                                                 | `string`                                  | `undefined` |\n| `required`           | `required`          | If `true`, the checkbox group will require a value.                                                                                 | `boolean`                                 | `false`     |\n| `size`               | `size`              | The size of the checkboxes to be displayed. This does not affect the font size of the label.                                        | `"default" \\| "large" \\| "small"`         | `"default"` |\n| `small`              | `small`             | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/> | `boolean`                                 | `false`     |\n| `validationStatus`   | `validation-status` | The validation status - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                     | `"" \\| "error" \\| "success" \\| "warning"` | `""`        |\n| `validationText`     | `validation-text`   | The validation text - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                       | `string`                                  | `""`        |\n\n\n## Events\n\n| Event      | Description                         | Type                               |\n| ---------- | ----------------------------------- | ---------------------------------- |\n| `icChange` | Emitted when a checkbox is checked. | `CustomEvent<IcChangeEventDetail>` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-input-label](../ic-input-label)\n- [ic-input-validation](../ic-input-validation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-checkbox-group --\x3e ic-input-label\n  ic-checkbox-group --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  style ic-checkbox-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Checkbox",component:"Checkbox"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:args=>lit_html.dy`
        <ic-checkbox-group label="This is a label" name="group1">
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"required",children:"Required"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Required",children:args=>lit_html.dy`
        <ic-checkbox-group label="This is a label" required name="group1">
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",children:args=>lit_html.dy`
        <ic-checkbox-group label="This is a label" name="group1" Disabled>
          <ic-checkbox
            value="valueName1"
            label="Unselected / Disabled 1"
            Disabled
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Unselected / Disabled 2"
            Disabled
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled 3"
            Disabled
          ></ic-checkbox>
          <ic-checkbox
            value="valueName4"
            label="Selected / Disabled"
            Disabled
            checked
          ></ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Sizes",children:args=>lit_html.dy`
        <ic-checkbox-group
          size="large"
          label="These are checkboxes with the 'size' attribute set on them individually"
          name="group1"
        >
          <ic-checkbox
            size="small"
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            size="default"
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            size="large"
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-checkbox>
        </ic-checkbox-group>
        <ic-checkbox-group
          size="small"
          label="This is a checkbox group with small checkboxes"
          name="group1"
        >
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-checkbox>
        </ic-checkbox-group>
        <ic-checkbox-group
          size="default"
          label="This is a checkbox group with default-sized checkboxes"
          name="group1"
        >
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-checkbox>
        </ic-checkbox-group>
        <ic-checkbox-group
          size="large"
          label="This is a checkbox group with large checkboxes"
          name="group1"
        >
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hidden-label",children:"Hidden label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Hidden label",children:args=>lit_html.dy`
        <ic-checkbox-group label="This is a label" hide-label name="group1">
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"conditional-dynamic",children:"Conditional dynamic"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Conditional dynamic",children:args=>lit_html.dy`
        <script>
          function handleIcChange(ev) {
            console.log(
              ev.detail.selectedOption.label,
              ev.detail.selectedOption.checked
            );
          }
          document
            .querySelector("ic-checkbox-group")
            .addEventListener("icChange", handleIcChange);
        </script>
        <ic-checkbox-group label="This is a label" name="group1">
          <ic-checkbox
            additional-field-display="dynamic"
            value="valueName1"
            label="option1"
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-checkbox>
          <ic-checkbox
            additional-field-display="dynamic"
            value="valueName2"
            label="option2 - error example"
          >
            <ic-text-field
              validation-status="error"
              validation-text="now it has really gone to (coffee) pot"
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            >
            </ic-text-field>
          </ic-checkbox>
          <ic-checkbox
            additional-field-display="dynamic"
            value="valueName3"
            label="option3"
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"conditional-static",children:"Conditional static"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Conditional static",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <ic-checkbox-group label="This is a label" name="group1">
          <ic-checkbox value="valueName1" label="option1">
            <ic-text-field
              slot="additional-field"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-checkbox>
          <ic-checkbox value="valueName2" label="option2"> </ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Helper text",children:args=>lit_html.dy`
        <ic-checkbox-group
          label="This is a label"
          name="group1"
          helper-text="Helper text"
        >
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Validation",children:args=>lit_html.dy`
        <ic-checkbox-group
          label="This is a label"
          name="group1"
          validation-status="error"
          validation-text="Error message"
        >
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"form---this-shows-how-the-checkbox-button-works-within-a-form-and-is-where-the-value-of-the-checkbox-button-selected-will-appear-in-the-consolelog",children:"Form - This shows how the checkbox button works within a form and is where the value of the checkbox button selected will appear in the console.log"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Form",children:args=>lit_html.dy`
        <form>
          <ic-checkbox-group label="This is a label" name="group1">
            <ic-checkbox
              name="checkbox1"
              value="valueName1"
              label="Unselected / Default"
            ></ic-checkbox>
            <ic-checkbox
              name="checkbox2"
              value="valueName2"
              label="Selected / Default"
              checked
            ></ic-checkbox>
            <ic-checkbox
              name="checkbox3"
              value="valueName3"
              label="Unselected / Disabled"
              Disabled
            ></ic-checkbox>
          </ic-checkbox-group>
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(
              document.querySelector('ic-checkbox[name="checkbox1"]').checked
            );
            console.log(
              document.querySelector('ic-checkbox[name="checkbox2"]').checked
            );
            console.log(
              document.querySelector('ic-checkbox[name="checkbox3"]').checked
            );
          });
        </script>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"indeterminate",children:"Indeterminate"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Indeterminate",children:args=>lit_html.dy`<ic-checkbox-group label="Liked things" name="likes">
        <ic-checkbox
          value="drinks"
          label="Drinks"
          checked="true"
          indeterminate="true"
        >
          <ic-checkbox-group
            label="Drinks"
            hide-label
            slot="additional-field"
            name="drinks"
          >
            <ic-checkbox value="tea" label="Tea"></ic-checkbox>
            <ic-checkbox
              value="coffee"
              label="Coffee"
              checked="true"
              indeterminate="true"
            >
              <ic-checkbox-group
                label="Coffees"
                hide-label
                slot="additional-field"
                name="coffees"
              >
                <ic-checkbox value="mocha" label="Mocha"></ic-checkbox>
                <ic-checkbox
                  value="espresso"
                  label="Espresso"
                  checked
                ></ic-checkbox>
                <ic-checkbox value="cappucino" label="Cappucino"></ic-checkbox>
              </ic-checkbox-group>
            </ic-checkbox>
            <ic-checkbox value="juice" label="Juice"></ic-checkbox>
          </ic-checkbox-group>
        </ic-checkbox>
      </ic-checkbox-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"textfield-value-change",children:"TextField value change"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"TextField value change",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <script>
          var textOutputEl = document.querySelector("#value-text");
          function handleIcChange(ev) {
            textOutputEl.innerHTML = ev.target.value;
          }
          document
            .querySelector("ic-text-field")
            .addEventListener("icChange", handleIcChange);
        </script>
        <div>
          <ic-checkbox-group label="This is a label" name="group1">
            <ic-checkbox
              value="valueName1"
              label="Unselected / Default"
              additional-field-display="static"
            >
              <ic-text-field
                slot="additional-field"
                placeholder="Placeholder"
                label="What's your favourite type of coffee?"
              ></ic-text-field>
            </ic-checkbox>
          </ic-checkbox-group>
          <br />
          <span>textfield value: </span>
          <span id="value-text"></span>
          <div></div>
        </div>
      `})})]})}const defaultStory=args=>lit_html.dy`
        <ic-checkbox-group label="This is a label" name="group1">
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group label="This is a label" name="group1">\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            Disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'}};const required=args=>lit_html.dy`
        <ic-checkbox-group label="This is a label" required name="group1">
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `;required.storyName="Required",required.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group label="This is a label" required name="group1">\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            Disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'}};const disabled=args=>lit_html.dy`
        <ic-checkbox-group label="This is a label" name="group1" Disabled>
          <ic-checkbox
            value="valueName1"
            label="Unselected / Disabled 1"
            Disabled
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Unselected / Disabled 2"
            Disabled
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled 3"
            Disabled
          ></ic-checkbox>
          <ic-checkbox
            value="valueName4"
            label="Selected / Disabled"
            Disabled
            checked
          ></ic-checkbox>
        </ic-checkbox-group>
      `;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group label="This is a label" name="group1" Disabled>\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Disabled 1"\n            Disabled\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Unselected / Disabled 2"\n            Disabled\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled 3"\n            Disabled\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName4"\n            label="Selected / Disabled"\n            Disabled\n            checked\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'}};const sizes=args=>lit_html.dy`
        <ic-checkbox-group
          size="large"
          label="These are checkboxes with the 'size' attribute set on them individually"
          name="group1"
        >
          <ic-checkbox
            size="small"
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            size="default"
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            size="large"
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-checkbox>
        </ic-checkbox-group>
        <ic-checkbox-group
          size="small"
          label="This is a checkbox group with small checkboxes"
          name="group1"
        >
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-checkbox>
        </ic-checkbox-group>
        <ic-checkbox-group
          size="default"
          label="This is a checkbox group with default-sized checkboxes"
          name="group1"
        >
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-checkbox>
        </ic-checkbox-group>
        <ic-checkbox-group
          size="large"
          label="This is a checkbox group with large checkboxes"
          name="group1"
        >
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `;sizes.storyName="Sizes",sizes.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group\n          size="large"\n          label="These are checkboxes with the \'size\' attribute set on them individually"\n          name="group1"\n        >\n          <ic-checkbox\n            size="small"\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            size="default"\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            size="large"\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n        <ic-checkbox-group\n          size="small"\n          label="This is a checkbox group with small checkboxes"\n          name="group1"\n        >\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n        <ic-checkbox-group\n          size="default"\n          label="This is a checkbox group with default-sized checkboxes"\n          name="group1"\n        >\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n        <ic-checkbox-group\n          size="large"\n          label="This is a checkbox group with large checkboxes"\n          name="group1"\n        >\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'}};const hiddenLabel=args=>lit_html.dy`
        <ic-checkbox-group label="This is a label" hide-label name="group1">
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `;hiddenLabel.storyName="Hidden label",hiddenLabel.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group label="This is a label" hide-label name="group1">\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            Disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'}};const conditionalDynamic=args=>lit_html.dy`
        <script>
          function handleIcChange(ev) {
            console.log(
              ev.detail.selectedOption.label,
              ev.detail.selectedOption.checked
            );
          }
          document
            .querySelector("ic-checkbox-group")
            .addEventListener("icChange", handleIcChange);
        </script>
        <ic-checkbox-group label="This is a label" name="group1">
          <ic-checkbox
            additional-field-display="dynamic"
            value="valueName1"
            label="option1"
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-checkbox>
          <ic-checkbox
            additional-field-display="dynamic"
            value="valueName2"
            label="option2 - error example"
          >
            <ic-text-field
              validation-status="error"
              validation-text="now it has really gone to (coffee) pot"
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            >
            </ic-text-field>
          </ic-checkbox>
          <ic-checkbox
            additional-field-display="dynamic"
            value="valueName3"
            label="option3"
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-checkbox>
        </ic-checkbox-group>
      `;conditionalDynamic.storyName="Conditional dynamic",conditionalDynamic.parameters={storySource:{source:'args => html`\n        <script>\n          function handleIcChange(ev) {\n            console.log(\n              ev.detail.selectedOption.label,\n              ev.detail.selectedOption.checked\n            );\n          }\n          document\n            .querySelector("ic-checkbox-group")\n            .addEventListener("icChange", handleIcChange);\n        <\/script>\n        <ic-checkbox-group label="This is a label" name="group1">\n          <ic-checkbox\n            additional-field-display="dynamic"\n            value="valueName1"\n            label="option1"\n          >\n            <ic-text-field\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-checkbox>\n          <ic-checkbox\n            additional-field-display="dynamic"\n            value="valueName2"\n            label="option2 - error example"\n          >\n            <ic-text-field\n              validation-status="error"\n              validation-text="now it has really gone to (coffee) pot"\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            >\n            </ic-text-field>\n          </ic-checkbox>\n          <ic-checkbox\n            additional-field-display="dynamic"\n            value="valueName3"\n            label="option3"\n          >\n            <ic-text-field\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-checkbox>\n        </ic-checkbox-group>\n      `'}};const conditionalStatic=args=>lit_html.dy`
        <ic-checkbox-group label="This is a label" name="group1">
          <ic-checkbox value="valueName1" label="option1">
            <ic-text-field
              slot="additional-field"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-checkbox>
          <ic-checkbox value="valueName2" label="option2"> </ic-checkbox>
        </ic-checkbox-group>
      `;conditionalStatic.storyName="Conditional static",conditionalStatic.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group label="This is a label" name="group1">\n          <ic-checkbox value="valueName1" label="option1">\n            <ic-text-field\n              slot="additional-field"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-checkbox>\n          <ic-checkbox value="valueName2" label="option2"> </ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const helperText=args=>lit_html.dy`
        <ic-checkbox-group
          label="This is a label"
          name="group1"
          helper-text="Helper text"
        >
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group\n          label="This is a label"\n          name="group1"\n          helper-text="Helper text"\n        >\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            Disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'}};const validation=args=>lit_html.dy`
        <ic-checkbox-group
          label="This is a label"
          name="group1"
          validation-status="error"
          validation-text="Error message"
        >
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
          ></ic-checkbox>
        </ic-checkbox-group>
      `;validation.storyName="Validation",validation.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group\n          label="This is a label"\n          name="group1"\n          validation-status="error"\n          validation-text="Error message"\n        >\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            Disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'}};const ic_checkbox_group_stories_form=args=>lit_html.dy`
        <form>
          <ic-checkbox-group label="This is a label" name="group1">
            <ic-checkbox
              name="checkbox1"
              value="valueName1"
              label="Unselected / Default"
            ></ic-checkbox>
            <ic-checkbox
              name="checkbox2"
              value="valueName2"
              label="Selected / Default"
              checked
            ></ic-checkbox>
            <ic-checkbox
              name="checkbox3"
              value="valueName3"
              label="Unselected / Disabled"
              Disabled
            ></ic-checkbox>
          </ic-checkbox-group>
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(
              document.querySelector('ic-checkbox[name="checkbox1"]').checked
            );
            console.log(
              document.querySelector('ic-checkbox[name="checkbox2"]').checked
            );
            console.log(
              document.querySelector('ic-checkbox[name="checkbox3"]').checked
            );
          });
        </script>
      `;ic_checkbox_group_stories_form.storyName="Form",ic_checkbox_group_stories_form.parameters={storySource:{source:'args => html`\n        <form>\n          <ic-checkbox-group label="This is a label" name="group1">\n            <ic-checkbox\n              name="checkbox1"\n              value="valueName1"\n              label="Unselected / Default"\n            ></ic-checkbox>\n            <ic-checkbox\n              name="checkbox2"\n              value="valueName2"\n              label="Selected / Default"\n              checked\n            ></ic-checkbox>\n            <ic-checkbox\n              name="checkbox3"\n              value="valueName3"\n              label="Unselected / Disabled"\n              Disabled\n            ></ic-checkbox>\n          </ic-checkbox-group>\n          <input type="submit" value="Submit" />\n          <input type="reset" value="Reset" />\n        </form>\n        <script>\n          document.querySelector("form").addEventListener("submit", (ev) => {\n            ev.preventDefault();\n            console.log(\n              document.querySelector(\'ic-checkbox[name="checkbox1"]\').checked\n            );\n            console.log(\n              document.querySelector(\'ic-checkbox[name="checkbox2"]\').checked\n            );\n            console.log(\n              document.querySelector(\'ic-checkbox[name="checkbox3"]\').checked\n            );\n          });\n        <\/script>\n      `'}};const indeterminate=args=>lit_html.dy`<ic-checkbox-group label="Liked things" name="likes">
        <ic-checkbox
          value="drinks"
          label="Drinks"
          checked="true"
          indeterminate="true"
        >
          <ic-checkbox-group
            label="Drinks"
            hide-label
            slot="additional-field"
            name="drinks"
          >
            <ic-checkbox value="tea" label="Tea"></ic-checkbox>
            <ic-checkbox
              value="coffee"
              label="Coffee"
              checked="true"
              indeterminate="true"
            >
              <ic-checkbox-group
                label="Coffees"
                hide-label
                slot="additional-field"
                name="coffees"
              >
                <ic-checkbox value="mocha" label="Mocha"></ic-checkbox>
                <ic-checkbox
                  value="espresso"
                  label="Espresso"
                  checked
                ></ic-checkbox>
                <ic-checkbox value="cappucino" label="Cappucino"></ic-checkbox>
              </ic-checkbox-group>
            </ic-checkbox>
            <ic-checkbox value="juice" label="Juice"></ic-checkbox>
          </ic-checkbox-group>
        </ic-checkbox>
      </ic-checkbox-group>`;indeterminate.storyName="Indeterminate",indeterminate.parameters={storySource:{source:'args => html`<ic-checkbox-group label="Liked things" name="likes">\n        <ic-checkbox\n          value="drinks"\n          label="Drinks"\n          checked="true"\n          indeterminate="true"\n        >\n          <ic-checkbox-group\n            label="Drinks"\n            hide-label\n            slot="additional-field"\n            name="drinks"\n          >\n            <ic-checkbox value="tea" label="Tea"></ic-checkbox>\n            <ic-checkbox\n              value="coffee"\n              label="Coffee"\n              checked="true"\n              indeterminate="true"\n            >\n              <ic-checkbox-group\n                label="Coffees"\n                hide-label\n                slot="additional-field"\n                name="coffees"\n              >\n                <ic-checkbox value="mocha" label="Mocha"></ic-checkbox>\n                <ic-checkbox\n                  value="espresso"\n                  label="Espresso"\n                  checked\n                ></ic-checkbox>\n                <ic-checkbox value="cappucino" label="Cappucino"></ic-checkbox>\n              </ic-checkbox-group>\n            </ic-checkbox>\n            <ic-checkbox value="juice" label="Juice"></ic-checkbox>\n          </ic-checkbox-group>\n        </ic-checkbox>\n      </ic-checkbox-group>`'}};const textFieldValueChange=args=>lit_html.dy`
        <script>
          var textOutputEl = document.querySelector("#value-text");
          function handleIcChange(ev) {
            textOutputEl.innerHTML = ev.target.value;
          }
          document
            .querySelector("ic-text-field")
            .addEventListener("icChange", handleIcChange);
        </script>
        <div>
          <ic-checkbox-group label="This is a label" name="group1">
            <ic-checkbox
              value="valueName1"
              label="Unselected / Default"
              additional-field-display="static"
            >
              <ic-text-field
                slot="additional-field"
                placeholder="Placeholder"
                label="What's your favourite type of coffee?"
              ></ic-text-field>
            </ic-checkbox>
          </ic-checkbox-group>
          <br />
          <span>textfield value: </span>
          <span id="value-text"></span>
          <div></div>
        </div>
      `;textFieldValueChange.storyName="TextField value change",textFieldValueChange.parameters={storySource:{source:'args => html`\n        <script>\n          var textOutputEl = document.querySelector("#value-text");\n          function handleIcChange(ev) {\n            textOutputEl.innerHTML = ev.target.value;\n          }\n          document\n            .querySelector("ic-text-field")\n            .addEventListener("icChange", handleIcChange);\n        <\/script>\n        <div>\n          <ic-checkbox-group label="This is a label" name="group1">\n            <ic-checkbox\n              value="valueName1"\n              label="Unselected / Default"\n              additional-field-display="static"\n            >\n              <ic-text-field\n                slot="additional-field"\n                placeholder="Placeholder"\n                label="What\'s your favourite type of coffee?"\n              ></ic-text-field>\n            </ic-checkbox>\n          </ic-checkbox-group>\n          <br />\n          <span>textfield value: </span>\n          <span id="value-text"></span>\n          <div></div>\n        </div>\n      `'},loki:{skip:!0}};const componentMeta={title:"Web Components/Checkbox",tags:["stories-mdx"],includeStories:["defaultStory","required","disabled","sizes","hiddenLabel","conditionalDynamic","conditionalStatic","helperText","validation","form","indeterminate","textFieldValueChange"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_checkbox_group_stories=componentMeta,__namedExportsOrder=["defaultStory","required","disabled","sizes","hiddenLabel","conditionalDynamic","conditionalStatic","helperText","validation","form","indeterminate","textFieldValueChange"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-checkbox-group-ic-checkbox-group-stories-mdx.b1c948c2.iframe.bundle.js.map