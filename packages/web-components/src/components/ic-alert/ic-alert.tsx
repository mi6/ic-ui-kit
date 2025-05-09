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
import closeIcon from "../../assets/close-icon.svg";
import { isSlotUsed, renderDynamicChildSlots } from "../../utils/helpers";
import {
  IcBrandForegroundEnum,
  IcStatusVariants,
  IcThemeMode,
} from "../../utils/types";
import { VARIANT_ICONS } from "../../utils/constants";

/**
 * @slot message - Content is placed to the right of the title.
 * @slot action - Content is placed to the right of the message.
 * @slot neutral-icon - A custom neutral icon is placed to the left of the title. This will override the default icon if used.
 */
@Component({
  tag: "ic-alert",
  styleUrl: "ic-alert.css",
  shadow: true,
})
export class Alert {
  private hostMutationObserver: MutationObserver | null = null;

  @Element() el: HTMLIcAlertElement;

  @State() alertTitleWrap: boolean = false;
  @State() visible: boolean = true;

  /**
   * If `true`, the alert will have the 'alert' ARIA role and will be announced to screen readers.
   */
  @Prop() announced?: boolean = true;

  /**
   * If `true`, the alert will have a close icon at the end to dismiss it.
   */
  @Prop() dismissible?: boolean = false;

  /**
   * The optional title to display at the start of the alert.
   */
  @Prop() heading?: string = "";

  /**
   * The main body message of the alert.
   */
  @Prop() message?: string;

  /**
   * If `true`, the default icon for the neutral variant will appear on the left of the alert.
   */
  @Prop() showDefaultIcon?: boolean = true;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * If `true`, the title and message will appear above and below instead of inline.
   */
  @Prop() titleAbove?: boolean = false;

  /**
   * The variant of the alert which will be rendered.
   */
  @Prop() variant?: IcStatusVariants = "neutral";

  /**
   * Is emitted when the user dismisses the alert.
   */
  @Event() icDismiss: EventEmitter<void>;

  disconnectedCallback(): void {
    this.hostMutationObserver?.disconnect();
  }

  componentDidLoad(): void {
    this.alertTitleShouldWrap();

    this.hostMutationObserver = new MutationObserver((mutationList) =>
      renderDynamicChildSlots(mutationList, "action", this)
    );
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });
  }

  @Listen("icDismiss", { capture: true })
  handleClick(): void {
    this.visible = !this.visible;
  }

  private dismissAction = (): void => {
    this.icDismiss.emit();
  };

  private alertTitleShouldWrap() {
    const titleHeight =
      this.el.shadowRoot?.querySelector(".alert-title")?.clientHeight;
    if (titleHeight && titleHeight > 24) this.alertTitleWrap = true;
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
      showDefaultIcon,
      theme,
    } = this;

    return (
      visible && (
        <Host
          role={announced ? "alert" : null}
          class={{
            [IcBrandForegroundEnum.Dark]: true,
            [`ic-theme-${theme}`]: theme !== "inherit",
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
              {variant === "neutral" ? (
                isSlotUsed(this.el, "neutral-icon") ? (
                  <div class="alert-icon svg-container icon-neutral">
                    <slot name="neutral-icon"></slot>
                  </div>
                ) : showDefaultIcon ? (
                  <span
                    class={{
                      ["alert-icon"]: true,
                      ["svg-container"]: true,
                      [`icon-${variant}`]: true,
                    }}
                    innerHTML={VARIANT_ICONS[variant].icon}
                  ></span>
                ) : (
                  <div class="icon-placeholder"></div>
                )
              ) : (
                <span
                  class={{
                    ["alert-icon"]: true,
                    ["svg-container"]: true,
                    [`icon-${variant}`]: true,
                  }}
                  innerHTML={VARIANT_ICONS[variant!].icon}
                ></span>
              )}
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
                  theme="dark"
                  title="Dismiss"
                ></ic-button>
              )}
            </div>
          </div>
        </Host>
      )
    );
  }
}
