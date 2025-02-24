(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6671],{"./src/components/ic-page-header/ic-page-header.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent,defaultArgs:()=>defaultArgs});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-page-header\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property            | Attribute             | Description                                                                                                                                       | Type                                 | Default     |\n| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |\n| `aligned`           | `aligned`             | The alignment of the page header.                                                                                                                 | `"center" \\| "full-width" \\| "left"` | `"left"`    |\n| `border`            | `border`              | If `true`, a border will be displayed along the bottom of the page header.                                                                        | `boolean`                            | `true`      |\n| `heading`           | `heading`             | The title to render on the page header.                                                                                                           | `string`                             | `undefined` |\n| `reverseOrder`      | `reverse-order`       | If `true`, the reading pattern and tab order will change in the action area for viewport widths of above 576px and when actions have not wrapped. | `boolean`                            | `false`     |\n| `size`              | `size`                | The size of the page header component.                                                                                                            | `"medium" \\| "small"`                | `"medium"`  |\n| `sticky`            | `sticky`              | If `true`, the page header will be sticky at all breakpoints.                                                                                     | `boolean`                            | `false`     |\n| `stickyDesktopOnly` | `sticky-desktop-only` | If `true`, the page header will only be sticky for viewport widths of 992px and above.                                                            | `boolean`                            | `false`     |\n| `subheading`        | `subheading`          | The subtitle to render on the page header.                                                                                                        | `string`                             | `undefined` |\n| `theme`             | `theme`               | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.           | `"dark" \\| "inherit" \\| "light"`     | `"inherit"` |\n\n\n## Slots\n\n| Slot                  | Description                                                                                                                                                |\n| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `"actions"`           | Content will be rendered in the action area, adjacent to the title area.                                                                                   |\n| `"breadcrumbs"`       | Content will be rendered in the breadcrumb area, above the title and action areas.                                                                         |\n| `"heading"`           | Content will be rendered in the title area, in place of the heading.                                                                                       |\n| `"heading-adornment"` | Content will be rendered in the title area, adjacent to the heading.                                                                                       |\n| `"input"`             | Content will be rendered in the input area, below the title area and adjacent to the action area.                                                          |\n| `"stepper"`           | Content will be rendered in the navigation area, below the title and action areas. Note: stepper slot cannot be used when the tabs slot is being used.     |\n| `"subheading"`        | Content will be rendered in the title area, in place of the subheading.                                                                                    |\n| `"tabs"`              | Content will be rendered in the navigation area, below the title and action areas. Note: the stepper slot cannot be used when the tabs slot is being used. |\n\n\n## CSS Custom Properties\n\n| Name                       | Description            |\n| -------------------------- | ---------------------- |\n| `--ic-z-index-page-header` | z-index of page-header |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-section-container](../ic-section-container)\n- [ic-typography](../ic-typography)\n- [ic-horizontal-scroll](../ic-horizontal-scroll)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-page-header --\x3e ic-section-container\n  ic-page-header --\x3e ic-typography\n  ic-page-header --\x3e ic-horizontal-scroll\n  ic-horizontal-scroll --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-page-header fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_page_header_stories=__webpack_require__("./src/components/ic-page-header/ic-page-header.stories.js");const defaultArgs={aligned:"left",border:!0,heading:"Latte recipe","reverse-order":!1,size:"medium",sticky:!1,"sticky-desktop-only":!1,subheading:"A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam.",theme:"inherit","--ic-page-header-text-primary":"","--ic-page-header-background":"","--ic-page-header-border":"","--ic-page-header-text-tertiary":"","--ic-page-header-placeholder-text-field":""};function _createMdxContent(props){const _components={h3:"h3",li:"li",p:"p",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_page_header_stories}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.Playground})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"heading-with-adornment",children:"Heading with adornment"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.HeadingWithAdornment})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-aligned",children:"Left aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.LeftAligned})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.Small})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"without-border",children:"Without border"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.WithoutBorder})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"center-aligned",children:"Center aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.CenterAligned})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.FullWidth})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sticky",children:"Sticky"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.Sticky})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sticky-with-content-and-footer",children:"Sticky with content and footer"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.StickyWithContentAndFooter})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sticky-for-large-and-extra-large-breakpoints-only",children:"Sticky for large and extra-large breakpoints only"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.StickyForLargeAndExtraLargeBreakpointsOnly})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-breadcrumbs",children:"With breadcrumbs"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.WithBreadcrumbs})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-actions",children:"With actions"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.WithActions})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-input",children:"With input"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.WithInput})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-stepper",children:"With stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.WithStepper})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-tabs",children:"With tabs"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.WithTabs})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-breadcrumbs-input-actions-and-tabs",children:"With breadcrumbs, input, actions and tabs"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.WithBreadcrumbsInputActionsAndTabs})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-breadcrumbs-input-actions-and-stepper",children:"With breadcrumbs, input, actions and stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.WithBreadcrumbsInputActionsAndStepper})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"component-overrides",children:"Component overrides"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If a slot is provided, instead an attribute, the slot will supersede for the following:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"heading"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"subheading"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.ComponentOverrides})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-breadcrumbs-input-actions-and-stepper-and-long-title",children:"With breadcrumbs, input, actions and stepper and long title"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.WithBreadcrumbsInputActionsAndStepperAndLongTitle})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dark-theme",children:"Dark theme"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_page_header_stories.DarkTheme})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);