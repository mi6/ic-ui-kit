import { Component, Element, h, Prop, State } from "@stencil/core";

@Component({
  tag: "ic-data-table",
  styleUrl: "ic-data-table.css",
  shadow: true,
})
export class DataTable {
  @Element() el: HTMLIcDataTableElement;

  @Prop() columns!: { [key: string]: any }[];

  @Prop() data!: { [key: string]: any }[];

  @Prop() hideColumnHeaders: boolean = false;

  @Prop() density?: "default" | "dense" | "spacious" = "default";

  @Prop() stickyColumn?: boolean = false;

  @Prop() stickyRow?: boolean = false;

  @Prop() embedded?: boolean = false;

  @State() scrollable: boolean = false;

  private createColumnHeaders = () => {
      return this.columns.map((column) => (
        <th scope="col" class={{
          [`column-header`]: true,
          [`column-header-alignment-${column.alignment}`]:
            column.alignment !== undefined,
            [`column-header-sticky`]: this.stickyColumn,
          [`table-density-${this.density}`]: true
        }} colSpan={column.colspan}>
          <ic-typography variant="subtitle-large">{column.title}</ic-typography>
        </th>
      ));
  };

  private createRows = () => {
    return this.data.map((row) => (
      <tr class={{["table-row"]: true, [`table-density-${this.density}`]: true}}>{this.createCells(row)}</tr>
    ));
  };

  private getCellIndex = (index: number, keys: Array<any>) => {
    if (keys.includes("cellAlignment")) {
      index--;
    }
    if (keys.includes("emphasis")) {
      index--;
    }
    return index;
  };

