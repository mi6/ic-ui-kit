/*! For license information please see components-ic-radio-group-ic-radio-group-mdx.b905d2f9.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3111,1873,582,6199,6763],{"./src/components/ic-radio-group/ic-radio-group.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-radio-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute              | Description                                                                                                                                                                                                                      | Type                                                   | Default      |\n| -------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------ |\n| `disabled`           | `disabled`             | If `true`, the disabled state will be set.                                                                                                                                                                                       | `boolean \\| undefined`                                 | `false`      |\n| `helperText`         | `helper-text`          | The helper text that will be displayed for additional field guidance.                                                                                                                                                            | `string \\| undefined`                                  | `undefined`  |\n| `hideLabel`          | `hide-label`           | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                                                                               | `boolean \\| undefined`                                 | `false`      |\n| `label` _(required)_ | `label`                | The label for the radio group to be displayed.                                                                                                                                                                                   | `string`                                               | `undefined`  |\n| `name` _(required)_  | `name`                 | The name for the radio group to differentiate from other groups.                                                                                                                                                                 | `string`                                               | `undefined`  |\n| `orientation`        | `orientation`          | The orientation of the radio buttons in the radio group. If there are more than two radio buttons in a radio group or either of the radio buttons use the `additional-field` slot, then the orientation will always be vertical. | `"horizontal" \\| "vertical" \\| undefined`              | `"vertical"` |\n| `required`           | `required`             | If `true`, the radio group will require a value.                                                                                                                                                                                 | `boolean \\| undefined`                                 | `false`      |\n| `size`               | `size`                 | The size of the radio group component.                                                                                                                                                                                           | `"medium" \\| "small" \\| undefined`                     | `"medium"`   |\n| `theme`              | `theme`                | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                                                                          | `"dark" \\| "inherit" \\| "light" \\| undefined`          | `"inherit"`  |\n| `validationAriaLive` | `validation-aria-live` | The value of the `aria-live` attribute on the validation message.                                                                                                                                                                | `"assertive" \\| "off" \\| "polite"`                     | `"polite"`   |\n| `validationStatus`   | `validation-status`    | The validation status - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                                                                                                                  | `"" \\| "error" \\| "success" \\| "warning" \\| undefined` | `""`         |\n| `validationText`     | `validation-text`      | The text to display as the validation message.                                                                                                                                                                                   | `string`                                               | `""`         |\n\n\n## Events\n\n| Event      | Description                          | Type                               |\n| ---------- | ------------------------------------ | ---------------------------------- |\n| `icChange` | Emitted when a user selects a radio. | `CustomEvent<IcChangeEventDetail>` |\n\n\n## Slots\n\n| Slot            | Description                                            |\n| --------------- | ------------------------------------------------------ |\n| `"helper-text"` | Content is set as the helper text for the radio group. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-input-label](../ic-input-label)\n- [ic-input-validation](../ic-input-validation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-radio-group --\x3e ic-input-label\n  ic-radio-group --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  style ic-radio-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_radio_option_readme_namespaceObject='# ic-radio-option\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute                  | Description                                                                                                                             | Type                                          | Default                                        |\n| ------------------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------- |\n| `additionalFieldDisplay` | `additional-field-display` | The style of additionalField that will be displayed if used.                                                                            | `"dynamic" \\| "static" \\| undefined`          | `"static"`                                     |\n| `disabled`               | `disabled`                 | If `true`, the disabled state will be set.                                                                                              | `boolean \\| undefined`                        | `false`                                        |\n| `dynamicText`            | `dynamic-text`             | The text to be displayed when dynamic.                                                                                                  | `string \\| undefined`                         | `"This selection requires additional answers"` |\n| `form`                   | `form`                     | The <form> element to associate the radio with.                                                                                         | `string \\| undefined`                         | `undefined`                                    |\n| `groupLabel`             | `group-label`              | The group label for the radio option.                                                                                                   | `string \\| undefined`                         | `undefined`                                    |\n| `label`                  | `label`                    | The label for the radio option.                                                                                                         | `string \\| undefined`                         | `undefined`                                    |\n| `name`                   | `name`                     | The name for the radio option.                                                                                                          | `string \\| undefined`                         | `undefined`                                    |\n| `selected`               | `selected`                 | If `true`, the radio option will be displayed in a selected state.                                                                      | `boolean \\| undefined`                        | `false`                                        |\n| `theme`                  | `theme`                    | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light" \\| undefined` | `"inherit"`                                    |\n| `value` _(required)_     | `value`                    | The value for the radio option.                                                                                                         | `string`                                      | `undefined`                                    |\n\n\n## Events\n\n| Event              | Description                                              | Type                              |\n| ------------------ | -------------------------------------------------------- | --------------------------------- |\n| `icCheck`          | Emitted when the radio option is selected.               | `CustomEvent<IcValueEventDetail>` |\n| `icSelectedChange` | Emitted when the radio option is selected or deselected. | `CustomEvent<void>`               |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the radio option.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot                 | Description                                    |\n| -------------------- | ---------------------------------------------- |\n| `"additional-field"` | Content to displayed alongside a radio option. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-radio-option --\x3e ic-typography\n  style ic-radio-option fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_radio_group_stories=__webpack_require__("./src/components/ic-radio-group/ic-radio-group.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_radio_group_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject+ic_radio_option_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-radio-group/ic-radio-group.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AriaLiveBehaviour:()=>AriaLiveBehaviour,ConditionalDynamic:()=>ConditionalDynamic,ConditionalStatic:()=>ConditionalStatic,Default:()=>Default,Disabled:()=>Disabled,Form:()=>Form,HelperText:()=>HelperText,Horizontal:()=>Horizontal,Playground:()=>Playground,RTL:()=>RTL,Required:()=>Required,Small:()=>Small,Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Radio button",component:"Radio"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Default"},Horizontal={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-radio-group
      orientation="horizontal"
      label="This should be horizontal"
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
    <br />
    <p>Horizontal orientation is overridden with >2 radio options</p>
    <br />
    <ic-radio-group
      orientation="horizontal"
      label="This should be vertical"
      name="2"
    >
      <ic-radio-option
        value="valueNameA"
        label="First"
        selected
      ></ic-radio-option>
      <ic-radio-option value="valueNameB" label="Second"></ic-radio-option>
      <ic-radio-option value="valueNameC" label="Third"></ic-radio-option>
    </ic-radio-group>
  `,name:"Horizontal"},Required={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Required"},Disabled={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Disabled"},ConditionalDynamic={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <script>
      function handleIcChange(ev) {
        console.log(ev.detail.selectedOption);
      }
      function handleClick() {
        alert("Button clicked!");
      }
      document
        .querySelector("ic-button")
        .addEventListener("click", handleClick);
      document
        .querySelector("ic-radio-group")
        .addEventListener("icChange", handleIcChange);
      document
        .querySelector("ic-button")
        .addEventListener("click", () => alert("Button"));
    </script>
    <ic-radio-group label="Conditional dynamic" name="1">
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName1"
        label="Option with Radio as conditional slotted additional field"
        selected
      >
        <ic-radio-group
          slot="additional-field"
          helperText="Child Group Helper Text"
          label="Children"
          name="radio-group-2"
        >
          <ic-radio-option
            key="child-option-1"
            label="child-option-1"
            value="child-option-1"
          ></ic-radio-option>
          <ic-radio-option
            key="child-option-2"
            label="child-option-2"
            value="child-option-2"
          ></ic-radio-option>
        </ic-radio-group>
      </ic-radio-option>
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName2"
        label="Option with Text-field as conditional slotted additional field"
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
        label="option3 - clickable component"
      >
        <ic-button slot="additional-field"> Click me! </ic-button>
      </ic-radio-option>
    </ic-radio-group>
  `,name:"Conditional dynamic"},ConditionalStatic={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-radio-group label=" Conditional static" name="1">
      <ic-radio-option value="valueName1" label="option1">
        <ic-text-field
          slot="additional-field"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-radio-option>
      <ic-radio-option value="valueName2" label="option2">
        <ic-radio-group
          slot="additional-field"
          helperText="Child Group Helper Text"
          label="Children"
          name="radio-group-2"
        >
          <ic-radio-option
            key="child-option-1"
            label="child-option-1"
            value="child-option-1"
          ></ic-radio-option>
          <ic-radio-option
            key="child-option-2"
            label="child-option-2"
            value="child-option-2"
          ></ic-radio-option>
        </ic-radio-group>
      </ic-radio-option>
    </ic-radio-group>
  `,name:"Conditional static"},HelperText={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-radio-group
      label="Pick Your Coffee"
      name="1"
      helper-text="Helper text provided by prop"
    >
      <ic-radio-option value="valueName1" label="Mocha"></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Americano"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Tea"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
    <br />
    <ic-radio-group label="Another Coffee Choice" name="2">
      <ic-typography variant="caption" slot="helper-text">
        <span>
          Slotted helper text with a
          <ic-link href="#">helpful link to guidance</ic-link>
        </span>
      </ic-typography>
      <ic-radio-option value="valueName1" label="Flat White"></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Espresso"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Orange Juice"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,name:"Helper text"},Small={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Small"},Validation={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Validation"},AriaLiveBehaviour={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-radio-group
        id="field-1"
        label="This is a label"
        name="1"
        helper-text="Error already set on page load and aria-live overridden as 'assertive'"
        validation-status="error"
        validation-text="First error message"
        validation-aria-live="assertive"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 1"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 1"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 1"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-radio-group
        id="field-2"
        label="This is a label"
        name="2"
        helper-text="Error set after page load and aria-live overridden as 'assertive'"
        validation-aria-live="assertive"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 2"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 2"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 2"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-button id="toggle-btn-1">Toggle errors</ic-button>
      <script>
        let showErrors1 = false;
        const btn1 = document.getElementById("toggle-btn-1");
        const field1 = document.getElementById("field-1");
        const field2 = document.getElementById("field-2");

        btn1.addEventListener("click", () => {
          showErrors1 = !showErrors1;

          field1.setAttribute("validation-status", showErrors1 ? "" : "error");
          field1.setAttribute(
            "validation-text",
            showErrors1 ? "" : "First error message"
          );

          field2.setAttribute("validation-status", showErrors1 ? "error" : "");
          field2.setAttribute(
            "validation-text",
            showErrors1 ? "Second error message" : ""
          );
        });
      </script>
      <br />
      <br />
      <br />
      <br />
      <ic-radio-group
        id="field-3"
        label="This is a label"
        name="3"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 3"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 3"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 3"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-radio-group
        id="field-4"
        label="This is a label"
        name="4"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 4"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 4"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 4"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-button id="toggle-btn-2">Toggle errors</ic-button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <script>
        let showErrors2 = false;
        const btn2 = document.getElementById("toggle-btn-2");
        const field3 = document.getElementById("field-3");
        const field4 = document.getElementById("field-4");

        btn2.addEventListener("click", () => {
          showErrors2 = !showErrors2;

          field3.setAttribute("validation-status", showErrors2 ? "error" : "");
          field3.setAttribute(
            "validation-text",
            showErrors2 ? "Third error message" : ""
          );

          field4.setAttribute("validation-status", showErrors2 ? "error" : "");
          field4.setAttribute(
            "validation-text",
            showErrors2 ? "Fourth error message" : ""
          );
        });
      </script>`,name:"Aria-live behaviour"},Form={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Form"},RTL={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-radio-group label="This is a label" name="group1" dir="rtl">
      <ic-radio-option value="valueName1" label="Default"></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Disabled"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName4"
        label="Conditional dynamic"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-radio-option>
    </ic-radio-group>
  `,name:"RTL"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-radio-group
      label=${args.label}
      name=${args.name}
      orientation=${args.orientation}
      required=${args.required}
      size=${args.size}
      validation-aria-live=${args.validationAriaLive}
      validation-status=${"no status"===args.validationStatus?"":args.validationStatus}
      validation-text=${args.validationText}
      helper-text=${args.helperText}
      disabled=${args.disabled}
      hide-label=${args.hideLabel}
      theme=${args.theme}
    >
      <ic-radio-option
        additional-field-display=${args.additionalFieldDisplay}
        value=${args.value}
        label=${args.radioLabel}
        name=${args.radioName}
        selected=${args.selected}
        disabled=${args.radioDisabled}
        dynamic-text=${args.dynamicText}
      >
        <ic-text-field
          slot=${args.additionalFieldSlot}
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
          size=${args.size}
        ></ic-text-field>
      </ic-radio-option>
      <ic-radio-option value="valueName2" label="Radio 2"></ic-radio-option>
    </ic-radio-group>
  `,args:{disabled:!1,helperText:"Some helper text",hideLabel:!1,label:"This is a label",name:"1",orientation:"vertical",required:!1,size:"medium",validationAriaLive:"polite",validationStatus:"no status",validationText:"",additionalFieldDisplay:"static",radioDisabled:!1,dynamicText:"This selection requires additional answers",radioLabel:"Radio 1",radioName:"radio1",value:"valueName1",selected:!1,additionalFieldSlot:!0,theme:"inherit"},argTypes:{orientation:{options:["vertical","horizontal"],control:{type:"inline-radio"}},size:{options:["medium","small"],control:{type:"inline-radio"}},validationAriaLive:{options:["polite","assertive","off"],control:{type:"inline-radio"}},validationStatus:{options:["no status","error","warning","success"],control:{type:"radio"}},additionalFieldDisplay:{options:["static","dynamic"],control:{type:"inline-radio"}},additionalFieldSlot:{mapping:{true:"additional-field",false:""}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","Horizontal","Required","Disabled","ConditionalDynamic","ConditionalStatic","HelperText","Small","Validation","AriaLiveBehaviour","Form","RTL","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-radio-group label="This is a label" name="1">\n      <ic-radio-option\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName2"\n        label="Selected / Default"\n        selected\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName3"\n        label="Unselected / Disabled"\n        disabled\n      ></ic-radio-option>\n    </ic-radio-group>\n  `,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-radio-group\n      orientation="horizontal"\n      label="This should be horizontal"\n      name="1"\n    >\n      <ic-radio-option\n        value="valueName1"\n        label="Selected / Default"\n        selected\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName2"\n        label="Unselected / Default"\n      ></ic-radio-option>\n    </ic-radio-group>\n    <br />\n    <p>Horizontal orientation is overridden with >2 radio options</p>\n    <br />\n    <ic-radio-group\n      orientation="horizontal"\n      label="This should be vertical"\n      name="2"\n    >\n      <ic-radio-option\n        value="valueNameA"\n        label="First"\n        selected\n      ></ic-radio-option>\n      <ic-radio-option value="valueNameB" label="Second"></ic-radio-option>\n      <ic-radio-option value="valueNameC" label="Third"></ic-radio-option>\n    </ic-radio-group>\n  `,\n  name: "Horizontal"\n}',...Horizontal.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-radio-group label="This is a label" required name="1">\n      <ic-radio-option\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName2"\n        label="Selected / Default"\n        selected\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName3"\n        label="Unselected / Disabled"\n        disabled\n      ></ic-radio-option>\n    </ic-radio-group>\n  `,\n  name: "Required"\n}',...Required.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-radio-group label="This is a label" name="1">\n      <ic-radio-option\n        value="valueName1"\n        label="Unselected / Disabled 1"\n        disabled\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName2"\n        label="Unselected / Disabled 2"\n        disabled\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName3"\n        label="Unselected / Disabled 3"\n        disabled\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName4"\n        label="Selected / Disabled"\n        disabled\n        selected\n      ></ic-radio-option>\n    </ic-radio-group>\n  `,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},ConditionalDynamic.parameters={...ConditionalDynamic.parameters,docs:{...ConditionalDynamic.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function handleIcChange(ev) {\n        console.log(ev.detail.selectedOption);\n      }\n      function handleClick() {\n        alert("Button clicked!");\n      }\n      document\n        .querySelector("ic-button")\n        .addEventListener("click", handleClick);\n      document\n        .querySelector("ic-radio-group")\n        .addEventListener("icChange", handleIcChange);\n      document\n        .querySelector("ic-button")\n        .addEventListener("click", () => alert("Button"));\n    <\/script>\n    <ic-radio-group label="Conditional dynamic" name="1">\n      <ic-radio-option\n        additional-field-display="dynamic"\n        value="valueName1"\n        label="Option with Radio as conditional slotted additional field"\n        selected\n      >\n        <ic-radio-group\n          slot="additional-field"\n          helperText="Child Group Helper Text"\n          label="Children"\n          name="radio-group-2"\n        >\n          <ic-radio-option\n            key="child-option-1"\n            label="child-option-1"\n            value="child-option-1"\n          ></ic-radio-option>\n          <ic-radio-option\n            key="child-option-2"\n            label="child-option-2"\n            value="child-option-2"\n          ></ic-radio-option>\n        </ic-radio-group>\n      </ic-radio-option>\n      <ic-radio-option\n        additional-field-display="dynamic"\n        value="valueName2"\n        label="Option with Text-field as conditional slotted additional field"\n      >\n        <ic-text-field\n          validation-status="error"\n          validation-text="Now it has really gone to (coffee) pot"\n          slot="additional-field"\n          placeholder="Placeholder"\n          label="What\'s your favourite type of coffee?"\n        >\n        </ic-text-field>\n      </ic-radio-option>\n      <ic-radio-option\n        additional-field-display="dynamic"\n        value="valueName3"\n        label="option3 - clickable component"\n      >\n        <ic-button slot="additional-field"> Click me! </ic-button>\n      </ic-radio-option>\n    </ic-radio-group>\n  `,\n  name: "Conditional dynamic"\n}',...ConditionalDynamic.parameters?.docs?.source}}},ConditionalStatic.parameters={...ConditionalStatic.parameters,docs:{...ConditionalStatic.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-radio-group label=" Conditional static" name="1">\n      <ic-radio-option value="valueName1" label="option1">\n        <ic-text-field\n          slot="additional-field"\n          label="What\'s your favourite type of coffee?"\n        ></ic-text-field>\n      </ic-radio-option>\n      <ic-radio-option value="valueName2" label="option2">\n        <ic-radio-group\n          slot="additional-field"\n          helperText="Child Group Helper Text"\n          label="Children"\n          name="radio-group-2"\n        >\n          <ic-radio-option\n            key="child-option-1"\n            label="child-option-1"\n            value="child-option-1"\n          ></ic-radio-option>\n          <ic-radio-option\n            key="child-option-2"\n            label="child-option-2"\n            value="child-option-2"\n          ></ic-radio-option>\n        </ic-radio-group>\n      </ic-radio-option>\n    </ic-radio-group>\n  `,\n  name: "Conditional static"\n}',...ConditionalStatic.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-radio-group\n      label="Pick Your Coffee"\n      name="1"\n      helper-text="Helper text provided by prop"\n    >\n      <ic-radio-option value="valueName1" label="Mocha"></ic-radio-option>\n      <ic-radio-option\n        value="valueName2"\n        label="Americano"\n        selected\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName3"\n        label="Tea"\n        disabled\n      ></ic-radio-option>\n    </ic-radio-group>\n    <br />\n    <ic-radio-group label="Another Coffee Choice" name="2">\n      <ic-typography variant="caption" slot="helper-text">\n        <span>\n          Slotted helper text with a\n          <ic-link href="#">helpful link to guidance</ic-link>\n        </span>\n      </ic-typography>\n      <ic-radio-option value="valueName1" label="Flat White"></ic-radio-option>\n      <ic-radio-option\n        value="valueName2"\n        label="Espresso"\n        selected\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName3"\n        label="Orange Juice"\n        disabled\n      ></ic-radio-option>\n    </ic-radio-group>\n  `,\n  name: "Helper text"\n}',...HelperText.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-radio-group label="This is a label" name="1" size="small">\n      <ic-radio-option\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName2"\n        label="Selected / Default"\n        selected\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName3"\n        label="Unselected / Disabled"\n        disabled\n      ></ic-radio-option>\n    </ic-radio-group>\n  `,\n  name: "Small"\n}',...Small.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-radio-group\n      label="This is a label"\n      name="1"\n      validation-status="error"\n      validation-text="Error message"\n    >\n      <ic-radio-option\n        value="valueName1"\n        label="Unselected / Default"\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName2"\n        label="Selected / Default"\n        selected\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName3"\n        label="Unselected / Disabled"\n        disabled\n      ></ic-radio-option>\n    </ic-radio-group>\n  `,\n  name: "Validation"\n}',...Validation.parameters?.docs?.source}}},AriaLiveBehaviour.parameters={...AriaLiveBehaviour.parameters,docs:{...AriaLiveBehaviour.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-radio-group\n        id="field-1"\n        label="This is a label"\n        name="1"\n        helper-text="Error already set on page load and aria-live overridden as \'assertive\'"\n        validation-status="error"\n        validation-text="First error message"\n        validation-aria-live="assertive"\n      >\n        <ic-radio-option\n          value="valueName1"\n          label="Unselected / Default 1"\n        ></ic-radio-option>\n        <ic-radio-option\n          value="valueName2"\n          label="Selected / Default 1"\n          selected\n        ></ic-radio-option>\n        <ic-radio-option\n          value="valueName3"\n          label="Unselected / Disabled 1"\n          disabled\n        ></ic-radio-option>\n      </ic-radio-group>\n      <br />\n      <ic-radio-group\n        id="field-2"\n        label="This is a label"\n        name="2"\n        helper-text="Error set after page load and aria-live overridden as \'assertive\'"\n        validation-aria-live="assertive"\n      >\n        <ic-radio-option\n          value="valueName1"\n          label="Unselected / Default 2"\n        ></ic-radio-option>\n        <ic-radio-option\n          value="valueName2"\n          label="Selected / Default 2"\n          selected\n        ></ic-radio-option>\n        <ic-radio-option\n          value="valueName3"\n          label="Unselected / Disabled 2"\n          disabled\n        ></ic-radio-option>\n      </ic-radio-group>\n      <br />\n      <ic-button id="toggle-btn-1">Toggle errors</ic-button>\n      <script>\n        let showErrors1 = false;\n        const btn1 = document.getElementById("toggle-btn-1");\n        const field1 = document.getElementById("field-1");\n        const field2 = document.getElementById("field-2");\n\n        btn1.addEventListener("click", () => {\n          showErrors1 = !showErrors1;\n\n          field1.setAttribute("validation-status", showErrors1 ? "" : "error");\n          field1.setAttribute(\n            "validation-text",\n            showErrors1 ? "" : "First error message"\n          );\n\n          field2.setAttribute("validation-status", showErrors1 ? "error" : "");\n          field2.setAttribute(\n            "validation-text",\n            showErrors1 ? "Second error message" : ""\n          );\n        });\n      <\/script>\n      <br />\n      <br />\n      <br />\n      <br />\n      <ic-radio-group\n        id="field-3"\n        label="This is a label"\n        name="3"\n        helper-text="Default aria-live behaviour (i.e. \'polite\')"\n      >\n        <ic-radio-option\n          value="valueName1"\n          label="Unselected / Default 3"\n        ></ic-radio-option>\n        <ic-radio-option\n          value="valueName2"\n          label="Selected / Default 3"\n          selected\n        ></ic-radio-option>\n        <ic-radio-option\n          value="valueName3"\n          label="Unselected / Disabled 3"\n          disabled\n        ></ic-radio-option>\n      </ic-radio-group>\n      <br />\n      <ic-radio-group\n        id="field-4"\n        label="This is a label"\n        name="4"\n        helper-text="Default aria-live behaviour (i.e. \'polite\')"\n      >\n        <ic-radio-option\n          value="valueName1"\n          label="Unselected / Default 4"\n        ></ic-radio-option>\n        <ic-radio-option\n          value="valueName2"\n          label="Selected / Default 4"\n          selected\n        ></ic-radio-option>\n        <ic-radio-option\n          value="valueName3"\n          label="Unselected / Disabled 4"\n          disabled\n        ></ic-radio-option>\n      </ic-radio-group>\n      <br />\n      <ic-button id="toggle-btn-2">Toggle errors</ic-button>\n      <br />\n      <br />\n      <br />\n      <br />\n      <br />\n      <script>\n        let showErrors2 = false;\n        const btn2 = document.getElementById("toggle-btn-2");\n        const field3 = document.getElementById("field-3");\n        const field4 = document.getElementById("field-4");\n\n        btn2.addEventListener("click", () => {\n          showErrors2 = !showErrors2;\n\n          field3.setAttribute("validation-status", showErrors2 ? "error" : "");\n          field3.setAttribute(\n            "validation-text",\n            showErrors2 ? "Third error message" : ""\n          );\n\n          field4.setAttribute("validation-status", showErrors2 ? "error" : "");\n          field4.setAttribute(\n            "validation-text",\n            showErrors2 ? "Fourth error message" : ""\n          );\n        });\n      <\/script>`,\n  name: "Aria-live behaviour"\n}',...AriaLiveBehaviour.parameters?.docs?.source}}},Form.parameters={...Form.parameters,docs:{...Form.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <form>\n      <ic-radio-group label="This is a label" name="1">\n        <ic-radio-option\n          value="valueName1"\n          label="Unselected / Default"\n        ></ic-radio-option>\n        <ic-radio-option\n          value="valueName2"\n          label="Selected / Default"\n        ></ic-radio-option>\n        <ic-radio-option\n          value="valueName3"\n          label="Unselected / Disabled"\n          disabled\n        ></ic-radio-option>\n      </ic-radio-group>\n      <input type="submit" value="Submit" />\n      <input type="reset" value="Reset" />\n    </form>\n    <script>\n      document.querySelector("form").addEventListener("submit", (ev) => {\n        ev.preventDefault();\n        console.log(document.querySelector(\'input[name="1"]\').value);\n      });\n    <\/script>\n  `,\n  name: "Form"\n}',...Form.parameters?.docs?.source}}},RTL.parameters={...RTL.parameters,docs:{...RTL.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-radio-group label="This is a label" name="group1" dir="rtl">\n      <ic-radio-option value="valueName1" label="Default"></ic-radio-option>\n      <ic-radio-option\n        value="valueName2"\n        label="Selected"\n        selected\n      ></ic-radio-option>\n      <ic-radio-option\n        value="valueName3"\n        label="Disabled"\n        disabled\n      ></ic-radio-option>\n      <ic-radio-option\n        additional-field-display="dynamic"\n        value="valueName4"\n        label="Conditional dynamic"\n      >\n        <ic-text-field\n          slot="additional-field"\n          placeholder="Placeholder"\n          label="What\'s your favourite type of coffee?"\n        ></ic-text-field>\n      </ic-radio-option>\n    </ic-radio-group>\n  `,\n  name: "RTL"\n}',...RTL.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ic-radio-group\n      label=${args.label}\n      name=${args.name}\n      orientation=${args.orientation}\n      required=${args.required}\n      size=${args.size}\n      validation-aria-live=${args.validationAriaLive}\n      validation-status=${args.validationStatus === "no status" ? "" : args.validationStatus}\n      validation-text=${args.validationText}\n      helper-text=${args.helperText}\n      disabled=${args.disabled}\n      hide-label=${args.hideLabel}\n      theme=${args.theme}\n    >\n      <ic-radio-option\n        additional-field-display=${args.additionalFieldDisplay}\n        value=${args.value}\n        label=${args.radioLabel}\n        name=${args.radioName}\n        selected=${args.selected}\n        disabled=${args.radioDisabled}\n        dynamic-text=${args.dynamicText}\n      >\n        <ic-text-field\n          slot=${args.additionalFieldSlot}\n          placeholder="Placeholder"\n          label="What\'s your favourite type of coffee?"\n          size=${args.size}\n        ></ic-text-field>\n      </ic-radio-option>\n      <ic-radio-option value="valueName2" label="Radio 2"></ic-radio-option>\n    </ic-radio-group>\n  `,\n  args: defaultArgs,\n  argTypes: {\n    orientation: {\n      options: ["vertical", "horizontal"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    size: {\n      options: ["medium", "small"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    validationAriaLive: {\n      options: ["polite", "assertive", "off"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    validationStatus: {\n      options: ["no status", "error", "warning", "success"],\n      control: {\n        type: "radio"\n      }\n    },\n    additionalFieldDisplay: {\n      options: ["static", "dynamic"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    additionalFieldSlot: {\n      mapping: {\n        true: "additional-field",\n        false: ""\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-radio-group-ic-radio-group-mdx.b905d2f9.iframe.bundle.js.map