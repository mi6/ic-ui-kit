"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[265],{"./src/components/ic-select/ic-select_(searchable).stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,asyncDefault:()=>asyncDefault,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,defaultValue:()=>defaultValue,disabled:()=>disabled,disabledOptions:()=>disabledOptions,emittingIcOptionSelectOnEnter:()=>emittingIcOptionSelectOnEnter,externalFiltering:()=>externalFiltering,filterByStartOfOptions:()=>filterByStartOfOptions,groups:()=>groups,groupsGroupTitlesIncludedInSearch:()=>groupsGroupTitlesIncludedInSearch,helperText:()=>helperText,hiddenLabel:()=>hiddenLabel,inForm:()=>inForm,playground:()=>playground,recommended:()=>recommended,required:()=>required,scrollBehaviour:()=>scrollBehaviour,sizes:()=>sizes,updateInputValueFromExternalRequest:()=>updateInputValueFromExternalRequest,validation:()=>validation,withDescriptions:()=>withDescriptions,withDescriptionsIncludedInSearch:()=>withDescriptionsIncludedInSearch});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit-html/lit-html.js"),_readme_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ic-select/readme.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={disabled:!1,"full-width":!1,"helper-text":"Select one option from the list","hide-label":!1,loading:!1,loadingLabel:"Loading...",label:"What is your favourite coffee?",placeholder:"Select an option",readonly:!1,required:!1,size:"default","validation-status":"none","validation-text":"","include-descriptions-in-search":!1,"include-group-titles-in-search":!1,"search-match-position":"anywhere"};function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p"},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Web Components/Select/Searchable",component:"ic-select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.VY,{markdown:_readme_md__WEBPACK_IMPORTED_MODULE_3__}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Default",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-default"
          label="What is your favourite coffee?"
          searchable
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
          select.addEventListener("icInput", function (event) {
            console.log("icInput: " + event.detail.value);
          });
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
          select.addEventListener("icOptionSelect", function (event) {
            console.log("icOptionSelect: " + event.detail.value);
          });
          select.addEventListener("icOpen", function () {
            console.log("select dropdown opened");
          });
          select.addEventListener("icClose", function () {
            console.log("select dropdown closed");
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"async-default",children:"Async default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Async default",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-async"
          label="What is your favourite coffee?"
          searchable
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"default-value",children:"Default value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Default value",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-default-value"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-default-value");
          select.value = "Lat";
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"filter-by-start-of-options",children:"Filter by start of options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Filter by start of options",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-filter-start"
          label="What is your favourite coffee?"
          searchable
          search-match-position="start"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-filter-start");
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"with-descriptions",children:"With descriptions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"With descriptions",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-descriptions"
          label="What is your favourite coffee?"
          searchable
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"with-descriptions-included-in-search",children:"With descriptions (included in search)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"With descriptions (included in search)",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-descriptions-included"
          label="What is your favourite coffee?"
          searchable
          include-descriptions-in-search
        ></ic-select>
        <script>
          var select = document.querySelector("#select-descriptions-included");
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Helper text",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-helper"
          label="What is your favourite coffee?"
          searchable
          helper-text="Select one option from the list"
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Sizes",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="display: flex; flex-direction: column; gap: 16px;">
        <ic-select
          id="select-size-small"
          label="What is your favourite coffee?"
          searchable
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
          id="select-size-default"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-size-default");
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
          label="What is your favourite coffee?"
          searchable
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
      </div>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Disabled",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-disabled"
          label="What is your favourite coffee?"
          searchable
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"disabled-options",children:"Disabled options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Disabled options",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-disabled-options"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-disabled-options");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame", disabled: true },
            { label: "Filter", value: "Fil", disabled: true },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac", disabled: true },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"hidden-label",children:"Hidden label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Hidden label",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-hidden-label"
          label="What is your favourite coffee?"
          searchable
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"required",children:"Required"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Required",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-required"
          label="What is your favourite coffee?"
          searchable
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"groups",children:"Groups"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Groups",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-groups"
          label="What is your favourite coffee?"
          searchable
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"groups-group-titles-included-in-search",children:"Groups (group titles included in search)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Groups (group titles included in search)",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-groups-included"
          label="What is your favourite coffee?"
          searchable
          include-group-titles-in-search
        ></ic-select>
        <script>
          var select = document.querySelector("#select-groups-included");
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"recommended",children:"Recommended"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Recommended",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-recommended"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-recommended");
          select.options = [
            { label: "Cappuccino", value: "Cappuccino" },
            { label: "Flat white", value: "Flat white", recommended: true },
            { label: "Latte", value: "Latte" },
            { label: "Americano", value: "Americano", recommended: true },
            { label: "Filter", value: "Fil" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Validation",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-success"
          label="What is your favourite coffee?"
          validation-status="success"
          validation-text="Coffee available"
          searchable
        ></ic-select>
        <script>
          var select1 = document.querySelector("#select-success");
          var option1 = "Cappuccino";
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
          label="What is your favourite coffee?"
          validation-status="warning"
          validation-text="Only a few left"
          searchable
        ></ic-select>
        <script>
          var select2 = document.querySelector("#select-warning");
          var option2 = "Cappuccino";
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
          label="What is your favourite coffee?"
          validation-status="error"
          validation-text="Coffee unavailable"
          searchable
        ></ic-select>
        <script>
          var select3 = document.querySelector("#select-error");
          var option3 = "Cappuccino";
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
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"scroll-behaviour",children:"Scroll behaviour"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Scroll behaviour",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-scroll"
          label="What is your favourite coffee?"
          searchable
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
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"external-filtering",children:"External filtering"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"External filtering",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          label="What is your favourite coffee?"
          searchable
          debounce="300"
          disable-filter
          id="select-external-filtering"
          timeout="1000"
        ></ic-select>
        <br />
        <ic-typography>
          Suggested search options: Espresso, Double Espresso, Flat White,
          Filter, Cappuccino, Americano, Mocha, Macchiato.
        </ic-typography>
        <br />
        <ic-typography>
          The IcChange event will trigger 300ms after you finish typing. 1
          second later, the options in the select menu will be updated.
        </ic-typography>
        <script>
          var mockData = [
            { label: "Espresso", value: "Esp" },
            { label: "Double Espresso", value: "Dou" },
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          function handleFilter(event) {
            var option = event.detail.value;
            console.log(option);
            if (option !== selectedValue) {
              if (option) {
                select.loading = true;
                mockAPI = (query) => {
                  filteredResults = mockData.filter((m) =>
                    m.label.toLowerCase().includes(query.toLowerCase())
                  );
                  return new Promise((resolve) =>
                    setTimeout(
                      () => resolve(filteredResults),
                      event.type === "icChange" ? 2000 : 900
                    )
                  );
                };
                mockAPI(option).then((results) => (select.options = results));
              } else {
                select.options = [];
              }
            }
          }
          var select = document.querySelector("#select-external-filtering");
          var selectedValue = "";
          select.addEventListener("icClear", function (event) {
            select.options = [];
          });
          select.addEventListener("icOptionSelect", function (event) {
            selectedValue = event.detail.value;
          });
          select.addEventListener("icChange", handleFilter);
          select.addEventListener("icRetryLoad", handleFilter);
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"in-form",children:"In form"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"This shows how the searchable select works within a form. The value will appear in the console on submit."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"In form",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
        <form>
          <ic-select
            id="select-form"
            label="What is your favourite coffee?"
            searchable
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
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(document.querySelector("input.ic-input").value);
          });
        </script>
      `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"update-input-value-from-external-request",children:"Update input value from external request"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Update input value from external request",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-section-container>
          <ic-select
            id="select-external-request"
            searchable
            label="What is your favourite coffee? (searchable)"
          ></ic-select>
        </ic-section-container>
        <script>
          const searchSelect = document.getElementById(
            "select-external-request"
          );
          let options = [];
          options.push({ label: "unknown", value: "unknown" });
          options.push({ label: "item 1", value: "item-1" });
          options.push({ label: "item 2", value: "item-2" });
          options.push({ label: "item 3", value: "item-3" });
          searchSelect.options = options;
          let searchoption = "";
          searchSelect.addEventListener("icChange", function (event) {
            console.log("icChange", event.detail.value);
            searchoption = event.detail.value;
            if (searchoption === "unknown") {
              searchoption = "item-1";
              searchSelect.value = "item-1";
            } else {
              searchSelect.value = searchoption;
            }
          });
          searchSelect.addEventListener("icOptionSelect", function (event) {
            console.log("icOptionSelect: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"emitting-icoptionselect-on-enter",children:"Emitting icOptionSelect on enter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Emitting icOptionSelect on enter",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-icoptionselect"
          label="What is your favourite coffee?"
          select-on-enter
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-icoptionselect");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icOptionSelect", function (event) {
            console.log("icOptionSelect: " + event.detail.value);
          });
        </script>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Playground",parameters:{loki:{skip:!0}},args:defaultArgs,argTypes:{"search-match-position":{defaultValue:"anywhere",options:["anywhere","start"],control:{type:"inline-radio"}},"validation-status":{defaultValue:"",options:["","error","success","warning"],control:{type:"select"}},size:{options:["small","default","large"],control:{type:"inline-radio"}},showIcon:{control:{type:"boolean"}}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <ic-select
          id="select-playground"
          disabled=${args.disabled}
          full-width=${args["full-width"]}
          helper-text=${args["helper-text"]}
          hide-label=${args["hide-label"]}
          include-descriptions-in-search=${args["include-descriptions-in-search"]}
          include-group-titles-in-search=${args["include-group-titles-in-search"]}
          loading=${args.loading}
          loading-label=${args["loading-label"]}
          label=${args.label}
          placeholder=${args.placeholder}
          readonly=${args.readonly}
          required=${args.required}
          search-match-position=${args["search-match-position"]}
          searchable
          size=${args.size}
          validation-status=${args["validation-status"]}
          validation-text=${args["validation-text"]}
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
          label="What is your favourite coffee?"
          searchable
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
          select.addEventListener("icInput", function (event) {
            console.log("icInput: " + event.detail.value);
          });
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
          select.addEventListener("icOptionSelect", function (event) {
            console.log("icOptionSelect: " + event.detail.value);
          });
          select.addEventListener("icOpen", function () {
            console.log("select dropdown opened");
          });
          select.addEventListener("icClose", function () {
            console.log("select dropdown closed");
          });
        </script>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`<ic-select\n          id="select-default"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-default");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icInput", function (event) {\n            console.log("icInput: " + event.detail.value);\n          });\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n          select.addEventListener("icOptionSelect", function (event) {\n            console.log("icOptionSelect: " + event.detail.value);\n          });\n          select.addEventListener("icOpen", function () {\n            console.log("select dropdown opened");\n          });\n          select.addEventListener("icClose", function () {\n            console.log("select dropdown closed");\n          });\n        <\/script>`'},loki:{skip:!0}};const asyncDefault=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-async"
          label="What is your favourite coffee?"
          searchable
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
        </script>`;asyncDefault.storyName="Async default",asyncDefault.parameters={storySource:{source:'args => html`<ic-select\n          id="select-async"\n          label="What is your favourite coffee?"\n          searchable\n          loading\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-async");\n          select.options = [];\n          setTimeout(() => {\n            select.options = [\n              { label: "Cappuccino", value: "Cap" },\n              { label: "Latte", value: "Lat" },\n              { label: "Americano", value: "Ame" },\n              { label: "Filter", value: "Fil" },\n              { label: "Flat white", value: "Fla" },\n              { label: "Mocha", value: "Moc" },\n              { label: "Macchiato", value: "Mac" },\n            ];\n          }, 5000);\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const defaultValue=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-default-value"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-default-value");
          select.value = "Lat";
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
        </script>`;defaultValue.storyName="Default value",defaultValue.parameters={storySource:{source:'args => html`<ic-select\n          id="select-default-value"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-default-value");\n          select.value = "Lat";\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const filterByStartOfOptions=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-filter-start"
          label="What is your favourite coffee?"
          searchable
          search-match-position="start"
        ></ic-select>
        <script>
          var select = document.querySelector("#select-filter-start");
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
        </script>`;filterByStartOfOptions.storyName="Filter by start of options",filterByStartOfOptions.parameters={storySource:{source:'args => html`<ic-select\n          id="select-filter-start"\n          label="What is your favourite coffee?"\n          searchable\n          search-match-position="start"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-filter-start");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const withDescriptions=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-descriptions"
          label="What is your favourite coffee?"
          searchable
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
        </script>`;withDescriptions.storyName="With descriptions",withDescriptions.parameters={storySource:{source:'args => html`<ic-select\n          id="select-descriptions"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-descriptions");\n          select.options = [\n            {\n              label: "Cappuccino",\n              value: "Cap",\n              description: "Coffee frothed up with pressurised steam",\n            },\n            {\n              label: "Latte",\n              value: "Lat",\n              description: "A milkier coffee than a cappuccino",\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              description: "Espresso coffee diluted with hot water",\n            },\n            {\n              label: "Filter",\n              value: "Fil",\n              description: "Coffee filtered using paper or a mesh",\n            },\n            {\n              label: "Flat white",\n              value: "Fla",\n              description:\n                "Coffee without froth made with espresso and hot steamed milk",\n            },\n            {\n              label: "Mocha",\n              value: "Moc",\n              description: "A mixture of coffee and chocolate",\n            },\n            {\n              label: "Macchiato",\n              value: "Mac",\n              description: "Espresso coffee with a dash of frothy steamed milk",\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const withDescriptionsIncludedInSearch=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-descriptions-included"
          label="What is your favourite coffee?"
          searchable
          include-descriptions-in-search
        ></ic-select>
        <script>
          var select = document.querySelector("#select-descriptions-included");
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
        </script>`;withDescriptionsIncludedInSearch.storyName="With descriptions (included in search)",withDescriptionsIncludedInSearch.parameters={storySource:{source:'args => html`<ic-select\n          id="select-descriptions-included"\n          label="What is your favourite coffee?"\n          searchable\n          include-descriptions-in-search\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-descriptions-included");\n          select.options = [\n            {\n              label: "Cappuccino",\n              value: "Cap",\n              description: "Coffee frothed up with pressurised steam",\n            },\n            {\n              label: "Latte",\n              value: "Lat",\n              description: "A milkier coffee than a cappuccino",\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              description: "Espresso coffee diluted with hot water",\n            },\n            {\n              label: "Filter",\n              value: "Fil",\n              description: "Coffee filtered using paper or a mesh",\n            },\n            {\n              label: "Flat white",\n              value: "Fla",\n              description:\n                "Coffee without froth made with espresso and hot steamed milk",\n            },\n            {\n              label: "Mocha",\n              value: "Moc",\n              description: "A mixture of coffee and chocolate",\n            },\n            {\n              label: "Macchiato",\n              value: "Mac",\n              description: "Espresso coffee with a dash of frothy steamed milk",\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const helperText=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-helper"
          label="What is your favourite coffee?"
          searchable
          helper-text="Select one option from the list"
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
        </script>`;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'args => html`<ic-select\n          id="select-helper"\n          label="What is your favourite coffee?"\n          searchable\n          helper-text="Select one option from the list"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-helper");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const sizes=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="display: flex; flex-direction: column; gap: 16px;">
        <ic-select
          id="select-size-small"
          label="What is your favourite coffee?"
          searchable
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
          id="select-size-default"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-size-default");
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
          label="What is your favourite coffee?"
          searchable
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
      </div>`;sizes.storyName="Sizes",sizes.parameters={storySource:{source:'args => html`<div style="display: flex; flex-direction: column; gap: 16px;">\n        <ic-select\n          id="select-size-small"\n          label="What is your favourite coffee?"\n          searchable\n          size="small"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-size-small");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="select-size-default"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-size-default");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="select-size-large"\n          label="What is your favourite coffee?"\n          searchable\n          size="large"\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-size-large");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>\n      </div>`'},loki:{skip:!0}};const disabled=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-disabled"
          label="What is your favourite coffee?"
          searchable
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
        </script>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html`<ic-select\n          id="select-disabled"\n          label="What is your favourite coffee?"\n          searchable\n          disabled\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-disabled");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const disabledOptions=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-disabled-options"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-disabled-options");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame", disabled: true },
            { label: "Filter", value: "Fil", disabled: true },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac", disabled: true },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;disabledOptions.storyName="Disabled options",disabledOptions.parameters={storySource:{source:'args => html`<ic-select\n          id="select-disabled-options"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-disabled-options");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame", disabled: true },\n            { label: "Filter", value: "Fil", disabled: true },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac", disabled: true },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const hiddenLabel=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-hidden-label"
          label="What is your favourite coffee?"
          searchable
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
        </script>`;hiddenLabel.storyName="Hidden label",hiddenLabel.parameters={storySource:{source:'args => html`<ic-select\n          id="select-hidden-label"\n          label="What is your favourite coffee?"\n          searchable\n          hide-label\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-hidden-label");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const required=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-required"
          label="What is your favourite coffee?"
          searchable
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
        </script>`;required.storyName="Required",required.parameters={storySource:{source:'args => html`<ic-select\n          id="select-required"\n          label="What is your favourite coffee?"\n          searchable\n          required\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-required");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const groups=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-groups"
          label="What is your favourite coffee?"
          searchable
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
        </script>`;groups.storyName="Groups",groups.parameters={storySource:{source:'args => html`<ic-select\n          id="select-groups"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-groups");\n          select.options = [\n            {\n              label: "Fancy",\n              children: [\n                { label: "Cappuccino", value: "Cap" },\n                { label: "Flat white", value: "Fla" },\n              ],\n            },\n            {\n              label: "Boring",\n              children: [\n                { label: "Filter", value: "Fil" },\n                { label: "Latte", value: "Lat" },\n              ],\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const groupsGroupTitlesIncludedInSearch=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-groups-included"
          label="What is your favourite coffee?"
          searchable
          include-group-titles-in-search
        ></ic-select>
        <script>
          var select = document.querySelector("#select-groups-included");
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
        </script>`;groupsGroupTitlesIncludedInSearch.storyName="Groups (group titles included in search)",groupsGroupTitlesIncludedInSearch.parameters={storySource:{source:'args => html`<ic-select\n          id="select-groups-included"\n          label="What is your favourite coffee?"\n          searchable\n          include-group-titles-in-search\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-groups-included");\n          select.options = [\n            {\n              label: "Fancy",\n              children: [\n                { label: "Cappuccino", value: "Cap" },\n                { label: "Flat white", value: "Fla" },\n              ],\n            },\n            {\n              label: "Boring",\n              children: [\n                { label: "Filter", value: "Fil" },\n                { label: "Latte", value: "Lat" },\n              ],\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const recommended=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-recommended"
          label="What is your favourite coffee?"
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-recommended");
          select.options = [
            { label: "Cappuccino", value: "Cappuccino" },
            { label: "Flat white", value: "Flat white", recommended: true },
            { label: "Latte", value: "Latte" },
            { label: "Americano", value: "Americano", recommended: true },
            { label: "Filter", value: "Fil" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;recommended.storyName="Recommended",recommended.parameters={storySource:{source:'args => html`<ic-select\n          id="select-recommended"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-recommended");\n          select.options = [\n            { label: "Cappuccino", value: "Cappuccino" },\n            { label: "Flat white", value: "Flat white", recommended: true },\n            { label: "Latte", value: "Latte" },\n            { label: "Americano", value: "Americano", recommended: true },\n            { label: "Filter", value: "Fil" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const validation=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-success"
          label="What is your favourite coffee?"
          validation-status="success"
          validation-text="Coffee available"
          searchable
        ></ic-select>
        <script>
          var select1 = document.querySelector("#select-success");
          var option1 = "Cappuccino";
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
          label="What is your favourite coffee?"
          validation-status="warning"
          validation-text="Only a few left"
          searchable
        ></ic-select>
        <script>
          var select2 = document.querySelector("#select-warning");
          var option2 = "Cappuccino";
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
          label="What is your favourite coffee?"
          validation-status="error"
          validation-text="Coffee unavailable"
          searchable
        ></ic-select>
        <script>
          var select3 = document.querySelector("#select-error");
          var option3 = "Cappuccino";
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
        </script>`;validation.storyName="Validation",validation.parameters={storySource:{source:'args => html`<ic-select\n          id="select-success"\n          label="What is your favourite coffee?"\n          validation-status="success"\n          validation-text="Coffee available"\n          searchable\n        ></ic-select>\n        <script>\n          var select1 = document.querySelector("#select-success");\n          var option1 = "Cappuccino";\n          select1.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select1.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="select-warning"\n          label="What is your favourite coffee?"\n          validation-status="warning"\n          validation-text="Only a few left"\n          searchable\n        ></ic-select>\n        <script>\n          var select2 = document.querySelector("#select-warning");\n          var option2 = "Cappuccino";\n          select2.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select2.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>\n        <ic-select\n          id="select-error"\n          label="What is your favourite coffee?"\n          validation-status="error"\n          validation-text="Coffee unavailable"\n          searchable\n        ></ic-select>\n        <script>\n          var select3 = document.querySelector("#select-error");\n          var option3 = "Cappuccino";\n          select3.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          select3.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const scrollBehaviour=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-scroll"
          label="What is your favourite coffee?"
          searchable
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
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        </script>`;scrollBehaviour.storyName="Scroll behaviour",scrollBehaviour.parameters={storySource:{source:'args => html`<ic-select\n          id="select-scroll"\n          label="What is your favourite coffee?"\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-scroll");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n            { label: "Café au lait", value: "Caf" },\n            { label: "Espresso", value: "Esp" },\n            { label: "Cortado", value: "Cor" },\n            { label: "Ristretto", value: "Ris" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const externalFiltering=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          label="What is your favourite coffee?"
          searchable
          debounce="300"
          disable-filter
          id="select-external-filtering"
          timeout="1000"
        ></ic-select>
        <br />
        <ic-typography>
          Suggested search options: Espresso, Double Espresso, Flat White,
          Filter, Cappuccino, Americano, Mocha, Macchiato.
        </ic-typography>
        <br />
        <ic-typography>
          The IcChange event will trigger 300ms after you finish typing. 1
          second later, the options in the select menu will be updated.
        </ic-typography>
        <script>
          var mockData = [
            { label: "Espresso", value: "Esp" },
            { label: "Double Espresso", value: "Dou" },
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          function handleFilter(event) {
            var option = event.detail.value;
            console.log(option);
            if (option !== selectedValue) {
              if (option) {
                select.loading = true;
                mockAPI = (query) => {
                  filteredResults = mockData.filter((m) =>
                    m.label.toLowerCase().includes(query.toLowerCase())
                  );
                  return new Promise((resolve) =>
                    setTimeout(
                      () => resolve(filteredResults),
                      event.type === "icChange" ? 2000 : 900
                    )
                  );
                };
                mockAPI(option).then((results) => (select.options = results));
              } else {
                select.options = [];
              }
            }
          }
          var select = document.querySelector("#select-external-filtering");
          var selectedValue = "";
          select.addEventListener("icClear", function (event) {
            select.options = [];
          });
          select.addEventListener("icOptionSelect", function (event) {
            selectedValue = event.detail.value;
          });
          select.addEventListener("icChange", handleFilter);
          select.addEventListener("icRetryLoad", handleFilter);
        </script>`;externalFiltering.storyName="External filtering",externalFiltering.parameters={storySource:{source:'args => html`<ic-select\n          label="What is your favourite coffee?"\n          searchable\n          debounce="300"\n          disable-filter\n          id="select-external-filtering"\n          timeout="1000"\n        ></ic-select>\n        <br />\n        <ic-typography>\n          Suggested search options: Espresso, Double Espresso, Flat White,\n          Filter, Cappuccino, Americano, Mocha, Macchiato.\n        </ic-typography>\n        <br />\n        <ic-typography>\n          The IcChange event will trigger 300ms after you finish typing. 1\n          second later, the options in the select menu will be updated.\n        </ic-typography>\n        <script>\n          var mockData = [\n            { label: "Espresso", value: "Esp" },\n            { label: "Double Espresso", value: "Dou" },\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          function handleFilter(event) {\n            var option = event.detail.value;\n            console.log(option);\n            if (option !== selectedValue) {\n              if (option) {\n                select.loading = true;\n                mockAPI = (query) => {\n                  filteredResults = mockData.filter((m) =>\n                    m.label.toLowerCase().includes(query.toLowerCase())\n                  );\n                  return new Promise((resolve) =>\n                    setTimeout(\n                      () => resolve(filteredResults),\n                      event.type === "icChange" ? 2000 : 900\n                    )\n                  );\n                };\n                mockAPI(option).then((results) => (select.options = results));\n              } else {\n                select.options = [];\n              }\n            }\n          }\n          var select = document.querySelector("#select-external-filtering");\n          var selectedValue = "";\n          select.addEventListener("icClear", function (event) {\n            select.options = [];\n          });\n          select.addEventListener("icOptionSelect", function (event) {\n            selectedValue = event.detail.value;\n          });\n          select.addEventListener("icChange", handleFilter);\n          select.addEventListener("icRetryLoad", handleFilter);\n        <\/script>`'},loki:{skip:!0}};const inForm=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
        <form>
          <ic-select
            id="select-form"
            label="What is your favourite coffee?"
            searchable
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
          ];
          select.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
          document.querySelector("form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            console.log(document.querySelector("input.ic-input").value);
          });
        </script>
      `;inForm.storyName="In form",inForm.parameters={storySource:{source:'args => html`\n        <form>\n          <ic-select\n            id="select-form"\n            label="What is your favourite coffee?"\n            searchable\n          ></ic-select>\n          <br />\n          <br />\n          <input type="submit" value="Submit" />\n          <input type="reset" value="Reset" />\n        </form>\n        <script>\n          var select = document.querySelector("#select-form");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n          document.querySelector("form").addEventListener("submit", (ev) => {\n            ev.preventDefault();\n            console.log(document.querySelector("input.ic-input").value);\n          });\n        <\/script>\n      `'},loki:{skip:!0}};const updateInputValueFromExternalRequest=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-section-container>
          <ic-select
            id="select-external-request"
            searchable
            label="What is your favourite coffee? (searchable)"
          ></ic-select>
        </ic-section-container>
        <script>
          const searchSelect = document.getElementById(
            "select-external-request"
          );
          let options = [];
          options.push({ label: "unknown", value: "unknown" });
          options.push({ label: "item 1", value: "item-1" });
          options.push({ label: "item 2", value: "item-2" });
          options.push({ label: "item 3", value: "item-3" });
          searchSelect.options = options;
          let searchoption = "";
          searchSelect.addEventListener("icChange", function (event) {
            console.log("icChange", event.detail.value);
            searchoption = event.detail.value;
            if (searchoption === "unknown") {
              searchoption = "item-1";
              searchSelect.value = "item-1";
            } else {
              searchSelect.value = searchoption;
            }
          });
          searchSelect.addEventListener("icOptionSelect", function (event) {
            console.log("icOptionSelect: " + event.detail.value);
          });
        </script>`;updateInputValueFromExternalRequest.storyName="Update input value from external request",updateInputValueFromExternalRequest.parameters={storySource:{source:'args => html`<ic-section-container>\n          <ic-select\n            id="select-external-request"\n            searchable\n            label="What is your favourite coffee? (searchable)"\n          ></ic-select>\n        </ic-section-container>\n        <script>\n          const searchSelect = document.getElementById(\n            "select-external-request"\n          );\n          let options = [];\n          options.push({ label: "unknown", value: "unknown" });\n          options.push({ label: "item 1", value: "item-1" });\n          options.push({ label: "item 2", value: "item-2" });\n          options.push({ label: "item 3", value: "item-3" });\n          searchSelect.options = options;\n          let searchoption = "";\n          searchSelect.addEventListener("icChange", function (event) {\n            console.log("icChange", event.detail.value);\n            searchoption = event.detail.value;\n            if (searchoption === "unknown") {\n              searchoption = "item-1";\n              searchSelect.value = "item-1";\n            } else {\n              searchSelect.value = searchoption;\n            }\n          });\n          searchSelect.addEventListener("icOptionSelect", function (event) {\n            console.log("icOptionSelect: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const emittingIcOptionSelectOnEnter=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-select
          id="select-icoptionselect"
          label="What is your favourite coffee?"
          select-on-enter
          searchable
        ></ic-select>
        <script>
          var select = document.querySelector("#select-icoptionselect");
          select.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          select.addEventListener("icOptionSelect", function (event) {
            console.log("icOptionSelect: " + event.detail.value);
          });
        </script>`;emittingIcOptionSelectOnEnter.storyName="Emitting icOptionSelect on enter",emittingIcOptionSelectOnEnter.parameters={storySource:{source:'args => html`<ic-select\n          id="select-icoptionselect"\n          label="What is your favourite coffee?"\n          select-on-enter\n          searchable\n        ></ic-select>\n        <script>\n          var select = document.querySelector("#select-icoptionselect");\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          select.addEventListener("icOptionSelect", function (event) {\n            console.log("icOptionSelect: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const playground=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <ic-select
          id="select-playground"
          disabled=${args.disabled}
          full-width=${args["full-width"]}
          helper-text=${args["helper-text"]}
          hide-label=${args["hide-label"]}
          include-descriptions-in-search=${args["include-descriptions-in-search"]}
          include-group-titles-in-search=${args["include-group-titles-in-search"]}
          loading=${args.loading}
          loading-label=${args["loading-label"]}
          label=${args.label}
          placeholder=${args.placeholder}
          readonly=${args.readonly}
          required=${args.required}
          search-match-position=${args["search-match-position"]}
          searchable
          size=${args.size}
          validation-status=${args["validation-status"]}
          validation-text=${args["validation-text"]}
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
        </script>`;playground.storyName="Playground",playground.argTypes={"search-match-position":{defaultValue:"anywhere",options:["anywhere","start"],control:{type:"inline-radio"}},"validation-status":{defaultValue:"",options:["","error","success","warning"],control:{type:"select"}},size:{options:["small","default","large"],control:{type:"inline-radio"}},showIcon:{control:{type:"boolean"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html` <ic-select\n          id="select-playground"\n          disabled=${args.disabled}\n          full-width=${args["full-width"]}\n          helper-text=${args["helper-text"]}\n          hide-label=${args["hide-label"]}\n          include-descriptions-in-search=${args["include-descriptions-in-search"]}\n          include-group-titles-in-search=${args["include-group-titles-in-search"]}\n          loading=${args.loading}\n          loading-label=${args["loading-label"]}\n          label=${args.label}\n          placeholder=${args.placeholder}\n          readonly=${args.readonly}\n          required=${args.required}\n          search-match-position=${args["search-match-position"]}\n          searchable\n          size=${args.size}\n          validation-status=${args["validation-status"]}\n          validation-text=${args["validation-text"]}\n        >\n          ${args.showIcon && html` <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0z" fill="none" />\n            <path\n              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n            />\n          </svg>`}\n        </ic-select>\n        <script>\n          var select = document.querySelector("#select-playground");\n          select.options = [\n            {\n              label: "Cappuccino",\n              value: "Cap",\n              description: "Coffee frothed up with pressurised steam",\n            },\n            {\n              label: "Boring",\n              children: [\n                {\n                  label: "Latte",\n                  value: "Lat",\n                  description: "A milkier coffee than a cappuccino",\n                },\n                {\n                  label: "Filter",\n                  value: "Fil",\n                  description: "Coffee filtered using paper or a mesh",\n                },\n              ],\n            },\n            {\n              label: "Fancy",\n              children: [\n                {\n                  label: "Flat white",\n                  value: "Fla",\n                  description:\n                    "Coffee without froth made with espresso and hot steamed milk",\n                },\n                {\n                  label: "Macchiato",\n                  value: "Mac",\n                  description:\n                    "Espresso coffee with a dash of frothy steamed milk",\n                },\n              ],\n            },\n            {\n              label: "Americano",\n              value: "Ame",\n              description: "Espresso coffee diluted with hot water",\n            },\n            {\n              label: "Mocha",\n              value: "Moc",\n              description: "A mixture of coffee and chocolate",\n            },\n          ];\n          select.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        <\/script>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Select/Searchable",tags:["stories-mdx"],includeStories:["defaultStory","asyncDefault","defaultValue","filterByStartOfOptions","withDescriptions","withDescriptionsIncludedInSearch","helperText","sizes","disabled","disabledOptions","hiddenLabel","required","groups","groupsGroupTitlesIncludedInSearch","recommended","validation","scrollBehaviour","externalFiltering","inForm","updateInputValueFromExternalRequest","emittingIcOptionSelectOnEnter","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","asyncDefault","defaultValue","filterByStartOfOptions","withDescriptions","withDescriptionsIncludedInSearch","helperText","sizes","disabled","disabledOptions","hiddenLabel","required","groups","groupsGroupTitlesIncludedInSearch","recommended","validation","scrollBehaviour","externalFiltering","inForm","updateInputValueFromExternalRequest","emittingIcOptionSelectOnEnter","playground"]}}]);
//# sourceMappingURL=components-ic-select-ic-select_(searchable)-stories-mdx.9d6cc1e9.iframe.bundle.js.map