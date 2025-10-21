import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";
import { IcComboboxLoadingStatus, IcInformationStatusOrEmpty, IcMenuOption, IcSearchMatchPositions, IcSizes, IcThemeMode } from "../../utils/types";
import { addFormResetListener, hasValidationStatus, removeFormResetListener, renderHiddenInput } from "../../utils/helpers";
import { IcOptionSelectEventDetail } from "../ic-listbox/ic-listbox.types";
import Expand from "./assets/Expand.svg";
import Clear from "./assets/Clear.svg";
import { getAriaActivedescendant, getDeduplicatedOptions, getFlattenedOptions, getLabelsFromValues, getMenuOptions, getSortedOptions, getValueFromActivedescendantIndex } from "../../utils/combobox-helpers";
import { IcSelectAction } from "./ic-select-new.types";

/**
 * @slot helper-text - Content is set as the helper text for the select.
 * @slot icon - Content will be placed to the left of the select text input.
*/

let inputIds = 0;

@Component({
  tag: "ic-select-new",
  styleUrl: "ic-select-new.css",
  shadow: {
    delegatesFocus: true,
  },
})

export class SelectNew {
    @Element() el!: HTMLIcSelectNewElement;
    private inputId = `ic-select-new-input-${inputIds++}`;
    private anchorEl?: HTMLElement;
    private listboxId = `${this.inputId}-listbox`;
    private valueString = "";
    private valueArr: string[] = [];
    private processedOptions: IcMenuOption[]; // Deduplicated, sorted options. Not safe to reference by index or use length because of nesting
    private flattenedProcessedOptions: IcMenuOption[]; // Safe to reference by index and use length
    @Watch("processedOptions")
    processedOptionsHandler(): void {
        this.isEmptyOptions = (this.loadingStatus === IcComboboxLoadingStatus.Loaded && this.processedOptions.length === 0);
    }
    private ariaActivedescendant = ""; // id of list item corresponding to option which is the current active descendant
    private isEmptyOptions: boolean;
    private timeoutTimer?: number;

