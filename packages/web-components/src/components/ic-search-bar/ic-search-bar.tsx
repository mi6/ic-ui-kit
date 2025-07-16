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
  IcMenuOption,
  IcMultiValueEventDetail,
  IcSizesNoLarge,
  IcThemeMode,
} from "../../utils/types";
import {
  getInputDescribedByText,
  renderHiddenInput,
  handleHiddenFormButtonClick,
  getLabelFromValue,
  onComponentRequiredPropUndefined,
  getFilteredMenuOptions,
  removeDisabledFalse,
  debounceEvent,
} from "../../utils/helpers";
import {
  IcSearchBarBlurEventDetail,
  IcSearchBarSearchModes,
} from "./ic-search-bar.types";
import { IcValueEventDetail, IcBlurEventDetail } from "../../utils/types";
import {
  IcMenuChangeEventDetail,
  IcMenuOptionIdEventDetail,
  IcOptionSelectEventDetail,
} from "../ic-menu/ic-menu.types";

import clearIcon from "../../assets/clear-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import { IcButtonTypes } from "../ic-button/ic-button.types";

let inputIds = 0;

/**
 * @slot helper-text - Content is set as the helper text for the search bar.
 */
@Component({
  tag: "ic-search-bar",
  styleUrl: "ic-search-bar.css",
  shadow: {
    delegatesFocus: true,
  },
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class SearchBar {
  private anchorEl?: HTMLElement;
  private assistiveHintEl?: HTMLSpanElement;
  private debounceAriaLive?: number;
  private hasTimedOut = false;
  private inputEl?: HTMLInputElement;
  private inputId = `ic-search-bar-input-${inputIds++}`;
  private menu?: HTMLIcMenuElement;
  private menuCloseFromMenuChangeEvent = false;
  private menuId = `${this.inputId}-menu`;
  private preLoad = true;
  private preventSubmit = false;
  private prevNoOption = false;
  private retryButtonClick = false;
  private retryViaKeyPress = false;
  private timeoutTimer?: number;
  private truncateValue = false;
  private searchSubmitButton?: HTMLIcButtonElement;

  @Element() el: HTMLIcSearchBarElement;

  @State() ariaActiveDescendant?: string;
  @State() clearButtonFocused = false;
  @State() highlightedValue?: string;
  @State() open = false;
  @State() searchSubmitFocused = false;
  @State() showClearButton = false;

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
  @Prop() autofocus = false;

  /**
   * The number of characters until suggestions appear. The submit button will be disabled until the inputted value is equal to or greater than this number.
   */
  @Prop() charactersUntilSuggestion = 2;
  @Watch("charactersUntilSuggestion")
  watchCharactersUntilSuggestionHandler(): void {
    if (this.showMenuWithNoInput()) {
      this.filteredOptions = this.options;
    }
  }

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el as HTMLElement);
  }

  /**
   * Specify whether to disable the built in filtering. For example, if options will already be filtered from external source.
   * If `true`, all options provided will be displayed.
   */
  @Prop() disableAutoFiltering = false;

  /**
   * The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.
   */
  @Prop() debounce = 0;
  @Watch("debounce")
  private debounceChanged() {
    this.icChange = debounceEvent(this.icChange, this.debounce);
  }

  /**
   * The text displayed when there are no options in the option list.
   */
  @Prop() emptyOptionListText = "No results found";

  /**
   * If `true`, the search bar will be focused when component loaded.
   */
  @Prop() focusOnLoad = false;

  /**
   * Specify whether the search bar fills the full width of the container.
   * If `true`, this overrides the --input-width CSS variable.
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
   * The hint text for the hidden assistive description element.
   */
  @Prop() assistiveHintText =
    "When autocomplete results are available use the up and down arrows to choose and press enter to select";

  /**
   * The label for the search bar.
   */
  @Prop() label!: string;

  /**
   * The custom name for the label field to correspond with the IcMenuOption type.
   */
  @Prop() labelField = "label";

  /**
   * Trigger loading state when fetching options asynchronously
   */
  @Prop({ mutable: true }) loading = false;
  @Watch("loading")
  loadingHandler(newValue: boolean): void {
    if (newValue && !this.hasTimedOut) {
      this.preLoad = false;
      this.triggerLoading();
    }
  }

  /**
   * Change the message displayed when external loading times out.
   */
  @Prop() loadingErrorLabel = "Loading Error";

  /**
   * Change the message displayed whilst the options are being loaded externally.
   */
  @Prop() loadingLabel = "Loading...";

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name = this.inputId;

  /**
   * The placeholder value to display.
   */
  @Prop() placeholder = "Search";

  /**
   * If `true` the parent form will not submit when the icSubmitSearch event fires.
   */
  @Prop() preventFormSubmitOnSearch = false;
  @State() searchButtonType: IcButtonTypes;
  @Watch("preventFormSubmitOnSearch")
  preventFormSubmitOnSearchHandler(): void {
    this.updateSearchButtonType();
  }

  /**
   * If `true`, the readonly state will be set.
   */
  @Prop() readonly = false;

  /**
   * If `true`, the search bar will require a value.
   */
  @Prop() required = false;

  /**
   * Specify the mode search bar uses to search. `navigation` allows for quick lookups of a set of values, `query` allows for more general searches.
   */
  @Prop() searchMode: IcSearchBarSearchModes = "navigation";

  /**
   * The size of the search bar component.
   */
  @Prop() size: IcSizesNoLarge = "medium";

  /**
   * If `true`, the value of the search will have its spelling and grammar checked.
   */
  @Prop() spellcheck = false;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * If using external filtering, set a timeout for when loading takes too long.
   */
  @Prop() timeout?: number;

  /**
   * The custom name for the value field to correspond with the IcMenuOption type.
   */
  @Prop() valueField = "value";

  @State() filteredOptions: IcMenuOption[] = [];
  @Watch("filteredOptions")
  filteredOptionsHandler(newOptions: IcMenuOption[]): void {
    this.hasTimedOut = newOptions.some((opt) => opt.timedOut);
  }

  /**
   * The suggested search options.
   */
  @Prop() options: IcMenuOption[] = [];
  @Watch("options")
  watchOptionsHandler(newOptions: IcMenuOption[]): void {
    if (this.disableAutoFiltering) {
      if (!this.hasTimedOut) {
        this.loading = false;
        clearTimeout(this.timeoutTimer);
        if (newOptions.length > 0) {
          this.filteredOptions = newOptions;
        } else {
          if (this.hadNoOptions()) {
            return;
          }
          this.setMenuChange(true);
          if (!this.preLoad) {
            this.filteredOptions = [
              {
                [this.labelField]: this.emptyOptionListText,
                [this.valueField]: "",
              },
            ];
          }
          this.preLoad = true;
        }
      }
    } else if (this.showMenuWithNoInput()) {
      this.filteredOptions = newOptions;
    }
    this.debounceAriaLiveUpdate();
  }

  /**
   * The value of the search input.
   */
  @Prop({ reflect: true, mutable: true }) value = "";
  @Watch("value")
  watchValueHandler(newValue: string): void {
    this.setInputValue(newValue);
    this.icChange.emit({ value: newValue });
  }

  // The icChange event is defined here so that it appears as an event for search bar
  /**
   * Emitted when the value has changed.
   */
  @Event() icChange: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when value is cleared with clear button
   */
  @Event() icClear: EventEmitter<void>;
  private handleClear = (ev: Event) => {
    const keyboardEvent = ev as KeyboardEvent;
    const mouseEvent = ev as MouseEvent;

    if (
      mouseEvent.type === "click" ||
      keyboardEvent.code === "Enter" ||
      keyboardEvent.code === "Space"
    ) {
      this.value = "";
      this.inputEl?.setAttribute("value", "");
      this.loading = false;
      clearTimeout(this.timeoutTimer);
      this.filteredOptions = this.options;
      this.showMenuWithNoInput() && this.setMenuChange(true);
      this.el.setFocus();

      this.icClear.emit();
      ev.preventDefault();

      this.preventSubmit = true;
    }
  };

  // The icInput event is defined here so that it appears as an event for search bar
  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() icInput: EventEmitter<IcValueEventDetail>;
  private onInput = ({ target }: Event) => {
    this.value = (target as HTMLInputElement).value;
    this.icInput.emit({ value: this.value });

    if (this.options.length > 0) {
      this.setMenuChange(true);

      this.preLoad = false;

      if (this.disableAutoFiltering === false) {
        const rawFilteredOptions = getFilteredMenuOptions(
          this.options,
          false,
          this.value,
          "anywhere",
          this.labelField
        );

        this.filteredOptions =
          rawFilteredOptions.length > 0
            ? rawFilteredOptions
            : [
                {
                  [this.labelField]: this.emptyOptionListText,
                  [this.valueField]: "",
                },
              ];
      }
    }

    if (!this.showClearButton) this.showClearButton = true;

    this.debounceAriaLiveUpdate();
  };

  private onInputBlur = ({ target, relatedTarget }: FocusEvent) => {
    this.icSearchBarBlur.emit({
      value: (target as HTMLInputElement).value,
      relatedTarget,
    });
  };

  private onInputFocus = ({ target }: Event) => {
    this.icSearchBarFocus.emit({ value: (target as HTMLInputElement).value });

    this.showClearButton = true;
  };

  /**
   * Emitted when option is highlighted within the menu
   */
  @Event() icOptionSelect: EventEmitter<IcOptionSelectEventDetail>;

  /**
   * Emitted when the state of the menu changes (i.e. open or close)
   */
  @Event() icMenuChange: EventEmitter<IcMenuChangeEventDetail>;

  /**
   * @internal - Emitted when blur is invoked from clear button
   */
  @Event() icClearBlur: EventEmitter<IcBlurEventDetail>;
  private handleClearBlur = ({ relatedTarget }: FocusEvent) => {
    this.icClearBlur.emit({ relatedTarget });

    this.clearButtonFocused = false;
  };

  /**
   * Emitted when the 'retry loading' button is clicked
   */
  @Event() icRetryLoad: EventEmitter<IcMultiValueEventDetail>;

  /**
   * Emitted when the search value has been submitted
   */
  @Event() icSubmitSearch: EventEmitter<IcValueEventDetail>;

  /**
   * @internal - Emitted when blur is invoked from search submit button
   */
  @Event() icSubmitSearchBlur: EventEmitter<IcBlurEventDetail>;
  private handleSubmitSearchBlur = ({ relatedTarget }: FocusEvent) => {
    this.icSubmitSearchBlur.emit({ relatedTarget });

    this.searchSubmitFocused = false;
  };

  /**
   * Emitted when blur is invoked from ic-search-bar
   */
  @Event() icSearchBarBlur: EventEmitter<IcSearchBarBlurEventDetail>;

  /**
   * Emitted when focus is invoked from ic-search-bar
   */
  @Event() icSearchBarFocus: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when a keydown event occurred.
   */
  @Event() icKeydown: EventEmitter<{ event: KeyboardEvent }>;

  connectedCallback(): void {
    this.debounceChanged();
  }

  disconnectedCallback(): void {
    this.assistiveHintEl?.remove();
  }

  componentWillLoad(): void {
    this.setInputValue(this.value);

    removeDisabledFalse(this.disabled, this.el as HTMLElement);

    this.updateSearchButtonType();
  }

  componentDidLoad(): void {
    if (this.focusOnLoad) {
      this.el.setFocus();
    }

    if (this.hasOptionsOrFilterDisabled()) {
      this.renderAssistiveHintEl();
      if (this.disableAutoFiltering || this.showMenuWithNoInput()) {
        this.filteredOptions = this.options;
      }
    }

    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Search Bar"
    );
  }

  componentWillRender(): void {
    if (this.prevNoOption && this.menu && !this.hasTimedOut) {
      this.menu.handleSetFirstOption();
      this.prevNoOption = false;
    }
    if (
      this.filteredOptions.find(
        (filteredOption) =>
          filteredOption[this.labelField] === this.emptyOptionListText ||
          filteredOption[this.labelField] === this.loadingErrorLabel ||
          filteredOption[this.labelField] === this.loadingLabel
      )
    ) {
      this.prevNoOption = true;
    }
  }

  @Listen("keydown", {})
  handleKeyDown(event: KeyboardEvent): void {
    this.icKeydown.emit({ event });
    if (this.menu && this.open) {
      this.menu.handleKeyboardOpen(event);
    }
  }

  @Listen("keyup", {})
  handleKeyUp(ev: KeyboardEvent): void {
    if (ev.key === "Enter") {
      if (this.preventSubmit || this.isSubmitDisabled()) {
        return;
      }

      this.handleSubmitSearch();
      this.setMenuChange(false);
    }

    if (ev.key === "Escape") {
      this.setMenuChange(false);
    }

    if (this.preventSubmit) {
      this.preventSubmit = false;
    }
  }

  /**
   * Sets focus on the native `input`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.retryViaKeyPress = false;
    this.retryButtonClick = false;
    this.inputEl?.focus();
  }

  private setInputValue = (newValue: string) => {
    if (this.inputEl) {
      const label = getLabelFromValue(
        newValue,
        this.options,
        this.valueField,
        this.labelField
      );
      if (label) this.inputEl.value = label;
      else if (this.inputEl.value !== newValue) {
        this.inputEl.value = newValue;
      }
    }
  };

  private handleMouseDown = (ev: Event) => {
    ev.preventDefault();
  };

  private handleSubmitSearchFocus = () => {
    this.searchSubmitFocused = true;
  };

  private handleSubmitSearch = () => {
    if (this.highlightedValue) this.value = this.highlightedValue;
    this.highlightedValue = undefined;
    this.icSubmitSearch.emit({ value: this.value });

    const form = this.el.closest<HTMLFormElement>("FORM");

    if (this.searchSubmitButton && !!form && !this.preventSubmit) {
      handleHiddenFormButtonClick(form, this.searchSubmitButton);
    }
  };

  private debounceAriaLiveUpdate() {
    clearTimeout(this.debounceAriaLive);

    this.debounceAriaLive = window.setTimeout(() => {
      this.updateSearchResultAriaLive();
    }, 500);
  }

  private handleSubmitSearchKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === " ") {
      ev.preventDefault();
      this.handleSubmitSearch();
    }
  };

  private handleRetry = (ev: CustomEvent<IcMultiValueEventDetail>) => {
    this.retryViaKeyPress = ev.detail.keyPressed === "Enter";
    this.icRetryLoad.emit({ value: ev.detail.value });
    this.triggerLoading();
    this.retryButtonClick = true;
  };

  private triggerLoading = () => {
    const loadingOption: IcMenuOption[] = [
      {
        [this.labelField]: this.loadingLabel,
        [this.valueField]: "",
        loading: true,
      },
    ];
    if (this.filteredOptions !== loadingOption)
      this.filteredOptions = loadingOption;
    if (this.timeout) {
      this.timeoutTimer = window.setTimeout(() => {
        this.filteredOptions = [
          {
            [this.labelField]: this.loadingErrorLabel,
            [this.valueField]: "",
            timedOut: true,
          },
        ];
      }, this.timeout);
    }
  };

  private handleOptionSelect = (ev: CustomEvent) => {
    if (ev.detail.label === this.emptyOptionListText) {
      this.el.setFocus();
      return;
    }

    this.value = ev.detail.value;
    this.icOptionSelect.emit({ value: this.value });
  };

  private handleMenuOptionHighlight = (
    ev: CustomEvent<IcMenuOptionIdEventDetail>
  ) => {
    const { optionId } = ev.detail;
    if (optionId)
      this.highlightedValue = optionId.replace(`${this.menuId}-`, "");
    this.ariaActiveDescendant = optionId || "";
  };

  private handleMenuChange = (ev: CustomEvent<IcMenuChangeEventDetail>) => {
    this.setMenuChange(ev.detail.open);
    if (!ev.detail.open) {
      this.menuCloseFromMenuChangeEvent = true;
    }
  };

  private setMenuChange = (open: boolean) => {
    if (this.open !== open) {
      this.open = open;
      this.icMenuChange.emit({ open });
    }
  };

  private handleHostFocus = () => {
    if (
      this.options &&
      (this.value || this.showMenuWithNoInput()) &&
      !this.menuCloseFromMenuChangeEvent
    ) {
      this.setMenuChange(true);
    }
    this.truncateValue = false;
    this.showMenuWithNoInput() && this.debounceAriaLiveUpdate();

    this.icSearchBarFocus.emit();
  };

  private handleHostBlur = ({ relatedTarget }: FocusEvent) => {
    if (
      this.open &&
      this.options &&
      relatedTarget !== this.menu &&
      !this.retryViaKeyPress &&
      !this.retryButtonClick
    ) {
      this.setMenuChange(false);
    }

    if (this.retryButtonClick || this.retryViaKeyPress) {
      this.inputEl?.focus();
    }

    this.showClearButton = false;
    this.menuCloseFromMenuChangeEvent = false;
    this.truncateValue = true;
    this.icSearchBarBlur.emit({
      relatedTarget,
      value: this.value,
    });
    this.retryViaKeyPress = false;
    this.retryButtonClick = false;
    this.showMenuWithNoInput() && this.updateSearchResultAriaLive();
  };

  private handleFocusClearButton = () => {
    this.clearButtonFocused = true;
  };

  private renderAssistiveHintEl = () => {
    const input = this.el.shadowRoot?.querySelector(`#${this.inputId}`);

    if (
      input &&
      Object.keys(input).length > 0 &&
      this.hasOptionsOrFilterDisabled()
    ) {
      this.assistiveHintEl = document.createElement("span");
      this.assistiveHintEl.innerText = this.assistiveHintText;
      this.assistiveHintEl.id = `${this.inputId}-assistive-hint`;
      this.assistiveHintEl.style.display = "none";
      input.after?.(this.assistiveHintEl);
    }
  };

  private updateSearchResultAriaLive = () => {
    const searchResultsStatusEl =
      this.el.shadowRoot?.querySelector<HTMLParagraphElement>(
        ".search-results-status"
      );

    if (searchResultsStatusEl) {
      if (
        !this.open ||
        (this.value === "" && !this.showMenuWithNoInput()) ||
        this.value.length < this.charactersUntilSuggestion
      ) {
        searchResultsStatusEl.innerText = "";
      } else if (
        this.hasOptionsOrFilterDisabled() &&
        this.filteredOptions.length > 0 &&
        this.open &&
        !this.filteredOptions[0].loading
      ) {
        searchResultsStatusEl.innerText = this.hadNoOptions()
          ? this.emptyOptionListText
          : `${this.filteredOptions.length} result${
              this.filteredOptions.length > 1 ? "s" : ""
            } available`;
      }
    }
  };

  private hasOptionsOrFilterDisabled = () =>
    this.options.length > 0 || this.disableAutoFiltering;

  private hadNoOptions = () =>
    this.filteredOptions.length === 1 &&
    this.filteredOptions[0][this.labelField] === this.emptyOptionListText &&
    this.searchMode === "navigation";

  private isSubmitDisabled = () =>
    !this.value ||
    this.value.length < this.charactersUntilSuggestion ||
    this.disabled ||
    this.hadNoOptions() ||
    this.hasTimedOut ||
    this.loading;

  private showMenuWithNoInput = () => this.charactersUntilSuggestion === 0;
  private updateSearchButtonType = () => {
    this.searchButtonType =
      !!this.el.closest<HTMLFormElement>("FORM") &&
      !this.preventFormSubmitOnSearch
        ? "submit"
        : "button";
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
      disabled,
      value,
      readonly,
      spellcheck,
      fullWidth,
      options,
      open,
      hideLabel,
      menuId,
      ariaActiveDescendant,
      truncateValue,
      autofocus,
      autocapitalize,
      autocomplete,
      filteredOptions,
      theme,
      charactersUntilSuggestion,
      labelField,
      valueField,
      loadingLabel,
      loadingErrorLabel,
      searchMode,
      showClearButton,
      searchSubmitFocused,
      clearButtonFocused,
      searchButtonType,
    } = this;

    const disabledMode = readonly || disabled;

    const describedBy = getInputDescribedByText(
      this.el,
      inputId,
      helperText !== "",
      false
    ).trim();

    let describedById = undefined;

    if (describedBy !== "" && this.hasOptionsOrFilterDisabled()) {
      describedById = `${describedBy} ${inputId}-assistive-hint`;
    } else if (this.hasOptionsOrFilterDisabled()) {
      describedById = `${inputId}-assistive-hint`;
    } else if (describedBy !== "") {
      describedById = describedBy;
    }

    const hasSuggestedSearch =
      (!!value || this.showMenuWithNoInput()) &&
      this.hasOptionsOrFilterDisabled();
    const menuOpen = hasSuggestedSearch && open && filteredOptions.length > 0;
    const menuRendered = menuOpen && value.length >= charactersUntilSuggestion;

    const labelValue = getLabelFromValue(
      value,
      options,
      valueField,
      labelField
    );

    renderHiddenInput(this.el as HTMLElement, value, name, disabledMode);

    return (
      <Host
        class={{
          "ic-search-bar-search": true,
          "ic-search-bar-full-width": fullWidth,
          "ic-search-bar-disabled": disabled,
          "ic-search-bar-small": size === "small",
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        onFocus={this.handleHostFocus}
        onBlur={this.handleHostBlur}
      >
        <ic-input-container readonly={readonly} disabled={disabledMode}>
          {!hideLabel && (
            <ic-input-label
              for={inputId}
              label={label}
              helperText={helperText}
              required={required}
              disabled={disabledMode && !readonly}
              readonly={readonly}
            >
              <slot name="helper-text" slot="helper-text"></slot>
            </ic-input-label>
          )}
          <ic-input-component-container
            ref={(el) => (this.anchorEl = el)}
            size={size}
            disabled={disabledMode}
            readonly={readonly}
            fullWidth={fullWidth}
          >
            <input
              id={inputId}
              name={name}
              ref={(el) => (this.inputEl = el)}
              value={options && !!labelValue ? labelValue : value}
              class={{
                "no-left-pad": readonly,
                readonly,
                "truncate-value": truncateValue,
              }}
              placeholder={placeholder}
              required={required}
              disabled={disabledMode}
              readonly={readonly}
              onInput={this.onInput}
              onBlur={this.onInputBlur}
              onFocus={this.onInputFocus}
              aria-label={hideLabel ? label : undefined}
              aria-activedescendant={ariaActiveDescendant}
              aria-expanded={
                options.length > 0 && menuRendered ? `${menuOpen}` : undefined
              }
              aria-owns={menuRendered ? menuId : undefined}
              aria-describedby={describedById}
              aria-controls={menuRendered ? menuId : undefined}
              aria-haspopup={options.length > 0 ? "listbox" : undefined}
              aria-autocomplete={hasSuggestedSearch ? "list" : undefined}
              role={options.length > 0 && menuRendered ? "combobox" : undefined}
              autocomplete={autocomplete}
              autocapitalize={autocapitalize}
              autoFocus={autofocus}
              spellcheck={spellcheck}
              inputmode="search"
            ></input>
            <div
              class={{
                "clear-button-container": true,
                "clear-button-visible":
                  !!value && !disabledMode && showClearButton,
              }}
            >
              <ic-button
                id="clear-button"
                class={{
                  "clear-button": true,
                  "clear-button-unfocused": !clearButtonFocused,
                }}
                aria-label="Clear"
                innerHTML={clearIcon}
                onClick={this.handleClear}
                onMouseDown={this.handleMouseDown}
                size={size}
                onFocus={this.handleFocusClearButton}
                onBlur={this.handleClearBlur}
                onKeyDown={this.handleClear}
                type={"button"}
                variant="icon"
                theme={clearButtonFocused ? "light" : "dark"}
              ></ic-button>
              <div class="divider"></div>
            </div>
            <div
              class={{
                "search-submit-button-container": true,
                "search-submit-button-disabled": this.isSubmitDisabled(),
              }}
            >
              <ic-button
                id="search-submit-button"
                aria-label="Search"
                ref={(el) => (this.searchSubmitButton = el)}
                class={{
                  "search-submit-button": true,
                  "search-submit-button-small": size === "small",
                  "search-submit-button-unfocused": !searchSubmitFocused,
                  "search-submit-button-disabled": this.isSubmitDisabled(),
                }}
                disabled={this.isSubmitDisabled()}
                innerHTML={searchIcon}
                size={size}
                onClick={this.handleSubmitSearch}
                onMouseDown={this.handleMouseDown}
                onBlur={this.handleSubmitSearchBlur}
                onFocus={this.handleSubmitSearchFocus}
                onKeyDown={this.handleSubmitSearchKeyDown}
                type={searchButtonType}
                variant="icon"
                theme={searchSubmitFocused ? "light" : "dark"}
              ></ic-button>
            </div>
          </ic-input-component-container>
          <div
            class={{
              "menu-container": true,
              fullwidth: fullWidth,
            }}
          >
            {menuRendered && this.anchorEl && this.inputEl && (
              <ic-menu
                class={{
                  "no-results":
                    this.hadNoOptions() ||
                    (filteredOptions.length === 1 &&
                      (filteredOptions[0][labelField] === loadingLabel ||
                        filteredOptions[0][labelField] === loadingErrorLabel)),
                }}
                activationType="manual"
                anchorEl={this.anchorEl}
                autofocusOnSelected={false}
                searchMode={searchMode}
                inputEl={this.inputEl}
                inputLabel={label}
                ref={(el) => (this.menu = el)}
                fullWidth={fullWidth}
                menuId={menuId}
                open={true}
                options={filteredOptions}
                onMenuOptionSelect={this.handleOptionSelect}
                onMenuStateChange={this.handleMenuChange}
                onMenuOptionId={this.handleMenuOptionHighlight}
                onRetryButtonClicked={this.handleRetry}
                parentEl={this.el as HTMLElement}
                value={value}
                labelField={labelField}
                valueField={valueField}
                searchBar={true}
              ></ic-menu>
            )}
          </div>
        </ic-input-container>
        <div
          aria-live="polite"
          role="status"
          class="search-results-status"
        ></div>
      </Host>
    );
  }
}
