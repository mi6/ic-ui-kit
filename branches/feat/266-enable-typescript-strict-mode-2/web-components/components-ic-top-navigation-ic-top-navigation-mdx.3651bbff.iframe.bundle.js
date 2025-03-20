(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2069],{"./src/components/ic-top-navigation/ic-top-navigation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-top-navigation\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute                  | Description                                                                                                                                                    | Type                                 | Default          |\n| ------------------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------- |\n| `appTitle`               | `app-title`                | The app title to be displayed. This is required, unless a slotted app title link is used.                                                                      | `string`                             | `undefined`      |\n| `contentAligned`         | `content-aligned`          | The alignment of the top navigation content.                                                                                                                   | `"center" \\| "full-width" \\| "left"` | `"full-width"`   |\n| `customMobileBreakpoint` | `custom-mobile-breakpoint` | Can set a custom breakpoint for the top navigation to switch to mobile mode. Must be one of our specified breakpoints in px: `0`, `576`, `768`, `992`, `1200`. | `0 \\| 1200 \\| 576 \\| 768 \\| 992`     | `DEVICE_SIZES.L` |\n| `href`                   | `href`                     | The URL to navigate to when the app title is clicked.                                                                                                          | `string`                             | `"/"`            |\n| `inline`                 | `inline`                   | If `true`, the flyout navigation menu on small devices will be contained by the parent element.                                                                | `boolean`                            | `false`          |\n| `shortAppTitle`          | `short-app-title`          | The short title of the app to be displayed at small screen sizes in place of the app title.                                                                    | `string`                             | `""`             |\n| `status`                 | `status`                   | The status info to be displayed.                                                                                                                               | `string`                             | `""`             |\n| `theme`                  | `theme`                    | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                        | `"dark" \\| "inherit" \\| "light"`     | `"inherit"`      |\n| `version`                | `version`                  | The version info to be displayed.                                                                                                                              | `string`                             | `""`             |\n\n\n## Events\n\n| Event             | Description                                 | Type                             |\n| ----------------- | ------------------------------------------- | -------------------------------- |\n| `icTopNavResized` | Emitted when the top navigation is resized. | `CustomEvent<{ size: number; }>` |\n\n\n## Slots\n\n| Slot                | Description                                                                                                             |\n| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |\n| `"app-icon"`        | Content will be rendered to left of app title. Anything that is slotted here will be hidden from screen readers.        |\n| `"app-title"`       | Handle routing by nesting a route in the app title.                                                                     |\n| `"buttons"`         | Content will be rendered to right of search bar.                                                                        |\n| `"navigation"`      | Content will be rendered in navigation panel.                                                                           |\n| `"search"`          | Content will be rendered in search area to left of buttons.                                                             |\n| `"short-app-title"` | Handle routing by nesting a route in the short app title (to be displayed in place of app title on small screen sizes). |\n| `"toggle-icon"`     | Icon to be displayed on the button to toggle search slot content on smaller devices                                     |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-section-container](../ic-section-container)\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n- [ic-horizontal-scroll](../ic-horizontal-scroll)\n- [ic-navigation-menu](../ic-navigation-menu)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-top-navigation --\x3e ic-section-container\n  ic-top-navigation --\x3e ic-typography\n  ic-top-navigation --\x3e ic-button\n  ic-top-navigation --\x3e ic-horizontal-scroll\n  ic-top-navigation --\x3e ic-navigation-menu\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-horizontal-scroll --\x3e ic-button\n  ic-navigation-menu --\x3e ic-button\n  ic-navigation-menu --\x3e ic-typography\n  style ic-top-navigation fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_navigation_button_readme_namespaceObject='# ic-navigation-button\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute        | Description                                                                                                                             | Type                                                                                                                                                                                     | Default     |\n| -------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `download`           | `download`       | If `true`, the user can save the linked URL instead of navigating to it.                                                                | `boolean \\| string`                                                                                                                                                                      | `false`     |\n| `href`               | `href`           | The URL that the link points to. This will render the button as an "a" tag.                                                             | `string`                                                                                                                                                                                 | `undefined` |\n| `hreflang`           | `hreflang`       | The human language of the linked URL.                                                                                                   | `string`                                                                                                                                                                                 | `undefined` |\n| `label` _(required)_ | `label`          | The label info to display.                                                                                                              | `string`                                                                                                                                                                                 | `undefined` |\n| `referrerpolicy`     | `referrerpolicy` | How much of the referrer to send when following the link.                                                                               | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`                | `rel`            | The relationship of the linked URL as space-separated link types.                                                                       | `string`                                                                                                                                                                                 | `undefined` |\n| `target`             | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                     | `string`                                                                                                                                                                                 | `undefined` |\n| `theme`              | `theme`          | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"`                                                                                                                                                         | `"inherit"` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the native `button`.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot      | Description                                             |\n| --------- | ------------------------------------------------------- |\n| `"badge"` | Badge component overlaying the top right of the button. |\n| `"icon"`  | Content will be placed to the left of the button label. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-navigation-button --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-navigation-button fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_navigation_item_readme_namespaceObject='# ic-navigation-item\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                                                             | Type                                                                                                                                                                                     | Default     |\n| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `download`       | `download`       | If `true`, the user can save the linked URL instead of navigating to it.                                                                | `boolean \\| string`                                                                                                                                                                      | `false`     |\n| `href`           | `href`           | The destination of the navigation item.                                                                                                 | `string`                                                                                                                                                                                 | `""`        |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                                                                   | `string`                                                                                                                                                                                 | `undefined` |\n| `label`          | `label`          | The label of the navigation item.                                                                                                       | `string`                                                                                                                                                                                 | `undefined` |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                                                               | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                                                       | `string`                                                                                                                                                                                 | `undefined` |\n| `selected`       | `selected`       | If `true`, the navigation item will be set in a selected state.                                                                         | `boolean`                                                                                                                                                                                | `false`     |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                     | `string`                                                                                                                                                                                 | `undefined` |\n| `theme`          | `theme`          | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"`                                                                                                                                                         | `"inherit"` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the nav item.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot      | Description                                                                                                                                       |\n| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `"badge"` | Badge component overlaying the top right of the icon.                                                                                             |\n| `"icon"`  | Content will be displayed to the left of the label for expanded navigation items, and in replacement of the label for collapsed navigation items. |\n\n\n## Shadow Parts\n\n| Part     | Description                         |\n| -------- | ----------------------------------- |\n| `"link"` | The `<a>` within ic-navigation-item |\n\n\n## CSS Custom Properties\n\n| Name                           | Description                |\n| ------------------------------ | -------------------------- |\n| `--ic-z-index-navigation-item` | z-index of navigation item |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-tooltip](../ic-tooltip)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-navigation-item --\x3e ic-typography\n  ic-navigation-item --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-navigation-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_navigation_group_readme_namespaceObject='# ic-navigation-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute    | Description                                                                                                                             | Type                             | Default     |\n| -------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |\n| `expandable`         | `expandable` | If `true`, the group will be expandable in the side menu.                                                                               | `boolean`                        | `false`     |\n| `label` _(required)_ | `label`      | The label to display on the group.                                                                                                      | `string`                         | `undefined` |\n| `theme`              | `theme`      | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"` | `"inherit"` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the nav item.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## CSS Custom Properties\n\n| Name                           | Description                      |\n| ------------------------------ | -------------------------------- |\n| `--ic-z-index-navigation-item` | z-index of navigation group item |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-navigation-group --\x3e ic-typography\n  style ic-navigation-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_top_navigation_stories=__webpack_require__("./src/components/ic-top-navigation/ic-top-navigation.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_top_navigation_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject+ic_navigation_item_readme_namespaceObject+ic_navigation_group_readme_namespaceObject+ic_navigation_button_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);