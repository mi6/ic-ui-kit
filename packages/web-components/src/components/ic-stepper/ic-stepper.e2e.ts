import { E2EElement, newE2EPage } from "@stencil/core/testing";
import {
  defaultStepper,
  invalidConnectorWidthStepper,
  compactStepper,
} from "./ic-stepper-test-examples";

describe("default variant of ic-stepper component", () => {
  it("should render four steps and three step-connects", async () => {
    const page = await newE2EPage({ html: defaultStepper });
    const steps = await page.findAll("ic-step");
    expect(steps.length).toBe(4);
    const stepConnects = await page.findAll("ic-step >>> div.step-connect");
    expect(stepConnects.length).toBe(3);
  });

  it("should render the correct number on each step", async () => {
    const page = await newE2EPage({ html: defaultStepper });
    const stepInners: E2EElement[] = await page.findAll(
      "ic-step >>> .step-icon-inner"
    );
    expect(stepInners[0].innerHTML).toEqual("1");
    expect(stepInners[1].innerHTML).toEqual("2");
    expect(stepInners[2].innerHTML).toEqual("3");
    expect(stepInners[3].innerHTML).toContain("check-icon");
  });

  it("should keep the length of the step connect at 100px if a connectorWidth under 100px is given", async () => {
    const page = await newE2EPage({ html: invalidConnectorWidthStepper });

    await page.waitForChanges();

    const connectorWidth = await page.$eval(
      "ic-stepper",
      (el: HTMLIcStepperElement) => {
        return el.connectorWidth;
      }
    );

    expect(connectorWidth).toBe(96);

    const steps = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll("ic-step:not(:last-child)")
      ).map((step) => window.getComputedStyle(step).width);
    });

    steps.forEach((step) => {
      expect(step).toMatch(`${148}px`);
    });
  });
});

describe("compact variant of ic-stepper", () => {
  it("only shows the current step", async () => {
    const page = await newE2EPage({ html: compactStepper });

    await page.waitForChanges();

    const currentStep = await page.find("ic-step[current='']");

    expect(currentStep.isVisible()).toBeTruthy();

    const notCurrentSteps = await page.findAll("ic-step:not([current=''])");

    notCurrentSteps.forEach(async (el) => {
      expect(await el.isVisible()).toBeFalsy();
    });
  });
});
