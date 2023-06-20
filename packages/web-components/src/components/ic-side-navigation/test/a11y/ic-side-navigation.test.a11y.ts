import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-side-navigation", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`
      <ic-side-navigation app-title="ACME" version="v0.0.0" status="BETA"></ic-side-navigation>

    `);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
