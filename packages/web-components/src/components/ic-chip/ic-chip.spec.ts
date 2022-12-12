import { newSpecPage } from "@stencil/core/testing";
import { Chip } from "./ic-chip";

describe("ic-chip component renders label", () => {
  it("should render static", async () => {
    const page = await newSpecPage({
      components: [Chip],
      html: `<ic-chip label="Label">
            <svg slot="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="currentColor"/>
</svg>
            </ic-chip>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render dismissible", async () => {
    const page = await newSpecPage({
      components: [Chip],
      html: `<ic-chip label="Label" dismissible="true">
            <svg slot="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="currentColor"/>
</svg>
            </ic-chip>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [Chip],
      html: `<ic-chip label="Label" dismissible="true" disabled="true">
            <svg slot="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="currentColor"/>
</svg>
            </ic-chip>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render small", async () => {
    const page = await newSpecPage({
      components: [Chip],
      html: `<ic-chip label="Label" dismissible="true" size="small">
              <svg slot="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="currentColor"/>
  </svg>
              </ic-chip>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should apply 'hovered' style when cursor is on dismiss button", async () => {
    const page = await newSpecPage({
      components: [Chip],
      html: `<ic-chip id="test-id" label="Label" dismissible="true"></ic-chip>`,
    });

    expect(page.root).not.toBeNull;

    const chip = await document.getElementById("test-id");

    const dismissButton = page.root.shadowRoot.querySelector("button");

    await expect(chip.classList.contains("hovered")).toBeFalsy;

    const event = new Event("mouseenter", {
      bubbles: true,
      cancelable: true,
    });

    dismissButton.dispatchEvent(event);
    await page.waitForChanges();

    await expect(chip.classList.contains("hovered")).toBeTruthy;
  });

  it("should lose 'hovered' style when cursor moves off dismiss button", async () => {
    const page = await newSpecPage({
      components: [Chip],
      html: `<ic-chip id="test-id" label="Label" dismissible="true"></ic-chip>`,
    });

    expect(page.root).not.toBeNull;

    const chip = await document.getElementById("test-id");

    const dismissButton = page.root.shadowRoot.querySelector("button");

    const enterEvent = new Event("mouseenter", {
      bubbles: true,
      cancelable: true,
    });

    dismissButton.dispatchEvent(enterEvent);
    await page.waitForChanges();

    await expect(chip.classList.contains("hovered")).toBeTruthy;

    const leaveEvent = new Event("mouseleave", {
      bubbles: true,
      cancelable: true,
    });

    dismissButton.dispatchEvent(leaveEvent);

    await expect(chip.classList.contains("hovered")).toBeFalsy;
  });

  it("should close on dismiss icon click", async () => {
    const page = await newSpecPage({
      components: [Chip],
      html: `<ic-chip label="This is dismissible" dismissible="true"></ic-chip>`,
    });

    let chip = await page.root.shadowRoot.querySelector("div");
    const dismissButton = await page.root.shadowRoot.querySelector("button");

    expect(chip).not.toBeNull();
    expect(dismissButton).not.toBeNull();

    await dismissButton.click();

    await page.waitForChanges();
    chip = await page.root.shadowRoot.querySelector("div");

    expect(chip).toBeNull();
  });
});
