import { newSpecPage } from "@stencil/core/testing";
import { Alert } from "../../../ic-alert/ic-alert";
import { Link } from "../../ic-link";

describe("ic-link component", () => {
  it("should render a link by default with the correct text", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link>IC Link Test</ic-link>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-link class="ic-link-default ic-link">
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
      .toEqualHtml(`<ic-link class="ic-link-default ic-link" download="test-download">
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
      .toEqualHtml(`<ic-link href="test-href" class="ic-link-default ic-link">
    <mock:shadow-root>
        <a class="default link" href="test-href" tabindex="0">
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
      .toEqualHtml(`<ic-link href="test-href" appearance="dark" class="ic-link-dark ic-link">
    <mock:shadow-root>
        <a class="dark link" href="test-href" tabindex="0">
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
      .toEqualHtml(`<ic-link class="ic-link-default ic-link" hreflang="test-hreflang">
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
      .toEqualHtml(`<ic-link class="ic-link-default ic-link" referrerpolicy="no-referrer">
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

    expect(page.root)
      .toEqualHtml(`<ic-link class="ic-link-default ic-link" rel="test-rel">
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
      .toEqualHtml(`<ic-link class="ic-link-default ic-link" target="test-target">
    <mock:shadow-root>
        <a target="test-target" tabindex="-1">
        <slot></slot>
        </a>
        </mock:shadow-root>
        IC Link Test
      </ic-link>
    `);
  });

  it("should render an 'open in new' icon when target is blank", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link target="_blank">IC Link Test</ic-link>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-link class="ic-link-default ic-link" target="_blank">
    <mock:shadow-root>
        <a tabindex="-1" target="_blank">
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

    expect(page.root).toEqualHtml(`<ic-link class="ic-link-default ic-link">
    <mock:shadow-root>
      <slot name="router-item"></slot>
    </mock:shadow-root>
    <ic-link class="ic-link-default ic-link" slot="router-item">
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

  it("should correctly set variant on theme change", async () => {
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

  it("should update any attributes that are inherited from the root element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link>IC Link Test</ic-link>`,
    });
    expect(
      page.root.shadowRoot.querySelector("a").getAttribute("aria-label")
    ).toBeNull();

    page.root.setAttribute("aria-label", "new-label");
    page.rootInstance.hostMutationCallback([{ attributeName: "aria-label" }]);
    await page.waitForChanges();

    expect(
      page.root.shadowRoot.querySelector("a").getAttribute("aria-label")
    ).toBe("new-label");
    page.rootInstance.disconnectedCallback();
  });
});
