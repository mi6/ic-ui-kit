import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
} from "@stencil/core";
import closeIcon from "../../assets/close-icon.svg";
import { VARIANT_ICONS } from "../../utils/constants";
import {
  getSlot,
  isSlotUsed,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import {
  IcActivationTypes,
  IcStatusVariants,
  IcThemeForegroundEnum,
} from "../../utils/types";
import { ActionAreaElementTypes } from "./ic-toast.types";

const AUTO_DISMISS_TIMER_REFRESH_RATE_MS = 1000;
const TOAST_HEADING_CHAR_LIMIT = 70;
const TOAST_MESSAGE_CHAR_LIMIT = 140;

/**
 * @slot action - IcButton or IcLink is placed below header and message. If used will default toast to manual `dismiss` type.
 * @slot neutral-icon - A custom neutral icon is placed on the left side of the component. If used will default toast to `neutral` variant.
 */
@Component({
  tag: "ic-toast",
  styleUrl: "ic-toast.css",
  shadow: true,
})
export class Toast {
  dismissTimeout: number;
  interactiveElements: ActionAreaElementTypes[] = [];
  isManual: boolean;
  neutralVariantLabel: string;
  timerRefreshInterval: number;

  @Element() el: HTMLIcToastElement;

  @State() timerProgress = 100;
  @State() visible = false;

  /**
   * If toast dismissMode is set to `automatic`, use this prop to define the time before the toast dismisses (in MILLISECONDS)
   * (NOTE: Has a minimum value of `5000ms`)
   */
  @Prop({ mutable: true }) autoDismissTimeout? = 5000;

  /**
   * If toast can be manually dismissed, this prop sets a custom aria-label for the ic-button component
   */
  @Prop() dismissButtonAriaLabel? = "dismiss";

  /**
   * How the toast will be dismissed. If manual will display a dismiss button.
   */
  @Prop({ mutable: true }) dismissMode?: IcActivationTypes = "manual";

  /**
   * The title to display at the start of the toast. (NOTE: Should be no more than `70` characters)
   */
  @Prop() heading!: string;

  /**
   * The main body message of the toast. (NOTE: Should be no more than `140` characters)
   */
  @Prop() message?: string;

  /**
   * Provides a custom alt-text to be announced to screen readers, if slotting a custom neutral icon
   */
  @Prop() neutralIconAriaLabel?: string;

  /**
   * The variant of the toast being rendered
   */
  @Prop({ mutable: true }) variant?: IcStatusVariants;

  /**
   * Is emitted when the user dismisses the toast
   */
  @Event() icDismiss: EventEmitter<void>;

  disconnectedCallback() {
    window.clearTimeout(this.dismissTimeout);
    window.clearInterval(this.timerRefreshInterval);
  }

  componentWillLoad() {
    this.handleLongText(
      this.heading.length > TOAST_HEADING_CHAR_LIMIT,
      this.message?.length > TOAST_MESSAGE_CHAR_LIMIT
    );

    if (this.autoDismissTimeout < 5000) this.autoDismissTimeout = 5000;

    if (isSlotUsed(this.el, "action")) this.dismissMode = "manual";
    this.isManual = this.dismissMode === "manual";

    if (isSlotUsed(this.el, "neutral-icon")) this.variant = "neutral";
    if (this.variant === "neutral") {
      this.neutralVariantLabel =
        this.neutralIconAriaLabel ?? VARIANT_ICONS[this.variant].ariaLabel;
    }

    if (this.isManual) {
      this.el.setAttribute(
        "aria-label",
        this.variant
          ? this.neutralVariantLabel || VARIANT_ICONS[this.variant].ariaLabel
          : this.heading
      );
      (this.variant || this.message) &&
        this.el.setAttribute(
          "aria-description",
          this.variant
            ? `${this.heading}${
                this.message !== undefined ? `. ${this.message}` : ""
              }`
            : this.message
        );
    }
  }

  componentDidLoad() {
    onComponentRequiredPropUndefined(
      [{ prop: this.heading, propName: "heading" }],
      "Toast"
    );
    const actionContent = getSlot(this.el, "action") as ActionAreaElementTypes;
    const dismissButton = this.el.shadowRoot.querySelector("ic-button");
    if (actionContent) this.interactiveElements.push(actionContent);
    if (dismissButton) this.interactiveElements.push(dismissButton);
  }

  @Listen("icDismiss", { capture: true })
  handleDismiss(): void {
    this.visible = false;
    clearInterval(this.timerRefreshInterval);
    this.timerProgress = 100;
  }

  @Listen("keydown", { target: "document" })
  handleKeyboard(ev: KeyboardEvent): void {
    if (this.isManual && this.visible) {
      switch (ev.key) {
        case "Tab":
          ev.preventDefault();
          this.findNextInteractiveElement(ev.shiftKey).setFocus();
          break;
        case "Escape":
          !ev.repeat && this.dismissAction();
          ev.stopImmediatePropagation();
          break;
      }
    }
  }

  @Listen("mouseenter")
  @Listen("mouseleave")
  handleTimer(ev: MouseEvent): void {
    if (!this.isManual) {
      switch (ev.type) {
        case "mouseenter":
          window.clearTimeout(this.dismissTimeout);
          window.clearInterval(this.timerRefreshInterval);
          this.timerProgress = 100;
          break;
        case "mouseleave":
          this.dismissTimeout = window.setTimeout(
            this.dismissAction,
            this.autoDismissTimeout
          );
          this.timerRefreshInterval = window.setInterval(
            this.handleProgressChange,
            AUTO_DISMISS_TIMER_REFRESH_RATE_MS
          );
          break;
      }
    }
  }

  /**
   * Used to display the individual toast
   * @returns The element that previously had focus before the toast appeared
   */
  @Method()
  async setVisible() {
    if (!this.visible) this.visible = true;
    if (!this.isManual) {
      this.dismissTimeout = window.setTimeout(
        this.dismissAction,
        this.autoDismissTimeout
      );
      this.timerRefreshInterval = window.setInterval(
        this.handleProgressChange,
        AUTO_DISMISS_TIMER_REFRESH_RATE_MS
      );
      return null;
    } else {
      window.setTimeout(() => this.interactiveElements[0].setFocus(), 200);
      return document.activeElement as HTMLElement;
    }
  }

  private dismissAction = (): void => {
    this.icDismiss.emit();
  };

  private handleProgressChange = () => {
    this.timerProgress -=
      (AUTO_DISMISS_TIMER_REFRESH_RATE_MS / this.autoDismissTimeout) * 100;
  };

  private handleLongText(
    headingTooLong: boolean,
    messageTooLong?: boolean
  ): void {
    if (messageTooLong || headingTooLong) {
      console.error(
        `Too many characters in toast ${headingTooLong ? "heading" : ""}${
          headingTooLong && messageTooLong ? " and " : ""
        }${
          messageTooLong ? "message" : ""
        }. Refer to character limits specified in the prop description`
      );
    }
  }

  private findNextInteractiveElement(
    isBackwards: boolean
  ): ActionAreaElementTypes {
    const first = this.interactiveElements[0];
    const last = this.interactiveElements[this.interactiveElements.length - 1];

    const source = isBackwards ? first : last;
    const target = isBackwards ? last : first;
    if (this.isActive(source)) return target;

    let currentIndex: number;
    const found = this.interactiveElements.some((el, index) => {
      if (!this.isActive(el)) return false;
      currentIndex = index;
      return true;
    });

    if (!found) return first;
    return this.interactiveElements[currentIndex + (isBackwards ? -1 : 1)];
  }

  private isActive(targetEl: HTMLElement): boolean {
    if (targetEl === this.el) return !!this.el.shadowRoot.activeElement;
    return document.activeElement === targetEl;
  }

  render() {
    const {
      variant,
      heading,
      message,
      visible,
      isManual,
      dismissButtonAriaLabel,
    } = this;
    return (
      <Host
        class={{ ["hidden"]: !visible }}
        role={isManual ? "dialog" : "status"}
      >
        <div class="container">
          {variant && visible && (
            <div class="toast-icon-container">
              <div
                class={{
                  ["divider"]: true,
                  [`divider-${variant}`]: true,
                }}
              ></div>
              {variant === "neutral" ? (
                <slot name="neutral-icon" />
              ) : (
                <span
                  class="toast-icon"
                  innerHTML={VARIANT_ICONS[variant].icon}
                ></span>
              )}
            </div>
          )}
          <div
            class={{
              ["toast-content"]: true,
              ["no-icon"]:
                variant === "neutral" && !isSlotUsed(this.el, "neutral-icon"),
            }}
          >
            <div class="toast-message">
              <ic-typography variant="subtitle-large">
                {visible && <h5>{heading}</h5>}
              </ic-typography>
              {message && (
                <ic-typography variant="body">
                  {visible && <p>{message}</p>}
                </ic-typography>
              )}
            </div>
            {isSlotUsed(this.el, "action") && (
              <div class="toast-action-container">
                <slot name="action" />
              </div>
            )}
          </div>
          {!isManual ? (
            <ic-loading-indicator
              class="toast-dismiss-timer"
              appearance="light"
              size="icon"
              progress={this.timerProgress}
            ></ic-loading-indicator>
          ) : (
            <ic-button
              id="dismiss-button"
              innerHTML={closeIcon}
              onClick={this.dismissAction}
              variant="icon"
              appearance={IcThemeForegroundEnum.Light}
              aria-label={dismissButtonAriaLabel}
            ></ic-button>
          )}
        </div>
      </Host>
    );
  }
}
