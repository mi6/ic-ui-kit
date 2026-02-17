var M=Object.freeze,ne=Object.defineProperty;var e=(l,ae)=>M(ne(l,"raw",{value:M(ae||l.slice())}));import{x as t}from"./lit-html-CWQq0DyO.js";const ce={disabled:!1,"full-width":!1,"helper-text":"Select one option from the list","hide-label":!1,loading:!1,loadingLabel:"Loading...",label:"What is your favourite coffee?",placeholder:"Select an option",readonly:!1,required:!1,size:"medium",validationAriaLive:"polite",validationStatus:"no status","validation-text":"","show-clear-button":!1,theme:"inherit"},ie={title:"Web Components/Select/Single",component:"ic-select"};var z;const a={render:()=>t(z||(z=e([`<ic-select
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
      <\/script>`]))),name:"Default"};var k;const n={render:()=>t(k||(k=e([`<ic-select
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
      <\/script>`]))),name:"Async default"};var $;const c={render:()=>t($||($=e([`<ic-select
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
      <\/script>`]))),name:"Default value"};var B;const i={render:()=>t(B||(B=e([`<ic-select
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
      <\/script>`]))),name:"With clear button"};var H;const o={render:()=>t(H||(H=e([`<ic-select
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
      <\/script>`]))),name:"With descriptions"};var I;const s={render:()=>t(I||(I=e([`<ic-select
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
      <\/script>`]))),name:"Helper text"};var O;const r={render:()=>t(O||(O=e([`<ic-select
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
      <\/script>`]))),name:"Custom placeholder"};var D;const u={render:()=>t(D||(D=e([`<ic-select
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
      <\/script>`],[`<ic-select
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
              component: \\\`<ic-status-tag label="Success status" status="success"></ic-status-tag>\\\`,
              ariaLabel: "Success status tag",
            },
            icon: \\\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>\\\`,
          },
          {
            label: "Americano",
            value: "Ame",
            icon: \\\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <g>
            <path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />
            </g>
            </svg>\\\`,
          },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      <\/script>`]))),name:"Custom components"};var V;const d={render:()=>t(V||(V=e([`<div style="display: flex; flex-direction: column; gap: 16px;">
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
      <\/script>
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
      <\/script>
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
      <\/script>
    </div>`]))),name:"Sizes"};var R;const v={render:()=>t(R||(R=e([`<ic-select
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
      <\/script>`]))),name:"Disabled"};var P;const p={render:()=>t(P||(P=e([`<ic-select
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
      <\/script>`]))),name:"Disabled options"};var T;const m={render:()=>t(T||(T=e([`<ic-select
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
      <\/script>`]))),name:"Full width"};var Z;const h={render:()=>t(Z||(Z=e([`<ic-select
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
      <\/script>`]))),name:"Hidden label"};var _;const b={render:()=>t(_||(_=e([`<ic-select
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
      <\/script>`]))),name:"Required"};var G;const f={render:()=>t(G||(G=e([`<ic-select
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
      <\/script>`]))),name:"Read-only"};var j;const g={render:()=>t(j||(j=e([`<ic-select
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
      <\/script>`]))),name:"Groups"};var J;const C={render:()=>t(J||(J=e([`<ic-select
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
      <\/script>`]))),name:"Recommended"};var K;const L={render:()=>t(K||(K=e([`<ic-select
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
      <\/script>`],[`<ic-select
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
              component: \\\`<ic-chip label="Small" size="small"></ic-chip>\\\`,
              ariaLabel: "small chip",
            },
            hideLabel: true,
          },
          {
            label: "Medium size",
            value: "m",
            element: {
              component: \\\`<ic-chip label="Medium"></ic-chip>\\\`,
              ariaLabel: "medium chip",
            },
            hideLabel: true,
          },
          {
            label: "Large",
            value: "l",
            element: {
              component: \\\`<ic-chip label="Large" size="large"></ic-chip>\\\`,
              ariaLabel: "large chip",
            },
            hideLabel: true,
          },
          {
            label: "Extra Large",
            value: "xl",
          },
        ];
      <\/script>`]))),name:"Hidden menu option labels"};var N;const y={render:()=>t(N||(N=e([`<ic-select
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
      <\/script>
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
      <\/script>
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
      <\/script>`]))),name:"Validation"};var Q;const A={render:()=>t(Q||(Q=e([`<ic-select
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
      <\/script>
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
      <\/script>`]))),name:"Aria-live behaviour"};var U;const S={render:()=>t(U||(U=e([`<ic-select
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
      <\/script>`]))),name:"Scroll behaviour"};var X;const E={render:()=>t(X||(X=e([`<ic-select
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
      <\/script>`]))),name:"Loading with error"};var Y;const w={render:()=>t(Y||(Y=e([`
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
    <\/script>
  `]))),name:"In form"};var ee;const q={render:()=>t(ee||(ee=e([`<ic-select
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
      <\/script>`]))),name:"Emitting icOptionSelect on enter"};var te;const F={render:()=>t(te||(te=e([` <p>
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
      <\/script>`]))),name:"Internationalisation (+ options with htmlProps)"},W="inline-radio";var le;const x={render:l=>t(le||(le=e([` <ic-select
        id="select-playground"
        disabled=`,`
        full-width=`,`
        helper-text=`,`
        hide-label=`,`
        loading=`,`
        loading-label=`,`
        label=`,`
        placeholder=`,`
        readonly=`,`
        required=`,`
        show-clear-button=`,`
        size=`,`
        validation-aria-live=`,`
        validation-status=`,`
        validation-text=`,`
        theme=`,`
      >
        `,`
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
      <\/script>`])),l.disabled,l["full-width"],l["helper-text"],l["hide-label"],l.loading,l["loading-label"],l.label,l.placeholder,l.readonly,l.required,l["show-clear-button"],l.size,l.validationAriaLive,l.validationStatus==="no status"?"":l.validationStatus,l["validation-text"],l.theme,l.showIcon&&t` <svg
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
        </svg>`),name:"Playground",args:ce,argTypes:{validationAriaLive:{options:["polite","assertive","off"],control:{type:W}},validationStatus:{defaultValue:"no status",options:["no status","error","success","warning"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:W}},showIcon:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:W}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Default"
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Async default"
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Default value"
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "With clear button"
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "With descriptions"
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Helper text"
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Custom placeholder"
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
              component: \\\`<ic-status-tag label="Success status" status="success"></ic-status-tag>\\\`,
              ariaLabel: "Success status tag",
            },
            icon: \\\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>\\\`,
          },
          {
            label: "Americano",
            value: "Ame",
            icon: \\\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <g>
            <path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />
            </g>
            </svg>\\\`,
          },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      <\/script>\`,
  name: "Custom components"
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: flex; flex-direction: column; gap: 16px;">
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
      <\/script>
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
      <\/script>
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
      <\/script>
    </div>\`,
  name: "Sizes"
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Disabled"
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Disabled options"
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Full width"
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Hidden label"
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Required"
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Read-only"
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Groups"
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Recommended"
}`,...C.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
              component: \\\`<ic-chip label="Small" size="small"></ic-chip>\\\`,
              ariaLabel: "small chip",
            },
            hideLabel: true,
          },
          {
            label: "Medium size",
            value: "m",
            element: {
              component: \\\`<ic-chip label="Medium"></ic-chip>\\\`,
              ariaLabel: "medium chip",
            },
            hideLabel: true,
          },
          {
            label: "Large",
            value: "l",
            element: {
              component: \\\`<ic-chip label="Large" size="large"></ic-chip>\\\`,
              ariaLabel: "large chip",
            },
            hideLabel: true,
          },
          {
            label: "Extra Large",
            value: "xl",
          },
        ];
      <\/script>\`,
  name: "Hidden menu option labels"
}`,...L.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>
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
      <\/script>
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
      <\/script>\`,
  name: "Validation"
}`,...y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>
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
      <\/script>\`,
  name: "Aria-live behaviour"
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Scroll behaviour"
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Loading with error"
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
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
    <\/script>
  \`,
  name: "In form"
}`,...w.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Emitting icOptionSelect on enter"
}`,...q.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => html\` <p>
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
      <\/script>\`,
  name: "Internationalisation (+ options with htmlProps)"
}`,...F.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => html\` <ic-select
        id="select-playground"
        disabled=\${args.disabled}
        full-width=\${args["full-width"]}
        helper-text=\${args["helper-text"]}
        hide-label=\${args["hide-label"]}
        loading=\${args.loading}
        loading-label=\${args["loading-label"]}
        label=\${args.label}
        placeholder=\${args.placeholder}
        readonly=\${args.readonly}
        required=\${args.required}
        show-clear-button=\${args["show-clear-button"]}
        size=\${args.size}
        validation-aria-live=\${args.validationAriaLive}
        validation-status=\${args.validationStatus === "no status" ? "" : args.validationStatus}
        validation-text=\${args["validation-text"]}
        theme=\${args.theme}
      >
        \${args.showIcon && html\` <svg
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
        </svg>\`}
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
      <\/script>\`,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    validationAriaLive: {
      options: ["polite", "assertive", "off"],
      control: {
        type: inlineRadioSelector
      }
    },
    validationStatus: {
      defaultValue: "no status",
      options: ["no status", "error", "success", "warning"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: inlineRadioSelector
      }
    },
    showIcon: {
      control: {
        type: "boolean"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const oe=["Default","AsyncDefault","DefaultValue","WithClearButton","WithDescriptions","HelperText","CustomPlaceholder","CustomComponents","Sizes","Disabled","DisabledOptions","FullWidth","HiddenLabel","Required","ReadOnly","Groups","Recommended","HiddenMenuOptionLabels","Validation","AriaLiveBehaviour","ScrollBehaviour","LoadingWithError","InForm","EmittingIcOptionSelectOnEnter","Internationalisation","Playground"],ue=Object.freeze(Object.defineProperty({__proto__:null,AriaLiveBehaviour:A,AsyncDefault:n,CustomComponents:u,CustomPlaceholder:r,Default:a,DefaultValue:c,Disabled:v,DisabledOptions:p,EmittingIcOptionSelectOnEnter:q,FullWidth:m,Groups:g,HelperText:s,HiddenLabel:h,HiddenMenuOptionLabels:L,InForm:w,Internationalisation:F,LoadingWithError:E,Playground:x,ReadOnly:f,Recommended:C,Required:b,ScrollBehaviour:S,Sizes:d,Validation:y,WithClearButton:i,WithDescriptions:o,__namedExportsOrder:oe,default:ie},Symbol.toStringTag,{value:"Module"}));export{ue as I};
