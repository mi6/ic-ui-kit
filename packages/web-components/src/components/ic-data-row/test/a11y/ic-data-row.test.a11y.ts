import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("skeleton component", () => {
  it("passes accessibility", async () => {
    const el = await fixture("<ic-data-row />");
    checkShadowElementRendersCorrectly(el);
    expect(
      await axe(el, {
        // Rule met by wrapping slot in parent component in <ul>
        rules: {
          "aria-required-parent": {
            enabled: false,
          },
        },
      })
    ).toHaveNoViolations();
  });
});
