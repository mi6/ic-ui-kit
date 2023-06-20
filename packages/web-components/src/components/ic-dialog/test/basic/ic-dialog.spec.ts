import { SpecPage, newSpecPage } from "@stencil/core/testing";
import { Dialog } from "../../ic-dialog";
import {
  waitForTimeout,
  testKeyboardEvent as keyboardEvent,
} from "../../../../testspec.setup";
import { Button } from "../../../ic-button/ic-button";
import { TextField } from "../../../ic-text-field/ic-text-field";

const DIALOG_DELAY_MS = 100;

const setupDialogMethods = (page: SpecPage) => {
  page.rootInstance.dialogEl.showModal = jest.fn(function mock(
    this: HTMLDialogElement
  ) {
    this.open = true;
  });

  page.rootInstance.dialogEl.close = jest.fn(function mock(
    this: HTMLDialogElement
  ) {
    this.open = false;
  });
};

describe("ic-dialog component", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading" buttons="false"></ic-dialog>`,
    });

    setupDialogMethods(page);
    expect(page.root).toMatchSnapshot();
  });

  it("should render with a label", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading" label="Dialog label" buttons="false"></ic-dialog>`,
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should render with no buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading" buttons="false">Dialog content</ic-dialog>`,
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should render with slotted content", async () => {
    const page = await newSpecPage({
      components: [Dialog, TextField, Button],
      html: `<ic-dialog heading="Dialog heading">
        <ic-text-field label="What is your favourite coffee?">
        </ic-text-field>
        <ic-button>Click Me</ic-button>
      </ic-dialog>`,
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should render as medium size", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading" size="medium" buttons="false"></ic-dialog>`,
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should render as large size", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading" size="large" buttons="false"></ic-dialog>`,
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a single default button", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [
      { label: "Confirm", onclick: "this.icDialogConfirm()" },
    ];

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render with two default buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should render with three default buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    setupDialogMethods(page);

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
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    setupDialogMethods(page);

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
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading test" destructive="true"></ic-dialog>',
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [
      { label: "Confirm", onclick: "this.icDialogConfirm()" },
    ];

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render with an alert", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading" status="neutral" alert-heading="Alert heading" alert-message="Alert message" buttons="false"></ic-dialog>`,
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should display with the showDialog method", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogOpened", eventSpy);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(eventSpy).toHaveBeenCalled();

    expect(page.rootInstance.dialogRendered).toBe(true);
  });

  it("should hide with the hideDialog method", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogClosed", eventSpy);

    await dialog.hideDialog();

    await page.waitForChanges();
    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(eventSpy).toHaveBeenCalled();

    expect(page.rootInstance.dialogRendered).toBe(false);
  });

  it("should test icDialogCancelled event emitted", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogCancelled", eventSpy);

    page.root.shadowRoot.querySelectorAll("ic-button")[1].click();

    await page.waitForChanges();
    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(eventSpy).toHaveBeenCalled();
  });

  it("should test icDialogConfirmed event emitted", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogConfirmed", eventSpy);

    page.root.shadowRoot.querySelectorAll("ic-button")[2].click();

    await page.waitForChanges();
    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(eventSpy).toHaveBeenCalled();
  });

  it("should test cancelDialog method", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogCancelled", eventSpy);

    await dialog.cancelDialog();

    await page.waitForChanges();
    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(eventSpy).toHaveBeenCalled();

    expect(page.rootInstance.dialogRendered).toBe(false);
  });

  it("should test confirmDialog method", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogConfirmed", eventSpy);

    await dialog.confirmDialog();

    await page.waitForChanges();
    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(eventSpy).toHaveBeenCalled();

    expect(page.rootInstance.dialogRendered).toBe(true);
  });

  it("should render with slotted controls", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading"><ic-button variant="primary" onclick="alert('Confirmed!')" slot="dialog-controls">Confirm</ic-button></ic-dialog>`,
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.root).toMatchSnapshot();
  });

  it("should hide when the escape key is pressed", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");
    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.win.document.dispatchEvent(
      new KeyboardEvent("keydown", keyboardEvent("Escape"))
    );

    await page.waitForChanges();
    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(false);
  });

  it("should hide when something besides the dialog is clicked", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root.dispatchEvent(
      new window.window.MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        clientX: 10,
        clientY: 10,
      })
    );

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(false);
  });

  it("should not hide when close-on-backdrop-click false", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading" close-on-backdrop-click="false"></ic-dialog>`,
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root.dispatchEvent(
      new window.window.MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        clientX: 10,
        clientY: 10,
      })
    );

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);
  });

  it("should hide when the close button is clicked", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root.shadowRoot.querySelector("ic-button").click();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(false);
  });

  it("should correctly pass onclick functions to a single default button", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [{ label: "Confirm", onclick: "this.hideDialog()" }];

    await page.waitForChanges();

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root.shadowRoot.querySelectorAll("ic-button")[1].click();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(false);
  });

  it("should trigger private focusNextInteractiveElement method when tab pressed", async () => {
    const page = await newSpecPage({
      components: [Dialog, TextField, Button],
      html: `<ic-dialog heading="Dialog heading">
        <ic-text-field label="What is your favourite coffee?">
        </ic-text-field>
        <ic-button>Click Me</ic-button>
      </ic-dialog>`,
    });

    setupDialogMethods(page);
    const dialog = document.querySelector("ic-dialog");

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    page.win.document.dispatchEvent(
      new KeyboardEvent("keydown", keyboardEvent("Tab"))
    );
    await page.waitForChanges();

    expect(page.rootInstance.dialogRendered).toBe(true);
  });

  it("should set appropriate data-overflow attribute", async () => {
    const page = await newSpecPage({
      components: [Dialog, TextField, Button],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    setupDialogMethods(page);
    const dialog = document.querySelector("ic-dialog");

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    page.rootInstance.dialogEl.clientHeight = 100;
    page.rootInstance.dialogEl.scrollHeight = 100;

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    page.rootInstance.resizeObserverCallback();

    expect(page.rootInstance.el.getAttribute("data-overflow")).toBe("false");

    await dialog.hideDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    page.rootInstance.dialogEl.clientHeight = 50;
    page.rootInstance.dialogEl.scrollHeight = 100;

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    page.rootInstance.resizeObserverCallback();

    expect(page.rootInstance.el.getAttribute("data-overflow")).toBe("true");
  });

  it("should correctly pass onclick functions to two default buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [
      { label: "Close", onclick: "this.hideDialog()" },
      { label: "Confirm", onclick: "this.hideDialog()" },
    ];

    await page.waitForChanges();

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root.shadowRoot.querySelectorAll("ic-button")[1].click();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root.shadowRoot.querySelectorAll("ic-button")[2].click();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(false);
  });

  it("should correctly pass onclick functions to three default buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    dialog.buttonProps = [
      { label: "Cancel", onclick: "this.hideDialog()" },
      { label: "Options", onclick: "this.hideDialog()" },
      { label: "Confirm", onclick: "this.hideDialog()" },
    ];

    await page.waitForChanges();

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root.shadowRoot.querySelectorAll("ic-button")[1].click();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root.shadowRoot.querySelectorAll("ic-button")[2].click();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(false);

    await dialog.showDialog();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root.shadowRoot.querySelectorAll("ic-button")[3].click();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(false);
  });
});
