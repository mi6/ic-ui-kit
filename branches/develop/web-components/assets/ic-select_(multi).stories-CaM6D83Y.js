import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";import{n as i,t as a}from"./taggedTemplateLiteral-2dP4OITE.js";var o=e({AsyncDefault:()=>A,CustomComponents:()=>I,CustomPlaceholder:()=>F,Default:()=>k,DefaultValue:()=>j,Disabled:()=>R,DisabledOptions:()=>z,FullWidth:()=>B,Groups:()=>W,HelperText:()=>P,HiddenLabel:()=>V,InForm:()=>Y,LoadingWithError:()=>J,Playground:()=>Z,ReadOnly:()=>U,Recommended:()=>G,Required:()=>H,ScrollBehaviour:()=>q,Sizes:()=>L,Validation:()=>K,WithClearButton:()=>M,WithDescriptions:()=>N,__namedExportsOrder:()=>Q,default:()=>O}),ee,te,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{n(),i(),D={disabled:!1,"full-width":!1,"helper-text":`Select some options from the list`,"hide-label":!1,loading:!1,loadingLabel:`Loading...`,label:`What are your favourite types of coffee?`,placeholder:`Select an option`,readonly:!1,required:!1,size:`medium`,validationAriaLive:`polite`,validationStatus:`no status`,"validation-text":``,"show-clear-button":!1,theme:`inherit`},O={title:`Web Components/Select/Multi`,component:`ic-select`},k={render:()=>r(ee||=a([`<ic-select
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
      <\/script>`])),name:`Default`},A={render:()=>r(te||=a([`<ic-select
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
      <\/script>`])),name:`Async default`},j={render:()=>r(s||=a([`<ic-select
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
      <\/script>`])),name:`Default value`},M={render:()=>r(c||=a([`<ic-select
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
      <\/script>`])),name:`With clear button`},N={render:()=>r(l||=a([`<ic-select
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
      <\/script>`])),name:`With descriptions`},P={render:()=>r(u||=a([`<ic-select
        label="What are your favourite types of coffee?"
        multiple
        helper-text="Select some options from the list"
      ></ic-select>
      <br />
      <ic-select label="What are your favourite types of coffee?" multiple
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
      <\/script>`])),name:`Helper text`},F={render:()=>r(d||=a([`<ic-select
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
      <\/script>`])),name:`Custom placeholder`},I={render:()=>r(f||=a([`<ic-select
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
          { label: "Filter", value: "Fil" },
          { label: "Flat white", value: "Fla" },
          { label: "Mocha", value: "Moc" },
          { label: "Macchiato", value: "Mac" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      <\/script>`],[`<ic-select
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
              component: \\\`<ic-status-tag label="Neutral status"></ic-status-tag>\\\`,
              ariaLabel: "Neutral status tag",
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
          { label: "Filter", value: "Fil" },
          { label: "Flat white", value: "Fla" },
          { label: "Mocha", value: "Moc" },
          { label: "Macchiato", value: "Mac" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      <\/script>`])),name:`Custom components`},L={render:()=>r(p||=a([`<div style="display: flex; flex-direction: column; gap: 16px;">
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
      <\/script>
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
      <\/script>
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
      <\/script>
    </div>`])),name:`Sizes`},R={render:()=>r(m||=a([`<ic-select
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
      <\/script>`])),name:`Disabled`},z={render:()=>r(h||=a([`<ic-select
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
      <\/script>`])),name:`Disabled options`},B={render:()=>r(g||=a([`<ic-select
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
      <\/script>`])),name:`Full width`},V={render:()=>r(_||=a([`<ic-select
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
      <\/script>`])),name:`Hidden label`},H={render:()=>r(v||=a([`<ic-select
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
      <\/script>`])),name:`Required`},U={render:()=>r(y||=a([`<ic-select
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
      <\/script>`])),name:`Read-only`},W={render:()=>r(b||=a([`<ic-select
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
      <\/script>`])),name:`Groups`},G={render:()=>r(x||=a([`<ic-select
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
      <\/script>`])),name:`Recommended`},K={render:()=>r(S||=a([`<ic-select
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
      <\/script>
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
      <\/script>
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
      <\/script>`])),name:`Validation`},q={render:()=>r(C||=a([`<ic-select
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
      <\/script>`])),name:`Scroll behaviour`},J={render:()=>r(w||=a([`<ic-select
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
      <\/script>`])),name:`Loading with error`},Y={render:()=>r(T||=a([`
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
    <\/script>
  `])),name:`In form`},X=`inline-radio`,Z={render:e=>r(E||=a([` <ic-select
        id="select-playground"
        multiple
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
      <\/script>`]),e.disabled,e[`full-width`],e[`helper-text`],e[`hide-label`],e.loading,e[`loading-label`],e.label,e.placeholder,e.readonly,e.required,e[`show-clear-button`],e.size,e.validationAriaLive,e.validationStatus===`no status`?``:e.validationStatus,e[`validation-text`],e.theme,e.showIcon&&r` <svg
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
        </svg>`),name:`Playground`,args:D,argTypes:{validationAriaLive:{options:[`polite`,`assertive`,`off`],control:{type:X}},validationStatus:{defaultValue:`no status`,options:[`no status`,`error`,`success`,`warning`],control:{type:`select`}},size:{options:[`small`,`medium`,`large`],control:{type:X}},showIcon:{control:{type:`boolean`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:X}}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Default"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Async default"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Default value"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "With clear button"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "With descriptions"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
        label="What are your favourite types of coffee?"
        multiple
        helper-text="Select some options from the list"
      ></ic-select>
      <br />
      <ic-select label="What are your favourite types of coffee?" multiple
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
      <\/script>\`,
  name: "Helper text"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Custom placeholder"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
              component: \\\`<ic-status-tag label="Neutral status"></ic-status-tag>\\\`,
              ariaLabel: "Neutral status tag",
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
          { label: "Filter", value: "Fil" },
          { label: "Flat white", value: "Fla" },
          { label: "Mocha", value: "Moc" },
          { label: "Macchiato", value: "Mac" },
        ];
        select.addEventListener("icChange", function (event) {
          console.log("icChange: " + event.detail.value);
        });
      <\/script>\`,
  name: "Custom components"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: flex; flex-direction: column; gap: 16px;">
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
      <\/script>
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
      <\/script>
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
      <\/script>
    </div>\`,
  name: "Sizes"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Disabled"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Disabled options"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Full width"
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Hidden label"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Required"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Read-only"
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Groups"
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Recommended"
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>
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
      <\/script>
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
      <\/script>\`,
  name: "Validation"
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Scroll behaviour"
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Loading with error"
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
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
    <\/script>
  \`,
  name: "In form"
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => html\` <ic-select
        id="select-playground"
        multiple
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
          fill="#000000"
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`AsyncDefault`,`DefaultValue`,`WithClearButton`,`WithDescriptions`,`HelperText`,`CustomPlaceholder`,`CustomComponents`,`Sizes`,`Disabled`,`DisabledOptions`,`FullWidth`,`HiddenLabel`,`Required`,`ReadOnly`,`Groups`,`Recommended`,`Validation`,`ScrollBehaviour`,`LoadingWithError`,`InForm`,`Playground`]}));$();export{A as AsyncDefault,I as CustomComponents,F as CustomPlaceholder,k as Default,j as DefaultValue,R as Disabled,z as DisabledOptions,B as FullWidth,W as Groups,P as HelperText,V as HiddenLabel,Y as InForm,J as LoadingWithError,Z as Playground,U as ReadOnly,G as Recommended,H as Required,q as ScrollBehaviour,L as Sizes,K as Validation,M as WithClearButton,N as WithDescriptions,Q as __namedExportsOrder,O as default,$ as n,o as t};