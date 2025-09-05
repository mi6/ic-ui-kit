import { useArgs } from "@storybook/preview-api";
import { html } from "lit-html";

const defaultArgs = {
  additionalFieldDisplay: "dynamic",
  additionalFieldSlot: "additional-field",
  checked: false,
  disabled: false,
  dynamicText: "Dynamic text",
  groupLabel: "Checkbox group label",
  helperText: "Helper text",
  hideLabel: false,
  hideGroupLabel: false,
  indeterminate: false,
  label: "Checkbox label",
  nativeIndeterminateBehaviour: false,
  required: false,
  size: "medium",
  validationStatus: "no status",
  validationText: "",
  value: "checkbox-value",
  theme: "inherit",
};

export default {
  title: "Web Components/Checkbox",
  component: "Checkbox",
};

export const Default = {
  render: (args) => html`
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "Default",
};

export const Required = {
  render: (args) => html`
    <ic-checkbox-group label="This is a label" required name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "Required",
};

export const Disabled = {
  render: (args) => html`
    <ic-checkbox-group label="This is a label" name="group1" Disabled>
      <ic-checkbox
        value="valueName1"
        label="Unselected / Disabled 1"
        Disabled
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Unselected / Disabled 2"
        Disabled
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled 3"
        Disabled
      ></ic-checkbox>
      <ic-checkbox
        value="valueName4"
        label="Selected / Disabled"
        Disabled
        checked
      ></ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "Disabled",
};

export const Sizes = {
  render: (args) => html`
    <ic-checkbox-group
      size="large"
      label="These are checkboxes with the 'size' attribute set on them individually"
      name="group1"
    >
      <ic-checkbox
        size="small"
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        size="medium"
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        size="large"
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
    <ic-checkbox-group
      size="small"
      label="This is a checkbox group with small checkboxes"
      name="group1"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
    <ic-checkbox-group
      size="medium"
      label="This is a checkbox group with default-sized checkboxes"
      name="group1"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
    <ic-checkbox-group
      size="large"
      label="This is a checkbox group with large checkboxes"
      name="group1"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "Sizes",
};

export const HiddenGroupLabel = {
  render: (args) => html`
    <ic-checkbox-group label="This is a label" hide-label name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "Hidden group label",
};

export const HiddenCheckboxLabel = {
  render: (args) => html`
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
        hide-label
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
        hide-label
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
        hide-label
      ></ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "Hidden checkbox label",
};

export const ConditionalDynamic = {
  render: (args) => html`
    <script>
      function handleIcChange(ev) {
        console.log(
          ev.detail.selectedOption.label,
          ev.detail.selectedOption.checked
        );
      }
      document
        .querySelector("ic-checkbox-group")
        .addEventListener("icChange", handleIcChange);
    </script>
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName1"
        label="option1"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName2"
        label="option2 - error example"
      >
        <ic-text-field
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        >
        </ic-text-field>
      </ic-checkbox>
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName3"
        label="option3"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "Conditional dynamic",
};

export const ConditionalStatic = {
  render: (args) => html`
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox value="valueName1" label="option1">
        <ic-text-field
          slot="additional-field"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
      <ic-checkbox value="valueName2" label="option2"> </ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "Conditional static",
};

export const HelperText = {
  render: (args) => html`
    <ic-checkbox-group
      label="Coffee extras"
      name="group1"
      helper-text="Helper text provided by prop"
    >
      <ic-checkbox value="valueName1" label="Sugar"></ic-checkbox>
      <ic-checkbox value="valueName2" label="Milk" checked></ic-checkbox>
      <ic-checkbox value="valueName3" label="salt" Disabled></ic-checkbox>
    </ic-checkbox-group>
    <br />
    <ic-checkbox-group label="More coffee extras" name="group2">
      <ic-typography variant="caption" slot="helper-text">
        <span>
          Slotted helper text with a
          <ic-link href="#">helpful link to guidance</ic-link>
        </span>
      </ic-typography>
      <ic-checkbox value="valueName1" label="Shortbread"></ic-checkbox>
      <ic-checkbox value="valueName2" label="Scone" checked></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Ham Sandwich"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "Helper text",
};

export const Validation = {
  render: (args) => html`
    <ic-checkbox-group
      label="This is a label"
      name="group1"
      validation-status="error"
      validation-text="Error message"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "Validation",
};

