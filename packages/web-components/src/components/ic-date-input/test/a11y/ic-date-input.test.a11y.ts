import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-date-input", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`<ic-date-input
        label="When would you like to collect your coffee?"
        value="new Date('2023-10-31T09:00:00Z')"
        validation-status="error"
        validation-text="There is a coffee shortage forecast for that day. Please choose a different date."
      ></ic-date-input>`);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
