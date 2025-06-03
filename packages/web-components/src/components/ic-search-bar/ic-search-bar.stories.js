import { html } from "lit-html";

const defaultArgs = {
  autocapitalize: "off",
  autocorrect: "off",
  autofocus: false,
  charactersUntilSuggestion: 2,
  disableAutoFiltering: false,
  disabled: false,
  focusOnLoad: true,
  fullWidth: false,
  helperText: "",
  hideLabel: false,
  label: "What is your favourite coffee?",
  loading: false,
  placeholder: "Search",
  readonly: false,
  required: false,
  size: "medium",
  spellcheck: false,
  theme: "inherit",
};

export default {
  title: "Web Components/Search bar",
  component: "ic-search-bar",
};

export const Default = {
  render: (args) =>
    html` <ic-search-bar label="What is your favourite coffee?">
    </ic-search-bar>`,

  name: "Default",
};

export const Basic = {
  render: (args) =>
    html` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
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
      </script>`,

  name: "Basic",
};

export const WithCustomLabelAndValueFields = {
  render: (args) =>
    html` <ic-search-bar
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
      </script>`,

  name: "With custom label and value fields",
};

export const WithOptions = {
  render: (args) =>
    html` <ic-search-bar
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
      </script>`,

  name: "With options",
};

export const WithOptionsNoFiltering = {
  render: (args) =>
    html` <ic-search-bar
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
      </script>`,

  name: "With options (no filtering)",
};

export const InAForm = {
  render: (args) =>
    html` <form>
      <ic-search-bar
        name="search-01"
        label="What is your favourite coffee?"
      ></ic-search-bar>
    </form>`,

  name: "In a form",
};

export const HelperText = {
  render: (args) =>
    html` <ic-search-bar
        label="What is your favourite coffee?"
        helper-text="Some helper text"
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
      </script>`,

  name: "Helper text",
};

export const Small = {
  render: (args) =>
    html` <ic-search-bar
      label="What is your favourite coffee?"
      size="small"
    ></ic-search-bar>`,

  name: "Small",
};

export const HiddenLabel = {
  render: (args) =>
    html` <ic-search-bar
      label="What is your favourite coffee?"
      hide-label
    ></ic-search-bar>`,

  name: "Hidden label",
};

export const Disabled = {
  render: (args) =>
    html` <ic-search-bar
      label="What is your favourite coffee?"
      disabled
    ></ic-search-bar>`,

  name: "Disabled",
};

export const FullWidth = {
  render: (args) =>
    html` <ic-search-bar
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
      </script>`,

  name: "Full width",
};

export const ExternalFiltering = {
  render: (args) =>
    html` <ic-search-bar
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
      </script>`,

  name: "External filtering",
};

export const ExternalFilteringWithLoading = {
  render: (args) =>
    html` <ic-search-bar
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
      </script>`,

  name: "External filtering with loading",
};

export const ExternalFilteringWithCustomLoadingMessages = {
  render: (args) =>
    html` <ic-search-bar
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
      </script>`,

  name: "External filtering with custom loading messages",
};

export const QuerySearchMode = {
  render: (args) =>
    html` <ic-search-bar
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
      </script>`,

  name: "Query search mode",
};

export const EmptyOptionListText = {
  render: (args) =>
    html` <ic-search-bar
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
      </script>`,

  name: "Empty option list text",
};

export const CharactersUntilSuggestion = {
  render: (args) =>
    html` <ic-search-bar
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
      </script>`,

  name: "Characters until suggestion",
};

export const HintText = {
  render: (args) =>
    html` <ic-search-bar
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
      </script>`,

  name: "Hint text",
};

export const LongOptionLabels = {
  render: (args) =>
    html` <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
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
      </script>`,

  name: "Long option labels",
};

const inlineRadioSelector = "inline-radio";

export const Playground = {
  render: (args) =>
    html`<ic-search-bar
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
      </script>`,

  args: defaultArgs,

  argTypes: {
    autocapitalize: {
      options: ["off", "none", "on", "sentences", "words", "characters"],

      control: {
        type: "select",
      },
    },

    autocorrect: {
      options: ["on", "off"],

      control: {
        type: inlineRadioSelector,
      },
    },

    size: {
      options: ["medium", "small"],

      control: {
        type: inlineRadioSelector,
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: inlineRadioSelector,
      },
    },
  },

  name: "Playground",
};
