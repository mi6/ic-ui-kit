import {
  Component,
  Host,
  h,
  Prop,
  Listen,
  Element,
  Event,
  EventEmitter,
} from "@stencil/core";
import {
  getInputDescribedByText,
  hasValidationStatus,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
} from "../../utils/helpers";
import { IcInformationStatusOrEmpty, IcSizes } from "../../utils/types";
import { IcChangeEventDetail } from "./ic-checkbox-group.types";

@Component({
  tag: "ic-checkbox-group",
  styleUrl: "ic-checkbox-group.css",
  shadow: true,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class CheckboxGroup {
  @Element() el: HTMLIcCheckboxGroupElement;

  /**
   * If `true`, the checkbox group will be set to the disabled state.
   */
  @Prop() disabled: boolean = false;

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText: string = "";

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel: boolean = false;

  /**
   * The label for the checkbox group to be displayed.
   */
  @Prop() label!: string;

  /**
   * The name for the checkbox group to differentiate from other groups.
   */
  @Prop() name!: string;

  /**
   * If `true`, the checkbox group will require a value.
   */
  @Prop() required: boolean = false;

  /**
   * The size of the checkboxes to be displayed. This does not affect the font size of the label.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * @deprecated This prop should not be used anymore. Set prop `size` to "small" instead.
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
   * Emitted when a checkbox is checked.
   */
  @Event() icChange: EventEmitter<IcChangeEventDetail>;

  @Listen("icChange")
  handleChange(ev: CustomEvent): void {
    //don't pass on the event if it has come from slotted text field
    //otherwise any icChange handler bound to the checkbox group will also run
    if ((ev.target as HTMLElement).tagName === "IC-TEXT-FIELD") {
      ev.stopImmediatePropagation();
    }
  }

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    Array.from(this.el.querySelectorAll("ic-checkbox")).forEach((checkbox) => {
      if (!checkbox.name) checkbox.name = this.name;
      checkbox.groupLabel = this.label;
    });

    onComponentRequiredPropUndefined(
      [
        { prop: this.label, propName: "label" },
        { prop: this.name, propName: "name" },
      ],
      "Checkbox Group"
    );
  }

  @Listen("icCheck")
  selectHandler(ev: CustomEvent): void {
    const checkedOptions = Array.from(
      this.el.querySelectorAll("ic-checkbox")
    ).filter((checkbox) => checkbox.checked && !checkbox.disabled);
    this.icChange.emit({
      value: checkedOptions.map((opt) => opt.value),
      checkedOptions: checkedOptions.map((opt) => ({
        checkbox: opt,
        textFieldValue: opt.querySelector("ic-text-field")?.value,
      })),
      selectedOption: ev.target as HTMLIcCheckboxElement,
    });
  }

  render() {
    const describedBy = getInputDescribedByText(
      this.name,
      this.helperText !== "",
      this.validationStatus !== ""
    );
    const hadValidationStatus = hasValidationStatus(
      this.validationStatus,
      this.disabled
    );

    return (
      <Host class={{ ["small"]: this.small, [`${this.size}`]: true }}>
        {(this.validationStatus === "error" ||
          this.required ||
          this.hideLabel) && (
          <span
            id="screenReaderOnlyText"
            class="screen-reader-only-text"
            aria-hidden="true"
          >
            {this.label}{" "}
            {this.validationStatus === "error" ? "invalid data " : null}{" "}
            {this.required ? "required" : null}
          </span>
        )}
        <fieldset
          id={this.name}
          aria-labelledby={`${
            this.validationStatus === "error" || this.required || this.hideLabel
              ? "screenReaderOnlyText"
              : ""
          } ${describedBy}`.trim()}
          disabled={this.disabled}
        >
          {!this.hideLabel && (
            <legend>
              <ic-input-label
                class={{ [`${this.validationStatus}`]: true }}
                label={this.label}
                helperText={this.helperText}
                required={this.required}
                disabled={this.disabled}
                for={this.name}
              ></ic-input-label>
            </legend>
          )}
          <div class="checkboxes-container">
            <slot></slot>
          </div>
        </fieldset>
        {hadValidationStatus && (
          <ic-input-validation
            for={this.name}
            ariaLiveMode="polite"
            status={this.validationStatus}
            message={this.validationText}
          ></ic-input-validation>
        )}
      </Host>
    );
  }
}
