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
          <IcCheckbox value="keep cup" label="Takeaway cup" />
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
    <IcCheckbox
      ref={checkboxEl}
      label="Label"
      value="valueName1"
      onIcCheck={handleCheck}
    />
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

export const IndeterminateCheckbox = () => (
  <IcCheckbox label="Label" value="valueName1" indeterminate checked />
);

export const NativeIndeterminateCheckbox = () => (
  <IcCheckbox
    label="Label"
    value="valueName1"
    indeterminate
    nativeIndeterminateBehaviour
  />
);

export const IndeterminateWithChildren = () => {
  const [drinksChecked, setDrinksChecked] = useState({
    tea: false,
    coffee: false,
    juice: false,
  });
  const [parentChecked, setParentChecked] = useState(false);
  const [parentIndeterminate, setParentIndeterminate] = useState(false);

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

export const Disabled = () => {
  return (
    <IcCheckboxGroup label="This is a label" name="1" disabled>
      <IcCheckbox value="valueName1" label="Unselected / Disabled 1" disabled />
      <IcCheckbox value="valueName2" label="Unselected / Disabled 2" disabled />
      <IcCheckbox
        value="valueName4"
        label="Selected / Disabled"
        disabled
        checked
      />
    </IcCheckboxGroup>
  );
};

export const HiddenGroupLabel = () => {
  return (
    <IcCheckboxGroup label="Select your extras" hideLabel name="1">
      <IcCheckbox value="valueName1" label="Extra shot (50p)" />
      <IcCheckbox value="valueName2" label="Soya milk" checked />
    </IcCheckboxGroup>
  );
};

export const HiddenCheckboxLabel = () => {
  return (
    <IcCheckboxGroup label="Select your extras" hideLabel name="1">
      <IcCheckbox value="valueName1" label="Extra shot (50p)" hideLabel />
      <IcCheckbox value="valueName2" label="Soya milk" checked hideLabel />
    </IcCheckboxGroup>
  );
};

export const HelperText = () => {
  return (
    <IcCheckboxGroup
      label="Select your extras"
      name="1"
      helperText="Additional charges may apply."
    >
      <IcCheckbox value="valueName1" label="Extra shot (50p)" />
      <IcCheckbox value="valueName2" label="Soya milk" checked />
    </IcCheckboxGroup>
  );
};

export const Required = () => {
  return (
    <IcCheckboxGroup label="This is a label" required name="1">
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
  );
};

export const DifferentSizes = () => {
  return (
    <div>
      <IcCheckboxGroup label="Select your extras" name="1" size="small">
        <IcCheckbox value="valueName1" label="Extra shot (50p)" />
        <IcCheckbox value="valueName2" label="Soya milk" checked />
        <IcCheckbox value="valueName3" label="Sugar" indeterminate checked />
      </IcCheckboxGroup>
      <IcCheckboxGroup label="Select your extras" name="2">
        <IcCheckbox value="valueName1" label="Extra shot (50p)" />
        <IcCheckbox value="valueName2" label="Soya milk" checked />
        <IcCheckbox value="valueName3" label="Sugar" indeterminate checked />
      </IcCheckboxGroup>
      <IcCheckboxGroup label="Select your extras" name="3" size="large">
        <IcCheckbox value="valueName1" label="Extra shot (50p)" />
        <IcCheckbox value="valueName2" label="Soya milk" checked />
        <IcCheckbox value="valueName3" label="Sugar" indeterminate checked />
      </IcCheckboxGroup>
    </div>
  );
};

export const DifferentSizedCheckboxes = () => {
  return (
    <div>
      <IcCheckbox value="valueName1" label="Extra shot (50p)" size="small" />
      <IcCheckbox value="valueName2" label="Extra shot (50p)" />
      <IcCheckbox value="valueName3" label="Extra shot (50p)" size="large" />
    </div>
  );
};

export const Conditional = () => {
  return (
    <IcCheckboxGroup label="Which coffee do you like best?" name="conditional">
      <IcCheckbox value="americano" label="Americano" />
      <IcCheckbox value="espresso" label="Espresso" />
      <IcCheckbox value="flatwhite" label="Flat white" />
      <IcCheckbox value="latte" label="Latte" />
      <IcCheckbox value="cappuccino" label="Cappuccino" />
      <IcCheckbox value="other" label="Other">
        <IcTextField slot="additional-field" label="Please let us know..." />
      </IcCheckbox>
    </IcCheckboxGroup>
  );
};

export const ConditionalDynamic = () => {
  return (
    <IcCheckboxGroup label="Which coffee do you like best?" name="dynamic">
      <IcCheckbox value="americano" label="Americano" />
      <IcCheckbox value="espresso" label="Espresso" />
      <IcCheckbox value="flatwhite" label="Flat white" />
      <IcCheckbox value="latte" label="Latte" />
      <IcCheckbox value="cappuccino" label="Cappuccino" />
      <IcCheckbox
        checked
        additionalFieldDisplay="dynamic"
        value="other"
        label="Other"
      >
        <IcTextField slot="additional-field" label="Please let us know..." />
      </IcCheckbox>
    </IcCheckboxGroup>
  );
};

export const Validation = () => {
  return (
    <IcCheckboxGroup
      label="Select your extras"
      name="1"
      validationStatus="error"
      validationText="Sorry, this is currently unavailable."
    >
      <IcCheckbox value="valueName1" label="Extra shot (50p)" />
      <IcCheckbox value="valueName2" label="Soya milk" checked />
    </IcCheckboxGroup>
  );
};

export const ThemeDark = () => {
  return (
    <div style={{ padding: "5rem", backgroundColor: "black" }}>
      <IcCheckboxGroup
        label="Select your extras"
        name="default"
        helperText="Additional charges may apply."
        validationStatus="error"
        validationText="Sorry, this is currently unavailable."
        theme="dark"
      >
        <IcCheckbox value="extra" label="Extra shot (50p)" />
        <IcCheckbox value="Soya milk" label="Soya milk" checked />
        <IcCheckbox value="extra" label="Extra shot (50p)" indeterminate />
        <IcCheckbox value="keep cup" label="Takeaway cup" disabled />
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
