import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-drawer", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`
    <ic-drawer heading="Test heading" message="Test message"></ic-drawer>
    `);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
