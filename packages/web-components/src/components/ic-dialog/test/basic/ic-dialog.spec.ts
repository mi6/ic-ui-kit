import { SpecPage, newSpecPage } from "@stencil/core/testing";
import { Dialog } from "../../ic-dialog";
import {
  waitForTimeout,
  testKeyboardEvent as keyboardEvent,
} from "../../../../testspec.setup";
import { Button } from "../../../ic-button/ic-button";
import { TextField } from "../../../ic-text-field/ic-text-field";
import { AccordionGroup } from "../../../ic-accordion-group/ic-accordion-group";
import { Accordion } from "../../../ic-accordion/ic-accordion";

const DIALOG_DELAY_MS = 100;

const setupDialogMethods = (page: SpecPage) => {
  page.rootInstance.dialogEl.showModal = jest.fn(function mock(
    this: HTMLDialogElement
  ) {
    this.open = true;
  });

  page.rootInstance.dialogEl.show = jest.fn(function mock(
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

  it("should render with two default buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading"></ic-dialog>',
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should display with the open prop", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogOpened", eventSpy);

    dialog.open = true;

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(eventSpy).toHaveBeenCalled();

    expect(page.rootInstance.dialogRendered).toBe(true);
  });

  it("should hide with the open prop", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    expect(page.rootInstance.dialogRendered).toBe(false);

    dialog.open = true;

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogClosed", eventSpy);

    dialog.open = false;

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

    dialog.open = true;

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

    dialog.open = true;

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

    dialog.open = true;

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

    dialog.open = true;

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

    dialog.open = true;

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

    dialog.open = true;

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

    dialog.open = true;

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

    dialog.open = true;

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

    dialog.open = true;

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

    dialog.open = true;

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    page.win.document.dispatchEvent(
      new KeyboardEvent("keydown", keyboardEvent("Tab"))
    );
    await page.waitForChanges();

    expect(page.rootInstance.dialogRendered).toBe(true);
  });

  it("should render with an accordion group as first focussable element", async () => {
    const page = await newSpecPage({
      components: [Dialog, AccordionGroup, Accordion, Button],
      html: `<ic-dialog heading="Dialog heading">
        <ic-accordion-group label="Test heading">
          <ic-accordion>
            <ic-typography variant="body" >
              This is an example of the main body text.
            </ic-typography>
          </ic-accordion>
        </ic-accordion-group>
        <ic-button>Click Me</ic-button>
      </ic-dialog>`,
    });

    setupDialogMethods(page);
    const dialog = document.querySelector("ic-dialog");

    dialog.open = true;

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.interactiveElementList[1].nodeName).toBe(
      "IC-ACCORDION-GROUP"
    );

    page.win.document.dispatchEvent(
      new KeyboardEvent("keydown", keyboardEvent("Tab"))
    );
    await page.waitForChanges();

    expect(page.rootInstance.focusedElementIndex).toBe(1);
  });

  it("should render with an accordion as first focussable element", async () => {
    const page = await newSpecPage({
      components: [Dialog, Accordion, Button],
      html: `<ic-dialog heading="Dialog heading">
        <ic-accordion>
          <ic-typography variant="body" >
            This is an example of the main body text.
          </ic-typography>
        </ic-accordion>
        <ic-button>Click Me</ic-button>
      </ic-dialog>`,
    });

    setupDialogMethods(page);
    const dialog = document.querySelector("ic-dialog");

    dialog.open = true;

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.interactiveElementList[1].nodeName).toBe(
      "IC-ACCORDION"
    );

    page.win.document.dispatchEvent(
      new KeyboardEvent("keydown", keyboardEvent("Tab"))
    );
    await page.waitForChanges();

    expect(page.rootInstance.focusedElementIndex).toBe(1);
  });

  it("should render with the close button", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog with close button test"></ic-dialog>',
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should render without the close button", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog hide close button test" hide-close-button="true"></ic-dialog>',
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should call this.getInteractiveElements() when slot content changes", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading" disable-height-constraint="true"></ic-dialog>',
    });

    const contentAreaSlot = document
      .querySelector("ic-dialog")
      .shadowRoot.querySelector(".content-area slot");

    jest
      .spyOn(page.rootInstance, "getInteractiveElements")
      .mockImplementation();

    await page.rootInstance.refreshInteractiveElementsOnSlotChange();

    contentAreaSlot.dispatchEvent(new Event("slotchange"));

    expect(page.rootInstance.getInteractiveElements).toBeCalledTimes(1);
  });

  it("should call dialog.show() disableHeightConstraint is set and open is true", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: '<ic-dialog heading="Dialog heading" disable-height-constraint="true"></ic-dialog>',
    });

    setupDialogMethods(page);

    const dialog = document.querySelector("ic-dialog");

    await page.waitForChanges();

    expect(page.rootInstance.dialogRendered).toBe(false);

    dialog.open = true;

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogEl.show).toBeCalled();
  });
});

it("should render as large size and disableWidthConstraint is set", async () => {
  const page = await newSpecPage({
    components: [Dialog, Button],
    html: `<ic-dialog heading="Dialog heading" size="large" disable-width-constraint="true" buttons="false"></ic-dialog>`,
  });

  setupDialogMethods(page);

  expect(page.root).toMatchSnapshot();
});
