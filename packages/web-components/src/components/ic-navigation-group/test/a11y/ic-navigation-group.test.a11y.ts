import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-navigation-group", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-navigation-group label="Test label"></ic-navigation-group>`
    );
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
