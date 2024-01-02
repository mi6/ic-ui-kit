import {
  Component,
  Element,
  h,
  Listen,
  Method,
  Prop,
  Watch,
} from "@stencil/core";
import { IcFocusableComponents } from "../../utils/types";

@Component({ tag: "ic-toast-region" })
export class ToastRegion {
  private pendingVisibility: HTMLIcToastElement[] = [];
  private previouslyFocused: HTMLElement;

  @Element() el: HTMLIcToastRegionElement;

  /**
   * The toast element to be displayed.
   */
  @Prop({ mutable: true }) openToast: HTMLIcToastElement;
  @Watch("openToast")
  watchOpenToastHandler(newValue: HTMLIcToastElement): void {
    if (this.openToast !== undefined) {
      this.showToast(newValue);
      this.openToast = undefined;
    }
  }

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

  private showToast = (toast: HTMLIcToastElement) => {
    const visibleToasts = Array.from(
      document.querySelectorAll("ic-toast")
    ).filter((el) => window.getComputedStyle(el).display !== "none");
    if (visibleToasts.indexOf(toast) === -1 && visibleToasts.length <= 0) {
      toast.setVisible().then((res) => (this.previouslyFocused = res));
    }
    if (visibleToasts.length > 0) this.pendingVisibility.push(toast);
  };

  /**
   * @deprecated Use openToast prop to display toast instead.
   * @param {HTMLIcToastElement} toast The toast component to display
   */
  @Method()
  async setVisible(toast: HTMLIcToastElement): Promise<void> {
    this.showToast(toast);
  }

  render() {
    return <slot></slot>;
  }
}
