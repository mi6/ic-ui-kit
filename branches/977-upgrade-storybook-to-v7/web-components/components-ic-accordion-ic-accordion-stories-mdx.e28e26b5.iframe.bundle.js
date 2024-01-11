/*! For license information please see components-ic-accordion-ic-accordion-stories-mdx.e28e26b5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5413],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-accordion/ic-accordion.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_accordion_stories,defaultStory:()=>defaultStory,disabled:()=>disabled,expanded:()=>expanded,groupTitle:()=>groupTitle,icon:()=>icon,lightText:()=>lightText,parent:()=>ic_accordion_stories_parent,singleExpansion:()=>singleExpansion,sizes:()=>sizes,withPopoverContent:()=>withPopoverContent});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-accordion\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property   | Attribute  | Description                                   | Type                              | Default     |\n| ---------- | ---------- | --------------------------------------------- | --------------------------------- | ----------- |\n| `disabled` | `disabled` | If `true`, the accordion will be disabled.    | `boolean`                         | `false`     |\n| `expanded` | `expanded` | If `true`, the accordion appears expanded.    | `boolean`                         | `false`     |\n| `heading`  | `heading`  | The section header outlining section content. | `string`                          | `""`        |\n| `message`  | `message`  | The main body message of the accordion.       | `string`                          | `""`        |\n| `size`     | `size`     | The size of the accordion.                    | `"default" \\| "large" \\| "small"` | `"default"` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on accordion heading.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot        | Description                                   |\n| ----------- | --------------------------------------------- |\n| `"heading"` | Content is placed as the accordion heading.   |\n| `"icon"`    | Content is placed to the left of the heading. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-accordion --\x3e ic-typography\n  style ic-accordion fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Accordion",component:"ic-accordion"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n"," ","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:lit_html.dy` <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"expanded",children:"Expanded"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Expanded",children:lit_html.dy` <ic-accordion expanded="true" heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Icon",children:lit_html.dy` <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"group-title",children:"Group title"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Group Title",children:lit_html.dy` <ic-accordion-group group-title="Title of the Accordion Group">
      <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Sizes",children:lit_html.dy` <ic-accordion-group group-title="Small Accordion Group" size="small">
        <ic-accordion heading="Accordion 1">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Accordion 2">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion-group>
      <ic-accordion-group group-title="Default Accordion Group" size="default">
        <ic-accordion heading="Accordion 1">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Accordion 2">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion-group>
      <ic-accordion-group group-title="Large Accordion Group" size="large">
        <ic-accordion heading="Accordion 1">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Accordion 2">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"single-expansion",children:"Single expansion"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Single Expansion",children:lit_html.dy` <ic-accordion-group
      group-title="Title of the Accordion Group"
      single-expansion="true"
    >
      <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light-text",children:"Light text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Light text",parameters:{backgrounds:{default:"dark"}},children:lit_html.dy` <ic-accordion-group
      group-title="Title of the Accordion Group"
      appearance="light"
    >
      <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"parent",children:"Parent"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Parent",children:lit_html.dy` <ic-accordion-group group-title="Title of the Accordion Group">
      <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-accordion heading="Child Accordion 1">
          <ic-typography variant="body">
            This is an example of the child main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Child Accordion 2">
          <ic-typography variant="body">
            This is an example of the child main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Child Accordion 3">
          <ic-typography variant="body">
            This is an example of the child main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion>
    </ic-accordion-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",children:lit_html.dy` <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2" disabled>
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 3">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-popover-content",children:"With Popover content"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With popover content",parameters:{loki:{skip:!0}},children:lit_html.dy`
      <ic-accordion heading="With Select">
        <ic-select
          id="select-1"
          label="What is your favourite coffee?"
        ></ic-select>
        <ic-button id="set-content-btn">Set Content</ic-button>
        <div id="extra-content" style="width: 50px"></div>
      </ic-accordion>
      <ic-accordion heading="With Tooltip">
        <ic-tooltip
          label="This is a description of the button"
          target="test-button-default"
        >
          <button
            id="test-button-default"
            aria-describedby="ic-tooltip-test-button-default"
          >
            Default
          </button>
        </ic-tooltip>
      </ic-accordion>
      <ic-accordion heading="With Search Bar">
        <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
      </ic-accordion>
      <ic-accordion heading="With Popover Menu">
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
        <ic-button id="button-1" onclick="buttonClick()"
          >Show popover</ic-button
        >
      </ic-accordion>
      <ic-button id="with-dialog">With Dialog</ic-button>
      <ic-dialog
        heading="This is a medium dialog"
        label="medium"
        size="medium"
        id="medium-dialog"
      >
        <ic-typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ic-typography>
        <ic-typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ic-typography>
        <ic-accordion heading="Internal 1">
          <ic-typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ic-typography>
          <ic-select
            id="select-2"
            label="What is your favourite coffee?"
          ></ic-select>
        </ic-accordion>
        <ic-accordion heading="Internal 2">
          <ic-typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ic-typography>
          <ic-button>Click</ic-button>
        </ic-accordion>
      </ic-dialog>
      <script>
        document.querySelector("#with-dialog").addEventListener("click", () => {
          document.querySelector("#medium-dialog").showDialog();
        });
        document.querySelector("#select-1").options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        document.querySelector("#select-2").options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        document.querySelector("ic-search-bar").options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappucino" },
          { label: "Americano", value: "americano" },
          { label: "Ameno", value: "ameno" },
          { label: "Aicano", value: "acano" },
          { label: "Mocha", value: "mocha" },
        ];
        var icPopover = document.querySelector("ic-popover-menu");
        function buttonClick() {
          icPopover.open = true;
        }
        document
          .querySelector("#set-content-btn")
          .addEventListener("click", () => {
            document.querySelector("#extra-content").innerHTML =
              "This is a very very very lon sentence which should appear below without any issues";
          });
      </script>
    `})})]})}const defaultStory=()=>lit_html.dy` <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'html` <ic-accordion heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>`'}};const expanded=()=>lit_html.dy` <ic-accordion expanded="true" heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`;expanded.storyName="Expanded",expanded.parameters={storySource:{source:'html` <ic-accordion expanded="true" heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>`'}};const icon=()=>lit_html.dy` <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>`;icon.storyName="Icon",icon.parameters={storySource:{source:'html` <ic-accordion heading="Accordion 1">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>`'}};const groupTitle=()=>lit_html.dy` <ic-accordion-group group-title="Title of the Accordion Group">
      <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`;groupTitle.storyName="Group Title",groupTitle.parameters={storySource:{source:'html` <ic-accordion-group group-title="Title of the Accordion Group">\n      <ic-accordion heading="Accordion 1">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n    </ic-accordion-group>`'}};const sizes=()=>lit_html.dy` <ic-accordion-group group-title="Small Accordion Group" size="small">
        <ic-accordion heading="Accordion 1">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Accordion 2">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion-group>
      <ic-accordion-group group-title="Default Accordion Group" size="default">
        <ic-accordion heading="Accordion 1">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Accordion 2">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion-group>
      <ic-accordion-group group-title="Large Accordion Group" size="large">
        <ic-accordion heading="Accordion 1">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Accordion 2">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion-group>`;sizes.storyName="Sizes",sizes.parameters={storySource:{source:'html` <ic-accordion-group group-title="Small Accordion Group" size="small">\n        <ic-accordion heading="Accordion 1">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Accordion 2">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion-group>\n      <ic-accordion-group group-title="Default Accordion Group" size="default">\n        <ic-accordion heading="Accordion 1">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Accordion 2">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion-group>\n      <ic-accordion-group group-title="Large Accordion Group" size="large">\n        <ic-accordion heading="Accordion 1">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Accordion 2">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion-group>`'}};const singleExpansion=()=>lit_html.dy` <ic-accordion-group
      group-title="Title of the Accordion Group"
      single-expansion="true"
    >
      <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`;singleExpansion.storyName="Single Expansion",singleExpansion.parameters={storySource:{source:'html` <ic-accordion-group\n      group-title="Title of the Accordion Group"\n      single-expansion="true"\n    >\n      <ic-accordion heading="Accordion 1">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n    </ic-accordion-group>`'}};const lightText=()=>lit_html.dy` <ic-accordion-group
      group-title="Title of the Accordion Group"
      appearance="light"
    >
      <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`;lightText.storyName="Light text",lightText.parameters={storySource:{source:'html` <ic-accordion-group\n      group-title="Title of the Accordion Group"\n      appearance="light"\n    >\n      <ic-accordion heading="Accordion 1">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n    </ic-accordion-group>`'},backgrounds:{default:"dark"}};const ic_accordion_stories_parent=()=>lit_html.dy` <ic-accordion-group group-title="Title of the Accordion Group">
      <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-accordion heading="Child Accordion 1">
          <ic-typography variant="body">
            This is an example of the child main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Child Accordion 2">
          <ic-typography variant="body">
            This is an example of the child main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Child Accordion 3">
          <ic-typography variant="body">
            This is an example of the child main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion>
    </ic-accordion-group>`;ic_accordion_stories_parent.storyName="Parent",ic_accordion_stories_parent.parameters={storySource:{source:'html` <ic-accordion-group group-title="Title of the Accordion Group">\n      <ic-accordion heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <ic-accordion heading="Child Accordion 1">\n          <ic-typography variant="body">\n            This is an example of the child main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Child Accordion 2">\n          <ic-typography variant="body">\n            This is an example of the child main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Child Accordion 3">\n          <ic-typography variant="body">\n            This is an example of the child main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion>\n    </ic-accordion-group>`'}};const disabled=()=>lit_html.dy` <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2" disabled>
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 3">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'html` <ic-accordion heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2" disabled>\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 3">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>`'}};const withPopoverContent=()=>lit_html.dy`
      <ic-accordion heading="With Select">
        <ic-select
          id="select-1"
          label="What is your favourite coffee?"
        ></ic-select>
        <ic-button id="set-content-btn">Set Content</ic-button>
        <div id="extra-content" style="width: 50px"></div>
      </ic-accordion>
      <ic-accordion heading="With Tooltip">
        <ic-tooltip
          label="This is a description of the button"
          target="test-button-default"
        >
          <button
            id="test-button-default"
            aria-describedby="ic-tooltip-test-button-default"
          >
            Default
          </button>
        </ic-tooltip>
      </ic-accordion>
      <ic-accordion heading="With Search Bar">
        <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
      </ic-accordion>
      <ic-accordion heading="With Popover Menu">
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
        <ic-button id="button-1" onclick="buttonClick()"
          >Show popover</ic-button
        >
      </ic-accordion>
      <ic-button id="with-dialog">With Dialog</ic-button>
      <ic-dialog
        heading="This is a medium dialog"
        label="medium"
        size="medium"
        id="medium-dialog"
      >
        <ic-typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ic-typography>
        <ic-typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ic-typography>
        <ic-accordion heading="Internal 1">
          <ic-typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ic-typography>
          <ic-select
            id="select-2"
            label="What is your favourite coffee?"
          ></ic-select>
        </ic-accordion>
        <ic-accordion heading="Internal 2">
          <ic-typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ic-typography>
          <ic-button>Click</ic-button>
        </ic-accordion>
      </ic-dialog>
      <script>
        document.querySelector("#with-dialog").addEventListener("click", () => {
          document.querySelector("#medium-dialog").showDialog();
        });
        document.querySelector("#select-1").options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        document.querySelector("#select-2").options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
        ];
        document.querySelector("ic-search-bar").options = [
          { label: "Espresso", value: "espresso" },
          { label: "Double Espresso", value: "doubleespresso" },
          { label: "Flat White", value: "flatwhite" },
          { label: "Cappuccino", value: "cappucino" },
          { label: "Americano", value: "americano" },
          { label: "Ameno", value: "ameno" },
          { label: "Aicano", value: "acano" },
          { label: "Mocha", value: "mocha" },
        ];
        var icPopover = document.querySelector("ic-popover-menu");
        function buttonClick() {
          icPopover.open = true;
        }
        document
          .querySelector("#set-content-btn")
          .addEventListener("click", () => {
            document.querySelector("#extra-content").innerHTML =
              "This is a very very very lon sentence which should appear below without any issues";
          });
      </script>
    `;withPopoverContent.storyName="With popover content",withPopoverContent.parameters={storySource:{source:'html`\n      <ic-accordion heading="With Select">\n        <ic-select\n          id="select-1"\n          label="What is your favourite coffee?"\n        ></ic-select>\n        <ic-button id="set-content-btn">Set Content</ic-button>\n        <div id="extra-content" style="width: 50px"></div>\n      </ic-accordion>\n      <ic-accordion heading="With Tooltip">\n        <ic-tooltip\n          label="This is a description of the button"\n          target="test-button-default"\n        >\n          <button\n            id="test-button-default"\n            aria-describedby="ic-tooltip-test-button-default"\n          >\n            Default\n          </button>\n        </ic-tooltip>\n      </ic-accordion>\n      <ic-accordion heading="With Search Bar">\n        <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>\n      </ic-accordion>\n      <ic-accordion heading="With Popover Menu">\n        <ic-popover-menu anchor="button-1" aria-label="popover">\n          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n          <ic-menu-group label="View">\n            <ic-menu-item\n              label="Zoom in"\n              keyboard-shortcut="Cmd+"\n            ></ic-menu-item>\n            <ic-menu-item\n              label="Zoom out"\n              keyboard-shortcut="Cmd-"\n            ></ic-menu-item>\n          </ic-menu-group>\n          <ic-menu-item\n            label="Actions"\n            submenu-trigger-for="abc"\n          ></ic-menu-item>\n          <ic-menu-item\n            label="Logout"\n            variant="destructive"\n            disabled="true"\n          ></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc">\n          <ic-menu-item label="Edit"></ic-menu-item>\n          <ic-menu-item\n            label="Find"\n            submenu-trigger-for="abc123"\n          ></ic-menu-item>\n          <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc123">\n          <ic-menu-item\n            disabled="true"\n            label="Search the web"\n            description="This will search the web to find the thing you are looking for."\n          ></ic-menu-item>\n          <ic-menu-item label="Find..."></ic-menu-item>\n          <ic-menu-item label="Find icons">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-menu-item>\n          <ic-menu-item\n            label="Show found results"\n            variant="toggle"\n          ></ic-menu-item>\n        </ic-popover-menu>\n        <ic-button id="button-1" onclick="buttonClick()"\n          >Show popover</ic-button\n        >\n      </ic-accordion>\n      <ic-button id="with-dialog">With Dialog</ic-button>\n      <ic-dialog\n        heading="This is a medium dialog"\n        label="medium"\n        size="medium"\n        id="medium-dialog"\n      >\n        <ic-typography>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </ic-typography>\n        <ic-typography>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </ic-typography>\n        <ic-accordion heading="Internal 1">\n          <ic-typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          </ic-typography>\n          <ic-select\n            id="select-2"\n            label="What is your favourite coffee?"\n          ></ic-select>\n        </ic-accordion>\n        <ic-accordion heading="Internal 2">\n          <ic-typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          </ic-typography>\n          <ic-button>Click</ic-button>\n        </ic-accordion>\n      </ic-dialog>\n      <script>\n        document.querySelector("#with-dialog").addEventListener("click", () => {\n          document.querySelector("#medium-dialog").showDialog();\n        });\n        document.querySelector("#select-1").options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        document.querySelector("#select-2").options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        document.querySelector("ic-search-bar").options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappucino" },\n          { label: "Americano", value: "americano" },\n          { label: "Ameno", value: "ameno" },\n          { label: "Aicano", value: "acano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n        var icPopover = document.querySelector("ic-popover-menu");\n        function buttonClick() {\n          icPopover.open = true;\n        }\n        document\n          .querySelector("#set-content-btn")\n          .addEventListener("click", () => {\n            document.querySelector("#extra-content").innerHTML =\n              "This is a very very very lon sentence which should appear below without any issues";\n          });\n      <\/script>\n    `'},loki:{skip:!0}};const componentMeta={title:"Web Components/Accordion",tags:["stories-mdx"],includeStories:["defaultStory","expanded","icon","groupTitle","sizes","singleExpansion","lightText","parent","disabled","withPopoverContent"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_accordion_stories=componentMeta,__namedExportsOrder=["defaultStory","expanded","icon","groupTitle","sizes","singleExpansion","lightText","parent","disabled","withPopoverContent"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-accordion-ic-accordion-stories-mdx.e28e26b5.iframe.bundle.js.map