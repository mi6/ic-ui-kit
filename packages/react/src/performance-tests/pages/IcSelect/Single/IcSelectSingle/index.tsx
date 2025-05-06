import React from "react";
import { IcSelect, IcTheme, IcTypography } from "../../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const options = [
  {
    label: "Cappuccino",
    value: "Cap",
    description: "Coffee frothed up with pressurised steam",
  },
  {
    label: "Latte",
    value: "Lat",
    description: "A milkier coffee than a cappuccino",
    disabled: true,
  },
  {
    label: "Americano",
    value: "Ame",
    description: "Espresso coffee diluted with hot water",
    icon: `<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g id="warning"><path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>`,
  },
];

const IcSelectPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Select Page</h1>
      </IcTypography>
      <IcSelect
        label="What is your favourite coffee?"
        required
        options={options}
        showClearButton
        helperText="Select one option from the list"
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        onIcBlur={() => console.log("Select blurred")}
        onIcFocus={() => console.log("Select focused")}
        onIcInput={(event) => console.log(`icInput: ${event.detail.value}`)}
        onIcOptionSelect={(event) =>
          console.log(`icOptionSelect: ${event.detail.value}`)
        }
        onIcOptionDeselect={(event) =>
          console.log(`icOptionDeselect: ${event.detail.value}`)
        }
        onIcOpen={() => console.log("select dropdown opened")}
        onIcClose={() => console.log("select dropdown closed")}
        onIcClear={() => console.log("clear all clicked")}
      />
    </IcTheme>
  );
};

export default IcSelectPage;
