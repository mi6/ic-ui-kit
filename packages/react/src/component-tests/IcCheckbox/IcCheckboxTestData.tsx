import React, { useState } from "react";
import { IcCheckbox, IcCheckboxGroup, IcTextField } from "../../components";

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
