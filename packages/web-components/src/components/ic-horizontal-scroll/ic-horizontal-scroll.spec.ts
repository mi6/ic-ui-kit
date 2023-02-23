import { newSpecPage } from "@stencil/core/testing";
import { NavigationItem } from "../ic-navigation-item/ic-navigation-item";
import { HorizontalScroll } from "./ic-horizontal-scroll";

const testHorizontalScroll = `<ic-horizontal-scroll>
  <div>
    <ic-navigation-item label="Test nav item 1"></ic-navigation-item>
    <ic-navigation-item label="Test nav item 2"></ic-navigation-item>
    <ic-navigation-item label="Test nav item 3"></ic-navigation-item>
    <ic-navigation-item label="Test nav item 4"></ic-navigation-item>
    <ic-navigation-item label="Test nav item 5"></ic-navigation-item>
    <ic-navigation-item label="Test nav item 6"></ic-navigation-item>
  </div>
  </ic-horizontal-scroll>`;

describe("ic-horizontal-scroll", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: testHorizontalScroll,
    });

    expect(page.root).toMatchSnapshot("renders");
  });

  it("should render the correct HTML for the chosen appearance", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: testHorizontalScroll,
    });

    expect(page.root).toMatchSnapshot("renders-appearance");
  });

  it("should scroll item into view", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: testHorizontalScroll,
    });

    page.rootInstance.scrollItemIntoView(6);
    expect(page.rootInstance.buttonStateSet).toBe(true);
  });

  it("should long scroll left", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: testHorizontalScroll,
    });

    page.rootInstance.longScrollLeft();
    page.waitForChanges();

    expect(page.rootInstance.scrollDelay._idleNext.msecs).toBe(200);
  });

  it("should long scroll right", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: testHorizontalScroll,
    });

    page.rootInstance.longScrollRight();
    page.waitForChanges();

    expect(page.rootInstance.scrollDelay._idleNext.msecs).toBe(200);
  });

  it("should delay on left arrow mouse down and set a timeout after the scrolling ends", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: testHorizontalScroll,
    });

    const event = new Event("mousedown", {
      bubbles: true,
      cancelable: true,
    });

    page.rootInstance.leftArrowMouseDownHandler(event);
    page.waitForChanges();

    expect(page.rootInstance.scrollDelay._idleNext.msecs).toBe(200);

    page.rootInstance.isScrolling = 200;
    page.waitForChanges();

    page.rootInstance.scrollHandler();

    expect(page.rootInstance.isScrolling._idleNext.msecs).toBe(50);
  });

  it("should delay on right arrow mouse down and revoke delay on mouse up", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: testHorizontalScroll,
    });

    const event = new Event("mousedown", {
      bubbles: true,
      cancelable: true,
    });

    page.rootInstance.rightArrowMouseDownHandler(event);
    page.waitForChanges();

    expect(page.rootInstance.scrollDelay._idleNext.msecs).toBe(200);

    page.rootInstance.arrowMouseUpHandler();
    expect(page.rootInstance.scrollDelay._idleNext).toBeNull();
  });

  it("should stop scrolling if mouse leaves the scroll button", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: testHorizontalScroll,
    });

    const scrollContainer = page.root.shadowRoot.querySelector(
      ".scroll-container-right"
    );
    const mouseDownEvent = new Event("mousedown", {
      bubbles: true,
      cancelable: true,
    });
    const mouseLeaveEvent = new Event("mouseleave", {
      bubbles: true,
      cancelable: true,
    });

    page.rootInstance.rightArrowMouseDownHandler(mouseDownEvent);
    page.waitForChanges();

    scrollContainer.dispatchEvent(mouseLeaveEvent);
    page.waitForChanges();

    expect(page.rootInstance.arrowMouseUpHandler()).toHaveBeenCalled;
  });

  it("should stop scrolling", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: testHorizontalScroll,
    });

    //when buttonStateSet is true
    page.rootInstance.buttonStateSet = true;
    page.rootInstance.scrollStopped();
    page.waitForChanges();

    expect(page.rootInstance.buttonStateSet).toBe(false);

    //when buttonStateSet is false
    page.rootInstance.itemsContainerEl.scrollLeft = 0;
    page.rootInstance.scrollStopped();
    page.waitForChanges();

    expect(page.rootInstance.firstItemVisible).toBe(true);
  });

  it("should handle item focus", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: testHorizontalScroll,
    });

    page.rootInstance.itemOverflow = true;
    page.waitForChanges();

    const item: HTMLElement = page.root.querySelector(
      "[label='Test nav item 4']"
    );
    item.focus();
    page.waitForChanges();

    expect(page.rootInstance.itemFocusHandler()).toHaveBeenCalled;
    expect(page.rootInstance.firstItemVisible).toBe(false);
  });

  it("should render scroll arrows when items overflow", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: `<ic-horizontal-scroll>
        <div>
        <ic-navigation-item label="Test nav item 1"></ic-navigation-item>
        <ic-navigation-item label="Test nav item 2"></ic-navigation-item>
        <ic-navigation-item label="Test nav item 3"></ic-navigation-item>
        <ic-navigation-item label="Test nav item 4"></ic-navigation-item>
        <ic-navigation-item label="Test nav item 5"></ic-navigation-item>
        <ic-navigation-item label="Test nav item 6"></ic-navigation-item>
        </div>
      </ic-horizontal-scroll>`,
    });

    page.rootInstance.itemOverflow = true;
    page.waitForChanges();
    const scroll = page.root.shadowRoot.querySelector(".scroll-arrow");

    expect(scroll).not.toBeNull();

    //call runResizeObserver
    page.rootInstance.runResizeObserver();

    //test disconnected callback
    page.setContent("");
  });

  it("should set itemOverflow to true where scrollWidth > clientWidth on the scroll container element", async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll, NavigationItem],
      html: `<ic-horizontal-scroll>
        <div>
        <ic-navigation-item label="Test nav item 1"></ic-navigation-item>
        <ic-navigation-item label="Test nav item 2"></ic-navigation-item>
        <ic-navigation-item label="Test nav item 3"></ic-navigation-item>
        <ic-navigation-item label="Test nav item 4"></ic-navigation-item>
        <ic-navigation-item label="Test nav item 5"></ic-navigation-item>
        <ic-navigation-item label="Test nav item 6"></ic-navigation-item>
        </div>
      </ic-horizontal-scroll>`,
    });

    page.rootInstance.itemsContainerEl.scrollWidth = 100;
    page.rootInstance.itemsContainerEl.clientWidth = 50;
    page.rootInstance.resizeObserverCallback();
    page.waitForChanges();

    expect(page.rootInstance.itemOverflow).toBe(true);
  });
});
