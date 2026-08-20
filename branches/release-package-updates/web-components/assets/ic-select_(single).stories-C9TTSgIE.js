import{a as e,i as ee}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./lit-html-CMAkC4Hj.js";import{n as te,t as r}from"./taggedTemplateLiteral-2dP4OITE.js";var ne=e({AriaLiveBehaviour:()=>W,AsyncDefault:()=>T,CustomComponents:()=>j,CustomPlaceholder:()=>A,Default:()=>w,DefaultValue:()=>E,Disabled:()=>N,DisabledOptions:()=>P,DisabledOptionsSelectOnEnter:()=>F,EmittingIcOptionSelectOnEnter:()=>J,FullWidth:()=>I,Groups:()=>B,HelperText:()=>k,HiddenLabel:()=>L,HiddenMenuOptionLabels:()=>H,InForm:()=>q,Internationalisation:()=>Y,LoadingWithError:()=>K,Playground:()=>Z,ReadOnly:()=>z,Recommended:()=>V,Required:()=>R,ScrollBehaviour:()=>G,Sizes:()=>M,Validation:()=>U,WithClearButton:()=>D,WithDescriptions:()=>O,__namedExportsOrder:()=>Q,default:()=>C}),re,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,ie,ae,oe,se,ce,le,ue,x,de,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=ee((()=>{t(),te(),S={disabled:!1,"full-width":!1,"helper-text":`Select one option from the list`,"hide-label":!1,loading:!1,loadingLabel:`Loading...`,label:`What is your favourite coffee?`,placeholder:`Select an option`,readonly:!1,required:!1,size:`medium`,validationAriaLive:`polite`,validationStatus:`no status`,"validation-text":``,"show-clear-button":!1,theme:`inherit`},C={title:`Web Components/Select/Single`,component:`ic-select`},w={render:()=>n(re||=r([`<ic-select
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
      <\/script>`])),name:`Default`},T={render:()=>n(i||=r([`<ic-select
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
      <\/script>`])),name:`Async default`},E={render:()=>n(a||=r([`<ic-select
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
      <\/script>`])),name:`Default value`},D={render:()=>n(o||=r([`<ic-select
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
      <\/script>`])),name:`With clear button`},O={render:()=>n(s||=r([`<ic-select
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
      <\/script>`])),name:`With descriptions`},k={render:()=>n(c||=r([`<ic-select
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
      <\/script>`])),name:`Helper text`},A={render:()=>n(l||=r([`<ic-select
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
      <\/script>`])),name:`Custom placeholder`},j={render:()=>n(u||=r([`<ic-select
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
      <\/script>`])),name:`Custom components`},M={render:()=>n(d||=r([`<div style="display: flex; flex-direction: column; gap: 16px;">
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
    </div>`])),name:`Sizes`},N={render:()=>n(f||=r([`<ic-select
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
      <\/script>`])),name:`Disabled`},P={render:()=>n(p||=r([`<ic-select
        id="select-disabled-options"
        label="What is your favourite coffee?"
      ></ic-select>
      <script>
        var select = document.querySelector("#select-disabled-options");
        select.options = [
          { label: "Mocha", value: "Moc", disabled: true },
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat", disabled: true },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect: " + event.detail.value);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect disabled: " + event.detail.disabled);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect detail: " + JSON.stringify(event.detail));
        });
        select.addEventListener("icOpen", function () {
          console.log("select dropdown opened");
        });
        select.addEventListener("icClose", function () {
          console.log("select dropdown closed");
        });
      <\/script>`])),name:`Disabled options`},F={render:()=>n(m||=r([`<ic-select
        id="select-disabled-options"
        label="What is your favourite coffee?"
        select-on-enter
      ></ic-select>
      <script>
        var select = document.querySelector("#select-disabled-options");
        select.options = [
          { label: "Mocha", value: "Moc", disabled: true },
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat", disabled: true },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect: " + event.detail.value);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect disabled: " + event.detail.disabled);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect detail: " + JSON.stringify(event.detail));
        });
        select.addEventListener("icOpen", function () {
          console.log("select dropdown opened");
        });
        select.addEventListener("icClose", function () {
          console.log("select dropdown closed");
        });
      <\/script>`])),name:`Disabled options select on enter`},I={render:()=>n(h||=r([`<ic-select
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
      <\/script>`])),name:`Full width`},L={render:()=>n(g||=r([`<ic-select
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
      <\/script>`])),name:`Hidden label`},R={render:()=>n(_||=r([`<ic-select
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
      <\/script>`])),name:`Required`},z={render:()=>n(v||=r([`<ic-select
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
      <\/script>`])),name:`Read-only`},B={render:()=>n(y||=r([`<ic-select
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
      <\/script>`])),name:`Groups`},V={render:()=>n(b||=r([`<ic-select
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
      <\/script>`])),name:`Recommended`},H={render:()=>n(ie||=r([`<ic-select
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
      <\/script>`])),name:`Hidden menu option labels`},U={render:()=>n(ae||=r([`<ic-select
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
      <\/script>`])),name:`Validation`},W={render:()=>n(oe||=r([`<ic-select
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
      <\/script>`])),name:`Aria-live behaviour`},G={render:()=>n(se||=r([`<ic-select
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
      <\/script>`])),name:`Scroll behaviour`},K={render:()=>n(ce||=r([`<ic-select
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
      <\/script>`])),name:`Loading with error`},q={render:()=>n(le||=r([`
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
  `])),name:`In form`},J={render:()=>n(ue||=r([`<ic-select
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
      <\/script>`])),name:`Emitting icOptionSelect on enter`},Y={render:()=>n(x||=r([` <p>
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
      <\/script>`])),name:`Internationalisation (+ options with htmlProps)`},X=`inline-radio`,Z={render:e=>n(de||=r([` <ic-select
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
      <\/script>`]),e.disabled,e[`full-width`],e[`helper-text`],e[`hide-label`],e.loading,e[`loading-label`],e.label,e.placeholder,e.readonly,e.required,e[`show-clear-button`],e.size,e.validationAriaLive,e.validationStatus===`no status`?``:e.validationStatus,e[`validation-text`],e.theme,e.showIcon&&n` <svg
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
        </svg>`),name:`Playground`,args:S,argTypes:{validationAriaLive:{options:[`polite`,`assertive`,`off`],control:{type:X}},validationStatus:{defaultValue:`no status`,options:[`no status`,`error`,`success`,`warning`],control:{type:`select`}},size:{options:[`small`,`medium`,`large`],control:{type:X}},showIcon:{control:{type:`boolean`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:X}}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
        id="select-disabled-options"
        label="What is your favourite coffee?"
      ></ic-select>
      <script>
        var select = document.querySelector("#select-disabled-options");
        select.options = [
          { label: "Mocha", value: "Moc", disabled: true },
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat", disabled: true },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect: " + event.detail.value);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect disabled: " + event.detail.disabled);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect detail: " + JSON.stringify(event.detail));
        });
        select.addEventListener("icOpen", function () {
          console.log("select dropdown opened");
        });
        select.addEventListener("icClose", function () {
          console.log("select dropdown closed");
        });
      <\/script>\`,
  name: "Disabled options"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
        id="select-disabled-options"
        label="What is your favourite coffee?"
        select-on-enter
      ></ic-select>
      <script>
        var select = document.querySelector("#select-disabled-options");
        select.options = [
          { label: "Mocha", value: "Moc", disabled: true },
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat", disabled: true },
          { label: "Americano", value: "Ame" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect: " + event.detail.value);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect disabled: " + event.detail.disabled);
        });
        select.addEventListener("icOptionSelect", function (event) {
          console.log("icOptionSelect detail: " + JSON.stringify(event.detail));
        });
        select.addEventListener("icOpen", function () {
          console.log("select dropdown opened");
        });
        select.addEventListener("icClose", function () {
          console.log("select dropdown closed");
        });
      <\/script>\`,
  name: "Disabled options select on enter"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=`Default.AsyncDefault.DefaultValue.WithClearButton.WithDescriptions.HelperText.CustomPlaceholder.CustomComponents.Sizes.Disabled.DisabledOptions.DisabledOptionsSelectOnEnter.FullWidth.HiddenLabel.Required.ReadOnly.Groups.Recommended.HiddenMenuOptionLabels.Validation.AriaLiveBehaviour.ScrollBehaviour.LoadingWithError.InForm.EmittingIcOptionSelectOnEnter.Internationalisation.Playground`.split(`.`)}));$();export{W as AriaLiveBehaviour,T as AsyncDefault,j as CustomComponents,A as CustomPlaceholder,w as Default,E as DefaultValue,N as Disabled,P as DisabledOptions,F as DisabledOptionsSelectOnEnter,J as EmittingIcOptionSelectOnEnter,I as FullWidth,B as Groups,k as HelperText,L as HiddenLabel,H as HiddenMenuOptionLabels,q as InForm,Y as Internationalisation,K as LoadingWithError,Z as Playground,z as ReadOnly,V as Recommended,R as Required,G as ScrollBehaviour,M as Sizes,U as Validation,D as WithClearButton,O as WithDescriptions,Q as __namedExportsOrder,C as default,$ as n,ne as t};