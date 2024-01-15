import {
  Component,
  Host,
  h,
  Prop,
  State,
  Listen,
  Element,
  Event,
  EventEmitter,
  Watch,
} from "@stencil/core";
import {
  hasValidationStatus,
  isSlotUsed,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
  renderHiddenInput,
  checkResizeObserver,
} from "../../utils/helpers";
import {
  IcInformationStatusOrEmpty,
  IcOrientation,
  IcSizesNoLarge,
  IcValueEventDetail,
} from "../../utils/types";
import { IcChangeEventDetail } from "./ic-radio-group.types";

@Component({
  tag: "ic-radio-group",
  styleUrl: "ic-radio-group.css",
  shadow: true,
})
export class RadioGroup {
  private radioContainer: HTMLDivElement;
  private radioOptions: HTMLIcRadioOptionElement[];
  private resizeObserver: ResizeObserver = null;

  @Element() el: HTMLIcRadioGroupElement;

  @State() checkedValue: string = "";
  @State() currentOrientation: IcOrientation;
  @State() initialOrientation: IcOrientation;
  @State() selectedChild: number = -1;

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled: boolean = false;

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText: string;

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel: boolean = false;

  /**
   * The label for the radio group to be displayed.
   */
  @Prop() label!: string;

  /**
   * The name for the radio group to differentiate from other groups.
   */
  @Prop() name!: string;

  /**
   * The orientation of the radio buttons in the radio group. If there are more than two radio buttons in a radio group or either of the radio buttons use the `additional-field` slot, then the orientation will always be vertical.
   */
  @Prop() orientation: IcOrientation = "vertical";

  /**
   * If `true`, the radio group will require a value.
   */
  @Prop() required: boolean = false;

  /**
   * The size of the radio group component.
   */
  @Prop() size?: IcSizesNoLarge = "default";

  /**
   * @deprecated This prop should not be used anymore. Set prop `size` to "small" instead.
   */
  @Prop() small?: boolean = false;

  /**
   * The validation status - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus: IcInformationStatusOrEmpty = "";
  /**
   * The validation text - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationText: string = "";

  @Watch("orientation")
  orientationChangeHandler(): void {
    this.initialOrientation = this.orientation;
  }

  /**
   * Emitted when a user selects a radio.
   */
  @Event() icChange: EventEmitter<IcChangeEventDetail>;

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }
  }

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);

    this.orientationChangeHandler();
    this.currentOrientation = this.initialOrientation;
  }

  componentDidLoad(): void {
    this.radioOptions = Array.from(this.el.querySelectorAll("ic-radio-option"));

    this.radioOptions.forEach((radioOption, index) => {
      if (!radioOption.selected) {
        radioOption.selected = this.checkedValue === radioOption.value;
      }
      radioOption.name = this.name;
      radioOption.groupLabel = this.label;
      if (radioOption.selected) {
        this.selectedChild = index;
        this.checkedValue = radioOption.value;
      }
    });
    this.radioOptions[0].shadowRoot.querySelector("input").tabIndex =
      this.selectedChild > 0 ? -1 : 0;

    if (
      this.initialOrientation === "horizontal" &&
      this.radioOptions !== undefined &&
      (this.radioOptions.length > 2 ||
        (this.radioOptions.length === 2 &&
          (isSlotUsed(this.radioOptions[0], "additional-field") ||
            isSlotUsed(this.radioOptions[1], "additional-field"))))
    ) {
      this.currentOrientation = "vertical";
    }

    checkResizeObserver(this.runResizeObserver);

    onComponentRequiredPropUndefined(
      [
        { prop: this.label, propName: "label" },
        { prop: this.name, propName: "name" },
      ],
      "Radio Group"
    );
  }

  @Listen("icCheck")
  selectHandler(event: CustomEvent<IcValueEventDetail>): void {
    this.checkedValue = event.detail.value as string;
    const selectedOption = event.target as HTMLIcRadioOptionElement;
    this.icChange.emit({
      value: this.checkedValue,
      selectedOption: {
        radio: selectedOption,
        textFieldValue: selectedOption?.querySelector("ic-text-field")?.value,
      },
    });

    if (this.radioOptions !== undefined) {
      this.radioOptions.forEach((radioOption, index) => {
        radioOption.selected = this.checkedValue === radioOption.value;
        if (radioOption.selected) {
          this.selectedChild = index;
        }
      });
      this.radioOptions[0].shadowRoot.querySelector("input").tabIndex =
        this.selectedChild > 0 ? -1 : 0;
    }
  }

  @Listen("icSelectedChange")
  changeHandler(): void {
    const selectedOption = this.radioOptions.findIndex(
      (radioOption) => radioOption.selected
    );
    if (selectedOption < 0) {
      this.radioOptions[0].shadowRoot.querySelector("input").tabIndex = 0;
      this.selectedChild = selectedOption;
    }
  }

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.checkOrientation();
    });

    this.resizeObserver.observe(this.el);
  };

  private checkOrientation() {
    if (this.initialOrientation === "horizontal") {
      let totalWidth = 0;
      const radioOptionGap = 40;
      for (let i = 0; i < this.radioOptions.length; i++) {
        totalWidth += this.radioOptions[i].clientWidth;
        if (i < this.radioOptions.length - 1) {
          totalWidth += radioOptionGap;
        }
      }

      if (
        this.currentOrientation === "horizontal" &&
        totalWidth > this.radioContainer.clientWidth
      ) {
        this.currentOrientation = "vertical";
      } else if (
        this.currentOrientation === "vertical" &&
        totalWidth < this.radioContainer.clientWidth
      ) {
        this.currentOrientation = "horizontal";
      }
    }
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        this.radioOptions[
          this.getNextItemToSelect(this.selectedChild, true)
        ].click();
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowLeft":
        this.radioOptions[
          this.getNextItemToSelect(this.selectedChild, false)
        ].click();
        event.preventDefault();
    }
  };

  private getNextItemToSelect = (
    currentItem: number,
    movingDown: boolean
  ): number => {
    const numRadios = this.radioOptions.length - 1;

    if (currentItem < 1) {
      currentItem = 0;
    }

    let nextItem = movingDown ? currentItem + 1 : currentItem - 1;

    //check if wrap around necessary
    if (nextItem < 0) {
      nextItem = numRadios;
    } else if (nextItem > numRadios) {
      nextItem = 0;
    }

    //if next item is disabled then find next
    if (this.radioOptions[nextItem].disabled) {
      nextItem = this.getNextItemToSelect(nextItem, movingDown);
    }

    return nextItem;
  };

  render() {
    renderHiddenInput(
      true,
      this.el,
      this.name,
      this.checkedValue,
      this.disabled
    );

    return (
      <Host
        onKeyDown={this.handleKeyDown}
        class={{ small: this.small || this.size === "small" }}
      >
        <div
          role="radiogroup"
          aria-label={`${this.label}${this.required ? ", required" : ""}`}
        >
          {!this.hideLabel && (
            <ic-input-label
              class={{ [`${this.validationStatus}`]: true }}
              label={this.label}
              helperText={this.helperText}
              required={this.required}
              disabled={this.disabled}
            ></ic-input-label>
          )}
          <div
            class={{
              "radio-buttons-container": true,
              horizontal: this.currentOrientation === "horizontal",
            }}
            ref={(el) => (this.radioContainer = el)}
          >
            <slot></slot>
          </div>
        </div>
        {hasValidationStatus(this.validationStatus, this.disabled) && (
          <ic-input-validation
            ariaLiveMode="polite"
            status={this.validationStatus}
            message={this.validationText}
          ></ic-input-validation>
        )}
      </Host>
    );
  }
}
