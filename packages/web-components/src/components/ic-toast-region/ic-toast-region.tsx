import { Component, Element, h, Listen, Method } from "@stencil/core";
import { IcFocusableComponents } from "../../utils/types";

@Component({ tag: "ic-toast-region" })
export class ToastRegion {
  private pendingVisibility: HTMLIcToastElement[] = [];
  private previouslyFocused: HTMLElement;

  @Element() el: HTMLIcToastRegionElement;

  @Listen("icDismiss", { capture: true })
  handleDismissedToast(): void {
    if (this.pendingVisibility.length > 0) {
      this.pendingVisibility[0]
        .setVisible()
        .then((res) => (this.previouslyFocused = res));
      this.pendingVisibility.shift();
    } else {
      if (this.previouslyFocused && "setFocus" in this.previouslyFocused) {
        (this.previouslyFocused as IcFocusableComponents).setFocus();
      } else this.previouslyFocused?.focus();
    }
  }

  /**
   * Handles setting the visibility of various toasts based on what is already visible
   * @param toast The toast element being requested to display
   */
  @Method()
  async setVisible(toast: HTMLIcToastElement): Promise<void> {
    const visibleToasts = Array.from(
      document.querySelectorAll("ic-toast")
    ).filter((el) => window.getComputedStyle(el).display !== "none");
    if (visibleToasts.indexOf(toast) === -1 && visibleToasts.length <= 0) {
      toast.setVisible().then((res) => (this.previouslyFocused = res));
    }
    if (visibleToasts.length > 0) this.pendingVisibility.push(toast);
  }

  render() {
    return <slot></slot>;
  }
}
