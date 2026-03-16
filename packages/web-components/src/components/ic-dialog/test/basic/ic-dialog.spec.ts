import { SpecPage, newSpecPage } from "@stencil/core/testing";
import { Dialog } from "../../ic-dialog";
import {
  waitForTimeout,
  testKeyboardEvent as keyboardEvent,
} from "../../../../testspec.setup";
import * as helpers from "../../../../utils/helpers";
import { Button } from "../../../ic-button/ic-button";
import { TextField } from "../../../ic-text-field/ic-text-field";
import { AccordionGroup } from "../../../ic-accordion-group/ic-accordion-group";
import { Accordion } from "../../../ic-accordion/ic-accordion";
import { SearchBar } from "../../../ic-search-bar/ic-search-bar";
import { RadioGroup } from "../../../ic-radio-group/ic-radio-group";
import { RadioOption } from "../../../ic-radio-option/ic-radio-option";

const DIALOG_DELAY_MS = 200;

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
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading" hide-default-controls="true"></ic-dialog>`,
    });

    setupDialogMethods(page);
    expect(page.root).toMatchSnapshot();
  });

  it("should render with a label", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading" label="Dialog label" hide-default-controls="true"></ic-dialog>`,
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should render with no buttons", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading" hide-default-controls="true">Dialog content</ic-dialog>`,
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
      html: `<ic-dialog heading="Dialog heading" size="medium" hide-default-controls="true"></ic-dialog>`,
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should render as large size", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading" size="large" hide-default-controls="true"></ic-dialog>`,
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

    dialog?.setAttribute("open", "true");

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

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogClosed", eventSpy);

    dialog?.setAttribute("open", "false");

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

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogCancelled", eventSpy);

    page.root?.shadowRoot?.querySelectorAll("ic-button")[1].click();

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

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogConfirmed", eventSpy);

    page.root?.shadowRoot?.querySelectorAll("ic-button")[2].click();

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

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogCancelled", eventSpy);

    await dialog?.cancelDialog();

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

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icDialogConfirmed", eventSpy);

    await dialog?.confirmDialog();

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

    dialog?.setAttribute("open", "true");

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

    dialog?.setAttribute("open", "true");

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

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root?.dispatchEvent(
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

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root?.dispatchEvent(
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

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(true);

    page.root?.shadowRoot?.querySelector("ic-button")?.click();

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogRendered).toBe(false);
  });

  // helpers.ts coverage
  it("should not move focus if the focused element index is not found", async () => {
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

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    const focusElementResult = helpers.focusElement(
      0,
      5,
      page.rootInstance.interactiveElementList
    );

    expect(focusElementResult).toBeUndefined();
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
    const focusElementSpy = jest.spyOn(helpers, "focusElement");

    setupDialogMethods(page);
    const dialog = document.querySelector("ic-dialog");

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(focusElementSpy).toHaveBeenCalled();

    const returnValue = focusElementSpy.mock.results[0].value;

    expect(returnValue).toBeDefined();
    expect(
      page.rootInstance.interactiveElementList[
        returnValue.newFocusedElementIndex
      ].nodeName
    ).toBe("IC-ACCORDION-GROUP");
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
    const focusElementSpy = jest.spyOn(helpers, "focusElement");

    setupDialogMethods(page);
    const dialog = document.querySelector("ic-dialog");

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(focusElementSpy).toHaveBeenCalled();

    const returnValue = focusElementSpy.mock.results[0].value;

    expect(returnValue).toBeDefined();
    expect(
      page.rootInstance.interactiveElementList[
        returnValue.newFocusedElementIndex
      ].nodeName
    ).toBe("IC-ACCORDION");
  });

  it("should render with a ic-search-bar as first focussable element", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button, SearchBar],
      html: `<ic-dialog heading="Dialog heading">
        <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
        <ic-button>Click Me</ic-button>
      </ic-dialog>`,
    });
    const focusElementSpy = jest.spyOn(helpers, "focusElement");

    setupDialogMethods(page);
    const dialog = document.querySelector("ic-dialog");

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(focusElementSpy).toHaveBeenCalled();

    const returnValue = focusElementSpy.mock.results[0].value;

    expect(returnValue).toBeDefined();
    expect(
      page.rootInstance.interactiveElementList[
        returnValue.newFocusedElementIndex
      ].nodeName
    ).toBe("IC-SEARCH-BAR");
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
      ?.shadowRoot?.querySelector(".content-area slot");

    jest
      .spyOn(page.rootInstance, "getInteractiveElements")
      .mockImplementation();

    await helpers.refreshInteractiveElementsOnSlotChange(
      page.root?.shadowRoot?.querySelector("#dialog-content") || null,
      page.rootInstance.getInteractiveElements
    );

    contentAreaSlot?.dispatchEvent(new Event("slotchange"));

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

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(page.rootInstance.dialogEl.show).toBeCalled();
  });

  it("should render as large size and disableWidthConstraint is set", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading" size="large" disable-width-constraint="true" hide-default-controls="true"></ic-dialog>`,
    });

    setupDialogMethods(page);

    expect(page.root).toMatchSnapshot();
  });

  it("should set the height of the dialog correctly when the window is resized", async () => {
    const page = await newSpecPage({
      components: [Dialog, Button],
      html: `<ic-dialog heading="Dialog heading"></ic-dialog>`,
    });

    setupDialogMethods(page);

    page.rootInstance.dialogHeight = 0;
    page.rootInstance.dialogEl.clientHeight = 100;
    page.rootInstance.resizeObserverCallback();
    page.waitForChanges();

    expect(page.rootInstance.dialogHeight).toBe(100);
  });

  it("should focus last interactive element when focusLast is called", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading">
        <ic-button id="first">First</ic-button>
        <ic-button id="last">Last</ic-button>
      </ic-dialog>`,
    });

    setupDialogMethods(page);
    const dialog = document.querySelector("ic-dialog");
    dialog?.setAttribute("open", "true");

    await waitForTimeout(DIALOG_DELAY_MS);

    const interactiveElements = page.rootInstance.interactiveElementList;

    const lastEl = interactiveElements[interactiveElements.length - 1];
    console.log("Last element:", lastEl?.nodeName);

    const focusSpy = jest.spyOn(lastEl, "focus");

    page.rootInstance.focusLast();
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it("should focus first interactive element when focusFirst is called", async () => {
    const page = await newSpecPage({
      components: [Dialog],
      html: `<ic-dialog heading="Dialog heading">
        <ic-button id="first">First</ic-button>
        <ic-button id="last">Last</ic-button>
      </ic-dialog>`,
    });

    setupDialogMethods(page);
    const dialog = document.querySelector("ic-dialog");
    dialog?.setAttribute("open", "true");

    await waitForTimeout(DIALOG_DELAY_MS);

    const interactiveElements = page.rootInstance.interactiveElementList;

    const firstEl = interactiveElements[0];

    const focusSpy = jest.spyOn(firstEl, "focus");

    page.rootInstance.focusFirst();
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it("should skip focus over elements correctly", async () => {
    const page = await newSpecPage({
      components: [Dialog, TextField, Button, RadioGroup, RadioOption],
      html: `<ic-dialog heading="Dialog heading">
        <ic-radio-group label="This is a label" name="1">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
          >
          </ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            additional-field-display="dynamic"
            selected
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            >
            </ic-text-field>
          </ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
        <ic-button>Click Me</ic-button>
      </ic-dialog>`,
    });
    const focusElementSpy = jest.spyOn(helpers, "focusElement");

    setupDialogMethods(page);
    const dialog = document.querySelector("ic-dialog");

    dialog?.setAttribute("open", "true");

    await page.waitForChanges();

    //delay for setTimeout in code
    await waitForTimeout(DIALOG_DELAY_MS);

    expect(focusElementSpy).toHaveBeenCalledTimes(2);

    const returnValue = focusElementSpy.mock.results[0].value;

    expect(returnValue).toBeDefined();
    expect(
      page.rootInstance.interactiveElementList[
        returnValue.newFocusedElementIndex
      ].nodeName
    ).toBe("INPUT");

    // helpers.ts coverage
    const shouldSkipElementResult = helpers.shouldSkipElement(
      null as unknown as HTMLElement
    );

    expect(shouldSkipElementResult).toBe(true);
  });
});
