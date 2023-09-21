import { newSpecPage } from "@stencil/core/testing";
import { waitForTimeout } from "../../../../testspec.setup";
import { Tooltip } from "../../ic-tooltip";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(jest.fn());
});

describe("ic-tooltip component", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip label="tooltip"></ic-tooltip>`,
    });

    expect(page.root).toMatchSnapshot(`ic-tooltip-render`);
  });

  it("should appear when triggered", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button" label="tooltip"><button id="test-button">Click</button></ic-tooltip>`,
    });

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;

    await page.rootInstance.show(page.rootInstance.popperInstance);
    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBe("");
  });

  it("should appear when triggered by click", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button" label="tooltip" disable-hover=true><button id="test-button">Click</button></ic-tooltip>`,
    });

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;

    await page.rootInstance.show(page.rootInstance.popperInstance);
    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBe("");
  });

  it("should disappear when triggered", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button" label="tooltip"><button id="test-button">Click</button></ic-tooltip>`,
    });

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;

    await page.rootInstance.show(page.rootInstance.popperInstance);
    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBe("");

    await page.rootInstance.hide(page.rootInstance.popperInstance);
    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;
  });

  it("should disappear on mouseleave", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button" label="tooltip"><button id="test-button">Click</button></ic-tooltip>`,
    });

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;

    await page.rootInstance.show(page.rootInstance.popperInstance);
    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBe("");

    await page.rootInstance.mouseLeaveTooltip(page.rootInstance.popperInstance);

    await waitForTimeout(200);

    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;
  });

  it("should remain when mouse remains on tooltip", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button" label="tooltip"><button id="test-button">Click</button></ic-tooltip>`,
    });

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;

    await page.rootInstance.show(page.rootInstance.popperInstance);
    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBe("");

    await page.rootInstance.mouseEnterTooltip();
    await page.waitForChanges();

    await page.rootInstance.checkCloseTooltip(page.rootInstance.popperInstance);
    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBe("");
  });

  it("should close the tooltip on Escape keydown", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button" label="tooltip"><button id="test-button">Click</button></ic-tooltip>`,
    });

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;

    await page.rootInstance.show(page.rootInstance.popperInstance);
    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBe("");

    const body = window.document.body;

    body.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;
  });

  it("should watch for label updates", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button" label="tooltip"><button id="test-button">Click</button></ic-tooltip>`,
    });

    expect(page.rootInstance.label).toBe("tooltip");

    page.root.label = "new tooltip";

    page.rootInstance.updateLabel();
    await page.waitForChanges();

    expect(page.rootInstance.label).toBe("new tooltip");

    page.rootInstance.disconnectedCallback();
  });

  it("should open the tooltip using the displayTooltip method and should persist when persistTooltip is true", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button" label="tooltip"><button id="test-button">Click</button></ic-tooltip>`,
    });

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;

    await page.rootInstance.displayTooltip(true, true);
    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).not.toBeNull;

    window.document.body.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).not.toBeNull;

    await page.rootInstance.displayTooltip(false, false);
    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;
  });

  describe("getTooltipTranslate", () => {
    it("should update for bottom", async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<ic-tooltip target="test-button" label="tooltip"><button id="test-button">Click</button></ic-tooltip>`,
      });

      await page.rootInstance.getTooltipTranslate({
        left: 0,
        right: 40,
        top: 100,
        bottom: 132,
      });
      await page.waitForChanges();

      expect(page.root).toMatchSnapshot();
    });

    it("should update for bottom-start", async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<ic-tooltip target="test-button" label="tooltip" placement="bottom-start"><button id="test-button">Click</button></ic-tooltip>`,
      });

      await page.rootInstance.getTooltipTranslate({
        left: 0,
        right: 40,
        top: 100,
        bottom: 132,
      });
      await page.waitForChanges();

      expect(page.root).toMatchSnapshot();
    });

    it("should update for bottom-end", async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<ic-tooltip target="test-button" label="tooltip" placement="bottom-end"><button id="test-button">Click</button></ic-tooltip>`,
      });

      await page.rootInstance.getTooltipTranslate({
        left: 0,
        right: 40,
        top: 100,
        bottom: 132,
      });
      await page.waitForChanges();

      expect(page.root).toMatchSnapshot();
    });

    it("should update for top", async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<ic-tooltip target="test-button" label="tooltip" placement="top"><button id="test-button">Click</button></ic-tooltip>`,
      });

      await page.rootInstance.getTooltipTranslate({
        left: 0,
        right: 40,
        top: 100,
        bottom: 132,
      });
      await page.waitForChanges();

      expect(page.root).toMatchSnapshot();
    });

    it("should update for top-start", async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<ic-tooltip target="test-button" label="tooltip" placement="top-start"><button id="test-button">Click</button></ic-tooltip>`,
      });

      await page.rootInstance.getTooltipTranslate({
        left: 0,
        right: 40,
        top: 100,
        bottom: 132,
      });
      await page.waitForChanges();

      expect(page.root).toMatchSnapshot();
    });

    it("should update for top-end", async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<ic-tooltip target="test-button" label="tooltip" placement="top-end"><button id="test-button">Click</button></ic-tooltip>`,
      });

      await page.rootInstance.getTooltipTranslate({
        left: 0,
        right: 40,
        top: 100,
        bottom: 132,
      });
      await page.waitForChanges();

      expect(page.root).toMatchSnapshot();
    });

    it("should update for left", async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<ic-tooltip target="test-button" label="tooltip" placement="left"><button id="test-button">Click</button></ic-tooltip>`,
      });

      await page.rootInstance.getTooltipTranslate({
        left: 0,
        right: 40,
        top: 100,
        bottom: 132,
      });
      await page.waitForChanges();

      expect(page.root).toMatchSnapshot();
    });

    it("should update for left-end", async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<ic-tooltip target="test-button" label="tooltip" placement="left-end"><button id="test-button">Click</button></ic-tooltip>`,
      });

      await page.rootInstance.getTooltipTranslate({
        left: 0,
        right: 40,
        top: 100,
        bottom: 132,
      });
      await page.waitForChanges();

      expect(page.root).toMatchSnapshot();
    });

    it("should update for right", async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<ic-tooltip target="test-button" label="tooltip" placement="right"><button id="test-button">Click</button></ic-tooltip>`,
      });

      await page.rootInstance.getTooltipTranslate({
        left: 0,
        right: 40,
        top: 100,
        bottom: 132,
      });
      await page.waitForChanges();

      expect(page.root).toMatchSnapshot();
    });

    it("should update for right-end", async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<ic-tooltip target="test-button" label="tooltip" placement="right-end"><button id="test-button">Click</button></ic-tooltip>`,
      });

      await page.rootInstance.getTooltipTranslate({
        left: 0,
        right: 40,
        top: 100,
        bottom: 132,
      });
      await page.waitForChanges();

      expect(page.root).toMatchSnapshot();
    });

    it("should update when tooltip is outside of dialog", async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<ic-tooltip target="test-button" label="tooltip" placement="left"><button id="test-button">Click</button></ic-tooltip>`,
      });

      page.rootInstance.dialogOverflow = true;
      await page.waitForChanges();

      await page.rootInstance.getTooltipTranslate({
        left: 0,
        right: 40,
        top: 100,
        bottom: 132,
      });
      await page.waitForChanges();

      expect(page.root).toMatchSnapshot();
      expect(page.root.placement).toBe("right");
    });
  });
});
