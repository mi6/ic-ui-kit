import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "@ukic/web-components/dist/types/utils/testa11y.helpers";

describe("pagination bar component", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      "<ic-pagination-bar total-items='100'></ic-pagination-bar>"
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
