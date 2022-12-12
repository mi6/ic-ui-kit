import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  Watch,
  h,
} from "@stencil/core";

import { getThemeFromContext, inheritAttributes } from "../../utils/helpers";
import { IC_INHERITED_ARIA } from "../../utils/constants";
import {
  IcButtonSizes,
  IcButtonTypes,
  IcButtonVariants,
  IcButtonTooltipPlacement,
} from "./ic-button.types";
import {
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "../../utils/types";

let buttonIds = 0;

/**
 * @slot icon - Content will be placed to the left of the button label.
 */
@Component({
  tag: "ic-button",
  styleUrl: "ic-button.css",
  shadow: true,
})
export class Button {
  @Element() el: HTMLIcButtonElement;
  /**
   * If `true`, the button will be in disabled state.
   */
  @Prop() disabled?: boolean = false;
  /**
   * If `true`, the button will be in loading state.
   */
  @Prop() loading?: boolean = false;
  /**
   * The type of the button.
   */
  @Prop() type?: IcButtonTypes = "button";
  /**
   * The URL that the link points to. This will render the button as an "a" tag.
   */
  @Prop() href?: string;
  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;
  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;
  /**
   * If `true`, the user can save the linked URL instead of navigating to it.
   */
  @Prop() download?: string | boolean = false;
  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string;
  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;
  /**
   * The variant of the button to be displayed.
   */
  @Prop() variant?: IcButtonVariants = "primary";
  /**
   * The size of the button to be displayed.
   */
  @Prop() size?: IcButtonSizes = "default";
  /**
   * If `true`, the button will fill the width of the container.
   */
  @Prop() fullWidth?: boolean = false;
  /**
   * If `true`, the ic-tooltip which is shown for icon variant will be disabled. Title or aria-label must be set if this prop is not applied.
   */
  @Prop() disableTooltip?: boolean = false;
  /**
   * The position of the tooltip in relation to the button.
   */
  @Prop() tooltipPlacement?: IcButtonTooltipPlacement = "bottom";
  /**
   * The appearance of the button, e.g. dark, light, or the default.
   */
  @Prop({ mutable: true }) appearance?: IcThemeForeground = "default";
  /**
   * Emitted when button has focus
   */
  @Event() icFocus!: EventEmitter<void>;
  /**
   * Emitted when button has blur
   */
  @Event() icBlur!: EventEmitter<void>;

  // CalculatedWidth must have a default value, since width is only calculated once button is rendered (with text).
  private calculatedWidth: number = 68;
  private inheritedAttributes: { [k: string]: unknown } = {};
  private buttonEl: HTMLElement;
  private hasTooltip: boolean = false;
  private buttonIdNum = buttonIds++;
  private tooltipEl: HTMLIcTooltipElement;
  private id: string;

  @Watch("loading")
  calculateWidth(): void {
    // Assume even padding on left and right
    this.calculatedWidth = this.el.offsetWidth - 2 * this.el.offsetLeft;
  }

  @Listen("click", { capture: true })
  handleHostClick(event: Event): void {
    if (this.disabled || this.loading) {
      event.stopImmediatePropagation();
    }
  }

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.updateTheme(theme.mode);
  }

  /**
   * Sets focus on the native `button`
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.buttonEl) {
      this.buttonEl.focus();
    }
  }

  /**
   * @internal Updates tooltip/aria-label text - needed as can't watch an ARIA attribute change.
   */
  @Method()
  async updateAriaLabel(newValue: string): Promise<void> {
    if (this.hasTooltip) {
      this.tooltipEl.label = newValue;
      this.buttonEl.setAttribute("aria-label", newValue);
    }
  }

  private getLoadingBarWidth(): { [key: string]: string } {
    return { width: `${this.calculatedWidth.toString()}px` };
  }

  private hasIconSlot(): boolean {
    const iconEl = this.el.querySelector(`[slot="icon"]`);
    if (iconEl != null) {
      return true;
    }
    return false;
  }

  private handleHiddenFormButtonClick(form: HTMLFormElement): void {
    const hiddenFormButton = document.createElement("button");

    hiddenFormButton.setAttribute("type", this.el.type);
    hiddenFormButton.style.display = "none";

    form.appendChild(hiddenFormButton);

    hiddenFormButton.click();
    hiddenFormButton.remove();
  }

  private handleClick = (): void => {
    if (
      (this.el.type === "submit" || this.el.type === "reset") &&
      !!this.el.closest("FORM")
    ) {
      this.handleHiddenFormButtonClick(this.el.closest("FORM"));
    }
  };

  private onFocus = () => {
    this.icFocus.emit();
  };

  private onBlur = () => {
    this.icBlur.emit();
  };

  private updateTheme(newTheme: IcThemeForeground = null): void {
    const foregroundColor = getThemeFromContext(this.el, newTheme || null);

    if (foregroundColor !== IcThemeForegroundEnum.Default) {
      this.appearance = foregroundColor;
    }
  }

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.el, [
      ...IC_INHERITED_ARIA,
      "aria-expanded",
      "title",
    ]);

    const id = this.el.id;
    this.id = id !== undefined ? id : null;
    this.hasTooltip = this.variant === "icon";
  }

  componentDidLoad(): void {
    this.calculateWidth();
    this.updateTheme();
  }

  render() {
    const TagType = (this.href && "a") || "button";
    const {
      title,
      "aria-label": ariaLabel,
      ...restInheritedAttributes
    } = this.inheritedAttributes;
    const buttonAttrs =
      TagType === "button"
        ? { type: this.type, disabled: this.disabled }
        : {
            download: this.download !== false ? this.download : null,
            href: this.href,
            rel: this.rel,
            target: this.target,
            referrerpolicy: this.referrerpolicy,
            hreflang: this.hreflang,
          };
    const newTitle = title && (title as string);
    const titleAttr = this.hasTooltip ? {} : { title: newTitle };
    let tooltipText = "";
    if (this.hasTooltip) {
      if (newTitle !== undefined) {
        tooltipText = newTitle;
      } else if (ariaLabel !== null) {
        tooltipText = ariaLabel as string;
      }
    }

    let describedBy: string = null;
    let buttonId: string = null;
    if (this.hasTooltip) {
      buttonId =
        this.id !== null
          ? `ic-button-with-tooltip-${this.id}`
          : `ic-button-with-tooltip-${this.buttonIdNum}`;
      describedBy = `ic-tooltip-${buttonId}`;
    }

    const ButtonContent = () => {
      return (
        <TagType
          class="button"
          aria-disabled={this.loading || this.disabled ? "true" : null}
          aria-label={this.loading ? "Loading" : ariaLabel}
          {...buttonAttrs}
          {...restInheritedAttributes}
          {...titleAttr}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref={(el) => (this.buttonEl = el)}
          id={buttonId}
          aria-describedby={describedBy}
        >
          {this.hasIconSlot() && !this.loading && (
            <div class="icon-container">
              <slot name="icon" />
            </div>
          )}
          {this.loading ? (
            <div class="loading-container" style={this.getLoadingBarWidth()}>
              <ic-loading-indicator
                type="linear"
                appearance={
                  this.variant === "primary" ||
                  this.variant === "destructive" ||
                  this.appearance === IcThemeForegroundEnum.Dark ||
                  this.appearance === IcThemeForegroundEnum.Light
                    ? "light"
                    : "dark"
                }
              ></ic-loading-indicator>
            </div>
          ) : (
            <slot />
          )}
        </TagType>
      );
    };

    return (
      <Host
        class={{
          ["disabled"]: this.disabled && !this.loading,
          [`button-variant-${this.variant}`]: true,
          [`button-size-${this.size}`]: true,
          ["loading"]: this.loading,
          ["dark"]: this.appearance === IcThemeForegroundEnum.Dark,
          ["light"]: this.appearance === IcThemeForegroundEnum.Light,
          ["full-width"]: this.fullWidth,
        }}
        onClick={this.handleClick}
      >
        {this.hasTooltip && (
          <ic-tooltip
            class={{ ["tooltip-disabled"]: this.disableTooltip }}
            ref={(el) => (this.tooltipEl = el)}
            label={tooltipText}
            target={buttonId}
            placement={this.tooltipPlacement}
          >
            <ButtonContent />
          </ic-tooltip>
        )}

        {!this.hasTooltip && <ButtonContent />}
      </Host>
    );
  }
}
