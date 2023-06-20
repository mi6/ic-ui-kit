import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("search-bar component", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      "<ic-search-bar label='Test label'></ic-search-bar>"
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
