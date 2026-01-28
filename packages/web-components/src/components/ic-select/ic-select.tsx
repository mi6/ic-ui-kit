import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
  State,
  Watch,
  forceUpdate,
  Method,
} from "@stencil/core";
import {
  addFormResetListener,
  checkSlotInChildMutations,
  getInputDescribedByText,
  isMobileOrTablet,
  isSlotUsed,
  removeDisabledFalse,
  removeFormResetListener,
  renderHiddenInput,
} from "../../utils/helpers";
import { IC_INHERITED_ARIA } from "../../utils/constants";
import {
  IcAriaLive,
  IcInformationStatusOrEmpty,
  IcSearchMatchPositions,
  IcMultiValueEventDetail,
  IcSizes,
  IcThemeMode,
  IcInformationStatus,
} from "../../utils/types";
import {
  IcSelectOption,
  IcSelectOptionBase,
  IcSelectOptionFlat,
  IcSelectOptionGroup,
} from "./ic-select.types";
import Expand from "./assets/Expand.svg";
import Clear from "./assets/Clear.svg";
import {
  IcMenuChangeEventDetail,
  IcMenuOptionIdEventDetail,
  IcOptionSelectEventDetail,
} from "../ic-menu/ic-menu.types";
import { IcMenuCustomEvent } from "../../components";

let inputIds = 0;
const MUTABLE_ATTRIBUTES = [...IC_INHERITED_ARIA, "tabindex", "title"];

/**
 * @slot helper-text - Content is set as the helper text for the select.
 * @slot icon - Content will be placed to the left of the select text input.
 */
