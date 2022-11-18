import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

describe("ic-radio-group", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-radio-group label="this is a test label">
          <ic-radio-option
            value="testValue1"
            label="test label">
          </ic-radio-option>
      </ic-radio-group`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
