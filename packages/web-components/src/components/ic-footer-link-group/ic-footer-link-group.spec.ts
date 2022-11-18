import { newSpecPage } from "@stencil/core/testing";
import { Footer } from "../ic-footer/ic-footer";
import { FooterLinkGroup } from "./ic-footer-link-group";
import { FooterLink } from "../ic-footer-link/ic-footer-link";

describe("ic-footer-link-group", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [FooterLinkGroup],
      html: `<ic-footer-link-group group-title="Link group"></ic-footer-link-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-footer-link-group class="footer-link-group footer-link-group-light footer-link-group-sparse" group-title="Link group">
        <mock:shadow-root>
            <div class="footer-link-group-title">
                <ic-typography variant="subtitle-small">
                    Link group
                </ic-typography>
            </div>
            <div class="footer-link-group-links">
                <slot></slot>
            </div>
        </mock:shadow-root>
    </ic-footer-link-group>`);
  });

  it("should render with links", async () => {
    const page = await newSpecPage({
      components: [FooterLinkGroup, FooterLink],
      html: `<ic-footer-link-group group-title="Link group"><ic-footer-link href="/">Link</ic-footer-link></ic-footer-link-group>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-footer-link-group class="footer-link-group footer-link-group-light footer-link-group-sparse" group-title="Link group">
        <mock:shadow-root>
            <div class="footer-link-group-title">
                <ic-typography variant="subtitle-small">
                    Link group
                </ic-typography>
            </div>
            <div class="footer-link-group-links">
                <slot></slot>
            </div>
        </mock:shadow-root>
        <ic-footer-link class="footer-link footer-link-light footer-link-ungrouped-sparse" href="/">
            <mock:shadow-root>
                <a href="/">
                    <slot></slot>
                </a>
            </mock:shadow-root>
            Link
        </ic-footer-link>
    </ic-footer-link-group>`);
  });

  it("should render within footer", async () => {
    const page = await newSpecPage({
      components: [Footer, FooterLinkGroup, FooterLink],
      html: `<ic-footer><ic-footer-link-group group-title="Link group"><ic-footer-link href="/">Link</ic-footer-link></ic-footer-link-group><ic-footer>`,
    });

    expect(page.root).toMatchSnapshot("footer-link-group-in-footer");
  });

  it("should expand and collapse", async () => {
    const page = await newSpecPage({
      components: [Footer, FooterLinkGroup, FooterLink],
      html: `<ic-footer-link-group group-title="Link group"><ic-footer-link href="/">Link</ic-footer-link></ic-footer-link-group>`,
    });

    expect(page.rootInstance.expanded).toBe(false);

    const event = new KeyboardEvent("keydown", { key: "Enter" });

    await page.rootInstance.handleKeydown(event);

    expect(page.rootInstance.expanded).toBe(true);

    await page.rootInstance.handleKeydown(event);

    expect(page.rootInstance.expanded).toBe(false);
  });

  it("should check and set small state", async () => {
    const page = await newSpecPage({
      components: [Footer, FooterLinkGroup, FooterLink],
      html: `<ic-footer-link-group group-title="Link group"><ic-footer-link href="/">Link</ic-footer-link></ic-footer-link-group>`,
    });

    await page.rootInstance.footerResizeHandler();

    expect(page.rootInstance.small).toBe(false);
  });

  it("should update theme", async () => {
    const page = await newSpecPage({
      components: [Footer, FooterLinkGroup, FooterLink],
      html: `<ic-footer-link-group group-title="Link group"><ic-footer-link href="/">Link</ic-footer-link></ic-footer-link-group>`,
    });

    await page.rootInstance.footerThemeChangeHandler({
      detail: { mode: "dark" },
    });

    expect(page.rootInstance.dropdownIconStyle).toBe("dark");
  });

  it("should render small", async () => {
    const page = await newSpecPage({
      components: [Footer, FooterLinkGroup, FooterLink],
      html: `<ic-footer breakpoint="extra large"><ic-footer-link-group small=true group-title="Link group"><ic-footer-link href="/">Link</ic-footer-link></ic-footer-link-group></ic-footer>`,
    });

    expect(page.root).not.toBeNull;

    expect(page.root).toMatchSnapshot("footer-link-group-small");
  });
});
