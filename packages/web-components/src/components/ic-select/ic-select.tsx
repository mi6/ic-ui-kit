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
import { IcOptionSelectEventDetail } from "../ic-menu/ic-menu.types";

let inputIds = 0;

@Component({
  tag: "ic-select",
  styleUrl: "ic-select.css",
  shadow: {
    delegatesFocus: true,
  },
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

  private ungroupedOptions: IcMenuOption[] = [];

  private inheritedAttributes: { [k: string]: unknown } = {};

  private debounceAria: number;
  private hasSetDefaultValue = false;

  private initialRender = false;
  private initialOptionsEmpty = false;

  private characterKeyPressTimer: number;

  /**
   * The label for the select.
   */
  @Prop() label!: string;

  /**
   * The possible selection options.
   */
  @Prop() options?: IcMenuOption[] = [];

  /**
   * If `true`, the select will require a value.
   */
  @Prop() required?: boolean = false;

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel?: boolean = false;

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * If `true`, the readonly state will be set.
   */
  @Prop() readonly?: boolean = false;

  /**
   * The placeholder value to be displayed.
   */
  @Prop() placeholder?: string = "Select an option";

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText?: string = "";

  /**
   * If `true`, the small styling will be applied to the select.
   */
  @Prop() small?: boolean = false;

  /**
   * If `true`, the select element will fill the width of the container.
   */
  @Prop() fullWidth: boolean = false;

  /**
   * The validation status - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus?: IcInformationStatusOrEmpty = "";

  /**
   * The text to display as the validation message.
   */
  @Prop() validationText?: string = "";

  /**
   * The value of the currently selected option.
   */
  @Prop({ mutable: true }) value?: string;

  /**
   * The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.
   */
  @Prop() debounce?: number = 0;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name?: string = this.inputId;

  /**
   * If `true`, a button which clears the select input when clicked will be displayed. The button will always appear on the searchable select.
   */
  @Prop() showClearButton?: boolean = false;

  /**
   * If `true`, a searchable variant of the select will be displayed which can be typed in to filter options.
   */
  @Prop() searchable?: boolean = false;

  /**
   * If `true`, descriptions of options will be included when filtering options in a searchable select. Only applies to built in filtering.
   */
  @Prop() includeDescriptionsInSearch?: boolean = false;

  /**
   * If `true`, group titles of grouped options will be included when filtering options in a searchable select. Only applies to built in filtering.
   */
  @Prop() includeGroupTitlesInSearch?: boolean = false;

  /**
   * Whether the search string of the searchable select should match the start of or anywhere in the options. Only applies to built in filtering.
   */
  @Prop() searchMatchPosition?: IcSearchMatchPositions = "anywhere";

  /**
   * @deprecated This prop should not be used anymore.
   */
  @Prop() charactersUntilSuggestions?: number = 0;

  /**
   * The text displayed when there are no options in the option list.
   */
  @Prop() emptyOptionListText = "No results found";

  /**
   * Specify whether to disable the built in filtering for a searchable variant. For example, if options will already be filtered from external source.
   */
  @Prop() disableFilter?: boolean = false;

  @State() open: boolean = false;

  @State() clearButtonFocused: boolean = false;

  @State() searchableSelectInputValue: string = null;

  @State() filteredOptions: IcMenuOption[] = this.options;

  @State() ariaActiveDescendant: string;

  @State() noOptions: IcMenuOption[] = null;

  @State() initialValue = this.value;

  @State() currDebounce = this.debounce;

  @State() currValue = this.value;

  @State() debounceIcChange: number;

  @State() pressedCharacters: string = "";

  @Watch("options")
  watchOptionsHandler(): void {
    if (this.isExternalFiltering()) {
      if (this.options.length > 0) {
        this.setOptionsValuesFromLabels();
        this.noOptions = null;
        this.filteredOptions = this.options;
      } else if (this.isMenuEnabled()) {
        this.noOptions = [{ label: this.emptyOptionListText, value: "" }];
        this.filteredOptions = this.noOptions;

        // Will prevent 'No results found' displaying on initial load and setting default value
        if (!this.initialRender) {
          this.setMenuChange(true);
        }
      }

      this.updateSearchableSelectResultAriaLive();
      this.setDefaultValue();
    } else {
      this.setOptionsValuesFromLabels();
      this.filteredOptions = this.options;

      if (this.initialOptionsEmpty) {
        this.setDefaultValue();
        this.initialOptionsEmpty = false;
      }
    }
  }

  @Watch("debounce")
  debounceChangedHandler(newValue: number) {
    this.updateOnChangeDebounce(newValue);
  }

  @Watch("value")
  valueChangedHandler() {
    if (this.value !== this.currValue) {
      this.currValue = this.value;
    }
  }

  /**
   * Emitted when the value changes.
   */
  @Event() icChange!: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when clear button clicked.
   */
  @Event() icClear!: EventEmitter<void>;

  /**
   * Emitted when select gains focus.
   */
  @Event() icFocus!: EventEmitter<void>;

  /**
   * Emitted when select loses focus.
   */
  @Event() icBlur!: EventEmitter<void>;

  /**
   * Emitted when option is highlighted within the menu.
   * Highlighting a menu item will trigger an `icChange/onIcChange` due to the value being updated.
   */
  @Event() icOptionSelect: EventEmitter<IcOptionSelectEventDetail>;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() icInput: EventEmitter<IcValueEventDetail>;

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

  private updateOnChangeDebounce(newValue: number) {
    if (this.currDebounce !== newValue) {
      this.currDebounce = newValue;
    }
  }

  private emitIcChange = (value: string) => {
    this.value = value;
    clearTimeout(this.debounceIcChange);
    this.debounceIcChange = window.setTimeout(() => {
      this.icChange.emit({ value: value });
    }, this.currDebounce);
  };

  private emitImmediateIcChange = (value: string) => {
    this.value = value;
    clearTimeout(this.debounceIcChange);
    this.icChange.emit({ value: value });
  };

  private isMenuEnabled = () => {
    return (
      this.searchableSelectInputValue !== null ||
      this.searchableSelectInputValue !== ""
    );
  };

  private setOptionsValuesFromLabels = (): void => {
    if (this.options.length > 0 && this.options.map) {
      this.options.map((option) => {
        if (!option.value) {
          option.value = option.label;
        }
      });
    }
  };

  private setUngroupedOptions = (event: CustomEvent): void => {
    this.ungroupedOptions = event.detail.options;
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

    if (this.searchable) {
      children = getFilteredMenuOptions(
        option.children,
        this.includeDescriptionsInSearch,
        this.searchableSelectInputValue,
        this.searchMatchPosition
      );
    } else {
      children = getFilteredMenuOptions(
        option.children,
        false,
        this.pressedCharacters,
        "start"
      );
    }

    const newOption = { ...option };
    newOption.children = children;
    return newOption;
  };

  private handleNativeSelectChange = (): void => {
    this.icOptionSelect.emit({ value: this.nativeSelectElement.value });
    this.emitImmediateIcChange(this.nativeSelectElement.value);
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
    this.icOptionSelect.emit({ value: event.detail.value });
    this.emitIcChange(event.detail.value);
  };

  private handleMenuChange = (event: CustomEvent): void => {
    this.open = event.detail.open;
    this.pressedCharacters = "";

    this.searchable && this.handleFocusIndicatorDisplay();
  };

  // clears the debounce delay when navigating the menu with arrow keys etc
  // to prevent delay in change event, which should only occur when typing in input
  private handleMenuKeyPress = (ev: CustomEvent): void => {
    ev.cancelBubble = true;
    this.handleCharacterKeyDown(ev.detail.key);
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

  private isExternalFiltering = (): boolean =>
    this.searchable && this.disableFilter;

  private handleClick = (event: MouseEvent): void => {
    if (this.isExternalFiltering()) {
      this.menu.options = this.filteredOptions;
    } else {
      this.noOptions = null;
      this.menu.options = this.options;
    }

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
    this.emitImmediateIcChange(null);
    this.icClear.emit();

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

  private handleCharacterKeyDown = (key: string) => {
    // Only close menu when space is pressed if not being used alongside character keys to quickly select options
    if (this.open && key === " " && this.pressedCharacters.length === 0) {
      this.setMenuChange(false);
    }

    if (key.length === 1 && !this.searchable) {
      window.clearTimeout(this.characterKeyPressTimer);
      this.characterKeyPressTimer = window.setTimeout(
        () => (this.pressedCharacters = ""),
        1000
      );

      this.pressedCharacters += key;
      this.handleFilter();

      if (!this.noOptions) {
        this.emitImmediateIcChange(this.filteredOptions[0].value);
      }
    } else {
      this.pressedCharacters = "";
    }
  };

  private handleNativeSelectKeyDown = (event: KeyboardEvent) => {
    event.cancelBubble = true;
    this.handleCharacterKeyDown(event.key);
  };

  private handleKeyDown = (event: KeyboardEvent): void => {
    event.cancelBubble = true;
    const isArrowKey = event.key === "ArrowDown" || event.key === "ArrowUp";

    if (!this.open) {
      if (this.isExternalFiltering() && (event.key === "Enter" || isArrowKey)) {
        this.menu.options = this.filteredOptions;
      } else {
        this.noOptions = null;
        this.menu.options = this.options;
      }
    }

    if (this.open && event.key === "Enter") {
      this.setMenuChange(false);
    } else {
      if (!(isArrowKey && this.noOptions !== null) && this.isMenuEnabled()) {
        if (!(event.key === " " && this.pressedCharacters.length > 0)) {
          this.menu.handleKeyboardOpen(event);
        }
        this.handleCharacterKeyDown(event.key);
      }
    }
  };

  private handleClearButtonFocus = (): void => {
    this.clearButtonFocused = true;
  };

  private handleClearButtonBlur = (): void => {
    this.clearButtonFocused = false;
  };

  private handleFilter = (): void => {
    const options = this.searchable ? [...this.options] : this.ungroupedOptions;

    let isGrouped = false;
    let newFilteredOptions: IcMenuOption[] = [];

    options.map((option) => {
      if (option.children) isGrouped = true;
    });

    let menuOptionsFiltered: IcMenuOption[];

    if (this.searchable) {
      menuOptionsFiltered = getFilteredMenuOptions(
        options,
        this.includeDescriptionsInSearch,
        this.searchableSelectInputValue,
        this.searchMatchPosition
      );
    } else {
      menuOptionsFiltered = getFilteredMenuOptions(
        options,
        false,
        this.pressedCharacters,
        "start"
      );
    }

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
  };

  private handleSearchableSelectInput = (event: Event): void => {
    this.searchableSelectInputValue = (event.target as HTMLInputElement).value;
    this.icInput.emit({ value: this.searchableSelectInputValue });

    if (this.disableFilter) {
      this.emitIcChange(this.searchableSelectInputValue);
    } else if (
      this.getValueFromLabel(this.searchableSelectInputValue) === undefined
    ) {
      this.emitIcChange(null);
    }

    if (this.isMenuEnabled()) {
      this.setMenuChange(true);
    } else {
      this.setMenuChange(false);
    }

    if (!this.disableFilter) {
      this.handleFilter();
      this.debounceAriaLiveUpdate();
    }
  };

  private updateSearchableSelectResultAriaLive = (): void => {
    const searchableSelectResultsStatusEl = this.host.shadowRoot.querySelector(
      ".searchable-select-results-status"
    ) as HTMLDivElement;

    if (searchableSelectResultsStatusEl) {
      if (this.noOptions !== null) {
        searchableSelectResultsStatusEl.innerText = this.emptyOptionListText;
      } else {
        searchableSelectResultsStatusEl.innerText = "";
      }
    }
  };

  private debounceAriaLiveUpdate() {
    clearTimeout(this.debounceAria);

    window.setTimeout(() => {
      this.updateSearchableSelectResultAriaLive();
    }, 800);
  }

  private getDefaultValue = (value: string): string | null =>
    this.getLabelFromValue(value) || value || null;

  private setDefaultValue() {
    if (!this.hasSetDefaultValue && this.currValue) {
      this.searchableSelectInputValue = this.getDefaultValue(this.currValue);
      this.initialValue = this.currValue;
      this.hasSetDefaultValue = true;
    }
  }

  private onFocus = (): void => {
    this.icFocus.emit();
  };

  private onBlur = (event: FocusEvent): void => {
    const isSearchableAndNoFocusedInternalElements =
      this.searchable &&
      event.relatedTarget !== this.menu &&
      !Array.from(this.menu.querySelectorAll("[role='option']")).includes(
        event.relatedTarget as Element
      ) &&
      !(this.clearButton && event.relatedTarget === this.clearButton);

    if (isSearchableAndNoFocusedInternalElements) {
      this.setMenuChange(false);
      this.handleFocusIndicatorDisplay();
    }

    this.icBlur.emit();
  };

  private handleFormReset = (): void => {
    this.value = this.initialValue;
    if (this.searchable) {
      this.searchableSelectInputValue = this.getDefaultValue(this.value);
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

    this.initialRender = true;

    if (!this.options.length) {
      this.initialOptionsEmpty = true;
    } else if (!this.disableFilter) {
      this.setDefaultValue();
    }
  }

  componentDidRender(): void {
    if (this.nativeSelectElement && !this.disabled) {
      this.setTextColor();
    }
  }

  componentWillUpdate(): void {
    this.initialRender = false;
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
      currValue,
    } = this;

    renderHiddenInput(true, this.host, name, currValue, disabled);

    const invalid =
      validationStatus === IcInformationStatus.Error ? "true" : "false";

    const describedBy = getInputDescribedByText(
      this.inputId,
      helperText !== "",
      hasValidationStatus(this.validationStatus, this.disabled)
    ).trim();

    return (
      <Host
        class={{
          disabled: disabled,
          searchable: searchable,
          small: small,
          "full-width": fullWidth,
        }}
      >
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
                <p>{this.getLabelFromValue(currValue)}</p>
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
                onKeyDown={this.handleNativeSelectKeyDown}
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
                            selected={option.value === currValue}
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
                        selected={option.value === currValue}
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
                  type="search"
                  autocomplete="off"
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
                          this.searchableSelectInputValue && currValue === null
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
                    "expand-icon-filled": !(
                      currValue == null || currValue === ""
                    ),
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
                    this.getLabelFromValue(currValue) || placeholder
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
                      placeholder:
                        this.getLabelFromValue(currValue) === undefined,
                    }}
                  >
                    <p>{this.getLabelFromValue(currValue) || placeholder}</p>
                  </ic-typography>
                  <div class="select-input-end">
                    {currValue && showClearButton && (
                      <div class="divider"></div>
                    )}
                    <span
                      class={{
                        "expand-icon": true,
                        "expand-icon-open": this.open,
                        "expand-icon-filled": !(
                          currValue == null || currValue === ""
                        ),
                      }}
                      innerHTML={Expand}
                      aria-hidden="true"
                    />
                  </div>
                </button>
                {currValue && showClearButton && (
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
                "no-results": this.noOptions !== null && this.searchable,
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
              value={currValue}
              fullWidth={fullWidth}
              onMenuStateChange={this.handleMenuChange}
              onMenuOptionSelect={this.handleCustomSelectChange}
              onMenuKeyPress={this.handleMenuKeyPress}
              onUngroupedOptionsSet={this.setUngroupedOptions}
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
