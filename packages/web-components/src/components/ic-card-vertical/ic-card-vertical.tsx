import {
  Component,
  Element,
  Listen,
  Prop,
  State,
  h,
  Method,
  Host,
  Watch,
} from "@stencil/core";
import {
  onComponentRequiredPropUndefined,
  isSlotUsed,
  getBrandFromContext,
  removeDisabledFalse,
  renderDynamicChildSlots,
} from "../../utils/helpers";
import {
  IcBrand,
  IcBrandForeground,
  IcBrandForegroundEnum,
  IcThemeMode,
} from "../../utils/types";
import chevronIcon from "../../assets/chevron-icon.svg";

/**
 * @slot heading - Content will be placed at the top of the card to the right of the icon.
 * @slot message - Content will be placed in the main body of the card.
 * @slot subheading - Content will be placed below the card heading.
 * @slot adornment - Content will be placed below the card subheading.
 * @slot image-top - Content will be placed at the top of the card above all other content.
 * @slot image-mid - Content will be placed below the card heading section.
 * @slot icon - Content will be placed to the left of the card heading.
 * @slot interaction-button - Content will be placed in the top right corner of the heading section.
 * @slot interaction-controls - Content will be placed below the card message.
 * @slot expanded-content - Content will be placed below the interaction controls but will not initially be rendered.
 * @slot badge - Badge component overlaying the top right of the card.
 */
@Component({
  tag: "ic-card-vertical",
  styleUrl: "ic-card-vertical.css",
  shadow: true,
})
export class CardVertical {
  private hostMutationObserver: MutationObserver | null = null;

  @Element() el: HTMLIcCardVerticalElement;

  @State() areaExpanded: boolean = false;
  @State() isFocussed: boolean = false;
  @State() monochrome: boolean = false;
  @State() parentEl: HTMLElement | null = null;
  @State() parentIsAnchorTag: boolean = false;

  /**
   * If `true`, the card will be a clickable variant, instead of static.
   */
  @Prop({ mutable: true }) clickable?: boolean = false;

  /**
   * If `true`, the card will be disabled if it is clickable.
   */
  @Prop() disabled?: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   *  If `true`, the card will have an expandable area and expansion toggle button.
   */
  @Prop() expandable?: boolean = false;

  /**
   *  If `true`, the card will fill the width of the container.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * The heading for the card. This is required, unless a slotted heading is used.
   */
  @Prop() heading?: string;

  /**
   * The URL that the clickable card link points to. If set, the clickable card will render as an "a" tag, otherwise it will render as a button.
   */
  @Prop() href?: string;

  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string = "";

  /**
   * The main body message of the card.
   */
  @Prop() message?: string = "";

  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;

  /**
   * The subheading for the card.
   */
  @Prop() subheading?: string;

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop({ mutable: true }) theme?: IcThemeMode = "inherit";

  disconnectedCallback(): void {
    if (this.parentEl && this.parentIsAnchorTag) {
      this.parentEl.removeEventListener("focus", this.parentFocussed);
      this.parentEl.removeEventListener("blur", this.parentBlurred);
    }

    this.hostMutationObserver?.disconnect();
  }

