export type IcDataTableSortOrderOptions =
  | "unsorted"
  | "ascending"
  | "descending";

export type IcDataTableDensityOptions = "default" | "dense" | "spacious";

export type IcDataTableColumnDataTypes =
  | "string"
  | "number"
  | "address"
  | "element";

export type IcDataTableColumnObject = {
  key: string;
  title: string;
  dataType: IcDataTableColumnDataTypes;
  columnAlignment?: {
    horizontal?: string;
    vertical?: string;
  };
  cellAlignment?: string;
  emphasis?: string;
  colspan?: number;
};
