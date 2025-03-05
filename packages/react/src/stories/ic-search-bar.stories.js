/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable sonarjs/no-duplicate-string */
import React, { useState, useEffect, useRef } from "react";
import { IcSearchBar, IcTypography } from "../components";

const ExternalFiltering = () => {
  const mockData = [
    { label: "Espresso", value: "espresso" },
    { label: "Double Espresso", value: "doubleespresso" },
    { label: "Flat White", value: "flatwhite" },
    { label: "Cappuccino", value: "cappuccino" },
    { label: "Americano", value: "americano" },
    { label: "Mocha", value: "mocha" },
  ];
  const [event, setEvent] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);
  useEffect(() => {
    const searchTerm = event?.detail.value;
    if (searchTerm !== optionSelected) {
      if (searchTerm?.length > 1) {
        if (!optionSelected) {
          setLoading(true);
        }
        setOptionSelected(false);
        const mockAPI = (query) => {
          const filteredResults = mockData.filter((m) =>
            m.label.toLowerCase().includes(query.toLowerCase()),
          );
          return new Promise((resolve) =>
            setTimeout(
              () => resolve(filteredResults),
              event.type === "icChange" ? 2000 : 500,
            ),
          );
        };
        mockAPI(searchTerm).then((results) => setResults(results));
      } else {
        setResults([]);
      }
    }
    setOptionSelected(false);
  }, [event, optionSelected]);
  const handleChange = (event) => {
    setEvent(event);
  };
  const handleOptionSelect = () => {
    setOptionSelected(true);
  };
  return (
    <IcSearchBar
      loading={loading}
      timeout={1000}
      debounce={300}
      placeholder="Type to search"
      label="Search for coffee"
      onIcChange={handleChange}
      onIcRetryLoad={handleChange}
      onIcOptionSelect={handleOptionSelect}
      disableFilter
      options={results}
      loadingLabel="Loading time"
      loadingErrorLabel="Oops error"
    />
  );
};

const ControlledExample = () => {
  const [value, setValue] = useState("cap");
  const handleChange = (event) => {
    console.log(event.detail.value);
    setValue(event.detail.value);
  };
  return (
    <IcSearchBar
      placeholder="Controlled"
      label="Controlled"
      options={[
        { label: "Espresso", value: "esp" },
        { label: "Double Espresso", value: "dbl" },
        { label: "Flat White", value: "fla" },
        { label: "Cappuccino", value: "cap" },
        { label: "Americano", value: "ame" },
        { label: "Mocha", value: "moc" },
      ]}
      value={value}
      onIcChange={handleChange}
    />
  );
};

const Uncontrolled = () => {
  const searchEl = useRef();
  const handleChange = () => {
    console.log(searchEl.current.value);
  };
  return (
    <>
      <IcSearchBar
        ref={searchEl}
        placeholder="Uncontrolled"
        label="Uncontrolled"
        options={[
          { label: "Espresso", value: "esp" },
          { label: "Double Espresso", value: "dbl" },
          { label: "Flat White", value: "fla" },
          { label: "Cappuccino", value: "cap" },
          { label: "Americano", value: "ame" },
          { label: "Mocha", value: "moc" },
        ]}
        onIcChange={handleChange}
      />
    </>
  );
};

const defaultArgs = {
  autocapitalize: "off",
  autocorrect: "off",
  autofocus: false,
  disabled: false,
  fullWidth: false,
  focusOnLoad: true,
  helperText: "",
  hideLabel: false,
  label: "What is your favourite coffee?",
  placeholder: "Search",
  readonly: false,
  required: false,
  size: "default",
  spellcheck: false,
};

export default {
  title: "Search bar",
  component: IcSearchBar,
};

export const Default = {
  render: () => (
    <IcSearchBar
      label="What is your favourite coffee?"
      onIcSubmitSearch={() => console.log("submit search")}
    />
  ),

  name: "Default",
};

