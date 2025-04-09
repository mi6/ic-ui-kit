import {
  appearanceDark,
  appearanceLight,
  sizeDefault,
  sizeSmall,
  sizeSmallAbsolute,
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
  ],
  "ic-card": [
    {
      v2: "ic-card",
      v3: "ic-card-vertical",
      type: "component",
    },
  ],
  "ic-data-entity": [
    {
      v2: "ic-data-entity",
      v3: "ic-data-list",
      type: "component",
    },
  ],
  "ic-dialog": [sizeDefault],
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
  ],
  "ic-search-bar": [
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
    {
      v2: `small\\b[^'"]`,
      v3: 'size="small"',
      type: "absolute",
    },
    {
      v2: "disable-filter",
      v3: "disable-auto-filtering",
      type: "prop",
    },
  ],
  "ic-select-with-multi": [
    {
      v2: "ic-select-with-multi",
      v3: "ic-select",
      type: "component",
    },
  ],
  "ic-side-navigation": [
    {
      v2: "side-nav-expanded",
      v3: "ic-side-nav-expanded",
      type: "prop",
    },
  ],
  "ic-status-tag": [sizeDefault, appearanceDark, appearanceLight],
  "ic-stepper": [appearanceDark, appearanceLight],
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
  "ic-switch": [sizeDefault],
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
    appearanceDark,
    appearanceLight,
  ],
  "ic-button": [appearanceDark, appearanceLight],
  "ic-top-navigation": [
    {
      v2: "top-nav-resized",
      v3: "ic-top-nav-resized",
      type: "prop",
    },
  ],
  "ic-breadcrumb-group": [appearanceDark, appearanceLight],
  "ic-chip": [appearanceDark, appearanceLight],
  "ic-loading-indicator": [appearanceDark, appearanceLight],
  "ic-skeleton": [appearanceDark, appearanceLight],
  "ic-tab-context": [appearanceDark, appearanceLight],
  "ic-tree-view": [appearanceDark, appearanceLight],
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
  ],
  IcCard: [
    {
      v2: "IcCard",
      v3: "IcCardVertical",
      type: "component",
    },
  ],
  IcDataEntity: [
    {
      v2: "IcDataEntity",
      v3: "IcDataList",
      type: "component",
    },
  ],
  IcDialog: [
    {
      v2: `size=[{]?["']default['"][}]?`,
      v3: "size={'medium'}",
      type: "absolute",
    },
  ],
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
  ],
  IcSearchBar: [
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
    {
      v2: "small={true}",
      v3: "size={'small'}",
      type: "prop",
    },
    {
      v2: `small\\b[^'"]`,
      v3: "size={'small'}",
      type: "absolute",
    },
    {
      v2: "disableFilter",
      v3: "disableAutoFiltering",
      type: "prop",
    },
  ],
  IcSelectWithMulti: [
    {
      v2: "IcSelectWithMulti",
      v3: "IcSelect",
      type: "import",
    },
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
    {
      v2: `size=[{]?["']default['"][}]?`,
      v3: "size={'medium'}",
      type: "absolute",
    },
    appearanceDark,
    appearanceLight,
  ],
  IcStepper: [appearanceDark, appearanceLight],
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
  IcSwitch: [
    {
      v2: `size=[{]?["']default['"][}]?`,
      v3: "size={'medium'}",
      type: "absolute",
    },
  ],
  IcTextField: [
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
    appearanceDark,
    appearanceLight,
  ],
  IcButton: [appearanceDark, appearanceLight],
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
  IcBreadcrumbGroup: [appearanceDark, appearanceLight],
  IcChip: [appearanceDark, appearanceLight],
  IcLoadingIndicator: [appearanceDark, appearanceLight],
  IcSkeleton: [appearanceDark, appearanceLight],
  IcTabContext: [appearanceDark, appearanceLight],
  IcTreeView: [appearanceDark, appearanceLight],
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
