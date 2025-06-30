import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  Watch,
  Method,
  h,
  forceUpdate,
} from "@stencil/core";
import {
  IcInformationStatus,
  IcAutocompleteTypes,
  IcAutocorrectStates,
  IcInformationStatusOrEmpty,
  IcValueEventDetail,
  IcSizesNoLarge,
  IcThemeMode,
} from "../../utils/types";
import {
  inheritAttributes,
  debounceEvent,
  getInputDescribedByText,
  renderHiddenInput,
  isEmptyString,
  onComponentRequiredPropUndefined,
  addFormResetListener,
  removeFormResetListener,
  isSlotUsed,
  removeDisabledFalse,
  checkSlotInChildMutations,
  removeHiddenInput,
} from "../../utils/helpers";
import {
  IC_INHERITED_ARIA,
  IGNORED_KEYBOARD_CHARACTERS,
} from "../../utils/constants";
import {
  IcAriaAutocompleteTypes,
  IcTextFieldInputModes,
  IcTextFieldTypes,
} from "./ic-text-field.types";

let inputIds = 0;
const MUTABLE_ATTRIBUTES = [...IC_INHERITED_ARIA, "title"];

/**
 * @slot helper-text - Content is set as the helper text for the text field.
 * @slot icon - Content will be placed to the left of the text input.
 */
@Component({
  tag: "ic-text-field",
  styleUrl: "ic-text-field.css",
  shadow: true,
})
export class TextField {
  private inheritedAttributes: { [k: string]: string } = {};
  private inputEl: HTMLInputElement | HTMLTextAreaElement;
  private hostMutationObserver: MutationObserver | null = null;
  private interval: ReturnType<typeof setInterval>;

  @Element() el: HTMLIcTextFieldElement;

  @State() numChars: number = 0;
  @State() maxCharactersReached: boolean = false;
  @State() maxCharactersWarning: boolean = false;
  @State() minCharactersUnattained: boolean = false;
  @State() maxValueExceeded: boolean = false;
  @State() minValueUnattained: boolean = false;
  @State() isFocussed: boolean = false;

  /**
   * @slot clear-button - an ic-button clear component will render as an end adornment to the input.
   * @slot search-submit-button - an ic-button search submit component will render as an end adornment to the input.
   * @slot menu - an ic-menu component will appear below the input.
   */

  /**
   * @internal The active element when focus is on the ic-menu items.
   */
  @Prop() ariaActiveDescendant?: string;

  /**
   * @internal Used to identify whether inputting any text triggers more predictions
   */
  @Prop() ariaAutocomplete?: IcAriaAutocompleteTypes;

  /**
   * @internal Used to identify if the slotted menu is rendered
   */
  @Prop() ariaExpanded: string | null;

  /**
   * @internal Used to identify any related child component
   */
  @Prop() ariaOwns?: string;

  /**
   * The automatic capitalisation of the text value as it is entered/edited by the user.
   * Available options: "off", "none", "on", "sentences", "words", "characters".
   */
  @Prop() autocapitalize = "off";

  /**
   * The state of autocompletion the browser can apply on the text value.
   */
  @Prop() autocomplete?: IcAutocompleteTypes = "off";

  /**
   * The state of autocorrection the browser can apply when the user is entering/editing the text value.
   */
  @Prop() autocorrect?: IcAutocorrectStates = "off";

  /**
   * If `true`, the form control will have input focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el as HTMLElement);
  }

  /**
   * Specify whether the text field fills the full width of the container.
   * If `true`, this overrides the --input-width CSS variable.
   */
  @Prop() fullWidth = false;

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText = "";

  /**
   * If `true`, the character count which is displayed when `maxCharacters` is set will be visually hidden.
   */
  @Prop() hideCharCount = false;

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel = false;

  /**
   * @internal If `true`, the hidden form input will stop rendering for form submission.
   */
  @Prop() hiddenInput = true;

  /**
   * The ID for the input.
   */
  @Prop() inputId = `ic-text-field-input-${inputIds++}`;

  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() inputmode: IcTextFieldInputModes = "text";

  /**
   * The label for the input.
   */
  @Prop() label!: string;

  /**
   * The maximum number that can be accepted as a value, when `type` is `number` and `rows` is `1`. (NOTE: Ensure to include visual indication of max value in `helperText` or `label`)
   */
  @Prop() max?: string | number;

