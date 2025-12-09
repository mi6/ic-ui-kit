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
  Method,
  forceUpdate,
} from "@stencil/core";
import {
  addFormResetListener,
  checkSlotInChildMutations,
  getInputDescribedByText,
  isMacDevice,
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
  IcMenuOption,
  IcMultiValueEventDetail,
  IcSizes,
  IcThemeMode,
  IcInformationStatus,
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
  tag: "ic-select-new",
  styleUrl: "ic-select-new.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class SelectNew {
  private inputId = `ic-select-input-${inputIds++}`;
  private menu?: HTMLIcMenuElement;
  private menuId = `${this.inputId}-menu`;
  private inheritedAttributes: { [k: string]: string } = {};
  private anchorEl?: HTMLElement;
  private nativeSelectElement?: HTMLSelectElement;
  private hostMutationObserver: MutationObserver | null = null;
  private clearButton?: HTMLIcButtonElement;
  private searchableSelectElement?: HTMLInputElement;
  private timeoutTimer?: any;
  private hasTimedOut: boolean = false;
  private selectElement?: HTMLButtonElement;
  private noOptions: boolean = false;

  @Element() el!: HTMLIcSelectElement;

  @State() ariaActiveDescendant?: string;
  @State() clearButtonFocused = false;
  @State() debounceIcInput?: number;
  @State() hiddenInputValue: string | null;
  @State() open = false;
  @State() pressedCharacters = "";
  @State() searchableSelectInputValue: string = "";
  @State() hasError: boolean = false;

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

    this.hasTimedOut = false;

    if (newValue) {
      this.hasError = false;
      if (this.timeout) {
        this.timeoutTimer = window.setTimeout(() => {
          this.loading = false;
          this.hasTimedOut = true;
        }, this.timeout)
      }
    } else {
      this.loading = false;
    }
  }

  private clearTimer() {
    this.loading = false;
    if (this.timeoutTimer) {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
  }

  /**
   * The possible selection options.
   */
  @Prop() options: IcMenuOption[] = [];
  @State() flatOptions: IcMenuOption[] = [];
  @Watch("options")
  optionsHandler(newValue: IcMenuOption[]): void {
    this.clearTimer();

    this.flatOptions = this.getFlatOptions(newValue);
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
  valueChangedHandler(): void {
    this.icChange.emit({ value: this.value });
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

  componentDidRender(): void { 
    if (this.nativeSelectElement && !this.disabled) {
      this.setTextColor();
    }
  }

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
    this.hostMutationObserver?.disconnect();
    this.clearTimer();
  }

  componentDidLoad(): void {
    this.flatOptions = this.getFlatOptions(this.getDeduplicatedOptions());

    this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
    this.hostMutationObserver.observe(this.el, {
      attributes: true,
      childList: true,
    });

    // TODO simplify this
    if (this.multiple && this.value && !Array.isArray(this.value)) {
      this.value = [this.value];
    }

    if (this.value) {
      if (this.multiple) {
        this.value = (this.value as string[]).filter((value) =>
          this.options.map((option) => option.value).includes(value)
        );
        if (this.value.length == 0) this.value = null;
      } else {
        if (!this.options.map((option) => option.value).includes(this.value)) {
          this.value = null;
        }
      }
    }
  }

  componentWillLoad() {
    this.flatOptions = this.getFlatOptions(this.options);
    this.initialValue = this.value;

    if (this.loading) this.loadingHandler(true);

    addFormResetListener(this.el, this.handleFormReset);
  }

  private getFilteredOptions = (searchString: string): IcMenuOption[] =>
    this.unflattenOptions(
      this.flatOptions.filter((option) => {
        const label = option.label.toLowerCase();
        const group = option.group ? option.group.toLowerCase() : "";
        const description = option.description
          ? option.description.toLowerCase()
          : "";
        const searchStringLower = searchString.toLowerCase();

        if (this.searchMatchPosition === "anywhere") {
          return (
            label.includes(searchStringLower) ||
            (this.includeDescriptionsInSearch &&
              description.includes(searchStringLower)) ||
            (this.includeGroupTitlesInSearch &&
              group.includes(searchStringLower))
          );
        } else {
          return (
            label.startsWith(searchStringLower) ||
            (this.includeDescriptionsInSearch &&
              description.startsWith(searchStringLower)) ||
            (this.includeGroupTitlesInSearch &&
              group.startsWith(searchStringLower))
          );
        }
      })
    );

  private getOptions = (): IcMenuOption[] => {
    let options = this.searchable
      ? this.getFilteredOptions(this.searchableSelectInputValue)
      : this.options

    this.noOptions = true;

    if (this.hasTimedOut) return [{ label: this.loadingErrorLabel, value: "", timedOut: true }];

    if (options.length > 0) {
      this.loading = false;
      this.noOptions = false;
      return options
    };

    if (this.loading) return [{ label: this.loadingLabel, value: "", loading: true }];

    return [{ label: this.emptyOptionListText, value: "" }];
  }

  private getFlatOptions = (options: IcMenuOption[]): IcMenuOption[] =>
    options.flatMap((item) =>
      item.children
        ? [...item.children.map((child) => ({ group: item.label, ...child }))]
        : [item]
    );

  private unflattenOptions = (flatOptions: IcMenuOption[]): IcMenuOption[] => {
    return flatOptions.reduce((out, option) => {
      if (option.group) {
        const { group, ...cleanOption } = option;
        let newGroup = out.find(
          (opt: IcMenuOption) => opt.label === option.group && opt.children
        );
        if (newGroup) {
          newGroup.children.push(cleanOption);
        } else {
          out.push({ label: option.group, children: [cleanOption] });
        }
      } else {
        out.push(option);
      }
      return out;
    }, []) as IcMenuOption[];
  };

  private getLabelFromValue = (value: string | null): string =>
    this.flatOptions.filter((option) => option.value === value).at(0)?.label ??
    "";

  private getLabelString = (): string =>
    Array.isArray(this.value)
      ? this.value.map(this.getLabelFromValue).join(", ")
      : this.getLabelFromValue(this.value) ||
      (this.searchable ? "" : this.placeholder);

  private getValueSortedByOptions = (value: string[]) => {
    const valueArray = value;
    const valuesFromAllOptions = this.flatOptions.map((option) => option.value);
    valueArray.sort(
      (a, b) =>
        valuesFromAllOptions.indexOf(a) - valuesFromAllOptions.indexOf(b)
    );
    return valueArray;
  };

  private handleClick = (event: MouseEvent) => {
    if (event.detail !== 0) {
      this.menu?.handleClickOpen();
    }
  };

  private handleBlur = ({ relatedTarget }: FocusEvent) => {
    const target = relatedTarget as HTMLElement;

    if (this.el.contains(target) || this.menu?.contains(target) || (this.clearButton !== null && target === this.clearButton)) return;
    if (this.open) this.el.focus();

    if (this.searchable && !this.value) {
      this.searchableSelectInputValue = "";
    }

    this.open = false;
    this.icBlur.emit();
  };

  private handleFocus = () => {
    this.icFocus.emit();
  };

  private handleClear = (event: Event) => {
    event.stopPropagation();
    this.clearTimer()
    this.loading = false;
    this.value = null;
    this.searchableSelectInputValue = "";

    this.icClear.emit();

    this.searchable
      ? this.searchableSelectElement?.focus()
      : this.selectElement?.focus();
  };

  private handleMouseDown = (event: Event) => {
    if (!this.open) {
      event.preventDefault();
    }
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

  // TODO
  private handleNativeSelectKeyDown = (event: KeyboardEvent) => {
    if ((event.key !== "Escape" && event.key !== "Tab") || this.open) {
      event.cancelBubble = true;
    }
    //this.handleCharacterKeyDown(event.key);
  };

  // TODO
  private handleKeyDown = (event: KeyboardEvent) => {
    if (!["Escape", "Tab"].includes(event.key) || this.open) {
      event.stopPropagation();
    }

    const isCtrlA = event.key === "a" &&
      ((isMacDevice() && event.metaKey) ||
        (!isMacDevice() && event.ctrlKey));

    if (this.open && event.key == "Enter") {
      this.open = false;
    } else {
      if (!(isCtrlA && !this.multiple)) this.menu?.handleKeyboardOpen(event);

      if (event.key == " ") this.open = false;
    }
  };

  private handleMenuKeyPress = (ev: CustomEvent) => {
    ev?.stopPropagation();

    if (ev.detail.key === " ") this.open = false;
  }

  // TODO simplify
  private handleSelectChange = (
    event: CustomEvent<IcOptionSelectEventDetail>
  ) => {
    const { value } = event.detail;

    if (this.getLabelFromValue(value ?? "") == this.emptyOptionListText) {
      this.value = null;
      return;
    }
    if (value) {
      if (this.multiple ) {
        if (this.value) {
          let valueArray = (this.value as string[]).slice();
          if (valueArray.includes(value)) {
            valueArray.splice(valueArray.indexOf(value), 1);
            this.icOptionDeselect.emit({ value });
          } else {
            valueArray.push(value);
            valueArray = this.getValueSortedByOptions(valueArray);
            this.icOptionSelect.emit({ value });
          }
          this.value = valueArray.length === 0 ? null : valueArray;
        } else {
          this.value = [value];
          this.icOptionSelect.emit({ value });
        }
      } else {
        this.value = value ?? null;
        this.icOptionSelect.emit({ value });
      }
    }

    this.menu?.focus();
  };

  private handleSelectAllChange = ({
    detail,
  }: CustomEvent<{ select: boolean }>) => {
    const allValues = this.flatOptions.map((option) => option.value);
    if (detail.select) {
      this.flatOptions
        .map((option) => option.value)
        .filter((value) => !((this.value ?? []) as string[]).includes(value))
        .forEach((value) => {
          this.icOptionSelect.emit({ value });
        });

      this.value = allValues;
    } else {
      (this.value as string[]).forEach((value) =>
        this.icOptionDeselect.emit({ value })
      );
      this.value = null;
    }
  };

  private handleFormReset = () => {
    this.value = this.initialValue;
    if (this.searchable) {
      this.hiddenInputValue = this.initialValue as string;
    }
  }

  private handleRetry = (ev: CustomEvent<IcMultiValueEventDetail>) => {
    this.hasTimedOut = false;
    this.noOptions = false;
    if (ev.detail.keyPressed) this.searchableSelectElement?.focus();
    this.icRetryLoad.emit({
      value: this.searchable
        ? this.searchableSelectInputValue
        : this.hiddenInputValue,
    });
  };

  private handleSearchableSelectInput = (event: Event) => {
    this.value = null;
    this.searchableSelectInputValue =
      (event.target as HTMLInputElement).value ?? "";
    this.open = true;

    clearTimeout(this.debounceIcInput);
    this.debounceIcInput = window.setTimeout(
      () => this.icInput.emit({ value: this.searchableSelectInputValue }),
      this.currDebounce
    );
  };

  // TODO simplify
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

  private handleMenuChange = (event: CustomEvent<IcMenuChangeEventDetail>) => {
    this.open = event.detail.open;
    this.pressedCharacters = "";
  };

  private getDeduplicatedOptions = (): IcMenuOption[] => {
    const seen = new Set();
    return this.unflattenOptions(
      this.flatOptions.reduce((deduplicated, option) => {
        if (option.value && seen.has(option.value)) {
          console.warn(
            `ic-select with label ${this.label} was populated with duplicate option (value: ${option.value}) which has been removed.`
          );
          return deduplicated;
        }
        const copy = { ...option };
        if (copy.value) seen.add(copy.value);
        deduplicated.push(copy);
        return deduplicated;
      }, []) as IcMenuOption[]
    );
  };

  private renderNativeOption = (option: IcMenuOption) => (
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
      inheritedAttributes
    } = this;

    const isClearable =
      !disabled &&
      (searchable
        ? searchableSelectInputValue || value
        : value && !loading && showClearButton);

    const showValidation = !!(validationStatus && !disabled);

    const invalid = `${validationStatus === IcInformationStatus.Error}`;

    const describedBy = getInputDescribedByText(
      this.el,
      inputId,
      helperText !== "",
      showValidation
    ).trim();

    renderHiddenInput(this.el, value as string, name || inputId, disabled);

    const NativeSelect = () => (
      <select
        ref={(el) => (this.nativeSelectElement = el)}
        disabled={disabled}
        onChange={this.handleNativeSelectChange}
        required={required}
        id={inputId}
        aria-label={label}
        aria-describedby={describedBy}
        aria-invalid={invalid}
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
    )

    const SelectButton = () => (
      <div class="select-container">
        <button
          role="combobox"
          class="select-input"
          ref={(el) => (this.selectElement = el)}
          id={inputId}
          aria-label={`${label}, ${(multiple && value
            ? `${value.length} of ${this.flatOptions.length
            } selected, ${this.getLabelString()}`
            : this.getLabelString()) || placeholder
            }`}
          onClick={this.handleClick}
          onMouseDown={this.handleMouseDown}
          aria-describedby={describedBy}
          aria-invalid={invalid}
          aria-haspopup="listbox"
          aria-expanded={`${open}`}
          aria-owns={menuId}
          aria-controls={menuId}
          aria-required={`${required}`}
          disabled={disabled}
          onKeyDown={this.handleKeyDown}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
          <ic-typography
            variant="body"
            class={{
              "value-text": true,
              placeholder: !this.value,
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
        {isClearable && (
          <ic-button
            ref={(el) => (this.clearButton = el)}
            id="clear-button"
            aria-label="Clear selection"
            class="clear-button"
            innerHTML={Clear}
            onClick={this.handleClear}
            size={size}
            variant="icon-tertiary"
          ></ic-button>
        )}
      </div>
    );

    const SelectInput = () => (
      <div class="searchable-select-container">
        <input
          class={{
            "value-text": true,
            "select-input": true,
            "with-clear-button": showClearButton,
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
          value={
            this.value ? this.getLabelString() : this.searchableSelectInputValue
          }
          placeholder={this.placeholder}
          onInput={this.handleSearchableSelectInput}
          onClick={this.handleClick}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
          form={form}
        ></input>
        {isClearable && (
          <div class="clear-button-container">
            <ic-button
              ref={(el) => (this.clearButton = el)}
              id="clear-button"
              aria-label="Clear selection"
              class="clear-button"
              innerHTML={Clear}
              onClick={this.handleClear}
              size={size}
              variant="icon-tertiary"
            ></ic-button>
            <div class="divider"></div>
          </div>
        )}
        <span
          class={{
            "expand-icon": true,
            "expand-icon-open": open,
          }}
          innerHTML={Expand}
          aria-hidden="true"
        />
      </div>
    );

    const ReadOnly = () => (
      <ic-typography>
        <p>{this.getLabelString()}</p>
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

      >{false &&
        <div>
          <pre>{JSON.stringify(this.searchableSelectInputValue,null,2)}</pre>
          <pre>timed out: {JSON.stringify(this.hasTimedOut)}</pre>
          <pre>loading: {JSON.stringify(this.loading)}</pre>
          <pre>{JSON.stringify(this.options)}</pre>
        </div>}
        <ic-input-container
          readonly={readonly}
        >
          
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
            {isMobileOrTablet() && !multiple ? <NativeSelect/> :readonly ? (
              <ReadOnly />
            ) : !searchable ? (
              <SelectButton />
            ) : (
              <SelectInput />
            )}
          </ic-input-component-container>
          {!(isMobileOrTablet() && !multiple) && <ic-menu
            ref={(el) => (this.menu = el)}
            class={{ "no-results": this.noOptions }}
            inputEl={
              searchable ? this.searchableSelectElement : this.selectElement
            }
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
            onMenuKeyPress={this.handleMenuKeyPress}
            parentEl={this.el}
            activationType={
              searchable || multiple || selectOnEnter ? "manual" : "automatic"
            }
            onRetryButtonClicked={this.handleRetry}
            closeOnSelect={!multiple}
            multiSelect={multiple}
            searchableSelect={searchable}
          ></ic-menu>}
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
