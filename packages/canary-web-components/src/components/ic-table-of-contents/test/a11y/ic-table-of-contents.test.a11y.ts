import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-table-of-contents", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`
    <ic-table-of-contents label="Date picker label"><h1>Heading</h1></ic-table-of-contents>
    `);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
