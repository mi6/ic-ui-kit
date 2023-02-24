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
} from "@stencil/core";
import {
  hasValidationStatus,
  isSlotUsed,
  onComponentRequiredPropUndefined,
  renderHiddenInput,
} from "../../utils/helpers";
import { IcInformationStatusOrEmpty, IcOrientation } from "../../utils/types";
import { IcValueEventDetail } from "../../interface";

@Component({
  tag: "ic-radio-group",
  styleUrl: "ic-radio-group.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class RadioGroup {
  private radioOptions: HTMLIcRadioOptionElement[];

  @Element() host: HTMLIcRadioGroupElement;

  /**
   * The label for the radio group to be displayed.
   */
  @Prop() label!: string;

  /**
   * The name for the radio group to differentiate from other groups.
   */
  @Prop() name!: string;

  /**
   * If `true`, the radio group will require a value.
   */
  @Prop() required: boolean = false;

  /**
   * The orientation of the radio buttons in the radio group. If there are more than two radio buttons in a radio group or either of the radio buttons use the `additional-field` slot, then the orientation will always be vertical.
   */
  @Prop({ reflect: true, mutable: true }) orientation: IcOrientation =
    "vertical";

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel: boolean = false;

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled: boolean = false;

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText: string;

  /**
   * If `true`, the small styling will be applied to the radio group.
   */
  @Prop() small: boolean = false;
  /**
   * The validation status - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus: IcInformationStatusOrEmpty = "";
  /**
   * The validation text - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationText: string = "";
  /**
   * The checked state.
   */
  @State() checkedValue: string = "";
  @State() selectedChild: number = -1;

  /**
   * Emitted when a user selects a radio.
   */
  @Event() icChange: EventEmitter<IcValueEventDetail>;

  @Listen("icCheck")
  selectHandler(event: CustomEvent<IcValueEventDetail>): void {
    this.checkedValue = event.detail.value;
    this.icChange.emit({ value: this.checkedValue });

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

  private handleKeyDown = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        this.radioOptions[
          this.getNextItemToSelect(this.selectedChild, true)
        ].selected = true;
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowLeft":
        this.radioOptions[
          this.getNextItemToSelect(this.selectedChild, false)
        ].selected = true;
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

  componentDidLoad(): void {
    this.radioOptions = Array.from(
      this.host.querySelectorAll("ic-radio-option")
    );

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
      this.orientation === "horizontal" &&
      this.radioOptions !== undefined &&
      (this.radioOptions.length > 2 ||
        (this.radioOptions.length === 2 &&
          (isSlotUsed(this.radioOptions[0], "additional-field") ||
            isSlotUsed(this.radioOptions[1], "additional-field"))))
    ) {
      this.orientation = "vertical";
    }

    onComponentRequiredPropUndefined(
      [
        { prop: this.label, propName: "label" },
        { prop: this.name, propName: "name" },
      ],
      "Radio Group"
    );
  }

  render() {
    renderHiddenInput(
      true,
      this.host,
      this.name,
      this.checkedValue,
      this.disabled
    );

    return (
      <Host onKeyDown={this.handleKeyDown}>
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
          <div class="radio-buttons-container">
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
