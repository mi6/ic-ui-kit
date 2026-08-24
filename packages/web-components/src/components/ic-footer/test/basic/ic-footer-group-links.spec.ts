import { newSpecPage } from "@stencil/core/testing";
import { FooterLink } from "../../../ic-footer-link/ic-footer-link";
import { Footer } from "../../ic-footer";

describe("ic-footer groupLinks updates", () => {
  it("updates slotted footer link styling when groupLinks changes", async () => {
    const page = await newSpecPage({
      components: [Footer, FooterLink],
      html: `<ic-footer>
        <ic-footer-link slot="link" href="/">Link</ic-footer-link>
      </ic-footer>`,
    });

    const footer = page.root as HTMLIcFooterElement;
    const footerLink = footer.querySelector("ic-footer-link");

    expect(footerLink).not.toBeNull();
    expect(footerLink?.classList.contains("footer-link-ungrouped-sparse")).toBe(
      true
    );

    footer.groupLinks = true;
    await page.waitForChanges();

    expect(footerLink?.classList.contains("footer-link-grouped-sparse")).toBe(
      true
    );
    expect(
      footerLink?.classList.contains("footer-link-ungrouped-sparse")
    ).toBe(false);
  });
});
