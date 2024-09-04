/*! For license information please see components-ic-checkbox-group-ic-checkbox-group-stories-mdx.aaa960eb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6989],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-checkbox-group/ic-checkbox-group.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,conditionalDynamic:()=>conditionalDynamic,conditionalStatic:()=>conditionalStatic,default:()=>ic_checkbox_group_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,disabled:()=>disabled,form:()=>ic_checkbox_group_stories_form,helperText:()=>helperText,hiddenCheckboxLabel:()=>hiddenCheckboxLabel,hiddenGroupLabel:()=>hiddenGroupLabel,indeterminate:()=>indeterminate,indeterminateWithChildren:()=>indeterminateWithChildren,playground:()=>playground,required:()=>required,sizes:()=>sizes,textFieldValueChange:()=>textFieldValueChange,validation:()=>validation});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-checkbox-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute           | Description                                                                                                                         | Type                                      | Default     |\n| -------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------- |\n| `disabled`           | `disabled`          | If `true`, the checkbox group will be set to the disabled state.                                                                    | `boolean`                                 | `false`     |\n| `helperText`         | `helper-text`       | The helper text that will be displayed for additional field guidance.                                                               | `string`                                  | `""`        |\n| `hideLabel`          | `hide-label`        | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                  | `boolean`                                 | `false`     |\n| `label` _(required)_ | `label`             | The label for the checkbox group to be displayed.                                                                                   | `string`                                  | `undefined` |\n| `name` _(required)_  | `name`              | The name for the checkbox group to differentiate from other groups.                                                                 | `string`                                  | `undefined` |\n| `required`           | `required`          | If `true`, the checkbox group will require a value.                                                                                 | `boolean`                                 | `false`     |\n| `size`               | `size`              | The size of the checkboxes to be displayed. This does not affect the font size of the label.                                        | `"default" \\| "large" \\| "small"`         | `"default"` |\n| `small`              | `small`             | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/> | `boolean`                                 | `false`     |\n| `validationStatus`   | `validation-status` | The validation status - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                     | `"" \\| "error" \\| "success" \\| "warning"` | `""`        |\n| `validationText`     | `validation-text`   | The validation text - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                       | `string`                                  | `""`        |\n\n\n## Events\n\n| Event      | Description                         | Type                               |\n| ---------- | ----------------------------------- | ---------------------------------- |\n| `icChange` | Emitted when a checkbox is checked. | `CustomEvent<IcChangeEventDetail>` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-input-label](../ic-input-label)\n- [ic-input-validation](../ic-input-validation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-checkbox-group --\x3e ic-input-label\n  ic-checkbox-group --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  style ic-checkbox-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={additionalFieldDisplay:"dynamic",additionalFieldSlot:"additional-field",checked:!1,disabled:!1,dynamicText:"Dynamic text",groupLabel:"Checkbox group label",helperText:"Helper text",hideLabel:!1,hideGroupLabel:!1,indeterminate:!1,label:"Checkbox label",nativeIndeterminateBehaviour:!1,required:!1,size:"default",validationStatus:"",validationText:"",value:"checkbox-value"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Checkbox",component:"Checkbox"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"required",children:"Required"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Required",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Sizes",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hidden-group-label",children:"Hidden group label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Hidden group label",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hidden-checkbox-label",children:"Hidden checkbox label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Hidden checkbox label",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
        <ic-checkbox-group label="This is a label" name="group1">
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
            hide-label
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
            hide-label
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
            hide-label
          ></ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"conditional-dynamic",children:"Conditional dynamic"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Conditional dynamic",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"conditional-static",children:"Conditional static"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Conditional static",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
        <ic-checkbox-group label="This is a label" name="group1">
          <ic-checkbox value="valueName1" label="option1">
            <ic-text-field
              slot="additional-field"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-checkbox>
          <ic-checkbox value="valueName2" label="option2"> </ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Helper text",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Validation",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"form---this-shows-how-the-checkbox-button-works-within-a-form-and-is-where-the-value-of-the-checkbox-button-selected-will-appear-in-the-consolelog",children:"Form - This shows how the checkbox button works within a form and is where the value of the checkbox button selected will appear in the console.log"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Form",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"indeterminate",children:"Indeterminate"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Indeterminate",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
        <script>
          var indeterminate = true;
          var nativeIndeterminate = true;
          var indeterminateTextEl = document.querySelector(
            "#indeterminate-text"
          );
          indeterminateTextEl.innerHTML = indeterminate;
          var checkedTextEl = document.querySelector("#checked-text");
          checkedTextEl.innerHTML = true;
          var nativeIndeterminateTextEl = document.querySelector(
            "#native-indeterminate-text"
          );
          nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
          var nativeCheckedTextEl = document.querySelector(
            "#native-checked-text"
          );
          nativeCheckedTextEl.innerHTML = true;
          function toggleIndeterminate() {
            indeterminate = !indeterminate;
            document.querySelector("#indeterminate-checkbox").indeterminate =
              indeterminate;
            indeterminateTextEl.innerHTML = indeterminate;
          }
          function toggleNativeIndeterminate() {
            nativeIndeterminate = !nativeIndeterminate;
            document.querySelector(
              "#native-indeterminate-checkbox"
            ).indeterminate = nativeIndeterminate;
            nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
          }
          function icCheckHandler(ev) {
            document.querySelector("#checked-text").innerHTML =
              ev.target.checked;
          }
          function icCheckHandlerNative(ev) {
            document.querySelector("#native-checked-text").innerHTML =
              ev.target.checked;
          }
          document
            .querySelector("#indeterminate-button")
            .addEventListener("click", toggleIndeterminate);
          document
            .querySelector("#indeterminate-checkbox")
            .addEventListener("icCheck", icCheckHandler);
          document
            .querySelector("#native-indeterminate-button")
            .addEventListener("click", toggleNativeIndeterminate);
          document
            .querySelector("#native-indeterminate-checkbox")
            .addEventListener("icCheck", icCheckHandlerNative);
        </script>
        <div style="display:flex;gap:16px;flex-wrap:wrap">
          <div style="border:1px solid gray;padding:8px;">
            <ic-checkbox-group
              label="'native-indeterminate-behavior'=false"
              name="indeterminate"
            >
              <ic-checkbox
                id="indeterminate-checkbox"
                value="indeterminate"
                label="Indeterminate checkbox"
                checked="true"
                indeterminate="true"
              >
              </ic-checkbox>
            </ic-checkbox-group>
            <br />
            <ic-button id="indeterminate-button"
              >Toggle indeterminate</ic-button
            >
            <br />
            <br />
            <span>Indeterminate: <span id="indeterminate-text"></span></span>
            <br />
            <span>Checked: <span id="checked-text"></span></span>
          </div>
          <div style="border:1px solid gray;padding:8px;">
            <ic-checkbox-group
              label="'native-indeterminate-behavior'=true"
              name="native_indeterminate"
            >
              <ic-checkbox
                id="native-indeterminate-checkbox"
                value="indeterminate"
                label="Indeterminate checkbox"
                checked="true"
                indeterminate="true"
                native-indeterminate-behaviour="true"
              >
              </ic-checkbox>
            </ic-checkbox-group>
            <br />
            <ic-button id="native-indeterminate-button"
              >Toggle indeterminate</ic-button
            >
            <br />
            <br />
            <span
              >Indeterminate: <span id="native-indeterminate-text"></span
            ></span>
            <br />
            <span>Checked: <span id="native-checked-text"></span></span>
          </div>
        </div>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"indeterminate-with-children",children:"Indeterminate with children"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Indeterminate with children",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
        <script>
          var drinksCheckbox = document.querySelector("#drinks-checkbox");
          var teaCheckbox = document.querySelector("#tea-checkbox");
          var coffeeCheckbox = document.querySelector("#coffee-checkbox");
          var juiceCheckbox = document.querySelector("#juice-checkbox");
          var drinksGroup = document.querySelector("#drinks-group");
          drinksCheckbox.addEventListener("icCheck", function (ev) {
            if (ev.target === drinksCheckbox) {
              teaCheckbox.checked = drinksCheckbox.checked;
              coffeeCheckbox.checked = drinksCheckbox.checked;
              juiceCheckbox.checked = drinksCheckbox.checked;
            }
          });
          drinksGroup.addEventListener("icChange", function (ev) {
            if (ev.detail.checkedOptions.length === 3) {
              drinksCheckbox.indeterminate = false;
              drinksCheckbox.checked = true;
            } else if (ev.detail.checkedOptions.length === 0) {
              drinksCheckbox.indeterminate = false;
              drinksCheckbox.checked = false;
            } else {
              drinksCheckbox.indeterminate = true;
              drinksCheckbox.checked = false;
            }
          });
          coffeeCheckbox.checked = true;
          drinksCheckbox.indeterminate = true;
        </script>
        <ic-checkbox-group label="Liked things" name="1">
          <ic-checkbox
            id="drinks-checkbox"
            value="drinks"
            label="Drinks"
            indeterminate="false"
            native-indeterminate-behaviour
          >
            <ic-checkbox-group
              id="drinks-group"
              name="2"
              label="Drinks"
              hide-label
              slot="additional-field"
            >
              <ic-checkbox
                id="tea-checkbox"
                value="tea"
                label="Tea"
              ></ic-checkbox>
              <ic-checkbox
                id="coffee-checkbox"
                value="coffee"
                label="Coffee"
              ></ic-checkbox>
              <ic-checkbox
                id="juice-checkbox"
                value="juice"
                label="Juice"
              ></ic-checkbox>
            </ic-checkbox-group>
          </ic-checkbox>
        </ic-checkbox-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"textfield-value-change",children:"TextField value change"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"TextField value change",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,argTypes:{additionalFieldDisplay:{options:["dynamic","static"],control:{type:"inline-radio"}},additionalFieldSlot:{options:["additional-field",""],control:{type:"select"}},size:{options:["default","large","small"],control:{type:"inline-radio"}},validationStatus:{options:["warning","error","success",""],control:{type:"select"}}},name:"Playground",parameters:{loki:{skip:!0}},children:args=>{const[{checked},updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return lit_html.qy` <ic-checkbox-group
        disabled=${args.disabled}
        label=${args.groupLabel}
        size=${args.size}
        helper-text=${args.helperText}
        hide-label=${args.hideGroupLabel}
        required=${args.required}
        validation-status=${args.validationStatus}
        validation-text=${args.validationText}
      >
        <ic-checkbox
          disabled=${args.disabled}
          label=${args.label}
          value=${args.value}
          size=${args.size}
          hide-label=${args.hideLabel}
          indeterminate=${args.indeterminate}
          checked=${checked}
          additional-field-display=${args.additionalFieldDisplay}
          dynamic-text=${args.dynamicText}
          native-indeterminate-behaviour=${args.nativeIndeterminateBehaviour}
        >
          <ic-text-field
            slot=${args.additionalFieldSlot}
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          ></ic-text-field>
        </ic-checkbox>
      </ic-checkbox-group>`}})})]})}const defaultStory=args=>lit_html.qy`
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
      `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group label="This is a label" name="group1">\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            Disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const required=args=>lit_html.qy`
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
      `;required.storyName="Required",required.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group label="This is a label" required name="group1">\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            Disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const disabled=args=>lit_html.qy`
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
      `;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group label="This is a label" name="group1" Disabled>\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Disabled 1"\n            Disabled\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Unselected / Disabled 2"\n            Disabled\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled 3"\n            Disabled\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName4"\n            label="Selected / Disabled"\n            Disabled\n            checked\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const sizes=args=>lit_html.qy`
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
      `;sizes.storyName="Sizes",sizes.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group\n          size="large"\n          label="These are checkboxes with the \'size\' attribute set on them individually"\n          name="group1"\n        >\n          <ic-checkbox\n            size="small"\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            size="default"\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            size="large"\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n        <ic-checkbox-group\n          size="small"\n          label="This is a checkbox group with small checkboxes"\n          name="group1"\n        >\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n        <ic-checkbox-group\n          size="default"\n          label="This is a checkbox group with default-sized checkboxes"\n          name="group1"\n        >\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n        <ic-checkbox-group\n          size="large"\n          label="This is a checkbox group with large checkboxes"\n          name="group1"\n        >\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const hiddenGroupLabel=args=>lit_html.qy`
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
      `;hiddenGroupLabel.storyName="Hidden group label",hiddenGroupLabel.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group label="This is a label" hide-label name="group1">\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            Disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const hiddenCheckboxLabel=args=>lit_html.qy`
        <ic-checkbox-group label="This is a label" name="group1">
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
            hide-label
          ></ic-checkbox>
          <ic-checkbox
            value="valueName2"
            label="Selected / Default"
            checked
            hide-label
          ></ic-checkbox>
          <ic-checkbox
            value="valueName3"
            label="Unselected / Disabled"
            Disabled
            hide-label
          ></ic-checkbox>
        </ic-checkbox-group>
      `;hiddenCheckboxLabel.storyName="Hidden checkbox label",hiddenCheckboxLabel.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group label="This is a label" name="group1">\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n            hide-label\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n            hide-label\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            Disabled\n            hide-label\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const conditionalDynamic=args=>lit_html.qy`
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
      `;conditionalDynamic.storyName="Conditional dynamic",conditionalDynamic.parameters={storySource:{source:'args => html`\n        <script>\n          function handleIcChange(ev) {\n            console.log(\n              ev.detail.selectedOption.label,\n              ev.detail.selectedOption.checked\n            );\n          }\n          document\n            .querySelector("ic-checkbox-group")\n            .addEventListener("icChange", handleIcChange);\n        <\/script>\n        <ic-checkbox-group label="This is a label" name="group1">\n          <ic-checkbox\n            additional-field-display="dynamic"\n            value="valueName1"\n            label="option1"\n          >\n            <ic-text-field\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-checkbox>\n          <ic-checkbox\n            additional-field-display="dynamic"\n            value="valueName2"\n            label="option2 - error example"\n          >\n            <ic-text-field\n              validation-status="error"\n              validation-text="now it has really gone to (coffee) pot"\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            >\n            </ic-text-field>\n          </ic-checkbox>\n          <ic-checkbox\n            additional-field-display="dynamic"\n            value="valueName3"\n            label="option3"\n          >\n            <ic-text-field\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const conditionalStatic=args=>lit_html.qy`
        <ic-checkbox-group label="This is a label" name="group1">
          <ic-checkbox value="valueName1" label="option1">
            <ic-text-field
              slot="additional-field"
              label="What's your favourite type of coffee?"
            ></ic-text-field>
          </ic-checkbox>
          <ic-checkbox value="valueName2" label="option2"> </ic-checkbox>
        </ic-checkbox-group>
      `;conditionalStatic.storyName="Conditional static",conditionalStatic.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group label="This is a label" name="group1">\n          <ic-checkbox value="valueName1" label="option1">\n            <ic-text-field\n              slot="additional-field"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-checkbox>\n          <ic-checkbox value="valueName2" label="option2"> </ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const helperText=args=>lit_html.qy`
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
      `;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group\n          label="This is a label"\n          name="group1"\n          helper-text="Helper text"\n        >\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            Disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const validation=args=>lit_html.qy`
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
      `;validation.storyName="Validation",validation.parameters={storySource:{source:'args => html`\n        <ic-checkbox-group\n          label="This is a label"\n          name="group1"\n          validation-status="error"\n          validation-text="Error message"\n        >\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName2"\n            label="Selected / Default"\n            checked\n          ></ic-checkbox>\n          <ic-checkbox\n            value="valueName3"\n            label="Unselected / Disabled"\n            Disabled\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const ic_checkbox_group_stories_form=args=>lit_html.qy`
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
      `;ic_checkbox_group_stories_form.storyName="Form",ic_checkbox_group_stories_form.parameters={storySource:{source:'args => html`\n        <form>\n          <ic-checkbox-group label="This is a label" name="group1">\n            <ic-checkbox\n              name="checkbox1"\n              value="valueName1"\n              label="Unselected / Default"\n            ></ic-checkbox>\n            <ic-checkbox\n              name="checkbox2"\n              value="valueName2"\n              label="Selected / Default"\n              checked\n            ></ic-checkbox>\n            <ic-checkbox\n              name="checkbox3"\n              value="valueName3"\n              label="Unselected / Disabled"\n              Disabled\n            ></ic-checkbox>\n          </ic-checkbox-group>\n          <input type="submit" value="Submit" />\n          <input type="reset" value="Reset" />\n        </form>\n        <script>\n          document.querySelector("form").addEventListener("submit", (ev) => {\n            ev.preventDefault();\n            console.log(\n              document.querySelector(\'ic-checkbox[name="checkbox1"]\').checked\n            );\n            console.log(\n              document.querySelector(\'ic-checkbox[name="checkbox2"]\').checked\n            );\n            console.log(\n              document.querySelector(\'ic-checkbox[name="checkbox3"]\').checked\n            );\n          });\n        <\/script>\n      `'},loki:{skip:!0}};const indeterminate=args=>lit_html.qy`
        <script>
          var indeterminate = true;
          var nativeIndeterminate = true;
          var indeterminateTextEl = document.querySelector(
            "#indeterminate-text"
          );
          indeterminateTextEl.innerHTML = indeterminate;
          var checkedTextEl = document.querySelector("#checked-text");
          checkedTextEl.innerHTML = true;
          var nativeIndeterminateTextEl = document.querySelector(
            "#native-indeterminate-text"
          );
          nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
          var nativeCheckedTextEl = document.querySelector(
            "#native-checked-text"
          );
          nativeCheckedTextEl.innerHTML = true;
          function toggleIndeterminate() {
            indeterminate = !indeterminate;
            document.querySelector("#indeterminate-checkbox").indeterminate =
              indeterminate;
            indeterminateTextEl.innerHTML = indeterminate;
          }
          function toggleNativeIndeterminate() {
            nativeIndeterminate = !nativeIndeterminate;
            document.querySelector(
              "#native-indeterminate-checkbox"
            ).indeterminate = nativeIndeterminate;
            nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
          }
          function icCheckHandler(ev) {
            document.querySelector("#checked-text").innerHTML =
              ev.target.checked;
          }
          function icCheckHandlerNative(ev) {
            document.querySelector("#native-checked-text").innerHTML =
              ev.target.checked;
          }
          document
            .querySelector("#indeterminate-button")
            .addEventListener("click", toggleIndeterminate);
          document
            .querySelector("#indeterminate-checkbox")
            .addEventListener("icCheck", icCheckHandler);
          document
            .querySelector("#native-indeterminate-button")
            .addEventListener("click", toggleNativeIndeterminate);
          document
            .querySelector("#native-indeterminate-checkbox")
            .addEventListener("icCheck", icCheckHandlerNative);
        </script>
        <div style="display:flex;gap:16px;flex-wrap:wrap">
          <div style="border:1px solid gray;padding:8px;">
            <ic-checkbox-group
              label="'native-indeterminate-behavior'=false"
              name="indeterminate"
            >
              <ic-checkbox
                id="indeterminate-checkbox"
                value="indeterminate"
                label="Indeterminate checkbox"
                checked="true"
                indeterminate="true"
              >
              </ic-checkbox>
            </ic-checkbox-group>
            <br />
            <ic-button id="indeterminate-button"
              >Toggle indeterminate</ic-button
            >
            <br />
            <br />
            <span>Indeterminate: <span id="indeterminate-text"></span></span>
            <br />
            <span>Checked: <span id="checked-text"></span></span>
          </div>
          <div style="border:1px solid gray;padding:8px;">
            <ic-checkbox-group
              label="'native-indeterminate-behavior'=true"
              name="native_indeterminate"
            >
              <ic-checkbox
                id="native-indeterminate-checkbox"
                value="indeterminate"
                label="Indeterminate checkbox"
                checked="true"
                indeterminate="true"
                native-indeterminate-behaviour="true"
              >
              </ic-checkbox>
            </ic-checkbox-group>
            <br />
            <ic-button id="native-indeterminate-button"
              >Toggle indeterminate</ic-button
            >
            <br />
            <br />
            <span
              >Indeterminate: <span id="native-indeterminate-text"></span
            ></span>
            <br />
            <span>Checked: <span id="native-checked-text"></span></span>
          </div>
        </div>
      `;indeterminate.storyName="Indeterminate",indeterminate.parameters={storySource:{source:'args => html`\n        <script>\n          var indeterminate = true;\n          var nativeIndeterminate = true;\n          var indeterminateTextEl = document.querySelector(\n            "#indeterminate-text"\n          );\n          indeterminateTextEl.innerHTML = indeterminate;\n          var checkedTextEl = document.querySelector("#checked-text");\n          checkedTextEl.innerHTML = true;\n          var nativeIndeterminateTextEl = document.querySelector(\n            "#native-indeterminate-text"\n          );\n          nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;\n          var nativeCheckedTextEl = document.querySelector(\n            "#native-checked-text"\n          );\n          nativeCheckedTextEl.innerHTML = true;\n          function toggleIndeterminate() {\n            indeterminate = !indeterminate;\n            document.querySelector("#indeterminate-checkbox").indeterminate =\n              indeterminate;\n            indeterminateTextEl.innerHTML = indeterminate;\n          }\n          function toggleNativeIndeterminate() {\n            nativeIndeterminate = !nativeIndeterminate;\n            document.querySelector(\n              "#native-indeterminate-checkbox"\n            ).indeterminate = nativeIndeterminate;\n            nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;\n          }\n          function icCheckHandler(ev) {\n            document.querySelector("#checked-text").innerHTML =\n              ev.target.checked;\n          }\n          function icCheckHandlerNative(ev) {\n            document.querySelector("#native-checked-text").innerHTML =\n              ev.target.checked;\n          }\n          document\n            .querySelector("#indeterminate-button")\n            .addEventListener("click", toggleIndeterminate);\n          document\n            .querySelector("#indeterminate-checkbox")\n            .addEventListener("icCheck", icCheckHandler);\n          document\n            .querySelector("#native-indeterminate-button")\n            .addEventListener("click", toggleNativeIndeterminate);\n          document\n            .querySelector("#native-indeterminate-checkbox")\n            .addEventListener("icCheck", icCheckHandlerNative);\n        <\/script>\n        <div style="display:flex;gap:16px;flex-wrap:wrap">\n          <div style="border:1px solid gray;padding:8px;">\n            <ic-checkbox-group\n              label="\'native-indeterminate-behavior\'=false"\n              name="indeterminate"\n            >\n              <ic-checkbox\n                id="indeterminate-checkbox"\n                value="indeterminate"\n                label="Indeterminate checkbox"\n                checked="true"\n                indeterminate="true"\n              >\n              </ic-checkbox>\n            </ic-checkbox-group>\n            <br />\n            <ic-button id="indeterminate-button"\n              >Toggle indeterminate</ic-button\n            >\n            <br />\n            <br />\n            <span>Indeterminate: <span id="indeterminate-text"></span></span>\n            <br />\n            <span>Checked: <span id="checked-text"></span></span>\n          </div>\n          <div style="border:1px solid gray;padding:8px;">\n            <ic-checkbox-group\n              label="\'native-indeterminate-behavior\'=true"\n              name="native_indeterminate"\n            >\n              <ic-checkbox\n                id="native-indeterminate-checkbox"\n                value="indeterminate"\n                label="Indeterminate checkbox"\n                checked="true"\n                indeterminate="true"\n                native-indeterminate-behaviour="true"\n              >\n              </ic-checkbox>\n            </ic-checkbox-group>\n            <br />\n            <ic-button id="native-indeterminate-button"\n              >Toggle indeterminate</ic-button\n            >\n            <br />\n            <br />\n            <span\n              >Indeterminate: <span id="native-indeterminate-text"></span\n            ></span>\n            <br />\n            <span>Checked: <span id="native-checked-text"></span></span>\n          </div>\n        </div>\n      `'},loki:{skip:!0}};const indeterminateWithChildren=args=>lit_html.qy`
        <script>
          var drinksCheckbox = document.querySelector("#drinks-checkbox");
          var teaCheckbox = document.querySelector("#tea-checkbox");
          var coffeeCheckbox = document.querySelector("#coffee-checkbox");
          var juiceCheckbox = document.querySelector("#juice-checkbox");
          var drinksGroup = document.querySelector("#drinks-group");
          drinksCheckbox.addEventListener("icCheck", function (ev) {
            if (ev.target === drinksCheckbox) {
              teaCheckbox.checked = drinksCheckbox.checked;
              coffeeCheckbox.checked = drinksCheckbox.checked;
              juiceCheckbox.checked = drinksCheckbox.checked;
            }
          });
          drinksGroup.addEventListener("icChange", function (ev) {
            if (ev.detail.checkedOptions.length === 3) {
              drinksCheckbox.indeterminate = false;
              drinksCheckbox.checked = true;
            } else if (ev.detail.checkedOptions.length === 0) {
              drinksCheckbox.indeterminate = false;
              drinksCheckbox.checked = false;
            } else {
              drinksCheckbox.indeterminate = true;
              drinksCheckbox.checked = false;
            }
          });
          coffeeCheckbox.checked = true;
          drinksCheckbox.indeterminate = true;
        </script>
        <ic-checkbox-group label="Liked things" name="1">
          <ic-checkbox
            id="drinks-checkbox"
            value="drinks"
            label="Drinks"
            indeterminate="false"
            native-indeterminate-behaviour
          >
            <ic-checkbox-group
              id="drinks-group"
              name="2"
              label="Drinks"
              hide-label
              slot="additional-field"
            >
              <ic-checkbox
                id="tea-checkbox"
                value="tea"
                label="Tea"
              ></ic-checkbox>
              <ic-checkbox
                id="coffee-checkbox"
                value="coffee"
                label="Coffee"
              ></ic-checkbox>
              <ic-checkbox
                id="juice-checkbox"
                value="juice"
                label="Juice"
              ></ic-checkbox>
            </ic-checkbox-group>
          </ic-checkbox>
        </ic-checkbox-group>
      `;indeterminateWithChildren.storyName="Indeterminate with children",indeterminateWithChildren.parameters={storySource:{source:'args => html`\n        <script>\n          var drinksCheckbox = document.querySelector("#drinks-checkbox");\n          var teaCheckbox = document.querySelector("#tea-checkbox");\n          var coffeeCheckbox = document.querySelector("#coffee-checkbox");\n          var juiceCheckbox = document.querySelector("#juice-checkbox");\n          var drinksGroup = document.querySelector("#drinks-group");\n          drinksCheckbox.addEventListener("icCheck", function (ev) {\n            if (ev.target === drinksCheckbox) {\n              teaCheckbox.checked = drinksCheckbox.checked;\n              coffeeCheckbox.checked = drinksCheckbox.checked;\n              juiceCheckbox.checked = drinksCheckbox.checked;\n            }\n          });\n          drinksGroup.addEventListener("icChange", function (ev) {\n            if (ev.detail.checkedOptions.length === 3) {\n              drinksCheckbox.indeterminate = false;\n              drinksCheckbox.checked = true;\n            } else if (ev.detail.checkedOptions.length === 0) {\n              drinksCheckbox.indeterminate = false;\n              drinksCheckbox.checked = false;\n            } else {\n              drinksCheckbox.indeterminate = true;\n              drinksCheckbox.checked = false;\n            }\n          });\n          coffeeCheckbox.checked = true;\n          drinksCheckbox.indeterminate = true;\n        <\/script>\n        <ic-checkbox-group label="Liked things" name="1">\n          <ic-checkbox\n            id="drinks-checkbox"\n            value="drinks"\n            label="Drinks"\n            indeterminate="false"\n            native-indeterminate-behaviour\n          >\n            <ic-checkbox-group\n              id="drinks-group"\n              name="2"\n              label="Drinks"\n              hide-label\n              slot="additional-field"\n            >\n              <ic-checkbox\n                id="tea-checkbox"\n                value="tea"\n                label="Tea"\n              ></ic-checkbox>\n              <ic-checkbox\n                id="coffee-checkbox"\n                value="coffee"\n                label="Coffee"\n              ></ic-checkbox>\n              <ic-checkbox\n                id="juice-checkbox"\n                value="juice"\n                label="Juice"\n              ></ic-checkbox>\n            </ic-checkbox-group>\n          </ic-checkbox>\n        </ic-checkbox-group>\n      `'},loki:{skip:!0}};const textFieldValueChange=args=>lit_html.qy`
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
      `;textFieldValueChange.storyName="TextField value change",textFieldValueChange.parameters={storySource:{source:'args => html`\n        <script>\n          var textOutputEl = document.querySelector("#value-text");\n          function handleIcChange(ev) {\n            textOutputEl.innerHTML = ev.target.value;\n          }\n          document\n            .querySelector("ic-text-field")\n            .addEventListener("icChange", handleIcChange);\n        <\/script>\n        <div>\n          <ic-checkbox-group label="This is a label" name="group1">\n            <ic-checkbox\n              value="valueName1"\n              label="Unselected / Default"\n              additional-field-display="static"\n            >\n              <ic-text-field\n                slot="additional-field"\n                placeholder="Placeholder"\n                label="What\'s your favourite type of coffee?"\n              ></ic-text-field>\n            </ic-checkbox>\n          </ic-checkbox-group>\n          <br />\n          <span>textfield value: </span>\n          <span id="value-text"></span>\n          <div></div>\n        </div>\n      `'},loki:{skip:!0}};const playground=args=>{const[{checked},updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return lit_html.qy` <ic-checkbox-group
        disabled=${args.disabled}
        label=${args.groupLabel}
        size=${args.size}
        helper-text=${args.helperText}
        hide-label=${args.hideGroupLabel}
        required=${args.required}
        validation-status=${args.validationStatus}
        validation-text=${args.validationText}
      >
        <ic-checkbox
          disabled=${args.disabled}
          label=${args.label}
          value=${args.value}
          size=${args.size}
          hide-label=${args.hideLabel}
          indeterminate=${args.indeterminate}
          checked=${checked}
          additional-field-display=${args.additionalFieldDisplay}
          dynamic-text=${args.dynamicText}
          native-indeterminate-behaviour=${args.nativeIndeterminateBehaviour}
        >
          <ic-text-field
            slot=${args.additionalFieldSlot}
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          ></ic-text-field>
        </ic-checkbox>
      </ic-checkbox-group>`};playground.storyName="Playground",playground.argTypes={additionalFieldDisplay:{options:["dynamic","static"],control:{type:"inline-radio"}},additionalFieldSlot:{options:["additional-field",""],control:{type:"select"}},size:{options:["default","large","small"],control:{type:"inline-radio"}},validationStatus:{options:["warning","error","success",""],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => {\n  const [{\n    checked\n  }, updateArgs] = useArgs();\n  return html` <ic-checkbox-group\n        disabled=${args.disabled}\n        label=${args.groupLabel}\n        size=${args.size}\n        helper-text=${args.helperText}\n        hide-label=${args.hideGroupLabel}\n        required=${args.required}\n        validation-status=${args.validationStatus}\n        validation-text=${args.validationText}\n      >\n        <ic-checkbox\n          disabled=${args.disabled}\n          label=${args.label}\n          value=${args.value}\n          size=${args.size}\n          hide-label=${args.hideLabel}\n          indeterminate=${args.indeterminate}\n          checked=${checked}\n          additional-field-display=${args.additionalFieldDisplay}\n          dynamic-text=${args.dynamicText}\n          native-indeterminate-behaviour=${args.nativeIndeterminateBehaviour}\n        >\n          <ic-text-field\n            slot=${args.additionalFieldSlot}\n            placeholder="Placeholder"\n            label="What\'s your favourite type of coffee?"\n          ></ic-text-field>\n        </ic-checkbox>\n      </ic-checkbox-group>`;\n}'},loki:{skip:!0}};const componentMeta={title:"Web Components/Checkbox",tags:["stories-mdx"],includeStories:["defaultStory","required","disabled","sizes","hiddenGroupLabel","hiddenCheckboxLabel","conditionalDynamic","conditionalStatic","helperText","validation","form","indeterminate","indeterminateWithChildren","textFieldValueChange","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_checkbox_group_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","required","disabled","sizes","hiddenGroupLabel","hiddenCheckboxLabel","conditionalDynamic","conditionalStatic","helperText","validation","form","indeterminate","indeterminateWithChildren","textFieldValueChange","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-checkbox-group-ic-checkbox-group-stories-mdx.aaa960eb.iframe.bundle.js.map