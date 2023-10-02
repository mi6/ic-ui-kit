import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-data-table-title-bar", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-data-table-title-bar heading="header" description="desc" metadata="meta"></ic-data-table-title-bar>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
