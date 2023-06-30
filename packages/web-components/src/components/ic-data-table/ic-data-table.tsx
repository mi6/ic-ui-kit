import { Component, Element, h, Prop, State, Listen } from "@stencil/core";
import unsortedIcon from "./assets/unsorted-icon.svg";
import ascendingIcon from "./assets/ascending-icon.svg";
import descendingIcon from "./assets/descending-icon.svg";

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

  /**
   * The title for the table only visible to screen readers.
   */
  @Prop() caption!: string;

  /**
   * The column headers for the table.
   */
  @Prop() columns!: { [key: string]: any }[];

  /**
   * The row content for the table.
   */
  @Prop() data!: { [key: string]: any }[];

  /**
   * Set the density of the table including font and padding.
   */
  @Prop() density?: "default" | "dense" | "spacious" = "default";

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
    type?: "data" | "page";
    control?: "simple" | "complex";
    itemsPerPageControl?: boolean;
    goToPageControl?: boolean;
    alignment?: "left" | "right" | "space-between";
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

  @State() rowsPerPage: number = Number(
    this.paginationOptions.itemsPerPage[0].value
  );

  @State() previousRowsPerPage: number = this.rowsPerPage;

  @State() toRow: number = Number(this.paginationOptions.itemsPerPage[0].value);

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
  @Prop() sortOptions?: { sortOrder: string[]; defaultColumn?: string } = {
    sortOrder: ["unsorted", "ascending", "descending"],
    defaultColumn: "",
  };

  @State() sortedRow: string = this.sortOptions.defaultColumn;

  @State() sortedRowOrder: string = this.sortOptions.sortOrder[0];

  /**
   * Column headers will remain at the top of the table when scrolling vertically if set to `true`.
   */
  @Prop() stickyColumn?: boolean = false;

  /**
   * Row headers will remain to the left when scrolling horizontally if set to `true`.
   */
  @Prop() stickyRow?: boolean = false;

  componentDidLoad() {
    const tableRows = this.el.shadowRoot.querySelector("table");
    const tableContainer = this.el.shadowRoot.querySelector(".table-container");
    if (tableRows?.clientHeight > tableContainer?.clientHeight) {
      this.scrollable = true;
    }
  }

  @Listen("icItemsPerPageChange")
  handleItemsPerPageChange(ev: CustomEvent) {
    this.previousRowsPerPage = this.rowsPerPage;
    this.rowsPerPage = ev.detail.value;
  }

  @Listen("icPageChange")
  handlePageChange(ev: CustomEvent) {
    this.fromRow = (ev.detail.value - 1) * this.rowsPerPage;
    this.toRow = this.fromRow + this.rowsPerPage;
    const tableRows = this.el.shadowRoot.querySelector(".table-row-container");
    if (this.previousRowsPerPage === this.rowsPerPage) {
      tableRows.scrollTop = 0;
    } else if (this.previousRowsPerPage < this.rowsPerPage) {
      tableRows.scrollTop = this.scrollOffset;
      this.previousRowsPerPage = this.rowsPerPage;
    } else {
      this.previousRowsPerPage = this.rowsPerPage;
    }
  }

  private createCells = (row: Record<string, unknown>) => {
    const rowValues = Object.values(row);
    const rowKeys = Object.keys(row);

    if (rowKeys.indexOf("header") > -1) {
      // eslint-disable-next-line no-var
      var rowAlignment = Object.values(rowValues[rowKeys.indexOf("header")])[
        Object.keys(rowValues[rowKeys.indexOf("header")]).indexOf(
          "cellAlignment"
        )
      ];

      //eslint-disable-next-line no-var
      var rowEmphasis = Object.values(rowValues[rowKeys.indexOf("header")])[
        Object.keys(rowValues[rowKeys.indexOf("header")]).indexOf("emphasis")
      ];

      return rowValues.map((cell, index) =>
        rowKeys[index] === "header" ? (
          <th
            scope="row"
            colSpan={this.getObjectValue(cell, "colspan")}
            class={{
              [`row-header`]: true,
              [`row-header-alignment-${this.getObjectValue(
                cell,
                "alignment"
              )}`]: this.getObjectValue(cell, "alignment") !== undefined,
              [`row-header-sticky`]: this.stickyRow,
            }}
          >
            {this.getObjectValue(cell, "title")}
          </th>
        ) : (
          <td
            innerHTML={
              this.columns[index]?.dataType === "element"
                ? (cell as string)
                : null
            }
            class={{
              ["table-cell"]: true,
              [`data-type-${this.columns[index]?.dataType}`]: true,
              [`cell-alignment-${
                this.columns[index]?.cellAlignment?.horizontal ||
                (typeof cell === "object"
                  ? Object.keys(cell).includes("alignment")
                    ? this.getObjectValue(
                        this.getObjectValue(cell, "alignment"),
                        "horizontal"
                      )
                    : null
                  : null)
              }`]:
                this.columns[index]?.cellAlignment?.horizontal !== undefined ||
                (typeof cell === "object"
                  ? Object.keys(cell).includes("alignment")
                    ? this.getObjectValue(
                        this.getObjectValue(cell, "alignment"),
                        "horizontal"
                      ) !== undefined
                    : null
                  : null),
              [`cell-alignment-${
                this.columns[index]?.cellAlignment?.vertical ||
                rowAlignment ||
                (typeof cell === "object"
                  ? Object.keys(cell).includes("alignment")
                    ? this.getObjectValue(
                        this.getObjectValue(cell, "alignment"),
                        "vertical"
                      )
                    : null
                  : null)
              }`]:
                this.columns[index]?.cellAlignment?.vertical !== undefined ||
                rowAlignment !== undefined ||
                (typeof cell === "object"
                  ? Object.keys(cell).includes("alignment")
                    ? this.getObjectValue(
                        this.getObjectValue(cell, "alignment"),
                        "vertical"
                      ) !== undefined
                    : null
                  : null),
            }}
          >
            <ic-typography
              variant="body"
              class={{
                [`cell-emphasis-${
                  (typeof cell === "object"
                    ? this.getObjectValue(cell, "emphasis")
                    : null) ||
                  this.columns[index]?.emphasis ||
                  rowEmphasis
                }`]:
                  (typeof cell === "object"
                    ? this.getObjectValue(cell, "emphasis") !== undefined
                    : null) ||
                  this.columns[index]?.emphasis !== undefined ||
                  rowEmphasis !== undefined,
              }}
            >
              {typeof cell === "object" ? (
                Object.keys(cell).includes("href") ? (
                  <ic-link href={this.getObjectValue(cell, "href")}>
                    {this.getObjectValue(cell, "data")}
                  </ic-link>
                ) : (
                  this.getObjectValue(cell, "data")
                )
              ) : this.columns[index]?.dataType !== "element" ? (
                cell
              ) : null}
            </ic-typography>
          </td>
        )
      );
    } else {
      return Object.values(row).map((cell, index) => (
        <td
          innerHTML={
            this.columns[index]?.dataType === "element"
              ? (cell as string)
              : null
          }
          class={{
            ["table-cell"]: true,
            [`data-type-${this.columns[index]?.dataType}`]: true,
            [`cell-alignment-${
              this.columns[index]?.cellAlignment?.horizontal ||
              (typeof cell === "object"
                ? Object.keys(cell).includes("alignment")
                  ? this.getObjectValue(
                      this.getObjectValue(cell, "alignment"),
                      "horizontal"
                    )
                  : null
                : null)
            }`]:
              this.columns[index]?.cellAlignment?.horizontal !== undefined ||
              (typeof cell === "object"
                ? Object.keys(cell).includes("alignment")
                  ? this.getObjectValue(
                      this.getObjectValue(cell, "alignment"),
                      "horizontal"
                    ) !== undefined
                  : null
                : null),
            [`cell-alignment-${
              this.columns[index]?.cellAlignment?.vertical ||
              rowAlignment ||
              (typeof cell === "object"
                ? Object.keys(cell).includes("alignment")
                  ? this.getObjectValue(
                      this.getObjectValue(cell, "alignment"),
                      "vertical"
                    )
                  : null
                : null)
            }`]:
              this.columns[index]?.cellAlignment?.vertical !== undefined ||
              rowAlignment !== undefined ||
              (typeof cell === "object"
                ? Object.keys(cell).includes("alignment")
                  ? this.getObjectValue(
                      this.getObjectValue(cell, "alignment"),
                      "vertical"
                    ) !== undefined
                  : null
                : null),
          }}
        >
          <ic-typography
            variant="body"
            class={{
              [`cell-emphasis-${
                (typeof cell === "object"
                  ? this.getObjectValue(cell, "emphasis")
                  : null) ||
                this.columns[index]?.emphasis ||
                rowEmphasis
              }`]:
                (typeof cell === "object"
                  ? this.getObjectValue(cell, "emphasis") !== undefined
                  : null) ||
                this.columns[index]?.emphasis !== undefined ||
                rowEmphasis !== undefined,
            }}
          >
            {typeof cell === "object" ? (
              Object.keys(cell).includes("href") ? (
                <ic-link href={this.getObjectValue(cell, "href")}>
                  {this.getObjectValue(cell, "data")}
                </ic-link>
              ) : (
                this.getObjectValue(cell, "data")
              )
            ) : this.columns[index]?.dataType !== "element" ? (
              cell
            ) : null}
          </ic-typography>
        </td>
      ));
    }
  };

  private createColumnHeaders = () => {
    if (this.sortable) {
      return this.columns.map((column) => (
        <th
          scope="col"
          class={{
            [`column-header`]: true,
            [`column-header-alignment-${column.alignment}`]:
              column.alignment !== undefined,
            [`table-density-${this.density}`]: true,
          }}
          colSpan={column.colspan}
        >
          <div class="column-header-inner-container">
            <ic-typography variant="subtitle-large">
              {column.title}
            </ic-typography>
            <ic-button
              variant="icon"
              id={`sort-button-${column.key}`}
              aria-label={this.getSortButtonLabel(column.key)}
              onClick={() => this.sortRows(column.key)}
              innerHTML={
                this.sortedRow === column.key &&
                this.sortedRowOrder !== "unsorted"
                  ? this.sortedRowOrder === "ascending"
                    ? ascendingIcon
                    : descendingIcon
                  : unsortedIcon
              }
              class={{
                ["sort-button"]: true,
                ["sort-button-unsorted"]:
                  this.sortedRow !== column.key ||
                  this.sortedRowOrder === "unsorted",
              }}
            ></ic-button>
          </div>
        </th>
      ));
    } else {
      return this.columns.map((column) => (
        <th
          scope="col"
          class={{
            [`column-header`]: true,
            [`column-header-alignment-${column.alignment}`]:
              column.alignment !== undefined,
            [`column-header-sticky`]: this.stickyColumn,
            [`table-density-${this.density}`]: true,
          }}
          colSpan={column.colspan}
        >
          <ic-typography variant="subtitle-large">{column.title}</ic-typography>
        </th>
      ));
    }
  };

  private createRows = () => {
    if (this.showPagination) {
      return this.data
        .slice(this.fromRow, this.toRow)
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
    } else {
      return this.data
        .slice()
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
    }
  };

  private getObjectValue = (cell: unknown, key: string) => {
    return Object.values(cell)[Object.keys(cell).indexOf(key)];
  };

  private getSortButtonLabel = (key: string) => {
    // eslint-disable-next-line no-var
    var label = "";

    if (
      this.sortedRow === key &&
      this.sortOptions.sortOrder[
        (this.sortOptions.sortOrder.indexOf(this.sortedRowOrder) + 1) %
          this.sortOptions.sortOrder.length
      ] === "unsorted"
    ) {
      label = "Remove sort";
    } else if (
      this.sortedRow === key &&
      this.sortOptions.sortOrder[
        (this.sortOptions.sortOrder.indexOf(this.sortedRowOrder) + 1) %
          this.sortOptions.sortOrder.length
      ] !== "unsorted"
    ) {
      label =
        "Sort " +
        this.sortOptions.sortOrder[
          (this.sortOptions.sortOrder.indexOf(this.sortedRowOrder) + 1) %
            this.sortOptions.sortOrder.length
        ];
    } else {
      label =
        "Sort " +
        this.sortOptions.sortOrder[
          (this.sortOptions.sortOrder.indexOf("unsorted") + 1) %
            this.sortOptions.sortOrder.length
        ];
    }

    return label;
  };

  private getSortFunction = () => {
    switch (this.sortedRowOrder) {
      case "ascending":
        return (a: any, b: any) => {
          if (
            typeof a[this.sortedRow] === "object" &&
            typeof b[this.sortedRow] !== "object"
          ) {
            return String(Object.values(a[this.sortedRow])[0]).localeCompare(
              String(b[this.sortedRow]),
              undefined,
              { numeric: true, sensitivity: "base" }
            );
          } else if (
            typeof b[this.sortedRow] === "object" &&
            typeof a[this.sortedRow] !== "object"
          ) {
            return String(a[this.sortedRow]).localeCompare(
              String(Object.values(b[this.sortedRow])[0]),
              undefined,
              { numeric: true, sensitivity: "base" }
            );
          } else if (
            typeof a[this.sortedRow] === "object" &&
            typeof b[this.sortedRow] === "object"
          ) {
            return String(Object.values(a[this.sortedRow])[0]).localeCompare(
              String(Object.values(b[this.sortedRow])[0]),
              undefined,
              { numeric: true, sensitivity: "base" }
            );
          } else {
            return String(a[this.sortedRow]).localeCompare(
              String(b[this.sortedRow]),
              undefined,
              { numeric: true, sensitivity: "base" }
            );
          }
        };
      case "descending":
        return (a: any, b: any) => {
          if (
            typeof b[this.sortedRow] === "object" &&
            typeof a[this.sortedRow] !== "object"
          ) {
            return String(Object.values(b[this.sortedRow])[0]).localeCompare(
              String(a[this.sortedRow]),
              undefined,
              { numeric: true, sensitivity: "base" }
            );
          } else if (
            typeof a[this.sortedRow] === "object" &&
            typeof b[this.sortedRow] !== "object"
          ) {
            return String(b[this.sortedRow]).localeCompare(
              String(Object.values(a[this.sortedRow])[0]),
              undefined,
              { numeric: true, sensitivity: "base" }
            );
          } else if (
            typeof a[this.sortedRow] === "object" &&
            typeof b[this.sortedRow] === "object"
          ) {
            return String(Object.values(b[this.sortedRow])[0]).localeCompare(
              String(Object.values(a[this.sortedRow])[0]),
              undefined,
              { numeric: true, sensitivity: "base" }
            );
          } else {
            return String(b[this.sortedRow]).localeCompare(
              String(a[this.sortedRow]),
              undefined,
              { numeric: true, sensitivity: "base" }
            );
          }
        };
      default:
        return undefined;
    }
  };

  private sortRows = (field: string) => {
    const sortButton = this.el.shadowRoot.querySelector(
      `#sort-button-${field}`
    ) as HTMLIcButtonElement;

    if (field !== "" || undefined) {
      if (field !== this.sortedRow) {
        this.sortedRow = field;
        this.sortedRowOrder =
          this.sortOptions.sortOrder[
            this.sortOptions.sortOrder.indexOf("unsorted")
          ];
      }

      let x = this.sortOptions.sortOrder.indexOf(this.sortedRowOrder);
      x++;

      if (x > this.sortOptions.sortOrder.length - 1) {
        x = 0;
      }

      this.sortedRowOrder = this.sortOptions.sortOrder[x];

      sortButton.updateAriaLabel(this.getSortButtonLabel(field));
    }
  };

  private updateScrollOffset = () => {
    const tableRows = this.el.shadowRoot.querySelector(".table-row-container");
    this.scrollOffset = tableRows.scrollTop;
  };

  render() {
    const { caption, hideColumnHeaders, paginationOptions, showPagination } =
      this;

    return (
      <div class="table-container">
        <div
          class={{
            ["table-row-container"]: true,
            ["scrollable"]: this.scrollable,
          }}
          tabIndex={this.scrollable ? 0 : null}
          onScroll={this.updateScrollOffset}
        >
          <table>
            <caption class="table-caption">{caption}</caption>
            {hideColumnHeaders === false ? (
              <thead
                class={{
                  [`column-header-sticky`]: this.stickyColumn,
                  [`column-header-overlay`]:
                    this.stickyColumn && this.scrollOffset !== 0,
                }}
              >
                <tr>{this.createColumnHeaders()}</tr>
              </thead>
            ) : null}
            <tbody>{this.createRows()}</tbody>
          </table>
        </div>
        {showPagination ? (
          <div class="pagination-container">
            <ic-pagination-bar
              totalItems={this.data.length}
              paginationType={this.paginationOptions.type}
              paginationControl={this.paginationOptions.control}
              showItemsPerPageControl={
                this.paginationOptions.itemsPerPageControl
              }
              showGoToPageControl={this.paginationOptions.goToPageControl}
              itemsPerPageOptions={paginationOptions.itemsPerPage}
              alignment={this.paginationOptions.alignment}
            ></ic-pagination-bar>
          </div>
        ) : null}
        {this.sortable ? (
          <div class="screen-reader-sort-text" aria-live="polite">
            {this.sortedRowOrder !== "unsorted" ||
            this.sortedRow === ("" || undefined || null)
              ? `${this.sortedRow} sorted ${this.sortedRowOrder}`
              : "table unsorted"}
          </div>
        ) : null}
      </div>
    );
  }
}
