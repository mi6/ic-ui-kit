import { Component, Element, h, Listen, Method } from "@stencil/core";

@Component({ tag: "ic-toast-region" })
export class ToastRegion {
  @Element() el: HTMLIcToastRegionElement;

  previouslyFocused: HTMLElement;
  pendingVisibility: HTMLIcToastElement[] = [];

  /**
   * Handle setting the visibility of various toasts based on what is already visible
   * @param toast The toast element being requested to display
   */
  @Method()
  setVisible(toast: HTMLIcToastElement) {
    const visibleToasts = Array.from(
      document.querySelectorAll("ic-toast")
    ).filter((el) => window.getComputedStyle(el).visibility === "visible");
    if (visibleToasts.indexOf(toast) === -1 && visibleToasts.length <= 0) {
      toast.setVisible().then((res) => (this.previouslyFocused = res));
    }
    if (visibleToasts.length > 0) this.pendingVisibility.push(toast);
  }

  @Listen("toastDismiss", { target: "document" })
  handleDismissedToast() {
    if (this.pendingVisibility.length > 0) {
      this.pendingVisibility[0]
        .setVisible()
        .then((res) => (this.previouslyFocused = res));
      this.pendingVisibility.shift();
    } else {
      this.previouslyFocused?.focus();
    }
  }

  render() {
    return <slot></slot>;
  }
}
