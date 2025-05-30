import { newSpecPage } from "@stencil/core/testing";
import { waitForTimeout } from "../../../../testspec.setup";
import { Button } from "../../../ic-button/ic-button";
import { Link } from "../../../ic-link/ic-link";
import { Toast } from "../../ic-toast";

describe("ic-toast component", () => {
  it("should render when heading is supplied", async () => {
    const page = await newSpecPage({
      components: [Toast],
      html: `<ic-toast heading="Heading"></ic-toast>`,
    });

    page.rootInstance.setVisible();
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render when a heading and message is supplied", async () => {
    const page = await newSpecPage({
      components: [Toast],
      html: `<ic-toast heading="Heading" message="toast message"></ic-toast>`,
    });

    page.rootInstance.setVisible();
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render a variant icon and banner when a variant is supplied", async () => {
    const page = await newSpecPage({
      components: [Toast],
      html: `<ic-toast heading="Heading" variant="success"></ic-toast>`,
    });

    page.rootInstance.setVisible();
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render a loading indicator instead of a dismiss button when dismissMode is automatic", async () => {
    const page = await newSpecPage({
      components: [Toast],
      html: `<ic-toast heading="Heading" dismiss-mode="automatic"></ic-toast>`,
    });

    page.rootInstance.setVisible();
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should display the toast when setVisible is ran", async () => {
    const page = await newSpecPage({
      components: [Toast, Button],
      html: `<ic-toast heading="Heading"></ic-toast>`,
    });

    expect(page.root?.classList.contains("ic-toast-hidden")).toBeTruthy();

    page.rootInstance.setVisible();
    await page.waitForChanges();
    expect(page.root?.classList.contains("ic-toast-hidden")).toBeFalsy();
  });

  it("should emit the icDismiss event when dismissed with by clicking the button", async () => {
    const page = await newSpecPage({
      components: [Toast, Button],
      html: `<ic-toast heading="Heading"></ic-toast>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icDismiss", callbackFn);
    page.rootInstance.setVisible();
    await page.waitForChanges();

    const dismissButton = page.root?.shadowRoot?.querySelector("ic-button");
    dismissButton?.click();
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should emit the icDismiss event when dismissed with by pressing Escape", async () => {
    const page = await newSpecPage({
      components: [Toast, Button],
      html: `<ic-toast heading="Heading"></ic-toast>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icDismiss", callbackFn);
    page.rootInstance.setVisible();
    await page.waitForChanges();

    const event = new KeyboardEvent("keydown", { key: "Escape" });
    page.rootInstance.handleKeyboard(event);
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should emit icDismiss after the timer expires when an auto dismiss toast is made visible", async () => {
    const page = await newSpecPage({
      components: [Toast],
      html: `<ic-toast heading="Heading" dismiss-mode="automatic"></ic-toast>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icDismiss", callbackFn);
    page.rootInstance.setVisible();
    await page.waitForChanges();
    expect(callbackFn).not.toHaveBeenCalled();

    await waitForTimeout(6000);
    expect(callbackFn).toHaveBeenCalled();
  });

  it("should pause timer when mouse is hovered over, and resume when mouse leaves", async () => {
    const page = await newSpecPage({
      components: [Toast],
      html: `<ic-toast heading="Heading" dismiss-mode="automatic" auto-dismiss-timeout="10000"></ic-toast>`,
    });

    const intervalCb = jest.spyOn(window, "setInterval");
    const clearCb = jest.spyOn(window, "clearInterval");

    page.rootInstance.setVisible();
    await page.waitForChanges();

    await waitForTimeout(3000);
    expect(intervalCb).toHaveBeenCalledTimes(1);

    page.rootInstance.handleTimer({ type: "mouseenter" });
    await page.waitForChanges();
    expect(clearCb).toHaveBeenCalled();

    page.rootInstance.handleTimer({ type: "mouseleave" });
    await page.waitForChanges();
    await waitForTimeout(1000);
    expect(intervalCb).toHaveBeenCalledTimes(2);
    page.setContent("");
  });

  it("should set isManual to true when toast is hovered over, and back to false when mouse leaves", async () => {
    const page = await newSpecPage({
      components: [Toast],
      html: `<ic-toast heading="Heading" dismiss-mode="automatic" auto-dismiss-timeout="10000"></ic-toast>`,
    });

    page.rootInstance.setVisible();
    await page.waitForChanges();

    page.rootInstance.handleTimer({ type: "mouseenter" });
    await page.waitForChanges();
    expect(page.rootInstance.isManual).toBeTruthy();

    page.rootInstance.handleTimer({ type: "mouseleave" });
    await page.waitForChanges();
    await waitForTimeout(1000);
    expect(page.rootInstance.isManual).toBeFalsy();
    page.setContent("");
  });

  it("should post a console error message if the message or header is too long", async () => {
    const longText =
      "lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor";
    const consoleCb = jest
      .spyOn(console, "error")
      .mockImplementation(jest.fn());
    await newSpecPage({
      components: [Toast],
      html: `<ic-toast heading="${longText}" message="${longText}"></ic-toast>`,
    });
    expect(consoleCb).toHaveBeenCalledTimes(1);
  });

  it("should only focus the two interactive elements in the manual toast when using tab", async () => {
    const page = await newSpecPage({
      components: [Toast, Button],
      html: `<ic-toast heading="Heading"><ic-button id="slottedButton" slot="action">Click me</ic-button></ic-toast>`,
    });
    const focusCallback = jest.spyOn(Button.prototype, "setFocus");

    page.rootInstance.setVisible();
    await page.waitForChanges();
    await waitForTimeout(300);
    expect(focusCallback).toHaveBeenCalledTimes(1);

    page.rootInstance.handleKeyboard({
      key: "Tab",
      shiftKey: false,
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(focusCallback).toHaveBeenCalledTimes(2);

    page.rootInstance.handleKeyboard({
      key: "Tab",
      shiftKey: false,
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(focusCallback).toHaveBeenCalledTimes(3);

    page.rootInstance.handleKeyboard({
      key: "Tab",
      shiftKey: false,
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(focusCallback).toHaveBeenCalledTimes(4);

    page.rootInstance.handleKeyboard({
      key: "Tab",
      shiftKey: true,
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(focusCallback).toHaveBeenCalledTimes(5);

    page.rootInstance.handleKeyboard({
      key: "Tab",
      shiftKey: true,
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(focusCallback).toHaveBeenCalledTimes(6);

    page.rootInstance.handleKeyboard({
      key: "Tab",
      shiftKey: true,
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(focusCallback).toHaveBeenCalledTimes(7);
  });

  it("should focus a link element that has been slotted into the action slot", async () => {
    const page = await newSpecPage({
      components: [Toast, Link],
      html: `<ic-toast heading="Heading"><ic-link href="/" slot="action">Text</ic-link></ic-toast>`,
    });
    const focusCallback = jest.spyOn(Link.prototype, "setFocus");

    page.rootInstance.setVisible();
    await page.waitForChanges();
    await waitForTimeout(300);
    expect(focusCallback).toHaveBeenCalledTimes(1);
  });

  it("should update the dialog's label if the prop neutralIconAriaLabel prop is provided", async () => {
    const page = await newSpecPage({
      components: [Toast],
      html: `<ic-toast variant="neutral" neutral-icon-aria-label="Hello World" heading="Heading"></ic-toast>`,
    });

    expect(page.root?.getAttribute("aria-label")).toBe("Hello World");
  });

  it("should focus the new dismiss button when an auto dismiss toast is tabbed to", async () => {
    const page = await newSpecPage({
      components: [Toast, Button],
      html: `<ic-toast heading="Heading" dismiss-mode="automatic" auto-dismiss-timeout="10000"></ic-toast>`,
    });

    page.rootInstance.setVisible();
    await page.waitForChanges();

    const dismissFocus = jest.spyOn(Button.prototype, "setFocus");

    page.rootInstance.handleKeyboard({
      key: "Tab",
      shiftKey: false,
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(page.rootInstance.focusInteractiveElement).toBeTruthy();

    page.root?.focus();
    await page.waitForChanges();
    expect(page.rootInstance.isManual).toBeTruthy();
    expect(dismissFocus).toHaveBeenCalled();
  });
});
