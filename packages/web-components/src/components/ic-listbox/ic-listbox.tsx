import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h,
} from "@stencil/core";
import {
  createPopper,
  Instance as PopperInstance,
  Options,
} from "@popperjs/core";
import { IcMenuOption } from "../../utils/types";

// enum ListboxAction {
//   Next,
//   Previous,
//   First,
//   Last,
//   PageUp,
//   PageDown,
//   Open,
//   Close,
//   SelectAndClose,
// };

@Component({
  tag: "ic-listbox",
  styleUrl: "ic-listbox.css",
  scoped: true,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Listbox {
  @Element() el!: HTMLIcListboxElement;

  // private listbox?: HTMLUListElement;
  // private options: IcMenuOption[] = [
  //   { label: "Cappuccino", value: "cappuccino", description: "Coffee frothed up with pressurised steam" },
  //   { label: "Americano", value: "americano", description: "Espresso coffee diluted with hot water" },
  //   { label: "Mocha", value: "mocha", description: "Coffee with chocolate" },
  // ];
  private popperInstance: PopperInstance | null;
  private flattenedOptions: IcMenuOption[] = [];

  @State() popperProps: Partial<Options> = {};

  @Prop() activedescendantIndex: number | null = null;
  // @Watch("activedescendantIndex")
  // watchActivedescendantIndexHandler(newValue: number | null) {
  //   console.log(newValue);
  // };

  /**
     * The reference to an anchor element the menu will position itself from when rendered.
  */
  @Prop() anchorEl?: HTMLElement;

  /**
   * The ID of the menu.
   */
  @Prop() listboxId!: string;

  /**
     * The possible menu selection options.
     */
  @Prop() options!: IcMenuOption[];
  @Watch("options")
  watchOptionsHandler() {
    this.loadFlattenedOptions();
  }

  /**
     * If `true`, the menu will be displayed open.
     */
    @Prop({ reflect: true }) open!: boolean;
    @Watch("open")
    watchOpenHandler(): void {
      console.log("isOpen", this.open);
      if (!this.open && this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
    }

  /**
   * @internal Emitted when the flattened options have been set.
   */
  @Event() flatttenedOptionsSet: EventEmitter<{ options: IcMenuOption[] }>;

  // @Event() activedescendantUpdated: EventEmitter<{activedescendant: string}>;

  // @Event() listboxToggledOpen: EventEmitter<{open: boolean, value: string};

  disconnectedCallback(): void {
    this.popperInstance?.destroy();
  }

  componentWillLoad(): void {
    this.loadFlattenedOptions();
  }

  componentDidRender(): void {
    if (this.open && !this.popperInstance && this.anchorEl) {
      this.initPopperJs(this.anchorEl);
    }
  }

  /**
     * @internal Used to initialize popperJS with an anchor element.
     * 5/12/2023: Tested with Floating UI, however, discovered inconsistent
     * boundary behaviour so sticking with PopperJS.
    */
  @Method()
  async initPopperJs(anchor: HTMLElement): Promise<void> {
    // Placements set to "-start" to accommodate for custom menu width - menu should always be aligned to the left
    this.popperInstance = createPopper(anchor, this.el, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 7],
          },
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: ["top-start"],
            rootBoundary: "viewport",
          },
        },
      ],
      ...this.popperProps,
    });
  }

  /**
   * @internal This method allows props to be added to the PopperJS createPopper instance outside of the menu
   * @param props object - createPopper props set externally
   */
  @Method()
    async setExternalPopperProps<T extends Partial<Options>>(props: T) {
      this.popperProps = props;
  }

  /**
   * Flattens options with children so they can be referenced by index
   * Sorts options and removes disabled options
   */
  private loadFlattenedOptions = () => {
    const flattenedOptions: IcMenuOption[] = [];
    if (this.options.length > 0 && this.options.map) {
        this.options.map((option) => {
          if (option.children) {
            option.children.map(
              (option) => !option.disabled && flattenedOptions.push(option)
            );
          } else if (!option.disabled) {
            flattenedOptions.push(option);
          }
        });
      }
    this.flattenedOptions = this.getSortedOptions(flattenedOptions);
    this.flatttenedOptionsSet.emit({ options: this.flattenedOptions });
  }

  private getSortedOptions = (options: IcMenuOption[]): IcMenuOption[] => {
    let sorted: IcMenuOption[] = [];
    if (options.sort) {
      sorted = options.sort((optionA, optionB) =>
        optionA.recommended && !optionB.recommended ? -1 : 0
      );
    }
    return sorted;
  };

  // private dispatchListboxAction = (action: ListboxAction | null) => {

  //   const maxIndex = this.flattenedOptions.length - 1;
  //   const pageSize = 10; // Recommended by W3C

  //   switch (action) {
  //     // ToDo - default option should be based on current value
  //     case ListboxAction.Next:
  //       /**
  //        * Moves focus styling to next option
  //        * Does nothing if focus styling is on the last option
  //        */
  //       this.activedescendantIndex = this.activedescendantIndex
  //         ? Math.min(maxIndex, this.activedescendantIndex++)
  //         : 0
  //       break;
  //     case ListboxAction.Previous:
  //        /**
  //        * Moves focus styling to previous option
  //        * Does nothing if focus styling is on the first option
  //        */
  //       this.activedescendantIndex = this.activedescendantIndex
  //       ? Math.max(0, this.activedescendantIndex--)
  //       : 0
  //       break;
  //     case ListboxAction.First:
  //       /**
  //        * Moves focus styling to first option
  //        */
  //       this.activedescendantIndex = 0;
  //       break
  //     case ListboxAction.Last:
  //       /**
  //        * Moves focus styling to last option
  //        */
  //       this.activedescendantIndex = maxIndex;
  //       break;
  //     case ListboxAction.PageUp:
  //       /**
  //        * Jumps focus styling up visually by 10 options (or to first option)
  //        */
  //       this.activedescendantIndex = this.activedescendantIndex
  //       ? Math.max(0, this.activedescendantIndex - pageSize)
  //       : 0
  //       break;
  //     case ListboxAction.PageDown:
  //       /**
  //        * Jumps focus styling down visually by 10 options (or to last option)
  //        */
  //       this.activedescendantIndex = this.activedescendantIndex
  //       ? Math.min(maxIndex, this.activedescendantIndex + pageSize)
  //       : 0
  //       break;
  //     case ListboxAction.Open:
  //     case ListboxAction.Close:
  //     case ListboxAction.SelectAndClose:
  //       // todo
  //   };
  // };
  
  // private getActionFromKeyboardEvent = (event: KeyboardEvent): ListboxAction | null => {
  //   if (this.open) {
  //     const { key, altKey } = event;
  //     switch (key) {
  //       case "ArrowUp":
  //         return altKey ? ListboxAction.SelectAndClose : ListboxAction.Previous;
  //       case "ArrowDown":
  //         return ListboxAction.Next;
  //       case "Enter":
  //       case "Space":
  //         return ListboxAction.SelectAndClose;
  //       case "Escape":
  //         return ListboxAction.Close;
  //       case "Home":
  //         return ListboxAction.First;
  //       case "End":
  //         return ListboxAction.Last;
  //       case "PageUp":
  //         return ListboxAction.PageUp;
  //       case "PageDown":
  //         return ListboxAction.PageDown;
  //     };
  //   };
  //   return null;
  // };
  
  // private handleKeyUp = (event: KeyboardEvent) => {
  //   this.dispatchListboxAction(this.getActionFromKeyboardEvent(event));
  // }

  // private handleOptionClick = (event: MouseEvent) => {
  //   console.log(event);
  //   // get option from event and update state
  //   // dispatch ListboxAction.SelectAndClose
  // }

  private getOptionId = (value: string): string => {
    return `${this.listboxId}-${value}`;
  };

  private optionHasVisualFocus = (value: string): boolean => {
    return this.activedescendantIndex !== null
      ? this.flattenedOptions[this.activedescendantIndex].value === value
      : false
  };


  render () {
    const {
      listboxId,
      options,
      open,
    } = this;

    return (
      <Host
        class={{
          "ic-listbox-open": open && options.length !== 0,
        }}
      >
        <ul
          role="listbox"
          class="listbox"
          id={listboxId}
          // ref={(el) => this.listbox = el}
        >
          {options.map((option) => {
            return (
              <li
                id={this.getOptionId(option.value)}
                role="option"
                class={{
                  "option": true,
                  "focused-option": this.optionHasVisualFocus(option.value)
                }}
              >
                <ic-typography variant="label">
                  {option.label}
                </ic-typography>
              </li>
            )
          })}

        </ul>
      </Host>
    )
  }
}
