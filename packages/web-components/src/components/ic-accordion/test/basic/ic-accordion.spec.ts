import { newSpecPage } from "@stencil/core/testing";
import { Accordion } from "../../ic-accordion";

describe("ic-accordion snapshots", () => {
  it("should match default snapshot", async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `
      <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      `,
    });
    expect(page.root).toMatchSnapshot("renders as default");
  });

  it("should match light snapshot", async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `
      <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
    });
    expect(page.root).toMatchSnapshot("renders as light");
  });

  it("should match with icon snapshot", async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `
      <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>`,
    });
    expect(page.root).toMatchSnapshot("renders with icon");
  });

  it("should render with slot", async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `
      <ic-accordion heading="Accordion 1" size="small">
        <slot>This is an example of the main body text.</slot>
      </ic-accordion>`,
    });
    expect(page.root).toMatchSnapshot("renders small accordion");
  });

  it("should match small snapshot", async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `
      <ic-accordion heading="Accordion 1" size="small">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
    });
    expect(page.root).toMatchSnapshot("renders small accordion");
  });

  it("should match large snapshot", async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `
      <ic-accordion size="large" heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
    });
    expect(page.root).toMatchSnapshot("renders large accordion");
  });

  it("should render with a heading slot when supplied", async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `  
      <ic-accordion>
        <slot name="heading"/></slot>
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
    });
    expect(page.root).toMatchSnapshot("renders with heading slot");
  });

  it("should render in a disabled state", async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `
      <ic-accordion heading="Accordion 1" disabled>
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
    });
    expect(page.root).toMatchSnapshot("disabled");
  });

  describe("ic-accordion component", () => {
    it("it should test the toggleExpanded function", async () => {
      const page = await newSpecPage({
        components: [Accordion],
        html: `
      <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
      });

      expect(page.root.expanded).toBe(false);
      await page.rootInstance.toggleExpanded();
      await page.waitForChanges();
      expect(page.root.expanded).toBe(true);
    });

    it("tests id number is added to accordion", async () => {
      const page = await newSpecPage({
        components: [Accordion],
        html: `
      <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
      });
      const eventSpy = jest.fn();

      const accordionId = page.root.id;
      page.root.addEventListener("accordionClicked", eventSpy);
      await page.waitForChanges();
      await page.rootInstance.toggleExpanded();
      await page.waitForChanges();

      expect(eventSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: expect.objectContaining({
            id: accordionId,
          }),
        })
      );
    });

    it("it should test the disabled function", async () => {
      const page = await newSpecPage({
        components: [Accordion],
        html: `
      <ic-accordion heading="Accordion 1" disabled>
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
      });
      expect(page.root.disabled).toBe(true);
    });

    it("it should add transition styling to the element", async () => {
      const page = await newSpecPage({
        components: [Accordion],
        html: `
      <ic-accordion heading="Accordion 1" disabled>
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
      });
      const div = document.createElement("div");
      page.rootInstance.setAccordionAnimation(div, "300", "height", "ease-out");
      expect(div.style.transitionDuration).toBe("300ms");
      expect(div.style.transitionProperty).toBe("height");
      expect(div.style.transitionDelay).toBe("ease-out");
    });

    it("it should call setAccordionAnimation if scroll height > 0 and expanded = true", async () => {
      const page = await newSpecPage({
        components: [Accordion],
        html: `
      <ic-accordion heading="Accordion 1" expanded>
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
      });

      const spySetAccordionAnimation = jest.spyOn(
        page.rootInstance,
        "setAccordionAnimation"
      );
      const accordionExpanded =
        page.root.shadowRoot.querySelector(".expanded-content");
      page.rootInstance.expandedContentEl = accordionExpanded;
      Object.defineProperty(
        page.rootInstance.expandedContentEl,
        "scrollHeight",
        { configurable: true, value: 500 }
      );
      page.rootInstance.animateExpandedContent();

      expect(spySetAccordionAnimation).toHaveBeenCalled();
    });

    it("it should call setAccordionAnimation if scroll height = '0' and expanded = 'false'", async () => {
      const page = await newSpecPage({
        components: [Accordion],
        html: `
      <ic-accordion heading="Accordion 1" >
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
      });
      jest.useFakeTimers();
      const spySetAccordionAnimation = jest.spyOn(
        page.rootInstance,
        "setAccordionAnimation"
      );
      const accordionExpanded =
        page.root.shadowRoot.querySelector(".expanded-content");
      page.rootInstance.expandedContentEl = accordionExpanded;

      Object.defineProperty(
        page.rootInstance.expandedContentEl,
        "scrollHeight",
        { configurable: true, value: 0 }
      );
      page.rootInstance.animateExpandedContent();
      jest.runAllTimers();
      expect(spySetAccordionAnimation).toHaveBeenCalled();
      // Reset real timers
      jest.useRealTimers();
    });
  });
});
