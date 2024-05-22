import { SectionContainer } from "../../ic-section-container";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-section-container", () => {
  it("should render with left-aligned by default", async () => {
    const page = await newSpecPage({
      components: [SectionContainer],
      html: `<ic-section-container>
      <p>Test container</p>
      </ic-section-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-section-container class="aligned-left">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      <p>Test container</p>
    </ic-section-container>
    `);
  });

  it("should render full-width", async () => {
    const page = await newSpecPage({
      components: [SectionContainer],
      html: `<ic-section-container aligned="full-width">
      <p>Test container</p>
      </ic-section-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-section-container aligned="full-width" class="aligned-full-width">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      <p>Test container</p>
    </ic-section-container>
    `);
  });

  it("should render centered", async () => {
    const page = await newSpecPage({
      components: [SectionContainer],
      html: `<ic-section-container aligned="center">
      <p>Test container</p>
      </ic-section-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-section-container aligned="center" class="aligned-center">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      <p>Test container</p>
    </ic-section-container>
    `);
  });

  it("should remove vertical padding when full-height", async () => {
    const page = await newSpecPage({
      components: [SectionContainer],
      html: `<ic-section-container full-height>
      <p>Test container</p>
      </ic-section-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-section-container class="aligned-left no-vertical-padding" full-height="">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      <p>Test container</p>
    </ic-section-container>
    `);
  });
});
