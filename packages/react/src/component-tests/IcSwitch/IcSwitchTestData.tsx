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

export const Default = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSwitch
        label="Label"
        onIcChange={(ev) =>
          console.log({
            checked: ev.detail.checked,
          })
        }
      />
    </div>
  );
};

export const State = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSwitch showState label="Label" />
    </div>
  );
};

export const Checked = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSwitch checked showState label="Label" />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSwitch disabled showState label="Label" />
      <IcSwitch disabled checked showState label="Label" />
    </div>
  );
};

export const Small = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSwitch size="small" showState label="Label" />
    </div>
  );
};

export const RightAdornment = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSwitch label="Right adornment">
        <svg
          slot="right-adornment"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
            fill="black"
          />
        </svg>
      </IcSwitch>
    </div>
  );
};

export const HelperText = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSwitch label="Label" helperText="This is some helper text" />
    </div>
  );
};

export const HiddenLabel = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSwitch label="Label" hideLabel />
    </div>
  );
};

export const InAForm = () => {
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formElement = ev.currentTarget;
    const formData = new FormData(formElement);

    formData.forEach((value, key) => {
      console.log(`Form data: ${key} = ${value}`);
    });
  };
  return (
    <form onSubmit={(ev) => handleSubmit(ev)} id="form">
      <IcSwitch id="switch" label="Label" name="test-name"></IcSwitch>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
  );
};

export const ThemeDark = () => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        gap: "10px",
        backgroundColor: "black",
      }}
    >
      <IcSwitch label="Label" theme="dark" />
      <IcSwitch label="Label" checked theme="dark" />
      <IcSwitch label="Label" disabled theme="dark" />
      <IcSwitch label="Label" disabled checked theme="dark" />
    </div>
  );
};
