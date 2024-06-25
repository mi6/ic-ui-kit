// TODO: Tooltip creating scrollbars when hovered at the bottom.

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  Element,
  h,
  Prop,
  State,
  Listen,
  Watch,
  Fragment,
  Method,
  Event,
  EventEmitter,
} from "@stencil/core";
import unsortedIcon from "./assets/unsorted-icon.svg";
import ascendingIcon from "./assets/ascending-icon.svg";
import descendingIcon from "./assets/descending-icon.svg";
import {
  IcDataTableColumnDataTypes,
  IcDataTableColumnObject,
  IcDataTableDensityOptions,
  IcDataTableRowHeights,
  IcDataTableSortOrderOptions,
  IcDataTableTruncationTypes,
  IcDensityUpdateEventDetail,
} from "./ic-data-table.types";
import { IcThemeForegroundNoDefault } from "@ukic/web-components/dist/types/utils/types";
import { IcPaginationBarOptions } from "../../utils/types";
// Unable to import helper functions via @ukic/web-components
import {
  getSlotContent,
  isEmptyString,
  isSlotUsed,
  pxToRem,
  debounce,
} from "../../utils/helpers";

/**
 * @slot empty-state - Content is slotted below the table header when there is no data and the table is not loading.
 * @slot {COLUMN_KEY}-{ROW_INDEX}[-icon] - Each cell should have its own slot, named using the column tag and the row index, allowing for custom elements to be displayed. Include `-icon` at the end for that cell's icon slot.
 * @slot {COLUMN_KEY}-column-icon - The icon slot for a column header.
 * @slot title-bar - A custom ic-data-table-title-bar can be slotted above the column headers to display additional information about the table.
 * @slot pagination-bar - A custom ic-pagination-bar can be slotted below the data to provide enhanced control over how the data is interacted with when being fetched externally.
 */
@Component({
  tag: "ic-data-table",
  styleUrl: "ic-data-table.css",
  shadow: true,
})
export class DataTable {
  private DENSITY_HEIGHT_MULTIPLIER = {
    dense: 0.8,
    default: 1,
    spacious: 1.2,
  };

  private DENSITY_PADDING_HEIGHT_DIFF = {
    dense: 8,
    default: 16,
    spacious: 20,
  };

  private SORT_ICONS = {
    unsorted: unsortedIcon,
    ascending: ascendingIcon,
    descending: descendingIcon,
  };

  // private currentRowHeight: number;
  private hasLoadedForOneSecond: boolean = true;
  private loadingIndicator: HTMLIcLoadingIndicatorElement;
  private timerStarted: number;
  private resizeObserver: ResizeObserver = null;
  private SHOW_HIDE_CSS_CLASS = "show-hide-wrap";
  private TOOLTIP = "ic-tooltip";
  private dataUpdated = false;
  private tableSorted: boolean;
  private showHideBtnClicked = false;

  @Element() el: HTMLIcDataTableElement;

  @State() fromRow: number = 0;

  @State() previousRowsPerPage: number;

  @State() rowsPerPage: number;

  @State() scrollable: boolean = false;

  @State() scrollOffset: number = 0;

  @State() selectedRow: object;

  @State() sortedColumn: string;

  @State() sortedColumnOrder: IcDataTableSortOrderOptions;

  @State() toRow: number;

  @State() currentRowHeight: number;

  /**
   * The title for the table only visible to screen readers.
   */
  @Prop() caption!: string;

  /**
   * The column headers for the table.
   */
  @Prop() columns!: IcDataTableColumnObject[];

  /**
   * The row content for the table.
   */
  @Prop() data: { [key: string]: any }[];

  /**
   * Set the density of the table including font and padding.
   */
  @Prop({ mutable: true }) density?: IcDataTableDensityOptions = "default";

  /**
   * Applies a border to the table container.
   */
  @Prop() embedded?: boolean = false;

  /**
   * Sets the row height on all rows in the table that aren't set using the `variableRowHeight` method.
   */
  @Prop({ mutable: true }) globalRowHeight?: IcDataTableRowHeights = 40;

  /**
   * If `true`, column headers will not be visible.
   */
  @Prop() hideColumnHeaders?: boolean = false;

  /**
   * When set to `true`, the full table will show a loading state, featuring a radial indicator.
   */
  @Prop({ mutable: true }) loading?: boolean = false;

  /**
   * Sets the props for the circular loading indicator used in the loading state.
   */
  @Prop() loadingOptions?: {
    appearance?: IcThemeForegroundNoDefault;
    description?: string;
    label?: string;
    labelDuration?: number;
    max?: number;
    min?: number;
    progress?: number;
    showBackground?: boolean;
  };

