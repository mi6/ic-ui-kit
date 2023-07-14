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
  removeDisabledFalse,
} from "../../utils/helpers";
import { IC_INHERITED_ARIA } from "../../utils/constants";
import {
  IcInformationStatus,
  IcInformationStatusOrEmpty,
  IcThemeForegroundEnum,
  IcMenuOption,
  IcSearchMatchPositions,
  IcValueEventDetail,
} from "../../utils/types";
import Expand from "./assets/Expand.svg";
import Clear from "./assets/Clear.svg";
import { IcOptionSelectEventDetail } from "../ic-menu/ic-menu.types";

let inputIds = 0;

@Component({
  tag: "ic-select",
  styleUrl: "ic-select.css",
  shadow: {
    delegatesFocus: true,
  },
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Select {
  private anchorEl: HTMLElement;
  private blurredBecauseButtonPressed: boolean;
  private characterKeyPressTimer: number;
  private clearButton: HTMLIcButtonElement;
  private customSelectElement: HTMLButtonElement;
  private debounceAria: number;
  private hasSetDefaultValue = false;
  private hasTimedOut: boolean;
  private inheritedAttributes: { [k: string]: unknown } = {};
  private initialOptionsEmpty = false;
  private inputId = `ic-select-input-${inputIds++}`;
  private menu: HTMLIcMenuElement;
  private menuId = `${this.inputId}-menu`;
  private nativeSelectElement: HTMLSelectElement;
  private retryButtonClick: boolean;
  private searchableMenuItemSelected: boolean = false;
  private searchableSelectElement: HTMLInputElement;
  private timeoutTimer: number;
  private ungroupedOptions: IcMenuOption[] = [];

  @Element() host!: HTMLIcSelectElement;

  @State() ariaActiveDescendant: string;
  @State() clearButtonFocused: boolean = false;
  @State() debounceIcChange: number;
  @State() hiddenInputValue: string;
  @State() noOptions: IcMenuOption[] = null;
  @State() open: boolean = false;
  @State() pressedCharacters: string = "";
  @State() searchableSelectInputValue: string = null;

  /**
   * @deprecated This prop should not be used anymore.
   */
  @Prop() charactersUntilSuggestions?: number = 0;

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * If `true`, the built in filtering will be disabled for a searchable variant. For example, if options will already be filtered from external source.
   */
  @Prop() disableFilter?: boolean = false;

  /**
   * The text displayed when there are no options in the option list.
   */
  @Prop() emptyOptionListText = "No results found";

  /**
   * If `true`, the select element will fill the width of the container.
   */
  @Prop() fullWidth: boolean = false;

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText?: string = "";

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel?: boolean = false;

  /**
   * If `true`, descriptions of options will be included when filtering options in a searchable select. Only applies to built in filtering.
   */
  @Prop() includeDescriptionsInSearch?: boolean = false;

  /**
   * If `true`, group titles of grouped options will be included when filtering options in a searchable select. Only applies to built in filtering.
   */
  @Prop() includeGroupTitlesInSearch?: boolean = false;

  /**
   * The label for the select.
   */
  @Prop() label!: string;

  /**
   * The message displayed when external loading times out.
   */
  @Prop() loadingErrorLabel?: string = "Loading Error";

  /**
   * The message displayed whilst the options are being loaded externally.
   */
  @Prop() loadingLabel?: string = "Loading...";

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name?: string = this.inputId;

  /**
   * The placeholder value to be displayed.
   */
  @Prop() placeholder?: string = "Select an option";

  /**
   * If `true`, the readonly state will be set.
   */
  @Prop() readonly?: boolean = false;

  /**
   * If `true`, the select will require a value.
   */
  @Prop() required?: boolean = false;

  /**
   * If `true`, a searchable variant of the select will be displayed which can be typed in to filter options.
   */
  @Prop() searchable?: boolean = false;

  /**
   * Whether the search string of the searchable select should match the start of or anywhere in the options. Only applies to built in filtering.
   */
  @Prop() searchMatchPosition?: IcSearchMatchPositions = "anywhere";

  /**
   * If `true`, a button which clears the select input when clicked will be displayed. The button will always appear on the searchable select.
   */
  @Prop() showClearButton?: boolean = false;

  /**
   * If `true`, the small styling will be applied to the select.
   */
  @Prop() small?: boolean = false;

  /**
   * If using external filtering, set a timeout for when loading takes too long.
   */
  @Prop() timeout?: number;

  /**
   * The validation status - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus?: IcInformationStatusOrEmpty = "";

  /**
   * The text to display as the validation message.
   */
  @Prop() validationText?: string = "";

  /**
   * If `true`, the loading state will be triggered when fetching options asyncronously.
   */
  @Prop({ mutable: true }) loading?: boolean = false;

  @Watch("loading")
  loadingHandler(newValue: boolean): void {
    newValue && this.triggerLoading();
  }

  /**
   * The possible selection options.
   */
  @Prop() options?: IcMenuOption[] = [];
  @State() filteredOptions: IcMenuOption[] = this.options;

  @Watch("options")
  watchOptionsHandler(): void {
    if (!this.hasTimedOut) {
      this.loading = false;
      clearTimeout(this.timeoutTimer);
      if (this.isExternalFiltering()) {
        if (this.options.length > 0) {
          this.setOptionsValuesFromLabels();
          this.noOptions = null;
          this.filteredOptions = this.options;
        } else {
          this.noOptions = [{ label: this.emptyOptionListText, value: "" }];
          this.filteredOptions = this.noOptions;
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
    } else {
      if (!this.searchable) this.options = this.noOptions;
    }
  }

  /**
   * The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.
   */
  @Prop() debounce?: number = 0;
  @State() currDebounce = this.debounce;

  @Watch("debounce")
  debounceChangedHandler(newValue: number): void {
    this.updateOnChangeDebounce(newValue);
  }

  /**
   * The value of the select, reflected by the value of the currently selected option. For the searchable variant, the value is also reflected by the user input.
   */
  @Prop({ mutable: true }) value?: string;
  @State() initialValue = this.value;
  @State() inputValueToFilter = this.value;
  @State() currValue = this.value;

  @Watch("value")
  valueChangedHandler(): void {
    if (this.value !== this.currValue) {
      this.currValue = this.value;
    }

    if (this.searchable) {
      this.searchableSelectInputValue =
        this.getLabelFromValue(this.currValue) || this.currValue;
    }
  }

  /**
   * Emitted when the select loses focus.
   */
  @Event() icBlur!: EventEmitter<void>;

  /**
   * Emitted when the value changes.
   */
  @Event() icChange!: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when the clear button is clicked.
   */
  @Event() icClear!: EventEmitter<void>;

  /**
   * Emitted when the select gains focus.
   */
  @Event() icFocus!: EventEmitter<void>;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() icInput: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when an option is highlighted within the menu.
   * Highlighting a menu item will also trigger an `icChange/onIcChange` due to the value being updated.
   */
  @Event() icOptionSelect: EventEmitter<IcOptionSelectEventDetail>;

  /**
   * Emitted when the 'retry loading' button is clicked for a searchable variant.
   */
  @Event() icRetryLoad: EventEmitter<IcValueEventDetail>;

  disconnectedCallback(): void {
    removeFormResetListener(this.host, this.handleFormReset);
  }

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.host, [
      ...IC_INHERITED_ARIA,
      "tabindex",
      "title",
    ]);

    removeDisabledFalse(this.disabled, this.host);

    this.setOptionsValuesFromLabels();

    addFormResetListener(this.host, this.handleFormReset);

    if (!this.options.length) {
      this.initialOptionsEmpty = true;
    } else {
      this.setDefaultValue();
    }
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Select"
    );

    if (this.loading) this.triggerLoading();

    this.hiddenInputValue = this.searchable && this.currValue;
  }

  componentDidRender(): void {
    if (this.nativeSelectElement && !this.disabled) {
      this.setTextColor();
    }
  }

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

  private handleRetry = (ev: CustomEvent<IcValueEventDetail>) => {
    if (ev.detail.keyPressed) this.searchableSelectElement?.focus();
    this.blurredBecauseButtonPressed = true;
    this.retryButtonClick = true;
    this.hasSetDefaultValue = true;
    this.icRetryLoad.emit({ value: this.hiddenInputValue });
  };

  private updateOnChangeDebounce(newValue: number) {
    if (this.currDebounce !== newValue) {
      this.currDebounce = newValue;
    }
  }

  private emitIcChange = (value: string) => {
    if (!this.searchable) {
      this.value = value;
    }

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
      this.value = event.detail.value;
      this.searchableMenuItemSelected = true;

      // After editing the input, if selecting the same option as before, set the input value to label again
      if (this.value === this.currValue) {
        this.searchableSelectInputValue = this.getLabelFromValue(this.value);
      }

      this.inputValueToFilter = null;
      this.hiddenInputValue = this.getValueFromLabel(
        this.searchableSelectInputValue
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

  private handleMenuValueChange = (ev: CustomEvent): void => {
    this.value = ev.detail.value;
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
    if (!this.open) {
      if (this.isExternalFiltering()) {
        this.menu.options = this.filteredOptions;
      } else if (
        !this.hasTimedOut &&
        !this.loading &&
        (!this.searchable || this.searchableMenuItemSelected)
      ) {
        this.noOptions = null;
        this.menu.options = this.options;
      }
    }

    if (event.detail !== 0) {
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
    this.hasTimedOut = false;
    clearTimeout(this.timeoutTimer);
    this.noOptions = null;
    this.emitImmediateIcChange(null);
    this.icClear.emit();

    if (this.searchable) {
      this.searchableSelectElement.value = null;
      this.searchableSelectInputValue = null;
      this.filteredOptions = this.options;
      this.hiddenInputValue = null;
      this.searchableSelectElement.focus();
    } else {
      this.customSelectElement.focus();
    }
  };

  private handleCharacterKeyDown = (key: string) => {
    // Only close menu when space is pressed if not being used alongside character keys to quickly select options
    if (
      this.open &&
      key === " " &&
      this.pressedCharacters.length === 0 &&
      !this.hasTimedOut &&
      !this.loading
    ) {
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
    if ((event.key !== "Escape" && event.key !== "Tab") || this.open) {
      event.cancelBubble = true;
    }
    this.handleCharacterKeyDown(event.key);
  };

  private handleKeyDown = (event: KeyboardEvent): void => {
    if ((event.key !== "Escape" && event.key !== "Tab") || this.open) {
      event.cancelBubble = true;
    }
    const isArrowKey = event.key === "ArrowDown" || event.key === "ArrowUp";

    if (!this.open) {
      if (this.isExternalFiltering() && (event.key === "Enter" || isArrowKey)) {
        this.menu.options = this.filteredOptions;
      } else {
        if (!this.hasTimedOut) {
          this.noOptions = null;
          this.menu.options = this.options;
        }
      }
    }

    if (this.open && event.key === "Enter") {
      this.setMenuChange(false);
    } else {
      if (!(isArrowKey && this.noOptions !== null)) {
        if (!(event.key === " " && this.pressedCharacters.length > 0)) {
          // Keyboard events get passed onto ic-menu
          this.menu.handleKeyboardOpen(event);
        }
        this.handleCharacterKeyDown(event.key);
      }
    }
  };

  private handleClearButtonFocus = (): void => {
    this.clearButtonFocused = true;
  };

  private handleClearButtonBlur = (ev: FocusEvent): void => {
    const retryButton = this.menu?.querySelector("#retry-button");
    if (
      !(
        this.searchableSelectElement &&
        ev.relatedTarget === this.searchableSelectElement
      ) &&
      !(retryButton && ev.relatedTarget === retryButton)
    ) {
      this.setMenuChange(false);
      this.handleFocusIndicatorDisplay();
    }
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
        this.inputValueToFilter,
        this.searchMatchPosition
      );
      this.searchableMenuItemSelected = false;
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

  private triggerLoading = () => {
    this.hasTimedOut = false;
    this.noOptions = [{ label: this.loadingLabel, value: "", loading: true }];
    if (this.filteredOptions !== this.noOptions && this.searchable)
      this.filteredOptions = this.noOptions;
    else if (!this.searchable && this.options !== this.noOptions)
      this.options = this.noOptions;
    if (this.timeout) {
      this.timeoutTimer = window.setTimeout(() => {
        this.loading = false;
        this.hasTimedOut = true;
        this.noOptions = [
          { label: this.loadingErrorLabel, value: "", timedOut: true },
        ];
        this.filteredOptions = this.noOptions;
        if (!this.searchable) this.options = this.noOptions;
      }, this.timeout);
    }
  };

  private getValueFromLabel = (label: string): string | undefined => {
    return this.options.find((option) => option.label === label)?.value;
  };

  private handleSearchableSelectInput = (event: Event): void => {
    this.searchableSelectInputValue = (event.target as HTMLInputElement).value;
    this.icInput.emit({ value: this.searchableSelectInputValue });
    this.emitIcChange(this.searchableSelectInputValue);

    this.hiddenInputValue = this.searchableSelectInputValue;
    this.inputValueToFilter = this.searchableSelectInputValue;
    this.setMenuChange(true);

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
    const target = event.relatedTarget as HTMLElement;
    if (
      target !== null &&
      target.tagName === "UL" &&
      target.className.includes("menu")
    ) {
      return;
    }

    const retryButton = this.menu?.querySelector("#retry-button");
    const isSearchableAndNoFocusedInternalElements =
      this.searchable &&
      event.relatedTarget !== this.menu &&
      !Array.from(this.menu.querySelectorAll("[role='option']")).includes(
        event.relatedTarget as Element
      ) &&
      !(this.clearButton && event.relatedTarget === this.clearButton) &&
      !(retryButton && event.relatedTarget === retryButton);

    if (isSearchableAndNoFocusedInternalElements) {
      if (!this.retryButtonClick) {
        this.setMenuChange(false);
      }
      this.handleFocusIndicatorDisplay();
    }

    this.retryButtonClick = false;
    this.icBlur.emit();
  };

  private onTimeoutBlur = (ev: CustomEvent) => {
    if (
      (ev.detail.ev as FocusEvent).relatedTarget !==
        this.searchableSelectElement &&
      !this.blurredBecauseButtonPressed
    ) {
      this.setMenuChange(false);
      this.handleFocusIndicatorDisplay();
      this.icBlur.emit();
    }
    this.blurredBecauseButtonPressed = false;
  };

  private handleFormReset = (): void => {
    this.value = this.initialValue;
    if (this.searchable) {
      this.searchableSelectInputValue = this.getDefaultValue(this.value);
      this.hiddenInputValue = this.value;
    }
  };

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

    const noOptionSelect =
      searchable &&
      (this.loading ||
        this.hasTimedOut ||
        (this.noOptions !== null &&
          this.noOptions[0] &&
          this.noOptions[0].label === this.emptyOptionListText));
    const inputValue = this.searchable ? this.hiddenInputValue : currValue;

    renderHiddenInput(true, this.host, name, inputValue, disabled);

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
        onBlur={this.onBlur}
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
                "no-results": noOptionSelect,
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
              onMenuValueChange={this.handleMenuValueChange}
              onUngroupedOptionsSet={this.setUngroupedOptions}
              onRetryButtonClicked={this.handleRetry}
              parentEl={this.host}
              onTimeoutBlur={this.onTimeoutBlur}
              activationType={this.searchable ? "manual" : "automatic"}
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
