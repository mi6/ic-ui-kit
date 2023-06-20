import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("card component", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      "<ic-card heading='Card heading' message='Card message' />"
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });

  it("passes accessibility as a button", async () => {
    const el = await fixture(
      "<ic-card heading='Card heading' message='Card message' clickable=true/>"
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });

  it("passes accessibility as a link", async () => {
    const el = await fixture(
      "<ic-card heading='Card heading' message='Card message' clickable=true href='/' />"
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
