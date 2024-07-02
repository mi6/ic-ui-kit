import React, { useState, useRef, useEffect } from "react";
import { IcButton, IcSearchBar, IcTypography } from "../../components";

export const IC_INPUT_CONTAINER = "ic-input-component-container";
export const IC_MENU_LI = "ic-menu ul li";

const defaultOptions = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
  { label: "Flat White", value: "flatwhite" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Americano", value: "americano" },
  { label: "Mocha", value: "mocha" },
];

export const Default = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSearchBar
        label="What is your favourite coffee?"
        options={defaultOptions}
      />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSearchBar label="What is your favourite coffee?" disabled />
    </div>
  );
};

export const FullWidth = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSearchBar
        label="What is your favourite coffee?"
        fullWidth={true}
        id="search2"
        options={defaultOptions}
      />
      <IcTypography>
        {" "}
        Suggested search options: Espresso, Double Espresso, Flat White,
        Cappuccino, Americano, Mocha
      </IcTypography>
    </div>
  );
};

export const HelperText = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSearchBar
        placeholder="Start typing to search…"
        label="What is your favourite coffee?"
        helperText="Coffee options will be displayed as you type."
        options={defaultOptions}
      />
    </div>
  );
};

export const HiddenLabel = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSearchBar
        placeholder="Start typing to search…"
        label="What is your favourite coffee?"
        hideLabel
        options={defaultOptions}
      />
    </div>
  );
};

export const Small = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSearchBar
        label="What is your favourite coffee?"
        size="small"
        options={defaultOptions}
      />
    </div>
  );
};

export const OptionsNoFiltering = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSearchBar
        placeholder="Start typing to search…"
        label="What is your favourite coffee?"
        disableAutoFiltering
        options={defaultOptions}
      />
      <br />
      <IcTypography>All options will be displayed as you type</IcTypography>
    </div>
  );
};

export const Controlled = () => {
  const [options, setOptions] = useState([
    { label: "Espresso", value: "Esp" },
    { label: "Flat White", value: "Fla" },
    { label: "Cappuccino", value: "Cap" },
    { label: "Americano", value: "Ame" },
    { label: "Mocha", value: "Moc" },
  ]);
  const handleChange = () => {
    setOptions([
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
    ]);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        padding: "10px",
      }}
    >
      <IcSearchBar
        placeholder="Controlled"
        label="Controlled"
        options={options}
        hideLabel
      />
      <IcButton id="update-opt" onClick={() => handleChange()}>
        Update options
      </IcButton>
    </div>
  );
};

export const Uncontrolled = () => {
  const searchEl = useRef<any>(null);
  const handleChange = () => {
    console.log(searchEl.current.value);
  };
  return (
    <>
      <div style={{ padding: "10px" }}>
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
      </div>
    </>
  );
};

export const EmptyOptionListText = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSearchBar
        label="What is your favourite coffee?"
        emptyOptionListText="There's nothing here"
        options={defaultOptions}
      />
    </div>
  );
};

export const CharactersUntilSuggestion = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSearchBar
        label="What is your favourite coffee?"
        charactersUntilSuggestion={5}
        options={[
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappuccino" },
          { label: "Americano", value: "americano" },
          { label: "Mocha", value: "mocha" },
          { label: "Latte", value: "latte" },
        ]}
      />
    </div>
  );
};

export const LongOptionLabel = () => {
  return (
    <div style={{ padding: "10px" }}>
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
            label: "Reallylongonewordanswerthatcouldbeatypeofespresso",
            value: "someespresso",
          },
        ]}
      />
    </div>
  );
};

const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
  ev.preventDefault();
  console.log("form submit");
};

export const InAForm = () => {
  return (
    <div style={{ padding: "10px" }}>
      <form onSubmit={submitForm}>
        <IcSearchBar label="What is your favourite coffee?" spellcheck={true} />
      </form>
    </div>
  );
};

export const QuerySearchMode = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSearchBar
        label="What is your favourite coffee?"
        searchMode="query"
        onIcSubmitSearch={() => console.log("submit search")}
        options={defaultOptions}
      />
    </div>
  );
};

export const WithButton = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcSearchBar
        label="What is your favourite coffee?"
        options={defaultOptions}
      />
      <IcButton id="button">Button</IcButton>
    </div>
  );
};

export const ExternalFiltering = () => {
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
            m.label.toLowerCase().includes(query.toLowerCase())
          );
          return new Promise((resolve) =>
            setTimeout(
              () => resolve(filteredResults),
              event.type === "icChange" ? 2000 : 500
            )
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
      disableAutoFiltering
      options={results}
      loadingLabel="Loading time"
      loadingErrorLabel="Oops error"
    />
  );
};

export const ExternalFilteringSearchBar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <ExternalFiltering />
      <br />
      <IcTypography>
        Suggested search options: Espresso, Double Espresso, Flat White,
        Cappuccino, Americano, Mocha
      </IcTypography>
      <br />
    </div>
  );
};
