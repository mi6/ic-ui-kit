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
  @Element() el: HTMLIcDataTableElement;

  @State() fromRow: number = 0;

  @State() scrollable: boolean = false;

  @State() scrollOffset: number = 0;

  @State() rowsPerPage: number;

  @State() previousRowsPerPage: number;

  @State() toRow: number;

  @State() sortedColumn: string;

  @State() sortedColumnOrder: IcDataTableSortOrderOptions;

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
  @Prop() data!: { [key: string]: any }[];

  /**
   * Set the density of the table including font and padding.
   */
  @Prop() density?: IcDataTableDensityOptions = "default";

  /**
   * Applies a border
   */
  @Prop() embedded?: boolean = false;

  /**
   * Sets the column headers to not be visible if set to `true`.
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
   * Adds a pagination bar to the bottom of the table if set to `true`.
   */
  @Prop() showPagination?: boolean = false;

  /**
   * Allows table columns to be sorted using applied sort buttons if set to `true`.
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
   * Column headers will remain at the top of the table when scrolling vertically if set to `true`.
   */
  @Prop() stickyColumnHeaders?: boolean = false;

  /**
   * Row headers will remain to the left when scrolling horizontally if set to `true`.
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
    if (tableElement?.clientHeight > tableContainer?.clientHeight) {
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

  private isObject = (value: any) => typeof value === "object";

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

      const getAlignment = (
        alignment: "horizontal" | "vertical",
        returnValue?: boolean
      ) => {
        if (
          this.isObject(cell) &&
          Object.keys(cell).includes("cellAlignment")
        ) {
          const alignmentVal = this.getObjectValue(
            cellValue("cellAlignment"),
            alignment
          );
          return returnValue ? alignmentVal : alignmentVal !== undefined;
        }
      };

      return rowKeys[index] === "header" ? (
        <th
          scope="row"
          colSpan={cellValue("colspan")}
          class={{
            ["row-header"]: true,
            [`row-header-alignment-${cellValue("cellAlignment")}`]:
              cellValue("cellAlignment") !== undefined,
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
            [`data-type-${column?.dataType}`]: true,
            [`cell-alignment-${
              column?.columnAlignment?.horizontal ||
              getAlignment("horizontal", true)
            }`]:
              !!column?.columnAlignment?.horizontal ||
              getAlignment("horizontal"),
            [`cell-alignment-${
              column?.columnAlignment?.vertical ||
              rowAlignment ||
              getAlignment("vertical", true)
            }`]:
              !!column?.columnAlignment?.vertical ||
              !!rowAlignment ||
              getAlignment("vertical"),
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
    return this.columns.map((column) => (
      <th
        scope="col"
        class={{
          ["column-header"]: true,
          [`column-header-alignment-${column.cellAlignment}`]:
            column.cellAlignment !== undefined,
          [`table-density-${this.density}`]: true,
        }}
        colSpan={column.colspan}
      >
        {this.sortable ? (
          <div class="column-header-inner-container">
            <ic-typography variant="subtitle-large">
              {column.title}
            </ic-typography>
            <ic-button
              variant="icon"
              id={`sort-button-${column.key}`}
              aria-label={this.getSortButtonLabel(column.key)}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => this.sortRows(column.key)}
              innerHTML={
                this.sortedColumn === column.key &&
                this.sortedColumnOrder !== "unsorted"
                  ? this.sortedColumnOrder === "ascending"
                    ? ascendingIcon
                    : descendingIcon
                  : unsortedIcon
              }
              class={{
                ["sort-button"]: true,
                ["sort-button-unsorted"]:
                  this.sortedColumn !== column.key ||
                  this.sortedColumnOrder === "unsorted",
              }}
            ></ic-button>
          </div>
        ) : (
          <ic-typography variant="subtitle-large">{column.title}</ic-typography>
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
          class={{
            ["table-row"]: true,
            [`table-density-${this.density}`]: true,
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
    const getSortOption = (option: IcDataTableSortOrderOptions) => {
      const sortOrders = this.sortOptions.sortOrders;
      return sortOrders[(sortOrders.indexOf(option) + 1) % sortOrders.length];
    };

    if (this.sortedColumn === key) {
      const sortOption = getSortOption(this.sortedColumnOrder);
      label = sortOption !== "unsorted" ? `Sort ${sortOption}` : "Remove sort";
    } else {
      label = `Sort ${getSortOption("unsorted")}`;
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

      let sortOrderIndex = sortOrders.indexOf(this.sortedColumnOrder) + 1;

      if (sortOrderIndex > sortOrders.length - 1) {
        sortOrderIndex = 0;
      }

      this.sortedColumnOrder = sortOrders[sortOrderIndex];

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
            ["scrollable"]: scrollable,
          }}
          tabIndex={scrollable ? 0 : null}
          onScroll={updateScrollOffset}
        >
          <table>
            <caption class="table-caption">{caption}</caption>
            {!hideColumnHeaders && (
              <thead
                class={{
                  [`column-header-sticky`]: stickyColumnHeaders,
                  [`column-header-overlay`]:
                    stickyColumnHeaders && scrollOffset !== 0,
                }}
              >
                <tr>{createColumnHeaders()}</tr>
              </thead>
            )}
            <tbody>{createRows()}</tbody>
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
