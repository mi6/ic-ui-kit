import { newSpecPage } from "@stencil/core/testing";
import { Typography } from "../../../ic-typography/ic-typography";
import { Footer } from "../../ic-footer";
import { DEVICE_SIZES } from "../../../../utils/helpers";
import {
  mockHasDynamicChildSlots,
  mockMutationObserverImplementation,
  MockMutationRecord,
  mockRenderDynamicChildSlots,
} from "../../../../testspec.setup";

describe("ic-footer", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-footer></ic-footer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a description via the description slot", async () => {
    const page = await newSpecPage({
      components: [Footer, Typography],
      html: `<ic-footer><ic-typography slot="description">This is a footer</ic-typography></ic-footer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a caption via the caption prop", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-footer description="This is a footer" caption="Made by ICDS"></ic-footer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a caption via the caption slot", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-footer description="This is a footer"><ic-typography slot="caption">Made by ICDS</ic-typography></ic-footer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render without the copyright text when the copyright prop is false", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-footer description="This is a footer" copyright=false><ic-typography slot="caption">Made by ICDS</ic-typography></ic-footer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render without the compliance section when there is no logo, caption or copyright", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-footer description="This is a footer" copyright=false></ic-footer>`,
    });

    expect(page.root).toMatchSnapshot();
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

    expect(page.root).toMatchSnapshot();
  });

  it("should render with link groups", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `
            <ic-footer description="This is a footer" caption="Made by ICDS">
                <ic-footer-link-group label="Links" slot="link">
                    <ic-footer-link href="/">Link</ic-footer-link>
                    <ic-footer-link href="/">Link</ic-footer-link>
                </ic-footer-link-group>
            </ic-footer>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with classification banner", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-classification-banner></ic-classification-banner><ic-footer></ic-footer>`,
    });

    expect(page.root).toMatchSnapshot("footer-classification-banner");
  });

  it("should update foreground colour when the brand is updated", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: "<div><ic-footer id='ic-footer'></ic-footer></div>",
    });

    await page.rootInstance.brandChangeHandler({ detail: { mode: "light" } });

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
      page.root?.shadowRoot
        ?.querySelector(".footer-caption")
        ?.firstElementChild?.getAttribute("variant")
    ).toBe("body");

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.XS);
    await page.waitForChanges();

    expect(
      page.root?.shadowRoot
        ?.querySelector(".footer-caption")
        ?.firstElementChild?.getAttribute("variant")
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

  it("should test rendering slotted after initial render", async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<ic-footer></ic-footer>`,
    });

    const component = page.rootInstance;
    const host = page.root;

    const observerInstance =
      mockMutationObserverImplementation.mock.results[0].value;

    const footerLink = page.doc.createElement("ic-footer-link");
    footerLink.textContent = "foo";
    footerLink.setAttribute("slot", "link");

    observerInstance.observe(host, { childList: true });

    host?.appendChild(footerLink);

    const mockMutationRecord: MockMutationRecord[] = [
      {
        addedNodes: [footerLink],
        removedNodes: [],
        target: host,
      },
    ];

    observerInstance.trigger(mockMutationRecord);

    await page.waitForChanges();

    expect(mockRenderDynamicChildSlots).toHaveBeenCalledTimes(1);
    expect(mockRenderDynamicChildSlots).toHaveBeenCalledWith(
      mockMutationRecord,
      "link",
      component
    );

    expect(mockHasDynamicChildSlots).toHaveBeenCalledTimes(1);

    expect(page.root).toMatchSnapshot();
  });
});
