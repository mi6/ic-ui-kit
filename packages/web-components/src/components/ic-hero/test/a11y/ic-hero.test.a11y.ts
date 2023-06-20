import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-hero", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-hero heading="Test" subheading="Test"></ic-hero>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
