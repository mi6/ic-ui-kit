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
} from "./ic-data-table.types";
import { IcThemeForegroundNoDefault } from "@ukic/web-components/dist/types/utils/types";
import { IcPaginationBarOptions } from "../../utils/types";
// Unable to import helper functions via @ukic/web-components
import {
  isEmptyString,
  isSlotUsed,
  pxToRem,
  addDataToPosition,
  dynamicDebounce,
  getSlotElements,
  checkResizeObserver,
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

  private hasLoadedForOneSecond = true;
  private loadingIndicator: HTMLIcLoadingIndicatorElement;
  private timerStarted: number;
  private resizeObserver: ResizeObserver = null;
  private SHOW_HIDE_STRING = "show-hide";
  private SHOW_HIDE_CSS_CLASS = `${this.SHOW_HIDE_STRING}-wrap`;
  private TOOLTIP_STRING = "tooltip";
  private TOOLTIP = `ic-${this.TOOLTIP_STRING}`;
  private TEXT_WRAP_STRING = "text-wrap";
  private TEXT_WRAP_CLASS = `.${this.TEXT_WRAP_STRING}`;
  private dataUpdated = false;
  private tableSorted: boolean;
  private rowHeightSet = false;
  private initialLoad = false;
  private icPageChangeEvent = false;
  private itemsPerPageChange = false;
  private DATA_ROW_HEIGHT_STRING = "data-row-height";
  private ROW_HEIGHT_CSS_VARIABLE = "--row-height";
  private previousItemsPerPage: number;
  private DEFAULT_LINE_HEIGHT = 24;
  private densityUpdate = false;
  private previousPaginationPage: number;
  private truncationPatternUpdated: boolean = false;
  private isNewDebounceDelaySet = false;
  private headerResizeObserver: ResizeObserver = null;
  private prevTableContainerWidth: number;
  private IC_TOOLTIP_STRING = "ic-tooltip";
  private SHOW_TRUNC_TOOLTIP_STRING = "show-trunc-tooltip";

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
      const headers = this.el.shadowRoot.querySelectorAll("th.column-header");
      headers.forEach((header) => {
        const tooltip = header.querySelector(this.IC_TOOLTIP_STRING);
        if (tooltip) {
          tooltip.classList.remove(this.SHOW_TRUNC_TOOLTIP_STRING);
        }
      });
    }
  }

  /**
   * The column headers for the table.
   */
  @Prop() columns!: IcDataTableColumnObject[];

  /**
   * The row content for the table.
   */
  @Prop() data: IcDataTableDataType[];

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
  @Prop({ mutable: true }) globalRowHeight?: IcDataTableRowHeights = "auto";

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
    hideAllFromItemsPerPage: false,
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
   * Sets the layout of the table
   */
  @Prop() tableLayout?: "fixed" | "auto" = "fixed";

  /**
   * Sets the method used to truncate long text in cells where textWrap is `false`. The `tooltip` truncation pattern allows the overflowing text to be seen in a tooltip. The `show-hide` truncation pattern allows the overflowing text to be shown and hidden using the ic-typography "See more"/"See less" buttons.
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
   * Sets the table width. Can be set to `auto` or a specific value in `px`, `rem`, or `%`.
   */
  @Prop() width?: string;

  /**
   * Emitted when the `globalRowHeight` or `variableRowHeight` properties change in the data table.
   */
  @Event() icRowHeightChange: EventEmitter<void>;

  /**
   * Emitted when a column sort button is clicked.
   */
  @Event() icSortChange: EventEmitter<IcSortEventDetail>;

  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
    this.headerResizeObserver?.disconnect();
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
    this.initialLoad = true;
    this.previousItemsPerPage = this.rowsPerPage;
  }

  componentDidLoad(): void {
    const tableElement = this.el.shadowRoot.querySelector("table");
    const tableContainer = this.el.shadowRoot.querySelector(".table-container");

    checkResizeObserver(this.runHeaderResizeObserver);

    if (this.dataUpdated) {
      this.dataUpdated = false;
    }

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
      this.getTypographyElements().forEach(
        (typographyEl: HTMLIcTypographyElement) => {
          const cellContainer = this.getCellContainer(typographyEl);
          if (!cellContainer.classList.contains(this.TEXT_WRAP_STRING)) {
            this.dataTruncation(typographyEl);
          }
        }
      );

      this.debounceDataTruncation();
    }

    if (this.globalRowHeight !== "auto") {
      this.updateSetRowHeight();
    }
  }

  componentDidUpdate(): void {
    // truncation updates invoked here once new/updated data has
    // rendered to take into account updated .cell-container/ic-typography box model updates.
    if (
      this.truncationPattern === this.SHOW_HIDE_STRING ||
      this.truncationPattern === this.TOOLTIP_STRING
    ) {
      this.truncateUpdatedData();
    }
  }

  componentDidRender(): void {
    this.fixCellTooltips();
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
        this.el.shadowRoot.querySelector(".table-container").clientWidth;
      if (tableContainerWidth !== this.prevTableContainerWidth) {
        const headers = this.el.shadowRoot.querySelectorAll("th.column-header");
        headers.forEach((header) => {
          const tooltip = header.querySelector(this.IC_TOOLTIP_STRING);
          const typographyEls = header.querySelectorAll("ic-typography");
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

  private truncateUpdatedData() {
    if (this.dataUpdated) {
      if (this.truncationPattern === this.SHOW_HIDE_STRING) {
        this.getTypographyElements().forEach(
          (typographyEl: HTMLIcTypographyElement) => {
            const truncWrapper = this.getTruncWrapper(typographyEl);
            const cellContainer = this.getCellContainer(typographyEl);

            if (
              cellContainer?.clientHeight - this.DEFAULT_LINE_HEIGHT >=
              truncWrapper?.scrollHeight
            ) {
              this.resetShowHideTruncation(typographyEl);
              return;
            }

            setTimeout(() => {
              // slight delay due to data rendering
              if (typographyEl?.scrollHeight > cellContainer?.clientHeight) {
                this.addShowHideTruncation(cellContainer, typographyEl);
              }
            }, 150);
          }
        );
      }

      if (this.truncationPattern === this.TOOLTIP_STRING) {
        this.updateTruncationTooltip();
      }

      this.dataUpdated = false;
    }

    if (this.tableSorted) {
      if (this.truncationPattern === this.TOOLTIP_STRING) {
        this.updateTruncationTooltip();
      }

      if (this.truncationPattern === this.SHOW_HIDE_STRING) {
        this.getTypographyElements().forEach(
          (typographyEl: HTMLIcTypographyElement) => {
            const cellContainer = this.getCellContainer(typographyEl);

            if (!cellContainer.classList.contains(this.TEXT_WRAP_STRING)) {
              this.createShowHideTruncation(typographyEl, cellContainer);
            } else {
              typographyEl.resetTruncation().then(() => {
                cellContainer.removeAttribute("style");
              });
            }
          }
        );
      }

      this.tableSorted = false;
    }

    // This function recalculates the tooltip truncation when the rowHeight has been set.
    // This is in componentDidUpdate so a setTimeout is not used to wait for the render to be complete
    if (this.rowHeightSet) {
      const fontSize = parseInt(
        getComputedStyle(document.documentElement).fontSize
      );
      const hasAutoRowHeight = this.globalRowHeight === "auto";

      this.getTypographyElements().forEach(
        (typographyEl: HTMLIcTypographyElement) => {
          const cellContainer = this.getCellContainer(typographyEl);
          const tooltipEl = this.getTooltip(typographyEl);

          if (hasAutoRowHeight) {
            cellContainer.style.height = null;

            if (this.truncationPattern === this.TOOLTIP_STRING) {
              this.removeTooltip(cellContainer, typographyEl, tooltipEl);
              typographyEl.setAttribute("style", `--ic-line-clamp: 0`);
            } else if (this.truncationPattern === this.SHOW_HIDE_STRING) {
              this.resetShowHideTruncation(typographyEl);
            }

            return;
          }

          const rowHeight =
            fontSize *
            parseFloat(cellContainer.getAttribute(this.DATA_ROW_HEIGHT_STRING));

          // If the set row height is bigger than the cell container even
          // with textWrap, set the row height
          if (
            !cellContainer?.style?.height &&
            rowHeight > cellContainer.clientHeight &&
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
              const showHideBtn =
                typographyEl.shadowRoot.querySelector("button");

              if (
                showHideBtn &&
                truncWrapper?.scrollHeight <= cellContainer.clientHeight
              ) {
                this.resetShowHideTruncation(typographyEl);
                return;
              }
            }

            this.truncate(typographyEl, cellContainer, tooltipEl);
          } else {
            this.updateSetRowHeight(typographyEl);
          }
        }
      );

      this.rowHeightSet = false;
    }

    // Only run truncation on the new rows
    // when the number of items per page has increased
    if (this.itemsPerPageChange) {
      const allRows = this.el.shadowRoot.querySelectorAll(".table-row");

      if (this.rowsPerPage > this.previousItemsPerPage) {
        const newRows = Array.from(allRows).slice(this.previousItemsPerPage);

        newRows.forEach((row) => {
          row
            .querySelectorAll("ic-typography")
            .forEach((typographyEl: HTMLIcTypographyElement) => {
              const cellContainer = this.getCellContainer(typographyEl);
              const tooltipEl = this.getTooltip(typographyEl);

              this.truncate(typographyEl, cellContainer, tooltipEl);
            });
        });
      }

      this.previousItemsPerPage = this.rowsPerPage;
      this.itemsPerPageChange = false;
    }

    if (!this.initialLoad && this.icPageChangeEvent) {
      if (this.truncationPattern === this.TOOLTIP_STRING) {
        this.updateTruncationTooltip();
      }

      // set truncation to see more if opened and next/previous page is pressed
      if (this.truncationPattern === this.SHOW_HIDE_STRING) {
        this.getTypographyElements().forEach((typographyEl) => {
          const cellContainer = this.getCellContainer(typographyEl);
          const showHideBtn = typographyEl.shadowRoot.querySelector("button");

          if (
            typographyEl?.scrollHeight > cellContainer.clientHeight &&
            !showHideBtn
          ) {
            this.addShowHideTruncation(cellContainer, typographyEl);
          }
        });
      }

      this.icPageChangeEvent = false;
    }

    if (this.densityUpdate) {
      this.getTypographyElements().forEach((typographyEl) => {
        const cellContainer = this.getCellContainer(typographyEl);
        const tooltipEl = this.getTooltip(typographyEl);

        this.truncate(typographyEl, cellContainer, tooltipEl);
      });

      this.densityUpdate = false;
    }

    if (this.truncationPatternUpdated) {
      if (this.truncationPattern === this.TOOLTIP_STRING) {
        this.getTypographyElements().forEach((typographyEl) => {
          const cellContainer = this.getCellContainer(typographyEl);
          const tooltipEl = this.getTooltip(typographyEl);

          if (typographyEl.scrollHeight > cellContainer.clientHeight) {
            this.addTooltipTruncation(typographyEl, cellContainer, tooltipEl);
          }
        });
      } else if (this.truncationPattern === this.SHOW_HIDE_STRING) {
        this.getTypographyElements().forEach(
          (typographyEl: HTMLIcTypographyElement) => {
            const truncWrapper = this.getTruncWrapper(typographyEl);
            const cellContainer = this.getCellContainer(typographyEl);

            if (
              cellContainer?.clientHeight - this.DEFAULT_LINE_HEIGHT >
              truncWrapper?.scrollHeight
            ) {
              this.resetShowHideTruncation(typographyEl);
              return;
            }

            if (typographyEl?.scrollHeight > cellContainer?.clientHeight) {
              this.addShowHideTruncation(cellContainer, typographyEl);
            }
          }
        );
      }
    }
  }

  private updateSetRowHeight = (typographyEl?: HTMLIcTypographyElement) => {
    const fontSize = parseInt(
      getComputedStyle(document.documentElement).fontSize
    );

    if (typographyEl) {
      const cellContainer = this.getCellContainer(typographyEl);

      const rowHeight =
        fontSize *
        parseFloat(cellContainer.getAttribute(this.DATA_ROW_HEIGHT_STRING));

      if (typographyEl.scrollHeight > rowHeight) {
        cellContainer.style.removeProperty(this.ROW_HEIGHT_CSS_VARIABLE);
      }
    } else {
      this.getTypographyElements().forEach(
        (typographyEl: HTMLIcTypographyElement) => {
          const cellContainer = this.getCellContainer(typographyEl);

          const rowHeight =
            fontSize *
            parseFloat(cellContainer.getAttribute(this.DATA_ROW_HEIGHT_STRING));

          if (typographyEl.scrollHeight > rowHeight) {
            cellContainer.style.removeProperty(this.ROW_HEIGHT_CSS_VARIABLE);
          }
        }
      );
    }
  };

  private createShowHideTruncation(
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ) {
    typographyEl.checkMaxLines(typographyEl.scrollHeight);
    typographyEl.setAttribute(
      "max-lines",
      `${Math.floor(cellContainer?.clientHeight / this.DEFAULT_LINE_HEIGHT)}`
    );
    typographyEl.setShowHideExpanded(false);

    cellContainer.style.setProperty(this.ROW_HEIGHT_CSS_VARIABLE, null);
  }

  private debounceDataTruncation = () => {
    this.getTypographyElements().forEach(
      (typographyEl: HTMLIcTypographyElement) => {
        const cellContainer = this.getCellContainer(typographyEl);
        if (!cellContainer.classList.contains(this.TEXT_WRAP_STRING)) {
          this.resizeObserver = new ResizeObserver(
            // This gets triggered twice due to updated data and see more/see less button
            dynamicDebounce(
              () => {
                this.dataTruncation(typographyEl);

                if (!this.isNewDebounceDelaySet) {
                  this.setNewDebounceDelay(200);
                }
              },
              () => this.debounceDelay
            ) as ResizeObserverCallback
          );

          this.resizeObserver.observe(typographyEl);
        }
      }
    );
  };

  private setNewDebounceDelay = (delay: number) => {
    this.debounceDelay = delay;

    this.isNewDebounceDelaySet = true;
  };

  private getLines = (height: number): number =>
    Math.floor(height / this.DEFAULT_LINE_HEIGHT);

  private truncate = (
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement,
    tooltip: HTMLIcTooltipElement
  ) => {
    if (typographyEl?.scrollHeight > cellContainer?.clientHeight) {
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
        typographyEl.setAttribute("style", `--ic-line-clamp: 0`);

        cellContainer.appendChild(typographyEl);
        tooltip.remove();
      }

      if (
        this.truncationPattern === this.SHOW_HIDE_STRING &&
        !isEmptyString(typographyEl.getAttribute("max-lines"))
      ) {
        this.resetShowHideTruncation(typographyEl);
      }
    }
  };

  private addTooltipTruncation(
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement,
    tooltip: HTMLIcTooltipElement
  ) {
    this.addLineClampCSS(typographyEl, cellContainer);

    if (!tooltip) {
      this.createTruncationTooltip(typographyEl, cellContainer);
    }
  }

  private addShowHideTruncation(
    cellContainer: HTMLElement,
    typographyEl: HTMLIcTypographyElement
  ) {
    cellContainer.classList.add(this.SHOW_HIDE_CSS_CLASS);
    this.createShowHideTruncation(typographyEl, cellContainer);
  }

  private dataTruncation = (typographyEl: HTMLIcTypographyElement) => {
    // Tooltip truncation mentioned in AC. Will need revisiting
    const tooltip: HTMLIcTooltipElement = this.getTooltip(typographyEl);
    const cellContainer = this.getCellContainer(typographyEl);
    if (
      cellContainer?.classList.contains("data-type-element") ||
      this.dataUpdated
    ) {
      return;
    }

    if (
      this.truncationPattern === this.SHOW_HIDE_STRING &&
      typographyEl.shadowRoot.querySelector("button")
    ) {
      const showHideBtn = typographyEl.shadowRoot.querySelector("button");
      // If the see more/see less is present and the max lines is equal to the cell container
      // remove the see more/see less button
      if (showHideBtn) {
        const truncWrapper = this.getTruncWrapper(typographyEl);

        if (
          this.getLines(truncWrapper.scrollHeight) ===
          +typographyEl.getAttribute("max-lines")
        ) {
          this.resetShowHideTruncation(typographyEl);
        }
      }
    }

    // Deals with setting and resetting row height and re-truncating data
    if (this.rowHeightSet && this.truncationPattern === this.SHOW_HIDE_STRING) {
      const truncWrapper = this.getTruncWrapper(typographyEl);
      // cellContainer.clientHeight - 24 removes the extra line by see more/see less
      if (
        truncWrapper &&
        cellContainer.clientHeight - this.DEFAULT_LINE_HEIGHT >
          truncWrapper.scrollHeight
      ) {
        this.resetShowHideTruncation(typographyEl);
        return;
      }

      if (typographyEl.scrollHeight > cellContainer.clientHeight) {
        this.addShowHideTruncation(cellContainer, typographyEl);
        return;
      }
    }

    if (
      typographyEl?.scrollHeight > 0 &&
      cellContainer?.clientHeight > 0 &&
      typographyEl?.scrollHeight === cellContainer?.clientHeight
    ) {
      if (tooltip) {
        this.removeTooltip(cellContainer, typographyEl, tooltip);
      }
      return;
    }

    this.truncate(typographyEl, cellContainer, tooltip);
  };

  private getTruncWrapper(typographyEl: HTMLIcTypographyElement) {
    return typographyEl.shadowRoot.querySelector(".trunc-wrapper");
  }

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
      cellContainer.style.getPropertyValue(this.ROW_HEIGHT_CSS_VARIABLE) &&
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

  @Listen("click", { target: "window" })
  clickListener(ev: MouseEvent): void {
    if (ev.target !== this.el) this.selectedRow = undefined;
  }

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
    if (newValue === this.TOOLTIP_STRING) {
      this.resetShowHideTruncation();
      this.updateTruncationTooltip(true);

      // Not using debounceDataTruncation here due to resizeObserver not being triggered
      this.getTypographyElements().forEach(
        (typographyEl: HTMLIcTypographyElement) => {
          const cellContainer = this.getCellContainer(typographyEl);
          const tooltip: HTMLIcTooltipElement = this.getTooltip(typographyEl);

          this.truncate(typographyEl, cellContainer, tooltip);
        }
      );
    }

    if (newValue === this.SHOW_HIDE_STRING) {
      // ResizeObserver is trigger here due to the see more/see less links being removed.
      // The resizeObserver will also apply the tooltip where relevant
      this.updateTruncationTooltip(true);
      this.getTypographyElements().forEach(
        (typographyEl: HTMLIcTypographyElement) => {
          const truncWrapper = this.getTruncWrapper(typographyEl);
          const cellContainer = this.getCellContainer(typographyEl);

          if (
            cellContainer?.clientHeight - this.DEFAULT_LINE_HEIGHT >
            truncWrapper?.scrollHeight
          ) {
            this.resetShowHideTruncation(typographyEl);
            return;
          }

          setTimeout(() => {
            // slight delay due to data rendering
            if (typographyEl?.scrollHeight > cellContainer?.clientHeight) {
              this.addShowHideTruncation(cellContainer, typographyEl);
            }
          }, 150);
        }
      );
    }

    this.truncationPatternUpdated = true;
  }

  @Watch("data")
  async dataHandler(newData: IcDataTableDataType[]): Promise<void> {
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

  @Watch("density")
  async densityHandler(): Promise<void> {
    this.densityUpdate = true;
  }

  private removeTextWrap = (): void => {
    this.getTypographyElements().forEach(
      (typographyEl: HTMLIcTypographyElement) => {
        const tableCell = typographyEl.closest("td");
        if (tableCell.classList.contains(this.TEXT_WRAP_STRING)) {
          tableCell.classList.remove(this.TEXT_WRAP_STRING);
        }
      }
    );
  };

  private getCellContainer = (
    typographyEl: HTMLIcTypographyElement
  ): HTMLElement => {
    return typographyEl.closest(".cell-container");
  };

  private deleteTextWrapDataKey = (
    array: IcDataTableColumnObject[] | object[]
  ) =>
    Array.isArray(array) &&
    array.forEach((val) => val.textWrap && delete val.textWrap);

  private resetShowHideTruncation(typographyEl?: HTMLIcTypographyElement) {
    if (typographyEl) {
      const truncWrapper = this.getTruncWrapper(typographyEl);
      const cellContainer = this.getCellContainer(typographyEl);

      if (
        truncWrapper?.scrollHeight > cellContainer?.clientHeight &&
        !isEmptyString(typographyEl.getAttribute("max-lines")) &&
        Math.floor(cellContainer?.clientHeight / this.DEFAULT_LINE_HEIGHT) !==
          +typographyEl.getAttribute("max-lines")
      ) {
        typographyEl.checkMaxLines(truncWrapper.scrollHeight);
        typographyEl.setAttribute(
          "max-lines",
          `${Math.floor(
            cellContainer?.clientHeight / this.DEFAULT_LINE_HEIGHT
          )}`
        );
        typographyEl.setShowHideExpanded(false);

        cellContainer.style.setProperty(this.ROW_HEIGHT_CSS_VARIABLE, null);
      } else {
        typographyEl.resetTruncation().then(() => {
          if (!typographyEl.closest(this.TEXT_WRAP_CLASS)) {
            cellContainer.style.setProperty(
              this.ROW_HEIGHT_CSS_VARIABLE,
              cellContainer.getAttribute(this.DATA_ROW_HEIGHT_STRING)
            );
          }
        });
      }
    } else {
      this.getTypographyElements().forEach((typographyEl) => {
        const cellContainer = this.getCellContainer(typographyEl);

        typographyEl.resetTruncation().then(() => {
          if (!typographyEl.closest(this.TEXT_WRAP_CLASS)) {
            cellContainer.style.setProperty(
              this.ROW_HEIGHT_CSS_VARIABLE,
              cellContainer.getAttribute(this.DATA_ROW_HEIGHT_STRING)
            );
          }
        });
      });
    }
  }

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

  private setTruncationClass = () => {
    if (this.truncationPattern) {
      return { [`truncation-${this.truncationPattern}`]: true };
    }

    return {};
  };

  private getColumnWidth = (
    columnWidth?: string | IcDataTableColumnWidthTypes
  ) => {
    // TODO: Setting max width on columns
    let columnWidthStyling = {};

    if (columnWidth) {
      if (typeof columnWidth === "string") {
        columnWidthStyling = {
          ...columnWidthStyling,
          ["--column-width"]: columnWidth,
        };
      }

      if (typeof columnWidth === "object" && !!Object.keys(columnWidth)) {
        if (columnWidth?.minWidth) {
          columnWidthStyling = {
            ...columnWidthStyling,
            ["--column-min-width"]: columnWidth?.minWidth,
          };
        }

        if (columnWidth?.maxWidth) {
          columnWidthStyling = {
            ...columnWidthStyling,
            ["--column-max-width"]: columnWidth?.maxWidth,
          };
        }
      }
    }

    return columnWidthStyling;
  };

  private getRowHeight = (
    currentRowHeight: number,
    columnProps: IcDataTableColumnObject,
    rowTextWrap: boolean,
    cell: any
  ) => {
    if (
      (this.truncationPattern || currentRowHeight) &&
      !columnProps?.textWrap &&
      !rowTextWrap &&
      !this.getCellOptions(cell, "textWrap") &&
      columnProps?.dataType !== "element"
    ) {
      return {
        [this.ROW_HEIGHT_CSS_VARIABLE]: this.setRowHeight(currentRowHeight),
      };
    }

    return {};
  };

  private createCells = (row: IcDataTableDataType, rowIndex: number) => {
    const rowValues = Object.values(row);
    const rowKeys = Object.keys(row);

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
      index: rowIndex,
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
            class={{
              ["table-cell"]: true,
              [`table-density-${this.density}`]: this.notDefaultDensity(),
              ["with-overflow"]: columnProps?.dataType === "element",
            }}
            style={{ ...this.getColumnWidth(columnProps.columnWidth) }}
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
                [this.TEXT_WRAP_STRING]:
                  columnProps?.textWrap ||
                  rowOptions?.textWrap ||
                  !!this.getCellOptions(cell, "textWrap"),
                ["cell-icon"]: hasIcon || !!columnProps?.icon?.icon,
                ...this.setTruncationClass(),
              }}
              style={{
                ...this.getRowHeight(
                  currentRowHeight,
                  columnProps,
                  rowOptions?.textWrap,
                  cell
                ),
                ...this.getColumnWidth(columnProps?.columnWidth),
              }}
              data-row-height={
                this.truncationPattern || currentRowHeight
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
                    (hasIcon || columnProps?.icon?.onAllCells) &&
                    (cellValue("icon") || columnProps?.icon?.icon) && (
                      <span
                        class="icon"
                        innerHTML={cellValue("icon") || columnProps?.icon?.icon}
                      ></span>
                    )
                  )}
                  {columnProps?.dataType !== "element" &&
                    !isSlotUsed(this.el, cellSlotName) && (
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
                        {this.isObject(cell) &&
                        columnProps?.dataType !== "date" ? (
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
                    )}
                </Fragment>
              )}
            </div>
          </td>
        );
      }
    });
  };

  private createColumnHeaders = () => {
    return this.columns.map(
      ({ cellAlignment, colspan, icon, key, title, columnWidth }, index) => (
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
                <span class="icon" innerHTML={icon.icon}></span>
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
     * `addDataToPosition` used to add the element in the correct column order.
     * Adding empty string value in to give `createCells` something to loop over.
     */
    const organisedData = data.map((row, rowIndex) => {
      const slottedColumns = this.columns
        .map(
          ({ key }, index) =>
            isSlotUsed(this.el, `${key}-${rowIndex}`) && { key, index }
        )
        .filter((col) => !!col);
      return slottedColumns.length > 0
        ? addDataToPosition(row, slottedColumns, "")
        : row;
    });

    return organisedData
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

    this.tableSorted = true;

    this.icSortChange.emit({
      columnName: column,
      sorted: this.sortedColumnOrder,
    });
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

  private updateTruncationTooltip = (removeTooltipOnly = false) => {
    this.getTypographyElements().forEach(
      (typographyEl: HTMLIcTypographyElement) => {
        const tooltip = this.getTooltip(typographyEl);
        const cellContainer = this.getCellContainer(typographyEl);

        if (typographyEl.closest(this.TEXT_WRAP_CLASS)) {
          this.removeTooltip(cellContainer, typographyEl, tooltip);
          typographyEl.setAttribute("style", `--ic-line-clamp: 0`);
          return;
        }

        this.regenerateTooltip(
          cellContainer,
          typographyEl,
          tooltip,
          removeTooltipOnly
        );
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
    tooltip: HTMLIcTooltipElement,
    removeTooltipOnly?: boolean
  ) {
    // When sorting the table, instead of regenerating the tooltip,
    // the tooltip details are updated

    if (tooltip) {
      if (this.tableSorted) {
        tooltip.setAttribute("target", typographyEl.id);
        tooltip.setAttribute("label", typographyEl.textContent);
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
        typographyEl.style.cssText.includes("--ic-line-clamp: 0;")
      ) {
        this.addLineClampCSS(typographyEl, cellContainer);
      }
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
    tooltip: HTMLIcTooltipElement
  ) {
    cellContainer.appendChild(typographyEl);
    if (tooltip) {
      tooltip.remove();
    }
  }

  private addLineClampCSS(
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ) {
    typographyEl.setAttribute(
      "style",
      `--ic-line-clamp: ${this.getLines(cellContainer?.clientHeight)}`
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
    tooltipEl.setAttribute("label", typographyEl.textContent);
    tooltipEl.classList.add("ic-tooltip-overflow");
    tooltipEl.setExternalPopperProps({
      // This might need reverting back to absolute if the tooltip doesn't dynamically position itself correctly
      strategy: "fixed",
    });
    cellContainer.appendChild(tooltipEl);
    tooltipEl.appendChild(typographyEl);
  }

  private fixCellTooltips = () => {
    const elements = this.el.shadowRoot.querySelectorAll(".data-type-element");
    elements.forEach((element) => {
      const slotElements = getSlotElements(element);
      slotElements.forEach((slottedEl: HTMLElement) => {
        const tooltipEl = (
          slottedEl.tagName === "IC-TOOLTIP"
            ? slottedEl
            : slottedEl.shadowRoot?.querySelector(this.IC_TOOLTIP_STRING)
        ) as HTMLIcTooltipElement;
        if (tooltipEl) {
          tooltipEl.setExternalPopperProps({
            strategy: "fixed",
          });
        }
      });
    });
  };

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
      <Host style={{ ...this.setTableDimensions() }}>
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
            <table
              style={{
                ["--table-layout"]: this.tableLayout,
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
                  hideAllFromItemsPerPage={
                    paginationBarOptions.hideAllFromItemsPerPage
                  }
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
      </Host>
    );
  }
}
