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
  Watch,
} from "@stencil/core";

import {
  getBrandFromContext,
  inheritAttributes,
  isSlotUsed,
  removeDisabledFalse,
  renderFileHiddenInput,
} from "../../utils/helpers";
import { IC_INHERITED_ARIA } from "../../utils/constants";
import { IcButtonTypes, IcButtonVariants } from "./ic-button.types";
import {
  IcSizes,
  IcBrand,
  IcBrandForeground,
  IcBrandForegroundEnum,
  IcThemeMode,
  IcButtonTooltipPlacement,
} from "../../utils/types";
import arrowDropdown from "../../assets/arrow-dropdown.svg";

let buttonIds = 0;

/**
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
  private buttonEl?: HTMLElement;
  private buttonIdNum = buttonIds++;
  private hasTooltip: boolean = false;
  private id: string | null;
  private inheritedAttributes: { [k: string]: string } = {};
  private describedbyEl: HTMLElement | null = null;
  private describedById: string | null = null;
  private mutationObserver: MutationObserver | null = null;
  private hostMutationObserver: MutationObserver | null = null;
  private routerSlot: HTMLElement | null;

  @Element() el: HTMLIcButtonElement;

  @State() ariaLabel: string = "";
  @State() describedByContent: string | undefined = "";
  @State() title: string = "";

  /**
   * If `fileUpload` is set to `true`, this is the accepted list of file types.
   */
  @Prop() accept?: string = "*";

  /**
   * @internal Used to identify any related child component
   */
  @Prop() ariaControlsId?: string | boolean;

  /**
   * @internal Used to identify any related child component
   */
  @Prop() ariaOwnsId?: string | boolean;

  /**
   * If `true`, the button will be in disabled state.
   */
  @Prop() disabled?: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

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
  @Prop() fileInputName?: string = `ic-button-file-upload-input-${buttonIds++}`;

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
   * If `true`, the button will display as monochromatic in either `light` or `dark` theme.
   */
  @Prop({ mutable: true }) monochrome?: boolean = false;

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
  @Prop() selectedFiles?: FileList;

  /**
   * The size of the button to be displayed.
   */
  @Prop() size?: IcSizes = "medium";

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop({ mutable: true }) theme?: IcThemeMode = "inherit";

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
    if (this.loading) {
      this.el.style.setProperty(
        "--min-width",
        `${this.el.getBoundingClientRect().width}px`
      );
    }
    this.setHasTooltip();
  }

  componentWillLoad(): void {
    const {
      title,
      "aria-label": ariaLabel,
      ...restInheritedAttributes
    } = inheritAttributes(this.el, [...IC_INHERITED_ARIA, "title"]);

    this.title = title;
    this.ariaLabel = ariaLabel;
    this.inheritedAttributes = restInheritedAttributes;

    removeDisabledFalse(this.disabled, this.el);

    this.el.setAttribute("exportparts", "button");

    this.id = this.el.id || null;
    this.setHasTooltip();

    if (!this.hasTooltip) {
      const describedById = this.inheritedAttributes["aria-describedby"];
      if (describedById !== undefined) {
        this.describedById = describedById;
        const el = this.el.parentElement?.querySelector<HTMLElement>(
          `#${describedById}`
        );
        if (el) {
          this.describedByContent = el.innerText;
          this.describedbyEl = el;
        }
      }
    }
  }

  componentDidLoad(): void {
    this.updateTheme();

    if (typeof MutationObserver !== "undefined") {
      if (this.describedbyEl && this.describedById) {
        this.mutationObserver = new MutationObserver(this.mutationCallback);
        this.mutationObserver.observe(this.describedbyEl, {
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

      this.hasRouterSlot() && this.arrangeRouterItem();
    }
  }

  componentWillRender(): void {
    const iconEl = this.hasIconSlot("left")
      ? this.el.querySelector(`[slot="left-icon"]`)
      : this.hasIconSlot("right")
      ? this.el.querySelector(`[slot="right-icon"]`)
      : null;
    iconEl?.setAttribute("viewBox", "0 0 24 24");
  }

  @Listen("click", { capture: true })
  handleHostClick(event: Event): void {
    if (!this.hasRouterSlot()) {
      if (this.fileUpload) {
        renderFileHiddenInput(
          this.icFileSelection,
          this.el,
          !!this.multiple,
          this.fileInputName!,
          this.selectedFiles,
          !!this.disabled,
          this.accept
        );
      }
      if (this.disabled || this.loading) {
        event.stopImmediatePropagation();
      }
      if (this.dropdown) {
        this.dropdownExpanded = !this.dropdownExpanded;
      }
    }
  }

  @Listen("brandChange", { target: "document" })
  brandChangeHandler({ detail }: CustomEvent<IcBrand>): void {
    this.updateTheme(detail.mode);
  }

  /**
   * Sets focus on the native `button`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.buttonEl?.focus();
  }

  private async closeButtonTooltip(ev: KeyboardEvent): Promise<void> {
    const tooltip = this.el.shadowRoot?.querySelector("ic-tooltip");
    if (tooltip && (await tooltip.isTooltipVisible())) {
      tooltip.displayTooltip(false);
      ev.preventDefault();
      ev.stopImmediatePropagation();
    }
  }

  private hasIconSlot(position?: "left" | "right" | "top"): boolean {
    const selectorPrefix = position ? `${position}-` : "";
    return this.el.querySelector(`[slot="${selectorPrefix}icon"]`) !== null;
  }

  private hasRouterSlot(): boolean {
    this.routerSlot = this.el.querySelector('[slot="router-item"]');
    if (this.routerSlot) {
      this.routerSlot.ariaLabel = this.routerSlot.textContent;
    }
    return !!this.routerSlot;
  }

  private handleClick = (): void => {
    if (
      (this.el.type === "submit" || this.el.type === "reset") &&
      !this.hasRouterSlot() &&
      !!this.el.closest("FORM")
    ) {
      const hiddenFormButton = document.createElement("button");

      hiddenFormButton.setAttribute("type", this.el.type);
      hiddenFormButton.style.display = "none";

      this.el.closest("FORM")?.appendChild(hiddenFormButton);

      hiddenFormButton.click();
      hiddenFormButton.remove();
    }
  };

  private handleKeyDown = (ev: KeyboardEvent): void => {
    if (ev.key === "Escape" && this.hasTooltip) {
      this.closeButtonTooltip(ev);
    }
  };

  private onFocus = () => {
    this.icFocus.emit();
  };

  private onBlur = () => {
    this.icBlur.emit();
  };

  private updateTheme(mode: IcBrandForeground | null = null): void {
    const foregroundColor = getBrandFromContext(this.el, mode);
    if (foregroundColor !== IcBrandForegroundEnum.Default) {
      this.theme =
        foregroundColor === IcBrandForegroundEnum.Light
          ? IcBrandForegroundEnum.Dark
          : IcBrandForegroundEnum.Light;
      this.monochrome = true;
    }
  }

  // triggered when text content of sibling element in light DOM changes
  private mutationCallback = (): void => {
    this.describedByContent = this.describedbyEl?.innerText;
  };

  // triggered when attributes of host element change
  private hostMutationCallback = (mutationList: MutationRecord[]): void => {
    let forceComponentUpdate = false;
    mutationList.forEach(({ attributeName }) => {
      if (attributeName) {
        const attribute = this.el.getAttribute(attributeName);
        if (attribute) {
          if (attributeName === "title") this.title = attribute;
          else if (attributeName === "aria-label") this.ariaLabel = attribute;

          if (IC_INHERITED_ARIA.includes(attributeName)) {
            this.inheritedAttributes[attributeName] = attribute;
            forceComponentUpdate = true;
          }
        }
      }
    });
    if (forceComponentUpdate) {
      forceUpdate(this);
    }
  };

  private setHasTooltip = (): void => {
    this.hasTooltip =
      !this.disableTooltip && (!!this.title || !!this.isIconVariant());
  };

  private isIconVariant = (): boolean | undefined => {
    return this.variant?.startsWith("icon");
  };

  private arrangeRouterItem = (): void => {
    const setStyles = (
      element: HTMLElement | SVGElement,
      styles: { [key: string]: string }
    ) => {
      Object.entries(styles).forEach(([key, value]) => {
        element.style.setProperty(key, value);
      });
    };
    const iconWrapper = document.createElement("div");
    const icon = this.routerSlot?.querySelector("svg");
    const badge = this.routerSlot?.querySelector("ic-badge");
    const label = this.routerSlot?.textContent?.trim();
    const icTypography = document.createElement("ic-typography");

    setStyles(icTypography, {
      "font-family": "var(--ic-font-body-family)",
      "font-size": "0.875rem",
      "font-weight": "600",
    });
    setStyles(this.routerSlot!, {
      gap: "0",
    });

    if (icon) {
      setStyles(icon, {
        fill: "currentcolor",
      });
      icon.getAttribute("slot") === "left-icon" &&
        setStyles(iconWrapper, {
          "margin-right": "var(--ic-space-xs)",
        });
      icon.getAttribute("slot") === "right-icon" &&
        setStyles(iconWrapper, {
          "margin-left": "var(--ic-space-xs)",
        });
      if (icon.getAttribute("slot") === "top-icon") {
        setStyles(this.routerSlot!, {
          display: "flex",
          "flex-direction": "column",
          "--height": "fit-content",
        });
      }
      iconWrapper.append(icon);
    }

    badge && iconWrapper.append(badge);

    if (label) {
      icTypography.textContent = label;
    }

    if (this.routerSlot) {
      this.routerSlot.textContent = "";
      if (icon && icon.getAttribute("slot") === "right-icon") {
        this.routerSlot.append(icTypography);
        this.routerSlot.append(iconWrapper);
      } else {
        this.routerSlot.append(iconWrapper);
        this.routerSlot.append(icTypography);
      }
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

    let describedby: string | null = null;
    let buttonId: string | null = null;
    if (this.hasTooltip) {
      buttonId =
        this.id !== null
          ? `ic-button-with-tooltip-${this.id}`
          : `ic-button-with-tooltip-${this.buttonIdNum}`;
      describedby =
        this.variant === "icon" && !!ariaLabel
          ? null
          : `ic-tooltip-${buttonId}`;
    } else {
      describedby = this.describedById;
    }

    const ButtonContent = () => {
      return (
        <TagType
          class="button"
          aria-disabled={this.loading || this.disabled ? "true" : null}
          aria-label={this.loading ? "Loading" : ariaLabel}
          aria-expanded={this.dropdown && `${this.dropdownExpanded}`}
          {...buttonAttrs}
          {...inheritedAttributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref={(el) => (this.buttonEl = el)}
          aria-describedby={describedby}
          part="button"
        >
          {this.hasIconSlot("left") && !this.loading && (
            <div class="icon-container">
              <slot name="left-icon" />
            </div>
          )}
          {this.hasIconSlot("top") &&
            !this.hasIconSlot("left") &&
            !this.hasIconSlot("right") &&
            !this.loading && (
              <div class="icon-container">
                <slot name="top-icon" />
              </div>
            )}
          {this.loading ? (
            <div class="loading-container">
              <ic-loading-indicator
                type="linear"
                monochrome={this.monochrome}
                theme={this.theme}
              ></ic-loading-indicator>
            </div>
          ) : (
            <slot />
          )}
          {this.hasIconSlot("right") && !this.loading && !this.dropdown && (
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
                  ["dropdown-expanded"]: !!this.dropdownExpanded,
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
          [`ic-theme-${this.theme}`]: this.theme !== "inherit",
          [`monochrome`]: !!this.monochrome,
          ["ic-button-disabled"]: !!this.disabled && !this.loading,
          [`ic-button-variant-${this.variant}`]: true,
          [`ic-button-size-${this.size}`]: true,
          ["ic-button-loading"]: !!this.loading,
          ["ic-button-full-width"]: !!this.fullWidth,
          ["with-badge"]: isSlotUsed(this.el, "badge"),
          ["dropdown-no-icon"]:
            !!this.dropdown &&
            !isSlotUsed(this.el, "icon") &&
            !isSlotUsed(this.el, "left-icon"),
          ["top-icon"]: isSlotUsed(this.el, "top-icon"),
          ["background"]:
            this.variant === "secondary" &&
            !this.transparentBackground &&
            this.theme === "light",
        }}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        aria-owns={this.ariaOwnsId}
        aria-controls={this.ariaControlsId}
        aria-expanded={this.dropdown && `${this.dropdownExpanded}`}
      >
        {this.hasTooltip && (
          <ic-tooltip
            id={describedby || undefined}
            label={title || ariaLabel}
            target={buttonId || undefined}
            placement={this.tooltipPlacement}
            silent={this.isIconVariant() && !!ariaLabel}
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
          <span id={describedby || undefined} class="ic-button-describedby">
            {this.describedByContent}
          </span>
        )}
      </Host>
    );
  }
}
