import { html } from "lit-html";

const defaultArgs = {
  disabled: false,
  ["full-width"]: false,
  ["helper-text"]: "Select some options from the list",
  ["hide-label"]: false,
  loading: false,
  loadingLabel: "Loading...",
  label: "What are your favourite types of coffee?",
  placeholder: "Select an option",
  readonly: false,
  required: false,
  size: "medium",
  validationAriaLive: "polite",
  validationStatus: "no status",
  ["validation-text"]: "",
  ["show-clear-button"]: false,
  theme: "inherit",
};

export default {
  title: "Web Components/Select/Multi",
  component: "ic-select",
};

export const Default = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Default",
};

export const AsyncDefault = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Async default",
};

export const DefaultValue = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Default value",
};

export const WithClearButton = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "With clear button",
};

export const WithDescriptions = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "With descriptions",
};

export const HelperText = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Helper text",
};

export const CustomPlaceholder = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Custom placeholder",
};

export const CustomComponents = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Custom components",
};

export const Sizes = {
  render: () =>
    html`<div style="display: flex; flex-direction: column; gap: 16px;">
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
      </script>
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
      </script>
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
      </script>
    </div>`,

  name: "Sizes",
};

export const Disabled = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Disabled",
};

export const DisabledOptions = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Disabled options",
};

export const FullWidth = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Full width",
};

export const HiddenLabel = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Hidden label",
};

export const Required = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Required",
};

export const ReadOnly = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Read-only",
};

export const Groups = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Groups",
};

export const Recommended = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Recommended",
};

export const Validation = {
  render: () =>
    html`<ic-select
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
      </script>
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
      </script>
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
      </script>`,

  name: "Validation",
};

export const ScrollBehaviour = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Scroll behaviour",
};

export const LoadingWithError = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Loading with error",
};

export const InForm = {
  render: () => html`
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
    </script>
  `,

  name: "In form",
};

const inlineRadioSelector = "inline-radio";

export const Playground = {
  render: (args) =>
    html` <ic-select
        id="select-playground"
        multiple
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
          fill="#000000"
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