export const WithOptions = {
  render: () => (
    <>
      <IcSearchBar
      label="What is your favourite coffee?"
      options={[
        { label: "Espresso", value: "espresso" },
        { label: "Double Espresso", value: "doubleespresso" },
        { label: "Flat White", value: "flatwhite" },
        { label: "Cappuccino", value: "cappuccino" },
        { label: "Americano", value: "americano" },
        { label: "Mocha", value: "mocha" },
      ]}
    />
    <br />
    <IcTypography>
      Suggested search options: Espresso, Double Espresso, Flat White,
      Cappuccino, Americano, Mocha
    </IcTypography>
    </>
  ), 

  name: "With options",
};

export const WithOptionsNoFiltering = {
  render: () => (
    <>
      <IcSearchBar
      label="What is your favourite coffee?"
      disableFilter
      options={[
        { label: "Espresso", value: "espresso" },
        { label: "Double Espresso", value: "doubleespresso" },
        { label: "Flat White", value: "flatwhite" },
        { label: "Cappuccino", value: "cappuccino" },
        { label: "Americano", value: "americano" },
        { label: "Mocha", value: "mocha" },
      ]}
    />
    <br />
    <IcTypography>All options will be displayed as you type</IcTypography>
    </>
  ),

  name: "With options (no filtering)",
};

export const InAForm = {
  render: () => (
    <form onSubmit={() => console.log("form submit")}>
      <IcSearchBar label="What is your favourite coffee?" />
    </form>
  ),

  name: "In a form",
};

export const HelperText = {
  render: () => (
    <IcSearchBar
      label="What is your favourite coffee?"
      helperText="Some helper text"
    />
  ),
  name: "Helper text",
};

export const SizeSmall = {
  render: () => (
    <IcSearchBar label="What is your favourite coffee?" size="small" />
  ),
  name: "Size small",
};

export const DeprecatedSmall = {
  render: () => <IcSearchBar label="What is your favourite coffee?" small />,
  name: "Deprecated - small",
};

export const HiddenLabel = {
  render: () => (
    <IcSearchBar label="What is your favourite coffee?" hideLabel />
  ),
  name: "Hidden label",
};

export const Disabled = {
  render: () => <IcSearchBar label="What is your favourite coffee?" disabled />,
  name: "Disabled",
};

export const FullWidth = {
  render: () => (
    <>
      <IcSearchBar
      label="What is your favourite coffee?"
      fullWidth
      options={[
        { label: "Espresso", value: "espresso" },
        { label: "Double Espresso", value: "doubleespresso" },
        { label: "Flat White", value: "flatwhite" },
        { label: "Cappuccino", value: "cappuccino" },
        { label: "Americano", value: "americano" },
        { label: "Mocha", value: "mocha" },
      ]}
    />
    <br />
    <IcTypography>
      Suggested search options: Espresso, Double Espresso, Flat White,
      Cappuccino, Americano, Mocha
    </IcTypography>
    </>
  ),

  name: "Full Width",
};

