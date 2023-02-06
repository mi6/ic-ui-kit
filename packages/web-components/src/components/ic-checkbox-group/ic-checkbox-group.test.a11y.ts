import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

describe("ic-checkbox-group", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-checkbox-group label="this is a test label" name="test">
          <ic-checkbox
            value="testValue1"
            label="test label">
          </ic-checkbox>
      </ic-checkbox-group>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
