"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7620],{"./src/components/ic-select/ic-select_(searchable).stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsyncDefault:()=>AsyncDefault,Default:()=>Default,DefaultValue:()=>DefaultValue,Disabled:()=>Disabled,DisabledOptions:()=>DisabledOptions,EmittingIcOptionSelectOnEnter:()=>EmittingIcOptionSelectOnEnter,ExternalFiltering:()=>ExternalFiltering,FilterByStartOfOptions:()=>FilterByStartOfOptions,Groups:()=>Groups,GroupsGroupTitlesIncludedInSearch:()=>GroupsGroupTitlesIncludedInSearch,HelperText:()=>HelperText,HiddenLabel:()=>HiddenLabel,InForm:()=>InForm,Playground:()=>Playground,Recommended:()=>Recommended,Required:()=>Required,ScrollBehaviour:()=>ScrollBehaviour,Sizes:()=>Sizes,UpdateInputValueFromExternalRequest:()=>UpdateInputValueFromExternalRequest,Validation:()=>Validation,WithDescriptions:()=>WithDescriptions,WithDescriptionsIncludedInSearch:()=>WithDescriptionsIncludedInSearch,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Select/Searchable",component:"ic-select"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Default"},AsyncDefault={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Async default"},DefaultValue={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Default value"},FilterByStartOfOptions={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Filter by start of options"},WithDescriptions={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
            description:
              "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
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
      </script>`,name:"With descriptions"},WithDescriptionsIncludedInSearch={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
            description:
              "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
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
      </script>`,name:"With descriptions (included in search)"},HelperText={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        label="What is your favourite coffee?"
        searchable
        helper-text="Select one option from the list"
      ></ic-select>
      <br />
      <ic-select label="What is your favourite coffee?" searchable
        ><ic-typography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography></ic-select
      >
      <script>
        document.querySelectorAll("ic-select").forEach((el) => {
          el.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
            { label: "Filter", value: "Fil" },
            { label: "Flat white", value: "Fla" },
            { label: "Mocha", value: "Moc" },
            { label: "Macchiato", value: "Mac" },
          ];
          el.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        });
      </script>`,name:"Helper text"},Sizes={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: flex; flex-direction: column; gap: 16px;">
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
        id="select-size-medium"
        label="What is your favourite coffee?"
        searchable
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
    </div>`,name:"Sizes"},Disabled={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Disabled"},DisabledOptions={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Disabled options"},HiddenLabel={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Hidden label"},Required={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Required"},Groups={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Groups"},GroupsGroupTitlesIncludedInSearch={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Groups (group titles included in search)"},Recommended={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Recommended"},Validation={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Validation"},ScrollBehaviour={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Scroll behaviour"},ExternalFiltering={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        label="What is your favourite coffee?"
        searchable
        debounce="300"
        disable-auto-filtering
        id="select-external-filtering"
        timeout="1000"
      ></ic-select>
      <br />
      <ic-typography>
        Suggested search options: Espresso, Double Espresso, Flat White, Filter,
        Cappuccino, Americano, Mocha, Macchiato.
      </ic-typography>
      <br />
      <ic-typography>
        The IcChange event will trigger 300ms after you finish typing. 1 second
        later, the options in the select menu will be updated.
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
                    event.type === "icInput" ? 2000 : 900
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
        select.addEventListener("icInput", handleFilter);
        select.addEventListener("icRetryLoad", handleFilter);
      </script>`,name:"External filtering"},InForm={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"In form"},UpdateInputValueFromExternalRequest={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-section-container>
        <ic-select
          id="select-external-request"
          searchable
          label="What is your favourite coffee? (searchable)"
        ></ic-select>
      </ic-section-container>
      <script>
        const searchSelect = document.getElementById("select-external-request");
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
      </script>`,name:"Update input value from external request"},EmittingIcOptionSelectOnEnter={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
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
      </script>`,name:"Emitting icOptionSelect on enter"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-select
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
        validation-aria-live=${args.validationAriaLive}
        validation-status=${"no status"===args.validationStatus?"":args.validationStatus}
        validation-text=${args["validation-text"]}
        theme=${args.theme}
      >
        ${args.showIcon&&lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
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
            description:
              "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
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
      </script>`,name:"Playground",args:{disabled:!1,"full-width":!1,"helper-text":"Select one option from the list","hide-label":!1,loading:!1,loadingLabel:"Loading...",label:"What is your favourite coffee?",placeholder:"Select an option",readonly:!1,required:!1,size:"medium",validationAriaLive:"polite",validationStatus:"no status","validation-text":"","include-descriptions-in-search":!1,"include-group-titles-in-search":!1,"search-match-position":"anywhere",theme:"inherit"},argTypes:{"search-match-position":{defaultValue:"anywhere",options:["anywhere","start"],control:{type:"inline-radio"}},validationAriaLive:{options:["polite","assertive","off"],control:{type:"inline-radio"}},validationStatus:{defaultValue:"no status",options:["no status","error","success","warning"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},showIcon:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}},__namedExportsOrder=["Default","AsyncDefault","DefaultValue","FilterByStartOfOptions","WithDescriptions","WithDescriptionsIncludedInSearch","HelperText","Sizes","Disabled","DisabledOptions","HiddenLabel","Required","Groups","GroupsGroupTitlesIncludedInSearch","Recommended","Validation","ScrollBehaviour","ExternalFiltering","InForm","UpdateInputValueFromExternalRequest","EmittingIcOptionSelectOnEnter","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-default"\n        label="What is your favourite coffee?"\n        searchable\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-default");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icInput", function (event) {\n          console.log("icInput: " + event.detail.value);\n        });\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n        select.addEventListener("icOptionSelect", function (event) {\n          console.log("icOptionSelect: " + event.detail.value);\n        });\n        select.addEventListener("icOpen", function () {\n          console.log("select dropdown opened");\n        });\n        select.addEventListener("icClose", function () {\n          console.log("select dropdown closed");\n        });\n      <\/script>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},AsyncDefault.parameters={...AsyncDefault.parameters,docs:{...AsyncDefault.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-async"\n        label="What is your favourite coffee?"\n        searchable\n        loading\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-async");\n        select.options = [];\n        setTimeout(() => {\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n        }, 5000);\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Async default"\n}',...AsyncDefault.parameters?.docs?.source}}},DefaultValue.parameters={...DefaultValue.parameters,docs:{...DefaultValue.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-default-value"\n        label="What is your favourite coffee?"\n        searchable\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-default-value");\n        select.value = "Lat";\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Default value"\n}',...DefaultValue.parameters?.docs?.source}}},FilterByStartOfOptions.parameters={...FilterByStartOfOptions.parameters,docs:{...FilterByStartOfOptions.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-filter-start"\n        label="What is your favourite coffee?"\n        searchable\n        search-match-position="start"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-filter-start");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Filter by start of options"\n}',...FilterByStartOfOptions.parameters?.docs?.source}}},WithDescriptions.parameters={...WithDescriptions.parameters,docs:{...WithDescriptions.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-descriptions"\n        label="What is your favourite coffee?"\n        searchable\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-descriptions");\n        select.options = [\n          {\n            label: "Cappuccino",\n            value: "Cap",\n            description:\n              "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",\n          },\n          {\n            label: "Latte",\n            value: "Lat",\n            description: "A milkier coffee than a cappuccino",\n          },\n          {\n            label: "Americano",\n            value: "Ame",\n            description: "Espresso coffee diluted with hot water",\n          },\n          {\n            label: "Filter",\n            value: "Fil",\n            description: "Coffee filtered using paper or a mesh",\n          },\n          {\n            label: "Flat white",\n            value: "Fla",\n            description:\n              "Coffee without froth made with espresso and hot steamed milk",\n          },\n          {\n            label: "Mocha",\n            value: "Moc",\n            description: "A mixture of coffee and chocolate",\n          },\n          {\n            label: "Macchiato",\n            value: "Mac",\n            description: "Espresso coffee with a dash of frothy steamed milk",\n          },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "With descriptions"\n}',...WithDescriptions.parameters?.docs?.source}}},WithDescriptionsIncludedInSearch.parameters={...WithDescriptionsIncludedInSearch.parameters,docs:{...WithDescriptionsIncludedInSearch.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-descriptions-included"\n        label="What is your favourite coffee?"\n        searchable\n        include-descriptions-in-search\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-descriptions-included");\n        select.options = [\n          {\n            label: "Cappuccino",\n            value: "Cap",\n            description:\n              "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",\n          },\n          {\n            label: "Latte",\n            value: "Lat",\n            description: "A milkier coffee than a cappuccino",\n          },\n          {\n            label: "Americano",\n            value: "Ame",\n            description: "Espresso coffee diluted with hot water",\n          },\n          {\n            label: "Filter",\n            value: "Fil",\n            description: "Coffee filtered using paper or a mesh",\n          },\n          {\n            label: "Flat white",\n            value: "Fla",\n            description:\n              "Coffee without froth made with espresso and hot steamed milk",\n          },\n          {\n            label: "Mocha",\n            value: "Moc",\n            description: "A mixture of coffee and chocolate",\n          },\n          {\n            label: "Macchiato",\n            value: "Mac",\n            description: "Espresso coffee with a dash of frothy steamed milk",\n          },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "With descriptions (included in search)"\n}',...WithDescriptionsIncludedInSearch.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        label="What is your favourite coffee?"\n        searchable\n        helper-text="Select one option from the list"\n      ></ic-select>\n      <br />\n      <ic-select label="What is your favourite coffee?" searchable\n        ><ic-typography variant="caption" slot="helper-text">\n          <span>\n            Slotted helper text with a <ic-link href="#">link</ic-link>\n          </span>\n        </ic-typography></ic-select\n      >\n      <script>\n        document.querySelectorAll("ic-select").forEach((el) => {\n          el.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n          el.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        });\n      <\/script>`,\n  name: "Helper text"\n}',...HelperText.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="display: flex; flex-direction: column; gap: 16px;">\n      <ic-select\n        id="select-size-small"\n        label="What is your favourite coffee?"\n        searchable\n        size="small"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-size-small");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>\n      <ic-select\n        id="select-size-medium"\n        label="What is your favourite coffee?"\n        searchable\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-size-medium");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>\n      <ic-select\n        id="select-size-large"\n        label="What is your favourite coffee?"\n        searchable\n        size="large"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-size-large");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>\n    </div>`,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-disabled"\n        label="What is your favourite coffee?"\n        searchable\n        disabled\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-disabled");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},DisabledOptions.parameters={...DisabledOptions.parameters,docs:{...DisabledOptions.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-disabled-options"\n        label="What is your favourite coffee?"\n        searchable\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-disabled-options");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame", disabled: true },\n          { label: "Filter", value: "Fil", disabled: true },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac", disabled: true },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Disabled options"\n}',...DisabledOptions.parameters?.docs?.source}}},HiddenLabel.parameters={...HiddenLabel.parameters,docs:{...HiddenLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-hidden-label"\n        label="What is your favourite coffee?"\n        searchable\n        hide-label\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-hidden-label");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Hidden label"\n}',...HiddenLabel.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-required"\n        label="What is your favourite coffee?"\n        searchable\n        required\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-required");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Required"\n}',...Required.parameters?.docs?.source}}},Groups.parameters={...Groups.parameters,docs:{...Groups.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-groups"\n        label="What is your favourite coffee?"\n        searchable\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-groups");\n        select.options = [\n          {\n            label: "Fancy",\n            children: [\n              { label: "Cappuccino", value: "Cap" },\n              { label: "Flat white", value: "Fla" },\n            ],\n          },\n          {\n            label: "Boring",\n            children: [\n              { label: "Filter", value: "Fil" },\n              { label: "Latte", value: "Lat" },\n            ],\n          },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Groups"\n}',...Groups.parameters?.docs?.source}}},GroupsGroupTitlesIncludedInSearch.parameters={...GroupsGroupTitlesIncludedInSearch.parameters,docs:{...GroupsGroupTitlesIncludedInSearch.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-groups-included"\n        label="What is your favourite coffee?"\n        searchable\n        include-group-titles-in-search\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-groups-included");\n        select.options = [\n          {\n            label: "Fancy",\n            children: [\n              { label: "Cappuccino", value: "Cap" },\n              { label: "Flat white", value: "Fla" },\n            ],\n          },\n          {\n            label: "Boring",\n            children: [\n              { label: "Filter", value: "Fil" },\n              { label: "Latte", value: "Lat" },\n            ],\n          },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Groups (group titles included in search)"\n}',...GroupsGroupTitlesIncludedInSearch.parameters?.docs?.source}}},Recommended.parameters={...Recommended.parameters,docs:{...Recommended.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-recommended"\n        label="What is your favourite coffee?"\n        searchable\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-recommended");\n        select.options = [\n          { label: "Cappuccino", value: "Cappuccino" },\n          { label: "Flat white", value: "Flat white", recommended: true },\n          { label: "Latte", value: "Latte" },\n          { label: "Americano", value: "Americano", recommended: true },\n          { label: "Filter", value: "Fil" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Recommended"\n}',...Recommended.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-success"\n        label="What is your favourite coffee?"\n        validation-status="success"\n        validation-text="Coffee available"\n        searchable\n      ></ic-select>\n      <script>\n        var select1 = document.querySelector("#select-success");\n        var option1 = "Cappuccino";\n        select1.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select1.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>\n      <ic-select\n        id="select-warning"\n        label="What is your favourite coffee?"\n        validation-status="warning"\n        validation-text="Only a few left"\n        searchable\n      ></ic-select>\n      <script>\n        var select2 = document.querySelector("#select-warning");\n        var option2 = "Cappuccino";\n        select2.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select2.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>\n      <ic-select\n        id="select-error"\n        label="What is your favourite coffee?"\n        validation-status="error"\n        validation-text="Coffee unavailable"\n        searchable\n      ></ic-select>\n      <script>\n        var select3 = document.querySelector("#select-error");\n        var option3 = "Cappuccino";\n        select3.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select3.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Validation"\n}',...Validation.parameters?.docs?.source}}},ScrollBehaviour.parameters={...ScrollBehaviour.parameters,docs:{...ScrollBehaviour.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-scroll"\n        label="What is your favourite coffee?"\n        searchable\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-scroll");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n          { label: "Café au lait", value: "Caf" },\n          { label: "Espresso", value: "Esp" },\n          { label: "Cortado", value: "Cor" },\n          { label: "Ristretto", value: "Ris" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Scroll behaviour"\n}',...ScrollBehaviour.parameters?.docs?.source}}},ExternalFiltering.parameters={...ExternalFiltering.parameters,docs:{...ExternalFiltering.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        label="What is your favourite coffee?"\n        searchable\n        debounce="300"\n        disable-auto-filtering\n        id="select-external-filtering"\n        timeout="1000"\n      ></ic-select>\n      <br />\n      <ic-typography>\n        Suggested search options: Espresso, Double Espresso, Flat White, Filter,\n        Cappuccino, Americano, Mocha, Macchiato.\n      </ic-typography>\n      <br />\n      <ic-typography>\n        The IcChange event will trigger 300ms after you finish typing. 1 second\n        later, the options in the select menu will be updated.\n      </ic-typography>\n      <script>\n        var mockData = [\n          { label: "Espresso", value: "Esp" },\n          { label: "Double Espresso", value: "Dou" },\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        function handleFilter(event) {\n          var option = event.detail.value;\n          console.log(option);\n          if (option !== selectedValue) {\n            if (option) {\n              select.loading = true;\n              mockAPI = (query) => {\n                filteredResults = mockData.filter((m) =>\n                  m.label.toLowerCase().includes(query.toLowerCase())\n                );\n                return new Promise((resolve) =>\n                  setTimeout(\n                    () => resolve(filteredResults),\n                    event.type === "icInput" ? 2000 : 900\n                  )\n                );\n              };\n              mockAPI(option).then((results) => (select.options = results));\n            } else {\n              select.options = [];\n            }\n          }\n        }\n        var select = document.querySelector("#select-external-filtering");\n        var selectedValue = "";\n        select.addEventListener("icClear", function (event) {\n          select.options = [];\n        });\n        select.addEventListener("icOptionSelect", function (event) {\n          selectedValue = event.detail.value;\n        });\n        select.addEventListener("icInput", handleFilter);\n        select.addEventListener("icRetryLoad", handleFilter);\n      <\/script>`,\n  name: "External filtering"\n}',...ExternalFiltering.parameters?.docs?.source}}},InForm.parameters={...InForm.parameters,docs:{...InForm.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <form>\n      <ic-select\n        id="select-form"\n        label="What is your favourite coffee?"\n        searchable\n      ></ic-select>\n      <br />\n      <br />\n      <input type="submit" value="Submit" />\n      <input type="reset" value="Reset" />\n    </form>\n    <script>\n      var select = document.querySelector("#select-form");\n      select.options = [\n        { label: "Cappuccino", value: "Cap" },\n        { label: "Latte", value: "Lat" },\n        { label: "Americano", value: "Ame" },\n      ];\n      select.addEventListener("icChange", function (event) {\n        console.log("icChange: " + event.detail.value);\n      });\n      document.querySelector("form").addEventListener("submit", (ev) => {\n        ev.preventDefault();\n        console.log(document.querySelector("input.ic-input").value);\n      });\n    <\/script>\n  `,\n  name: "In form"\n}',...InForm.parameters?.docs?.source}}},UpdateInputValueFromExternalRequest.parameters={...UpdateInputValueFromExternalRequest.parameters,docs:{...UpdateInputValueFromExternalRequest.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-section-container>\n        <ic-select\n          id="select-external-request"\n          searchable\n          label="What is your favourite coffee? (searchable)"\n        ></ic-select>\n      </ic-section-container>\n      <script>\n        const searchSelect = document.getElementById("select-external-request");\n        let options = [];\n        options.push({ label: "unknown", value: "unknown" });\n        options.push({ label: "item 1", value: "item-1" });\n        options.push({ label: "item 2", value: "item-2" });\n        options.push({ label: "item 3", value: "item-3" });\n        searchSelect.options = options;\n        let searchoption = "";\n        searchSelect.addEventListener("icChange", function (event) {\n          console.log("icChange", event.detail.value);\n          searchoption = event.detail.value;\n          if (searchoption === "unknown") {\n            searchoption = "item-1";\n            searchSelect.value = "item-1";\n          } else {\n            searchSelect.value = searchoption;\n          }\n        });\n        searchSelect.addEventListener("icOptionSelect", function (event) {\n          console.log("icOptionSelect: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Update input value from external request"\n}',...UpdateInputValueFromExternalRequest.parameters?.docs?.source}}},EmittingIcOptionSelectOnEnter.parameters={...EmittingIcOptionSelectOnEnter.parameters,docs:{...EmittingIcOptionSelectOnEnter.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-icoptionselect"\n        label="What is your favourite coffee?"\n        select-on-enter\n        searchable\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-icoptionselect");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icOptionSelect", function (event) {\n          console.log("icOptionSelect: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Emitting icOptionSelect on enter"\n}',...EmittingIcOptionSelectOnEnter.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html` <ic-select\n        id="select-playground"\n        disabled=${args.disabled}\n        full-width=${args["full-width"]}\n        helper-text=${args["helper-text"]}\n        hide-label=${args["hide-label"]}\n        include-descriptions-in-search=${args["include-descriptions-in-search"]}\n        include-group-titles-in-search=${args["include-group-titles-in-search"]}\n        loading=${args.loading}\n        loading-label=${args["loading-label"]}\n        label=${args.label}\n        placeholder=${args.placeholder}\n        readonly=${args.readonly}\n        required=${args.required}\n        search-match-position=${args["search-match-position"]}\n        searchable\n        size=${args.size}\n        validation-aria-live=${args.validationAriaLive}\n        validation-status=${args.validationStatus === "no status" ? "" : args.validationStatus}\n        validation-text=${args["validation-text"]}\n        theme=${args.theme}\n      >\n        ${args.showIcon && html` <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="currentColor"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>`}\n      </ic-select>\n      <script>\n        var select = document.querySelector("#select-playground");\n        select.options = [\n          {\n            label: "Cappuccino",\n            value: "Cap",\n            description:\n              "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",\n          },\n          {\n            label: "Boring",\n            children: [\n              {\n                label: "Latte",\n                value: "Lat",\n                description: "A milkier coffee than a cappuccino",\n              },\n              {\n                label: "Filter",\n                value: "Fil",\n                description: "Coffee filtered using paper or a mesh",\n              },\n            ],\n          },\n          {\n            label: "Fancy",\n            children: [\n              {\n                label: "Flat white",\n                value: "Fla",\n                description:\n                  "Coffee without froth made with espresso and hot steamed milk",\n              },\n              {\n                label: "Macchiato",\n                value: "Mac",\n                description:\n                  "Espresso coffee with a dash of frothy steamed milk",\n              },\n            ],\n          },\n          {\n            label: "Americano",\n            value: "Ame",\n            description: "Espresso coffee diluted with hot water",\n          },\n          {\n            label: "Mocha",\n            value: "Moc",\n            description: "A mixture of coffee and chocolate",\n          },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Playground",\n  args: defaultArgs,\n  argTypes: {\n    ["search-match-position"]: {\n      defaultValue: "anywhere",\n      options: ["anywhere", "start"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    validationAriaLive: {\n      options: ["polite", "assertive", "off"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    validationStatus: {\n      defaultValue: "no status",\n      options: ["no status", "error", "success", "warning"],\n      control: {\n        type: "select"\n      }\n    },\n    size: {\n      options: ["small", "medium", "large"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    showIcon: {\n      control: {\n        type: "boolean"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=7620.bdcd5b54.iframe.bundle.js.map