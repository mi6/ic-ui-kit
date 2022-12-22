import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  h,
  State,
  Watch,
} from "@stencil/core";

import {
  getInputDescribedByText,
  getLabelFromValue,
  hasValidationStatus,
  inheritAttributes,
  onComponentRequiredPropUndefined,
  renderHiddenInput,
  isMobileOrTablet,
  getFilteredMenuOptions,
  addFormResetListener,
  removeFormResetListener,
} from "../../utils/helpers";
import { IC_INHERITED_ARIA } from "../../utils/constants";
import {
  IcInformationStatus,
  IcInformationStatusOrEmpty,
  IcThemeForegroundEnum,
  IcMenuOption,
  IcSearchMatchPositions,
} from "../../utils/types";
import Expand from "./assets/Expand.svg";
import Clear from "./assets/Clear.svg";
import { IcValueEventDetail } from "../../interface";

let inputIds = 0;

@Component({
  tag: "ic-select",
  styleUrl: "ic-select.css",
  shadow: true,
})
export class Select {
  private nativeSelectElement: HTMLSelectElement;
  private customSelectElement: HTMLButtonElement;
  private searchableSelectElement: HTMLInputElement;
  private menu: HTMLIcMenuElement;
  private anchorEl: HTMLElement;
  private clearButton: HTMLIcButtonElement;

  private inputId = `ic-select-input-${inputIds++}`;
  private menuId = `${this.inputId}-menu`;

  private inheritedAttributes: { [k: string]: unknown } = {};

  private debounce: number;

  /**
   * Provide a label for the input.
   */
  @Prop() label!: string;

  /**
   * Provide the possible selection options.
   */
  @Prop() options?: IcMenuOption[] = [];

  /**
   * Specify if the input requires a value.
   */
  @Prop() required?: boolean = false;

  /**
   * Hides the label and applies the required label value as an aria-label.
   */
  @Prop() hideLabel?: boolean = false;

  /**
   * Specify whether the input is disabled.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * Specify whether the input is read only.
   */
  @Prop() readonly?: boolean = false;

  /**
   * Provide a placeholder value to display.
   */
  @Prop() placeholder?: string = "Select an option";

  /**
   * Provide helper text to display additional field guidance.
   */
  @Prop() helperText?: string = "";

  /**
   * Specify whether small styling is to be applied to the element.
   */
  @Prop() small?: boolean = false;

  /**
   * If true, then fill width of container.
   */
  @Prop() fullWidth: boolean = false;

  /**
   * Provide a validation status.
   */
  @Prop() validationStatus?: IcInformationStatusOrEmpty = "";

  /**
   * Provide the text to display as the validation message.
   */
  @Prop() validationText?: string = "";

  /**
   * The value of the currently selected option.
   */
  @Prop({ mutable: true }) value?: string;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name?: string = this.inputId;

  /**
   * Display a button which clears the input when clicked. The button will always appear on the searchable select.
   */
  @Prop() showClearButton?: boolean = false;

  /**
   * If true, the select can be typed in to filter options.
   */
  @Prop() searchable?: boolean = false;

  /**
   * If true, descriptions of options are included when filtering options in a searchable select.
   */
  @Prop() includeDescriptionsInSearch?: boolean = false;

  /**
   * If true, group titles of grouped options are included when filtering options in a searchable select.
   */
  @Prop() includeGroupTitlesInSearch?: boolean = false;

  /**
   * Whether the search string of the searchable select should match the start of or anywhere in the options.
   */
  @Prop() searchMatchPosition?: IcSearchMatchPositions = "anywhere";

  /**
   * Number of characters until suggestions appear for a searchable select.
   */
  @Prop() charactersUntilSuggestions?: number = 0;

  /**
   * Provide text for empty results list
   */
  @Prop() emptyOptionListText = "No results found";

  @State() open: boolean = false;

  @State() clearButtonFocused: boolean = false;

  @State() searchableSelectInputValue: string = null;

  @State() filteredOptions: IcMenuOption[] = this.options;

  @State() ariaActiveDescendant: string;

