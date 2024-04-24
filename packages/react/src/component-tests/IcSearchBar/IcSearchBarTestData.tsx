import React, { useState, useRef } from "react";
import { IcButton, IcSearchBar } from "../../components";

export const IC_INPUT_CONTAINER = "ic-input-component-container";
export const IC_MENU_LI = "ic-menu ul li";

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
    <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
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
