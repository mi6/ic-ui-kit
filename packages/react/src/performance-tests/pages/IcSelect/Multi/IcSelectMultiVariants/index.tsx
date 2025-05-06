import React from "react";
import { IcSelect, IcTheme, IcTypography } from "../../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const options = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame" },
  { label: "Filter", value: "Fil" },
  { label: "Flat white", value: "Fla" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
  { label: "Café au lait", value: "Caf" },
  { label: "Espresso", value: "Esp" },
  { label: "Cortado", value: "Cor" },
  { label: "Ristretto", value: "Ris" },
  { label: "Latte macchiato", value: "Lam" },
];

const groupedOptions = [
  {
    label: "Fancy",
    children: [
      { label: "Cappuccino", value: "Cap" },
      { label: "Flat white", value: "Flat" },
      { label: "Macchiato", value: "Mac" },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
      { label: "Americano", value: "Ame" },
    ],
  },
];

const optionsWithRecommended = [
  { label: "Cappuccino", value: "Cappuccino" },
  { label: "Flat white", value: "Flat white", recommended: true },
  { label: "Latte", value: "Latte" },
  { label: "Americano", value: "Americano", recommended: true },
  { label: "Filter", value: "Fil" },
];

const optionsWithCustomElements = [
  {
    label: "Cappuccino",
    value: "Cap",
  },
  {
    label: "Latte",
    value: "Lat",
    element: {
      component: `<ic-status-tag label="Neutral status"></ic-status-tag>`,
      ariaLabel: "Neutral status tag",
    },
  },
  {
    label: "Americano",
    value: "Ame",
    icon: `<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g id="warning"><path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>`,
  },
];

const defaultSelectEvents = {
  onIcChange: (event: any) => console.log(`icChange: ${event.detail.value}`),
  onIcBlur: () => console.log("Select blurred"),
  onIcFocus: () => console.log("Select focused"),
  onIcInput: (event: any) => console.log(`icInput: ${event.detail.value}`),
  onIcOptionSelect: (event: any) =>
    console.log(`icOptionSelect: ${event.detail.value}`),
  onIcOptionDeselect: (event: any) =>
    console.log(`icOptionDeselect: ${event.detail.value}`),
  onIcOpen: () => console.log("select dropdown opened"),
  onIcClose: () => console.log("select dropdown closed"),
  onIcClear: () => console.log("clear all clicked"),
};

const IcSelectMultiVariantsPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Select Multi Variants Page</h1>
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
        <IcSelect
          label="What is your favourite coffee?"
          options={options}
          multiple
          value={["Cap"]}
          showClearButton
          helperText="Select one or more options from the list"
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={groupedOptions}
          multiple
          showClearButton
          helperText="Select one or more options from the list"
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={optionsWithRecommended}
          multiple
          showClearButton
          helperText="Select one or more options from the list"
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          disabled
          options={options}
          multiple
          helperText="Select one or more options from the list"
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          readonly
          options={options}
          multiple
          value={["Cap", "Fla", "Moc"]}
          helperText="Select one or more options from the list"
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          placeholder="Placeholder goes here"
          options={options}
          multiple
          helperText="Select one or more options from the list"
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={optionsWithCustomElements}
          multiple
          helperText="Select one or more options from the list"
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={options}
          multiple
          size="small"
          helperText="Select one or more options from the list"
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={options}
          multiple
          size="large"
          helperText="Select one or more options from the list"
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          fullWidth
          options={options}
          multiple
          helperText="Select one or more options from the list"
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          validationStatus="success"
          validationText="Coffee available"
          options={options}
          multiple
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          validationStatus="warning"
          validationText="Only a few left"
          options={options}
          multiple
          {...defaultSelectEvents}
        />
        <IcSelect
          label="What is your favourite coffee?"
          validationStatus="error"
          validationText="Coffee unavailable"
          options={options}
          multiple
          {...defaultSelectEvents}
        />
      </div>
    </IcTheme>
  );
};

export default IcSelectMultiVariantsPage;
