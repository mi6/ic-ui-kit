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
  async setVisible(toast: HTMLIcToastElement) {
    const visibleToasts = Array.from(
      document.querySelectorAll("ic-toast")
    ).filter((el) => window.getComputedStyle(el).display !== "none");
    if (visibleToasts.indexOf(toast) === -1 && visibleToasts.length <= 0) {
      toast.setVisible().then((res) => (this.previouslyFocused = res));
    }
    if (visibleToasts.length > 0) this.pendingVisibility.push(toast);
  }

  @Listen("icDismiss", { target: "document" })
  handleDismissedToast(ev: CustomEvent) {
    if ((ev.target as HTMLElement).tagName !== "IC-TOAST") return;
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