@Component({
  tag: "ic-select",
  styleUrl: "ic-select.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Select {
  private inputId = `ic-select-input-${inputIds++}`;
  private menu?: HTMLIcMenuElement;
  private menuId = `${this.inputId}-menu`;
  private inheritedAttributes: { [k: string]: string } = {};
  private anchorEl?: HTMLElement;
  private nativeSelectElement?: HTMLSelectElement;
  private hostMutationObserver: MutationObserver | null = null;
  private clearButton?: HTMLIcButtonElement;
  private searchableSelectElement?: HTMLInputElement;
  private timeoutTimer: number | null = null;
  private hasTimedOut: boolean = false;
  private selectElement?: HTMLButtonElement;
  private initialRender: boolean = true;
  private characterKeyPressTimer?: number;
  private pressedCharacters = "";

  @Element() el!: HTMLIcSelectElement;

  @State() ariaActiveDescendant?: string;
  @State() debounceIcInput?: number;
  @State() hiddenInputValue: string | null;
  @State() hasError: boolean = false;
  @State() searchableSelectInputValue: string = "";
  @State() selectButtonAriaLiveText: string = "";
  @State() selectInputAriaLiveText: string = "";

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop({ reflect: true }) disabled = false;

  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * If `true`, the built in filtering will be disabled for a searchable variant. For example, if options will already be filtered from external source.
   */
  @Prop() disableAutoFiltering = false;

  /**
   * The text displayed when there are no options in the option list.
   */
  @Prop() emptyOptionListText = "No results found";

  /**
   * The <form> element to associate the select with.
   */
  @Prop() form?: string;

  /**
   * If `true`, the select will fill the width of the container.
   */
  @Prop() fullWidth = false;

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText = "";

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel = false;

  /**
   * If `true`, descriptions of options will be included when filtering options in a searchable select. Only applies to built in filtering.
   */
  @Prop() includeDescriptionsInSearch = false;

  /**
   * If `true`, group titles of grouped options will be included when filtering options in a searchable select. Only applies to built in filtering.
   */
  @Prop() includeGroupTitlesInSearch = false;

  /**
   * The label for the select.
   */
  @Prop() label!: string;

  /**
   * The message displayed when external loading times out.
   */
  @Prop() loadingErrorLabel = "Loading Error";

  /**
   * The message displayed whilst the options are being loaded externally.
   */
  @Prop() loadingLabel = "Loading...";

  /**
   * If `true`, multiple options can be selected.
   */
  @Prop() multiple = false;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name = this.inputId;

  /**
   * The placeholder value to be displayed.
   */
  @Prop() placeholder = "Select an option";

  /**
   * If `true`, the readonly state will be set.
   */
  @Prop() readonly = false;

  /**
   * If `true`, the select will require a value.
   */
  @Prop() required = false;

  /**
   * If `true`, a searchable variant of the select will be displayed which can be typed in to filter options. This functionality is only available on the single-select variant of the select component.
   */
  @Prop() searchable = false;

  /**
   * Whether the search string of the searchable select should match the start of or anywhere in the options. Only applies to built in filtering.
   */
  @Prop() searchMatchPosition: IcSearchMatchPositions = "anywhere";

  /**
   * If `true`, the icOptionSelect event will be fired on enter instead of ArrowUp and ArrowDown on the single select.
   */
  @Prop() selectOnEnter = false;

  /**
   * If `true`, a button which clears the select input when clicked will be displayed. The button will always appear on the searchable select.
   */
  @Prop() showClearButton = false;

  /**
   * The size of the select.
   */
  @Prop() size: IcSizes = "medium";

  /**
   * If using external filtering, set a timeout for when loading takes too long.
   */
  @Prop() timeout?: number;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * The value of the `aria-live` attribute on the validation message.
   */
  @Prop() validationAriaLive: IcAriaLive = "polite";

  /**
   * The validation status - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus: IcInformationStatusOrEmpty = "";

  /**
   * The text to display as the validation message.
   */
  @Prop() validationText = "";

  /**
   * If `true` and on a mobile or tablet device, the native select element will be used instead of the custom select component for better usability.
   */
  @Prop() useNativeSelectOnMobile = true;

  /**
   * If `true`, the loading state will be triggered when fetching options asynchronously.
   */
  @Prop({ mutable: true }) loading = false;
  @Watch("loading")
  loadingHandler(newValue: boolean): void {
    this.hasTimedOut = false;

    if (newValue) {
      this.hasError = false;
      if (this.timeout) {
        if (this.timeoutTimer) {
          this.clearTimer();
        }
        this.timeoutTimer = window.setTimeout(() => {
          this.loading = false;
          this.hasTimedOut = true;
          forceUpdate(this);
        }, this.timeout);
      }
    } else {
      if (this.timeoutTimer) {
        this.clearTimer();
      }
    }
  }

  private clearTimer() {
    if (this.timeoutTimer) {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
  }

  /**
   * The possible selection options.
   */
  @Prop() options: IcSelectOption[] = [];
  @State() flatOptions: IcSelectOptionFlat[] = [];
  @Watch("options")
  optionsChangedHandler(): void {
    const flat = this.getFlatOptions(this.options)
      .filter((option) => option.value != null || option.label != null) // filter out options missing both value and label
      .map((option) => ({
        ...option,
        value: option.value ?? option.label, // if an option is missing a value, use the label as the value
        label: option.label ?? option.value, // vice versa
      }));
    this.flatOptions = this.getDeduplicatedOptions(flat);

    if (!this.initialRender) this.loading = false;
    this.clearTimer();
    this.updateSelectButtonAriaLive();
  }

  /**
   * The amount of time, in milliseconds, to wait to trigger the `icInput` event after each keystroke.
   */
  @Prop() debounce = 0;
  @State() currDebounce = this.debounce;
  @Watch("debounce")
  debounceChangedHandler(newValue: number): void {
    if (this.currDebounce !== newValue) {
      this.currDebounce = newValue;
    }
  }

  /**
   * The value of the select, reflected by the value of the currently selected option.
   * For the searchable variant, the value is also reflected by the user input.
   * For the multi-select variant, the value must be an array of option values.
   */
  @Prop({ mutable: true }) value: string | string[] | null = null;
  @State() initialValue = this.value;
  @Watch("value")
  valueChangedHandler(newValue: string | string[] | null): void {
    const validated = this.getValidatedValue(newValue);

    const isEqual =
      Array.isArray(validated) && Array.isArray(this.value)
        ? validated.length === this.value.length &&
          validated.every((v, i) => v === (this.value as string[])[i])
        : validated === this.value;

    if (!isEqual) {
      this.value = validated;
      return;
    }

    this.updateSelectButtonAriaLive();
    this.icChange.emit({ value: this.value });
  }

  @State() open = false;
  @Watch("open")
  openChangedHandler(): void {
    this.open ? this.icOpen.emit() : this.icClose.emit();
    if (!this.open) {
      this.ariaActiveDescendant = undefined;
    }
    this.handleFocusIndicatorDisplay();
  }

  /**
   * Emitted when the select loses focus.
   */
  @Event() icBlur: EventEmitter<void>;

  /**
   * Emitted when the value changes.
   */
  @Event() icChange: EventEmitter<IcMultiValueEventDetail>;

  /**
   * Emitted when the clear or clear all button is clicked.
   */
  @Event() icClear: EventEmitter<void>;

  /**
   * Emitted when the select options menu is closed.
   */
  @Event() icClose: EventEmitter<void>;

  /**
   * Emitted when the select gains focus.
   */
  @Event() icFocus: EventEmitter<void>;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() icInput: EventEmitter<IcMultiValueEventDetail>;

  /**
   * Emitted when the select options menu is opened.
   */
  @Event() icOpen: EventEmitter<void>;

  /**
   * Emitted when an option is selected.
   * Selecting an option will also trigger an `icChange/onIcChange` due to the value being updated.
   */
  @Event() icOptionSelect: EventEmitter<IcOptionSelectEventDetail>;

  /**
   * Emitted when `multiple` is `true` and an option is deselected.
   */
  @Event() icOptionDeselect: EventEmitter<IcOptionSelectEventDetail>;

  /**
   * Emitted when the 'retry loading' button is clicked for a searchable variant.
   */
  @Event() icRetryLoad: EventEmitter<IcMultiValueEventDetail>;

  /**
   * Sets focus on the select component.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.nativeSelectElement) {
      this.nativeSelectElement.focus();
    } else if (this.selectElement) {
      this.selectElement.focus();
    } else if (this.searchableSelectElement) {
      this.searchableSelectElement.focus();
    }
  }

  componentDidRender(): void {
    if (this.nativeSelectElement && !this.disabled) {
      this.setTextColor();
    }
    this.initialRender = false;
  }

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
    this.hostMutationObserver?.disconnect();
    this.clearTimer();
  }

  componentDidLoad(): void {
    forceUpdate(this);
    this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
    this.hostMutationObserver.observe(this.el, {
      attributes: true,
      childList: true,
    });
  }

  private getValidatedValue = (
    value: string | string[] | null
  ): string | string[] | null => {
    const validValues = this.flatOptions.map((opt) => opt.value);

    if (validValues.length === 0) return value;

    if (this.multiple) {
      if (!value) return null;
      const arr = Array.isArray(value) ? value : [value]; // Ensure value is an array
      const filtered = validValues.filter((v) => arr.includes(v)); // Keep only valid values
      return filtered.length > 0 ? filtered : null;
    } else {
      return validValues.includes(value as string) ? value : null;
    }
  };

  componentWillLoad(): void {
    this.optionsChangedHandler();
    this.value = this.getValidatedValue(this.value);
    this.initialValue = this.value;

    if (this.loading) this.loadingHandler(true);

    addFormResetListener(this.el, this.handleFormReset);
  }

  private getFilteredOptions = (
    searchString: string,
    searchMatchPosition: "anywhere" | "start",
    includeDescriptionsInSearch: boolean,
    includeGroupTitlesInSearch: boolean
  ): IcSelectOption[] => {
    const search = searchString.toLowerCase();
    const match = (text: string, method: "anywhere" | "start") =>
      method === "anywhere" ? text.includes(search) : text.startsWith(search);

    return this.unflattenOptions(
      this.flatOptions.filter((option) => {
        const label = option.label.toLowerCase();
        const group = option.group?.toLowerCase() ?? "";
        const description = option.description?.toLowerCase() ?? "";
        return (
          match(label, searchMatchPosition) ||
          (includeDescriptionsInSearch &&
            match(description, searchMatchPosition)) ||
          (includeGroupTitlesInSearch && match(group, searchMatchPosition))
        );
      })
    );
  };

  private getOptions = (): IcSelectOption[] => {
    const options =
      this.searchable &&
      !this.disableAutoFiltering &&
      this.searchableSelectInputValue
        ? this.getFilteredOptions(
            this.searchableSelectInputValue,
            this.searchMatchPosition,
            this.includeDescriptionsInSearch,
            this.includeGroupTitlesInSearch
          )
        : this.unflattenOptions(this.flatOptions);

    if (this.hasTimedOut)
      return [{ label: this.loadingErrorLabel, value: "", timedOut: true }];

    if (this.loading)
      return [{ label: this.loadingLabel, value: "", loading: true }];

    if (options.length > 0) return options;

    return [{ label: this.emptyOptionListText, value: "" }];
  };

  private getFlatOptions = (options: IcSelectOption[]): IcSelectOptionFlat[] =>
    options.flatMap(
      (item) =>
        ("children" in item && item.children
          ? [...item.children.map((child) => ({ group: item.label, ...child }))]
          : [item]) as IcSelectOptionFlat[]
    );

  private unflattenOptions = (
    flatOptions: IcSelectOptionFlat[]
  ): IcSelectOption[] => {
    const groupMap = new Map<string, IcSelectOptionGroup>();
    const result: IcSelectOption[] = [];

    for (const option of flatOptions) {
      if (option.group) {
        let group = groupMap.get(option.group);
        if (!group) {
          group = { label: option.group, children: [] };
          groupMap.set(option.group, group);
          result.push(group);
        }
        const { group: _, ...rest } = option;
        group.children.push(rest as IcSelectOptionBase);
      } else {
        result.push(option);
      }
    }
    return result;
  };

  private getLabelFromValue = (value: string | null): string =>
    this.flatOptions.find((option) => option.value === value)?.label ?? "";

  // Construct the string that will be shown in the select input or button
  private getLabelString = (): string => {
    if (Array.isArray(this.value)) {
      return this.value.map(this.getLabelFromValue).filter(Boolean).join(", ");
    }
    return (
      this.getLabelFromValue(this.value) ||
      (this.searchable ? "" : this.placeholder)
    );
  };

  private handleClick = (event: MouseEvent) => {
    if (event.detail !== 0) {
      this.menu?.handleClickOpen();
    }
  };

  private handleExpandIconMouseDown = (event: MouseEvent) => {
    if (!this.disabled) {
      event.preventDefault();
      this.searchableSelectElement?.focus();
      this.handleClick(event);
    }
  };

  private handleBlur = ({ relatedTarget }: FocusEvent) => {
    const target = relatedTarget as HTMLElement;
    if (
      this.el.contains(target) ||
      this.el.shadowRoot?.contains(target) ||
      this.menu?.contains(target) ||
      target === this.clearButton
    ) {
      return;
    }

    this.open = false;
    this.handleFocusIndicatorDisplay();

    if (this.searchable) {
      this.searchableSelectInputValue = "";
    }
    this.icBlur.emit();
  };

  private handleTimeoutBlur = (event: CustomEvent<{ ev: FocusEvent }>) => {
    this.handleBlur(event.detail.ev);
  };

  private handleFocus = () => {
    this.icFocus.emit();
  };

  private handleClear = () => {
    this.clearTimer();
    this.loading = false;
    this.value = null;
    this.searchableSelectInputValue = "";

    this.icClear.emit();

    this.setFocus();
  };

  private setTextColor = () => {
    if (this.nativeSelectElement) {
      this.nativeSelectElement.className =
        this.nativeSelectElement.selectedIndex === 0
          ? "placeholder"
          : "select-option-selected";
    }
  };

  private handleNativeSelectChange = () => {
    if (this.nativeSelectElement) {
      this.icOptionSelect.emit({ value: this.nativeSelectElement.value });
      this.icChange.emit({ value: this.nativeSelectElement.value });
    }
    this.setTextColor();
  };

  private handleFocusIndicatorDisplay = () => {
    const focusIndicator =
      this.el.shadowRoot?.querySelector(".focus-indicator");

    if (focusIndicator) {
      if (this.open) {
        focusIndicator.classList.add("focus-indicator-enabled");
      } else {
        focusIndicator.classList.remove("focus-indicator-enabled");
      }
    }
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (!(event.key === " " && this.pressedCharacters.length > 0)) {
      if (this.open) {
        this.menu?.handleMenuKeyDown(event);
      } else {
        this.menu?.handleKeyboardOpen(event);
      }
    }

    if (
      !this.multiple &&
      !this.searchable &&
      !this.selectOnEnter &&
      /^[a-zA-Z0-9 ]$/.test(event.key)
    ) {
      this.handleCharacterKeyDown(event.key);
    }
  };

  private handleCharacterKeyDown = (key: string) => {
    // Only close menu when space is pressed if not being used alongside character keys to quickly select options
    if (this.open && key === " " && this.pressedCharacters.length === 0) {
      this.open = false;
    }

    if (key.length !== 1 || this.searchable) {
      this.pressedCharacters = "";
      return;
    }

    window.clearTimeout(this.characterKeyPressTimer);
    this.characterKeyPressTimer = window.setTimeout(
      () => (this.pressedCharacters = ""),
      1000
    );

    if (key !== " " || !!this.pressedCharacters) {
      this.pressedCharacters += key;
      const filteredOptions = this.getFilteredOptions(
        this.pressedCharacters,
        "start",
        false,
        false
      );

      if (filteredOptions.length > 0) {
        const firstOption = filteredOptions[0];
        if ("children" in firstOption) {
          this.value = firstOption.children[0].value;
        } else {
          this.value = firstOption.value;
        }
      }
    }
  };

  private handleNativeSelectKeyDown = (event: KeyboardEvent) => {
    this.handleKeyDown(event);
  };

  private handleSelectChange = (
    event: CustomEvent<IcOptionSelectEventDetail>
  ) => {
    const { value } = event.detail;
    if (!value || this.getLabelFromValue(value) === this.emptyOptionListText) {
      this.value = null;
      return;
    }

    if (this.multiple) {
      let valueArray = Array.isArray(this.value) ? [...this.value] : [];
      const index = valueArray.indexOf(value);

      if (index > -1) {
        valueArray.splice(index, 1);
        this.icOptionDeselect.emit({ value });
      } else {
        this.icOptionSelect.emit({ value });
        valueArray.push(value);
        valueArray = this.getValidatedValue(valueArray) as string[];
      }
      this.value = valueArray.length ? valueArray : null;
    } else {
      this.icOptionSelect.emit({ value });
      this.value = value;
      if (this.searchable) this.searchableSelectInputValue = "";
    }
  };

  private handleSelectAllChange = ({
    detail,
  }: CustomEvent<{ select: boolean }>) => {
    const allSelectableValues = this.flatOptions
      .filter((option) => !option.disabled)
      .map((option) => option.value);
    if (detail.select) {
      allSelectableValues
        .filter((value) => !((this.value ?? []) as string[]).includes(value))
        .forEach((value) => {
          this.icOptionSelect.emit({ value });
        });

      this.value = allSelectableValues;
    } else {
      (this.value as string[]).forEach((value) =>
        this.icOptionDeselect.emit({ value })
      );
      this.value = null;
    }
  };

  private handleFormReset = () => {
    this.value = this.initialValue;
    this.searchableSelectInputValue = "";
    if (this.searchable) {
      this.hiddenInputValue = this.initialValue as string;
    }
  };

  private handleRetry = () => {
    this.clearTimer();
    this.hasTimedOut = false;
    this.hasError = false;
    this.loading = true;
    this.icRetryLoad.emit({
      value: this.searchable
        ? this.searchableSelectInputValue
        : this.hiddenInputValue,
    });
    this.setFocus();
  };

  private handleSearchableSelectInput = (event: Event) => {
    this.updateSearchableSelectResultAriaLive();
    if (!this.multiple) {
      this.value = null;
    }

    this.searchableSelectInputValue =
      (event.target as HTMLInputElement).value ?? "";
    this.open = true;

    clearTimeout(this.debounceIcInput);
    this.debounceIcInput = window.setTimeout(
      () => this.icInput.emit({ value: this.searchableSelectInputValue }),
      this.currDebounce
    );
  };

  private hostMutationCallback = (mutationList: MutationRecord[]) => {
    let forceComponentUpdate = false;
    mutationList.forEach(
      ({ attributeName, type, addedNodes, removedNodes }) => {
        if (attributeName) {
          const attribute = this.el.getAttribute(attributeName);
          if (attribute && MUTABLE_ATTRIBUTES.includes(attributeName)) {
            this.inheritedAttributes[attributeName] = attribute;
            forceComponentUpdate = true;
          }
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

  private updateSelectButtonAriaLive = () => {
    const value_label = this.getLabelFromValue(this.value as string);
    this.selectButtonAriaLiveText = this.multiple
      ? `${this.value ? this.value.length : 0} of ${
          this.flatOptions.length
        } selected`
      : this.value
      ? value_label ?? `${value_label} selected`
      : "";
  };

  private updateSearchableSelectResultAriaLive = () => {
    this.selectInputAriaLiveText =
      this.getOptions()?.[0]?.label == this.emptyOptionListText
        ? this.emptyOptionListText
        : "";
  };

  private updateAriaActiveDescendant = (
    event: IcMenuCustomEvent<IcMenuOptionIdEventDetail>
  ) => {
    this.ariaActiveDescendant = event.detail.optionId;
  };

  private handleMenuChange = (event: CustomEvent<IcMenuChangeEventDetail>) => {
    this.open = event.detail.open;
    this.pressedCharacters = "";
  };

  private getDeduplicatedOptions = (
    flatOptions: IcSelectOptionFlat[]
  ): IcSelectOptionFlat[] => {
    const seen = new Set();
    return flatOptions.filter((option) => {
      if (option.value && seen.has(option.value)) {
        console.warn(
          `ic-select with label ${this.label} was populated with duplicate option (value: ${option.value}) which has been removed.`
        );
        return false;
      }
      if (option.value) seen.add(option.value);
      return true;
    });
  };

  private renderNativeOption = (option: IcSelectOptionBase) => (
    <option
      value={option.value}
      disabled={option.disabled}
      selected={option.value === this.value}
    >
      {option.label}
    </option>
  );

  render() {
    const {
      disabled,
      searchable,
      size,
      fullWidth,
      theme,
      readonly,
      hideLabel,
      inputId,
      label,
      helperText,
      required,
      value,
      options,
      menuId,
      multiple,
      validationStatus,
      open,
      showClearButton,
      selectOnEnter,
      loading,
      searchableSelectInputValue,
      validationText,
      validationAriaLive,
      form,
      ariaActiveDescendant,
      placeholder,
      name,
      inheritedAttributes,
      selectInputAriaLiveText,
      selectButtonAriaLiveText,
    } = this;

    const hasValue = !!value;
    const hasInput = !!searchableSelectInputValue;
    const isClearable =
      !disabled &&
      ((searchable && (hasInput || hasValue)) ||
        (!searchable && hasValue && !loading && showClearButton));

    const showValidation = !!validationStatus && !disabled;

    const invalid = validationStatus === IcInformationStatus.Error;

    const describedBy = getInputDescribedByText(
      this.el,
      inputId,
      helperText !== "",
      showValidation
    ).trim();

    const menuOptions = this.getOptions();
    const noOptions =
      disabled ||
      (menuOptions.length === 1 &&
        (menuOptions[0].label === this.emptyOptionListText ||
          "loading" in menuOptions[0] ||
          "timedOut" in menuOptions[0]));

    renderHiddenInput(this.el, value as string, name || inputId, disabled);

    const ClearButton = () => (
      <ic-button
        ref={(el) => (this.clearButton = el)}
        id="clear-button"
        aria-label={this.searchable ? "Clear input" : "Clear selection"}
        class="clear-button"
        innerHTML={Clear}
        onClick={this.handleClear}
        onBlur={this.handleBlur}
        size={size}
        variant="icon-tertiary"
      ></ic-button>
    );

    const NativeSelect = () => (
      <select
        ref={(el) => (this.nativeSelectElement = el)}
        disabled={disabled}
        onChange={this.handleNativeSelectChange}
        required={required}
        id={inputId}
        aria-label={label}
        aria-describedby={describedBy}
        aria-invalid={invalid ? "true" : "false"}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyDown={this.handleNativeSelectKeyDown}
        form={form}
        {...inheritedAttributes}
      >
        <option value="" selected disabled={!showClearButton}>
          {placeholder}
        </option>
        {options.map((option) =>
          "children" in option ? (
            <optgroup label={option.label}>
              {option.children.map((child) =>
                this.renderNativeOption(child as IcSelectOptionBase)
              )}
            </optgroup>
          ) : (
            this.renderNativeOption(option as IcSelectOptionBase)
          )
        )}
      </select>
    );

    const SelectButton = () => (
      <div class="select-container">
        <button
          class="select-input"
          role="combobox"
          ref={(el) => (this.selectElement = el)}
          id={inputId}
          aria-label={`${label}, ${
            (multiple && value
              ? `${value.length} of ${
                  this.flatOptions.length
                } selected, ${this.getLabelString()}`
              : this.getLabelString()) || placeholder
          }`}
          onClick={this.handleClick}
          aria-describedby={describedBy}
          aria-invalid={invalid ? "true" : "false"}
          aria-haspopup="listbox"
          aria-expanded={`${open}`}
          aria-controls={menuId}
          aria-required={`${required}`}
          disabled={disabled}
          onKeyDown={this.handleKeyDown}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          aria-activedescendant={ariaActiveDescendant}
        >
          <ic-typography
            variant="body"
            class={{
              "value-text": true,
              "with-clear-button": !!isClearable,
              placeholder: !value,
            }}
          >
            {this.getLabelString()}
          </ic-typography>
          <div class="select-input-end">
            {isClearable && <div class="divider"></div>}
            <span
              class={{
                "expand-icon": true,
                "expand-icon-open": open,
              }}
              innerHTML={Expand}
              aria-hidden="true"
            />
          </div>
        </button>
        {isClearable && <ClearButton></ClearButton>}
        <div
          aria-live="polite"
          aria-atomic="true"
          class="aria-live-hidden-text"
        >
          {selectButtonAriaLiveText}
        </div>
      </div>
    );

    const SelectInput = () => (
      <div class="searchable-select-container">
        <input
          class={{
            "value-text": true,
            "select-input": true,
            "with-clear-button": !!searchableSelectInputValue,
          }}
          role="combobox"
          autocomplete="off"
          aria-label={label}
          aria-describedby={describedBy}
          aria-activedescendant={ariaActiveDescendant}
          aria-autocomplete="list"
          aria-expanded={`${open}`}
          aria-invalid={invalid ? "true" : "false"}
          aria-required={`${required}`}
          aria-controls={menuId}
          ref={(el) => (this.searchableSelectElement = el)}
          id={inputId}
          value={
            multiple
              ? ""
              : value
              ? this.getLabelString()
              : searchableSelectInputValue || undefined
          }
          disabled={disabled}
          placeholder={placeholder}
          onInput={this.handleSearchableSelectInput}
          onClick={this.handleClick}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
          form={form}
        ></input>
        {isClearable && (
          <div class="clear-button-container">
            <ClearButton></ClearButton>
            <div class="divider"></div>
          </div>
        )}
        <span
          onMouseDown={this.handleExpandIconMouseDown}
          class={{
            "expand-icon": true,
            "expand-icon-open": open,
          }}
          innerHTML={Expand}
          aria-hidden="true"
        />
        <div aria-live="polite" role="status" class="aria-live-hidden-text">
          {selectInputAriaLiveText}
        </div>
      </div>
    );

    const ReadOnly = () => (
      <ic-typography>
        <p>
          {this.getLabelString() === placeholder ? "" : this.getLabelString()}
        </p>
      </ic-typography>
    );

    return (
      <Host
        class={{
          "ic-select-disabled": disabled,
          "ic-select-searchable": searchable,
          [`ic-select-${size}`]: size !== "medium",
          "ic-select-full-width": fullWidth,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <ic-input-container readonly={readonly}>
          {!hideLabel && (
            <ic-input-label
              for={inputId}
              label={label}
              helperText={helperText}
              required={required}
              disabled={disabled}
              readonly={readonly}
            >
              <slot name="helper-text" slot="helper-text"></slot>
            </ic-input-label>
          )}
          <ic-input-component-container
            ref={(el) => (this.anchorEl = el)}
            class={{ "menu-open": open }}
            size={size}
            fullWidth={fullWidth}
            disabled={disabled}
            readonly={readonly}
            validationStatus={validationStatus}
          >
            {isSlotUsed(this.el, "icon") &&
              !disabled &&
              (!readonly || !!value) && (
                <span
                  slot="left-icon"
                  class={{
                    readonly,
                    "has-value": !!value,
                  }}
                >
                  <slot name="icon" />
                </span>
              )}
            {isMobileOrTablet() && this.useNativeSelectOnMobile && !multiple ? (
              <NativeSelect />
            ) : readonly ? (
              <ReadOnly />
            ) : !searchable ? (
              <SelectButton />
            ) : (
              <SelectInput />
            )}
          </ic-input-component-container>
          {!(
            isMobileOrTablet() &&
            this.useNativeSelectOnMobile &&
            !multiple
          ) && (
            <ic-menu
              ref={(el) => (this.menu = el)}
              class={{ "no-results": noOptions }}
              inputEl={
                searchable ? this.searchableSelectElement : this.selectElement
              }
              allowMenuFocus={false}
              inputLabel={label}
              anchorEl={this.anchorEl}
              size={size}
              menuId={menuId}
              open={open}
              options={this.getOptions()}
              value={multiple ? (value as string[]) : (value as string)}
              fullWidth={fullWidth}
              selectOnEnter={selectOnEnter}
              onMenuStateChange={this.handleMenuChange}
              onMenuOptionSelect={this.handleSelectChange}
              onMenuOptionSelectAll={this.handleSelectAllChange}
              onTimeoutBlur={this.handleTimeoutBlur}
              onMenuOptionId={this.updateAriaActiveDescendant}
              onClick={this.setFocus}
              parentEl={this.el}
              activationType={
                searchable || multiple || selectOnEnter ? "manual" : "automatic"
              }
              onRetryButtonClicked={this.handleRetry}
              closeOnSelect={!multiple}
              multiSelect={multiple}
              searchableSelect={searchable}
            ></ic-menu>
          )}
          <ic-input-validation
            class={{
              "menu-open": open,
            }}
            ariaLiveMode={validationAriaLive}
            status={showValidation ? validationStatus : ""}
            message={showValidation ? validationText : ""}
            for={inputId}
          ></ic-input-validation>
        </ic-input-container>
      </Host>
    );
  }
}
