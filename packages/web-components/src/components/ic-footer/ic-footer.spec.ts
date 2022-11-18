import { newSpecPage } from "@stencil/core/testing";
import { Typography } from "../ic-typography/ic-typography";
import { Footer } from "./ic-footer";
import { DEVICE_SIZES } from "../../utils/helpers";

describe("ic-footer", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-footer></ic-footer>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-footer class="footer footer-light footer-sparse footer-ungrouped light">
       <mock:shadow-root>
         <footer>
           <div class="footer-description">
             <ic-section-container aligned="left" fullheight="">
               <div class="footer-description-inner">
                 <ic-typography variant="body">
                   <slot name="description"></slot>
                 </ic-typography>
               </div>
             </ic-section-container>
           </div>
           <div class="footer-links">
             <ic-section-container aligned="left" fullheight="">
               <div class="footer-links-inner">
                 <slot name="link"></slot>
               </div>
             </ic-section-container>
           </div>
           <div class="footer-compliance">
             <ic-section-container aligned="left" fullheight="">
               <div class="footer-compliance-inner">
                 <div class="footer-logo">
                   <slot name="logo"></slot>
                 </div>
                 <div class="footer-caption">
                   <ic-typography variant="body">
                     <slot name="caption"></slot>
                   </ic-typography>
                 </div>
                 <div class="footer-copyright">
                   <ic-typography variant="label-uppercase">
                     © Crown Copyright
                   </ic-typography>
                 </div>
               </div>
             </ic-section-container>
           </div>
        </footer>`);
  });

  it("should render with a description via the description prop", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-footer description="This is a footer"></ic-footer>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-footer class="footer footer-light footer-sparse footer-ungrouped light" description="This is a footer">
       <mock:shadow-root>
         <footer>
           <div class="footer-description">
             <ic-section-container aligned="left" fullheight="">
               <div class="footer-description-inner">
                 <ic-typography variant="body">
                   <slot name="description">This is a footer</slot>
                 </ic-typography>
               </div>
             </ic-section-container>
           </div>
           <div class="footer-links">
             <ic-section-container aligned="left" fullheight="">
               <div class="footer-links-inner">
                 <slot name="link"></slot>
               </div>
             </ic-section-container>
           </div>
           <div class="footer-compliance">
             <ic-section-container aligned="left" fullheight="">
               <div class="footer-compliance-inner">
                 <div class="footer-logo">
                   <slot name="logo"></slot>
                 </div>
                 <div class="footer-caption">
                   <ic-typography variant="body">
                     <slot name="caption"></slot>
                   </ic-typography>
                 </div>
                 <div class="footer-copyright">
                   <ic-typography variant="label-uppercase">
                     © Crown Copyright
                   </ic-typography>
                 </div>
               </div>
             </ic-section-container>
           </div>
        </footer>`);
  });

  it("should render with a description via the description slot", async () => {
    const page = await newSpecPage({
      components: [Footer, Typography],
      html: `<ic-footer><ic-typography slot="description">This is a footer</ic-typography></ic-footer>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-footer class="footer footer-light footer-sparse footer-ungrouped light">
        <mock:shadow-root>
            <footer>
                <div class="footer-description">
                    <ic-section-container aligned="left" fullheight="">
                        <div class="footer-description-inner">
                            <ic-typography class="ic-typography-body">
                                <mock:shadow-root>
                                    <slot></slot>
                                </mock:shadow-root>
                                <slot name="description"></slot>
                            </ic-typography>
                        </div>
                    </ic-section-container>
                </div>
                <div class="footer-links">
                    <ic-section-container aligned="left" fullheight="">
                        <div class="footer-links-inner">
                            <slot name="link"></slot>
                        </div>
                    </ic-section-container>
                </div>
                <div class="footer-compliance">
                    <ic-section-container aligned="left" fullheight="">
                        <div class="footer-compliance-inner">
                            <div class="footer-logo">
                                <slot name="logo"></slot>
                            </div>
                            <div class="footer-caption">
                                <ic-typography class="ic-typography-body">
                                    <mock:shadow-root>
                                        <slot></slot>
                                    </mock:shadow-root>
                                    <slot name="caption"></slot>
                                </ic-typography>
                            </div>
                            <div class="footer-copyright">
                                <ic-typography class="ic-typography-label-uppercase">
                                    <mock:shadow-root>
                                        <slot></slot>
                                    </mock:shadow-root>
                                        © Crown Copyright
                                </ic-typography>
                            </div>
                        </div>
                    </ic-section-container>
                </div>
            </footer>
        </mock:shadow-root>
        <ic-typography class="ic-typography-body" slot="description">
            <mock:shadow-root>
                <slot></slot>
            </mock:shadow-root>
            This is a footer
        </ic-typography>
    </ic-footer>`);
  });

  it("should render with a caption via the caption prop", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-footer description="This is a footer" caption="Made by ICDS"></ic-footer>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-footer class="footer footer-light footer-sparse footer-ungrouped light" description="This is a footer" caption="Made by ICDS">
       <mock:shadow-root>
            <footer>
                <div class="footer-description">
                    <ic-section-container aligned="left" fullheight="">
                        <div class="footer-description-inner">
                            <ic-typography variant="body">
                                <slot name="description">This is a footer</slot>
                            </ic-typography>
                        </div>
                    </ic-section-container>
                </div>
                <div class="footer-links">
                    <ic-section-container aligned="left" fullheight="">
                        <div class="footer-links-inner">
                            <slot name="link"></slot>
                        </div>
                    </ic-section-container>
                </div>
                <div class="footer-compliance">
                    <ic-section-container aligned="left" fullheight="">
                        <div class="footer-compliance-inner">
                            <div class="footer-logo">
                                <slot name="logo"></slot>
                            </div>
                            <div class="footer-caption">
                                <ic-typography variant="body">
                                    <slot name="caption">Made by ICDS</slot>
                                </ic-typography>
                            </div>
                            <div class="footer-copyright">
                                <ic-typography variant="label-uppercase">
                                    © Crown Copyright
                                </ic-typography>
                            </div>
                        </div>
                    </ic-section-container>
                </div>
            </footer>
        </mock:shadow-root>
    </ic-footer>`);
  });

  it("should render with a caption via the caption slot", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-footer description="This is a footer"><ic-typography slot="caption">Made by ICDS</ic-typography></ic-footer>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-footer class="footer footer-light footer-sparse footer-ungrouped light" description="This is a footer">
        <mock:shadow-root>
            <footer>
                <div class="footer-description">
                    <ic-section-container aligned="left" fullheight="">
                        <div class="footer-description-inner">
                            <ic-typography variant="body">
                                <slot name="description">This is a footer</slot>
                            </ic-typography>
                        </div>
                    </ic-section-container>
                </div>
                <div class="footer-links">
                    <ic-section-container aligned="left" fullheight="">
                        <div class="footer-links-inner">
                            <slot name="link"></slot>
                        </div>
                    </ic-section-container>
                </div>
                <div class="footer-compliance">
                    <ic-section-container aligned="left" fullheight="">
                        <div class="footer-compliance-inner">
                            <div class="footer-logo">
                                <slot name="logo"></slot>
                            </div>
                            <div class="footer-caption">
                                <ic-typography variant="body">
                                    <slot name="caption"></slot>
                                </ic-typography>
                            </div>
                            <div class="footer-copyright">
                                <ic-typography variant="label-uppercase">
                                    © Crown Copyright
                                </ic-typography>
                            </div>
                        </div>
                    </ic-section-container>
                </div>
            </footer>
        </mock:shadow-root>
        <ic-typography slot="caption">
            Made by ICDS
        </ic-typography>
    </ic-footer>`);
  });

  it("should render without the copyright text when the copyright prop is false", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-footer description="This is a footer" copyright=false><ic-typography slot="caption">Made by ICDS</ic-typography></ic-footer>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-footer class="footer footer-light footer-sparse footer-ungrouped light" copyright="false" description="This is a footer">
            <mock:shadow-root>
                <footer>
                    <div class="footer-description">
                        <ic-section-container aligned="left" fullheight="">
                            <div class="footer-description-inner">
                                <ic-typography variant="body">
                                    <slot name="description">This is a footer</slot>
                                </ic-typography>
                            </div>
                        </ic-section-container>
                    </div>
                    <div class="footer-links">
                        <ic-section-container aligned="left" fullheight="">
                            <div class="footer-links-inner">
                                <slot name="link"></slot>
                            </div>
                        </ic-section-container>
                    </div>
                    <div class="footer-compliance">
                        <ic-section-container aligned="left" fullheight="">
                            <div class="footer-compliance-inner">
                                <div class="footer-logo">
                                    <slot name="logo"></slot>
                                </div>
                                <div class="footer-caption">
                                    <ic-typography variant="body">
                                        <slot name="caption"></slot>
                                    </ic-typography>
                                </div>
                            </div>
                        </ic-section-container>
                    </div>
                </footer>
            </mock:shadow-root>
            <ic-typography slot="caption">
                Made by ICDS
            </ic-typography>
        </ic-footer>`);
  });

  it("should render with links", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `
            <ic-footer description="This is a footer" caption="Made by ICDS">
                <ic-footer-link href="/" slot="link">Link</ic-footer-link>
                <ic-footer-link href="/" slot="link">Link</ic-footer-link>
            </ic-footer>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-footer class="footer footer-light footer-sparse footer-ungrouped light" description="This is a footer" caption="Made by ICDS">
            <mock:shadow-root>
                <footer>
                    <div class="footer-description">
                        <ic-section-container aligned="left" fullheight="">
                            <div class="footer-description-inner">
                                <ic-typography variant="body">
                                    <slot name="description">This is a footer</slot>
                                </ic-typography>
                            </div>
                        </ic-section-container>
                    </div>
                    <div class="footer-links">
                        <ic-section-container aligned="left" fullheight="">
                            <div class="footer-links-inner">
                                <slot name="link"></slot>
                            </div>
                        </ic-section-container>
                    </div>
                    <div class="footer-compliance">
                        <ic-section-container aligned="left" fullheight="">
                            <div class="footer-compliance-inner">
                                <div class="footer-logo">
                                    <slot name="logo"></slot>
                                </div>
                                <div class="footer-caption">
                                    <ic-typography variant="body">
                                        <slot name="caption">Made by ICDS</slot>
                                    </ic-typography>
                                </div>
                                <div class="footer-copyright">
                                    <ic-typography variant="label-uppercase">
                                        © Crown Copyright
                                    </ic-typography>
                                </div>
                            </div>
                        </ic-section-container>
                    </div>
                </footer>
            </mock:shadow-root>
            <ic-footer-link href="/" slot="link">Link</ic-footer-link>
            <ic-footer-link href="/" slot="link">Link</ic-footer-link>
        </ic-footer>`);
  });

  it("should render with link groups", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `
            <ic-footer description="This is a footer" caption="Made by ICDS">
                <ic-footer-link-group group-title="Links" slot="link">
                    <ic-footer-link href="/">Link</ic-footer-link>
                    <ic-footer-link href="/">Link</ic-footer-link>
                </ic-footer-link-group>
            </ic-footer>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-footer class="footer footer-light footer-sparse footer-ungrouped light" description="This is a footer" caption="Made by ICDS">
            <mock:shadow-root>
                <footer>
                    <div class="footer-description">
                        <ic-section-container aligned="left" fullheight="">
                            <div class="footer-description-inner">
                                <ic-typography variant="body">
                                    <slot name="description">This is a footer</slot>
                                </ic-typography>
                            </div>
                        </ic-section-container>
                    </div>
                    <div class="footer-links">
                        <ic-section-container aligned="left" fullheight="">
                            <div class="footer-links-inner">
                                <slot name="link"></slot>
                            </div>
                        </ic-section-container>
                    </div>
                    <div class="footer-compliance">
                        <ic-section-container aligned="left" fullheight="">
                            <div class="footer-compliance-inner">
                                <div class="footer-logo">
                                    <slot name="logo"></slot>
                                </div>
                                <div class="footer-caption">
                                    <ic-typography variant="body">
                                        <slot name="caption">Made by ICDS</slot>
                                    </ic-typography>
                                </div>
                                <div class="footer-copyright">
                                    <ic-typography variant="label-uppercase">
                                        © Crown Copyright
                                    </ic-typography>
                                </div>
                            </div>
                        </ic-section-container>
                    </div>
                </footer>
            </mock:shadow-root>
            <ic-footer-link-group group-title="Links" slot="link">
                <ic-footer-link href="/">Link</ic-footer-link>
                <ic-footer-link href="/">Link</ic-footer-link>
            </ic-footer-link-group>
        </ic-footer>`);
  });

  it("should render with classification banner", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-classification-banner></ic-classification-banner><ic-footer></ic-footer>`,
    });

    expect(page.root).toMatchSnapshot("footer-classification-banner");
  });

  it("should update foreground colour when the theme is updated", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: "<div><ic-footer id='ic-footer'></ic-footer></div>",
    });

    await page.rootInstance.themeChangeHandler({ detail: { mode: "light" } });

    expect(page.rootInstance.foregroundColor).toBe("light");
  });

  it("should update when resized", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: "<div><ic-footer id='ic-footer' caption='caption'></ic-footer></div>",
    });

    await page.rootInstance.runResizeObserver();
    await page.waitForChanges();

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.XL);
    await page.waitForChanges();

    expect(
      page.root.shadowRoot
        .querySelector(".footer-caption")
        .firstElementChild.getAttribute("variant")
    ).toBe("body");

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.XS);
    await page.waitForChanges();

    expect(
      page.root.shadowRoot
        .querySelector(".footer-caption")
        .firstElementChild.getAttribute("variant")
    ).toBe("caption");

    await page.rootInstance.disconnectedCallback();
  });

  it("should render with the correct small breakpoint at extra small device size", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: "<div><ic-footer id='ic-footer' caption='caption' breakpoint='extra small'></ic-footer></div>",
    });

    expect(page.root).not.toBeNull;

    expect(page.root).toMatchSnapshot("footer-xs-breakpoint");
  });

  it("should render with the correct small breakpoint at small device size", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: "<div><ic-footer id='ic-footer' caption='caption' breakpoint='small'></ic-footer></div>",
    });

    expect(page.root).not.toBeNull;

    expect(page.root).toMatchSnapshot("footer-s-breakpoint");
  });

  it("should render with the correct small breakpoint at medium device size", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: "<div><ic-footer id='ic-footer' caption='caption' breakpoint='medium'></ic-footer></div>",
    });

    expect(page.root).not.toBeNull;

    expect(page.root).toMatchSnapshot("footer-m-breakpoint");
  });

  it("should render with the correct small breakpoint at large device size", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: "<div><ic-footer id='ic-footer' caption='caption' breakpoint='large'></ic-footer></div>",
    });

    expect(page.root).not.toBeNull;

    expect(page.root).toMatchSnapshot("footer-l-breakpoint");
  });

  it("should render with the correct small breakpoint at extra large device size", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: "<div><ic-footer id='ic-footer' caption='caption' breakpoint='extra large'></ic-footer></div>",
    });

    expect(page.root).not.toBeNull;

    expect(page.root).toMatchSnapshot("footer-xl-breakpoint");
  });
});
