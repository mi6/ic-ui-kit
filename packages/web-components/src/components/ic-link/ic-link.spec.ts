import { newSpecPage } from "@stencil/core/testing";
import { Alert } from "../ic-alert/ic-alert";
import { Link } from "./ic-link";

describe("ic-link component", () => {
  it("should render a link by default with the correct text", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link>IC Link Test</ic-link>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-link class="default link">
      <mock:shadow-root>
        <a tabindex="-1">
        <slot></slot>
        </a>
        </mock:shadow-root>
        IC Link Test
      </ic-link>
    `);
  });

  it("should apply the 'download' attribute to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link download="test-download">IC Link Test</ic-link>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-link class="default link" download="test-download">
    <mock:shadow-root>
        <a download="test-download" tabindex="-1">
        <slot></slot>
        </a>
        </mock:shadow-root>
        IC Link Test
      </ic-link>
    `);
  });

  it("should apply the 'href' attribute and ic-link styling to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link href="test-href">IC Link Test</ic-link>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-link href="test-href" class="default link">
    <mock:shadow-root>
        <a class="default ic-link" href="test-href" tabindex="0">
        <slot></slot>
        </a>
        </mock:shadow-root>
        IC Link Test
      </ic-link>
    `);
  });

  it("should apply the 'dark' appearance styling and ic-link styling", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link  href="test-href" appearance="dark">IC Link Test</ic-link>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-link href="test-href" appearance="dark" class="dark link">
    <mock:shadow-root>
        <a class="dark ic-link" href="test-href" tabindex="0">
        <slot></slot>
        </a>
        </mock:shadow-root>
        IC Link Test
      </ic-link>
    `);
  });

  it("should apply the 'hreflang' attribute to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link hreflang="test-hreflang">IC Link Test</ic-link>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-link class="default link" hreflang="test-hreflang">
    <mock:shadow-root>
        <a hreflang="test-hreflang" tabindex="-1">
        <slot></slot>
        </a>
        </mock:shadow-root>
        IC Link Test
      </ic-link>
    `);
  });

  it("should apply the 'referrerpolicy' attribute to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link referrerpolicy="no-referrer">IC Link Test</ic-link>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-link class="default link" referrerpolicy="no-referrer">
    <mock:shadow-root>
        <a referrerpolicy="no-referrer" tabindex="-1">
        <slot></slot>
        </a>
        </mock:shadow-root>
        IC Link Test
      </ic-link>
    `);
  });

  it("should apply the 'rel' attribute to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link rel="test-rel">IC Link Test</ic-link>`,
    });

    expect(page.root).toEqualHtml(`<ic-link class="default link" rel="test-rel">
    <mock:shadow-root>
        <a rel="test-rel" tabindex="-1">
        <slot></slot>
        </a>
        </mock:shadow-root>
        IC Link Test
      </ic-link>
    `);
  });

  it("should apply the 'target' attribute to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link target="test-target">IC Link Test</ic-link>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-link class="default link" target="test-target">
    <mock:shadow-root>
        <a target="test-target" tabindex="-1">
        <slot></slot>
        </a>
        </mock:shadow-root>
        IC Link Test
      </ic-link>
    `);
  });

  it("should render an 'open in new' icon when 'show-icon' is provided", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link show-icon>IC Link Test</ic-link>`,
    });

    expect(page.root).toEqualHtml(`<ic-link class="default link" show-icon>
    <mock:shadow-root>
        <a tabindex="-1">
          <slot></slot>
          <span class="ic-link-open-in-new-icon">
            svg
          </span>
        </a>
        </mock:shadow-root>
        IC Link Test
      </ic-link>
    `);
  });

  it("should render a slotted link", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link>
        <ic-link slot="router-item">Slotted Link</ic-link>
      </ic-link>`,
    });

    expect(page.root).toEqualHtml(`<ic-link class="default link">
    <mock:shadow-root>
      <slot name="router-item"></slot>
    </mock:shadow-root>
    <ic-link class="default link" slot="router-item">
      <mock:shadow-root>
        <a tabindex="-1">
          <slot></slot>
        </a>
      </mock:shadow-root>
      Slotted Link
      </ic-link>
      </ic-link>
    `);
  });

  it("should get theme from context", async () => {
    const page = await newSpecPage({
      components: [Alert, Link],
      html: `<ic-alert message="This has an action"><ic-link slot="action">Theme context link</ic-link></ic-alert>`,
    });

    expect(page.root).toMatchSnapshot("alert-theme-context");
  });

  it("correctly sets variant on theme change", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-hero heading="Hero heading" subheading="Hero description">
      <ic-link slot="interaction">Link</ic-link>
    </ic-hero>
`,
    });

    page.rootInstance.themeChangeHandler({ detail: { mode: "dark" } });
    await page.waitForChanges();

    expect(page.rootInstance.appearance).toBe("dark");

    page.rootInstance.themeChangeHandler({ detail: { mode: "light" } });
    await page.waitForChanges();

    expect(page.rootInstance.appearance).toBe("light");
  });

  it("should call 'setFocus' when link is focused", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link>IC Link Test</ic-link>`,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });
});
