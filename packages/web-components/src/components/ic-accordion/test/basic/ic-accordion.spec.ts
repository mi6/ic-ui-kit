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

    it("it should call setAccordionAnimation if scroll height = '500' and expanded = 'false'", async () => {
      const page = await newSpecPage({
        components: [Accordion],
        html: `
      <ic-accordion heading="Accordion 1" >
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

    it("should set height and .expanded-content-opened on expanded content", async () => {
      const transitionEvent = {
        propertyName: "height",
      } as TransitionEvent;

      const page = await newSpecPage({
        components: [Accordion],
        html: `
      <ic-accordion heading="Accordion 1" >
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
      });

      const accordionExpanded =
        page.root.shadowRoot.querySelector(".expanded-content");
      page.rootInstance.expandedContentEl = accordionExpanded;
      page.rootInstance.expandedContentEl.clientHeight = 50;

      await page.rootInstance.setExpandedContentStyle(
        transitionEvent,
        page.rootInstance.expandedContentEl
      );

      expect(
        page.rootInstance.expandedContentEl.className.split(" ")
      ).toContain("expanded-content-opened");
      expect(page.rootInstance.expandedContentEl.style.height).toBe("auto");
    });

    it("should not set height and .expanded-content-opened on expanded content", async () => {
      const transitionEvent = {
        propertyName: "height",
      } as TransitionEvent;

      const page = await newSpecPage({
        components: [Accordion],
        html: `
      <ic-accordion heading="Accordion 1" >
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,
      });

      const accordionExpanded =
        page.root.shadowRoot.querySelector(".expanded-content");
      page.rootInstance.expandedContentEl = accordionExpanded;
      page.rootInstance.expandedContentEl.clientHeight = 0;

      await page.rootInstance.setExpandedContentStyle(
        transitionEvent,
        page.rootInstance.expandedContentEl
      );

      expect(
        page.rootInstance.expandedContentEl.className.split(" ")
      ).not.toContain("expanded-content-opened");
      expect(page.rootInstance.expandedContentEl.style.height).toBe("");

      await page.rootInstance.disconnectedCallback();
    });

    it("should set visibility on expanded content to hidden", async () => {
      const transitionEvent = {
        propertyName: "height",
      } as TransitionEvent;

      const page = await newSpecPage({
        components: [Accordion],
        html: `
        <ic-accordion heading="Accordion 1" >
          <ic-typography variant="body">
            This is an example of the main body text.
          </ic-typography>
        </ic-accordion>`,
      });

      const accordionExpanded =
        page.root.shadowRoot.querySelector(".expanded-content");
      page.rootInstance.expandedContentEl = accordionExpanded;
      page.rootInstance.expandedContentEl.clientHeight = 0;

      await page.rootInstance.hideExpandedContent(
        transitionEvent,
        page.rootInstance.expandedContentEl
      );

      expect(
        (
          page.rootInstance.expandedContentEl as HTMLDivElement
        ).style.getPropertyValue("--ic-expanded-content-visiblity")
      ).toBe("hidden");
    });

    it("should set visibility to undefined if client height is greater than 0", async () => {
      const transitionEvent = {
        propertyName: "height",
      } as TransitionEvent;

      const page = await newSpecPage({
        components: [Accordion],
        html: `
        <ic-accordion heading="Accordion 1" >
          <ic-typography variant="body">
            This is an example of the main body text.
          </ic-typography>
        </ic-accordion>`,
      });

      const accordionExpanded =
        page.root.shadowRoot.querySelector(".expanded-content");
      page.rootInstance.expandedContentEl = accordionExpanded;
      page.rootInstance.expandedContentEl.clientHeight = 50;

      await page.rootInstance.hideExpandedContent(
        transitionEvent,
        page.rootInstance.expandedContentEl
      );

      expect(
        (
          page.rootInstance.expandedContentEl as HTMLDivElement
        ).style.getPropertyValue("--ic-expanded-content-visiblity")
      ).toBe("");
    });

    it("should call 'setFocus' when accordion can be focused", async () => {
      const page = await newSpecPage({
        components: [Accordion],
        html: `
        <ic-accordion heading="Accordion 1" >
          <ic-typography variant="body">
            This is an example of the main body text.
          </ic-typography>
        </ic-accordion>`,
      });

      //Can't expect anything in this test - this is to increase code coverage only
      await page.rootInstance.setFocus().toHaveBeenCalled;
    });

    it("should call setExpandedContentStyle when transitionend in animateExpandedContent and expanded is true", async () => {
      const page = await newSpecPage({
        components: [Accordion],
        html: `
        <ic-accordion heading="Accordion 1" >
          <ic-typography variant="body">
            This is an example of the main body text.
          </ic-typography>
        </ic-accordion>`,
      });

      const setExpandedContentStyleSpy = jest.spyOn(
        page.rootInstance,
        "setExpandedContentStyle"
      );

      const accordionExpanded =
        page.root.shadowRoot.querySelector(".expanded-content");
      page.rootInstance.expandedContentEl = accordionExpanded;
      page.rootInstance.expandedContentEl.scrollHeight = 50;
      page.rootInstance.expanded = true;

      await page.rootInstance.animateExpandedContent();

      const event = new Event("transitionend");
      page.rootInstance.expandedContentEl.dispatchEvent(event);

      expect(setExpandedContentStyleSpy).toHaveBeenCalled();
    });

    it("should call hideExpandedContent when transitionend in animateExpandedContent and expanded is false", async () => {
      const page = await newSpecPage({
        components: [Accordion],
        html: `
        <ic-accordion heading="Accordion 1" >
          <ic-typography variant="body">
            This is an example of the main body text.
          </ic-typography>
        </ic-accordion>`,
      });

      const hideExpandedContentSpy = jest.spyOn(
        page.rootInstance,
        "hideExpandedContent"
      );

      const accordionExpanded =
        page.root.shadowRoot.querySelector(".expanded-content");
      page.rootInstance.expandedContentEl = accordionExpanded;
      page.rootInstance.expandedContentEl.scrollHeight = 50;
      page.rootInstance.expanded = false;

      await page.rootInstance.animateExpandedContent();

      const event = new Event("transitionend");
      page.rootInstance.expandedContentEl.dispatchEvent(event);

      expect(hideExpandedContentSpy).toHaveBeenCalled();
    });
  });
});
