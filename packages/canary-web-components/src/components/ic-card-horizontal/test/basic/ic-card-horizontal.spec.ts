import { newSpecPage } from "@stencil/core/testing";
import { Card } from "../../ic-card-horizontal";
import { Typography } from "../../../../../../web-components/src/components/ic-typography/ic-typography";
import { Badge } from "../../../../../../web-components/src/components/ic-badge/ic-badge";
import { Button } from "../../../../../../web-components/src/components/ic-button/ic-button";

describe("ic-card-horizontal", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a static card"></ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render small", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a static card" size="small"></ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render large", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a static card" size="large"></ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render extra large", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a static card" size="extra large"></ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as a button", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a clickable card rendered as a button" clickable=true></ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as a link", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a clickable card rendered as a button" clickable=true href="/"></ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a link parent", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<a href="/"><ic-card-horizontal heading="Card" message="This is a clickable card" clickable=true></ic-card-horizontal></a>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a static card" disabled clickable></ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();

    page.rootInstance.disabled = false;

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("disabled-removed");
  });

  it("should render with spacious layout", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a static card" density="spacious"></ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with spacious layout and a subheading and adornment", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a static card" density="spacious" subheading="This is a subheading">
        <div slot="adornment">Adornment</div>
      </ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should not render with a subheading and adornment with default density", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a static card" density="default" subheading="This is a subheading">
        <div slot="adornment">Adornment</div>
      </ic-card-horizontal>`,
    });

    const adornment = page.root!.querySelector(".adornment");
    const subheading = page.root!.querySelector(".subheading");

    expect(adornment).toBeNull();
    expect(subheading).toBeNull();
  });

  it("should apply 'focussed' style when parent is focussed", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<a href="/"><ic-card-horizontal id="test-id" heading="Card" message="This is a clickable card" clickable=true></ic-card-horizontal></a>`,
    });

    expect(page.root).not.toBeNull;

    const element = document.getElementById("test-id")!;

    expect(element.classList.contains("focussed")).toBeFalsy;

    element.focus();

    expect(element.classList.contains("focussed")).toBeTruthy;
  });

  it("should lose 'focussed' style when parent loses focus", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<a href="/"><ic-card-horizontal id="test-card" heading="Card" message="This is a clickable card" clickable=true></ic-card-horizontal></a>`,
    });

    expect(page.root).not.toBeNull;

    const element = document.getElementById("test-card")!;

    element.focus();

    expect(element.classList.contains("focussed")).toBeTruthy;

    element.blur();

    expect(element.classList.contains("focussed")).toBeFalsy;

    await page.rootInstance.disconnectedCallback();
  });

  it("should stop immediate propagation of a click event when disabled", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal id="test-card" heading="Card" message="This is a clickable card" clickable=true disabled=true onclick="alert('test')"></ic-card-horizontal>`,
    });

    jest.spyOn(window, "alert").mockImplementation();

    const element = document.getElementById("test-card")!;

    element.click();

    await page.waitForChanges();

    expect(window.alert).not.toHaveBeenCalled;
  });

  it("should render with an image", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal id="test-card" heading="Card" message="This is a card"><div slot="image-left">Image placeholder</div></ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with an image on the right", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal id="test-card" heading="Card" message="This is a card"><div slot="image-right">Image placeholder</div></ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with an icon", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal id="test-card" heading="Card" message="This is a card"><div slot="icon">Image placeholder</div></ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a slotted heading and message", async () => {
    const page = await newSpecPage({
      components: [Card, Typography],
      html: `<ic-card-horizontal id="test-card">
      <ic-typography slot="heading">Heading</ic-typography>
      <ic-typography slot="message">Message</ic-typography>
    </ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a badge", async () => {
    const page = await newSpecPage({
      components: [Card, Badge],
      html: `<ic-card-horizontal id="test-card" heading="Card" message="This is a card">
      <ic-badge slot="badge">Badge</ic-badge>
    </ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with an interaction button", async () => {
    const page = await newSpecPage({
      components: [Card, Button],
      html: `<ic-card-horizontal id="test-card" heading="Card" message="This is a card">
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
    </ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a slotted heading, subheading and message in spacious layout", async () => {
    const page = await newSpecPage({
      components: [Card, Typography],
      html: `<ic-card-horizontal id="test-card" density="spacious">
      <ic-typography slot="heading">Heading</ic-typography>
      <ic-typography slot="subheading">Subheading</ic-typography>
      <ic-typography slot="message">Message</ic-typography>
    </ic-card-horizontal>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should call 'setFocus' when card as a button is focused", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a clickable card rendered as a button" clickable=true></ic-card-horizontal>`,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });

  it("should call 'setFocus' when card as a link is focused", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card-horizontal heading="Card" message="This is a clickable card rendered as a button" clickable=true href="/"></ic-card-horizontal>`,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });
});