    @State() activedescendantIndex: number | null = null;
    @Watch("activedescendantIndex")
    activedescendantIndexHandler(): void {
        this.ariaActivedescendant = getAriaActivedescendant(this.listboxId, this.el, this.activedescendantIndex);
    };
    @State() open = false;
    @State() loadingStatus = IcComboboxLoadingStatus.Loaded;


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
        this.flattenedProcessedOptions = getFlattenedOptions(this.processedOptions);
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
     * For the multi-select variant, the value must be an array of option values.
     */
    @Prop({ mutable: true }) value: string | string[] | null = null;
    @Watch("value")
    valueChangedHandler(newValue: string | string[] | null) {
        this.valueString = newValue ? newValue.toString() : "";
        this.valueArr = this.valueString ? this.valueString.split(",") : [];
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
            console.warn("Searchable functionality can only be used with the single-select variant. Using the select-only variant.");
            this.searchable = false;
        };
    };

    disconnectedCallback() {
        removeFormResetListener(this.el, this.handleFormReset)
    };

    componentWillLoad() {
        this.processedOptions = this.getProcessedOptions(this.options);
        this.flattenedProcessedOptions = getFlattenedOptions(this.processedOptions);

        this.valueString = this.value ? this.value.toString() : "";
        this.valueArr = this.valueString ? this.valueString.split(",") : [];

        this.updateLoadingStatus();

        addFormResetListener(this.el, this.handleFormReset);
    };

     /**
     * Put the select component into loading state.
     * Replace options with the loading message. If timeout is enabled, set the timeout and once passed, replace options with the loading error message
     */
    private updateLoadingStatus = () => {
        if (this.loading) {
            this.loadingStatus = IcComboboxLoadingStatus.Loading;
            this.dispatchSelectAction(IcSelectAction.ClearAndCloseListbox);

            if (this.timeout) {
                this.timeoutTimer = window.setTimeout(() => {
                    this.loadingStatus = IcComboboxLoadingStatus.TimedOut;
                }, this.timeout);
            }
        } else {
            this.loadingStatus = IcComboboxLoadingStatus.Loaded;
            this.isEmptyOptions = this.processedOptions.length === 0;
            clearTimeout(this.timeoutTimer);
        };
    };

    private getProcessedOptions = (options: IcMenuOption[]): IcMenuOption[] => {
        const dedupedOptions = getDeduplicatedOptions(options, this.label);
        return getSortedOptions(dedupedOptions);
    };

    private dispatchSelectAction = (action?: IcSelectAction, selectedOptionValue?: string) => {
        const maxIndex = this.multiple ? this.flattenedProcessedOptions.length : this.flattenedProcessedOptions.length - 1 // select all button is also a descendant
        let currIndex = this.activedescendantIndex || 0;
        const pageSize = 10; // Recommended by W3C
        const selectedValue = selectedOptionValue
            ? selectedOptionValue
            : getValueFromActivedescendantIndex(this.el, this.listboxId, this.activedescendantIndex) || "";

        switch (action) {
            case IcSelectAction.FirstOption:
                this.dispatchSelectAction(IcSelectAction.OpenListbox);
                this.activedescendantIndex = 0;
                break;
            case IcSelectAction.LastOption:
                this.dispatchSelectAction(IcSelectAction.OpenListbox);
                this.activedescendantIndex = maxIndex;
                break;
            case IcSelectAction.NextOption:
                this.dispatchSelectAction(IcSelectAction.OpenListbox);
                this.activedescendantIndex = Math.min(maxIndex, ++currIndex);
                break;
            case IcSelectAction.PrevOption:
                this.dispatchSelectAction(IcSelectAction.OpenListbox);
                this.activedescendantIndex = Math.max(0, --currIndex);
                break;
            case IcSelectAction.PageUpOption:
                /**
                 * Moves focus visually up 10 options
                 * Or to first option
                 */
                this.activedescendantIndex = Math.min(0, currIndex - pageSize);
                // todo - change active descendant to be based on value so we can remove flattening logic and highlight options based on value
                break;
            case IcSelectAction.PageDownOption:
                /**
                 * Moves focus visually down 10 options
                 * Or to last option
                 */
                this.activedescendantIndex = Math.max(0, currIndex + pageSize);
                break;
            case IcSelectAction.MatchingOption:
                // todo select matching option on printable chars - see w3c guidance
                // if multiple keys before timeout, move visual focus to first matching string
                // if same key repeated before timeout, cycle through options starting with that letter
                // if no match, don't move visual focus
                this.open=true;
                break
                /**
                 * If a value is set, set the active descendant to the first selected option so it has visual focus when the listbox opens
                 * Open the listbox
                 */
            case IcSelectAction.OpenListbox:
                currIndex = this.getFirstSelectedOptionIndex();
                this.activedescendantIndex = currIndex;
                this.open = true;
                break;
            case IcSelectAction.CloseListbox:
                this.open = false;
                this.activedescendantIndex = null;
                break;
            case IcSelectAction.ToggleSelected:
                if(this.valueArr.includes(selectedValue)) {
                    this.value = this.valueArr.filter(value => value !== selectedValue);
                } else {
                    this.value = [...this.valueArr, selectedValue];
                };
                break;
            case IcSelectAction.ToggleSelectAll:
                this.value = this.valueArr.length === this.flattenedProcessedOptions.length
                    ? []
                    : this.flattenedProcessedOptions.flatMap(opt => opt.value);
                break;
            case IcSelectAction.SelectAndCloseListbox:
                this.open = false;
                this.value = selectedValue;
                this.activedescendantIndex = null;
                break;
            case IcSelectAction.ClearAndCloseListbox:
                this.value = null;
                this.open = false;
                this.activedescendantIndex = null;
            default:
                break;
        };
    };
  
    private getActionFromKeyboardEvent = (event: KeyboardEvent): IcSelectAction | undefined => {
        const { key, altKey } = event;

        // todo printable chars
        // todo voiceover shortcuts?
        // todo testing (e.g. pageUp/Down)

        if (this.open) {
            switch (key) {
                case "Enter":
                case " ":
                    event.preventDefault();
                    return IcSelectAction.SelectAndCloseListbox;
                case "Tab":
                    // Tab needs default behaviour of moving to next focusable el.
                    // This is not consistent with native select but is consistent with combobox behaviour and is a W3C recommendation
                    return IcSelectAction.SelectAndCloseListbox;
                case "Escape":
                    return IcSelectAction.CloseListbox;
                case "ArrowDown":
                    return IcSelectAction.NextOption;
                case "ArrowUp":
                    return altKey ? IcSelectAction.SelectAndCloseListbox : IcSelectAction.PrevOption;
                case "Home":
                    return IcSelectAction.FirstOption;
                case "End":
                    return IcSelectAction.LastOption;
                case "PageUp":
                    return IcSelectAction.PageUpOption;
                case "PageDown":
                    return IcSelectAction.PageDownOption;
                default:
                    return;        
            }
        } else {
            switch (key) {
                case "ArrowUp":
                case "ArrowDown":
                case "Enter":
                case "Space":
                    return IcSelectAction.OpenListbox;
                case "Home":
                    return IcSelectAction.FirstOption;
                case "End":
                    return IcSelectAction.LastOption;
                default:
                    return;
            }
        }
    };

    private handleOptionClick = (event: CustomEvent<IcOptionSelectEventDetail>) => {
        const action = this.multiple ? IcSelectAction.ToggleSelected : IcSelectAction.SelectAndCloseListbox;
        this.dispatchSelectAction(action, event.detail.value);
    };

    private handleSelectButtonClick = () => {
        this.dispatchSelectAction(this.open ? IcSelectAction.CloseListbox : IcSelectAction.OpenListbox);
    };

    private handleBlur = () => {
        this.dispatchSelectAction(IcSelectAction.CloseListbox);
    };

    private handleClear = () => {
        this.dispatchSelectAction(IcSelectAction.ClearAndCloseListbox);
    };

    private handleKeyDown = (event: KeyboardEvent) => {
        const action = this.getActionFromKeyboardEvent(event);
        this.dispatchSelectAction(action);
    };

    private handleSelectAll = () => {
        this.dispatchSelectAction(IcSelectAction.ToggleSelectAll);
    }

    private handleFormReset = () => {
        this.dispatchSelectAction(IcSelectAction.ClearAndCloseListbox);
    };

    /**
     * 
     * @returns the index of the first option that is in valueArr, otherwise 0
     */
    private getFirstSelectedOptionIndex = () => {
        const firstSelectedOption = this.flattenedProcessedOptions.find(option => {
            return this.valueArr.includes(option.value)
        });
        return firstSelectedOption ? this.flattenedProcessedOptions.indexOf(firstSelectedOption) : 0;
    };

    render() {
        const {
            ariaActivedescendant,
            activedescendantIndex,
            disabled,
            emptyOptionListText,
            form,
            fullWidth,
            helperText,
            hideLabel,
            inputId,
            isEmptyOptions,
            label,
            listboxId,
            loading,
            loadingErrorLabel,
            loadingLabel,
            loadingStatus,
            multiple,
            name,
            open,
            placeholder,
            processedOptions,
            readonly,
            searchable,
            showClearButton,
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

        const isClearable =
            !disabled && !!valueString && !loading && showClearButton;

        const SelectButton = () => {
            return (
                <div class="select-container">
                    <button
                        role="combobox"
                        id={inputId}
                        class="select-button"
                        aria-label={label}
                        aria-describedby={helperText}
                        aria-autocomplete="list"
                        aria-controls={listboxId}
                        aria-expanded="false"
                        aria-haspopup={listboxId}
                        aria-activedescendant={loadingStatus === IcComboboxLoadingStatus.Loaded ? ariaActivedescendant : ""}
                        onClick={this.handleSelectButtonClick}
                        onBlur={this.handleBlur}
                        onKeyDown={this.handleKeyDown}
                        disabled={disabled || readonly}
                        form={form}
                    >
                        <ic-typography
                            variant="body"
                            class={{
                                "value-text": true,
                                "placeholder": !this.value,
                            }}
                            >
                            {getLabelsFromValues(this.valueArr, this.flattenedProcessedOptions) || placeholder}
                        </ic-typography>
                        <div class="select-button-end">
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
                            disabled={disabled}
                        />
                    )}
                </div>
            )
        }

        return (
            searchable ? (
                <ic-combobox {...this}/>
            ) : (
                <Host
                    class={{
                        "ic-select-disabled": disabled,
                        [`ic-select-${size}`]: size !== "medium",
                        "ic-select-full-width": fullWidth,
                        [`ic-theme-${theme}`]: theme !== "inherit",
                    }}
                    onBlur={this.handleBlur}
                >
                    <ic-input-container
                        readonly={readonly}
                    >
                        { !hideLabel && (
                            <ic-input-label
                                for={inputId}
                                label={label}
                                disabled={disabled}
                                readonly={readonly}
                            >
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
                        <SelectButton/>
                    </ic-input-component-container>
                        <ic-listbox
                            anchorEl={this.anchorEl}
                            inputLabel={label}
                            activedescendantIndex={loadingStatus === IcComboboxLoadingStatus.Loaded ? activedescendantIndex : null}
                            listboxId={listboxId}
                            open={open}
                            options={getMenuOptions(processedOptions, loadingStatus, isEmptyOptions, loadingLabel, loadingErrorLabel, emptyOptionListText)}
                            value={value}
                            onMenuOptionSelect={this.handleOptionClick}
                            onMenuOptionSelectAll={this.handleSelectAll}
                            hasSelectAll={multiple}
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
        )
    }
}