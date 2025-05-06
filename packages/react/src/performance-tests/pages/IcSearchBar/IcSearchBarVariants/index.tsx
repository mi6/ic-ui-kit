// IcSearchBarVariantsPage displays various configurations of the IcSearchBar component for performance testing purposes.
import React from "react";
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
  onIcChange: (ev: any) => console.log("Value changed: ", ev.detail.value),
  onIcClear: () => console.log("Value cleared"),
  onIcInput: (ev: any) => console.log("icInput: ", ev.detail.value),
  onIcOptionSelect: (ev: any) =>
    console.log("Option selected: ", ev.detail.value),
  onIcSearchBarBlur: () => console.log("Search bar blurred"),
  onIcSearchBarFocus: () => console.log("Search bar focused"),
  onIcSubmitSearch: () => console.log("Search submitted"),
  onIcMenuChange: (ev: any) => console.log("Menu opened/closed: ", ev.detail),
};

const IcSearchBarVariantsPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography
        variant="subtitle-small"
        style={{ padding: "var(--ic-space-md)" }}
      >
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
      </div>
    </IcTheme>
  );
};

export default IcSearchBarVariantsPage;
