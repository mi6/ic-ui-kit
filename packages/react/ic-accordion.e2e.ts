import { newE2EPage } from "@stencil/core/testing";

describe("ic-accordion component", () => {

  it("should expand when clicked"), async () => {
    const page = await newE2EPage();
      await page.setContent(
`<ic-accordion heading="Accordion 1">
  <ic-typography variant="body">
    This is an example of the main body text.
  </ic-typography>
</ic-accordion>`
      ) 
      const button = await page.find("button");
      await button.click();
      expect(button).toBe("expanded");
  }
})