  @State() noOptions: IcMenuOption[] = null;

  @State() initialValue = this.value;

  @Watch("options")
  watchOptionsHandler(): void {
    this.setOptionsValuesFromLabels();
    this.filteredOptions = this.options;
  }

  /**
   * Emitted when a value is selected.
   */
  @Event() icChange!: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when select has focus.
   */
  @Event() icFocus!: EventEmitter<void>;

  /**
   * Emitted when select has blur.
   */
  @Event() icBlur!: EventEmitter<void>;

  @Element() host!: HTMLIcSelectElement;

  /**
   * Sets focus on the input box.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.nativeSelectElement) {
      this.nativeSelectElement.focus();
    } else if (this.customSelectElement) {
      this.customSelectElement.focus();
    } else if (this.searchableSelectElement) {
      this.searchableSelectElement.focus();
    }
  }

  private isMenuEnabled = () => {
    return (
      ((this.searchableSelectInputValue === null ||
        this.searchableSelectInputValue === "") &&
        this.charactersUntilSuggestions === 0) ||
      (this.searchableSelectInputValue &&
        this.searchableSelectInputValue.length >=
          this.charactersUntilSuggestions)
    );
  };

  private setOptionsValuesFromLabels = (): void => {
    if (this.options.length > 0) {
      this.options.map((option) => {
        if (!option.value) {
          option.value = option.label;
        }
      });
    }
  };

  private setTextColor = (): void => {
    if (this.nativeSelectElement.selectedIndex === 0) {
      this.nativeSelectElement.className = "placeholder";
    } else {
      this.nativeSelectElement.className = "select-option-selected";
    }
  };

  private setMenuChange = (open: boolean) => {
    if (this.open !== open) {
      this.open = open;
    }
  };

  private getLabelFromValue = (value: string): string | undefined => {
    return getLabelFromValue(value, this.options);
  };

  private getValueFromLabel = (label: string): string | undefined => {
    const value = this.options.find((option) => option.label === label)?.value;
    return value;
  };

  private getFilteredChildMenuOptions = (option: IcMenuOption) => {
    let children = option.children;

    children = getFilteredMenuOptions(
      option.children,
      this.includeDescriptionsInSearch,
      this.searchableSelectInputValue,
      this.searchMatchPosition
    );

    const newOption = { ...option };
    newOption.children = children;
    return newOption;
  };

  private handleNativeSelectChange = (): void => {
    this.icChange.emit({ value: this.nativeSelectElement.value });
    this.setTextColor();
  };

  private handleCustomSelectChange = (event: CustomEvent): void => {
    if (this.searchable && event.detail.label === this.emptyOptionListText) {
      this.searchableSelectElement.focus();
      return;
    }

    if (this.searchable) {
      this.searchableSelectInputValue = this.getLabelFromValue(
        event.detail.value
      );
    }

    this.ariaActiveDescendant = event.detail.optionId;
    this.icChange.emit({ value: event.detail.value });
  };

  private handleMenuChange = (event: CustomEvent): void => {
    this.open = event.detail.open;

    this.searchable && this.handleFocusIndicatorDisplay();
  };

  private handleFocusIndicatorDisplay = () => {
    const focusIndicator =
      this.host.shadowRoot.querySelector(".focus-indicator");

    if (this.open) {
      focusIndicator.classList.add("focus-indicator-enabled");
    } else {
      focusIndicator.classList.remove("focus-indicator-enabled");
    }
  };

  private handleMouseDown = (event: Event): void => {
    if (!this.open) {
      event.preventDefault();
    }
  };

  private handleClick = (event: MouseEvent): void => {
    this.noOptions = null;
    this.menu.options = this.options;

    if (event.detail !== 0 && this.isMenuEnabled()) {
      this.menu.handleClickOpen();
    }
  };

  private handleExpandIconMouseDown = (event: MouseEvent) => {
    if (!this.disabled) {
      event.preventDefault();
      this.searchableSelectElement.focus();
      this.handleClick(event);
    }
  };

  private handleClear = (event: Event): void => {
    event.stopPropagation();
    this.noOptions = null;
    this.icChange.emit({ value: null });

    if (this.searchable) {
      this.searchableSelectElement.value = null;
      this.searchableSelectInputValue = null;
      this.menu.options = this.options;
      this.searchableSelectElement.focus();

      if (!this.isMenuEnabled()) {
        this.setMenuChange(false);
      }
    } else {
      this.customSelectElement.focus();
    }
  };

  private handleKeyDown = (event: KeyboardEvent): void => {
    event.cancelBubble = true;

    if (!this.open) {
      this.noOptions = null;
      this.menu.options = this.options;
    }

    if (this.open && event.key === "Enter") {
      this.setMenuChange(false);
    } else {
      if (
        !(
          (event.key === "ArrowDown" || event.key === "ArrowUp") &&
          this.noOptions !== null
        ) &&
        this.isMenuEnabled()
      ) {
        this.menu.handleKeyboardOpen(event);
      }
    }
  };

  private handleClearButtonFocus = (): void => {
    this.clearButtonFocused = true;
  };

  private handleClearButtonBlur = (): void => {
    this.clearButtonFocused = false;
  };

  private handleSearchableSelectInput = (event: Event): void => {
    this.searchableSelectInputValue = (event.target as HTMLInputElement).value;

    if (this.getValueFromLabel(this.searchableSelectInputValue) === undefined) {
      this.icChange.emit({ value: null });
    }

    if (this.isMenuEnabled()) {
      this.setMenuChange(true);
    } else {
      this.setMenuChange(false);
    }

    const options = [...this.options];

    let isGrouped = false;
    let newFilteredOptions: IcMenuOption[] = [];

    options.map((option) => {
      if (option.children) isGrouped = true;
    });

    const menuOptionsFiltered = getFilteredMenuOptions(
      options,
      this.includeDescriptionsInSearch,
      this.searchableSelectInputValue,
      this.searchMatchPosition
    );

    if (!isGrouped) {
      newFilteredOptions = menuOptionsFiltered;
    } else {
      options.map((option) => {
        if (this.includeGroupTitlesInSearch) {
          if (menuOptionsFiltered.indexOf(option) !== -1) {
            newFilteredOptions.push(option);
          } else {
            newFilteredOptions.push(this.getFilteredChildMenuOptions(option));
          }
        } else {
          newFilteredOptions.push(this.getFilteredChildMenuOptions(option));
        }
      });
    }

    let noChildOptionsWhenFiltered = false;

    if (isGrouped) {
      noChildOptionsWhenFiltered = true;
      newFilteredOptions.map((option) => {
        if (option.children.length > 0) {
          noChildOptionsWhenFiltered = false;
        }
      });
    }

    const noOptions = [{ label: this.emptyOptionListText, value: "" }];

    if (newFilteredOptions.length > 0 && !noChildOptionsWhenFiltered) {
      this.noOptions = null;
      this.filteredOptions = newFilteredOptions;
    } else {
      this.noOptions = noOptions;
      this.filteredOptions = this.noOptions;
    }

    this.debounceAriaLiveUpdate();
  };

  private updateSearchableSelectResultAriaLive = (): void => {
    const searchableSelectResultsStatusEl = this.host.shadowRoot.querySelector(
      ".searchable-select-results-status"
    ) as HTMLDivElement;

    if (this.noOptions !== null) {
      searchableSelectResultsStatusEl.innerText = this.emptyOptionListText;
    } else {
      searchableSelectResultsStatusEl.innerText = "";
    }
  };

  private debounceAriaLiveUpdate() {
    clearTimeout(this.debounce);

    window.setTimeout(() => {
      this.updateSearchableSelectResultAriaLive();
    }, 800);
  }

  private onFocus = (): void => {
    this.icFocus.emit();
  };

  private onBlur = (event: FocusEvent): void => {
    if (
      this.searchable &&
      event.relatedTarget !== this.menu &&
      !(this.clearButton && event.relatedTarget === this.clearButton)
    ) {
      this.setMenuChange(false);
      this.handleFocusIndicatorDisplay();
    }

    this.icBlur.emit();
  };

  private handleFormReset = (): void => {
    this.value = this.initialValue;
    if (this.searchable) {
      this.searchableSelectInputValue = null;
    }
  };

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.host, [
      ...IC_INHERITED_ARIA,
      "tabindex",
      "title",
    ]);

    this.setOptionsValuesFromLabels();

    addFormResetListener(this.host, this.handleFormReset);
  }

  componentDidRender(): void {
    if (this.nativeSelectElement && !this.disabled) {
      this.setTextColor();
    }
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Select"
    );
  }

  disconnectedCallback(): void {
    removeFormResetListener(this.host, this.handleFormReset);
  }

  render() {
    const {
      small,
      disabled,
      fullWidth,
      helperText,
      hideLabel,
      label,
      menuId,
      name,
      options,
      placeholder,
      readonly,
      required,
      searchable,
      showClearButton,
      validationStatus,
      validationText,
      value,
    } = this;

    renderHiddenInput(true, this.host, name, value, disabled);

    const invalid =
      validationStatus === IcInformationStatus.Error ? "true" : "false";

    const describedBy = getInputDescribedByText(
      this.inputId,
      helperText !== "",
      hasValidationStatus(this.validationStatus, this.disabled)
    ).trim();

    return (
      <Host>
        <ic-input-container readonly={readonly}>
          {!hideLabel && (
            <ic-input-label
              for={this.inputId}
              label={label}
              helperText={helperText}
              required={required}
              disabled={disabled}
              readonly={readonly}
            ></ic-input-label>
          )}
          <ic-input-component-container
            ref={(el) => (this.anchorEl = el)}
            class={{ "menu-open": this.open }}
            small={small}
            fullWidth={fullWidth}
            disabled={disabled}
            readonly={readonly}
            validationStatus={validationStatus}
          >
            {readonly ? (
              <ic-typography>
                <p>{this.getLabelFromValue(value)}</p>
              </ic-typography>
            ) : isMobileOrTablet() ? (
              <select
                ref={(el) => (this.nativeSelectElement = el)}
                disabled={disabled}
                onChange={this.handleNativeSelectChange}
                required={required}
                id={this.inputId}
                aria-label={label}
                aria-describedby={describedBy}
                aria-invalid={invalid}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                {...this.inheritedAttributes}
              >
                <option value="" selected disabled={!showClearButton}>
                  {placeholder}
                </option>
                {options.map((option) => {
                  if (option.children) {
                    return (
                      <optgroup label={option.label}>
                        {option.children.map((option) => (
                          <option
                            value={option.value}
                            disabled={option.disabled}
                            selected={option.value === value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </optgroup>
                    );
                  } else {
                    return (
                      <option
                        value={option.value}
                        disabled={option.disabled}
                        selected={option.value === value}
                      >
                        {option.label}
                      </option>
                    );
                  }
                })}
              </select>
            ) : searchable ? (
              <div class="searchable-select-container">
                <input
                  class="select-input"
                  role="combobox"
                  aria-label={label}
                  aria-describedby={describedBy}
                  aria-activedescendant={this.ariaActiveDescendant}
                  aria-autocomplete="list"
                  aria-expanded={this.open ? "true" : "false"}
                  aria-invalid={invalid}
                  aria-required={required ? "true" : "false"}
                  aria-controls={menuId}
                  ref={(el) => (this.searchableSelectElement = el)}
                  id={this.inputId}
                  value={this.searchableSelectInputValue}
                  placeholder={placeholder}
                  disabled={disabled}
                  onInput={this.handleSearchableSelectInput}
                  onClick={this.handleClick}
                  onKeyDown={this.handleKeyDown}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                ></input>
                {this.searchableSelectInputValue &&
                  (showClearButton || searchable) && (
                    <div class="clear-button-container">
                      <ic-button
                        id="clear-button"
                        ref={(el) => (this.clearButton = el)}
                        aria-label={
                          this.searchableSelectInputValue && value === null
                            ? "Clear input"
                            : "Clear selection"
                        }
                        class="clear-button"
                        innerHTML={Clear}
                        onClick={this.handleClear}
                        onFocus={this.handleClearButtonFocus}
                        onBlur={this.handleClearButtonBlur}
                        size={small ? "small" : "default"}
                        variant="icon"
                        appearance={
                          this.clearButtonFocused
                            ? IcThemeForegroundEnum.Light
                            : IcThemeForegroundEnum.Dark
                        }
                      ></ic-button>
                      <div class="divider"></div>
                    </div>
                  )}
                <span
                  onMouseDown={this.handleExpandIconMouseDown}
                  class={{
                    "expand-icon": true,
                    "expand-icon-open": this.open,
                    "expand-icon-filled": !(value == null || value === ""),
                    "expand-icon-disabled": !this.isMenuEnabled(),
                  }}
                  innerHTML={Expand}
                  aria-hidden="true"
                />
                <div
                  aria-live="polite"
                  role="status"
                  class="searchable-select-results-status"
                ></div>
              </div>
            ) : (
              <div class="select-container">
                <button
                  class="select-input"
                  ref={(el) => (this.customSelectElement = el)}
                  id={this.inputId}
                  aria-label={`${label}, ${
                    this.getLabelFromValue(value) || placeholder
                  }${required ? ", required" : ""}`}
                  aria-describedby={describedBy}
                  aria-invalid={invalid}
                  aria-haspopup="listbox"
                  aria-expanded={this.open ? "true" : "false"}
                  aria-owns={menuId}
                  aria-controls={menuId}
                  disabled={disabled}
                  onBlur={this.onBlur}
                  onFocus={this.onFocus}
                  onClick={this.handleClick}
                  onMouseDown={this.handleMouseDown}
                  onKeyDown={this.handleKeyDown}
                >
                  <ic-typography
                    variant="body"
                    class={{
                      "value-text": true,
                      placeholder: this.getLabelFromValue(value) === undefined,
                    }}
                  >
                    <p>{this.getLabelFromValue(value) || placeholder}</p>
                  </ic-typography>
                  <div class="select-input-end">
                    {value && showClearButton && <div class="divider"></div>}
                    <span
                      class={{
                        "expand-icon": true,
                        "expand-icon-open": this.open,
                        "expand-icon-filled": !(value == null || value === ""),
                      }}
                      innerHTML={Expand}
                      aria-hidden="true"
                    />
                  </div>
                </button>
                {value && showClearButton && (
                  <ic-button
                    id="clear-button"
                    aria-label="Clear selection"
                    class="clear-button"
                    innerHTML={Clear}
                    onClick={this.handleClear}
                    onFocus={this.handleClearButtonFocus}
                    onBlur={this.handleClearButtonBlur}
                    size={small ? "small" : "default"}
                    variant="icon"
                    appearance={
                      this.clearButtonFocused
                        ? IcThemeForegroundEnum.Light
                        : IcThemeForegroundEnum.Dark
                    }
                  ></ic-button>
                )}
              </div>
            )}
          </ic-input-component-container>
          {!isMobileOrTablet() && (
            <ic-menu
              class={{
                "no-results": this.noOptions !== null,
              }}
              ref={(el) => (this.menu = el)}
              inputEl={
                searchable
                  ? this.searchableSelectElement
                  : this.customSelectElement
              }
              inputLabel={label}
              anchorEl={this.anchorEl}
              small={small}
              menuId={menuId}
              open={this.open}
              options={searchable ? this.filteredOptions : options}
              value={value}
              fullWidth={fullWidth}
              onMenuChange={this.handleMenuChange}
              onOptionSelect={this.handleCustomSelectChange}
              parentEl={this.host}
            ></ic-menu>
          )}
          {hasValidationStatus(this.validationStatus, this.disabled) && (
            <ic-input-validation
              class={{ "menu-open": this.open }}
              ariaLiveMode="polite"
              status={validationStatus}
              message={validationText}
              for={this.inputId}
            ></ic-input-validation>
          )}
        </ic-input-container>
      </Host>
    );
  }
}
