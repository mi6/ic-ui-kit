import { newSpecPage } from "@stencil/core/testing";
import { Button } from "../../../ic-button/ic-button";
import { Toast } from "../../../ic-toast/ic-toast";
import { ToastRegion } from "../../ic-toast-region";

describe("ic-toast-region component", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [ToastRegion, Toast],
      html: `<ic-toast-region>
      <ic-toast heading="Heading"></ic-toast>
      </ic-toast-region>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should test showing and hiding toasts with openToast prop", async () => {
    const page = await newSpecPage({
      components: [ToastRegion, Toast],
      html: `<ic-toast-region>
      <ic-toast heading="Heading"></ic-toast>
      <ic-toast heading="Heading"></ic-toast>
      </ic-toast-region>`,
    });

    const toasts = page.root.querySelectorAll("ic-toast");

    page.root.openToast = toasts[0];

    await page.waitForChanges();

    expect(page.rootInstance.pendingVisibility.length).toBe(1);

    page.root.openToast = toasts[1];

    await page.waitForChanges();

    expect(page.rootInstance.pendingVisibility.length).toBe(2);

    await page.rootInstance.handleDismissedToast();
    expect(page.rootInstance.pendingVisibility.length).toBe(1);

    await page.rootInstance.handleDismissedToast();
    expect(page.rootInstance.pendingVisibility.length).toBe(0);

    await page.rootInstance.handleDismissedToast();
    expect(page.rootInstance.pendingVisibility.length).toBe(0);
  });

  it("should test previouslyFocused", async () => {
    const page = await newSpecPage({
      components: [ToastRegion, Toast, Button],
      html: `<ic-toast-region>
      <ic-button>Click Me</ic-button>
      <ic-toast heading="Heading"></ic-toast>
      </ic-toast-region>`,
    });

    const button = page.root.querySelector("ic-button");
    page.rootInstance.previouslyFocused = button;

    await page.rootInstance.handleDismissedToast();
    expect(page.rootInstance.pendingVisibility.length).toBe(0);
  });

  it("should test previously focused - standard element", async () => {
    const page = await newSpecPage({
      components: [ToastRegion, Toast],
      html: `<ic-toast-region>
      <button>Click Me</button>
      <ic-toast heading="Heading"></ic-toast>
      </ic-toast-region>`,
    });

    const button = page.root.querySelector("button");
    page.rootInstance.previouslyFocused = button;

    await page.rootInstance.handleDismissedToast();
    expect(page.rootInstance.pendingVisibility.length).toBe(0);
  });
});
