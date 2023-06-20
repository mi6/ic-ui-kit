import {
  Component,
  Element,
  Listen,
  Prop,
  State,
  h,
  Method,
} from "@stencil/core";
import {
  onComponentRequiredPropUndefined,
  isSlotUsed,
  getThemeFromContext,
  removeDisabledFalse,
} from "../../utils/helpers";
import {
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundEnum,
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
 */
@Component({
  tag: "ic-card",
  styleUrl: "ic-card.css",
  shadow: true,
})
export class Card {
  @Element() el: HTMLIcCardElement;

  @State() appearance?: IcThemeForeground = "default";
  @State() areaExpanded: boolean = false;
  @State() isFocussed: boolean = false;
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

  /**
   *  If `true`, the card will have an expandable area and expansion toggle button.
   */
  @Prop() expandable?: boolean = false;

  /**
   *  If `true`, the card will fill the width of the container.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * The heading for the card.
   */
  @Prop() heading!: string;

  /**
   * The URL that the clickable card link points to. If set, the clickable card will render as an "a" tag, otherwise it will render as a button.
   */
  @Prop() href?: string | undefined;

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

  disconnectedCallback(): void {
    if (this.parentIsAnchorTag) {
      this.parentEl.removeEventListener("focus", this.parentFocussed);
      this.parentEl.removeEventListener("blur", this.parentBlurred);
    }
  }

  componentWillLoad(): void {
    this.parentEl = this.el.parentElement;

    if (this.parentEl.tagName === "A") {
      this.clickable = true;
      this.parentIsAnchorTag = true;
      this.parentEl.classList.add("ic-card-wrapper-link");
      this.parentEl.addEventListener("focus", this.parentFocussed);
      this.parentEl.addEventListener("blur", this.parentBlurred);
    }
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.heading, propName: "heading" }],
      "Card"
    );
    this.updateTheme();
  }

  @Listen("click", { capture: true })
  handleHostClick(event: Event): void {
    if (this.disabled) {
      event.stopImmediatePropagation();
    }
  }

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.updateTheme(theme.mode);
  }

  /**
   * Sets focus on the card.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.el.shadowRoot.querySelector("a")) {
      this.el.shadowRoot.querySelector("a").focus();
    } else if (this.el.shadowRoot.querySelector("button")) {
      this.el.shadowRoot.querySelector("button").focus();
    }
  }

  private parentFocussed = (): void => {
    this.isFocussed = true;
  };

  private parentBlurred = (): void => {
    this.isFocussed = false;
  };

  private updateTheme(newTheme: IcThemeForeground = null): void {
    const foregroundColor = getThemeFromContext(this.el, newTheme || null);

    if (foregroundColor !== IcThemeForegroundEnum.Default) {
      this.appearance = foregroundColor;
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
      heading,
      message,
      href,
      hreflang,
      referrerpolicy,
      rel,
      subheading,
      target,
      fullWidth,
      parentIsAnchorTag,
      isFocussed,
    } = this;

    const Component = parentIsAnchorTag
      ? "div"
      : clickable
      ? this.href === undefined
        ? "button"
        : "a"
      : "div";

    const attrs = Component == "a" && {
      href: href,
      hrefLang: hreflang,
      referrerPolicy: referrerpolicy,
      rel: rel,
      target: target,
    };

    return (
      <Component
        class={{
          ["card"]: true,
          ["clickable"]: clickable && !disabled,
          ["disabled"]: disabled,
          ["fullwidth"]: fullWidth,
          ["focussed"]: isFocussed,
          ["dark"]: this.appearance === IcThemeForegroundEnum.Dark,
        }}
        tabindex={clickable && !parentIsAnchorTag ? 0 : null}
        aria-disabled={disabled ? "true" : null}
        disabled={disabled ? true : null}
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
          <div
            class={{
              ["card-message"]: true,
            }}
          >
            <slot name="message">
              <ic-typography variant="body">{message}</ic-typography>
            </slot>
          </div>
        )}
        {(isSlotUsed(this.el, "interaction-controls") || expandable) && (
          <div class="interaction-area">
            <div class="interaction-controls">
              <slot name="interaction-controls"></slot>
            </div>
            {expandable && (
              <ic-button
                class={{
                  ["toggle-button"]: true,
                  ["toggle-button-closed"]: !this.areaExpanded,
                  ["toggle-button-expanded"]: this.areaExpanded,
                }}
                variant="icon"
                size="large"
                disableTooltip
                aria-label="Toggle expandable area"
                aria-expanded={this.areaExpanded}
                aria-controls="expanded-content-area"
                onClick={this.toggleExpanded}
                innerHTML={chevronIcon}
              ></ic-button>
            )}
          </div>
        )}
        {isSlotUsed(this.el, "expanded-content") && this.areaExpanded && (
          <div class="expanded-content" id="expanded-content-area">
            <slot name="expanded-content"></slot>
          </div>
        )}
      </Component>
    );
  }
}
