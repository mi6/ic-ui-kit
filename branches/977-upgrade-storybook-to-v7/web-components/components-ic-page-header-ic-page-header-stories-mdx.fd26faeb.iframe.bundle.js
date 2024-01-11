/*! For license information please see components-ic-page-header-ic-page-header-stories-mdx.fd26faeb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5188],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-page-header/ic-page-header.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,centerAligned:()=>centerAligned,componentOverrides:()=>componentOverrides,default:()=>ic_page_header_stories,deprecatedSmall:()=>deprecatedSmall,fullWidth:()=>fullWidth,headingWithAdornment:()=>headingWithAdornment,leftAligned:()=>leftAligned,small:()=>small,sticky:()=>sticky,stickyForLargeAndExtraLargeBreakpointsOnly:()=>stickyForLargeAndExtraLargeBreakpointsOnly,stickyWithContentAndFooter:()=>stickyWithContentAndFooter,withActions:()=>withActions,withBreadcrumbs:()=>withBreadcrumbs,withBreadcrumbsInputActionsAndStepper:()=>withBreadcrumbsInputActionsAndStepper,withBreadcrumbsInputActionsAndTabs:()=>withBreadcrumbsInputActionsAndTabs,withInput:()=>withInput,withStepper:()=>withStepper,withTabs:()=>withTabs});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-page-header\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property            | Attribute             | Description                                                                                                                                       | Type                                 | Default     |\n| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |\n| `aligned`           | `aligned`             | The alignment of the page header.                                                                                                                 | `"center" \\| "full-width" \\| "left"` | `"left"`    |\n| `border`            | `border`              | If `true`, a border will be displayed along the bottom of the page header.                                                                        | `boolean`                            | `true`      |\n| `heading`           | `heading`             | The title to render on the page header.                                                                                                           | `string`                             | `undefined` |\n| `reverseOrder`      | `reverse-order`       | If `true`, the reading pattern and tab order will change in the action area for viewport widths of above 576px and when actions have not wrapped. | `boolean`                            | `false`     |\n| `size`              | `size`                | The size of the page header component.                                                                                                            | `"default" \\| "small"`               | `"default"` |\n| `small`             | `small`               | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/>               | `boolean`                            | `false`     |\n| `sticky`            | `sticky`              | If `true`, the page header will be sticky at all breakpoints.                                                                                     | `boolean`                            | `false`     |\n| `stickyDesktopOnly` | `sticky-desktop-only` | If `true`, the page header will only be sticky for viewport widths of 992px and above.                                                            | `boolean`                            | `false`     |\n| `subheading`        | `subheading`          | The subtitle to render on the page header.                                                                                                        | `string`                             | `undefined` |\n\n\n## Slots\n\n| Slot                  | Description                                                                                                                                                |\n| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `"actions"`           | Content will be rendered in the action area, adjacent to the title area.                                                                                   |\n| `"breadcrumbs"`       | Content will be rendered in the breadcrumb area, above the title and action areas.                                                                         |\n| `"heading"`           | Content will be rendered in the title area, in place of the heading.                                                                                       |\n| `"heading-adornment"` | Content will be rendered in the title area, adjacent to the heading.                                                                                       |\n| `"input"`             | Content will be rendered in the input area, below the title area and adjacent to the action area.                                                          |\n| `"stepper"`           | Content will be rendered in the navigation area, below the title and action areas. Note: stepper slot cannot be used when the tabs slot is being used.     |\n| `"subheading"`        | Content will be rendered in the title area, in place of the subheading.                                                                                    |\n| `"tabs"`              | Content will be rendered in the navigation area, below the title and action areas. Note: the stepper slot cannot be used when the tabs slot is being used. |\n\n\n## CSS Custom Properties\n\n| Name                       | Description            |\n| -------------------------- | ---------------------- |\n| `--ic-z-index-page-header` | z-index of page-header |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-section-container](../ic-section-container)\n- [ic-typography](../ic-typography)\n- [ic-horizontal-scroll](../ic-horizontal-scroll)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-page-header --\x3e ic-section-container\n  ic-page-header --\x3e ic-typography\n  ic-page-header --\x3e ic-horizontal-scroll\n  ic-horizontal-scroll --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-page-header fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p",ul:"ul",li:"li"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Page header",component:"ic-page-header",parameters:{layout:"fullscreen"}}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"heading-with-adornment",children:"Heading with adornment"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Heading with adornment",children:lit_html.dy`
      <ic-page-header heading="Page header">
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-aligned",children:"Left aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Left aligned",children:lit_html.dy`
      <ic-page-header
        aligned="left"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Small",children:lit_html.dy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Deprecated - small",children:lit_html.dy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"center-aligned",children:"Center aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Center aligned",children:lit_html.dy`
      <ic-page-header
        aligned="center"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Full width",children:lit_html.dy`
      <ic-page-header
        aligned="full-width"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sticky",children:"Sticky"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Sticky",children:lit_html.dy`
      <ic-page-header
        sticky
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sticky-with-content-and-footer",children:"Sticky with content and footer"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Sticky with content and footer",parameters:{loki:{skip:!0}},children:lit_html.dy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sticky-for-large-and-extra-large-breakpoints-only",children:"Sticky for large and extra-large breakpoints only"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Sticky for large and extra-large breakpoints only",parameters:{loki:{skip:!0}},children:lit_html.dy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-breadcrumbs",children:"With breadcrumbs"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With breadcrumbs",children:lit_html.dy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-actions",children:"With actions"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With actions",children:lit_html.dy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-input",children:"With input"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With input",children:lit_html.dy`
      <ic-page-header
        heading="Page header"
        subheading="This is a page header component with additional functionality and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
      </ic-page-header>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-stepper",children:"With stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With stepper",parameters:{loki:{skip:!0}},children:lit_html.dy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-tabs",children:"With tabs"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With tabs",children:lit_html.dy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-breadcrumbs-input-actions-and-tabs",children:"With breadcrumbs, input, actions and tabs"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With breadcrumbs, input, actions and tabs",children:lit_html.dy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-breadcrumbs-input-actions-and-stepper",children:"With breadcrumbs, input, actions and stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With breadcrumbs, input, actions and stepper",parameters:{loki:{skip:!0}},children:lit_html.dy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"component-overrides",children:"Component overrides"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If a slot is provided, instead an attribute, the slot will supersede for the following:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"heading"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"subheading"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Component overrides",children:lit_html.dy`
      <ic-page-header>
        <ic-typography slot="heading" variant="h4">
          <h2>heading</h2>
        </ic-typography>
        <ic-typography slot="subheading" variant="body">
          subheading
        </ic-typography>
      </ic-page-header>
    `})})]})}const headingWithAdornment=()=>lit_html.dy`
      <ic-page-header heading="Page header">
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `;headingWithAdornment.storyName="Heading with adornment",headingWithAdornment.parameters={storySource:{source:'html`\n      <ic-page-header heading="Page header">\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n    `'}};const leftAligned=()=>lit_html.dy`
      <ic-page-header
        aligned="left"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `;leftAligned.storyName="Left aligned",leftAligned.parameters={storySource:{source:'html`\n      <ic-page-header\n        aligned="left"\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n    `'}};const small=()=>lit_html.dy`
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
    `;small.storyName="Small",small.parameters={storySource:{source:'html`\n      <ic-page-header\n        aligned="left"\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n        size="small"\n      >\n        <ic-status-tag\n          slot="heading-adornment"\n          label="Beta"\n          size="small"\n        ></ic-status-tag>\n      </ic-page-header>\n    `'}};const deprecatedSmall=()=>lit_html.dy`
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
    `;deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'html`\n      <ic-page-header\n        aligned="left"\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n        small\n      >\n        <ic-status-tag\n          slot="heading-adornment"\n          label="Beta"\n          size="small"\n        ></ic-status-tag>\n      </ic-page-header>\n    `'}};const centerAligned=()=>lit_html.dy`
      <ic-page-header
        aligned="center"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `;centerAligned.storyName="Center aligned",centerAligned.parameters={storySource:{source:'html`\n      <ic-page-header\n        aligned="center"\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n    `'}};const fullWidth=()=>lit_html.dy`
      <ic-page-header
        aligned="full-width"
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'html`\n      <ic-page-header\n        aligned="full-width"\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n    `'}};const sticky=()=>lit_html.dy`
      <ic-page-header
        sticky
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
    `;sticky.storyName="Sticky",sticky.parameters={storySource:{source:'html`\n      <ic-page-header\n        sticky\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n    `'}};const stickyWithContentAndFooter=()=>lit_html.dy`
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
    `;stickyWithContentAndFooter.storyName="Sticky with content and footer",stickyWithContentAndFooter.parameters={storySource:{source:'html`\n      <ic-top-navigation app-title="ApplicationName">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <ic-page-header\n        sticky\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n      <ic-section-container style="height:800px">\n        This is an example of how the sticky variant of the page header would\n        work with some content and the footer.\n      </ic-section-container>\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n        >\n          Logo\n        </div>\n      </ic-footer>\n    `'},loki:{skip:!0}};const stickyForLargeAndExtraLargeBreakpointsOnly=()=>lit_html.dy`
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
    `;stickyForLargeAndExtraLargeBreakpointsOnly.storyName="Sticky for large and extra-large breakpoints only",stickyForLargeAndExtraLargeBreakpointsOnly.parameters={storySource:{source:'html`\n      <ic-top-navigation app-title="ApplicationName">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <ic-page-header\n        sticky-desktop-only\n        heading="Page header"\n        subheading="This is a simple page header component and this is the text. This page header is only sticky for viewport widths of 992px and above."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      </ic-page-header>\n      <ic-section-container style="height:800px">\n        This is an example of how the sticky-desktop-only variant of the page\n        header would work with some content and the footer.\n      </ic-section-container>\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n        >\n          Logo\n        </div>\n      </ic-footer>\n    `'},loki:{skip:!0}};const withBreadcrumbs=()=>lit_html.dy`
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
    `;withBreadcrumbs.storyName="With breadcrumbs",withBreadcrumbs.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Page header"\n        subheading="This is a page header component with additional functionality and this is the text."\n        reverse-order\n      >\n        <ic-breadcrumb-group slot="breadcrumbs">\n          <ic-breadcrumb\n            page-title="Breadcrumb 1"\n            href="/breadcrumb-1"\n          ></ic-breadcrumb>\n          <ic-breadcrumb\n            current="true"\n            page-title="Breadcrumb 2"\n            href="/breadcrumb-2"\n          ></ic-breadcrumb>\n        </ic-breadcrumb-group>\n      </ic-page-header>\n    `'}};const withActions=()=>lit_html.dy`
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
    `;withActions.storyName="With actions",withActions.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Page header"\n        subheading="This is a page header component with additional functionality and this is the text."\n        reverse-order\n      >\n        <ic-button slot="actions" variant="primary"\n          >Create coffee\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-button>\n        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n      </ic-page-header>\n    `'}};const withInput=()=>lit_html.dy`
      <ic-page-header
        heading="Page header"
        subheading="This is a page header component with additional functionality and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
      </ic-page-header>
    `;withInput.storyName="With input",withInput.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Page header"\n        subheading="This is a page header component with additional functionality and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n        <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n      </ic-page-header>\n    `'}};const withStepper=()=>lit_html.dy`
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
    `;withStepper.storyName="With stepper",withStepper.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Create a coffee"\n        subheading="This is a page header component with additional functionality and this is the text."\n      >\n        <ic-stepper slot="stepper">\n          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>\n          <ic-step\n            step-title="Warm milk"\n            step-subtitle="Optional"\n            step-type="completed"\n          ></ic-step>\n          <ic-step step-title="Pour milk" step-type="current" current></ic-step>\n        </ic-stepper>\n      </ic-page-header>\n    `'},loki:{skip:!0}};const withTabs=()=>lit_html.dy`
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
    `;withTabs.storyName="With tabs",withTabs.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Coffee recipes"\n        subheading="This is a page header component with additional functionality and this is the text."\n      >\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n        <ic-navigation-item\n          slot="tabs"\n          label="All recipes"\n          href="?path=/story/web-components-page-header--with-tabs"\n          selected\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Favourites"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Three"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Four"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Five"\n          href="?path=/story/web-components-page-header--with-tabs"\n          target="_blank"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Six"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Seven"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Eight"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Nine"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Section Ten"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n      </ic-page-header>\n    `'}};const withBreadcrumbsInputActionsAndTabs=()=>lit_html.dy`
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
    `;withBreadcrumbsInputActionsAndTabs.storyName="With breadcrumbs, input, actions and tabs",withBreadcrumbsInputActionsAndTabs.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Coffee recipes"\n        subheading="This is a page header component that has breadcrumbs, an input area, actions & tabs."\n        reverse-order\n      >\n        <ic-breadcrumb-group slot="breadcrumbs">\n          <ic-breadcrumb\n            page-title="Breadcrumb 1"\n            href="/breadcrumb-1"\n          ></ic-breadcrumb>\n          <ic-breadcrumb\n            current="true"\n            page-title="Breadcrumb 2"\n            href="/breadcrumb-2"\n          ></ic-breadcrumb>\n        </ic-breadcrumb-group>\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n        <ic-button slot="actions" variant="primary"\n          >Create coffee\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-button>\n        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n        <ic-navigation-item\n          slot="tabs"\n          label="All recipes"\n          href="?path=/story/web-components-page-header--with-tabs"\n          selected\n        ></ic-navigation-item>\n        <ic-navigation-item\n          slot="tabs"\n          label="Favourites"\n          href="?path=/story/web-components-page-header--with-tabs"\n        ></ic-navigation-item>\n        <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n      </ic-page-header>\n    `'}};const withBreadcrumbsInputActionsAndStepper=()=>lit_html.dy`
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
    `;withBreadcrumbsInputActionsAndStepper.storyName="With breadcrumbs, input, actions and stepper",withBreadcrumbsInputActionsAndStepper.parameters={storySource:{source:'html`\n      <ic-page-header\n        heading="Coffee recipes"\n        subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."\n        reverse-order\n      >\n        <ic-breadcrumb-group slot="breadcrumbs">\n          <ic-breadcrumb\n            page-title="Breadcrumb 1"\n            href="/breadcrumb-1"\n          ></ic-breadcrumb>\n          <ic-breadcrumb\n            current="true"\n            page-title="Breadcrumb 2"\n            href="/breadcrumb-2"\n          ></ic-breadcrumb>\n        </ic-breadcrumb-group>\n        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n        <ic-button slot="actions" variant="primary"\n          >Create coffee\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-button>\n        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n        <ic-stepper slot="stepper">\n          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>\n          <ic-step\n            step-title="Warm milk"\n            step-subtitle="Optional"\n            step-type="completed"\n          ></ic-step>\n          <ic-step step-title="Pour milk" step-type="current" current></ic-step>\n        </ic-stepper>\n        <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n      </ic-page-header>\n    `'},loki:{skip:!0}};const componentOverrides=()=>lit_html.dy`
      <ic-page-header>
        <ic-typography slot="heading" variant="h4">
          <h2>heading</h2>
        </ic-typography>
        <ic-typography slot="subheading" variant="body">
          subheading
        </ic-typography>
      </ic-page-header>
    `;componentOverrides.storyName="Component overrides",componentOverrides.parameters={storySource:{source:'html`\n      <ic-page-header>\n        <ic-typography slot="heading" variant="h4">\n          <h2>heading</h2>\n        </ic-typography>\n        <ic-typography slot="subheading" variant="body">\n          subheading\n        </ic-typography>\n      </ic-page-header>\n    `'}};const componentMeta={title:"Web Components/Page header",parameters:{layout:"fullscreen"},tags:["stories-mdx"],includeStories:["headingWithAdornment","leftAligned","small","deprecatedSmall","centerAligned","fullWidth","sticky","stickyWithContentAndFooter","stickyForLargeAndExtraLargeBreakpointsOnly","withBreadcrumbs","withActions","withInput","withStepper","withTabs","withBreadcrumbsInputActionsAndTabs","withBreadcrumbsInputActionsAndStepper","componentOverrides"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_page_header_stories=componentMeta,__namedExportsOrder=["headingWithAdornment","leftAligned","small","deprecatedSmall","centerAligned","fullWidth","sticky","stickyWithContentAndFooter","stickyForLargeAndExtraLargeBreakpointsOnly","withBreadcrumbs","withActions","withInput","withStepper","withTabs","withBreadcrumbsInputActionsAndTabs","withBreadcrumbsInputActionsAndStepper","componentOverrides"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-page-header-ic-page-header-stories-mdx.fd26faeb.iframe.bundle.js.map