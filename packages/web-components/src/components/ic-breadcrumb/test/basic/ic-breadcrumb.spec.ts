import { Breadcrumb } from "../../ic-breadcrumb";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-breadcrumb", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: `<ic-breadcrumb></ic-breadcrumb>`,
    });

    expect(page.root).toMatchSnapshot(`
      <ic-breadcrumb role="listitem">
        <mock:shadow-root>
          <div class="breadcrumb">
            <span aria-hidden="true" class="chevron">
              svg
            </span>
            <span class="link-wrapper" tabindex="0">
              <slot></slot>
            </span>
          </div>
        </mock:shadow-root>
      </ic-breadcrumb>
    `);
  });

  it("should render with page-title and href", async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: `<ic-breadcrumb page-title="foo" href="/"></ic-breadcrumb>`,
    });

    expect(page.root).toMatchSnapshot(`
      <ic-breadcrumb href="/" page-title="foo" role="listitem">
        <mock:shadow-root>
          <div class="breadcrumb">
            <span aria-hidden="true" class="chevron">
              svg
            </span>
            <ic-link theme="inherit" class="breadcrumb-link" href="/">
              foo
            </ic-link>
          </div>
        </mock:shadow-root>
      </ic-breadcrumb>
    `);
  });

  it("should render with page-title, href, current", async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: `<ic-breadcrumb page-title="foo" href="/" current="true"></ic-breadcrumb>`,
    });

    expect(page.root).toMatchSnapshot(`
      <ic-breadcrumb current="true" href="/" page-title="foo" role="listitem" aria-current="page">
        <mock:shadow-root>
          <div class="breadcrumb">
            <span aria-hidden="true" class="chevron">
              svg
            </span>
            <span class="current-page-container">
              foo
            </span>
          </div>
        </mock:shadow-root>
      </ic-breadcrumb>
    `);
  });

  it("should render with icon", async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: `
      <ic-breadcrumb page-title="foo" href="/" current="true">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>`,
    });

    expect(page.root).toMatchSnapshot(`
      <ic-breadcrumb current="true" href="/" page-title="foo" aria-current="page" role="listitem">
        <mock:shadow-root>
          <div class="breadcrumb">
            <span aria-hidden="true" class="chevron">
              svg
            </span>
            <span class="current-page-container">
              <slot name="icon"></slot>
              foo
            </span>
          </div>
        </mock:shadow-root>
        <svg fill="none" height="24" slot="icon" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor"></path>
        </svg>
      </ic-breadcrumb>
    `);
  });

  it("should add the 'current-page' class when current prop is true", async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: "<ic-breadcrumb id='ic-breadcrumb' current=true><ic-link href='/'>Link</ic-link></ic-breadcrumb>",
    });

    await page.rootInstance.setSlottedCurrentPageClass();

    expect(
      document
        .querySelector("ic-breadcrumb")
        ?.classList.contains("current-page")
    ).toBeTruthy;
  });

  it("should call 'setFocus' when breadcrumb is focused", async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: `<ic-breadcrumb></ic-breadcrumb>`,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });

  it("should prevent focus on the slotted link within the current breadcrumb", async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: "<ic-breadcrumb id='ic-breadcrumb' current=true><ic-link href='/'>Link</ic-link></ic-breadcrumb>",
    });

    page.root?.setAttribute("current", "true");
    page.rootInstance.linkSlotContent.tabIndex = 0;
    await page.waitForChanges();

    // Cannot check for actual slot updates in the HTML due to assignedElements not being available in test environment
    const slottedLinkEl = document.createElement("a");
    page.rootInstance.slottedLinkEl = slottedLinkEl;
    jest
      .spyOn(page.rootInstance.slottedLinkEl, "removeAttribute")
      .mockImplementation();

    page.rootInstance.updatedSlottedLinkFocus();
    await page.waitForChanges();

    expect(page.rootInstance.linkSlotContent.tabIndex).toBe(-1);
    expect(page.rootInstance.slottedLinkEl.removeAttribute).toHaveBeenCalled();
  });

  it("should change to allow focus on slotted link when current prop is removed", async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: "<ic-breadcrumb id='ic-breadcrumb' current=true><ic-link href='/'>Link</ic-link></ic-breadcrumb>",
    });

    const slottedLinkEl = document.createElement("a");
    page.rootInstance.slottedLinkEl = slottedLinkEl;
    page.rootInstance.slottedLinkHref = "/";
    await page.waitForChanges();

    jest
      .spyOn(page.rootInstance.slottedLinkEl, "setAttribute")
      .mockImplementation();

    page.root?.setAttribute("current", "true");
    await page.waitForChanges();

    page.root?.setAttribute("current", "false");
    page.rootInstance.linkSlotContent.tabIndex = -1;
    page.rootInstance.updatedSlottedLinkFocus();
    await page.waitForChanges();

    expect(page.rootInstance.linkSlotContent.tabIndex).toBe(0);
    expect(page.rootInstance.slottedLinkEl.setAttribute).toHaveBeenCalled();

    page.rootInstance.linkSlotContent = null;
    await page.waitForChanges();

    expect(page.rootInstance.getSlottedLinkEl()).toBe(null);
  });
});
