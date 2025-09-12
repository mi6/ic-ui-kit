import errorIcon from "../assets/error-icon.svg";
import infoIcon from "../assets/info-icon.svg";
import neutralIcon from "../assets/neutral-icon.svg";
import successIcon from "../assets/success-icon.svg";
import warningIcon from "../assets/warning-icon.svg";

// Global status icons
export const VARIANT_ICONS = {
  neutral: {
    icon: neutralIcon,
    ariaLabel: "Neutral",
  },
  info: {
    icon: infoIcon,
    ariaLabel: "For your information",
  },
  warning: {
    icon: warningIcon,
    ariaLabel: "Warning",
  },
  error: {
    icon: errorIcon,
    ariaLabel: "Error",
  },
  success: {
    icon: successIcon,
    ariaLabel: "Success",
  },
};

// Global ARIA attributes
export const IC_INHERITED_ARIA = [
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-description",
  "aria-details",
  "aria-disabled",
  "aria-dropeffect",
  "aria-errormessage",
  "aria-expanded",
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

/* Range within which the chosen theme colour would not have a sufficient brightness difference with either of the black or white foreground colours
 * The brightness difference must be greater than 125 to provide good colour visibility
 * Calculated by:
 * - Using the brightness formula for both colours: https://www.w3.org/TR/AERT/#color-contrast
 * - Adding 125 to the brightness of the black foreground colour - RGB(11, 12, 12)
 * - Subtracting 125 from the brightness of the white foreground colour - RGB(255, 255, 255)
 */
export const BLACK_MIN_COLOR_BRIGHTNESS = 136.701;
export const WHITE_MAX_COLOR_BRIGHTNESS = 130;

export const IC_ALL_COMPONENTS = [
  "ic-accordion",
  "ic-accordion-group",
  "ic-action-chip",
  "ic-alert",
  "ic-badge",
  "ic-back-to-top",
  "ic-breadcrumb",
  "ic-breadcrumb-group",
  "ic-button",
  "ic-card-horizontal",
  "ic-card-vertical",
  "ic-checkbox",
  "ic-checkbox-group",
  "ic-chip",
  "ic-classification-banner",
  "ic-data-list",
  "ic-data-row",
  "ic-data-table",
  "ic-data-table-title-bar",
  "ic-date-input",
  "ic-date-picker",
  "ic-dialog",
  "ic-divider",
  "ic-drawer",
  "ic-empty-state",
  "ic-footer",
  "ic-footer-link",
  "ic-footer-link-group",
  "ic-hero",
  "ic-horizontal-scroll",
  "ic-input-label",
  "ic-input-validation",
  "ic-layout-grid",
  "ic-layout-grid-item",
  "ic-link",
  "ic-loading-indicator",
  "ic-menu",
  "ic-menu-group",
  "ic-menu-item",
  "ic-navigation-button",
  "ic-navigation-group",
  "ic-navigation-item",
  "ic-navigation-menu",
  "ic-page-header",
  "ic-pagination",
  "ic-pagination-bar",
  "ic-pagination-item",
  "ic-popover-menu",
  "ic-radio-group",
  "ic-radio-option",
  "ic-search-bar",
  "ic-section-container",
  "ic-select",
  "ic-side-navigation",
  "ic-skeleton",
  "ic-skip-link",
  "ic-status-tag",
  "ic-step",
  "ic-tab",
  "ic-tab-context",
  "ic-tab-group",
  "ic-tab-panel",
  "ic-table-of-contents",
  "ic-text-field",
  "ic-theme",
  "ic-time-input",
  "ic-toast",
  "ic-toast-region",
  "ic-toggle-button",
  "ic-toggle-button-group",
  "ic-tooltip",
  "ic-top-navigation",
  "ic-tree-item",
  "ic-tree-view",
  "ic-typography",
];
