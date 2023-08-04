import { Component, Element, h, Prop, State, Listen } from "@stencil/core";
import unsortedIcon from "./assets/unsorted-icon.svg";
import ascendingIcon from "./assets/ascending-icon.svg";
import descendingIcon from "./assets/descending-icon.svg";
import {
  IcDataTableColumnObject,
  IcDataTableDensityOptions,
  IcDataTableSortOrderOptions,
} from "./ic-data-table.types";
import {
  IcPaginationAlignmentOptions,
  IcPaginationControlTypes,
  IcPaginationTypes,
} from "../ic-pagination/ic-pagination.types";

@Component({
  tag: "ic-data-table",
  styleUrl: "ic-data-table.css",
  shadow: true,
})
export class DataTable {
  private SORT_ICONS = {
    unsorted: unsortedIcon,
    ascending: ascendingIcon,
    descending: descendingIcon,
  };

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
  @Prop() density?: IcDataTableDensityOptions = "default";

  /**
   * Applies a border to the table container.
   */
  @Prop() embedded?: boolean = false;

  /**
   * If `true`, column headers will not be visible.
   */
  @Prop() hideColumnHeaders?: boolean = false;

  /**
   * Sets the props for the pagination bar.
   */
  @Prop() paginationOptions?: {
    itemsPerPage?: { label: string; value: string }[];
    type?: IcPaginationTypes;
    control?: IcPaginationControlTypes;
    itemsPerPageControl?: boolean;
    goToPageControl?: boolean;
    alignment?: IcPaginationAlignmentOptions;
  } = {
    itemsPerPage: [
      { label: "10", value: "10" },
      { label: "25", value: "25" },
      { label: "50", value: "50" },
    ],
    type: "page",
    control: "simple",
    itemsPerPageControl: true,
    goToPageControl: true,
    alignment: "right",
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

  componentWillLoad(): void {
    this.rowsPerPage = Number(this.paginationOptions.itemsPerPage[0].value);
    this.previousRowsPerPage = this.rowsPerPage;
    this.toRow = this.rowsPerPage;
    this.sortedColumn = this.sortOptions.defaultColumn;
    this.sortedColumnOrder = this.sortOptions.sortOrders[0];
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
  }

  @Listen("icItemsPerPageChange")
  handleItemsPerPageChange(ev: CustomEvent): void {
    this.previousRowsPerPage = this.rowsPerPage;
    this.rowsPerPage = ev.detail.value;
  }

  @Listen("icPageChange")
  handlePageChange(ev: CustomEvent): void {
    this.fromRow = (ev.detail.value - 1) * this.rowsPerPage;
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

  @Listen("click", { target: "window" })
  clickListener(ev: MouseEvent): void {
    if (ev.target !== this.el) this.selectedRow = undefined;
  }

  private isObject = (value: any) => typeof value === "object";

  private notDefaultDensity = () => this.density !== "default";

  private createCells = (row: object) => {
    const rowValues = Object.values(row);
    const rowKeys = Object.keys(row);
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
    return rowValues.map((cell, index) => {
      const column = this.columns[index];
      const cellValue = (key: string) => this.getObjectValue(cell, key);

      const getAlignment = (alignment: "horizontal" | "vertical") => {
        if (
          this.isObject(cell) &&
          Object.keys(cell).includes("cellAlignment")
        ) {
          return this.getObjectValue(cellValue("cellAlignment"), alignment);
        }
      };

      return rowKeys[index] === "header" ? (
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
      ) : (
        <td
          innerHTML={column?.dataType === "element" ? (cell as string) : null}
          class={{
            ["table-cell"]: true,
            [`table-density-${this.density}`]: this.notDefaultDensity(),
            [`data-type-${column?.dataType}`]: true,
            [`cell-alignment-${
              column?.columnAlignment?.horizontal || getAlignment("horizontal")
            }`]:
              !!column?.columnAlignment?.horizontal ||
              !!getAlignment("horizontal"),
            [`cell-alignment-${
              column?.columnAlignment?.vertical ||
              rowAlignment ||
              getAlignment("vertical")
            }`]:
              !!column?.columnAlignment?.vertical ||
              !!rowAlignment ||
              !!getAlignment("vertical"),
          }}
        >
          <ic-typography
            variant="body"
            class={{
              [`cell-emphasis-${
                (this.isObject(cell) && cellValue("emphasis")) ||
                column?.emphasis ||
                rowEmphasis
              }`]:
                (this.isObject(cell) && !!cellValue("emphasis")) ||
                !!column?.emphasis ||
                !!rowEmphasis,
              [`text-${this.density}`]: this.notDefaultDensity(),
            }}
          >
            {this.isObject(cell) ? (
              Object.keys(cell).includes("href") ? (
                <ic-link href={cellValue("href")}>{cellValue("data")}</ic-link>
              ) : (
                cellValue("data")
              )
            ) : (
              column?.dataType !== "element" && cell
            )}
          </ic-typography>
        </td>
      );
    });
  };

  private createColumnHeaders = () => {
    return this.columns.map(({ cellAlignment, colspan, key, title }) => (
      <th
        scope="col"
        class={{
          ["column-header"]: true,
          [`column-header-alignment-${cellAlignment}`]: !!cellAlignment,
          [`table-density-${this.density}`]: this.notDefaultDensity(),
        }}
        colSpan={colspan}
      >
        {this.sortable ? (
          <div class="column-header-inner-container">
            <ic-typography
              variant="body"
              class={{
                ["column-header-text"]: true,
                [`text-${this.density}`]: this.notDefaultDensity(),
              }}
            >
              {title}
            </ic-typography>
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
          </div>
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
      </th>
    ));
  };

  private createRows = () => {
    const data = this.showPagination
      ? this.data.slice(this.fromRow, this.toRow)
      : this.data.slice();
    return data
      .sort(!this.sortable ? undefined : this.getSortFunction())
      .map((row) => (
        <tr
          onClick={() => (this.selectedRow = this.selectedRow !== row && row)}
          class={{
            ["table-row"]: true,
            ["table-row-selected"]: this.selectedRow === row,
          }}
        >
          {this.createCells(row)}
        </tr>
      ));
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
    return String(
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

    if (column) {
      if (column !== this.sortedColumn) {
        this.sortedColumn = column;
        this.sortedColumnOrder = "unsorted";
      }

      let nextSortOrderIndex = sortOrders.indexOf(this.sortedColumnOrder) + 1;

      if (nextSortOrderIndex > sortOrders.length - 1) {
        nextSortOrderIndex = 0;
      }

      this.sortedColumnOrder = sortOrders[nextSortOrderIndex];

      sortButton.updateAriaLabel(this.getSortButtonLabel(column));
    }
  };

  private updateScrollOffset = () => {
    this.scrollOffset = this.el.shadowRoot.querySelector(
      ".table-row-container"
    ).scrollTop;
  };

  render() {
    const {
      caption,
      createColumnHeaders,
      createRows,
      data,
      hideColumnHeaders,
      paginationOptions,
      scrollable,
      scrollOffset,
      showPagination,
      sortable,
      sortedColumnOrder,
      sortedColumn,
      stickyColumnHeaders,
      updateScrollOffset,
    } = this;

    return (
      <div class="table-container">
        <div
          class={{
            ["table-row-container"]: true,
            scrollable,
          }}
          tabIndex={scrollable ? 0 : null}
          onScroll={updateScrollOffset}
        >
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
            {data?.length > 0 && <tbody>{createRows()}</tbody>}
          </table>
        </div>
        {showPagination && (
          <div class="pagination-container">
            <ic-pagination-bar
              totalItems={data.length}
              paginationType={paginationOptions.type}
              paginationControl={paginationOptions.control}
              showItemsPerPageControl={paginationOptions.itemsPerPageControl}
              showGoToPageControl={paginationOptions.goToPageControl}
              itemsPerPageOptions={paginationOptions.itemsPerPage}
              alignment={paginationOptions.alignment}
            ></ic-pagination-bar>
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
