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
  IcThemeForegroundEnum,
  IcMenuOption,
} from "../../utils/types";
import {
  getInputDescribedByText,
  renderHiddenInput,
  handleHiddenFormButtonClick,
  getLabelFromValue,
  onComponentRequiredPropUndefined,
  getFilteredMenuOptions,
  removeDisabledFalse,
} from "../../utils/helpers";
import {
  IcSearchBarBlurEventDetail,
  IcSearchBarSearchModes,
} from "./ic-search-bar.types";
import { IcValueEventDetail, IcBlurEventDetail } from "../../utils/types";
import {
  IcMenuChangeEventDetail,
  IcOptionSelectEventDetail,
} from "../ic-menu/ic-menu.types";

import clearIcon from "../../assets/clear-icon.svg";
import searchIcon from "../../assets/search-icon.svg";

let inputIds = 0;

@Component({
  tag: "ic-search-bar",
  styleUrl: "ic-search-bar.css",
  shadow: {
    delegatesFocus: true,
  },
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class SearchBar {
  private anchorEl: HTMLElement;
  private assistiveHintEl: HTMLSpanElement = null;
  private debounceAriaLive: number;
  private hasTimedOut = false;
  private inputEl: HTMLIcTextFieldElement;
  private inputId = `ic-search-bar-input-${inputIds++}`;
  private menu: HTMLIcMenuElement;
  private menuCloseFromMenuChangeEvent: boolean = false;
  private menuId = `${this.inputId}-menu`;
  private preLoad = true;
  private preventSubmit: boolean = false;
  private prevNoOption: boolean = false;
  private retryButtonClick: boolean = false;
  private retryViaKeyPress: boolean;
  private timeoutTimer: number;
  private truncateValue = false;
  private searchSubmitButton: HTMLIcButtonElement;

  @Element() el: HTMLIcSearchBarElement;

  @State() ariaActiveDescendant: string;
  @State() clearButtonFocused: boolean = false;
  @State() highlightedValue: string;
  @State() open: boolean = false;
  @State() searchSubmitFocused: boolean = false;
  @State() showClearButton: boolean = false;

  /**
   * The automatic capitalisation of the text value as it is entered/edited by the user.
   * Available options: "off", "none", "on", "sentences", "words", "characters".
   */
  @Prop() autocapitalize = "off";

  /**
   * The state of autocompletion the browser can apply on the text value.
   */
  @Prop() autocomplete?: IcAutocompleteTypes = "off";

  /**
   * The state of autocorrection the browser can apply when the user is entering/editing the text value.
   */
  @Prop() autocorrect?: IcAutocorrectStates = "off";

  /**
   * If `true`, the form control will have input focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * The number of characters until suggestions appear. The submit button will be disabled until the inputted value is equal to or greater than this number.
   */
  @Prop() charactersUntilSuggestion: number = 2;

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Specify whether to disable the built in filtering. For example, if options will already be filtered from external source.
   * If `true`, all options provided will be displayed.
   */
  @Prop() disableFilter?: boolean = false;

  /**
   * The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.
   */
  @Prop() debounce?: number = 0;

  /**
   * The text displayed when there are no options in the option list.
   */
  @Prop() emptyOptionListText = "No results found";

  /**
   * If `true`, the search bar will be focused when component loaded.
   */
  @Prop() focusOnLoad?: boolean = false;

  /**
   * Specify whether the search bar fills the full width of the container.
   * If `true`, this overrides the --input-width CSS variable.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText?: string = "";

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel?: boolean = false;

  /**
   * The hint text for the hidden assistive description element.
   */
  @Prop() hintText?: string =
    "When autocomplete results are available use the up and down arrows to choose and press enter to select";

  /**
   * The label for the search bar.
   */
  @Prop() label!: string;

  /**
   * Trigger loading state when fetching options asyncronously
   */
  @Prop({ mutable: true }) loading?: boolean = false;

  /**
   * Change the message displayed when external loading times out.
   */
  @Prop() loadingErrorLabel?: string = "Loading Error";

  /**
   * Change the message displayed whilst the options are being loaded externally.
   */
  @Prop() loadingLabel?: string = "Loading...";

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * The placeholder value to display.
   */
  @Prop() placeholder?: string = "Search";

  /**
   * If `true`, the readonly state will be set.
   */
  @Prop() readonly?: boolean = false;

  /**
   * If `true`, the search bar will require a value.
   */
  @Prop() required?: boolean = false;

  /**
   * Specify the mode search bar uses to search. `navigation` allows for quick lookups of a set of values, `query` allows for more general searches.
   */
  @Prop() searchMode?: IcSearchBarSearchModes = "navigation";

  /**
   * If `true`, the small styling will be applied to the search bar.
   */
  @Prop() small?: boolean = false;

  /**
   * If `true`, the value of the search will have its spelling and grammar checked.
   */
  @Prop() spellcheck: boolean = false;

  /**
   * If using external filtering, set a timeout for when loading takes too long.
   */
  @Prop() timeout?: number;

  @Watch("loading")
  loadingHandler(newValue: boolean): void {
    if (newValue && !this.hasTimedOut) {
      this.preLoad = false;
      this.triggerLoading();
    }
  }

  @State() filteredOptions: IcMenuOption[] = [];

  @Watch("filteredOptions")
  filteredOptionsHandler(newOptions: IcMenuOption[]): void {
    this.hasTimedOut = newOptions.some((opt) => opt.timedOut);
  }

  /**
   * The suggested search options.
   */
  @Prop() options?: IcMenuOption[] = [];

  @Watch("options")
  watchOptionsHandler(newOptions: IcMenuOption[]): void {
    if (this.disableFilter && !this.hasTimedOut) {
      this.loading = false;
      clearTimeout(this.timeoutTimer);
      if (newOptions.length > 0) {
        this.filteredOptions = newOptions;
      } else {
        if (this.hadNoOptions()) {
          return;
        }
        this.setMenuChange(true);
        !this.preLoad &&
          (this.filteredOptions = [
            { label: this.emptyOptionListText, value: "" },
          ]);
        this.preLoad = true;
      }
    }
    this.debounceAriaLiveUpdate();
  }

  /**
   * The value of the search input.
   */
  @Prop({ reflect: true, mutable: true }) value: string = "";

  @Watch("value")
  watchValueHandler(newValue: string): void {
    if (
      this.inputEl &&
      this.options &&
      !!getLabelFromValue(newValue, this.options)
    ) {
      this.inputEl.value = getLabelFromValue(newValue, this.options);
    } else if (this.inputEl && this.inputEl.value !== newValue) {
      this.inputEl.value = newValue;
    }
  }

  // The icChange event is defined here so that it appears as an event for search bar
  // The actual event is emitted from the child ic-text-field
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
      this.inputEl.value = "";
      this.loading = false;
      clearTimeout(this.timeoutTimer);
      this.filteredOptions = this.options;
      this.el.setFocus();

      this.icClear.emit();
      ev.preventDefault();

      this.preventSubmit = true;
    }
  };

  // The icInput event is defined here so that it appears as an event for search bar
  // The actual event is emitted from the child ic-text-field
  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() icInput: EventEmitter<IcValueEventDetail>;
  private onInput = (ev: Event) => {
    this.value = (ev.target as HTMLInputElement).value;

    const noOptions = [{ label: this.emptyOptionListText, value: "" }];

    if (this.options.length > 0) {
      this.setMenuChange(true);

      this.preLoad = false;

      if (this.disableFilter === false) {
        const rawFilteredOptions = getFilteredMenuOptions(
          this.options,
          false,
          this.value,
          "anywhere"
        );

        this.filteredOptions =
          rawFilteredOptions.length > 0 ? rawFilteredOptions : noOptions;
      }
    }

    if (!this.showClearButton) {
      this.handleShowClearButton(true);
    }

    this.debounceAriaLiveUpdate();
  };

  /**
   * @deprecated This event should not be used anymore. Use icSearchBarBlur instead.
   */
  @Event() icInputBlur: EventEmitter<IcSearchBarBlurEventDetail>;
  private onInputBlur = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    const nextFocus = (ev as FocusEvent).relatedTarget;

    this.icInputBlur.emit({ value: value, relatedTarget: nextFocus });
  };

  /**
   * @deprecated This event should not be used anymore. Use icSearchBarFocus instead.
   */
  @Event() icInputFocus: EventEmitter<IcValueEventDetail>;
  private onInputFocus = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    this.icInputFocus.emit({ value: value });

    this.handleShowClearButton(true);
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
  private handleClearBlur = (ev: Event) => {
    const nextFocus = (ev as FocusEvent).relatedTarget;

    this.icClearBlur.emit({ relatedTarget: nextFocus });

    this.clearButtonFocused = false;
  };

  /**
   * Emitted when the 'retry loading' button is clicked
   */
  @Event() icRetryLoad: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when the search value has been submitted
   */
  @Event() icSubmitSearch: EventEmitter<IcValueEventDetail>;

  /**
   * @internal - Emitted when blur is invoked from search submit button
   */
  @Event() icSubmitSearchBlur: EventEmitter<IcBlurEventDetail>;
  private handleSubmitSearchBlur = (ev: Event) => {
    const nextFocus = (ev as FocusEvent).relatedTarget;

    this.icSubmitSearchBlur.emit({ relatedTarget: nextFocus });

    this.searchSubmitFocused = false;
  };

  /**
   * Emitted when blur is invoked from ic-search-bar
   */
  @Event() icSearchBarBlur: EventEmitter<IcSearchBarBlurEventDetail>;

  /**
   * Emitted when focus is invoked from ic-search-bar
   */
  @Event() icSearchBarFocus: EventEmitter<void>;

  disconnectedCallback(): void {
    if (this.assistiveHintEl) {
      this.assistiveHintEl.remove();
    }
  }

  componentWillLoad(): void {
    this.watchValueHandler(this.value);

    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    if (this.focusOnLoad) {
      this.el.setFocus();
    }

    if (this.hasOptionsOrFilterDisabled()) {
      this.renderAssistiveHintEl();
      if (this.disableFilter) {
        this.filteredOptions = this.options;
      }
    }

    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Search Bar"
    );

    if (this.inputEl !== undefined) {
      this.anchorEl = this.inputEl.shadowRoot.querySelector(
        "ic-input-component-container"
      );
    }
  }

  componentWillRender(): void {
    this.highlightFirstOptionAfterNoResults();
  }

  @Listen("icKeydown", {})
  handleKeyDown(ev: CustomEvent): void {
    const keyEv: KeyboardEvent = ev.detail.event;
    if (this.menu && this.open) {
      this.menu.handleKeyboardOpen(keyEv);
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
    if (this.inputEl) {
      this.inputEl.setFocus();
    }
  }

  private handleMouseDown = (ev: Event) => {
    ev.preventDefault();
  };

  private handleSubmitSearchFocus = () => {
    this.searchSubmitFocused = true;
  };

  private handleSubmitSearch = () => {
    this.highlightedValue && (this.value = this.highlightedValue);
    this.highlightedValue = undefined;
    this.icSubmitSearch.emit({ value: this.value });

    const form: HTMLFormElement = this.el.closest("FORM");

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

  private handleRetry = (ev: CustomEvent<IcValueEventDetail>) => {
    this.retryViaKeyPress = ev.detail.keyPressed === "Enter";
    this.icRetryLoad.emit({ value: ev.detail.value });
    this.triggerLoading();
    this.retryButtonClick = true;
  };

  private triggerLoading = () => {
    const loadingOption: IcMenuOption[] = [
      { label: this.loadingLabel, value: "", loading: true },
    ];
    if (this.filteredOptions !== loadingOption)
      this.filteredOptions = loadingOption;
    if (this.timeout) {
      this.timeoutTimer = window.setTimeout(() => {
        this.filteredOptions = [
          { label: this.loadingErrorLabel, value: "", timedOut: true },
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

  private handleMenuOptionHighlight = (ev: CustomEvent) => {
    const optionValue = ev.detail.optionId?.replace(`${this.menuId}-`, "");
    optionValue && (this.highlightedValue = optionValue);
    if (ev.detail.optionId) {
      this.ariaActiveDescendant = ev.detail.optionId;
    } else {
      this.ariaActiveDescendant = undefined;
    }
  };

  private handleMenuChange = (ev: CustomEvent) => {
    this.setMenuChange(ev.detail.open);
    if (!ev.detail.open) {
      this.handleMenuCloseFromMenuChange(true);
      if (ev.detail.focusInput === undefined || ev.detail.focusInput) {
        this.el.setFocus();
      }
    }
  };

  private setMenuChange = (open: boolean) => {
    if (this.open !== open) {
      this.open = open;
      this.icMenuChange.emit({ open });
    }
  };

  private handleHostFocus = () => {
    if (this.options && this.value && !this.menuCloseFromMenuChangeEvent) {
      this.setMenuChange(true);
    }
    this.handleTruncateValue(false);

    this.icSearchBarFocus.emit();
  };

  private handleHostBlur = (ev: Event) => {
    const nextFocus = (ev as FocusEvent).relatedTarget;
    if (
      this.open &&
      this.options &&
      nextFocus !== this.menu &&
      !this.retryViaKeyPress &&
      !this.retryButtonClick
    ) {
      this.setMenuChange(false);
    }

    if (this.retryButtonClick || this.retryViaKeyPress) {
      this.inputEl.setFocus();
    }

    this.handleShowClearButton(false);
    this.handleMenuCloseFromMenuChange(false);
    this.handleTruncateValue(true);
    this.icSearchBarBlur.emit({ relatedTarget: nextFocus, value: this.value });
    this.retryViaKeyPress = false;
    this.retryButtonClick = false;
  };

  private handleShowClearButton = (visible: boolean): void => {
    this.showClearButton = visible;
  };

  private handleFocusClearButton = (): void => {
    this.clearButtonFocused = true;
  };

  private handleMenuCloseFromMenuChange = (fromEvent: boolean): void => {
    this.menuCloseFromMenuChangeEvent = fromEvent;
  };

  private handleTruncateValue = (truncate: boolean): void => {
    this.truncateValue = truncate;
  };

  private renderAssistiveHintEl = (): void => {
    const input = this.el.shadowRoot
      .querySelector("ic-text-field")
      ?.shadowRoot?.querySelector(`#${this.inputId}`);

    if (
      input &&
      Object.keys(input).length > 0 &&
      this.hasOptionsOrFilterDisabled()
    ) {
      this.assistiveHintEl = document.createElement("span");
      this.assistiveHintEl.innerText = this.hintText;
      this.assistiveHintEl.id = `${this.inputId}-assistive-hint`;
      this.assistiveHintEl.style.display = "none";
      if (input.after !== undefined) {
        input.after(this.assistiveHintEl);
      }
    }
  };

  private updateSearchResultAriaLive = (): void => {
    const searchResultsStatusEl = this.el.shadowRoot.querySelector(
      ".search-results-status"
    ) as HTMLParagraphElement;

    if (
      !this.open ||
      this.value === "" ||
      this.value.length < this.charactersUntilSuggestion
    ) {
      searchResultsStatusEl.innerText = "";
    } else if (
      this.hasOptionsOrFilterDisabled() &&
      this.filteredOptions.length > 0 &&
      this.open &&
      searchResultsStatusEl &&
      !this.filteredOptions[0].loading
    ) {
      if (this.hadNoOptions()) {
        searchResultsStatusEl.innerText = this.emptyOptionListText;
      } else {
        searchResultsStatusEl.innerText = `${
          this.filteredOptions.length
        } result${this.filteredOptions.length > 1 ? "s" : ""} available`;
      }
    }
  };

  private hasOptionsOrFilterDisabled = (): boolean =>
    this.options.length > 0 || this.disableFilter;

  private hadNoOptions = (): boolean =>
    this.filteredOptions.length === 1 &&
    this.filteredOptions[0].label === this.emptyOptionListText &&
    this.searchMode === "navigation";

  private isSubmitDisabled = (): boolean => {
    const valueNotSet =
      this.value === undefined || this.value === null || this.value === "";
    const valueLengthLess = this.value.length < this.charactersUntilSuggestion;
    return (
      valueNotSet ||
      valueLengthLess ||
      this.disabled ||
      this.hadNoOptions() ||
      this.hasTimedOut ||
      this.loading
    );
  };

  private highlightFirstOptionAfterNoResults = () => {
    if (this.prevNoOption && this.menu && !this.hasTimedOut) {
      this.menu.handleSetFirstOption();
      this.prevNoOption = false;
    }
    const prevNoOptionsList = this.filteredOptions.find(
      (filteredOption) =>
        filteredOption.label === this.emptyOptionListText ||
        filteredOption.label === this.loadingErrorLabel ||
        filteredOption.label === this.loadingLabel
    );
    if (prevNoOptionsList) {
      this.prevNoOption = true;
    }
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
    } = this;

    const disabledMode = readonly || disabled ? true : false;

    const describedBy = getInputDescribedByText(
      inputId,
      helperText !== "",
      false
    ).trim();

    let describedById;

    if (describedBy !== "" && this.hasOptionsOrFilterDisabled()) {
      describedById = `${describedBy} ${this.inputId}-assistive-hint`;
    } else if (this.hasOptionsOrFilterDisabled()) {
      describedById = `${this.inputId}-assistive-hint`;
    } else if (describedBy !== "") {
      describedById = describedBy;
    } else {
      describedById = undefined;
    }

    const disabledText = disabledMode && !readonly;
    const hasSuggestedSearch = value && this.hasOptionsOrFilterDisabled();
    const menuOpen = hasSuggestedSearch && open && filteredOptions.length > 0;
    const isOrHasLoaded =
      this.filteredOptions.length === 1 &&
      (this.filteredOptions[0].label === this.loadingLabel ||
        filteredOptions[0].label === this.loadingErrorLabel);

    let expanded;

    if (options.length > 0) {
      if (menuOpen) {
        expanded = "true";
      } else {
        expanded = "false";
      }
    } else {
      expanded = undefined;
    }

    renderHiddenInput(true, this.el, name, value, disabledMode);

    return (
      <Host
        class={{
          ["search"]: true,
          ["fullwidth"]: fullWidth,
          ["disabled"]: disabled,
          ["small"]: small,
        }}
        onFocus={this.handleHostFocus}
        onBlur={this.handleHostBlur}
      >
        <ic-text-field
          ref={(el) => (this.inputEl = el)}
          inputId={inputId}
          label={label}
          helperText={helperText}
          required={required}
          disabled={disabledText}
          readonly={readonly}
          small={small}
          hideLabel={hideLabel}
          fullWidth={fullWidth}
          name={name}
          truncateValue={truncateValue}
          value={
            options && !!getLabelFromValue(value, options)
              ? getLabelFromValue(value, options)
              : value
          }
          placeholder={placeholder}
          onInput={this.onInput}
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocus}
          aria-label={hideLabel ? label : ""}
          aria-describedby={describedById}
          aria-owns={hasSuggestedSearch ? menuId : undefined}
          aria-haspopup={options.length > 0 ? "listbox" : undefined}
          ariaExpanded={expanded}
          ariaActiveDescendant={ariaActiveDescendant}
          aria-autocomplete={hasSuggestedSearch ? "list" : undefined}
          role={hasSuggestedSearch ? "combobox" : undefined}
          autocomplete={autocomplete}
          autocapitalize={autocapitalize}
          autoFocus={autofocus}
          spellcheck={spellcheck}
          inputmode="search"
          debounce={this.debounce}
        >
          <div
            class={{
              "clear-button-container": true,
              "clear-button-visible":
                value && !disabledMode && this.showClearButton,
            }}
            slot="clear-button"
          >
            <ic-button
              id="clear-button"
              class="clear-button"
              aria-label="Clear"
              innerHTML={clearIcon}
              onClick={this.handleClear}
              onMouseDown={this.handleMouseDown}
              size={small ? "small" : "default"}
              onFocus={this.handleFocusClearButton}
              onBlur={this.handleClearBlur}
              onKeyDown={this.handleClear}
              type="submit"
              variant="icon"
              appearance={
                this.clearButtonFocused
                  ? IcThemeForegroundEnum.Light
                  : IcThemeForegroundEnum.Dark
              }
            ></ic-button>
            <div class="divider"></div>
          </div>
          <div
            class={{
              "search-submit-button-container": true,
              "search-submit-button-disabled": this.isSubmitDisabled(),
            }}
            slot="search-submit-button"
          >
            <ic-button
              id="search-submit-button"
              aria-label="Search"
              ref={(el) => (this.searchSubmitButton = el)}
              class={{
                ["search-submit-button"]: true,
                ["search-submit-button-small"]: !!small,
              }}
              disabled={this.isSubmitDisabled()}
              innerHTML={searchIcon}
              size={small ? "small" : "default"}
              onClick={this.handleSubmitSearch}
              onMouseDown={this.handleMouseDown}
              onBlur={this.handleSubmitSearchBlur}
              onFocus={this.handleSubmitSearchFocus}
              onKeyDown={this.handleSubmitSearchKeyDown}
              type="submit"
              variant="icon"
              appearance={
                this.searchSubmitFocused
                  ? IcThemeForegroundEnum.Light
                  : IcThemeForegroundEnum.Default
              }
            ></ic-button>
          </div>
          <div
            class={{
              "menu-container": true,
              fullwidth: fullWidth,
            }}
            slot="menu"
          >
            {menuOpen && value.length >= this.charactersUntilSuggestion && (
              <ic-menu
                class={{
                  "no-results": this.hadNoOptions() || isOrHasLoaded,
                }}
                activationType="manual"
                anchorEl={this.anchorEl}
                autoFocusOnSelected={false}
                searchMode={this.searchMode}
                inputEl={this.inputEl}
                inputLabel={label}
                ref={(el) => (this.menu = el)}
                small={small}
                fullWidth={fullWidth}
                menuId={menuId}
                open={true}
                options={filteredOptions}
                onMenuOptionSelect={this.handleOptionSelect}
                onMenuStateChange={this.handleMenuChange}
                onMenuOptionId={this.handleMenuOptionHighlight}
                onRetryButtonClicked={this.handleRetry}
                parentEl={this.el}
                value={value}
              ></ic-menu>
            )}
          </div>
        </ic-text-field>
        <div
          aria-live="polite"
          role="status"
          class="search-results-status"
        ></div>
      </Host>
    );
  }
}