  /**
   * The count of characters in the field. Will display a warning if the bound is reached. (NOTE: If the value of the text field has been set using the `value` prop, it will be truncated to this number of characters)
   */
  @Prop() maxCharacters = 0;

  /**
   * The text to display as the warning message when the maximum number of characters (the `maxCharacters` prop value) is reached.
   */
  // prettier-ignore
  @Prop() maxCharactersMessage = `Maximum input is ${this.maxCharacters} characters`;

  /**
   * The text to display as the error message when the maximum value (the `max` prop value) has been exceeded.
   */
  @Prop() maxMessage = `Maximum value of ${this.max} exceeded`;

  /**
   * The minimum number that can be accepted as a value, when `type` is `number` and `rows` is `1`. (NOTE: Ensure to include visual indication of min value in `helperText` or `label`)
   */
  @Prop() min?: string | number;

  /**
   * The minimum number of characters that can be entered in the field.
   */
  @Prop() minCharacters = 0;

  /**
   * The text to display as the error message when the minimum number of characters (the `minCharacters` prop value) has not been met.
   */
  // prettier-ignore
  @Prop() minCharactersMessage = `Minimum input is ${this.minCharacters} characters`;

  /**
   * The text to display as the error message when the minimum value (the `min` prop value) has not been met.
   */
  @Prop() minMessage = `Minimum value of ${this.min} not met`;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name = this.inputId;

  /**
   * The placeholder value to be displayed.
   */
  @Prop() placeholder = "";

  /**
   * If `true`, the read only state will be set.
   */
  @Prop({ reflect: true }) readonly = false;

  /**
   * If `true`, the input will require a value.
   */
  @Prop() required = false;

  /**
   * If `true`, the multiline text area will be resizeable.
   */
  @Prop() resize = false;

  /**
   * @internal Used to set the role if not default textbox;
   */
  @Prop() role: string | null;

  /**
   * The number of rows to transform the text field into a text area with a specific height.
   */
  @Prop() rows = 1;

  /**
   * The size of the text field component.
   */
  @Prop() size: IcSizesNoLarge = "medium";

  /**
   * If `true`, the value of the text field will have its spelling and grammar checked.
   */
  @Prop() spellcheck = false;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * @internal If `true`, an ellipsis will be displayed at the end of the value if the value is longer than the container.
   */
  @Prop() truncateValue = false;

  /**
   * The type of control to display. The default type is text.
   */
  @Prop() type: IcTextFieldTypes = "text";

  /**
   * If `true`, the icon in input control will be displayed - only applies when validationStatus ='success'.
   */
  @Prop() validationInline = false;

  /**
   *  @internal If `true`, the validation will display inline.
   */
  @Prop() validationInlineInternal = false;

  /**
   * The validation state - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus: IcInformationStatusOrEmpty = "";

  /**
   * The text to display as the validation message.
   */
  @Prop() validationText: string = "";

  /**
   * The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.
   */
  @Prop() debounce = 0;
  @Watch("debounce")
  private debounceChanged() {
    this.icChange = debounceEvent(this.icChange, this.debounce);
  }

  /**
   * The value of the text field.
   */
  @Prop({ reflect: true, mutable: true }) value = "";
  @State() initialValue = this.value;
  @Watch("value")
  private watchValueHandler(newValue: string): void {
    let value;

    if (this.maxCharacters > 0) {
      value = newValue.substring(0, this.maxCharacters);
      if (value.length < newValue.length) {
        this.maxCharactersWarning = true;
      }
      this.value = value;
    } else {
      value = newValue;
    }

    if (this.inputEl && this.inputEl.value !== value) {
      this.inputEl.value = value;
    }

    this.getMaxValueExceeded(value);

    this.getMaxCharactersReached(value);

    this.icChange.emit({ value });
  }

  /**
   * @internal Emitted when the validationInlineInternal is `true`
   */
  @Event() getValidationText: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when input loses focus.
   */
  @Event() icBlur: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when the value has changed.
   */
  @Event() icChange: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when input gains focus.
   */
  @Event() icFocus: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() icInput: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when a keydown event occurred.
   */
  @Event() icKeydown: EventEmitter<{ event: KeyboardEvent }>;

