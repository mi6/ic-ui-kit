import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";
import { IcInformationStatusOrEmpty, IcMenuOption, IcSearchMatchPositions, IcSizes, IcThemeMode } from "../../utils/types";
import { renderHiddenInput } from "../../utils/helpers";

enum SelectAction {
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
};

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
    // private focussedOption = 0;
    private anchorEl?: HTMLElement;
    private listboxId = `${this.inputId}-listbox`;
    private valueString = "";
    private processedOptions: IcMenuOption[]; // Deduplicated, sorted options
    private flattenedProcessedOptions: IcMenuOption[]; // To enable easily finding option by index
    // private emptyOptions: IcMenuOption[];
    // private loadingOptions: IcMenuOption[];
    // private listboxEl = this.el.querySelector("ic-listbox");

    private ariaActivedescendant = "";
    @State() activedescendantIndex: number | null = null; // todo: initial should be based on initial value of select
    @Watch("activedescendantIndex")
    activedescendantIndexHandler(): void {
        // console.log("activeDescIndex", newValue);
        this.ariaActivedescendant = this.getAriaActivedescendant();
    };
    @State() open = false;


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
    // @Watch("loading")
    // loadingHandler(newValue: boolean): void {
    // // n   ewValue ? this.triggerLoading() : this.setOptions();
    // console.log(newValue);
    // }

    /**
       * The possible selection options.
    */
    @Prop() options: IcMenuOption[] = [];
    @Watch("options")
    watchOptionsHandler(newValue: IcMenuOption[]): void {
        this.processedOptions = this.getProcessedOptions(newValue);
        this.flattenedProcessedOptions = this.getFlattenedOptions(this.processedOptions);
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
        console.log("value", newValue);
        this.valueString = this.value ? this.value.toString() : "";
    };
    // @State() initialValue = this.value;


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

    // componentWillLoad() {
        // this.emptyOptions = [{ label: this.emptyOptionListText, value: "" }];
        // this.loadingOptions = [{ label: this.loadingLabel, value: "", loading: true }];
    // }

    // check for empty array
    // filter against input if searchable

    // private checkIsEmptyOptionsList = () => {
    //     if (!this.filteredOptions.length) this.filteredOptions = this.emptyOptions;
    // }

    private getProcessedOptions = (options: IcMenuOption[]): IcMenuOption[] => {
        const dedupedOptions = this.getDeduplicatedOptions(options);
        return this.getSortedOptions(dedupedOptions);
    }

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
    
    /**
     * Flattens options with children so they can be referenced by index
     * Sorts options and removes disabled options
     */
    private getFlattenedOptions = (options: IcMenuOption[]) => {
        const flattenedOptions: IcMenuOption[] = [];
        if (options.length > 0 && options.map) {
            options.map((option) => {
                if (option.children) {
                option.children.map(
                    (option) => !option.disabled && flattenedOptions.push(option)
                );
                } else if (!option.disabled) {
                flattenedOptions.push(option);
                }
            });
            }
        return flattenedOptions;
    };

    private dispatchSelectAction = (action?: SelectAction, selectedOptionValue?: string) => {

    const maxIndex = this.flattenedProcessedOptions.length - 1;
    // console.log("maxIndex", maxIndex);
    let currIndex = this.activedescendantIndex || 0; //todo: based on value
    const pageSize = 10; // Recommended by W3C

    switch (action) {
        case SelectAction.FirstOption:
            this.dispatchSelectAction(SelectAction.OpenListbox);
            this.activedescendantIndex = 0;
            break;
        case SelectAction.LastOption:
            this.dispatchSelectAction(SelectAction.OpenListbox);
            this.activedescendantIndex = maxIndex;
            break;
        case SelectAction.NextOption:
            this.dispatchSelectAction(SelectAction.OpenListbox);
            this.activedescendantIndex = Math.min(maxIndex, ++currIndex);
            break;
        case SelectAction.PrevOption:
            this.dispatchSelectAction(SelectAction.OpenListbox);
            this.activedescendantIndex = Math.max(0, --currIndex);
            break;
        case SelectAction.PageUpOption:
            /**
             * Moves focus visually up 10 options
             * Or to first option
             */
            this.activedescendantIndex = Math.min(0, currIndex - pageSize);
            break;
        case SelectAction.PageDownOption:
            /**
             * Moves focus visually down 10 options
             * Or to last option
             */
            this.activedescendantIndex = Math.max(0, currIndex + pageSize);
            break;
        case SelectAction.MatchingOption:
            // todo
            // move visual focus to first matching option
            // if multiple keys before timeout, move visual focus ot first matching string
            // if same key repeated before timeout, cycle through options starting with that letter
            // if no match, don't move visual focus
            this.open=true;
            break
        case SelectAction.OpenListbox:
            this.open = true;
            break;
        case SelectAction.CloseListbox:
            this.open = false;
            this.activedescendantIndex = null;
            break;
        case SelectAction.SelectAndCloseListbox:
            this.open = false;
            this.value = selectedOptionValue ? selectedOptionValue : this.getValueFromActivedescendantIndex();
            this.activedescendantIndex = null;
            break;
        default:
            break;
    };
  };
  
    private getActionFromKeyboardEvent = (event: KeyboardEvent): SelectAction | undefined => {
        const { key, altKey } = event;

        // todo printable chars
        // todo voiceover shortcuts?
        // todo testing (e.g. pageUp/Down)

        if (this.open) {
            switch (key) {
                case "Enter":
                case " ":
                    event.preventDefault();
                    return SelectAction.SelectAndCloseListbox;
                case "Tab":
                    // tab needs default behaviour of moving to next focusable el
                    return SelectAction.SelectAndCloseListbox;
                case "Escape":
                    return SelectAction.CloseListbox;
                case "ArrowDown":
                    return SelectAction.NextOption;
                case "ArrowUp":
                    return altKey ? SelectAction.SelectAndCloseListbox : SelectAction.PrevOption;
                case "Home":
                    return SelectAction.FirstOption;
                case "End":
                    return SelectAction.LastOption;
                case "PageUp":
                    return SelectAction.PageUpOption;
                case "PageDown":
                    return SelectAction.PageDownOption;
                default:
                    return;        
            }
        } else {
            console.log("closed");
            switch (key) {
                case "ArrowUp":
                case "Home":
                    return SelectAction.FirstOption;
                case "ArrowDown":
                case "Enter":
                case "Space":
                    return SelectAction.OpenListbox;
                case "End":
                    return SelectAction.LastOption;
                default:
                    return;
            }
        }
    };

    private handleClick = () => {
        this.dispatchSelectAction(this.open ? SelectAction.CloseListbox : SelectAction.OpenListbox);
    }

    private handleBlur = () => {
        this.dispatchSelectAction(SelectAction.CloseListbox);
    }

    // private handleKeyUp = (event: KeyboardEvent) => {
    private handleKeyDown = (event: KeyboardEvent) => {
        const action = this.getActionFromKeyboardEvent(event);
        this.dispatchSelectAction(action);
    }

    private getOptionId = (value: string) => {
        return `${this.listboxId}-${value}`;
    }

    private getAriaActivedescendant = (): string => {
        return this.getOptionId(this.getValueFromActivedescendantIndex());
    };

    private getValueFromActivedescendantIndex = (): string => {
        return this.activedescendantIndex !==null
        ? this.flattenedProcessedOptions[this.activedescendantIndex].value
        : ""
    };

    private getLabelFromValue = (): string | undefined => {
       return this.flattenedProcessedOptions.find(option => option.value === this.valueString)?.label;
    };

    render() {
        const {
            ariaActivedescendant,
            activedescendantIndex,
            disabled,
            fullWidth,
            hideLabel,
            inputId,
            label,
            listboxId,
            name,
            open,
            options,
            placeholder,
            readonly,
            searchable,
            size,
            theme,
            valueString,
            validationStatus
        } = this;

        renderHiddenInput(
              this.el,
              valueString,
              name || inputId,
              disabled,
        );

        const SelectButton = () => {
            return (
                <div class="select-container">
                    <button
                        role="combobox"
                        id={inputId}
                        class="select-input"
                        aria-labelledby="label"
                        aria-autocomplete="list"
                        aria-controls={listboxId}
                        aria-expanded="false"
                        aria-haspopup={listboxId}
                        aria-activedescendant={ariaActivedescendant}
                        onClick={this.handleClick}
                        onBlur={this.handleBlur}
                        onKeyDown={this.handleKeyDown}
                    >
                        <ic-typography
                            variant="body"
                            class={{
                                "value-text": true,
                                "placeholder": !this.value,
                            }}
                            >
                            {this.getLabelFromValue() || placeholder}
                        </ic-typography>
                    </button>
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
                    <ic-input-container readonly={readonly}>
                        { !hideLabel && (
                            <ic-input-label for={inputId} label={label}>
                                <slot name="helper-text" slot="helper-text"></slot>
                            </ic-input-label>
                        )}
                    </ic-input-container>
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
                        activedescendantIndex={activedescendantIndex}
                        listboxId={listboxId}
                        open={open}
                        options={options}
                    />
                </Host>
            )
        )
    }
}