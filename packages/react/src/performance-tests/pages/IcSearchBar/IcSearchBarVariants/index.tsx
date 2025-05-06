import React, { useEffect, useState } from "react";
import { IcSearchBar, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const options = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
  { label: "Flat White", value: "flatwhite" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Americano", value: "americano" },
  { label: "Mocha", value: "mocha" },
];

const defaultSearchBarProps = {
  label: "What is your favourite coffee?",
  helperText: "Search for your favourite coffee",
  emptyOptionListText: "There's nothing here",
  options: options,
};

const defaultSearchBarEvents = {
  onIcChange: (event: any) =>
    console.log("Value changed: ", event.detail.value),
  onIcClear: () => console.log("Value cleared"),
  onIcInput: (event: any) => console.log("icInput: ", event.detail.value),
  onIcOptionSelect: (event: any) =>
    console.log("Option selected: ", event.detail.value),
  onIcSearchBarBlur: () => console.log("Search bar blurred"),
  onIcSearchBarFocus: () => console.log("Search bar focused"),
  onIcSubmitSearch: () => console.log("Search submitted"),
  onIcMenuChange: (event: any) =>
    console.log("Menu opened/closed: ", event.detail),
};

const IcSearchBarVariantsPage: React.FC<PageProps> = ({ theme }) => {
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
        const mockAPI = (
          query: string
        ): Promise<{ label: string; value: string }[]> => {
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
  const handleChange = (event: any) => {
    setEvent(event);
  };
  const handleOptionSelect = () => {
    setOptionSelected(true);
  };
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Search Bar Variants Page</h1>
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
        <IcSearchBar
          {...defaultSearchBarProps}
          charactersUntilSuggestion={3}
          assistiveHintText="You can use up and down arrows to navigate the options when they are available, and press enter to select an option."
          required
          {...defaultSearchBarEvents}
        />
        <IcSearchBar
          {...defaultSearchBarProps}
          placeholder="Small search bar"
          size="small"
          {...defaultSearchBarEvents}
        />
        <IcSearchBar
          {...defaultSearchBarProps}
          fullWidth
          {...defaultSearchBarEvents}
        />
        <IcSearchBar {...defaultSearchBarProps} disabled />
        <IcSearchBar {...defaultSearchBarProps} readonly={true} />
        <IcSearchBar
          {...defaultSearchBarProps}
          disableAutoFiltering={true}
          {...defaultSearchBarEvents}
        />
        <IcSearchBar
          {...defaultSearchBarProps}
          focusOnLoad={true}
          {...defaultSearchBarEvents}
        />
        <IcSearchBar
          {...defaultSearchBarProps}
          searchMode="query"
          {...defaultSearchBarEvents}
        />
        <IcSearchBar
          loading={loading}
          timeout={1000}
          debounce={300}
          label="What is your favourite coffee?"
          helperText="Search for your favourite coffee"
          onIcChange={handleChange}
          onIcRetryLoad={handleChange}
          onIcOptionSelect={handleOptionSelect}
          onIcSearchBarBlur={() => console.log("Search bar blurred")}
          onIcSearchBarFocus={() => console.log("Search bar focused")}
          onIcSubmitSearch={() => console.log("Search submitted")}
          onIcClear={() => console.log("Value cleared")}
          disableAutoFiltering
          options={results}
          loadingLabel="Loading time"
          loadingErrorLabel="Oops error"
        />
      </div>
    </IcTheme>
  );
};

export default IcSearchBarVariantsPage;
