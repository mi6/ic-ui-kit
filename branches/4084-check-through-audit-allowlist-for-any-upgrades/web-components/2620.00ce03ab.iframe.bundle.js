"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2620],{"./src/components/ic-select/ic-select_(single).stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AriaLiveBehaviour:()=>AriaLiveBehaviour,AsyncDefault:()=>AsyncDefault,CustomComponents:()=>CustomComponents,CustomPlaceholder:()=>CustomPlaceholder,Default:()=>Default,DefaultValue:()=>DefaultValue,Disabled:()=>Disabled,DisabledOptions:()=>DisabledOptions,EmittingIcOptionSelectOnEnter:()=>EmittingIcOptionSelectOnEnter,FullWidth:()=>FullWidth,Groups:()=>Groups,HelperText:()=>HelperText,HiddenLabel:()=>HiddenLabel,HiddenMenuOptionLabels:()=>HiddenMenuOptionLabels,InForm:()=>InForm,Internationalisation:()=>Internationalisation,LoadingWithError:()=>LoadingWithError,Playground:()=>Playground,ReadOnly:()=>ReadOnly,Recommended:()=>Recommended,Required:()=>Required,ScrollBehaviour:()=>ScrollBehaviour,Sizes:()=>Sizes,Validation:()=>Validation,WithClearButton:()=>WithClearButton,WithDescriptions:()=>WithDescriptions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Select/Single",component:"ic-select"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-default"
        label="What is your favourite coffee?"
      ></ic-select>
      <script>
        var select = document.querySelector("#select-default");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
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
        label="What is your favourite coffee?"
        loading
        id="select-async"
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
      ></ic-select>
      <script>
        var select = document.querySelector("#select-default-value");
        select.value = "Cap";
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Default value"},WithClearButton={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-clear"
        label="What is your favourite coffee?"
        show-clear-button
      ></ic-select>
      <script>
        var select = document.querySelector("#select-clear");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"With clear button"},WithDescriptions={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-descriptions"
        label="What is your favourite coffee?"
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
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"With descriptions"},HelperText={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        label="What is your favourite coffee?"
        helper-text="Select one option from the list"
      ></ic-select>
      <br />
      <ic-select label="What is your favourite coffee?"
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
          ];
          el.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        });
      </script>`,name:"Helper text"},CustomPlaceholder={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-7"
        label="What is your favourite coffee?"
        placeholder="Placeholder goes here"
      ></ic-select>
      <script>
        var select = document.querySelector("#select-7");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Custom placeholder"},CustomComponents={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-1"
        label="What is your favourite coffee?"
      ></ic-select>
      <script>
        var select = document.querySelector("#select-1");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          {
            label: "Latte",
            value: "Lat",
            description: "A milkier coffee than a cappuccino",
            element: {
              component: \`<ic-status-tag label="Success status" status="success"></ic-status-tag>\`,
              ariaLabel: "Success status tag",
            },
            icon: \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>\`,
          },
          {
            label: "Americano",
            value: "Ame",
            icon: \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <g>
            <path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />
            </g>
            </svg>\`,
          },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Custom components"},Sizes={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: flex; flex-direction: column; gap: 16px;">
      <ic-select
        id="select-size-small"
        label="What is your favourite coffee?"
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
        disabled
      ></ic-select>
      <script>
        var select = document.querySelector("#select-disabled");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Disabled"},DisabledOptions={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-disabled-options"
        label="What is your favourite coffee?"
      ></ic-select>
      <script>
        var select = document.querySelector("#select-disabled-options");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat", disabled: true },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Disabled options"},FullWidth={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-full-width"
        label="What is your favourite coffee?"
        full-width
      ></ic-select>
      <script>
        var select = document.querySelector("#select-full-width");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Full width"},HiddenLabel={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-hidden-label"
        label="What is your favourite coffee?"
        hide-label
      ></ic-select>
      <script>
        var select = document.querySelector("#select-hidden-label");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Hidden label"},Required={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-required"
        label="What is your favourite coffee?"
        required
      ></ic-select>
      <script>
        var select = document.querySelector("#select-required");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Required"},ReadOnly={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-read-only"
        label="What is your favourite coffee?"
        readonly
        value="Cap"
      ></ic-select>
      <script>
        var select = document.querySelector("#select-read-only");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Read-only"},Groups={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-groups"
        label="What is your favourite coffee?"
      ></ic-select>
      <script>
        var select = document.querySelector("#select-groups");
        select.options = [
          {
            label: "Fancy",
            children: [
              { label: "Cappuccino", value: "Cap" },
              { label: "Flat white", value: "Fla" },
              {
                label: "Macchiato",
                value: "Mac",
              },
            ],
          },
          {
            label: "Boring",
            children: [
              { label: "Filter", value: "Fil" },
              { label: "Latte", value: "Lat" },
              {
                label: "Americano",
                value: "Ame",
              },
            ],
          },
        ];
        select.value = "Lat";
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Groups"},Recommended={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-recommended"
        label="What is your favourite coffee?"
      ></ic-select>
      <script>
        var select = document.querySelector("#select-recommended");
        select.options = [
          { label: "Cappuccino", value: "Cappuccino" },
          { label: "Flat white", value: "Flat white", recommended: true },
          { label: "Latte", value: "Latte" },
          { label: "Americano", value: "Americano", recommended: true },
          { label: "Filter", value: "Fil" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Recommended"},HiddenMenuOptionLabels={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="hidden-menu-opts-select"
        label="What is your favourite coffee size?"
      ></ic-select>
      <script>
        var select = document.querySelector("#hidden-menu-opts-select");
        select.options = [
          {
            label: "Small",
            value: "s",
            element: {
              component: \`<ic-chip label="Small" size="small"></ic-chip>\`,
              ariaLabel: "small chip",
            },
            hideLabel: true,
          },
          {
            label: "Medium size",
            value: "m",
            element: {
              component: \`<ic-chip label="Medium"></ic-chip>\`,
              ariaLabel: "medium chip",
            },
            hideLabel: true,
          },
          {
            label: "Large",
            value: "l",
            element: {
              component: \`<ic-chip label="Large" size="large"></ic-chip>\`,
              ariaLabel: "large chip",
            },
            hideLabel: true,
          },
          {
            label: "Extra Large",
            value: "xl",
          },
        ];
      </script>`,name:"Hidden menu option labels"},Validation={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-success"
        label="What is your favourite coffee?"
        validation-status="success"
        validation-text="Coffee available"
      ></ic-select>
      <script>
        var select1 = document.querySelector("#select-success");
        var option1 = "Cappuccino";
        select1.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
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
      ></ic-select>
      <script>
        var select2 = document.querySelector("#select-warning");
        var option2 = "Cappuccino";
        select2.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
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
      ></ic-select>
      <script>
        var select3 = document.querySelector("#select-error");
        var option3 = "Cappuccino";
        select3.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        select3.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Validation"},AriaLiveBehaviour={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="field-1"
        label="What is your favourite coffee?"
        helper-text="Error already set on page load and aria-live overridden as 'assertive'"
        validation-status="error"
        validation-text="First error message"
        validation-aria-live="assertive"
      ></ic-select>
      <br />
      <ic-select
        id="field-2"
        label="What is your favourite coffee?"
        helper-text="Error set after page load and aria-live overridden as 'assertive'"
        validation-aria-live="assertive"
      ></ic-select>
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
      <ic-select
        id="field-3"
        label="What is your favourite coffee?"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      ></ic-select>
      <br />
      <ic-select
        id="field-4"
        label="What is your favourite coffee?"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      ></ic-select>
      <br />
      <ic-button id="toggle-btn-2">Toggle errors</ic-button>
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

        document.querySelectorAll("ic-select").forEach((el) => {
          el.options = [
            { label: "Cappuccino", value: "Cap" },
            { label: "Latte", value: "Lat" },
            { label: "Americano", value: "Ame" },
          ];
          el.addEventListener("icChange", function (event) {
            console.log("icChange: " + event.detail.value);
          });
        });
      </script>`,name:"Aria-live behaviour"},ScrollBehaviour={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-scroll"
        label="What is your favourite coffee?"
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
      </script>`,name:"Scroll behaviour"},LoadingWithError={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-loading"
        label="What is your favourite coffee?"
        loading
        timeout="1000"
      ></ic-select>
      <script>
        var select = document.querySelector("#select-loading");
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
        select.addEventListener("icRetryLoad", function (event) {
          select.loading = "true";
        });
      </script>`,name:"Loading with error"},InForm={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <form>
      <ic-select
        id="select-form"
        label="What is your favourite coffee?"
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
  `,name:"In form"},EmittingIcOptionSelectOnEnter={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-select
        id="select-icoptionselect"
        label="What is your favourite coffee?"
        select-on-enter
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
      </script>`,name:"Emitting icOptionSelect on enter"},Internationalisation={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <p>
        The first select is wrapped in a <code>&lt;span lang="fr"&gt;</code> to
        change the language. All options will read in french, which can be
        tested using a screen reader.
      </p>
      <span lang="fr">
        <ic-select id="select-lang" label="Boisson Préférée"></ic-select>
      </span>
      <hr />
      <ic-select
        id="select-custom-li-props"
        label="What is your favourite coffee?"
      ></ic-select>
      <br />
      <p>
        <code>lang="it"</code> has been set on each
        <code>&lt;li&gt;</code> element. This can be tested using a screen
        reader.
      </p>
      <script>
        var select1 = document.querySelector("#select-lang");
        select1.options = [
          { label: "Chocolat Chaud", value: "choc" },
          { label: "Jus", value: "jus" },
          { label: "Limonade", value: "lim" },
        ];
        var select2 = document.querySelector("#select-custom-li-props");
        select2.options = [
          { label: "Flat White", value: "Fla", htmlProps: { lang: "en-GB" } },
          { label: "Cappuccino", value: "Cap", htmlProps: { lang: "it" } },
          { label: "Latte", value: "Lat", htmlProps: { lang: "it" } },
          { label: "Americano", value: "Ame", htmlProps: { lang: "it" } },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      </script>`,name:"Internationalisation (+ options with htmlProps)"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-select
        id="select-playground"
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
      </script>`,name:"Playground",args:{disabled:!1,"full-width":!1,"helper-text":"Select one option from the list","hide-label":!1,loading:!1,loadingLabel:"Loading...",label:"What is your favourite coffee?",placeholder:"Select an option",readonly:!1,required:!1,size:"medium",validationAriaLive:"polite",validationStatus:"no status","validation-text":"","show-clear-button":!1,theme:"inherit"},argTypes:{validationAriaLive:{options:["polite","assertive","off"],control:{type:"inline-radio"}},validationStatus:{defaultValue:"no status",options:["no status","error","success","warning"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},showIcon:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}},__namedExportsOrder=["Default","AsyncDefault","DefaultValue","WithClearButton","WithDescriptions","HelperText","CustomPlaceholder","CustomComponents","Sizes","Disabled","DisabledOptions","FullWidth","HiddenLabel","Required","ReadOnly","Groups","Recommended","HiddenMenuOptionLabels","Validation","AriaLiveBehaviour","ScrollBehaviour","LoadingWithError","InForm","EmittingIcOptionSelectOnEnter","Internationalisation","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-default"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-default");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n        select.addEventListener("icOptionSelect", function (event) {\n          console.log("icOptionSelect: " + event.detail.value);\n        });\n        select.addEventListener("icOpen", function () {\n          console.log("select dropdown opened");\n        });\n        select.addEventListener("icClose", function () {\n          console.log("select dropdown closed");\n        });\n      <\/script>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},AsyncDefault.parameters={...AsyncDefault.parameters,docs:{...AsyncDefault.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        label="What is your favourite coffee?"\n        loading\n        id="select-async"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-async");\n        select.options = [];\n        setTimeout(() => {\n          select.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n            { label: "Filter", value: "Fil" },\n            { label: "Flat white", value: "Fla" },\n            { label: "Mocha", value: "Moc" },\n            { label: "Macchiato", value: "Mac" },\n          ];\n        }, 5000);\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Async default"\n}',...AsyncDefault.parameters?.docs?.source}}},DefaultValue.parameters={...DefaultValue.parameters,docs:{...DefaultValue.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-default-value"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-default-value");\n        select.value = "Cap";\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Default value"\n}',...DefaultValue.parameters?.docs?.source}}},WithClearButton.parameters={...WithClearButton.parameters,docs:{...WithClearButton.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-clear"\n        label="What is your favourite coffee?"\n        show-clear-button\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-clear");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "With clear button"\n}',...WithClearButton.parameters?.docs?.source}}},WithDescriptions.parameters={...WithDescriptions.parameters,docs:{...WithDescriptions.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-descriptions"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-descriptions");\n        select.options = [\n          {\n            label: "Cappuccino",\n            value: "Cap",\n            description:\n              "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",\n          },\n          {\n            label: "Latte",\n            value: "Lat",\n            description: "A milkier coffee than a cappuccino",\n          },\n          {\n            label: "Americano",\n            value: "Ame",\n            description: "Espresso coffee diluted with hot water",\n          },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "With descriptions"\n}',...WithDescriptions.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        label="What is your favourite coffee?"\n        helper-text="Select one option from the list"\n      ></ic-select>\n      <br />\n      <ic-select label="What is your favourite coffee?"\n        ><ic-typography variant="caption" slot="helper-text">\n          <span>\n            Slotted helper text with a <ic-link href="#">link</ic-link>\n          </span>\n        </ic-typography></ic-select\n      >\n      <script>\n        document.querySelectorAll("ic-select").forEach((el) => {\n          el.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          el.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        });\n      <\/script>`,\n  name: "Helper text"\n}',...HelperText.parameters?.docs?.source}}},CustomPlaceholder.parameters={...CustomPlaceholder.parameters,docs:{...CustomPlaceholder.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-7"\n        label="What is your favourite coffee?"\n        placeholder="Placeholder goes here"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-7");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Custom placeholder"\n}',...CustomPlaceholder.parameters?.docs?.source}}},CustomComponents.parameters={...CustomComponents.parameters,docs:{...CustomComponents.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-1"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-1");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          {\n            label: "Latte",\n            value: "Lat",\n            description: "A milkier coffee than a cappuccino",\n            element: {\n              component: \\`<ic-status-tag label="Success status" status="success"></ic-status-tag>\\`,\n              ariaLabel: "Success status tag",\n            },\n            icon: \\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>\\`,\n          },\n          {\n            label: "Americano",\n            value: "Ame",\n            icon: \\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n            <g>\n            <path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />\n            </g>\n            </svg>\\`,\n          },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Custom components"\n}',...CustomComponents.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="display: flex; flex-direction: column; gap: 16px;">\n      <ic-select\n        id="select-size-small"\n        label="What is your favourite coffee?"\n        size="small"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-size-small");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>\n      <ic-select\n        id="select-size-medium"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-size-medium");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>\n      <ic-select\n        id="select-size-large"\n        label="What is your favourite coffee?"\n        size="large"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-size-large");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>\n    </div>`,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-disabled"\n        label="What is your favourite coffee?"\n        disabled\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-disabled");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},DisabledOptions.parameters={...DisabledOptions.parameters,docs:{...DisabledOptions.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-disabled-options"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-disabled-options");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat", disabled: true },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Disabled options"\n}',...DisabledOptions.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-full-width"\n        label="What is your favourite coffee?"\n        full-width\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-full-width");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Full width"\n}',...FullWidth.parameters?.docs?.source}}},HiddenLabel.parameters={...HiddenLabel.parameters,docs:{...HiddenLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-hidden-label"\n        label="What is your favourite coffee?"\n        hide-label\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-hidden-label");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Hidden label"\n}',...HiddenLabel.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-required"\n        label="What is your favourite coffee?"\n        required\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-required");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Required"\n}',...Required.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-read-only"\n        label="What is your favourite coffee?"\n        readonly\n        value="Cap"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-read-only");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Read-only"\n}',...ReadOnly.parameters?.docs?.source}}},Groups.parameters={...Groups.parameters,docs:{...Groups.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-groups"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-groups");\n        select.options = [\n          {\n            label: "Fancy",\n            children: [\n              { label: "Cappuccino", value: "Cap" },\n              { label: "Flat white", value: "Fla" },\n              {\n                label: "Macchiato",\n                value: "Mac",\n              },\n            ],\n          },\n          {\n            label: "Boring",\n            children: [\n              { label: "Filter", value: "Fil" },\n              { label: "Latte", value: "Lat" },\n              {\n                label: "Americano",\n                value: "Ame",\n              },\n            ],\n          },\n        ];\n        select.value = "Lat";\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Groups"\n}',...Groups.parameters?.docs?.source}}},Recommended.parameters={...Recommended.parameters,docs:{...Recommended.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-recommended"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-recommended");\n        select.options = [\n          { label: "Cappuccino", value: "Cappuccino" },\n          { label: "Flat white", value: "Flat white", recommended: true },\n          { label: "Latte", value: "Latte" },\n          { label: "Americano", value: "Americano", recommended: true },\n          { label: "Filter", value: "Fil" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Recommended"\n}',...Recommended.parameters?.docs?.source}}},HiddenMenuOptionLabels.parameters={...HiddenMenuOptionLabels.parameters,docs:{...HiddenMenuOptionLabels.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="hidden-menu-opts-select"\n        label="What is your favourite coffee size?"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#hidden-menu-opts-select");\n        select.options = [\n          {\n            label: "Small",\n            value: "s",\n            element: {\n              component: \\`<ic-chip label="Small" size="small"></ic-chip>\\`,\n              ariaLabel: "small chip",\n            },\n            hideLabel: true,\n          },\n          {\n            label: "Medium size",\n            value: "m",\n            element: {\n              component: \\`<ic-chip label="Medium"></ic-chip>\\`,\n              ariaLabel: "medium chip",\n            },\n            hideLabel: true,\n          },\n          {\n            label: "Large",\n            value: "l",\n            element: {\n              component: \\`<ic-chip label="Large" size="large"></ic-chip>\\`,\n              ariaLabel: "large chip",\n            },\n            hideLabel: true,\n          },\n          {\n            label: "Extra Large",\n            value: "xl",\n          },\n        ];\n      <\/script>`,\n  name: "Hidden menu option labels"\n}',...HiddenMenuOptionLabels.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-success"\n        label="What is your favourite coffee?"\n        validation-status="success"\n        validation-text="Coffee available"\n      ></ic-select>\n      <script>\n        var select1 = document.querySelector("#select-success");\n        var option1 = "Cappuccino";\n        select1.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select1.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>\n      <ic-select\n        id="select-warning"\n        label="What is your favourite coffee?"\n        validation-status="warning"\n        validation-text="Only a few left"\n      ></ic-select>\n      <script>\n        var select2 = document.querySelector("#select-warning");\n        var option2 = "Cappuccino";\n        select2.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select2.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>\n      <ic-select\n        id="select-error"\n        label="What is your favourite coffee?"\n        validation-status="error"\n        validation-text="Coffee unavailable"\n      ></ic-select>\n      <script>\n        var select3 = document.querySelector("#select-error");\n        var option3 = "Cappuccino";\n        select3.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select3.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Validation"\n}',...Validation.parameters?.docs?.source}}},AriaLiveBehaviour.parameters={...AriaLiveBehaviour.parameters,docs:{...AriaLiveBehaviour.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="field-1"\n        label="What is your favourite coffee?"\n        helper-text="Error already set on page load and aria-live overridden as \'assertive\'"\n        validation-status="error"\n        validation-text="First error message"\n        validation-aria-live="assertive"\n      ></ic-select>\n      <br />\n      <ic-select\n        id="field-2"\n        label="What is your favourite coffee?"\n        helper-text="Error set after page load and aria-live overridden as \'assertive\'"\n        validation-aria-live="assertive"\n      ></ic-select>\n      <br />\n      <ic-button id="toggle-btn-1">Toggle errors</ic-button>\n      <script>\n        let showErrors1 = false;\n        const btn1 = document.getElementById("toggle-btn-1");\n        const field1 = document.getElementById("field-1");\n        const field2 = document.getElementById("field-2");\n\n        btn1.addEventListener("click", () => {\n          showErrors1 = !showErrors1;\n\n          field1.setAttribute("validation-status", showErrors1 ? "" : "error");\n          field1.setAttribute(\n            "validation-text",\n            showErrors1 ? "" : "First error message"\n          );\n\n          field2.setAttribute("validation-status", showErrors1 ? "error" : "");\n          field2.setAttribute(\n            "validation-text",\n            showErrors1 ? "Second error message" : ""\n          );\n        });\n      <\/script>\n      <br />\n      <br />\n      <br />\n      <br />\n      <ic-select\n        id="field-3"\n        label="What is your favourite coffee?"\n        helper-text="Default aria-live behaviour (i.e. \'polite\')"\n      ></ic-select>\n      <br />\n      <ic-select\n        id="field-4"\n        label="What is your favourite coffee?"\n        helper-text="Default aria-live behaviour (i.e. \'polite\')"\n      ></ic-select>\n      <br />\n      <ic-button id="toggle-btn-2">Toggle errors</ic-button>\n      <script>\n        let showErrors2 = false;\n        const btn2 = document.getElementById("toggle-btn-2");\n        const field3 = document.getElementById("field-3");\n        const field4 = document.getElementById("field-4");\n\n        btn2.addEventListener("click", () => {\n          showErrors2 = !showErrors2;\n\n          field3.setAttribute("validation-status", showErrors2 ? "error" : "");\n          field3.setAttribute(\n            "validation-text",\n            showErrors2 ? "Third error message" : ""\n          );\n\n          field4.setAttribute("validation-status", showErrors2 ? "error" : "");\n          field4.setAttribute(\n            "validation-text",\n            showErrors2 ? "Fourth error message" : ""\n          );\n        });\n\n        document.querySelectorAll("ic-select").forEach((el) => {\n          el.options = [\n            { label: "Cappuccino", value: "Cap" },\n            { label: "Latte", value: "Lat" },\n            { label: "Americano", value: "Ame" },\n          ];\n          el.addEventListener("icChange", function (event) {\n            console.log("icChange: " + event.detail.value);\n          });\n        });\n      <\/script>`,\n  name: "Aria-live behaviour"\n}',...AriaLiveBehaviour.parameters?.docs?.source}}},ScrollBehaviour.parameters={...ScrollBehaviour.parameters,docs:{...ScrollBehaviour.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-scroll"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-scroll");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n          { label: "Filter", value: "Fil" },\n          { label: "Flat white", value: "Fla" },\n          { label: "Mocha", value: "Moc" },\n          { label: "Macchiato", value: "Mac" },\n          { label: "Café au lait", value: "Caf" },\n          { label: "Espresso", value: "Esp" },\n          { label: "Cortado", value: "Cor" },\n          { label: "Ristretto", value: "Ris" },\n          { label: "Latte macchiato", value: "Lam" },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Scroll behaviour"\n}',...ScrollBehaviour.parameters?.docs?.source}}},LoadingWithError.parameters={...LoadingWithError.parameters,docs:{...LoadingWithError.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-loading"\n        label="What is your favourite coffee?"\n        loading\n        timeout="1000"\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-loading");\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n        select.addEventListener("icRetryLoad", function (event) {\n          select.loading = "true";\n        });\n      <\/script>`,\n  name: "Loading with error"\n}',...LoadingWithError.parameters?.docs?.source}}},InForm.parameters={...InForm.parameters,docs:{...InForm.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <form>\n      <ic-select\n        id="select-form"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <br />\n      <br />\n      <input type="submit" value="Submit" />\n      <input type="reset" value="Reset" />\n    </form>\n    <script>\n      var select = document.querySelector("#select-form");\n      select.options = [\n        { label: "Cappuccino", value: "Cap" },\n        { label: "Latte", value: "Lat" },\n        { label: "Americano", value: "Ame" },\n      ];\n      select.addEventListener("icChange", function (event) {\n        console.log("icChange: " + event.detail.value);\n      });\n      document.querySelector("form").addEventListener("submit", (ev) => {\n        ev.preventDefault();\n        console.log(document.querySelector("input.ic-input").value);\n      });\n    <\/script>\n  `,\n  name: "In form"\n}',...InForm.parameters?.docs?.source}}},EmittingIcOptionSelectOnEnter.parameters={...EmittingIcOptionSelectOnEnter.parameters,docs:{...EmittingIcOptionSelectOnEnter.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-select\n        id="select-icoptionselect"\n        label="What is your favourite coffee?"\n        select-on-enter\n      ></ic-select>\n      <script>\n        var select = document.querySelector("#select-icoptionselect");\n        select.options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        select.addEventListener("icOptionSelect", function (event) {\n          console.log("icOptionSelect: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Emitting icOptionSelect on enter"\n}',...EmittingIcOptionSelectOnEnter.parameters?.docs?.source}}},Internationalisation.parameters={...Internationalisation.parameters,docs:{...Internationalisation.parameters?.docs,source:{originalSource:'{\n  render: () => html` <p>\n        The first select is wrapped in a <code>&lt;span lang="fr"&gt;</code> to\n        change the language. All options will read in french, which can be\n        tested using a screen reader.\n      </p>\n      <span lang="fr">\n        <ic-select id="select-lang" label="Boisson Préférée"></ic-select>\n      </span>\n      <hr />\n      <ic-select\n        id="select-custom-li-props"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <br />\n      <p>\n        <code>lang="it"</code> has been set on each\n        <code>&lt;li&gt;</code> element. This can be tested using a screen\n        reader.\n      </p>\n      <script>\n        var select1 = document.querySelector("#select-lang");\n        select1.options = [\n          { label: "Chocolat Chaud", value: "choc" },\n          { label: "Jus", value: "jus" },\n          { label: "Limonade", value: "lim" },\n        ];\n        var select2 = document.querySelector("#select-custom-li-props");\n        select2.options = [\n          { label: "Flat White", value: "Fla", htmlProps: { lang: "en-GB" } },\n          { label: "Cappuccino", value: "Cap", htmlProps: { lang: "it" } },\n          { label: "Latte", value: "Lat", htmlProps: { lang: "it" } },\n          { label: "Americano", value: "Ame", htmlProps: { lang: "it" } },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Internationalisation (+ options with htmlProps)"\n}',...Internationalisation.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html` <ic-select\n        id="select-playground"\n        disabled=${args.disabled}\n        full-width=${args["full-width"]}\n        helper-text=${args["helper-text"]}\n        hide-label=${args["hide-label"]}\n        loading=${args.loading}\n        loading-label=${args["loading-label"]}\n        label=${args.label}\n        placeholder=${args.placeholder}\n        readonly=${args.readonly}\n        required=${args.required}\n        show-clear-button=${args["show-clear-button"]}\n        size=${args.size}\n        validation-aria-live=${args.validationAriaLive}\n        validation-status=${args.validationStatus === "no status" ? "" : args.validationStatus}\n        validation-text=${args["validation-text"]}\n        theme=${args.theme}\n      >\n        ${args.showIcon && html` <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="currentColor"\n        >\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"\n          />\n        </svg>`}\n      </ic-select>\n      <script>\n        var select = document.querySelector("#select-playground");\n        select.options = [\n          {\n            label: "Cappuccino",\n            value: "Cap",\n            description:\n              "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",\n          },\n          {\n            label: "Boring",\n            children: [\n              {\n                label: "Latte",\n                value: "Lat",\n                description: "A milkier coffee than a cappuccino",\n              },\n              {\n                label: "Filter",\n                value: "Fil",\n                description: "Coffee filtered using paper or a mesh",\n              },\n            ],\n          },\n          {\n            label: "Fancy",\n            children: [\n              {\n                label: "Flat white",\n                value: "Fla",\n                description:\n                  "Coffee without froth made with espresso and hot steamed milk",\n              },\n              {\n                label: "Macchiato",\n                value: "Mac",\n                description:\n                  "Espresso coffee with a dash of frothy steamed milk",\n              },\n            ],\n          },\n          {\n            label: "Americano",\n            value: "Ame",\n            description: "Espresso coffee diluted with hot water",\n          },\n          {\n            label: "Mocha",\n            value: "Moc",\n            description: "A mixture of coffee and chocolate",\n          },\n        ];\n        select.addEventListener("icChange", function (event) {\n          console.log("icChange: " + event.detail.value);\n        });\n      <\/script>`,\n  name: "Playground",\n  args: defaultArgs,\n  argTypes: {\n    validationAriaLive: {\n      options: ["polite", "assertive", "off"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    validationStatus: {\n      defaultValue: "no status",\n      options: ["no status", "error", "success", "warning"],\n      control: {\n        type: "select"\n      }\n    },\n    size: {\n      options: ["small", "medium", "large"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    showIcon: {\n      control: {\n        type: "boolean"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=2620.00ce03ab.iframe.bundle.js.map