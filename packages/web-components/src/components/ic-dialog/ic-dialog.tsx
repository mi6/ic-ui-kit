import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Method,
  Listen,
  h,
} from "@stencil/core";
import closeIcon from "../../assets/close-icon.svg";
import { isSlotUsed } from "../../utils/helpers";

@Component({
  tag: "ic-dialog",
  styleUrl: "ic-dialog.css",
  shadow: true,
})
export class Dialog {
  /**
   * @slot dialog-controls - Content will be place at the bottom of the dialog.
   * @slot heading - Content will be placed at the top of the dialog.
   * @slot label - Content will be placed above the dialog heading.
   */
  @Element() el: HTMLIcDialogElement;

  /**
   * Sets the maximum and minimum height and width for the dialog.
   */
  @Prop() size?: "small" | "medium" | "large" = "small";
  /**
   * Sets the heading for the dialog.
   */
  @Prop() heading!: string;
  /**
   * Sets the optional label for the dialog which appears above the heading.
   */
  @Prop() label?: string;
  /**
   * Sets the dismiss label tooltip and aria label.
   */
  @Prop() dismissLabel?: string = "Dismiss";
  /**
   * If set, displays an alert of the corresponding variant below the heading.
   */
  @Prop() status?: "neutral" | "info" | "warning" | "error" | "success";
  /**
   * If a status is set, sets the heading for the displayed alert.
   */
  @Prop() alertHeading?: string;
  /**
   * If a status is set, sets the message for the displayed alert.
   */
  @Prop() alertMessage?: string;
  /**
   * If set to `false`, dialog controls will not be displayed overriding buttonProps or slotted dialog controls.
   */
  @Prop() buttons?: boolean = true;
  /**
   * If default buttons are displayed, sets the 'primary' or rightmost button to the destructive variant. Stops initial focus being set on the 'primary' or rightmost default or slotted button.
   */
  @Prop() destructive?: boolean = false;
  /**
   * If set to `true`, the dialog will not close when the backdrop is clicked.
   */
  @Prop() closeOnBackdropClick?: boolean = true;
  /**
   * Sets the label and onclick functions for default buttons.
   */
  @Prop() buttonProps?: { label: string; onclick: string }[] = [
    { label: "Cancel", onclick: "this.hideDialog(); this.icDialogCancel()" },
    { label: "Confirm", onclick: "this.icDialogConfirm()" },
  ];

  @State() dialogRendered: boolean = false;

  @State() fadeIn: boolean = false;

  /**
   * Confirmation event for default primary button behaviour.
   */
  @Event() icDialogConfirmed: EventEmitter<void>;
  icDialogConfirm = () => {
    this.icDialogConfirmed.emit();
  };

  /**
   * Cancelation event for default 'Cancel' button behaviour.
   */
  @Event() icDialogCanceled: EventEmitter<void>;
  icDialogCancel = () => {
    this.icDialogCanceled.emit();
  };

  private sourceElement: HTMLElement;
  private interactiveElementList: HTMLElement[];
  private focusedElementIndex = 0;

  /* eslint-disable */

  private buttonOnclick0: Function;
  private buttonOnclick1: Function;
  private buttonOnclick2: Function;

  /* eslint-enable */

  /**
   * Used to display the dialog.
   */
  @Method()
  async showDialog() {
    this.dialogRendered = true;
    setTimeout(() => {
      this.fadeIn = true;
    }, 10);
    setTimeout(() => {
      this.setInitialFocus();
    }, 75);
    setTimeout(() => {
      this.getFocusedElementIndex();
    }, 80);
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  }
  /**
   * Used to dismiss the dialog.
   */
  @Method()
  async hideDialog() {
    this.fadeIn = false;
    setTimeout(() => {
      this.dialogRendered = false;
      this.sourceElement.focus();
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }, 80);
  }

  @Listen("keydown", { target: "document" })
  handleKeyboard(ev: KeyboardEvent): void {
    if (this.dialogRendered) {
      switch (ev.key) {
        case "Tab":
          ev.preventDefault();
          this.focusNextInteractiveElement(ev.shiftKey);
          break;
        case "Escape":
          !ev.repeat && this.hideDialog();
          ev.stopImmediatePropagation();
          break;
      }
    }
  }

  @Listen("click")
  handleClick(ev: MouseEvent): void {
    const dialogElement = this.el.shadowRoot.querySelector("dialog");
    if (this.closeOnBackdropClick) {
      if (ev.composedPath().indexOf(dialogElement) < 0) {
        this.hideDialog();
      }
    }
  }

  private setInitialFocus = () => {
    this.sourceElement = document.activeElement as HTMLElement;

    let focusedElement;

    if (this.el.querySelector("[data-gets-focus]") !== null) {
      focusedElement = this.el.querySelector(
        "[data-gets-focus]"
      ) as HTMLElement;
    } else {
      focusedElement = this.el.shadowRoot.querySelector(
        "[data-gets-focus]"
      ) as HTMLElement;
    }

    if (process.env.JEST_WORKER_ID === undefined) {
      focusedElement?.focus();
    }
  };

  private getFocusedElementIndex = () => {
    for (let i = 0; i < this.interactiveElementList.length; i++) {
      if (
        (this.interactiveElementList[i] as HTMLElement) ===
        (this.el.shadowRoot.activeElement || document.activeElement)
      ) {
        this.focusedElementIndex = i;
      }
    }
  };

  private setAlertVariant = () => {
    if (this.status !== undefined && this.status !== null) {
      const alert = this.el.shadowRoot.querySelector("ic-alert");
      alert.setAttribute("variant", this.status);
    }
  };

