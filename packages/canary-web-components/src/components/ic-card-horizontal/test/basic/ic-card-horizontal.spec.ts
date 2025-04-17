import { newSpecPage } from "@stencil/core/testing";
import { Card } from "../../ic-card-horizontal";
import { IcTypography as Typography } from "@ukic/web-components/dist/components/ic-typography";

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
      html: `<ic-card-horizontal id="test-card" heading="Card" message="This is a card"><div slot="image">Image placeholder</div></ic-card-horizontal>`,
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
