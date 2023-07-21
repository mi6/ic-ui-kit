import { newSpecPage } from "@stencil/core/testing";
import { AccordionGroup } from "../../ic-accordion-group";
import { Accordion } from "../../../ic-accordion/ic-accordion";

const event = { detail: { id: "ic-accordion-0" } };

describe("ic-accordion-group snapshots", () => {
  it("should match default snapshot", async () => {
    const page = await newSpecPage({
      components: [AccordionGroup],
      html: `<ic-accordion-group group-title="Test heading"></ic-accordion-group>`,
    });
    expect(page.root).toMatchSnapshot("renders as default");
  });

  it("should match light snapshot", async () => {
    const page = await newSpecPage({
      components: [AccordionGroup],
      html: `<ic-accordion-group appearance="light" group-title="Test heading"></ic-accordion-group>`,
    });
    expect(page.root).toMatchSnapshot("renders as light");
  });
});

describe("ic-accordion-group functions unit test", () => {
  // it("checks handleAccordionClicked", async () => {
  //   const page = await newSpecPage({
  //     components: [AccordionGroup, Accordion],
  //     html: `
  //   <ic-accordion-group single-expansion group-title="Test heading">
  //     <ic-accordion>
  //       <ic-typography variant="body" >
  //         This is an example of the main body text.
  //       </ic-typography>
  //     </ic-accordion>
  //     <ic-accordion expanded>
  //     <ic-typography variant="body" >
  //       This is an example of the main body text.
  //     </ic-typography>
  //   </ic-accordion>
  //   </ic-accordion-group>`,
  //   });
  //   expect(page.root.singleExpansion).toBe(true);
  //   expect(page.rootInstance.accordions[0].expanded).toBe(false);
  //   await page.rootInstance.handleAccordionClicked(event);
  //   await page.waitForChanges;
  //   expect(page.rootInstance.accordions[0].expanded).toBe(true);
  //   expect(page.rootInstance.accordions[1].expanded).toBe(false);
  // });

  it("checks handleAccordionClicked when single expansion is false", async () => {
    const page = await newSpecPage({
      components: [AccordionGroup, Accordion],
      html: `
    <ic-accordion-group group-title="Test heading">
      <ic-accordion>
        <ic-typography variant="body" >
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion expanded>
      <ic-typography variant="body" >
        This is an example of the main body text.
      </ic-typography>
    </ic-accordion>
    </ic-accordion-group>`,
    });
    expect(page.root.singleExpansion).toBe(false);
    await page.rootInstance.handleAccordionClicked(event);
    expect(page.rootInstance.areAllAccordionsOpen).toBe(false);
    expect(page.rootInstance.expanded).toBe(false);
  });

  it("checks handleExpanded", async () => {
    const page = await newSpecPage({
      components: [AccordionGroup],
      html: `<ic-accordion-group group-title="Test heading" expanded></ic-accordion-group>`,
    });
    expect(page.root.expanded).toBe(true);
    await page.rootInstance.handleExpanded();
    await page.waitForChanges;
    expect(page.root.expanded).toBe(false);
  });
});

describe("ic-accordion-group component", () => {
  it("it should test the handleExpanded function", async () => {
    const page = await newSpecPage({
      components: [AccordionGroup, Accordion],
      html: `
      <ic-accordion-group expanded="true" group-title="Test heading">
        <ic-accordion heading="Accordion 1">
          <ic-typography variant="body">
            This is an example of the main body text.
          </ic-typography>
        </ic-accordion>
      </ic-accordion-group>`,
    });
    expect(page.root.expanded).toBe(true);
    await page.rootInstance.handleExpanded();
    await page.waitForChanges();
    expect(page.root.expanded).toBe(false);
  });

  it("it should test singleExpansion function", async () => {
    const page = await newSpecPage({
      components: [AccordionGroup, Accordion],
      html: `
      <ic-accordion-group group-title="Test heading" single-expansion="true">
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
      </ic-accordion-group>`,
    });

    const accordions = page.root.querySelectorAll("ic-accordion");
    const accordion1 = accordions[0];
    const accordion2 = accordions[1];
    const accordionButton = accordion1.shadowRoot.querySelector(
      ".section-button"
    ) as HTMLButtonElement;
    await page.waitForChanges();
    expect(accordion1.expanded).toBe(false);
    expect(accordion2.expanded).toBe(true);
    accordionButton.click();
    await page.waitForChanges();
    expect(accordion1.expanded).toBe(true);
    expect(accordion2.expanded).toBe(false);
  });

  it("checks the areAllAccordionsOpen function", async () => {
    const page = await newSpecPage({
      components: [AccordionGroup, Accordion],
      html: `
      <ic-accordion-group group-title="Test heading">
        <ic-accordion heading="Accordion 1">
          <ic-typography variant="body">
            This is an example of the main body text.
          </ic-typography>
        </ic-accordion>
      </ic-accordion-group>`,
    });
    // uses handleExpanded to open accordion, making areAllAccordionsOpen = true
    await page.rootInstance.handleExpanded();
    await page.waitForChanges;
    expect(page.root.expanded).toBe(true);
    expect(page.rootInstance.areAllAccordionsOpen).toBe(true);

    // uses handleExpanded to close accordion, making areAllAccordionsOpen = false
    await page.rootInstance.handleExpanded();
    await page.waitForChanges;
    expect(page.root.expanded).toBe(false);
    expect(page.rootInstance.areAllAccordionsOpen).toBe(false);
  });
});
