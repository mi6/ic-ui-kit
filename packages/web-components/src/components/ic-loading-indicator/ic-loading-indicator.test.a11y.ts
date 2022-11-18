import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

describe("ic-loading-indicator", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-loading-indicator label="Loading indicator"></ic-loading-indicator>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
