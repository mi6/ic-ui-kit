import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  State,
  Listen,
  Prop,
  h,
} from "@stencil/core";
import neutralIcon from "../../assets/neutral-icon.svg";
import infoIcon from "../../assets/info-icon.svg";
import warningIcon from "../../assets/warning-icon.svg";
import errorIcon from "../../assets/error-icon.svg";
import successIcon from "../../assets/success-icon.svg";
import closeIcon from "../../assets/close-icon.svg";
import { isSlotUsed } from "../../utils/helpers";
import { IcThemeForegroundEnum, IcStatusVariants } from "../../utils/types";

const icon = {
  neutral: neutralIcon,
  info: infoIcon,
  warning: warningIcon,
  error: errorIcon,
  success: successIcon,
};

/**
 * @slot message - Content is placed to the right of the title.
 * @slot action - Content is placed to the right of the message.
 */
@Component({
  tag: "ic-alert",
  styleUrl: "ic-alert.css",
  shadow: true,
})
export class Alert {
  @Element() el: HTMLIcAlertElement;

  /**
   * The variant of the alert which will be rendered.
   */
  @Prop() variant?: IcStatusVariants = "neutral";
  /**
   * The optional title to display at the start of the alert.
   */
  @Prop() heading?: string = "";
  /**
   * The main body message of the alert.
   */
  @Prop() message?: string;
  /**
   * If `true`, the title and message will appear inline instead of above and below.
   */
  @Prop() titleAbove?: boolean = false;
  /**
   * If `true`, the alert will have a close icon at the end to dismiss it.
   */
  @Prop() dismissible?: boolean = false;
  /**
   * If `true`, the alert will have the 'alert' ARIA role and will be announced to screen readers.
   */
  @Prop() announced?: boolean = true;

  @State() visible: boolean = true;

  @State() alertTitleWrap: boolean = false;

  @Listen("icDismiss", { capture: true })
  handleClick(): void {
    this.visible = !this.visible;
  }
  /**
   * @deprecated This event should not be used anymore. Use icDismiss instead.
   */
  @Event() dismiss: EventEmitter<void>;

  /**
   * Is emitted when the user dismisses the alert.
   */
  @Event() icDismiss: EventEmitter<void>;

  private dismissAction = (): void => {
    this.dismiss.emit();
    this.icDismiss.emit();
  };

  private alertTitleShouldWrap() {
    const titleHeight =
      this.el.shadowRoot.querySelector(".alert-title")?.clientHeight;
    if (titleHeight > 24) this.alertTitleWrap = true;
  }

  componentDidLoad(): void {
    this.alertTitleShouldWrap();
  }

  render() {
    const {
      variant,
      heading,
      message,
      titleAbove,
      dismissible,
      announced,
      visible,
    } = this;

    return (
      visible && (
        <Host
          role={announced && "alert"}
          class={{
            [IcThemeForegroundEnum.Dark]: true,
          }}
        >
          <div
            class={{
              ["container"]: true,
              [`container-${variant}`]: true,
            }}
          >
            <div class="alert-icon-container">
              <div
                class={{
                  ["divider"]: true,
                  [`divider-${variant}`]: true,
                }}
              ></div>
              <span
                class={{
                  ["alert-icon"]: true,
                  ["svg-container"]: true,
                  [`icon-${variant}`]: true,
                }}
                innerHTML={icon[variant]}
              ></span>
            </div>
            <div class="alert-content">
              <div
                class={{
                  ["alert-message"]: true,
                  ["alert-message-title-above"]:
                    titleAbove || this.alertTitleWrap,
                }}
              >
                {heading && (
                  <ic-typography
                    class={{
                      ["alert-title"]: true,
                      ["alert-title-above"]: titleAbove || this.alertTitleWrap,
                    }}
                    variant="subtitle-large"
                  >
                    <p>{heading}</p>
                  </ic-typography>
                )}
                <slot name="message">
                  <ic-typography variant="body">{message}</ic-typography>
                </slot>
              </div>
              {isSlotUsed(this.el, "action") && (
                <div class="alert-action-container">
                  <slot name="action" />
                </div>
              )}
            </div>
            <div class="dismiss-icon-container">
              {dismissible && (
                <ic-button
                  class={{
                    ["svg-container"]: true,
                    ["dismiss-icon"]: true,
                  }}
                  innerHTML={closeIcon}
                  onClick={this.dismissAction}
                  variant="icon"
                  appearance={IcThemeForegroundEnum.Dark}
                  title="dismiss"
                ></ic-button>
              )}
            </div>
          </div>
        </Host>
      )
    );
  }
}
