import React, { useState } from "react";
import {
  IcRadioOption,
  IcRadioGroup,
  IcButton,
  IcSectionContainer,
} from "../../components";

const fourOptions = [
  { label: "Item 1", value: "Item 1" },
  { label: "Item 2", value: "Item 2" },
  { label: "Item 3", value: "Item 3" },
  { label: "Item 4", value: "Item 4" },
];

const twoUpdatedOptions = [
  { label: "Item 5", value: "Item 5" },
  { label: "Item 6", value: "Item 6" },
];

export const Radios = () => {
  return (
    <IcSectionContainer>
      <IcRadioGroup label="This is a test label" name="radio-group-1">
        {fourOptions.map((option, index) => (
          <IcRadioOption
            key={index + option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </IcRadioGroup>
    </IcSectionContainer>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <IcRadioGroup label="This is a test label" name="radio-group-1">
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
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <IcRadioGroup label="This is a test label" name="radio-group-1">
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
