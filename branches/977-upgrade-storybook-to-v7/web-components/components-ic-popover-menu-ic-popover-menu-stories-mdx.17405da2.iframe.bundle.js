/*! For license information please see components-ic-popover-menu-ic-popover-menu-stories-mdx.17405da2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4700],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-popover-menu/ic-popover-menu.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_popover_menu_stories,defaultStory:()=>defaultStory,leftPlacement:()=>leftPlacement,maxHeight:()=>maxHeight,multiplePopoversOnPage:()=>multiplePopoversOnPage,topPlacement:()=>topPlacement});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject="# ic-popover-menu\n\nThis is a wrapper component to be placed around one or more ic-menu-item components.\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property    | Attribute    | Description                                                                                                     | Type      | Default     |\n| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ----------- |\n| `anchor`    | `anchor`     | The ID of the element the popover menu will anchor itself to. This is required unless the popover is a submenu. | `string`  | `undefined` |\n| `open`      | `open`       | If `true`, the popover menu will be displayed.                                                                  | `boolean` | `undefined` |\n| `submenuId` | `submenu-id` | The unique identifier for a popover submenu.                                                                    | `string`  | `undefined` |\n\n\n## CSS Custom Properties\n\n| Name                   | Description                         |\n| ---------------------- | ----------------------------------- |\n| `--ic-z-index-popover` | z-index of popover menu.            |\n| `--max-height`         | Maximum height of the popover menu. |\n| `--popover-width`      | Default width of the popover menu.  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-menu-item](../ic-menu-item)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-popover-menu --\x3e ic-menu-item\n  ic-popover-menu --\x3e ic-typography\n  ic-menu-item --\x3e ic-typography\n  ic-menu-item --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-popover-menu fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n",ic_menu_item_readme_namespaceObject='# ic-menu-item\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute             | Description                                                                                                                                  | Type                                                                                                                                                                                     | Default     |\n| -------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `description`        | `description`         | The description displayed in the menu item, below the label.                                                                                 | `string`                                                                                                                                                                                 | `undefined` |\n| `disabled`           | `disabled`            | If `true`, the menu item will be in disabled state.                                                                                          | `boolean`                                                                                                                                                                                | `false`     |\n| `href`               | `href`                | The URL that the link points to. This will render the menu item as an "a" tag.                                                               | `string`                                                                                                                                                                                 | `undefined` |\n| `hreflang`           | `hreflang`            | The human language of the linked URL.                                                                                                        | `string`                                                                                                                                                                                 | `undefined` |\n| `keyboardShortcut`   | `keyboard-shortcut`   | The label describing the keyboard shortcut for a menu item\'s action.                                                                         | `string`                                                                                                                                                                                 | `undefined` |\n| `label` _(required)_ | `label`               | The label to display in the menu item.                                                                                                       | `string`                                                                                                                                                                                 | `undefined` |\n| `referrerpolicy`     | `referrerpolicy`      | How much of the referrer to send when following the link.                                                                                    | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`                | `rel`                 | The relationship of the linked URL as space-separated link types.                                                                            | `string`                                                                                                                                                                                 | `undefined` |\n| `submenuTriggerFor`  | `submenu-trigger-for` | This references the popover menu instance that the menu item is a trigger for. If this prop is set, then the variant will always be default. | `string`                                                                                                                                                                                 | `undefined` |\n| `target`             | `target`              | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                          | `string`                                                                                                                                                                                 | `undefined` |\n| `variant`            | `variant`             | The variant of the menu item.                                                                                                                | `"default" \\| "destructive" \\| "toggle"`                                                                                                                                                 | `"default"` |\n\n\n## Slots\n\n| Slot     | Description                                                |\n| -------- | ---------------------------------------------------------- |\n| `"icon"` | Content will be placed to the left of the menu item label. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-popover-menu](../ic-popover-menu)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-menu-item --\x3e ic-typography\n  ic-menu-item --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-popover-menu --\x3e ic-menu-item\n  style ic-menu-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_menu_group_readme_namespaceObject="# ic-menu-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property | Attribute | Description                                          | Type     | Default     |\n| -------- | --------- | ---------------------------------------------------- | -------- | ----------- |\n| `label`  | `label`   | The label to display as the title of the menu group. | `string` | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-menu-group --\x3e ic-typography\n  style ic-menu-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Popover menu",component:"Popover Menu"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:ic_menu_item_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:ic_menu_group_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <ic-button id="button-1" onclick="buttonClick()"
          >Show popover</ic-button
        >
        <script>
          var icPopover = document.querySelector("ic-popover-menu");
          function buttonClick() {
            icPopover.open = true;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
            <ic-menu-item
              label="Logout"
              variant="destructive"
              disabled="true"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              disabled="true"
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"max-height",children:"Max height"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Max height",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <style>
          ic-popover-menu {
            --max-height: 100px;
          }
        </style>
        <ic-button id="button-1" onclick="buttonClick()"
          >Show popover</ic-button
        >
        <script>
          var icPopover = document.querySelector("ic-popover-menu");
          function buttonClick() {
            icPopover.open = true;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-placement",children:"Left placement"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Left placement",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <div style="margin-left: 1000px">
          <ic-button id="button-1" onclick="buttonClick()"
            >Show popover</ic-button
          >
          <script>
            var icPopover = document.querySelector("ic-popover-menu");
            function buttonClick() {
              icPopover.open = true;
            }
          </script>
          <div>
            <ic-popover-menu anchor="button-1" aria-label="popover">
              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
              <ic-menu-group label="View">
                <ic-menu-item
                  label="Zoom in"
                  keyboard-shortcut="Cmd+"
                ></ic-menu-item>
                <ic-menu-item
                  label="Zoom out"
                  keyboard-shortcut="Cmd-"
                ></ic-menu-item>
              </ic-menu-group>
              <ic-menu-item
                label="Actions"
                submenu-trigger-for="abc"
              ></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc">
              <ic-menu-item label="Edit"></ic-menu-item>
              <ic-menu-item
                label="Find"
                submenu-trigger-for="abc123"
              ></ic-menu-item>
              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc123">
              <ic-menu-item
                label="Search the web"
                description="This will search the web to find the thing you are looking for."
              ></ic-menu-item>
              <ic-menu-item label="Find..."></ic-menu-item>
              <ic-menu-item label="Find icons">
                <svg
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                  />
                </svg>
              </ic-menu-item>
              <ic-menu-item
                label="Show found results"
                variant="toggle"
              ></ic-menu-item>
            </ic-popover-menu>
          </div>
        </div>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"top-placement",children:"Top placement"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Top placement",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <div style="margin-top: 540px">
          <ic-button id="button-1" onclick="buttonClick()"
            >Show popover</ic-button
          >
          <script>
            var icPopover = document.querySelector("ic-popover-menu");
            function buttonClick() {
              icPopover.open = true;
            }
          </script>
          <div>
            <ic-popover-menu anchor="button-1" aria-label="popover">
              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
              <ic-menu-group label="View">
                <ic-menu-item
                  label="Zoom in"
                  keyboard-shortcut="Cmd+"
                ></ic-menu-item>
                <ic-menu-item
                  label="Zoom out"
                  keyboard-shortcut="Cmd-"
                ></ic-menu-item>
              </ic-menu-group>
              <ic-menu-item
                label="Actions"
                submenu-trigger-for="abc"
              ></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc">
              <ic-menu-item label="Edit"></ic-menu-item>
              <ic-menu-item
                label="Find"
                submenu-trigger-for="abc123"
              ></ic-menu-item>
              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc123">
              <ic-menu-item
                label="Search the web"
                description="This will search the web to find the thing you are looking for."
              ></ic-menu-item>
              <ic-menu-item label="Find..."></ic-menu-item>
              <ic-menu-item label="Find icons">
                <svg
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                  />
                </svg>
              </ic-menu-item>
              <ic-menu-item
                label="Show found results"
                variant="toggle"
              ></ic-menu-item>
            </ic-popover-menu>
          </div>
        </div>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multiple-popovers-on-page",children:"Multiple popovers on page"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Multiple popovers on page",parameters:{loki:{skip:!0}},children:args=>lit_html.dy` <ic-link href="/">Link1</ic-link>
        <ic-button id="button-1" onclick="buttonClick(1)"
          >Show popover</ic-button
        >
        <ic-link href="/">Link2</ic-link>
        <ic-button id="button-2" onclick="buttonClick(2)"
          >Show popover 2</ic-button
        >
        <ic-link href="/">Link3</ic-link>
        <script>
          function buttonClick(pos) {
            var icPopover = document.querySelector("#popover" + pos);
            icPopover.open = true;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover" id="popover1">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
            <ic-menu-item
              label="Logout"
              variant="destructive"
              disabled="true"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              disabled="true"
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu anchor="button-2" aria-label="popover" id="popover2">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="def"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="def">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="def123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="def123">
            <ic-menu-item
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>`})})]})}const defaultStory=args=>lit_html.dy`
        <ic-button id="button-1" onclick="buttonClick()"
          >Show popover</ic-button
        >
        <script>
          var icPopover = document.querySelector("ic-popover-menu");
          function buttonClick() {
            icPopover.open = true;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
            <ic-menu-item
              label="Logout"
              variant="destructive"
              disabled="true"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              disabled="true"
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>
      `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`\n        <ic-button id="button-1" onclick="buttonClick()"\n          >Show popover</ic-button\n        >\n        <script>\n          var icPopover = document.querySelector("ic-popover-menu");\n          function buttonClick() {\n            icPopover.open = true;\n          }\n        <\/script>\n        <div>\n          <ic-popover-menu anchor="button-1" aria-label="popover">\n            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n            <ic-menu-group label="View">\n              <ic-menu-item\n                label="Zoom in"\n                keyboard-shortcut="Cmd+"\n              ></ic-menu-item>\n              <ic-menu-item\n                label="Zoom out"\n                keyboard-shortcut="Cmd-"\n              ></ic-menu-item>\n            </ic-menu-group>\n            <ic-menu-item\n              label="Actions"\n              submenu-trigger-for="abc"\n            ></ic-menu-item>\n            <ic-menu-item\n              label="Logout"\n              variant="destructive"\n              disabled="true"\n            ></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc">\n            <ic-menu-item label="Edit"></ic-menu-item>\n            <ic-menu-item\n              label="Find"\n              submenu-trigger-for="abc123"\n            ></ic-menu-item>\n            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc123">\n            <ic-menu-item\n              disabled="true"\n              label="Search the web"\n              description="This will search the web to find the thing you are looking for."\n            ></ic-menu-item>\n            <ic-menu-item label="Find..."></ic-menu-item>\n            <ic-menu-item label="Find icons">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                />\n              </svg>\n            </ic-menu-item>\n            <ic-menu-item\n              label="Show found results"\n              variant="toggle"\n            ></ic-menu-item>\n          </ic-popover-menu>\n        </div>\n      `'},loki:{skip:!0}};const maxHeight=args=>lit_html.dy`
        <style>
          ic-popover-menu {
            --max-height: 100px;
          }
        </style>
        <ic-button id="button-1" onclick="buttonClick()"
          >Show popover</ic-button
        >
        <script>
          var icPopover = document.querySelector("ic-popover-menu");
          function buttonClick() {
            icPopover.open = true;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>
      `;maxHeight.storyName="Max height",maxHeight.parameters={storySource:{source:'args => html`\n        <style>\n          ic-popover-menu {\n            --max-height: 100px;\n          }\n        </style>\n        <ic-button id="button-1" onclick="buttonClick()"\n          >Show popover</ic-button\n        >\n        <script>\n          var icPopover = document.querySelector("ic-popover-menu");\n          function buttonClick() {\n            icPopover.open = true;\n          }\n        <\/script>\n        <div>\n          <ic-popover-menu anchor="button-1" aria-label="popover">\n            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n            <ic-menu-group label="View">\n              <ic-menu-item\n                label="Zoom in"\n                keyboard-shortcut="Cmd+"\n              ></ic-menu-item>\n              <ic-menu-item\n                label="Zoom out"\n                keyboard-shortcut="Cmd-"\n              ></ic-menu-item>\n            </ic-menu-group>\n            <ic-menu-item\n              label="Actions"\n              submenu-trigger-for="abc"\n            ></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc">\n            <ic-menu-item label="Edit"></ic-menu-item>\n            <ic-menu-item\n              label="Find"\n              submenu-trigger-for="abc123"\n            ></ic-menu-item>\n            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc123">\n            <ic-menu-item\n              label="Search the web"\n              description="This will search the web to find the thing you are looking for."\n            ></ic-menu-item>\n            <ic-menu-item label="Find..."></ic-menu-item>\n            <ic-menu-item label="Find icons">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                />\n              </svg>\n            </ic-menu-item>\n            <ic-menu-item\n              label="Show found results"\n              variant="toggle"\n            ></ic-menu-item>\n          </ic-popover-menu>\n        </div>\n      `'},loki:{skip:!0}};const leftPlacement=args=>lit_html.dy`
        <div style="margin-left: 1000px">
          <ic-button id="button-1" onclick="buttonClick()"
            >Show popover</ic-button
          >
          <script>
            var icPopover = document.querySelector("ic-popover-menu");
            function buttonClick() {
              icPopover.open = true;
            }
          </script>
          <div>
            <ic-popover-menu anchor="button-1" aria-label="popover">
              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
              <ic-menu-group label="View">
                <ic-menu-item
                  label="Zoom in"
                  keyboard-shortcut="Cmd+"
                ></ic-menu-item>
                <ic-menu-item
                  label="Zoom out"
                  keyboard-shortcut="Cmd-"
                ></ic-menu-item>
              </ic-menu-group>
              <ic-menu-item
                label="Actions"
                submenu-trigger-for="abc"
              ></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc">
              <ic-menu-item label="Edit"></ic-menu-item>
              <ic-menu-item
                label="Find"
                submenu-trigger-for="abc123"
              ></ic-menu-item>
              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc123">
              <ic-menu-item
                label="Search the web"
                description="This will search the web to find the thing you are looking for."
              ></ic-menu-item>
              <ic-menu-item label="Find..."></ic-menu-item>
              <ic-menu-item label="Find icons">
                <svg
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                  />
                </svg>
              </ic-menu-item>
              <ic-menu-item
                label="Show found results"
                variant="toggle"
              ></ic-menu-item>
            </ic-popover-menu>
          </div>
        </div>
      `;leftPlacement.storyName="Left placement",leftPlacement.parameters={storySource:{source:'args => html`\n        <div style="margin-left: 1000px">\n          <ic-button id="button-1" onclick="buttonClick()"\n            >Show popover</ic-button\n          >\n          <script>\n            var icPopover = document.querySelector("ic-popover-menu");\n            function buttonClick() {\n              icPopover.open = true;\n            }\n          <\/script>\n          <div>\n            <ic-popover-menu anchor="button-1" aria-label="popover">\n              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n              <ic-menu-group label="View">\n                <ic-menu-item\n                  label="Zoom in"\n                  keyboard-shortcut="Cmd+"\n                ></ic-menu-item>\n                <ic-menu-item\n                  label="Zoom out"\n                  keyboard-shortcut="Cmd-"\n                ></ic-menu-item>\n              </ic-menu-group>\n              <ic-menu-item\n                label="Actions"\n                submenu-trigger-for="abc"\n              ></ic-menu-item>\n            </ic-popover-menu>\n            <ic-popover-menu submenu-id="abc">\n              <ic-menu-item label="Edit"></ic-menu-item>\n              <ic-menu-item\n                label="Find"\n                submenu-trigger-for="abc123"\n              ></ic-menu-item>\n              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n            </ic-popover-menu>\n            <ic-popover-menu submenu-id="abc123">\n              <ic-menu-item\n                label="Search the web"\n                description="This will search the web to find the thing you are looking for."\n              ></ic-menu-item>\n              <ic-menu-item label="Find..."></ic-menu-item>\n              <ic-menu-item label="Find icons">\n                <svg\n                  slot="icon"\n                  xmlns="http://www.w3.org/2000/svg"\n                  height="24px"\n                  viewBox="0 0 24 24"\n                  width="24px"\n                >\n                  <path d="M0 0h24v24H0V0z" fill="none" />\n                  <path\n                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                  />\n                </svg>\n              </ic-menu-item>\n              <ic-menu-item\n                label="Show found results"\n                variant="toggle"\n              ></ic-menu-item>\n            </ic-popover-menu>\n          </div>\n        </div>\n      `'},loki:{skip:!0}};const topPlacement=args=>lit_html.dy`
        <div style="margin-top: 540px">
          <ic-button id="button-1" onclick="buttonClick()"
            >Show popover</ic-button
          >
          <script>
            var icPopover = document.querySelector("ic-popover-menu");
            function buttonClick() {
              icPopover.open = true;
            }
          </script>
          <div>
            <ic-popover-menu anchor="button-1" aria-label="popover">
              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
              <ic-menu-group label="View">
                <ic-menu-item
                  label="Zoom in"
                  keyboard-shortcut="Cmd+"
                ></ic-menu-item>
                <ic-menu-item
                  label="Zoom out"
                  keyboard-shortcut="Cmd-"
                ></ic-menu-item>
              </ic-menu-group>
              <ic-menu-item
                label="Actions"
                submenu-trigger-for="abc"
              ></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc">
              <ic-menu-item label="Edit"></ic-menu-item>
              <ic-menu-item
                label="Find"
                submenu-trigger-for="abc123"
              ></ic-menu-item>
              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc123">
              <ic-menu-item
                label="Search the web"
                description="This will search the web to find the thing you are looking for."
              ></ic-menu-item>
              <ic-menu-item label="Find..."></ic-menu-item>
              <ic-menu-item label="Find icons">
                <svg
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                  />
                </svg>
              </ic-menu-item>
              <ic-menu-item
                label="Show found results"
                variant="toggle"
              ></ic-menu-item>
            </ic-popover-menu>
          </div>
        </div>
      `;topPlacement.storyName="Top placement",topPlacement.parameters={storySource:{source:'args => html`\n        <div style="margin-top: 540px">\n          <ic-button id="button-1" onclick="buttonClick()"\n            >Show popover</ic-button\n          >\n          <script>\n            var icPopover = document.querySelector("ic-popover-menu");\n            function buttonClick() {\n              icPopover.open = true;\n            }\n          <\/script>\n          <div>\n            <ic-popover-menu anchor="button-1" aria-label="popover">\n              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n              <ic-menu-group label="View">\n                <ic-menu-item\n                  label="Zoom in"\n                  keyboard-shortcut="Cmd+"\n                ></ic-menu-item>\n                <ic-menu-item\n                  label="Zoom out"\n                  keyboard-shortcut="Cmd-"\n                ></ic-menu-item>\n              </ic-menu-group>\n              <ic-menu-item\n                label="Actions"\n                submenu-trigger-for="abc"\n              ></ic-menu-item>\n            </ic-popover-menu>\n            <ic-popover-menu submenu-id="abc">\n              <ic-menu-item label="Edit"></ic-menu-item>\n              <ic-menu-item\n                label="Find"\n                submenu-trigger-for="abc123"\n              ></ic-menu-item>\n              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n            </ic-popover-menu>\n            <ic-popover-menu submenu-id="abc123">\n              <ic-menu-item\n                label="Search the web"\n                description="This will search the web to find the thing you are looking for."\n              ></ic-menu-item>\n              <ic-menu-item label="Find..."></ic-menu-item>\n              <ic-menu-item label="Find icons">\n                <svg\n                  slot="icon"\n                  xmlns="http://www.w3.org/2000/svg"\n                  height="24px"\n                  viewBox="0 0 24 24"\n                  width="24px"\n                >\n                  <path d="M0 0h24v24H0V0z" fill="none" />\n                  <path\n                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                  />\n                </svg>\n              </ic-menu-item>\n              <ic-menu-item\n                label="Show found results"\n                variant="toggle"\n              ></ic-menu-item>\n            </ic-popover-menu>\n          </div>\n        </div>\n      `'},loki:{skip:!0}};const multiplePopoversOnPage=args=>lit_html.dy` <ic-link href="/">Link1</ic-link>
        <ic-button id="button-1" onclick="buttonClick(1)"
          >Show popover</ic-button
        >
        <ic-link href="/">Link2</ic-link>
        <ic-button id="button-2" onclick="buttonClick(2)"
          >Show popover 2</ic-button
        >
        <ic-link href="/">Link3</ic-link>
        <script>
          function buttonClick(pos) {
            var icPopover = document.querySelector("#popover" + pos);
            icPopover.open = true;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover" id="popover1">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
            <ic-menu-item
              label="Logout"
              variant="destructive"
              disabled="true"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              disabled="true"
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu anchor="button-2" aria-label="popover" id="popover2">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="def"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="def">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="def123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="def123">
            <ic-menu-item
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>`;multiplePopoversOnPage.storyName="Multiple popovers on page",multiplePopoversOnPage.parameters={storySource:{source:'args => html` <ic-link href="/">Link1</ic-link>\n        <ic-button id="button-1" onclick="buttonClick(1)"\n          >Show popover</ic-button\n        >\n        <ic-link href="/">Link2</ic-link>\n        <ic-button id="button-2" onclick="buttonClick(2)"\n          >Show popover 2</ic-button\n        >\n        <ic-link href="/">Link3</ic-link>\n        <script>\n          function buttonClick(pos) {\n            var icPopover = document.querySelector("#popover" + pos);\n            icPopover.open = true;\n          }\n        <\/script>\n        <div>\n          <ic-popover-menu anchor="button-1" aria-label="popover" id="popover1">\n            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n            <ic-menu-group label="View">\n              <ic-menu-item\n                label="Zoom in"\n                keyboard-shortcut="Cmd+"\n              ></ic-menu-item>\n              <ic-menu-item\n                label="Zoom out"\n                keyboard-shortcut="Cmd-"\n              ></ic-menu-item>\n            </ic-menu-group>\n            <ic-menu-item\n              label="Actions"\n              submenu-trigger-for="abc"\n            ></ic-menu-item>\n            <ic-menu-item\n              label="Logout"\n              variant="destructive"\n              disabled="true"\n            ></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc">\n            <ic-menu-item label="Edit"></ic-menu-item>\n            <ic-menu-item\n              label="Find"\n              submenu-trigger-for="abc123"\n            ></ic-menu-item>\n            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc123">\n            <ic-menu-item\n              disabled="true"\n              label="Search the web"\n              description="This will search the web to find the thing you are looking for."\n            ></ic-menu-item>\n            <ic-menu-item label="Find..."></ic-menu-item>\n            <ic-menu-item label="Find icons">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                />\n              </svg>\n            </ic-menu-item>\n            <ic-menu-item\n              label="Show found results"\n              variant="toggle"\n            ></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu anchor="button-2" aria-label="popover" id="popover2">\n            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n            <ic-menu-group label="View">\n              <ic-menu-item\n                label="Zoom in"\n                keyboard-shortcut="Cmd+"\n              ></ic-menu-item>\n              <ic-menu-item\n                label="Zoom out"\n                keyboard-shortcut="Cmd-"\n              ></ic-menu-item>\n            </ic-menu-group>\n            <ic-menu-item\n              label="Actions"\n              submenu-trigger-for="def"\n            ></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="def">\n            <ic-menu-item label="Edit"></ic-menu-item>\n            <ic-menu-item\n              label="Find"\n              submenu-trigger-for="def123"\n            ></ic-menu-item>\n            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="def123">\n            <ic-menu-item\n              label="Search the web"\n              description="This will search the web to find the thing you are looking for."\n            ></ic-menu-item>\n            <ic-menu-item label="Find..."></ic-menu-item>\n            <ic-menu-item label="Find icons">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                />\n              </svg>\n            </ic-menu-item>\n            <ic-menu-item\n              label="Show found results"\n              variant="toggle"\n            ></ic-menu-item>\n          </ic-popover-menu>\n        </div>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Popover menu",tags:["stories-mdx"],includeStories:["defaultStory","maxHeight","leftPlacement","topPlacement","multiplePopoversOnPage"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_popover_menu_stories=componentMeta,__namedExportsOrder=["defaultStory","maxHeight","leftPlacement","topPlacement","multiplePopoversOnPage"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-popover-menu-ic-popover-menu-stories-mdx.17405da2.iframe.bundle.js.map