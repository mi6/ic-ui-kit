import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";import{n as i,t as a}from"./taggedTemplateLiteral-2dP4OITE.js";var o=e({AsyncDefault:()=>A,Default:()=>k,DefaultValue:()=>j,Disabled:()=>L,DisabledOptions:()=>R,EmittingIcOptionSelectOnEnter:()=>Y,ExternalFiltering:()=>K,FilterByStartOfOptions:()=>M,Groups:()=>V,GroupsGroupTitlesIncludedInSearch:()=>H,HelperText:()=>F,HiddenLabel:()=>z,InForm:()=>q,Playground:()=>Z,Recommended:()=>U,Required:()=>B,ScrollBehaviour:()=>G,Sizes:()=>I,UpdateInputValueFromExternalRequest:()=>J,Validation:()=>W,WithDescriptions:()=>N,WithDescriptionsIncludedInSearch:()=>P,__namedExportsOrder:()=>Q,default:()=>O}),ee,te,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{n(),i(),D={disabled:!1,"full-width":!1,"helper-text":`Select one option from the list`,"hide-label":!1,loading:!1,loadingLabel:`Loading...`,label:`What is your favourite coffee?`,placeholder:`Select an option`,readonly:!1,required:!1,size:`medium`,validationAriaLive:`polite`,validationStatus:`no status`,"validation-text":``,"include-descriptions-in-search":!1,"include-group-titles-in-search":!1,"search-match-position":`anywhere`,theme:`inherit`},O={title:`Web Components/Select/Searchable`,component:`ic-select`},k={render:()=>r(ee||=a([`<ic-select
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
      <\/script>`])),name:`Default`},A={render:()=>r(te||=a([`<ic-select
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
      <\/script>`])),name:`Async default`},j={render:()=>r(s||=a([`<ic-select
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
      <\/script>`])),name:`Default value`},M={render:()=>r(c||=a([`<ic-select
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
      <\/script>`])),name:`Filter by start of options`},N={render:()=>r(l||=a([`<ic-select
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
      <\/script>`])),name:`With descriptions`},P={render:()=>r(u||=a([`<ic-select
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
      <\/script>`])),name:`With descriptions (included in search)`},F={render:()=>r(d||=a([`<ic-select
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
      <\/script>`])),name:`Helper text`},I={render:()=>r(f||=a([`<div style="display: flex; flex-direction: column; gap: 16px;">
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
      <\/script>
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
      <\/script>
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
      <\/script>
    </div>`])),name:`Sizes`},L={render:()=>r(p||=a([`<ic-select
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
      <\/script>`])),name:`Disabled`},R={render:()=>r(m||=a([`<ic-select
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
      <\/script>`])),name:`Disabled options`},z={render:()=>r(h||=a([`<ic-select
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
      <\/script>`])),name:`Hidden label`},B={render:()=>r(g||=a([`<ic-select
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
      <\/script>`])),name:`Required`},V={render:()=>r(_||=a([`<ic-select
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
      <\/script>`])),name:`Groups`},H={render:()=>r(v||=a([`<ic-select
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
      <\/script>`])),name:`Groups (group titles included in search)`},U={render:()=>r(y||=a([`<ic-select
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
      <\/script>`])),name:`Recommended`},W={render:()=>r(b||=a([`<ic-select
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
      <\/script>
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
      <\/script>
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
      <\/script>`])),name:`Validation`},G={render:()=>r(x||=a([`<ic-select
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
      <\/script>`])),name:`Scroll behaviour`},K={render:()=>r(S||=a([`<ic-select
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
      <\/script>`])),name:`External filtering`},q={render:()=>r(C||=a([`
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
    <\/script>
  `])),name:`In form`},J={render:()=>r(w||=a([`<ic-section-container>
        <ic-select
          id="select-external-request"
          searchable
          label="What is your favourite coffee? (searchable)"
        ></ic-select>
      </ic-section-container>
      <script>
        (() => {
          const searchSelect = document.getElementById(
            "select-external-request"
          );
          if (!searchSelect) return;
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
        })();
      <\/script>`])),name:`Update input value from external request`},Y={render:()=>r(T||=a([`<ic-select
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
      <\/script>`])),name:`Emitting icOptionSelect on enter`},X=`inline-radio`,Z={render:e=>r(E||=a([` <ic-select
        id="select-playground"
        disabled=`,`
        full-width=`,`
        helper-text=`,`
        hide-label=`,`
        include-descriptions-in-search=`,`
        include-group-titles-in-search=`,`
        loading=`,`
        loading-label=`,`
        label=`,`
        placeholder=`,`
        readonly=`,`
        required=`,`
        search-match-position=`,`
        searchable
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
      <\/script>`]),e.disabled,e[`full-width`],e[`helper-text`],e[`hide-label`],e[`include-descriptions-in-search`],e[`include-group-titles-in-search`],e.loading,e[`loading-label`],e.label,e.placeholder,e.readonly,e.required,e[`search-match-position`],e.size,e.validationAriaLive,e.validationStatus===`no status`?``:e.validationStatus,e[`validation-text`],e.theme,e.showIcon&&r` <svg
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
        </svg>`),name:`Playground`,args:D,argTypes:{"search-match-position":{defaultValue:`anywhere`,options:[`anywhere`,`start`],control:{type:X}},validationAriaLive:{options:[`polite`,`assertive`,`off`],control:{type:X}},validationStatus:{defaultValue:`no status`,options:[`no status`,`error`,`success`,`warning`],control:{type:`select`}},size:{options:[`small`,`medium`,`large`],control:{type:X}},showIcon:{control:{type:`boolean`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:X}}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Default"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Async default"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Default value"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Filter by start of options"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "With descriptions"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "With descriptions (included in search)"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Helper text"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: flex; flex-direction: column; gap: 16px;">
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
      <\/script>
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
      <\/script>
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
      <\/script>
    </div>\`,
  name: "Sizes"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Disabled"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Disabled options"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Hidden label"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Required"
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Groups"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Groups (group titles included in search)"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Recommended"
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>
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
      <\/script>
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
      <\/script>\`,
  name: "Validation"
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Scroll behaviour"
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "External filtering"
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
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
    <\/script>
  \`,
  name: "In form"
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-section-container>
        <ic-select
          id="select-external-request"
          searchable
          label="What is your favourite coffee? (searchable)"
        ></ic-select>
      </ic-section-container>
      <script>
        (() => {
          const searchSelect = document.getElementById(
            "select-external-request"
          );
          if (!searchSelect) return;
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
        })();
      <\/script>\`,
  name: "Update input value from external request"
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-select
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
      <\/script>\`,
  name: "Emitting icOptionSelect on enter"
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => html\` <ic-select
        id="select-playground"
        disabled=\${args.disabled}
        full-width=\${args["full-width"]}
        helper-text=\${args["helper-text"]}
        hide-label=\${args["hide-label"]}
        include-descriptions-in-search=\${args["include-descriptions-in-search"]}
        include-group-titles-in-search=\${args["include-group-titles-in-search"]}
        loading=\${args.loading}
        loading-label=\${args["loading-label"]}
        label=\${args.label}
        placeholder=\${args.placeholder}
        readonly=\${args.readonly}
        required=\${args.required}
        search-match-position=\${args["search-match-position"]}
        searchable
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
    ["search-match-position"]: {
      defaultValue: "anywhere",
      options: ["anywhere", "start"],
      control: {
        type: inlineRadioSelector
      }
    },
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`AsyncDefault`,`DefaultValue`,`FilterByStartOfOptions`,`WithDescriptions`,`WithDescriptionsIncludedInSearch`,`HelperText`,`Sizes`,`Disabled`,`DisabledOptions`,`HiddenLabel`,`Required`,`Groups`,`GroupsGroupTitlesIncludedInSearch`,`Recommended`,`Validation`,`ScrollBehaviour`,`ExternalFiltering`,`InForm`,`UpdateInputValueFromExternalRequest`,`EmittingIcOptionSelectOnEnter`,`Playground`]}));$();export{A as AsyncDefault,k as Default,j as DefaultValue,L as Disabled,R as DisabledOptions,Y as EmittingIcOptionSelectOnEnter,K as ExternalFiltering,M as FilterByStartOfOptions,V as Groups,H as GroupsGroupTitlesIncludedInSearch,F as HelperText,z as HiddenLabel,q as InForm,Z as Playground,U as Recommended,B as Required,G as ScrollBehaviour,I as Sizes,J as UpdateInputValueFromExternalRequest,W as Validation,N as WithDescriptions,P as WithDescriptionsIncludedInSearch,Q as __namedExportsOrder,O as default,$ as n,o as t};