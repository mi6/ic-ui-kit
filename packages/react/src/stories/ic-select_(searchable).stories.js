/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable sonarjs/no-duplicate-string */
import React, { useState, useEffect, useRef } from "react";

import { IcButton, IcLink, IcSelect, IcTypography } from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

const defaultArgs = {
  disabled: false,
  fullWidth: false,
  helperText: "Select one option from the list",
  hideLabel: false,
  loading: false,
  loadingLabel: "Loading...",
  label: "What is your favourite coffee?",
  placeholder: "Select an option",
  readonly: false,
  required: false,
  size: "default",
  validationAriaLive: "polite",
  validationStatus: "no status",
  validationText: "",
  includeDescriptionsInSearch: false,
  includeGroupTitlesInSearch: false,
  searchMatchPosition: "anywhere",
  theme: "inherit",
};

const options = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame" },
  { label: "Filter", value: "Fil" },
  { label: "Flat white", value: "Fla" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
];

const groupedOptions = [
  {
    label: "Fancy",
    children: [
      { label: "Cappuccino", value: "Cap" },
      { label: "Flat white", value: "Fla" },
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

const manyOptions = [
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

const optionsWithDescriptions = [
  {
    label: "Cappuccino",
    value: "Cap",
    description: "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
  },
  {
    label: "Latte",
    value: "Lat",
    description: "A milkier coffee than a cappuccino",
  },
  {
    label: "Americano",
    value: "Ame",
    description: "Espresso coffee diluted with hot water",
  },
  {
    label: "Filter",
    value: "Fil",
    description: "Coffee filtered using paper or a mesh",
  },
  {
    label: "Flat white",
    value: "Fla",
    description: "Coffee without froth made with espresso and hot steamed milk",
  },
  {
    label: "Mocha",
    value: "Moc",
    description: "A mixture of coffee and chocolate",
  },
  {
    label: "Macchiato",
    value: "Mac",
    description: "Espresso coffee with a dash of frothy steamed milk",
  },
];

const optionsWithDisabled = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame", disabled: true },
  { label: "Filter", value: "Fil", disabled: true },
  { label: "Flat white", value: "Fla" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac", disabled: true },
];

const optionsWithRecommended = [
  { label: "Cappuccino", value: "Cappuccino" },
  { label: "Flat white", value: "Flat white", recommended: true },
  { label: "Latte", value: "Latte" },
  { label: "Americano", value: "Americano", recommended: true },
  { label: "Filter", value: "Fil" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
];

const playgroundOptions = [
  {
    label: "Cappuccino",
    value: "Cap",
    description: "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
  },
  {
    label: "Boring",
    children: [
      {
        label: "Latte",
        value: "Lat",
        description: "A milkier coffee than a cappuccino",
      },
      {
        label: "Filter",
        value: "Fil",
        description: "Coffee filtered using paper or a mesh",
      },
    ],
  },
  {
    label: "Fancy",
    children: [
      {
        label: "Flat white",
        value: "Fla",
        description:
          "Coffee without froth made with espresso and hot steamed milk",
      },
      {
        label: "Macchiato",
        value: "Mac",
        description: "Espresso coffee with a dash of frothy steamed milk",
      },
    ],
  },
  {
    label: "Americano",
    value: "Ame",
    description: "Espresso coffee diluted with hot water",
  },
  {
    label: "Mocha",
    value: "Moc",
    description: "A mixture of coffee and chocolate",
  },
];

const InForm = () => {
  return (
    <form>
      <IcSelect
        label="What is your favourite coffee?"
        required
        value="Cap"
        options={options}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        searchable
        showClearButton
      />
      <IcButton type="reset">Reset</IcButton>
    </form>
  );
};

const ExternalFiltering = () => {
  const mockData = [
    { label: "Espresso", value: "Esp" },
    { label: "Double Espresso", value: "Dou" },
    { label: "Cappuccino", value: "Cap" },
    { label: "Latte", value: "Lat" },
    { label: "Americano", value: "Ame" },
    { label: "Filter", value: "Fil" },
    { label: "Flat white", value: "Fla" },
    { label: "Mocha", value: "Moc" },
    { label: "Macchiato", value: "Mac" },
  ];
  const [event, setEvent] = useState();
  const [selectedValue, setSelectedValue] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const searchTerm = event?.detail.value;
    if (searchTerm !== selectedValue) {
      if (searchTerm) {
        setLoading(true);
        const mockAPI = (query) => {
          const filteredResults = mockData.filter((m) =>
            m.label.toLowerCase().includes(query.toLowerCase()),
          );
          return new Promise((resolve) =>
            setTimeout(
              () => resolve(filteredResults),
              event.type === "icInput" ? 2000 : 500,
            ),
          );
        };
        mockAPI(searchTerm).then((results) => setResults(results));
      } else {
        setResults([]);
      }
    }
  }, [event]);
  const handleInput = (event) => {
    console.log(event.detail.value);
    setEvent(event);
  };
  const handleOptionSelect = (event) => {
    setSelectedValue(event.detail.value);
  };
  const handleClear = () => {
    setResults([]);
  };
  return (
    <IcSelect
      loading={loading}
      timeout={1000}
      debounce={300}
      label="What is your favourite coffee?"
      searchable
      disableAutoFiltering
      options={results}
      onIcOptionSelect={handleOptionSelect}
      onIcInput={handleInput}
      onIcRetryLoad={handleInput}
      onIcClear={handleClear}
    />
  );
};

const ControlledExample = () => {
  const [value, setValue] = useState("Cap");
  const handleChange = (event) => {
    console.log(event.detail.value);
    setValue(event.detail.value);
  };
  return (
    <IcSelect
      searchable
      placeholder="Controlled"
      label="Controlled"
      options={options}
      value={value}
      onIcChange={handleChange}
    />
  );
};

const Uncontrolled = () => {
  const selectEl = useRef();
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
        options={options}
        onIcChange={handleChange}
      />
    </>
  );
};

export default {
  title: "Select/Searchable",
  component: IcSelect,
};

export const Default = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={options}
        searchable
        onIcInput={(event) => console.log(`icInput: ${event.detail.value}`)}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        onIcOptionSelect={(event) =>
          console.log(`icOptionSelect: ${event.detail.value}`)
        }
        onIcOpen={() => console.log("select dropdown opened")}
        onIcClose={() => console.log("select dropdown closed")}
      />
    );
  },

  name: "Default",
};

