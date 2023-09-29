import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  h,
} from "@stencil/core";
import { IcSelectCustomEvent } from "../../interface";
import {
  IcDataTableDensityOptions,
  IcDensityUpdateEventDetail,
} from "../ic-data-table/ic-data-table.types";
import { isSlotUsed } from "../../utils/helpers";

/**
 * @slot primary-action - Render an interactive element that will perform a primary action. Renders to the right of the density select.
 * @slot custom-actions - Render additional custom actions to the left of the density select.
 * @slot header - Render an alternative header in the header section.
 * @slot description - Render an alternative description in the description section.
 */
@Component({
  tag: "ic-title-bar",
  styleUrl: "ic-title-bar.css",
  shadow: true,
})
export class TitleBar {
  private initialDensitySelectOption: IcDataTableDensityOptions;

  @Element() el: HTMLIcTitleBarElement;

  /**
   * The description that is displayed below the `header` and `metadata`. Can be overridden with the `description` slot.
   */
  @Prop() description?: string;

  /**
   * If `true`, will apply a background colour and a bottom border to the title bar.
   */
  @Prop() fullWidth?: boolean = true;

  /**
   * The header of the title bar. Can be overridden with the `header` slot. If used with an ic-data-table it will default to the table's `caption` unless overridden.
   */
  @Prop() header?: string;

  /**
   * When `true`, the density select will not be rendered.
   */
  @Prop() hideDensitySelect?: boolean = false;

  /**
   * The metadata displayed next to the `header`.
   */
  @Prop() metadata?: string;

  /**
   * Emitted when the table density select value is changed.
   */
  @Event() icTableDensityUpdate: EventEmitter<IcDensityUpdateEventDetail>;

  componentWillLoad(): void {
    const parentEl = this.el.parentElement;
    this.initialDensitySelectOption =
      parentEl.tagName === "IC-DATA-TABLE"
        ? (parentEl as HTMLIcDataTableElement).density
        : "default";

    if (!this.header)
      this.header =
        parentEl.tagName === "IC-DATA-TABLE"
          ? (parentEl as HTMLIcDataTableElement).caption
          : "Title Bar";
  }

  private changeDensity = (
    ev: IcSelectCustomEvent<IcDensityUpdateEventDetail>
  ) => {
    this.icTableDensityUpdate.emit({ value: ev.detail.value });
  };

  render() {
    const {
      changeDensity,
      description,
      el,
      fullWidth,
      header,
      hideDensitySelect,
      initialDensitySelectOption,
      metadata,
    } = this;
    const showActionArea =
      isSlotUsed(el, "primary-action") ||
      isSlotUsed(el, "custom-actions") ||
      !hideDensitySelect;

    const hasDescription = isSlotUsed(el, "description") || description;
    return (
      <div
        class={{
          "title-bar-wrapper": true,
          "full-width": fullWidth,
        }}
      >
        <div class="header-container">
          <slot name="header">
            <ic-typography variant="h3">{header}</ic-typography>
          </slot>
          {metadata && (
            <ic-typography variant="subtitle-small">{metadata}</ic-typography>
          )}
        </div>
        {(showActionArea || hasDescription) && (
          <div class="description-actions">
            <slot name="description">
              {description && (
                <ic-typography variant="body">{description}</ic-typography>
              )}
            </slot>
            {showActionArea && (
              <div class="action-area">
                {isSlotUsed(el, "custom-actions") && (
                  <slot name="custom-actions" />
                )}
                {!hideDensitySelect && (
                  <ic-select
                    small
                    label="Change density"
                    class="density-input"
                    hideLabel
                    options={[
                      { label: "Default", value: "default" },
                      { label: "Dense", value: "dense" },
                      { label: "Spacious", value: "spacious" },
                    ]}
                    value={initialDensitySelectOption}
                    onIcChange={changeDensity}
                  ></ic-select>
                )}
                {isSlotUsed(el, "primary-action") && (
                  <slot name="primary-action" />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