  private getInteractiveElements = () => {
    this.interactiveElementList = Array.from(
      this.el.shadowRoot.querySelectorAll("ic-button")
    );
    const slottedInteractiveElements = Array.from(
      this.el.querySelectorAll(
        `a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"]), 
        ic-button, ic-checkbox, ic-select, ic-search-bar, ic-tab-group, ic-radio-group, 
        ic-back-to-top, ic-breadcrumb, ic-chip[dismissible="true"], ic-footer-link, ic-link, ic-navigation-button, 
        ic-navigation-item, ic-switch`
      )
    );
    if (slottedInteractiveElements.length > 0) {
      if (slottedInteractiveElements[0].slot !== "dialog-controls") {
        slottedInteractiveElements[0].setAttribute("data-gets-focus", "");
      } else if (!this.destructive) {
        slottedInteractiveElements[
          slottedInteractiveElements.length - 1
        ].setAttribute("data-gets-focus", "");
      }
    }
    for (let i = 0; i < slottedInteractiveElements.length; i++) {
      this.interactiveElementList.splice(
        1 + i,
        0,
        slottedInteractiveElements[i] as HTMLElement
      );
    }
  };

  private focusNextInteractiveElement = (shiftKey: boolean) => {
    if (shiftKey) {
      this.focusedElementIndex -= 1;
    } else {
      this.focusedElementIndex += 1;
    }

    if (this.focusedElementIndex > this.interactiveElementList.length - 1)
      this.focusedElementIndex = 0;
    else if (this.focusedElementIndex < 0) {
      this.focusedElementIndex = this.interactiveElementList.length - 1;
    }

    if (process.env.JEST_WORKER_ID === undefined) {
      (
        this.interactiveElementList[this.focusedElementIndex] as HTMLElement
      ).focus();
    }
  };

  private setButtonOnclick = () => {
    if (this.buttons) {
      this.buttonOnclick0 = new Function(this.buttonProps[0]?.onclick);
      this.buttonOnclick1 = new Function(this.buttonProps[1]?.onclick);
      this.buttonOnclick2 = new Function(this.buttonProps[2]?.onclick);
    }
  };

  private getButtonOnclick = (index: number) => {
    if (index === 0) {
      return this.buttonOnclick0();
    } else if (index === 1) {
      return this.buttonOnclick1();
    } else {
      return this.buttonOnclick2();
    }
  };

  private getButtonVariant = (index: number) => {
    const mainVariant = this.destructive ? "destructive" : "primary";
    if (this.buttonProps.length === 1) {
      return mainVariant;
    } else if (this.buttonProps.length === 2) {
      if (index === 0) {
        return "tertiary";
      } else {
        return mainVariant;
      }
    } else {
      if (index === 2) {
        return mainVariant;
      } else {
        return "secondary";
      }
    }
  };

  componentWillLoad(): void {
    this.setButtonOnclick();
  }

  componentDidLoad(): void {
    this.getInteractiveElements();
    this.setAlertVariant();
  }

  render() {
    const {
      alertHeading,
      alertMessage,
      buttons,
      buttonProps,
      size,
      heading,
      label,
      status,
      destructive,
      dismissLabel,
    } = this;

    return (
      <Host
        class={{ ["hidden"]: !this.dialogRendered, ["fade-in"]: this.fadeIn }}
      >
        <dialog
          class={{ ["dialog"]: true, [`${size}`]: true }}
          open={this.dialogRendered}
          aria-labelledby="dialog-label dialog-heading"
          aria-describedby="dialog-alert dialog-content"
        >
          <div class="heading-area">
            <div class="heading-content">
              <div class="label">
                <slot name="label">
                  <ic-typography variant="label" id="dialog-label">
                    {label}
                  </ic-typography>
                </slot>
              </div>
              <div class="heading">
                <slot name="heading">
                  <ic-typography variant="h4" id="dialog-heading">
                    {heading}
                  </ic-typography>
                </slot>
              </div>
            </div>
            <ic-button
              class="close-icon"
              variant="icon"
              aria-label={dismissLabel}
              onClick={() => this.hideDialog()}
              data-gets-focus={destructive || !buttons ? "" : null}
            >
              <span class="close-icon-svg" slot="icon" innerHTML={closeIcon} />
            </ic-button>
          </div>
          <div class="content-area">
            {status && (
              <ic-alert
                variant={status}
                heading={alertHeading}
                message={alertMessage}
                title-above
                class="status-alert"
                id="dialog-alert"
              ></ic-alert>
            )}
            <ic-typography class="message" variant="body" id="dialog-content">
              <slot></slot>
            </ic-typography>
          </div>
          {(buttons || isSlotUsed(this.el, "dialog-controls")) && (
            <div
              class={{
                ["dialog-controls"]: true,
                ["triple-button"]: buttonProps.length === 3,
              }}
            >
              <slot name="dialog-controls">
                {!isSlotUsed(this.el, "dialog-controls") &&
                  buttonProps.map((props, index) => {
                    if (index > 2) {
                      return;
                    } else {
                      return (
                        <ic-button
                          variant={this.getButtonVariant(index)}
                          onClick={() => this.getButtonOnclick(index)}
                          class="dialog-control-button"
                          full-width={buttonProps.length === 3}
                          data-gets-focus={
                            this.getButtonVariant(index) === "primary"
                              ? ""
                              : null
                          }
                        >
                          {props.label}
                        </ic-button>
                      );
                    }
                  })}
              </slot>
            </div>
          )}
        </dialog>
      </Host>
    );
  }
}
