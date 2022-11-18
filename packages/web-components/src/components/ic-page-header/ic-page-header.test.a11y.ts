import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

describe("page-header", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`
        <ic-page-header heading="Test"></ic-page-header>
      `);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
