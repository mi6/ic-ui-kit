import { newSpecPage } from "@stencil/core/testing";
import { Skeleton } from "./ic-skeleton";

describe("ic-skeleton", () => {
  it("should render with default height and width", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton></ic-skeleton>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-skeleton aria-disabled="true" class="skeleton" style="height: 93px; width: 260px;">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
    </ic-skeleton>
    `);
  });

  it("should render with supplied height", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton style="height: 100px;"></ic-skeleton>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-skeleton aria-disabled="true" class="skeleton" style="height: 100px; width: 260px;">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
    </ic-skeleton>
    `);
  });

  it("should render with supplied width", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton style="width: 300px;"></ic-skeleton>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-skeleton aria-disabled="true" class="skeleton" style="width: 300px; height: 93px;">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
    </ic-skeleton>
    `);
  });

  it("should render with supplied height and width", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton style="height: 100px; width: 300px;"></ic-skeleton>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-skeleton aria-disabled="true" class="skeleton" style="height: 100px; width: 300px;">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
    </ic-skeleton>
    `);
  });

  it("should render circular variant", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton variant="circle"></ic-skeleton>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-skeleton aria-disabled="true" class="circle skeleton" variant="circle" style="height: 25px; width: 25px;">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
    </ic-skeleton>
    `);
  });

  it("should render text variant", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton variant="text"><ic-typography>Test</ic-typography></ic-skeleton>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-skeleton aria-disabled="true" class="skeleton" variant="text">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      <ic-typography>
        Test
      </ic-typography>
    </ic-skeleton>
    `);
  });
});
