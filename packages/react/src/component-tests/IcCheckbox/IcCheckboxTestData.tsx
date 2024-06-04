import React, { useState, useRef, ReactElement } from "react";
import {
  IcButton,
  IcCheckbox,
  IcCheckboxGroup,
  IcTextField,
} from "../../components";

export const Checkbox = () => {
  return (
    <div style={{ padding: "5rem" }}>
      <IcCheckboxGroup
        label="Select your extras"
        name="default"
        onIcChange={(ev) => console.log("onIcChange", ev.detail.value)}
      >
        <IcCheckbox
          value="extra"
          label="Extra shot (50p)"
          onIcCheck={(ev) => console.log("onIcCheck", ev)}
        />
        <IcCheckbox value="Soya milk" label="Soya milk" checked />
        <IcCheckbox value="keep cup" label="Takeaway cup" disabled />
        <IcCheckbox value="other" label="Other">
          <IcTextField slot="additional-field" label="Please let us know..." />
        </IcCheckbox>
        <IcCheckbox
          additionalFieldDisplay="dynamic"
          value="other"
          label="Other"
        >
          <IcTextField slot="additional-field" label="Please let us know..." />
        </IcCheckbox>
      </IcCheckboxGroup>
    </div>
  );
};

export const CheckboxForm = () => {
  const [submit, setSubmit] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(submit);
  };

  return (
    <div style={{ padding: "5rem" }}>
      <form onSubmit={handleSubmit}>
        <IcCheckboxGroup
          label="Select your extras"
          name="default"
          onIcChange={(ev) => {
            ev.preventDefault;
            setSubmit(ev.detail.value[0]);
          }}
        >
          <IcCheckbox
            value="extra"
            label="Extra shot (50p)"
            onIcCheck={(ev) => console.log("onIcCheck", ev)}
          />
          <IcCheckbox value="Soya milk" label="Soya milk" checked />
          <IcCheckbox value="keep cup" label="Takeaway cup" disabled />
        </IcCheckboxGroup>
        <input type="submit" />
        <button type="reset" id="resetBtn">
          Reset Form
        </button>
      </form>
    </div>
  );
};

export const Controlled = () => {
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
      <IcButton
        id="uncheck-btn"
        variant="primary"
        onClick={defaultButtonClickHandler}
      >
        Unchecked
      </IcButton>
      <IcButton
        id="check-btn"
        variant="primary"
        onClick={differentButtonClickHandler}
      >
        Checked
      </IcButton>
    </>
  );
};

export const Uncontrolled = () => {
  const checkboxEl = useRef<any>(null);
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

export const DynamicLoading = (): ReactElement => {
  const [checkOptions, setCheckOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const updateOptions = () => {
    setCheckOptions([{ label: "Item 1", value: "Item 1" }]);
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

export const DisableParentBehaviour = (): ReactElement => {
  return (
    <div style={{ padding: "5rem" }}>
      <IcCheckboxGroup label="Liked things" name="1">
        <IcCheckbox
          value="drinks"
          label="Drinks"
          checked={true}
          indeterminate={true}
          disableParentCheckboxBehaviour={false}
        >
          <IcCheckboxGroup
            name="2"
            label="Coffee"
            hideLabel
            slot="additional-field"
          >
            <IcCheckbox value="tea" label="Tea" />
            <IcCheckbox
              value="coffee"
              label="Coffee"
              checked={true}
              indeterminate={true}
              disableParentCheckboxBehaviour={false}
              id="coffee-checkbox"
            >
              <IcCheckboxGroup
                label="Coffees"
                hideLabel
                slot="additional-field"
                name="3"
              >
                <IcCheckbox value="mocha" label="Mocha" id="mocha-checkbox" />
                <IcCheckbox value="espresso" label="Espresso" checked />
                <IcCheckbox
                  value="cappucino"
                  label="Cappucino"
                  id="cap-checkbox"
                />
              </IcCheckboxGroup>
            </IcCheckbox>
            <IcCheckbox value="juice" label="Juice" />
          </IcCheckboxGroup>
        </IcCheckbox>
      </IcCheckboxGroup>
    </div>
  );
};
