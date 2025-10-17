import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";
import { IcInformationStatusOrEmpty, IcMenuOption, IcSearchMatchPositions, IcSizes, IcThemeMode } from "../../utils/types";
import { IcOptionSelectEventDetail } from "../ic-listbox/ic-listbox.types";
import { getFilteredMenuOptions, hasValidationStatus, renderHiddenInput } from "../../utils/helpers";
import Expand from "./assets/Expand.svg";
import Clear from "./assets/Clear.svg";

enum ComboboxAction {
    OpenListbox,
    CloseListbox,
    SelectAndCloseListbox,
    FirstOption,
    LastOption,
    NextOption,
    PrevOption,
    PageUpOption,
    PageDownOption,
    MatchingOption,
    ClearAndCloseListbox,
};

enum LoadingStatus {
    Loading,
    Loaded,
    TimedOut,
}

let inputIds = 0;

@Component({
  tag: "ic-combobox",
  styleUrl: "ic-combobox.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Combobox {
    @Element() el!: HTMLIcComboboxElement;
    private inputId = `ic-select-new-input-${inputIds++}`;
    private anchorEl?: HTMLElement;
    private listboxId = `${this.inputId}-listbox`;
    private valueString = "";
    private processedOptions: IcMenuOption[]; // Deduplicated, sorted options. Not safe to reference by index or use length (due to nesting)
    private flattenedFilteredOptions: IcMenuOption[]; // Safe to reference by index and use length
    // private optionEls: HTMLLIElement[] = []; // Safe to reference by index and use length
    private ariaActivedescendant = ""; // id of list item corresponding to option which is the current active descendant
    private inputEl?: HTMLInputElement;
    private isEmpptyOptions: boolean;
    private timeoutTimer?: number;

    @State() activedescendantIndex: number | null = null;
    @State() activeDescendant = ""; // value of option which is the current active descendant
    @Watch("activedescendantIndex")
    activedescendantIndexHandler(): void {
        if (this.loadingStatus !== LoadingStatus.Loaded || this.isEmpptyOptions) {
            this.activedescendantIndex = null;
        };
        this.ariaActivedescendant = this.getAriaActivedescendant();
    };
    @State() filteredOptions: IcMenuOption[] = []; // Options passed to menu to be visible after filtering. Not safe to reference by index or use length
    @Watch("filteredOptions")
    filteredOptionsHandler(): void {
        this.isEmpptyOptions = (this.loadingStatus === LoadingStatus.Loaded && this.filteredOptions.length === 0);
    };
    @State() open = false;
    @State() loadingStatus = LoadingStatus.Loaded;


    /**
        * If `true`, the disabled state will be set.
    */
    @Prop({ reflect: true }) disabled = false;
    @Watch("disabled")
    watchDisabledHandler(): void {
        // removeDisabledFalse(this.disabled, this.el);
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
    @Prop() showClearButton = true;
    @Watch("showClearButton")
    showClearButtonValidator(newValue: boolean) {
        if (!newValue) {
            this.showClearButton = true;
            console.warn("show-clear-button prop updated to true. The clear button is always shown on the searchable variant.")
        }
    }

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
    loadingHandler(): void {
        this.updateLoadingStatus();
    }

    /**
       * The possible selection options.
    */
    @Prop() options: IcMenuOption[] = [];
    @Watch("options")
    watchOptionsHandler(newValue: IcMenuOption[]): void {
        this.processedOptions = this.getProcessedOptions(newValue);
        this.filteredOptions = this.processedOptions;
        this.flattenedFilteredOptions = this.getFlattenedFilteredOptions();
    };

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
    updateValueString(newValue: string | string[] | null) {
        // todo update in componentwillload?
        this.valueString = newValue ? newValue.toString() : "";
        if (this.inputEl) this.inputEl.value = this.getLabelFromValue()
    };


    /**
        * If `true`, a searchable variant of the select will be displayed which can be typed in to filter options. This functionality is only available on the single-select variant of the select component.
    */
    @Prop() searchable = false;

    /**
     * If `true`, multiple options can be selected.
   */
    @Prop() multiple = false;
    @Watch("searchable")
    @Watch("multiple")
    validateMultipleSearchable() {
        if( this.multiple && this.searchable ) {
            console.warn("Searchable functionality can only be used with the single-select variant. Defaulting to the single-select variant");
            this.searchable = false;
        };
    };

    componentWillLoad() {
        // this.emptyOptions = [{ label: this.emptyOptionListText, value: "" }];
        // this.loadingOptions = [{ label: this.loadingLabel, value: "", loading: true }];
        this.processedOptions = this.getProcessedOptions(this.options);
        this.filteredOptions = this.processedOptions;
        this.flattenedFilteredOptions = this.getFlattenedFilteredOptions();
        // this.setIsEmptyOptionsList();

        this.valueString = this.value ? this.value.toString() : "";

        this.updateLoadingStatus();

        // this.updateIsClearable();
    };

    // componentDidLoad() {
    //     this.optionEls = Array.from(this.el.shadowRoot?.querySelectorAll('ic-listbox [role="option"]') || []);
    // };

    /**
     * Put the select component into loading state.
     * Replace options with the loading message. If timeout is enabled, set the timeout and once passed, replace options with the loading error message
     */
    private updateLoadingStatus = () => {
        if (this.loading) {
            this.loadingStatus = LoadingStatus.Loading;
            this.dispatchComboboxAction(ComboboxAction.ClearAndCloseListbox);

            if (this.timeout) {
                this.timeoutTimer = window.setTimeout(() => {
                    this.loadingStatus = LoadingStatus.TimedOut;
                }, this.timeout);
            }
        } else {
            this.loadingStatus = LoadingStatus.Loaded;
            this.isEmpptyOptions = this.filteredOptions.length === 0;
            clearTimeout(this.timeoutTimer);
        };
    };

    private getProcessedOptions = (options: IcMenuOption[]): IcMenuOption[] => {
        const dedupedOptions = this.getDeduplicatedOptions(options);
        return this.getSortedOptions(dedupedOptions);
    };

    private getDeduplicatedOptions = (options: IcMenuOption[]): IcMenuOption[] => {
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

    private getSortedOptions = (options: IcMenuOption[]): IcMenuOption[] => {
        let sorted: IcMenuOption[] = [];
        if (options.sort) {
          sorted = options.sort((optionA, optionB) =>
            optionA.recommended && !optionB.recommended ? -1 : 0
          );
        }
        return sorted;
    };

    private getFlattenedFilteredOptions = () => {
        const flattenedOptions: IcMenuOption[] = [];

        if (this.filteredOptions.length > 0) {
        this.filteredOptions.map((option) => {
            if (option.children) {
            option.children.map(
                (option) => flattenedOptions.push(option)
            );
            } else {
            flattenedOptions.push(option);
            }
        });
        };
        return flattenedOptions;
    };

    private dispatchComboboxAction = (action?: ComboboxAction, selectedOptionValue?: string) => {

    const maxIndex = this.flattenedFilteredOptions.length - 1;
    let currIndex = this.activedescendantIndex || 0;
    const pageSize = 10; // Recommended by W3C

    switch (action) {
        case ComboboxAction.FirstOption:
            this.dispatchComboboxAction(ComboboxAction.OpenListbox);
            this.activedescendantIndex = 0;
            break;
        case ComboboxAction.LastOption:
            this.dispatchComboboxAction(ComboboxAction.OpenListbox);
            this.activedescendantIndex = maxIndex;
            break;
        case ComboboxAction.NextOption:
            this.dispatchComboboxAction(ComboboxAction.OpenListbox);
            this.activedescendantIndex = Math.min(maxIndex, ++currIndex);
            break;
        case ComboboxAction.PrevOption:
            this.dispatchComboboxAction(ComboboxAction.OpenListbox);
            this.activedescendantIndex = Math.max(0, --currIndex);
            break;
        case ComboboxAction.PageUpOption:
            /**
             * Moves focus visually up 10 options
             * Or to first option
             */
            this.activedescendantIndex = Math.min(0, currIndex - pageSize);
            break;
        case ComboboxAction.PageDownOption:
            /**
             * Moves focus visually down 10 options
             * Or to last option
             */
            this.activedescendantIndex = Math.max(0, currIndex + pageSize);
            break;
        case ComboboxAction.MatchingOption:
            // todo
            // move visual focus to first matching option
            // if multiple keys before timeout, move visual focus ot first matching string
            // if same key repeated before timeout, cycle through options starting with that letter
            // if no match, don't move visual focus
            this.open=true;
            break
            /**
             * If a value is set, set the active descendant to the option with that value so it has visual focus when the listbox opens
             * Open the listbox
             */
        case ComboboxAction.OpenListbox:
            if (this.value) currIndex = this.flattenedFilteredOptions.map((option) => option.value).indexOf(this.valueString);
            this.activedescendantIndex = currIndex
            this.open = true;
            break;
        case ComboboxAction.CloseListbox:
            this.open = false;
            this.activedescendantIndex = null;
            break;
        case ComboboxAction.SelectAndCloseListbox:
            this.open = false;
            this.value = !!selectedOptionValue ? selectedOptionValue : this.getValueFromActivedescendantIndex();
            this.activedescendantIndex = null;
            break;
        case ComboboxAction.ClearAndCloseListbox:
            this.clearUserInput();
            this.value = null;
            this.open = false;
            this.activedescendantIndex = null;
        default:
            break;
    };
  };
  
    private getActionFromKeyboardEvent = (event: KeyboardEvent): ComboboxAction | undefined => {
        const { key, altKey } = event;

        // todo voiceover shortcuts?
        // todo testing (e.g. pageUp/Down)

        if (this.open) {
            switch (key) {
                case "Enter":
                case " ":
                    event.preventDefault();
                    return ComboboxAction.SelectAndCloseListbox;
                case "Tab":
                    // Tab needs default behaviour of moving to next focusable el.
                    // This is not consistent with native select but is consistent with combobox behaviour
                    return ComboboxAction.SelectAndCloseListbox;
                case "Escape":
                    return ComboboxAction.CloseListbox;
                case "ArrowDown":
                    return ComboboxAction.NextOption;
                case "ArrowUp":
                    return altKey ? ComboboxAction.SelectAndCloseListbox : ComboboxAction.PrevOption;
                case "Home":
                    return ComboboxAction.FirstOption;
                case "End":
                    return ComboboxAction.LastOption;
                case "PageUp":
                    return ComboboxAction.PageUpOption;
                case "PageDown":
                    return ComboboxAction.PageDownOption;
                default:
                    return;        
            }
        } else {
            switch (key) {
                case "ArrowUp":
                case "ArrowDown":
                case "Enter":
                case "Space":
                    // todo - handle space in search string
                    return ComboboxAction.OpenListbox;
                case "Home":
                    return ComboboxAction.FirstOption;
                case "End":
                    return ComboboxAction.LastOption;
                default:
                    return;
            }
        }
    };

    private handleOptionClick = (event: CustomEvent<IcOptionSelectEventDetail>) => {
        if (event.detail.value) this.dispatchComboboxAction(ComboboxAction.SelectAndCloseListbox, event.detail.value);
    };
    
    private handleComboboxClick = () => {
        this.dispatchComboboxAction(this.open ? ComboboxAction.CloseListbox : ComboboxAction.OpenListbox);
    };

    private handleBlur = () => {
        this.dispatchComboboxAction(ComboboxAction.CloseListbox);
    };

    private handleKeyDown = (event: KeyboardEvent) => {
        const action = this.getActionFromKeyboardEvent(event);
        this.dispatchComboboxAction(action);
    };

    private handleInput = (event: InputEvent) => {
        const searchString = (event.target as HTMLInputElement).value;
        // this.filteredOptions = getFilteredMenuOptions(this.processedOptions, this.includeDescriptionsInSearch, searchString, this.searchMatchPosition);
        this.handleFilter(searchString);
        this.dispatchComboboxAction(ComboboxAction.OpenListbox);
    };

    private handleFilter = (searchString: string) => {
        const filteredParents = getFilteredMenuOptions(this.processedOptions, this.includeDescriptionsInSearch, searchString, this.searchMatchPosition);

        const filteredOptions: IcMenuOption[] = [];
        this.processedOptions.forEach(option => {
            const { children, ...rest } = option;
            if (children) {
                const filteredChildren = getFilteredMenuOptions(children, this.includeDescriptionsInSearch, searchString, this.searchMatchPosition);
                if (this.includeGroupTitlesInSearch) {
                    // include children of filtered group titles
                    if (filteredParents.includes(option) ) {
                        filteredOptions.push(option);
                    } else if (filteredChildren.length > 0) {
                        // include filtered children if the parent is not already included
                        filteredOptions.push({
                            children: filteredChildren,
                            ...rest
                        })
                    }
                } else if (filteredChildren.length > 0) {
                    // include filtered children
                    filteredOptions.push({
                        children: filteredChildren,
                        ...rest
                    });
                }
            } else {
                // if there are no children, the filtered parent is the filtered option 
                if (filteredParents.includes(option)) {
                    filteredOptions.push(option);
                }
            }
        });
        console.log(filteredOptions);
        this.filteredOptions = filteredOptions;
    };

    private handleClear = () => {
        this.dispatchComboboxAction(ComboboxAction.ClearAndCloseListbox);
    };

    private getOptionIdFromValue = (value: string) => {
        return `${this.listboxId}-${value}`;
    };

    private getAriaActivedescendant = (): string => {
        const value = this.getValueFromActivedescendantIndex()
        return value
            ? this.getOptionIdFromValue(value)
            : ""
    };

    private getValueFromActivedescendantIndex = () => {
        const descendants: (HTMLLIElement | HTMLIcButtonElement)[] = Array.from(this.el.shadowRoot?.querySelectorAll('[role="option"]') || []);
        const selectAllBtn = this.el.shadowRoot?.querySelector<HTMLIcButtonElement>(`#${this.getOptionIdFromValue("select-all")}`);
        if (selectAllBtn) descendants.unshift(selectAllBtn);

        return this.activedescendantIndex !== null
        // ? this.optionEls[this.activedescendantIndex]?.dataset.value || null
        ? descendants[this.activedescendantIndex]?.dataset.value || null
        : null
    };

    private getLabelFromValue = (): string => {
        return !!this.value
            // ? this.optionEls.find(option => option.dataset.value === this.value)?.dataset.label || ""
            ? this.flattenedFilteredOptions.find(option => option.value === this.value)?.label || ""
            : ""
    };

    private getMenuOptions = (): IcMenuOption[] => {
        switch (this.loadingStatus) {
            case LoadingStatus.Loading:
                return [{ label: this.loadingLabel, value: "", loading: true }];
            case LoadingStatus.TimedOut:
                return [{ label: this.loadingErrorLabel, value: "", timedOut: true },]
            case LoadingStatus.Loaded:
                return this.isEmpptyOptions
                    ? [{ label: this.emptyOptionListText, value: "" }]
                    : this.filteredOptions;
        };
    };

    private clearUserInput = () => {
        const inputEl = this.el.shadowRoot?.querySelector<HTMLInputElement>(`#${this.inputId}`);
            if (inputEl) inputEl.value = "";
            this.filteredOptions = this.processedOptions;
    }

    render() {
        const {
            ariaActivedescendant,
            activedescendantIndex,
            disabled,
            fullWidth,
            helperText,
            hideLabel,
            inputId,
            label,
            listboxId,
            loadingStatus,
            name,
            open,
            placeholder,
            readonly,
            size,
            theme,
            value,
            valueString,
            validationStatus,
            validationText,
        } = this;

        renderHiddenInput(
              this.el,
              valueString,
              name || inputId,
              disabled,
        );

        const isUserInput = (): boolean => {
            const inputString = this.el.shadowRoot?.querySelector<HTMLInputElement>(`#${inputId}`)?.value;
            return !!inputString
        };

        const isClearable =
            !disabled && !!isUserInput();

        const Input = () => {
            return (
                <div class="select-container">
                    <input
                        role="combobox"
                        id={inputId}
                        ref={(el) => (this.inputEl = el)}
                        class="select-input"
                        aria-label={label}
                        aria-descibedby={helperText}
                        aria-autocomplete="list"
                        aria-controls={listboxId}
                        aria-expanded="false"
                        aria-haspopup={listboxId}
                        aria-activedescendant={loadingStatus === LoadingStatus.Loaded ? ariaActivedescendant : ""}
                        onClick={this.handleComboboxClick}
                        onBlur={this.handleBlur}
                        onKeyDown={this.handleKeyDown}
                        onInput={this.handleInput}
                        placeholder={placeholder}
                        value={this.getLabelFromValue()}
                    >
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
                    </input>
                    {isClearable && (
                        <ic-button
                            id="clear-button"
                            aria-label="Clear selection"
                            class="clear-button"
                            innerHTML={Clear}
                            onClick={this.handleClear}
                            size={size}
                            variant="icon-tertiary"
                        />
                    )}
                </div>
            )
        }

        return (
            <Host
                class={{
                    "ic-select-disabled": disabled,
                    [`ic-select-${size}`]: size !== "medium",
                    "ic-select-full-width": fullWidth,
                    [`ic-theme-${theme}`]: theme !== "inherit",
                }}
                onBlur={this.handleBlur}
            >
                <ic-input-container readonly={readonly}>
                    { !hideLabel && (
                        <ic-input-label for={inputId} label={label}>
                            <slot name="helper-text" slot="helper-text"></slot>
                        </ic-input-label>
                    )}
                    <ic-input-component-container
                        ref={(el) => (this.anchorEl = el)}
                        size={size}
                        fullWidth={fullWidth}
                        disabled={disabled}
                        readonly={readonly}
                        validationStatus={validationStatus}
                    >
                        <Input/>
                    </ic-input-component-container>
                    <ic-listbox
                        anchorEl={this.anchorEl}
                        inputLabel={label}
                        activedescendantIndex={loadingStatus === LoadingStatus.Loaded ? activedescendantIndex : null}
                        listboxId={listboxId}
                        open={open}
                        options={this.getMenuOptions()}
                        value={value}
                        onMenuOptionSelect={this.handleOptionClick}
                    />
                    {hasValidationStatus(validationStatus, disabled) && (
                        <ic-input-validation
                            class={{ "listbox-open": open }}
                            ariaLiveMode="polite"
                            status={validationStatus}
                            message={validationText}
                            for={inputId}
                        ></ic-input-validation>
                    )}
                </ic-input-container>
            </Host>
        )
    }
}