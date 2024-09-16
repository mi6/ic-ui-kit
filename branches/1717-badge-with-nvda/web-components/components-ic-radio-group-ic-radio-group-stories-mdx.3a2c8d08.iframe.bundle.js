/*! For license information please see components-ic-radio-group-ic-radio-group-stories-mdx.3a2c8d08.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5995],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-radio-group/ic-radio-group.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,conditionalDynamic:()=>conditionalDynamic,conditionalStatic:()=>conditionalStatic,default:()=>ic_radio_group_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,deprecatedSmall:()=>deprecatedSmall,disabled:()=>disabled,form:()=>ic_radio_group_stories_form,helperText:()=>helperText,horizontal:()=>horizontal,playground:()=>playground,required:()=>required,small:()=>small,validation:()=>validation});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-radio-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute           | Description                                                                                                                                                                                                                      | Type                                      | Default      |\n| -------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------ |\n| `disabled`           | `disabled`          | If `true`, the disabled state will be set.                                                                                                                                                                                       | `boolean`                                 | `false`      |\n| `helperText`         | `helper-text`       | The helper text that will be displayed for additional field guidance.                                                                                                                                                            | `string`                                  | `undefined`  |\n| `hideLabel`          | `hide-label`        | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                                                                               | `boolean`                                 | `false`      |\n| `label` _(required)_ | `label`             | The label for the radio group to be displayed.                                                                                                                                                                                   | `string`                                  | `undefined`  |\n| `name` _(required)_  | `name`              | The name for the radio group to differentiate from other groups.                                                                                                                                                                 | `string`                                  | `undefined`  |\n| `orientation`        | `orientation`       | The orientation of the radio buttons in the radio group. If there are more than two radio buttons in a radio group or either of the radio buttons use the `additional-field` slot, then the orientation will always be vertical. | `"horizontal" \\| "vertical"`              | `"vertical"` |\n| `required`           | `required`          | If `true`, the radio group will require a value.                                                                                                                                                                                 | `boolean`                                 | `false`      |\n| `size`               | `size`              | The size of the radio group component.                                                                                                                                                                                           | `"default" \\| "small"`                    | `"default"`  |\n| `small`              | `small`             | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/>                                                                                              | `boolean`                                 | `false`      |\n| `validationStatus`   | `validation-status` | The validation status - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                                                                                                                  | `"" \\| "error" \\| "success" \\| "warning"` | `""`         |\n| `validationText`     | `validation-text`   | The validation text - e.g. \'error\' \\| \'warning\' \\| \'success\'.                                                                                                                                                                    | `string`                                  | `""`         |\n\n\n## Events\n\n| Event      | Description                          | Type                               |\n| ---------- | ------------------------------------ | ---------------------------------- |\n| `icChange` | Emitted when a user selects a radio. | `CustomEvent<IcChangeEventDetail>` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-input-label](../ic-input-label)\n- [ic-input-validation](../ic-input-validation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-radio-group --\x3e ic-input-label\n  ic-radio-group --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  style ic-radio-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={disabled:!1,helperText:"Some helper text",hideLabel:!1,label:"This is a label",name:"1",orientation:"vertical",required:!1,size:"default",validationStatus:"",validationText:"",additionalFieldDisplay:"static",radioDisabled:!1,dynamicText:"This selection requires additional answers",radioLabel:"Radio 1",radioName:"radio1",value:"valueName1",selected:!1,additionalFieldSlot:!0};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Radio button",component:"Radio"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"horizontal",children:"Horizontal"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Horizontal",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"required",children:"Required"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Required",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"conditional-dynamic",children:"Conditional dynamic"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Conditional dynamic",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"conditional-static",children:"Conditional static"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Conditional static",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Helper text",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Small",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Deprecated - small",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Validation",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"form---this-shows-how-the-radio-button-works-within-a-form-and-is-where-the-value-of-the-radio-button-selected-will-appear-in-the-consolelog",children:"Form - This shows how the radio button works within a form and is where the value of the radio button selected will appear in the console.log"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Form",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
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
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{orientation:{options:["vertical","horizontal"],control:{type:"inline-radio"}},size:{options:["default","small"],control:{type:"inline-radio"}},validationStatus:{options:["error","warning","success",""],control:{type:"radio"}},additionalFieldDisplay:{options:["static","dynamic"],control:{type:"inline-radio"}},additionalFieldSlot:{mapping:{true:"additional-field",false:""}}},name:"Playground",children:args=>lit_html.qy`
        <ic-radio-group
          label=${args.label}
          name=${args.name}
          orientation=${args.orientation}
          required=${args.required}
          size=${args.size}
          validation-status=${args.validationStatus}
          validation-text=${args.validationText}
          helper-text=${args.helperText}
          disabled=${args.disabled}
          hide-label=${args.hideLabel}
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
            ></ic-text-field>
          </ic-radio-option>
          <ic-radio-option value="valueName2" label="Radio 2"></ic-radio-option>
        </ic-radio-group>
      `})})]})}const defaultStory=args=>lit_html.qy`
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
      `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`\n        <ic-radio-group label="This is a label" name="1">\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const horizontal=args=>lit_html.qy`
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
      `;horizontal.storyName="Horizontal",horizontal.parameters={storySource:{source:'args => html`\n        <ic-radio-group\n          orientation="horizontal"\n          label="This should be horizontal"\n          name="1"\n        >\n          <ic-radio-option\n            value="valueName1"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Unselected / Default"\n          ></ic-radio-option>\n        </ic-radio-group>\n        <br />\n        <p>Horizontal orientation is overridden with >2 radio options</p>\n        <br />\n        <ic-radio-group\n          orientation="horizontal"\n          label="This should be vertical"\n          name="2"\n        >\n          <ic-radio-option\n            value="valueNameA"\n            label="First"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option value="valueNameB" label="Second"></ic-radio-option>\n          <ic-radio-option value="valueNameC" label="Third"></ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const required=args=>lit_html.qy`
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
      `;required.storyName="Required",required.parameters={storySource:{source:'args => html`\n        <ic-radio-group label="This is a label" required name="1">\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const disabled=args=>lit_html.qy`
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
      `;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html`\n        <ic-radio-group label="This is a label" name="1">\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Disabled 1"\n            disabled\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Unselected / Disabled 2"\n            disabled\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled 3"\n            disabled\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName4"\n            label="Selected / Disabled"\n            disabled\n            selected\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const conditionalDynamic=args=>lit_html.qy`
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
      `;conditionalDynamic.storyName="Conditional dynamic",conditionalDynamic.parameters={storySource:{source:'args => html`\n        <script>\n          function handleIcChange(ev) {\n            console.log(ev.detail.selectedOption);\n          }\n          document\n            .querySelector("ic-radio-group")\n            .addEventListener("icChange", handleIcChange);\n        <\/script>\n        <ic-radio-group label="Conditional dynamic" name="1">\n          <ic-radio-option\n            additional-field-display="dynamic"\n            value="valueName1"\n            label="option1"\n            selected\n          >\n            <ic-text-field\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-radio-option>\n          <ic-radio-option\n            additional-field-display="dynamic"\n            value="valueName2"\n            label="option2 - error example"\n          >\n            <ic-text-field\n              validation-status="error"\n              validation-text="Now it has really gone to (coffee) pot"\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            >\n            </ic-text-field>\n          </ic-radio-option>\n          <ic-radio-option\n            additional-field-display="dynamic"\n            value="valueName3"\n            label="option3"\n          >\n            <ic-text-field\n              slot="additional-field"\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const conditionalStatic=args=>lit_html.qy`
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
      `;conditionalStatic.storyName="Conditional static",conditionalStatic.parameters={storySource:{source:'args => html`\n        <ic-radio-group label=" Conditional static" name="1">\n          <ic-radio-option value="valueName1" label="option1">\n            <ic-text-field\n              slot="additional-field"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-radio-option>\n          <ic-radio-option value="valueName2" label="option2">\n          </ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const helperText=args=>lit_html.qy`
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
      `;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'args => html`\n        <ic-radio-group\n          label="This is a label"\n          name="1"\n          helper-text="Helper text"\n        >\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const small=args=>lit_html.qy`
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
      `;small.storyName="Small",small.parameters={storySource:{source:'args => html`\n        <ic-radio-group label="This is a label" name="1" size="small">\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const deprecatedSmall=args=>lit_html.qy`
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
      `;deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'args => html`\n        <ic-radio-group label="This is a label" name="1" small>\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const validation=args=>lit_html.qy`
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
      `;validation.storyName="Validation",validation.parameters={storySource:{source:'args => html`\n        <ic-radio-group\n          label="This is a label"\n          name="1"\n          validation-status="error"\n          validation-text="Error message"\n        >\n          <ic-radio-option\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName2"\n            label="Selected / Default"\n            selected\n          ></ic-radio-option>\n          <ic-radio-option\n            value="valueName3"\n            label="Unselected / Disabled"\n            disabled\n          ></ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const ic_radio_group_stories_form=args=>lit_html.qy`
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
      `;ic_radio_group_stories_form.storyName="Form",ic_radio_group_stories_form.parameters={storySource:{source:'args => html`\n        <form>\n          <ic-radio-group label="This is a label" name="1">\n            <ic-radio-option\n              value="valueName1"\n              label="Unselected / Default"\n            ></ic-radio-option>\n            <ic-radio-option\n              value="valueName2"\n              label="Selected / Default"\n            ></ic-radio-option>\n            <ic-radio-option\n              value="valueName3"\n              label="Unselected / Disabled"\n              disabled\n            ></ic-radio-option>\n          </ic-radio-group>\n          <input type="submit" value="Submit" />\n          <input type="reset" value="Reset" />\n        </form>\n        <script>\n          document.querySelector("form").addEventListener("submit", (ev) => {\n            ev.preventDefault();\n            console.log(document.querySelector(\'input[name="1"]\').value);\n          });\n        <\/script>\n      `'},loki:{skip:!0}};const playground=args=>lit_html.qy`
        <ic-radio-group
          label=${args.label}
          name=${args.name}
          orientation=${args.orientation}
          required=${args.required}
          size=${args.size}
          validation-status=${args.validationStatus}
          validation-text=${args.validationText}
          helper-text=${args.helperText}
          disabled=${args.disabled}
          hide-label=${args.hideLabel}
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
            ></ic-text-field>
          </ic-radio-option>
          <ic-radio-option value="valueName2" label="Radio 2"></ic-radio-option>
        </ic-radio-group>
      `;playground.storyName="Playground",playground.argTypes={orientation:{options:["vertical","horizontal"],control:{type:"inline-radio"}},size:{options:["default","small"],control:{type:"inline-radio"}},validationStatus:{options:["error","warning","success",""],control:{type:"radio"}},additionalFieldDisplay:{options:["static","dynamic"],control:{type:"inline-radio"}},additionalFieldSlot:{mapping:{true:"additional-field",false:""}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`\n        <ic-radio-group\n          label=${args.label}\n          name=${args.name}\n          orientation=${args.orientation}\n          required=${args.required}\n          size=${args.size}\n          validation-status=${args.validationStatus}\n          validation-text=${args.validationText}\n          helper-text=${args.helperText}\n          disabled=${args.disabled}\n          hide-label=${args.hideLabel}\n        >\n          <ic-radio-option\n            additional-field-display=${args.additionalFieldDisplay}\n            value=${args.value}\n            label=${args.radioLabel}\n            name=${args.radioName}\n            selected=${args.selected}\n            disabled=${args.radioDisabled}\n            dynamic-text=${args.dynamicText}\n          >\n            <ic-text-field\n              slot=${args.additionalFieldSlot}\n              placeholder="Placeholder"\n              label="What\'s your favourite type of coffee?"\n            ></ic-text-field>\n          </ic-radio-option>\n          <ic-radio-option value="valueName2" label="Radio 2"></ic-radio-option>\n        </ic-radio-group>\n      `'},loki:{skip:!0}};const componentMeta={title:"Web Components/Radio button",tags:["stories-mdx"],includeStories:["defaultStory","horizontal","required","disabled","conditionalDynamic","conditionalStatic","helperText","small","deprecatedSmall","validation","form","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_radio_group_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","horizontal","required","disabled","conditionalDynamic","conditionalStatic","helperText","small","deprecatedSmall","validation","form","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-radio-group-ic-radio-group-stories-mdx.3a2c8d08.iframe.bundle.js.map