export const DefaultValue = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        required
        value="Lat"
        options={options}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        searchable
        showClearButton
      />
    );
  },

  name: "Default value",
};

export const FilterByStartOfOptions = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={options}
        searchable
        filterMatchPosition="start"
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Filter by start of options",
};

export const WithDescriptions = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={optionsWithDescriptions}
        searchable
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "With descriptions",
};

export const WithDescriptionsIncludedInSearch = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={optionsWithDescriptions}
        searchable
        includeDescriptionsInSearch
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "With descriptions (included in search)",
};

export const HelperText = {
  render: () => {
    return (
      <>
        <IcSelect
          label="What is your favourite coffee?"
          options={options}
          searchable
          helperText="Select one option from the list"
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <br />
        <IcSelect
          label="What is your favourite coffee?"
          options={options}
          searchable
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        >
          <IcTypography variant="caption" slot="helper-text">
            <span>
              Slotted helper text with a <IcLink href="#">link</IcLink>
            </span>
          </IcTypography>
        </IcSelect>
      </>
    );
  },

  name: "Helper text",
};

export const Sizes = {
  render: () => {
    return (
      <>
        <IcSelect
          label="What is your favourite coffee?"
          options={options}
          searchable
          size="small"
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={options}
          searchable
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={options}
          searchable
          size="large"
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
      </>
    );
  },

  name: "Sizes",
};

