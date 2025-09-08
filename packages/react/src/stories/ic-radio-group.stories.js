/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from "react";
import {
  IcButton,
  IcLink,
  IcRadioGroup,
  IcRadioOption,
  IcTextField,
  IcTypography,
} from "../components";

const Form = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(
      "Form value: ",
      document.querySelector("input[name='1']").value,
    );
  };
  return (
    <form onSubmit={(ev) => handleSubmit(ev)}>
      <IcRadioGroup label="This is a label" name="1">
        <IcRadioOption value="valueName1" label="Unselected / Default" />
        <IcRadioOption value="valueName2" label="Selected / Default" />
        <IcRadioOption
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        />
      </IcRadioGroup>
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
  );
};

const RadioOptionsDynamic = () => {
  const [radioOptions, setRadioOptions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRadioOptions([
        { label: "Item 1", value: "Item 1" },
        { label: "Item 2", value: "Item 2" },
        { label: "Item 3", value: "Item 3" },
        { label: "Item 4", value: "Item 4" },
      ]);
    }, 3000);
  }, []);

  return (
    <IcRadioGroup label="What is your favourite coffee?" name="radio-group-1">
      {radioOptions.map((option, index) => (
        <IcRadioOption
          key={index + option.value}
          value={option.value}
          label={option.label}
        />
      ))}
    </IcRadioGroup>
  );
};

