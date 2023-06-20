import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkLightElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-tooltip", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`<ic-tooltip
    label="This is a description of the button"
    target="test-button"
    ><button aria-describedby="ic-tooltip-test-button">Default</button></ic-tooltip
  >`);
    checkLightElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
