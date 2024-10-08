/*! For license information please see components-ic-page-header-ic-page-header-stories-mdx.2578dac5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4307],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-page-header/ic-page-header.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,centerAligned:()=>centerAligned,componentOverrides:()=>componentOverrides,default:()=>ic_page_header_stories,deprecatedSmall:()=>deprecatedSmall,fullWidth:()=>fullWidth,headingWithAdornment:()=>headingWithAdornment,leftAligned:()=>leftAligned,small:()=>small,sticky:()=>sticky,stickyForLargeAndExtraLargeBreakpointsOnly:()=>stickyForLargeAndExtraLargeBreakpointsOnly,stickyWithContentAndFooter:()=>stickyWithContentAndFooter,withActions:()=>withActions,withBreadcrumbs:()=>withBreadcrumbs,withBreadcrumbsInputActionsAndStepper:()=>withBreadcrumbsInputActionsAndStepper,withBreadcrumbsInputActionsAndStepperAndLongTitle:()=>withBreadcrumbsInputActionsAndStepperAndLongTitle,withBreadcrumbsInputActionsAndTabs:()=>withBreadcrumbsInputActionsAndTabs,withInput:()=>withInput,withStepper:()=>withStepper,withTabs:()=>withTabs,withoutBorder:()=>withoutBorder});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-page-header\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property            | Attribute             | Description                                                                                                                                       | Type                                 | Default     |\n| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |\n| `aligned`           | `aligned`             | The alignment of the page header.                                                                                                                 | `"center" \\| "full-width" \\| "left"` | `"left"`    |\n| `border`            | `border`              | If `true`, a border will be displayed along the bottom of the page header.                                                                        | `boolean`                            | `true`      |\n| `heading`           | `heading`             | The title to render on the page header.                                                                                                           | `string`                             | `undefined` |\n| `reverseOrder`      | `reverse-order`       | If `true`, the reading pattern and tab order will change in the action area for viewport widths of above 576px and when actions have not wrapped. | `boolean`                            | `false`     |\n| `size`              | `size`                | The size of the page header component.                                                                                                            | `"default" \\| "small"`               | `"default"` |\n| `small`             | `small`               | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/>               | `boolean`                            | `false`     |\n| `sticky`            | `sticky`              | If `true`, the page header will be sticky at all breakpoints.                                                                                     | `boolean`                            | `false`     |\n| `stickyDesktopOnly` | `sticky-desktop-only` | If `true`, the page header will only be sticky for viewport widths of 992px and above.                                                            | `boolean`                            | `false`     |\n| `subheading`        | `subheading`          | The subtitle to render on the page header.                                                                                                        | `string`                             | `undefined` |\n\n\n## Slots\n\n| Slot                  | Description                                                                                                                                                |\n| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `"actions"`           | Content will be rendered in the action area, adjacent to the title area.                                                                                   |\n| `"breadcrumbs"`       | Content will be rendered in the breadcrumb area, above the title and action areas.                                                                         |\n| `"heading"`           | Content will be rendered in the title area, in place of the heading.                                                                                       |\n| `"heading-adornment"` | Content will be rendered in the title area, adjacent to the heading.                                                                                       |\n| `"input"`             | Content will be rendered in the input area, below the title area and adjacent to the action area.                                                          |\n| `"stepper"`           | Content will be rendered in the navigation area, below the title and action areas. Note: stepper slot cannot be used when the tabs slot is being used.     |\n| `"subheading"`        | Content will be rendered in the title area, in place of the subheading.                                                                                    |\n| `"tabs"`              | Content will be rendered in the navigation area, below the title and action areas. Note: the stepper slot cannot be used when the tabs slot is being used. |\n\n\n## CSS Custom Properties\n\n| Name                       | Description            |\n| -------------------------- | ---------------------- |\n| `--ic-z-index-page-header` | z-index of page-header |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-section-container](../ic-section-container)\n- [ic-typography](../ic-typography)\n- [ic-horizontal-scroll](../ic-horizontal-scroll)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-page-header --\x3e ic-section-container\n  ic-page-header --\x3e ic-typography\n  ic-page-header --\x3e ic-horizontal-scroll\n  ic-horizontal-scroll --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-page-header fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Page header",component:"ic-page-header",parameters:{layout:"fullscreen"}}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"heading-with-adornment",children:"Heading with adornment"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Heading with adornment",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header heading="Page header">
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-aligned",children:"Left aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Left aligned",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        aligned="left"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Small",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        aligned="left"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
        size="small"
      >
        <ic-status-tag
          slot="heading-adornment"
          label="Beta"
          size="small"
        ></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Deprecated - small",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        aligned="left"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
        small
      >
        <ic-status-tag
          slot="heading-adornment"
          label="Beta"
          size="small"
        ></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"without-border",children:"Without border"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Without border",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header heading="Page header" border="false">
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"center-aligned",children:"Center aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Center aligned",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        aligned="center"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Full width",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        aligned="full-width"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sticky",children:"Sticky"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Sticky",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        sticky
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sticky-with-content-and-footer",children:"Sticky with content and footer"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Sticky with content and footer",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-top-navigation app-title="ApplicationName">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <ic-page-header
        sticky
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
      <ic-section-container style="height:800px">
        This is an example of how the sticky variant of the page header would
        work with some content and the footer.
      </ic-section-container>
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/">Components</ic-footer-link>
        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
      </ic-footer>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sticky-for-large-and-extra-large-breakpoints-only",children:"Sticky for large and extra-large breakpoints only"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Sticky for large and extra-large breakpoints only",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-top-navigation app-title="ApplicationName">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <ic-page-header
        sticky-desktop-only
        heading="Page header"
        subheading="This is a simple page header component and this is the text. This page header is only sticky for viewport widths of 992px and above."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
      <ic-section-container style="height:800px">
        This is an example of how the sticky-desktop-only variant of the page
        header would work with some content and the footer.
      </ic-section-container>
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/">Components</ic-footer-link>
        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
      </ic-footer>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-breadcrumbs",children:"With breadcrumbs"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With breadcrumbs",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        heading="Page header"
        subheading="This is a page header component with additional functionality and this is the text."
        reverse-order
      >
        <ic-breadcrumb-group slot="breadcrumbs">
          <ic-breadcrumb
            page-title="Breadcrumb 1"
            href="/breadcrumb-1"
          ></ic-breadcrumb>
          <ic-breadcrumb
            current="true"
            page-title="Breadcrumb 2"
            href="/breadcrumb-2"
          ></ic-breadcrumb>
        </ic-breadcrumb-group>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-actions",children:"With actions"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With actions",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        heading="Page header"
        subheading="This is a page header component with additional functionality and this is the text."
        reverse-order
      >
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-input",children:"With input"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With input",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        heading="Page header"
        subheading="This is a page header component with additional functionality and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-stepper",children:"With stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With stepper",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        heading="Create a coffee"
        subheading="This is a page header component with additional functionality and this is the text."
      >
        <ic-stepper slot="stepper">
          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>
          <ic-step
            step-title="Warm milk"
            step-subtitle="Optional"
            step-type="completed"
          ></ic-step>
          <ic-step step-title="Pour milk" step-type="current" current></ic-step>
        </ic-stepper>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-tabs",children:"With tabs"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With tabs",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        heading="Coffee recipes"
        subheading="This is a page header component with additional functionality and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-navigation-item
          slot="tabs"
          label="All recipes"
          href="?path=/story/web-components-page-header--with-tabs"
          selected
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Favourites"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Three"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Four"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Five"
          href="?path=/story/web-components-page-header--with-tabs"
          target="_blank"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Six"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Seven"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Eight"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Nine"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Ten"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-breadcrumbs-input-actions-and-tabs",children:"With breadcrumbs, input, actions and tabs"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With breadcrumbs, input, actions and tabs",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        heading="Coffee recipes"
        subheading="This is a page header component that has breadcrumbs, an input area, actions & tabs."
        reverse-order
      >
        <ic-breadcrumb-group slot="breadcrumbs">
          <ic-breadcrumb
            page-title="Breadcrumb 1"
            href="/breadcrumb-1"
          ></ic-breadcrumb>
          <ic-breadcrumb
            current="true"
            page-title="Breadcrumb 2"
            href="/breadcrumb-2"
          ></ic-breadcrumb>
        </ic-breadcrumb-group>
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
        <ic-navigation-item
          slot="tabs"
          label="All recipes"
          href="?path=/story/web-components-page-header--with-tabs"
          selected
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Favourites"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-breadcrumbs-input-actions-and-stepper",children:"With breadcrumbs, input, actions and stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With breadcrumbs, input, actions and stepper",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        heading="Coffee recipes"
        subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."
        reverse-order
      >
        <ic-breadcrumb-group slot="breadcrumbs">
          <ic-breadcrumb
            page-title="Breadcrumb 1"
            href="/breadcrumb-1"
          ></ic-breadcrumb>
          <ic-breadcrumb
            current="true"
            page-title="Breadcrumb 2"
            href="/breadcrumb-2"
          ></ic-breadcrumb>
        </ic-breadcrumb-group>
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
        <ic-stepper slot="stepper">
          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>
          <ic-step
            step-title="Warm milk"
            step-subtitle="Optional"
            step-type="completed"
          ></ic-step>
          <ic-step step-title="Pour milk" step-type="current" current></ic-step>
        </ic-stepper>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"component-overrides",children:"Component overrides"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If a slot is provided, instead an attribute, the slot will supersede for the following:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"heading"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"subheading"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Component overrides",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header>
        <ic-typography slot="heading" variant="h4">
          <h2>heading</h2>
        </ic-typography>
        <ic-typography slot="subheading" variant="body">
          subheading
        </ic-typography>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-breadcrumbs-input-actions-and-stepper-and-long-title",children:"With breadcrumbs, input, actions and stepper and long title"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With breadcrumbs, input, actions and stepper and long title",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-page-header
        heading="Coffee recipes with a very very long title"
        subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."
        reverse-order
      >
        <ic-breadcrumb-group slot="breadcrumbs">
          <ic-breadcrumb
            page-title="Breadcrumb 1"
            href="/breadcrumb-1"
          ></ic-breadcrumb>
          <ic-breadcrumb
            current="true"
            page-title="Breadcrumb 2"
            href="/breadcrumb-2"
          ></ic-breadcrumb>
        </ic-breadcrumb-group>
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
        <ic-stepper slot="stepper">
          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>
          <ic-step
            step-title="Warm milk"
            step-subtitle="Optional"
            step-type="completed"
          ></ic-step>
          <ic-step step-title="Pour milk" step-type="current" current></ic-step>
        </ic-stepper>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
      </ic-page-header>
    `})})]})}const headingWithAdornment=()=>lit_html.qy`
      <ic-page-header heading="Page header">
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `;headingWithAdornment.storyName="Heading with adornment",headingWithAdornment.parameters={storySource:{source:'html`\n      <ic-page-header heading="Page header">\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const leftAligned=()=>lit_html.qy`
      <ic-page-header
        aligned="left"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `;leftAligned.storyName="Left aligned",leftAligned.parameters={storySource:{source:'html`\n      <ic-page-header\n        aligned="left"\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const small=()=>lit_html.qy`
      <ic-page-header
        aligned="left"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
        size="small"
      >
        <ic-status-tag
          slot="heading-adornment"
          label="Beta"
          size="small"
        ></ic-status-tag>
      </ic-page-header>
    `;small.storyName="Small",small.parameters={storySource:{source:'html`\n      <ic-page-header\n        aligned="left"\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n        size="small"\n      >\n        <ic-status-tag\n          slot="heading-adornment"\n          label="Beta"\n          size="small"\n        ></ic-status-tag>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const deprecatedSmall=()=>lit_html.qy`
      <ic-page-header
        aligned="left"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
        small
      >
        <ic-status-tag
          slot="heading-adornment"
          label="Beta"
          size="small"
        ></ic-status-tag>
      </ic-page-header>
    `;deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'html`\n      <ic-page-header\n        aligned="left"\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n        small\n      >\n        <ic-status-tag\n          slot="heading-adornment"\n          label="Beta"\n          size="small"\n        ></ic-status-tag>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const withoutBorder=()=>lit_html.qy`
      <ic-page-header heading="Page header" border="false">
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `;withoutBorder.storyName="Without border",withoutBorder.parameters={storySource:{source:'html`\n      <ic-page-header heading="Page header" border="false">\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const centerAligned=()=>lit_html.qy`
      <ic-page-header
        aligned="center"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `;centerAligned.storyName="Center aligned",centerAligned.parameters={storySource:{source:'html`\n      <ic-page-header\n        aligned="center"\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const fullWidth=()=>lit_html.qy`
      <ic-page-header
        aligned="full-width"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'html`\n      <ic-page-header\n        aligned="full-width"\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const sticky=()=>lit_html.qy`
      <ic-page-header
        sticky
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `;sticky.storyName="Sticky",sticky.parameters={storySource:{source:'html`\n      <ic-page-header\n        sticky\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const stickyWithContentAndFooter=()=>lit_html.qy`
      <ic-top-navigation app-title="ApplicationName">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <ic-page-header
        sticky
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
      <ic-section-container style="height:800px">
        This is an example of how the sticky variant of the page header would
        work with some content and the footer.
      </ic-section-container>
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/">Components</ic-footer-link>
        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
      </ic-footer>
    `;stickyWithContentAndFooter.storyName="Sticky with content and footer",stickyWithContentAndFooter.parameters={storySource:{source:'html`\n      <ic-top-navigation app-title="ApplicationName">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <ic-page-header\n        sticky\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n      <ic-section-container style="height:800px">\n        This is an example of how the sticky variant of the page header would\n        work with some content and the footer.\n      </ic-section-container>\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n        >\n          Logo\n        </div>\n      </ic-footer>\n    `'},loki:{skip:!0}};const stickyForLargeAndExtraLargeBreakpointsOnly=()=>lit_html.qy`
      <ic-top-navigation app-title="ApplicationName">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <ic-page-header
        sticky-desktop-only
        heading="Page header"
        subheading="This is a simple page header component and this is the text. This page header is only sticky for viewport widths of 992px and above."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
      <ic-section-container style="height:800px">
        This is an example of how the sticky-desktop-only variant of the page
        header would work with some content and the footer.
      </ic-section-container>
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/">Components</ic-footer-link>
        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
      </ic-footer>
    `;stickyForLargeAndExtraLargeBreakpointsOnly.storyName="Sticky for large and extra-large breakpoints only",stickyForLargeAndExtraLargeBreakpointsOnly.parameters={storySource:{source:'html`\n      <ic-top-navigation app-title="ApplicationName">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <ic-page-header\n        sticky-desktop-only\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text. This page header is only sticky for viewport widths of 992px and above."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n      <ic-section-container style="height:800px">\n        This is an example of how the sticky-desktop-only variant of the page\n        header would work with some content and the footer.\n      </ic-section-container>\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n        >\n          Logo\n        </div>\n      </ic-footer>\n    `'},loki:{skip:!0}};const withBreadcrumbs=()=>lit_html.qy`
      <ic-page-header
        heading="Page header"
        subheading="This is a page header component with additional functionality and this is the text."
        reverse-order
      >
        <ic-breadcrumb-group slot="breadcrumbs">
          <ic-breadcrumb
            page-title="Breadcrumb 1"
            href="/breadcrumb-1"
          ></ic-breadcrumb>
          <ic-breadcrumb
            current="true"
            page-title="Breadcrumb 2"
            href="/breadcrumb-2"
          ></ic-breadcrumb>
        </ic-breadcrumb-group>
      </ic-page-header>
    `;withBreadcrumbs.storyName="With breadcrumbs",withBreadcrumbs.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Page header"\n        subheading="This is a page header component with additional functionality and this is the text."\n        reverse-order\n      >\n        <ic-breadcrumb-group slot="breadcrumbs">\n          <ic-breadcrumb\n            page-title="Breadcrumb 1"\n            href="/breadcrumb-1"\n          ></ic-breadcrumb>\n          <ic-breadcrumb\n            current="true"\n            page-title="Breadcrumb 2"\n            href="/breadcrumb-2"\n          ></ic-breadcrumb>\n        </ic-breadcrumb-group>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const withActions=()=>lit_html.qy`
      <ic-page-header
        heading="Page header"
        subheading="This is a page header component with additional functionality and this is the text."
        reverse-order
      >
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      </ic-page-header>
    `;withActions.storyName="With actions",withActions.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Page header"\n        subheading="This is a page header component with additional functionality and this is the text."\n        reverse-order\n      >\n        <ic-button slot="actions" variant="primary"\n          >Create coffee\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-button>\n        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const withInput=()=>lit_html.qy`
      <ic-page-header
        heading="Page header"
        subheading="This is a page header component with additional functionality and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
      </ic-page-header>
    `;withInput.storyName="With input",withInput.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Page header"\n        subheading="This is a page header component with additional functionality and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n        <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n      </ic-page-header>\n    `'},loki:{skip:!0}};const withStepper=()=>lit_html.qy`
      <ic-page-header
        heading="Create a coffee"
        subheading="This is a page header component with additional functionality and this is the text."
      >
        <ic-stepper slot="stepper">
          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>
          <ic-step
            step-title="Warm milk"
            step-subtitle="Optional"
            step-type="completed"
          ></ic-step>
          <ic-step step-title="Pour milk" step-type="current" current></ic-step>
        </ic-stepper>
      </ic-page-header>
    `;withStepper.storyName="With stepper",withStepper.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Create a coffee"\n        subheading="This is a page header component with additional functionality and this is the text."\n      >\n        <ic-stepper slot="stepper">\n          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>\n          <ic-step\n            step-title="Warm milk"\n            step-subtitle="Optional"\n            step-type="completed"\n          ></ic-step>\n          <ic-step step-title="Pour milk" step-type="current" current></ic-step>\n        </ic-stepper>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const withTabs=()=>lit_html.qy`
      <ic-page-header
        heading="Coffee recipes"
        subheading="This is a page header component with additional functionality and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-navigation-item
          slot="tabs"
          label="All recipes"
          href="?path=/story/web-components-page-header--with-tabs"
          selected
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Favourites"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Three"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Four"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Five"
          href="?path=/story/web-components-page-header--with-tabs"
          target="_blank"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Six"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Seven"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Eight"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Nine"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Section Ten"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
      </ic-page-header>
    `;withTabs.storyName="With tabs",withTabs.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Coffee recipes"\n        subheading="This is a page header component with additional functionality and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n        <ic-navigation-item\n          slot="tabs"\n          label="All recipes"\n          href="?path=/story/web-components-page-header--with-tabs"\n          selected\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Favourites"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Three"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Four"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Five"\n          href="?path=/story/web-components-page-header--with-tabs"\n          target="_blank"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Six"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Seven"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Eight"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Nine"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Ten"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const withBreadcrumbsInputActionsAndTabs=()=>lit_html.qy`
      <ic-page-header
        heading="Coffee recipes"
        subheading="This is a page header component that has breadcrumbs, an input area, actions & tabs."
        reverse-order
      >
        <ic-breadcrumb-group slot="breadcrumbs">
          <ic-breadcrumb
            page-title="Breadcrumb 1"
            href="/breadcrumb-1"
          ></ic-breadcrumb>
          <ic-breadcrumb
            current="true"
            page-title="Breadcrumb 2"
            href="/breadcrumb-2"
          ></ic-breadcrumb>
        </ic-breadcrumb-group>
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
        <ic-navigation-item
          slot="tabs"
          label="All recipes"
          href="?path=/story/web-components-page-header--with-tabs"
          selected
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Favourites"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
      </ic-page-header>
    `;withBreadcrumbsInputActionsAndTabs.storyName="With breadcrumbs, input, actions and tabs",withBreadcrumbsInputActionsAndTabs.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Coffee recipes"\n        subheading="This is a page header component that has breadcrumbs, an input area, actions & tabs."\n        reverse-order\n      >\n        <ic-breadcrumb-group slot="breadcrumbs">\n          <ic-breadcrumb\n            page-title="Breadcrumb 1"\n            href="/breadcrumb-1"\n          ></ic-breadcrumb>\n          <ic-breadcrumb\n            current="true"\n            page-title="Breadcrumb 2"\n            href="/breadcrumb-2"\n          ></ic-breadcrumb>\n        </ic-breadcrumb-group>\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n        <ic-button slot="actions" variant="primary"\n          >Create coffee\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-button>\n        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n        <ic-navigation-item\n          slot="tabs"\n          label="All recipes"\n          href="?path=/story/web-components-page-header--with-tabs"\n          selected\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Favourites"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n      </ic-page-header>\n    `'},loki:{skip:!0}};const withBreadcrumbsInputActionsAndStepper=()=>lit_html.qy`
      <ic-page-header
        heading="Coffee recipes"
        subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."
        reverse-order
      >
        <ic-breadcrumb-group slot="breadcrumbs">
          <ic-breadcrumb
            page-title="Breadcrumb 1"
            href="/breadcrumb-1"
          ></ic-breadcrumb>
          <ic-breadcrumb
            current="true"
            page-title="Breadcrumb 2"
            href="/breadcrumb-2"
          ></ic-breadcrumb>
        </ic-breadcrumb-group>
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
        <ic-stepper slot="stepper">
          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>
          <ic-step
            step-title="Warm milk"
            step-subtitle="Optional"
            step-type="completed"
          ></ic-step>
          <ic-step step-title="Pour milk" step-type="current" current></ic-step>
        </ic-stepper>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
      </ic-page-header>
    `;withBreadcrumbsInputActionsAndStepper.storyName="With breadcrumbs, input, actions and stepper",withBreadcrumbsInputActionsAndStepper.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Coffee recipes"\n        subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."\n        reverse-order\n      >\n        <ic-breadcrumb-group slot="breadcrumbs">\n          <ic-breadcrumb\n            page-title="Breadcrumb 1"\n            href="/breadcrumb-1"\n          ></ic-breadcrumb>\n          <ic-breadcrumb\n            current="true"\n            page-title="Breadcrumb 2"\n            href="/breadcrumb-2"\n          ></ic-breadcrumb>\n        </ic-breadcrumb-group>\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n        <ic-button slot="actions" variant="primary"\n          >Create coffee\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-button>\n        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n        <ic-stepper slot="stepper">\n          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>\n          <ic-step\n            step-title="Warm milk"\n            step-subtitle="Optional"\n            step-type="completed"\n          ></ic-step>\n          <ic-step step-title="Pour milk" step-type="current" current></ic-step>\n        </ic-stepper>\n        <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n      </ic-page-header>\n    `'},loki:{skip:!0}};const componentOverrides=()=>lit_html.qy`
      <ic-page-header>
        <ic-typography slot="heading" variant="h4">
          <h2>heading</h2>
        </ic-typography>
        <ic-typography slot="subheading" variant="body">
          subheading
        </ic-typography>
      </ic-page-header>
    `;componentOverrides.storyName="Component overrides",componentOverrides.parameters={storySource:{source:'html`\n      <ic-page-header>\n        <ic-typography slot="heading" variant="h4">\n          <h2>heading</h2>\n        </ic-typography>\n        <ic-typography slot="subheading" variant="body">\n          subheading\n        </ic-typography>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const withBreadcrumbsInputActionsAndStepperAndLongTitle=()=>lit_html.qy`
      <ic-page-header
        heading="Coffee recipes with a very very long title"
        subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."
        reverse-order
      >
        <ic-breadcrumb-group slot="breadcrumbs">
          <ic-breadcrumb
            page-title="Breadcrumb 1"
            href="/breadcrumb-1"
          ></ic-breadcrumb>
          <ic-breadcrumb
            current="true"
            page-title="Breadcrumb 2"
            href="/breadcrumb-2"
          ></ic-breadcrumb>
        </ic-breadcrumb-group>
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
        <ic-stepper slot="stepper">
          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>
          <ic-step
            step-title="Warm milk"
            step-subtitle="Optional"
            step-type="completed"
          ></ic-step>
          <ic-step step-title="Pour milk" step-type="current" current></ic-step>
        </ic-stepper>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
      </ic-page-header>
    `;withBreadcrumbsInputActionsAndStepperAndLongTitle.storyName="With breadcrumbs, input, actions and stepper and long title",withBreadcrumbsInputActionsAndStepperAndLongTitle.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Coffee recipes with a very very long title"\n        subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."\n        reverse-order\n      >\n        <ic-breadcrumb-group slot="breadcrumbs">\n          <ic-breadcrumb\n            page-title="Breadcrumb 1"\n            href="/breadcrumb-1"\n          ></ic-breadcrumb>\n          <ic-breadcrumb\n            current="true"\n            page-title="Breadcrumb 2"\n            href="/breadcrumb-2"\n          ></ic-breadcrumb>\n        </ic-breadcrumb-group>\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n        <ic-button slot="actions" variant="primary"\n          >Create coffee\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-button>\n        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n        <ic-stepper slot="stepper">\n          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>\n          <ic-step\n            step-title="Warm milk"\n            step-subtitle="Optional"\n            step-type="completed"\n          ></ic-step>\n          <ic-step step-title="Pour milk" step-type="current" current></ic-step>\n        </ic-stepper>\n        <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n      </ic-page-header>\n    `'},loki:{skip:!0}};const componentMeta={title:"Web Components/Page header",parameters:{layout:"fullscreen"},tags:["stories-mdx"],includeStories:["headingWithAdornment","leftAligned","small","deprecatedSmall","withoutBorder","centerAligned","fullWidth","sticky","stickyWithContentAndFooter","stickyForLargeAndExtraLargeBreakpointsOnly","withBreadcrumbs","withActions","withInput","withStepper","withTabs","withBreadcrumbsInputActionsAndTabs","withBreadcrumbsInputActionsAndStepper","componentOverrides","withBreadcrumbsInputActionsAndStepperAndLongTitle"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_page_header_stories=componentMeta,__namedExportsOrder=["headingWithAdornment","leftAligned","small","deprecatedSmall","withoutBorder","centerAligned","fullWidth","sticky","stickyWithContentAndFooter","stickyForLargeAndExtraLargeBreakpointsOnly","withBreadcrumbs","withActions","withInput","withStepper","withTabs","withBreadcrumbsInputActionsAndTabs","withBreadcrumbsInputActionsAndStepper","componentOverrides","withBreadcrumbsInputActionsAndStepperAndLongTitle"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-page-header-ic-page-header-stories-mdx.2578dac5.iframe.bundle.js.map