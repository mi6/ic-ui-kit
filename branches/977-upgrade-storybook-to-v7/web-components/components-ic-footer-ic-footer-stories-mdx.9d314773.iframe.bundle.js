/*! For license information please see components-ic-footer-ic-footer-stories-mdx.9d314773.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[438],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-footer/ic-footer.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_footer_stories,footerWithNoCaptionOrLogo:()=>footerWithNoCaptionOrLogo,footerWithNoLinks:()=>footerWithNoLinks,groupedLinks:()=>groupedLinks,theming:()=>theming,ungroupedLinks:()=>ungroupedLinks,withClassificationBanner:()=>withClassificationBanner,withLogoLinks:()=>withLogoLinks});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-footer\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property      | Attribute     | Description                                                                             | Type                                                               | Default     |\n| ------------- | ------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------- |\n| `aligned`     | `aligned`     | The alignment of the section containers used within the footer.                         | `"center" \\| "full-width" \\| "left"`                               | `"left"`    |\n| `breakpoint`  | `breakpoint`  | The screen size breakpoint at which to switch to the small layout.                      | `"extra large" \\| "extra small" \\| "large" \\| "medium" \\| "small"` | `"medium"`  |\n| `caption`     | `caption`     | The caption displayed at the bottom of the footer.                                      | `string`                                                           | `undefined` |\n| `copyright`   | `copyright`   | If `true`, the footer will display the crown copyright at the bottom.                   | `boolean`                                                          | `true`      |\n| `description` | `description` | The description displayed at the top of the footer.                                     | `string`                                                           | `undefined` |\n| `groupLinks`  | `group-links` | If `true`, the footer will be set up to handle link groups instead of standalone links. | `boolean`                                                          | `false`     |\n\n\n## Slots\n\n| Slot            | Description                                             |\n| --------------- | ------------------------------------------------------- |\n| `"caption"`     | Content will be rendered above Crown Copyright.         |\n| `"description"` | Content will be rendered at the top of the footer.      |\n| `"link"`        | Content will be rendered between description and logos. |\n| `"logo"`        | Content will be rendered underneath footer links.       |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-section-container](../ic-section-container)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-footer --\x3e ic-section-container\n  ic-footer --\x3e ic-typography\n  style ic-footer fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';__webpack_require__("./src/components/ic-classification-banner/readme.md");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Footer",component:"ic-footer"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"ungrouped-links",children:"Ungrouped links"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Ungrouped links",children:lit_html.dy`
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/" target="_blank"
          >Components</ic-footer-link
        >
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"grouped-links",children:"Grouped links"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Grouped links",children:lit_html.dy`
      <ic-footer
        group-links
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link-group slot="link" group-title="Links 1">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/" target="_blank">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" group-title="Links 2">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" group-title="Links 3">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
      </ic-footer>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-classification-banner",children:"With classification banner"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With classification banner",children:lit_html.dy` <ic-classification-banner
        classification="official"
      ></ic-classification-banner>
      <ic-footer
        align="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        style="position:fixed;bottom:0;left:0;right:0;"
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
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-theme-primary);color:var(--ic-theme-texy);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
      </ic-footer>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"theming",children:"Theming"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Theming",children:lit_html.dy` <ic-theme color="rgb(27, 60, 121)"></ic-theme>
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').color='rgb(27, 60, 121)'"
      >
        Default theme
      </ic-button>
      <ic-button
        variant="primary"
        id="custom-btn"
        onClick="document.querySelector('ic-theme').color='rgb(255, 201, 60)'"
      >
        Sunrise theme
      </ic-button>
      <ic-footer
        group-links
        align="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
            please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        style="position:fixed;bottom:0;left:0;right:0;"
      >
        <ic-footer-link-group slot="link" group-title="Links 1">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" group-title="Links 2">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" group-title="Links 3">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-theme-primary);color:var(--ic-theme-texy);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
      </ic-footer>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-logo-links",children:"With logo links"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With logo links",children:lit_html.dy`
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
        <div slot="logo" style="display:flex;gap:var(--ic-space-sm);">
          <ic-footer-link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
              />
            </svg>
          </ic-footer-link>
          <ic-footer-link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
              />
            </svg>
          </ic-footer-link>
          <ic-footer-link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
              />
            </svg>
          </ic-footer-link>
        </div>
      </ic-footer>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"footer-with-no-caption-or-logo",children:"Footer with no caption or logo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Footer with no caption or logo",children:lit_html.dy`
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/" target="_blank"
          >Components</ic-footer-link
        >
        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      </ic-footer>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"footer-with-no-links",children:"Footer with no links"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Footer with no links",children:lit_html.dy`
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
      </ic-footer>
    `})})]})}const ungroupedLinks=()=>lit_html.dy`
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/" target="_blank"
          >Components</ic-footer-link
        >
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
    `;ungroupedLinks.storyName="Ungrouped links",ungroupedLinks.parameters={storySource:{source:'html`\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/" target="_blank"\n          >Components</ic-footer-link\n        >\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n        >\n          Logo\n        </div>\n      </ic-footer>\n    `'}};const groupedLinks=()=>lit_html.dy`
      <ic-footer
        group-links
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link-group slot="link" group-title="Links 1">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/" target="_blank">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" group-title="Links 2">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" group-title="Links 3">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
      </ic-footer>
    `;groupedLinks.storyName="Grouped links",groupedLinks.parameters={storySource:{source:'html`\n      <ic-footer\n        group-links\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n        <ic-footer-link-group slot="link" group-title="Links 1">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/" target="_blank">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <ic-footer-link-group slot="link" group-title="Links 2">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <ic-footer-link-group slot="link" group-title="Links 3">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n        >\n          Logo\n        </div>\n      </ic-footer>\n    `'}};const withClassificationBanner=()=>lit_html.dy` <ic-classification-banner
        classification="official"
      ></ic-classification-banner>
      <ic-footer
        align="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        style="position:fixed;bottom:0;left:0;right:0;"
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
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-theme-primary);color:var(--ic-theme-texy);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
      </ic-footer>`;withClassificationBanner.storyName="With classification banner",withClassificationBanner.parameters={storySource:{source:'html` <ic-classification-banner\n        classification="official"\n      ></ic-classification-banner>\n      <ic-footer\n        align="full-width"\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        style="position:fixed;bottom:0;left:0;right:0;"\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-theme-primary);color:var(--ic-theme-texy);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n        >\n          Logo\n        </div>\n      </ic-footer>`'}};const theming=()=>lit_html.dy` <ic-theme color="rgb(27, 60, 121)"></ic-theme>
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').color='rgb(27, 60, 121)'"
      >
        Default theme
      </ic-button>
      <ic-button
        variant="primary"
        id="custom-btn"
        onClick="document.querySelector('ic-theme').color='rgb(255, 201, 60)'"
      >
        Sunrise theme
      </ic-button>
      <ic-footer
        group-links
        align="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
            please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        style="position:fixed;bottom:0;left:0;right:0;"
      >
        <ic-footer-link-group slot="link" group-title="Links 1">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" group-title="Links 2">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" group-title="Links 3">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-theme-primary);color:var(--ic-theme-texy);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
        >
          Logo
        </div>
      </ic-footer>`;theming.storyName="Theming",theming.parameters={storySource:{source:'html` <ic-theme color="rgb(27, 60, 121)"></ic-theme>\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'ic-theme\').color=\'rgb(27, 60, 121)\'"\n      >\n        Default theme\n      </ic-button>\n      <ic-button\n        variant="primary"\n        id="custom-btn"\n        onClick="document.querySelector(\'ic-theme\').color=\'rgb(255, 201, 60)\'"\n      >\n        Sunrise theme\n      </ic-button>\n      <ic-footer\n        group-links\n        align="full-width"\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n            please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        style="position:fixed;bottom:0;left:0;right:0;"\n      >\n        <ic-footer-link-group slot="link" group-title="Links 1">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <ic-footer-link-group slot="link" group-title="Links 2">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <ic-footer-link-group slot="link" group-title="Links 3">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n            background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n            background-color:var(--ic-theme-primary);color:var(--ic-theme-texy);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n            background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n        >\n          Logo\n        </div>\n      </ic-footer>`'}};const withLogoLinks=()=>lit_html.dy`
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
        <div slot="logo" style="display:flex;gap:var(--ic-space-sm);">
          <ic-footer-link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
              />
            </svg>
          </ic-footer-link>
          <ic-footer-link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
              />
            </svg>
          </ic-footer-link>
          <ic-footer-link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
              />
            </svg>
          </ic-footer-link>
        </div>
      </ic-footer>
    `;withLogoLinks.storyName="With logo links",withLogoLinks.parameters={storySource:{source:'html`\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div slot="logo" style="display:flex;gap:var(--ic-space-sm);">\n          <ic-footer-link href="/">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="48px"\n              viewBox="0 0 24 24"\n              width="48px"\n              fill="#FFFFFF"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n              />\n            </svg>\n          </ic-footer-link>\n          <ic-footer-link href="/">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="48px"\n              viewBox="0 0 24 24"\n              width="48px"\n              fill="#FFFFFF"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n              />\n            </svg>\n          </ic-footer-link>\n          <ic-footer-link href="/">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="48px"\n              viewBox="0 0 24 24"\n              width="48px"\n              fill="#FFFFFF"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n              />\n            </svg>\n          </ic-footer-link>\n        </div>\n      </ic-footer>\n    `'}};const footerWithNoCaptionOrLogo=()=>lit_html.dy`
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/" target="_blank"
          >Components</ic-footer-link
        >
        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      </ic-footer>
    `;footerWithNoCaptionOrLogo.storyName="Footer with no caption or logo",footerWithNoCaptionOrLogo.parameters={storySource:{source:'html`\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/" target="_blank"\n          >Components</ic-footer-link\n        >\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n      </ic-footer>\n    `'}};const footerWithNoLinks=()=>lit_html.dy`
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
      </ic-footer>
    `;footerWithNoLinks.storyName="Footer with no links",footerWithNoLinks.parameters={storySource:{source:'html`\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n      </ic-footer>\n    `'}};const componentMeta={title:"Web Components/Footer",tags:["stories-mdx"],includeStories:["ungroupedLinks","groupedLinks","withClassificationBanner","theming","withLogoLinks","footerWithNoCaptionOrLogo","footerWithNoLinks"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_footer_stories=componentMeta,__namedExportsOrder=["ungroupedLinks","groupedLinks","withClassificationBanner","theming","withLogoLinks","footerWithNoCaptionOrLogo","footerWithNoLinks"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/ic-classification-banner/readme.md":module=>{"use strict";module.exports='# ic-classification-banner\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property              | Attribute              | Description                                                                                            | Type                                                                          | Default     |\n| --------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ----------- |\n| `additionalSelectors` | `additional-selectors` | The additional information that will be displayed after the classification.                            | `string`                                                                      | `""`        |\n| `classification`      | `classification`       | The classification level to be displayed - also determines the banner and text colour.                 | `"default" \\| "official" \\| "official-sensitive" \\| "secret" \\| "top-secret"` | `"default"` |\n| `country`             | `country`              | The optional text that will be displayed before classification to specify relevant country/countries.  | `string`                                                                      | `"uk"`      |\n| `inline`              | `inline`               | If `true`, the banner will appear inline with the page, instead of sticking to the bottom of the page. | `boolean`                                                                     | `false`     |\n| `upTo`                | `up-to`                | If `true`, "Up to" will be displayed before the classification and country.                            | `boolean`                                                                     | `false`     |\n\n\n## CSS Custom Properties\n\n| Name                                 | Description                      |\n| ------------------------------------ | -------------------------------- |\n| `--ic-z-index-classification-banner` | z-index of classification banner |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-classification-banner --\x3e ic-typography\n  style ic-classification-banner fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}]);
//# sourceMappingURL=components-ic-footer-ic-footer-stories-mdx.9d314773.iframe.bundle.js.map