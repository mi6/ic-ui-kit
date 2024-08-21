import React, { useState, useRef } from "react";
import {
  IcRadioOption,
  IcRadioGroup,
  IcButton,
  IcSectionContainer,
  IcTextField,
} from "../../components";

const fourOptions = [
  { label: "Item 1", value: "valueName1" },
  { label: "Item 2", value: "valueName2" },
  { label: "Item 3", value: "valueName3" },
  { label: "Item 4", value: "valueName4" },
];

const twoUpdatedOptions = [
  { label: "Item 5", value: "valueName5" },
  { label: "Item 6", value: "valueName6" },
];

const threeOptions = [
  { label: "Unselected", value: "valueName1" },
  { label: "Selected", value: "valueName2", selected: true },
  { label: "Disabled", value: "valueName3", disabled: true },
];

export const Default = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcRadioGroup label="This is a label" name="radio-group-1">
        {threeOptions.map((option, index) => (
          <IcRadioOption
            key={index + option.value}
            value={option.value}
            label={option.label}
            selected={option.selected}
            disabled={option.disabled}
          />
        ))}
      </IcRadioGroup>
    </div>
  );
};

export const RadioOptionsEmptyInitial = () => {
  const [radioOptions, setRadioOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const updateRadios = () => {
    setRadioOptions(fourOptions);
  };

  return (
    <IcSectionContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "10px",
        }}
      >
        <IcRadioGroup label="This is a label" name="radio-group-1">
          {radioOptions.map((option, index) => (
            <IcRadioOption
              key={index + option.value}
              value={option.value}
              label={option.label}
            />
          ))}
        </IcRadioGroup>
        <IcButton onClick={updateRadios}>Update</IcButton>
      </div>
    </IcSectionContainer>
  );
};

export const RadioOptionsChanging = () => {
  const [radioOptions, setRadioOptions] = useState(fourOptions);

  const updateRadios = () => {
    setRadioOptions(twoUpdatedOptions);
  };

  return (
    <IcSectionContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "10px",
        }}
      >
        <IcRadioGroup label="This is a label" name="radio-group-1">
          {radioOptions.map((option, index) => (
            <IcRadioOption
              key={index + option.value}
              value={option.value}
              label={option.label}
            />
          ))}
        </IcRadioGroup>
        <IcButton onClick={updateRadios}>Update</IcButton>
      </div>
    </IcSectionContainer>
  );
};

export const Controlled = () => {
  const [selected, setSelected] = useState(true);
  const defaultButtonClickHandler = () => {
    setSelected(false);
  };
  const differentButtonClickHandler = () => {
    setSelected(true);
  };
  return (
    <>
      <IcRadioOption
        selected={selected}
        label="This is a label"
        value="valueName1"
      />
      <IcButton
        id="unselect-btn"
        variant="primary"
        onClick={defaultButtonClickHandler}
      >
        Unselected
      </IcButton>
      <IcButton
        id="select-btn"
        variant="primary"
        onClick={differentButtonClickHandler}
      >
        Selected
      </IcButton>
    </>
  );
};

export const Uncontrolled = () => {
  const radioEl = useRef<any>(null);
  const handleCheck = () => {
    console.log(radioEl.current.selected);
  };
  return (
    <IcRadioGroup label="This is a label" name="radio-group-1">
      <IcRadioOption
        ref={radioEl}
        value="valueName1"
        label="Unselected"
        onIcSelectedChange={handleCheck}
      />
      <IcRadioOption value="valueName2" label="Selected" selected />
    </IcRadioGroup>
  );
};

export const Horizontal = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcRadioGroup
        orientation="horizontal"
        label="This is a label"
        name="radio-group-1"
      >
        <IcRadioOption value="valueName1" label="Selected" selected />
        <IcRadioOption value="valueName2" label="Unselected" />
      </IcRadioGroup>
    </div>
  );
};

export const HelperText = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcRadioGroup
        label="This is a label"
        name="radio-group-1"
        helperText="This is some helper text"
      >
        {threeOptions.map((option, index) => (
          <IcRadioOption
            key={index + option.value}
            value={option.value}
            label={option.label}
            selected={option.selected}
            disabled={option.disabled}
          />
        ))}
      </IcRadioGroup>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcRadioGroup label="This is a label" name="radio-group-1">
        <IcRadioOption value="valueName1" label="Option 1" disabled />
        <IcRadioOption value="valueName2" label="Option 2" disabled />
        <IcRadioOption value="valueName3" label="Option 3" disabled selected />
      </IcRadioGroup>
    </div>
  );
};

export const DisabledGroup = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcRadioGroup label="This is a label" name="radio-group-1" disabled>
        <IcRadioOption value="valueName1" label="Option 1" />
        <IcRadioOption value="valueName2" label="Option 2" />
        <IcRadioOption value="valueName3" label="Option 3" selected />
      </IcRadioGroup>
    </div>
  );
};

export const Small = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcRadioGroup size="small" label="This is a label" name="radio-group-1">
        {threeOptions.map((option, index) => (
          <IcRadioOption
            key={index + option.value}
            value={option.value}
            label={option.label}
            selected={option.selected}
            disabled={option.disabled}
          />
        ))}
      </IcRadioGroup>
    </div>
  );
};

export const Validation = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcRadioGroup
        label="This is a label"
        name="radio-group-1"
        validationStatus="error"
        validationText="A selection is required"
        required
      >
        <IcRadioOption value="valueName1" label="Option 1" />
        <IcRadioOption value="valueName2" label="Option 2" />
        <IcRadioOption value="valueName3" label="Option 3" disabled />
      </IcRadioGroup>
    </div>
  );
};

export const ConditionalStatic = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcRadioGroup label="Conditional static" name="radio-group-1">
        <IcRadioOption value="valueName1" label="Option 1">
          <IcTextField
            slot="additional-field"
            label="What's your favourite type of coffee?"
          />
        </IcRadioOption>
        <IcRadioOption value="valueName2" label="Option 2" />
      </IcRadioGroup>
    </div>
  );
};

export const ConditionalDynamic = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcRadioGroup
        label="Conditional dynamic"
        name="radio-group-1"
        onIcChange={(ev) => console.log(ev.detail.selectedOption)}
      >
        <IcRadioOption
          additionalFieldDisplay="dynamic"
          value="valueName1"
          label="Option 1"
        >
          <IcTextField
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          />
        </IcRadioOption>
        <IcRadioOption
          additionalFieldDisplay="dynamic"
          value="valueName2"
          label="Option 2"
        >
          <IcTextField
            validationStatus="error"
            validationText="Now it has really gone to (coffee) pot"
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          />
        </IcRadioOption>
        <IcRadioOption
          additionalFieldDisplay="dynamic"
          value="valueName3"
          label="Option 3"
        >
          <IcTextField
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          />
        </IcRadioOption>
      </IcRadioGroup>
    </div>
  );
};
