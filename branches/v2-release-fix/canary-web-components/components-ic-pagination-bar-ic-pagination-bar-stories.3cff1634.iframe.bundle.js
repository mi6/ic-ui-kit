"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[6047],{"./src/components/ic-pagination-bar/ic-pagination-bar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignmentLeft:()=>AlignmentLeft,AlignmentSpaceBetween:()=>AlignmentSpaceBetween,Appearance:()=>Appearance,Basic:()=>Basic,GoToPageControl:()=>GoToPageControl,HideAllFromItemsPerPage:()=>HideAllFromItemsPerPage,HideRangeLabel:()=>HideRangeLabel,ItemsPerPageControl:()=>ItemsPerPageControl,PaginationItemLabel:()=>PaginationItemLabel,PaginationRangeLabelType:()=>PaginationRangeLabelType,PaginationType:()=>PaginationType,SetCurrentPage:()=>SetCurrentPage,SetCurrentPageToInvalidValue:()=>SetCurrentPageToInvalidValue,SetSelectedItemsPerPage:()=>SetSelectedItemsPerPage,SetSelectedItemsPerPageToInvalidValue:()=>SetSelectedItemsPerPageToInvalidValue,SetToFirstPageWhenItemsPerPageChanges:()=>SetToFirstPageWhenItemsPerPageChanges,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_pagination_bar_stories});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const ic_pagination_bar_stories={title:"Web Components/Pagination Bar",component:"ic-pagination-bar",parameters:{componentAPI:{data:'# ic-pagination-bar\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                           | Attribute                                | Description                                                                                                           | Type                                   | Default     |\n| ---------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |\n| `alignment`                        | `alignment`                              | Sets the alignment of the items in the pagination bar.                                                                | `"left" \\| "right" \\| "space-between"` | `"right"`   |\n| `appearance`                       | `appearance`                             | Sets the styling for the items in the pagination bar.                                                                 | `"dark" \\| "default" \\| "light"`       | `"default"` |\n| `currentPage`                      | `current-page`                           | The current page number to be displayed on the pagination bar.                                                        | `number`                               | `1`         |\n| `hideAllFromItemsPerPage`          | `hide-all-from-items-per-page`           | If `true`, the \'All\' option will be hidden from the \'items per page\' select input.                                    | `boolean`                              | `false`     |\n| `hideRangeLabel`                   | `hide-range-label`                       | If `true`, the number of total items and current item range or number of total pages and current page will be hidden. | `boolean`                              | `false`     |\n| `itemLabel`                        | `item-label`                             | The text which will be used in place of \'Item\' on the pagination bar.                                                 | `string`                               | `"Item"`    |\n| `itemsPerPageOptions`              | --                                       | The options which will be displayed for \'items per page\' select input.                                                | `{ label: string; value: string; }[]`  | `undefined` |\n| `pageLabel`                        | `page-label`                             | The text which will be used in place of \'Page\' on the pagination bar.                                                 | `string`                               | `"Page"`    |\n| `rangeLabelType`                   | `range-label-type`                       | Whether total number of items and current item range or total number of pages and current page is displayed.          | `"data" \\| "page"`                     | `"page"`    |\n| `selectedItemsPerPage`             | `selected-items-per-page`                | The items per page option to be selected.                                                                             | `number`                               | `undefined` |\n| `setToFirstPageOnPaginationChange` | `set-to-first-page-on-pagination-change` | If `true`, the pagination bar is set to the first page when the \'items per page\' changes                              | `boolean`                              | `false`     |\n| `showGoToPageControl`              | `show-go-to-page-control`                | If `true`, the \'go to page\' control should be displayed.                                                              | `boolean`                              | `false`     |\n| `showItemsPerPageControl`          | `show-items-per-page-control`            | If `true`, the select input to control \'items per page\' should be displayed.                                          | `boolean`                              | `false`     |\n| `totalItems` _(required)_          | `total-items`                            | Total number of items to be displayed across all pages.                                                               | `number`                               | `undefined` |\n| `type`                             | `type`                                   | Whether the displayed pagination is simple or complex.                                                                | `"complex" \\| "simple"`                | `"simple"`  |\n\n\n## Events\n\n| Event                  | Description                                                                                                                                                                                                                                       | Type                                   |\n| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |\n| `icItemsPerPageChange` | Emitted when the items per page option is changed.                                                                                                                                                                                                | `CustomEvent<{ value: number; }>`      |\n| `icPageChange`         | Emitted when a page is navigated to via the \'go to\' input. The `detail` property contains `value` (i.e. the page number) and a `fromItemsPerPage` flag to indicate if the event was triggered by the `icItemsPerPageChange` event also occurring. | `CustomEvent<IcPageChangeEventDetail>` |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-data-table](../ic-data-table)\n\n### Depends on\n\n- ic-typography\n- ic-select\n- ic-pagination\n- ic-tooltip\n- ic-text-field\n- ic-button\n\n### Graph\n```mermaid\ngraph TD;\n  ic-pagination-bar --\x3e ic-typography\n  ic-pagination-bar --\x3e ic-select\n  ic-pagination-bar --\x3e ic-pagination\n  ic-pagination-bar --\x3e ic-tooltip\n  ic-pagination-bar --\x3e ic-text-field\n  ic-pagination-bar --\x3e ic-button\n  ic-select --\x3e ic-input-container\n  ic-select --\x3e ic-input-label\n  ic-select --\x3e ic-input-component-container\n  ic-select --\x3e ic-typography\n  ic-select --\x3e ic-button\n  ic-select --\x3e ic-menu\n  ic-select --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-menu --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-typography\n  ic-menu --\x3e ic-button\n  ic-input-validation --\x3e ic-typography\n  ic-pagination --\x3e ic-button\n  ic-pagination --\x3e ic-pagination-item\n  ic-pagination-item --\x3e ic-typography\n  ic-text-field --\x3e ic-input-container\n  ic-text-field --\x3e ic-input-label\n  ic-text-field --\x3e ic-input-component-container\n  ic-text-field --\x3e ic-input-validation\n  ic-text-field --\x3e ic-typography\n  ic-data-table --\x3e ic-pagination-bar\n  style ic-pagination-bar fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}},Basic={render:()=>lit_html.qy`<div style="height: 120px;">
      <ic-pagination-bar total-items="100"></ic-pagination-bar>
    </div>`,name:"Basic"},ItemsPerPageControl={render:()=>lit_html.qy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
      ></ic-pagination-bar>
    </div>`,name:"Items per page control"},GoToPageControl={render:()=>lit_html.qy`<div style="height: 120px;">
      <ic-pagination-bar
        total-items="100"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`,name:"Go to page control"},PaginationRangeLabelType={render:()=>lit_html.qy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        range-label-type="data"
      ></ic-pagination-bar>
    </div>`,name:"Pagination range label type"},PaginationItemLabel={render:()=>lit_html.qy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        range-label-type="data"
        item-label="Image"
      ></ic-pagination-bar>
    </div>`,name:"Pagination item label"},PaginationType={render:()=>lit_html.qy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        type="complex"
      ></ic-pagination-bar>
    </div>`,name:"Pagination type"},AlignmentLeft={render:()=>lit_html.qy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        alignment="left"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`,name:"Alignment left"},AlignmentSpaceBetween={render:()=>lit_html.qy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        alignment="space-between"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`,name:"Alignment space between"},Appearance={render:()=>lit_html.qy`<div
      style="display: flex; flex-direction: column; gap: 8px; height: 220px"
    >
      <div style="background-color: var(--ic-architectural-black)">
        <ic-pagination-bar
          total-items="100"
          appearance="light"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
      <div style="background-color: var(--ic-status-info-contrast)">
        <ic-pagination-bar
          total-items="100"
          appearance="dark"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
    </div>`,name:"Appearance"},HideRangeLabel={render:()=>lit_html.qy`<div style="height:150px">
      <div style="background-color: var(--ic-architectural-100)">
        <ic-pagination-bar
          total-items="100"
          appearance="dark"
          hide-range-label="true"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
    </div>`,name:"Hide range label"},HideAllFromItemsPerPage={render:()=>lit_html.qy`<div style="height:150px">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        hide-all-from-items-per-page="true"
      ></ic-pagination-bar>
    </div>`,name:"Hide all from items per page"},SetToFirstPageWhenItemsPerPageChanges={render:()=>lit_html.qy`<div style="height:150px">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        hide-all-from-items-per-page="true"
        set-to-first-page-on-pagination-change="true"
      ></ic-pagination-bar>
    </div>`,name:"Set to first page when items per page changes"},SetSelectedItemsPerPage={render:()=>lit_html.qy`<div style="height:150px">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        selected-items-per-page="25"
      ></ic-pagination-bar>
    </div>`,name:"Set the selected items per page"},SetSelectedItemsPerPageToInvalidValue={render:()=>lit_html.qy`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="99"
    ></ic-pagination-bar>
  </div>`,name:"Set the selected items per page to an invalid value"},SetCurrentPage={render:()=>lit_html.qy`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="3"
    ></ic-pagination-bar>
  </div>`,name:"Set the current page"},SetCurrentPageToInvalidValue={render:()=>lit_html.qy`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="-1"
    ></ic-pagination-bar>
  </div>`,name:"Set the current page to an invalid value"},__namedExportsOrder=["Basic","ItemsPerPageControl","GoToPageControl","PaginationRangeLabelType","PaginationItemLabel","PaginationType","AlignmentLeft","AlignmentSpaceBetween","Appearance","HideRangeLabel","HideAllFromItemsPerPage","SetToFirstPageWhenItemsPerPageChanges","SetSelectedItemsPerPage","SetSelectedItemsPerPageToInvalidValue","SetCurrentPage","SetCurrentPageToInvalidValue"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 120px;">\n      <ic-pagination-bar total-items="100"></ic-pagination-bar>\n    </div>`,\n  name: "Basic"\n}',...Basic.parameters?.docs?.source},description:{story:"Use the pagination bar when large amounts of content are split across multiple pages and various pagination options are required.\n\nThere is one required attribute for the pagination bar:\n- total-items: `number`\n\nClick the 'Component API' tab to view all the available attributes, events and slots for pagination bar.\n\nTo use the pagination bar component, import `@ukic/canary-web-components` into your application.",...Basic.parameters?.docs?.description}}},ItemsPerPageControl.parameters={...ItemsPerPageControl.parameters,docs:{...ItemsPerPageControl.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n      ></ic-pagination-bar>\n    </div>`,\n  name: "Items per page control"\n}',...ItemsPerPageControl.parameters?.docs?.source},description:{story:"Pagination bar will display the number of pages out of the total number of pages as well as the `simple` pagination type.\n\nBy default, the items per page is set to 10. If the total items is greater than 100, the default items per page is set to 25.\n\nTo display the items per page control, set the `show-items-per-page-control` attribute to `true`.\n\nThe items per page control will display a dropdown with options to select the number of items to display per page. Customize the options by setting the `itemsPerPageOptions` property.\n`itemsPerPageOptions` is an array of objects with `label` and `value` properties. If more than three options are provided, the dropdown will display the first three options and an 'All' option.",...ItemsPerPageControl.parameters?.docs?.description}}},GoToPageControl.parameters={...GoToPageControl.parameters,docs:{...GoToPageControl.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 120px;">\n      <ic-pagination-bar\n        total-items="100"\n        show-go-to-page-control="true"\n      ></ic-pagination-bar>\n    </div>`,\n  name: "Go to page control"\n}',...GoToPageControl.parameters?.docs?.source},description:{story:"To display the go to page control, set the `show-go-to-page-control` attribute to `true`. 'Go to page' allows the user to jump to a specific page. If the page number is invalid, the input will be styled in the `ic-status-error` colour with a tooltip detailing the error.",...GoToPageControl.parameters?.docs?.description}}},PaginationRangeLabelType.parameters={...PaginationRangeLabelType.parameters,docs:{...PaginationRangeLabelType.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n        show-go-to-page-control="true"\n        range-label-type="data"\n      ></ic-pagination-bar>\n    </div>`,\n  name: "Pagination range label type"\n}',...PaginationRangeLabelType.parameters?.docs?.source},description:{story:"The pagination range label type can be set to two types:\n- `simple`: \\[default]: Display the total number of pages and the current page number.\n- `data`: Displays the total number of items and the items range.\n\nThe example below uses the `data` pagination range label type. The range is updated when the page is changed.",...PaginationRangeLabelType.parameters?.docs?.description}}},PaginationItemLabel.parameters={...PaginationItemLabel.parameters,docs:{...PaginationItemLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n        show-go-to-page-control="true"\n        range-label-type="data"\n        item-label="Image"\n      ></ic-pagination-bar>\n    </div>`,\n  name: "Pagination item label"\n}',...PaginationItemLabel.parameters?.docs?.source},description:{story:"'Item' can be changed to a custom label by setting the `item-label` attribute. Any occurrences of 'Item' in the pagination bar will be replaced with the custom label.",...PaginationItemLabel.parameters?.docs?.description}}},PaginationType.parameters={...PaginationType.parameters,docs:{...PaginationType.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n        type="complex"\n      ></ic-pagination-bar>\n    </div>`,\n  name: "Pagination type"\n}',...PaginationType.parameters?.docs?.source},description:{story:"The pagination type can be set to two types:\n- `simple`: \\[default]: Display the current page as a label with back and next buttons.\n- `complex`: Displays all the page numbers as buttons with back and next buttons.\n\nThe `complex` pagination type is useful when there are many pages to navigate through.",...PaginationType.parameters?.docs?.description}}},AlignmentLeft.parameters={...AlignmentLeft.parameters,docs:{...AlignmentLeft.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        alignment="left"\n        show-items-per-page-control="true"\n        show-go-to-page-control="true"\n      ></ic-pagination-bar>\n    </div>`,\n  name: "Alignment left"\n}',...AlignmentLeft.parameters?.docs?.source},description:{story:"The pagination elements can be aligned to the `right` (default), `left` or `space-between`.",...AlignmentLeft.parameters?.docs?.description}}},AlignmentSpaceBetween.parameters={...AlignmentSpaceBetween.parameters,docs:{...AlignmentSpaceBetween.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        alignment="space-between"\n        show-items-per-page-control="true"\n        show-go-to-page-control="true"\n      ></ic-pagination-bar>\n    </div>`,\n  name: "Alignment space between"\n}',...AlignmentSpaceBetween.parameters?.docs?.source}}},Appearance.parameters={...Appearance.parameters,docs:{...Appearance.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div\n      style="display: flex; flex-direction: column; gap: 8px; height: 220px"\n    >\n      <div style="background-color: var(--ic-architectural-black)">\n        <ic-pagination-bar\n          total-items="100"\n          appearance="light"\n          show-items-per-page-control="true"\n          show-go-to-page-control="true"\n        ></ic-pagination-bar>\n      </div>\n      <div style="background-color: var(--ic-status-info-contrast)">\n        <ic-pagination-bar\n          total-items="100"\n          appearance="dark"\n          show-items-per-page-control="true"\n          show-go-to-page-control="true"\n        ></ic-pagination-bar>\n      </div>\n    </div>`,\n  name: "Appearance"\n}',...Appearance.parameters?.docs?.source},description:{story:"The background colour of the pagination bar can be customized by adding a background colour to the parent element. The `appearance` attribute can be set to `light` or `dark` to change the appearance of the pagination bar labels.",...Appearance.parameters?.docs?.description}}},HideRangeLabel.parameters={...HideRangeLabel.parameters,docs:{...HideRangeLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n      <div style="background-color: var(--ic-architectural-100)">\n        <ic-pagination-bar\n          total-items="100"\n          appearance="dark"\n          hide-range-label="true"\n          show-items-per-page-control="true"\n          show-go-to-page-control="true"\n        ></ic-pagination-bar>\n      </div>\n    </div>`,\n  name: "Hide range label"\n}',...HideRangeLabel.parameters?.docs?.source},description:{story:"If the pagination bar becomes cluttered due to the number of pagination elements displayed, the range label can be hidden by setting the `hide-range-label` attribute to `true`.",...HideRangeLabel.parameters?.docs?.description}}},HideAllFromItemsPerPage.parameters={...HideAllFromItemsPerPage.parameters,docs:{...HideAllFromItemsPerPage.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n        show-go-to-page-control="true"\n        hide-all-from-items-per-page="true"\n      ></ic-pagination-bar>\n    </div>`,\n  name: "Hide all from items per page"\n}',...HideAllFromItemsPerPage.parameters?.docs?.source},description:{story:"If you have a predefined list of items you want in the itemsPerPage select, the 'All' option can be hidden by setting `hide-all-from-items-per-page` to `true`.",...HideAllFromItemsPerPage.parameters?.docs?.description}}},SetToFirstPageWhenItemsPerPageChanges.parameters={...SetToFirstPageWhenItemsPerPageChanges.parameters,docs:{...SetToFirstPageWhenItemsPerPageChanges.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n        show-go-to-page-control="true"\n        hide-all-from-items-per-page="true"\n        set-to-first-page-on-pagination-change="true"\n      ></ic-pagination-bar>\n    </div>`,\n  name: "Set to first page when items per page changes"\n}',...SetToFirstPageWhenItemsPerPageChanges.parameters?.docs?.source}}},SetSelectedItemsPerPage.parameters={...SetSelectedItemsPerPage.parameters,docs:{...SetSelectedItemsPerPage.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n        show-go-to-page-control="true"\n        selected-items-per-page="25"\n      ></ic-pagination-bar>\n    </div>`,\n  name: "Set the selected items per page"\n}',...SetSelectedItemsPerPage.parameters?.docs?.source},description:{story:"The `selected-items-per-page` prop can be used to programmatically set the items per page dropdown option.",...SetSelectedItemsPerPage.parameters?.docs?.description}}},SetSelectedItemsPerPageToInvalidValue.parameters={...SetSelectedItemsPerPageToInvalidValue.parameters,docs:{...SetSelectedItemsPerPageToInvalidValue.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n      selected-items-per-page="99"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Set the selected items per page to an invalid value"\n}',...SetSelectedItemsPerPageToInvalidValue.parameters?.docs?.source},description:{story:"The `selected-items-per-page` prop can be used to programmatically set the selected items per page dropdown option. If provided, this prop must match one of the items per page dropdown options, otherwise an error appears on the console and the prop is ignored.",...SetSelectedItemsPerPageToInvalidValue.parameters?.docs?.description}}},SetCurrentPage.parameters={...SetCurrentPage.parameters,docs:{...SetCurrentPage.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n      current-page="3"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Set the current page"\n}',...SetCurrentPage.parameters?.docs?.source},description:{story:"The `current-page` prop can be used to programmatically set the current page.",...SetCurrentPage.parameters?.docs?.description}}},SetCurrentPageToInvalidValue.parameters={...SetCurrentPageToInvalidValue.parameters,docs:{...SetCurrentPageToInvalidValue.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n      current-page="-1"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Set the current page to an invalid value"\n}',...SetCurrentPageToInvalidValue.parameters?.docs?.source},description:{story:"The `current-page` prop can be used to programmatically set the current page. If provided, this prop must be greater than 0 and less than or equal to the total number of pages, otherwise an error appears on the console and the prop is ignored.",...SetCurrentPageToInvalidValue.parameters?.docs?.description}}}}}]);
//# sourceMappingURL=components-ic-pagination-bar-ic-pagination-bar-stories.3cff1634.iframe.bundle.js.map