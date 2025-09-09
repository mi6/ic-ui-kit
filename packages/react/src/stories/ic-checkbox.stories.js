/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import {
  IcButton,
  IcCheckbox,
  IcCheckboxGroup,
  IcLink,
  IcRadioGroup,
  IcRadioOption,
  IcSearchBar,
  IcSelect,
  IcTextField,
  IcTypography,
} from "../components";
import { useForm } from "react-hook-form";
import React, { useState, useRef } from "react";
import { useArgs } from "@storybook/preview-api";

const Form = () => {
  const { register, handleSubmit, unregister } = useForm();
  const onCheck = (e) => {
    e.target.checked
      ? register(e.target.name, { value: e.target.value })
      : unregister(e.target.name);
  };
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <IcCheckboxGroup label="This is a label" name="1">
        <IcCheckbox
          name="checkbox1"
          value="valueName1"
          label="Unselected / Default"
          onIcCheck={onCheck}
        />
        <IcCheckbox
          name="checkbox2"
          value="valueName2"
          label="Selected / Default"
          onIcCheck={onCheck}
        />
        <IcCheckbox
          name="checkbox3"
          value="valueName3"
          label="Unselected / Disabled"
          Disabled
        />
      </IcCheckboxGroup>
      <input type="submit" value="Submit" />
    </form>
  );
};

const Indeterminate = () => {
  const [indeterminate, setIndeterminate] = useState(true);
  const [checked, setChecked] = useState(true);
  const [nativeIndeterminate, setNativeIndeterminate] = useState(true);
  const [nativeChecked, setNativeChecked] = useState(true);

  const toggleIndeterminate = () => {
    setIndeterminate(!indeterminate);
  };

  const clickHandler = (ev) => {
    setChecked(ev.target.checked);
  };

  const toggleNativeIndeterminate = () => {
    setNativeIndeterminate(!nativeIndeterminate);
  };

  const clickHandlerNative = (ev) => {
    setNativeChecked(ev.target.checked);
  };

  return (
    <div style={{ display: "flex", gap: "16px", "flex-wrap": "wrap" }}>
      <div style={{ border: "1px solid gray", padding: "8px" }}>
        <IcCheckboxGroup
          label="'native-indeterminate-behavior'=false"
          name="indeterminate"
        >
          <IcCheckbox
            value="indeterminate"
            label="Indeterminate checkbox"
            checked={checked}
            indeterminate={indeterminate}
            onClick={clickHandler}
          />
        </IcCheckboxGroup>
        <br />
        <IcButton onClick={toggleIndeterminate}>Toggle indeterminate</IcButton>
        <br />
        <br />
        <span>{`Indeterminate: ${indeterminate}`}</span>
        <br />
        <span>{`Checked: ${checked}`}</span>
      </div>
      <div style={{ border: "1px solid gray", padding: "8px" }}>
        <IcCheckboxGroup
          label="'native-indeterminate-behavior'=true"
          name="native-indeterminate"
        >
          <IcCheckbox
            value="native-indeterminate"
            label="Indeterminate checkbox"
            checked={nativeChecked}
            indeterminate={nativeIndeterminate}
            onClick={clickHandlerNative}
            nativeIndeterminateBehaviour
          />
        </IcCheckboxGroup>
        <br />
        <IcButton onClick={toggleNativeIndeterminate}>
          Toggle indeterminate
        </IcButton>
        <br />
        <br />
        <span>{`Indeterminate: ${nativeIndeterminate}`}</span>
        <br />
        <span>{`Checked: ${nativeChecked}`}</span>
      </div>
    </div>
  );
};

