import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("badge component", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      "<ic-button>Button<ic-badge slot='badge' text-label='1'/></ic-button>"
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });

  it("passes accessibility with accessible label prop set", async () => {
    const el = await fixture(
      "<ic-button>Button<ic-badge slot='badge' text-label='1' accessible-label='1 notification found'/></ic-button>"
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
