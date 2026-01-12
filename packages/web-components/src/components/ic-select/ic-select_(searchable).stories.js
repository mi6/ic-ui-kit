import { html } from "lit-html";

const defaultArgs = {
  disabled: false,
  ["full-width"]: false,
  ["helper-text"]: "Select one option from the list",
  ["hide-label"]: false,
  loading: false,
  loadingLabel: "Loading...",
  label: "What is your favourite coffee?",
  placeholder: "Select an option",
  readonly: false,
  required: false,
  size: "medium",
  validationAriaLive: "polite",
  validationStatus: "no status",
  ["validation-text"]: "",
  ["include-descriptions-in-search"]: false,
  ["include-group-titles-in-search"]: false,
  ["search-match-position"]: "anywhere",
  theme: "inherit",
};

export default {
  title: "Web Components/Select/Searchable",
  component: "ic-select",
};

export const Default = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Default",
};

export const AsyncDefault = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Async default",
};

export const DefaultValue = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Default value",
};

export const FilterByStartOfOptions = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Filter by start of options",
};

export const WithDescriptions = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "With descriptions",
};

export const WithDescriptionsIncludedInSearch = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "With descriptions (included in search)",
};

export const HelperText = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Helper text",
};

export const Sizes = {
  render: () =>
    html`<div style="display: flex; flex-direction: column; gap: 16px;">
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
    </div>`,

  name: "Sizes",
};

export const Disabled = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Disabled",
};

export const DisabledOptions = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Disabled options",
};

export const HiddenLabel = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Hidden label",
};

export const Required = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Required",
};

export const Groups = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Groups",
};

export const GroupsGroupTitlesIncludedInSearch = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Groups (group titles included in search)",
};

export const Recommended = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Recommended",
};

export const Validation = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Validation",
};

export const ScrollBehaviour = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Scroll behaviour",
};

export const ExternalFiltering = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "External filtering",
};

export const InForm = {
  render: () => html`
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
  `,

  name: "In form",
};

export const UpdateInputValueFromExternalRequest = {
  render: () =>
    html`<ic-section-container>
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
      </script>`,

  name: "Update input value from external request",
};

export const EmittingIcOptionSelectOnEnter = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Emitting icOptionSelect on enter",
};

const inlineRadioSelector = "inline-radio";

export const Playground = {
  render: (args) =>
    html` <ic-select
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
        validation-status=${args.validationStatus === "no status"
          ? ""
          : args.validationStatus}
        validation-text=${args["validation-text"]}
        theme=${args.theme}
      >
        ${args.showIcon &&
        html` <svg
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
      </script>`,

  name: "Playground",
  args: defaultArgs,

  argTypes: {
    ["search-match-position"]: {
      defaultValue: "anywhere",
      options: ["anywhere", "start"],

      control: {
        type: inlineRadioSelector,
      },
    },

    validationAriaLive: {
      options: ["polite", "assertive", "off"],

      control: {
        type: inlineRadioSelector,
      },
    },

    validationStatus: {
      defaultValue: "no status",
      options: ["no status", "error", "success", "warning"],

      control: {
        type: "select",
      },
    },

    size: {
      options: ["small", "medium", "large"],

      control: {
        type: inlineRadioSelector,
      },
    },

    showIcon: {
      control: {
        type: "boolean",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: inlineRadioSelector,
      },
    },
  },
};
