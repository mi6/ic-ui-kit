// / IcSelectMultiSinglePage displays a single multi-select component for performance testing of the IcSelect component.
import React from "react";
import { IcSelect, IcTheme, IcTypography } from "../../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const options = [
  {
    label: "Cappuccino",
    value: "Cap",
    description:
      "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
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
    disabled: true,
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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>`,
  },
];

const IcSelectMultiSinglePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Select Multi Page</h1>
        </IcTypography>
        <IcSelect
          label="What is your favourite coffee?"
          required
          options={options}
          multiple
          showClearButton
          helperText="Select one or more options from the list"
          onIcChange={(ev) => console.log(`icChange: ${ev.detail.value}`)}
          onIcBlur={() => console.log("Select blurred")}
          onIcFocus={() => console.log("Select focused")}
          onIcInput={(ev) => console.log(`icInput: ${ev.detail.value}`)}
          onIcOptionSelect={(ev) =>
            console.log(`icOptionSelect: ${ev.detail.value}`)
          }
          onIcOptionDeselect={(ev) =>
            console.log(`icOptionDeselect: ${ev.detail.value}`)
          }
          onIcOpen={() => console.log("select dropdown opened")}
          onIcClose={() => console.log("select dropdown closed")}
          onIcClear={() => console.log("clear all clicked")}
        />
      </div>
    </IcTheme>
  );
};

export default IcSelectMultiSinglePage;
