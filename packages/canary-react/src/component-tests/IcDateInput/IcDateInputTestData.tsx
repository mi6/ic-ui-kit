import React, { useState } from "react";
import { IcDateInput } from "../../components";

type updateValueProp = {
  updatedValue: string | Date | undefined | null;
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
