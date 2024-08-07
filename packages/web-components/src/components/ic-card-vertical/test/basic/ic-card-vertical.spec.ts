import { newSpecPage } from "@stencil/core/testing";
import { CardVertical } from "../../ic-card-vertical";

describe("ic-card-vertical", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical heading="Card" message="This is a static card"></ic-card-vertical>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as a button", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical heading="Card" message="This is a clickable card rendered as a button" clickable=true></ic-card-vertical>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as a link", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical heading="Card" message="This is a clickable card rendered as a button" clickable=true href="/"></ic-card-vertical>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render full width variant", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical heading="Card" full-width=true message="This is a full width card" clickable=true></ic-card-vertical>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a link parent", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<a href="/"><ic-card-vertical heading="Card" message="This is a clickable card" clickable=true></ic-card-vertical></a>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should apply 'focussed' style when parent is focussed", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<a href="/"><ic-card-vertical id="test-id" heading="Card" message="This is a clickable card" clickable=true></ic-card-vertical></a>`,
    });

    expect(page.root).not.toBeNull;

    const element = await document.getElementById("test-id");

    await expect(element.classList.contains("focussed")).toBeFalsy;

    await element.focus();

    await expect(element.classList.contains("focussed")).toBeTruthy;
  });

  it("should lose 'focussed' style when parent loses focus", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<a href="/"><ic-card-vertical id="test-card" heading="Card" message="This is a clickable card" clickable=true></ic-card-vertical></a>`,
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
      components: [CardVertical],
      html: `<ic-card-vertical id="test-card" heading="Card" message="This is a clickable card" clickable=true disabled=true onclick="alert('test')"></ic-card-vertical>`,
    });

    jest.spyOn(window, "alert").mockImplementation();

    const element = await document.getElementById("test-card");

    element.click();

    await page.waitForChanges();

    await expect(window.alert).not.toHaveBeenCalled;
  });

  it("should render with a subheading", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical id="test-card" heading="Card" subheading="Card subheading" message="This is a card"></ic-card-vertical>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with an interaction button", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical id="test-card" heading="Card" subheading="Card subheading" message="This is a card"><ic-button variant="primary" slot="interaction-button">Click here</ic-button></ic-card-vertical>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a top image", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical id="test-card" heading="Card" subheading="Card subheading" message="This is a card"><div slot="image-top">Image placeholder</div></ic-card-vertical>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a middle image", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical id="test-card" heading="Card" subheading="Card subheading" message="This is a card"><div slot="image-mid">Image placeholder</div></ic-card-vertical>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with interaction controls", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical id="test-card" heading="Card" subheading="Card subheading" message="This is a card"><ic-button slot="interaction-controls">Click here</ic-button></ic-card-vertical>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as expandable", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical id="test-card" heading="Card" subheading="Card subheading" message="This is a card" expandable></ic-card-vertical>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render content in expanded area", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical id="test-card" heading="Card" subheading="Card subheading" message="This is a card" expandable><ic-typography slot="expanded-content">Extra content</ic-typography></ic-card-vertical>`,
    });

    page.rootInstance.areaExpanded = true;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should toggle expanded content when expansion toggle is clicked", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical id="test-card" heading="Card" message="This is a clickable card" expandable><ic-typography slot="expanded-content">Expanded</ic-typography></ic-card-vertical>`,
    });

    expect(page.root).toMatchSnapshot();

    page.rootInstance.toggleExpanded();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should call 'setFocus' when card as a button is focused", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical heading="Card" message="This is a clickable card rendered as a button" clickable=true></ic-card-vertical>`,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });

  it("should call 'setFocus' when card as a link is focused", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical heading="Card" message="This is a clickable card rendered as a button" clickable=true href="/"></ic-card-vertical>`,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });

  it("should test rendering slotted after initial render", async () => {
    const page = await newSpecPage({
      components: [CardVertical],
      html: `<ic-card-vertical heading="Card" message="This is a static card"></ic-card-vertical>`,
    });

    const icon = document.createElement("svg");
    icon.setAttribute("slot", "icon");

    const imageMid = document.createElement("svg");
    imageMid.setAttribute("slot", "image-mid");

    const imageTop = document.createElement("svg");
    imageTop.setAttribute("slot", "image-top");

    const button = document.createElement("button");
    button.setAttribute("slot", "interaction-button");

    page.rootInstance.hostMutationCallback([
      {
        type: "childList",
        addedNodes: [icon, imageMid, imageTop, button],
        removedNodes: [],
      },
    ]);
  });
});
