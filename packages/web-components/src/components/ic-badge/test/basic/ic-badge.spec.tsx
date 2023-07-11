import { newSpecPage } from "@stencil/core/testing";
import { Badge } from "../../ic-badge";
import { Button } from "../../../ic-button/ic-button";
import { Chip } from "../../../ic-chip/ic-chip";
import { Tab } from "../../../ic-tab/ic-tab";

describe("ic-badge", () => {
  it("should render with text slotted in a button", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" text-label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render with text slotted in a button"
    );
  });

  it("should render light variant", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="light" text-label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render light variant");
  });

  it("should render error variant", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="error" text-label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render error variant");
  });

  it("should render success variant", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="success" text-label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render success variant");
  });

  it("should render warning variant", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="warning" text-label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render warning variant");
  });
  it("should render info variant", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="info" text-label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render info variant");
  });

  it("should render custom variant with custom colour in hex", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="custom" text-label="1" custom-color="#F8C8DC"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render custom variant with custom colour in hex"
    );
  });

  it("should render custom variant with custom colour in rgb", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="custom" text-label="1" custom-color="rgb(248,200,220)"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render custom variant with custom colour in rgb"
    );
  });

  it("should render with max number prop set", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" text-label="100" max-number="9"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render with max number prop set");
  });

  it("should render with accessible label", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" text-label="1" accessible-label="1 notification found"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render with accessible label");
  });

  it("should render size small", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" text-label="100" size="small"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render size small");
  });

  it("should render size large", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" text-label="100" size="large"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render size large");
  });

  it("should render type dot", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" type="dot"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render type dot");
  });

  it("should render type icon", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" type="icon">
            <svg slot='badge-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
            </ic-badge></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render type icon");
  });

  it("should render slotted in a chip", async () => {
    const page = await newSpecPage({
      components: [Chip, Badge],
      html: `<ic-chip label="Badge"><ic-badge slot="badge" text-label="1" position="near"/></ic-chip>`,
    });

    expect(page.root).toMatchSnapshot("should render slotted in a chip");
  });

  it("should render slotted in a tab", async () => {
    const page = await newSpecPage({
      components: [Tab, Badge],
      html: `<ic-tab>Tab<ic-badge slot="badge" text-label="1" position="inline"/></ic-tab>`,
    });

    expect(page.root).toMatchSnapshot("should render slotted in a tab");
  });

  it("should hide and show the badge using methods", async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<ic-button>Button<ic-badge slot="badge" text-label="1"/></ic-button>`,
    });

    const badge = document.querySelector("ic-badge");

    expect(page.rootInstance.visible).toBe(true);

    await badge.hideBadge();
    await page.waitForChanges();

    expect(page.rootInstance.visible).toBe(false);

    await badge.showBadge();
    await page.waitForChanges();

    expect(page.rootInstance.visible).toBe(true);
  });

  it("should set the correct badge colour", async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="custom" text-label="1" custom-color="#F8C8DC"/></ic-button>`,
    });

    await page.rootInstance.setBadgeColour();

    expect(page.rootInstance.customColorRGBA).toEqual({
      a: 1,
      b: 220,
      g: 200,
      r: 248,
    });
  });

  it("should set the correct foreground colour", async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="custom" text-label="1" custom-color="#F8C8DC"/></ic-button>`,
    });

    await page.rootInstance.getBadgeForeground();

    expect(page.rootInstance.foregroundColour).toBe("dark");
  });

  it("should set the correct text label when max number is set", async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<ic-button>Button<ic-badge slot="badge" text-label="100" max-number="9"/></ic-button>`,
    });

    expect(page.rootInstance.getTextLabel()).toBe("9+");
  });
});