  /**
   * The minimum amount of time the `loading` state displays for before showing the data. Used to prevent flashing in the component.
   */
  @Prop() minimumLoadingDisplayDuration?: number = 1000;

  /**
   * Sets the props for the built-in pagination bar. If the `pagination-bar` slot is used then this prop is ignored.
   */
  @Prop() paginationBarOptions?: IcPaginationBarOptions = {
    itemsPerPageOptions: [
      { label: "10", value: "10" },
      { label: "25", value: "25" },
      { label: "50", value: "50" },
    ],
    rangeLabelType: "page",
    type: "simple",
    showItemsPerPageControl: true,
    showGoToPageControl: true,
    alignment: "right",
    appearance: "default",
    itemLabel: "Item",
    pageLabel: "Page",
    hideRangeLabel: false,
  };

  /**
   * If `true`, adds a pagination bar to the bottom of the table.
   */
  @Prop() showPagination?: boolean = false;

  /**
   * If `true`, allows table columns to be sorted using applied sort buttons.
   */
  @Prop() sortable?: boolean = false;

  /**
   * Sets the order columns will be sorted in and allows for 'default' sorts to be added.
   */
  @Prop() sortOptions?: {
    sortOrders: IcDataTableSortOrderOptions[];
    defaultColumn?: string;
  } = {
    sortOrders: ["unsorted", "ascending", "descending"],
    defaultColumn: "",
  };

  /**
   * If `true`, column headers will remain at the top of the table when scrolling vertically.
   */
  @Prop() stickyColumnHeaders?: boolean = false;

  /**
   * If `true`, row headers will remain to the left when scrolling horizontally.
   */
  @Prop() stickyRowHeaders?: boolean = false;

  /**
   * For long text in cells that aren't set to textWrap, define how they should be truncated.
   * `tooltip` adds a tooltip for the rest of the text, `showHide` adds the ic-typography "See More"/"See Less" buttons.
   */
  @Prop() truncationPattern?: IcDataTableTruncationTypes;

  /**
   * If `true`, the table displays a linear loading indicator below the header row to indicate an updating state.
   */
  @Prop() updating?: boolean = false;

  /**
   * Sets the props for the linear loading indicator used in the updating state.
   */
  @Prop() updatingOptions?: {
    appearance?: IcThemeForegroundNoDefault;
    description?: string;
    max?: number;
    min?: number;
    progress?: number;
  };

  /**
   * Allows for custom setting of row heights on individual rows based on an individual value from the `data` prop and the row index.
   * If the function returns `null`, that row's height will be set to the `globalRowHeight` property.
   */
  @Prop({ mutable: true }) variableRowHeight?: (params: {
    [key: string]: any;
    index: number;
  }) => IcDataTableRowHeights | null;

