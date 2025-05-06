// IcSearchBarSinglePage displays a single search bar for the purpose of performance testing of the IcSearchBar component.
import React from "react";
import { IcSearchBar, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcSearchBarSinglePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Search Bar Page</h1>
        </IcTypography>
        <IcSearchBar
          label="What is your favourite coffee?"
          helperText="Search for your favourite coffee"
          emptyOptionListText="There's nothing here"
          charactersUntilSuggestion={3}
          assistiveHintText="You can use up and down arrows to navigate the options when they are available, and press enter to select an option."
          options={[
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Mocha", value: "mocha" },
          ]}
          onIcChange={(ev) => console.log("Value changed: ", ev.detail.value)}
          onIcClear={() => console.log("Value cleared")}
          onIcInput={(ev) => console.log("icInput: ", ev.detail.value)}
          onIcOptionSelect={(ev: any) =>
            console.log("Option selected: ", ev.detail.value)
          }
          onIcSearchBarBlur={() => console.log("Search bar blurred")}
          onIcSearchBarFocus={() => console.log("Search bar focused")}
          onIcSubmitSearch={() => console.log("Search submitted")}
          onIcMenuChange={(ev: any) =>
            console.log("Menu opened/closed: ", ev.detail)
          }
        />
      </div>
    </IcTheme>
  );
};

export default IcSearchBarSinglePage;
