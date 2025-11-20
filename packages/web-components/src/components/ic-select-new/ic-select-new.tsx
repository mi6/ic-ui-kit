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
  checkSlotInChildMutations,
  getFilteredMenuOptions,
  isSlotUsed,
  removeDisabledFalse,
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

  private hostMutationObserver: MutationObserver | null = null;
  private clearButton?: HTMLIcButtonElement;
  private searchableSelectElement?: HTMLInputElement;

  private selectElement?: HTMLButtonElement;

  @Element() el!: HTMLIcSelectElement;

  @State() ariaActiveDescendant?: string;
  @State() clearButtonFocused = false;
  @State() debounceIcInput?: number;
  @State() hiddenInputValue: string | null;
  @State() noOptions: IcMenuOption[] | null = null;
  @State() open = false;
  @State() pressedCharacters = "";
  @State() searchableSelectInputValue: string = "";

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
  loadingHandler(): void { }

  /**
   * The possible selection options.
   */
  @Prop() options: IcMenuOption[] = [];
  @State() flatOptions: IcMenuOption[] = [];
  @Watch("options")
  watchOptionsHandler(newValue: IcMenuOption[]): void {
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
  @Watch("value")
  valueChangedHandler(): void { }

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

  @Method()
  async setFocus(): Promise<void> { }

  componentDidRender(): void {
    // console.log(this.menu);
  }

  componentDidLoad(): void {
    this.options = this.getDeduplicatedOptions();
    this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
    this.hostMutationObserver.observe(this.el, {
      attributes: true,
      childList: true,
    });
  }

  componentWillLoad() {
    this.flatOptions = this.getFlatOptions(this.options);
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
      : this.searchable
        ? this.getLabelFromValue(this.value ?? "")
        : this.getLabelFromValue(this.value ?? "") || this.placeholder;

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
    console.log("click handled");
    if (event.detail !== 0) {
      this.menu?.handleClickOpen();
    }
  };

  private handleBlur = ({ relatedTarget }: FocusEvent) => {
    const target = relatedTarget as HTMLElement;
    if (this.el.contains(target) || this.menu?.contains(target)) return;
    if (this.open) this.el.focus();

    if (this.searchable && this.value == null) {
      this.searchableSelectInputValue = "";
    }

    this.open = false;
  };

  private handleClear = () => {
    this.value = null;
    this.searchableSelectInputValue = "";
  };

  private handleMouseDown = (event: Event) => {
    if (!this.open) {
      event.preventDefault();
    }
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (!["Escape","Tab"].includes(event.key) || this.open) {
      event.stopPropagation();
    } else {
      return;
    }
    
    
  }

  private handleSelectChange = (
    event: CustomEvent<IcOptionSelectEventDetail>
  ) => {
    const { value } = event.detail;
    console.log(value);

    this.menu?.focus();

    if (this.multiple && value) {
      if (this.value) {
        let valueArray = (this.value as string[]).slice();
        if (valueArray.includes(value)) {
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
      this.value = value ?? null;
    }
  };

  private handleSearchableSelectInput = (event: Event) => {
    this.value = null;
    this.searchableSelectInputValue =
      (event.target as HTMLInputElement).value ?? "";
    this.open = true;
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
      placeholder
    } = this;

    const isClearable =
      !disabled &&
      (searchable
        ? searchableSelectInputValue || value
        : value && !loading && showClearButton);

    const showValidation =
      validationStatus && !disabled;

    const SelectButton = () => (
      <div class="select-container">
        <button
          role="combobox"
          class="select-input"
          ref={(el) => (this.selectElement = el)}
          id={inputId}

          aria-label={`${label}, ${
            (multiple && value
              ? `${
                  value.length
                } of ${this.flatOptions.length} selected, ${this.getLabelString()}`
              : this.getLabelString()) || placeholder
          }`}

          onClick={this.handleClick}
          onMouseDown={this.handleMouseDown}
          //aria-describedby={describedBy} TODO
          //aria-invalid={invalid} TODO
          aria-haspopup="listbox"
          aria-expanded={`${open}`}
          aria-owns={menuId}
          aria-controls={menuId}
          aria-required={`${required}`}
          disabled={disabled}
          onKeyDown={this.handleKeyDown}
        >
          <ic-typography
            variant="body"
            class={{
              "value-text": true,
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
          //aria-describedby={describedBy} TODO
          aria-activedescendant={ariaActiveDescendant}
          aria-autocomplete="list"
          aria-expanded={`${open}`}
          //aria-invalid={invalid} TODO
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

          form={form}      
        ></input>
        {isClearable && (
          <div class="clear-button-container">
            <ic-button
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
    )
    // <pre>{JSON.stringify(value)}</pre>
    // <pre>{JSON.stringify(this.searchableSelectInputValue)}</pre>
    // <pre>{JSON.stringify(loading)}</pre>

    return (
      <Host
        class={{
          "ic-select-disabled": disabled,
          "ic-select-searchable": searchable,
          [`ic-select-${size}`]: size !== "medium",
          "ic-select-full-width": fullWidth,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        onBlur={this.handleBlur}
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
            {readonly ? <ReadOnly/> : !searchable ? <SelectButton /> : <SelectInput />}
          </ic-input-component-container>
          <ic-menu
            ref={(el) => (this.menu = el)}
            class={{ "no-results": false }}
            inputEl={
              searchable ? this.searchableSelectElement : this.selectElement
            }
            inputLabel={label}
            anchorEl={this.anchorEl}
            size={size}
            menuId={menuId}
            open={open}
            options={
              searchable ? this.getFilteredOptions(this.searchableSelectInputValue) : options
            }
            value={value ?? ""}
            fullWidth={fullWidth}
            selectOnEnter={selectOnEnter}
            onMenuStateChange={this.handleMenuChange}
            onMenuOptionSelect={this.handleSelectChange}
            parentEl={this.el}
            activationType={
              searchable || multiple || selectOnEnter ? "manual" : "automatic"
            }
            closeOnSelect={!multiple}
            multiSelect={multiple}
            searchableSelect={searchable}
          ></ic-menu>
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
