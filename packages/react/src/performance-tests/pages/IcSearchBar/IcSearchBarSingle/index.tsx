import React from "react";
import { IcSearchBar, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcSearchBarPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
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
        onIcChange={(event) =>
          console.log("Value changed: ", event.detail.value)
        }
        onIcClear={() => console.log("Value cleared")}
        onIcInput={(event) => console.log("icInput: ", event.detail.value)}
        onIcOptionSelect={(event: any) =>
          console.log("Option selected: ", event.detail.value)
        }
        onIcSearchBarBlur={() => console.log("Search bar blurred")}
        onIcSearchBarFocus={() => console.log("Search bar focused")}
        onIcSubmitSearch={() => console.log("Search submitted")}
        onIcMenuChange={(event: any) =>
          console.log("Menu opened/closed: ", event.detail)
        }
      />
    </IcTheme>
  );
};

export default IcSearchBarPage;
