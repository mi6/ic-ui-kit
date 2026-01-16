import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

/**
 * TEMPORARILY SKIPPED
 *
 * jest-axe crashes in Jest <30 when used with
 * Stencil >=4.41 due to Shadow DOM lifecycle issues in JSDOM
 *
 * Re-enable after:
 *   - Jest upgraded to v30+
 *
 * Tracking ticket:
 *   https://github.com/mi6/ic-ui-kit/issues/4235
 */

describe("ic-data-table-title-bar", () => {
  it.skip("passes accessibility", async () => {
    const el = await fixture(
      `<ic-data-table-title-bar heading="header" description="desc" metadata="meta"></ic-data-table-title-bar>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
