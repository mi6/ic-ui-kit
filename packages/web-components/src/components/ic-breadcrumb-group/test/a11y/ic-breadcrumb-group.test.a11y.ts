import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("breadcrumb group component", () => {
  it("passes accessibility", async () => {
    const el = await fixture("<ic-breadcrumb-group></ic-breadcrumb-group>");
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });

  it("ic-breadcrumb-group/ic-breadcrumb passes accessibility", async () => {
    const el = await fixture(`
      <ic-breadcrumb-group>
        <ic-breadcrumb page-title="foo" href="/foo"></ic-breadcrumb>
        <ic-breadcrumb current="true" page-title="bar" href="/bar"></ic-breadcrumb>
      </ic-breadcrumb-group>
    `);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
