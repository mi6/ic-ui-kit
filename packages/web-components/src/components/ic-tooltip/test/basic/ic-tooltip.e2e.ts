import { newE2EPage } from "@stencil/core/testing";

describe("ic-tooltip component", () => {
  it("should apply the correct label", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tooltip target="test-id" label="test-label" placement="right-end"><button>IC Tooltip Test</button></ic-tooltip>`
    );
    await page.waitForChanges();

    const tooltip = await page.find(".ic-tooltip >>> ic-typography");
    const text = await tooltip.innerText;

    expect(text).toBe("test-label");
  });

  it("should apply the correct placement", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tooltip target="test-id" label="test-label" placement="right-end"><button>IC Tooltip Test</button></ic-tooltip>`
    );
    await page.waitForChanges();

    const tooltip = await page.find(".ic-tooltip >>> .ic-tooltip-container");
    const button = await page.find("button");

    await button.hover();

    expect(await tooltip.getAttribute("data-popper-placement")).toBe(
      "right-end"
    );
  });

  it("should show on focus", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tooltip target="test-id" label="test-label"><button>IC Tooltip Test</button></ic-tooltip>`
    );
    await page.waitForChanges();

    const tooltip = await page.find(".ic-tooltip >>> .ic-tooltip-container");
    const button = await page.find("button");

    await button.focus();

    expect(await tooltip.isVisible()).toBe(true);
  });

  it("should show on hover", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tooltip target="test-id" label="test-label"><button>IC Tooltip Test</button></ic-tooltip>`
    );
    await page.waitForChanges();

    const tooltip = await page.find(".ic-tooltip >>> .ic-tooltip-container");
    const button = await page.find("button");

    await button.hover();

    expect(await tooltip.isVisible()).toBe(true);
  });

  it("should still show when cursor moves to tooltip", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tooltip target="test-id" label="test-label"><button>IC Tooltip Test</button></ic-tooltip>`
    );
    await page.waitForChanges();

    const tooltip = await page.find(".ic-tooltip >>> .ic-tooltip-container");
    const button = await page.find("button");

    await button.hover();
    await tooltip.hover();

    expect(await tooltip.isVisible()).toBe(true);
  });

  it("should close when cursor moves away", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tooltip target="test-id" label="test-label"><button id="button-1">Button 1</button></ic-tooltip><button id="button-2">Button 2</button>`
    );
    await page.waitForChanges();

    const tooltip = await page.find(".ic-tooltip >>> .ic-tooltip-container");
    const button1 = await page.find("#button-1");
    const button2 = await page.find("#button-2");

    await button1.hover();
    await button2.hover();
    await page.waitForTimeout(200);

    expect(await tooltip.isVisible()).toBe(false);
  });

  it("should close when focus moves away", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tooltip target="test-id" label="test-label"><button id="button-1">Button 1</button></ic-tooltip><button id="button-2">Button 2</button>`
    );
    await page.waitForChanges();

    const tooltip = await page.find(".ic-tooltip >>> .ic-tooltip-container");
    const button1 = await page.find("#button-1");
    const button2 = await page.find("#button-2");

    await button1.focus();
    await button2.focus();
    await page.waitForTimeout(200);

    expect(await tooltip.isVisible()).toBe(false);
  });

  it("should close when escape key pressed", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tooltip target="test-id" label="test-label"><button>IC Tooltip Test</button></ic-tooltip>`
    );
    await page.waitForChanges();

    const tooltip = await page.find(".ic-tooltip >>> .ic-tooltip-container");
    const button = await page.find("button");

    await button.focus();
    await page.keyboard.press("Escape");

    expect(await tooltip.isVisible()).toBe(false);
  });

  it("should display the tooltip when the displayTooltip method is called", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tooltip target="test-id" label="test-label"><button>IC Tooltip Test</button></ic-tooltip>`
    );
    await page.waitForChanges();

    const tooltip = await page.find("ic-tooltip");
    const tooltipContainer = await page.find(
      ".ic-tooltip >>> .ic-tooltip-container"
    );
    expect(await tooltipContainer.isVisible()).toBe(false);

    await tooltip.callMethod("displayTooltip", true, true);
    expect(await tooltipContainer.isVisible()).toBe(true);

    await page.keyboard.press("Escape");
    expect(await tooltipContainer.isVisible()).toBe(true);

    await tooltip.callMethod("displayTooltip", false);
    expect(await tooltipContainer.isVisible()).toBe(false);
  });

  it("should still dismiss the tooltip using the keyboard if persistTooltip is false", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tooltip target="test-id" label="test-label"><button>IC Tooltip Test</button></ic-tooltip>`
    );
    await page.waitForChanges();

    const tooltip = await page.find("ic-tooltip");
    const tooltipContainer = await page.find(
      ".ic-tooltip >>> .ic-tooltip-container"
    );
    expect(await tooltipContainer.isVisible()).toBe(false);

    await tooltip.callMethod("displayTooltip", true, false);
    expect(await tooltipContainer.isVisible()).toBe(true);

    await page.keyboard.press("Escape");
    expect(await tooltipContainer.isVisible()).toBe(false);
  });
});
