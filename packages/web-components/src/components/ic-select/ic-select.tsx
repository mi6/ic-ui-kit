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
  forceUpdate,
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
  getOptionsWithoutGroupTitlesCount,
  addFormResetListener,
  removeFormResetListener,
  removeDisabledFalse,
  checkSlotInChildMutations,
  isSlotUsed,
} from "../../utils/helpers";
import { IC_INHERITED_ARIA } from "../../utils/constants";
import {
  IcAriaLive,
  IcInformationStatus,
  IcInformationStatusOrEmpty,
  IcMenuOption,
  IcSearchMatchPositions,
  IcMultiValueEventDetail,
  IcSizes,
  IcThemeMode,
} from "../../utils/types";
import Expand from "./assets/Expand.svg";
import Clear from "./assets/Clear.svg";
import {
  IcMenuChangeEventDetail,
  IcOptionSelectEventDetail,
} from "../ic-menu/ic-menu.types";

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
  private anchorEl?: HTMLElement;
  private blurredBecauseButtonPressed = false;
  private characterKeyPressTimer?: number;
  private clearButton?: HTMLIcButtonElement;
  private customSelectElement?: HTMLButtonElement;
  private debounceAria?: number;
  private hasSetDefaultValue = false;
  private hasTimedOut = false;
  private inheritedAttributes: { [k: string]: string } = {};
  private initialOptionsEmpty = false;
  private inputId = `ic-select-input-${inputIds++}`;
  private menu?: HTMLIcMenuElement;
  private menuId = `${this.inputId}-menu`;
  private nativeSelectElement?: HTMLSelectElement;
  private retryButtonClick = false;
  private searchableMenuItemSelected = false;
  private searchableSelectElement?: HTMLInputElement;
  private timeoutTimer?: number;
  private ungroupedOptions: IcMenuOption[] = [];
  private hostMutationObserver: MutationObserver | null = null;

  @Element() el!: HTMLIcSelectElement;

  @State() ariaActiveDescendant?: string;
  @State() clearButtonFocused = false;
  @State() debounceIcInput?: number;
  @State() hiddenInputValue: string | null;
  @State() noOptions: IcMenuOption[] | null = null;
  @State() open = false;
  @State() pressedCharacters = "";
  @State() searchableSelectInputValue: string | null = null;

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
   * If `true`, the loading state will be triggered when fetching options asynchronously.
   */
  @Prop({ mutable: true }) loading = false;
  @Watch("loading")
  loadingHandler(newValue: boolean): void {
    newValue ? this.triggerLoading() : this.setOptions();
  }

  /**
   * The possible selection options.
   */
  @Prop() options: IcMenuOption[] = [];
  @State() filteredOptions: IcMenuOption[] = this.options;
  @State() uniqueOptions: IcMenuOption[] = this.options;
  @Watch("options")
  watchOptionsHandler(): void {
    this.setOptions();
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
  @State() inputValueToFilter: string | null = this.value as string;
  @State() currValue: string | string[] | null;
  @Watch("value")
  valueChangedHandler(): void {
    if (this.value !== this.currValue) {
      if (this.value && this.multiple) {
        this.currValue = this.getMultipleOptionsString(this.value as string[])
          ? this.getValueSortedByOptions(this.value as string[])
          : null;
        this.updateMultiSelectedCountAriaLive();
      } else {
        this.currValue = this.getLabelFromValue(this.value as string)
          ? this.value
          : null;
      }
    }

    if (this.searchable && this.value) {
      // Only set if value not null - prevents whole input value being cleared when edited
      this.searchableSelectInputValue =
        this.getLabelFromValue(String(this.currValue)) || null;
    }
  }

  @Watch("open")
  openChangedHandler(): void {
    this.open ? this.icOpen.emit() : this.icClose.emit();
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

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
    this.hostMutationObserver?.disconnect();
  }

  componentWillLoad(): void {
    const valueInOptions = this.multiple
      ? this.getMultipleOptionsString(this.value as string[])
      : this.getLabelFromValue(this.value as string);
    this.currValue = valueInOptions ? this.value : null;
    this.inheritedAttributes = inheritAttributes(this.el, MUTABLE_ATTRIBUTES);

    removeDisabledFalse(this.disabled, this.el);

    this.setOptionsValuesFromLabels();

    addFormResetListener(this.el, this.handleFormReset);

    if (!this.options.length) {
      this.initialOptionsEmpty = true;
      this.noOptions = [{ label: this.emptyOptionListText, value: "" }];
      this.uniqueOptions = this.noOptions;
      this.filteredOptions = this.noOptions;
    } else {
      this.setDefaultValue();
      this.uniqueOptions = this.deduplicateOptions(this.options);
    }
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Select"
    );

    if (this.loading) {
      this.triggerLoading();
    }

    if (this.searchable) {
      this.hiddenInputValue = this.currValue as string;
    }

    this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
    this.hostMutationObserver.observe(this.el, {
      attributes: true,
      childList: true,
    });
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

  // triggered when attributes of host element change
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

  private handleRetry = (ev: CustomEvent<IcMultiValueEventDetail>) => {
    if (ev.detail.keyPressed) this.searchableSelectElement?.focus();
    this.blurredBecauseButtonPressed = true;
    this.retryButtonClick = true;
    this.hasSetDefaultValue = true;
    this.icRetryLoad.emit({
      value: this.searchable
        ? this.searchableSelectInputValue
        : this.hiddenInputValue,
    });
  };

  private emitIcChange = (value: string | string[] | null) => {
    // If "Select all" button clicked, replace value with new value (array of all option values)
    if (this.multiple && !Array.isArray(value) && value !== null) {
      // Update selected options - adds / removes them, in order of option list
      // Create new array if value prop is undefined
      if (this.value) {
        let valueArray = (this.value as string[]).slice();

        if (this.value.includes(value)) {
          valueArray.splice(valueArray.indexOf(value), 1);
        } else {
          valueArray.push(value);
          valueArray = this.getValueSortedByOptions(valueArray);
        }

        this.value = valueArray.length === 0 ? null : valueArray;
      } else {
        this.value = [value];
      }
    } else {
      this.value = value;
    }

    this.icChange.emit({ value: this.multiple ? this.value : value });
  };

  private emitIcInput = (value: string) => {
    clearTimeout(this.debounceIcInput);
    this.debounceIcInput = window.setTimeout(
      () => this.icInput.emit({ value }),
      this.currDebounce
    );
  };

  private setOptions = () => {
    if (!this.hasTimedOut && this.options !== this.noOptions) {
      this.loading = false;
      clearTimeout(this.timeoutTimer);

      if (this.options.length > 0) {
        this.setOptionsValuesFromLabels();
        this.uniqueOptions = this.deduplicateOptions(this.options);
      } else {
        this.noOptions = [{ label: this.emptyOptionListText, value: "" }];
        this.uniqueOptions = this.noOptions;
      }

      this.filteredOptions = this.uniqueOptions;

      if (this.isExternalFiltering()) {
        // When searchable select
        this.noOptions = null;
        this.updateSearchableSelectResultAriaLive();
        this.setDefaultValue();
      } else if (this.initialOptionsEmpty) {
        this.setDefaultValue();
        this.initialOptionsEmpty = false;
      }
    } else if (!this.searchable) {
      this.options = this.noOptions || [];
    }
  };

  /**
   * Processes the provided array of IcMenuOptions, removing duplicates and reporting them with a console.warn
   * @param options array of IcMenuOptions
   * @returns a new options object, with all entries possessing a duplicate 'value' field removed
   */
  private deduplicateOptions = (options: IcMenuOption[]) => {
    const uniqueValues: string[] = [];
    const dedupedOptions: IcMenuOption[] = [];

    options.forEach((option) => {
      if (option.children) {
        //If an option has children, we will loop through them
        const dedupedChildren: IcMenuOption[] = [];
        option.children.forEach((child) => {
          if (uniqueValues.includes(child.value)) {
            console.warn(
              `ic-select with label ${this.label} was populated with duplicate option (value: ${child.value}) which has been removed.`
            );
          } else {
            uniqueValues.push(child.value);
            dedupedChildren.push(child);
          }
        });
        // construct a modified option, inserting the deduplicated children alongside the original information
        dedupedOptions.push({
          ...option,
          children: dedupedChildren,
        });
      } else {
        // If an option does not have children, assess to see if it's value has been included already
        if (uniqueValues.includes(option.value)) {
          console.warn(
            `ic-select with label ${this.label} was populated with duplicate option (value: ${option.value}) which has been removed.`
          );
        } else {
          uniqueValues.push(option.value);
          dedupedOptions.push(option);
        }
      }
    });
    return dedupedOptions;
  };

  /**
   * Loop through options array and for all options with no value, infer it from the label
   */
  private setOptionsValuesFromLabels = () => {
    if (this.options.length > 0) {
      this.options.map((option) => {
        if (!option.value) {
          option.value = option.label;
        }
      });
    }
  };

  private setUngroupedOptions = (event: CustomEvent) => {
    this.ungroupedOptions = event.detail.options;
  };

  private setTextColor = () => {
    if (this.nativeSelectElement) {
      this.nativeSelectElement.className =
        this.nativeSelectElement.selectedIndex === 0
          ? "placeholder"
          : "select-option-selected";
    }
  };

  private setMenuChange = (open: boolean) => {
    if (this.open !== open) {
      this.open = open;
    }
  };

  private getLabelFromValue = (value: string) =>
    getLabelFromValue(value, this.uniqueOptions);

  private getMultipleOptionsString = (selectedValues: string[]) =>
    selectedValues
      ?.map((value) => this.getLabelFromValue(value))
      .filter((label) => !!label)
      .join(", ");

  private getFilteredChildMenuOptions = (
    option: IcMenuOption
  ): IcMenuOption => ({
    ...option,
    children:
      option.children &&
      getFilteredMenuOptions(
        option.children,
        this.searchable && !!this.includeDescriptionsInSearch,
        this.searchable
          ? this.searchableSelectInputValue || ""
          : this.pressedCharacters,
        this.searchable ? this.searchMatchPosition : "start"
      ),
  });

  // (For multi-select) get value array, i.e. selected option values, in order they appear in option list
  private getValueSortedByOptions = (value: string[]) => {
    const valueArray = value;
    const valuesFromAllOptions = this.ungroupedOptions.map(
      (option) => option.value
    );

    valueArray.sort(
      (a, b) =>
        valuesFromAllOptions.indexOf(a) - valuesFromAllOptions.indexOf(b)
    );

    return valueArray;
  };

  private handleNativeSelectChange = () => {
    if (this.nativeSelectElement) {
      this.icOptionSelect.emit({ value: this.nativeSelectElement.value });
      this.emitIcChange(this.nativeSelectElement.value);
    }
    this.setTextColor();
  };

  // Handle option select for when a custom input box and menu is rendered
  // (rather than native <select> - rendered when viewed on a mobile / tablet screen)
  private handleCustomSelectChange = (
    event: CustomEvent<IcOptionSelectEventDetail>
  ) => {
    const { value, label, optionId } = event.detail;

    if (label === this.emptyOptionListText) {
      this.searchableSelectElement?.focus();
      return;
    }

    if (this.searchable) {
      this.value = value || null;
      this.searchableMenuItemSelected = true;

      // After editing the input, if selecting the same option as before, set the input value to label again
      if (this.value === this.currValue) {
        this.searchableSelectInputValue =
          this.getLabelFromValue(this.value as string) || null;
      }

      this.inputValueToFilter = null;
      this.hiddenInputValue =
        this.getValueFromLabel(this.searchableSelectInputValue) || null;
    }

    if (value) {
      if (this.multiple && this.value?.includes(value)) {
        this.icOptionDeselect.emit({ value });
      } else {
        this.icOptionSelect.emit({ value });
      }
    }

    this.ariaActiveDescendant = optionId;
    this.emitIcChange(value || null);
  };

  private handleSelectAllChange = ({
    detail,
  }: CustomEvent<{ select: boolean }>) => {
    const allValues = this.ungroupedOptions
      .filter((option) => !option.disabled)
      .map((option) => option.value);

    if (detail.select) {
      // Only emit icOptionSelect for all values that are newly selected
      const unselectedValues = this.value
        ? allValues.filter(
            (value) => this.value && !(this.value as string[]).includes(value)
          )
        : allValues;

      unselectedValues.forEach((value) => this.icOptionSelect.emit({ value }));
    } else {
      // Only emit icOptionDeselect for values that were selected
      (this.value as string[]).forEach((value) =>
        this.icOptionDeselect.emit({ value })
      );
    }

    this.emitIcChange(detail.select ? allValues : null);
  };

  private handleMenuChange = (event: CustomEvent<IcMenuChangeEventDetail>) => {
    this.open = event.detail.open;
    this.pressedCharacters = "";

    if (this.searchable) this.handleFocusIndicatorDisplay();
  };

  // clears the debounce delay when navigating the menu with arrow keys etc
  // to prevent delay in change event, which should only occur when typing in input
  private handleMenuKeyPress = (ev: CustomEvent): void => {
    ev.cancelBubble = true;
    if (!this.multiple) {
      this.handleCharacterKeyDown(ev.detail.key);
    }
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

  private handleMouseDown = (event: Event) => {
    if (!this.open) {
      event.preventDefault();
    }
  };

  private isExternalFiltering = () =>
    this.searchable && !!this.disableAutoFiltering;

  private handleClick = (event: MouseEvent) => {
    if (!this.open && this.menu) {
      if (this.isExternalFiltering()) {
        this.menu.options = this.filteredOptions;
      } else if (
        !this.hasTimedOut &&
        !this.loading &&
        !this.noOptions?.length &&
        (!this.searchable || this.searchableMenuItemSelected)
      ) {
        this.noOptions = null;
        this.menu.options = this.uniqueOptions;
      }
    }

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

  private handleClear = (event: Event) => {
    event.stopPropagation();
    this.hasTimedOut = false;
    clearTimeout(this.timeoutTimer);
    this.clearInput();
    this.emitIcChange(null);
    this.icClear.emit();

    if (this.searchable) {
      this.hiddenInputValue = null;
      this.searchableSelectElement?.focus();
    } else {
      this.customSelectElement?.focus();
    }
  };

  private handleCharacterKeyDown = (key: string) => {
    // Only close menu when space is pressed if not being used alongside character keys to quickly select options
    if (this.open && key === " " && this.pressedCharacters.length === 0) {
      this.setMenuChange(false);
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
      this.handleFilter();

      if (!this.noOptions) {
        this.emitIcChange(this.filteredOptions[0].value);
      }
    }
  };

  private handleNativeSelectKeyDown = (event: KeyboardEvent) => {
    if ((event.key !== "Escape" && event.key !== "Tab") || this.open) {
      event.cancelBubble = true;
    }
    this.handleCharacterKeyDown(event.key);
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if ((event.key !== "Escape" && event.key !== "Tab") || this.open) {
      event.cancelBubble = true;
    }
    const isArrowKey = event.key === "ArrowDown" || event.key === "ArrowUp";

    if (this.menu && !this.open) {
      if (this.isExternalFiltering() && (event.key === "Enter" || isArrowKey)) {
        this.menu.options = this.filteredOptions;
      } else if (!this.hasTimedOut) {
        this.noOptions = null;
        this.menu.options = this.uniqueOptions;
      }
    }

    if (this.open && event.key === "Enter") {
      this.setMenuChange(false);
    } else {
      if (!isArrowKey || this.noOptions === null) {
        if (event.key !== " " || this.pressedCharacters.length <= 0) {
          // Keyboard events get passed onto ic-menu
          this.menu?.handleKeyboardOpen(event);
        }
        if (!this.multiple) {
          this.handleCharacterKeyDown(event.key);
        }
      }
    }
  };

  private handleClearButtonFocus = () => {
    this.clearButtonFocused = true;
  };

  private handleClearButtonBlur = (ev: FocusEvent) => {
    const retryButton = this.menu?.querySelector("#retry-button");
    if (
      (!this.searchableSelectElement ||
        ev.relatedTarget !== this.searchableSelectElement) &&
      (!retryButton || ev.relatedTarget !== retryButton)
    ) {
      this.setMenuChange(false);
      this.handleFocusIndicatorDisplay();
    }
    this.clearButtonFocused = false;
  };

  private handleFilter = () => {
    const options = this.deduplicateOptions(
      this.searchable ? [...this.uniqueOptions] : this.ungroupedOptions
    );

    const isGrouped = options.some((option) => !!option.children);
    let newFilteredOptions: IcMenuOption[] = [];

    let menuOptionsFiltered: IcMenuOption[];

    if (this.searchable) {
      menuOptionsFiltered = getFilteredMenuOptions(
        options,
        !!this.includeDescriptionsInSearch,
        this.inputValueToFilter || "",
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

    if (
      !isGrouped &&
      menuOptionsFiltered[0]?.label !== this.emptyOptionListText
    ) {
      newFilteredOptions = menuOptionsFiltered;
    } else if (isGrouped) {
      newFilteredOptions = options.map((option) =>
        this.includeGroupTitlesInSearch &&
        menuOptionsFiltered.indexOf(option) !== -1
          ? option
          : this.getFilteredChildMenuOptions(option)
      );
    }

    if (
      newFilteredOptions.length > 0 &&
      (!isGrouped ||
        newFilteredOptions.some(
          ({ children }) => children && children.length > 0
        ))
    ) {
      this.noOptions = null;
      this.filteredOptions = newFilteredOptions;
    } else {
      this.noOptions = [{ label: this.emptyOptionListText, value: "" }];
      this.filteredOptions = this.noOptions;
    }
  };

  /**
   * Put the select component into loading state.
   * Replace options with the loading message. If timeout is enabled, set the timeout and once passed, replace options with the loading error message
   */
  private triggerLoading = () => {
    this.hasTimedOut = false;
    this.noOptions = [{ label: this.loadingLabel, value: "", loading: true }];
    if (this.filteredOptions !== this.noOptions && this.searchable) {
      this.filteredOptions = this.noOptions;
    } else if (this.uniqueOptions !== this.noOptions && !this.searchable) {
      this.uniqueOptions = this.noOptions;
    }
    if (this.timeout) {
      this.timeoutTimer = window.setTimeout(() => {
        this.loading = false;
        this.hasTimedOut = true;
        this.noOptions = [
          { label: this.loadingErrorLabel, value: "", timedOut: true },
        ];
        this.filteredOptions = this.noOptions;
        if (!this.searchable) this.uniqueOptions = this.noOptions;
      }, this.timeout);
    }
  };

  private getValueFromLabel = (label: string | null): string | undefined =>
    label && this.uniqueOptions.find((option) => option.label === label)?.value;

  private handleSearchableSelectInput = (event: Event) => {
    this.searchableSelectInputValue = (event.target as HTMLInputElement).value;
    this.emitIcInput(this.searchableSelectInputValue);

    // De-select previous selection when input is edited
    // Only emit icChange once when editing input
    if (this.value != null) {
      this.emitIcChange(null);
    }

    this.hiddenInputValue = null;
    this.inputValueToFilter = this.searchableSelectInputValue;
    this.setMenuChange(true);

    if (!this.disableAutoFiltering) {
      this.handleFilter();
      clearTimeout(this.debounceAria);

      window.setTimeout(() => {
        this.updateSearchableSelectResultAriaLive();
      }, 800);
    }
  };

  private updateSearchableSelectResultAriaLive = () => {
    const searchableSelectResultsStatusEl =
      this.el.shadowRoot?.querySelector<HTMLDivElement>(
        ".searchable-select-results-status"
      );

    if (searchableSelectResultsStatusEl) {
      searchableSelectResultsStatusEl.innerText =
        this.noOptions !== null ? this.emptyOptionListText : "";
    }
  };

  private updateMultiSelectedCountAriaLive = () => {
    const multiSelectSelectedCountEl =
      this.el.shadowRoot?.querySelector<HTMLDivElement>(
        ".multi-select-selected-count"
      );

    const selectedCount = `${
      this.currValue?.length
    } of ${getOptionsWithoutGroupTitlesCount(this.options)} selected`;

    if (
      multiSelectSelectedCountEl &&
      multiSelectSelectedCountEl.innerText !== selectedCount
    ) {
      multiSelectSelectedCountEl.innerText = selectedCount;
    }
  };

  private getDefaultValue = (value: string) =>
    this.getLabelFromValue(value) || null;

  private setDefaultValue = () => {
    if (!this.hasSetDefaultValue && this.currValue) {
      this.searchableSelectInputValue = this.searchable
        ? this.getDefaultValue(this.currValue as string)
        : null;

      this.initialValue = this.currValue;
      this.hasSetDefaultValue = true;
    }
  };

  private onFocus = () => {
    this.icFocus.emit();
  };

  private onBlur = ({ relatedTarget }: FocusEvent) => {
    const target = relatedTarget as HTMLElement;
    if (
      target !== null &&
      ((target.tagName === "UL" && target.className.includes("menu")) ||
        (target.tagName === "LI" && target.className.includes("option")))
    ) {
      return;
    }

    const retryButton = this.menu?.querySelector("#retry-button");

    if (
      this.searchable &&
      !!this.menu &&
      target !== this.menu &&
      !Array.from(this.menu.querySelectorAll("[role='option']")).includes(
        target
      ) &&
      (!this.clearButton || target !== this.clearButton) &&
      (!retryButton || target !== retryButton)
    ) {
      if (!this.retryButtonClick) {
        this.setMenuChange(false);
        // Clear input field on blur when searchable if no option is selected
        if (!this.value) {
          this.clearInput();
        }
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

  private handleFormReset = () => {
    this.value = this.initialValue;
    if (this.searchable) {
      this.searchableSelectInputValue = this.getDefaultValue(
        this.value as string
      );
      this.hiddenInputValue = this.value as string;
    }
  };

  private clearInput = () => {
    this.noOptions = null;

    if (this.searchable) {
      this.searchableSelectElement?.setAttribute("value", "");
      this.searchableSelectInputValue = null;
      this.filteredOptions = this.uniqueOptions;
    }
  };

  private renderNativeOption = (option: IcMenuOption) => (
    <option
      value={option.value}
      disabled={option.disabled}
      selected={option.value === this.currValue}
    >
      {option.label}
    </option>
  );

  render() {
    const {
      size,
      disabled,
      fullWidth,
      helperText,
      hideLabel,
      label,
      menuId,
      multiple,
      name,
      options,
      placeholder,
      readonly,
      required,
      searchable,
      showClearButton,
      validationAriaLive,
      validationStatus,
      validationText,
      currValue,
      theme,
      hiddenInputValue,
      open,
      inputId,
      searchableSelectInputValue,
      loading,
      value,
      emptyOptionListText,
      uniqueOptions,
      selectOnEnter,
      form,
      inheritedAttributes,
      ariaActiveDescendant,
      hasTimedOut,
      noOptions,
      filteredOptions,
      clearButtonFocused,
    } = this;

    // HTML inputs only accept 'string' for their value
    // Does not cause errors when it is a multi-select - sets value correctly, to a comma-separated string
    renderHiddenInput(
      this.el,
      searchable ? hiddenInputValue : (currValue as string),
      name || inputId,
      disabled
    );

    const invalid = `${validationStatus === IcInformationStatus.Error}`;

    const showValidation = hasValidationStatus(validationStatus, !!disabled);

    const describedBy = getInputDescribedByText(
      this.el,
      inputId,
      helperText !== "",
      showValidation
    ).trim();

    const valueLabelString = multiple
      ? this.getMultipleOptionsString(currValue as string[])
      : this.getLabelFromValue(currValue as string);

    const isClearable =
      !disabled &&
      (searchable
        ? !!searchableSelectInputValue
        : !!currValue && !loading && showClearButton);

    return (
      <Host
        class={{
          "ic-select-disabled": disabled,
          "ic-select-searchable": searchable,
          [`ic-select-${size}`]: size !== "medium",
          "ic-select-full-width": fullWidth,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        onBlur={this.onBlur}
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
            {readonly ? (
              <ic-typography>
                <p>{valueLabelString}</p>
              </ic-typography>
            ) : isMobileOrTablet() && !multiple ? (
              <select
                ref={(el) => (this.nativeSelectElement = el)}
                disabled={disabled}
                onChange={this.handleNativeSelectChange}
                required={required}
                id={inputId}
                aria-label={label}
                aria-describedby={describedBy}
                aria-invalid={invalid}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                onKeyDown={this.handleNativeSelectKeyDown}
                form={form}
                {...inheritedAttributes}
              >
                <option value="" selected disabled={!showClearButton}>
                  {placeholder}
                </option>
                {options.map((option) =>
                  option.children ? (
                    <optgroup label={option.label}>
                      {option.children.map((child) =>
                        this.renderNativeOption(child)
                      )}
                    </optgroup>
                  ) : (
                    this.renderNativeOption(option)
                  )
                )}
              </select>
            ) : searchable ? (
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
                  aria-invalid={invalid}
                  aria-required={`${required}`}
                  aria-controls={menuId}
                  ref={(el) => (this.searchableSelectElement = el)}
                  id={inputId}
                  value={searchableSelectInputValue || undefined}
                  placeholder={placeholder}
                  disabled={disabled}
                  onInput={this.handleSearchableSelectInput}
                  onClick={this.handleClick}
                  onKeyDown={this.handleKeyDown}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  form={form}
                ></input>
                {isClearable && (
                  <div class="clear-button-container">
                    <ic-button
                      id="clear-button"
                      ref={(el) => (this.clearButton = el)}
                      aria-label={
                        searchableSelectInputValue &&
                        (currValue === null || loading)
                          ? "Clear input"
                          : "Clear selection"
                      }
                      class="clear-button"
                      innerHTML={Clear}
                      onClick={this.handleClear}
                      onFocus={this.handleClearButtonFocus}
                      onBlur={this.handleClearButtonBlur}
                      size={size}
                      variant="icon-tertiary"
                      theme={clearButtonFocused ? "light" : "dark"}
                    ></ic-button>
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
                <div
                  aria-live="polite"
                  role="status"
                  class="searchable-select-results-status"
                ></div>
              </div>
            ) : (
              <div class="select-container">
                <button
                  role="combobox"
                  class="select-input"
                  ref={(el) => (this.customSelectElement = el)}
                  id={inputId}
                  aria-label={`${label}, ${
                    (multiple && currValue
                      ? `${
                          currValue.length
                        } of ${getOptionsWithoutGroupTitlesCount(
                          options
                        )} selected, ${valueLabelString}`
                      : valueLabelString) || placeholder
                  }`}
                  aria-describedby={describedBy}
                  aria-invalid={invalid}
                  aria-haspopup="listbox"
                  aria-expanded={`${open}`}
                  aria-owns={menuId}
                  aria-controls={menuId}
                  aria-required={`${required}`}
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
                      "with-clear-button": isClearable,
                      placeholder:
                        !loading && multiple
                          ? !value || value.length < 1
                          : !this.getLabelFromValue(currValue as string),
                    }}
                  >
                    {valueLabelString || placeholder}
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
                {isClearable && (
                  <ic-button
                    id="clear-button"
                    aria-label="Clear selection"
                    class="clear-button"
                    innerHTML={Clear}
                    onClick={this.handleClear}
                    onFocus={this.handleClearButtonFocus}
                    onBlur={this.handleClearButtonBlur}
                    size={size}
                    variant="icon-tertiary"
                    theme={clearButtonFocused ? "light" : "dark"}
                  ></ic-button>
                )}
              </div>
            )}
          </ic-input-component-container>
          {(!isMobileOrTablet() || multiple) && (
            <ic-menu
              class={{
                "no-results":
                  loading ||
                  hasTimedOut ||
                  noOptions?.[0]?.label === emptyOptionListText,
              }}
              ref={(el) => (this.menu = el)}
              inputEl={
                searchable
                  ? this.searchableSelectElement
                  : this.customSelectElement
              }
              inputLabel={label}
              anchorEl={this.anchorEl}
              size={size}
              menuId={menuId}
              open={open}
              options={searchable ? filteredOptions : uniqueOptions}
              value={multiple ? (currValue as string[]) : (currValue as string)}
              fullWidth={fullWidth}
              selectOnEnter={selectOnEnter}
              onMenuStateChange={this.handleMenuChange}
              onMenuOptionSelect={this.handleCustomSelectChange}
              onMenuOptionSelectAll={this.handleSelectAllChange}
              onMenuKeyPress={this.handleMenuKeyPress}
              onUngroupedOptionsSet={this.setUngroupedOptions}
              onRetryButtonClicked={this.handleRetry}
              parentEl={this.el}
              onTimeoutBlur={this.onTimeoutBlur}
              activationType={
                searchable || multiple || selectOnEnter ? "manual" : "automatic"
              }
              closeOnSelect={!multiple}
              multiSelect={multiple ? true : false}
              searchableSelect={searchable ? true : false}
            ></ic-menu>
          )}
          {multiple && (
            <div
              aria-live="polite"
              role="status"
              class="multi-select-selected-count"
            ></div>
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
