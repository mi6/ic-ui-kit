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
});