  componentWillLoad(): void {
    this.parentEl = this.el.parentElement;

    if (this.parentEl?.tagName === "A") {
      this.clickable = true;
      this.parentIsAnchorTag = true;
      this.parentEl.classList.add("ic-card-wrapper-link");
      this.parentEl.addEventListener("focus", this.parentFocussed);
      this.parentEl.addEventListener("blur", this.parentBlurred);
    }
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    !isSlotUsed(this.el, "heading") &&
      onComponentRequiredPropUndefined(
        [{ prop: this.heading, propName: "heading" }],
        "Card"
      );
    this.updateTheme();

    this.hostMutationObserver = new MutationObserver((mutationList) =>
      renderDynamicChildSlots(
        mutationList,
        [
          "message",
          "adornment",
          "expanded-content",
          "image-top",
          "image-mid",
          "icon",
          "interaction-button",
          "badge",
          "interaction-controls",
        ],
        this
      )
    );
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });
  }

  @Listen("click", { capture: true })
  handleHostClick(event: Event): void {
    if (this.disabled) {
      event.stopImmediatePropagation();
    }
  }

  @Listen("brandChange", { target: "document" })
  brandChangeHandler(ev: CustomEvent<IcBrand>): void {
    this.updateTheme(ev.detail.mode);
  }

  /**
   * Sets focus on the card.
   */
  @Method()
  async setFocus(): Promise<void> {
    const shadowRoot = this.el.shadowRoot;

    if (shadowRoot) {
      if (shadowRoot.querySelector("a")) {
        shadowRoot.querySelector("a")?.focus();
      } else if (shadowRoot.querySelector("button")) {
        shadowRoot.querySelector("button")?.focus();
      }
    }
  }

  private parentFocussed = (): void => {
    this.isFocussed = true;
  };

  private parentBlurred = (): void => {
    this.isFocussed = false;
  };

  private updateTheme(mode: IcBrandForeground | null = null): void {
    const foregroundColor = getBrandFromContext(this.el, mode);

    if (foregroundColor !== IcBrandForegroundEnum.Default) {
      this.monochrome = true;
      this.theme =
        foregroundColor === IcBrandForegroundEnum.Light
          ? IcBrandForegroundEnum.Dark
          : IcBrandForegroundEnum.Light;
    }
  }

  private toggleExpanded = (): void => {
    this.areaExpanded = !this.areaExpanded;
  };

  render() {
    const {
      clickable,
      disabled,
      expandable,
      fullWidth,
      heading,
      isFocussed,
      message,
      monochrome,
      href,
      hreflang,
      parentIsAnchorTag,
      referrerpolicy,
      rel,
      subheading,
      target,
      theme,
    } = this;

    const Component =
      parentIsAnchorTag || !clickable
        ? "div"
        : href === undefined
        ? "button"
        : "a";

    const attrs = Component == "a" && {
      href: href,
      hrefLang: hreflang,
      referrerPolicy: referrerpolicy,
      rel: rel,
      target: target,
    };

    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <Component
          class={{
            card: true,
            clickable: !!clickable && !disabled,
            disabled: !!disabled,
            fullwidth: !!fullWidth,
            focussed: isFocussed,
            monochrome: monochrome,
          }}
          tabindex={clickable && !parentIsAnchorTag ? 0 : undefined}
          aria-disabled={disabled ? "true" : null}
          disabled={disabled}
          {...attrs}
        >
          {isSlotUsed(this.el, "image-top") && (
            <div class="image-top">
              <slot name="image-top"></slot>
            </div>
          )}
          <div class="card-header">
            {isSlotUsed(this.el, "icon") && (
              <div class="icon">
                <slot name="icon" />
              </div>
            )}
            <div class="card-title">
              <slot name="heading">
                <ic-typography variant="h4">
                  <p>{heading}</p>
                </ic-typography>
              </slot>
            </div>
            {isSlotUsed(this.el, "interaction-button") && (
              <div class="interaction-button">
                <slot name="interaction-button"></slot>
              </div>
            )}
          </div>
          {(subheading || isSlotUsed(this.el, "subheading")) && (
            <div class="subheading">
              <slot name="subheading">
                <ic-typography variant="subtitle-small">
                  {subheading}
                </ic-typography>
              </slot>
            </div>
          )}
          {isSlotUsed(this.el, "adornment") && (
            <div class="adornment">
              <slot name="adornment"></slot>
            </div>
          )}
          {isSlotUsed(this.el, "image-mid") && (
            <div class="image-mid">
              <slot name="image-mid"></slot>
            </div>
          )}
          {(message || isSlotUsed(this.el, "message")) && (
            <div class="card-message">
              {message && (
                <ic-typography variant="body">{message}</ic-typography>
              )}
              {isSlotUsed(this.el, "message") && <slot name="message"></slot>}
            </div>
          )}
          {(isSlotUsed(this.el, "interaction-controls") || expandable) && (
            <div class="interaction-area">
              <div class="interaction-controls">
                <slot name="interaction-controls"></slot>
              </div>
              {expandable && (
                <ic-tooltip
                  id="ic-tooltip-expand-button"
                  label="Toggle expandable area"
                  silent
                >
                  <button
                    class={{
                      "toggle-button": true,
                      [`toggle-button-${
                        this.areaExpanded ? "expanded" : "closed"
                      }`]: true,
                    }}
                    aria-label="Toggle expandable area"
                    aria-expanded={`${this.areaExpanded}`}
                    aria-controls={
                      this.areaExpanded ? "expanded-content-area" : null
                    }
                    onClick={this.toggleExpanded}
                    innerHTML={chevronIcon}
                  ></button>
                </ic-tooltip>
              )}
            </div>
          )}
          {isSlotUsed(this.el, "expanded-content") && this.areaExpanded && (
            <div class="expanded-content" id="expanded-content-area">
              <slot name="expanded-content"></slot>
            </div>
          )}
          {isSlotUsed(this.el, "badge") && <slot name="badge"></slot>}
        </Component>
      </Host>
    );
  }
}
