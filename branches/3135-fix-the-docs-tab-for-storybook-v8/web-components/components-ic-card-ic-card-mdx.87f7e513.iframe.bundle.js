(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7525],{"./src/components/ic-card/ic-card.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-card\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                                                                 | Type                                                                                                                                                                                     | Default     |\n| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `clickable`      | `clickable`      | If `true`, the card will be a clickable variant, instead of static.                                                                         | `boolean`                                                                                                                                                                                | `false`     |\n| `disabled`       | `disabled`       | If `true`, the card will be disabled if it is clickable.                                                                                    | `boolean`                                                                                                                                                                                | `false`     |\n| `expandable`     | `expandable`     | If `true`, the card will have an expandable area and expansion toggle button.                                                               | `boolean`                                                                                                                                                                                | `false`     |\n| `fullWidth`      | `full-width`     | If `true`, the card will fill the width of the container.                                                                                   | `boolean`                                                                                                                                                                                | `false`     |\n| `heading`        | `heading`        | The heading for the card. This is required, unless a slotted heading is used.                                                               | `string`                                                                                                                                                                                 | `undefined` |\n| `href`           | `href`           | The URL that the clickable card link points to. If set, the clickable card will render as an "a" tag, otherwise it will render as a button. | `string`                                                                                                                                                                                 | `undefined` |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                                                                       | `string`                                                                                                                                                                                 | `""`        |\n| `message`        | `message`        | The main body message of the card.                                                                                                          | `string`                                                                                                                                                                                 | `""`        |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                                                                   | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                                                           | `string`                                                                                                                                                                                 | `undefined` |\n| `subheading`     | `subheading`     | The subheading for the card.                                                                                                                | `string`                                                                                                                                                                                 | `undefined` |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                         | `string`                                                                                                                                                                                 | `undefined` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the card.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot                     | Description                                                                               |\n| ------------------------ | ----------------------------------------------------------------------------------------- |\n| `"adornment"`            | Content will be placed below the card subheading.                                         |\n| `"badge"`                | Badge component overlaying the top right of the card.                                     |\n| `"expanded-content"`     | Content will be placed below the interaction controls but will not initially be rendered. |\n| `"heading"`              | Content will be placed at the top of the card to the right of the icon.                   |\n| `"icon"`                 | Content will be placed to the left of the card heading.                                   |\n| `"image-mid"`            | Content will be placed below the card heading section.                                    |\n| `"image-top"`            | Content will be placed at the top of the card above all other content.                    |\n| `"interaction-button"`   | Content will be placed in the top right corner of the heading section.                    |\n| `"interaction-controls"` | Content will be placed below the card message.                                            |\n| `"message"`              | Content will be placed in the main body of the card.                                      |\n| `"subheading"`           | Content will be placed below the card heading.                                            |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-tooltip](../ic-tooltip)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-card --\x3e ic-typography\n  ic-card --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-card fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_card_stories=__webpack_require__("./src/components/ic-card/ic-card.stories.js");function _createMdxContent(props){const _components={h3:"h3",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_card_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"heading",children:"Heading"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.Heading})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.Icon})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"message",children:"Message"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.Message})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-subheading",children:"With subheading"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.WithSubheading})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-heading-message-and-subheading",children:"Slotted heading, message, and subheading"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.SlottedHeadingMessageAndSubheading})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-badge",children:"With badge"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.WithBadge})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-interaction-button",children:"With interaction button"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.WithInteractionButton})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"adornment",children:"Adornment"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.Adornment})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"top-image",children:"Top image"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.TopImage})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"middle-image",children:"Middle image"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.MiddleImage})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"interaction-controls",children:"Interaction controls"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.InteractionControls})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-width",children:"Custom width"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.CustomWidth})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"additional-height",children:"Additional height"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.AdditionalHeight})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"expandable",children:"Expandable"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.Expandable})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"clickable-link",children:"Clickable link"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.ClickableLink})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"clickable-button",children:"Clickable button"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.ClickableButton})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.Disabled})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.FullWidth})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"wrapped-by-link",children:"Wrapped by link"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.WrappedByLink})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_card_stories.Playground})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);