  private createCells = (row: {}) => {
    const rowValues = Object.values(row);
    const rowKeys = Object.keys(row);

    if (rowKeys.indexOf("header") > -1) {
      var rowAlignment = Object.values(rowValues[rowKeys.indexOf("header")])[
        Object.keys(rowValues[rowKeys.indexOf("header")]).indexOf(
          "cellAlignment"
        )
      ];

      var rowEmphasis = Object.values(rowValues[rowKeys.indexOf("header")])[
        Object.keys(rowValues[rowKeys.indexOf("header")]).indexOf("emphasis")
      ];
    }

    if (rowKeys[0] === "header") {
      return rowValues.map((cell, index) =>
        index === 0 ? (
          <th
            scope="row"
            colSpan={Object.values(cell)[Object.keys(cell).indexOf("colspan")]}
            class={{
              [`row-header`]: true,
              [`row-header-alignment-${
                Object.values(cell)[Object.keys(cell).indexOf("alignment")]
              }`]:
                Object.values(cell)[Object.keys(cell).indexOf("alignment")] !==
                undefined,
              [`row-header-sticky`]: this.stickyRow
            }}
          >
            {Object.values(cell)[0]}
          </th>
        ) : rowKeys[index] !== "cellAlignment" &&
          rowKeys[index] !== "emphasis" ? (
          <td
            class={{
              ["table-cell"]: true,
              [`data-type-${
                this.columns[this.getCellIndex(index, rowKeys)]?.dataType
              }`]: true,
              [`cell-alignment-${
                this.columns[this.getCellIndex(index, rowKeys)]?.cellAlignment
                  ?.horizontal ||
                (typeof cell === "object"
                  ? Object.values(
                      Object.values(cell)[
                        Object.keys(cell).indexOf("alignment")
                      ]
                    )[
                      Object.keys(
                        Object.values(cell)[
                          Object.keys(cell).indexOf("alignment")
                        ]
                      ).indexOf("horizontal")
                    ]
                  : null)
              }`]:
                this.columns[this.getCellIndex(index, rowKeys)]?.cellAlignment
                  ?.horizontal !== undefined ||
                (typeof cell === "object"
                  ? Object.values(
                      Object.values(cell)[
                        Object.keys(cell).indexOf("alignment")
                      ]
                    )[
                      Object.keys(
                        Object.values(cell)[
                          Object.keys(cell).indexOf("alignment")
                        ]
                      ).indexOf("horizontal")
                    ] !== undefined
                  : null),
              [`cell-alignment-${
                this.columns[this.getCellIndex(index, rowKeys)]?.cellAlignment
                  ?.vertical ||
                rowAlignment ||
                (typeof cell === "object"
                  ? Object.values(
                      Object.values(cell)[
                        Object.keys(cell).indexOf("alignment")
                      ]
                    )[
                      Object.keys(
                        Object.values(cell)[
                          Object.keys(cell).indexOf("alignment")
                        ]
                      ).indexOf("vertical")
                    ]
                  : null)
              }`]:
                this.columns[this.getCellIndex(index, rowKeys)]?.cellAlignment
                  ?.vertical !== undefined ||
                rowAlignment !== undefined ||
                (typeof cell === "object"
                  ? Object.values(
                      Object.values(cell)[
                        Object.keys(cell).indexOf("alignment")
                      ]
                    )[
                      Object.keys(
                        Object.values(cell)[
                          Object.keys(cell).indexOf("alignment")
                        ]
                      ).indexOf("vertical")
                    ] !== undefined
                  : null),
            }}
          >
            <ic-typography
              variant="body"
              class={{
                [`cell-emphasis-${
                  (typeof cell === "object"
                    ? Object.values(cell)[Object.keys(cell).indexOf("emphasis")]
                    : null) ||
                  this.columns[this.getCellIndex(index, rowKeys)]?.emphasis ||
                  rowEmphasis
                }`]:
                  (typeof cell === "object"
                    ? Object.values(cell)[
                        Object.keys(cell).indexOf("emphasis")
                      ] !== undefined
                    : null) ||
                  this.columns[this.getCellIndex(index, rowKeys)]?.emphasis !==
                    undefined ||
                  rowEmphasis !== undefined,
              }}
            >
              {typeof cell === "object" ? Object.values(cell)[0] : cell}
            </ic-typography>
          </td>
        ) : null
      );
    } else {
      return Object.values(row).map((cell, index) =>
        rowKeys[index] !== "cellAlignment" && rowKeys[index] !== "emhpasis" ? (
          <td
            class={{
              ["table-cell"]: true,
              [`data-type-${
                this.columns[this.getCellIndex(index, rowKeys)]?.dataType
              }`]: true,
              [`cell-alignment-${
                this.columns[this.getCellIndex(index, rowKeys)]?.cellAlignment
                  ?.horizontal ||
                (typeof cell === "object"
                  ? Object.values(
                      Object.values(cell)[
                        Object.keys(cell).indexOf("alignment")
                      ]
                    )[
                      Object.keys(
                        Object.values(cell)[
                          Object.keys(cell).indexOf("alignment")
                        ]
                      ).indexOf("horizontal")
                    ]
                  : null)
              }`]:
                this.columns[this.getCellIndex(index, rowKeys)]?.cellAlignment
                  ?.horizontal !== undefined ||
                (typeof cell === "object"
                  ? Object.values(
                      Object.values(cell)[
                        Object.keys(cell).indexOf("alignment")
                      ]
                    )[
                      Object.keys(
                        Object.values(cell)[
                          Object.keys(cell).indexOf("alignment")
                        ]
                      ).indexOf("horizontal")
                    ] !== undefined
                  : null),
              [`cell-alignment-${
                this.columns[this.getCellIndex(index, rowKeys)]?.cellAlignment
                  ?.vertical ||
                rowAlignment ||
                (typeof cell === "object"
                  ? Object.values(
                      Object.values(cell)[
                        Object.keys(cell).indexOf("alignment")
                      ]
                    )[
                      Object.keys(
                        Object.values(cell)[
                          Object.keys(cell).indexOf("alignment")
                        ]
                      ).indexOf("vertical")
                    ]
                  : null)
              }`]:
                this.columns[this.getCellIndex(index, rowKeys)]?.cellAlignment
                  ?.vertical !== undefined ||
                rowAlignment !== undefined ||
                (typeof cell === "object"
                  ? Object.values(
                      Object.values(cell)[
                        Object.keys(cell).indexOf("alignment")
                      ]
                    )[
                      Object.keys(
                        Object.values(cell)[
                          Object.keys(cell).indexOf("alignment")
                        ]
                      ).indexOf("vertical")
                    ] !== undefined
                  : null),
            }}
          >
            <ic-typography
              variant="body"
              class={{
                [`cell-emphasis-${
                  (typeof cell === "object"
                    ? Object.values(cell)[Object.keys(cell).indexOf("emphasis")]
                    : null) ||
                  this.columns[this.getCellIndex(index, rowKeys)]?.emphasis ||
                  rowEmphasis
                }`]:
                  (typeof cell === "object"
                    ? Object.values(cell)[
                        Object.keys(cell).indexOf("emphasis")
                      ] !== undefined
                    : null) ||
                  this.columns[this.getCellIndex(index, rowKeys)]?.emphais !==
                    undefined ||
                  rowEmphasis !== undefined,
              }}
            >
              {typeof cell === "object" ? Object.values(cell)[0] : cell}
            </ic-typography>
          </td>
        ) : null
      );
    }
  };

  componentDidLoad() {
    let tableRows = this.el.shadowRoot.querySelector('table');
    let tableContainer = this.el.shadowRoot.querySelector('.table-container');
    if(tableRows.clientHeight > tableContainer.clientHeight) {
      this.scrollable = true;
    }
  }

  render() {
    const { hideColumnHeaders } = this;

    return (
      <div class={{['table-container']: true, ['scrollable']: this.scrollable}} tabIndex={this.scrollable ? 0 : null}>
        <table>
          {hideColumnHeaders === false ? (
            <thead>{this.createColumnHeaders()}</thead>
          ) : null}
          <tbody>{this.createRows()}</tbody>
        </table>
      </div>
    );
  }
}
