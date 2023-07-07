import { newE2EPage } from "@stencil/core/testing";

describe("ic-accordion-group", () => {
  it("button text should change to 'See all' when expanded accordion clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-accordion-group>
      <ic-accordion expanded heading="Accordion 1"></ic-accordion>
      </ic-accordion-group>`
    );
    const seeAllBtn = await page.find("ic-accordion-group >>> ic-button");
    let text = await seeAllBtn.innerText;

    expect(text).toBe("Hide all");
    await seeAllBtn.click();
    await page.waitForChanges();
    text = await seeAllBtn.innerText;
    expect(text).toBe("See all");
  });

  it("should open accordion when 'See all' clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-accordion-group>
        <ic-accordion></ic-accordion>
       </ic-accordion-group>`
    );

    const seeAllBtn = await page.find("ic-accordion-group >>> ic-button");

    await seeAllBtn.click();
    await page.waitForChanges();

    const accordionExpanded = await page.find(
      "ic-accordion >>> .section-button-open"
    );

    expect(accordionExpanded).not.toBeNull();
  });

  it("should test the See all/ Hide all function", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <ic-accordion-group group-title="Test heading">
    <ic-accordion heading="Accordion 1">
      <ic-typography variant="body">
        This is an example of the main body text.
      </ic-typography>
    </ic-accordion>
    <ic-accordion heading="Accordion 2" expanded>
    <ic-typography variant="body">
      This is an example of the main body text.
    </ic-typography>
  </ic-accordion>
  </ic-accordion-group>    
    `);

    const accordions = await page.findAll("ic-accordion");
    const accordion1 = accordions[0];
    const accordion2 = accordions[1];
    const accordionButton = await page.find("ic-accordion-group >>> ic-button");

    expect(await accordion1.getProperty("expanded")).toBe(false);
    expect(await accordion2.getProperty("expanded")).toBe(true);
    expect((await accordionButton).innerText).toBe("See all");

    await accordionButton.click();
    await page.waitForChanges();

    expect(await accordion1.getProperty("expanded")).toBe(true);
    expect(await accordion2.getProperty("expanded")).toBe(true);
    expect((await accordionButton).innerText).toBe("Hide all");

    await accordionButton.click();
    await page.waitForChanges();

    expect(await accordion1.getProperty("expanded")).toBe(false);
    expect(await accordion2.getProperty("expanded")).toBe(false);
    expect((await accordionButton).innerText).toBe("See all");
  });

  it("should open second accordion and close first accordion on single expansion", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <ic-accordion-group single-expansion="true" group-title="Test heading">
    <ic-accordion expanded heading="Accordion 1">
      <ic-typography variant="body">
        This is an example of the main body text.
      </ic-typography>
    </ic-accordion>
    <ic-accordion heading="Accordion 2">
    <ic-typography variant="body">
      This is an example of the main body text.
    </ic-typography>
  </ic-accordion>
  </ic-accordion-group>    
    `);
    const accordions = await page.findAll("ic-accordion");
    const accordion1 = accordions[0];
    const accordion2 = accordions[1];

    expect(await accordion1.getProperty("expanded")).toBe(true);
    expect(await accordion2.getProperty("expanded")).toBe(false);

    await accordion2.click();
    await page.waitForChanges();

    expect(await accordion1.getProperty("expanded")).toBe(false);
    expect(await accordion2.getProperty("expanded")).toBe(true);
  });

  it("both accordions should open when single expansion is false", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <ic-accordion-group group-title="Test heading">
    <ic-accordion expanded heading="Accordion 1">
      <ic-typography variant="body">
        This is an example of the main body text.
      </ic-typography>
    </ic-accordion>
    <ic-accordion heading="Accordion 2">
    <ic-typography variant="body">
      This is an example of the main body text.
    </ic-typography>
  </ic-accordion>
  </ic-accordion-group>    
    `);
    const accordions = await page.findAll("ic-accordion");
    const accordion1 = accordions[0];
    const accordion2 = accordions[1];

    expect(await accordion1.getProperty("expanded")).toBe(true);
    expect(await accordion2.getProperty("expanded")).toBe(false);

    await accordion2.click();
    await page.waitForChanges();

    expect(await accordion1.getProperty("expanded")).toBe(true);
    expect(await accordion2.getProperty("expanded")).toBe(true);
  });
});