  /**
   * Emitted when the `globalRowHeight` or `variableRowHeight` properties change in the data table.
   */
  @Event() icRowHeightChange: EventEmitter<void>;
  // private rowHeightManuallySet = false;

  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
  }

  componentWillLoad(): void {
    this.rowsPerPage = Number(
      this.paginationBarOptions.itemsPerPageOptions[0].value
    );
    this.previousRowsPerPage = this.rowsPerPage;
    this.toRow = this.rowsPerPage;
    this.sortedColumn = this.sortOptions.defaultColumn;
    this.sortedColumnOrder = this.sortOptions.sortOrders[0];
    this.loadingOptions = {
      ...this.loadingOptions,
      showBackground: this.data?.length > 0,
    };
  }

  componentDidLoad(): void {
    const tableElement = this.el.shadowRoot.querySelector("table");
    const tableContainer = this.el.shadowRoot.querySelector(".table-container");
    if (
      tableElement?.clientHeight > tableContainer?.clientHeight ||
      tableElement?.clientWidth > tableContainer?.clientWidth
    ) {
      this.scrollable = true;
    }
    if (this.loading) {
      this.startLoadingTimer();
      this.showLoadingIndicator();
    }

    if (this.truncationPattern) {
      this.debounceDataTruncation();
    }
  }

  componentDidUpdate(): void {
    //TODO: Make this more efficient by preventing an extra render to apply truncation
    this.truncateUpdatedData();
    console.warn(this.tableSorted);
  }

  private truncateUpdatedData() {
    if (this.dataUpdated) {
      if (this.truncationPattern === "show-hide") {
        this.resetShowHideTruncation();
      }

      setTimeout(() => {
        this.debounceDataTruncation();
      }, 75);

      this.dataUpdated = false;
    }
  }

  private createShowHideTruncation(
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ) {
    typographyEl.checkMaxLines(typographyEl.scrollHeight);
    typographyEl.setAttribute(
      "max-lines",
      `${Math.floor(cellContainer?.clientHeight / 24)}`
    );
    typographyEl.setShowHideExpanded(false);

    cellContainer.style.height = null;
  }

  private debounceDataTruncation = () => {
    this.getTypographyElements().forEach(
      (typographyEl: HTMLIcTypographyElement) => {
        if (!typographyEl.classList.contains("text-wrap")) {
          this.resizeObserver = new ResizeObserver(
            // This gets triggered twice due to updated data and see more/see less button
            debounce((entries) => {
              console.log(entries);
              this.dataTruncation(typographyEl);
            }, 0) as ResizeObserverCallback
          );

          this.resizeObserver.observe(typographyEl);
        }
      }
    );
  };

  private getLines = (height: number): number => height / 24;

  private truncate = (
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement,
    tooltip: HTMLIcTooltipElement
  ) => {
    if (typographyEl?.scrollHeight > cellContainer?.clientHeight) {
      //24 is the height of a single line
      if (
        this.truncationPattern === "tooltip" &&
        !typographyEl.closest(".text-wrap")
      ) {
        typographyEl.setAttribute(
          "style",
          `--ic-line-clamp: ${this.getLines(cellContainer?.clientHeight)}`
        );

        if (!tooltip) {
          this.createTruncationTooltip(typographyEl, cellContainer);
        }
      }

      if (this.truncationPattern === "show-hide") {
        cellContainer.classList.add(this.SHOW_HIDE_CSS_CLASS);
        this.createShowHideTruncation(typographyEl, cellContainer);
      }
    } else {
      if (this.truncationPattern === "tooltip" && tooltip) {
        typographyEl.setAttribute("style", `--ic-line-clamp: 0`);

        cellContainer.appendChild(typographyEl);
        tooltip.remove();
      }

      if (
        this.truncationPattern === "show-hide" &&
        !isEmptyString(typographyEl.getAttribute("max-lines"))
      ) {
        this.resetShowHideTruncation();
      }
    }
  };

  @Listen("icItemsPerPageChange")
  handleItemsPerPageChange({
    detail,
    target,
  }: CustomEvent<{ value: number }>): void {
    if ((target as HTMLIcPaginationBarElement).parentElement !== this.el) {
      this.previousRowsPerPage = this.rowsPerPage;
      this.rowsPerPage = detail.value;
    }
  }

  private dataTruncation = (typographyEl: HTMLIcTypographyElement) => {
    console.log("truncate", typographyEl.textContent);
    // TODO: Need to prevent this running so many times so truncation can work dynamically
    // TODO: Tooltip truncation mentioned in AC. Will need revisiting
    const tooltip: HTMLIcTooltipElement = this.getTooltip(typographyEl);
    const cellContainer = this.getCellContainer(typographyEl);
    if (
      cellContainer?.classList.contains("data-type-element") ||
      this.dataUpdated
    )
      return;

    if (
      this.truncationPattern === "show-hide" &&
      typographyEl.shadowRoot.querySelector("button")
    ) {
      const showHideBtn = typographyEl.shadowRoot.querySelector("button");

      if (!showHideBtn.getAttribute("data-click-event")) {
        showHideBtn.addEventListener("click", () => {
          this.showHideBtnClicked = true;
        });
        showHideBtn.setAttribute("data-click-event", "true");
      }

      if (this.showHideBtnClicked) {
        this.showHideBtnClicked = false;
        return;
      }

      if (showHideBtn) {
        const cellContainerClientHeight = cellContainer.clientHeight - 24;

        const truncWrapper =
          typographyEl.shadowRoot.querySelector(".trunc-wrapper");

        if (
          truncWrapper.scrollHeight <= cellContainerClientHeight ||
          (truncWrapper.scrollHeight === 24 && cellContainerClientHeight === 0)
        ) {
          this.resetShowHideTruncation();
        }
      }
    }

    if (
      typographyEl?.scrollHeight === cellContainer?.clientHeight &&
      this.truncationPattern === "show-hide" &&
      typographyEl.hasAttribute("max-lines")
    ) {
      return;
    }

    this.truncate(typographyEl, cellContainer, tooltip);
  };

  @Listen("icPageChange")
  handlePageChange({ detail, target }: CustomEvent<{ value: number }>): void {
    if ((target as HTMLIcPaginationBarElement).parentElement !== this.el) {
      this.fromRow = (detail.value - 1) * this.rowsPerPage;
      this.toRow = this.fromRow + this.rowsPerPage;
      const tableRowsContainer = this.el.shadowRoot.querySelector(
        ".table-row-container"
      );
      if (this.previousRowsPerPage === this.rowsPerPage) {
        tableRowsContainer.scrollTop = 0;
      } else if (this.previousRowsPerPage < this.rowsPerPage) {
        tableRowsContainer.scrollTop = this.scrollOffset;
        this.previousRowsPerPage = this.rowsPerPage;
      } else {
        this.previousRowsPerPage = this.rowsPerPage;
      }
    }
  }

  @Listen("icTableDensityUpdate")
  handleDensityChange(ev: CustomEvent<IcDensityUpdateEventDetail>): void {
    this.density = ev.detail.value;
  }

  @Listen("click", { target: "window" })
  clickListener(ev: MouseEvent): void {
    if (ev.target !== this.el) this.selectedRow = undefined;
  }

  private removeTextWrap = (): void => {
    this.getTypographyElements().forEach(
      (typographyEl: HTMLIcTypographyElement) => {
        const tableCell = typographyEl.closest("td");
        if (tableCell.classList.contains("text-wrap")) {
          tableCell.classList.remove("text-wrap");
        }
      }
    );
  };

  @Watch("loading")
  loadingHandler(newValue: boolean): void {
    if (newValue) this.startLoadingTimer();

    if (this.loading) {
      setTimeout(() => {
        this.showLoadingIndicator();
      }, 500);
    }
  }

  @Watch("truncationPattern")
  truncationPatternHandler(newValue: IcDataTableTruncationTypes): void {
    //TODO: If previously set to a different truncation pattern, remove all truncation and then re-apply
    if (newValue === "show-hide" || newValue === "tooltip") {
      this.debounceDataTruncation();
    }

    //TODO: If undefined, remove all truncation
  }

  @Watch("data")
  async dataHandler(newData: { [key: string]: any }[]) {
    this.loadingOptions = {
      ...this.loadingOptions,
      showBackground: newData?.length > 0,
    };
    if (this.loading) {
      !this.hasLoadedForOneSecond
        ? setTimeout(
            () => (this.loading = false),
            this.minimumLoadingDisplayDuration -
              (Date.now() - this.timerStarted)
          )
        : (this.loading = false);
    }
    if (this.updating) this.updating = false;

    this.dataUpdated = true;
  }

  private getCellContainer = (
    typographyEl: HTMLIcTypographyElement
  ): HTMLElement => {
    return typographyEl.closest(".cell-container");
  };

  private deleteTextWrapDataKey = (
    array: IcDataTableColumnObject[] | object[]
  ) => array.forEach((val) => val.textWrap && delete val.textWrap);

  private resetShowHideTruncation() {
    this.getTypographyElements().forEach((typographyEl) => {
      const cellContainer = this.getCellContainer(typographyEl);
      typographyEl.resetTruncation().then(() => {
        cellContainer.style.setProperty(
          "height",
          cellContainer.getAttribute("data-row-height")
        );
      });
    });
  }

  @Watch("globalRowHeight")
  @Watch("variableRowHeight")
  rowHeightChangeHandler(): void {
    /**
     * Is it better to regenerate the cells when the data object has been changed internally?
     * This will make the data object the single source of truth however, regenerating cells
     * when a change has been made could be memory intensive.
     */
    this.deleteTextWrapDataKey(this.data);
    this.deleteTextWrapDataKey(this.columns);
    this.removeTextWrap();

    // this.rowHeightManuallySet = true;

    this.icRowHeightChange.emit();
  }

  /**
   * Resets the `globalRowHeight` prop to `40px` and sets the `variableRowHeight` prop to `null`.
   */
  @Method()
  async resetRowHeights(): Promise<void> {
    this.globalRowHeight = 40;
    this.variableRowHeight = null;
  }

  private showLoadingIndicator() {
    this.loadingIndicator.classList.add("show");
  }

  private startLoadingTimer = (): void => {
    this.hasLoadedForOneSecond = false;
    this.timerStarted = Date.now();
    setTimeout(() => {
      this.hasLoadedForOneSecond = true;
      this.timerStarted = null;
    }, this.minimumLoadingDisplayDuration);
  };

  private isObject = (value: any) => typeof value === "object";

  private notDefaultDensity = () => this.density !== "default";

  private getCellContent = (
    cell: any,
    dataType: IcDataTableColumnDataTypes
  ): any => {
    switch (dataType) {
      case "element":
        return undefined;
      case "date":
        return (
          cell instanceof Date ? cell : new Date(cell)
        ).toLocaleDateString();
      default:
        return cell;
    }
  };

  private getCellAlignment = (
    cell: any,
    alignment: "horizontal" | "vertical"
  ) => {
    if (this.isObject(cell) && Object.keys(cell).includes("cellAlignment")) {
      return this.getObjectValue(
        this.getObjectValue(cell, "cellAlignment"),
        alignment
      );
    }
  };

  private getCellOptions = (cell: any, key: string) => {
    //TODO: Update function to accept value to replace getCellAlignment function
    if (!(this.isObject(cell) && Object.keys(cell).includes(key))) return;

    return this.getObjectValue(cell, key);
  };

  private createUpdatingIndicator = () => {
    const { appearance, description, max, min, progress } =
      this.updatingOptions || {};
    return (
      <th colSpan={this.columns.length} class="updating-state">
        <ic-loading-indicator
          appearance={appearance}
          description={description || "Updating table data"}
          fullWidth={true}
          max={max}
          min={min}
          progress={progress}
          type="linear"
          size="small"
        ></ic-loading-indicator>
      </th>
    );
  };

  private setRowHeight = (height: number) => {
    return pxToRem(
      `${
        height * this.DENSITY_HEIGHT_MULTIPLIER[this.density] -
        this.DENSITY_PADDING_HEIGHT_DIFF[this.density]
      }px`
    );
  };

  private createCells = (row: object, rowIndex: number) => {
    const rowValues = Object.values(row);
    const rowKeys = Object.keys(row);
    const index = rowIndex;

    const rowOptions = this.getRowOptions(rowKeys, rowValues);
    let rowAlignment: string;
    let rowEmphasis: string;

    const headerIndex = rowKeys.indexOf("header");
    if (headerIndex > -1) {
      rowAlignment = this.getObjectValue(
        rowValues[headerIndex],
        "rowAlignment"
      );
      rowEmphasis = this.getObjectValue(rowValues[headerIndex], "emphasis");
    }

    const variableRowHeightVal = this.variableRowHeight?.({
      ...row,
      index,
    });
    const currentRowHeight = variableRowHeightVal
      ? variableRowHeightVal !== "auto" && variableRowHeightVal
      : this.globalRowHeight !== "auto" && this.globalRowHeight;

    return rowValues.map((cell, index) => {
      const columnProps = this.columns[index];
      const cellSlotName = `${columnProps?.key}-${rowIndex}`;
      const hasIcon = this.isObject(cell) && Object.keys(cell).includes("icon");
      const cellValue = (key: string) => this.getObjectValue(cell, key);

      if (rowKeys[index] === "header") {
        return (
          <th
            scope="row"
            colSpan={cellValue("colspan")}
            class={{
              ["row-header"]: true,
              [`row-header-alignment-${cellValue("cellAlignment")}`]:
                !!cellValue("cellAlignment"),
              ["row-header-sticky"]: this.stickyRowHeaders,
            }}
          >
            {cellValue("title")}
          </th>
        );
      }

      if (rowKeys[index] !== "rowOptions") {
        return (
          <td
            id={`row-${rowIndex}-${Math.floor(Math.random() * 100)}`}
            class={{
              ["table-cell"]: true,
              [`table-density-${this.density}`]: this.notDefaultDensity(),
            }}
          >
            <div
              innerHTML={
                columnProps?.dataType === "element" &&
                !isSlotUsed(this.el, cellSlotName)
                  ? (cell as string)
                  : null
              }
              class={{
                "cell-container": columnProps?.dataType !== "element",
                [`cell-alignment-${
                  columnProps?.columnAlignment?.vertical ||
                  rowOptions?.rowAlignment?.vertical ||
                  rowAlignment ||
                  this.getCellAlignment(cell, "vertical")
                }`]:
                  !!columnProps?.columnAlignment?.vertical ||
                  !!rowOptions?.rowAlignment?.vertical ||
                  !!rowAlignment ||
                  !!this.getCellAlignment(cell, "vertical"),
                [`cell-alignment-${
                  columnProps?.columnAlignment?.horizontal ||
                  rowOptions?.rowAlignment?.horizontal ||
                  this.getCellAlignment(cell, "horizontal")
                }`]:
                  !!columnProps?.columnAlignment?.horizontal ||
                  !!rowOptions?.rowAlignment?.horizontal ||
                  !!this.getCellAlignment(cell, "horizontal"),
                [`data-type-${columnProps?.dataType}`]: true,
                ["text-wrap"]:
                  columnProps?.textWrap ||
                  rowOptions?.textWrap ||
                  !!this.getCellOptions(cell, "textWrap"),
              }}
              style={{
                height:
                  this.truncationPattern &&
                  currentRowHeight &&
                  !columnProps.textWrap &&
                  !rowOptions.textWrap &&
                  !this.getCellOptions(cell, "textWrap") &&
                  columnProps?.dataType !== "element"
                    ? this.setRowHeight(currentRowHeight)
                    : null,
              }}
              data-row-height={
                this.truncationPattern && currentRowHeight
                  ? this.setRowHeight(currentRowHeight)
                  : null
              }
            >
              {isSlotUsed(this.el, cellSlotName) ? (
                <slot name={cellSlotName} />
              ) : (
                <Fragment>
                  {isSlotUsed(this.el, `${cellSlotName}-icon`) ? (
                    <slot name={`${cellSlotName}-icon`} />
                  ) : (
                    (hasIcon || columnProps?.icon?.onAllCells) && (
                      <span
                        class="icon"
                        innerHTML={cellValue("icon") || columnProps?.icon.icon}
                      ></span>
                    )
                  )}
                  <ic-typography
                    variant="body"
                    class={{
                      [`cell-emphasis-${
                        (this.isObject(cell) && cellValue("emphasis")) ||
                        columnProps?.emphasis ||
                        rowEmphasis
                      }`]:
                        (this.isObject(cell) && !!cellValue("emphasis")) ||
                        !!columnProps?.emphasis ||
                        !!rowEmphasis,
                      [`text-${this.density}`]: this.notDefaultDensity(),
                    }}
                  >
                    {this.isObject(cell) && columnProps?.dataType !== "date" ? (
                      Object.keys(cell).includes("href") ? (
                        <ic-link href={cellValue("href")}>
                          {cellValue("data")}
                        </ic-link>
                      ) : (
                        cellValue("data")
                      )
                    ) : (
                      this.getCellContent(cell, columnProps?.dataType)
                    )}
                  </ic-typography>
                </Fragment>
              )}
            </div>
          </td>
        );
      }
    });
  };

  private createColumnHeaders = () => {
    return this.columns.map(({ cellAlignment, colspan, icon, key, title }) => (
      <th
        scope="col"
        class={{
          ["column-header"]: true,
          [`table-density-${this.density}`]: this.notDefaultDensity(),
          ["updating-state-headers"]: this.updating && !this.loading,
        }}
        colSpan={colspan}
      >
        <div
          class={{
            "column-header-inner-container": true,
            [`column-header-alignment-${cellAlignment}`]: !!cellAlignment,
          }}
        >
          {isSlotUsed(this.el, `${key}-column-icon`) ? (
            <slot name={`${key}-column-icon`} />
          ) : (
            icon &&
            !icon.hideOnHeader && (
              <span class="icon" innerHTML={icon.icon}></span>
            )
          )}
          <ic-typography
            variant="body"
            class={{
              ["column-header-text"]: true,
              [`text-${this.density}`]: this.notDefaultDensity(),
            }}
          >
            {title}
          </ic-typography>
          {this.sortable && (
            <ic-button
              variant="icon"
              id={`sort-button-${key}`}
              aria-label={this.getSortButtonLabel(key)}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => this.sortRows(key)}
              innerHTML={
                this.SORT_ICONS[
                  this.sortedColumn === key
                    ? this.sortedColumnOrder
                    : "unsorted"
                ]
              }
              class={{
                ["sort-button"]: true,
                ["sort-button-unsorted"]:
                  this.sortedColumn !== key ||
                  this.sortedColumnOrder === "unsorted",
              }}
            ></ic-button>
          )}
        </div>
      </th>
    ));
  };

  private onRowClick = (row: object) => {
    this.selectedRow =
      this.selectedRow !== row && !this.loading && !this.updating && row;
  };

  private createRows = () => {
    const data = this.showPagination
      ? this.data.slice(this.fromRow, this.toRow)
      : this.data.slice();

    /**
     * Ensures that createCells has a value in data to map over to actually render the slot.
     * Removes the need for the user to add it multiple times.
     */
    this.columns.forEach(({ key }) => {
      data.forEach((row, rowIndex) => {
        const cellSlotName = `${key}-${rowIndex}`;
        if (isSlotUsed(this.el, cellSlotName)) {
          row[key] = getSlotContent(this.el, cellSlotName);
        }
      });
    });

    return data
      .sort(!this.sortable ? undefined : this.getSortFunction())
      .map((row, index) => {
        return (
          <tr
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => this.onRowClick(row)}
            class={{
              ["table-row"]: true,
              ["table-row-selected"]: this.selectedRow === row,
            }}
          >
            {this.createCells(row, index)}
          </tr>
        );
      });
  };

  private getObjectValue = (cell: object, key: string) => {
    return Object.values(cell)[Object.keys(cell).indexOf(key)];
  };

  private getSortButtonLabel = (key: string) => {
    let label = "";
    const getNextSortOption = (option: IcDataTableSortOrderOptions) => {
      const sortOrders = this.sortOptions.sortOrders;
      return sortOrders[(sortOrders.indexOf(option) + 1) % sortOrders.length];
    };

    if (this.sortedColumn === key) {
      const sortOption = getNextSortOption(this.sortedColumnOrder);
      label = sortOption !== "unsorted" ? `Sort ${sortOption}` : "Remove sort";
    } else {
      label = `Sort ${getNextSortOption("unsorted")}`;
    }

    return label;
  };

  private getComparison = (targetRow: any, comparisonRow: any): number => {
    const targetRowValue = targetRow[this.sortedColumn];
    const comparisonRowValue = comparisonRow[this.sortedColumn];
    return this.columns.find((col) => col.key === this.sortedColumn)
      .dataType === "date"
      ? new Date(targetRowValue).valueOf() -
          new Date(comparisonRowValue).valueOf()
      : String(
          this.isObject(targetRowValue)
            ? Object.values(targetRowValue)[0]
            : targetRowValue
        ).localeCompare(
          String(
            this.isObject(comparisonRowValue)
              ? Object.values(comparisonRowValue)[0]
              : comparisonRowValue
          ),
          undefined,
          { numeric: true, sensitivity: "base" }
        );
  };

  private getSortFunction = () => {
    switch (this.sortedColumnOrder) {
      case "ascending":
        return (a: any, b: any) => this.getComparison(a, b);
      case "descending":
        return (a: any, b: any) => this.getComparison(b, a);
      default:
        return undefined;
    }
  };

  private sortRows = (column: string) => {
    const sortButton = this.el.shadowRoot.querySelector(
      `#sort-button-${column}`
    ) as HTMLIcButtonElement;

    const sortOrders = this.sortOptions.sortOrders;

    if (column !== this.sortedColumn) {
      if (this.sortedColumn) {
        const previousSortedButton = this.el.shadowRoot.querySelector(
          `#sort-button-${this.sortedColumn}`
        ) as HTMLIcButtonElement;
        previousSortedButton.setAttribute(
          "aria-label",
          this.getSortButtonLabel(column)
        ); // Passing through unsorted column returns correct label for newly unsorted column
      }
      this.sortedColumn = column;
      this.sortedColumnOrder = "unsorted";
    }

    let nextSortOrderIndex = sortOrders.indexOf(this.sortedColumnOrder) + 1;

    if (nextSortOrderIndex > sortOrders.length - 1) {
      nextSortOrderIndex = 0;
    }

    this.sortedColumnOrder = sortOrders[nextSortOrderIndex];

    sortButton.setAttribute("aria-label", this.getSortButtonLabel(column));

    if (this.truncationPattern === "tooltip") {
      // setTimeout allows sorting to finish before truncation is updated
      setTimeout(() => {
        this.updateTruncationTooltip();
      }, 300);
    }

    this.tableSorted = true;
  };

  private getTypographyElements = (): HTMLIcTypographyElement[] => {
    return Array.from(
      this.el.shadowRoot.querySelectorAll(
        "ic-typography:not(.column-header-text)"
      )
    );
  };

  private getTooltip = (
    typographyEl: HTMLIcTypographyElement
  ): HTMLIcTooltipElement => {
    return typographyEl.closest(this.TOOLTIP);
  };

  private updateTruncationTooltip = () => {
    this.getTypographyElements().forEach(
      (typographyEl: HTMLIcTypographyElement) => {
        const tooltip = this.getTooltip(typographyEl);
        const cellContainer = this.getCellContainer(typographyEl);

        this.regenerateTooltip(cellContainer, typographyEl, tooltip);
      }
    );
  };

  private updateScrollOffset = () => {
    this.scrollOffset = this.el.shadowRoot.querySelector(
      ".table-row-container"
    ).scrollTop;
  };

  private getRowOptions(rowKeys: string[], rowValues: any[]) {
    const rowOptionsIndex = rowKeys.indexOf("rowOptions");
    return rowOptionsIndex > -1 && rowValues[rowOptionsIndex];
  }

  private regenerateTooltip(
    cellContainer: HTMLElement,
    typographyEl: HTMLIcTypographyElement,
    tooltip: HTMLIcTooltipElement
  ) {
    if (tooltip) {
      cellContainer.appendChild(typographyEl);
      tooltip.remove();
    }

    if (typographyEl?.scrollHeight > cellContainer?.clientHeight) {
      this.createTruncationTooltip(typographyEl, cellContainer);
    }
  }

  private createTruncationTooltip(
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ) {
    const tooltipEl = document.createElement("ic-tooltip");
    tooltipEl.setAttribute("target", typographyEl.id);
    tooltipEl.setAttribute("label", typographyEl.textContent);
    tooltipEl.setExternalPopperProps({
      // This might need reverting back to absolute if the tooltip doesnt dynamically position itself correctly
      strategy: "fixed",
    });
    cellContainer.appendChild(tooltipEl);
    tooltipEl.appendChild(typographyEl);
  }

  render() {
    const {
      caption,
      createColumnHeaders,
      createRows,
      createUpdatingIndicator,
      data,
      hideColumnHeaders,
      loading,
      loadingOptions,
      paginationBarOptions,
      scrollable,
      scrollOffset,
      showPagination,
      sortable,
      sortedColumnOrder,
      sortedColumn,
      stickyColumnHeaders,
      updateScrollOffset,
      updating,
    } = this;

    return (
      <div class="table-container">
        {isSlotUsed(this.el, "title-bar") && <slot name="title-bar" />}
        <div
          class={{
            ["table-row-container"]: true,
            scrollable,
          }}
          tabIndex={scrollable ? 0 : null}
          onScroll={updateScrollOffset}
        >
          {isSlotUsed(this.el, "title-bar") && <slot name="title-bar" />}
          <table>
            <caption class="table-caption">{caption}</caption>
            {!hideColumnHeaders && (
              <thead
                class={{
                  ["column-header-sticky"]: stickyColumnHeaders,
                  ["column-header-overlay"]:
                    stickyColumnHeaders && scrollOffset !== 0,
                }}
              >
                <tr>{createColumnHeaders()}</tr>
              </thead>
            )}
            {updating &&
              !loading &&
              (hideColumnHeaders ? (
                <thead>{createUpdatingIndicator()}</thead>
              ) : (
                createUpdatingIndicator()
              ))}
            {data?.length > 0 && !loading && <tbody>{createRows()}</tbody>}
          </table>
          {!data?.length &&
            !loading &&
            (isSlotUsed(this.el, "empty-state") ? (
              <slot name="empty-state" />
            ) : (
              <ic-empty-state
                aligned="center"
                heading="No Data"
                class="loading-empty"
              ></ic-empty-state>
            ))}
        </div>
        {loading && (
          <ic-loading-indicator
            appearance={loadingOptions?.appearance}
            class={{
              "loading-empty": loading,
              loading: true,
              "show-background": loadingOptions.showBackground,
            }}
            description={loadingOptions.description || "Loading table data"}
            label={loadingOptions.label || "Loading..."}
            labelDuration={loadingOptions?.labelDuration}
            max={loadingOptions?.max}
            min={loadingOptions?.min}
            progress={loadingOptions?.progress}
            ref={(el: HTMLIcLoadingIndicatorElement) =>
              (this.loadingIndicator = el)
            }
          ></ic-loading-indicator>
        )}
        {(showPagination || isSlotUsed(this.el, "pagination-bar")) && (
          <div class="pagination-container">
            {isSlotUsed(this.el, "pagination-bar") ? (
              <slot name="pagination-bar" />
            ) : (
              <ic-pagination-bar
                totalItems={data.length}
                type={paginationBarOptions.type}
                rangeLabelType={paginationBarOptions.rangeLabelType}
                showItemsPerPageControl={
                  paginationBarOptions.showItemsPerPageControl
                }
                showGoToPageControl={paginationBarOptions.showGoToPageControl}
                itemsPerPageOptions={paginationBarOptions.itemsPerPageOptions}
                alignment={paginationBarOptions.alignment}
                appearance={paginationBarOptions.appearance}
                itemLabel={paginationBarOptions.itemLabel}
                pageLabel={paginationBarOptions.pageLabel}
                hideRangeLabel={paginationBarOptions.hideRangeLabel}
              ></ic-pagination-bar>
            )}
          </div>
        )}
        {sortable && (
          <div class="screen-reader-sort-text" aria-live="polite">
            {sortedColumnOrder !== "unsorted" && sortedColumn
              ? `${sortedColumn} sorted ${sortedColumnOrder}`
              : "table unsorted"}
          </div>
        )}
      </div>
    );
  }
}
