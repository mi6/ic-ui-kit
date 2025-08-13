export type IcGridBreakpoints =
  | number
  | {
      xs?: number;
      sm?: number;
      md?: number;
      lg?: number;
      xl?: number;
    };

export type IcGridType = "fluid" | "fixed";