export const Dark = {
  render: () => <IcSearchBar label="What is your favourite coffee?" dark />,
  name: "Dark",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const ExternalFiltering_ = {
  render: () => (
    <>
      <ExternalFiltering />
    <br />
    <IcTypography>
      Suggested search options: Espresso, Double Espresso, Flat White,
      Cappuccino, Americano, Mocha
    </IcTypography>
    <br />
    <IcTypography>
      The IcChange event will trigger 300ms after you finish typing. 1 second
      later, the options in the searchbar menu will be updated.
    </IcTypography>
    </>
  ),
  name: "External filtering",
};

export const QuerySearchMode = {
  render: () => (
    <IcSearchBar
      label="What is your favourite coffee?"
      searchMode="query"
      onIcSubmitSearch={() => console.log("submit search")}
      options={[
        {
          label: "Espresso",
          value: "espresso",
        },
        {
          label: "Double Espresso",
          value: "doubleespresso",
        },
        {
          label: "Flat White",
          value: "flatwhite",
        },
        {
          label: "Cappuccino",
          value: "cappuccino",
        },
        {
          label: "Americano",
          value: "americano",
        },
        {
          label: "Mocha",
          value: "mocha",
        },
      ]}
    />
  ),

  name: "Query search mode",
};

export const EmptyOptionListText = {
  render: () => (
    <IcSearchBar
      label="What is your favourite coffee?"
      emptyOptionListText="There's nothing here"
      options={[
        {
          label: "Espresso",
          value: "espresso",
        },
        {
          label: "Double Espresso",
          value: "doubleespresso",
        },
        {
          label: "Flat White",
          value: "flatwhite",
        },
        {
          label: "Cappuccino",
          value: "cappuccino",
        },
        {
          label: "Americano",
          value: "americano",
        },
        {
          label: "Mocha",
          value: "mocha",
        },
      ]}
    />
  ),

  name: "Empty option list text",
};

export const CharactersUntilSuggestion = {
  render: () => (
    <IcSearchBar
      label="What is your favourite coffee?"
      charactersUntilSuggestion={5}
      options={[
        {
          label: "Espresso",
          value: "espresso",
        },
        {
          label: "Double Espresso",
          value: "doubleespresso",
        },
        {
          label: "Flat White",
          value: "flatwhite",
        },
        {
          label: "Cappuccino",
          value: "cappuccino",
        },
        {
          label: "Americano",
          value: "americano",
        },
        {
          label: "Mocha",
          value: "mocha",
        },
      ]}
    />
  ),

  name: "Characters until suggestion",
};

export const HintText = {
  render: () => (
    <IcSearchBar
      label="What is your favourite coffee?"
      hintText="You can use up and down arrows to navigate the options when they are available, and press enter to select an option."
      options={[
        {
          label: "Espresso",
          value: "espresso",
        },
        {
          label: "Double Espresso",
          value: "doubleespresso",
        },
        {
          label: "Flat White",
          value: "flatwhite",
        },
        {
          label: "Cappuccino",
          value: "cappuccino",
        },
        {
          label: "Americano",
          value: "americano",
        },
        {
          label: "Mocha",
          value: "mocha",
        },
      ]}
    />
  ),

  name: "Hint text",
};

export const LongOptionLabels = {
  render: () => (
    <IcSearchBar
      label="What is your favourite coffee?"
      options={[
        {
          label: "Espresso because it tastes like coffee",
          value: "espresso",
        },
        {
          label:
            "Double Espresso because it tastes like double the amount of coffee",
          value: "doubleespresso",
        },
        {
          label: "Reallylongonewordanswerthatcouldbethenameofacoffee",
          value: "flatwhite",
        },
      ]}
    />
  ),

  name: "Long option labels",
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
    <IcSearchBar
      autocapitalize={args.autocapitalize}
      autocorrect={args.autocorrect}
      autofocus={args.autofocus}
      label={args.label}
      required={args.required}
      readonly={args.readonly}
      spellcheck={args.spellcheck}
      disabled={args.disabled}
      fullWidth={args.fullWidth}
      focusOnLoad={args.focusOnLoad}
      helperText={args.helperText}
      hideLabel={args.hideLabel}
      placeholder={args.placeholder}
      size={args.size}
      options={[
        {
          label: "Espresso",
          value: "espresso",
        },
        {
          label: "Double Espresso",
          value: "doubleespresso",
        },
        {
          label: "Flat White",
          value: "flatwhite",
        },
        {
          label: "Cappuccino",
          value: "cappuccino",
        },
        {
          label: "Americano",
          value: "americano",
        },
        {
          label: "Mocha",
          value: "mocha",
        },
      ]}
    />
  ),

  args: defaultArgs,

  argTypes: {
    autocapitalize: {
      options: ["off", "none", "on", "sentences", "words", "characters"],

      control: {
        type: "select",
      },
    },

    autocorrect: {
      options: ["on", "off"],

      control: {
        type: "inline-radio",
      },
    },

    size: {
      options: ["default", "small"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
