/*! For license information please see components-ic-hero-ic-hero-stories-mdx.c7bf9437.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3558],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-hero/ic-hero.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,cardRightContent:()=>cardRightContent,centerAligned:()=>centerAligned,contentCenterAligned:()=>contentCenterAligned,default:()=>ic_hero_stories,deprecatedSmall:()=>deprecatedSmall,fullWidth:()=>fullWidth,imageRightContent:()=>imageRightContent,leftAligned:()=>leftAligned,longHeading:()=>longHeading,searchBarInteraction:()=>searchBarInteraction,secondaryHeading:()=>secondaryHeading,small:()=>small,theme:()=>theme,withBackgroundImageNoParallaxEffect:()=>withBackgroundImageNoParallaxEffect,withBackgroundImageParallaxEffect:()=>withBackgroundImageParallaxEffect});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-hero\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                    | Attribute                     | Description                                                                                                                         | Type                                 | Default     |\n| --------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |\n| `aligned`                   | `aligned`                     | The alignment of the hero.                                                                                                          | `"center" \\| "full-width" \\| "left"` | `"left"`    |\n| `backgroundImage`           | `background-image`            | The optional background image.                                                                                                      | `string`                             | `undefined` |\n| `contentAligned`            | `content-aligned`             | The alignment of the hero content.                                                                                                  | `"center" \\| "left"`                 | `"left"`    |\n| `disableBackgroundParallax` | `disable-background-parallax` | If `true`, the background image (if set) will not scroll using a parallax effect.                                                   | `boolean`                            | `false`     |\n| `heading` _(required)_      | `heading`                     | The heading of the hero.                                                                                                            | `string`                             | `undefined` |\n| `secondaryHeading`          | `secondary-heading`           | The optional secondary heading, replaced by slotted right content.                                                                  | `string`                             | `undefined` |\n| `secondarySubheading`       | `secondary-subheading`        | The optional secondary subheading, replaced by slotted right content.                                                               | `string`                             | `undefined` |\n| `size`                      | `size`                        | The size of the hero component.                                                                                                     | `"default" \\| "small"`               | `"default"` |\n| `small`                     | `small`                       | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/> | `boolean`                            | `false`     |\n| `subheading`                | `subheading`                  | The description for the hero.                                                                                                       | `string`                             | `undefined` |\n\n\n## Slots\n\n| Slot            | Description                                                                   |\n| --------------- | ----------------------------------------------------------------------------- |\n| `"heading"`     | Content will be rendered in the title area, in place of the heading.          |\n| `"interaction"` | Content will be rendered in the interaction area, adjacent to the title area. |\n| `"secondary"`   | Content will be rendered in the secondary content area.                       |\n| `"subheading"`  | Content will be rendered in the title area, in place of the subheading.       |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-section-container](../ic-section-container)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-hero --\x3e ic-section-container\n  ic-hero --\x3e ic-typography\n  style ic-hero fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',example_background_namespaceObject=__webpack_require__.p+"static/media/example-background.3bf84892.png";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Hero",component:"ic-hero"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-aligned",children:"Left aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Left aligned",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"center-aligned",children:"Center aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Center aligned",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"long-heading",children:"Long heading"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Long heading",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-hero
      heading="Hero heading. This is a Hero component, it should be used as a page heading."
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
      <ic-card
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      ></ic-card>
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Full width",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="full-width"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"content-center-aligned",children:"Content center aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Content center aligned",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
      content-aligned="center"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Small",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
      size="small"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Deprecated - small",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
      small
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"secondary-heading",children:"Secondary heading"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Secondary heading",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      secondary-heading="Secondary Heading"
      secondary-subheading="This is a secondary description."
      aligned="center"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"search-bar-interaction",children:"Search bar interaction"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Search bar interaction",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-search-bar
        slot="interaction"
        full-width
        style="max-width: 322px;"
      ></ic-search-bar>
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"card-right-content",children:"Card right content"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Card right content",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      card-heading="Latest announcement"
      card-message="This is some example text that can be included in the card copy"
      aligned="full-width"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-card
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      ></ic-card>
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"image-right-content",children:"Image right content"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Image right content",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <svg
        slot="secondary"
        style="width:300px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="900" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"theme",children:"Theme"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Theme",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        aligned="center"
      >
        <div slot="interaction" style="display: flex">
          <ic-text-field
            placeholder="Filter display"
            label="Filter display"
            hide-label
          ></ic-text-field>
          <ic-button variant="primary" style="margin-left: var(--ic-space-md)"
            >Filter</ic-button
          >
        </div>
        <ic-card
          heading="Latest announcement"
          message="This is some example text that can be included in the card copy."
          slot="secondary"
        ></ic-card>
      </ic-hero>
      <br />
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
      </ic-button> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-background-image-parallax-effect",children:"With background image (parallax effect)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With background image (parallax effect)",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
      <ic-top-navigation app-title="Application Name">
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
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        background-image="${example_background_namespaceObject}"
      >
        <div slot="interaction">
          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-button
            variant="secondary"
            style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-link
            href="https://google.com"
            style="margin-top: var(--ic-space-sm)"
            >Help</ic-link
          >
        </div>
      </ic-hero>
      <br />
      <ic-typography>You can scroll.</ic-typography>
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').color='rgb(27, 60, 121)'"
        style="margin-bottom:1300px"
      >
        Reset theme
      </ic-button>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-background-image-no-parallax-effect",children:"With background image (no parallax effect)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With background image (no parallax effect)",parameters:{layout:"fullscreen"},children:lit_html.dy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
      <ic-top-navigation app-title="Application Name">
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
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        background-image="${example_background_namespaceObject}"
        disable-background-parallax
      >
        <div slot="interaction">
          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-button
            variant="secondary"
            style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-link
            href="https://google.com"
            style="margin-top: var(--ic-space-sm)"
            >Help</ic-link
          >
        </div>
      </ic-hero>
      <br />
      <ic-typography>You can scroll.</ic-typography>
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').color='rgb(27, 60, 121)'"
        style="margin-bottom:1300px"
      >
        Reset theme
      </ic-button>`})})]})}const leftAligned=()=>lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
    </ic-hero>`;leftAligned.storyName="Left aligned",leftAligned.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-link\n        href="https://google.com"\n        slot="interaction"\n        style="margin-top: var(--ic-space-sm)"\n        >Help</ic-link\n      >\n    </ic-hero>`'},layout:"fullscreen"};const centerAligned=()=>lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
    </ic-hero>`;centerAligned.storyName="Center aligned",centerAligned.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-link\n        href="https://google.com"\n        slot="interaction"\n        style="margin-top: var(--ic-space-sm)"\n        >Help</ic-link\n      >\n    </ic-hero>`'},layout:"fullscreen"};const longHeading=()=>lit_html.dy`<ic-hero
      heading="Hero heading. This is a Hero component, it should be used as a page heading."
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
      <ic-card
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      ></ic-card>
    </ic-hero>`;longHeading.storyName="Long heading",longHeading.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading. This is a Hero component, it should be used as a page heading."\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-link\n        href="https://google.com"\n        slot="interaction"\n        style="margin-top: var(--ic-space-sm)"\n        >Help</ic-link\n      >\n      <ic-card\n        heading="Latest announcement"\n        message="This is some example text that can be included in the card copy."\n        slot="secondary"\n      ></ic-card>\n    </ic-hero>`'},layout:"fullscreen"};const fullWidth=()=>lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="full-width"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
    </ic-hero>`;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="full-width"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n    </ic-hero>`'},layout:"fullscreen"};const contentCenterAligned=()=>lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
      content-aligned="center"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
    </ic-hero>`;contentCenterAligned.storyName="Content center aligned",contentCenterAligned.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n      content-aligned="center"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n    </ic-hero>`'},layout:"fullscreen"};const small=()=>lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
      size="small"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
    </ic-hero>`;small.storyName="Small",small.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n      size="small"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n    </ic-hero>`'},layout:"fullscreen"};const deprecatedSmall=()=>lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
      small
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
    </ic-hero>`;deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n      small\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n    </ic-hero>`'},layout:"fullscreen"};const secondaryHeading=()=>lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      secondary-heading="Secondary Heading"
      secondary-subheading="This is a secondary description."
      aligned="center"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
    </ic-hero>`;secondaryHeading.storyName="Secondary heading",secondaryHeading.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      secondary-heading="Secondary Heading"\n      secondary-subheading="This is a secondary description."\n      aligned="center"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n    </ic-hero>`'},layout:"fullscreen"};const searchBarInteraction=()=>lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-search-bar
        slot="interaction"
        full-width
        style="max-width: 322px;"
      ></ic-search-bar>
    </ic-hero>`;searchBarInteraction.storyName="Search bar interaction",searchBarInteraction.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-search-bar\n        slot="interaction"\n        full-width\n        style="max-width: 322px;"\n      ></ic-search-bar>\n    </ic-hero>`'},layout:"fullscreen"};const cardRightContent=()=>lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      card-heading="Latest announcement"
      card-message="This is some example text that can be included in the card copy"
      aligned="full-width"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-card
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      ></ic-card>
    </ic-hero>`;cardRightContent.storyName="Card right content",cardRightContent.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      card-heading="Latest announcement"\n      card-message="This is some example text that can be included in the card copy"\n      aligned="full-width"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-card\n        heading="Latest announcement"\n        message="This is some example text that can be included in the card copy."\n        slot="secondary"\n      ></ic-card>\n    </ic-hero>`'},layout:"fullscreen"};const imageRightContent=()=>lit_html.dy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <ic-button variant="secondary" appearance="light" slot="interaction"
        >Button</ic-button
      >
      <svg
        slot="secondary"
        style="width:300px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="900" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-hero>`;imageRightContent.storyName="Image right content",imageRightContent.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <svg\n        slot="secondary"\n        style="width:300px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="900" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-hero>`'},layout:"fullscreen"};const theme=()=>lit_html.dy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        aligned="center"
      >
        <div slot="interaction" style="display: flex">
          <ic-text-field
            placeholder="Filter display"
            label="Filter display"
            hide-label
          ></ic-text-field>
          <ic-button variant="primary" style="margin-left: var(--ic-space-md)"
            >Filter</ic-button
          >
        </div>
        <ic-card
          heading="Latest announcement"
          message="This is some example text that can be included in the card copy."
          slot="secondary"
        ></ic-card>
      </ic-hero>
      <br />
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
      </ic-button> `;theme.storyName="Theme",theme.parameters={storySource:{source:'html`<ic-theme color="rgb(27, 60, 121)"></ic-theme>\n      <ic-hero\n        heading="Hero heading"\n        subheading="Hero description. This is a Hero component, it should be used as a page heading."\n        aligned="center"\n      >\n        <div slot="interaction" style="display: flex">\n          <ic-text-field\n            placeholder="Filter display"\n            label="Filter display"\n            hide-label\n          ></ic-text-field>\n          <ic-button variant="primary" style="margin-left: var(--ic-space-md)"\n            >Filter</ic-button\n          >\n        </div>\n        <ic-card\n          heading="Latest announcement"\n          message="This is some example text that can be included in the card copy."\n          slot="secondary"\n        ></ic-card>\n      </ic-hero>\n      <br />\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'ic-theme\').color=\'rgb(27, 60, 121)\'"\n      >\n        Default theme\n      </ic-button>\n      <ic-button\n        variant="primary"\n        id="custom-btn"\n        onClick="document.querySelector(\'ic-theme\').color=\'rgb(255, 201, 60)\'"\n      >\n        Sunrise theme\n      </ic-button> `'},layout:"fullscreen"};const withBackgroundImageParallaxEffect=()=>lit_html.dy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
      <ic-top-navigation app-title="Application Name">
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
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        background-image="${example_background_namespaceObject}"
      >
        <div slot="interaction">
          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-button
            variant="secondary"
            style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-link
            href="https://google.com"
            style="margin-top: var(--ic-space-sm)"
            >Help</ic-link
          >
        </div>
      </ic-hero>
      <br />
      <ic-typography>You can scroll.</ic-typography>
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').color='rgb(27, 60, 121)'"
        style="margin-bottom:1300px"
      >
        Reset theme
      </ic-button>`;withBackgroundImageParallaxEffect.storyName="With background image (parallax effect)",withBackgroundImageParallaxEffect.parameters={storySource:{source:'html`<ic-theme color="rgb(27, 60, 121)"></ic-theme>\n      <ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <ic-hero\n        heading="Hero heading"\n        subheading="Hero description. This is a Hero component, it should be used as a page heading."\n        background-image="${image}"\n      >\n        <div slot="interaction">\n          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-button\n            variant="secondary"\n            style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-link\n            href="https://google.com"\n            style="margin-top: var(--ic-space-sm)"\n            >Help</ic-link\n          >\n        </div>\n      </ic-hero>\n      <br />\n      <ic-typography>You can scroll.</ic-typography>\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'ic-theme\').color=\'rgb(27, 60, 121)\'"\n        style="margin-bottom:1300px"\n      >\n        Reset theme\n      </ic-button>`'},layout:"fullscreen"};const withBackgroundImageNoParallaxEffect=()=>lit_html.dy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
      <ic-top-navigation app-title="Application Name">
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
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        background-image="${example_background_namespaceObject}"
        disable-background-parallax
      >
        <div slot="interaction">
          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-button
            variant="secondary"
            style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-link
            href="https://google.com"
            style="margin-top: var(--ic-space-sm)"
            >Help</ic-link
          >
        </div>
      </ic-hero>
      <br />
      <ic-typography>You can scroll.</ic-typography>
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').color='rgb(27, 60, 121)'"
        style="margin-bottom:1300px"
      >
        Reset theme
      </ic-button>`;withBackgroundImageNoParallaxEffect.storyName="With background image (no parallax effect)",withBackgroundImageNoParallaxEffect.parameters={storySource:{source:'html`<ic-theme color="rgb(27, 60, 121)"></ic-theme>\n      <ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <ic-hero\n        heading="Hero heading"\n        subheading="Hero description. This is a Hero component, it should be used as a page heading."\n        background-image="${image}"\n        disable-background-parallax\n      >\n        <div slot="interaction">\n          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-button\n            variant="secondary"\n            style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-link\n            href="https://google.com"\n            style="margin-top: var(--ic-space-sm)"\n            >Help</ic-link\n          >\n        </div>\n      </ic-hero>\n      <br />\n      <ic-typography>You can scroll.</ic-typography>\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'ic-theme\').color=\'rgb(27, 60, 121)\'"\n        style="margin-bottom:1300px"\n      >\n        Reset theme\n      </ic-button>`'},layout:"fullscreen"};const componentMeta={title:"Web Components/Hero",tags:["stories-mdx"],includeStories:["leftAligned","centerAligned","longHeading","fullWidth","contentCenterAligned","small","deprecatedSmall","secondaryHeading","searchBarInteraction","cardRightContent","imageRightContent","theme","withBackgroundImageParallaxEffect","withBackgroundImageNoParallaxEffect"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_hero_stories=componentMeta,__namedExportsOrder=["leftAligned","centerAligned","longHeading","fullWidth","contentCenterAligned","small","deprecatedSmall","secondaryHeading","searchBarInteraction","cardRightContent","imageRightContent","theme","withBackgroundImageParallaxEffect","withBackgroundImageNoParallaxEffect"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-hero-ic-hero-stories-mdx.c7bf9437.iframe.bundle.js.map