import {
  Component,
  Host,
  h,
  Prop,
  Listen,
  Element,
  Event,
  EventEmitter,
  Watch,
} from "@stencil/core";
import {
  getInputDescribedByText,
  hasValidationStatus,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
} from "../../utils/helpers";
import {
  IcAriaLive,
  IcInformationStatusOrEmpty,
  IcSizes,
  IcThemeMode,
} from "../../utils/types";
import { IcChangeEventDetail } from "./ic-checkbox-group.types";

const CHECKBOX_SELECTOR = "ic-checkbox";

/**
 * @slot helper-text - Content is set as the helper text for the checkbox group.
 */
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
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

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

  @Watch("label")
  @Watch("name")
  labelNameHandler(
    newValue: string,
    oldValue: string,
    propName: "label" | "name"
  ): void {
    Array.from(this.el.querySelectorAll(CHECKBOX_SELECTOR)).forEach(
      (checkbox) => {
        if (propName === "label") checkbox.groupLabel = newValue;
        else if (checkbox.name === oldValue) {
          // If the checkbox name has been set by the parent, then override it
          checkbox.name = newValue;
        }
      }
    );
  }

  /**
   * If `true`, the checkbox group will require a value.
   */
  @Prop() required: boolean = false;

  /**
   * The size of the checkboxes to be displayed. This does not affect the font size of the label.
   */
  @Prop() size: IcSizes = "medium";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";
  @Watch("theme")
  watchThemeHandler(newValue: IcThemeMode): void {
    Array.from(this.el.querySelectorAll(CHECKBOX_SELECTOR)).forEach(
      (checkbox) => {
        checkbox.theme = newValue;
      }
    );
  }

  /**
   * The value of the `aria-live` attribute on the validation message.
   */
  @Prop() validationAriaLive: IcAriaLive = "polite";

  /**
   * The validation status - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus: IcInformationStatusOrEmpty = "";

  /**
   * The text to display as the validation message.
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
    this.watchThemeHandler(this.theme);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [
        { prop: this.label, propName: "label" },
        { prop: this.name, propName: "name" },
      ],
      "Checkbox Group"
    );
  }

  @Listen("icCheck")
  selectHandler({ target }: CustomEvent): void {
    const checkedOptions = Array.from(
      this.el.querySelectorAll(CHECKBOX_SELECTOR)
    ).filter(({ checked, disabled }) => checked && !disabled);
    this.icChange.emit({
      value: checkedOptions.map(({ value }) => value),
      checkedOptions: checkedOptions.map((opt) => ({
        checkbox: opt,
        textFieldValue: opt.querySelector("ic-text-field")?.value,
      })),
      selectedOption: target as HTMLIcCheckboxElement,
    });
  }

  render() {
    const {
      disabled,
      helperText,
      hideLabel,
      label,
      name,
      required,
      size,
      theme,
      validationAriaLive,
      validationStatus,
      validationText,
    } = this;

    const describedBy = getInputDescribedByText(
      this.el,
      name,
      helperText !== "",
      validationStatus !== ""
    );

    const renderSRText = validationStatus === "error" || required || hideLabel;

    const showValidation = hasValidationStatus(validationStatus, disabled);

    return (
      <Host
        class={{
          "ic-checkbox-group-disabled": !!disabled,
          [`ic-checkbox-group-${size}`]: true,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        {renderSRText && (
          <span
            id="screenReaderOnlyText"
            class="screen-reader-only-text"
            aria-hidden="true"
          >
            {label} {validationStatus === "error" ? "invalid data " : null}{" "}
            {required ? "required" : null}
          </span>
        )}
        <fieldset
          id={name}
          aria-labelledby={`${
            renderSRText ? "screenReaderOnlyText" : ""
          } ${describedBy}`.trim()}
          disabled={disabled}
        >
          {!hideLabel && (
            <legend>
              <ic-input-label
                class={{ [`${validationStatus}`]: true }}
                label={label}
                helperText={helperText}
                required={required}
                disabled={disabled}
                useLabelTag={false}
              >
                <slot name="helper-text" slot="helper-text"></slot>
              </ic-input-label>
            </legend>
          )}
          <div class="checkboxes-container">
            <slot></slot>
          </div>
        </fieldset>
        <ic-input-validation
          class={{
            "show-validation": showValidation,
          }}
          for={name}
          ariaLiveMode={validationAriaLive}
          status={showValidation ? validationStatus : ""}
          message={showValidation ? validationText : ""}
        ></ic-input-validation>
      </Host>
    );
  }
}
