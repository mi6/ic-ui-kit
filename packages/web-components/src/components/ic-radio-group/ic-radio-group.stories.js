import { html } from "lit-html";

const defaultArgs = {
  disabled: false,
  helperText: "Some helper text",
  hideLabel: false,
  label: "This is a label",
  name: "1",
  orientation: "vertical",
  required: false,
  size: "default",
  validationStatus: "",
  validationText: "",
  additionalFieldDisplay: "static",
  radioDisabled: false,
  dynamicText: "This selection requires additional answers",
  radioLabel: "Radio 1",
  radioName: "radio1",
  value: "valueName1",
  selected: false,
  additionalFieldSlot: true,
};

export default {
  title: "Web Components/Radio button",
  component: "Radio",
};

export const Default = {
  render: (args) => html`
    <ic-radio-group label="This is a label" name="1">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,

  name: "Default",
};

export const Horizontal = {
  render: (args) => html`
    <ic-radio-group
      orientation="horizontal"
      label="This should be horizontal"
      name="1"
    >
      <ic-radio-option
        value="valueName1"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Unselected / Default"
      ></ic-radio-option>
    </ic-radio-group>
    <br />
    <p>Horizontal orientation is overridden with >2 radio options</p>
    <br />
    <ic-radio-group
      orientation="horizontal"
      label="This should be vertical"
      name="2"
    >
      <ic-radio-option
        value="valueNameA"
        label="First"
        selected
      ></ic-radio-option>
      <ic-radio-option value="valueNameB" label="Second"></ic-radio-option>
      <ic-radio-option value="valueNameC" label="Third"></ic-radio-option>
    </ic-radio-group>
  `,

  name: "Horizontal",
};

export const Required = {
  render: (args) => html`
    <ic-radio-group label="This is a label" required name="1">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,

  name: "Required",
};

export const Disabled = {
  render: (args) => html`
    <ic-radio-group label="This is a label" name="1">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Disabled 1"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Unselected / Disabled 2"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled 3"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        value="valueName4"
        label="Selected / Disabled"
        disabled
        selected
      ></ic-radio-option>
    </ic-radio-group>
  `,

  name: "Disabled",
};

export const ConditionalDynamic = {
  render: (args) => html`
    <script>
      function handleIcChange(ev) {
        console.log(ev.detail.selectedOption);
      }
      document
        .querySelector("ic-radio-group")
        .addEventListener("icChange", handleIcChange);
      document
        .querySelector("ic-button")
        .addEventListener("click", () => alert("Button"));
    </script>
    <ic-radio-group label="Conditional dynamic" name="1">
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName1"
        label="Option with Radio as conditional slotted additional field"
        selected
      >
        <ic-radio-group
          slot="additional-field"
          helperText="Child Group Helper Text"
          label="Children"
          name="radio-group-2"
        >
          <ic-radio-option
            key="child-option-1"
            label="child-option-1"
            value="child-option-1"
          ></ic-radio-option>
          <ic-radio-option
            key="child-option-2"
            label="child-option-2"
            value="child-option-2"
          ></ic-radio-option>
        </ic-radio-group>
      </ic-radio-option>
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName2"
        label="Option with Text-field as conditional slotted additional field"
      >
        <ic-text-field
          validation-status="error"
          validation-text="Now it has really gone to (coffee) pot"
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        >
        </ic-text-field>
      </ic-radio-option>
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName3"
        label="Option with Button as conditional slotted additional field"
      >
        <ic-button slot="additional-field">Hello world</ic-button>
      </ic-radio-option>
    </ic-radio-group>
  `,

  name: "Conditional dynamic",
};

export const ConditionalStatic = {
  render: (args) => html`
    <ic-radio-group label=" Conditional static" name="1">
      <ic-radio-option value="valueName1" label="option1">
        <ic-text-field
          slot="additional-field"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-radio-option>
      <ic-radio-option value="valueName2" label="option2">
        <ic-radio-group
          slot="additional-field"
          helperText="Child Group Helper Text"
          label="Children"
          name="radio-group-2"
        >
          <ic-radio-option
            key="child-option-1"
            label="child-option-1"
            value="child-option-1"
          ></ic-radio-option>
          <ic-radio-option
            key="child-option-2"
            label="child-option-2"
            value="child-option-2"
          ></ic-radio-option>
        </ic-radio-group>
      </ic-radio-option>
    </ic-radio-group>
  `,

  name: "Conditional static",
};

export const HelperText = {
  render: (args) => html`
    <ic-radio-group label="This is a label" name="1" helper-text="Helper text">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,

  name: "Helper text",
};

export const Small = {
  render: (args) => html`
    <ic-radio-group label="This is a label" name="1" size="small">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,

  name: "Small",
};

export const DeprecatedSmall = {
  render: (args) => html`
    <ic-radio-group label="This is a label" name="1" small>
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,

  name: "Deprecated - small",
};

export const Validation = {
  render: (args) => html`
    <ic-radio-group
      label="This is a label"
      name="1"
      validation-status="error"
      validation-text="Error message"
    >
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,

  name: "Validation",
};

export const Form = {
  render: (args) => html`
    <form>
      <ic-radio-group label="This is a label" name="1">
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
    <script>
      document.querySelector("form").addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log(document.querySelector('input[name="1"]').value);
      });
    </script>
  `,

  name: "Form",
};

export const RTL = {
  render: (args) => html`
    <ic-radio-group label="This is a label" name="group1" dir="rtl">
      <ic-radio-option value="valueName1" label="Default"></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Disabled"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName4"
        label="Conditional dynamic"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-radio-option>
    </ic-radio-group>
  `,

  name: "RTL",
};

const inlineRadioSelector = "inline-radio";

export const Playground = {
  render: (args) => html`
    <ic-radio-group
      label=${args.label}
      name=${args.name}
      orientation=${args.orientation}
      required=${args.required}
      size=${args.size}
      validation-status=${args.validationStatus}
      validation-text=${args.validationText}
      helper-text=${args.helperText}
      disabled=${args.disabled}
      hide-label=${args.hideLabel}
    >
      <ic-radio-option
        additional-field-display=${args.additionalFieldDisplay}
        value=${args.value}
        label=${args.radioLabel}
        name=${args.radioName}
        selected=${args.selected}
        disabled=${args.radioDisabled}
        dynamic-text=${args.dynamicText}
      >
        <ic-text-field
          slot=${args.additionalFieldSlot}
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-radio-option>
      <ic-radio-option value="valueName2" label="Radio 2"></ic-radio-option>
    </ic-radio-group>
  `,

  args: defaultArgs,

  argTypes: {
    orientation: {
      options: ["vertical", "horizontal"],

      control: {
        type: "inline-radio",
      },
    },

    size: {
      options: ["default", "small"],

      control: {
        type: inlineRadioSelector,
      },
    },

    validationStatus: {
      options: ["error", "warning", "success", ""],

      control: {
        type: "radio",
      },
    },

    additionalFieldDisplay: {
      options: ["static", "dynamic"],

      control: {
        type: inlineRadioSelector,
      },
    },

    additionalFieldSlot: {
      mapping: {
        true: "additional-field",
        false: "",
      },
    },
  },

  name: "Playground",
};
