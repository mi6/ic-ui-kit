// Global ARIA attributes
export const IC_INHERITED_ARIA = [
  "aria-atomic",
  "aria-busy",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-description",
  "aria-details",
  "aria-disabled",
  "aria-dropeffect",
  "aria-errormessage",
  "aria-flowto",
  "aria-grabbed",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-live",
  "aria-owns",
  "aria-relevant",
  "aria-roledescription",
];

export const IC_DEVICE_SIZES = {
  XS: 576,
  S: 768,
  M: 992,
  L: 1200,
  XL: 99999,
};

export const IC_BLOCK_COLOR_COMPONENTS = [
  "ic-hero",
  "ic-top-navigation",
  "ic-footer",
  "ic-side-navigation",
  "ic-alert",
];

export const IC_FIXED_COLOR_COMPONENTS = ["ic-alert"];

export interface IcColorExceptions {
  [details: string]: string[];
}

export const IC_BLOCK_COLOR_EXCEPTIONS: IcColorExceptions = {
  "ic-alert": ["ic-link"],
};