export const Disabled = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={options}
        searchable
        disabled
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Disabled",
};

export const DisabledOptions = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={optionsWithDisabled}
        searchable
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Disabled options",
};

export const HiddenLabel = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={options}
        searchable
        hideLabel
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Hidden label",
};

export const Required = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={options}
        searchable
        required
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Required",
};

export const Groups = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={groupedOptions}
        searchable
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Groups",
};

export const GroupsGroupTitlesIncludedInSearch = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={groupedOptions}
        searchable
        includeGroupTitlesInSearch
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Groups (group titles included in search)",
};

export const Recommended = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={optionsWithRecommended}
        searchable
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Recommended",
};

export const Validation = {
  render: () => {
    return (
      <div>
        <IcSelect
          label="What is your favourite coffee?"
          validationStatus="success"
          validationText="Coffee available"
          options={options}
          searchable
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What is your favourite coffee?"
          validationStatus="warning"
          validationText="Only a few left"
          options={options}
          searchable
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What is your favourite coffee?"
          validationStatus="error"
          validationText="Coffee unavailable"
          options={options}
          searchable
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
      </div>
    );
  },

  name: "Validation",
};

export const SearchableFormResetDefaultValue = {
  render: () => {
    return <InForm />;
  },

  name: "Searchable form reset default value",
};

export const ManyOptions = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={manyOptions}
        searchable
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Many options",
};

export const ExternalFiltering_ = {
  render: () => (
    <>
      <ExternalFiltering />
    <br />
    <IcTypography>
      Suggested search options: Espresso, Double Espresso, Flat White, Filter,
      Cappuccino, Americano, Mocha, Macchiato.
    </IcTypography>
    <br />
    <IcTypography>
      The IcChange event will trigger 300ms after you finish typing. 1 second
      later, the options in the select menu will be updated.
    </IcTypography>
    </>
  ),
  name: "External filtering",
};

export const EmittingIcOptionSelectOnEnter = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={options}
        selectOnEnter
        searchable
        onIcOptionSelect={(event) =>
          console.log(`icOptionSelect: ${event.detail.value}`)
        }
      />
    );
  },

  name: "Emitting icOptionSelect on enter",
};

export const Controlled = {
  render: () => <ControlledExample />,
  name: "Controlled",
};

export const Uncontrolled_ = {
  render: () => <Uncontrolled />,
  name: "Uncontrolled",
};

export const Playground = {
  render: (args) => (
    <IcSelect
      options={playgroundOptions}
      disabled={args.disabled}
      fullWidth={args.fullWidth}
      helperText={args.helperText}
      hideLabel={args.hideLabel}
      includeDescriptionsInSearch={args.includeDescriptionsInSearch}
      includeGroupTitlesInSearch={args.includeGroupTitlesInSearch}
      loading={args.loading}
      loadingLabel={args.loadingLabel}
      label={args.label}
      placeholder={args.placeholder}
      readonly={args.readonly}
      required={args.required}
      searchMatchPosition={args.searchMatchPosition}
      searchable
      size={args.size}
      validationAriaLive={args.validationAriaLive}
      validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus}
      validationText={args.validationText}
      theme={args.theme}
    >
      {args.showIcon && (
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
        </SlottedSVG>
      )}
    </IcSelect>
  ),

  name: "Playground",
  args: defaultArgs,

  argTypes: {
    searchMatchPosition: {
      defaultValue: "anywhere",
      options: ["anywhere", "start"],

      control: {
        type: "inline-radio",
      },
    },

    size: {
      options: ["medium", "large", "small"],

      control: {
        type: "inline-radio",
      },
    },

    validationAriaLive: {
      options: ["polite", "assertive", "off"],

      control: {
        type: "inline-radio",
      },
    },

    validationStatus: {
      defaultValue: "no status",
      options: ["no status", "error", "success", "warning"],

      control: {
        type: "select",
      },
    },

    showIcon: {
      control: {
        type: "boolean",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },
};