const IndeterminateWithChildren = () => {
  const [drinksChecked, setDrinksChecked] = useState({
    tea: false,
    coffee: true,
    juice: false,
  });
  const [parentChecked, setParentChecked] = useState(false);
  const [parentIndeterminate, setParentIndeterminate] = useState(true);

  const drinksChangeHandler = (e) => {
    if (e.detail.checkedOptions.length === 0) {
      setParentChecked(false);
      setParentIndeterminate(false);
    } else if (e.detail.checkedOptions.length === 3) {
      setParentChecked(true);
      setParentIndeterminate(false);
    } else {
      setParentIndeterminate(true);
    }
  };

  const drinksCheckHandler = (ev) => {
    if (ev.target.id === "drinks-checkbox") {
      setParentChecked(ev.target.checked);
      setParentIndeterminate(false);
      setDrinksChecked({
        tea: ev.target.checked,
        coffee: ev.target.checked,
        juice: ev.target.checked,
      });
    }
  };
  const teaCheckHandler = (ev) => {
    setDrinksChecked({ ...drinksChecked, tea: ev.target.checked });
  };
  const coffeeCheckHandler = (ev) => {
    setDrinksChecked({ ...drinksChecked, coffee: ev.target.checked });
  };
  const juiceCheckHandler = (ev) => {
    setDrinksChecked({ ...drinksChecked, juice: ev.target.checked });
  };

  return (
    <IcCheckboxGroup label="Liked things" name="1">
      <IcCheckbox
        id="drinks-checkbox"
        value="drinks"
        label="Drinks"
        checked={parentChecked}
        indeterminate={parentIndeterminate}
        nativeIndeterminateBehaviour
        onIcCheck={drinksCheckHandler}
      >
        <IcCheckboxGroup
          name="2"
          label="Drinks"
          hideLabel
          slot="additional-field"
          onIcChange={drinksChangeHandler}
        >
          <IcCheckbox
            value="tea"
            label="Tea"
            checked={drinksChecked.tea}
            onIcCheck={teaCheckHandler}
          />
          <IcCheckbox
            value="coffee"
            label="Coffee"
            checked={drinksChecked.coffee}
            onIcCheck={coffeeCheckHandler}
          />
          <IcCheckbox
            value="juice"
            label="Juice"
            checked={drinksChecked.juice}
            onIcCheck={juiceCheckHandler}
          />
        </IcCheckboxGroup>
      </IcCheckbox>
    </IcCheckboxGroup>
  );
};

const TextField = () => {
  const [textBoxValue, setTextBoxValue] = useState("");
  const onChangeTextBox = (e) => {
    setTextBoxValue(e.detail.value);
  };
  return (
    <div>
      <IcCheckboxGroup label="This is a label" name="1">
        <IcCheckbox
          additionalFieldDisplay="static"
          value="valueName1"
          label="option1"
        >
          <IcTextField
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
            onIcChange={onChangeTextBox}
          />
        </IcCheckbox>
      </IcCheckboxGroup>
      <br />
      <div>textbox value :{textBoxValue}</div>
    </div>
  );
};

const Controlled = () => {
  const [checked, setChecked] = useState(true);
  const defaultButtonClickHandler = () => {
    setChecked(false);
  };
  const differentButtonClickHandler = () => {
    setChecked(true);
  };
  return (
    <>
      <IcCheckbox checked={checked} label="Label" value="valueName1" />
      <IcButton variant="primary" onClick={defaultButtonClickHandler}>
        Unchecked
      </IcButton>
      <IcButton variant="primary" onClick={differentButtonClickHandler}>
        Checked
      </IcButton>
    </>
  );
};

const Uncontrolled = () => {
  const checkboxEl = useRef();
  const handleCheck = () => {
    console.log(checkboxEl.current.checked);
  };
  return (
    <>
      <IcCheckbox
        ref={checkboxEl}
        label="Label"
        value="valueName1"
        onIcCheck={handleCheck}
      />
    </>
  );
};

