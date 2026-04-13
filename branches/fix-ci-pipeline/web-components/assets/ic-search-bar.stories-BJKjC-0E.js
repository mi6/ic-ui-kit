var C=Object.freeze,_=Object.defineProperty;var r=(a,H)=>C(_(a,"raw",{value:C(H||a.slice())}));import{x as e}from"./lit-html-CWQq0DyO.js";const B={autocapitalize:"off",autocorrect:"off",autofocus:!1,charactersUntilSuggestion:2,disableAutoFiltering:!1,disabled:!1,focusOnLoad:!0,fullWidth:!1,helperText:"",hideLabel:!1,label:"What is your favourite coffee?",loading:!1,placeholder:"Search",readonly:!1,required:!1,size:"medium",spellcheck:!1,theme:"inherit"},U={title:"Web Components/Search bar",component:"ic-search-bar"},l={render:()=>e` <ic-search-bar label="What is your favourite coffee?">
    </ic-search-bar>`,name:"Default"};var F;const o={render:()=>e(F||(F=r([` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
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
      <\/script>`]))),name:"Basic"};var A;const n={render:()=>e(A||(A=r([` <ic-search-bar
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
      <\/script>`]))),name:"With custom label and value fields"};var q;const t={render:()=>e(q||(q=r([` <ic-search-bar
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
      <\/script>`]))),name:"With options"};var D;const s={render:()=>e(D||(D=r([` <ic-search-bar
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
      <\/script>`]))),name:"With options (no filtering)"},c={render:()=>e` <form>
      <ic-search-bar
        name="search-01"
        label="What is your favourite coffee?"
      ></ic-search-bar>
    </form>`,name:"In a form"};var L;const i={render:()=>e(L||(L=r([` <ic-search-bar
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
      <\/script>`]))),name:"Helper text"},u={render:()=>e` <ic-search-bar
      label="What is your favourite coffee?"
      size="small"
    ></ic-search-bar>`,name:"Small"},p={render:()=>e` <ic-search-bar
      label="What is your favourite coffee?"
      hide-label
    ></ic-search-bar>`,name:"Hidden label"},h={render:()=>e` <ic-search-bar
      label="What is your favourite coffee?"
      disabled
    ></ic-search-bar>`,name:"Disabled"};var x;const b={render:()=>e(x||(x=r([` <ic-search-bar
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
      <\/script>`]))),name:"Full width"};var M;const d={render:()=>e(M||(M=r([` <ic-search-bar
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
      <\/script>`]))),name:"External filtering"};var k;const m={render:()=>e(k||(k=r([` <ic-search-bar
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
      <\/script>`]))),name:"External filtering with loading"};var T;const f={render:()=>e(T||(T=r([` <ic-search-bar
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
      <\/script>`]))),name:"External filtering with custom loading messages"};var $;const v={render:()=>e($||($=r([` <ic-search-bar
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
      <\/script>`]))),name:"Query search mode"};var I;const y={render:()=>e(I||(I=r([` <ic-search-bar
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
      <\/script>`]))),name:"Empty option list text"};var R;const g={render:()=>e(R||(R=r([` <ic-search-bar
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
      <\/script>`]))),name:"Characters until suggestion"};var P;const S={render:()=>e(P||(P=r([` <ic-search-bar
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
      <\/script>`]))),name:"Hint text"};var O;const E={render:()=>e(O||(O=r([` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
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
      <\/script>`]))),name:"Long option labels"},w="inline-radio";var z;const W={render:a=>e(z||(z=r([`<ic-search-bar
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
      <\/script>`])),a.autocapitalize,a.autocorrect,a.autofocus,a.charactersUntilSuggestion,a.disableAutoFiltering,a.disabled,a.focusOnLoad,a.fullWidth,a.helperText,a.hideLabel,a.label,a.loading,a.placeholder),args:B,argTypes:{autocapitalize:{options:["off","none","on","sentences","words","characters"],control:{type:"select"}},autocorrect:{options:["on","off"],control:{type:w}},size:{options:["medium","small"],control:{type:w}},theme:{options:["inherit","light","dark"],control:{type:w}}},name:"Playground"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar label="What is your favourite coffee?">
    </ic-search-bar>\`,
  name: "Default"
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\` <form>
      <ic-search-bar
        name="search-01"
        label="What is your favourite coffee?"
      ></ic-search-bar>
    </form>\`,
  name: "In a form"
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
      label="What is your favourite coffee?"
      size="small"
    ></ic-search-bar>\`,
  name: "Small"
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
      label="What is your favourite coffee?"
      hide-label
    ></ic-search-bar>\`,
  name: "Hidden label"
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-search-bar
      label="What is your favourite coffee?"
      disabled
    ></ic-search-bar>\`,
  name: "Disabled"
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};const Q=["Default","Basic","WithCustomLabelAndValueFields","WithOptions","WithOptionsNoFiltering","InAForm","HelperText","Small","HiddenLabel","Disabled","FullWidth","ExternalFiltering","ExternalFilteringWithLoading","ExternalFilteringWithCustomLoadingMessages","QuerySearchMode","EmptyOptionListText","CharactersUntilSuggestion","HintText","LongOptionLabels","Playground"],V=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,CharactersUntilSuggestion:g,Default:l,Disabled:h,EmptyOptionListText:y,ExternalFiltering:d,ExternalFilteringWithCustomLoadingMessages:f,ExternalFilteringWithLoading:m,FullWidth:b,HelperText:i,HiddenLabel:p,HintText:S,InAForm:c,LongOptionLabels:E,Playground:W,QuerySearchMode:v,Small:u,WithCustomLabelAndValueFields:n,WithOptions:t,WithOptionsNoFiltering:s,__namedExportsOrder:Q,default:U},Symbol.toStringTag,{value:"Module"}));export{V as I};
