"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4525],{"./src/components/ic-footer/ic-footer.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,brand:()=>brand,breakpoint:()=>breakpoint,default:()=>ic_footer_stories,footerWithNoCaptionOrLogoOrCopyright:()=>footerWithNoCaptionOrLogoOrCopyright,footerWithNoLinks:()=>footerWithNoLinks,groupedLinks:()=>groupedLinks,slottedDescriptionAndCaption:()=>slottedDescriptionAndCaption,ungroupedLinks:()=>ungroupedLinks,withClassificationBanner:()=>withClassificationBanner,withLogoLinks:()=>withLogoLinks});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-footer\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property      | Attribute     | Description                                                                             | Type                                                               | Default     |\n| ------------- | ------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------- |\n| `aligned`     | `aligned`     | The alignment of the section containers used within the footer.                         | `"center" \\| "full-width" \\| "left"`                               | `"left"`    |\n| `breakpoint`  | `breakpoint`  | The screen size breakpoint at which to switch to the small layout.                      | `"extra large" \\| "extra small" \\| "large" \\| "medium" \\| "small"` | `"medium"`  |\n| `caption`     | `caption`     | The caption displayed at the bottom of the footer.                                      | `string`                                                           | `undefined` |\n| `copyright`   | `copyright`   | If `true`, the footer will display the crown copyright at the bottom.                   | `boolean`                                                          | `true`      |\n| `description` | `description` | The description displayed at the top of the footer.                                     | `string`                                                           | `undefined` |\n| `groupLinks`  | `group-links` | If `true`, the footer will be set up to handle link groups instead of standalone links. | `boolean`                                                          | `false`     |\n\n\n## Slots\n\n| Slot            | Description                                             |\n| --------------- | ------------------------------------------------------- |\n| `"caption"`     | Content will be rendered above Crown Copyright.         |\n| `"description"` | Content will be rendered at the top of the footer.      |\n| `"link"`        | Content will be rendered between description and logos. |\n| `"logo"`        | Content will be rendered underneath footer links.       |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-section-container](../ic-section-container)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-footer --\x3e ic-section-container\n  ic-footer --\x3e ic-typography\n  style ic-footer fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';__webpack_require__("./src/components/ic-classification-banner/readme.md");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Footer",component:"ic-footer"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"ungrouped-links",children:"Ungrouped links"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Ungrouped links",children:lit_html.qy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"grouped-links",children:"Grouped links"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Grouped links",children:lit_html.qy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-classification-banner",children:"With classification banner"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With classification banner",children:lit_html.qy` <ic-classification-banner
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
      </ic-footer>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"brand",children:"Brand"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Brand",children:lit_html.qy` <ic-theme brand-color="rgb(27, 60, 121)" id="brand-story-ic-theme">
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
          <ic-footer-link href="/">Components</ic-footer-link>
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
    </ic-theme>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-logo-links",children:"With logo links"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With logo links",children:lit_html.qy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"footer-with-no-caption-or-logo-or-copyright",children:"Footer with no caption or logo or copyright"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Footer with no caption or logo or copyright",children:lit_html.qy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"footer-with-no-links",children:"Footer with no links"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Footer with no links",children:lit_html.qy`
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
      </ic-footer>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"breakpoint",children:"Breakpoint"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Breakpoint",children:lit_html.qy`
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-description-and-caption",children:"Slotted description and caption"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted description and caption",children:lit_html.qy`
      <ic-footer>
        <ic-typography slot="description"
          >The ICDS is maintained by the Design Practice Team. If you've got a
          question or want to feedback, please get in touch.</ic-typography
        >
        <ic-typography slot="caption"
          >All content is available under the Open Government Licence v3.0,
          except source code and code examples which are available under the MIT
          Licence.</ic-typography
        >
      </ic-footer>
    `})})]})}const ungroupedLinks=()=>lit_html.qy`
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
    `;ungroupedLinks.storyName="Ungrouped links",ungroupedLinks.parameters={storySource:{source:'html`\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/" target="_blank"\n          >Components</ic-footer-link\n        >\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n      </ic-footer>\n    `'}};const groupedLinks=()=>lit_html.qy`
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
    `;groupedLinks.storyName="Grouped links",groupedLinks.parameters={storySource:{source:'html`\n      <ic-footer\n        group-links\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n        <ic-footer-link-group slot="link" label="Links 1">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/" target="_blank">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <ic-footer-link-group slot="link" label="Links 2">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <ic-footer-link-group slot="link" label="Links 3">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n      </ic-footer>\n    `'}};const withClassificationBanner=()=>lit_html.qy` <ic-classification-banner
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
      </ic-footer>`;withClassificationBanner.storyName="With classification banner",withClassificationBanner.parameters={storySource:{source:'html` <ic-classification-banner\n        classification="official"\n      ></ic-classification-banner>\n      <ic-footer\n        aligned="full-width"\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        style="position:fixed;bottom:0;left:0;right:0;"\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n      </ic-footer>`'}};const brand=()=>lit_html.qy` <ic-theme brand-color="rgb(27, 60, 121)" id="brand-story-ic-theme">
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
          <ic-footer-link href="/">Components</ic-footer-link>
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
    </ic-theme>`;brand.storyName="Brand",brand.parameters={storySource:{source:'html` <ic-theme brand-color="rgb(27, 60, 121)" id="brand-story-ic-theme">\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'#brand-story-ic-theme\').brandColor=\'rgb(27, 60, 121)\'"\n      >\n        Default brand\n      </ic-button>\n      <ic-button\n        variant="primary"\n        id="custom-btn"\n        onClick="document.querySelector(\'#brand-story-ic-theme\').brandColor=\'rgb(255, 201, 60)\'"\n      >\n        Sunrise brand\n      </ic-button>\n      <ic-footer\n        group-links\n        aligned="full-width"\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n            please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        style="position:fixed;bottom:0;left:0;right:0;"\n      >\n        <ic-footer-link-group slot="link" label="Links 1">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <ic-footer-link-group slot="link" label="Links 2">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <ic-footer-link-group slot="link" label="Links 3">\n          <ic-footer-link href="/">Get Started</ic-footer-link>\n          <ic-footer-link href="/">Accessibility</ic-footer-link>\n          <ic-footer-link href="/">Styles</ic-footer-link>\n          <ic-footer-link href="/">Components</ic-footer-link>\n          <ic-footer-link href="/">Patterns</ic-footer-link>\n          <ic-footer-link href="/">Design toolkit</ic-footer-link>\n        </ic-footer-link-group>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n        <div\n          slot="logo"\n          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n        >\n          Logo\n        </div>\n      </ic-footer>\n    </ic-theme>`'}};const withLogoLinks=()=>lit_html.qy`
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
    `;withLogoLinks.storyName="With logo links",withLogoLinks.parameters={storySource:{source:'html`\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div slot="logo" style="display:flex;gap:var(--ic-space-sm);">\n          <ic-footer-link href="/">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="48px"\n              viewBox="0 0 24 24"\n              width="48px"\n              fill="#FFFFFF"\n              aria-label="logo"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n              />\n            </svg>\n          </ic-footer-link>\n          <ic-footer-link href="/">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="48px"\n              viewBox="0 0 24 24"\n              width="48px"\n              fill="#FFFFFF"\n              aria-label="logo"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n              />\n            </svg>\n          </ic-footer-link>\n          <ic-footer-link href="/">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="48px"\n              viewBox="0 0 24 24"\n              width="48px"\n              fill="#FFFFFF"\n              aria-label="logo"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n              />\n            </svg>\n          </ic-footer-link>\n        </div>\n      </ic-footer>\n    `'}};const footerWithNoCaptionOrLogoOrCopyright=()=>lit_html.qy`
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
    `;footerWithNoCaptionOrLogoOrCopyright.storyName="Footer with no caption or logo or copyright",footerWithNoCaptionOrLogoOrCopyright.parameters={storySource:{source:'html`\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        copyright="false"\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/" target="_blank"\n          >Components</ic-footer-link\n        >\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n      </ic-footer>\n    `'}};const footerWithNoLinks=()=>lit_html.qy`
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
      </ic-footer>
    `;footerWithNoLinks.storyName="Footer with no links",footerWithNoLinks.parameters={storySource:{source:'html`\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      >\n      </ic-footer>\n    `'}};const breakpoint=()=>lit_html.qy`
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
    `;breakpoint.storyName="Breakpoint",breakpoint.parameters={storySource:{source:'html`\n      <ic-footer\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        breakpoint="extra large"\n      >\n        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n        <div slot="logo" style="display:flex;gap:var(--ic-space-sm);">\n          <ic-footer-link href="/">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="48px"\n              viewBox="0 0 24 24"\n              width="48px"\n              fill="#FFFFFF"\n              aria-label="logo"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n              />\n            </svg>\n          </ic-footer-link>\n          <ic-footer-link href="/">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="48px"\n              viewBox="0 0 24 24"\n              width="48px"\n              fill="#FFFFFF"\n              aria-label="logo"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n              />\n            </svg>\n          </ic-footer-link>\n          <ic-footer-link href="/">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="48px"\n              viewBox="0 0 24 24"\n              width="48px"\n              fill="#FFFFFF"\n              aria-label="logo"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n              />\n            </svg>\n          </ic-footer-link>\n        </div>\n      </ic-footer>\n    `'}};const slottedDescriptionAndCaption=()=>lit_html.qy`
      <ic-footer>
        <ic-typography slot="description"
          >The ICDS is maintained by the Design Practice Team. If you've got a
          question or want to feedback, please get in touch.</ic-typography
        >
        <ic-typography slot="caption"
          >All content is available under the Open Government Licence v3.0,
          except source code and code examples which are available under the MIT
          Licence.</ic-typography
        >
      </ic-footer>
    `;slottedDescriptionAndCaption.storyName="Slotted description and caption",slottedDescriptionAndCaption.parameters={storySource:{source:'html`\n      <ic-footer>\n        <ic-typography slot="description"\n          >The ICDS is maintained by the Design Practice Team. If you\'ve got a\n          question or want to feedback, please get in touch.</ic-typography\n        >\n        <ic-typography slot="caption"\n          >All content is available under the Open Government Licence v3.0,\n          except source code and code examples which are available under the MIT\n          Licence.</ic-typography\n        >\n      </ic-footer>\n    `'}};const componentMeta={title:"Web Components/Footer",tags:["stories-mdx"],includeStories:["ungroupedLinks","groupedLinks","withClassificationBanner","brand","withLogoLinks","footerWithNoCaptionOrLogoOrCopyright","footerWithNoLinks","breakpoint","slottedDescriptionAndCaption"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_footer_stories=componentMeta,__namedExportsOrder=["ungroupedLinks","groupedLinks","withClassificationBanner","brand","withLogoLinks","footerWithNoCaptionOrLogoOrCopyright","footerWithNoLinks","breakpoint","slottedDescriptionAndCaption"]}}]);
//# sourceMappingURL=components-ic-footer-ic-footer-stories-mdx.f57e290d.iframe.bundle.js.map