const CheckOptionsDynamic = () => {
  const [checkOptions, setCheckOptions] = useState([]);

  const updateOptions = () => {
    setCheckOptions([
      { label: "Item 1", value: "Item 1" },
      { label: "Item 2", value: "Item 2" },
      { label: "Item 3", value: "Item 3" },
      { label: "Item 4", value: "Item 4" },
    ]);
  };

  return (
    <>
      <IcCheckboxGroup
        label="What is your favourite coffee?"
        name="checkbox-group-1"
      >
        {checkOptions.map((option, index) => (
          <IcCheckbox
            key={index + option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </IcCheckboxGroup>
      <br />
      <IcButton onClick={updateOptions}>Update</IcButton>
    </>
  );
};

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
  title: "Checkbox",
  component: IcCheckboxGroup,
};

export const Default = {
  render: () => (
    <IcCheckboxGroup label="This is a label" name="1">
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
  ),

  name: "Default",
};

export const Required = {
  render: () => (
    <IcCheckboxGroup label="This is a label" required name="1">
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
  ),

  name: "Required",
};

export const Disabled = {
  render: () => (
    <IcCheckboxGroup label="This is a label" name="1" disabled>
      <IcCheckbox value="valueName1" label="Unselected / Disabled 1" disabled />
      <IcCheckbox value="valueName2" label="Unselected / Disabled 2" disabled />
      <IcCheckbox value="valueName3" label="Unselected / Disabled 3" disabled />
      <IcCheckbox
        value="valueName4"
        label="Selected / Disabled"
        disabled
        checked
      />
    </IcCheckboxGroup>
  ),

  name: "Disabled",
};

export const Sizes = {
  render: () => (
    <>
      <IcCheckboxGroup
      size="large"
      label="These are checkboxes with the 'size' attribute set on them individually"
      name="group1"
    >
      <IcCheckbox
        size="small"
        value="valueName1"
        label="Unselected / Default"
      />
      <IcCheckbox
        size="medium"
        value="valueName2"
        label="Selected / Default"
        checked
      />
      <IcCheckbox
        size="large"
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      />
    </IcCheckboxGroup>
    <IcCheckboxGroup
      size="small"
      label="This is a checkbox group with small checkboxes"
      name="group2"
    >
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
    <IcCheckboxGroup
      size="medium"
      label="This is a checkbox group with default-sized checkboxes"
      name="group3"
    >
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
    <IcCheckboxGroup
      size="large"
      label="This is a checkbox group with large checkboxes"
      name="group4"
    >
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
    </>
  ),

  name: "Sizes",
};

export const HiddenLabel = {
  render: () => (
    <IcCheckboxGroup label="This is a label" hideLabel name="1">
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
  ),

  name: "Hidden label",
};

export const ConditionalDynamic = {
  render: () => (
    <IcCheckboxGroup
      label="Conditional dynamic"
      name="1"
      onIcChange={(ev) =>
        console.log(
          ev.detail.selectedOption.label,
          ev.detail.selectedOption.checked,
        )
      }
    >
      <IcCheckbox
        additionalFieldDisplay="dynamic"
        value="valueName1"
        label="option1"
      >
        <IcTextField
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        />
      </IcCheckbox>
      <IcCheckbox
        additionalFieldDisplay="dynamic"
        value="valueName2"
        label="option2 - error example"
      >
        <IcTextField
          validationStatus="error"
          validationText="now it has really gone to (coffee) pot"
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        />
      </IcCheckbox>
      <IcCheckbox
        additionalFieldDisplay="dynamic"
        value="valueName3"
        label="option3"
      >
        <IcRadioGroup slot="additional-field" label="Select an option" orientation="horizontal">
          <IcRadioOption label="Caffeinated"/>
          <IcRadioOption label="Decaf"/>
        </IcRadioGroup>
      </IcCheckbox>
      <IcCheckbox
        additionalFieldDisplay="dynamic"
        value="valueName4"
        label="option4"
      >
          <IcRadioGroup slot="additional-field" label="What's your favourite milk?">
            <IcRadioOption label="Oat"/>
            <IcRadioOption label="Almond"/>
            <IcRadioOption label="Soy"/>
          </IcRadioGroup>
      </IcCheckbox>
    </IcCheckboxGroup>
  ),

  name: "Conditional dynamic",
};

export const ConditionalStatic = {
  render: () => (
    <IcCheckboxGroup label=" Conditional static " name="1">
      <IcCheckbox value="option1" label="Option one">
        <IcTextField
          slot="additional-field"
          label="What's your favourite type of coffee?"
        />
      </IcCheckbox>
      <IcCheckbox value="option2" label="Option two">
        <div slot="additional-field">
          <IcTextField label="What's your favourite type of coffee?"/>
          <IcTextField label="What's your second favourite type of coffee?"/>
          <IcSelect
            label="Select a coffee"
            options={[
            { label: "Espresso", value: "espresso"},
            { label: "Flat white", value: "flat" },
            { label: "Filter", value: "filter" }
            ]}
          />
          <IcSearchBar
            label="Search for a coffee"
            options={[
              { label: "Espresso", value: "espresso"},
              { label: "Flat white", value: "flat" },
              { label: "Filter", value: "filter" }
              ]}
          />
        </div>
      </IcCheckbox>
      <IcCheckbox value="option3" label="Option three">
        <IcRadioGroup slot="additional-field" label="What's your favourite milk">
          <IcRadioOption label="Oat"/>
          <IcRadioOption label="Almond"/>
          <IcRadioOption label="Soy"/>
        </IcRadioGroup>
      </IcCheckbox>
      <IcCheckbox value="option4" label="Option four">
        <IcRadioGroup slot="additional-field" label="Select an option" orientation="horizontal">
          <IcRadioOption label="Caffeinated"/>
          <IcRadioOption label="Decaf"/>
        </IcRadioGroup>
      </IcCheckbox>
    </IcCheckboxGroup>
  ),

  name: "Conditional static",
};

export const HelperText = {
  render: () => (
    <>
    <IcCheckboxGroup label="Coffee Extras" name="1" helperText="Helper text provided by prop">
      <IcCheckbox value="valueName1" label="Sugar" />
      <IcCheckbox value="valueName2" label="Milk" checked />
      <IcCheckbox value="valueName3" label="Salt" disabled />
    </IcCheckboxGroup>
    <br />
    <IcCheckboxGroup label="More coffee extras" name="2">
      <IcTypography variant="caption" slot="helper-text">
        <span>
          Slotted helper text with a <IcLink href="#">helpful link to guidance</IcLink>
        </span>
      </IcTypography>
      <IcCheckbox value="valueName1" label="Shortbread" />
      <IcCheckbox value="valueName2" label="Scone" checked />
      <IcCheckbox value="valueName3" label="Ham sandwich" disabled />
    </IcCheckboxGroup>
    </>
  ),

  name: "Helper text",
};

export const Validation = {
  render: () => (
    <IcCheckboxGroup
      label="This is a label"
      name="1"
      validationStatus="error"
      validationText="Error message"
    >
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
  ),

  name: "Validation",
};

export const Form_ = {
  render: () => <Form />,
  name: "Form",
};

export const Indeterminate_ = {
  render: () => <Indeterminate />,
  name: "Indeterminate",
};

export const IndeterminateWithChildren_ = {
  render: () => <IndeterminateWithChildren />,
  name: "Indeterminate with children",
};

export const TextFieldValueChange = {
  render: () => <TextField />,
  name: "TextField value change",
};

export const Controlled_ = {
  render: () => <Controlled />,
  name: "Controlled",
};

export const Uncontrolled_ = {
  render: () => <Uncontrolled />,
  name: "Uncontrolled",
};

export const DynamicLoading = {
  render: () => <CheckOptionsDynamic />,
  name: "Dynamic loading",
};

export const Playground = {
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();

    return (
      <IcCheckboxGroup
        disabled={args.disabled}
        label={args.groupLabel}
        size={args.size}
        helperText={args.helperText}
        hideLabel={args.hideGroupLabel}
        required={args.required}
        validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus}
        validationText={args.validationText}
        theme={args.theme}
      >
        <IcCheckbox
          disabled={args.disabled}
          label={args.label}
          value={args.value}
          size={args.size}
          hideLabel={args.hideLabel}
          indeterminate={args.indeterminate}
          checked={checked}
          additionalFieldDisplay={args.additionalFieldDisplay}
          dynamicText={args.dynamicText}
          nativeIndeterminateBehaviour={args.nativeIndeterminateBehaviour}
          onIcCheck={(ev) =>
            updateArgs({
              checked: ev.target.checked,
            })
          }
        >
          <IcTextField
            slot={args.additionalFieldSlot}
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          />
        </IcCheckbox>
      </IcCheckboxGroup>
    );
  },

  args: defaultArgs,

  argTypes: {
    additionalFieldDisplay: {
      options: ["dynamic", "static"],

      control: {
        type: "inline-radio",
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
        type: "inline-radio",
      },
    },

    validationStatus: {
      options: ["no status", "warning", "error", "success"],

      control: {
        type: "select",
      },
    },

    theme: {
      options: ["light", "dark", "inherit"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
