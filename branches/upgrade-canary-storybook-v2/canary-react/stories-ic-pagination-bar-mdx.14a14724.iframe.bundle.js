(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[102],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/ic-pagination-bar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent,defaultArgs:()=>defaultArgs});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_canary_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components.ts"),_ukic_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../react/dist/components.js"),_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("../canary-web-components/src/components/ic-pagination-bar/readme.md"),__webpack_require__("storybook/internal/preview-api"),__webpack_require__("./src/stories/ic-pagination-bar.stories.js"));const defaultArgs={alignment:"right",appearance:"default",currentPage:1,hideAllFromItemsPerPage:!1,hideRangeLabel:!1,itemLabel:"Item",itemsPerPageOptions:[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"}],pageLabel:"Page",rangeLabelType:"page",selectedItemsPerPage:"10",setToFirstPageOnPaginationChange:!1,showItemsPerPageControl:!0,showGoToPageControl:!0,totalItems:100,type:"simple"};function _createMdxContent(props){const _components={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_canary_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"canary-pagination-bar",children:"[Canary]: Pagination Bar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use the pagination bar when large amounts of content are split across multiple pages and various pagination options are required."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"There is one required prop for the pagination bar:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["totalItems: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"number"})]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Click the 'Component API' tab to view all the available props, events and slots for pagination bar."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To use the pagination bar component, import ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@ukic/canary-react"})," into your application."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["A basic example using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"totalItems"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.Basic})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"basic-code-example",children:"Basic code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import * as React from \"react\";\nimport { IcPaginationBar } from '@ukic/canary-react';\n\nconst PaginationBar = () => (\n  <IcPaginationBar totalItems={100} />\n);\n\nexport default PaginationBar;\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Pagination bar will display the number of pages out of the total number of pages as well as the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"simple"})," pagination type."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"By default, the items per page is set to 10. If the total items is greater than 100, the default items per page is set to 25."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"items-per-page-control",children:"Items per page control"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To display the items per page control, set the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"showItemsPerPageControl"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.ItemsPerPageControl})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"items-per-page-control-code-example",children:"Items per page control code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import * as React from \"react\";\nimport { IcPaginationBar } from '@ukic/canary-react';\n\nconst PaginationBar = () => (\n  <IcPaginationBar totalItems={100} showItemsPerPageControl />\n);\n\nexport default PaginationBar;\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The items per page control will display a dropdown with options to select the number of items to display per page. Customize the options by setting the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"itemsPerPageOptions"})," property.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"itemsPerPageOptions"})," is an array of objects with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"label"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"value"})," properties. If more than three options are provided, the dropdown will display the first three options and an 'All' option."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"items-per-page-options-code-example",children:"Items per page options code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n  <IcPaginationBar\n    totalItems={100}\n    showItemsPerPageControl\n    itemsPerPageOptions={[\n      { label: "50", value: "50" },\n      { label: "100", value: "100" },\n      { label: "250", value: "250" },\n    ]}\n  />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"go-to-page-control",children:"Go to page control"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To display the go to page control, set ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"showGoToPageControl"}),". 'Go to page' allows the user to jump to a specific page. If the page number is invalid, the input will be styled in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ic-status-error"})," colour with a tooltip detailing the error."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.GoToPageControl})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"go-to-page-control-code-example",children:"Go to page control code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import * as React from \"react\";\nimport { IcPaginationBar } from '@ukic/canary-react';\n\nconst PaginationBar = () => (\n  <IcPaginationBar totalItems={100} showGoToPageControl />\n);\n\nexport default PaginationBar;\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"pagination-range-label-type",children:"Pagination range label type"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The pagination range label type can be set to two types:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"simple"}),": [default]: Display the total number of pages and the current page number."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data"}),": Displays the total number of items and the items range."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The example below uses the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data"})," pagination range label type. The range is updated when the page is changed."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.PaginationRangeLabelType})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"pagination-range-label-type-code-example",children:"Pagination range label type code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n  <IcPaginationBar\n    totalItems={100}\n    showItemsPerPageControl\n    showGoToPageControl\n    rangeLabelType="data"\n  />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"pagination-item-label",children:"Pagination item label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["'Item' can be changed to a custom label by setting the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"itemLabel"})," prop. Any occurrences of 'Item' in the pagination bar will be replaced with the custom label."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.PaginationItemLabel})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"pagination-range-item-label-code-example",children:"Pagination range item label code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n  <IcPaginationBar\n    totalItems={100}\n    showItemsPerPageControl\n    showGoToPageControl\n    rangeLabelType="data"\n    itemLabel="Image"\n  />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"pagination-type",children:"Pagination type"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The pagination type can be set to two types:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"simple"}),": [default]: Display the current page as a label with back and next buttons."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"complex"}),": Displays all the page numbers as buttons with back and next buttons."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"complex"})," pagination type is useful when there are many pages to navigate through."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.PaginationType})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"pagination-type-code-example",children:"Pagination type code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n  <IcPaginationBar\n    totalItems={100}\n    showItemsPerPageControl\n    type="complex"\n  />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"alignment",children:"Alignment"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The pagination elements can be aligned to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"right"})," (default), ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"left"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"space-between"}),". The default alignment is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"right"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"alignment-left",children:"Alignment left"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.AlignmentLeft})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"alignment-left-between-code-example",children:"Alignment left between code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n  <IcPaginationBar\n    totalItems={100}\n    alignment="left"\n    showItemsPerPageControl\n    showGoToPageControl\n  />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"alignment-space-between",children:"Alignment space between"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.AlignmentSpaceBetween})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"alignment-space-between-code-example",children:"Alignment space between code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n  <IcPaginationBar\n    totalItems={100}\n    alignment="space-between"\n    showItemsPerPageControl\n    showGoToPageControl\n  />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"appearance",children:"Appearance"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The background colour of the pagination bar can be customized by adding a background colour to the parent element. The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"appearance"})," prop can be set to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"light"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"dark"})," to change the appearance of the pagination bar labels."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.Appearance})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"appearance-code-example",children:"Appearance code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n  <div style={{\n    display: \'flex\',\n    flexDirection: \'column\',\n    gap: \'8px\'\n  }}>\n    <div style={{ backgroundColor: "var(--ic-architectural-black)" }}>\n      <IcPaginationBar\n        totalItems={100}\n        appearance="light"\n        showItemsPerPageControl\n        showGoToPageControl\n      />\n    </div>\n    <div style={{ backgroundColor: "var(--ic-status-info-contrast)" }}>\n      <IcPaginationBar\n        totalItems={100}\n        appearance="dark"\n        showItemsPerPageControl\n        showGoToPageControl\n      />\n    </div>\n  </div>\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"hide-range-label",children:"Hide range label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If the pagination bar becomes cluttered due to the number of pagination elements displayed, the range label can be hidden by setting the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"hideRangeLabel"})," prop to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.HideRangeLabel})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"hide-range-label-code-example",children:"Hide range label code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import * as React from \"react\";\nimport { IcPaginationBar } from '@ukic/canary-react';\n\nconst PaginationBar = () => (\n  <div style={{\n    backgroundColor: 'var(--ic-architectural-100)'\n  }}>\n    <IcPaginationBar\n      totalItems={100}\n      appearance=\"dark\"\n      hideRangeLabel\n      showItemsPerPageControl\n      showGoToPageControl\n    />\n  </div>\n);\n\nexport default PaginationBar;\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"hide-all-from-items-per-page",children:"Hide 'All' from items per page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you have a predefined list of items you want in the itemsPerPage select, the 'All' option can be hidden by setting ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"hide-all-from-items-per-page"})," to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.HideAllFromItemsPerPage})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"hide-all-from-items-per-page-code-example",children:"Hide 'All' from items per page code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n    <IcPaginationBar\n      totalItems="100"\n      showItemsPerPageControl\n      showGoToPageControl\n      hideAllFromItemsPerPage\n    />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"set-to-first-page-when-items-per-page-changes",children:"Set to first page when items per page changes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you have a predefined list of items you want in the itemsPerPage select, the 'All' option can be hidden by setting ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"hide-all-from-items-per-page"})," to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.SetToFirstPageWhenItemsPerPageChanges})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"set-to-first-page-when-items-per-page-changes-code-example",children:"Set to first page when items per page changes code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n    <IcPaginationBar\n      totalItems="100"\n      showItemsPerPageControl\n      showGoToPageControl\n      setToFirstPageOnPaginationChange\n    />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"set-the-selected-items-per-page",children:"Set the selected items per page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"selectedItemsPerPage"})," prop can be used to programmatically set the items per page dropdown option."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{name:"Set the selected items per page",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:"150px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.aJ,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,selectedItemsPerPage:"25"})})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"set-the-selected-items-per-page-code-example",children:"Set the selected items per page code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n    <IcPaginationBar\n      totalItems="100"\n      showItemsPerPageControl\n      showGoToPageControl\n      selectedItemsPerPage="25"\n    />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"set-the-selected-items-per-page-to-an-invalid-value",children:"Set the selected items per page to an invalid value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"selectedItemsPerPage"})," prop can be used to programmatically set the selected items per page dropdown option. If provided, this prop must match one of the items per page dropdown options, otherwise an error appears on the console and the prop is ignored."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{name:"Set the selected items per page to an invalid value",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:"150px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.aJ,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,selectedItemsPerPage:"99"})})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"set-the-selected-items-per-page-to-an-invalid-value-code-example",children:"Set the selected items per page to an invalid value code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n    <IcPaginationBar\n      totalItems="100"\n      showItemsPerPageControl\n      showGoToPageControl\n      selectedItemsPerPage="99"\n    />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"set-the-current-page",children:"Set the current page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"currentPage"})," prop can be used to programmatically set the current page."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{name:"Set the current page",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:"150px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.aJ,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,currentPage:"3"})})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"set-the-current-page-code-example",children:"Set the current page code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n    <IcPaginationBar\n      totalItems="100"\n      showItemsPerPageControl\n      showGoToPageControl\n      currentPage="3"\n    />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"set-the-current-page-to-an-invalid-value",children:"Set the current page to an invalid value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"currentPage"})," prop can be used to programmatically set the current page. If provided, this prop must be greater than 0 and less than or equal to the total number of pages, otherwise an error appears on the console and the prop is ignored."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{name:"Set the current page to an invalid value",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:"150px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.aJ,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,currentPage:"-1"})})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"set-the-current-page-to-an-invalid-value-code-example",children:"Set the current page to an invalid value code example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcPaginationBar } from \'@ukic/canary-react\';\n\nconst PaginationBar = () => (\n    <IcPaginationBar\n      totalItems="100"\n      showItemsPerPageControl\n      showGoToPageControl\n      currentPage="-1"\n    />\n);\n\nexport default PaginationBar;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Go to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ukic_react__WEBPACK_IMPORTED_MODULE_8__.D9,{href:"/?path=/story/react-components-pagination-bar--playground",children:"separate page for the playground example"})," to view the prop controls."]}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_6__.Playground})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_canary_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);