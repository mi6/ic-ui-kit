import React, { useState, useRef } from "react";
import { IcButton, IcSwitch } from "../../components";

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
      <IcSwitch checked={checked} label="Label" />
      <br />
      <br />
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
  const switchEl = useRef<any>(null);
  const handleChange = () => {
    console.log(switchEl.current.checked);
  };
  return <IcSwitch ref={switchEl} label="Test" onIcChange={handleChange} />;
};
