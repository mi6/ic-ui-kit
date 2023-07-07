import { newE2EPage } from "@stencil/core/testing";

describe("ic-accordion component", () => {
  it("should expand when clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <ic-accordion heading="Accordion 1">
      <ic-typography variant="body">
        This is an example of the main body text.
      </ic-typography>
    </ic-accordion>
    `);

    const button = await page.find("ic-accordion");
    const accordionOpen = await page.spyOnEvent("accordionClicked");

    await button.click();
    await page.waitForChanges;
    expect(accordionOpen).toHaveReceivedEvent();
  });

  it("aria-expanded should equal true when accordion opened", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      `
    );

    const accordion = await page.find("ic-accordion >>> button");

    await accordion.click();
    await page.waitForChanges();

    expect(accordion.getAttribute("aria-expanded")).toBe("true");
  });

  it("should open accordion when space bar pressed", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-accordion></ic-accordion>`);

    const accordion = await page.find("ic-accordion");

    expect(await accordion.getProperty("expanded")).toBe(false);

    await page.keyboard.press("Tab");
    await accordion.press(" ");
    await page.waitForChanges();

    expect(await accordion.getProperty("expanded")).toBe(true);
  });

  it("should skip disabled accordion when using tab", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <ic-accordion heading='Accordion 1'></ic-accordion>
    <ic-accordion heading='Accordion 2' disabled></ic-accordion>
    <ic-accordion heading='Accordion 3'></ic-accordion>`);

    await page.keyboard.press("Tab");
    await page.waitForChanges();
    await page.keyboard.press("Tab");
    await page.waitForChanges();

    const accordions = await page.findAll("ic-accordion");
    const lastAccordionId = accordions[accordions.length - 1].id;

    const activeElement = await page.evaluate(() => document.activeElement.id);
    expect(activeElement).toEqual(lastAccordionId);
  });
});
