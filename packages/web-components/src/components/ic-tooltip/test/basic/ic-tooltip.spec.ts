import { newSpecPage } from "@stencil/core/testing";
import { waitForTimeout } from "../../../../testspec.setup";
import { Tooltip } from "../../ic-tooltip";
import { Typography } from "../../../ic-typography/ic-typography";

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

  it("should test dark theme", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip theme="dark" label="tooltip"</ic-tooltip>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should test light theme", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-tooltip theme="light" label="tooltip"</ic-tooltip>`,
    });

    expect(page.root).toMatchSnapshot();
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

  it("should log warning to console and not render if label hasn't been set", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button"><button id="test-button"></button></ic-tooltip>`,
    });
    jest.spyOn(console, "warn").mockImplementation();

    await page.rootInstance.displayTooltip(true, true);
    await page.waitForChanges();

    expect(page.rootInstance.toolTip.getAttribute("data-show")).toBeNull;
    expect(console.warn).toBeCalledWith(
      "Tooltip can't display without prop 'label' set"
    );
  });

  it("should watch for label updates", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button" label="tooltip"><button id="test-button">Click</button></ic-tooltip>`,
    });

    expect(page.rootInstance.label).toBe("tooltip");

    page.root?.setAttribute("label", "new tooltip");

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

  it("should render correctly when on a dialog", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip label="tooltip"></ic-tooltip>`,
    });

    const dialog = document.createElement("ic-dialog");
    const shadowRoot = dialog.attachShadow({ mode: "open" });
    const contentArea = document.createElement("div");
    contentArea.className = "content-area";
    shadowRoot.appendChild(contentArea);

    jest
      .spyOn(page.root as any, "getRootNode")
      .mockReturnValue({ host: { closest: () => dialog } });

    await page.rootInstance.componentDidLoad();
    expect(page.rootInstance.dialogContentArea).toBe(contentArea);

    await page.rootInstance.show(page.rootInstance.popperInstance);
    expect(page.root).toMatchSnapshot();
  });

  it("should truncate text and pass the maxLines value to ic-typography if maxLines prop has been set", async () => {
    const page = await newSpecPage({
      components: [Tooltip, Typography],
      html: `<ic-tooltip target="test-button" label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the max-lines property. The number of lines in the text is clamped to the number passed through the max-lines property." max-lines="2"><button id="test-button">Click</button></ic-tooltip>`,
    });

    expect(page.root).toMatchSnapshot();

    const typographyEl = page.root?.shadowRoot?.querySelector(
      "div > ic-typography"
    ) as HTMLIcTypographyElement;
    expect(typographyEl.maxLines).toEqual(2);
  });

  it("should no longer display when disableClick changed from false to true", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button" label="tooltip"><button id="test-button">Click</button></ic-tooltip>`,
    });

    jest.spyOn(page.rootInstance, "updateTooltipEvents").mockImplementation();

    page.root!.disableClick = true;

    await page.waitForChanges();

    expect(page.rootInstance.updateTooltipEvents).toHaveBeenCalled();
  });

  it("should no longer display when disableHover changed from false to true", async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<ic-tooltip target="test-button" label="tooltip"><button id="test-button">Click</button></ic-tooltip>`,
    });

    jest.spyOn(page.rootInstance, "updateTooltipEvents").mockImplementation();

    page.root!.disableHover = true;

    await page.waitForChanges();

    expect(page.rootInstance.updateTooltipEvents).toHaveBeenCalled();
  });
});
