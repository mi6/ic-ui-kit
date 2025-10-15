/*! For license information please see components-ic-stepper-ic-stepper-mdx.62f55ba1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4383,1401],{"./src/components/ic-stepper/ic-stepper.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-stepper\n\nThis is a wrapper component to be placed around one or more ic-step components\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute         | Description                                                                                                                                                                                                                   | Type                     | Default        |\n| ---------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------- |\n| `aligned`        | `aligned`         | The alignment of the default stepper within its container.                                                                                                                                                                    | `"full-width" \\| "left"` | `"full-width"` |\n| `appearance`     | `appearance`      | The appearance of the stepper.                                                                                                                                                                                                | `"default" \\| "light"`   | `"default"`    |\n| `connectorWidth` | `connector-width` | The length of the connector between each step in pixels. Minimum length is 100px.                                                                                                                                             | `number`                 | `100`          |\n| `hideStepInfo`   | `hide-step-info`  | If `true`, the information about each step, i.e. step title, step subtitle and step status, will be hidden on all default steps. The information about each step will still be visible in the compact variant of the stepper. | `boolean`                | `false`        |\n| `variant`        | `variant`         | The variant of the stepper.                                                                                                                                                                                                   | `"compact" \\| "default"` | `"default"`    |\n\n\n----------------------------------------------\n\n\n',ic_step_readme_namespaceObject='# ic-step\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property       | Attribute       | Description                                                                                                                                             | Type                                                 | Default     |\n| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------- |\n| `stepStatus`   | `step-status`   | The status of the step. Use this prop to display a status message on the step if it is required or optional.                                            | `"optional" \\| "required"`                           | `undefined` |\n| `stepSubtitle` | `step-subtitle` | Additional information about the step. Use this prop to override the default step status messaging displayed when selecting a step type or step status. | `string`                                             | `undefined` |\n| `stepTitle`    | `step-title`    | The title of the step within the stepper.                                                                                                               | `string`                                             | `undefined` |\n| `stepType`     | `step-type`     | The state of the step within the stepper.                                                                                                               | `"active" \\| "completed" \\| "current" \\| "disabled"` | `"active"`  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-loading-indicator](../ic-loading-indicator)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-step --\x3e ic-loading-indicator\n  ic-step --\x3e ic-typography\n  ic-loading-indicator --\x3e ic-typography\n  style ic-step fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_stepper_stories=__webpack_require__("./src/components/ic-stepper/ic-stepper.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_stepper_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject+ic_step_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-stepper/ic-stepper.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CompactStepper:()=>CompactStepper,CompactStepperLight:()=>CompactStepperLight,CustomCompactStepper:()=>CustomCompactStepper,CustomConnectorWidth:()=>CustomConnectorWidth,CustomStepper:()=>CustomStepper,FullWidthStepper:()=>FullWidthStepper,LeftAlignedStepper:()=>LeftAlignedStepper,Light:()=>Light,WithHiddenStepInformation:()=>WithHiddenStepInformation,WithoutStepTitles:()=>WithoutStepTitles,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Stepper",component:"ic-stepper"},FullWidthStepper={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-stepper>
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`,name:"Full-width stepper"},LeftAlignedStepper={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-stepper aligned="left">
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`,name:"Left-aligned stepper"},WithHiddenStepInformation={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-stepper hide-step-info>
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`,name:"With hidden step information"},WithoutStepTitles={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-stepper>
      <ic-step step-type="completed"></ic-step>
      <ic-step step-type="completed"></ic-step>
      <ic-step step-type="current"></ic-step>
      <ic-step></ic-step>
    </ic-stepper>`,name:"Without step titles"},CustomStepper={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-stepper>
      <ic-step step-title="First"></ic-step>
      <ic-step
        step-title="Second With a Very Long Title"
        step-subtitle="Optional subtitle that is long and should wrap"
        step-type="current"
      ></ic-step>
      <ic-step step-title="Third" step-type="disabled"></ic-step>
      <ic-step
        step-title="Fourth title that is long and should wrap"
        step-subtitle="Optional Subtitle"
        step-type="completed"
      ></ic-step>
    </ic-stepper>`,name:"Custom stepper"},CustomConnectorWidth={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-stepper aligned="left" connector-width="200">
      <ic-step step-title="First"></ic-step>
      <ic-step
        step-title="Second With a Very Long Title"
        step-subtitle="Optional subtitle that is long and should wrap"
        step-type="current"
      ></ic-step>
      <ic-step step-title="Third" step-type="disabled"></ic-step>
      <ic-step
        step-title="Fourth title that is long and should wrap"
        step-subtitle="Optional Subtitle"
        step-type="completed"
      ></ic-step>
    </ic-stepper>`,name:"Custom connector width"},Light={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="background-color:#24262b;">
      <ic-stepper appearance="light">
        <ic-step step-title="Create" step-type="completed"></ic-step>
        <ic-step step-title="Read" step-type="current"></ic-step>
        <ic-step step-title="Update" step-type="active"></ic-step>
        <ic-step step-title="Delete" step-type="disabled"></ic-step>
      </ic-stepper>
    </div>`,name:"Light"},CompactStepper={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-stepper variant="compact" id="standard-compact-stepper">
        <ic-step step-title="Create"></ic-step>
        <ic-step step-title="Read" step-type="current"></ic-step>
        <ic-step step-title="Update" step-status="optional"></ic-step>
        <ic-step step-title="Delete" step-status="required"></ic-step>
      </ic-stepper>
      <ic-button
        class="back-btn-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousStep()"
        >Back</ic-button
      >
      <ic-button class="next-btn-compact-stepper" onclick="toNextStep()"
        >Next</ic-button
      >
      <script>
        const compactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
        ];
        const backBtn = document.querySelector(".back-btn-compact-stepper");
        const nextBtn = document.querySelector(".next-btn-compact-stepper");
        const steps = document.querySelectorAll(
          "#standard-compact-stepper > ic-step"
        );
        function toPreviousStep() {
          for (let i = steps.length - 1; i > 0; i--) {
            if (steps[i].stepType === "current") {
              steps[i].stepType = compactStepTypes[i];
              steps[i - 1].stepType = "current";
              i--;
            }
          }
          if (steps[steps.length - 2].stepType === "current") {
            nextBtn.setAttribute("disabled", "false");
          }
          if (steps[0].stepType === "current") {
            backBtn.setAttribute("disabled", "true");
          }
        }
        function toNextStep() {
          for (let i = 0; i < steps.length - 1; i++) {
            if (steps[i].stepType === "current") {
              steps[i].stepType = compactStepTypes[i];
              steps[i + 1].stepType = "current";
              i++;
            }
          }
          if (steps[1].stepType === "current") {
            backBtn.setAttribute("disabled", "false");
          }
          if (steps[steps.length - 1].stepType === "current") {
            nextBtn.setAttribute("disabled", "true");
          }
        }
      </script>`,name:"Compact stepper"},CompactStepperLight={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="background-color:#24262b;">
        <ic-stepper
          variant="compact"
          id="standard-compact-stepper"
          appearance="light"
        >
          <ic-step step-title="Create"></ic-step>
          <ic-step step-title="Read" step-type="current"></ic-step>
          <ic-step step-title="Update" step-status="optional"></ic-step>
          <ic-step step-title="Delete" step-status="required"></ic-step>
        </ic-stepper>
      </div>
      <ic-button
        class="back-btn-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousStep()"
        >Back</ic-button
      >
      <ic-button class="next-btn-compact-stepper" onclick="toNextStep()"
        >Next</ic-button
      >
      <script>
        const compactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
        ];
        const backBtn = document.querySelector(".back-btn-compact-stepper");
        const nextBtn = document.querySelector(".next-btn-compact-stepper");
        const steps = document.querySelectorAll(
          "#standard-compact-stepper > ic-step"
        );
        function toPreviousStep() {
          for (let i = steps.length - 1; i > 0; i--) {
            if (steps[i].stepType === "current") {
              steps[i].stepType = compactStepTypes[i];
              steps[i - 1].stepType = "current";
              i--;
            }
          }
          if (steps[steps.length - 2].stepType === "current") {
            nextBtn.setAttribute("disabled", "false");
          }
          if (steps[0].stepType === "current") {
            backBtn.setAttribute("disabled", "true");
          }
        }
        function toNextStep() {
          for (let i = 0; i < steps.length - 1; i++) {
            if (steps[i].stepType === "current") {
              steps[i].stepType = compactStepTypes[i];
              steps[i + 1].stepType = "current";
              i++;
            }
          }
          if (steps[1].stepType === "current") {
            backBtn.setAttribute("disabled", "false");
          }
          if (steps[steps.length - 1].stepType === "current") {
            nextBtn.setAttribute("disabled", "true");
          }
        }
      </script>`,name:"Compact stepper light"},CustomCompactStepper={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-stepper variant="compact" id="custom-compact-stepper">
        <ic-step step-title="First"></ic-step>
        <ic-step
          step-title="Second With a Very Long Title"
          step-subtitle="Optional subtitle that is long and should wrap"
          step-type="current"
        ></ic-step>
        <ic-step step-title="Third" step-type="disabled"></ic-step>
        <ic-step
          step-title="Fourth title that is long and should wrap"
          step-subtitle="Optional Subtitle"
          step-type="completed"
        ></ic-step>
        <ic-step
          step-title="Fifth and final step"
          step-subtitle="Optional Subtitle"
          step-status="optional"
          step-type="disabled"
        ></ic-step>
      </ic-stepper>
      <ic-button
        class="back-btn-custom-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousCustomStep()"
        >Back</ic-button
      >
      <ic-button
        class="next-btn-custom-compact-stepper"
        onclick="toNextCustomStep()"
        >Next</ic-button
      >
      <script>
        const customCompactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
          "disabled",
        ];
        const backBtnCustomCompactStepper = document.querySelector(
          ".back-btn-custom-compact-stepper"
        );
        const nextBtnCustomCompactStepper = document.querySelector(
          ".next-btn-custom-compact-stepper"
        );
        const customSteps = document.querySelectorAll(
          "#custom-compact-stepper > ic-step"
        );
        function toPreviousCustomStep() {
          for (let i = customSteps.length - 1; i > 0; i--) {
            if (customSteps[i].stepType === "current") {
              customSteps[i].stepType = customCompactStepTypes[i];
              customSteps[i - 1].stepType = "current";
              i--;
            }
          }
          if (customSteps[customSteps.length - 2].stepType === "current") {
            nextBtnCustomCompactStepper.setAttribute("disabled", "false");
          }
          if (customSteps[0].stepType === "current") {
            backBtnCustomCompactStepper.setAttribute("disabled", "true");
          }
        }
        function toNextCustomStep() {
          for (let i = 0; i < customSteps.length - 1; i++) {
            if (customSteps[i].stepType === "current") {
              customSteps[i].stepType = customCompactStepTypes[i];
              customSteps[i + 1].stepType = "current";
              i++;
            }
          }
          if (customSteps[1].stepType === "current") {
            backBtnCustomCompactStepper.setAttribute("disabled", "false");
          }
          if (customSteps[customSteps.length - 1].stepType === "current") {
            nextBtnCustomCompactStepper.setAttribute("disabled", "true");
          }
        }
      </script>`,name:"Custom compact stepper"},__namedExportsOrder=["FullWidthStepper","LeftAlignedStepper","WithHiddenStepInformation","WithoutStepTitles","CustomStepper","CustomConnectorWidth","Light","CompactStepper","CompactStepperLight","CustomCompactStepper"];FullWidthStepper.parameters={...FullWidthStepper.parameters,docs:{...FullWidthStepper.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-stepper>\n      <ic-step step-title="Create" step-type="completed"></ic-step>\n      <ic-step step-title="Read" step-type="current"></ic-step>\n      <ic-step step-title="Update" step-type="active"></ic-step>\n      <ic-step step-title="Delete" step-type="disabled"></ic-step>\n    </ic-stepper>`,\n  name: "Full-width stepper"\n}',...FullWidthStepper.parameters?.docs?.source}}},LeftAlignedStepper.parameters={...LeftAlignedStepper.parameters,docs:{...LeftAlignedStepper.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-stepper aligned="left">\n      <ic-step step-title="Create" step-type="completed"></ic-step>\n      <ic-step step-title="Read" step-type="current"></ic-step>\n      <ic-step step-title="Update" step-type="active"></ic-step>\n      <ic-step step-title="Delete" step-type="disabled"></ic-step>\n    </ic-stepper>`,\n  name: "Left-aligned stepper"\n}',...LeftAlignedStepper.parameters?.docs?.source}}},WithHiddenStepInformation.parameters={...WithHiddenStepInformation.parameters,docs:{...WithHiddenStepInformation.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-stepper hide-step-info>\n      <ic-step step-title="Create" step-type="completed"></ic-step>\n      <ic-step step-title="Read" step-type="current"></ic-step>\n      <ic-step step-title="Update" step-type="active"></ic-step>\n      <ic-step step-title="Delete" step-type="disabled"></ic-step>\n    </ic-stepper>`,\n  name: "With hidden step information"\n}',...WithHiddenStepInformation.parameters?.docs?.source}}},WithoutStepTitles.parameters={...WithoutStepTitles.parameters,docs:{...WithoutStepTitles.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-stepper>\n      <ic-step step-type="completed"></ic-step>\n      <ic-step step-type="completed"></ic-step>\n      <ic-step step-type="current"></ic-step>\n      <ic-step></ic-step>\n    </ic-stepper>`,\n  name: "Without step titles"\n}',...WithoutStepTitles.parameters?.docs?.source}}},CustomStepper.parameters={...CustomStepper.parameters,docs:{...CustomStepper.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-stepper>\n      <ic-step step-title="First"></ic-step>\n      <ic-step\n        step-title="Second With a Very Long Title"\n        step-subtitle="Optional subtitle that is long and should wrap"\n        step-type="current"\n      ></ic-step>\n      <ic-step step-title="Third" step-type="disabled"></ic-step>\n      <ic-step\n        step-title="Fourth title that is long and should wrap"\n        step-subtitle="Optional Subtitle"\n        step-type="completed"\n      ></ic-step>\n    </ic-stepper>`,\n  name: "Custom stepper"\n}',...CustomStepper.parameters?.docs?.source}}},CustomConnectorWidth.parameters={...CustomConnectorWidth.parameters,docs:{...CustomConnectorWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-stepper aligned="left" connector-width="200">\n      <ic-step step-title="First"></ic-step>\n      <ic-step\n        step-title="Second With a Very Long Title"\n        step-subtitle="Optional subtitle that is long and should wrap"\n        step-type="current"\n      ></ic-step>\n      <ic-step step-title="Third" step-type="disabled"></ic-step>\n      <ic-step\n        step-title="Fourth title that is long and should wrap"\n        step-subtitle="Optional Subtitle"\n        step-type="completed"\n      ></ic-step>\n    </ic-stepper>`,\n  name: "Custom connector width"\n}',...CustomConnectorWidth.parameters?.docs?.source}}},Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="background-color:#24262b;">\n      <ic-stepper appearance="light">\n        <ic-step step-title="Create" step-type="completed"></ic-step>\n        <ic-step step-title="Read" step-type="current"></ic-step>\n        <ic-step step-title="Update" step-type="active"></ic-step>\n        <ic-step step-title="Delete" step-type="disabled"></ic-step>\n      </ic-stepper>\n    </div>`,\n  name: "Light"\n}',...Light.parameters?.docs?.source}}},CompactStepper.parameters={...CompactStepper.parameters,docs:{...CompactStepper.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-stepper variant="compact" id="standard-compact-stepper">\n        <ic-step step-title="Create"></ic-step>\n        <ic-step step-title="Read" step-type="current"></ic-step>\n        <ic-step step-title="Update" step-status="optional"></ic-step>\n        <ic-step step-title="Delete" step-status="required"></ic-step>\n      </ic-stepper>\n      <ic-button\n        class="back-btn-compact-stepper"\n        style="margin-right: var(--ic-space-lg)"\n        onclick="toPreviousStep()"\n        >Back</ic-button\n      >\n      <ic-button class="next-btn-compact-stepper" onclick="toNextStep()"\n        >Next</ic-button\n      >\n      <script>\n        const compactStepTypes = [\n          "active",\n          "completed",\n          "disabled",\n          "completed",\n        ];\n        const backBtn = document.querySelector(".back-btn-compact-stepper");\n        const nextBtn = document.querySelector(".next-btn-compact-stepper");\n        const steps = document.querySelectorAll(\n          "#standard-compact-stepper > ic-step"\n        );\n        function toPreviousStep() {\n          for (let i = steps.length - 1; i > 0; i--) {\n            if (steps[i].stepType === "current") {\n              steps[i].stepType = compactStepTypes[i];\n              steps[i - 1].stepType = "current";\n              i--;\n            }\n          }\n          if (steps[steps.length - 2].stepType === "current") {\n            nextBtn.setAttribute("disabled", "false");\n          }\n          if (steps[0].stepType === "current") {\n            backBtn.setAttribute("disabled", "true");\n          }\n        }\n        function toNextStep() {\n          for (let i = 0; i < steps.length - 1; i++) {\n            if (steps[i].stepType === "current") {\n              steps[i].stepType = compactStepTypes[i];\n              steps[i + 1].stepType = "current";\n              i++;\n            }\n          }\n          if (steps[1].stepType === "current") {\n            backBtn.setAttribute("disabled", "false");\n          }\n          if (steps[steps.length - 1].stepType === "current") {\n            nextBtn.setAttribute("disabled", "true");\n          }\n        }\n      <\/script>`,\n  name: "Compact stepper"\n}',...CompactStepper.parameters?.docs?.source}}},CompactStepperLight.parameters={...CompactStepperLight.parameters,docs:{...CompactStepperLight.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="background-color:#24262b;">\n        <ic-stepper\n          variant="compact"\n          id="standard-compact-stepper"\n          appearance="light"\n        >\n          <ic-step step-title="Create"></ic-step>\n          <ic-step step-title="Read" step-type="current"></ic-step>\n          <ic-step step-title="Update" step-status="optional"></ic-step>\n          <ic-step step-title="Delete" step-status="required"></ic-step>\n        </ic-stepper>\n      </div>\n      <ic-button\n        class="back-btn-compact-stepper"\n        style="margin-right: var(--ic-space-lg)"\n        onclick="toPreviousStep()"\n        >Back</ic-button\n      >\n      <ic-button class="next-btn-compact-stepper" onclick="toNextStep()"\n        >Next</ic-button\n      >\n      <script>\n        const compactStepTypes = [\n          "active",\n          "completed",\n          "disabled",\n          "completed",\n        ];\n        const backBtn = document.querySelector(".back-btn-compact-stepper");\n        const nextBtn = document.querySelector(".next-btn-compact-stepper");\n        const steps = document.querySelectorAll(\n          "#standard-compact-stepper > ic-step"\n        );\n        function toPreviousStep() {\n          for (let i = steps.length - 1; i > 0; i--) {\n            if (steps[i].stepType === "current") {\n              steps[i].stepType = compactStepTypes[i];\n              steps[i - 1].stepType = "current";\n              i--;\n            }\n          }\n          if (steps[steps.length - 2].stepType === "current") {\n            nextBtn.setAttribute("disabled", "false");\n          }\n          if (steps[0].stepType === "current") {\n            backBtn.setAttribute("disabled", "true");\n          }\n        }\n        function toNextStep() {\n          for (let i = 0; i < steps.length - 1; i++) {\n            if (steps[i].stepType === "current") {\n              steps[i].stepType = compactStepTypes[i];\n              steps[i + 1].stepType = "current";\n              i++;\n            }\n          }\n          if (steps[1].stepType === "current") {\n            backBtn.setAttribute("disabled", "false");\n          }\n          if (steps[steps.length - 1].stepType === "current") {\n            nextBtn.setAttribute("disabled", "true");\n          }\n        }\n      <\/script>`,\n  name: "Compact stepper light"\n}',...CompactStepperLight.parameters?.docs?.source}}},CustomCompactStepper.parameters={...CustomCompactStepper.parameters,docs:{...CustomCompactStepper.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-stepper variant="compact" id="custom-compact-stepper">\n        <ic-step step-title="First"></ic-step>\n        <ic-step\n          step-title="Second With a Very Long Title"\n          step-subtitle="Optional subtitle that is long and should wrap"\n          step-type="current"\n        ></ic-step>\n        <ic-step step-title="Third" step-type="disabled"></ic-step>\n        <ic-step\n          step-title="Fourth title that is long and should wrap"\n          step-subtitle="Optional Subtitle"\n          step-type="completed"\n        ></ic-step>\n        <ic-step\n          step-title="Fifth and final step"\n          step-subtitle="Optional Subtitle"\n          step-status="optional"\n          step-type="disabled"\n        ></ic-step>\n      </ic-stepper>\n      <ic-button\n        class="back-btn-custom-compact-stepper"\n        style="margin-right: var(--ic-space-lg)"\n        onclick="toPreviousCustomStep()"\n        >Back</ic-button\n      >\n      <ic-button\n        class="next-btn-custom-compact-stepper"\n        onclick="toNextCustomStep()"\n        >Next</ic-button\n      >\n      <script>\n        const customCompactStepTypes = [\n          "active",\n          "completed",\n          "disabled",\n          "completed",\n          "disabled",\n        ];\n        const backBtnCustomCompactStepper = document.querySelector(\n          ".back-btn-custom-compact-stepper"\n        );\n        const nextBtnCustomCompactStepper = document.querySelector(\n          ".next-btn-custom-compact-stepper"\n        );\n        const customSteps = document.querySelectorAll(\n          "#custom-compact-stepper > ic-step"\n        );\n        function toPreviousCustomStep() {\n          for (let i = customSteps.length - 1; i > 0; i--) {\n            if (customSteps[i].stepType === "current") {\n              customSteps[i].stepType = customCompactStepTypes[i];\n              customSteps[i - 1].stepType = "current";\n              i--;\n            }\n          }\n          if (customSteps[customSteps.length - 2].stepType === "current") {\n            nextBtnCustomCompactStepper.setAttribute("disabled", "false");\n          }\n          if (customSteps[0].stepType === "current") {\n            backBtnCustomCompactStepper.setAttribute("disabled", "true");\n          }\n        }\n        function toNextCustomStep() {\n          for (let i = 0; i < customSteps.length - 1; i++) {\n            if (customSteps[i].stepType === "current") {\n              customSteps[i].stepType = customCompactStepTypes[i];\n              customSteps[i + 1].stepType = "current";\n              i++;\n            }\n          }\n          if (customSteps[1].stepType === "current") {\n            backBtnCustomCompactStepper.setAttribute("disabled", "false");\n          }\n          if (customSteps[customSteps.length - 1].stepType === "current") {\n            nextBtnCustomCompactStepper.setAttribute("disabled", "true");\n          }\n        }\n      <\/script>`,\n  name: "Custom compact stepper"\n}',...CustomCompactStepper.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-stepper-ic-stepper-mdx.62f55ba1.iframe.bundle.js.map