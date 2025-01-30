"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4916],{"./src/components/ic-select/ic-select_(multi).stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,asyncDefault:()=>asyncDefault,customComponents:()=>customComponents,customPlaceholder:()=>customPlaceholder,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,defaultValue:()=>defaultValue,disabled:()=>disabled,disabledOptions:()=>disabledOptions,fullWidth:()=>fullWidth,groups:()=>groups,helperText:()=>helperText,hiddenLabel:()=>hiddenLabel,inForm:()=>inForm,loadingWithError:()=>loadingWithError,playground:()=>playground,readOnly:()=>readOnly,recommended:()=>recommended,required:()=>required,scrollBehaviour:()=>scrollBehaviour,sizes:()=>sizes,validation:()=>validation,withClearButton:()=>withClearButton,withDescriptions:()=>withDescriptions});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit-html/lit-html.js"),_readme_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ic-select/readme.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={disabled:!1,"full-width":!1,"helper-text":"Select some options from the list","hide-label":!1,loading:!1,loadingLabel:"Loading...",label:"What are your favourite types of coffee?",placeholder:"Select an option",readonly:!1,required:!1,size:"medium","validation-status":"none","validation-text":"","show-clear-button":!1,theme:"inherit"};function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p"},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Web Components/Select/Multi",component:"ic-select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.VY,{markdown:_readme_md__WEBPACK_IMPORTED_MODULE_3__}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Default",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-default"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-default");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icClear", function (event) {
            console.log("icClear: clear all clicked");
          });
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
          select.addEventListener("icOptionSelect", function (event) {
            console.log("icOptionSelect: " + event.detail.value);
          });
          select.addEventListener("icOptionDeselect", function (event) {
            console.log("icOptionDeselect: " + event.detail.value);
          });
          select.addEventListener("icOpen", function () {
            console.log("select dropdown opened");
          });
          select.addEventListener("icClose", function () {
            console.log("select dropdown closed");
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"async-default",children:"Async default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Async default",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          label="What are your favourite types of coffee?"
          id="select-async"
          multiple
          loading
        ></ic-select>
        <script>
          var select = document.querySelector("#select-async");
          select.options = [];
          setTimeout(() => {
            select.options = [
              { label: "Cappuccino", value: "Cap" },
              { label: "Latte", value: "Lat" },
              { label: "Americano", value: "Ame" },
              { label: "Filter", value: "Fil" },
              { label: "Flat white", value: "Fla" },
              { label: "Mocha", value: "Moc" },
              { label: "Macchiato", value: "Mac" },
            ];
          }, 5000);
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"default-value",children:"Default value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Default value",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-default-value"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-default-value");
          select.value = ["Ame", "Fil", "Moc"];
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"with-clear-button",children:"With clear button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"With clear button",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-clear"
          label="What are your favourite types of coffee?"
          multiple
          show-clear-button
        ></ic-select>
        <script>
          var select = document.querySelector("#select-clear");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"with-descriptions",children:"With descriptions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"With descriptions",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-descriptions"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-descriptions");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Filter",
              value: "Fil",
              description: "Coffee filtered using paper or a mesh",
            },
            {
              label: "Flat white",
              value: "Fla",
              description:
                "Coffee without froth made with espresso and hot steamed milk",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
            {
              label: "Macchiato",
              value: "Mac",
              description: "Espresso coffee with a dash of frothy steamed milk",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Helper text",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-helper"
          label="What are your favourite types of coffee?"
          multiple
          helper-text="Select some options from the list"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-helper");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"custom-placeholder",children:"Custom placeholder"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Custom placeholder",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-placeholder"
          label="What are your favourite types of coffee?"
          multiple
          placeholder="Placeholder goes here"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-placeholder");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"custom-components",children:"Custom components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Custom components",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-custom-components"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-custom-components");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
              element: {
                component: \`<ic-status-tag label="Neutral status"></ic-status-tag>\`,
                ariaLabel: "Neutral status tag",
              },
              icon: \`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g id="warning"><path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>\`,
            },
            {
              label: "Americano",
              value: "Ame",
              icon: \`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
            <g id="warning">
            <path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />
            </g>
            </svg>\`,
            },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Sizes",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="display: flex; flex-direction: column; gap: 16px;">
        <ic-select
          id="select-size-small"
          label="What are your favourite types of coffee?"
          multiple
          size="small"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-size-small");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>
        <ic-select
          id="select-size-medium"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-size-medium");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>
        <ic-select
          id="select-size-large"
          label="What are your favourite types of coffee?"
          multiple
          size="large"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-size-large");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>
      </div>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Disabled",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-disabled"
          label="What are your favourite types of coffee?"
          multiple
          disabled
        ></ic-select>
        <script>
          var select = document.querySelector("#select-disabled");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"disabled-options",children:"Disabled options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Disabled options",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-disabled-options"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-disabled-options");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat", disabled: true },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil", disabled: true },
            { label: "Flat white", value: "Fla", disabled: true },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Full width",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-full-width"
          label="What are your favourite types of coffee?"
          multiple
          full-width
        ></ic-select>
        <script>
          var select = document.querySelector("#select-full-width");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"hidden-label",children:"Hidden label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Hidden label",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-hidden-label"
          label="What are your favourite types of coffee?"
          multiple
          hide-label
        ></ic-select>
        <script>
          var select = document.querySelector("#select-hidden-label");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"required",children:"Required"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Required",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-required"
          label="What are your favourite types of coffee?"
          multiple
          required
        ></ic-select>
        <script>
          var select = document.querySelector("#select-required");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"read-only",children:"Read-only"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Read-only",children:()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-read-only"
          label="What are your favourite types of coffee?"
          multiple
          readonly
        ></ic-select>
        <script>
          var select = document.querySelector("#select-read-only");
          select.value = ["Cap", "Fla", "Moc"];
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"groups",children:"Groups"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Groups",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-groups"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-groups");
          select.options = [
            {
              label: "Fancy",
              children: [
                { label: "Cappuccino", value: "Cap" },
                { label: "Flat white", value: "Fla" },
              ],
            },
            {
              label: "Boring",
              children: [
                { label: "Filter", value: "Fil" },
                { label: "Latte", value: "Lat" },
              ],
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"recommended",children:"Recommended"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Recommended",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-recommended"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-recommended");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame", recommended: true },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla", recommended: true },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Validation",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-success"
          label="What are your favourite types of coffee?"
          multiple
          validation-status="success"
          validation-text="Coffee available"
        ></ic-select>
        <script>
          var select1 = document.querySelector("#select-success");
          select1.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select1.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>
        <ic-select
          id="select-warning"
          label="What are your favourite types of coffee?"
          multiple
          validation-status="warning"
          validation-text="Only a few left"
        ></ic-select>
        <script>
          var select2 = document.querySelector("#select-warning");
          select2.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select2.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>
        <ic-select
          id="select-error"
          label="What are your favourite types of coffee?"
          multiple
          validation-status="error"
          validation-text="Coffee unavailable"
        ></ic-select>
        <script>
          var select3 = document.querySelector("#select-error");
          select3.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select3.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"scroll-behaviour",children:"Scroll behaviour"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Scroll behaviour",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-scroll"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-scroll");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
            { label: "Café au lait", value: "Caf" },
            { label: "Espresso", value: "Esp" },
            { label: "Cortado", value: "Cor" },
            { label: "Ristretto", value: "Ris" },
            { label: "Latte macchiato", value: "Lam" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"loading-with-error",children:"Loading with error"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Loading with error",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-loading"
          label="What are your favourite types of coffee?"
          multiple
          loading
          timeout="1000"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-loading");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
          select.addEventListener("icRetryLoad", function (event) {
            select.loading = "true";
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"in-form",children:"In form"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"This shows how the single select works within a form. The value will appear in the console on submit."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"In form",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
        <form>
          <ic-select
            id="select-form"
            label="What are your favourite types of coffee?"
            multiple
          ></ic-select>
          <br />
          <br />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          var select = document.querySelector("#select-form");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(document.querySelector("input.ic-input").value);
          });
        </script>
      `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Playground",args:defaultArgs,argTypes:{"validation-status":{defaultValue:"",options:["","error","success","warning"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},showIcon:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <ic-select
          id="select-playground"
          multiple
          disabled=${args.disabled}
          full-width=${args["full-width"]}
          helper-text=${args["helper-text"]}
          hide-label=${args["hide-label"]}
          loading=${args.loading}
          loading-label=${args["loading-label"]}
          label=${args.label}
          placeholder=${args.placeholder}
          readonly=${args.readonly}
          required=${args.required}
          show-clear-button=${args["show-clear-button"]}
          size=${args.size}
          validation-status=${args["validation-status"]}
          validation-text=${args["validation-text"]}
          theme=${args.theme}
        >
          ${args.showIcon&&lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>`}
        </ic-select>
        <script>
          var select = document.querySelector("#select-playground");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Boring",
              children: [
                {
                  label: "Latte",
                  value: "Lat",
                  description: "A milkier coffee than a cappuccino",
                },
                {
                  label: "Filter",
                  value: "Fil",
                  description: "Coffee filtered using paper or a mesh",
                },
              ],
            },
            {
              label: "Fancy",
              children: [
                {
                  label: "Flat white",
                  value: "Fla",
                  description:
                    "Coffee without froth made with espresso and hot steamed milk",
                },
                {
                  label: "Macchiato",
                  value: "Mac",
                  description:
                    "Espresso coffee with a dash of frothy steamed milk",
                },
              ],
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})})]})}const defaultStory=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-default"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-default");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icClear", function (event) {
            console.log("icClear: clear all clicked");
          });
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
          select.addEventListener("icOptionSelect", function (event) {
            console.log("icOptionSelect: " + event.detail.value);
          });
          select.addEventListener("icOptionDeselect", function (event) {
            console.log("icOptionDeselect: " + event.detail.value);
          });
          select.addEventListener("icOpen", function () {
            console.log("select dropdown opened");
          });
          select.addEventListener("icClose", function () {
            console.log("select dropdown closed");
          });
        </script>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`<ic-select\n          id="select-default"\n          label="What are your favourite types of coffee?"\n          multiple\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-default");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icClear", function (event) {\n            console.log("icClear: clear all clicked");\n          });\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n          select.addEventListener("icOptionSelect", function (event) {\n            console.log("icOptionSelect: " + event.detail.value);\n          });\n          select.addEventListener("icOptionDeselect", function (event) {\n            console.log("icOptionDeselect: " + event.detail.value);\n          });\n          select.addEventListener("icOpen", function () {\n            console.log("select dropdown opened");\n          });\n          select.addEventListener("icClose", function () {\n            console.log("select dropdown closed");\n          });\n        <\/script>`'}};const asyncDefault=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          label="What are your favourite types of coffee?"
          id="select-async"
          multiple
          loading
        ></ic-select>
        <script>
          var select = document.querySelector("#select-async");
          select.options = [];
          setTimeout(() => {
            select.options = [
              { label: "Cappuccino", value: "Cap" },
              { label: "Latte", value: "Lat" },
              { label: "Americano", value: "Ame" },
              { label: "Filter", value: "Fil" },
              { label: "Flat white", value: "Fla" },
              { label: "Mocha", value: "Moc" },
              { label: "Macchiato", value: "Mac" },
            ];
          }, 5000);
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;asyncDefault.storyName="Async default",asyncDefault.parameters={storySource:{source:'args => html`<ic-select\n          label="What are your favourite types of coffee?"\n          id="select-async"\n          multiple\n          loading\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-async");\n          select.options = [];\n          setTimeout(() => {\n            select.options = [\n              { label: "Cappuccino", value: "Cap" },\n              { label: "Latte", value: "Lat" },\n              { label: "Americano", value: "Ame" },\n              { label: "Filter", value: "Fil" },\n              { label: "Flat white", value: "Fla" },\n              { label: "Mocha", value: "Moc" },\n              { label: "Macchiato", value: "Mac" },\n            ];\n          }, 5000);\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const defaultValue=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-default-value"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-default-value");
          select.value = ["Ame", "Fil", "Moc"];
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;defaultValue.storyName="Default value",defaultValue.parameters={storySource:{source:'args => html`<ic-select\n          id="select-default-value"\n          label="What are your favourite types of coffee?"\n          multiple\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-default-value");\n          select.value = ["Ame", "Fil", "Moc"];\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const withClearButton=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-clear"
          label="What are your favourite types of coffee?"
          multiple
          show-clear-button
        ></ic-select>
        <script>
          var select = document.querySelector("#select-clear");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;withClearButton.storyName="With clear button",withClearButton.parameters={storySource:{source:'args => html`<ic-select\n          id="select-clear"\n          label="What are your favourite types of coffee?"\n          multiple\n          show-clear-button\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-clear");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const withDescriptions=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-descriptions"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-descriptions");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Filter",
              value: "Fil",
              description: "Coffee filtered using paper or a mesh",
            },
            {
              label: "Flat white",
              value: "Fla",
              description:
                "Coffee without froth made with espresso and hot steamed milk",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
            {
              label: "Macchiato",
              value: "Mac",
              description: "Espresso coffee with a dash of frothy steamed milk",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;withDescriptions.storyName="With descriptions",withDescriptions.parameters={storySource:{source:'args => html`<ic-select\n          id="select-descriptions"\n          label="What are your favourite types of coffee?"\n          multiple\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-descriptions");\n          select.options = [\n            {\n              label: "Cappuccino",\n              value: "Cap",\n              description: "Coffee frothed up with pressurised steam",\n            },\n            {\n              label: "Latte",\n              value: "Lat",\n              description: "A milkier coffee than a cappuccino",\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              description: "Espresso coffee diluted with hot water",\n            },\n            {\n              label: "Filter",\n              value: "Fil",\n              description: "Coffee filtered using paper or a mesh",\n            },\n            {\n              label: "Flat white",\n              value: "Fla",\n              description:\n                "Coffee without froth made with espresso and hot steamed milk",\n            },\n            {\n              label: "Mocha",\n              value: "Moc",\n              description: "A mixture of coffee and chocolate",\n            },\n            {\n              label: "Macchiato",\n              value: "Mac",\n              description: "Espresso coffee with a dash of frothy steamed milk",\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const helperText=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-helper"
          label="What are your favourite types of coffee?"
          multiple
          helper-text="Select some options from the list"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-helper");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'args => html`<ic-select\n          id="select-helper"\n          label="What are your favourite types of coffee?"\n          multiple\n          helper-text="Select some options from the list"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-helper");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const customPlaceholder=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-placeholder"
          label="What are your favourite types of coffee?"
          multiple
          placeholder="Placeholder goes here"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-placeholder");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;customPlaceholder.storyName="Custom placeholder",customPlaceholder.parameters={storySource:{source:'args => html`<ic-select\n          id="select-placeholder"\n          label="What are your favourite types of coffee?"\n          multiple\n          placeholder="Placeholder goes here"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-placeholder");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const customComponents=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-custom-components"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-custom-components");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            {
              label: "Latte",
              value: "Lat",
              description: "A milkier coffee than a cappuccino",
              element: {
                component: \`<ic-status-tag label="Neutral status"></ic-status-tag>\`,
                ariaLabel: "Neutral status tag",
              },
              icon: \`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g id="warning"><path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>\`,
            },
            {
              label: "Americano",
              value: "Ame",
              icon: \`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
            <g id="warning">
            <path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />
            </g>
            </svg>\`,
            },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;customComponents.storyName="Custom components",customComponents.parameters={storySource:{source:'args => html`<ic-select\n          id="select-custom-components"\n          label="What are your favourite types of coffee?"\n          multiple\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-custom-components");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            {\n              label: "Latte",\n              value: "Lat",\n              description: "A milkier coffee than a cappuccino",\n              element: {\n                component: \\`<ic-status-tag label="Neutral status"></ic-status-tag>\\`,\n                ariaLabel: "Neutral status tag",\n              },\n              icon: \\`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g id="warning"><path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>\\`,\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              icon: \\`<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">\n            <g id="warning">\n            <path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />\n            </g>\n            </svg>\\`,\n            },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const sizes=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="display: flex; flex-direction: column; gap: 16px;">
        <ic-select
          id="select-size-small"
          label="What are your favourite types of coffee?"
          multiple
          size="small"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-size-small");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>
        <ic-select
          id="select-size-medium"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-size-medium");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>
        <ic-select
          id="select-size-large"
          label="What are your favourite types of coffee?"
          multiple
          size="large"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-size-large");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>
      </div>`;sizes.storyName="Sizes",sizes.parameters={storySource:{source:'args => html`<div style="display: flex; flex-direction: column; gap: 16px;">\n        <ic-select\n          id="select-size-small"\n          label="What are your favourite types of coffee?"\n          multiple\n          size="small"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-size-small");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="select-size-medium"\n          label="What are your favourite types of coffee?"\n          multiple\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-size-medium");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="select-size-large"\n          label="What are your favourite types of coffee?"\n          multiple\n          size="large"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-size-large");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>\n      </div>`'}};const disabled=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-disabled"
          label="What are your favourite types of coffee?"
          multiple
          disabled
        ></ic-select>
        <script>
          var select = document.querySelector("#select-disabled");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html`<ic-select\n          id="select-disabled"\n          label="What are your favourite types of coffee?"\n          multiple\n          disabled\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-disabled");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const disabledOptions=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-disabled-options"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-disabled-options");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat", disabled: true },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil", disabled: true },
            { label: "Flat white", value: "Fla", disabled: true },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;disabledOptions.storyName="Disabled options",disabledOptions.parameters={storySource:{source:'args => html`<ic-select\n          id="select-disabled-options"\n          label="What are your favourite types of coffee?"\n          multiple\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-disabled-options");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat", disabled: true },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil", disabled: true },\n            { label: "Flat white", value: "Fla", disabled: true },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const fullWidth=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-full-width"
          label="What are your favourite types of coffee?"
          multiple
          full-width
        ></ic-select>
        <script>
          var select = document.querySelector("#select-full-width");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'args => html`<ic-select\n          id="select-full-width"\n          label="What are your favourite types of coffee?"\n          multiple\n          full-width\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-full-width");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const hiddenLabel=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-hidden-label"
          label="What are your favourite types of coffee?"
          multiple
          hide-label
        ></ic-select>
        <script>
          var select = document.querySelector("#select-hidden-label");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;hiddenLabel.storyName="Hidden label",hiddenLabel.parameters={storySource:{source:'args => html`<ic-select\n          id="select-hidden-label"\n          label="What are your favourite types of coffee?"\n          multiple\n          hide-label\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-hidden-label");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const required=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-required"
          label="What are your favourite types of coffee?"
          multiple
          required
        ></ic-select>
        <script>
          var select = document.querySelector("#select-required");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;required.storyName="Required",required.parameters={storySource:{source:'args => html`<ic-select\n          id="select-required"\n          label="What are your favourite types of coffee?"\n          multiple\n          required\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-required");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const readOnly=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-read-only"
          label="What are your favourite types of coffee?"
          multiple
          readonly
        ></ic-select>
        <script>
          var select = document.querySelector("#select-read-only");
          select.value = ["Cap", "Fla", "Moc"];
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;readOnly.storyName="Read-only",readOnly.parameters={storySource:{source:'() => html`<ic-select\n          id="select-read-only"\n          label="What are your favourite types of coffee?"\n          multiple\n          readonly\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-read-only");\n          select.value = ["Cap", "Fla", "Moc"];\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const groups=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-groups"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-groups");
          select.options = [
            {
              label: "Fancy",
              children: [
                { label: "Cappuccino", value: "Cap" },
                { label: "Flat white", value: "Fla" },
              ],
            },
            {
              label: "Boring",
              children: [
                { label: "Filter", value: "Fil" },
                { label: "Latte", value: "Lat" },
              ],
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;groups.storyName="Groups",groups.parameters={storySource:{source:'args => html`<ic-select\n          id="select-groups"\n          label="What are your favourite types of coffee?"\n          multiple\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-groups");\n          select.options = [\n            {\n              label: "Fancy",\n              children: [\n                { label: "Cappuccino", value: "Cap" },\n                { label: "Flat white", value: "Fla" },\n              ],\n            },\n            {\n              label: "Boring",\n              children: [\n                { label: "Filter", value: "Fil" },\n                { label: "Latte", value: "Lat" },\n              ],\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const recommended=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-recommended"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-recommended");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame", recommended: true },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla", recommended: true },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;recommended.storyName="Recommended",recommended.parameters={storySource:{source:'args => html`<ic-select\n          id="select-recommended"\n          label="What are your favourite types of coffee?"\n          multiple\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-recommended");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame", recommended: true },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla", recommended: true },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const validation=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-success"
          label="What are your favourite types of coffee?"
          multiple
          validation-status="success"
          validation-text="Coffee available"
        ></ic-select>
        <script>
          var select1 = document.querySelector("#select-success");
          select1.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select1.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>
        <ic-select
          id="select-warning"
          label="What are your favourite types of coffee?"
          multiple
          validation-status="warning"
          validation-text="Only a few left"
        ></ic-select>
        <script>
          var select2 = document.querySelector("#select-warning");
          select2.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select2.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>
        <ic-select
          id="select-error"
          label="What are your favourite types of coffee?"
          multiple
          validation-status="error"
          validation-text="Coffee unavailable"
        ></ic-select>
        <script>
          var select3 = document.querySelector("#select-error");
          select3.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select3.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;validation.storyName="Validation",validation.parameters={storySource:{source:'args => html`<ic-select\n          id="select-success"\n          label="What are your favourite types of coffee?"\n          multiple\n          validation-status="success"\n          validation-text="Coffee available"\n        ></ic-select>\n        <script>\n          var select1 = document.querySelector("#select-success");\n          select1.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select1.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="select-warning"\n          label="What are your favourite types of coffee?"\n          multiple\n          validation-status="warning"\n          validation-text="Only a few left"\n        ></ic-select>\n        <script>\n          var select2 = document.querySelector("#select-warning");\n          select2.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select2.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="select-error"\n          label="What are your favourite types of coffee?"\n          multiple\n          validation-status="error"\n          validation-text="Coffee unavailable"\n        ></ic-select>\n        <script>\n          var select3 = document.querySelector("#select-error");\n          select3.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select3.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const scrollBehaviour=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-scroll"
          label="What are your favourite types of coffee?"
          multiple
        ></ic-select>
        <script>
          var select = document.querySelector("#select-scroll");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
            { label: "Café au lait", value: "Caf" },
            { label: "Espresso", value: "Esp" },
            { label: "Cortado", value: "Cor" },
            { label: "Ristretto", value: "Ris" },
            { label: "Latte macchiato", value: "Lam" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;scrollBehaviour.storyName="Scroll behaviour",scrollBehaviour.parameters={storySource:{source:'args => html`<ic-select\n          id="select-scroll"\n          label="What are your favourite types of coffee?"\n          multiple\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-scroll");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n            { label: "Café au lait", value: "Caf" },\n            { label: "Espresso", value: "Esp" },\n            { label: "Cortado", value: "Cor" },\n            { label: "Ristretto", value: "Ris" },\n            { label: "Latte macchiato", value: "Lam" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const loadingWithError=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-loading"
          label="What are your favourite types of coffee?"
          multiple
          loading
          timeout="1000"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-loading");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
          select.addEventListener("icRetryLoad", function (event) {
            select.loading = "true";
          });
        </script>`;loadingWithError.storyName="Loading with error",loadingWithError.parameters={storySource:{source:'args => html`<ic-select\n          id="select-loading"\n          label="What are your favourite types of coffee?"\n          multiple\n          loading\n          timeout="1000"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-loading");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n          select.addEventListener("icRetryLoad", function (event) {\n            select.loading = "true";\n          });\n        <\/script>`'}};const inForm=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
        <form>
          <ic-select
            id="select-form"
            label="What are your favourite types of coffee?"
            multiple
          ></ic-select>
          <br />
          <br />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          var select = document.querySelector("#select-form");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(document.querySelector("input.ic-input").value);
          });
        </script>
      `;inForm.storyName="In form",inForm.parameters={storySource:{source:'args => html`\n        <form>\n          <ic-select\n            id="select-form"\n            label="What are your favourite types of coffee?"\n            multiple\n          ></ic-select>\n          <br />\n          <br />\n          <input type="submit" value="Submit" />\n          <input type="reset" value="Reset" />\n        </form>\n        <script>\n          var select = document.querySelector("#select-form");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n          document.querySelector("form").addEventListener("submit", (ev) => {\n            ev.preventDefault();\n            console.log(document.querySelector("input.ic-input").value);\n          });\n        <\/script>\n      `'}};const playground=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <ic-select
          id="select-playground"
          multiple
          disabled=${args.disabled}
          full-width=${args["full-width"]}
          helper-text=${args["helper-text"]}
          hide-label=${args["hide-label"]}
          loading=${args.loading}
          loading-label=${args["loading-label"]}
          label=${args.label}
          placeholder=${args.placeholder}
          readonly=${args.readonly}
          required=${args.required}
          show-clear-button=${args["show-clear-button"]}
          size=${args.size}
          validation-status=${args["validation-status"]}
          validation-text=${args["validation-text"]}
          theme=${args.theme}
        >
          ${args.showIcon&&lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>`}
        </ic-select>
        <script>
          var select = document.querySelector("#select-playground");
          select.options = [
            {
              label: "Cappuccino",
              value: "Cap",
              description: "Coffee frothed up with pressurised steam",
            },
            {
              label: "Boring",
              children: [
                {
                  label: "Latte",
                  value: "Lat",
                  description: "A milkier coffee than a cappuccino",
                },
                {
                  label: "Filter",
                  value: "Fil",
                  description: "Coffee filtered using paper or a mesh",
                },
              ],
            },
            {
              label: "Fancy",
              children: [
                {
                  label: "Flat white",
                  value: "Fla",
                  description:
                    "Coffee without froth made with espresso and hot steamed milk",
                },
                {
                  label: "Macchiato",
                  value: "Mac",
                  description:
                    "Espresso coffee with a dash of frothy steamed milk",
                },
              ],
            },
            {
              label: "Americano",
              value: "Ame",
              description: "Espresso coffee diluted with hot water",
            },
            {
              label: "Mocha",
              value: "Moc",
              description: "A mixture of coffee and chocolate",
            },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;playground.storyName="Playground",playground.argTypes={"validation-status":{defaultValue:"",options:["","error","success","warning"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},showIcon:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html` <ic-select\n          id="select-playground"\n          multiple\n          disabled=${args.disabled}\n          full-width=${args["full-width"]}\n          helper-text=${args["helper-text"]}\n          hide-label=${args["hide-label"]}\n          loading=${args.loading}\n          loading-label=${args["loading-label"]}\n          label=${args.label}\n          placeholder=${args.placeholder}\n          readonly=${args.readonly}\n          required=${args.required}\n          show-clear-button=${args["show-clear-button"]}\n          size=${args.size}\n          validation-status=${args["validation-status"]}\n          validation-text=${args["validation-text"]}\n          theme=${args.theme}\n        >\n          ${args.showIcon && html` <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>`}\n        </ic-select>\n        <script>\n          var select = document.querySelector("#select-playground");\n          select.options = [\n            {\n              label: "Cappuccino",\n              value: "Cap",\n              description: "Coffee frothed up with pressurised steam",\n            },\n            {\n              label: "Boring",\n              children: [\n                {\n                  label: "Latte",\n                  value: "Lat",\n                  description: "A milkier coffee than a cappuccino",\n                },\n                {\n                  label: "Filter",\n                  value: "Fil",\n                  description: "Coffee filtered using paper or a mesh",\n                },\n              ],\n            },\n            {\n              label: "Fancy",\n              children: [\n                {\n                  label: "Flat white",\n                  value: "Fla",\n                  description:\n                    "Coffee without froth made with espresso and hot steamed milk",\n                },\n                {\n                  label: "Macchiato",\n                  value: "Mac",\n                  description:\n                    "Espresso coffee with a dash of frothy steamed milk",\n                },\n              ],\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              description: "Espresso coffee diluted with hot water",\n            },\n            {\n              label: "Mocha",\n              value: "Moc",\n              description: "A mixture of coffee and chocolate",\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'}};const componentMeta={title:"Web Components/Select/Multi",tags:["stories-mdx"],includeStories:["defaultStory","asyncDefault","defaultValue","withClearButton","withDescriptions","helperText","customPlaceholder","customComponents","sizes","disabled","disabledOptions","fullWidth","hiddenLabel","required","readOnly","groups","recommended","validation","scrollBehaviour","loadingWithError","inForm","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","asyncDefault","defaultValue","withClearButton","withDescriptions","helperText","customPlaceholder","customComponents","sizes","disabled","disabledOptions","fullWidth","hiddenLabel","required","readOnly","groups","recommended","validation","scrollBehaviour","loadingWithError","inForm","playground"]}}]);
//# sourceMappingURL=components-ic-select-ic-select_(multi)-stories-mdx.47f6f61f.iframe.bundle.js.map