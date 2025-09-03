import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
// Unable to import from @ukic/web-components
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-select", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-select 
    placeholder="Select an option..." 
    label="What is your favourite coffee?"
  ></ic-select>
  <script>
     const select = document.querySelector("ic-select");
     let option = "Cappuccino";
     select.options = [
       { label: "Espresso", value: "espresso" },
       { label: "Double Espresso", value: "doubleespresso" },
       { label: "Flat White", value: "flatwhite" },
       { label: "Cappuccino", value: "cappuccino" },
       { label: "Americano", value: "americano" },
       { label: "Mocha", value: "mocha" },
     ];
     select.addEventListener("icChange", function (event) {
       console.log(event.detail.value);
     });
   </script>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});

describe("ic-select-searchable", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-select 
    placeholder="Select an option…"
    label="What is your favourite coffee?" 
    searchable="true"
  ></ic-select>
   <script>
     const select = document.querySelector("ic-select");
     let option = "Cappuccino";
     select.options = [
       { label: "Cappuccino", value: "Cap" },
       { label: "Latte", value: "Lat" },
       { label: "Americano", value: "Ame" },
       { label: "Flat white", value: "Fla" },
       { label: "Mocha", value: "Moc" },
       { label: "Macchiato", value: "Mac" },
       { label: "Café au lait", value: "Caf" },
       { label: "Espresso", value: "Esp" },
       { label: "Cortado", value: "Cor" },
       { label: "Latte macchiato", value: "Lam" },
     ];
     select.addEventListener("icChange", function (event) {
       console.log(event.detail.value);
     });
   </script>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
