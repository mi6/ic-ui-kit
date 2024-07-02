import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("default variant of stepper component", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`<ic-stepper>
    <ic-step heading="First"></ic-step>
    <ic-step
      heading="Second With a Very Long Title"
      subheading="Optional Subtitle"
      type="current"
    ></ic-step>
    <ic-step heading="Third" type="disabled"></ic-step>
    <ic-step
      heading="Fourth"
      subheading="Optional Subtitle"
      type="completed"
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
        <ic-step heading="Create" type="completed"></ic-step>
        <ic-step heading="Read" status="complete" current></ic-step>
        <ic-step heading="Update" status="not required"></ic-step>
        <ic-step heading="Delete" status="not required"></ic-step>
      </ic-stepper>`);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
