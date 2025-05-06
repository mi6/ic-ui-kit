import React, { useEffect, useState } from "react";
import {
  IcRadioGroup,
  IcRadioOption,
  IcTextField,
  IcTheme,
  IcTypography,
} from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const radioOptions = [
  { value: "crisps", label: "Crisps" },
  {
    value: "cookie",
    label: "Deluxe chocolate chip cookie (sold out)",
    disabled: true,
  },
  { value: "fruit", label: "Banana" },
  { value: "No item", label: "No thanks, just my coffee", selected: true },
];

const baseRadioGroupProps = {
  label: "Add a free purchase with any hot drink",
  helperText: "Options may be limited",
};

const renderRadioOptions = (groupName: string) =>
  radioOptions.map((option) => (
    <IcRadioOption
      key={`${option.value}-${groupName}`}
      value={option.value}
      label={`${option.label} (${groupName})`}
      disabled={option.disabled}
      selected={option.selected}
      onIcCheck={(ev) =>
        console.log("Radio option selected: ", ev.detail.value)
      }
    />
  ));

const RadioOptionsDynamic = () => {
  const [dynamicOptions, setDynamicOptions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setDynamicOptions([
        { label: "Item 1", value: "Item 1" },
        { label: "Item 2", value: "Item 2" },
        { label: "Item 3", value: "Item 3" },
        { label: "Item 4", value: "Item 4" },
      ]);
    }, 3000);
  }, []);

  return (
    <IcRadioGroup label="What is your favourite coffee?" name="radio-group-8">
      {dynamicOptions.map((option) => (
        <IcRadioOption
          key={option.value}
          value={option.value}
          label={option.label}
          onIcCheck={(ev) =>
            console.log("Radio option selected: ", ev.detail.value)
          }
        />
      ))}
    </IcRadioGroup>
  );
};

type ConditionalRadioGroupProps = {
  label: string;
  additionalFieldDisplay?: "dynamic" | "static";
  name: string;
};

const ConditionalRadioGroup = ({
  label,
  additionalFieldDisplay,
  name,
}: ConditionalRadioGroupProps) => (
  <IcRadioGroup
    label={label}
    name={name}
    onIcChange={(ev) => console.log(ev.detail.selectedOption)}
  >
    <IcRadioOption
      value="valueName1"
      label="Option with no additional field"
      onIcCheck={(ev) =>
        console.log("Radio option selected: ", ev.detail.value)
      }
    ></IcRadioOption>
    <IcRadioOption
      value="valueName2"
      label="Option with text field as conditional slotted additional field"
      additionalFieldDisplay={additionalFieldDisplay}
      onIcCheck={(ev) =>
        console.log("Radio option selected: ", ev.detail.value)
      }
    >
      <IcTextField
        validationStatus="error"
        validationText="Now it has really gone to (coffee) pot"
        slot="additional-field"
        placeholder="Placeholder"
        label="What's your favourite type of coffee?"
      />
    </IcRadioOption>
  </IcRadioGroup>
);

const IcRadioVariantsPage: React.FC<PageProps> = ({ theme }) => (
  <IcTheme id="theme-wrapper" theme={theme}>
    <IcTypography variant="subtitle-small">
      <h1>Radio Variants Page</h1>
    </IcTypography>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        margin: "1rem",
        width: "fit-content",
        padding: "10px",
      }}
    >
      <IcRadioGroup
        {...baseRadioGroupProps}
        name="radio-group-1"
        required
        onIcChange={(ev) => console.log(ev.detail.value)}
      >
        {renderRadioOptions("radio-group-1")}
      </IcRadioGroup>
      <IcRadioGroup {...baseRadioGroupProps} name="radio-group-2" disabled>
        {renderRadioOptions("radio-group-2")}
      </IcRadioGroup>
      <IcRadioGroup
        {...baseRadioGroupProps}
        name="radio-group-3"
        size="small"
        onIcChange={(ev) => console.log(ev.detail.value)}
      >
        {renderRadioOptions("radio-group-3")}
      </IcRadioGroup>
      <IcRadioGroup
        {...baseRadioGroupProps}
        name="radio-group-4"
        required
        validationStatus="error"
        validationText="Please select an option"
        onIcChange={(ev) => console.log(ev.detail.value)}
      >
        {renderRadioOptions("radio-group-4")}
      </IcRadioGroup>
      <IcRadioGroup
        {...baseRadioGroupProps}
        name="radio-group-5"
        validationStatus="success"
        validationText="You have selected your item"
        onIcChange={(ev) => console.log(ev.detail.value)}
      >
        {renderRadioOptions("radio-group-5")}
      </IcRadioGroup>
      <ConditionalRadioGroup
        label="Conditional dynamic"
        additionalFieldDisplay="dynamic"
        name="radio-group=6"
      />
      <ConditionalRadioGroup
        label="Conditional static"
        additionalFieldDisplay="static"
        name="radio-group-7"
      />
      <RadioOptionsDynamic />
    </div>
  </IcTheme>
);

export default IcRadioVariantsPage;
