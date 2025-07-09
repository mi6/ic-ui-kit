// IcSearchBarMultiplePage displays multiple search bars for the purpose of performance testing of the IcSearchBar component.
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

const searchBarEvents = {
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

const IcSearchBarMultiplePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography
        variant="subtitle-small"
        style={{ padding: "var(--ic-space-md)" }}
      >
        <h1>Search Bar Multiple Page</h1>
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
        {Array.from({ length: 20 }, (_, i) => (
          <IcSearchBar
            key={i}
            label="What is your favourite coffee?"
            helperText="Search for your favourite coffee"
            emptyOptionListText="There's nothing here"
            options={options}
            charactersUntilSuggestion={3}
            required
            {...searchBarEvents}
          />
        ))}
      </div>
    </IcTheme>
  );
};

export default IcSearchBarMultiplePage;
