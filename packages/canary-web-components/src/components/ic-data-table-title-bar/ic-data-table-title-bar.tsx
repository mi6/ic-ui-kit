import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  h,
} from "@stencil/core";
import { IcSelectCustomEvent } from "@ukic/web-components/dist/types/interface";
import {
  IcDataTableDensityOptions,
  IcDensityUpdateEventDetail,
} from "../ic-data-table/ic-data-table.types";
import { isSlotUsed } from "../../utils/helpers";

const DEFAULT_TITLE_BAR_HEADING = "Title Bar";

/**
 * @slot primary-action - Render an interactive element that will perform a primary action. Renders to the right of the density select.
 * @slot custom-actions - Render additional custom actions to the left of the density select.
 * @slot heading - The heading to render on the data table title bar.
 * @slot description - Render an alternative description in the description section.
 */
@Component({
  tag: "ic-data-table-title-bar",
  styleUrl: "ic-data-table-title-bar.css",
  shadow: true,
})
export class DataTableTitleBar {
  private initialDensitySelectOption: IcDataTableDensityOptions = "default";
  private isEmbedded: boolean = false;

  @Element() el: HTMLIcDataTableTitleBarElement;

  /**
   * The description that is displayed below the `heading` and `metadata`. Can be overridden with the `description` slot.
   */
  @Prop() description?: string;

  /**
   * The heading of the title bar. Can be overridden with the `heading` slot. If used with an `ic-data-table` it will default to the table's `caption` unless overridden.
   */
  @Prop() heading?: string = DEFAULT_TITLE_BAR_HEADING;

  /**
   * When `true`, the density select will not be rendered.
   */
  @Prop() hideDensitySelect?: boolean = false;

  /**
   * The metadata displayed next to the `heading`.
   */
  @Prop() metadata?: string;

  /**
   * Emitted when the table density select value is changed.
   */
  @Event() icTableDensityUpdate: EventEmitter<IcDensityUpdateEventDetail>;

  componentWillLoad(): void {
    const parentEl = this.el.parentElement;
    if (parentEl.tagName === "IC-DATA-TABLE") {
      const dataTable = parentEl as HTMLIcDataTableElement;
      this.initialDensitySelectOption = dataTable.density;
      this.isEmbedded = dataTable.embedded;
      if (this.heading === DEFAULT_TITLE_BAR_HEADING) {
        this.heading = dataTable.caption;
      }
    }
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
      heading,
      hideDensitySelect,
      initialDensitySelectOption,
      isEmbedded,
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
          "full-width": isEmbedded,
        }}
      >
        <div class="header-container">
          <slot name="heading">
            <ic-typography variant="h3" className="heading">
              <h3>{heading}</h3>
            </ic-typography>
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
                  <div class="custom-actions-wrapper">
                    <slot name="custom-actions" />
                  </div>
                )}
                {!hideDensitySelect && (
                  <ic-select
                    size="small"
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