export const Form = {
  render: (args) => html`
    <form>
      <ic-checkbox-group label="This is a label" name="group1">
        <ic-checkbox
          name="checkbox1"
          value="valueName1"
          label="Unselected / Default"
        ></ic-checkbox>
        <ic-checkbox
          name="checkbox2"
          value="valueName2"
          label="Selected / Default"
          checked
        ></ic-checkbox>
        <ic-checkbox
          name="checkbox3"
          value="valueName3"
          label="Unselected / Disabled"
          Disabled
        ></ic-checkbox>
      </ic-checkbox-group>
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
    <script>
      document.querySelector("form").addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log(
          document.querySelector('ic-checkbox[name="checkbox1"]').checked
        );
        console.log(
          document.querySelector('ic-checkbox[name="checkbox2"]').checked
        );
        console.log(
          document.querySelector('ic-checkbox[name="checkbox3"]').checked
        );
      });
    </script>
  `,

  name: "Form",
};

export const Indeterminate = {
  render: (args) => html`
    <script>
      var indeterminate = true;
      var nativeIndeterminate = true;
      var indeterminateTextEl = document.querySelector("#indeterminate-text");
      indeterminateTextEl.innerHTML = indeterminate;
      var checkedTextEl = document.querySelector("#checked-text");
      checkedTextEl.innerHTML = true;
      var nativeIndeterminateTextEl = document.querySelector(
        "#native-indeterminate-text"
      );
      nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
      var nativeCheckedTextEl = document.querySelector("#native-checked-text");
      nativeCheckedTextEl.innerHTML = true;
      function toggleIndeterminate() {
        indeterminate = !indeterminate;
        document.querySelector("#indeterminate-checkbox").indeterminate =
          indeterminate;
        indeterminateTextEl.innerHTML = indeterminate;
      }
      function toggleNativeIndeterminate() {
        nativeIndeterminate = !nativeIndeterminate;
        document.querySelector("#native-indeterminate-checkbox").indeterminate =
          nativeIndeterminate;
        nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
      }
      function icCheckHandler(ev) {
        document.querySelector("#checked-text").innerHTML = ev.target.checked;
      }
      function icCheckHandlerNative(ev) {
        document.querySelector("#native-checked-text").innerHTML =
          ev.target.checked;
      }
      document
        .querySelector("#indeterminate-button")
        .addEventListener("click", toggleIndeterminate);
      document
        .querySelector("#indeterminate-checkbox")
        .addEventListener("icCheck", icCheckHandler);
      document
        .querySelector("#native-indeterminate-button")
        .addEventListener("click", toggleNativeIndeterminate);
      document
        .querySelector("#native-indeterminate-checkbox")
        .addEventListener("icCheck", icCheckHandlerNative);
    </script>
    <div style="display:flex;gap:16px;flex-wrap:wrap">
      <div style="border:1px solid gray;padding:8px;">
        <ic-checkbox-group
          label="'native-indeterminate-behavior'=false"
          name="indeterminate"
        >
          <ic-checkbox
            id="indeterminate-checkbox"
            value="indeterminate"
            label="Indeterminate checkbox"
            checked="true"
            indeterminate="true"
          >
          </ic-checkbox>
        </ic-checkbox-group>
        <br />
        <ic-button id="indeterminate-button">Toggle indeterminate</ic-button>
        <br />
        <br />
        <span>Indeterminate: <span id="indeterminate-text"></span></span>
        <br />
        <span>Checked: <span id="checked-text"></span></span>
      </div>
      <div style="border:1px solid gray;padding:8px;">
        <ic-checkbox-group
          label="'native-indeterminate-behavior'=true"
          name="native_indeterminate"
        >
          <ic-checkbox
            id="native-indeterminate-checkbox"
            value="indeterminate"
            label="Indeterminate checkbox"
            checked="true"
            indeterminate="true"
            native-indeterminate-behaviour="true"
          >
          </ic-checkbox>
        </ic-checkbox-group>
        <br />
        <ic-button id="native-indeterminate-button"
          >Toggle indeterminate</ic-button
        >
        <br />
        <br />
        <span>Indeterminate: <span id="native-indeterminate-text"></span></span>
        <br />
        <span>Checked: <span id="native-checked-text"></span></span>
      </div>
    </div>
  `,

  name: "Indeterminate",
};

