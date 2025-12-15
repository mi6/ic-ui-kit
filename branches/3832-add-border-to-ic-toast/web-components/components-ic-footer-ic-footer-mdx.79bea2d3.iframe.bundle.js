/*! For license information please see components-ic-footer-ic-footer-mdx.79bea2d3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5393,7971,582,6199,6763],{"./src/components/ic-footer/ic-footer.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-footer\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property        | Attribute        | Description                                                                             | Type                                                                            | Default               |\n| --------------- | ---------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------- |\n| `aligned`       | `aligned`        | The alignment of the section containers used within the footer.                         | `"center" \\| "full-width" \\| "left" \\| undefined`                               | `"left"`              |\n| `breakpoint`    | `breakpoint`     | The screen size breakpoint at which to switch to the small layout.                      | `"extra large" \\| "extra small" \\| "large" \\| "medium" \\| "small" \\| undefined` | `"medium"`            |\n| `caption`       | `caption`        | The caption displayed at the bottom of the footer.                                      | `string \\| undefined`                                                           | `undefined`           |\n| `copyright`     | `copyright`      | If `true`, the footer will display the crown copyright at the bottom.                   | `boolean \\| undefined`                                                          | `true`                |\n| `copyrightText` | `copyright-text` | The text displayed for the copyright notice if `copyright` is `true`.                   | `string \\| undefined`                                                           | `"© Crown Copyright"` |\n| `description`   | `description`    | The description displayed at the top of the footer.                                     | `string \\| undefined`                                                           | `undefined`           |\n| `groupLinks`    | `group-links`    | If `true`, the footer will be set up to handle link groups instead of standalone links. | `boolean \\| undefined`                                                          | `false`               |\n\n\n## Slots\n\n| Slot            | Description                                             |\n| --------------- | ------------------------------------------------------- |\n| `"caption"`     | Content will be rendered above Crown Copyright.         |\n| `"description"` | Content will be rendered at the top of the footer.      |\n| `"link"`        | Content will be rendered between description and logos. |\n| `"logo"`        | Content will be rendered underneath footer links.       |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-section-container](../ic-section-container)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-footer --\x3e ic-section-container\n  ic-footer --\x3e ic-typography\n  style ic-footer fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_footer_link_readme_namespaceObject='# ic-footer-link\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                         | Type                                                                                                                                                                                                  | Default     |\n| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `download`       | `download`       | If `true`, the user can save the linked URL instead of navigating to it.                            | `boolean \\| string \\| undefined`                                                                                                                                                                      | `false`     |\n| `href`           | `href`           | The URL that the link points to.                                                                    | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                               | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                           | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url" \\| undefined` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                   | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe). | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-link](../ic-link)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-footer-link --\x3e ic-link\n  style ic-footer-link fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_footer_link_group_readme_namespaceObject="# ic-footer-link-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute | Description                                  | Type     | Default     |\n| -------------------- | --------- | -------------------------------------------- | -------- | ----------- |\n| `label` _(required)_ | `label`   | The title of the link group to be displayed. | `string` | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-section-container](../ic-section-container)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-footer-link-group --\x3e ic-typography\n  ic-footer-link-group --\x3e ic-section-container\n  style ic-footer-link-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n";var ic_footer_stories=__webpack_require__("./src/components/ic-footer/ic-footer.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_footer_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject+ic_footer_link_readme_namespaceObject+ic_footer_link_group_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-footer/ic-footer.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Brand:()=>Brand,Breakpoint:()=>Breakpoint,CustomCopyright:()=>CustomCopyright,FooterWithNoCaptionOrLogoOrCopyright:()=>FooterWithNoCaptionOrLogoOrCopyright,FooterWithNoLinks:()=>FooterWithNoLinks,GroupedLinks:()=>GroupedLinks,Playground:()=>Playground,SlottedDescriptionAndCaption:()=>SlottedDescriptionAndCaption,UngroupedLinks:()=>UngroupedLinks,WithClassificationBanner:()=>WithClassificationBanner,WithLogoLinks:()=>WithLogoLinks,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Footer",component:"ic-footer"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-footer
    aligned=${args.aligned}
    breakpoint=${args.breakpoint}
    caption=${args.caption}
    copyright=${args.copyright}
    copyright-text=${args.copyrightText}
    description=${args.description}
    group-links=${args.groupLinks}
  >
    <ic-footer-link-group slot="link" label="Links 1">
      <ic-footer-link href="/">Get Started</ic-footer-link>
      <ic-footer-link href="/">Accessibility</ic-footer-link>
      <ic-footer-link href="/">Styles</ic-footer-link>
    </ic-footer-link-group>
    <ic-footer-link-group slot="link" label="Links 2">
      <ic-footer-link href="/">Get Started</ic-footer-link>
      <ic-footer-link href="/">Accessibility</ic-footer-link>
      <ic-footer-link href="/">Styles</ic-footer-link>
    </ic-footer-link-group>
    <ic-footer-link-group slot="link" label="Links 3">
      <ic-footer-link href="/">Get Started</ic-footer-link>
      <ic-footer-link href="/">Accessibility</ic-footer-link>
      <ic-footer-link href="/">Styles</ic-footer-link>
    </ic-footer-link-group>
    <div
      slot="logo"
      style="
          width:100px;
          height:100px;
          display:flex;
          align-items:center;
          justify-content:center;
          background-color:var(--ic-brand-color-primary);
          color:var(--ic-brand-text-color);"
    >
      Logo
    </div>
  </ic-footer>`,args:{aligned:"left",breakpoint:"medium",caption:"All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence.",copyright:!0,copyrightText:"© Crown Copyright",description:"The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, please get in touch.",groupLinks:!0},name:"Playground",argTypes:{aligned:{options:["center","full-width","left"],control:{type:"select"}},breakpoint:{options:["extra large","extra small","large","medium","small"],control:{type:"select"}}}},UngroupedLinks={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  `,name:"Ungrouped links"},GroupedLinks={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-footer
      group-links
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <ic-footer-link-group slot="link" label="Links 1">
        <ic-footer-link href="/">Get Started</ic-footer-link>
        <ic-footer-link href="/">Accessibility</ic-footer-link>
        <ic-footer-link href="/">Styles</ic-footer-link>
        <ic-footer-link href="/" target="_blank">Components</ic-footer-link>
        <ic-footer-link href="/">Patterns</ic-footer-link>
        <ic-footer-link href="/">Design toolkit</ic-footer-link>
      </ic-footer-link-group>
      <ic-footer-link-group slot="link" label="Links 2">
        <ic-footer-link href="/">Get Started</ic-footer-link>
        <ic-footer-link href="/">Accessibility</ic-footer-link>
        <ic-footer-link href="/">Styles</ic-footer-link>
        <ic-footer-link href="/">Components</ic-footer-link>
        <ic-footer-link href="/">Patterns</ic-footer-link>
        <ic-footer-link href="/">Design toolkit</ic-footer-link>
      </ic-footer-link-group>
      <ic-footer-link-group slot="link" label="Links 3">
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
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  `,name:"Grouped links"},WithClassificationBanner={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-classification-banner
        classification="official"
      ></ic-classification-banner>
      <ic-footer
        aligned="full-width"
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
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
      </ic-footer>`,name:"With classification banner"},Brand={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-theme brand-color="rgb(27, 60, 121)" id="brand-story-ic-theme">
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('#brand-story-ic-theme').brandColor='rgb(27, 60, 121)'"
      >
        Default brand
      </ic-button>
      <ic-button
        variant="primary"
        id="custom-btn"
        onClick="document.querySelector('#brand-story-ic-theme').brandColor='rgb(255, 201, 60)'"
      >
        Sunrise brand
      </ic-button>
      <ic-footer
        group-links
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
            please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        style="position:fixed;bottom:0;left:0;right:0;"
      >
        <ic-footer-link-group slot="link" label="Links 1">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/" target="_blank">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" label="Links 2">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" label="Links 3">
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
            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
      </ic-footer>
    </ic-theme>`,name:"Brand"},WithLogoLinks={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
            aria-label="logo"
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
            aria-label="logo"
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
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
      </div>
    </ic-footer>
  `,name:"With logo links"},FooterWithNoCaptionOrLogoOrCopyright={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      copyright="false"
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
  `,name:"Footer with no caption or logo or copyright"},FooterWithNoLinks={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
    </ic-footer>
  `,name:"Footer with no links"},Breakpoint={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      breakpoint="extra large"
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
            aria-label="logo"
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
            aria-label="logo"
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
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
      </div>
    </ic-footer>
  `,name:"Breakpoint"},SlottedDescriptionAndCaption={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-footer>
      <ic-typography slot="description"
        >The ICDS is maintained by the Design Practice Team. If you've got a
        question or want to feedback, please get in touch.</ic-typography
      >
      <ic-typography slot="caption"
        >All content is available under the Open Government Licence v3.0, except
        source code and code examples which are available under the MIT
        Licence.</ic-typography
      >
    </ic-footer>
  `,name:"Slotted description and caption"},CustomCopyright={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      copyright-text="© 2025 Coffeehouse Inc. All rights reserved."
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
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  `,name:"Custom copyright text"},__namedExportsOrder=["Playground","UngroupedLinks","GroupedLinks","WithClassificationBanner","Brand","WithLogoLinks","FooterWithNoCaptionOrLogoOrCopyright","FooterWithNoLinks","Breakpoint","SlottedDescriptionAndCaption","CustomCopyright"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html` <ic-footer\n    aligned=${args.aligned}\n    breakpoint=${args.breakpoint}\n    caption=${args.caption}\n    copyright=${args.copyright}\n    copyright-text=${args.copyrightText}\n    description=${args.description}\n    group-links=${args.groupLinks}\n  >\n    <ic-footer-link-group slot="link" label="Links 1">\n      <ic-footer-link href="/">Get Started</ic-footer-link>\n      <ic-footer-link href="/">Accessibility</ic-footer-link>\n      <ic-footer-link href="/">Styles</ic-footer-link>\n    </ic-footer-link-group>\n    <ic-footer-link-group slot="link" label="Links 2">\n      <ic-footer-link href="/">Get Started</ic-footer-link>\n      <ic-footer-link href="/">Accessibility</ic-footer-link>\n      <ic-footer-link href="/">Styles</ic-footer-link>\n    </ic-footer-link-group>\n    <ic-footer-link-group slot="link" label="Links 3">\n      <ic-footer-link href="/">Get Started</ic-footer-link>\n      <ic-footer-link href="/">Accessibility</ic-footer-link>\n      <ic-footer-link href="/">Styles</ic-footer-link>\n    </ic-footer-link-group>\n    <div\n      slot="logo"\n      style="\n          width:100px;\n          height:100px;\n          display:flex;\n          align-items:center;\n          justify-content:center;\n          background-color:var(--ic-brand-color-primary);\n          color:var(--ic-brand-text-color);"\n    >\n      Logo\n    </div>\n  </ic-footer>`,\n  args: defaultArgs,\n  name: "Playground",\n  argTypes: {\n    aligned: {\n      options: ["center", "full-width", "left"],\n      control: {\n        type: "select"\n      }\n    },\n    breakpoint: {\n      options: ["extra large", "extra small", "large", "medium", "small"],\n      control: {\n        type: "select"\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}},UngroupedLinks.parameters={...UngroupedLinks.parameters,docs:{...UngroupedLinks.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-footer\n      description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n    >\n      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n      <ic-footer-link slot="link" href="/" target="_blank"\n        >Components</ic-footer-link\n      >\n      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n      <div\n        slot="logo"\n        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n      >\n        Logo\n      </div>\n    </ic-footer>\n  `,\n  name: "Ungrouped links"\n}',...UngroupedLinks.parameters?.docs?.source}}},GroupedLinks.parameters={...GroupedLinks.parameters,docs:{...GroupedLinks.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-footer\n      group-links\n      description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n    >\n      <ic-footer-link-group slot="link" label="Links 1">\n        <ic-footer-link href="/">Get Started</ic-footer-link>\n        <ic-footer-link href="/">Accessibility</ic-footer-link>\n        <ic-footer-link href="/">Styles</ic-footer-link>\n        <ic-footer-link href="/" target="_blank">Components</ic-footer-link>\n        <ic-footer-link href="/">Patterns</ic-footer-link>\n        <ic-footer-link href="/">Design toolkit</ic-footer-link>\n      </ic-footer-link-group>\n      <ic-footer-link-group slot="link" label="Links 2">\n        <ic-footer-link href="/">Get Started</ic-footer-link>\n        <ic-footer-link href="/">Accessibility</ic-footer-link>\n        <ic-footer-link href="/">Styles</ic-footer-link>\n        <ic-footer-link href="/">Components</ic-footer-link>\n        <ic-footer-link href="/">Patterns</ic-footer-link>\n        <ic-footer-link href="/">Design toolkit</ic-footer-link>\n      </ic-footer-link-group>\n      <ic-footer-link-group slot="link" label="Links 3">\n        <ic-footer-link href="/">Get Started</ic-footer-link>\n        <ic-footer-link href="/">Accessibility</ic-footer-link>\n        <ic-footer-link href="/">Styles</ic-footer-link>\n        <ic-footer-link href="/">Components</ic-footer-link>\n        <ic-footer-link href="/">Patterns</ic-footer-link>\n        <ic-footer-link href="/">Design toolkit</ic-footer-link>\n      </ic-footer-link-group>\n      <div\n        slot="logo"\n        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n      >\n        Logo\n      </div>\n    </ic-footer>\n  `,\n  name: "Grouped links"\n}',...GroupedLinks.parameters?.docs?.source}}},WithClassificationBanner.parameters={...WithClassificationBanner.parameters,docs:{...WithClassificationBanner.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-classification-banner\n        classification="official"\n      ></ic-classification-banner>\n      <ic-footer\n        aligned="full-width"\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        style="position:fixed;bottom:0;left:0;right:0;"\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n      </ic-footer>`,\n  name: "With classification banner"\n}',...WithClassificationBanner.parameters?.docs?.source}}},Brand.parameters={...Brand.parameters,docs:{...Brand.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-theme brand-color="rgb(27, 60, 121)" id="brand-story-ic-theme">\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'#brand-story-ic-theme\').brandColor=\'rgb(27, 60, 121)\'"\n      >\n        Default brand\n      </ic-button>\n      <ic-button\n        variant="primary"\n        id="custom-btn"\n        onClick="document.querySelector(\'#brand-story-ic-theme\').brandColor=\'rgb(255, 201, 60)\'"\n      >\n        Sunrise brand\n      </ic-button>\n      <ic-footer\n        group-links\n        aligned="full-width"\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n            please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        style="position:fixed;bottom:0;left:0;right:0;"\n      >\n        <ic-footer-link-group slot="link" label="Links 1">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/" target="_blank">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <ic-footer-link-group slot="link" label="Links 2">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <ic-footer-link-group slot="link" label="Links 3">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n      </ic-footer>\n    </ic-theme>`,\n  name: "Brand"\n}',...Brand.parameters?.docs?.source}}},WithLogoLinks.parameters={...WithLogoLinks.parameters,docs:{...WithLogoLinks.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-footer\n      description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n    >\n      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n      <div slot="logo" style="display:flex;gap:var(--ic-space-sm);">\n        <ic-footer-link href="/">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="48px"\n            viewBox="0 0 24 24"\n            width="48px"\n            fill="#FFFFFF"\n            aria-label="logo"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n            />\n          </svg>\n        </ic-footer-link>\n        <ic-footer-link href="/">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="48px"\n            viewBox="0 0 24 24"\n            width="48px"\n            fill="#FFFFFF"\n            aria-label="logo"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n            />\n          </svg>\n        </ic-footer-link>\n        <ic-footer-link href="/">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="48px"\n            viewBox="0 0 24 24"\n            width="48px"\n            fill="#FFFFFF"\n            aria-label="logo"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n            />\n          </svg>\n        </ic-footer-link>\n      </div>\n    </ic-footer>\n  `,\n  name: "With logo links"\n}',...WithLogoLinks.parameters?.docs?.source}}},FooterWithNoCaptionOrLogoOrCopyright.parameters={...FooterWithNoCaptionOrLogoOrCopyright.parameters,docs:{...FooterWithNoCaptionOrLogoOrCopyright.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-footer\n      description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n      copyright="false"\n    >\n      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n      <ic-footer-link slot="link" href="/" target="_blank"\n        >Components</ic-footer-link\n      >\n      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n    </ic-footer>\n  `,\n  name: "Footer with no caption or logo or copyright"\n}',...FooterWithNoCaptionOrLogoOrCopyright.parameters?.docs?.source}}},FooterWithNoLinks.parameters={...FooterWithNoLinks.parameters,docs:{...FooterWithNoLinks.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-footer\n      description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n    >\n    </ic-footer>\n  `,\n  name: "Footer with no links"\n}',...FooterWithNoLinks.parameters?.docs?.source}}},Breakpoint.parameters={...Breakpoint.parameters,docs:{...Breakpoint.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-footer\n      description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      breakpoint="extra large"\n    >\n      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n      <div slot="logo" style="display:flex;gap:var(--ic-space-sm);">\n        <ic-footer-link href="/">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="48px"\n            viewBox="0 0 24 24"\n            width="48px"\n            fill="#FFFFFF"\n            aria-label="logo"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n            />\n          </svg>\n        </ic-footer-link>\n        <ic-footer-link href="/">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="48px"\n            viewBox="0 0 24 24"\n            width="48px"\n            fill="#FFFFFF"\n            aria-label="logo"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n            />\n          </svg>\n        </ic-footer-link>\n        <ic-footer-link href="/">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="48px"\n            viewBox="0 0 24 24"\n            width="48px"\n            fill="#FFFFFF"\n            aria-label="logo"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n            />\n          </svg>\n        </ic-footer-link>\n      </div>\n    </ic-footer>\n  `,\n  name: "Breakpoint"\n}',...Breakpoint.parameters?.docs?.source}}},SlottedDescriptionAndCaption.parameters={...SlottedDescriptionAndCaption.parameters,docs:{...SlottedDescriptionAndCaption.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-footer>\n      <ic-typography slot="description"\n        >The ICDS is maintained by the Design Practice Team. If you\'ve got a\n        question or want to feedback, please get in touch.</ic-typography\n      >\n      <ic-typography slot="caption"\n        >All content is available under the Open Government Licence v3.0, except\n        source code and code examples which are available under the MIT\n        Licence.</ic-typography\n      >\n    </ic-footer>\n  `,\n  name: "Slotted description and caption"\n}',...SlottedDescriptionAndCaption.parameters?.docs?.source}}},CustomCopyright.parameters={...CustomCopyright.parameters,docs:{...CustomCopyright.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-footer\n      description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      copyright-text="© 2025 Coffeehouse Inc. All rights reserved."\n    >\n      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n      <ic-footer-link slot="link" href="/" target="_blank"\n        >Components</ic-footer-link\n      >\n      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n      <div\n        slot="logo"\n        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n      >\n        Logo\n      </div>\n    </ic-footer>\n  `,\n  name: "Custom copyright text"\n}',...CustomCopyright.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-footer-ic-footer-mdx.79bea2d3.iframe.bundle.js.map