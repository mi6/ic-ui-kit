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
import errorIcon from "../../assets/error-icon.svg";
import infoIcon from "../../assets/info-icon.svg";
import neutralIcon from "../../assets/neutral-icon.svg";
import successIcon from "../../assets/success-icon.svg";
import warningIcon from "../../assets/warning-icon.svg";
import { getSlot, isSlotUsed } from "../../utils/helpers";
import {
  IcActivationTypes,
  IcStatusVariants,
  IcThemeForegroundEnum,
} from "../../utils/types";
import { ActionAreaElementTypes } from "./ic-toast.types";

const ICONS = {
  neutral: {
    icon: neutralIcon,
    alt: "Neutral",
  },
  info: {
    icon: infoIcon,
    alt: "For your information",
  },
  warning: {
    icon: warningIcon,
    alt: "Warning",
  },
  error: {
    icon: errorIcon,
    alt: "Error",
  },
  success: {
    icon: successIcon,
    alt: "Success",
  },
};
const AUTO_DISMISS_TIMER_REFRESH_RATE_MS = 10;
const TOAST_HEADING_CHAR_LIMIT = 70;
const TOAST_MESSAGE_CHAR_LIMIT = 140;

/**
 * @slot action - IcButton or IcLink is placed below header and message
 * @slot neutral-icon - A custom neutral icon is placed on the left side of the component
 */
@Component({
  tag: "ic-toast",
  styleUrl: "ic-toast.css",
  shadow: true,
})
export class Toast {
  @Element() el: HTMLIcToastElement;
  /**
   * The title to display at the start of the toast. (NOTE: Should be no more than `70` characters)
   */
  @Prop() heading!: string;
  /**
   * The variant of the toast being rendered
   */
  @Prop() variant?: IcStatusVariants;
  /**
   * The main body message of the toast. (NOTE: Should be no more than `140` characters)
   */
  @Prop() message?: string;
  /**
   * How the toast will be dismissed. If manual will display a dismiss button.
   */
  @Prop() dismissMode?: IcActivationTypes = "manual";
  /**
   * If toast dismissMode is set to `automatic`, use this prop to define the time before the toast dismisses (in MILLISECONDS)
   * (NOTE: Has a minimum value of `5000ms`)
   */
  @Prop() autoDismissTimeout? = 5000;
  /**
   * Is emitted when the user dismisses the toast
   */
  @Event() toastDismiss: EventEmitter<void>;

  @State() visible = false;
  @State() timerProgress = 100;

  dismissTimeout: number;
  timerRefreshInterval: number;
  isManual: boolean;
  interactiveElements: ActionAreaElementTypes[] = [];

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
      return document.activeElement as HTMLElement;
    }
  }

  @Listen("toastDismiss", { capture: true })
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
          this.focusInteractiveEl(this.findNextInteractiveElement(ev.shiftKey));
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

  private dismissAction = (): void => {
    this.toastDismiss.emit();
  };

  private handleProgressChange = () => {
    this.timerProgress -=
      (AUTO_DISMISS_TIMER_REFRESH_RATE_MS / this.autoDismissTimeout) * 100;
  };

  private handleLongText(heading: boolean, message?: boolean): void {
    if (message || heading) {
      console.error(
        `Too many characters in toast ${heading ? "heading" : ""}${
          heading && message ? " and " : ""
        }${
          message ? "message" : ""
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

  private focusInteractiveEl(el: ActionAreaElementTypes): void {
    if ("setFocus" in el) el.setFocus();
    else (el.shadowRoot.firstElementChild as HTMLElement)?.focus();
  }

  componentWillLoad() {
    this.handleLongText(
      this.heading.length > TOAST_HEADING_CHAR_LIMIT,
      this.message?.length > TOAST_MESSAGE_CHAR_LIMIT
    );

    if (this.autoDismissTimeout < 5000) this.autoDismissTimeout = 5000;

    this.isManual = this.dismissMode === "manual";
  }

  componentDidLoad() {
    const actionContent = getSlot(this.el, "action") as ActionAreaElementTypes;
    if (actionContent) this.interactiveElements.push(actionContent);
    this.interactiveElements.push(
      this.el.shadowRoot.querySelector("ic-button")
    );
  }

  componentDidUpdate() {
    this.visible &&
      this.isManual &&
      this.focusInteractiveEl(this.interactiveElements[0]);
  }

  render() {
    const { variant, heading, message, visible, isManual } = this;
    return (
      <Host
        class={{ ["hidden"]: !visible }}
        role={isManual ? "dialog" : "status"}
        aria-label={variant ? ICONS[variant].alt : heading}
        aria-description={
          variant
            ? `${heading}${message !== undefined ? `. ${message}` : ""}`
            : message
        }
      >
        <div class="container">
          {variant && (
            <div class="toast-icon-container">
              <div
                class={{
                  ["divider"]: true,
                  [`divider-${variant}`]: true,
                }}
              ></div>
              {variant === "neutral" && isSlotUsed(this.el, "neutral-icon") ? (
                <slot name="neutral-icon" />
              ) : (
                <span class="toast-icon" innerHTML={ICONS[variant].icon}></span>
              )}
            </div>
          )}
          <div class="toast-content">
            <div class="toast-message">
              <ic-typography variant="subtitle-large">
                <h5>{heading}</h5>
              </ic-typography>
              {message && (
                <ic-typography variant="body">
                  <p>{message}</p>
                </ic-typography>
              )}
            </div>
            {isSlotUsed(this.el, "action") && isManual && (
              <div class="toast-action-container">
                <slot name="action" />
              </div>
            )}
          </div>
          {!isManual ? (
            <ic-loading-indicator
              class="dismiss-indicator"
              appearance="light"
              size="icon"
              progress={this.timerProgress}
            ></ic-loading-indicator>
          ) : (
            <ic-button
              id="dismiss-button"
              class="dismiss-indicator"
              innerHTML={closeIcon}
              onClick={this.dismissAction}
              variant="icon"
              appearance={IcThemeForegroundEnum.Light}
              aria-label="dismiss"
            ></ic-button>
          )}
        </div>
      </Host>
    );
  }
}
