/* eslint-disable sonarjs/no-duplicate-string */

import React, { ReactElement, useState, useRef } from "react";
import { IcButton, IcSelect } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

export const coffeeOptions = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
  { label: "Flat White", value: "flatwhite" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Americano", value: "americano" },
  { label: "Mocha", value: "mocha" },
];

export const manyOptions = [
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

export const coffeeOptionsDescriptions = [
  {
    label: "Cappuccino",
    value: "cappuccino",
    description:
      "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
  },
  {
    label: "Americano",
    value: "americano",
    description: "Espresso coffee diluted with hot water",
  },
  { label: "Mocha", value: "mocha", description: "Coffee with chocolate" },
];

export const coffeeDisabledOption = [
  { label: "Americano", value: "americano", disabled: true },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Latte", value: "latte", disabled: true },
  { label: "Mocha", value: "mocha" },
];

export const coffeeCustomElements = [
  {
    label: "Cappuccino",
    value: "Cap",
  },
  {
    label: "Latte",
    value: "Lat",
    element: {
      component: `<ic-status-tag label="Success status" status="success"></ic-status-tag>`,
      ariaLabel: "Success status tag",
    },
  },
  {
    label: "Americano",
    value: "Ame",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>`,
  },
];

export const optionsWithHiddenLabels = [
  {
    label: "Small",
    value: "s",
    element: {
      component: `<ic-chip label="Small" size="small"></ic-chip>`,
      ariaLabel: "small chip",
    },
    hideLabel: true,
  },
  {
    label: "Medium size",
    value: "m",
    element: {
      component: `<ic-chip label="Medium"></ic-chip>`,
      ariaLabel: "medium chip",
    },
    hideLabel: true,
  },
  {
    label: "Large",
    value: "l",
    element: {
      component: `<ic-chip label="Large" size="large"></ic-chip>`,
      ariaLabel: "large chip",
    },
    hideLabel: true,
  },
  {
    label: "Extra Large",
    value: "xl",
  },
];

export const groupCoffeeOption = [
  {
    label: "Fancy",
    children: [
      { label: "Cappuccino", value: "Cap" },
      { label: "Flat white", value: "Flat" },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
    ],
  },
];

export const groupAndDescriptionCoffeeOption = [
  {
    label: "Fancy",
    children: [
      {
        label: "Cappuccino",
        description:
          "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
        value: "Cap",
      },
      { label: "Flat white", value: "Flat" },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
    ],
  },
];

export const recommendedCoffeeOption = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso", recommended: true },
  { label: "Flat White", value: "flatwhite" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Americano", value: "americano", recommended: true },
  { label: "Mocha", value: "mocha" },
];

export const validationCoffeeOption = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
  { label: "Flat White", value: "flatwhite" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Americano", value: "americano" },
  { label: "Mocha", value: "mocha" },
];

export const searchableCoffeeOption = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame" },
  { label: "Flat white", value: "Fla" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
  { label: "Café au lait", value: "Caf" },
  { label: "Espresso", value: "Esp" },
  { label: "Cortado", value: "Cor" },
  { label: "Latte macchiato", value: "Lam" },
];

export const searchableDescriptionsCoffeeOption = [
  {
    label: "Cappuccino",
    value: "Cap",
    description:
      "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
  },
  {
    label: "Americano",
    value: "Ame",
    description: "Espresso coffee diluted with hot water",
  },
  { label: "Mocha", value: "Moc", description: "Coffee with chocolate" },
  {
    label: "Latte",
    value: "Lat",
    description: "Milky coffee with one or two shots of espresso",
  },
  {
    label: "Flat white",
    value: "Fla",
    description: "Coffee with frothed milk poured over espresso",
  },
  {
    label: "Macchiato",
    value: "Mac",
    description: "Espresso coffee topped with steamed milk",
  },
  {
    label: "Café au lait",
    value: "Caf",
    description: "Brewed coffee with steamed milk",
  },
  {
    label: "Espresso",
    value: "Esp",
    description: "Concentrated form of coffee",
  },
  { label: "Cortado", value: "Cor", description: "Coffee cut with milk" },
  {
    label: "Latte macchiato",
    value: "Lam",
    description: "Espresso coffee with milk and a spoonful of foamed milk",
  },
];

export const searchableGroupCoffeeOption = [
  {
    label: "Fancy",
    children: [
      { label: "Cappuccino", value: "Cap" },
      { label: "Flat white", value: "Flat" },
      { label: "Mocha", value: "Moc" },
      { label: "Macchiato", value: "Mac" },
      { label: "Cortado", value: "Cor" },
      { label: "Latte macchiato", value: "Lam" },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
      { label: "Americano", value: "Ame" },
      { label: "Espresso", value: "Esp" },
    ],
  },
];

const setLoading = () => {
  const select = document.querySelector("ic-select");
  if (select) select.loading = true;
};

export const LoadingSelect = (): ReactElement => (
  <>
    <IcButton onClick={setLoading}>Load</IcButton>
    <IcSelect
      label="What is your favourite coffee?"
      timeout={500}
      loadingErrorLabel="Loading Error"
      options={[]}
      onIcRetryLoad={setLoading}
    />
  </>
);

export const LoadingSelectNoTimeout = (): ReactElement => (
  <>
    <IcButton onClick={setLoading}>Load</IcButton>
    <IcSelect label="What is your favourite coffee?" options={[]} />
  </>
);

export const LoadingSelectSearchable = (): ReactElement => (
  <>
    <IcButton onClick={setLoading}>Load</IcButton>
    <IcSelect
      label="What is your favourite coffee?"
      timeout={500}
      loadingErrorLabel="Loading Error"
      options={[]}
      onIcRetryLoad={setLoading}
      searchable
    />
  </>
);

export const LoadingSelectSearchableNoTimeout = (): ReactElement => (
  <>
    <IcButton onClick={setLoading}>Load</IcButton>
    <IcSelect
      label="What is your favourite coffee?"
      options={[]}
      searchable
      showClearButton
    />
  </>
);

export const ControlledSelect = () => {
  const [options, setOptions] = useState(coffeeOptions);
  const handleChange = () => {
    setOptions(manyOptions);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <IcSelect placeholder="Controlled" label="Controlled" options={options} />
      <IcButton id="update-opt" onClick={() => handleChange()}>
        Update options
      </IcButton>
    </div>
  );
};

export const ControlledSearchableSelect = () => {
  const [options, setOptions] = useState(coffeeOptions);
  const handleChange = () => {
    setOptions(manyOptions);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <IcSelect
        placeholder="Controlled"
        label="Controlled"
        options={options}
        searchable
      />
      <IcButton id="update-opt" onClick={() => handleChange()}>
        Update options
      </IcButton>
    </div>
  );
};

export const UncontrolledSelect = () => {
  const selectEl = useRef<any>(null);
  const handleChange = () => {
    console.log(selectEl.current.value);
  };
  return (
    <>
      <IcSelect
        ref={selectEl}
        placeholder="Uncontrolled"
        label="Uncontrolled"
        options={coffeeOptions}
        onIcChange={handleChange}
      />
    </>
  );
};

export const UncontrolledSearchableSelect = () => {
  const selectEl = useRef<any>(null);
  const handleChange = () => {
    console.log(selectEl.current.value);
  };
  return (
    <>
      <IcSelect
        ref={selectEl}
        searchable
        placeholder="Uncontrolled"
        label="Uncontrolled"
        options={coffeeOptions}
        onIcChange={handleChange}
      />
    </>
  );
};

export const MultiSelectDefault = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSelect
        label="What are your favourite types of coffee?"
        options={coffeeOptions}
        multiple
      />
    </div>
  );
};

export const MultiSelectDefaultValue = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSelect
        label="What are your favourite types of coffee?"
        options={coffeeOptions}
        value={["doubleespresso", "flatwhite", "mocha"]}
        multiple
      />
    </div>
  );
};

export const MultiSelectWithDescriptions = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSelect
        label="What are your favourite types of coffee?"
        options={coffeeOptionsDescriptions}
        multiple
      />
    </div>
  );
};

export const MultiSelectSmall = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSelect
        label="What are your favourite types of coffee?"
        options={coffeeOptions}
        size="small"
        multiple
      />
    </div>
  );
};

export const MultiSelectLarge = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSelect
        label="What are your favourite types of coffee?"
        options={coffeeOptions}
        size="large"
        multiple
      />
    </div>
  );
};

export const MultiSelectDisabledOptions = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSelect
        label="What are your favourite types of coffee?"
        options={coffeeDisabledOption}
        multiple
      />
    </div>
  );
};

export const MultiSelectReadOnly = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSelect
        label="What are your favourite types of coffee?"
        options={coffeeOptions}
        value={["doubleespresso", "flatwhite", "mocha"]}
        readonly
        multiple
      />
    </div>
  );
};

export const MultiSelectGroups = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSelect
        label="What are your favourite types of coffee?"
        options={groupCoffeeOption}
        multiple
      />
    </div>
  );
};

export const MultiSelectWithAllValues = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSelect
        label="What are your favourite types of coffee?"
        options={coffeeOptions}
        value={[
          "espresso",
          "doubleespresso",
          "flatwhite",
          "cappuccino",
          "americano",
          "mocha",
        ]}
        multiple
      />
    </div>
  );
};

export const MultiSelectWithClearButton = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSelect
        label="What are your favourite types of coffee?"
        options={coffeeOptions}
        multiple
        showClearButton
        value={["espresso"]}
      />
    </div>
  );
};

export const NotMultiSelect = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSelect
        label="What are your favourite types of coffee?"
        options={coffeeOptions}
        multiple={false}
      />
    </div>
  );
};

export const DarkTheme = (): ReactElement => (
  <div
    style={{
      backgroundColor: "var(--ic-color-page-background-dark)",
      height: "100vh",
      paddingLeft: "8px",
    }}
  >
    <IcSelect
      label="What are your favourite types of coffee?"
      helperText="Select one option from the list"
      theme="dark"
      options={coffeeDisabledOption}
      showClearButton
      placeholder="Placeholder goes here"
      required
    >
      <SlottedSVG
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </SlottedSVG>
    </IcSelect>
  </div>
);

export const DarkThemeGroupDescription = (): ReactElement => (
  <div style={{ backgroundColor: "var(--ic-color-page-background-dark)" }}>
    <IcSelect
      label="What are your favourite types of coffee?"
      theme="dark"
      options={groupAndDescriptionCoffeeOption}
    />
  </div>
);

export const DarkThemeReadonlyDisabled = (): ReactElement => (
  <div
    style={{
      backgroundColor: "var(--ic-color-page-background-dark)",
      height: "100vh",
      paddingLeft: "8px",
    }}
  >
    <IcSelect
      label="What are your favourite types of coffee?"
      theme="dark"
      disabled
    />
    <IcSelect
      label="What are your favourite types of coffee?"
      theme="dark"
      value="espresso"
      options={coffeeOptions}
      readonly
    />
  </div>
);

export const DarkThemeValidation = (): ReactElement => (
  <div
    style={{
      backgroundColor: "var(--ic-color-page-background-dark)",
      height: "100vh",
      paddingLeft: "8px",
    }}
  >
    <IcSelect
      label="What is your favourite coffee?"
      validationStatus="success"
      validationText="Coffee available"
      theme="dark"
      options={coffeeOptions}
    />
    <IcSelect
      label="What is your favourite coffee?"
      validationStatus="warning"
      validationText="Only a few left"
      theme="dark"
      options={coffeeOptions}
    />
    <IcSelect
      label="What is your favourite coffee?"
      validationStatus="error"
      validationText="Coffee unavailable"
      theme="dark"
      options={coffeeOptions}
    />
  </div>
);

export const DarkThemeMulti = (): ReactElement => (
  <div
    style={{
      backgroundColor: "var(--ic-color-page-background-dark)",
      height: "100vh",
      paddingLeft: "8px",
    }}
  >
    <IcSelect
      label="What are your favourite types of coffee?"
      options={coffeeOptions}
      multiple
      value={["doubleespresso", "flatwhite", "mocha"]}
      theme="dark"
    />
  </div>
);

export const DarkThemeSearchable = (): ReactElement => (
  <div
    style={{
      backgroundColor: "var(--ic-color-page-background-dark)",
      height: "100vh",
      paddingLeft: "8px",
    }}
  >
    <IcSelect
      label="What is your favourite coffee?"
      options={searchableCoffeeOption}
      theme="dark"
      searchable
    />
  </div>
);

export const DarkThemeLoadingError = (): ReactElement => (
  <div
    style={{
      backgroundColor: "var(--ic-color-page-background-dark)",
      height: "100vh",
      paddingLeft: "8px",
    }}
  >
    <IcButton theme="dark" onClick={setLoading}>
      Load
    </IcButton>
    <IcSelect
      label="What is your favourite coffee?"
      theme="dark"
      timeout={200}
      loadingErrorLabel="Loading Error"
      options={[]}
    />
  </div>
);
