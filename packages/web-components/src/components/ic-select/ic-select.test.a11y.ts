import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

describe("ic-select", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`<ic-select
        label="Select component"
        helper-text="Helper text"
        validation-status="error"
        validation-text="Validation text"
      ></ic-select>
      <script>
        var select = document.querySelector("ic-select");
        var option = "Value 1";
        select.options = [
          { label: "Label 1", value: "Value 1" },
          { label: "Label 2", value: "Value 2" },
        ];
        select.addEventListener("icChange", function (event) {
          option = event.detail.value;
          select.value = option;
        });
      </script>`);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