  /**
   * Emitted when the textarea variant is scrolled.
   */
  @Event() icScroll: EventEmitter;

  connectedCallback(): void {
    this.debounceChanged();
  }

  disconnectedCallback(): void {
    removeFormResetListener(this.el as HTMLElement, this.handleFormReset);
    this.hostMutationObserver?.disconnect();
  }

  componentWillLoad(): void {
    if (this.value !== this.initialValue) {
      this.watchValueHandler(this.value);
    } else if (this.maxCharacters > 0) {
      this.value = this.value.substring(0, this.maxCharacters);
    }

    this.getMaxValueExceeded(this.value);
    this.getMaxCharactersReached(this.value);

    this.inheritedAttributes = inheritAttributes(
      this.el as HTMLElement,
      MUTABLE_ATTRIBUTES
    );

    if (this.readonly) {
      this.maxValueExceeded = false;
      this.minValueUnattained = false;
    }

    addFormResetListener(this.el as HTMLElement, this.handleFormReset);

    removeDisabledFalse(this.disabled, this.el as HTMLElement);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Text Field"
    );
    if (this.validationInlineInternal) {
      this.getValidationText.emit({ value: this.validationText });
    }

    this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
    this.hostMutationObserver.observe(this.el, {
      attributes: true,
      childList: true,
    });

