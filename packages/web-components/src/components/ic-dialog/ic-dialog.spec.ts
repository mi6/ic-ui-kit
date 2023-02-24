import { newSpecPage } from "@stencil/core/testing";
import { Dialog } from "./ic-dialog";

describe("ic-dialog component", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading" buttons="false"></ic-dialog>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a label", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading" label="Dialog label" buttons="false"></ic-dialog>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with slotted content", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading" buttons="false">Dialog content</ic-dialog>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as medium size", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading" size="medium" buttons="false"></ic-dialog>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as large size", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading" size="large" buttons="false"></ic-dialog>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a single default button", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [
      { label: "Confirm", onclick: "this.icDialogConfirm()" },
    ];

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render with two default buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with three default buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [
      { label: "Cancel", onclick: "this.hideDialog()" },
      { label: "Options", onclick: "alert('Options...')" },
      { label: "Confirm", onclick: "this.icDialogConfirm()" },
    ];

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render with no more than three default buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [
      { label: "Cancel", onclick: "this.hideDialog()" },
      { label: "Options", onclick: "alert('Options...')" },
      { label: "Confirm", onclick: "this.icDialogConfirm()" },
      { label: "Extra", onclick: "alert('Extra button')" },
    ];

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a destructive default button", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: '<ic-dialog heading="Dialog heading test" destructive="true"></ic-dialog>',
    });

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [
      { label: "Confirm", onclick: "this.icDialogConfirm()" },
    ];

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render with an alert", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading" status="neutral" alert-heading="Alert heading" alert-message="Alert message" buttons="false"></ic-dialog>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with slotted controls", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading"><ic-button variant="primary" onclick="alert('Confirmed!')" slot="interaction-controls">Confirm</ic-button></ic-dialog>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should display with the showDialog method", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    expect(page.root).not.toBeNull;

    const dialog = document.querySelector("ic-dialog");

    expect(dialog.classList.contains("hidden")).toBeTruthy;

    await dialog.showDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeFalsy;
  });

  it("should hide with the hideDialog method", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    expect(page.root).not.toBeNull;

    const dialog = document.querySelector("ic-dialog");

    expect(dialog.classList.contains("hidden")).toBeTruthy;

    await dialog.showDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeFalsy;

    await dialog.hideDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;
  });

  it("should hide when the escape key is pressed", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    expect(page.root).not.toBeNull;

    const dialog = document.querySelector("ic-dialog");

    expect(dialog.classList.contains("hidden")).toBeTruthy;

    await dialog.showDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeFalsy;

    const event = new KeyboardEvent("keydown", { key: "Escape" });

    await page.rootInstance.handleKeyboard(event);

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;
  });

  it("should hide when something besides the dialog is clicked", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    expect(page.root).not.toBeNull;

    const dialog = document.querySelector("ic-dialog");

    expect(dialog.classList.contains("hidden")).toBeTruthy;

    await dialog.showDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeFalsy;

    const event = new Event("click");

    await page.rootInstance.handleClick(event);

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;
  });

  it("should hide when the close button is clicked", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    expect(page.root).not.toBeNull;

    const dialog = document.querySelector("ic-dialog");

    expect(dialog.classList.contains("hidden")).toBeTruthy;

    await dialog.showDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeFalsy;

    await page.root.shadowRoot.querySelector("ic-button").click();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;
  });

  it("should correctly pass onclick functions to a single default button", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    expect(page.root).not.toBeNull;

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [{ label: "Confirm", onclick: "this.hideDialog()" }];

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;

    await dialog.showDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeFalsy;

    await page.root.shadowRoot.querySelectorAll("ic-button")[1].click();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;
  });

  it("should correctly pass onclick functions to two default buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    expect(page.root).not.toBeNull;

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [
      { label: "Close", onclick: "this.hideDialog()" },
      { label: "Confirm", onclick: "this.hideDialog()" },
    ];

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;

    await dialog.showDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeFalsy;

    await page.root.shadowRoot.querySelectorAll("ic-button")[1].click();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;

    await dialog.showDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeFalsy;

    await page.root.shadowRoot.querySelectorAll("ic-button")[2].click();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;
  });

  it("should correctly pass onclick functions to three default buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    expect(page.root).not.toBeNull;

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [
      { label: "Cancel", onclick: "this.hideDialog()" },
      { label: "Options", onclick: "this.hideDialog()" },
      { label: "Confirm", onclick: "this.hideDialog()" },
    ];

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;

    await dialog.showDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeFalsy;

    await page.root.shadowRoot.querySelectorAll("ic-button")[1].click();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;

    await dialog.showDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeFalsy;

    await page.root.shadowRoot.querySelectorAll("ic-button")[2].click();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;

    await dialog.showDialog();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeFalsy;

    await page.root.shadowRoot.querySelectorAll("ic-button")[3].click();

    await page.waitForChanges();

    expect(dialog.classList.contains("hidden")).toBeTruthy;
  });

  it("should switch focus with tab", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    expect(page.root).not.toBeNull;

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [{ label: "Confirm", onclick: "this.hideDialog()" }];

    await page.waitForChanges();

    await dialog.showDialog();

    await page.waitForChanges();

    await page.rootInstance.getInteractiveElements();

    await page.rootInstance.setInitialFocus();

    await page.rootInstance.getFocusedElementIndex();

    await page.waitForChanges();

    expect(page.rootInstance.focusedElementIndex).toEqual(0);

    const event = new KeyboardEvent("keydown", { key: "Tab" });

    page.rootInstance.handleKeyboard(event);

    await page.waitForChanges();

    expect(page.rootInstance.focusedElementIndex).toEqual(1);
  });

  it("should switch focus with shift tab", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    expect(page.root).not.toBeNull;

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [{ label: "Confirm", onclick: "this.hideDialog()" }];

    await page.waitForChanges();

    await dialog.showDialog();

    await page.waitForChanges();

    await page.rootInstance.getInteractiveElements();

    await page.rootInstance.setInitialFocus();

    await page.rootInstance.getFocusedElementIndex();

    await page.waitForChanges();

    expect(page.rootInstance.focusedElementIndex).toEqual(0);

    const event = new KeyboardEvent("keydown", { key: "Tab", shiftKey: true });

    page.rootInstance.handleKeyboard(event);

    await page.waitForChanges();

    expect(page.rootInstance.focusedElementIndex).toEqual(1);
  });

  it("should set focus on slotted elements", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading"><ic-button variant="primary" onclick="alert('Confirmed!')" id="focus" slot="interaction-controls">Confirm</ic-button></ic-dialog>`,
    });

    const dialog = document.querySelector("ic-dialog");

    await dialog.showDialog();

    await page.waitForChanges();

    page.rootInstance.getInteractiveElements();

    page.rootInstance.setInitialFocus();

    page.rootInstance.getFocusedElementIndex();

    expect(page.rootInstance.focusedElementIndex).toBe(0);
  });
});
