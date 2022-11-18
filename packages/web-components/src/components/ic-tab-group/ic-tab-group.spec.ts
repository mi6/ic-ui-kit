import { newSpecPage } from "@stencil/core/testing";
import { Tab } from "../ic-tab/ic-tab";
import { TabGroup } from "./ic-tab-group";

describe("ic-tab-group component", () => {
  it("should not have the ic-tab-group-not-inline class when inline", async () => {
    const page = await newSpecPage({
      components: [TabGroup],
      html: `<ic-tab-group inline label="test">IC Tab Test</ic-tab-group>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-tab-group context-id="default" role="tablist" inline="" label="test" aria-label="test">
    <mock:shadow-root>
      <div class="ic-tab-group-container">
        <div class="tabs-container">
          <slot></slot>
        </div>
      </div>
      <div aria-hidden="true" class="hidden ic-tab-splitter"></div>
    </mock:shadow-root>
    IC Tab Test
  </ic-tab-group>`);
  });

  it("should have the ic-tab-group-not-inline class when not inline", async () => {
    const page = await newSpecPage({
      components: [TabGroup],
      html: `<ic-tab-group label="test">IC Tab Test</ic-tab-group>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-tab-group class="ic-tab-group-not-inline" context-id="default" role="tablist" label="test" aria-label="test">
      <mock:shadow-root>
        <div class="ic-tab-group-container">
          <div class="tabs-container">
            <slot></slot>
          </div>
        </div>
        <div aria-hidden="true" class="ic-tab-splitter"></div>
      </mock:shadow-root>
      IC Tab Test
    </ic-tab-group>`);
  });

  it("should scroll tab into view", async () => {
    const page = await newSpecPage({
      components: [TabGroup],
      html: `<ic-tab-group label="test">IC Tab Test</ic-tab-group>`,
    });

    page.rootInstance.scrollTabIntoView(2);
    expect(page.rootInstance.buttonStateSet).toBe(true);
  });

  it("should scroll tab into view when tabNumber is 0", async () => {
    const page = await newSpecPage({
      components: [TabGroup],
      html: `<ic-tab-group label="test">IC Tab Test</ic-tab-group>`,
    });

    page.rootInstance.scrollTabIntoView(0);
    expect(page.rootInstance.tabGroupEl.scrollLeft).toBe(0);
  });

  it("should long scroll left", async () => {
    const page = await newSpecPage({
      components: [TabGroup],
      html: `<ic-tab-group label="test">
        <ic-tab tab-position=1>One</ic-tab>
        <ic-tab selected tab-position=2>Two</ic-tab>
      </ic-tab-group>`,
    });

    page.rootInstance.longScrollLeft();
    page.waitForChanges();

    expect(page.rootInstance.scrollDelay._idleNext.msecs).toBe(200);
  });

  it("should long scroll right", async () => {
    const page = await newSpecPage({
      components: [TabGroup],
      html: `<ic-tab-group label="test">
        <ic-tab selected tab-position=1>One</ic-tab>
        <ic-tab tab-position=2>Two</ic-tab>
      </ic-tab-group>`,
    });

    page.rootInstance.longScrollRight();
    page.waitForChanges();

    expect(page.rootInstance.scrollDelay._idleNext.msecs).toBe(200);
  });

  it("should delay on left arrow mouse down and set a timeout after the scrolling ends", async () => {
    const page = await newSpecPage({
      components: [TabGroup],
      html: `<ic-tab-group label="test">
        <ic-tab tab-position=1>One</ic-tab>
        <ic-tab selected tab-position=2>Two</ic-tab>
      </ic-tab-group>`,
    });

    page.rootInstance.leftArrowMouseDownHandler();
    page.waitForChanges();

    expect(page.rootInstance.scrollDelay._idleNext.msecs).toBe(200);

    page.rootInstance.isScrolling = 200;
    page.waitForChanges();

    page.rootInstance.scrollHandler();

    expect(page.rootInstance.isScrolling._idleNext.msecs).toBe(50);
  });

  it("should delay on right arrow mouse down and revoke delay on arrow up", async () => {
    const page = await newSpecPage({
      components: [TabGroup],
      html: `<ic-tab-group label="test">
        <ic-tab tab-position=1>One</ic-tab>
        <ic-tab selected tab-position=2>Two</ic-tab>
      </ic-tab-group>`,
    });

    page.rootInstance.rightArrowMouseDownHandler();
    page.waitForChanges();

    expect(page.rootInstance.scrollDelay._idleNext.msecs).toBe(200);

    page.rootInstance.arrowMouseUpHandler();
    expect(page.rootInstance.scrollDelay._idleNext).toBeNull();
  });

  it("should stop scrolling", async () => {
    const page = await newSpecPage({
      components: [TabGroup],
      html: `<ic-tab-group label="test">
        <ic-tab selected tab-position=1>One</ic-tab>
        <ic-tab tab-position=2>Two</ic-tab>
      </ic-tab-group>`,
    });

    //when buttonStateSet is true
    page.rootInstance.buttonStateSet = true;
    page.rootInstance.scrollStopped();
    page.waitForChanges();

    expect(page.rootInstance.buttonStateSet).toBe(false);

    //when buttonStateSet is false
    page.rootInstance.tabGroupEl.scrollLeft = 0;
    page.rootInstance.scrollStopped();
    page.waitForChanges();

    expect(page.rootInstance.firstTabVisible).toBe(true);
  });

  it("should handle tab focus", async () => {
    const page = await newSpecPage({
      components: [TabGroup, Tab],
      html: `<ic-tab-group label="test">
        <ic-tab tab-position=1>Test Name One</ic-tab>
        <ic-tab tab-position=2>Test Name Two</ic-tab>
        <ic-tab selected tab-position=3>Test Name Three</ic-tab>
        <ic-tab tab-position=4>Test Name Four</ic-tab>
      </ic-tab-group>`,
    });

    page.rootInstance.tabOverflow = true;
    await page.waitForChanges();
    await page.rootInstance.tabFocusHandler({ detail: { position: 2 } });

    expect(page.rootInstance.firstTabVisible).toBe(false);
  });

  it("should render scroll arrows on tabOverflow", async () => {
    const page = await newSpecPage({
      components: [TabGroup, Tab],
      html: `<ic-tab-group label="test">
        <ic-tab tab-position=1>Test Name One</ic-tab>
        <ic-tab tab-position=2>Test Name Two</ic-tab>
        <ic-tab selected tab-position=3>Test Name Three</ic-tab>
        <ic-tab tab-position=4>Test Name Four</ic-tab>
      </ic-tab-group>`,
    });

    page.rootInstance.tabOverflow = true;
    await page.waitForChanges();
    const scroll = page.root.shadowRoot.querySelector("span.scroll-arrow");

    expect(scroll).not.toBeNull();

    //call runResizeObserver
    await page.rootInstance.runResizeObserver();

    //test disconnected callback
    page.setContent("");
  });

  it("should set tabOverflow to true where scrollWidth > clientWidth", async () => {
    const page = await newSpecPage({
      components: [TabGroup, Tab],
      html: `<ic-tab-group label="Test tab list">
        <ic-tab selected tab-position=1>Test Name One</ic-tab>
        <ic-tab tab-position=2>Test Name Two</ic-tab>
      </ic-tab-group>`,
    });

    page.rootInstance.tabGroupEl.scrollWidth = 100;
    page.rootInstance.tabGroupEl.clientWidth = 50;
    page.rootInstance.resizeObserverCallback();
    await page.waitForChanges();

    expect(page.rootInstance.tabOverflow).toBe(true);
  });

  it("should set tabGroupEl when it's null", async () => {
    const page = await newSpecPage({
      components: [TabGroup, Tab],
      html: `<ic-tab-group label="Test tab list">
        <ic-tab selected tab-position=1>Test Name One</ic-tab>
        <ic-tab tab-position=2>Test Name Two</ic-tab>
      </ic-tab-group>`,
    });

    page.rootInstance.tabGroupEl = null;

    expect(page.rootInstance.tabGroupEl).toBeNull();
    page.rootInstance.resizeObserverCallback();
    await page.waitForChanges();

    expect(page.rootInstance.tabGroupEl.__attributeMap.__items[0]._value).toBe(
      "tabs-container"
    );
  });
});
