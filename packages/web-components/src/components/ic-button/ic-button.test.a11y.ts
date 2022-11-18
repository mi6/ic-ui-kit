import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

describe("button component", () => {
  it("passes accessibility", async () => {
    const el = await fixture("<ic-button>Button</ic-button>");
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
