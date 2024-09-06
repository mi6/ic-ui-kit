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
  Watch,
  h,
} from "@stencil/core";
import closeIcon from "../../assets/close-icon.svg";
import {
  isSlotUsed,
  checkResizeObserver,
  isPropDefined,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";

/**
 * @slot dialog-controls - Content will be place at the bottom of the dialog.
 * @slot heading - Content will be placed at the top of the dialog.
 * @slot label - Content will be placed above the dialog heading.
 * @slot alert - Content will be placed at the top of the content area of the dialog.
 */
@Component({
  tag: "ic-dialog",
  styleUrl: "ic-dialog.css",
  shadow: true,
})
export class Dialog {
  private backdropEl: HTMLDivElement;
  private contentArea: HTMLSlotElement;
  private DATA_GETS_FOCUS: string = "data-gets-focus";
  private DATA_GETS_FOCUS_SELECTOR: string = "[data-gets-focus]";
  private DIALOG_CONTROLS: string = "dialog-controls";
  private dialogEl: HTMLDialogElement;
  private dialogHeight: number = 0;
  private focusedElementIndex = 0;
  private IC_TEXT_FIELD: string = "IC-TEXT-FIELD";
  private IC_ACCORDION: string = "IC-ACCORDION";
  private IC_ACCORDION_GROUP: string = "IC-ACCORDION-GROUP";
  private interactiveElementList: HTMLElement[];
  private resizeObserver: ResizeObserver = null;
  private resizeTimeout: number;
  private sourceElement: HTMLElement;

  /* eslint-disable */

  private buttonOnclick0: Function;
  private buttonOnclick1: Function;
  private buttonOnclick2: Function;

  /* eslint-enable */

  @Element() el: HTMLIcDialogElement;

  @State() dialogRendered: boolean = false;
  @State() fadeIn: boolean = false;

  /**
   * @deprecated This prop should not be used anymore. Use an ic-alert/IcAlert component within an alert slot with a heading instead.
   */
  @Prop() alertHeading?: string;

  /**
   * @deprecated This prop should not be used anymore. Use an ic-alert/IcAlert component within an alert slot with a message instead.
   */
  @Prop() alertMessage?: string;

  /**
   * If set to `false`, dialog controls will not be displayed overriding buttonProps or slotted dialog controls.
   */
  @Prop() buttons?: boolean = true;

  /**
   * If set to `false`, the dialog will not close when the backdrop is clicked.
   */
  @Prop() closeOnBackdropClick?: boolean = true;

  /**
   * If default buttons are displayed, sets the 'primary' or rightmost button to the destructive variant. Stops initial focus being set on the 'primary' or rightmost default or slotted button.
   */
  @Prop() destructive?: boolean = false;

  /**
   * Sets the dismiss label tooltip and aria label.
   */
  @Prop() dismissLabel?: string = "Dismiss";

  /**
   * If set to `true`, the content area max height and overflow properties are removed allowing the dialog to stretch below the fold.
   * This prop also prevents popover elements from being cut off within the content area.
   */
  @Prop() disableHeightConstraint?: boolean = false;

  /**
   * If set to `true`, the content area width property is removed, allowing content to take the full width of the dialog when using the large variant.
   */
  @Prop() disableWidthConstraint?: boolean = false;

  /**
   * If `true`, the close button will not be displayed.
   */
  @Prop() hideCloseButton?: boolean = false;

  /**
   * Sets the heading for the dialog.
   */
  @Prop() heading: string;

  /**
   * Sets the optional label for the dialog which appears above the heading.
   */
  @Prop() label?: string;

  /**
   * If `true`, the dialog will be displayed.
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = undefined;

  @Watch("open")
  watchOpenHandler(): void {
    if (this.open) {
      this.dialogOpened();
    } else {
      this.fadeIn = false;
      if (this.resizeObserver !== null) {
        this.resizeObserver.disconnect();
      }
      setTimeout(() => {
        this.dialogRendered = false;
        this.dialogEl.close();
        this.sourceElement?.focus();
        this.dialogHeight = 0;
        this.icDialogClosed.emit();
      }, 80);
    }
  }

  /**
   * Sets the maximum and minimum height and width for the dialog.
   */
  @Prop() size?: "small" | "medium" | "large" = "small";

  /**
   * @deprecated This prop should not be used anymore. Use an ic-alert/IcAlert component within an alert slot with a variant instead.
   */
  @Prop() status?: "neutral" | "info" | "warning" | "error" | "success";

  /**
   * Sets the label and onclick functions for default buttons.
   */
  @Prop() buttonProps?: { label: string; onclick: string }[] = [
    {
      label: "Cancel",
      onclick: "this.cancelDialog();",
    },
    { label: "Confirm", onclick: "this.confirmDialog();" },
  ];

  @Watch("buttonProps")
  watchPropHandler(): void {
    this.setButtonOnClick();
  }

  /**
   * Cancelation event emitted when default 'Cancel' button clicked or 'cancelDialog' method is called.
   */
  @Event() icDialogCancelled: EventEmitter<void>;

  /**
   * Emitted when dialog has closed.
   */
  @Event() icDialogClosed: EventEmitter<void>;

  /**
   * Confirmation event emitted when default 'Confirm' primary button clicked or 'confirmDialog' method is called.
   */
  @Event() icDialogConfirmed: EventEmitter<void>;

  /**
   * Emitted when dialog has opened.
   */
  @Event() icDialogOpened: EventEmitter<void>;

  disconnectedCallback(): void {
    this.removeSlotChangeListener();
  }

  componentWillLoad(): void {
    if (this.buttonProps.length) {
      this.setButtonOnClick();
    }
  }

  componentDidLoad(): void {
    this.getInteractiveElements();
    this.setAlertVariant();

    this.refreshInteractiveElementsOnSlotChange();

    if (this.open) {
      this.dialogOpened();
    }

    !isSlotUsed(this.el, "heading") &&
      onComponentRequiredPropUndefined(
        [{ prop: this.heading, propName: "heading" }],
        "Dialog"
      );
  }

  componentDidRender(): void {
    if (
      getComputedStyle(this.el).display !== "none" &&
      this.disableHeightConstraint
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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
          if (!ev.repeat) {
            this.open = false;
          }
          ev.stopImmediatePropagation();
          break;
      }
    }
  }

  @Listen("click", {})
  handleClick(ev: MouseEvent): void {
    const dialogElement = this.el.shadowRoot.querySelector("dialog");
    if (
      this.closeOnBackdropClick &&
      ev.composedPath().indexOf(dialogElement) <= 0
    ) {
      const rect = this.dialogEl.getBoundingClientRect();
      const isInDialog =
        rect.top <= ev.clientY &&
        ev.clientY <= rect.top + rect.height &&
        rect.left <= ev.clientX &&
        ev.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        this.open = false;
      }
    }
  }

  /**
   * @deprecated This method should not be used anymore. Use open prop to set dialog visibility.
   */
  @Method()
  async showDialog(): Promise<void> {
    this.open = true;
  }

  /**
   * @deprecated This method should not be used anymore. Use open prop to set dialog visibility.
   */
  @Method()
  async hideDialog(): Promise<void> {
    this.open = false;
  }

  /**
   * Cancels the dialog. Used by the default 'Cancel' button or can be called manually to trigger cancelling of dialog.
   */
  @Method()
  async cancelDialog(): Promise<void> {
    this.icDialogCancelled.emit();
    this.open = false;
  }

  /**
   * Confirms the dialog. Used by the default 'Confirm' button or can be called manually to trigger confirming of dialog.
   */
  @Method()
  async confirmDialog(): Promise<void> {
    this.icDialogConfirmed.emit();
  }

  private dialogOpened = () => {
    this.dialogRendered = true;

    if (this.disableHeightConstraint) {
      this.dialogEl.show();
    } else {
      this.dialogEl?.showModal();
    }

    setTimeout(() => {
      this.fadeIn = true;

      /**
       * This is required to set scroll back to top if:
       * - dialog content goes below the fold
       * - is closed using cancel or confirm and reopened.
       *
       * Without this, the scroll bar will start from the dialog's last scroll-x coordinate.
       */
      if (this.disableHeightConstraint && this.backdropEl.scrollTop !== 0) {
        this.backdropEl.scrollTop = 0;
      }
    }, 10);

    setTimeout(() => {
      this.setInitialFocus();
      checkResizeObserver(this.runResizeObserver);
    }, 75);

    setTimeout(() => {
      this.getFocusedElementIndex();
      this.icDialogOpened.emit();
    }, 80);
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(this.resizeObserverCallback, 80);
    });
    this.resizeObserver.observe(this.dialogEl);
  };

  private resizeObserverCallback = () => {
    if (this.dialogEl.clientHeight !== this.dialogHeight) {
      this.dialogHeight = this.dialogEl.clientHeight;
    }
  };

  private refreshInteractiveElementsOnSlotChange = () => {
    this.contentArea = this.el.shadowRoot.querySelector("#dialog-content slot");

    this.contentArea.addEventListener(
      "slotchange",
      this.getInteractiveElements
    );
  };

  private removeSlotChangeListener = () => {
    if (this.contentArea) {
      this.contentArea.removeEventListener(
        "slotchange",
        this.getInteractiveElements
      );
    }
  };

  private setInitialFocus = () => {
    this.sourceElement = document.activeElement as HTMLElement;

    let focusedElement;

    if (this.el.querySelector(this.DATA_GETS_FOCUS_SELECTOR) !== null) {
      focusedElement = this.el.querySelector(
        this.DATA_GETS_FOCUS_SELECTOR
      ) as HTMLElement;
    } else {
      focusedElement = this.el.shadowRoot.querySelector(
        this.DATA_GETS_FOCUS_SELECTOR
      ) as HTMLElement;
    }
    if (focusedElement.tagName === this.IC_TEXT_FIELD) {
      (focusedElement as HTMLIcTextFieldElement).setFocus();
    } else if (focusedElement.tagName === this.IC_ACCORDION_GROUP) {
      (focusedElement as HTMLIcAccordionGroupElement).setFocus();
    } else if (focusedElement.tagName === this.IC_ACCORDION) {
      (focusedElement as HTMLIcAccordionElement).setFocus();
    } else {
      focusedElement.focus({
        preventScroll: this.disableHeightConstraint ? true : false,
      });
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
    if (isPropDefined(this.status) && this.status !== null) {
      const alert = this.el.shadowRoot.querySelector("ic-alert");
      alert.setAttribute("variant", this.status);
    }
  };

  private closeIconClick = () => {
    this.open = false;
  };

  private getInteractiveElements = () => {
    this.interactiveElementList = Array.from(
      this.el.shadowRoot.querySelectorAll("ic-button")
    );
    const slottedInteractiveElements = Array.from(
      this.el.querySelectorAll(
        `a[href], button, input:not(.ic-input), textarea, select, details, [tabindex]:not([tabindex="-1"]), 
          ic-button, ic-checkbox, ic-select, ic-search-bar, ic-tab-group, ic-radio-group, 
          ic-back-to-top, ic-breadcrumb, ic-chip[dismissible="true"], ic-footer-link, ic-link, ic-navigation-button, 
          ic-navigation-item, ic-switch, ic-text-field, ic-accordion-group, ic-accordion`
      )
    );
    if (slottedInteractiveElements.length > 0) {
      if (slottedInteractiveElements[0].slot !== this.DIALOG_CONTROLS) {
        slottedInteractiveElements[0].setAttribute(this.DATA_GETS_FOCUS, "");
      } else if (!this.destructive) {
        slottedInteractiveElements[
          slottedInteractiveElements.length - 1
        ].setAttribute(this.DATA_GETS_FOCUS, "");
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

  private getNextFocusEl = (focusedElementIndex: number) =>
    this.interactiveElementList[focusedElementIndex];

  private focusNextInteractiveElement = (shiftKey: boolean) => {
    this.getFocusedElementIndex();
    this.setFocusIndexBasedOnShiftKey(shiftKey);
    this.loopNextFocusIndexIfLastElement();

    let nextFocusEl = this.getNextFocusEl(this.focusedElementIndex);

    const isHidden =
      getComputedStyle(nextFocusEl).visibility === "hidden" ||
      (nextFocusEl.tagName === this.IC_ACCORDION_GROUP &&
        nextFocusEl.hasAttribute("single-expansion"));

    if (nextFocusEl.tagName === this.IC_TEXT_FIELD) {
      (nextFocusEl as HTMLIcTextFieldElement).setFocus();
    } else {
      if (isHidden) {
        this.setFocusIndexBasedOnShiftKey(shiftKey);
        this.loopNextFocusIndexIfLastElement();

        nextFocusEl = this.getNextFocusEl(this.focusedElementIndex);
      }
      if (nextFocusEl.tagName === this.IC_ACCORDION_GROUP) {
        (nextFocusEl as HTMLIcAccordionGroupElement).setFocus();
      } else if (nextFocusEl.tagName === this.IC_ACCORDION) {
        (nextFocusEl as HTMLIcAccordionElement).setFocus();
      } else {
        (nextFocusEl as HTMLElement).focus();
      }
    }
  };

  private setButtonOnClick = () => {
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

  private loopNextFocusIndexIfLastElement() {
    if (this.focusedElementIndex > this.interactiveElementList.length - 1)
      this.focusedElementIndex = 0;
    else if (this.focusedElementIndex < 0) {
      this.focusedElementIndex = this.interactiveElementList.length - 1;
    }
  }

  private setFocusIndexBasedOnShiftKey(shiftKey: boolean) {
    if (shiftKey) {
      this.focusedElementIndex -= 1;
    } else {
      this.focusedElementIndex += 1;
    }
  }

  private renderDialog = () => {
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
      hideCloseButton,
    } = this;

    return (
      <dialog
        class={{
          ["dialog"]: true,
          [`${size}`]: true,
          ["disable-height-constraint"]: this.disableHeightConstraint,
          ["disable-width-constraint"]: this.disableWidthConstraint,
        }}
        aria-labelledby="dialog-label dialog-heading"
        aria-describedby="dialog-alert dialog-content"
        ref={(el) => (this.dialogEl = el)}
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
          {!hideCloseButton && (
            <ic-button
              class="close-icon"
              variant="icon"
              innerHTML={closeIcon}
              aria-label={dismissLabel}
              onClick={this.closeIconClick}
              data-gets-focus={destructive || !buttons ? "" : null}
            ></ic-button>
          )}
        </div>
        <div class="content-area">
          {isSlotUsed(this.el, "alert") ? (
            <slot name="alert"></slot>
          ) : (
            status && (
              <ic-alert
                variant={status}
                heading={alertHeading}
                message={alertMessage}
                title-above
                class="status-alert"
                id="dialog-alert"
              ></ic-alert>
            )
          )}
          <div id="dialog-content">
            <slot></slot>
          </div>
        </div>
        {(buttons || isSlotUsed(this.el, this.DIALOG_CONTROLS)) && (
          <div
            class={{
              [this.DIALOG_CONTROLS]: true,
              ["triple-button"]: buttonProps.length === 3,
            }}
          >
            <slot name={this.DIALOG_CONTROLS}>
              {!isSlotUsed(this.el, this.DIALOG_CONTROLS) &&
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
                          this.getButtonVariant(index) === "primary" ? "" : null
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
    );
  };

  render() {
    return (
      <Host
        class={{
          ["hidden"]: !this.dialogRendered,
          ["fade-in"]: this.fadeIn,
          ["disable-height-constraint"]: this.disableHeightConstraint,
        }}
      >
        {this.disableHeightConstraint ? (
          <div class="backdrop" ref={(el) => (this.backdropEl = el)}>
            {this.renderDialog()}
          </div>
        ) : (
          this.renderDialog()
        )}
      </Host>
    );
  }
}
