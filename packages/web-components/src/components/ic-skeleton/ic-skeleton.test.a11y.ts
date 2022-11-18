import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

describe("skeleton component", () => {
  it("passes accessibility", async () => {
    const el = await fixture("<ic-skeleton/>");
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
