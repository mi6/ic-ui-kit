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
  Host,
} from "@stencil/core";
import unsortedIcon from "./assets/unsorted-icon.svg";
import ascendingIcon from "./assets/ascending-icon.svg";
import descendingIcon from "./assets/descending-icon.svg";
import {
  IcDataTableDataType,
  IcDataTableColumnDataTypes,
  IcDataTableColumnObject,
  IcDataTableColumnWidthTypes,
  IcDataTableDensityOptions,
  IcDataTableRowHeights,
  IcDataTableSortOrderOptions,
  IcDataTableTruncationTypes,
  IcDensityUpdateEventDetail,
  IcSortEventDetail,
  IcLoadingOptions,
  IcDataTableRowOptions,
} from "./ic-data-table.types";
import { IcPaginationBarOptions, IcThemeMode } from "../../utils/types";
// Unable to import helper functions via @ukic/web-components
import {
  isEmptyString,
  isSlotUsed,
  pxToRem,
  addDataToPosition,
  dynamicDebounce,
  getSlotElements,
  checkResizeObserver,
  deviceSizeMatches,
} from "../../utils/helpers";
import { sanitizeHTMLIconString } from "../../../../web-components/src/utils/common-helpers";
import { IC_DEVICE_SIZES } from "../../utils/constants";

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

  private hasLoadedForOneSecond = true;
  private loadingIndicator?: HTMLIcLoadingIndicatorElement;
  private loadingOverlay?: HTMLDivElement;
  private timerStarted: number;
  private resizeObserver: ResizeObserver | null = null;
  private SHOW_HIDE_STRING = "show-hide";
  private SHOW_HIDE_CSS_CLASS = `${this.SHOW_HIDE_STRING}-wrap`;
  private TOOLTIP_STRING = "tooltip";
  private TOOLTIP = `ic-${this.TOOLTIP_STRING}`;
  private TEXT_WRAP_STRING = "text-wrap";
  private TEXT_WRAP_CLASS = `.${this.TEXT_WRAP_STRING}`;
  private dataUpdated = false;
  private columnsUpdated = false;
  private tableSorted: boolean;
  private rowHeightSet = false;
  private initialLoad = false;
  private icPageChangeEvent = false;
  private itemsPerPageChange = false;
  private DATA_ROW_HEIGHT_STRING = "data-row-height";
  private ROW_HEIGHT_CSS_VARIABLE = "--row-height";
  private LINE_CLAMP_CSS_VARIABLE = "--ic-line-clamp";
  private previousItemsPerPage: number;
  private DEFAULT_LINE_HEIGHT = 24;
  private densityUpdate = false;
  private previousPaginationPage: number;
  private truncationPatternUpdated: boolean = false;
  private isNewDebounceDelaySet = false;
  private headerResizeObserver: ResizeObserver | null = null;
  private prevTableContainerWidth: number;
  private IC_TOOLTIP_STRING = "ic-tooltip";
  private SHOW_TRUNC_TOOLTIP_STRING = "show-trunc-tooltip";
  private CELL_DESCRIPTION_STRING = ".cell-description";
  private CELL_CONTAINER_WITH_DESCRIPTION_STRING =
    "cell-container-with-description";
  private CELL_TEXT_WRAPPER_STRING = ".cell-text-wrapper";
  private IC_TYPOGRAPHY_STRING = "ic-typography";
  private organisedData?: IcDataTableDataType[];
  private rowIdCounter = 0;

  private createRowId = () => {
    return `row-${this.rowIdCounter++}`;
  };

  @Element() el: HTMLIcDataTableElement;

  @State() fromRow: number = 0;

  @State() previousRowsPerPage: number;

  @State() rowsPerPage: number;

  @State() scrollable: boolean = false;

  @State() scrollOffset: number = 0;

  @State() selectedRows: IcDataTableDataType[] = [];

  @State() selectedIcRowIds: string[] = [];

  @State() sortedColumn: string;

  @State() sortedColumnOrder: IcDataTableSortOrderOptions;

  @State() toRow: number;

  @State() currentRowHeight: number;

  @State() debounceDelay = 0;

  /**
   * The title for the table only visible to screen readers.
   */
  @Prop() caption!: string;

  /**
   * Determines whether the column header should be truncated and display a tooltip. Default is `false`.
   */
  @Prop() columnHeaderTruncation: boolean = false;

  @Watch("columnHeaderTruncation")
  headerTruncationChangeHandler(): void {
    if (this.columnHeaderTruncation) {
      this.prevTableContainerWidth = 0;
    } else {
      this.el.shadowRoot
        ?.querySelectorAll("th.column-header")
        ?.forEach((header) => {
          header
            .querySelector(this.IC_TOOLTIP_STRING)
            ?.classList.remove(this.SHOW_TRUNC_TOOLTIP_STRING);
        });
    }
  }

  /**
   * The column headers for the table.
   */
  @Prop() columns!: IcDataTableColumnObject[];
  @Watch("columns")
  columnsChangeHandler(): void {
    this.columnsUpdated = true;
  }

  /**
   * The row content for the table.
   */
  @Prop() data?: IcDataTableDataType[];

  /**
   * If `true`, the built in sort functionality will be disabled. For example, if rows will already be sorted from an external source.
   */
  @Prop() disableAutoSort?: boolean = false;

  /**
   * Set the density of the table including font and padding.
   */
  @Prop({ mutable: true }) density: IcDataTableDensityOptions = "default";

  /**
   * Applies a border to the table container.
   */
  @Prop() embedded: boolean = false;

  /**
   * Sets the row height on all rows in the table that aren't set using the `variableRowHeight` method.
   */
  @Prop({ mutable: true }) globalRowHeight: IcDataTableRowHeights = "auto";

  /**
   * Sets the table height. Can be set to `auto` or a specific value in `px`, `rem`, or `%`.
   */
  @Prop() height?: string;

  /**
   * If `true`, column headers will not be visible.
   */
  @Prop() hideColumnHeaders?: boolean = false;

  /**
   * When set to `true`, the full table will show a loading state, featuring a radial indicator.
   */
  @Prop({ mutable: true }) loading: boolean = false;

  /**
   * Sets the props for the circular loading indicator used in the loading state.
   */
  @Prop() loadingOptions?: {
    description?: string;
    label?: string;
    labelDuration?: number;
    max?: number;
    min?: number;
    progress?: number;
    monochrome?: boolean;
    overlay?: boolean;
  };

  /**
   * Sets the maximum width of the data table. Can be set in `px`, `rem`, or `%`.
   */
  @Prop() maxWidth?: string;

  /**
   * Sets the minimum width of the data table. Can be set in `px`, `rem`, or `%`.
   */
  @Prop() minWidth?: string;

  /**
   * The minimum amount of time the `loading` state displays for before showing the data. Used to prevent flashing in the component.
   */
  @Prop() minimumLoadingDisplayDuration: number = 1000;

  /**
   * Sets the props for the built-in pagination bar. If the `pagination-bar` slot is used then this prop is ignored.
   */
  @Prop() paginationBarOptions: IcPaginationBarOptions = {
    alignment: "right",
    hideAllFromItemsPerPage: false,
    hideCurrentPage: false,
    hideFirstAndLastPageButton: false,
    hideRangeLabel: false,
    itemLabel: "Item",
    itemsPerPageOptions: [
      { label: "10", value: "10" },
      { label: "25", value: "25" },
      { label: "50", value: "50" },
    ],
    monochrome: false,
    pageLabel: "Page",
    rangeLabelType: "page",
    selectedItemsPerPage: 10,
    selectItemsPerPageOnEnter: true,
    setToFirstPageOnPaginationChange: false,
    showGoToPageControl: true,
    showItemsPerPageControl: true,
    type: "simple",
  };

  /**
   * If `true`, a checkbox column will be displayed to the left of the table which allows multiple rows to be selected.
   */
  @Prop() rowSelection: boolean = false;

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
  @Prop() sortOptions: {
    sortOrders: IcDataTableSortOrderOptions[];
    defaultColumn?: string;
  } = {
    sortOrders: ["unsorted", "ascending", "descending"],
    defaultColumn: "",
  };

  /**
   * If `true`, column headers will remain at the top of the table when scrolling vertically.
   */
  @Prop() stickyColumnHeaders: boolean = false;

  /**
   * If `true`, row headers will remain to the left when scrolling horizontally.
   */
  @Prop() stickyRowHeaders: boolean = false;

  /**
   * Sets the layout of the table
   */
  @Prop() tableLayout?: "fixed" | "auto" = "fixed";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * Sets the method used to truncate long text in cells where textWrap is `false`. The `tooltip` truncation pattern allows the overflowing text to be seen in a tooltip. The `show-hide` truncation pattern allows the overflowing text to be shown and hidden using the ic-typography "See more"/"See less" buttons.
   */
  @Prop() truncationPattern?: IcDataTableTruncationTypes;

  /**
   * If `true`, the table displays a linear loading indicator below the header row to indicate an updating state.
   */
  @Prop() updating: boolean = false;

  /**
   * Sets the props for the linear loading indicator used in the updating state.
   */
  @Prop() updatingOptions?: {
    description?: string;
    max?: number;
    min?: number;
    progress?: number;
    monochrome?: boolean;
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
   * Sets the table width. Can be set to `auto` or a specific value in `px`, `rem`, or `%`.
   */
  @Prop() width?: string;

  /**
   * Emitted when the `globalRowHeight` or `variableRowHeight` properties change in the data table.
   */
  @Event() icRowHeightChange: EventEmitter<void>;

  /**
   * Emitted when all rows are selected or deselected in the data table via the "select all" checkbox.
   */
  @Event() icSelectAllRows: EventEmitter<IcDataTableDataType[]>;

  /**
   * Emitted when the selected row changes in the data table.
   */
  @Event() icSelectedRowChange: EventEmitter<{
    row: IcDataTableDataType | null;
    selectedRows: IcDataTableDataType[];
    icRowId: string | null;
    selectedIcRowIds: string[];
  }>;

  /**
   * Emitted when the columns have finished loading after being updated or initially rendered.
   */
  @Event() icColumnsLoaded: EventEmitter<void>;

  /**
   * Emitted when the data has finished loading after being updated or initially rendered.
   */
  @Event() icDataLoaded: EventEmitter<void>;

  /**
   * Emitted when a column sort button is clicked.
   */
  @Event() icSortChange: EventEmitter<IcSortEventDetail>;

  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
    this.headerResizeObserver?.disconnect();
    window.removeEventListener("resize", this.handleResize);
  }

  componentWillLoad(): void {
    this.rowsPerPage = Number(
      this.paginationBarOptions.itemsPerPageOptions![0].value
    );
    this.previousRowsPerPage = this.rowsPerPage;
    this.toRow = this.rowsPerPage;
    this.sortedColumn = this.sortOptions.defaultColumn!;
    this.sortedColumnOrder = this.sortOptions.sortOrders[0];
    this.loadingOptions = {
      ...this.loadingOptions,
    };
    this.initialLoad = true;
    this.previousItemsPerPage = this.rowsPerPage;
  }

  componentDidLoad(): void {
    const tableElement = this.el.shadowRoot?.querySelector("table");
    const tableContainer =
      this.el.shadowRoot?.querySelector(".table-container");

    checkResizeObserver(this.runHeaderResizeObserver);

    if (this.dataUpdated) {
      this.dataUpdated = false;
    }

    if (
      tableElement &&
      tableContainer &&
      (tableElement.clientHeight > tableContainer.clientHeight ||
        tableElement.clientWidth > tableContainer.clientWidth)
    ) {
      this.scrollable = true;
    }
    if (this.loading) {
      this.startLoadingTimer();
      this.showLoadingIndicator();
    }

    if (this.truncationPattern) {
      this.getTypographyElements().forEach(
        (typographyEl: HTMLIcTypographyElement) => {
          const cellContainer = this.getCellContainer(typographyEl);
          if (
            cellContainer &&
            !cellContainer.classList.contains(this.TEXT_WRAP_STRING)
          ) {
            this.dataTruncation(typographyEl, cellContainer);
            this.resizeObserver = new ResizeObserver(
              // This gets triggered twice due to updated data and see more/see less button
              dynamicDebounce(
                () => {
                  this.dataTruncation(typographyEl, cellContainer);

                  if (!this.isNewDebounceDelaySet) {
                    this.debounceDelay = 200;
                    this.isNewDebounceDelaySet = true;
                  }
                },
                () => this.debounceDelay
              ) as ResizeObserverCallback
            );

            this.resizeObserver.observe(typographyEl);
          }
        }
      );
    }

    if (this.globalRowHeight !== "auto") {
      this.updateSetRowHeight();
    }
    window.addEventListener("resize", this.handleResize);

    this.icColumnsLoaded.emit();
    if (this.data && !this.loading && !this.updating) this.icDataLoaded.emit();
  }

  componentDidUpdate(): void {
    // truncation updates invoked here once new/updated data has
    // rendered to take into account updated .cell-container/ic-typography box model updates.
    if (
      this.truncationPattern === this.SHOW_HIDE_STRING ||
      this.truncationPattern === this.TOOLTIP_STRING
    ) {
      if (this.dataUpdated) {
        this.truncateUpdatedData();
      }
      if (this.tableSorted) {
        this.truncateTableSorted();
      }
      if (this.rowHeightSet) {
        this.truncateRowHeightSet();
      }
      if (this.itemsPerPageChange) {
        this.truncateItemsPerPageChange();
      }
      if (!this.initialLoad && this.icPageChangeEvent) {
        this.truncatePageChange();
      }
      if (this.densityUpdate) {
        this.truncateDensityUpdate();
      }
      if (this.truncationPatternUpdated) {
        this.truncatePatternUpdated();
      }
    }

    if (this.columnsUpdated) {
      this.icColumnsLoaded.emit();
      this.columnsUpdated = false;
    }

    if (this.dataUpdated && !this.loading && !this.updating) {
      this.icDataLoaded.emit();
      this.dataUpdated = false;
    }
  }

  componentDidRender(): void {
    this.fixCellTooltips();
    this.fixCellOverflow();
    this.updateCellHeightsWithDescriptions();
    this.adjustWidthForActionElement();
  }

  private runHeaderResizeObserver = () => {
    this.headerResizeObserver = new ResizeObserver(() => {
      this.headerResizeCallback();
    });
    this.headerResizeObserver.observe(this.el);
  };

  private headerResizeCallback = () => {
    if (!this.hideColumnHeaders && this.columnHeaderTruncation) {
      const tableContainerWidth =
        this.el.shadowRoot?.querySelector(".table-container")?.clientWidth;
      if (
        tableContainerWidth &&
        tableContainerWidth !== this.prevTableContainerWidth
      ) {
        this.el.shadowRoot
          ?.querySelectorAll("th.column-header")
          .forEach((header) => {
            const tooltip = header.querySelector(this.IC_TOOLTIP_STRING);
            const typographyEls = header.querySelectorAll(
              this.IC_TYPOGRAPHY_STRING
            );
            if (tooltip && typographyEls && typographyEls.length === 2) {
              tooltip.classList.remove(this.SHOW_TRUNC_TOOLTIP_STRING);
              if (typographyEls[1].clientWidth > typographyEls[0].clientWidth) {
                tooltip.classList.add(this.SHOW_TRUNC_TOOLTIP_STRING);
              }
            }
          });
        this.prevTableContainerWidth = tableContainerWidth;
      }
    }
  };

  private handleResize = () => {
    this.updateCellHeightsWithDescriptions();
    this.fixCellOverflow();
  };

  private getRowHeight = (cellContainer: HTMLElement) =>
    parseInt(getComputedStyle(document.documentElement).fontSize) *
    parseFloat(cellContainer.getAttribute(this.DATA_ROW_HEIGHT_STRING) || "");

  private truncateUpdatedData = () => {
    if (this.truncationPattern === this.SHOW_HIDE_STRING) {
      this.getTypographyElements().forEach((typographyEl) => {
        const cellContainer = this.getCellContainer(typographyEl);
        if (cellContainer) {
          const truncWrapper = this.getTruncWrapper(typographyEl);
          if (
            truncWrapper &&
            cellContainer.clientHeight - this.DEFAULT_LINE_HEIGHT >=
              truncWrapper.scrollHeight
          ) {
            this.resetSingleShowHideTruncation(typographyEl, cellContainer);
            return;
          }
          setTimeout(() => {
            // slight delay due to data rendering
            this.addShowHideTruncationIfNeeded(typographyEl, cellContainer);
          }, 150);
        }
      });
    }

    if (this.truncationPattern === this.TOOLTIP_STRING) {
      this.updateTruncationTooltip();
    }

    this.dataUpdated = false;
  };

  private truncateTableSorted = () => {
    if (this.truncationPattern === this.TOOLTIP_STRING) {
      this.updateTruncationTooltip();
    }

    if (this.truncationPattern === this.SHOW_HIDE_STRING) {
      this.getTypographyElements().forEach((typographyEl) => {
        const cellContainer = this.getCellContainer(typographyEl);

        if (cellContainer) {
          if (!cellContainer.classList.contains(this.TEXT_WRAP_STRING)) {
            this.createShowHideTruncation(typographyEl, cellContainer);
          } else {
            typographyEl.resetTruncation().then(() => {
              cellContainer.removeAttribute("style");
            });
          }
        }
      });
    }

    this.tableSorted = false;
  };

  private truncateRowHeightSet = () => {
    // This function recalculates the tooltip truncation when the rowHeight has been set.
    // This is in componentDidUpdate so a setTimeout is not used to wait for the render to be complete

    this.getTypographyElements().forEach((typographyEl) => {
      const cellContainer = this.getCellContainer(typographyEl);
      const tooltipEl = this.getTooltip(typographyEl);

      if (cellContainer) {
        if (this.globalRowHeight === "auto") {
          cellContainer.style.height = "";
          cellContainer.style.setProperty(this.ROW_HEIGHT_CSS_VARIABLE, null);
          cellContainer.removeAttribute(this.DATA_ROW_HEIGHT_STRING);

          if (this.truncationPattern === this.TOOLTIP_STRING) {
            this.removeTooltip(cellContainer, typographyEl, tooltipEl);
            typographyEl.setAttribute(
              "style",
              `${this.LINE_CLAMP_CSS_VARIABLE}: 0`
            );
          } else if (this.truncationPattern === this.SHOW_HIDE_STRING) {
            this.resetSingleShowHideTruncation(typographyEl, cellContainer);
          }

          return;
        }

        // If the set row height is bigger than the cell container even
        // with textWrap, set the row height
        if (
          !cellContainer.classList.contains(
            this.CELL_CONTAINER_WITH_DESCRIPTION_STRING
          ) &&
          !cellContainer.style.height &&
          this.getRowHeight(cellContainer) > cellContainer.clientHeight &&
          !cellContainer.classList.contains(this.TEXT_WRAP_STRING)
        ) {
          cellContainer.style.setProperty(
            this.ROW_HEIGHT_CSS_VARIABLE,
            cellContainer.getAttribute(this.DATA_ROW_HEIGHT_STRING)
          );
        }

        if (this.truncationPattern) {
          // If the set row height is bigger than the typography truncation wrapper
          // scroll height, remove see more / see less button
          if (this.truncationPattern === this.SHOW_HIDE_STRING) {
            const truncWrapper = this.getTruncWrapper(typographyEl);

            if (
              this.getShowHideButton(typographyEl) &&
              truncWrapper &&
              truncWrapper.scrollHeight <= cellContainer.clientHeight
            ) {
              this.resetSingleShowHideTruncation(typographyEl, cellContainer);
              return;
            }
          }
          this.truncate(typographyEl, cellContainer, tooltipEl);
        } else {
          this.updateSetRowHeight(typographyEl);
        }
      }
    });

    this.rowHeightSet = false;
  };

  private truncateItemsPerPageChange = () => {
    // Only run truncation on the new rows
    // when the number of items per page has increased
    const allRows = this.el.shadowRoot?.querySelectorAll(".table-row");

    if (allRows && this.rowsPerPage > this.previousItemsPerPage) {
      const newRows = Array.from(allRows).slice(this.previousItemsPerPage);

      newRows.forEach((row) => {
        row.querySelectorAll("ic-typography").forEach((typographyEl) => {
          const cellContainer = this.getCellContainer(typographyEl);
          const tooltipEl = this.getTooltip(typographyEl);

          if (cellContainer)
            this.truncate(typographyEl, cellContainer, tooltipEl);
        });
      });
    }

    this.previousItemsPerPage = this.rowsPerPage;
    this.itemsPerPageChange = false;
  };

  private truncatePageChange = () => {
    if (this.truncationPattern === this.TOOLTIP_STRING) {
      this.updateTruncationTooltip();
    }

    if (this.truncationPattern === this.SHOW_HIDE_STRING) {
      // set truncation to see more if opened and next/previous page is pressed
      this.getTypographyElements().forEach((typographyEl) => {
        const cellContainer = this.getCellContainer(typographyEl);

        if (
          cellContainer &&
          this.typographyScrollHeightExceedsContainerHeight(
            typographyEl,
            cellContainer
          ) &&
          !this.getShowHideButton(typographyEl)
        ) {
          this.addShowHideTruncation(cellContainer, typographyEl);
        }
      });
    }

    this.icPageChangeEvent = false;
  };

  private truncateDensityUpdate = () => {
    this.getTypographyElements().forEach((typographyEl) => {
      const cellContainer = this.getCellContainer(typographyEl);
      const tooltipEl = this.getTooltip(typographyEl);

      if (cellContainer) this.truncate(typographyEl, cellContainer, tooltipEl);
    });

    this.densityUpdate = false;
  };

  private typographyScrollHeightExceedsContainerHeight = (
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ) => cellContainer && typographyEl.scrollHeight > cellContainer.clientHeight;

  private cellContainerMinusLineHeightIsGreaterThanTruncWrapperScrollHeight = (
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ) => {
    const truncWrapper = this.getTruncWrapper(typographyEl);
    return (
      truncWrapper &&
      cellContainer.clientHeight - this.DEFAULT_LINE_HEIGHT >
        truncWrapper.scrollHeight
    );
  };

  private truncatePatternUpdated = () => {
    if (this.truncationPattern === this.TOOLTIP_STRING) {
      this.getTypographyElements().forEach((typographyEl) => {
        const cellContainer = this.getCellContainer(typographyEl);
        const tooltipEl = this.getTooltip(typographyEl);

        if (
          cellContainer &&
          this.typographyScrollHeightExceedsContainerHeight(
            typographyEl,
            cellContainer
          )
        ) {
          this.addTooltipTruncation(typographyEl, cellContainer, tooltipEl);
        }
      });
    } else if (this.truncationPattern === this.SHOW_HIDE_STRING) {
      this.getTypographyElements().forEach((typographyEl) => {
        const cellContainer = this.getCellContainer(typographyEl);

        if (cellContainer) {
          if (
            this.cellContainerMinusLineHeightIsGreaterThanTruncWrapperScrollHeight(
              typographyEl,
              cellContainer
            )
          ) {
            this.resetSingleShowHideTruncation(typographyEl, cellContainer);
            return;
          }
          this.addShowHideTruncationIfNeeded(typographyEl, cellContainer);
        }
      });
    }
  };

  private updateSetRowHeight = (typographyEl?: HTMLIcTypographyElement) => {
    const removeRowHeightVariable = (element: HTMLIcTypographyElement) => {
      const cellContainer = this.getCellContainer(element);

      if (
        cellContainer &&
        element.scrollHeight > this.getRowHeight(cellContainer)
      ) {
        cellContainer.style.removeProperty(this.ROW_HEIGHT_CSS_VARIABLE);
      }
    };

    if (typographyEl) {
      removeRowHeightVariable(typographyEl);
    } else {
      this.getTypographyElements().forEach((typographyEl) => {
        removeRowHeightVariable(typographyEl);
      });
    }
  };

  private createShowHideTruncation(
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement,
    descriptionHeight = 0
  ) {
    typographyEl.checkMaxLines(typographyEl.scrollHeight);
    typographyEl.setAttribute(
      "max-lines",
      `${this.getLines(cellContainer.clientHeight - descriptionHeight)}`
    );
    typographyEl.setShowHideExpanded(false);

    cellContainer.style.setProperty(this.ROW_HEIGHT_CSS_VARIABLE, null);
  }

  private getLines = (height: number): number =>
    Math.floor(height / this.DEFAULT_LINE_HEIGHT);

  private truncate = (
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement,
    tooltip: HTMLIcTooltipElement | null
  ) => {
    if (
      this.typographyScrollHeightExceedsContainerHeight(
        typographyEl,
        cellContainer
      )
    ) {
      //24 is the height of a single line
      if (!typographyEl.closest(this.TEXT_WRAP_CLASS)) {
        if (this.truncationPattern === this.TOOLTIP_STRING) {
          this.addTooltipTruncation(typographyEl, cellContainer, tooltip);
        }
        if (this.truncationPattern === this.SHOW_HIDE_STRING) {
          this.addShowHideTruncation(cellContainer, typographyEl);
        }
      }
    } else {
      if (this.truncationPattern === this.TOOLTIP_STRING && tooltip) {
        typographyEl.setAttribute(
          "style",
          `${this.LINE_CLAMP_CSS_VARIABLE}: 0`
        );

        cellContainer
          .querySelector(this.CELL_TEXT_WRAPPER_STRING)
          ?.prepend(typographyEl);
        tooltip.remove();
      }

      if (
        this.truncationPattern === this.SHOW_HIDE_STRING &&
        !isEmptyString(typographyEl?.getAttribute("max-lines"))
      ) {
        this.resetSingleShowHideTruncation(typographyEl, cellContainer);
      }
    }
  };

  private addTooltipTruncation(
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement,
    tooltip: HTMLIcTooltipElement | null
  ) {
    this.addLineClampCSS(typographyEl, cellContainer);

    if (!tooltip) {
      this.createTruncationTooltip(typographyEl, cellContainer);
    }
  }

  private addShowHideTruncationIfNeeded = (
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ): boolean => {
    if (
      this.typographyScrollHeightExceedsContainerHeight(
        typographyEl,
        cellContainer
      )
    ) {
      this.addShowHideTruncation(cellContainer, typographyEl);
      return true;
    }
    return false;
  };

  private addShowHideTruncation(
    cellContainer: HTMLElement,
    typographyEl: HTMLIcTypographyElement
  ) {
    cellContainer.classList.add(this.SHOW_HIDE_CSS_CLASS);
    this.createShowHideTruncation(typographyEl, cellContainer);
  }

  private dataTruncation = (
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ) => {
    // Tooltip truncation mentioned in AC. Will need revisiting
    const tooltip = this.getTooltip(typographyEl);
    if (
      cellContainer.classList.contains("data-type-element") ||
      this.dataUpdated
    ) {
      return;
    }

    if (
      this.truncationPattern === this.SHOW_HIDE_STRING &&
      this.getShowHideButton(typographyEl)
    ) {
      // If the see more/see less is present and the max lines is equal to the cell container
      // remove the see more/see less button
      const truncWrapper = this.getTruncWrapper(typographyEl);
      if (
        truncWrapper &&
        this.getLines(truncWrapper.scrollHeight) ===
          Number(typographyEl.getAttribute("max-lines"))
      ) {
        this.resetSingleShowHideTruncation(typographyEl, cellContainer);
      }
    }

    // Deals with setting and resetting row height and re-truncating data
    if (this.rowHeightSet && this.truncationPattern === this.SHOW_HIDE_STRING) {
      // cellContainer.clientHeight - 24 removes the extra line by see more/see less
      if (
        this.cellContainerMinusLineHeightIsGreaterThanTruncWrapperScrollHeight(
          typographyEl,
          cellContainer
        )
      ) {
        this.resetSingleShowHideTruncation(typographyEl, cellContainer);
        return;
      }

      if (this.addShowHideTruncationIfNeeded(typographyEl, cellContainer)) {
        return;
      }
    }

    if (
      typographyEl.scrollHeight > 0 &&
      cellContainer.clientHeight > 0 &&
      typographyEl.scrollHeight === cellContainer.clientHeight
    ) {
      if (tooltip) {
        this.removeTooltip(cellContainer, typographyEl, tooltip);
      }
      return;
    }

    this.truncate(typographyEl, cellContainer, tooltip);
  };

  private getTruncWrapper = (typographyEl: HTMLIcTypographyElement) =>
    typographyEl.shadowRoot?.querySelector(".trunc-wrapper");

  private getShowHideButton = (typographyEl: HTMLIcTypographyElement) =>
    typographyEl.shadowRoot?.querySelector("button");

  // Set the height to initial if row height is set and the show / hide truncation
  // is clicked
  @Listen("typographyTruncationExpandToggle")
  handleTypographyTruncationExpandToggle({
    detail,
  }: CustomEvent<{
    expanded: boolean;
    typographyEl: HTMLIcTypographyElement;
  }>): void {
    const { expanded, typographyEl } = detail;
    const cellContainer = this.getCellContainer(typographyEl);

    if (
      cellContainer?.style.getPropertyValue(this.ROW_HEIGHT_CSS_VARIABLE) &&
      expanded
    ) {
      cellContainer.style.setProperty(this.ROW_HEIGHT_CSS_VARIABLE, "inherit");
    }
  }

  @Listen("icPageChange")
  handlePageChange({ detail, target }: CustomEvent<{ value: number }>): void {
    if ((target as HTMLIcPaginationBarElement).parentElement !== this.el) {
      this.fromRow = (detail.value - 1) * this.rowsPerPage;
      this.toRow = this.fromRow + this.rowsPerPage;
      const tableRowsContainer = this.el.shadowRoot?.querySelector(
        ".table-row-container"
      );
      if (tableRowsContainer) {
        if (this.previousRowsPerPage === this.rowsPerPage) {
          tableRowsContainer.scrollTop = 0;
        } else if (this.previousRowsPerPage < this.rowsPerPage) {
          tableRowsContainer.scrollTop = this.scrollOffset;
          this.previousRowsPerPage = this.rowsPerPage;
        } else {
          this.previousRowsPerPage = this.rowsPerPage;
        }
      }
      this.selectedRows = [];
    }

    if (!this.initialLoad && this.previousPaginationPage !== detail.value) {
      // This is to prevent icPageChange from triggering truncation on first load
      this.icPageChangeEvent = true;
    }

    this.previousPaginationPage = detail.value;
    this.initialLoad = false;
  }

  @Listen("icItemsPerPageChange")
  handleItemsPerPageChange({
    detail,
    target,
  }: CustomEvent<{ value: number }>): void {
    if ((target as HTMLIcPaginationBarElement).parentElement !== this.el) {
      this.previousRowsPerPage = this.rowsPerPage;
      this.rowsPerPage = detail.value;
    }

    this.itemsPerPageChange = true;
  }

  @Listen("icTableDensityUpdate")
  handleDensityChange(ev: CustomEvent<IcDensityUpdateEventDetail>): void {
    this.density = ev.detail.value;
  }

  @Watch("loading")
  loadingHandler(): void {
    if (this.loading) {
      this.startLoadingTimer();
      setTimeout(() => {
        this.showLoadingIndicator();
      }, 500);
    }
  }

  @Watch("truncationPattern")
  truncationPatternHandler(): void {
    if (this.truncationPattern === this.TOOLTIP_STRING) {
      this.resetAllShowHideTruncation();
      this.updateTruncationTooltip(true);

      // Not using debounceDataTruncation here due to resizeObserver not being triggered
      this.getTypographyElements().forEach((typographyEl) => {
        const cellContainer = this.getCellContainer(typographyEl);
        const tooltip = this.getTooltip(typographyEl);

        if (cellContainer) this.truncate(typographyEl, cellContainer, tooltip);
      });
    } else if (this.truncationPattern === this.SHOW_HIDE_STRING) {
      // ResizeObserver is trigger here due to the see more/see less links being removed.
      // The resizeObserver will also apply the tooltip where relevant
      this.updateTruncationTooltip(true);
      this.getTypographyElements().forEach((typographyEl) => {
        const cellContainer = this.getCellContainer(typographyEl);

        if (cellContainer) {
          if (
            this.cellContainerMinusLineHeightIsGreaterThanTruncWrapperScrollHeight(
              typographyEl,
              cellContainer
            )
          ) {
            this.resetSingleShowHideTruncation(typographyEl, cellContainer);
            return;
          }
          setTimeout(() => {
            // slight delay due to data rendering
            this.addShowHideTruncationIfNeeded(typographyEl, cellContainer);
          }, 150);
        }
      });
    }

    this.truncationPatternUpdated = true;
  }

  @Watch("data")
  async dataHandler(): Promise<void> {
    this.loadingOptions = {
      ...this.loadingOptions,
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

  @Watch("density")
  async densityHandler(): Promise<void> {
    this.densityUpdate = true;
  }

  private removeTextWrap = (): void => {
    this.getTypographyElements().forEach((typographyEl) => {
      const tableCell = typographyEl.closest("td");
      if (tableCell?.classList.contains(this.TEXT_WRAP_STRING)) {
        tableCell.classList.remove(this.TEXT_WRAP_STRING);
      }
    });
  };

  private getCellContainer = (
    typographyEl: HTMLIcTypographyElement
  ): HTMLElement | null => typographyEl.closest(".cell-container");

  private deleteTextWrapDataKey = (
    array?: IcDataTableColumnObject[] | IcDataTableDataType[]
  ) =>
    Array.isArray(array) &&
    array.forEach((val) => val.textWrap && delete val.textWrap);

  private resetSingleShowHideTruncation = (
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ) => {
    const truncWrapper = this.getTruncWrapper(typographyEl);

    if (!(cellContainer && truncWrapper)) return;

    if (
      truncWrapper.scrollHeight > cellContainer.clientHeight &&
      !isEmptyString(typographyEl.getAttribute("max-lines")) &&
      Math.floor(cellContainer?.clientHeight / this.DEFAULT_LINE_HEIGHT) !==
        Number(typographyEl.getAttribute("max-lines"))
    ) {
      typographyEl.checkMaxLines(truncWrapper.scrollHeight);
      typographyEl.setAttribute(
        "max-lines",
        `${Math.floor(cellContainer?.clientHeight / this.DEFAULT_LINE_HEIGHT)}`
      );
      typographyEl.setShowHideExpanded(false);

      cellContainer.style.setProperty(this.ROW_HEIGHT_CSS_VARIABLE, null);
    } else if (
      !cellContainer.classList.contains(
        this.CELL_CONTAINER_WITH_DESCRIPTION_STRING
      )
    ) {
      typographyEl.resetTruncation().then(() => {
        if (!typographyEl.closest(this.TEXT_WRAP_CLASS)) {
          cellContainer.style.setProperty(
            this.ROW_HEIGHT_CSS_VARIABLE,
            cellContainer.getAttribute(this.DATA_ROW_HEIGHT_STRING)
          );
        }
      });
    }
  };

  private resetAllShowHideTruncation = () => {
    this.getTypographyElements().forEach((typographyEl) => {
      const cellContainer = this.getCellContainer(typographyEl);

      typographyEl.resetTruncation().then(() => {
        if (cellContainer && !typographyEl.closest(this.TEXT_WRAP_CLASS)) {
          cellContainer.style.setProperty(
            this.ROW_HEIGHT_CSS_VARIABLE,
            cellContainer.getAttribute(this.DATA_ROW_HEIGHT_STRING)
          );
        }
      });
    });
  };

  @Watch("globalRowHeight")
  @Watch("variableRowHeight")
  rowHeightChangeHandler(newValue: number, oldValue: number): void {
    if (+newValue !== +oldValue) {
      this.deleteTextWrapDataKey(this.data);
      this.deleteTextWrapDataKey(this.columns);
      this.removeTextWrap();

      this.icRowHeightChange.emit();

      this.rowHeightSet = true;
    }
  }

  /**
   * Resets the `globalRowHeight` prop to number or auto and sets the `variableRowHeight` prop to `null`.
   */
  @Method()
  async resetRowHeights(rowHeight?: number | "auto"): Promise<void> {
    this.globalRowHeight = rowHeight || "auto";
    this.variableRowHeight = undefined;
  }

  private showLoadingIndicator() {
    if (this.loadingOptions?.overlay) {
      this.loadingOverlay?.classList.add("show");
    }
    this.loadingIndicator?.classList.add("show");
  }

  private startLoadingTimer = (): void => {
    this.hasLoadedForOneSecond = false;
    this.timerStarted = Date.now();
    setTimeout(() => {
      this.hasLoadedForOneSecond = true;
      this.timerStarted = 0;
    }, this.minimumLoadingDisplayDuration);
  };

  private isObject = (value: any) =>
    value !== undefined && value !== null && typeof value === "object";

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
    if (!(this.isObject(cell) && Object.keys(cell).includes(key))) return;

    return this.getObjectValue(cell, key);
  };

  private createUpdatingIndicator = () => {
    const { description, max, min, progress, monochrome } =
      this.updatingOptions || {};
    const visibleColumnCount = this.columns.filter(
      (col) => col.hidden !== true
    ).length;
    return (
      <th
        colSpan={visibleColumnCount + (this.rowSelection && this.data ? 1 : 0)}
        class="updating-state"
      >
        <ic-loading-indicator
          theme={this.theme}
          monochrome={monochrome}
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

  private setRowHeight = (height: number) =>
    pxToRem(
      `${
        height * this.DENSITY_HEIGHT_MULTIPLIER[this.density] -
        this.DENSITY_PADDING_HEIGHT_DIFF[this.density]
      }px`
    );

  private setTruncationClass = () =>
    this.truncationPattern
      ? { [`truncation-${this.truncationPattern}`]: true }
      : {};

  private getColumnWidth = (
    columnWidth?: string | IcDataTableColumnWidthTypes
  ) => {
    // TODO: Setting max width on columns
    let columnWidthStyling = {};

    if (typeof columnWidth === "string") {
      columnWidthStyling = {
        ...columnWidthStyling,
        ["--column-width"]: columnWidth,
      };
    } else if (columnWidth && Object.keys(columnWidth).length > 0) {
      if (columnWidth.minWidth) {
        columnWidthStyling = {
          ...columnWidthStyling,
          ["--column-min-width"]: columnWidth.minWidth,
        };
      }

      if (columnWidth.maxWidth) {
        columnWidthStyling = {
          ...columnWidthStyling,
          ["--column-max-width"]: columnWidth.maxWidth,
        };
      }

      if (columnWidth.width) {
        columnWidthStyling = {
          ...columnWidthStyling,
          ["--column-width"]: columnWidth.width,
        };
      }
    }

    return columnWidthStyling;
  };

  private getCalculatedRowHeight = (
    columnProps: IcDataTableColumnObject,
    cell: any,
    rowTextWrap?: boolean,
    currentRowHeight?: number
  ) => {
    if (
      (this.truncationPattern || currentRowHeight) &&
      !columnProps?.textWrap &&
      !rowTextWrap &&
      !this.getCellOptions(cell, "textWrap") &&
      columnProps?.dataType !== "element"
    ) {
      return {
        [this.ROW_HEIGHT_CSS_VARIABLE]: this.setRowHeight(currentRowHeight!),
      };
    }

    return {};
  };

  private getSlottedActionElement = (
    actionElement: HTMLElement
  ): Element | null => {
    const slotName = actionElement.getAttribute("name");
    return this.el.querySelector(`[slot="${slotName}"]`);
  };

  private adjustWidthForActionElement = () => {
    const elements = this.el.shadowRoot?.querySelectorAll(".action-element");
    elements?.forEach((actionElementSpan) => {
      const actionElement = actionElementSpan.firstChild as HTMLElement;
      const slottedActionElement = this.getSlottedActionElement(actionElement);
      const width = slottedActionElement?.getBoundingClientRect().width ?? 0;
      const gridWrapper =
        actionElementSpan.closest<HTMLElement>(".cell-grid-wrapper");
      if (gridWrapper) {
        gridWrapper.style.gridTemplateColumns = `auto calc(${width}px + var(--ic-space-xs))`;
      }
    });
  };

  private createCellContent = (
    columnProps: IcDataTableColumnObject,
    cell: any,
    cellSlotName: string,
    hasIcon: boolean,
    cellValue: (key: string) => any,
    rowOptions?: IcDataTableRowOptions,
    currentRowHeight?: number
  ): HTMLElement => (
    <div
      class={{
        "cell-container": columnProps?.dataType !== "element",
        "cell-icon": hasIcon || !!columnProps?.icon?.icon,
        [`cell-alignment-${
          columnProps?.columnAlignment?.horizontal ||
          rowOptions?.rowAlignment?.horizontal ||
          this.getCellAlignment(cell, "horizontal")
        }`]:
          !!columnProps?.columnAlignment?.horizontal ||
          !!rowOptions?.rowAlignment?.horizontal ||
          !!this.getCellAlignment(cell, "horizontal"),
        [`data-type-${columnProps?.dataType}`]: true,
        [this.TEXT_WRAP_STRING]:
          columnProps?.textWrap ||
          rowOptions?.textWrap ||
          !!this.getCellOptions(cell, "textWrap"),
        [`cell-emphasis-${
          (this.isObject(cell) && cellValue("emphasis")) ||
          columnProps?.emphasis ||
          rowOptions?.emphasis
        }`]:
          (this.isObject(cell) && !!cellValue("emphasis")) ||
          !!columnProps?.emphasis ||
          !!rowOptions?.emphasis,
        ...this.setTruncationClass(),
        [this.CELL_CONTAINER_WITH_DESCRIPTION_STRING]:
          this.isObject(cell) && Object.keys(cell).includes("description"),
      }}
      style={{
        ...this.getCalculatedRowHeight(
          columnProps,
          cell,
          rowOptions?.textWrap,
          currentRowHeight
        ),
        ...this.getColumnWidth(columnProps?.columnWidth),
      }}
      data-row-height={
        this.truncationPattern || currentRowHeight
          ? this.setRowHeight(currentRowHeight!)
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
            (hasIcon || columnProps?.icon?.onAllCells) &&
            (cellValue("icon") || columnProps?.icon?.icon) && (
              <span
                class="icon"
                innerHTML={
                  sanitizeHTMLIconString(cellValue("icon")) ||
                  sanitizeHTMLIconString(columnProps?.icon?.icon as string)
                }
              ></span>
            )
          )}
          {columnProps?.dataType !== "element" &&
            !isSlotUsed(this.el, cellSlotName) && (
              <div
                class={{
                  "cell-text-wrapper": true,
                  "cell-text-no-wrap": !this.truncationPattern,
                }}
              >
                <ic-typography
                  variant="body"
                  class={{
                    [`cell-emphasis-${
                      (this.isObject(cell) && cellValue("emphasis")) ||
                      columnProps?.emphasis ||
                      rowOptions?.emphasis
                    }`]:
                      (this.isObject(cell) && !!cellValue("emphasis")) ||
                      !!columnProps?.emphasis ||
                      !!rowOptions?.emphasis,
                    [`text-${this.density}`]: this.notDefaultDensity(),
                  }}
                >
                  {this.isObject(cell) && columnProps?.dataType !== "date" ? (
                    Object.keys(cell).includes("href") ? (
                      <ic-link
                        href={cellValue("href")}
                        theme={this.theme}
                        target={cellValue("target") || undefined}
                        rel={cellValue("rel") || undefined}
                      >
                        {cellValue("data")}
                      </ic-link>
                    ) : (
                      cellValue("data")
                    )
                  ) : (
                    this.getCellContent(cell, columnProps?.dataType)
                  )}
                </ic-typography>
                {this.isObject(cell) &&
                  Object.keys(cell).includes("description") && (
                    <div
                      class={{
                        ["cell-description"]: true,
                        [`data-type-${columnProps?.dataType}`]: true,
                      }}
                    >
                      {cellValue("description")?.icon && (
                        <span
                          class="cell-description-icon"
                          innerHTML={sanitizeHTMLIconString(
                            cellValue("description").icon
                          )}
                        ></span>
                      )}
                      <ic-typography
                        variant="caption"
                        class="cell-description-text"
                      >
                        {cellValue("description")?.data ??
                          cellValue("description")}
                      </ic-typography>
                    </div>
                  )}
              </div>
            )}
        </Fragment>
      )}
    </div>
  );

  private createCells = (row: IcDataTableDataType, rowIndex: number) => {
    const variableRowHeightVal = this.variableRowHeight?.({
      ...row,
      index: rowIndex,
    });

    const currentRowHeight = variableRowHeightVal
      ? variableRowHeightVal !== "auto" && variableRowHeightVal
      : this.globalRowHeight !== "auto" && this.globalRowHeight;

    const { rowOptions } = row;

    return this.columns.map((column) => {
      const { columnAlignment, columnWidth, dataType, hidden, key } = column;

      if (hidden) return;

      const cell = this.getObjectValue(row, key);
      const cellSlotName = `${key}-${rowIndex}`;

      const cellValue = (key: string) => this.getObjectValue(cell, key);

      if (key === "header" && rowOptions?.header) {
        return (
          <th
            scope="row"
            class={{
              "row-header": true,
              "row-header-sticky": this.stickyRowHeaders,
              [`row-header-alignment-${rowOptions.rowAlignment?.horizontal}`]:
                !!rowOptions.rowAlignment?.horizontal,
            }}
          >
            {rowOptions.header}
          </th>
        );
      }

      const CellContent = this.createCellContent(
        column,
        cell,
        cellSlotName,
        this.isObject(cell) && Object.keys(cell).includes("icon"),
        cellValue,
        rowOptions,
        currentRowHeight || undefined
      );

      return (
        <td
          class={{
            "table-cell": true,
            "with-overflow": dataType === "element",
            [`table-density-${this.density}`]: this.notDefaultDensity(),
            [`cell-vertical-align-${
              columnAlignment?.vertical ||
              rowOptions?.rowAlignment?.vertical ||
              this.getCellAlignment(cell, "vertical")
            }`]:
              !!columnAlignment?.vertical ||
              !!rowOptions?.rowAlignment?.vertical ||
              !!this.getCellAlignment(cell, "vertical"),
          }}
          style={{ ...this.getColumnWidth(columnWidth) }}
        >
          {isSlotUsed(this.el, `${cellSlotName}-action-element`) ? (
            <div class="cell-grid-wrapper">
              {CellContent}
              <span class="action-element">
                <slot name={`${cellSlotName}-action-element`} />
              </span>
            </div>
          ) : (
            CellContent
          )}
        </td>
      );
    });
  };

  private createColumnHeaders = () =>
    (this.columns || []).map(
      (
        {
          cellAlignment,
          colspan,
          icon,
          key,
          title,
          columnWidth,
          excludeColumnFromSort,
          hidden,
        },
        index
      ) =>
        hidden !== true && (
          <th
            scope="col"
            class={{
              ["column-header"]: true,
              [`table-density-${this.density}`]: this.notDefaultDensity(),
              ["updating-state-headers"]: this.updating && !this.loading,
            }}
            style={{ ...this.getColumnWidth(columnWidth) }}
            colSpan={colspan}
          >
            <div
              class={{
                "column-header-inner-container": true,
                "truncation-tooltip": this.columnHeaderTruncation,
                [`column-header-alignment-${cellAlignment}`]: !!cellAlignment,
              }}
            >
              {isSlotUsed(this.el, `${key}-column-icon`) ? (
                <slot name={`${key}-column-icon`} />
              ) : (
                icon &&
                !icon.hideOnHeader && (
                  <span
                    class="icon"
                    innerHTML={sanitizeHTMLIconString(icon.icon)}
                  ></span>
                )
              )}
              {this.columnHeaderTruncation ? (
                <ic-tooltip label={title} target={`column-header-${index}`}>
                  <ic-typography
                    id={`column-header-${index}`}
                    variant="body"
                    class={{
                      ["column-header-text"]: true,
                      [`text-${this.density}`]: this.notDefaultDensity(),
                    }}
                  >
                    {title}
                  </ic-typography>
                </ic-tooltip>
              ) : (
                <ic-typography
                  variant="body"
                  class={{
                    ["column-header-text"]: true,
                    [`text-${this.density}`]: this.notDefaultDensity(),
                  }}
                >
                  {title}
                </ic-typography>
              )}
              {this.sortable && !excludeColumnFromSort && (
                <ic-button
                  variant="icon-tertiary"
                  id={`sort-button-${key}`}
                  aria-label={this.getSortButtonLabel(key)}
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
            {this.columnHeaderTruncation && (
              <ic-typography
                variant="body"
                aria-hidden="true"
                class={{
                  ["column-header-text"]: true,
                  ["dummy-column-header-text"]: this.columnHeaderTruncation,
                  [`text-${this.density}`]: this.notDefaultDensity(),
                }}
              >
                {title}
              </ic-typography>
            )}
          </th>
        )
    );

  private onRowClick = (row: IcDataTableDataType) => {
    const notCurrentlySelected = !this.selectedIcRowIds.includes(row.icRowId);

    this.selectedIcRowIds = notCurrentlySelected
      ? [...this.selectedIcRowIds, row.icRowId]
      : this.selectedIcRowIds.filter(
          (selectedRowId) => selectedRowId !== row.icRowId
        );

    this.selectedRows = notCurrentlySelected
      ? [...this.selectedRows, row]
      : this.selectedRows.filter(
          (selectedRow) => selectedRow.icRowId !== row.icRowId
        );

    this.icSelectedRowChange.emit({
      row: notCurrentlySelected ? row : null,
      selectedRows: this.selectedRows,
      icRowId: notCurrentlySelected ? row.icRowId : null,
      selectedIcRowIds: this.selectedIcRowIds,
    });
  };

  private selectAllRows = () => {
    this.selectedRows =
      this.organisedData &&
      this.selectedIcRowIds.length !== this.organisedData.length
        ? [...this.organisedData]
        : [];

    this.selectedIcRowIds = this.selectedRows.map((row) => row.icRowId);

    this.icSelectAllRows.emit(this.selectedRows);
  };

  private createRows = () => {
    const data = this.showPagination
      ? this.data?.slice(this.fromRow, this.toRow)
      : this.data?.slice();

    const paginationOffset = this.showPagination ? this.fromRow : 0;

    this.data?.forEach((row) => {
      if (!("icRowId" in row)) {
        row.icRowId = this.createRowId();
      }
    });

    /**
     * Ensures that createCells has a value in data to map over to actually render the slot.
     * Removes the need for the user to add it multiple times.
     * `addDataToPosition` used to add the element in the correct column order.
     * Adding empty string value in to give `createCells` something to loop over.
     */
    this.organisedData = data?.map((row, rowIndex) => {
      const slottedColumns = this.columns
        .map(
          ({ key }, index) =>
            isSlotUsed(this.el, `${key}-${rowIndex + paginationOffset}`) && {
              key,
              index,
            }
        )
        .filter(
          (col) =>
            !!col &&
            // skip the column if its already in the row
            !Object.prototype.hasOwnProperty.call(row, col.key)
        ) as { key: string; index: number }[];
      return slottedColumns.length > 0
        ? addDataToPosition(row, slottedColumns, "")
        : row;
    });

    return this.organisedData
      ?.sort(
        this.sortable &&
          !this.disableAutoSort &&
          this.sortedColumn &&
          !this.columns.find((col) => col.key === this.sortedColumn)
            ?.disableAutoSort
          ? this.getSortFunction()
          : undefined
      )
      .map((row, index) => {
        const isRowSelected =
          this.rowSelection && this.selectedIcRowIds.includes(row.icRowId);
        const cellIndex = index + paginationOffset;

        return (
          <tr
            class={{
              "table-row": true,
              "table-row-selected": isRowSelected,
            }}
          >
            {this.rowSelection && (
              <td
                class={{
                  "table-cell": true,
                  "checkbox-cell": true,
                  [`table-density-${this.density}`]: this.notDefaultDensity(),
                }}
              >
                <div class="checkbox-wrapper">
                  <ic-checkbox
                    class="ic-data-table-checkbox"
                    checked={isRowSelected}
                    disabled={this.updating || this.loading}
                    hideLabel
                    label={`${
                      isRowSelected ? "Deselect" : "Select"
                    } row ${cellIndex}`}
                    onIcCheck={() => this.onRowClick(row)}
                    size={this.density === "dense" ? "small" : "medium"}
                    value={cellIndex}
                  ></ic-checkbox>
                </div>
              </td>
            )}
            {this.createCells(row, cellIndex)}
          </tr>
        );
      });
  };

  private getObjectValue = (cell: IcDataTableDataType, key: string) =>
    Object.values(cell)[Object.keys(cell).indexOf(key)];

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
    return this.columns.find((col) => col.key === this.sortedColumn)!
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
    const sortOrders = this.sortOptions.sortOrders;

    if (column !== this.sortedColumn) {
      if (this.sortedColumn) {
        this.el.shadowRoot
          ?.querySelector(`#sort-button-${this.sortedColumn}`)
          ?.setAttribute("aria-label", this.getSortButtonLabel(column)); // Passing through unsorted column returns correct label for newly unsorted column
      }
      this.sortedColumn = column;
      this.sortedColumnOrder = "unsorted";
    }

    let nextSortOrderIndex = sortOrders.indexOf(this.sortedColumnOrder) + 1;

    if (nextSortOrderIndex > sortOrders.length - 1) {
      nextSortOrderIndex = 0;
    }

    this.sortedColumnOrder = sortOrders[nextSortOrderIndex];

    this.el.shadowRoot
      ?.querySelector(`#sort-button-${column}`)
      ?.setAttribute("aria-label", this.getSortButtonLabel(column));

    this.tableSorted = true;

    this.icSortChange.emit({
      columnName: column,
      sorted: this.sortedColumnOrder,
    });
  };

  /** Gets all `ic-typography`elements within the data table, excluding column headers and cell descriptions */
  private getTypographyElements = (): HTMLIcTypographyElement[] =>
    Array.from(
      this.el.shadowRoot?.querySelectorAll(
        "ic-typography:not(.column-header-text,.cell-description-text)"
      ) || []
    );

  private getTooltip = (typographyEl: HTMLIcTypographyElement) =>
    typographyEl.closest<HTMLIcTooltipElement>(this.TOOLTIP);

  private updateTruncationTooltip = (removeTooltipOnly = false) => {
    this.getTypographyElements().forEach((typographyEl) => {
      const tooltip = this.getTooltip(typographyEl);
      const cellContainer = this.getCellContainer(typographyEl);

      if (cellContainer) {
        if (typographyEl.closest(this.TEXT_WRAP_CLASS)) {
          this.removeTooltip(cellContainer, typographyEl, tooltip);
          typographyEl.setAttribute(
            "style",
            `${this.LINE_CLAMP_CSS_VARIABLE}: 0`
          );
          return;
        }

        this.regenerateTooltip(
          cellContainer,
          typographyEl,
          tooltip,
          removeTooltipOnly
        );
      }
    });
  };

  private updateScrollOffset = () => {
    const tableRowContainer = this.el.shadowRoot?.querySelector(
      ".table-row-container"
    );
    if (tableRowContainer) this.scrollOffset = tableRowContainer.scrollTop;
  };

  private updateRowHeightForDescriptions = (
    rowHeight: number,
    cellContainer: Element
  ) => {
    cellContainer.setAttribute(
      this.DATA_ROW_HEIGHT_STRING,
      rowHeight.toString()
    );
    cellContainer.setAttribute(
      "style",
      `${this.ROW_HEIGHT_CSS_VARIABLE}: ${rowHeight}px`
    );
  };

  private getDescriptionHeight = (description: Element) => {
    const descriptionMarginTop = window
      .getComputedStyle(description)
      .getPropertyValue("margin-top");
    return description.clientHeight + parseInt(descriptionMarginTop, 10);
  };

  /** Method to update the row heights on cells with descriptions and tooltip truncation */
  private updateCellHeightsWithDescriptions = () => {
    const isXSDevice = deviceSizeMatches(IC_DEVICE_SIZES.XS);
    this.el.shadowRoot
      ?.querySelectorAll(this.CELL_DESCRIPTION_STRING)
      ?.forEach((description) => {
        const cellContainer = description.closest<HTMLElement>(
          `.${this.CELL_CONTAINER_WITH_DESCRIPTION_STRING}`
        );
        const typography =
          cellContainer?.querySelector<HTMLIcTypographyElement>(
            this.IC_TYPOGRAPHY_STRING
          );

        if (
          typography &&
          cellContainer &&
          this.globalRowHeight &&
          this.globalRowHeight !== "auto"
        ) {
          const descriptionHeight = this.getDescriptionHeight(description);
          const descriptionHeightPlusLineHeight =
            descriptionHeight + this.DEFAULT_LINE_HEIGHT;
          if (
            !typography.textContent &&
            descriptionHeightPlusLineHeight > this.globalRowHeight
          ) {
            this.updateRowHeightForDescriptions(
              descriptionHeight,
              cellContainer
            );
          } else if (this.truncationPattern === this.TOOLTIP_STRING) {
            if (descriptionHeightPlusLineHeight > this.globalRowHeight) {
              const cellIcon = cellContainer.querySelector(".icon");
              let rowHeight = descriptionHeightPlusLineHeight;
              if (cellIcon && isXSDevice) {
                // recalculate descriptionHeight as when a word break occurs this value changes
                // Additional spacing given for 300-400% zoom
                rowHeight += cellIcon.clientHeight;
              }
              this.updateRowHeightForDescriptions(rowHeight, cellContainer);
            }
            this.addLineClampCSS(typography, cellContainer);
            // Additional case for show/hide truncation for when a description is present, but the text
            // isn't overflowing the cell to trigger the show more button to appear.
          } else if (
            this.truncationPattern === this.SHOW_HIDE_STRING &&
            descriptionHeightPlusLineHeight > this.globalRowHeight &&
            typography.style.getPropertyValue("--truncation-max-lines") !==
              "initial"
          ) {
            this.updateRowHeightForDescriptions(
              descriptionHeightPlusLineHeight,
              cellContainer
            );
            this.createShowHideTruncation(
              typography,
              cellContainer,
              descriptionHeight
            );
          }
        }
      });
  };

  private regenerateTooltip(
    cellContainer: HTMLElement,
    typographyEl: HTMLIcTypographyElement,
    tooltip: HTMLIcTooltipElement | null,
    removeTooltipOnly?: boolean
  ) {
    // When sorting the table, instead of regenerating the tooltip,
    // the tooltip details are updated

    if (tooltip) {
      if (this.tableSorted) {
        tooltip.setAttribute("target", typographyEl.id);
        tooltip.setAttribute("label", typographyEl.textContent!);
      } else {
        this.removeTooltip(cellContainer, typographyEl, tooltip);
      }
      if (removeTooltipOnly) {
        return;
      }
    }

    // This add line clamp to data only when
    // the data object has been updated
    if (!typographyEl.getAttribute("style") && this.dataUpdated) {
      this.addLineClampCSS(typographyEl, cellContainer);
    }

    if (
      typographyEl?.scrollHeight > cellContainer?.clientHeight &&
      this.truncationPattern === this.TOOLTIP_STRING
    ) {
      if (
        !typographyEl.getAttribute("style") ||
        typographyEl.style.cssText.includes(
          `${this.LINE_CLAMP_CSS_VARIABLE}: 0;`
        )
      ) {
        this.addLineClampCSS(typographyEl, cellContainer);
      }
      if (!cellContainer.querySelector(this.IC_TOOLTIP_STRING))
        this.createTruncationTooltip(typographyEl, cellContainer);
    }
  }
  private setTableDimensions = () => {
    let tableHostDimensions = {};

    if (this.width) {
      tableHostDimensions = {
        ...tableHostDimensions,
        ["--table-width"]: this.width,
      };
    }

    if (this.height) {
      tableHostDimensions = {
        ...tableHostDimensions,
        ["--table-height"]: this.height,
      };
    }

    if (this.maxWidth) {
      tableHostDimensions = {
        ...tableHostDimensions,
        ["--table-max-width"]: this.maxWidth,
      };
    }

    if (this.minWidth) {
      tableHostDimensions = {
        ...tableHostDimensions,
        ["--table-min-width"]: this.minWidth,
      };
    }

    return tableHostDimensions;
  };

  private removeTooltip(
    cellContainer: HTMLElement,
    typographyEl: HTMLIcTypographyElement,
    tooltip: HTMLIcTooltipElement | null
  ) {
    cellContainer
      .querySelector(this.CELL_TEXT_WRAPPER_STRING)
      ?.prepend(typographyEl);
    tooltip?.remove();
  }

  private addLineClampCSS(
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ) {
    const descriptionCellHeight = cellContainer.querySelector(
      this.CELL_DESCRIPTION_STRING
    )?.clientHeight;
    const cellContainerHeight = cellContainer.clientHeight;

    let totalHeight = cellContainerHeight;
    if (
      cellContainer.classList.contains(
        this.CELL_CONTAINER_WITH_DESCRIPTION_STRING
      ) &&
      descriptionCellHeight &&
      cellContainerHeight > descriptionCellHeight
    ) {
      const iconHeight =
        (deviceSizeMatches(IC_DEVICE_SIZES.XS) &&
          cellContainer?.querySelector(".icon")?.clientHeight) ||
        0;
      totalHeight = totalHeight - descriptionCellHeight - iconHeight;
    }

    typographyEl.setAttribute(
      "style",
      `${this.LINE_CLAMP_CSS_VARIABLE}: ${this.getLines(totalHeight || 0)}`
    );
  }

  private createTruncationTooltip(
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ) {
    const tooltipEl = document.createElement(
      this.IC_TOOLTIP_STRING
    ) as HTMLIcTooltipElement;
    tooltipEl.setAttribute("target", typographyEl.id);
    tooltipEl.setAttribute("label", typographyEl.textContent!);
    tooltipEl.classList.add("ic-tooltip-overflow");
    tooltipEl.setExternalPopperProps({
      // This might need reverting back to absolute if the tooltip doesn't dynamically position itself correctly
      strategy: "fixed",
    });
    cellContainer
      .querySelector(this.CELL_TEXT_WRAPPER_STRING)
      ?.prepend(tooltipEl);
    tooltipEl.prepend(typographyEl);
  }

  private fixCellTooltip = (element: Element) => {
    let tooltip: HTMLIcTooltipElement | null = null;
    const tooltipChildElement =
      element.shadowRoot?.querySelector<HTMLIcTooltipElement>(
        this.IC_TOOLTIP_STRING
      );

    if (element.tagName === "IC-TOOLTIP") {
      tooltip = element as HTMLIcTooltipElement;
    } else if (tooltipChildElement) {
      tooltip = tooltipChildElement;
    } else if (element.children?.length > 0) {
      Array.from(element.children).forEach((el) => {
        this.fixCellTooltip(el);
      });
    } else {
      return;
    }

    tooltip?.setExternalPopperProps({
      strategy: "fixed",
    });
  };

  private fixCellOverflow = () => {
    this.el.shadowRoot
      ?.querySelectorAll(".data-type-element")
      ?.forEach((element) => {
        let children: any = Array.from(element.children);
        if (children.length === 1 && children[0].tagName === "SLOT") {
          children = getSlotElements(element);
        }
        children?.forEach((el: any) => {
          if (el.tagName === "IC-SELECT") {
            const menu = el.shadowRoot?.querySelector("ic-menu");
            menu?.setExternalPopperProps({
              strategy: "fixed",
            });
            (el as HTMLIcSelectElement).style.setProperty(
              "--input-width",
              `${element.clientWidth}px`
            );
          } else {
            const popover = el.querySelector("ic-popover-menu");
            popover?.setExternalPopperProps({
              strategy: "fixed",
            });
          }
        });
      });
  };

  private fixCellTooltips = () => {
    this.el.shadowRoot
      ?.querySelectorAll(".data-type-element")
      ?.forEach((element) => {
        const slotElements = getSlotElements(element);
        slotElements?.forEach((slottedEl) => {
          this.fixCellTooltip(slottedEl as Element);
        });
      });

    this.el.shadowRoot
      ?.querySelectorAll(".action-element")
      ?.forEach((actionElementSpan) => {
        const actionElement = actionElementSpan.firstChild as HTMLElement;
        const slottedActionElement =
          this.getSlottedActionElement(actionElement);
        if (slottedActionElement) {
          this.fixCellTooltip(slottedActionElement as HTMLElement);
        }
      });
  };

  private renderTableBody = (
    loading: boolean,
    data?: IcDataTableDataType[],
    overlay?: boolean
  ) => {
    if (!data?.length) return;

    if (overlay && loading) {
      return <tbody>{this.createRows()}</tbody>;
    } else if (loading && !overlay) {
      return null;
    } else {
      return <tbody>{this.createRows()}</tbody>;
    }
  };

  private renderLoadingIndicator = (
    isLoading: boolean,
    loadingOptions?: IcLoadingOptions
  ) => {
    if (!isLoading) return null;

    return (
      <Fragment>
        <div
          class="loading-overlay"
          ref={(el) => (this.loadingOverlay = el)}
        ></div>
        <ic-loading-indicator
          theme={this.theme}
          monochrome={loadingOptions?.monochrome}
          class={{
            "loading-empty": isLoading,
            loading: true,
          }}
          description={loadingOptions?.description || "Loading table data"}
          label={loadingOptions?.label || "Loading..."}
          labelDuration={loadingOptions?.labelDuration}
          max={loadingOptions?.max}
          min={loadingOptions?.min}
          progress={loadingOptions?.progress}
          ref={(el: HTMLIcLoadingIndicatorElement) =>
            (this.loadingIndicator = el)
          }
        ></ic-loading-indicator>
      </Fragment>
    );
  };

  private renderAriaLiveLoading = () => {
    if (this.loading) {
      return this.loadingOptions?.label || "Loading...";
    } else if (this.updating) {
      return this.updatingOptions?.description || "Updating table data";
    } else {
      return "";
    }
  };

  private renderEmptyState = (
    loading: boolean,
    data?: IcDataTableDataType[],
    overlay?: boolean
  ) => {
    const emptyStateEl = isSlotUsed(this.el, "empty-state") ? (
      <slot name="empty-state" />
    ) : (
      <ic-empty-state
        aligned="center"
        heading="No Data"
        class="loading-empty"
      ></ic-empty-state>
    );

    if (loading && !data?.length && overlay) {
      return emptyStateEl;
    } else if (!loading && !data?.length) {
      return emptyStateEl;
    } else {
      return null;
    }
  };

  render() {
    const {
      caption,
      columns,
      createColumnHeaders,
      createUpdatingIndicator,
      data,
      density,
      embedded,
      hideColumnHeaders,
      rowSelection,
      loading,
      loadingOptions,
      paginationBarOptions,
      rowsPerPage,
      scrollable,
      scrollOffset,
      selectAllRows,
      selectedRows,
      showPagination,
      sortable,
      sortedColumn,
      sortedColumnOrder,
      stickyColumnHeaders,
      updateScrollOffset,
      updating,
      tableLayout,
      theme,
    } = this;

    const rowsSelected = selectedRows.length > 0;
    const allRowsSelected =
      selectedRows.length === (showPagination ? rowsPerPage : data?.length);

    const headerCheckboxLabelState = rowsSelected
      ? allRowsSelected
        ? "deselect all"
        : "select all remaining"
      : "select all";

    return (
      <Host
        style={{ ...this.setTableDimensions() }}
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
          [`ic-data-table-show-pagination`]: !!showPagination,
          [`ic-data-table-embedded`]: !!embedded,
        }}
      >
        <div class="table-container">
          {isSlotUsed(this.el, "title-bar") && <slot name="title-bar" />}
          <div
            class={{
              ["table-row-container"]: true,
              scrollable,
            }}
            tabIndex={scrollable ? 0 : undefined}
            onScroll={updateScrollOffset}
          >
            <table
              style={{
                "--table-layout": tableLayout,
              }}
            >
              <caption class="table-caption">{caption}</caption>
              {!hideColumnHeaders && (
                <thead
                  class={{
                    ["column-header-sticky"]: stickyColumnHeaders,
                    ["column-header-overlay"]:
                      stickyColumnHeaders && scrollOffset !== 0,
                  }}
                >
                  <tr>
                    {rowSelection && data && (
                      <th
                        class={{
                          "column-header": true,
                          "checkbox-cell": true,
                          "updating-state-headers": updating && !loading,
                          [`table-density-${density}`]:
                            this.notDefaultDensity(),
                        }}
                      >
                        <div class="checkbox-wrapper">
                          <ic-checkbox
                            class="ic-data-table-checkbox"
                            checked={rowsSelected && allRowsSelected}
                            disabled={updating || loading}
                            hideLabel
                            indeterminate={rowsSelected && !allRowsSelected}
                            label={`${caption} ${headerCheckboxLabelState} rows`}
                            nativeIndeterminateBehaviour
                            onIcCheck={() => selectAllRows()}
                            size={density === "dense" ? "small" : "medium"}
                            value={caption}
                          ></ic-checkbox>
                        </div>
                      </th>
                    )}
                    {createColumnHeaders()}
                  </tr>
                </thead>
              )}
              {updating &&
                !loading &&
                (hideColumnHeaders ? (
                  <thead>{createUpdatingIndicator()}</thead>
                ) : (
                  createUpdatingIndicator()
                ))}
              {this.renderTableBody(loading, data, loadingOptions?.overlay)}
            </table>
            {this.renderEmptyState(loading, data, loadingOptions?.overlay)}
          </div>
          <div aria-live="assertive" class="sr-only">
            {this.renderAriaLiveLoading()}
          </div>
          {this.renderLoadingIndicator(loading, loadingOptions)}
          {(showPagination || isSlotUsed(this.el, "pagination-bar")) && (
            <div class="pagination-container">
              {isSlotUsed(this.el, "pagination-bar") ? (
                <slot name="pagination-bar" />
              ) : (
                <ic-pagination-bar
                  alignment={paginationBarOptions.alignment}
                  hideAllFromItemsPerPage={
                    paginationBarOptions.hideAllFromItemsPerPage
                  }
                  hideCurrentPage={paginationBarOptions.hideCurrentPage}
                  hideFirstAndLastPageButton={
                    paginationBarOptions.hideFirstAndLastPageButton
                  }
                  hideRangeLabel={paginationBarOptions.hideRangeLabel}
                  itemLabel={paginationBarOptions.itemLabel}
                  itemsPerPageOptions={paginationBarOptions.itemsPerPageOptions}
                  monochrome={paginationBarOptions.monochrome}
                  pageLabel={paginationBarOptions.pageLabel}
                  rangeLabelType={paginationBarOptions.rangeLabelType}
                  selectedItemsPerPage={
                    paginationBarOptions.selectedItemsPerPage
                  }
                  selectItemsPerPageOnEnter={
                    paginationBarOptions.selectItemsPerPageOnEnter
                  }
                  setToFirstPageOnPaginationChange={
                    paginationBarOptions.setToFirstPageOnPaginationChange
                  }
                  showGoToPageControl={paginationBarOptions.showGoToPageControl}
                  showItemsPerPageControl={
                    paginationBarOptions.showItemsPerPageControl
                  }
                  theme={theme}
                  totalItems={data?.length ?? 0}
                  type={paginationBarOptions.type}
                ></ic-pagination-bar>
              )}
            </div>
          )}
          {sortable && (
            <div class="screen-reader-sort-text" aria-live="polite">
              {sortedColumnOrder !== "unsorted" && sortedColumn
                ? `${
                    columns.find((col) => col.key === sortedColumn)?.title ||
                    sortedColumn
                  } sorted ${sortedColumnOrder}`
                : "table unsorted"}
            </div>
          )}
        </div>
      </Host>
    );
  }
}
