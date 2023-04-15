import { newSpecPage } from "@stencil/core/testing";
import { Typography } from "./ic-typography";

describe("ic-typography component", () => {
  it("should render with default body styles", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography>IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-body">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render h1 with h1 variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="h1">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-h1" variant="h1">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render h2 with h2 variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="h2">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-h2" variant="h2">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render h3 with h3 variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="h3">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-h3" variant="h3">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render h4 with h4 variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="h4">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-h4" variant="h4">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render h5 with subtitle-large variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="subtitle-large">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-subtitle-large" variant="subtitle-large">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render h6 with subtitle-small variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="subtitle-small">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-subtitle-small" variant="subtitle-small">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render with body variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="body">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-body" variant="body">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render caption variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="caption">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-caption" variant="caption">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render caption uppercase variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="caption-uppercase">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-caption-uppercase" variant="caption-uppercase">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render label with label variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="label">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-label" variant="label">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render label uppercase with label-uppercase variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="label-uppercase">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-label-uppercase" variant="label-uppercase">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render code large with code-large variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="code-large">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-code-large" variant="code-large">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render code small with code-small variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="code-small">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-code-small" variant="code-small">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should render code extra small with code-extra-small variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="code-extra-small">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-code-extra-small" variant="code-extra-small">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should allow semantic component to be passed in and variant styling applied", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="h1"><h3>IC Typography Test</h3></ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-h1" variant="h1">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      <h3>
        IC Typography Test
      </h3>
    </ic-typography>
    `);
  });

  it("should apply vertical margins class if vertical margins prop true", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography apply-vertical-margins>IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-body ic-typography-vertical-margins-body" apply-vertical-margins>
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });

  it("should apply className provided to root element to typography element", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography class="test-class">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-typography class="ic-typography-body test-class">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      IC Typography Test
     </ic-typography>
    `);
  });
});
