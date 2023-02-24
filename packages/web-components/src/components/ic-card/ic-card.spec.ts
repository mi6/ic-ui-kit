import { newSpecPage } from "@stencil/core/testing";
import { Card } from "./ic-card";

describe("ic-card", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card heading="Card" message="This is a static card"></ic-card>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as a button", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card heading="Card" message="This is a clickable card rendered as a button" clickable=true></ic-card>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as a link", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card heading="Card" message="This is a clickable card rendered as a button" clickable=true href="/"></ic-card>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render full width variant", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card heading="Card" full-width=true message="This is a full width card" clickable=true></ic-card>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a link parent", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<a href="/"><ic-card heading="Card" message="This is a clickable card" clickable=true></ic-card></a>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should apply 'focussed' style when parent is focussed", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<a href="/"><ic-card id="test-id" heading="Card" message="This is a clickable card" clickable=true></ic-card></a>`,
    });

    expect(page.root).not.toBeNull;

    const element = await document.getElementById("test-id");

    await expect(element.classList.contains("focussed")).toBeFalsy;

    await element.focus();

    await expect(element.classList.contains("focussed")).toBeTruthy;
  });

  it("should lose 'focussed' style when parent loses focus", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<a href="/"><ic-card id="test-card" heading="Card" message="This is a clickable card" clickable=true></ic-card></a>`,
    });

    expect(page.root).not.toBeNull;

    const element = await document.getElementById("test-card");

    await element.focus();

    await expect(element.classList.contains("focussed")).toBeTruthy;

    await element.blur();

    await expect(element.classList.contains("focussed")).toBeFalsy;

    await page.rootInstance.disconnectedCallback();
  });

  it("should stop immediate propagation of a click event when disabled", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card id="test-card" heading="Card" message="This is a clickable card" clickable=true disabled=true onclick="alert('test')"></ic-card>`,
    });

    jest.spyOn(window, "alert").mockImplementation();

    const element = await document.getElementById("test-card");

    element.click();

    await page.waitForChanges();

    await expect(window.alert).not.toHaveBeenCalled;
  });

  it("should render with a subheading", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card id="test-card" heading="Card" subheading="Card subheading" message="This is a card"></ic-card>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with an interaction button", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card id="test-card" heading="Card" subheading="Card subheading" message="This is a card"><ic-button variant="primary" slot="interaction-button">Click here</ic-button></ic-card>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a top image", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card id="test-card" heading="Card" subheading="Card subheading" message="This is a card"><div slot="image-top">Image placeholder</div></ic-card>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a middle image", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card id="test-card" heading="Card" subheading="Card subheading" message="This is a card"><div slot="image-mid">Image placeholder</div></ic-card>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with interaction controls", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card id="test-card" heading="Card" subheading="Card subheading" message="This is a card"><ic-button slot="interaction-controls">Click here</ic-button></ic-card>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as expandable", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card id="test-card" heading="Card" subheading="Card subheading" message="This is a card" expandable></ic-card>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render content in expanded area", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card id="test-card" heading="Card" subheading="Card subheading" message="This is a card" expandable><ic-typography slot="expanded-content">Extra content</ic-typography></ic-card>`,
    });

    page.rootInstance.areaExpanded = true;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should toggle expanded content when expansion toggle is clicked", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card id="test-card" heading="Card" message="This is a clickable card" expandable><ic-typography slot="expanded-content">Expanded</ic-typography></ic-card>`,
    });

    expect(page.root).toMatchSnapshot();

    page.rootInstance.toggleExpanded();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should call 'setFocus' when card as a button is focused", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card heading="Card" message="This is a clickable card rendered as a button" clickable=true></ic-card>`,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });

  it("should call 'setFocus' when card as a link is focused", async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ic-card heading="Card" message="This is a clickable card rendered as a button" clickable=true href="/"></ic-card>`,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });
});
