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
  IcAutocompleteTypes,
  IcAutocorrectStates,
  IcInformationStatusOrEmpty,
  IcValueEventDetail,
} from "../../interface";
import { IcInformationStatus } from "../../utils/types";
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
  @Element() el: HTMLIcTextFieldElement;

  private inputEl: HTMLInputElement | HTMLTextAreaElement;
  private inheritedAttributes: { [k: string]: unknown } = {};

  /**
   * @slot clear-button - an ic-button clear component will render as an end adornment to the input.
   * @slot search-submit-button - an ic-button search submit component will render as an end adornment to the input.
   * @slot menu - an ic-menu component will appear below the input.
   */

  /**
   * The ID for the input.
   */
  @Prop() inputId?: string = `ic-text-field-input-${inputIds++}`;

  /**
   * The label for the input.
   */
  @Prop() label!: string;

  /**
   * If `true`, the input will require a value.
   */
  @Prop() required: boolean = false;
  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled: boolean = false;

  /**
   * If `true`, the read only state will be set.
   */
  @Prop({ reflect: true }) readonly: boolean = false;

  /**
   * The placeholder value to be displayed.
   */
  @Prop() placeholder: string = "";

  /**
   * Specify whether the text field fills the full width of the container.
   * If `true`, this overrides the --input-width CSS variable.
   */
  @Prop() fullWidth: boolean = false;

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel: boolean = false;

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText: string = "";

  /**
   * The number of rows to transform the text field into a text area with a specific height.
   */
  @Prop() rows: number = 1;

  /**
   * If `true`, the multiline text area will be resizeable.
   */
  @Prop() resize: boolean = false;

  /**
   * If `true`, the small styling will be applied to the text field.
   */
  @Prop({ reflect: true }) small: boolean = false;

  /**
   * The value of the text field.
   */
  @Prop({ reflect: true, mutable: true }) value: string = "";

  /**
   * The maximum number of characters that can be entered in the field.
   */
  @Prop() maxLength: number = 0;

  /**
   * The validation state - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus: IcInformationStatusOrEmpty = "";

  /**
   * The validation state - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationText: string = "";

  /**
   * If `true`, the icon in input control will be displayed - only applies when validationStatus ='success'.
   */
  @Prop() validationInline: boolean = false;

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
   * The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.
   */
  @Prop() debounce: number = 0;

  private showLeftIcon: boolean = this.hasLeftIconSlot();

  @Watch("debounce")
  private debounceChanged() {
    this.icChange = debounceEvent(this.icChange, this.debounce);
  }

  /**
   * The type of control to display. The default type is text.
   */
  @Prop() type: IcTextFieldTypes = "text";

  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() inputmode: IcTextFieldInputModes = "text";

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the value of the text field will have its spelling and grammar checked.
   */
  @Prop() spellcheck: boolean = false;

  /**
   * @internal The active element when focus is on the ic-menu items.
   */
  @Prop() ariaActiveDescendant?: string;
  /**
   * @internal If `true`, an ellipsis will be displayed at the end of the value if the value is longer than the container.
   */
  @Prop() truncateValue?: boolean;

  /**
   * @internal Used to identify if the slotted menu is rendered
   */
  @Prop() ariaExpanded: string;

  /**
   * @internal Used to identify any related child component
   */
  @Prop() ariaOwns: string;

  /**
   * @internal Used to identify whether inputting any text triggers more predictions
   */
  @Prop() ariaAutocomplete: IcAriaAutocompleteTypes = undefined;

  /**
   * @internal Used to set the role if not default textbox;
   */
  @Prop() role: string;

  /**
   * @internal If `true`, the hidden form input will stop rendering for form submission.
   */
  @Prop() hiddenInput: boolean = true;

  @State() numChars: number = 0;
  @State() maxLengthExceeded: boolean = false;
  @State() initialValue = this.value;

  @Watch("value")
  watchValueHandler(newValue: string): void {
    if (this.inputEl && this.inputEl.value !== newValue) {
      this.inputEl.value = newValue;
    }

    if (this.maxLength > 0) {
      this.numChars = newValue.length;
      if (newValue.length > this.maxLength) {
        this.maxLengthExceeded = true;
      } else {
        this.maxLengthExceeded = false;
      }
    }
    this.icChange.emit({ value: newValue });
  }

  /**
   * Sets focus on the native `input`
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.inputEl) {
      this.inputEl.focus();
    }
  }

  //stop keydown event bubbling up to storybook
  @Listen("keydown", {})
  handleKeyDown(ev: KeyboardEvent): void {
    this.icKeydown.emit({ event: ev });
    ev.cancelBubble = true;
  }

  /**
   * Emitted when a keydown event occurred.
   */
  @Event() icKeydown: EventEmitter<{ event: KeyboardEvent }>;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() icInput: EventEmitter<IcValueEventDetail>;
  private onInput = (ev: Event) => {
    this.value = (ev.target as HTMLInputElement).value;
    this.icInput.emit({ value: this.value });
  };

  /**
   * Emitted when input loses focus.
   */
  @Event() icBlur: EventEmitter<IcValueEventDetail>;
  private onBlur = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    this.icBlur.emit({ value: value });
  };

  /**
   * Emitted when input gains focus.
   */
  @Event() icFocus: EventEmitter<IcValueEventDetail>;
  private onFocus = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    this.icFocus.emit({ value: value });
  };

  /**
   * Emitted when the value has changed.
   */
  @Event() icChange: EventEmitter<IcValueEventDetail>;

  private isTextArea = (): boolean => {
    return this.rows > 1;
  };

  private hasLeftIconSlot(): boolean {
    const iconEl = this.el.querySelector(`[slot="icon"]`);
    if (iconEl != null) {
      return true;
    }
    return false;
  }

  private hasStatus = (status: IcInformationStatusOrEmpty): boolean => {
    return status !== "" && !this.disabled;
  };

  private showStatusText = (status: IcInformationStatusOrEmpty): boolean => {
    if (
      this.hasStatus(status) &&
      !(status == IcInformationStatus.Success && this.validationInline)
    ) {
      return true;
    }
    return false;
  };

  private handleFormReset = (): void => {
    this.value = this.initialValue;
  };

  connectedCallback(): void {
    this.debounceChanged();
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
    }

    addFormResetListener(this.el, this.handleFormReset);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Text Field"
    );
  }

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
  }

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
      maxLength,
      numChars,
      readonly,
      maxLengthExceeded,
      validationStatus,
      validationText,
      validationInline,
      spellcheck,
      inputmode,
      fullWidth,
      truncateValue,
      hiddenInput,
    } = this;

    const disabledMode = readonly ? true : disabled;

    const placeholderText = disabled ? "" : placeholder;

    const currentStatus = maxLengthExceeded
      ? IcInformationStatus.Error
      : validationStatus;

    const currentValidationText = maxLengthExceeded
      ? "Maximum length exceeded"
      : validationText;

    const maxNumChars = readonly ? 0 : maxLength;

    const messageAriaLive =
      maxLengthExceeded ||
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

    if (this.showLeftIcon) {
      if (!readonly && disabledMode) {
        this.showLeftIcon = false;
      }
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
            maxNumChars > 0) && (
            <ic-input-validation
              status={
                this.hasStatus(currentStatus) === false ||
                (currentStatus === IcInformationStatus.Success &&
                  validationInline)
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
                      ["exceeded"]: maxLengthExceeded,
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
