import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

describe("ic-alert", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-alert heading="Test" message="Test message"/>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
