import { Component, Element, Host, Listen, Prop, State, Watch, h } from "@stencil/core";
import { IcMenuOption } from "../../utils/types";

@Component({
  tag: "ic-combobox",
  styleUrl: "ic-combobox.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Combobox {
    @Element() el!: HTMLIcComboboxElement;
    private focussedOption = 0;
    private anchorEl?: HTMLElement;
    // private emptyOptions: IcMenuOption[];
    // private loadingOptions: IcMenuOption[];
    // private listboxEl = this.el.querySelector("ic-listbox");
    // private activeDescendent = this.el.querySelectorAll("li .listbox-option")[this.focussedOption].getAttribute("id");

    @State() open = false;

    @Prop() label!: string;

    @Prop() searchable = false;

    /**
       * The text displayed when there are no options in the option list.
    */
    @Prop() emptyOptionListText = "No results found";

    /**
       * The message displayed whilst the options are being loaded externally.
    */
    @Prop() loadingLabel = "Loading...";


    /**
       * The possible selection options.
    */
    @Prop() options: IcMenuOption[] = [];
    @State() filteredOptions: IcMenuOption[] = this.options;
    @Watch("options")
    watchOptionsHandler(newValue: IcMenuOption[], oldValue: IcMenuOption[]): void {
        // if (newValue !== oldValue) this.filterOptions();
        console.log(newValue, oldValue);
    }

    // componentWillLoad() {
    //     this.emptyOptions = [{ label: this.emptyOptionListText, value: "" }];
    //     this.loadingOptions = [{ label: this.loadingLabel, value: "", loading: true }];
    // }

    // check for empty array
    // filter against input if searchable

    // private checkIsEmptyOptionsList = () => {
    //     if (!this.filteredOptions.length) this.filteredOptions = this.emptyOptions;
    // }

    // private deduplicateOptions = () => {
    //     const uniqueValues: string[] = [];
    //     const dedupedOptions: IcMenuOption[] = [];
    
    //     this.options.forEach((option) => {
    //         if (option.children) {
    //         //If an option has children, we will loop through them
    //         const dedupedChildren: IcMenuOption[] = [];
    //         option.children.forEach((child) => {
    //             if (uniqueValues.includes(child.value)) {
    //             console.warn(
    //                 `ic-select with label ${this.label} was populated with duplicate option (value: ${child.value}) which has been removed.`
    //             );
    //             } else {
    //             uniqueValues.push(child.value);
    //             dedupedChildren.push(child);
    //             }
    //         });
    //         // construct a modified option, inserting the deduplicated children alongside the original information
    //         dedupedOptions.push({
    //             ...option,
    //             children: dedupedChildren,
    //         });
    //         } else {
    //         // If an option does not have children, assess to see if it's value has been included already
    //         if (uniqueValues.includes(option.value)) {
    //             console.warn(
    //             `ic-select with label ${this.label} was populated with duplicate option (value: ${option.value}) which has been removed.`
    //             );
    //         } else {
    //             uniqueValues.push(option.value);
    //             dedupedOptions.push(option);
    //         }
    //         }
    //     });
    //     this.filteredOptions = dedupedOptions;
    // }

    @Listen("keyup")
    handleKeyup(ev: KeyboardEvent) {
        switch (ev.key) {
            case "ArrowUp":
                console.log("up");
                this.focussedOption = this.focussedOption--;
                break;
            case "ArrowDown":
                console.log("down");
                this.focussedOption = this.focussedOption++;
                break;
        }
    }

    // private openListbox = () => this.open = true;
    // private closeListbox = () => this.open = false;
    // const ToggleListbox = () = this.open = !this.open;
    // private nextOption = () => 
    // private prevOption = () =>

    private handleClick = () => {
        this.open = true;
        // if (this.listboxEl) this.listboxEl.open = true;
    }

    private handleBlur = () => {
        this.open = false;
        // if (this.listboxEl) this.listboxEl.open = false;
    }

    // private handleListboxKeydown = (event: KeyboardEvent) => {
    //     switch (event.key) {
    //         case "ArrowUp":
    //             console.log("up");
    //             this.focussedOption++
    //             break;
    //         case "ArrowDown":
    //             console.log("down");
    //             this.focussedOption--
    //             break;
    //     }
    // }

    // private getActiveDescendent = () => {
    //     const desc = this.el.querySelectorAll("li .listbox-option")[this.focussedOption].getAttribute("id");
    //     console.log(desc);
    //     return desc
    // }

    render() {
        const {
            label,
            open,
            options,
        } = this;

        const Combobox = () => {
            return (
                <input
                    role="combobox"
                    type="text"
                    aria-labelledby="label"
                    aria-autocomplete="list"
                    aria-controls="listbox"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    onClick={this.handleClick}
                    onBlur={this.handleBlur}
                />
            )
        }

        return (
            <Host
                onBlur={this.handleBlur}
            >
                <ic-input-container>
                    <ic-input-label id="label" label={label}></ic-input-label>
                </ic-input-container>
                <ic-input-component-container
                    ref={(el) => (this.anchorEl = el)}
                >
                    <Combobox/>
                </ic-input-component-container>
                <ic-listbox
                    anchorEl={this.anchorEl}
                    options={options}
                    open={open}
                    listboxId="test"
                />
            </Host>
        )
    }
}