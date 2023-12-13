import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-title-bar", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-title-bar header="header" description="desc" metadata="meta"></ic-title-bar>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
