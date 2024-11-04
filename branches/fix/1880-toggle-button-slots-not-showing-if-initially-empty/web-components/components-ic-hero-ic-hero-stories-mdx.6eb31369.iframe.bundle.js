/*! For license information please see components-ic-hero-ic-hero-stories-mdx.6eb31369.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1801],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-hero/ic-hero.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,cardRightContent:()=>cardRightContent,centerAligned:()=>centerAligned,contentCenterAligned:()=>contentCenterAligned,default:()=>ic_hero_stories,deprecatedSmall:()=>deprecatedSmall,fullWidth:()=>fullWidth,imageRightContent:()=>imageRightContent,leftAligned:()=>leftAligned,longHeading:()=>longHeading,searchBarInteraction:()=>searchBarInteraction,secondaryHeading:()=>secondaryHeading,slottedHeadingAndSubheading:()=>slottedHeadingAndSubheading,small:()=>small,theme:()=>theme,withBackgroundImageNoParallaxEffect:()=>withBackgroundImageNoParallaxEffect,withBackgroundImageParallaxEffect:()=>withBackgroundImageParallaxEffect});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-hero\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                    | Attribute                     | Description                                                                                                                         | Type                                 | Default     |\n| --------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |\n| `aligned`                   | `aligned`                     | The alignment of the hero.                                                                                                          | `"center" \\| "full-width" \\| "left"` | `"left"`    |\n| `backgroundImage`           | `background-image`            | The optional background image.                                                                                                      | `string`                             | `undefined` |\n| `contentAligned`            | `content-aligned`             | The alignment of the hero content.                                                                                                  | `"center" \\| "left"`                 | `"left"`    |\n| `disableBackgroundParallax` | `disable-background-parallax` | If `true`, the background image (if set) will not scroll using a parallax effect.                                                   | `boolean`                            | `false`     |\n| `heading`                   | `heading`                     | The heading of the hero.                                                                                                            | `string`                             | `undefined` |\n| `secondaryHeading`          | `secondary-heading`           | The optional secondary heading, replaced by slotted right content.                                                                  | `string`                             | `undefined` |\n| `secondarySubheading`       | `secondary-subheading`        | The optional secondary subheading, replaced by slotted right content.                                                               | `string`                             | `undefined` |\n| `size`                      | `size`                        | The size of the hero component.                                                                                                     | `"default" \\| "small"`               | `"default"` |\n| `small`                     | `small`                       | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/> | `boolean`                            | `false`     |\n| `subheading`                | `subheading`                  | The description for the hero.                                                                                                       | `string`                             | `undefined` |\n\n\n## Slots\n\n| Slot            | Description                                                                   |\n| --------------- | ----------------------------------------------------------------------------- |\n| `"heading"`     | Content will be rendered in the title area, in place of the heading.          |\n| `"interaction"` | Content will be rendered in the interaction area, adjacent to the title area. |\n| `"secondary"`   | Content will be rendered in the secondary content area.                       |\n| `"subheading"`  | Content will be rendered in the title area, in place of the subheading.       |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-section-container](../ic-section-container)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-hero --\x3e ic-section-container\n  ic-hero --\x3e ic-typography\n  style ic-hero fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',example_background_namespaceObject=__webpack_require__.p+"static/media/example-background.3bf84892.png";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Hero",component:"ic-hero"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-aligned",children:"Left aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Left aligned",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero
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
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"center-aligned",children:"Center aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Center aligned",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero
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
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-heading-and-subheading",children:"Slotted heading and subheading"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted heading and subheading",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero>
      <ic-typography slot="heading" variant="h1">Slotted heading</ic-typography>
      <ic-typography slot="subheading">Slotted subheading</ic-typography>
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
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"long-heading",children:"Long heading"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Long heading",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero
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
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Full width",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero
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
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"content-center-aligned",children:"Content center aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Content center aligned",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero
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
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Small",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero
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
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Deprecated - small",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero
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
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"secondary-heading",children:"Secondary heading"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Secondary heading",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero
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
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"search-bar-interaction",children:"Search bar interaction"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Search bar interaction",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-search-bar
        slot="interaction"
        full-width
        style="max-width: 322px;"
      ></ic-search-bar>
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"card-right-content",children:"Card right content"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Card right content",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero
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
      <ic-card
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      ></ic-card>
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"image-right-content",children:"Image right content"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Image right content",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-hero
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
    </ic-hero>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"theme",children:"Theme"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Theme",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
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
      </ic-button> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-background-image-parallax-effect",children:"With background image (parallax effect)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With background image (parallax effect)",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
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
      </ic-button>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-background-image-no-parallax-effect",children:"With background image (no parallax effect)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With background image (no parallax effect)",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
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
      </ic-button>`})})]})}const leftAligned=()=>lit_html.qy`<ic-hero
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
    </ic-hero>`;leftAligned.storyName="Left aligned",leftAligned.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-link\n        href="https://google.com"\n        slot="interaction"\n        style="margin-top: var(--ic-space-sm)"\n        >Help</ic-link\n      >\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const centerAligned=()=>lit_html.qy`<ic-hero
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
    </ic-hero>`;centerAligned.storyName="Center aligned",centerAligned.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-link\n        href="https://google.com"\n        slot="interaction"\n        style="margin-top: var(--ic-space-sm)"\n        >Help</ic-link\n      >\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const slottedHeadingAndSubheading=()=>lit_html.qy`<ic-hero>
      <ic-typography slot="heading" variant="h1">Slotted heading</ic-typography>
      <ic-typography slot="subheading">Slotted subheading</ic-typography>
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
    </ic-hero>`;slottedHeadingAndSubheading.storyName="Slotted heading and subheading",slottedHeadingAndSubheading.parameters={storySource:{source:'html`<ic-hero>\n      <ic-typography slot="heading" variant="h1">Slotted heading</ic-typography>\n      <ic-typography slot="subheading">Slotted subheading</ic-typography>\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-link\n        href="https://google.com"\n        slot="interaction"\n        style="margin-top: var(--ic-space-sm)"\n        >Help</ic-link\n      >\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const longHeading=()=>lit_html.qy`<ic-hero
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
    </ic-hero>`;longHeading.storyName="Long heading",longHeading.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading. This is a Hero component, it should be used as a page heading."\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-link\n        href="https://google.com"\n        slot="interaction"\n        style="margin-top: var(--ic-space-sm)"\n        >Help</ic-link\n      >\n      <ic-card\n        heading="Latest announcement"\n        message="This is some example text that can be included in the card copy."\n        slot="secondary"\n      ></ic-card>\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const fullWidth=()=>lit_html.qy`<ic-hero
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
    </ic-hero>`;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="full-width"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const contentCenterAligned=()=>lit_html.qy`<ic-hero
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
    </ic-hero>`;contentCenterAligned.storyName="Content center aligned",contentCenterAligned.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n      content-aligned="center"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const small=()=>lit_html.qy`<ic-hero
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
    </ic-hero>`;small.storyName="Small",small.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n      size="small"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const deprecatedSmall=()=>lit_html.qy`<ic-hero
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
    </ic-hero>`;deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n      small\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const secondaryHeading=()=>lit_html.qy`<ic-hero
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
    </ic-hero>`;secondaryHeading.storyName="Secondary heading",secondaryHeading.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      secondary-heading="Secondary Heading"\n      secondary-subheading="This is a secondary description."\n      aligned="center"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const searchBarInteraction=()=>lit_html.qy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-search-bar
        slot="interaction"
        full-width
        style="max-width: 322px;"
      ></ic-search-bar>
    </ic-hero>`;searchBarInteraction.storyName="Search bar interaction",searchBarInteraction.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-search-bar\n        slot="interaction"\n        full-width\n        style="max-width: 322px;"\n      ></ic-search-bar>\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const cardRightContent=()=>lit_html.qy`<ic-hero
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
      <ic-card
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      ></ic-card>
    </ic-hero>`;cardRightContent.storyName="Card right content",cardRightContent.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="full-width"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-card\n        heading="Latest announcement"\n        message="This is some example text that can be included in the card copy."\n        slot="secondary"\n      ></ic-card>\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const imageRightContent=()=>lit_html.qy`<ic-hero
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
    </ic-hero>`;imageRightContent.storyName="Image right content",imageRightContent.parameters={storySource:{source:'html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-button variant="primary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <ic-button variant="secondary" appearance="light" slot="interaction"\n        >Button</ic-button\n      >\n      <svg\n        slot="secondary"\n        style="width:300px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="900" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-hero>`'},layout:"fullscreen",loki:{skip:!0}};const theme=()=>lit_html.qy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
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
      </ic-button> `;theme.storyName="Theme",theme.parameters={storySource:{source:'html`<ic-theme color="rgb(27, 60, 121)"></ic-theme>\n      <ic-hero\n        heading="Hero heading"\n        subheading="Hero description. This is a Hero component, it should be used as a page heading."\n        aligned="center"\n      >\n        <div slot="interaction" style="display: flex">\n          <ic-text-field\n            placeholder="Filter display"\n            label="Filter display"\n            hide-label\n          ></ic-text-field>\n          <ic-button variant="primary" style="margin-left: var(--ic-space-md)"\n            >Filter</ic-button\n          >\n        </div>\n        <ic-card\n          heading="Latest announcement"\n          message="This is some example text that can be included in the card copy."\n          slot="secondary"\n        ></ic-card>\n      </ic-hero>\n      <br />\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'ic-theme\').color=\'rgb(27, 60, 121)\'"\n      >\n        Default theme\n      </ic-button>\n      <ic-button\n        variant="primary"\n        id="custom-btn"\n        onClick="document.querySelector(\'ic-theme\').color=\'rgb(255, 201, 60)\'"\n      >\n        Sunrise theme\n      </ic-button> `'},layout:"fullscreen",loki:{skip:!0}};const withBackgroundImageParallaxEffect=()=>lit_html.qy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
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
      </ic-button>`;withBackgroundImageParallaxEffect.storyName="With background image (parallax effect)",withBackgroundImageParallaxEffect.parameters={storySource:{source:'html`<ic-theme color="rgb(27, 60, 121)"></ic-theme>\n      <ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <ic-hero\n        heading="Hero heading"\n        subheading="Hero description. This is a Hero component, it should be used as a page heading."\n        background-image="${image}"\n      >\n        <div slot="interaction">\n          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-button\n            variant="secondary"\n            style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-link\n            href="https://google.com"\n            style="margin-top: var(--ic-space-sm)"\n            >Help</ic-link\n          >\n        </div>\n      </ic-hero>\n      <br />\n      <ic-typography>You can scroll.</ic-typography>\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'ic-theme\').color=\'rgb(27, 60, 121)\'"\n        style="margin-bottom:1300px"\n      >\n        Reset theme\n      </ic-button>`'},layout:"fullscreen",loki:{skip:!0}};const withBackgroundImageNoParallaxEffect=()=>lit_html.qy`<ic-theme color="rgb(27, 60, 121)"></ic-theme>
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
      </ic-button>`;withBackgroundImageNoParallaxEffect.storyName="With background image (no parallax effect)",withBackgroundImageNoParallaxEffect.parameters={storySource:{source:'html`<ic-theme color="rgb(27, 60, 121)"></ic-theme>\n      <ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <ic-hero\n        heading="Hero heading"\n        subheading="Hero description. This is a Hero component, it should be used as a page heading."\n        background-image="${image}"\n        disable-background-parallax\n      >\n        <div slot="interaction">\n          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-button\n            variant="secondary"\n            style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-link\n            href="https://google.com"\n            style="margin-top: var(--ic-space-sm)"\n            >Help</ic-link\n          >\n        </div>\n      </ic-hero>\n      <br />\n      <ic-typography>You can scroll.</ic-typography>\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'ic-theme\').color=\'rgb(27, 60, 121)\'"\n        style="margin-bottom:1300px"\n      >\n        Reset theme\n      </ic-button>`'},layout:"fullscreen",loki:{skip:!0}};const componentMeta={title:"Web Components/Hero",tags:["stories-mdx"],includeStories:["leftAligned","centerAligned","slottedHeadingAndSubheading","longHeading","fullWidth","contentCenterAligned","small","deprecatedSmall","secondaryHeading","searchBarInteraction","cardRightContent","imageRightContent","theme","withBackgroundImageParallaxEffect","withBackgroundImageNoParallaxEffect"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_hero_stories=componentMeta,__namedExportsOrder=["leftAligned","centerAligned","slottedHeadingAndSubheading","longHeading","fullWidth","contentCenterAligned","small","deprecatedSmall","secondaryHeading","searchBarInteraction","cardRightContent","imageRightContent","theme","withBackgroundImageParallaxEffect","withBackgroundImageNoParallaxEffect"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-hero-ic-hero-stories-mdx.6eb31369.iframe.bundle.js.map