import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

describe("default variant of stepper component", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`<ic-stepper>
    <ic-step step-title="First"></ic-step>
    <ic-step
      step-title="Second With a Very Long Title"
      step-subtitle="Optional Subtitle"
      step-type="current"
    ></ic-step>
    <ic-step step-title="Third" step-type="disabled"></ic-step>
    <ic-step
      step-title="Fourth"
      step-subtitle="Optional Subtitle"
      step-type="completed"
    ></ic-step>
  </ic-stepper>`);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});

describe("compact variant of ic-stepper", () => {
  it("passes accessibility", async () => {
    const el =
      await fixture(`<ic-stepper variant="compact" id="standard-compact-stepper">
        <ic-step step-title="Create" step-type="completed"></ic-step>
        <ic-step step-title="Read" step-status="complete" current></ic-step>
        <ic-step step-title="Update" step-status="not required"></ic-step>
        <ic-step step-title="Delete" step-status="not required"></ic-step>
      </ic-stepper>`);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
