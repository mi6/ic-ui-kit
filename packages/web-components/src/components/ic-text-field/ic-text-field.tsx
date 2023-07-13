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
} from "@stencil/core";
import {
  IcInformationStatus,
  IcAutocompleteTypes,
  IcAutocorrectStates,
  IcInformationStatusOrEmpty,
  IcValueEventDetail,
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
} from "../../utils/helpers";
import { IC_INHERITED_ARIA } from "../../utils/constants";
import {
  IcAriaAutocompleteTypes,
  IcTextFieldInputModes,
  IcTextFieldTypes,
} from "./ic-text-field.types";

let inputIds = 0;

/**
 * @slot icon - Content will be placed to the left of the text input.
 */
@Component({
  tag: "ic-text-field",
  styleUrl: "ic-text-field.css",
  shadow: true,
})
export class TextField {
  private inheritedAttributes: { [k: string]: unknown } = {};
  private inputEl: HTMLInputElement | HTMLTextAreaElement;
  private showLeftIcon: boolean = this.hasLeftIconSlot();

  @Element() el: HTMLIcTextFieldElement;

  @State() numChars: number = 0;
  @State() maxLengthExceeded: boolean = false;
  @State() maxValueExceeded: boolean = false;
  @State() minValueUnattained: boolean = false;

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
  @Prop() ariaAutocomplete: IcAriaAutocompleteTypes = undefined;

  /**
   * @internal Used to identify if the slotted menu is rendered
   */
  @Prop() ariaExpanded: string;

  /**
   * @internal Used to identify any related child component
   */
  @Prop() ariaOwns: string;

  /**
   * The automatic capitalisation of the text value as it is entered/edited by the user.
   * Available options: "off", "none", "on", "sentences", "words", "characters".
   */
  @Prop() autocapitalize = "off";

  /**
   * The state of autocompletion the browser can apply on the text value.
   */
  @Prop() autocomplete: IcAutocompleteTypes = "off";

  /**
   * The state of autocorrection the browser can apply when the user is entering/editing the text value.
   */
  @Prop() autocorrect: IcAutocorrectStates = "off";

  /**
   * If `true`, the form control will have input focus when the page loads.
   */
  @Prop() autoFocus = false;

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled: boolean = false;

  /**
   * Specify whether the text field fills the full width of the container.
   * If `true`, this overrides the --input-width CSS variable.
   */
  @Prop() fullWidth: boolean = false;

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText: string = "";

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel: boolean = false;

  /**
   * @internal If `true`, the hidden form input will stop rendering for form submission.
   */
  @Prop() hiddenInput: boolean = true;

  /**
   * The ID for the input.
   */
  @Prop() inputId?: string = `ic-text-field-input-${inputIds++}`;

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
  @Prop() max: string | number = undefined;

  /**
   * The maximum number of characters that can be entered in the field.
   */
  @Prop() maxLength: number = 0;

  /**
   * The minimum number that can be accepted as a value, when `type` is `number` and `rows` is `1`. (NOTE: Ensure to include visual indication of min value in `helperText` or `label`)
   */
  @Prop() min: string | number = undefined;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * The placeholder value to be displayed.
   */
  @Prop() placeholder: string = "";

  /**
   * If `true`, the read only state will be set.
   */
  @Prop({ reflect: true }) readonly: boolean = false;

  /**
   * If `true`, the input will require a value.
   */
  @Prop() required: boolean = false;

  /**
   * If `true`, the multiline text area will be resizeable.
   */
  @Prop() resize: boolean = false;

  /**
   * @internal Used to set the role if not default textbox;
   */
  @Prop() role: string;

  /**
   * The number of rows to transform the text field into a text area with a specific height.
   */
  @Prop() rows: number = 1;

  /**
   * If `true`, the small styling will be applied to the text field.
   */
  @Prop({ reflect: true }) small: boolean = false;

  /**
   * If `true`, the value of the text field will have its spelling and grammar checked.
   */
  @Prop() spellcheck: boolean = false;
  /**
   * @internal If `true`, an ellipsis will be displayed at the end of the value if the value is longer than the container.
   */
  @Prop() truncateValue?: boolean;

  /**
   * The type of control to display. The default type is text.
   */
  @Prop() type: IcTextFieldTypes = "text";

  /**
   * If `true`, the icon in input control will be displayed - only applies when validationStatus ='success'.
   */
  @Prop() validationInline: boolean = false;

  /**
   *  @internal If `true`, the validation will display inline.
   */
  @Prop() validationInlineInternal: boolean = false;