const RadioOptionsUpdate = () => {
  const [radioOptions, setRadioOptions] = useState([
    { label: "Item 1", value: "Item 1" },
    { label: "Item 2", value: "Item 2" },
    { label: "Item 3", value: "Item 3" },
    { label: "Item 4", value: "Item 4" },
  ]);

  const updateRadios = () => {
    setRadioOptions([
      { label: "Item 5", value: "Item 5" },
      { label: "Item 6", value: "Item 6" },
    ]);
  };

  return (
    <>
      <IcRadioGroup label="What is your favourite coffee?" name="radio-group-1">
        {radioOptions.map((option, index) => (
          <IcRadioOption
            key={index + option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </IcRadioGroup>
      <br />
      <IcButton onClick={updateRadios}>Update</IcButton>
    </>
  );
};

const Controlled = () => {
  const [selected, setSelected] = useState(true);
  const defaultButtonClickHandler = () => {
    setSelected(false);
  };
  const differentButtonClickHandler = () => {
    setSelected(true);
  };
  return (
    <>
      <IcRadioOption selected={selected} label="Label" value="valueName1" />
      <IcButton variant="primary" onClick={defaultButtonClickHandler}>
        Unselected
      </IcButton>
      <IcButton variant="primary" onClick={differentButtonClickHandler}>
        Selected
      </IcButton>
    </>
  );
};

const Uncontrolled = () => {
  const radioEl = useRef();
  const handleCheck = () => {
    console.log(radioEl.current.selected);
  };
  return (
    <IcRadioGroup label="This is a label" name="1">
      <IcRadioOption
        ref={radioEl}
        value="valueName1"
        label="Unselected / Default"
        onIcSelectedChange={handleCheck}
      />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
    </IcRadioGroup>
  );
};

const RadioOptionsAdditional = () => {
  const [showAdditional, setShowAdditional] = useState(false);
  const changeDisplay = () => {
    setShowAdditional(!showAdditional);
  };
  return (
    <>
      <IcRadioGroup label="What is your favourite coffee?" name="radio-group-1">
        <IcRadioOption value="Item 1" label="Item 1" />
        <IcRadioOption
          value="Item 2"
          label="Item 2 - has conditional field"
          additionalFieldDisplay={showAdditional ? "dynamic" : "static"}
        >
          {showAdditional && (
            <IcTextField
              slot="additional-field"
              placeholder="Placeholder"
              label="What is your favourite coffee?"
            />
          )}
        </IcRadioOption>
        <IcRadioOption value="Item 3" label="Item 3" />
        <IcRadioOption value="Item 4" label="Item 4" />
      </IcRadioGroup>
      <br />
      <IcButton onClick={changeDisplay}>Toggle additional</IcButton>
    </>
  );
};

const defaultArgs = {
  disabled: false,
  helperText: "Some helper text",
  hideLabel: false,
  label: "This is a label",
  name: "1",
  orientation: "vertical",
  required: false,
  size: "medium",
  validationStatus: "no status",
  validationText: "",
  additionalFieldDisplay: "static",
  radioDisabled: false,
  dynamicText: "This selection requires additional answers",
  radioLabel: "Radio 1",
  radioName: "radio1",
  value: "valueName1",
  selected: false,
  additionalFieldSlot: true,
  theme: "inherit",
};

export default {
  title: "Radio button",
  component: IcRadioGroup,
};

export const Default = {
  render: () => (
    <IcRadioGroup label="This is a label" name="1">
      <IcRadioOption value="valueName1" label="Unselected / Default" />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
      <IcRadioOption
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      />
    </IcRadioGroup>
  ),

  name: "Default",
};

export const Horizontal = {
  render: () => (
    <>
    <IcRadioGroup orientation="horizontal" label="This should be horizontal" name="1">
      <IcRadioOption value="valueName1" label="Selected / Default" selected />
      <IcRadioOption value="valueName2" label="Unselected / Default" />
    </IcRadioGroup>
    <br/>
    <p>Horizontal orientation is overridden with 2 radio options</p>
    <br/>
    <IcRadioGroup orientation="horizontal" label="This should be vertical" name="2">
      <IcRadioOption value="valueNameA" label="First" selected />
      <IcRadioOption value="valueNameB" label="Second" />
      <IcRadioOption value="valueNameC" label="Third" />
    </IcRadioGroup>
    </>
  ),

  name: "Horizontal",
};

export const Required = {
  render: () => (
    <IcRadioGroup label="This is a label" required name="1">
      <IcRadioOption value="valueName1" label="Unselected / Default" />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
      <IcRadioOption
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      />
    </IcRadioGroup>
  ),

  name: "Required",
};

export const Disabled = {
  render: () => (
    <IcRadioGroup label="This is a label" name="1">
      <IcRadioOption
        value="valueName1"
        label="Unselected / Disabled 1"
        disabled
      />
      <IcRadioOption
        value="valueName2"
        label="Unselected / Disabled 2"
        disabled
      />
      <IcRadioOption
        value="valueName3"
        label="Unselected / Disabled 3"
        disabled
      />
      <IcRadioOption
        value="valueName4"
        label="Selected / Disabled"
        disabled
        selected
      />
    </IcRadioGroup>
  ),

  name: "Disabled",
};

export const ConditionalDynamic = {
  render: () => (
    <IcRadioGroup
      label="Conditional dynamic"
      name="1"
      onIcChange={(ev) => console.log(ev.detail.selectedOption)}
    >
      <IcRadioOption
        additionalFieldDisplay="dynamic"
        value="valueName1"
        label="Option with Radio as conditional slotted additional field"
      >
        <IcRadioGroup
          slot="additional-field"
          helperText="Child Group Helper Text"
          label="Children"
          name="radio-group-2"
        >
          <IcRadioOption
            key="child-option-1"
            label="child-option-1"
            value="child-option-1"
          />
          <IcRadioOption
            key="child-option-2"
            label="child-option-2"
            value="child-option-2"
          />
        </IcRadioGroup>
      </IcRadioOption>
      <IcRadioOption
        additionalFieldDisplay="dynamic"
        value="valueName2"
        label="Option with Text-field as conditional slotted additional field"
      >
        <IcTextField
          validationStatus="error"
          validationText="Now it has really gone to (coffee) pot"
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee? "
        />
      </IcRadioOption>
      <IcRadioOption
        additionalFieldDisplay="dynamic"
        value="valueName3"
        label="option3 - clickable component"
      >
        <IcButton
          slot="additional-field"
          onClick={() => alert("Button clicked!")}
        >
          Click me for an alert!
        </IcButton>
      </IcRadioOption>
    </IcRadioGroup>
  ),

  name: "Conditional dynamic",
};

export const ConditionalStatic = {
  render: () => (
    <IcRadioGroup label="Conditional static" name="1">
      <IcRadioOption value="valueName1" label="option1">
        <IcTextField
          slot="additional-field"
          label="What's your favourite type of coffee?"
        />
      </IcRadioOption>
      <IcRadioOption value="valueName2" label="option2">
        <IcRadioGroup
          slot="additional-field"
          helperText="Child Group Helper Text"
          label="Children"
          name="radio-group-2"
        >
          <IcRadioOption
            key="child-option-1"
            label="child-option-1"
            value="child-option-1"
          />
          <IcRadioOption
            key="child-option-2"
            label="child-option-2"
            value="child-option-2"
          />
        </IcRadioGroup>
      </IcRadioOption>
    </IcRadioGroup>
  ),

  name: "Conditional static",
};

export const HelperText = {
  render: () => (
    <>
    <IcRadioGroup label="Pick your coffee" name="1" helperText="Helper text provided by prop">
      <IcRadioOption value="valueName1" label="Mocha" />
      <IcRadioOption value="valueName2" label="Americano" selected />
      <IcRadioOption
        value="valueName3"
        label="Tea"
        disabled
      />
    </IcRadioGroup>
    <br />
    <IcRadioGroup label="This is a label" name="2">
      <IcTypography variant="caption" slot="helper-text">
        <span>
          Slotted helper text with a <IcLink href="#">helpful link to guidance</IcLink>
        </span>
      </IcTypography>
      <IcRadioOption value="valueName1" label="Flat White" />
      <IcRadioOption value="valueName2" label="Espresso" selected />
      <IcRadioOption
        value="valueName3"
        label="Orange Juice"
        disabled
      />
    </IcRadioGroup>
    </>
  ),

  name: "Helper text",
};

export const SizeSmall = {
  render: () => (
    <IcRadioGroup label="This is a label" name="1" size="small">
      <IcRadioOption value="valueName1" label="Unselected / Default" />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
      <IcRadioOption
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      />
    </IcRadioGroup>
  ),

  name: "Size small",
};

export const Validation = {
  render: () => (
    <IcRadioGroup
      label="This is a label"
      name="1"
      validationStatus="error"
      validationText="Error message"
    >
      <IcRadioOption value="valueName1" label="Unselected / Default" />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
      <IcRadioOption
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      />
    </IcRadioGroup>
  ),

  name: "Validation",
};

export const Form_ = {
  render: () => <Form />,
  name: "Form",
};

export const DynamicLoading = {
  render: () => <RadioOptionsDynamic />,
  name: "Dynamic loading",
};

export const UpdatingOptions = {
  render: () => <RadioOptionsUpdate />,
  name: "Updating options",
};

export const Controlled_ = {
  render: () => <Controlled />,
  name: "Controlled",
};

export const Uncontrolled_ = {
  render: () => <Uncontrolled />,
  name: "Uncontrolled",
};

export const AdditionalFieldRendering = {
  render: () => <RadioOptionsAdditional />,
  name: "Additional field rendering",
};

export const Playground = {
  render: (args) => (
    <IcRadioGroup
      label={args.label}
      name={args.name}
      orientation={args.orientation}
      required={args.required}
      size={args.size}
      validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus}
      validationText={args.validationText}
      helperText={args.helperText}
      disabled={args.disabled}
      hideLabel={args.hideLabel}
      theme={args.theme}
    >
      <IcRadioOption
        additionalFieldDisplay={args.additionalFieldDisplay}
        value={args.value}
        label={args.radioLabel}
        name={args.radioName}
        selected={args.selected}
        disabled={args.radioDisabled}
        dynamicText={args.dynamicText}
      >
        <IcTextField
          slot={args.additionalFieldSlot}
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        />
      </IcRadioOption>
      <IcRadioOption value="valueName2" label="Radio 2" />
    </IcRadioGroup>
  ),

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
        type: "inline-radio",
      },
    },

    validationStatus: {
      options: ["no status", "error", "warning", "success"],

      control: {
        type: "radio",
      },
    },

    additionalFieldDisplay: {
      options: ["static", "dynamic"],

      control: {
        type: "inline-radio",
      },
    },

    additionalFieldSlot: {
      mapping: {
        true: "additional-field",
        false: "",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
