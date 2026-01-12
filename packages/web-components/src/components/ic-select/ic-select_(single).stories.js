/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
  ["show-clear-button"]: false,
  theme: "inherit",
};

export default {
  title: "Web Components/Select/Single",
  component: "ic-select",
};

export const Default = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Default",
};

export const AsyncDefault = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Async default",
};

export const DefaultValue = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Default value",
};

export const WithClearButton = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "With clear button",
};

export const WithDescriptions = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "With descriptions",
};

export const HelperText = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Helper text",
};

export const CustomPlaceholder = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Custom placeholder",
};

export const CustomComponents = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Custom components",
};

export const Sizes = {
  render: () =>
    html`<div style="display: flex; flex-direction: column; gap: 16px;">
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
    </div>`,

  name: "Sizes",
};

export const Disabled = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Disabled",
};

export const DisabledOptions = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Disabled options",
};

export const FullWidth = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Full width",
};

export const HiddenLabel = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Hidden label",
};

export const Required = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Required",
};

export const ReadOnly = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Read-only",
};

export const Groups = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Groups",
};

export const Recommended = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Recommended",
};

export const HiddenMenuOptionLabels = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Hidden menu option labels",
};

export const Validation = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Validation",
};

export const AriaLiveBehaviour = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Aria-live behaviour",
};

export const ScrollBehaviour = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Scroll behaviour",
};

export const LoadingWithError = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Loading with error",
};

export const InForm = {
  render: () => html`
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
  `,

  name: "In form",
};

export const EmittingIcOptionSelectOnEnter = {
  render: () =>
    html`<ic-select
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
      </script>`,

  name: "Emitting icOptionSelect on enter",
};

export const Internationalisation = {
  render: () =>
    html` <p>
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
      </script>`,

  name: "Internationalisation (+ options with htmlProps)",
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
