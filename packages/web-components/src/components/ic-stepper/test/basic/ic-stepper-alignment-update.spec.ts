import { newSpecPage } from "@stencil/core/testing";
import { Step } from "../../../ic-step/ic-step";
import { Stepper } from "../../ic-stepper";

describe("ic-stepper alignment updates", () => {
  it("removes a fixed connector width when changing to full-width", async () => {
    const page = await newSpecPage({
      components: [Stepper, Step],
      html: `<ic-stepper aligned="left" connector-width="140">
        <ic-step heading="Create" type="current"></ic-step>
        <ic-step heading="Review"></ic-step>
      </ic-stepper>`,
    });

    Object.defineProperty(page.root, "clientWidth", {
      configurable: true,
      value: 500,
    });
    Object.defineProperty(page.root, "offsetWidth", {
      configurable: true,
      value: 500,
    });

    page.rootInstance.resizeObserverCallback();
    await page.waitForChanges();

    const connector = page.root?.querySelector("ic-step")?.shadowRoot?.querySelector(
      ".step > .step-top > .step-connect"
    ) as HTMLElement;

    expect(connector.style.width).not.toBe("");

    (page.root as HTMLIcStepperElement).aligned = "full-width";
    await page.waitForChanges();

    expect(page.rootInstance.alignedFullWidth).toBe(true);
    expect(connector.style.width).toBe("");
  });
});
