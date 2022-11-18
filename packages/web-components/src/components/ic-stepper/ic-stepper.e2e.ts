import { E2EElement, newE2EPage } from "@stencil/core/testing";

const testStepper = `<ic-stepper>
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
</ic-stepper>`;

describe("ic-stepper component", () => {
  it("should render four steps and three step-connects", async () => {
    const page = await newE2EPage({ html: testStepper });
    const steps = await page.findAll("ic-step");
    expect(steps.length).toBe(4);
    const stepConnects = await page.findAll("ic-step >>> div.step-connect");
    expect(stepConnects.length).toBe(3);
  });

  it("should render the correct number on each step", async () => {
    const page = await newE2EPage({ html: testStepper });
    const stepInners: E2EElement[] = await page.findAll(
      "ic-step >>> .step-icon-inner"
    );
    expect(stepInners[0].innerHTML).toEqual("1");
    expect(stepInners[1].innerHTML).toEqual("2");
    expect(stepInners[2].innerHTML).toEqual("3");
    expect(stepInners[3].innerHTML).toContain("check-icon");
  });
});
