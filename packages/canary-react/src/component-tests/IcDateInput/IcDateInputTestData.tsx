import React, { useState } from "react";
import { IcDateInput } from "../../components";

type updateValueProp = {
  updatedValue: string | Date | undefined | null;
};

type helperTextProp = {
  initialText: string;
  newText: string;
};

export const DateInputUpdateValue = ({ updatedValue }: updateValueProp) => {
  const [value, setValue] = useState<string | undefined | null | Date>(
    "31/08/2025"
  );
  const handleClick = () => {
    setValue(updatedValue);
  };
  return (
    <>
      <IcDateInput label="Test label" value={value} />
      <button onClick={handleClick}>Clear</button>
    </>
  );
};

export const DateInputUpdateHelperText = (helperTextFields: helperTextProp) => {
  const [helpText, setHelpText]: any = useState(helperTextFields.initialText);
  const updateHelperText = () => {
    setHelpText(helperTextFields.newText);
  };
  const clearHelperText = () => {
    setHelpText("");
  };

  const nullHelperText = () => {
    setHelpText(null);
  };
  return (
    <>
      <IcDateInput
        label="When would you like to collect your coffee?"
        helperText={helpText}
      />
      <br />
      <div style={{ display: "flex", gap: "8px" }}>
        <button id="changeText" onClick={updateHelperText}>
          Set helper text
        </button>
        <button id="resetText" onClick={clearHelperText}>
          Clear helper text
        </button>
        <button id="nullText" onClick={nullHelperText}>
          Null helper text
        </button>
      </div>
    </>
  );
};

export const DateInputHideHelperText = () => {
  const [hideHelpText, setHideHelpText]: any = useState(false);
  const setHideHelperText = () => {
    setHideHelpText(true);
  };
  return (
    <>
      <IcDateInput
        label="Can you see my helper text?"
        hideHelperText={hideHelpText}
      />
      <br />
      <button id="hideText" onClick={setHideHelperText}>
        Hide Helper Text
      </button>
    </>
  );
};
