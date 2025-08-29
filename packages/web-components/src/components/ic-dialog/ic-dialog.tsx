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
  Fragment,
} from "@stencil/core";
import closeIcon from "../../assets/close-icon.svg";
import {
  isSlotUsed,
  checkResizeObserver,
  onComponentRequiredPropUndefined,
  getSlotElements,
} from "../../utils/helpers";
import { IcFocusableComponents, IcThemeMode } from "../../utils/types";

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
  private backdropEl?: HTMLDivElement;
  private contentArea: HTMLSlotElement | null;
  private contentAreaMutationObserver: MutationObserver | null = null;
  private DATA_GETS_FOCUS: string = "data-gets-focus";
  private DIALOG_CONTROLS: string = "dialog-controls";
  private dialogEl?: HTMLDialogElement;
  private dialogHeight: number = 0;
  private focusedElementIndex = 0;
  private IC_TEXT_FIELD: string = "IC-TEXT-FIELD";
  private IC_ACCORDION: string = "IC-ACCORDION";
  private IC_ACCORDION_GROUP: string = "IC-ACCORDION-GROUP";
  private IC_CHECKBOX = "IC-CHECKBOX";
  private IC_SEARCH_BAR: string = "IC-SEARCH-BAR";
  private interactiveElementList: HTMLElement[];
  private resizeObserver: ResizeObserver | null = null;
  private resizeTimeout: number;
  private sourceElement: HTMLElement;

  @Element() el: HTMLIcDialogElement;

  @State() dialogRendered: boolean = false;
  @State() fadeIn: boolean = false;

  /**
   * If set to `false`, the dialog will not close when the backdrop is clicked.
   */
  @Prop() closeOnBackdropClick?: boolean = true;

  /**
   * If 'true', sets the 'primary' or rightmost button to the destructive variant. Stops initial focus being set on the 'primary' or rightmost default or slotted button.
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
   * If set to `true`, default button controls will not be shown, but slotted dialog controls will still be displayed.
   */
  @Prop() hideDefaultControls: boolean = false;

  /**
   * Sets the heading for the dialog.
   */
  @Prop() heading?: string;

  /**
   * Sets the optional label for the dialog which appears above the heading.
   */
  @Prop() label?: string;

  /**
   * If `true`, the dialog will be displayed.
   */
  @Prop({ reflect: true, mutable: true }) open?: boolean = false;

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
        this.dialogEl?.close();
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
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

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

  componentDidLoad(): void {
    this.getInteractiveElements();

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
    document.body.style.overflow =
      getComputedStyle(this.el).display !== "none" &&
      this.disableHeightConstraint
        ? "hidden"
        : "auto";
  }

  @Listen("keydown", { target: "document" })
  handleKeyboard(ev: KeyboardEvent): void {
    if (this.dialogRendered) {
      switch (ev.key) {
        case "Tab":
          if (this.onTabKeyPress(ev.shiftKey)) {
            ev.preventDefault();
          }
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
    if (
      this.dialogEl &&
      this.closeOnBackdropClick &&
      ev.composedPath().indexOf(this.dialogEl) <= 0
    ) {
      const { top, height, left, width } =
        this.dialogEl.getBoundingClientRect();
      const isInDialog =
        top <= ev.clientY &&
        ev.clientY <= top + height &&
        left <= ev.clientX &&
        ev.clientX <= left + width;
      if (!isInDialog) {
        this.open = false;
      }
    }
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
      this.dialogEl?.show();
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
      if (
        this.backdropEl &&
        this.disableHeightConstraint &&
        this.backdropEl.scrollTop !== 0
      ) {
        this.backdropEl.scrollTop = 0;
      }
    }, 10);

    setTimeout(() => {
      this.setInitialFocus();
      checkResizeObserver(this.runResizeObserver);
    }, 75);

    setTimeout(() => {
      this.icDialogOpened.emit();
    }, 80);
  };

  private runResizeObserver = () => {
    if (this.dialogEl) {
      this.resizeObserver = new ResizeObserver(() => {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(this.resizeObserverCallback, 80);
      });
      this.resizeObserver.observe(this.dialogEl);
    }
  };

  private resizeObserverCallback = () => {
    if (this.dialogEl && this.dialogEl.clientHeight !== this.dialogHeight) {
      this.dialogHeight = this.dialogEl.clientHeight;
    }
  };

  private refreshInteractiveElementsOnSlotChange = () => {
    const contentWrapper = this.el.shadowRoot?.querySelector("#dialog-content");

    if (contentWrapper) {
      this.contentArea = contentWrapper.querySelector("slot");

      // Detect changes to slotted elements
      this.contentArea?.addEventListener(
        "slotchange",
        this.getInteractiveElements
      );

      this.contentAreaMutationObserver = new MutationObserver(() => {
        this.getInteractiveElements();
      });

      // Detect changes to children of slotted elements
      getSlotElements(contentWrapper)?.forEach((el) => {
        this.contentAreaMutationObserver?.observe(el, {
          childList: true,
          subtree: true,
        });
      });
    }
  };

  private removeSlotChangeListener = () => {
    if (this.contentArea) {
      this.contentArea.removeEventListener(
        "slotchange",
        this.getInteractiveElements
      );

      this.contentAreaMutationObserver?.disconnect();
    }
  };

  private setInitialFocus = () => {
    this.sourceElement = document.activeElement as HTMLElement;
    this.focusedElementIndex = this.interactiveElementList
      ? this.interactiveElementList.findIndex((element) =>
          element.hasAttribute(this.DATA_GETS_FOCUS)
        )
      : 0;
    this.focusElement(this.interactiveElementList[this.focusedElementIndex]);
  };

  private getFocusedElementIndex = () => {
    for (let i = 0; i < this.interactiveElementList.length; i++) {
      if (
        (this.interactiveElementList[i] as HTMLElement) ===
        (this.el.shadowRoot?.activeElement || document.activeElement)
      ) {
        this.focusedElementIndex = i;
      }
    }
  };

  private closeIconClick = () => {
    this.open = false;
  };

  private getInteractiveElements = () => {
    this.interactiveElementList = Array.from(
      this.el.shadowRoot?.querySelectorAll("ic-button") || []
    );
    const slottedInteractiveElements = Array.from(
      this.el.querySelectorAll(
        `a[href], button, input:not(.ic-input), textarea, select, details, [tabindex]:not([tabindex="-1"]),
          ic-button, ic-checkbox, ic-select, ic-search-bar, ic-tab-group, 
          ic-back-to-top, ic-breadcrumb, ic-chip[dismissible="true"], ic-footer-link, ic-link, ic-navigation-button,
          ic-navigation-item, ic-switch, ic-text-field, ic-accordion-group, ic-accordion, ic-date-input, ic-date-picker`
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

  private onTabKeyPress = (shiftKey: boolean): boolean => {
    this.getFocusedElementIndex();

    if (
      this.interactiveElementList[this.focusedElementIndex].tagName ===
      this.IC_SEARCH_BAR
    ) {
      return false;
    }

    this.setFocusIndexBasedOnShiftKey(shiftKey);
    this.loopNextFocusIndexIfLastElement();

    this.focusElement(this.getNextFocusEl(this.focusedElementIndex), shiftKey);
    return true;
  };

  private shouldSkipElement = (element: HTMLElement): boolean => {
    const isHidden =
      getComputedStyle(element).visibility === "hidden" ||
      element.offsetHeight === 0 ||
      element.hasAttribute("disabled") ||
      (element.tagName === this.IC_ACCORDION_GROUP &&
        element.hasAttribute("single-expansion"));

    const radioEl = element.closest("ic-radio-option");

    return (
      isHidden ||
      (element.getAttribute("type") === "radio" &&
        !!radioEl &&
        !(radioEl.hasAttribute("selected") || element.tabIndex === 0))
    );
  };

  private focusElement = (element: HTMLElement, shiftKey = false) => {
    let nextFocusEl = element;

    if (this.shouldSkipElement(element)) {
      this.setFocusIndexBasedOnShiftKey(shiftKey);
      this.loopNextFocusIndexIfLastElement();

      nextFocusEl = this.getNextFocusEl(this.focusedElementIndex);
      this.focusElement(nextFocusEl, shiftKey);
    } else {
      switch (element.tagName) {
        case this.IC_ACCORDION_GROUP:
        case this.IC_ACCORDION:
        case this.IC_SEARCH_BAR:
        case this.IC_TEXT_FIELD:
        case this.IC_CHECKBOX:
          (element as IcFocusableComponents).setFocus();
          break;
        default:
          (element as HTMLElement).focus();
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
      hideDefaultControls,
      size,
      heading,
      label,
      destructive,
      dismissLabel,
      hideCloseButton,
      disableHeightConstraint,
      disableWidthConstraint,
      closeIconClick,
      DIALOG_CONTROLS,
    } = this;

    const controlsSlotUsed = isSlotUsed(this.el, DIALOG_CONTROLS);

    return (
      <dialog
        class={{
          dialog: true,
          [`${size}`]: true,
          "disable-height-constraint": !!disableHeightConstraint,
          "disable-width-constraint": !!disableWidthConstraint,
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
              variant="icon-tertiary"
              innerHTML={closeIcon}
              aria-label={dismissLabel}
              onClick={closeIconClick}
              data-gets-focus={
                destructive || (hideDefaultControls && !controlsSlotUsed)
                  ? ""
                  : null
              }
            ></ic-button>
          )}
        </div>
        <div class="content-area">
          {isSlotUsed(this.el, "alert") && <slot name="alert" />}
          <div id="dialog-content">
            <slot />
          </div>
        </div>
        {(controlsSlotUsed || !hideDefaultControls) && (
          <div
            class={{
              [DIALOG_CONTROLS]: true,
            }}
          >
            {controlsSlotUsed ? (
              <slot name={DIALOG_CONTROLS} />
            ) : (
              <Fragment>
                <ic-button
                  variant="tertiary"
                  onClick={() => this.cancelDialog()}
                  class="dialog-control-button"
                  data-gets-focus={null}
                >
                  Cancel
                </ic-button>
                <ic-button
                  variant={destructive ? "destructive" : "primary"}
                  onClick={() => this.confirmDialog()}
                  class="dialog-control-button"
                  data-gets-focus=""
                >
                  Confirm
                </ic-button>
              </Fragment>
            )}
          </div>
        )}
      </dialog>
    );
  };

  render() {
    const { dialogRendered, disableHeightConstraint, fadeIn, theme } = this;

    return (
      <Host
        class={{
          "ic-dialog-hidden": !dialogRendered,
          "ic-dialog-fade-in": fadeIn,
          "disable-height-constraint": !!disableHeightConstraint,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        {disableHeightConstraint ? (
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
