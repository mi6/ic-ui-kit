import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

describe("ic-status-tag", () => {
  it("passes accessibility", async () => {
    const el = await fixture("<ic-status-tag label='Neutral' />");
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
