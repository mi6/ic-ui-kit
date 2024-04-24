import React, { useRef, useState } from "react";
import { IcTextField } from "../../components";

export const Controlled = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: any) => {
    console.log(event.detail.value);
    setValue(event.detail.value);
  };
  return (
    <IcTextField
      placeholder="Controlled"
      label="Controlled"
      value={value}
      onIcChange={handleChange}
    />
  );
};

export const Uncontrolled = () => {
  const textFieldEl = useRef<any>(null);
  const handleChange = () => {
    console.log(textFieldEl.current.value);
  };
  return (
    <IcTextField
      ref={textFieldEl}
      placeholder="Uncontrolled"
      label="Uncontrolled"
      onIcChange={handleChange}
    />
  );
};
