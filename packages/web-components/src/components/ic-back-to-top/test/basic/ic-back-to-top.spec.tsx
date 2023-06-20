import { newSpecPage } from "@stencil/core/testing";
import { ClassificationBanner } from "../../../ic-classification-banner/ic-classification-banner";
import { Footer } from "../../../ic-footer/ic-footer";
import { BackToTop } from "../../ic-back-to-top";

beforeAll(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn().mockReturnValue(null),
    unobserve: jest.fn().mockReturnValue(null),
    disconnect: jest.fn().mockReturnValue(null),
  });

  Object.defineProperty(global, "IntersectionObserver", {
    value: mockIntersectionObserver,
  });
});

describe("ic-back-to-top", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [BackToTop],
      html: `<div id="topEl"><ic-back-to-top target="topEl"></ic-back-to-top></div>`,
    });

    expect(page.root).toMatchSnapshot("should render");
  });

  it("should render with footer", async () => {
    const page = await newSpecPage({
      components: [BackToTop, Footer],
      html: `<div id="topEl"><ic-back-to-top target="topEl"></ic-back-to-top></div><ic-footer></ic-footer>`,
    });

    expect(page.root).toMatchSnapshot("should render with footer");
  });

  it("should render with no targetId set", async () => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
    const page = await newSpecPage({
      components: [BackToTop],
      html: `<ic-back-to-top></ic-back-to-top>`,
    });

    expect(page.root).toMatchSnapshot("should render with no targetId set");
  });

  it("should render when target starts with #", async () => {
    const page = await newSpecPage({
      components: [BackToTop],
      html: `<div id="topEl"><ic-back-to-top target="#topEl"></ic-back-to-top></div>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render when target starts with #"
    );
  });

  it("should offset due to classification banner", async () => {
    const page = await newSpecPage({
      components: [BackToTop, ClassificationBanner],
      html: `<div id="topEl"><ic-back-to-top target="topEl"></ic-back-to-top><ic-classification-banner></ic-classification-banner></div>`,
    });

    expect(page.rootInstance.bannerOffset).toBe(true);
  });

  it("should scroll to 0,0 if target is null", async () => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
    const page = await newSpecPage({
      components: [BackToTop],
      html: `<div id="topEl"><ic-back-to-top></ic-back-to-top></div>`,
    });

    expect(page.rootInstance.isTargetElNull).toBe(true);

    page.root.shadowRoot.querySelector("button").click();
    expect(page.win.screenX).toBe(0);
    expect(page.win.screenY).toBe(0);
  });

  it("should scroll targetEl into view", async () => {
    const page = await newSpecPage({
      components: [BackToTop],
      html: `<div id="topEl"><ic-back-to-top target="topEl"></ic-back-to-top></div>`,
    });

    page.root.shadowRoot.querySelector("button").click();
    expect(page.rootInstance.targetElVisible).toBe(true);
  });

  it("should return null targetElement when there's no target matching that given in back to top", async () => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
    const page = await newSpecPage({
      components: [BackToTop],
      html: `<div><ic-back-to-top target="topEl"></ic-back-to-top></div>`,
    });

    const findTarget = page.rootInstance.findTargetEl("topEl");

    expect(findTarget).toBeNull();
  });

  it("should stop observing observedEl when topObserver exists", async () => {
    const page = await newSpecPage({
      components: [BackToTop],
      html: `<div id="topEl"><ic-back-to-top target="topEl"></ic-back-to-top></div>`,
    });

    page.rootInstance.watchPropHandler(undefined, "topEl");
    page.rootInstance.createTopObserver("topEl");
    expect(page.rootInstance.topObserver).not.toBeNull();
  });

  it("should set footerVisible", async () => {
    const page = await newSpecPage({
      components: [BackToTop],
      html: `<div id="topEl"><ic-back-to-top target="topEl"></ic-back-to-top></div>`,
    });

    page.rootInstance.footerObserverCallback([{ isIntersecting: true }]);
    //value is false as scrollY is always 0
    expect(page.rootInstance.footerVisible).toBe(false);

    page.rootInstance.footerObserverCallback([{ isIntersecting: false }]);
    expect(page.rootInstance.footerVisible).toBe(false);
  });

  it("should set targetElVisible", async () => {
    const page = await newSpecPage({
      components: [BackToTop],
      html: `<div id="topEl"><ic-back-to-top target="topEl"></ic-back-to-top></div>`,
    });

    page.rootInstance.targetElObserverCallback([{ isIntersecting: true }]);
    expect(page.rootInstance.targetElVisible).toBe(true);

    page.rootInstance.targetElObserverCallback([{ isIntersecting: false }]);
    expect(page.rootInstance.targetElVisible).toBe(false);
  });

  it("should test update of target from undefined to value", async () => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
    const page = await newSpecPage({
      components: [BackToTop],
      html: `<div id="topEl"><ic-back-to-top></ic-back-to-top></div>`,
    });

    page.root.target = "topEl";
    await page.waitForChanges();

    expect(page.rootInstance.target).toBe("topEl");
  });
});
