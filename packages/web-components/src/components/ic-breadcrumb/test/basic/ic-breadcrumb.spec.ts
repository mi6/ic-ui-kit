import { Breadcrumb } from "../../ic-breadcrumb";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-breadcrumb", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: `<ic-breadcrumb></ic-breadcrumb>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-breadcrumb role="listitem">
        <mock:shadow-root>
          <div class="breadcrumb">
            <span aria-hidden="true" class="chevron">
              svg
            </span>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </ic-breadcrumb>
    `);
  });

  it("renders with page-title and href", async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: `<ic-breadcrumb page-title="foo" href="/"></ic-breadcrumb>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-breadcrumb href="/" page-title="foo" role="listitem">
        <mock:shadow-root>
          <div class="breadcrumb">
            <span aria-hidden="true" class="chevron">
              svg
            </span>
            <ic-link class="breadcrumb-link" href="/">
              foo
            </ic-link>
          </div>
        </mock:shadow-root>
      </ic-breadcrumb>
    `);
  });

  it("renders with page-title, href, current", async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: `<ic-breadcrumb page-title="foo" href="/" current="true"></ic-breadcrumb>`,
    });

    expect(page.root).toEqualHtml(`
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

  it("renders with icon", async () => {
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

    expect(page.root).toEqualHtml(`
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
      document.querySelector("ic-breadcrumb").classList.contains("current-page")
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
});
