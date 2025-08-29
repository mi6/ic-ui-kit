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
  Watch,
} from "@stencil/core";
import closeIcon from "../../assets/close-icon.svg";
import {
  isSlotUsed,
  pxToRem,
  renderDynamicChildSlots,
} from "../../utils/helpers";
import {
  IcStatusVariants,
  IcThemeMode,
  IcThemeSettings,
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
  private systemThemeObserver: MediaQueryList | null = null;
  private darkMode: boolean = false;
  private messageEl?: HTMLDivElement;
  private titleEl?: HTMLIcTypographyElement;

  @Element() el: HTMLIcAlertElement;

  @State() alertTitleWrap: boolean = false;
  @State() visible: boolean = true;

  /**
   * If `true`, the alert will have the 'alert' ARIA role and will be announced to screen readers.
   */
  @Prop() announced: boolean = true;

  /**
   * If `true`, the alert will have a close icon at the end to dismiss it.
   */
  @Prop() dismissible: boolean = false;

  /**
   * The optional title to display at the start of the alert.
   */
  @Prop() heading: string = "";

  /**
   * The main body message of the alert.
   */
  @Prop() message?: string;

  /**
   * If `true`, the default icon for the neutral variant will appear on the left of the alert.
   */
  @Prop() showDefaultIcon: boolean = true;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";
  @Watch("theme")
  themeChangeHandler(): void {
    if (this.theme !== "inherit") this.darkMode = this.theme === "dark";
  }

  /**
   * If `true`, the title and message will appear above and below instead of inline.
   */
  @Prop() titleAbove: boolean = false;

  /**
   * The variant of the alert which will be rendered.
   */
  @Prop() variant: IcStatusVariants = "neutral";

  /**
   * Is emitted when the user dismisses the alert.
   */
  @Event() icDismiss: EventEmitter<void>;

  disconnectedCallback(): void {
    this.hostMutationObserver?.disconnect();
    this.systemThemeObserver?.removeEventListener(
      "change",
      this.darkModeChangeHandler
    );
  }

  componentWillLoad(): void {
    if (!this.el.closest("ic-theme")) {
      this.systemThemeObserver = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      this.systemThemeObserver.addEventListener(
        "change",
        this.darkModeChangeHandler
      );
      this.darkMode = this.systemThemeObserver.matches;
    }

    this.themeChangeHandler();
  }

  componentDidLoad(): void {
    if (Number(this.titleEl?.clientHeight) > 24) this.alertTitleWrap = true;

    this.hostMutationObserver = new MutationObserver((mutationList) =>
      renderDynamicChildSlots(mutationList, "action", this)
    );
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });

    this.calculateMinHeight();
  }

  componentDidUpdate(): void {
    this.calculateMinHeight();
  }

  @Listen("icDismiss", { capture: true })
  handleClick(): void {
    this.visible = !this.visible;
  }

  @Listen("icThemeChange", { target: "document", capture: true })
  darkModeChangeHandler(
    ev: CustomEvent<IcThemeSettings> | MediaQueryListEvent
  ): void {
    this.darkMode = "detail" in ev ? ev.detail === "dark" : ev.matches;

    this.calculateMinHeight();
  }

  private dismissAction = (): void => {
    this.icDismiss.emit();
  };

  private calculateMinHeight(): void {
    const contentHeight = Number(this.messageEl?.clientHeight);

    const minHeight = pxToRem(
      `${(contentHeight > 40 ? contentHeight : 52) + (this.darkMode ? 0 : 4)}`
    );

    if (this.el.style.getPropertyValue("--ic-alert-min-height") !== minHeight)
      this.el.style.setProperty("--ic-alert-min-height", minHeight);
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
      alertTitleWrap,
      dismissAction,
    } = this;

    const Icon = () => {
      const iconClass = {
        "alert-icon": true,
        "svg-container": true,
        [`icon-${variant}`]: true,
      };

      if (variant === "neutral") {
        if (isSlotUsed(this.el, "neutral-icon")) {
          return (
            <div class={iconClass}>
              <slot name="neutral-icon"></slot>
            </div>
          );
        } else if (!showDefaultIcon) {
          return <div class="icon-placeholder"></div>;
        }
      }

      return (
        <span class={iconClass} innerHTML={VARIANT_ICONS[variant].icon}></span>
      );
    };

    return (
      visible && (
        <Host
          role={announced ? "alert" : null}
          class={{
            [`ic-theme-${theme}`]: theme !== "inherit",
          }}
        >
          <div class={{ container: true, [`container-${variant}`]: true }}>
            <div class="alert-icon-container">
              <div
                class={{ divider: true, [`divider-${variant}`]: true }}
              ></div>
              <Icon />
            </div>
            <div class="alert-content">
              <div
                class={{
                  "alert-message": true,
                  "alert-message-title-above": titleAbove || alertTitleWrap,
                }}
                ref={(el) => (this.messageEl = el)}
              >
                {heading && (
                  <ic-typography
                    class={{
                      "alert-title": true,
                      "alert-title-above": titleAbove || alertTitleWrap,
                    }}
                    variant="subtitle-large"
                    ref={(el) => (this.titleEl = el)}
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
                  class={{ "svg-container": true, "dismiss-icon": true }}
                  innerHTML={closeIcon}
                  onClick={dismissAction}
                  variant="icon-tertiary"
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