  /**
   * The validation state - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus: IcInformationStatusOrEmpty = "";

  /**
   * The validation state - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationText: string = "";

  /**
   * The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.
   */
  @Prop() debounce: number = 0;

  @Watch("debounce")
  private debounceChanged() {
    this.icChange = debounceEvent(this.icChange, this.debounce);
  }

  /**
   * The value of the text field.
   */
  @Prop({ reflect: true, mutable: true }) value: string = "";
  @State() initialValue = this.value;

  @Watch("value")
  private watchValueHandler(newValue: string): void {
    if (this.inputEl && this.inputEl.value !== newValue) {
      this.inputEl.value = newValue;
    }

    this.numChars = newValue.length;

    if (this.type === "number") {
      if (newValue && Number(newValue) < Number(this.min)) {
        this.minValueUnattained = true;
      } else {
        this.minValueUnattained = false;
      }
      if (Number(newValue) > Number(this.max)) {
        this.maxValueExceeded = true;
      } else {
        this.maxValueExceeded = false;
      }
    }

    if (this.maxLength > 0) {
      if (newValue.length > this.maxLength) {
        this.maxLengthExceeded = true;
      } else {
        this.maxLengthExceeded = false;
      }
    }
    this.icChange.emit({ value: newValue });
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

  connectedCallback(): void {
    this.debounceChanged();
  }

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
  }

