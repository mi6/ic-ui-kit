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

  it("should apply the aria description from hidden span to an element using aria-describedby", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-tooltip target="ic-tooltip-test-button-right-end" label="test-label" placement="right-end"><button aria-describedby="test-button-right-end">IC Tooltip Test</button></ic-tooltip>`
    );
    await page.waitForChanges();

    const tooltipSpan = await page.find("span.ic-tooltip-label");
    const text = await tooltipSpan.innerText;

    expect(text).toBe("test-label");
  });
});
