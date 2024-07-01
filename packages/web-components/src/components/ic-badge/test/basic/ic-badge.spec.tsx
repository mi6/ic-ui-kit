import { newSpecPage } from "@stencil/core/testing";
import { Badge } from "../../ic-badge";
import { Button } from "../../../ic-button/ic-button";
import { Chip } from "../../../ic-chip/ic-chip";
import { Tab } from "../../../ic-tab/ic-tab";
import { Card } from "../../../ic-card/ic-card";
import { NavigationButton } from "../../../ic-navigation-button/ic-navigation-button";
import { NavigationItem } from "../../../ic-navigation-item/ic-navigation-item";

describe("ic-badge", () => {
  it("should render with text slotted in a button", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render with text slotted in a button"
    );
  });

  it("should render light variant", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="light" label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render light variant");
  });

  it("should render error variant", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="error" label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render error variant");
  });

  it("should render success variant", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="success" label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render success variant");
  });

  it("should render warning variant", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="warning" label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render warning variant");
  });
  it("should render info variant", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="info" label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render info variant");
  });

  it("should render custom variant with custom colour in hex", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="custom" label="1" custom-color="#F8C8DC"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render custom variant with custom colour in hex"
    );
  });

  it("should render custom variant with custom colour in rgb", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" variant="custom" label="1" custom-color="rgb(248,200,220)"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render custom variant with custom colour in rgb"
    );
  });

  it("should render with max number prop set", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" label="100" max-number="9"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render with max number prop set");
  });

  it("should render with accessible label", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" label="1" accessible-label="1 notification found"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render with accessible label");
  });

  it("should render size small", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" label="100" size="small"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render size small");
  });

  it("should render size large", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" label="100" size="large"/></ic-button>`,
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

  it("should render with visible false", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" visible="false" label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render with visible false");
  });

  it("should render slotted in a chip", async () => {
    const page = await newSpecPage({
      components: [Chip, Badge],
      html: `<ic-chip label="Badge"><ic-badge slot="badge" label="1" position="near"/></ic-chip>`,
    });

    expect(page.root).toMatchSnapshot("should render slotted in a chip");
  });

  it("should render slotted in a tab with aria-label set on badge", async () => {
    const page = await newSpecPage({
      components: [Tab, Badge],
      html: `<ic-tab>Tab<ic-badge slot="badge" label="1" position="inline"/></ic-tab>`,
    });

    expect(page.root).toMatchSnapshot("should render slotted in a tab");
  });

  it("should render slotted in a card with aria-label set on badge", async () => {
    const page = await newSpecPage({
      components: [Card, Badge],
      html: `<ic-card heading="Badge"><ic-badge slot="badge" label="1" position="near"/></ic-card>`,
    });

    expect(page.root).toMatchSnapshot("should render slotted in a card");
  });

  it("should render slotted in a navigation button", async () => {
    const page = await newSpecPage({
      components: [NavigationButton, Badge],
      html: `<ic-navigation-button
      label="Button One"
      slot="buttons"
      href="https://www.google.com"
      target="_blank"
      title="Google 1"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
        />
      </svg>
      <ic-badge
        label="1"
        slot="badge"
        position="near"
        variant="light"
      ></ic-badge>
    </ic-navigation-button>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render slotted in a navigation button"
    );
  });

  it("should render slotted in a navigation item", async () => {
    const page = await newSpecPage({
      components: [NavigationItem, Badge],
      html: `<ic-navigation-item label="Navigation" href="/">
      <ic-badge
        label="1"
        slot="badge"
        variant="light"
        position="far"
      ></ic-badge>
      <svg
        slot="icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
          fill="currentColor"
        />
      </svg>
    </ic-navigation-item>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render slotted in a navigation item"
    );
  });

  it("should hide and show the badge using visible prop", async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<ic-button>Button<ic-badge slot="badge" label="1"/></ic-button>`,
    });

    const badge = document.querySelector("ic-badge");

    expect(page.rootInstance.visible).toBe(true);

    badge.visible = false;
    await page.waitForChanges();

    expect(page.rootInstance.visible).toBe(false);

    badge.visible = true;
    await page.waitForChanges();

    expect(page.rootInstance.visible).toBe(true);
  });

  //To be removed when we remove show and hide methods
  it("should hide and show the badge using methods", async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<ic-button>Button<ic-badge slot="badge" label="1"/></ic-button>`,
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
      html: `<ic-button>Button<ic-badge slot="badge" variant="custom" label="1" custom-color="#F8C8DC"/></ic-button>`,
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
      html: `<ic-button>Button<ic-badge slot="badge" variant="custom" label="1" custom-color="#F8C8DC"/></ic-button>`,
    });

    await page.rootInstance.getBadgeForeground();

    expect(page.rootInstance.foregroundColour).toBe("dark");
  });

  it("should set the correct label when max number is set", async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<ic-button>Button<ic-badge slot="badge" label="100" max-number="9"/></ic-button>`,
    });

    expect(page.rootInstance.getLabel()).toBe("9+");
  });

  it("should render with id set", async () => {
    const page = await newSpecPage({
      components: [Button, Badge],
      html: `<ic-button>Button<ic-badge slot="badge" id="badge-1" label="1"/></ic-button>`,
    });

    expect(page.root).toMatchSnapshot("should render with id");
  });
});