  componentWillLoad(): void {
    this.watchValueHandler(this.value);

    this.inheritedAttributes = inheritAttributes(this.el, [
      ...IC_INHERITED_ARIA,
      "title",
      "aria-autocomplete",
      "aria-haspopup",
    ]);

    if (this.readonly) {
      this.maxLengthExceeded = false;
      this.maxValueExceeded = false;
      this.minValueUnattained = false;
    }

    addFormResetListener(this.el, this.handleFormReset);

    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Text Field"
    );
    if (this.validationInlineInternal) {
      this.getInlineValidationText();
    }
  }

  @Listen("keydown", {})
  handleKeyDown(ev: KeyboardEvent): void {
    this.icKeydown.emit({ event: ev });
  }

  /**
   * Sets focus on the native `input`.
   */

  @Method()
  async setFocus(): Promise<void> {
    if (this.inputEl) {
      this.inputEl.focus();
    }
  }

  private onInput = (ev: Event) => {
    this.value = (ev.target as HTMLInputElement).value;
    this.icInput.emit({ value: this.value });
  };

  private onBlur = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    this.icBlur.emit({ value: value });
  };

  private onFocus = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    this.icFocus.emit({ value: value });
  };

  private isTextArea = (): boolean => {
    return this.rows > 1;
  };

  private getInlineValidationText = () => {
    this.getValidationText.emit({ value: this.validationText });
  };

  private hasLeftIconSlot(): boolean {
    const iconEl = this.el.querySelector(`[slot="icon"]`);
    return iconEl !== null;
  }

  private hasStatus = (status: IcInformationStatusOrEmpty): boolean => {
    return status !== "" && !this.disabled;
  };

  private showStatusText = (status: IcInformationStatusOrEmpty): boolean => {
    return (
      this.hasStatus(status) &&
      !(status == IcInformationStatus.Success && this.validationInline) &&
      !this.validationInlineInternal
    );
  };

  private handleFormReset = (): void => {
    this.value = this.initialValue;
  };

  render() {
    const {
      inputId,
      name,
      label,
      required,
      small,
      placeholder,
      helperText,
      rows,
      resize,
      disabled,
      value,
      min,
      max,
      maxLength,
      numChars,
      readonly,
      maxLengthExceeded,
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
    } = this;

    const disabledMode = readonly ? true : disabled;

    const placeholderText = disabled ? "" : placeholder;

    const currentStatus =
      maxLengthExceeded || maxValueExceeded || minValueUnattained
        ? IcInformationStatus.Error
        : validationStatus;

    const currentValidationText = maxLengthExceeded
      ? "Maximum length exceeded"
      : maxValueExceeded
      ? `Maximum value of ${max} exceeded`
      : minValueUnattained
      ? `Minimum value of ${min} not met`
      : validationText;

    const maxNumChars = readonly ? 0 : maxLength;

    const messageAriaLive =
      maxLengthExceeded ||
      maxValueExceeded ||
      minValueUnattained ||
      (maxLength === 0 && currentStatus === IcInformationStatus.Error)
        ? "assertive"
        : "polite";

    const showStatusText = this.showStatusText(currentStatus);
    const multiline = this.isTextArea();
    const hiddenCharCountDescId =
      maxLength > 0 ? inputId + "-charcount-desc" : "";
    const describedBy = (
      hiddenCharCountDescId +
      " " +
      getInputDescribedByText(inputId, helperText !== "", showStatusText)
    ).trim();

    if (this.showLeftIcon && !readonly && disabledMode) {
      this.showLeftIcon = false;
    }

    const invalid =
      currentStatus === IcInformationStatus.Error ? "true" : "false";
    const disabledText = disabledMode && !readonly;

    if (hiddenInput) {
      renderHiddenInput(true, this.el, name, value, disabledMode);
    }
    return (
      <Host class={{ ["fullwidth"]: fullWidth }}>
        <ic-input-container readonly={readonly} disabled={disabledMode}>
          {!this.hideLabel && (
            <ic-input-label
              for={inputId}
              label={label}
              helperText={helperText}
              required={required}
              disabled={disabledText}
              readonly={readonly}
            ></ic-input-label>
          )}

          <ic-input-component-container
            small={small}
            validationStatus={currentStatus}
            multiLine={multiline}
            disabled={disabledMode}
            readonly={readonly}
            validationInline={validationInline}
            fullWidth={fullWidth}
          >
            {this.showLeftIcon && (
              <span
                class={{
                  ["readonly"]: readonly,
                  ["has-value"]: value.length > 0,
                }}
                slot="left-icon"
              >
                <slot name="icon" />
              </span>
            )}

            {!multiline && (
              <input
                id={inputId}
                name={name}
                ref={(el) => (this.inputEl = el as HTMLInputElement)}
                type={this.type}
                min={min}
                max={max}
                value={value}
                class={{
                  ["no-left-pad"]: !this.showLeftIcon && readonly,
                  ["readonly"]: readonly,
                  ["truncate-value"]: truncateValue,
                }}
                placeholder={placeholderText}
                required={required}
                disabled={disabledMode}
                readonly={readonly}
                onInput={this.onInput}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                aria-label={label}
                aria-describedby={describedBy}
                aria-invalid={invalid}
                aria-activedescendant={this.ariaActiveDescendant}
                aria-expanded={this.ariaExpanded}
                aria-owns={this.ariaOwns}
                autocomplete={this.autocomplete}
                autocapitalize={this.autocapitalize}
                autoFocus={this.autoFocus}
                spellcheck={spellcheck}
                inputmode={inputmode}
                role={this.role}
                {...this.inheritedAttributes}
              ></input>
            )}
            {multiline && (
              <textarea
                id={inputId}
                class={{
                  ["no-resize"]: resize === false || readonly,
                  ["no-left-pad"]: !this.showLeftIcon && readonly,
                  ["readonly"]: readonly,
                }}
                name={name}
                ref={(el) => (this.inputEl = el as HTMLTextAreaElement)}
                value={value}
                rows={rows}
                required={required}
                disabled={disabledMode}
                placeholder={placeholderText}
                readonly={readonly}
                onInput={this.onInput}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                aria-label={label}
                aria-describedby={describedBy}
                aria-invalid={invalid}
                autocapitalize={this.autocapitalize}
                autoFocus={this.autoFocus}
                spellcheck={spellcheck}
                inputmode={inputmode}
                {...this.inheritedAttributes}
              ></textarea>
            )}
            {isSlotUsed(this.el, "clear-button") && (
              <slot name="clear-button"></slot>
            )}
            {isSlotUsed(this.el, "search-submit-button") && (
              <slot name="search-submit-button"></slot>
            )}
          </ic-input-component-container>
          {isSlotUsed(this.el, "menu") && <slot name="menu"></slot>}
          {(!isEmptyString(validationStatus) ||
            !isEmptyString(validationText) ||
            maxNumChars > 0 ||
            maxValueExceeded ||
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
                    <ic-typography
                      variant="caption"
                      class={{
                        ["maxlengthtext"]: true,
                        ["error"]: maxLengthExceeded,
                        ["disabled"]: disabledText,
                      }}
                    >
                      <span
                        aria-live="polite"
                        id={`${inputId}-charcount`}
                        class="charcount"
                      >
                        {numChars}/{maxNumChars}
                      </span>
                      <span hidden={true} id={hiddenCharCountDescId}>
                        Field can contain a maximum of {maxNumChars} characters.
                      </span>
                    </ic-typography>
                  </div>
                )}
              </ic-input-validation>
            )}
        </ic-input-container>
      </Host>
    );
  }
}