export const IndeterminateWithChildren = {
  render: (args) => html`
    <script>
      var drinksCheckbox = document.querySelector("#drinks-checkbox");
      var teaCheckbox = document.querySelector("#tea-checkbox");
      var coffeeCheckbox = document.querySelector("#coffee-checkbox");
      var juiceCheckbox = document.querySelector("#juice-checkbox");
      var drinksGroup = document.querySelector("#drinks-group");
      drinksCheckbox.addEventListener("icCheck", function (ev) {
        if (ev.target === drinksCheckbox) {
          teaCheckbox.checked = drinksCheckbox.checked;
          coffeeCheckbox.checked = drinksCheckbox.checked;
          juiceCheckbox.checked = drinksCheckbox.checked;
        }
      });
      drinksGroup.addEventListener("icChange", function (ev) {
        if (ev.detail.checkedOptions.length === 3) {
          drinksCheckbox.indeterminate = false;
          drinksCheckbox.checked = true;
        } else if (ev.detail.checkedOptions.length === 0) {
          drinksCheckbox.indeterminate = false;
          drinksCheckbox.checked = false;
        } else {
          drinksCheckbox.indeterminate = true;
          drinksCheckbox.checked = false;
        }
      });
      coffeeCheckbox.checked = true;
      drinksCheckbox.indeterminate = true;
    </script>
    <ic-checkbox-group label="Liked things" name="1">
      <ic-checkbox
        id="drinks-checkbox"
        value="drinks"
        label="Drinks"
        indeterminate="false"
        native-indeterminate-behaviour
      >
        <ic-checkbox-group
          id="drinks-group"
          name="2"
          label="Drinks"
          hide-label
          slot="additional-field"
        >
          <ic-checkbox id="tea-checkbox" value="tea" label="Tea"></ic-checkbox>
          <ic-checkbox
            id="coffee-checkbox"
            value="coffee"
            label="Coffee"
          ></ic-checkbox>
          <ic-checkbox
            id="juice-checkbox"
            value="juice"
            label="Juice"
          ></ic-checkbox>
        </ic-checkbox-group>
      </ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "Indeterminate with children",
};

export const TextFieldValueChange = {
  render: (args) => html`
    <script>
      var textOutputEl = document.querySelector("#value-text");
      function handleIcChange(ev) {
        textOutputEl.innerHTML = ev.target.value;
      }
      document
        .querySelector("ic-text-field")
        .addEventListener("icChange", handleIcChange);
    </script>
    <div>
      <ic-checkbox-group label="This is a label" name="group1">
        <ic-checkbox
          value="valueName1"
          label="Unselected / Default"
          additional-field-display="static"
        >
          <ic-text-field
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          ></ic-text-field>
        </ic-checkbox>
      </ic-checkbox-group>
      <br />
      <span>textfield value: </span>
      <span id="value-text"></span>
      <div></div>
    </div>
  `,

  name: "TextField value change",
};

export const RTL = {
  render: (args) => html`
    <ic-checkbox-group label="This is a label" name="group1" dir="rtl">
      <ic-checkbox
        value="valueName1"
        label="Indeterminate"
        indeterminate="true"
      ></ic-checkbox>
      <ic-checkbox value="valueName2" label="Selected" checked></ic-checkbox>
      <ic-checkbox value="valueName3" label="Disabled" disabled></ic-checkbox>
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName4"
        label="Conditional dynamic"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
    </ic-checkbox-group>
  `,

  name: "RTL",
};

const inlineRadioSelector = "inline-radio";

export const Playground = {
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();

    return html` <ic-checkbox-group
      disabled=${args.disabled}
      label=${args.groupLabel}
      size=${args.size}
      helper-text=${args.helperText}
      hide-label=${args.hideGroupLabel}
      required=${args.required}
      validation-status=${args.validationStatus === "no status"
        ? ""
        : args.validationStatus}
      validation-text=${args.validationText}
      theme=${args.theme}
    >
      <ic-checkbox
        disabled=${args.disabled}
        label=${args.label}
        value=${args.value}
        size=${args.size}
        hide-label=${args.hideLabel}
        indeterminate=${args.indeterminate}
        checked=${checked}
        additional-field-display=${args.additionalFieldDisplay}
        dynamic-text=${args.dynamicText}
        native-indeterminate-behaviour=${args.nativeIndeterminateBehaviour}
      >
        <ic-text-field
          slot=${args.additionalFieldSlot}
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
    </ic-checkbox-group>`;
  },

  args: defaultArgs,

  argTypes: {
    additionalFieldDisplay: {
      options: ["dynamic", "static"],

      control: {
        type: inlineRadioSelector,
      },
    },

    additionalFieldSlot: {
      options: ["additional-field", ""],

      control: {
        type: "select",
      },
    },

    size: {
      options: ["medium", "large", "small"],

      control: {
        type: inlineRadioSelector,
      },
    },

    validationStatus: {
      options: ["no status", "warning", "error", "success"],

      control: {
        type: "select",
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
