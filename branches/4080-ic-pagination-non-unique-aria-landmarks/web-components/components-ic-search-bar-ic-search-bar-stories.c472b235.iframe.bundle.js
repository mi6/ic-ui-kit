/*! For license information please see components-ic-search-bar-ic-search-bar-stories.c472b235.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9603,582,6199,6763],{"./src/components/ic-search-bar/ic-search-bar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CharactersUntilSuggestion:()=>CharactersUntilSuggestion,Default:()=>Default,Disabled:()=>Disabled,EmptyOptionListText:()=>EmptyOptionListText,ExternalFiltering:()=>ExternalFiltering,ExternalFilteringWithCustomLoadingMessages:()=>ExternalFilteringWithCustomLoadingMessages,ExternalFilteringWithLoading:()=>ExternalFilteringWithLoading,FullWidth:()=>FullWidth,HelperText:()=>HelperText,HiddenLabel:()=>HiddenLabel,HintText:()=>HintText,InAForm:()=>InAForm,LongOptionLabels:()=>LongOptionLabels,Playground:()=>Playground,QuerySearchMode:()=>QuerySearchMode,Small:()=>Small,WithCustomLabelAndValueFields:()=>WithCustomLabelAndValueFields,WithOptions:()=>WithOptions,WithOptionsNoFiltering:()=>WithOptionsNoFiltering,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Search bar",component:"ic-search-bar"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar label="What is your favourite coffee?">
    </ic-search-bar>`,name:"Default"},Basic={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
      <script>
        document.querySelector("ic-search-bar").options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Ameno", value: "ameno" },
          { label: "Aicano", value: "acano" },
          { label: "Mocha", value: "mocha" },
        ];
      </script>`,name:"Basic"},WithCustomLabelAndValueFields={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="What is your favourite coffee?"
        label-field="urn"
        value-field="reference"
      ></ic-search-bar>
      <script>
        document.querySelector("ic-search-bar").options = [
          { urn: "Espresso", reference: "espresso" },
          { urn: "Double Espresso", reference: "doubleespresso" },
          { urn: "Flat White", reference: "flatwhite" },
          { urn: "Cappuccino", reference: "cappuccino" },
          { urn: "Americano", reference: "americano" },
          { urn: "Ameno", reference: "ameno" },
          { urn: "Aicano", reference: "acano" },
          { urn: "Mocha", reference: "mocha" },
        ];
      </script>`,name:"With custom label and value fields"},WithOptions={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="What is your favourite coffee?"
        value="Flat White"
      ></ic-search-bar>
      <br />
      <ic-typography
        >Suggested search options: Espresso, Double Espresso, Flat White,
        Cappuccino, Americano, Mocha</ic-typography
      >
      <script>
        document.querySelector("ic-search-bar").options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano", disabled: true },
          { label: "Cafe au lait", value: "cafe" },
          { label: "Mocha", value: "mocha" },
        ];
      </script>`,name:"With options"},WithOptionsNoFiltering={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="What is your favourite coffee?"
        disable-auto-filtering
      ></ic-search-bar>
      <br />
      <ic-typography> All options will be displayed as you type </ic-typography>
      <script>
        document.querySelector("ic-search-bar").options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano", disabled: true },
          { label: "Mocha", value: "mocha" },
        ];
      </script>`,name:"With options (no filtering)"},InAForm={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <form>
      <ic-search-bar
        name="search-01"
        label="What is your favourite coffee?"
      ></ic-search-bar>
    </form>`,name:"In a form"},HelperText={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="What is your favourite coffee?"
        helper-text="Some helper text"
      ></ic-search-bar>
      <br />
      <ic-search-bar label="What is your favourite coffee?"
        ><ic-typography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography></ic-search-bar
      >
      <script>
        document.querySelectorAll("ic-search-bar").forEach(
          (el) =>
            (el.options = [
              { label: "Espresso", value: "espresso" },
              { label: "Double Espresso", value: "doubleespresso" },
              { label: "Flat White", value: "flatwhite" },
              { label: "Cappuccino", value: "cappuccino" },
              { label: "Americano", value: "americano" },
              { label: "Mocha", value: "mocha" },
            ])
        );
      </script>`,name:"Helper text"},Small={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
      label="What is your favourite coffee?"
      size="small"
    ></ic-search-bar>`,name:"Small"},HiddenLabel={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
      label="What is your favourite coffee?"
      hide-label
    ></ic-search-bar>`,name:"Hidden label"},Disabled={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
      label="What is your favourite coffee?"
      disabled
    ></ic-search-bar>`,name:"Disabled"},FullWidth={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="What is your favourite coffee?"
        full-width
        id="search2"
      ></ic-search-bar>
      <br />
      <ic-typography
        >Suggested search options: Espresso, Double Espresso, Flat White,
        Cappuccino, Americano, Mocha</ic-typography
      >
      <script>
        document.querySelector("#search2").options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Mocha", value: "mocha" },
        ];
      </script>`,name:"Full width"},ExternalFiltering={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="Search for coffee"
        placeholder="Type to search"
        debounce="300"
        disable-auto-filtering="true"
        id="external-filter-search"
      ></ic-search-bar>
      <br />
      <ic-typography
        >Suggested search options: Espresso, Double Espresso, Flat White,
        Cappuccino, Americano, Mocha</ic-typography
      >
      <br />
      <ic-typography
        >The IcChange event will trigger 300ms after you finish
        typing.</ic-typography
      >
      <script>
        var mockData = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Mocha", value: "mocha" },
        ];
        var select = document.querySelector("#external-filter-search");
        var optionSelected = false;
        function handleFilter(event) {
          query = event.detail.value;
          if (query !== optionSelected) {
            if (query.length > 1) {
              optionSelected = false;
              mockAPI = (query) => {
                filteredResults = mockData.filter((m) =>
                  m.label.toLowerCase().includes(query.toLowerCase())
                );
                return new Promise((resolve) =>
                  setTimeout(
                    () => resolve(filteredResults),
                    event.type === "icChange" ? 2000 : 1000
                  )
                );
              };
              mockAPI(query).then((results) => (select.options = results));
            } else {
              select.options = [];
            }
          }
          optionSelected = "";
        }
        function handleSelect(event) {
          optionSelected = true;
        }
        select.addEventListener("icOptionSelect", handleSelect);
        select.addEventListener("icChange", handleFilter);
        select.addEventListener("icRetryLoad", handleFilter);
      </script>`,name:"External filtering"},ExternalFilteringWithLoading={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="Search for coffee"
        placeholder="Type to search"
        debounce="300"
        disable-auto-filtering="true"
        id="external-filter-search"
        timeout="1000"
      ></ic-search-bar>
      <br />
      <ic-typography
        >Suggested search options: Espresso, Double Espresso, Flat White,
        Cappuccino, Americano, Mocha</ic-typography
      >
      <br />
      <ic-typography
        >The IcChange event will trigger 300ms after you finish typing. 1 second
        later, the options in the searchbar menu will be updated.</ic-typography
      >
      <script>
        var mockData = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Mocha", value: "mocha" },
        ];
        var select = document.querySelector("#external-filter-search");
        var optionSelected = false;
        function handleFilter(event) {
          query = event.detail.value;
          if (query !== optionSelected) {
            if (query.length > 1) {
              if (!optionSelected) {
                select.loading = true;
              }
              optionSelected = false;
              mockAPI = (query) => {
                filteredResults = mockData.filter((m) =>
                  m.label.toLowerCase().includes(query.toLowerCase())
                );
                return new Promise((resolve) =>
                  setTimeout(
                    () => resolve(filteredResults),
                    event.type === "icChange" ? 2000 : 1000
                  )
                );
              };
              mockAPI(query).then((results) => (select.options = results));
            } else {
              select.options = [];
            }
          }
          optionSelected = "";
        }
        function handleSelect(event) {
          optionSelected = true;
        }
        select.addEventListener("icOptionSelect", handleSelect);
        select.addEventListener("icChange", handleFilter);
        select.addEventListener("icRetryLoad", handleFilter);
      </script>`,name:"External filtering with loading"},ExternalFilteringWithCustomLoadingMessages={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="Search for coffee"
        placeholder="Type to search"
        debounce="300"
        disable-auto-filtering="true"
        id="external-filter-search"
        timeout="1000"
        loading-label="Loading time"
        loading-error-label="Oops error"
      ></ic-search-bar>
      <br />
      <ic-typography
        >Suggested search options: Espresso, Double Espresso, Flat White,
        Cappuccino, Americano, Mocha</ic-typography
      >
      <br />
      <ic-typography
        >The IcChange event will trigger 300ms after you finish typing. 1 second
        later, the options in the searchbar menu will be updated.</ic-typography
      >
      <script>
        var mockData = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Mocha", value: "mocha" },
        ];
        var select = document.querySelector("#external-filter-search");
        var optionSelected = false;
        function handleFilter(event) {
          query = event.detail.value;
          if (query !== optionSelected) {
            if (query.length > 1) {
              if (!optionSelected) {
                select.loading = true;
              }
              optionSelected = false;
              mockAPI = (query) => {
                filteredResults = mockData.filter((m) =>
                  m.label.toLowerCase().includes(query.toLowerCase())
                );
                return new Promise((resolve) =>
                  setTimeout(
                    () => resolve(filteredResults),
                    event.type === "icChange" ? 2000 : 1000
                  )
                );
              };
              mockAPI(query).then((results) => (select.options = results));
            } else {
              select.options = [];
            }
          }
          optionSelected = "";
        }
        function handleSelect(event) {
          optionSelected = true;
        }
        select.addEventListener("icOptionSelect", handleSelect);
        select.addEventListener("icChange", handleFilter);
        select.addEventListener("icRetryLoad", handleFilter);
      </script>`,name:"External filtering with custom loading messages"},QuerySearchMode={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="What is your favourite coffee?"
        search-mode="query"
      >
      </ic-search-bar>
      <script>
        document.querySelector("ic-search-bar").options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Mocha", value: "mocha" },
        ];
      </script>`,name:"Query search mode"},EmptyOptionListText={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="What is your favourite coffee?"
        empty-option-list-text="There's nothing here"
      >
      </ic-search-bar>
      <script>
        document.querySelector("ic-search-bar").options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Mocha", value: "mocha" },
        ];
      </script>`,name:"Empty option list text"},CharactersUntilSuggestion={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="What is your favourite coffee?"
        characters-until-suggestion="5"
      >
      </ic-search-bar>
      <script>
        document.querySelector("ic-search-bar").options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Mocha", value: "mocha" },
        ];
      </script>`,name:"Characters until suggestion"},HintText={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar
        label="What is your favourite coffee?"
        assistive-hint-text="You can use up and down arrows to navigate the options when they are available, and press enter to select an option."
      ></ic-search-bar>
      <script>
        document.querySelector("ic-search-bar").options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Ameno", value: "ameno" },
          { label: "Aicano", value: "acano" },
          { label: "Mocha", value: "mocha" },
        ];
      </script>`,name:"Hint text"},LongOptionLabels={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
      <script>
        document.querySelector("ic-search-bar").options = [
          {
            label: "Espresso because it tastes like coffee",
            value: "espresso",
          },
          {
            label:
              "Double Espresso because it tastes like double the amount of coffee",
            value: "doubleespresso",
          },
          {
            label: "Reallylongonewordanswerthatcouldbethenameofacoffee",
            value: "flatwhite",
          },
        ];
      </script>`,name:"Long option labels"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-search-bar
        autocapitalize=${args.autocapitalize}
        autocorrect=${args.autocorrect}
        autofocus=${args.autofocus}
        characters-until-suggestion=${args.charactersUntilSuggestion}
        disable-auto-filtering=${args.disableAutoFiltering}
        disabled=${args.disabled}
        focus-on-load=${args.focusOnLoad}
        full-width=${args.fullWidth}
        helper-text=${args.helperText}
        hide-label=${args.hideLabel}
        label=${args.label}
        loading=${args.loading}
        placeholder=${args.placeholder}
      ></ic-search-bar>
      <script>
        document.querySelector("ic-search-bar").options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Mocha", value: "mocha" },
        ];
      </script>`,args:{autocapitalize:"off",autocorrect:"off",autofocus:!1,charactersUntilSuggestion:2,disableAutoFiltering:!1,disabled:!1,focusOnLoad:!0,fullWidth:!1,helperText:"",hideLabel:!1,label:"What is your favourite coffee?",loading:!1,placeholder:"Search",readonly:!1,required:!1,size:"medium",spellcheck:!1,theme:"inherit"},argTypes:{autocapitalize:{options:["off","none","on","sentences","words","characters"],control:{type:"select"}},autocorrect:{options:["on","off"],control:{type:"inline-radio"}},size:{options:["medium","small"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","Basic","WithCustomLabelAndValueFields","WithOptions","WithOptionsNoFiltering","InAForm","HelperText","Small","HiddenLabel","Disabled","FullWidth","ExternalFiltering","ExternalFilteringWithLoading","ExternalFilteringWithCustomLoadingMessages","QuerySearchMode","EmptyOptionListText","CharactersUntilSuggestion","HintText","LongOptionLabels","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar label="What is your favourite coffee?">\n    </ic-search-bar>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>\n      <script>\n        document.querySelector("ic-search-bar").options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Ameno", value: "ameno" },\n          { label: "Aicano", value: "acano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n      <\/script>`,\n  name: "Basic"\n}',...Basic.parameters?.docs?.source}}},WithCustomLabelAndValueFields.parameters={...WithCustomLabelAndValueFields.parameters,docs:{...WithCustomLabelAndValueFields.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        label-field="urn"\n        value-field="reference"\n      ></ic-search-bar>\n      <script>\n        document.querySelector("ic-search-bar").options = [\n          { urn: "Espresso", reference: "espresso" },\n          { urn: "Double Espresso", reference: "doubleespresso" },\n          { urn: "Flat White", reference: "flatwhite" },\n          { urn: "Cappuccino", reference: "cappuccino" },\n          { urn: "Americano", reference: "americano" },\n          { urn: "Ameno", reference: "ameno" },\n          { urn: "Aicano", reference: "acano" },\n          { urn: "Mocha", reference: "mocha" },\n        ];\n      <\/script>`,\n  name: "With custom label and value fields"\n}',...WithCustomLabelAndValueFields.parameters?.docs?.source}}},WithOptions.parameters={...WithOptions.parameters,docs:{...WithOptions.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        value="Flat White"\n      ></ic-search-bar>\n      <br />\n      <ic-typography\n        >Suggested search options: Espresso, Double Espresso, Flat White,\n        Cappuccino, Americano, Mocha</ic-typography\n      >\n      <script>\n        document.querySelector("ic-search-bar").options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano", disabled: true },\n          { label: "Cafe au lait", value: "cafe" },\n          { label: "Mocha", value: "mocha" },\n        ];\n      <\/script>`,\n  name: "With options"\n}',...WithOptions.parameters?.docs?.source}}},WithOptionsNoFiltering.parameters={...WithOptionsNoFiltering.parameters,docs:{...WithOptionsNoFiltering.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        disable-auto-filtering\n      ></ic-search-bar>\n      <br />\n      <ic-typography> All options will be displayed as you type </ic-typography>\n      <script>\n        document.querySelector("ic-search-bar").options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano", disabled: true },\n          { label: "Mocha", value: "mocha" },\n        ];\n      <\/script>`,\n  name: "With options (no filtering)"\n}',...WithOptionsNoFiltering.parameters?.docs?.source}}},InAForm.parameters={...InAForm.parameters,docs:{...InAForm.parameters?.docs,source:{originalSource:'{\n  render: () => html` <form>\n      <ic-search-bar\n        name="search-01"\n        label="What is your favourite coffee?"\n      ></ic-search-bar>\n    </form>`,\n  name: "In a form"\n}',...InAForm.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        helper-text="Some helper text"\n      ></ic-search-bar>\n      <br />\n      <ic-search-bar label="What is your favourite coffee?"\n        ><ic-typography variant="caption" slot="helper-text">\n          <span>\n            Slotted helper text with a <ic-link href="#">link</ic-link>\n          </span>\n        </ic-typography></ic-search-bar\n      >\n      <script>\n        document.querySelectorAll("ic-search-bar").forEach(\n          (el) =>\n            (el.options = [\n              { label: "Espresso", value: "espresso" },\n              { label: "Double Espresso", value: "doubleespresso" },\n              { label: "Flat White", value: "flatwhite" },\n              { label: "Cappuccino", value: "cappuccino" },\n              { label: "Americano", value: "americano" },\n              { label: "Mocha", value: "mocha" },\n            ])\n        );\n      <\/script>`,\n  name: "Helper text"\n}',...HelperText.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n      label="What is your favourite coffee?"\n      size="small"\n    ></ic-search-bar>`,\n  name: "Small"\n}',...Small.parameters?.docs?.source}}},HiddenLabel.parameters={...HiddenLabel.parameters,docs:{...HiddenLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n      label="What is your favourite coffee?"\n      hide-label\n    ></ic-search-bar>`,\n  name: "Hidden label"\n}',...HiddenLabel.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n      label="What is your favourite coffee?"\n      disabled\n    ></ic-search-bar>`,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        full-width\n        id="search2"\n      ></ic-search-bar>\n      <br />\n      <ic-typography\n        >Suggested search options: Espresso, Double Espresso, Flat White,\n        Cappuccino, Americano, Mocha</ic-typography\n      >\n      <script>\n        document.querySelector("#search2").options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n      <\/script>`,\n  name: "Full width"\n}',...FullWidth.parameters?.docs?.source}}},ExternalFiltering.parameters={...ExternalFiltering.parameters,docs:{...ExternalFiltering.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="Search for coffee"\n        placeholder="Type to search"\n        debounce="300"\n        disable-auto-filtering="true"\n        id="external-filter-search"\n      ></ic-search-bar>\n      <br />\n      <ic-typography\n        >Suggested search options: Espresso, Double Espresso, Flat White,\n        Cappuccino, Americano, Mocha</ic-typography\n      >\n      <br />\n      <ic-typography\n        >The IcChange event will trigger 300ms after you finish\n        typing.</ic-typography\n      >\n      <script>\n        var mockData = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n        var select = document.querySelector("#external-filter-search");\n        var optionSelected = false;\n        function handleFilter(event) {\n          query = event.detail.value;\n          if (query !== optionSelected) {\n            if (query.length > 1) {\n              optionSelected = false;\n              mockAPI = (query) => {\n                filteredResults = mockData.filter((m) =>\n                  m.label.toLowerCase().includes(query.toLowerCase())\n                );\n                return new Promise((resolve) =>\n                  setTimeout(\n                    () => resolve(filteredResults),\n                    event.type === "icChange" ? 2000 : 1000\n                  )\n                );\n              };\n              mockAPI(query).then((results) => (select.options = results));\n            } else {\n              select.options = [];\n            }\n          }\n          optionSelected = "";\n        }\n        function handleSelect(event) {\n          optionSelected = true;\n        }\n        select.addEventListener("icOptionSelect", handleSelect);\n        select.addEventListener("icChange", handleFilter);\n        select.addEventListener("icRetryLoad", handleFilter);\n      <\/script>`,\n  name: "External filtering"\n}',...ExternalFiltering.parameters?.docs?.source}}},ExternalFilteringWithLoading.parameters={...ExternalFilteringWithLoading.parameters,docs:{...ExternalFilteringWithLoading.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="Search for coffee"\n        placeholder="Type to search"\n        debounce="300"\n        disable-auto-filtering="true"\n        id="external-filter-search"\n        timeout="1000"\n      ></ic-search-bar>\n      <br />\n      <ic-typography\n        >Suggested search options: Espresso, Double Espresso, Flat White,\n        Cappuccino, Americano, Mocha</ic-typography\n      >\n      <br />\n      <ic-typography\n        >The IcChange event will trigger 300ms after you finish typing. 1 second\n        later, the options in the searchbar menu will be updated.</ic-typography\n      >\n      <script>\n        var mockData = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n        var select = document.querySelector("#external-filter-search");\n        var optionSelected = false;\n        function handleFilter(event) {\n          query = event.detail.value;\n          if (query !== optionSelected) {\n            if (query.length > 1) {\n              if (!optionSelected) {\n                select.loading = true;\n              }\n              optionSelected = false;\n              mockAPI = (query) => {\n                filteredResults = mockData.filter((m) =>\n                  m.label.toLowerCase().includes(query.toLowerCase())\n                );\n                return new Promise((resolve) =>\n                  setTimeout(\n                    () => resolve(filteredResults),\n                    event.type === "icChange" ? 2000 : 1000\n                  )\n                );\n              };\n              mockAPI(query).then((results) => (select.options = results));\n            } else {\n              select.options = [];\n            }\n          }\n          optionSelected = "";\n        }\n        function handleSelect(event) {\n          optionSelected = true;\n        }\n        select.addEventListener("icOptionSelect", handleSelect);\n        select.addEventListener("icChange", handleFilter);\n        select.addEventListener("icRetryLoad", handleFilter);\n      <\/script>`,\n  name: "External filtering with loading"\n}',...ExternalFilteringWithLoading.parameters?.docs?.source}}},ExternalFilteringWithCustomLoadingMessages.parameters={...ExternalFilteringWithCustomLoadingMessages.parameters,docs:{...ExternalFilteringWithCustomLoadingMessages.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="Search for coffee"\n        placeholder="Type to search"\n        debounce="300"\n        disable-auto-filtering="true"\n        id="external-filter-search"\n        timeout="1000"\n        loading-label="Loading time"\n        loading-error-label="Oops error"\n      ></ic-search-bar>\n      <br />\n      <ic-typography\n        >Suggested search options: Espresso, Double Espresso, Flat White,\n        Cappuccino, Americano, Mocha</ic-typography\n      >\n      <br />\n      <ic-typography\n        >The IcChange event will trigger 300ms after you finish typing. 1 second\n        later, the options in the searchbar menu will be updated.</ic-typography\n      >\n      <script>\n        var mockData = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n        var select = document.querySelector("#external-filter-search");\n        var optionSelected = false;\n        function handleFilter(event) {\n          query = event.detail.value;\n          if (query !== optionSelected) {\n            if (query.length > 1) {\n              if (!optionSelected) {\n                select.loading = true;\n              }\n              optionSelected = false;\n              mockAPI = (query) => {\n                filteredResults = mockData.filter((m) =>\n                  m.label.toLowerCase().includes(query.toLowerCase())\n                );\n                return new Promise((resolve) =>\n                  setTimeout(\n                    () => resolve(filteredResults),\n                    event.type === "icChange" ? 2000 : 1000\n                  )\n                );\n              };\n              mockAPI(query).then((results) => (select.options = results));\n            } else {\n              select.options = [];\n            }\n          }\n          optionSelected = "";\n        }\n        function handleSelect(event) {\n          optionSelected = true;\n        }\n        select.addEventListener("icOptionSelect", handleSelect);\n        select.addEventListener("icChange", handleFilter);\n        select.addEventListener("icRetryLoad", handleFilter);\n      <\/script>`,\n  name: "External filtering with custom loading messages"\n}',...ExternalFilteringWithCustomLoadingMessages.parameters?.docs?.source}}},QuerySearchMode.parameters={...QuerySearchMode.parameters,docs:{...QuerySearchMode.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        search-mode="query"\n      >\n      </ic-search-bar>\n      <script>\n        document.querySelector("ic-search-bar").options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n      <\/script>`,\n  name: "Query search mode"\n}',...QuerySearchMode.parameters?.docs?.source}}},EmptyOptionListText.parameters={...EmptyOptionListText.parameters,docs:{...EmptyOptionListText.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        empty-option-list-text="There\'s nothing here"\n      >\n      </ic-search-bar>\n      <script>\n        document.querySelector("ic-search-bar").options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n      <\/script>`,\n  name: "Empty option list text"\n}',...EmptyOptionListText.parameters?.docs?.source}}},CharactersUntilSuggestion.parameters={...CharactersUntilSuggestion.parameters,docs:{...CharactersUntilSuggestion.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        characters-until-suggestion="5"\n      >\n      </ic-search-bar>\n      <script>\n        document.querySelector("ic-search-bar").options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n      <\/script>`,\n  name: "Characters until suggestion"\n}',...CharactersUntilSuggestion.parameters?.docs?.source}}},HintText.parameters={...HintText.parameters,docs:{...HintText.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar\n        label="What is your favourite coffee?"\n        assistive-hint-text="You can use up and down arrows to navigate the options when they are available, and press enter to select an option."\n      ></ic-search-bar>\n      <script>\n        document.querySelector("ic-search-bar").options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Ameno", value: "ameno" },\n          { label: "Aicano", value: "acano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n      <\/script>`,\n  name: "Hint text"\n}',...HintText.parameters?.docs?.source}}},LongOptionLabels.parameters={...LongOptionLabels.parameters,docs:{...LongOptionLabels.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>\n      <script>\n        document.querySelector("ic-search-bar").options = [\n          {\n            label: "Espresso because it tastes like coffee",\n            value: "espresso",\n          },\n          {\n            label:\n              "Double Espresso because it tastes like double the amount of coffee",\n            value: "doubleespresso",\n          },\n          {\n            label: "Reallylongonewordanswerthatcouldbethenameofacoffee",\n            value: "flatwhite",\n          },\n        ];\n      <\/script>`,\n  name: "Long option labels"\n}',...LongOptionLabels.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-search-bar\n        autocapitalize=${args.autocapitalize}\n        autocorrect=${args.autocorrect}\n        autofocus=${args.autofocus}\n        characters-until-suggestion=${args.charactersUntilSuggestion}\n        disable-auto-filtering=${args.disableAutoFiltering}\n        disabled=${args.disabled}\n        focus-on-load=${args.focusOnLoad}\n        full-width=${args.fullWidth}\n        helper-text=${args.helperText}\n        hide-label=${args.hideLabel}\n        label=${args.label}\n        loading=${args.loading}\n        placeholder=${args.placeholder}\n      ></ic-search-bar>\n      <script>\n        document.querySelector("ic-search-bar").options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n      <\/script>`,\n  args: defaultArgs,\n  argTypes: {\n    autocapitalize: {\n      options: ["off", "none", "on", "sentences", "words", "characters"],\n      control: {\n        type: "select"\n      }\n    },\n    autocorrect: {\n      options: ["on", "off"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    size: {\n      options: ["medium", "small"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-search-bar-ic-search-bar-stories.c472b235.iframe.bundle.js.map