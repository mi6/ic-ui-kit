import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";import{n as i,t as a}from"./taggedTemplateLiteral-pWa2IaV6.js";var o=e({Basic:()=>T,CharactersUntilSuggestion:()=>B,Default:()=>w,Disabled:()=>N,EmptyOptionListText:()=>z,ExternalFiltering:()=>F,ExternalFilteringWithCustomLoadingMessages:()=>L,ExternalFilteringWithLoading:()=>I,FullWidth:()=>P,HelperText:()=>A,HiddenLabel:()=>M,HintText:()=>V,InAForm:()=>k,LongOptionLabels:()=>H,Playground:()=>W,QuerySearchMode:()=>R,Small:()=>j,WithCustomLabelAndValueFields:()=>E,WithOptions:()=>D,WithOptionsNoFiltering:()=>O,__namedExportsOrder:()=>G,default:()=>C}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K=t((()=>{n(),i(),S={autocapitalize:`off`,autocorrect:`off`,autofocus:!1,charactersUntilSuggestion:2,disableAutoFiltering:!1,disabled:!1,focusOnLoad:!0,fullWidth:!1,helperText:``,hideLabel:!1,label:`What is your favourite coffee?`,loading:!1,placeholder:`Search`,readonly:!1,required:!1,size:`medium`,spellcheck:!1,theme:`inherit`},C={title:`Web Components/Search bar`,component:`ic-search-bar`},w={render:()=>r` <ic-search-bar label="What is your favourite coffee?">
    </ic-search-bar>`,name:`Default`},T={render:()=>r(s||=a([` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
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
      <\/script>`])),name:`Basic`},E={render:()=>r(c||=a([` <ic-search-bar
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
      <\/script>`])),name:`With custom label and value fields`},D={render:()=>r(l||=a([` <ic-search-bar
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
      <\/script>`])),name:`With options`},O={render:()=>r(u||=a([` <ic-search-bar
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
      <\/script>`])),name:`With options (no filtering)`},k={render:()=>r` <form>
      <ic-search-bar
        name="search-01"
        label="What is your favourite coffee?"
      ></ic-search-bar>
    </form>`,name:`In a form`},A={render:()=>r(d||=a([` <ic-search-bar
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
      <\/script>`])),name:`Helper text`},j={render:()=>r` <ic-search-bar
      label="What is your favourite coffee?"
      size="small"
    ></ic-search-bar>`,name:`Small`},M={render:()=>r` <ic-search-bar
      label="What is your favourite coffee?"
      hide-label
    ></ic-search-bar>`,name:`Hidden label`},N={render:()=>r` <ic-search-bar
      label="What is your favourite coffee?"
      disabled
    ></ic-search-bar>`,name:`Disabled`},P={render:()=>r(f||=a([` <ic-search-bar
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
      <\/script>`])),name:`Full width`},F={render:()=>r(p||=a([` <ic-search-bar
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
      <\/script>`])),name:`External filtering`},I={render:()=>r(m||=a([` <ic-search-bar
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
      <\/script>`])),name:`External filtering with loading`},L={render:()=>r(h||=a([` <ic-search-bar
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
      <\/script>`])),name:`External filtering with custom loading messages`},R={render:()=>r(g||=a([` <ic-search-bar
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
      <\/script>`])),name:`Query search mode`},z={render:()=>r(_||=a([` <ic-search-bar
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
      <\/script>`])),name:`Empty option list text`},B={render:()=>r(v||=a([` <ic-search-bar
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
      <\/script>`])),name:`Characters until suggestion`},V={render:()=>r(y||=a([` <ic-search-bar
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
      <\/script>`])),name:`Hint text`},H={render:()=>r(b||=a([` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
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
      <\/script>`])),name:`Long option labels`},U=`inline-radio`,W={render:e=>r(x||=a([`<ic-search-bar
        autocapitalize=`,`
        autocorrect=`,`
        autofocus=`,`
        characters-until-suggestion=`,`
        disable-auto-filtering=`,`
        disabled=`,`
        focus-on-load=`,`
        full-width=`,`
        helper-text=`,`
        hide-label=`,`
        label=`,`
        loading=`,`
        placeholder=`,`
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
      <\/script>`]),e.autocapitalize,e.autocorrect,e.autofocus,e.charactersUntilSuggestion,e.disableAutoFiltering,e.disabled,e.focusOnLoad,e.fullWidth,e.helperText,e.hideLabel,e.label,e.loading,e.placeholder),args:S,argTypes:{autocapitalize:{options:[`off`,`none`,`on`,`sentences`,`words`,`characters`],control:{type:`select`}},autocorrect:{options:[`on`,`off`],control:{type:U}},size:{options:[`medium`,`small`],control:{type:U}},theme:{options:[`inherit`,`light`,`dark`],control:{type:U}}},name:`Playground`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar label="What is your favourite coffee?">
    </ic-search-bar>\`,
  name: "Default"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
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
      <\/script>\`,
  name: "Basic"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "With custom label and value fields"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "With options"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "With options (no filtering)"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\` <form>
      <ic-search-bar
        name="search-01"
        label="What is your favourite coffee?"
      ></ic-search-bar>
    </form>\`,
  name: "In a form"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "Helper text"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
      label="What is your favourite coffee?"
      size="small"
    ></ic-search-bar>\`,
  name: "Small"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
      label="What is your favourite coffee?"
      hide-label
    ></ic-search-bar>\`,
  name: "Hidden label"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
      label="What is your favourite coffee?"
      disabled
    ></ic-search-bar>\`,
  name: "Disabled"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "Full width"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "External filtering"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "External filtering with loading"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "External filtering with custom loading messages"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "Query search mode"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "Empty option list text"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "Characters until suggestion"
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
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
      <\/script>\`,
  name: "Hint text"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
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
      <\/script>\`,
  name: "Long option labels"
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-search-bar
        autocapitalize=\${args.autocapitalize}
        autocorrect=\${args.autocorrect}
        autofocus=\${args.autofocus}
        characters-until-suggestion=\${args.charactersUntilSuggestion}
        disable-auto-filtering=\${args.disableAutoFiltering}
        disabled=\${args.disabled}
        focus-on-load=\${args.focusOnLoad}
        full-width=\${args.fullWidth}
        helper-text=\${args.helperText}
        hide-label=\${args.hideLabel}
        label=\${args.label}
        loading=\${args.loading}
        placeholder=\${args.placeholder}
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
      <\/script>\`,
  args: defaultArgs,
  argTypes: {
    autocapitalize: {
      options: ["off", "none", "on", "sentences", "words", "characters"],
      control: {
        type: "select"
      }
    },
    autocorrect: {
      options: ["on", "off"],
      control: {
        type: inlineRadioSelector
      }
    },
    size: {
      options: ["medium", "small"],
      control: {
        type: inlineRadioSelector
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    }
  },
  name: "Playground"
}`,...W.parameters?.docs?.source}}},G=[`Default`,`Basic`,`WithCustomLabelAndValueFields`,`WithOptions`,`WithOptionsNoFiltering`,`InAForm`,`HelperText`,`Small`,`HiddenLabel`,`Disabled`,`FullWidth`,`ExternalFiltering`,`ExternalFilteringWithLoading`,`ExternalFilteringWithCustomLoadingMessages`,`QuerySearchMode`,`EmptyOptionListText`,`CharactersUntilSuggestion`,`HintText`,`LongOptionLabels`,`Playground`]}));K();export{T as Basic,B as CharactersUntilSuggestion,w as Default,N as Disabled,z as EmptyOptionListText,F as ExternalFiltering,L as ExternalFilteringWithCustomLoadingMessages,I as ExternalFilteringWithLoading,P as FullWidth,A as HelperText,M as HiddenLabel,V as HintText,k as InAForm,H as LongOptionLabels,W as Playground,R as QuerySearchMode,j as Small,E as WithCustomLabelAndValueFields,D as WithOptions,O as WithOptionsNoFiltering,G as __namedExportsOrder,C as default,K as n,o as t};