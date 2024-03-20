import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-date-picker", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`
    <ic-date-picker label="Date picker label"></ic-date-picker>
    `);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
