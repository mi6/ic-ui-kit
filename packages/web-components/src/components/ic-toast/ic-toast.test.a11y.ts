import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

describe("ic-toast", () => {
  it("passes accessibility check for manual dismiss", async () => {
    const el = await fixture(`<ic-toast heading="Heading"></ic-toast>`);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });

  it("passes accessibility check for auto dismiss", async () => {
    const el = await fixture(
      `<ic-toast heading="Heading" dismiss-mode="automatic"></ic-toast>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
