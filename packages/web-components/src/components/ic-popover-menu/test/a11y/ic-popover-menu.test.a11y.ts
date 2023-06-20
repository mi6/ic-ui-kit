import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-popover-menu", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`
    <ic-button id="buttonEl">Button El</ic-button>
    <ic-popover-menu anchor="#buttonEl" aria-label="Popover menu"></ic-popover-menu>`);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
