/*! For license information please see components-ic-checkbox-group-ic-checkbox-group-mdx.6e0a7660.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3793,9907,582,6199,6763],{"./src/components/ic-checkbox-group/ic-checkbox-group.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-checkbox-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute           | Description                                                                                                                             | Type                                                   | Default     |\n| -------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------- |\n| `disabled`           | `disabled`          | If `true`, the checkbox group will be set to the disabled state.                                                                        | `boolean \\| undefined`                                 | `false`     |\n| `helperText`         | `helper-text`       | The helper text that will be displayed for additional field guidance.                                                                   | `string \\| undefined`                                  | `""`        |\n| `hideLabel`          | `hide-label`        | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                      | `boolean \\| undefined`                                 | `false`     |\n| `label` _(required)_ | `label`             | The label for the checkbox group to be displayed.                                                                                       | `string`                                               | `undefined` |\n| `name` _(required)_  | `name`              | The name for the checkbox group to differentiate from other groups.                                                                     | `string`                                               | `undefined` |\n| `required`           | `required`          | If `true`, the checkbox group will require a value.                                                                                     | `boolean \\| undefined`                                 | `false`     |\n| `size`               | `size`              | The size of the checkboxes to be displayed. This does not affect the font size of the label.                                            | `"large" \\| "medium" \\| "small" \\| undefined`          | `"medium"`  |\n| `theme`              | `theme`             | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light" \\| undefined`          | `"inherit"` |\n| `validationStatus`   | `validation-status` | The validation status - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                         | `"" \\| "error" \\| "success" \\| "warning" \\| undefined` | `""`        |\n| `validationText`     | `validation-text`   | The text to display as the validation message.                                                                                          | `string \\| undefined`                                  | `""`        |\n\n\n## Events\n\n| Event      | Description                         | Type                               |\n| ---------- | ----------------------------------- | ---------------------------------- |\n| `icChange` | Emitted when a checkbox is checked. | `CustomEvent<IcChangeEventDetail>` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-input-label](../ic-input-label)\n- [ic-input-validation](../ic-input-validation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-checkbox-group --\x3e ic-input-label\n  ic-checkbox-group --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  style ic-checkbox-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_checkbox_readme_namespaceObject='# ic-checkbox\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                       | Attribute                        | Description                                                                                                                                                                                   | Type                                          | Default                                        |\n| ------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------- |\n| `additionalFieldDisplay`       | `additional-field-display`       | The style of additionalField that will be displayed if used.                                                                                                                                  | `"dynamic" \\| "static" \\| undefined`          | `"static"`                                     |\n| `checked`                      | `checked`                        | If `true`, the checkbox will be set to the checked state. This is only the initial state and will be updated to unchecked if the checkbox is clicked.                                         | `boolean \\| undefined`                        | `false`                                        |\n| `disabled`                     | `disabled`                       | If `true`, the checkbox will be set to the disabled state.                                                                                                                                    | `boolean \\| undefined`                        | `false`                                        |\n| `dynamicText`                  | `dynamic-text`                   | The text to be displayed when dynamic.                                                                                                                                                        | `string \\| undefined`                         | `"This selection requires additional answers"` |\n| `form`                         | `form`                           | The <form> element to associate the checkbox with.                                                                                                                                            | `string \\| undefined`                         | `undefined`                                    |\n| `groupLabel`                   | `group-label`                    | The group label for the checkbox.                                                                                                                                                             | `string \\| undefined`                         | `undefined`                                    |\n| `hideLabel`                    | `hide-label`                     | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                                            | `boolean \\| undefined`                        | `false`                                        |\n| `indeterminate`                | `indeterminate`                  | If `true`, the indeterminate state will be displayed when checked.                                                                                                                            | `boolean \\| undefined`                        | `false`                                        |\n| `label` _(required)_           | `label`                          | The label for the checkbox.                                                                                                                                                                   | `string`                                      | `undefined`                                    |\n| `name`                         | `name`                           | The name for the checkbox. If not set when used in a checkbox group, the name will be based on the group name.                                                                                | `string \\| undefined`                         | `undefined`                                    |\n| `nativeIndeterminateBehaviour` | `native-indeterminate-behaviour` | If `true`, the checkbox will behave like a native checkbox where the `indeterminate` prop sets the indeterminate visual styling, independent of the `checked` state.                          | `boolean \\| undefined`                        | `false`                                        |\n| `size`                         | `size`                           | The size of the checkbox to be displayed. This does not affect the font size of the label. If a checkbox is contained in a checkbox group, this will override the size set on checkbox group. | `"large" \\| "medium" \\| "small" \\| undefined` | `undefined`                                    |\n| `theme`                        | `theme`                          | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                                       | `"dark" \\| "inherit" \\| "light" \\| undefined` | `"inherit"`                                    |\n| `value` _(required)_           | `value`                          | The value for the checkbox.                                                                                                                                                                   | `string`                                      | `undefined`                                    |\n\n\n## Events\n\n| Event     | Description                               | Type                |\n| --------- | ----------------------------------------- | ------------------- |\n| `icCheck` | Emitted when a checkbox has been checked. | `CustomEvent<void>` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the checkbox.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot                 | Description                                   |\n| -------------------- | --------------------------------------------- |\n| `"additional-field"` | Content to be displayed alongside a checkbox. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-checkbox --\x3e ic-typography\n  style ic-checkbox fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_checkbox_group_stories=__webpack_require__("./src/components/ic-checkbox-group/ic-checkbox-group.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_checkbox_group_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject+ic_checkbox_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-checkbox-group/ic-checkbox-group.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConditionalDynamic:()=>ConditionalDynamic,ConditionalStatic:()=>ConditionalStatic,Default:()=>Default,Disabled:()=>Disabled,Form:()=>Form,HelperText:()=>HelperText,HiddenCheckboxLabel:()=>HiddenCheckboxLabel,HiddenGroupLabel:()=>HiddenGroupLabel,Indeterminate:()=>Indeterminate,IndeterminateWithChildren:()=>IndeterminateWithChildren,Playground:()=>Playground,RTL:()=>RTL,Required:()=>Required,Sizes:()=>Sizes,TextFieldValueChange:()=>TextFieldValueChange,Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("storybook/internal/preview-api"),lit_html__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Checkbox",component:"Checkbox"},Default={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
  `,name:"Default"},Required={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
  `,name:"Required"},Disabled={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
  `,name:"Disabled"},Sizes={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
        size="medium"
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
      size="medium"
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
  `,name:"Sizes"},HiddenGroupLabel={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
  `,name:"Hidden group label"},HiddenCheckboxLabel={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
  `,name:"Hidden checkbox label"},ConditionalDynamic={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
  `,name:"Conditional dynamic"},ConditionalStatic={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox value="valueName1" label="option1">
        <ic-text-field
          slot="additional-field"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
      <ic-checkbox value="valueName2" label="option2"> </ic-checkbox>
    </ic-checkbox-group>
  `,name:"Conditional static"},HelperText={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
  `,name:"Helper text"},Validation={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
  `,name:"Validation"},Form={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
  `,name:"Form"},Indeterminate={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
    <script>
      var indeterminate = true;
      var nativeIndeterminate = true;
      var indeterminateTextEl = document.querySelector("#indeterminate-text");
      indeterminateTextEl.innerHTML = indeterminate;
      var checkedTextEl = document.querySelector("#checked-text");
      checkedTextEl.innerHTML = true;
      var nativeIndeterminateTextEl = document.querySelector(
        "#native-indeterminate-text"
      );
      nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
      var nativeCheckedTextEl = document.querySelector("#native-checked-text");
      nativeCheckedTextEl.innerHTML = true;
      function toggleIndeterminate() {
        indeterminate = !indeterminate;
        document.querySelector("#indeterminate-checkbox").indeterminate =
          indeterminate;
        indeterminateTextEl.innerHTML = indeterminate;
      }
      function toggleNativeIndeterminate() {
        nativeIndeterminate = !nativeIndeterminate;
        document.querySelector("#native-indeterminate-checkbox").indeterminate =
          nativeIndeterminate;
        nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
      }
      function icCheckHandler(ev) {
        document.querySelector("#checked-text").innerHTML = ev.target.checked;
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
        <ic-button id="indeterminate-button">Toggle indeterminate</ic-button>
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
        <span>Indeterminate: <span id="native-indeterminate-text"></span></span>
        <br />
        <span>Checked: <span id="native-checked-text"></span></span>
      </div>
    </div>
  `,name:"Indeterminate"},IndeterminateWithChildren={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
          <ic-checkbox id="tea-checkbox" value="tea" label="Tea"></ic-checkbox>
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
  `,name:"Indeterminate with children"},TextFieldValueChange={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
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
  `,name:"TextField value change"},RTL={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_1__.qy`
    <ic-checkbox-group label="This is a label" name="group1" dir="rtl">
      <ic-checkbox
        value="valueName1"
        label="Indeterminate"
        indeterminate="true"
      ></ic-checkbox>
      <ic-checkbox value="valueName2" label="Selected" checked></ic-checkbox>
      <ic-checkbox value="valueName3" label="Disabled" disabled></ic-checkbox>
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName4"
        label="Conditional dynamic"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
    </ic-checkbox-group>
  `,name:"RTL"},Playground={render:args=>{const[{checked},updateArgs]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.useArgs)();return lit_html__WEBPACK_IMPORTED_MODULE_1__.qy` <ic-checkbox-group
      disabled=${args.disabled}
      label=${args.groupLabel}
      size=${args.size}
      helper-text=${args.helperText}
      hide-label=${args.hideGroupLabel}
      required=${args.required}
      validation-status=${args.validationStatus}
      validation-text=${args.validationText}
      theme=${args.theme}
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
    </ic-checkbox-group>`},args:{additionalFieldDisplay:"dynamic",additionalFieldSlot:"additional-field",checked:!1,disabled:!1,dynamicText:"Dynamic text",groupLabel:"Checkbox group label",helperText:"Helper text",hideLabel:!1,hideGroupLabel:!1,indeterminate:!1,label:"Checkbox label",nativeIndeterminateBehaviour:!1,required:!1,size:"medium",validationStatus:"",validationText:"",value:"checkbox-value",theme:"inherit"},argTypes:{additionalFieldDisplay:{options:["dynamic","static"],control:{type:"inline-radio"}},additionalFieldSlot:{options:["additional-field",""],control:{type:"select"}},size:{options:["medium","large","small"],control:{type:"inline-radio"}},validationStatus:{options:["warning","error","success",""],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","Required","Disabled","Sizes","HiddenGroupLabel","HiddenCheckboxLabel","ConditionalDynamic","ConditionalStatic","HelperText","Validation","Form","Indeterminate","IndeterminateWithChildren","TextFieldValueChange","RTL","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ic-checkbox-group label="This is a label" name="group1">\n      <ic-checkbox\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName2"\n        label="Selected / Default"\n        checked\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName3"\n        label="Unselected / Disabled"\n        Disabled\n      ></ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ic-checkbox-group label="This is a label" required name="group1">\n      <ic-checkbox\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName2"\n        label="Selected / Default"\n        checked\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName3"\n        label="Unselected / Disabled"\n        Disabled\n      ></ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "Required"\n}',...Required.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ic-checkbox-group label="This is a label" name="group1" Disabled>\n      <ic-checkbox\n        value="valueName1"\n        label="Unselected / Disabled 1"\n        Disabled\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName2"\n        label="Unselected / Disabled 2"\n        Disabled\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName3"\n        label="Unselected / Disabled 3"\n        Disabled\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName4"\n        label="Selected / Disabled"\n        Disabled\n        checked\n      ></ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ic-checkbox-group\n      size="large"\n      label="These are checkboxes with the \'size\' attribute set on them individually"\n      name="group1"\n    >\n      <ic-checkbox\n        size="small"\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-checkbox>\n      <ic-checkbox\n        size="medium"\n        value="valueName2"\n        label="Selected / Default"\n        checked\n      ></ic-checkbox>\n      <ic-checkbox\n        size="large"\n        value="valueName3"\n        label="Unselected / Disabled"\n        disabled\n      ></ic-checkbox>\n    </ic-checkbox-group>\n    <ic-checkbox-group\n      size="small"\n      label="This is a checkbox group with small checkboxes"\n      name="group1"\n    >\n      <ic-checkbox\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName2"\n        label="Selected / Default"\n        checked\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName3"\n        label="Unselected / Disabled"\n        disabled\n      ></ic-checkbox>\n    </ic-checkbox-group>\n    <ic-checkbox-group\n      size="medium"\n      label="This is a checkbox group with default-sized checkboxes"\n      name="group1"\n    >\n      <ic-checkbox\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName2"\n        label="Selected / Default"\n        checked\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName3"\n        label="Unselected / Disabled"\n        disabled\n      ></ic-checkbox>\n    </ic-checkbox-group>\n    <ic-checkbox-group\n      size="large"\n      label="This is a checkbox group with large checkboxes"\n      name="group1"\n    >\n      <ic-checkbox\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName2"\n        label="Selected / Default"\n        checked\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName3"\n        label="Unselected / Disabled"\n        disabled\n      ></ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},HiddenGroupLabel.parameters={...HiddenGroupLabel.parameters,docs:{...HiddenGroupLabel.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ic-checkbox-group label="This is a label" hide-label name="group1">\n      <ic-checkbox\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName2"\n        label="Selected / Default"\n        checked\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName3"\n        label="Unselected / Disabled"\n        Disabled\n      ></ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "Hidden group label"\n}',...HiddenGroupLabel.parameters?.docs?.source}}},HiddenCheckboxLabel.parameters={...HiddenCheckboxLabel.parameters,docs:{...HiddenCheckboxLabel.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ic-checkbox-group label="This is a label" name="group1">\n      <ic-checkbox\n        value="valueName1"\n        label="Unselected / Default"\n        hide-label\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName2"\n        label="Selected / Default"\n        checked\n        hide-label\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName3"\n        label="Unselected / Disabled"\n        Disabled\n        hide-label\n      ></ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "Hidden checkbox label"\n}',...HiddenCheckboxLabel.parameters?.docs?.source}}},ConditionalDynamic.parameters={...ConditionalDynamic.parameters,docs:{...ConditionalDynamic.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <script>\n      function handleIcChange(ev) {\n        console.log(\n          ev.detail.selectedOption.label,\n          ev.detail.selectedOption.checked\n        );\n      }\n      document\n        .querySelector("ic-checkbox-group")\n        .addEventListener("icChange", handleIcChange);\n    <\/script>\n    <ic-checkbox-group label="This is a label" name="group1">\n      <ic-checkbox\n        additional-field-display="dynamic"\n        value="valueName1"\n        label="option1"\n      >\n        <ic-text-field\n          slot="additional-field"\n          placeholder="Placeholder"\n          label="What\'s your favourite type of coffee?"\n        ></ic-text-field>\n      </ic-checkbox>\n      <ic-checkbox\n        additional-field-display="dynamic"\n        value="valueName2"\n        label="option2 - error example"\n      >\n        <ic-text-field\n          validation-status="error"\n          validation-text="now it has really gone to (coffee) pot"\n          slot="additional-field"\n          placeholder="Placeholder"\n          label="What\'s your favourite type of coffee?"\n        >\n        </ic-text-field>\n      </ic-checkbox>\n      <ic-checkbox\n        additional-field-display="dynamic"\n        value="valueName3"\n        label="option3"\n      >\n        <ic-text-field\n          slot="additional-field"\n          placeholder="Placeholder"\n          label="What\'s your favourite type of coffee?"\n        ></ic-text-field>\n      </ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "Conditional dynamic"\n}',...ConditionalDynamic.parameters?.docs?.source}}},ConditionalStatic.parameters={...ConditionalStatic.parameters,docs:{...ConditionalStatic.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ic-checkbox-group label="This is a label" name="group1">\n      <ic-checkbox value="valueName1" label="option1">\n        <ic-text-field\n          slot="additional-field"\n          label="What\'s your favourite type of coffee?"\n        ></ic-text-field>\n      </ic-checkbox>\n      <ic-checkbox value="valueName2" label="option2"> </ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "Conditional static"\n}',...ConditionalStatic.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ic-checkbox-group\n      label="This is a label"\n      name="group1"\n      helper-text="Helper text"\n    >\n      <ic-checkbox\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName2"\n        label="Selected / Default"\n        checked\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName3"\n        label="Unselected / Disabled"\n        Disabled\n      ></ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "Helper text"\n}',...HelperText.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ic-checkbox-group\n      label="This is a label"\n      name="group1"\n      validation-status="error"\n      validation-text="Error message"\n    >\n      <ic-checkbox\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName2"\n        label="Selected / Default"\n        checked\n      ></ic-checkbox>\n      <ic-checkbox\n        value="valueName3"\n        label="Unselected / Disabled"\n        Disabled\n      ></ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "Validation"\n}',...Validation.parameters?.docs?.source}}},Form.parameters={...Form.parameters,docs:{...Form.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <form>\n      <ic-checkbox-group label="This is a label" name="group1">\n        <ic-checkbox\n          name="checkbox1"\n          value="valueName1"\n          label="Unselected / Default"\n        ></ic-checkbox>\n        <ic-checkbox\n          name="checkbox2"\n          value="valueName2"\n          label="Selected / Default"\n          checked\n        ></ic-checkbox>\n        <ic-checkbox\n          name="checkbox3"\n          value="valueName3"\n          label="Unselected / Disabled"\n          Disabled\n        ></ic-checkbox>\n      </ic-checkbox-group>\n      <input type="submit" value="Submit" />\n      <input type="reset" value="Reset" />\n    </form>\n    <script>\n      document.querySelector("form").addEventListener("submit", (ev) => {\n        ev.preventDefault();\n        console.log(\n          document.querySelector(\'ic-checkbox[name="checkbox1"]\').checked\n        );\n        console.log(\n          document.querySelector(\'ic-checkbox[name="checkbox2"]\').checked\n        );\n        console.log(\n          document.querySelector(\'ic-checkbox[name="checkbox3"]\').checked\n        );\n      });\n    <\/script>\n  `,\n  name: "Form"\n}',...Form.parameters?.docs?.source}}},Indeterminate.parameters={...Indeterminate.parameters,docs:{...Indeterminate.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <script>\n      var indeterminate = true;\n      var nativeIndeterminate = true;\n      var indeterminateTextEl = document.querySelector("#indeterminate-text");\n      indeterminateTextEl.innerHTML = indeterminate;\n      var checkedTextEl = document.querySelector("#checked-text");\n      checkedTextEl.innerHTML = true;\n      var nativeIndeterminateTextEl = document.querySelector(\n        "#native-indeterminate-text"\n      );\n      nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;\n      var nativeCheckedTextEl = document.querySelector("#native-checked-text");\n      nativeCheckedTextEl.innerHTML = true;\n      function toggleIndeterminate() {\n        indeterminate = !indeterminate;\n        document.querySelector("#indeterminate-checkbox").indeterminate =\n          indeterminate;\n        indeterminateTextEl.innerHTML = indeterminate;\n      }\n      function toggleNativeIndeterminate() {\n        nativeIndeterminate = !nativeIndeterminate;\n        document.querySelector("#native-indeterminate-checkbox").indeterminate =\n          nativeIndeterminate;\n        nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;\n      }\n      function icCheckHandler(ev) {\n        document.querySelector("#checked-text").innerHTML = ev.target.checked;\n      }\n      function icCheckHandlerNative(ev) {\n        document.querySelector("#native-checked-text").innerHTML =\n          ev.target.checked;\n      }\n      document\n        .querySelector("#indeterminate-button")\n        .addEventListener("click", toggleIndeterminate);\n      document\n        .querySelector("#indeterminate-checkbox")\n        .addEventListener("icCheck", icCheckHandler);\n      document\n        .querySelector("#native-indeterminate-button")\n        .addEventListener("click", toggleNativeIndeterminate);\n      document\n        .querySelector("#native-indeterminate-checkbox")\n        .addEventListener("icCheck", icCheckHandlerNative);\n    <\/script>\n    <div style="display:flex;gap:16px;flex-wrap:wrap">\n      <div style="border:1px solid gray;padding:8px;">\n        <ic-checkbox-group\n          label="\'native-indeterminate-behavior\'=false"\n          name="indeterminate"\n        >\n          <ic-checkbox\n            id="indeterminate-checkbox"\n            value="indeterminate"\n            label="Indeterminate checkbox"\n            checked="true"\n            indeterminate="true"\n          >\n          </ic-checkbox>\n        </ic-checkbox-group>\n        <br />\n        <ic-button id="indeterminate-button">Toggle indeterminate</ic-button>\n        <br />\n        <br />\n        <span>Indeterminate: <span id="indeterminate-text"></span></span>\n        <br />\n        <span>Checked: <span id="checked-text"></span></span>\n      </div>\n      <div style="border:1px solid gray;padding:8px;">\n        <ic-checkbox-group\n          label="\'native-indeterminate-behavior\'=true"\n          name="native_indeterminate"\n        >\n          <ic-checkbox\n            id="native-indeterminate-checkbox"\n            value="indeterminate"\n            label="Indeterminate checkbox"\n            checked="true"\n            indeterminate="true"\n            native-indeterminate-behaviour="true"\n          >\n          </ic-checkbox>\n        </ic-checkbox-group>\n        <br />\n        <ic-button id="native-indeterminate-button"\n          >Toggle indeterminate</ic-button\n        >\n        <br />\n        <br />\n        <span>Indeterminate: <span id="native-indeterminate-text"></span></span>\n        <br />\n        <span>Checked: <span id="native-checked-text"></span></span>\n      </div>\n    </div>\n  `,\n  name: "Indeterminate"\n}',...Indeterminate.parameters?.docs?.source}}},IndeterminateWithChildren.parameters={...IndeterminateWithChildren.parameters,docs:{...IndeterminateWithChildren.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <script>\n      var drinksCheckbox = document.querySelector("#drinks-checkbox");\n      var teaCheckbox = document.querySelector("#tea-checkbox");\n      var coffeeCheckbox = document.querySelector("#coffee-checkbox");\n      var juiceCheckbox = document.querySelector("#juice-checkbox");\n      var drinksGroup = document.querySelector("#drinks-group");\n      drinksCheckbox.addEventListener("icCheck", function (ev) {\n        if (ev.target === drinksCheckbox) {\n          teaCheckbox.checked = drinksCheckbox.checked;\n          coffeeCheckbox.checked = drinksCheckbox.checked;\n          juiceCheckbox.checked = drinksCheckbox.checked;\n        }\n      });\n      drinksGroup.addEventListener("icChange", function (ev) {\n        if (ev.detail.checkedOptions.length === 3) {\n          drinksCheckbox.indeterminate = false;\n          drinksCheckbox.checked = true;\n        } else if (ev.detail.checkedOptions.length === 0) {\n          drinksCheckbox.indeterminate = false;\n          drinksCheckbox.checked = false;\n        } else {\n          drinksCheckbox.indeterminate = true;\n          drinksCheckbox.checked = false;\n        }\n      });\n      coffeeCheckbox.checked = true;\n      drinksCheckbox.indeterminate = true;\n    <\/script>\n    <ic-checkbox-group label="Liked things" name="1">\n      <ic-checkbox\n        id="drinks-checkbox"\n        value="drinks"\n        label="Drinks"\n        indeterminate="false"\n        native-indeterminate-behaviour\n      >\n        <ic-checkbox-group\n          id="drinks-group"\n          name="2"\n          label="Drinks"\n          hide-label\n          slot="additional-field"\n        >\n          <ic-checkbox id="tea-checkbox" value="tea" label="Tea"></ic-checkbox>\n          <ic-checkbox\n            id="coffee-checkbox"\n            value="coffee"\n            label="Coffee"\n          ></ic-checkbox>\n          <ic-checkbox\n            id="juice-checkbox"\n            value="juice"\n            label="Juice"\n          ></ic-checkbox>\n        </ic-checkbox-group>\n      </ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "Indeterminate with children"\n}',...IndeterminateWithChildren.parameters?.docs?.source}}},TextFieldValueChange.parameters={...TextFieldValueChange.parameters,docs:{...TextFieldValueChange.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <script>\n      var textOutputEl = document.querySelector("#value-text");\n      function handleIcChange(ev) {\n        textOutputEl.innerHTML = ev.target.value;\n      }\n      document\n        .querySelector("ic-text-field")\n        .addEventListener("icChange", handleIcChange);\n    <\/script>\n    <div>\n      <ic-checkbox-group label="This is a label" name="group1">\n        <ic-checkbox\n          value="valueName1"\n          label="Unselected / Default"\n          additional-field-display="static"\n        >\n          <ic-text-field\n            slot="additional-field"\n            placeholder="Placeholder"\n            label="What\'s your favourite type of coffee?"\n          ></ic-text-field>\n        </ic-checkbox>\n      </ic-checkbox-group>\n      <br />\n      <span>textfield value: </span>\n      <span id="value-text"></span>\n      <div></div>\n    </div>\n  `,\n  name: "TextField value change"\n}',...TextFieldValueChange.parameters?.docs?.source}}},RTL.parameters={...RTL.parameters,docs:{...RTL.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ic-checkbox-group label="This is a label" name="group1" dir="rtl">\n      <ic-checkbox\n        value="valueName1"\n        label="Indeterminate"\n        indeterminate="true"\n      ></ic-checkbox>\n      <ic-checkbox value="valueName2" label="Selected" checked></ic-checkbox>\n      <ic-checkbox value="valueName3" label="Disabled" disabled></ic-checkbox>\n      <ic-checkbox\n        additional-field-display="dynamic"\n        value="valueName4"\n        label="Conditional dynamic"\n      >\n        <ic-text-field\n          slot="additional-field"\n          placeholder="Placeholder"\n          label="What\'s your favourite type of coffee?"\n        ></ic-text-field>\n      </ic-checkbox>\n    </ic-checkbox-group>\n  `,\n  name: "RTL"\n}',...RTL.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [{\n      checked\n    }, updateArgs] = useArgs();\n    return html` <ic-checkbox-group\n      disabled=${args.disabled}\n      label=${args.groupLabel}\n      size=${args.size}\n      helper-text=${args.helperText}\n      hide-label=${args.hideGroupLabel}\n      required=${args.required}\n      validation-status=${args.validationStatus}\n      validation-text=${args.validationText}\n      theme=${args.theme}\n    >\n      <ic-checkbox\n        disabled=${args.disabled}\n        label=${args.label}\n        value=${args.value}\n        size=${args.size}\n        hide-label=${args.hideLabel}\n        indeterminate=${args.indeterminate}\n        checked=${checked}\n        additional-field-display=${args.additionalFieldDisplay}\n        dynamic-text=${args.dynamicText}\n        native-indeterminate-behaviour=${args.nativeIndeterminateBehaviour}\n      >\n        <ic-text-field\n          slot=${args.additionalFieldSlot}\n          placeholder="Placeholder"\n          label="What\'s your favourite type of coffee?"\n        ></ic-text-field>\n      </ic-checkbox>\n    </ic-checkbox-group>`;\n  },\n  args: defaultArgs,\n  argTypes: {\n    additionalFieldDisplay: {\n      options: ["dynamic", "static"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    additionalFieldSlot: {\n      options: ["additional-field", ""],\n      control: {\n        type: "select"\n      }\n    },\n    size: {\n      options: ["medium", "large", "small"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    validationStatus: {\n      options: ["warning", "error", "success", ""],\n      control: {\n        type: "select"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-checkbox-group-ic-checkbox-group-mdx.6e0a7660.iframe.bundle.js.map