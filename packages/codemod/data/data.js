import {
  appearanceDark,
  appearanceDarkIncludesMonochrome,
  appearanceLight,
  appearanceDefault,
  appearanceLightDeprecated,
  appearanceLightNoMonochrome,
  appearanceOutline,
  appearanceOutlined,
  sizeDefault,
  sizeSmall,
  sizeSmallAbsolute,
  appearanceFilled,
  appearanceDarkNoMonochrome,
} from "./commonChanges.js";

export const changes = {
  //web-components
  "ic-accordion-group": [
    {
      v2: "group-title",
      v3: "label",
      type: "prop",
    },
  ],
  "ic-accordion": [sizeDefault],
  "ic-badge": [
    {
      v2: "text-label",
      v3: "label",
      type: "prop",
    },
    sizeDefault,
  ],
  "ic-card": [
    {
      v2: "ic-card",
      v3: "ic-card-vertical",
      type: "web-component",
    },
  ],
  "ic-data-entity": [
    sizeDefault,
    sizeSmall,
    sizeSmallAbsolute,
    {
      v2: "ic-data-entity",
      v3: "ic-data-list",
      type: "web-component",
    },
  ],
  "ic-data-row": [sizeDefault, sizeSmall, sizeSmallAbsolute],
  "ic-empty-state": [
    {
      v2: "body-max-lines",
      v3: "max-lines",
      type: "prop",
    },
  ],
  "ic-footer-link-group": [
    {
      v2: "group-title",
      v3: "label",
      type: "prop",
    },
  ],
  "ic-menu-item": [
    {
      v2: "keyboard-shortcut",
      v3: "keyboard-shortcut-label",
      type: "prop",
    },
    {
      v2: "toggle-checked",
      v3: "checked",
      type: "prop",
    },
  ],
  "ic-pagination": [
    {
      v2: "adjacent-count",
      v3: "adjacent-page-count",
      type: "prop",
    },
    {
      v2: "boundary-count",
      v3: "boundary-page-count",
      type: "prop",
    },
    appearanceDark,
    appearanceLight,
    appearanceDefault,
  ],
  "ic-search-bar": [
    sizeDefault,
    sizeSmall,
    sizeSmallAbsolute,
    {
      v2: "disable-filter",
      v3: "disable-auto-filtering",
      type: "prop",
    },
    {
      v2: "hint-text",
      v3: "assistive-hint-text",
      type: "prop",
    },
  ],
  "ic-select": [
    sizeSmall,
    sizeDefault,
    sizeSmallAbsolute,
    {
      v2: "disable-filter",
      v3: "disable-auto-filtering",
      type: "prop",
    },
  ],
  "ic-select-with-multi": [
    sizeDefault,
    sizeSmall,
    sizeSmallAbsolute,
    {
      v2: "ic-select-with-multi",
      v3: "ic-select",
      type: "web-component",
    },
  ],
  "ic-side-navigation": [
    {
      v2: "side-nav-expanded",
      v3: "ic-side-nav-expanded",
      type: "prop",
    },
  ],
  "ic-status-tag": [
    sizeDefault,
    sizeSmall,
    sizeSmallAbsolute,
    appearanceOutlined,
    appearanceFilled,
  ],
  "ic-stepper": [appearanceLightNoMonochrome, appearanceDefault],
  "ic-step": [
    {
      v2: "step-type",
      v3: "type",
      type: "prop",
    },
    {
      v2: "step-title",
      v3: "heading",
      type: "prop",
    },
    {
      v2: "step-subtitle",
      v3: "subheading",
      type: "prop",
    },
    {
      v2: "step-status",
      v3: "status",
      type: "prop",
    },
  ],
  "ic-switch": [sizeDefault, sizeSmall, sizeSmallAbsolute],
  "ic-text-field": [
    {
      v2: "max-length",
      v3: "max-characters",
      type: "prop",
    },
  ],
  "ic-toggle-button": [
    {
      v2: "toggle-checked",
      v3: "checked",
      type: "prop",
    },
    sizeDefault,
    appearanceDark,
    appearanceLight,
    appearanceDefault,
  ],
  "ic-button": [
    appearanceDarkIncludesMonochrome,
    appearanceLight,
    appearanceDefault,
    sizeDefault,
  ],
  "ic-top-navigation": [
    {
      v2: "top-nav-resized",
      v3: "ic-top-nav-resized",
      type: "prop",
    },
  ],
  "ic-breadcrumb-group": [appearanceDark, appearanceLight, appearanceDefault],
  "ic-chip": [appearanceOutline, appearanceFilled, sizeDefault],
  "ic-loading-indicator": [
    appearanceDark,
    appearanceLight,
    sizeDefault,
    appearanceDefault,
  ],
  "ic-skeleton": [
    appearanceLightDeprecated,
    appearanceDark,
    appearanceLight,
    appearanceDefault,
  ],
  "ic-tab-context": [appearanceDark, appearanceLight, appearanceDefault],
  "ic-tree-view": [
    sizeDefault,
    appearanceDarkNoMonochrome,
    appearanceLightNoMonochrome,
    appearanceDefault,
  ],
  "ic-checkbox-group": [sizeDefault, sizeSmall, sizeSmallAbsolute],
  "ic-checkbox": [sizeDefault, sizeSmall, sizeSmallAbsolute],
  "ic-date-input": [sizeDefault],
  "ic-date-picker": [sizeDefault],
  "ic-hero": [sizeDefault, sizeSmall, sizeSmallAbsolute],
  "ic-link": [appearanceDark, appearanceLight, appearanceDefault],
  "ic-page-header": [sizeDefault, sizeSmall, sizeSmallAbsolute],
  "ic-radio-group": [sizeDefault, sizeSmall, sizeSmallAbsolute],
  "ic-dialog": [
    {
      v2: `buttons=[{]?["']true['"][}]?`,
      v3: `hide-default-controls="false"`,
      type: "absolute",
    },
    {
      v2: `buttons=[{]?["']false['"][}]?`,
      v3: `hide-default-controls="true"`,
      type: "absolute",
    },
  ],
  //react
  IcAccordionGroup: [
    {
      v2: "groupTitle",
      v3: "label",
      type: "prop",
    },
  ],
  IcBadge: [
    {
      v2: "textLabel",
      v3: "label",
      type: "prop",
    },
    sizeDefault,
  ],
  IcCard: [
    {
      v2: "IcCard",
      v3: "IcCardVertical",
      type: "component",
    },
  ],
  IcDataEntity: [
    sizeDefault,
    sizeSmall,
    sizeSmallAbsolute,
    {
      v2: "IcDataEntity",
      v3: "IcDataList",
      type: "component",
    },
  ],
  IcDataRow: [sizeDefault, sizeSmall, sizeSmallAbsolute],
  IcEmptyState: [
    {
      v2: "bodyMaxLines",
      v3: "maxLines",
      type: "prop",
    },
  ],
  IcFooterLinkGroup: [
    {
      v2: "groupTitle",
      v3: "label",
      type: "prop",
    },
  ],
  IcMenuItem: [
    {
      v2: "keyboardShortcut",
      v3: "keyboardShortcutLabel",
      type: "prop",
    },
    {
      v2: "toggleChecked",
      v3: "checked",
      type: "prop",
    },
  ],
  IcPagination: [
    {
      v2: "adjacentCount",
      v3: "adjacentPageCount",
      type: "prop",
    },
    {
      v2: "boundaryCount",
      v3: "boundaryPageCount",
      type: "prop",
    },
    appearanceDark,
    appearanceLight,
    appearanceDefault,
  ],
  IcSearchBar: [
    sizeDefault,
    sizeSmall,
    sizeSmallAbsolute,
    {
      v2: "disableFilter",
      v3: "disableAutoFiltering",
      type: "prop",
    },
    {
      v2: "hintText",
      v3: "assistiveHintText",
      type: "prop",
    },
  ],
  IcSelect: [
    sizeDefault,
    sizeSmall,
    sizeSmallAbsolute,
    {
      v2: "disableFilter",
      v3: "disableAutoFiltering",
      type: "prop",
    },
  ],
  IcSelectWithMulti: [
    sizeDefault,
    sizeSmall,
    sizeSmallAbsolute,
    {
      v2: "IcSelectWithMulti",
      v3: "IcSelect",
      type: "component",
    },
  ],
  IcSideNavigation: [
    {
      v2: "sideNavExpanded",
      v3: "icSideNavExpanded",
      type: "prop",
    },
    {
      v2: "onSideNavExpanded",
      v3: "onIcSideNavExpanded",
      type: "prop",
    },
  ],
  IcStatusTag: [
    sizeDefault,
    sizeSmall,
    sizeSmallAbsolute,
    appearanceOutlined,
    appearanceFilled,
  ],
  IcStepper: [appearanceLightNoMonochrome, appearanceDefault],
  IcStep: [
    {
      v2: "stepType",
      v3: "type",
      type: "prop",
    },
    {
      v2: "stepTitle",
      v3: "heading",
      type: "prop",
    },
    {
      v2: "stepSubtitle",
      v3: "subheading",
      type: "prop",
    },
    {
      v2: "stepStatus",
      v3: "status",
      type: "prop",
    },
  ],
  IcSwitch: [sizeDefault, sizeSmall, sizeSmallAbsolute],
  IcTextField: [
    sizeDefault,
    sizeSmall,
    sizeSmallAbsolute,
    {
      v2: "maxLength",
      v3: "maxCharacters",
      type: "prop",
    },
  ],
  IcToggleButton: [
    {
      v2: "toggleChecked",
      v3: "checked",
      type: "prop",
    },
    sizeDefault,
    appearanceDark,
    appearanceLight,
    appearanceDefault,
  ],
  IcButton: [
    appearanceDarkIncludesMonochrome,
    appearanceLight,
    appearanceDefault,
    sizeDefault,
  ],
  IcTopNavigation: [
    {
      v2: "topNavResized",
      v3: "icTopNavResized",
      type: "prop",
    },
    {
      v2: "onTopNavResized",
      v3: "onIcTopNavResized",
      type: "prop",
    },
  ],
  IcBreadcrumbGroup: [appearanceDark, appearanceLight, appearanceDefault],
  IcChip: [appearanceOutline, appearanceFilled, sizeDefault],
  IcLoadingIndicator: [
    appearanceDark,
    appearanceLight,
    sizeDefault,
    appearanceDefault,
  ],
  IcSkeleton: [
    appearanceLightDeprecated,
    appearanceDark,
    appearanceLightNoMonochrome,
    appearanceDefault,
  ],
  IcTabContext: [appearanceDark, appearanceLight, appearanceDefault],
  IcTreeView: [
    sizeDefault,
    appearanceDarkNoMonochrome,
    appearanceLightNoMonochrome,
    appearanceDefault,
  ],
  IcCheckboxGroup: [sizeDefault, sizeSmall, sizeSmallAbsolute],
  IcCheckbox: [sizeDefault, sizeSmall, sizeSmallAbsolute],
  IcDateInput: [sizeDefault],
  IcDatePicker: [sizeDefault],
  IcHero: [sizeDefault, sizeSmall, sizeSmallAbsolute],
  IcLink: [appearanceDark, appearanceLight, appearanceDefault],
  IcPageHeader: [sizeDefault, sizeSmall, sizeSmallAbsolute],
  IcRadioGroup: [sizeDefault, sizeSmall, sizeSmallAbsolute],
  IcDialog: [
    {
      v2: `buttons=[{]?["']true['"][}]?`,
      v3: `hideDefaultControls="false"`,
      type: "absolute",
    },
    {
      v2: `buttons=[{]?["']false['"][}]?`,
      v3: `hideDefaultControls="true"`,
      type: "absolute",
    },
  ],
  //types
  HTMLIcDataEntityElement: [
    {
      v2: "HTMLIcDataEntityElement",
      v3: "HTMLIcDataListElement",
      type: "component",
    },
  ],
  HTMLIcCardElement: [
    {
      v2: "HTMLIcCardElement",
      v3: "HTMLIcCardVerticalElement",
      type: "component",
    },
  ],
  HTMLIcSelectWithMultiElement: [
    {
      v2: "HTMLIcSelectWithMultiElement",
      v3: "HTMLIcSelectElement",
      type: "component",
    },
  ],
};