    if (this.autofocus && !this.disabled && !this.readonly) {
      this.interval = setInterval(this.checkChildHydration, 50);
    }
  }

  private checkChildHydration = () => {
    if (
      this.hideLabel ||
      this.el.shadowRoot
        ?.querySelector("ic-typography")
        ?.classList.contains("hydrated")
    ) {
      this.setFocus();
      clearInterval(this.interval);
    }
  };

  @Listen("keydown", {})
  handleKeyDown(ev: KeyboardEvent): void {
    this.icKeydown.emit({ event: ev });

    if (!ev.ctrlKey && !IGNORED_KEYBOARD_CHARACTERS.includes(ev.key)) {
      this.maxCharactersWarning = this.maxCharactersReached;
    }
  }

  /**
   * Sets focus on the native `input`.
   */

  @Method()
  async setFocus(): Promise<void> {
    this.inputEl?.focus();
  }

  private getNumberOfCharacters = (value: string) =>
    value !== null && value !== undefined ? value.length : 0;

  private getMaxValueExceeded = (value: string) => {
    this.numChars = this.getNumberOfCharacters(value);

    if (this.type === "number") {
      this.minValueUnattained = !!value && Number(value) < Number(this.min);
      this.maxValueExceeded = Number(value) > Number(this.max);
    }
  };

  private getMaxCharactersReached = (value: string) => {
    this.numChars = this.getNumberOfCharacters(value);

    this.maxCharactersReached =
      this.maxCharacters > 0 && this.numChars >= this.maxCharacters;

    if (this.maxCharactersWarning && !this.maxCharactersReached) {
      this.maxCharactersWarning = false;
    }
  };

  private onInput = (ev: Event) => {
    this.value = (ev.target as HTMLInputElement).value;
    this.icInput.emit({ value: this.value });
  };

  private onBlur = (ev: Event) => {
    const target = ev.target as HTMLInputElement;
    target.removeEventListener("wheel", this.onWheel);
    const { value } = target;
    this.numChars = value.length;
    this.minCharactersUnattained =
      this.minCharacters > 0 && this.numChars < this.minCharacters;
    this.icBlur.emit({ value });
    this.isFocussed = false;
  };

  private onFocus = (ev: Event) => {
    const target = ev.target as HTMLInputElement;
    target.addEventListener("wheel", this.onWheel);
    this.icFocus.emit({ value: target.value });
    this.isFocussed = true;
  };

  private onTextAreaScroll = () => {
    this.icScroll.emit();
  };

  private onWheel = (ev: WheelEvent) => {
    const target = ev.target as HTMLInputElement;
    if (target.type === "number") {
      target.blur();
      setTimeout(() => {
        target.focus();
      }, 0);
    }
  };

  private hasStatus = (status: IcInformationStatusOrEmpty) =>
    status !== "" && !this.disabled;

  private handleFormReset = (): void => {
    this.value = this.initialValue;
  };

  // triggered when attributes of host element change
  private hostMutationCallback = (mutationList: MutationRecord[]): void => {
    let forceComponentUpdate = false;
    mutationList.forEach(
      ({ attributeName, type, addedNodes, removedNodes }) => {
        if (attributeName && MUTABLE_ATTRIBUTES.includes(attributeName)) {
          const attribute = this.el.getAttribute(attributeName);
          if (attribute) {
            this.inheritedAttributes[attributeName] = attribute;
          }
          forceComponentUpdate = true;
        } else if (type === "childList") {
          forceComponentUpdate = checkSlotInChildMutations(
            addedNodes,
            removedNodes,
            "icon"
          );
        }
      }
    );
    if (forceComponentUpdate) {
      forceUpdate(this);
    }
  };

  render() {
    const {
      inputId,
      name,
      label,
      required,
      size,
      placeholder,
      helperText,
      hideCharCount,
      rows,
      resize,
      disabled,
      value,
      min,
      max,
      numChars,
      readonly,
      maxCharacters,
      maxCharactersMessage,
      maxCharactersWarning,
      maxCharactersReached,
      maxMessage,
      minCharacters,
      minCharactersMessage,
      minCharactersUnattained,
      minMessage,
      minValueUnattained,
      maxValueExceeded,
      validationStatus,
      validationText,
      validationInline,
      validationInlineInternal,
      spellcheck,
      inputmode,
      fullWidth,
      truncateValue,
      hiddenInput,
      theme,
      hideLabel,
      type,
      autocapitalize,
      ariaActiveDescendant,
      inheritedAttributes,
      ariaExpanded,
      ariaOwns,
      autocomplete,
      role,
      isFocussed,
    } = this;

    const el = this.el as HTMLElement;

    const disabledMode = readonly || disabled;

    const currentStatus =
      maxValueExceeded ||
      minValueUnattained ||
      minCharactersUnattained ||
      maxCharactersWarning
        ? maxCharactersWarning
          ? IcInformationStatus.Warning
          : IcInformationStatus.Error
        : validationStatus;

    const currentValidationText = maxCharactersWarning
      ? maxCharactersMessage
      : maxValueExceeded
      ? maxMessage
      : minValueUnattained
      ? minMessage
      : minCharactersUnattained
      ? minCharactersMessage
      : validationText;

    const maxNumChars = readonly ? 0 : maxCharacters;
    const messageAriaLive =
      maxCharactersWarning ||
      maxValueExceeded ||
      minValueUnattained ||
      currentStatus === IcInformationStatus.Error
        ? "assertive"
        : "polite";

    const showStatusText =
      this.hasStatus(currentStatus) &&
      !(currentStatus == IcInformationStatus.Success && validationInline) &&
      !validationInlineInternal;

    const multiline = rows > 1;

    const hiddenCharCountDescId =
      maxCharacters > 0 ? `${inputId}-char-count-desc` : "";

    const charsRemaining = maxNumChars - numChars;
    const remainingCharCountDescId =
      maxCharacters > 0 ? `${inputId}-remaining-char-count-desc` : "";
    const remainingCharCountDesc = `${charsRemaining} character${
      charsRemaining === 1 ? "" : "s"
    } remaining.`;

    const describedBy = `${hiddenCharCountDescId} ${
      numChars > 0 ? remainingCharCountDescId : ""
    } ${getInputDescribedByText(
      this.el,
      inputId,
      helperText !== "",
      showStatusText
    )}`.trim();

    const disabledText = disabledMode && !readonly;
    const showLeftIcon =
      !!this.el.querySelector(`[slot="icon"]`) && !disabledText;

    const invalid = `${currentStatus === IcInformationStatus.Error}`;

    hiddenInput
      ? renderHiddenInput(this.el as HTMLElement, value, name, disabledMode)
      : removeHiddenInput(this.el as HTMLElement);

    return (
      <Host
        class={{
          "ic-text-field-full-width": fullWidth,
          "ic-text-field-disabled": disabledMode,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <ic-input-container readonly={readonly} disabled={disabledMode}>
          {!hideLabel && (
            <ic-input-label
              for={inputId}
              label={label}
              helperText={helperText}
              required={required}
              disabled={disabledText}
              readonly={readonly}
            >
              <slot name="helper-text" slot="helper-text"></slot>
            </ic-input-label>
          )}

          <ic-input-component-container
            size={size}
            validationStatus={currentStatus}
            multiLine={multiline}
            disabled={disabledMode}
            readonly={readonly}
            validationInline={validationInline}
            fullWidth={fullWidth}
          >
            {showLeftIcon && (
              <span
                class={{
                  readonly,
                  "has-value": this.getNumberOfCharacters(value) > 0,
                }}
                slot="left-icon"
              >
                <slot name="icon" />
              </span>
            )}

            {!multiline ? (
              <input
                id={inputId}
                name={name}
                ref={(el) => (this.inputEl = el as HTMLInputElement)}
                type={type}
                min={min}
                max={max}
                value={value}
                class={{
                  "no-left-pad": !showLeftIcon && readonly,
                  readonly,
                  "truncate-value": truncateValue,
                }}
                placeholder={placeholder ? placeholder : ""}
                required={required}
                disabled={disabledMode}
                readonly={readonly}
                onInput={this.onInput}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                aria-label={label}
                aria-describedby={describedBy}
                aria-invalid={invalid}
                aria-activedescendant={ariaActiveDescendant}
                aria-expanded={ariaExpanded}
                aria-owns={ariaOwns}
                autocomplete={autocomplete}
                autocapitalize={autocapitalize}
                spellcheck={spellcheck}
                inputmode={inputmode}
                role={role || undefined}
                maxlength={maxCharactersReached ? maxCharacters : undefined}
                minlength={minCharactersUnattained ? minCharacters : undefined}
                {...inheritedAttributes}
              ></input>
            ) : (
              <textarea
                id={inputId}
                class={{
                  "no-resize": resize === false || !!readonly,
                  "no-left-pad": !showLeftIcon && !!readonly,
                  readonly: !!readonly,
                }}
                name={name}
                ref={(el) => (this.inputEl = el as HTMLTextAreaElement)}
                value={value}
                rows={rows}
                required={required}
                disabled={disabledMode}
                placeholder={placeholder}
                readonly={readonly}
                onInput={this.onInput}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                onScroll={this.onTextAreaScroll}
                aria-label={label}
                aria-describedby={describedBy}
                aria-invalid={invalid}
                autocapitalize={autocapitalize}
                spellcheck={spellcheck}
                inputmode={inputmode}
                maxlength={maxCharactersReached ? maxCharacters : undefined}
                minlength={minCharactersUnattained ? minCharacters : undefined}
                {...inheritedAttributes}
              ></textarea>
            )}
            {isSlotUsed(el, "clear-button") && (
              <slot name="clear-button"></slot>
            )}
            {isSlotUsed(el, "search-submit-button") && (
              <slot name="search-submit-button"></slot>
            )}
          </ic-input-component-container>
          {isSlotUsed(el, "menu") && <slot name="menu"></slot>}
          {(!isEmptyString(validationStatus) ||
            !isEmptyString(validationText) ||
            maxNumChars > 0 ||
            maxValueExceeded ||
            maxCharactersWarning ||
            minCharactersUnattained ||
            minValueUnattained) &&
            !validationInlineInternal && (
              <ic-input-validation
                status={
                  this.hasStatus(currentStatus) === false ||
                  (currentStatus === IcInformationStatus.Success &&
                    validationInline) ||
                  validationInlineInternal
                    ? ""
                    : currentStatus
                }
                message={showStatusText ? currentValidationText : ""}
                ariaLiveMode={messageAriaLive}
                for={inputId}
                fullWidth={fullWidth}
              >
                {!readonly && maxNumChars > 0 && (
                  <div slot="validation-message-adornment">
                    {!hideCharCount && (
                      <ic-typography variant="caption" class="char-count-text">
                        <span class="char-count">
                          {numChars}/{maxNumChars}
                        </span>
                      </ic-typography>
                    )}
                    <span
                      class="remaining-char-count-desc"
                      aria-live="polite"
                      hidden={!isFocussed}
                      id={remainingCharCountDescId}
                    >
                      {remainingCharCountDesc}
                    </span>
                    <span hidden={true} id={hiddenCharCountDescId}>
                      Field can contain a maximum of {maxNumChars} characters.
                    </span>
                  </div>
                )}
              </ic-input-validation>
            )}
        </ic-input-container>
      </Host>
    );
  }
}
