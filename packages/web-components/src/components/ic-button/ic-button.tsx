import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  State,
  forceUpdate,
  h,
} from "@stencil/core";

import {
  getThemeFromContext,
  inheritAttributes,
  isSlotUsed,
  removeDisabledFalse,
  renderFileHiddenInput,
} from "../../utils/helpers";
import { IC_INHERITED_ARIA } from "../../utils/constants";
import {
  IcButtonTypes,
  IcButtonVariants,
  IcButtonTooltipPlacement,
} from "./ic-button.types";
import {
  IcSizes,
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "../../utils/types";
import arrowDropdown from "../../assets/arrow-dropdown.svg";

let buttonIds = 0;

/**
 * @slot icon - Deprecated. This slot should not be used anymore. Use left-icon or right-icon slot instead.
 * @slot left-icon - Content will be placed to the left of the button label.
 * @slot right-icon - Content will be placed to the right of the button label.
 * @slot top-icon - Content will be placed above the button label.
 * @slot badge - Badge component overlaying the top right of the button.
 * @slot router-item - Handle routing by nesting your routes in this slot. Setting loading to true will have no impact on this slot.
 */
@Component({
  tag: "ic-button",
  styleUrl: "ic-button.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Button {
  private buttonEl: HTMLElement;
  private buttonIdNum = buttonIds++;
  private hasTooltip: boolean = false;
  private id: string;
  private inheritedAttributes: { [k: string]: unknown } = {};
  private describedByEl: HTMLElement = null;
  private describedById: string = null;
  private mutationObserver: MutationObserver = null;
  private hostMutationObserver: MutationObserver = null;
  private routerSlot: HTMLElement;

  @Element() el: HTMLIcButtonElement;

  @State() ariaLabel: string = null;
  @State() describedByContent: string = null;
  @State() title: string = null;

  /**
   * If `fileUpload` is set to `true`, this is the accepted list of file types.
   */
  @Prop() accept?: string = "*";

  /**
   * The appearance of the button, e.g. dark, light, or the default.
   */
  @Prop({ mutable: true }) appearance?: IcThemeForeground = "default";

  /**
   * @internal Used to identify any related child component
   */
  @Prop() ariaControlsId: string | boolean;

  /**
   * @internal Used to identify any related child component
   */
  @Prop() ariaOwnsId: string | boolean;

  /**
   * If `true`, the button will be in disabled state.
   */
  @Prop() disabled?: boolean = false;

  /**
   * If `true`, the ic-tooltip which is shown for icon variant will be disabled. Title or aria-label must be set if this prop is not applied.
   */
  @Prop() disableTooltip?: boolean = false;

  /**
   * If `true`, the user can save the linked URL instead of navigating to it.
   */
  @Prop() download?: string | boolean = false;

  /**
   * If `true`, the button will show a dropdown icon.
   */
  @Prop() dropdown?: boolean = false;

  /**
   * If `true`, the aria-expanded value will be set to true. This is only applied if the dropdown prop is also true.
   */
  @Prop({ mutable: true, reflect: true }) dropdownExpanded?: boolean = false;

  /**
   * If `true`, when the button is clicked the native file explorer will be launched.
   */
  @Prop() fileUpload?: boolean = false;

  /**
   * The name of the control for the file input, which is submitted with the form data.
   */
  @Prop() fileInputName: string = `ic-button-file-upload-input-${buttonIds++}`;

  /**
   * The <form> element to associate the button with.
   */
  @Prop() form?: string;

  /**
   * The URL that processes the information submitted by the button. It overrides the action attribute of the button's form owner. Does nothing if there is no form owner.
   */
  @Prop() formaction?: string;

  /**
   * The way the submitted form data is encoded.
   */
  @Prop() formenctype?: string;

  /**
   * The HTTP method used to submit the form.
   */
  @Prop() formmethod?: string;

  /**
   * If `true`, the form will not be validated when submitted.
   */
  @Prop() formnovalidate?: boolean;

  /**
   * The place to display the response from submitting the form. It overrides the target attribute of the button's form owner.
   */
  @Prop() formtarget?: string;

  /**
   * If `true`, the button will fill the width of the container.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * The URL that the link points to. This will render the button as an "a" tag.
   */
  @Prop() href?: string;

  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string;

  /**
   * If `true`, the button will be in loading state.
   */
  @Prop() loading?: boolean = false;

  /**
   * If `fileUpload` is set to `true`, this boolean determines whether multiple files are accepted.
   */
  @Prop() multiple?: boolean = false;

  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;

  /**
   * The list of the files that have been selected by a user.
   */
  @Prop() selectedFiles: FileList;

  /**
   * The size of the button to be displayed.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * The position of the tooltip in relation to the button.
   */
  @Prop() tooltipPlacement?: IcButtonTooltipPlacement = "bottom";

  /**
   * If `true`, the secondary variant of button will have a transparent background rather than white.
   */
  @Prop() transparentBackground?: boolean = true;

  /**
   * The type of the button.
   */
  @Prop() type?: IcButtonTypes = "button";

  /**
   * The variant of the button to be displayed.
   */
  @Prop() variant?: IcButtonVariants = "primary";

  /**
   * Emitted when button has blur
   */
  @Event() icBlur!: EventEmitter<void>;

  /**
   * If `fileUpload` is set to `true`, this will be emitted when a file is selected in the native explorer.
   */
  @Event() icFileSelection!: EventEmitter<FileList>;

  /**
   * Emitted when button has focus
   */
  @Event() icFocus!: EventEmitter<void>;

  disconnectedCallback(): void {
    if (this.mutationObserver !== null && this.mutationObserver !== undefined) {
      this.mutationObserver.disconnect();
    }
    if (
      this.hostMutationObserver !== null &&
      this.hostMutationObserver !== undefined
    ) {
      this.hostMutationObserver.disconnect();
    }
  }

  componentWillUpdate(): void {
    this.loadingWidth();
    this.setHasTooltip();
  }

  componentWillLoad(): void {
    const allInheritedAttributes = inheritAttributes(this.el, [
      ...IC_INHERITED_ARIA,
      "title",
    ]);

    const {
      title,
      "aria-label": ariaLabel,
      ...restInheritedAttributes
    } = allInheritedAttributes;

    this.title = title as string;
    this.ariaLabel = ariaLabel as string;
    this.inheritedAttributes = restInheritedAttributes;

    removeDisabledFalse(this.disabled, this.el);

    this.el.setAttribute("exportparts", "button");

    const id = this.el.id;
    this.id = id !== undefined ? id : null;
    this.setHasTooltip();

    if (!this.hasTooltip) {
      const describedById = this.inheritedAttributes[
        "aria-describedby"
      ] as string;
      if (describedById !== undefined) {
        this.describedById = describedById;
        const el = this.el.parentElement.querySelector(
          `#${describedById}`
        ) as HTMLElement;
        if (el !== undefined && el !== null) {
          this.describedByContent = el.innerText;
          this.describedByEl = el;
        }
      }
    }
  }

  componentDidLoad(): void {
    this.updateTheme();

    if (typeof MutationObserver !== "undefined") {
      if (this.describedById) {
        this.mutationObserver = new MutationObserver(this.mutationCallback);
        this.mutationObserver.observe(this.describedByEl, {
          characterData: true,
          childList: true,
          subtree: true,
        });
      }

      this.hostMutationObserver = new MutationObserver(
        this.hostMutationCallback
      );
      this.hostMutationObserver.observe(this.el, {
        attributes: true,
      });
    }
  }

  componentWillRender(): void {
    this.setViewBox()?.setAttribute("viewBox", "0 0 24 24");
  }

  @Listen("click", { capture: true })
  handleHostClick(event: Event): void {
    if (!this.hasRouterSlot()) {
      if (this.fileUpload) {
        this.openFileExplorer();
      }
      if (this.disabled || this.loading) {
        event.stopImmediatePropagation();
      }
      if (this.dropdown) {
        this.dropdownExpanded = !this.dropdownExpanded;
      }
    }
  }

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.updateTheme(theme.mode);
  }

  /**
   * Sets focus on the native `button`.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.buttonEl) {
      this.buttonEl.focus();
    }
  }

  private hasIconSlot(): boolean {
    const iconEl = this.el.querySelector(`[slot="icon"]`);
    return iconEl !== null;
  }

  private hasLeftIconSlot(): boolean {
    const iconEl = this.el.querySelector(`[slot="left-icon"]`);
    return iconEl !== null;
  }

  private hasTopIconSlot(): boolean {
    const iconEl = this.el.querySelector(`[slot="top-icon"]`);
    return iconEl !== null;
  }

  private hasRightIconSlot(): boolean {
    const iconEl = this.el.querySelector(`[slot="right-icon"]`);
    return iconEl !== null;
  }

  private hasRouterSlot(): boolean {
    this.routerSlot = this.el.querySelector('[slot="router-item"]');
    if (this.routerSlot) {
      this.routerSlot.ariaLabel = this.routerSlot.textContent;
    }
    return !!this.routerSlot;
  }

  private setViewBox = () => {
    let iconEl;
    if (this.hasLeftIconSlot()) {
      iconEl = this.el.querySelector(`[slot="left-icon"]`);
    } else if (this.hasRightIconSlot()) {
      iconEl = this.el.querySelector(`[slot="right-icon"]`);
    } else {
      iconEl = null;
    }
    return iconEl;
  };

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
      !this.hasRouterSlot() &&
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

  private loadingWidth = () => {
    if (this.loading) {
      this.el.style.setProperty(
        "--min-width",
        `${this.el.getBoundingClientRect().width}px`
      );
    }
  };

  // triggered when text content of sibling element in light DOM changes
  private mutationCallback = (): void => {
    this.describedByContent = this.describedByEl.innerText;
  };

  // triggered when attributes of host element change
  private hostMutationCallback = (mutationList: MutationRecord[]): void => {
    let forceComponentUpdate = false;
    mutationList.forEach(({ attributeName }) => {
      const attribute = this.el.getAttribute(attributeName);
      if (attributeName === "title") this.title = attribute;
      else if (attributeName === "aria-label") this.ariaLabel = attribute;

      if (IC_INHERITED_ARIA.includes(attributeName)) {
        this.inheritedAttributes[attributeName] = attribute;
        forceComponentUpdate = true;
      }
    });
    if (forceComponentUpdate) {
      forceUpdate(this);
    }
  };

  private setHasTooltip = (): void => {
    this.hasTooltip =
      !this.disableTooltip && (!!this.title || this.variant === "icon");
  };

  // file explorer is only opened if the property fileUpload is set to 'true'
  private openFileExplorer = () => {
    renderFileHiddenInput(
      this.icFileSelection,
      this.el,
      this.multiple,
      this.fileInputName,
      this.selectedFiles,
      this.disabled,
      this.accept
    );
  };

  private isTooltipSilent = (): boolean => {
    if (this.variant === "icon") {
      if (this.title) return true;
      else if (this.ariaLabel) return true;
      else return false;
    } else {
      return false;
    }
  };

  render() {
    const TagType = (this.href && "a") || "button";
    const { title, ariaLabel, inheritedAttributes } = this;
    const buttonAttrs =
      TagType === "button"
        ? {
            type: this.type,
            disabled: this.disabled,
            form: this.form,
            formaction: this.formaction,
            formenctype: this.formenctype,
            formmethod: this.formmethod,
            formnovalidate: this.formnovalidate,
            formtarget: this.formtarget,
          }
        : {
            download: this.download !== false ? this.download : null,
            href: this.href,
            rel: this.rel,
            target: this.target,
            referrerpolicy: this.referrerpolicy,
            hreflang: this.hreflang,
          };

    let describedBy: string = null;
    let buttonId: string = null;
    if (this.hasTooltip) {
      buttonId =
        this.id !== null
          ? `ic-button-with-tooltip-${this.id}`
          : `ic-button-with-tooltip-${this.buttonIdNum}`;
      describedBy =
        this.variant === "icon" && !!ariaLabel
          ? null
          : `ic-tooltip-${buttonId}`;
    } else {
      describedBy = this.describedById;
    }

    const ButtonContent = () => {
      return (
        <TagType
          class="button"
          aria-disabled={this.loading || this.disabled ? "true" : null}
          aria-label={this.loading ? "Loading" : ariaLabel}
          {...buttonAttrs}
          {...inheritedAttributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref={(el) => (this.buttonEl = el)}
          aria-describedby={describedBy}
          part="button"
        >
          {this.hasIconSlot() && !this.loading && (
            <div class="icon-container">
              <slot name="icon" />
            </div>
          )}
          {this.hasLeftIconSlot() && !this.loading && (
            <div class="icon-container">
              <slot name="left-icon" />
            </div>
          )}
          {this.hasTopIconSlot() &&
            !this.hasLeftIconSlot() &&
            !this.hasRightIconSlot() &&
            !this.loading && (
              <div class="icon-container">
                <slot name="top-icon" />
              </div>
            )}
          {this.loading ? (
            <div class="loading-container">
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
          {this.hasRightIconSlot() && !this.loading && !this.dropdown && (
            <div class={{ "icon-container": true, "right-icon": true }}>
              <slot name="right-icon" />
            </div>
          )}
          {this.dropdown &&
            !this.loading &&
            this.variant !== "icon" &&
            this.variant !== "destructive" && (
              <span
                class={{
                  ["arrow-dropdown"]: !this.dropdownExpanded,
                  ["dropdown-expanded"]: this.dropdownExpanded,
                }}
                innerHTML={arrowDropdown}
              />
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
          ["with-badge"]: isSlotUsed(this.el, "badge"),
          ["dropdown-no-icon"]:
            this.dropdown &&
            !isSlotUsed(this.el, "icon") &&
            !isSlotUsed(this.el, "left-icon"),
          ["top-icon"]: isSlotUsed(this.el, "top-icon"),
          ["white-background"]:
            this.variant === "secondary" &&
            !this.transparentBackground &&
            this.appearance !== "light",
        }}
        onClick={this.handleClick}
        aria-owns={this.ariaOwnsId}
        aria-controls={this.ariaControlsId}
        aria-expanded={this.dropdown && `${this.dropdownExpanded}`}
      >
        {this.hasTooltip && (
          <ic-tooltip
            id={describedBy}
            label={title || ariaLabel}
            target={buttonId}
            placement={this.tooltipPlacement}
            silent={this.isTooltipSilent()}
          >
            {this.hasRouterSlot() ? (
              <slot name="router-item"></slot>
            ) : (
              <ButtonContent />
            )}
          </ic-tooltip>
        )}
        {isSlotUsed(this.el, "badge") && <slot name="badge"></slot>}
        {!this.hasTooltip &&
          (this.hasRouterSlot() ? (
            <slot name="router-item"></slot>
          ) : (
            <ButtonContent />
          ))}
        {this.describedByContent && (
          <span id={describedBy} class="ic-button-describedby">
            {this.describedByContent}
          </span>
        )}
      </Host>
    );
  }
}
