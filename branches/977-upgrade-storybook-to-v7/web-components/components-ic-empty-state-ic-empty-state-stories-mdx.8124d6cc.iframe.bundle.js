/*! For license information please see components-ic-empty-state-ic-empty-state-stories-mdx.8124d6cc.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5981],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-empty-state/ic-empty-state.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,centreAligned:()=>centreAligned,default:()=>ic_empty_state_stories,maxLines:()=>maxLines,rightAligned:()=>rightAligned,slottedContent:()=>slottedContent,withActions:()=>withActions,withIcon:()=>withIcon,withImage:()=>withImage,withLargeImage:()=>withLargeImage,withSmallImage:()=>withSmallImage,withSubheadingAndBodyText:()=>withSubheadingAndBodyText,withinDiv:()=>withinDiv});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-empty-state\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property       | Attribute        | Description                                                    | Type                              | Default     |\n| -------------- | ---------------- | -------------------------------------------------------------- | --------------------------------- | ----------- |\n| `aligned`      | `aligned`        | The alignment of the empty state container.                    | `"center" \\| "left" \\| "right"`   | `"left"`    |\n| `body`         | `body`           | The body text rendered in the empty state container.           | `string`                          | `undefined` |\n| `bodyMaxLines` | `body-max-lines` | The number of lines of body text to display before truncating. | `number`                          | `undefined` |\n| `heading`      | `heading`        | The title rendered in the empty state container.               | `string`                          | `undefined` |\n| `imageSize`    | `image-size`     | The size of the image or icon used in the image slot.          | `"default" \\| "large" \\| "small"` | `"default"` |\n| `subheading`   | `subheading`     | The subtitle rendered in the empty state container.            | `string`                          | `undefined` |\n\n\n## Slots\n\n| Slot           | Description                                               |\n| -------------- | --------------------------------------------------------- |\n| `"actions"`    | Content is placed at the bottom below all other content.  |\n| `"body"`       | Content will be rendered in place of the body prop.       |\n| `"heading"`    | Content will be rendered in place of the heading prop.    |\n| `"image"`      | Content is placed at the top above all other content.     |\n| `"subheading"` | Content will be rendered in place of the subheading prop. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-empty-state --\x3e ic-typography\n  style ic-empty-state fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Empty state",component:"ic-empty-state"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-subheading-and-body-text",children:"With subheading and body text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With subheading and body text",children:lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    ></ic-empty-state>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-actions",children:"With actions"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With actions",children:lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-image",children:"With image"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With image",children:lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <svg
        slot="image"
        height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
    ></ic-empty-state>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-small-image",children:"With small image"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With small image",children:lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      image-size="small"
    >
      <svg
        slot="image"
        height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
    ></ic-empty-state>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-large-image",children:"With large image"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With large image",children:lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      image-size="large"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
    ></ic-empty-state>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icon",children:"With icon"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With icon",children:lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <svg
        slot="image"
        aria-labelledby="warning-title"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#D07932"
      >
        <title id="warning-title">Warning</title>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
    </ic-empty-state>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"centre-aligned",children:"Centre aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Centre aligned",children:lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      aligned="center"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"right-aligned",children:"Right aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Right aligned",children:lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      aligned="right"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"max-lines",children:"Max lines"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Max lines",children:lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body of text that is truncated to two lines. Click the 'See more' link to expand the text, then click 'See less' to truncate the text once more!
Dripper caramelization java saucer grounds galão, mocha, and robusta kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait. Con panna, cup, cream, body americano affogato cup espresso, rich milk seasonal saucer grinder spoon that cultivar strong redeye frappuccino barista extraction redeye mazagran. Grounds, french press dripper organic and foam id saucer, crema, black rich dark, grounds breve coffee steamed caramelization percolator."
      body-max-lines="2"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-content",children:"Slotted content"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Slotted content",children:lit_html.dy`<ic-empty-state>
      <ic-typography slot="heading" variant="h4">
        Empty state title
      </ic-typography>
      <ic-typography slot="subheading" variant="subtitle-small">
        Empty state subtitle
      </ic-typography>
      <ic-typography slot="body"> Body text for empty state. </ic-typography>
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"within-div",children:"Within div"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Within div",children:lit_html.dy`<div style="width:357px;border:1px solid black;background:#D3D3D3;">
      <ic-empty-state
        heading="Empty state title"
        subheading="Empty state subtitle"
        body="Body text for empty state."
      >
        <svg
          slot="image"
          style="height:326px;width:326px;"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
          <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
        ><ic-button slot="actions">Action</ic-button>
        <ic-link href="/" slot="actions"
          >Standalone link</ic-link
        ></ic-empty-state
      >
    </div>`})})]})}const withSubheadingAndBodyText=()=>lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    ></ic-empty-state>`;withSubheadingAndBodyText.storyName="With subheading and body text",withSubheadingAndBodyText.parameters={storySource:{source:'html`<ic-empty-state\n      heading="Empty state title"\n      subheading="Empty state subtitle"\n      body="Body text for the empty state."\n    ></ic-empty-state>`'}};const withActions=()=>lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`;withActions.storyName="With actions",withActions.parameters={storySource:{source:'html`<ic-empty-state\n      heading="Empty state title"\n      subheading="Empty state subtitle"\n      body="Body text for the empty state."\n    >\n      <ic-button slot="actions">Action</ic-button>\n      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state\n    >`'}};const withImage=()=>lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <svg
        slot="image"
        height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
    ></ic-empty-state>`;withImage.storyName="With image",withImage.parameters={storySource:{source:'html`<ic-empty-state\n      heading="Empty state title"\n      subheading="Empty state subtitle"\n      body="Body text for the empty state."\n    >\n      <svg\n        slot="image"\n        height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg\n    ></ic-empty-state>`'}};const withSmallImage=()=>lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      image-size="small"
    >
      <svg
        slot="image"
        height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
    ></ic-empty-state>`;withSmallImage.storyName="With small image",withSmallImage.parameters={storySource:{source:'html`<ic-empty-state\n      heading="Empty state title"\n      subheading="Empty state subtitle"\n      body="Body text for empty state."\n      image-size="small"\n    >\n      <svg\n        slot="image"\n        height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg\n    ></ic-empty-state>`'}};const withLargeImage=()=>lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      image-size="large"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
    ></ic-empty-state>`;withLargeImage.storyName="With large image",withLargeImage.parameters={storySource:{source:'html`<ic-empty-state\n      heading="Empty state title"\n      subheading="Empty state subtitle"\n      body="Body text for empty state."\n      image-size="large"\n    >\n      <svg\n        slot="image"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg\n    ></ic-empty-state>`'}};const withIcon=()=>lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <svg
        slot="image"
        aria-labelledby="warning-title"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#D07932"
      >
        <title id="warning-title">Warning</title>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
    </ic-empty-state>`;withIcon.storyName="With icon",withIcon.parameters={storySource:{source:'html`<ic-empty-state\n      heading="Empty state title"\n      subheading="Empty state subtitle"\n      body="Body text for the empty state."\n    >\n      <svg\n        slot="image"\n        aria-labelledby="warning-title"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="#D07932"\n      >\n        <title id="warning-title">Warning</title>\n        <path d="M0 0h24v24H0z" fill="none" />\n        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />\n      </svg>\n    </ic-empty-state>`'}};const centreAligned=()=>lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      aligned="center"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`;centreAligned.storyName="Centre aligned",centreAligned.parameters={storySource:{source:'html`<ic-empty-state\n      heading="Empty state title"\n      subheading="Empty state subtitle"\n      body="Body text for empty state."\n      aligned="center"\n    >\n      <svg\n        slot="image"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg\n      ><ic-button slot="actions">Action</ic-button>\n      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state\n    >`'}};const rightAligned=()=>lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      aligned="right"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`;rightAligned.storyName="Right aligned",rightAligned.parameters={storySource:{source:'html`<ic-empty-state\n      heading="Empty state title"\n      subheading="Empty state subtitle"\n      body="Body text for empty state."\n      aligned="right"\n    >\n      <svg\n        slot="image"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg\n      ><ic-button slot="actions">Action</ic-button>\n      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state\n    >`'}};const maxLines=()=>lit_html.dy`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body of text that is truncated to two lines. Click the 'See more' link to expand the text, then click 'See less' to truncate the text once more!
Dripper caramelization java saucer grounds galão, mocha, and robusta kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait. Con panna, cup, cream, body americano affogato cup espresso, rich milk seasonal saucer grinder spoon that cultivar strong redeye frappuccino barista extraction redeye mazagran. Grounds, french press dripper organic and foam id saucer, crema, black rich dark, grounds breve coffee steamed caramelization percolator."
      body-max-lines="2"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`;maxLines.storyName="Max lines",maxLines.parameters={storySource:{source:'html`<ic-empty-state\n      heading="Empty state title"\n      subheading="Empty state subtitle"\n      body="Body of text that is truncated to two lines. Click the \'See more\' link to expand the text, then click \'See less\' to truncate the text once more!\nDripper caramelization java saucer grounds galão, mocha, and robusta kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait. Con panna, cup, cream, body americano affogato cup espresso, rich milk seasonal saucer grinder spoon that cultivar strong redeye frappuccino barista extraction redeye mazagran. Grounds, french press dripper organic and foam id saucer, crema, black rich dark, grounds breve coffee steamed caramelization percolator."\n      body-max-lines="2"\n    >\n      <svg\n        slot="image"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg\n      ><ic-button slot="actions">Action</ic-button>\n      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state\n    >`'}};const slottedContent=()=>lit_html.dy`<ic-empty-state>
      <ic-typography slot="heading" variant="h4">
        Empty state title
      </ic-typography>
      <ic-typography slot="subheading" variant="subtitle-small">
        Empty state subtitle
      </ic-typography>
      <ic-typography slot="body"> Body text for empty state. </ic-typography>
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`;slottedContent.storyName="Slotted content",slottedContent.parameters={storySource:{source:'html`<ic-empty-state>\n      <ic-typography slot="heading" variant="h4">\n        Empty state title\n      </ic-typography>\n      <ic-typography slot="subheading" variant="subtitle-small">\n        Empty state subtitle\n      </ic-typography>\n      <ic-typography slot="body"> Body text for empty state. </ic-typography>\n      <svg\n        slot="image"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg\n      ><ic-button slot="actions">Action</ic-button>\n      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state\n    >`'}};const withinDiv=()=>lit_html.dy`<div style="width:357px;border:1px solid black;background:#D3D3D3;">
      <ic-empty-state
        heading="Empty state title"
        subheading="Empty state subtitle"
        body="Body text for empty state."
      >
        <svg
          slot="image"
          style="height:326px;width:326px;"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
          <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
        ><ic-button slot="actions">Action</ic-button>
        <ic-link href="/" slot="actions"
          >Standalone link</ic-link
        ></ic-empty-state
      >
    </div>`;withinDiv.storyName="Within div",withinDiv.parameters={storySource:{source:'html`<div style="width:357px;border:1px solid black;background:#D3D3D3;">\n      <ic-empty-state\n        heading="Empty state title"\n        subheading="Empty state subtitle"\n        body="Body text for empty state."\n      >\n        <svg\n          slot="image"\n          style="height:326px;width:326px;"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg\n        ><ic-button slot="actions">Action</ic-button>\n        <ic-link href="/" slot="actions"\n          >Standalone link</ic-link\n        ></ic-empty-state\n      >\n    </div>`'}};const componentMeta={title:"Web Components/Empty state",tags:["stories-mdx"],includeStories:["withSubheadingAndBodyText","withActions","withImage","withSmallImage","withLargeImage","withIcon","centreAligned","rightAligned","maxLines","slottedContent","withinDiv"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_empty_state_stories=componentMeta,__namedExportsOrder=["withSubheadingAndBodyText","withActions","withImage","withSmallImage","withLargeImage","withIcon","centreAligned","rightAligned","maxLines","slottedContent","withinDiv"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-empty-state-ic-empty-state-stories-mdx.8124d6cc.iframe.bundle.js.map