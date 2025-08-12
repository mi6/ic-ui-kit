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
  Fragment,
} from "@stencil/core";

import {
  getBrandFromContext,
  handleHiddenFormButtonClick,
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
  IcIconPlacementOptions,
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
  private hasTooltip = false;
  private id: string | null;
  private inheritedAttributes: { [k: string]: string } = {};
  private describedbyEl: HTMLElement | null = null;
  private describedById?: string;
  private mutationObserver: MutationObserver | null = null;
  private hostMutationObserver: MutationObserver | null = null;
  private routerSlot: HTMLElement | null;

  @Element() el: HTMLIcButtonElement;

  @State() ariaLabel = "";
  @State() describedByContent? = "";
  @State() title = "";

  /**
   * If `fileUpload` is set to `true`, this is the accepted list of file types.
   */
  @Prop() accept = "*";

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
  @Prop() disabled = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * If `true`, the ic-tooltip which is shown for icon variant will be disabled. Title or aria-label must be set if this prop is not applied.
   */
  @Prop() disableTooltip = false;

  /**
   * If `true`, the user can save the linked URL instead of navigating to it.
   */
  @Prop() download: string | boolean = false;

  /**
   * If `true`, the button will show a dropdown icon.
   */
  @Prop() dropdown = false;

  /**
   * If `true`, the aria-expanded value will be set to true. This is only applied if the dropdown prop is also true.
   */
  @Prop({ mutable: true, reflect: true }) dropdownExpanded = false;

  /**
   * If `true`, when the button is clicked the native file explorer will be launched.
   */
  @Prop() fileUpload = false;

  /**
   * The name of the control for the file input, which is submitted with the form data.
   */
  @Prop() fileInputName = `ic-button-file-upload-input-${buttonIds++}`;

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
  @Prop() fullWidth = false;

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
  @Prop() loading = false;

  /**
   * If `true`, the button will display as monochromatic in either `light` or `dark` theme.
   */
  @Prop({ mutable: true }) monochrome = false;

  /**
   * If `fileUpload` is set to `true`, this boolean determines whether multiple files are accepted.
   */
  @Prop() multiple = false;

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
  @Prop() size: IcSizes = "medium";

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop({ mutable: true }) theme: IcThemeMode = "inherit";

  /**
   * The position of the tooltip in relation to the button.
   */
  @Prop() tooltipPlacement: IcButtonTooltipPlacement = "bottom";

  /**
   * If `true`, the secondary & tertiary variants of button will have a transparent background when not hovered, pressed or loading.
   */
  @Prop() transparentBackground = true;

  /**
   * The type of the button.
   */
  @Prop() type: IcButtonTypes = "button";

  /**
   * The variant of the button to be displayed.
   */
  @Prop() variant: IcButtonVariants = "primary";

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
    this.mutationObserver?.disconnect();
    this.hostMutationObserver?.disconnect();
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
      if (describedById) {
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

      if (this.hasRouterSlot()) this.arrangeRouterItem();
    }
  }

  componentWillRender(): void {
    const iconEl = this.getSlottedIcon("left") || this.getSlottedIcon("right");
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
          !!this.disabled,
          this.accept,
          this.fileInputName,
          this.selectedFiles
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

  private async closeButtonTooltip(ev: KeyboardEvent) {
    const tooltip = this.el.shadowRoot?.querySelector("ic-tooltip");
    if (tooltip && (await tooltip.isTooltipVisible())) {
      tooltip.displayTooltip(false);
      ev.preventDefault();
      ev.stopImmediatePropagation();
    }
  }

  private getSlottedIcon = (position: IcIconPlacementOptions) =>
    this.el.querySelector(`[slot="${position}-icon"]`);

  private hasRouterSlot() {
    this.routerSlot = this.el.querySelector('[slot="router-item"]');
    if (this.routerSlot) {
      this.routerSlot.ariaLabel = this.routerSlot.textContent;
    }
    return !!this.routerSlot;
  }

  private handleClick = () => {
    if (
      (this.el.type === "submit" || this.el.type === "reset") &&
      !this.hasRouterSlot() &&
      (this.form || !!this.el.closest("FORM"))
    ) {
      const form = this.form
        ? document.querySelector<HTMLFormElement>(`form[id=${this.form}]`)
        : this.el.closest<HTMLFormElement>("FORM");

      handleHiddenFormButtonClick(form, this.el);
    }
  };

  private handleKeyDown = (ev: KeyboardEvent) => {
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

  private updateTheme(mode: IcBrandForeground | null = null) {
    const foregroundColor = getBrandFromContext(this.el, mode);
    if (foregroundColor !== IcBrandForegroundEnum.Default) {
      this.theme =
        foregroundColor === IcBrandForegroundEnum.Light
          ? IcBrandForegroundEnum.Dark
          : IcBrandForegroundEnum.Light;
      this.monochrome = true;
    }
  }

  /**
   * Triggered when text content of sibling element in light DOM changes
   */
  private mutationCallback = () => {
    this.describedByContent = this.describedbyEl?.innerText;
  };

  /**
   * Triggered when attributes of host element change
   * @param mutationList the list of changes made to the host element
   */
  private hostMutationCallback = (mutationList: MutationRecord[]) => {
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

  private setHasTooltip = () => {
    this.hasTooltip =
      !this.disableTooltip && (!!this.title || !!this.isIconVariant());
  };

  private isIconVariant = () => this.variant.startsWith("icon");

  private arrangeRouterItem = () => {
    const setStyles = (
      element: HTMLElement | SVGElement,
      styles: { [key: string]: string }
    ) => {
      Object.entries(styles).forEach(([key, value]) => {
        element.style.setProperty(key, value);
      });
    };

    if (this.routerSlot) {
      const icTypography = document.createElement("ic-typography");

      setStyles(icTypography, {
        "font-family": "var(--ic-font-body-family)",
        "font-size": "0.875rem",
        "font-weight": "600",
      });
      setStyles(this.routerSlot, {
        gap: "0",
      });

      const icon = this.routerSlot.querySelector("svg");
      const iconSlot = icon?.getAttribute("slot");
      const iconWrapper = document.createElement("div");

      if (icon) {
        setStyles(icon, {
          fill: "currentcolor",
        });

        if (iconSlot === "top-icon") {
          setStyles(this.routerSlot, {
            display: "flex",
            "flex-direction": "column",
            "--height": "fit-content",
          });
        } else if (iconSlot) {
          const marginPlacement = iconSlot === "left-icon" ? "right" : "left";
          setStyles(iconWrapper, {
            [`margin-${marginPlacement}`]: "var(--ic-space-xs)",
          });
        }

        iconWrapper.append(icon);
      }

      const badge = this.routerSlot.querySelector("ic-badge");
      const label = this.routerSlot.textContent?.trim();

      if (badge) iconWrapper.append(badge);
      if (label) icTypography.textContent = label;

      this.routerSlot.textContent = "";

      if (iconSlot === "right-icon") {
        this.routerSlot.append(icTypography);
        this.routerSlot.append(iconWrapper);
      } else {
        this.routerSlot.append(iconWrapper);
        this.routerSlot.append(icTypography);
      }
    }
  };

  render() {
    const {
      ariaControlsId,
      ariaLabel,
      ariaOwnsId,
      buttonIdNum,
      describedByContent,
      describedById,
      disabled,
      download,
      dropdown,
      dropdownExpanded,
      form,
      formaction,
      formenctype,
      formmethod,
      formnovalidate,
      formtarget,
      fullWidth,
      handleClick,
      handleKeyDown,
      hasTooltip,
      href,
      hreflang,
      id,
      inheritedAttributes,
      isIconVariant,
      loading,
      monochrome,
      onBlur,
      onFocus,
      referrerpolicy,
      rel,
      size,
      target,
      theme,
      title,
      tooltipPlacement,
      transparentBackground,
      type,
      variant,
    } = this;

    const TagType = href ? "a" : "button";
    const buttonAttrs =
      TagType === "button"
        ? {
            type,
            disabled,
            form,
            formaction,
            formenctype,
            formmethod,
            formnovalidate,
            formtarget,
          }
        : {
            download: download !== false ? download : null,
            href,
            rel,
            target,
            referrerpolicy,
            hreflang,
          };

    const buttonId = hasTooltip
      ? `ic-button-with-tooltip-${id || buttonIdNum}`
      : undefined;

    const describedby = !hasTooltip
      ? describedById
      : variant !== "icon" || !ariaLabel
      ? `ic-tooltip-${buttonId}`
      : undefined;

    const hasLeftIcon = !!this.getSlottedIcon("left");
    const hasRightIcon = !!this.getSlottedIcon("right");

    const ButtonContent = () =>
      this.hasRouterSlot() ? (
        <slot name="router-item"></slot>
      ) : (
        <TagType
          class="button"
          tabindex={0}
          aria-disabled={loading || disabled ? "true" : null}
          aria-label={loading ? "Loading" : ariaLabel}
          aria-expanded={dropdown && `${dropdownExpanded}`}
          {...buttonAttrs}
          {...inheritedAttributes}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={(el) => (this.buttonEl = el)}
          aria-describedby={describedby}
          part="button"
        >
          {loading ? (
            <div class="loading-container">
              <ic-loading-indicator
                type="linear"
                monochrome={monochrome}
                theme={theme}
              ></ic-loading-indicator>
            </div>
          ) : (
            <Fragment>
              {(hasLeftIcon ||
                (!!this.getSlottedIcon("top") && !hasRightIcon)) && (
                <div class="icon-container">
                  <slot name={`${hasLeftIcon ? "left" : "top"}-icon`} />
                </div>
              )}
              <slot />
              {!dropdown
                ? hasRightIcon && (
                    <div class={{ "icon-container": true, "right-icon": true }}>
                      <slot name="right-icon" />
                    </div>
                  )
                : variant !== "icon" &&
                  variant !== "destructive" && (
                    <span
                      class={
                        dropdownExpanded
                          ? "dropdown-expanded"
                          : "arrow-dropdown"
                      }
                      innerHTML={arrowDropdown}
                    />
                  )}
            </Fragment>
          )}
        </TagType>
      );

    return (
      <Host
        class={{
          "ic-button-disabled": disabled && !loading,
          "ic-button-full-width": fullWidth,
          "ic-button-loading": loading,
          [`ic-button-size-${size}`]: true,
          [`ic-button-variant-${variant}`]: true,
          [`ic-theme-${theme}`]: theme !== "inherit",
          background:
            (variant === "secondary" || variant === "tertiary") &&
            !transparentBackground &&
            !disabled,
          "dropdown-no-icon":
            dropdown &&
            !isSlotUsed(this.el, "icon") &&
            !isSlotUsed(this.el, "left-icon"),
          monochrome,
          "top-icon": isSlotUsed(this.el, "top-icon"),
          "with-badge": isSlotUsed(this.el, "badge"),
        }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-owns={ariaOwnsId}
        aria-controls={ariaControlsId}
        aria-expanded={dropdown && `${dropdownExpanded}`}
      >
        {hasTooltip && (
          <ic-tooltip
            id={describedby}
            label={title || ariaLabel}
            target={buttonId}
            placement={tooltipPlacement}
            silent={isIconVariant() && !!ariaLabel}
          >
            <ButtonContent />
          </ic-tooltip>
        )}
        {isSlotUsed(this.el, "badge") && <slot name="badge"></slot>}
        {!hasTooltip && <ButtonContent />}
        {describedByContent && (
          <span id={describedby} class="ic-button-describedby">
            {describedByContent}
          </span>
        )}
      </Host>
    );
  }
}
