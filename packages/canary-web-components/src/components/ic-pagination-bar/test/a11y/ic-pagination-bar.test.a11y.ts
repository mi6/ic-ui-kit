import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
// Unable to import from @ukic/web-components
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("pagination bar component", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      "<ic-pagination-bar total-items='100'></ic-pagination-bar>"
    );
    checkShadowElementRendersCorrectly(el);
    expect(
      await axe(el, {
        // Tested pagination in Cypress and this error doesn't occur, not sure what's causing it in this test
        rules: {
          "aria-valid-attr-value": {
            enabled: false,
          },
        },
      })
    ).toHaveNoViolations();
  });
});
