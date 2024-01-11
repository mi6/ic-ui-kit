/*! For license information please see components-ic-stepper-ic-stepper-stories-mdx.70d785f3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4196],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-stepper/ic-stepper.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,compactStepper:()=>compactStepper,customCompactStepper:()=>customCompactStepper,customConnectorWidth:()=>customConnectorWidth,customStepper:()=>customStepper,default:()=>ic_stepper_stories,fullWidthStepper:()=>fullWidthStepper,leftAlignedStepper:()=>leftAlignedStepper,withHiddenStepInformation:()=>withHiddenStepInformation,withoutStepTitles:()=>withoutStepTitles});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-stepper\n\nThis is a wrapper component to be placed around one or more ic-step components\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute         | Description                                                                                                                                                                                                                   | Type                     | Default        |\n| ---------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------- |\n| `aligned`        | `aligned`         | The alignment of the default stepper within its container.                                                                                                                                                                    | `"full-width" \\| "left"` | `"full-width"` |\n| `connectorWidth` | `connector-width` | The length of the connnector between each step in pixels. Minimum length is 100px.                                                                                                                                            | `number`                 | `100`          |\n| `hideStepInfo`   | `hide-step-info`  | If `true`, the information about each step, i.e. step title, step subtitle and step status, will be hidden on all default steps. The information about each step will still be visible in the compact variant of the stepper. | `boolean`                | `false`        |\n| `variant`        | `variant`         | The variant of the stepper.                                                                                                                                                                                                   | `"compact" \\| "default"` | `"default"`    |\n\n\n----------------------------------------------\n\n\n',ic_step_readme_namespaceObject='# ic-step\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property       | Attribute       | Description                                                                                                                                             | Type                                                 | Default     |\n| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------- |\n| `stepStatus`   | `step-status`   | The status of the step. Use this prop to display a status message on the step if it is required or optional.                                            | `"optional" \\| "required"`                           | `undefined` |\n| `stepSubtitle` | `step-subtitle` | Additional information about the step. Use this prop to override the default step status messaging displayed when selecting a step type or step status. | `string`                                             | `undefined` |\n| `stepTitle`    | `step-title`    | The title of the step within the stepper.                                                                                                               | `string`                                             | `undefined` |\n| `stepType`     | `step-type`     | The state of the step within the stepper.                                                                                                               | `"active" \\| "completed" \\| "current" \\| "disabled"` | `"active"`  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-loading-indicator](../ic-loading-indicator)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-step --\x3e ic-loading-indicator\n  ic-step --\x3e ic-typography\n  ic-loading-indicator --\x3e ic-typography\n  style ic-step fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Stepper",component:"ic-stepper"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:ic_step_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width-stepper",children:"Full-width stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Full-width stepper",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-stepper>
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-aligned-stepper",children:"Left-aligned stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Left-aligned stepper",children:lit_html.dy`<ic-stepper aligned="left">
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-hidden-step-information",children:"With hidden step information"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With hidden step information",children:lit_html.dy`<ic-stepper hide-step-info>
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"without-step-titles",children:"Without step titles"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Without step titles",children:lit_html.dy`<ic-stepper>
      <ic-step step-type="completed"></ic-step>
      <ic-step step-type="completed"></ic-step>
      <ic-step step-type="current"></ic-step>
      <ic-step></ic-step>
    </ic-stepper>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-stepper",children:"Custom stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom stepper",children:lit_html.dy`<ic-stepper>
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
    </ic-stepper>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-connector-width",children:"Custom connector width"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom connector width",children:lit_html.dy`<ic-stepper aligned="left" connector-width="200">
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
    </ic-stepper>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"compact-stepper",children:"Compact stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Compact stepper",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-stepper variant="compact" id="standard-compact-stepper">
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
      </script>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-compact-stepper",children:"Custom compact stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom compact stepper",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-stepper variant="compact" id="custom-compact-stepper">
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
      </script>`})})]})}const fullWidthStepper=()=>lit_html.dy`<ic-stepper>
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`;fullWidthStepper.storyName="Full-width stepper",fullWidthStepper.parameters={storySource:{source:'html`<ic-stepper>\n      <ic-step step-title="Create" step-type="completed"></ic-step>\n      <ic-step step-title="Read" step-type="current"></ic-step>\n      <ic-step step-title="Update" step-type="active"></ic-step>\n      <ic-step step-title="Delete" step-type="disabled"></ic-step>\n    </ic-stepper>`'},loki:{skip:!0}};const leftAlignedStepper=()=>lit_html.dy`<ic-stepper aligned="left">
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`;leftAlignedStepper.storyName="Left-aligned stepper",leftAlignedStepper.parameters={storySource:{source:'html`<ic-stepper aligned="left">\n      <ic-step step-title="Create" step-type="completed"></ic-step>\n      <ic-step step-title="Read" step-type="current"></ic-step>\n      <ic-step step-title="Update" step-type="active"></ic-step>\n      <ic-step step-title="Delete" step-type="disabled"></ic-step>\n    </ic-stepper>`'}};const withHiddenStepInformation=()=>lit_html.dy`<ic-stepper hide-step-info>
      <ic-step step-title="Create" step-type="completed"></ic-step>
      <ic-step step-title="Read" step-type="current"></ic-step>
      <ic-step step-title="Update" step-type="active"></ic-step>
      <ic-step step-title="Delete" step-type="disabled"></ic-step>
    </ic-stepper>`;withHiddenStepInformation.storyName="With hidden step information",withHiddenStepInformation.parameters={storySource:{source:'html`<ic-stepper hide-step-info>\n      <ic-step step-title="Create" step-type="completed"></ic-step>\n      <ic-step step-title="Read" step-type="current"></ic-step>\n      <ic-step step-title="Update" step-type="active"></ic-step>\n      <ic-step step-title="Delete" step-type="disabled"></ic-step>\n    </ic-stepper>`'}};const withoutStepTitles=()=>lit_html.dy`<ic-stepper>
      <ic-step step-type="completed"></ic-step>
      <ic-step step-type="completed"></ic-step>
      <ic-step step-type="current"></ic-step>
      <ic-step></ic-step>
    </ic-stepper>`;withoutStepTitles.storyName="Without step titles",withoutStepTitles.parameters={storySource:{source:'html`<ic-stepper>\n      <ic-step step-type="completed"></ic-step>\n      <ic-step step-type="completed"></ic-step>\n      <ic-step step-type="current"></ic-step>\n      <ic-step></ic-step>\n    </ic-stepper>`'}};const customStepper=()=>lit_html.dy`<ic-stepper>
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
    </ic-stepper>`;customStepper.storyName="Custom stepper",customStepper.parameters={storySource:{source:'html`<ic-stepper>\n      <ic-step step-title="First"></ic-step>\n      <ic-step\n        step-title="Second With a Very Long Title"\n        step-subtitle="Optional subtitle that is long and should wrap"\n        step-type="current"\n      ></ic-step>\n      <ic-step step-title="Third" step-type="disabled"></ic-step>\n      <ic-step\n        step-title="Fourth title that is long and should wrap"\n        step-subtitle="Optional Subtitle"\n        step-type="completed"\n      ></ic-step>\n    </ic-stepper>`'}};const customConnectorWidth=()=>lit_html.dy`<ic-stepper aligned="left" connector-width="200">
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
    </ic-stepper>`;customConnectorWidth.storyName="Custom connector width",customConnectorWidth.parameters={storySource:{source:'html`<ic-stepper aligned="left" connector-width="200">\n      <ic-step step-title="First"></ic-step>\n      <ic-step\n        step-title="Second With a Very Long Title"\n        step-subtitle="Optional subtitle that is long and should wrap"\n        step-type="current"\n      ></ic-step>\n      <ic-step step-title="Third" step-type="disabled"></ic-step>\n      <ic-step\n        step-title="Fourth title that is long and should wrap"\n        step-subtitle="Optional Subtitle"\n        step-type="completed"\n      ></ic-step>\n    </ic-stepper>`'}};const compactStepper=()=>lit_html.dy`<ic-stepper variant="compact" id="standard-compact-stepper">
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
      </script>`;compactStepper.storyName="Compact stepper",compactStepper.parameters={storySource:{source:'html`<ic-stepper variant="compact" id="standard-compact-stepper">\n        <ic-step step-title="Create"></ic-step>\n        <ic-step step-title="Read" step-type="current"></ic-step>\n        <ic-step step-title="Update" step-status="optional"></ic-step>\n        <ic-step step-title="Delete" step-status="required"></ic-step>\n      </ic-stepper>\n      <ic-button\n        class="back-btn-compact-stepper"\n        style="margin-right: var(--ic-space-lg)"\n        onclick="toPreviousStep()"\n        >Back</ic-button\n      >\n      <ic-button class="next-btn-compact-stepper" onclick="toNextStep()"\n        >Next</ic-button\n      >\n      <script>\n        const compactStepTypes = [\n          "active",\n          "completed",\n          "disabled",\n          "completed",\n        ];\n        const backBtn = document.querySelector(".back-btn-compact-stepper");\n        const nextBtn = document.querySelector(".next-btn-compact-stepper");\n        const steps = document.querySelectorAll(\n          "#standard-compact-stepper > ic-step"\n        );\n        function toPreviousStep() {\n          for (let i = steps.length - 1; i > 0; i--) {\n            if (steps[i].stepType === "current") {\n              steps[i].stepType = compactStepTypes[i];\n              steps[i - 1].stepType = "current";\n              i--;\n            }\n          }\n          if (steps[steps.length - 2].stepType === "current") {\n            nextBtn.setAttribute("disabled", "false");\n          }\n          if (steps[0].stepType === "current") {\n            backBtn.setAttribute("disabled", "true");\n          }\n        }\n        function toNextStep() {\n          for (let i = 0; i < steps.length - 1; i++) {\n            if (steps[i].stepType === "current") {\n              steps[i].stepType = compactStepTypes[i];\n              steps[i + 1].stepType = "current";\n              i++;\n            }\n          }\n          if (steps[1].stepType === "current") {\n            backBtn.setAttribute("disabled", "false");\n          }\n          if (steps[steps.length - 1].stepType === "current") {\n            nextBtn.setAttribute("disabled", "true");\n          }\n        }\n      <\/script>`'},loki:{skip:!0}};const customCompactStepper=()=>lit_html.dy`<ic-stepper variant="compact" id="custom-compact-stepper">
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
      </script>`;customCompactStepper.storyName="Custom compact stepper",customCompactStepper.parameters={storySource:{source:'html`<ic-stepper variant="compact" id="custom-compact-stepper">\n        <ic-step step-title="First"></ic-step>\n        <ic-step\n          step-title="Second With a Very Long Title"\n          step-subtitle="Optional subtitle that is long and should wrap"\n          step-type="current"\n        ></ic-step>\n        <ic-step step-title="Third" step-type="disabled"></ic-step>\n        <ic-step\n          step-title="Fourth title that is long and should wrap"\n          step-subtitle="Optional Subtitle"\n          step-type="completed"\n        ></ic-step>\n        <ic-step\n          step-title="Fifth and final step"\n          step-subtitle="Optional Subtitle"\n          step-status="optional"\n          step-type="disabled"\n        ></ic-step>\n      </ic-stepper>\n      <ic-button\n        class="back-btn-custom-compact-stepper"\n        style="margin-right: var(--ic-space-lg)"\n        onclick="toPreviousCustomStep()"\n        >Back</ic-button\n      >\n      <ic-button\n        class="next-btn-custom-compact-stepper"\n        onclick="toNextCustomStep()"\n        >Next</ic-button\n      >\n      <script>\n        const customCompactStepTypes = [\n          "active",\n          "completed",\n          "disabled",\n          "completed",\n          "disabled",\n        ];\n        const backBtnCustomCompactStepper = document.querySelector(\n          ".back-btn-custom-compact-stepper"\n        );\n        const nextBtnCustomCompactStepper = document.querySelector(\n          ".next-btn-custom-compact-stepper"\n        );\n        const customSteps = document.querySelectorAll(\n          "#custom-compact-stepper > ic-step"\n        );\n        function toPreviousCustomStep() {\n          for (let i = customSteps.length - 1; i > 0; i--) {\n            if (customSteps[i].stepType === "current") {\n              customSteps[i].stepType = customCompactStepTypes[i];\n              customSteps[i - 1].stepType = "current";\n              i--;\n            }\n          }\n          if (customSteps[customSteps.length - 2].stepType === "current") {\n            nextBtnCustomCompactStepper.setAttribute("disabled", "false");\n          }\n          if (customSteps[0].stepType === "current") {\n            backBtnCustomCompactStepper.setAttribute("disabled", "true");\n          }\n        }\n        function toNextCustomStep() {\n          for (let i = 0; i < customSteps.length - 1; i++) {\n            if (customSteps[i].stepType === "current") {\n              customSteps[i].stepType = customCompactStepTypes[i];\n              customSteps[i + 1].stepType = "current";\n              i++;\n            }\n          }\n          if (customSteps[1].stepType === "current") {\n            backBtnCustomCompactStepper.setAttribute("disabled", "false");\n          }\n          if (customSteps[customSteps.length - 1].stepType === "current") {\n            nextBtnCustomCompactStepper.setAttribute("disabled", "true");\n          }\n        }\n      <\/script>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Stepper",tags:["stories-mdx"],includeStories:["fullWidthStepper","leftAlignedStepper","withHiddenStepInformation","withoutStepTitles","customStepper","customConnectorWidth","compactStepper","customCompactStepper"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_stepper_stories=componentMeta,__namedExportsOrder=["fullWidthStepper","leftAlignedStepper","withHiddenStepInformation","withoutStepTitles","customStepper","customConnectorWidth","compactStepper","customCompactStepper"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-stepper-ic-stepper-stories-mdx.70d785f3.iframe.bundle.js.map