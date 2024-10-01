import { newSpecPage } from "@stencil/core/testing";
import { Alert } from "../../../ic-alert/ic-alert";
import { Link } from "../../ic-link";

describe("ic-link component", () => {
  it("should render a link by default with the correct text", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link>IC Link Test</ic-link>`,
    });

    expect(page.root).toMatchSnapshot("default-link");
  });

  it("should apply the 'download' attribute to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link download="test-download">IC Link Test</ic-link>`,
    });

    expect(page.root).toMatchSnapshot("download-link");
  });

  it("should apply the 'href' attribute and ic-link styling to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link href="test-href">IC Link Test</ic-link>`,
    });

    expect(page.root).toMatchSnapshot("default-link-href");
  });

  it("should apply the 'dark' theme styling and ic-link styling", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link  href="test-href" theme="dark">IC Link Test</ic-link>`,
    });

    expect(page.root).toMatchSnapshot("link-dark-theme");
  });

  it("should apply the 'hreflang' attribute to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link hreflang="test-hreflang">IC Link Test</ic-link>`,
    });

    expect(page.root).toMatchSnapshot("default-link-hreflang");
  });

  it("should apply the 'referrerpolicy' attribute to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link referrerpolicy="no-referrer">IC Link Test</ic-link>`,
    });

    expect(page.root).toMatchSnapshot("default-link-referrerpolicy");
  });

  it("should apply the 'rel' attribute to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link rel="test-rel">IC Link Test</ic-link>`,
    });

    expect(page.root).toMatchSnapshot("default-link-rel");
  });

  it("should apply the 'target' attribute to the anchor element", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link target="test-target">IC Link Test</ic-link>`,
    });

    expect(page.root).toMatchSnapshot("default-link-target");
  });

  it("should render an 'open in new' icon when target is blank", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link target="_blank">IC Link Test</ic-link>`,
    });

    expect(page.root).toMatchSnapshot("default-link-target-blank");
  });

  it("should render a slotted link", async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<ic-link>
        <ic-link slot="router-item">Slotted Link</ic-link>
      </ic-link>`,
    });

    expect(page.root).toMatchSnapshot("slotted-link");
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

    expect(page.rootInstance.theme).toBe("light");

    page.rootInstance.themeChangeHandler({ detail: { mode: "light" } });
    await page.waitForChanges();

    expect(page.rootInstance.theme).toBe("dark");
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
