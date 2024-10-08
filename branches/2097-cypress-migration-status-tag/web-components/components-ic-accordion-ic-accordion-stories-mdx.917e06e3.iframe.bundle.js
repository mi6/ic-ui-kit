/*! For license information please see components-ic-accordion-ic-accordion-stories-mdx.917e06e3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6245],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-accordion/ic-accordion.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_accordion_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,disabled:()=>disabled,expanded:()=>expanded,groupTitle:()=>groupTitle,icon:()=>icon,lightText:()=>lightText,parent:()=>ic_accordion_stories_parent,playground:()=>playground,singleExpansion:()=>singleExpansion,sizes:()=>sizes,slottedHeadings:()=>slottedHeadings,withPopoverContent:()=>withPopoverContent});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-accordion\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property   | Attribute  | Description                                   | Type                              | Default     |\n| ---------- | ---------- | --------------------------------------------- | --------------------------------- | ----------- |\n| `disabled` | `disabled` | If `true`, the accordion will be disabled.    | `boolean`                         | `false`     |\n| `expanded` | `expanded` | If `true`, the accordion appears expanded.    | `boolean`                         | `false`     |\n| `heading`  | `heading`  | The section header outlining section content. | `string`                          | `""`        |\n| `message`  | `message`  | The main body message of the accordion.       | `string`                          | `""`        |\n| `size`     | `size`     | The size of the accordion.                    | `"default" \\| "large" \\| "small"` | `"default"` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on accordion heading.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot        | Description                                   |\n| ----------- | --------------------------------------------- |\n| `"heading"` | Content is placed as the accordion heading.   |\n| `"icon"`    | Content is placed to the left of the heading. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-accordion --\x3e ic-typography\n  style ic-accordion fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={accessibleButtonLabel:"accordions",appearance:"default",expanded:!1,groupTitle:"Accordion group",singleExpansion:!1,size:"default",disabled:!1,expandedAccordion:!1,heading:"Accordion 1",message:"This is an example of the main body text.",sizeAccordion:"default"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Accordion",component:"ic-accordion"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n"," ","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"expanded",children:"Expanded"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Expanded",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-accordion expanded="true" heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Icon",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-accordion heading="Accordion 1">
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
      </ic-accordion>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"group-title",children:"Group title"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Group Title",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-accordion-group group-title="Title of the Accordion Group">
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
    </ic-accordion-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Sizes",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-accordion-group group-title="Small Accordion Group" size="small">
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
      </ic-accordion-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"single-expansion",children:"Single expansion"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Single expansion",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-accordion-group
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
    </ic-accordion-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light-text",children:"Light text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Light text",parameters:{backgrounds:{default:"dark"},loki:{skip:!0}},children:lit_html.qy` <ic-accordion-group
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
    </ic-accordion-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"parent",children:"Parent"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Parent",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-accordion-group group-title="Title of the Accordion Group">
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
    </ic-accordion-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-accordion heading="Accordion 1">
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
      </ic-accordion>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-popover-content",children:"With Popover content"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With popover content",parameters:{loki:{skip:!0}},children:lit_html.qy`
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
          { label: "Cappuccino", value: "cappuccino" },
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
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-headings",children:"Slotted headings"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted headings",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-accordion-group>
      <ic-typography variant="h4" slot="group-title">
        Slotted group title
      </ic-typography>
      <ic-accordion>
        <ic-typography variant="h5" slot="heading">
          Slotted heading
        </ic-typography>
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,name:"Playground",argTypes:{appearance:{options:["dark","default","light"],control:{type:"radio"}},size:{options:["small","default","large"],control:{type:"radio"}},sizeAccordion:{options:["small","default","large"],control:{type:"radio"}}},parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<ic-accordion-group
        accessible-button-label=${args.accessibleButtonLabel}
        group-title=${args.groupTitle}
        expanded=${args.expanded}
        single-expansion=${args.singleExpansion}
        size=${args.size}
        appearance=${args.appearance}
      >
        <ic-accordion
          heading=${args.heading}
          disabled=${args.disabled}
          expanded=${args.expandedAccordion}
          size=${args.sizeAccordion}
          message=${args.message}
        >
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
      </ic-accordion-group>`})})]})}const defaultStory=()=>lit_html.qy` <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'html` <ic-accordion heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>`'},loki:{skip:!0}};const expanded=()=>lit_html.qy` <ic-accordion expanded="true" heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`;expanded.storyName="Expanded",expanded.parameters={storySource:{source:'html` <ic-accordion expanded="true" heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>`'},loki:{skip:!0}};const icon=()=>lit_html.qy` <ic-accordion heading="Accordion 1">
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
      </ic-accordion>`;icon.storyName="Icon",icon.parameters={storySource:{source:'html` <ic-accordion heading="Accordion 1">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>`'},loki:{skip:!0}};const groupTitle=()=>lit_html.qy` <ic-accordion-group group-title="Title of the Accordion Group">
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
    </ic-accordion-group>`;groupTitle.storyName="Group Title",groupTitle.parameters={storySource:{source:'html` <ic-accordion-group group-title="Title of the Accordion Group">\n      <ic-accordion heading="Accordion 1">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n    </ic-accordion-group>`'},loki:{skip:!0}};const sizes=()=>lit_html.qy` <ic-accordion-group group-title="Small Accordion Group" size="small">
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
      </ic-accordion-group>`;sizes.storyName="Sizes",sizes.parameters={storySource:{source:'html` <ic-accordion-group group-title="Small Accordion Group" size="small">\n        <ic-accordion heading="Accordion 1">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Accordion 2">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion-group>\n      <ic-accordion-group group-title="Default Accordion Group" size="default">\n        <ic-accordion heading="Accordion 1">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Accordion 2">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion-group>\n      <ic-accordion-group group-title="Large Accordion Group" size="large">\n        <ic-accordion heading="Accordion 1">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Accordion 2">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion-group>`'},loki:{skip:!0}};const singleExpansion=()=>lit_html.qy` <ic-accordion-group
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
    </ic-accordion-group>`;singleExpansion.storyName="Single expansion",singleExpansion.parameters={storySource:{source:'html` <ic-accordion-group\n      group-title="Title of the Accordion Group"\n      single-expansion="true"\n    >\n      <ic-accordion heading="Accordion 1">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n    </ic-accordion-group>`'},loki:{skip:!0}};const lightText=()=>lit_html.qy` <ic-accordion-group
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
    </ic-accordion-group>`;lightText.storyName="Light text",lightText.parameters={storySource:{source:'html` <ic-accordion-group\n      group-title="Title of the Accordion Group"\n      appearance="light"\n    >\n      <ic-accordion heading="Accordion 1">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n    </ic-accordion-group>`'},backgrounds:{default:"dark"},loki:{skip:!0}};const ic_accordion_stories_parent=()=>lit_html.qy` <ic-accordion-group group-title="Title of the Accordion Group">
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
    </ic-accordion-group>`;ic_accordion_stories_parent.storyName="Parent",ic_accordion_stories_parent.parameters={storySource:{source:'html` <ic-accordion-group group-title="Title of the Accordion Group">\n      <ic-accordion heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <ic-accordion heading="Child Accordion 1">\n          <ic-typography variant="body">\n            This is an example of the child main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Child Accordion 2">\n          <ic-typography variant="body">\n            This is an example of the child main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Child Accordion 3">\n          <ic-typography variant="body">\n            This is an example of the child main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion>\n    </ic-accordion-group>`'},loki:{skip:!0}};const disabled=()=>lit_html.qy` <ic-accordion heading="Accordion 1">
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
      </ic-accordion>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'html` <ic-accordion heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2" disabled>\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 3">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>`'},loki:{skip:!0}};const withPopoverContent=()=>lit_html.qy`
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
          { label: "Cappuccino", value: "cappuccino" },
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
    `;withPopoverContent.storyName="With popover content",withPopoverContent.parameters={storySource:{source:'html`\n      <ic-accordion heading="With Select">\n        <ic-select\n          id="select-1"\n          label="What is your favourite coffee?"\n        ></ic-select>\n        <ic-button id="set-content-btn">Set Content</ic-button>\n        <div id="extra-content" style="width: 50px"></div>\n      </ic-accordion>\n      <ic-accordion heading="With Tooltip">\n        <ic-tooltip\n          label="This is a description of the button"\n          target="test-button-default"\n        >\n          <button\n            id="test-button-default"\n            aria-describedby="ic-tooltip-test-button-default"\n          >\n            Default\n          </button>\n        </ic-tooltip>\n      </ic-accordion>\n      <ic-accordion heading="With Search Bar">\n        <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>\n      </ic-accordion>\n      <ic-accordion heading="With Popover Menu">\n        <ic-popover-menu anchor="button-1" aria-label="popover">\n          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n          <ic-menu-group label="View">\n            <ic-menu-item\n              label="Zoom in"\n              keyboard-shortcut="Cmd+"\n            ></ic-menu-item>\n            <ic-menu-item\n              label="Zoom out"\n              keyboard-shortcut="Cmd-"\n            ></ic-menu-item>\n          </ic-menu-group>\n          <ic-menu-item\n            label="Actions"\n            submenu-trigger-for="abc"\n          ></ic-menu-item>\n          <ic-menu-item\n            label="Logout"\n            variant="destructive"\n            disabled="true"\n          ></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc">\n          <ic-menu-item label="Edit"></ic-menu-item>\n          <ic-menu-item\n            label="Find"\n            submenu-trigger-for="abc123"\n          ></ic-menu-item>\n          <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc123">\n          <ic-menu-item\n            disabled="true"\n            label="Search the web"\n            description="This will search the web to find the thing you are looking for."\n          ></ic-menu-item>\n          <ic-menu-item label="Find..."></ic-menu-item>\n          <ic-menu-item label="Find icons">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-menu-item>\n          <ic-menu-item\n            label="Show found results"\n            variant="toggle"\n          ></ic-menu-item>\n        </ic-popover-menu>\n        <ic-button id="button-1" onclick="buttonClick()"\n          >Show popover</ic-button\n        >\n      </ic-accordion>\n      <ic-button id="with-dialog">With Dialog</ic-button>\n      <ic-dialog\n        heading="This is a medium dialog"\n        label="medium"\n        size="medium"\n        id="medium-dialog"\n      >\n        <ic-typography>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </ic-typography>\n        <ic-typography>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </ic-typography>\n        <ic-accordion heading="Internal 1">\n          <ic-typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          </ic-typography>\n          <ic-select\n            id="select-2"\n            label="What is your favourite coffee?"\n          ></ic-select>\n        </ic-accordion>\n        <ic-accordion heading="Internal 2">\n          <ic-typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          </ic-typography>\n          <ic-button>Click</ic-button>\n        </ic-accordion>\n      </ic-dialog>\n      <script>\n        document.querySelector("#with-dialog").addEventListener("click", () => {\n          document.querySelector("#medium-dialog").showDialog();\n        });\n        document.querySelector("#select-1").options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        document.querySelector("#select-2").options = [\n          { label: "Cappuccino", value: "Cap" },\n          { label: "Latte", value: "Lat" },\n          { label: "Americano", value: "Ame" },\n        ];\n        document.querySelector("ic-search-bar").options = [\n          { label: "Espresso", value: "espresso" },\n          { label: "Double Espresso", value: "doubleespresso" },\n          { label: "Flat White", value: "flatwhite" },\n          { label: "Cappuccino", value: "cappuccino" },\n          { label: "Americano", value: "americano" },\n          { label: "Ameno", value: "ameno" },\n          { label: "Aicano", value: "acano" },\n          { label: "Mocha", value: "mocha" },\n        ];\n        var icPopover = document.querySelector("ic-popover-menu");\n        function buttonClick() {\n          icPopover.open = true;\n        }\n        document\n          .querySelector("#set-content-btn")\n          .addEventListener("click", () => {\n            document.querySelector("#extra-content").innerHTML =\n              "This is a very very very lon sentence which should appear below without any issues";\n          });\n      <\/script>\n    `'},loki:{skip:!0}};const slottedHeadings=()=>lit_html.qy`<ic-accordion-group>
      <ic-typography variant="h4" slot="group-title">
        Slotted group title
      </ic-typography>
      <ic-accordion>
        <ic-typography variant="h5" slot="heading">
          Slotted heading
        </ic-typography>
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`;slottedHeadings.storyName="Slotted headings",slottedHeadings.parameters={storySource:{source:'html`<ic-accordion-group>\n      <ic-typography variant="h4" slot="group-title">\n        Slotted group title\n      </ic-typography>\n      <ic-accordion>\n        <ic-typography variant="h5" slot="heading">\n          Slotted heading\n        </ic-typography>\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n    </ic-accordion-group>`'},loki:{skip:!0}};const playground=args=>lit_html.qy`<ic-accordion-group
        accessible-button-label=${args.accessibleButtonLabel}
        group-title=${args.groupTitle}
        expanded=${args.expanded}
        single-expansion=${args.singleExpansion}
        size=${args.size}
        appearance=${args.appearance}
      >
        <ic-accordion
          heading=${args.heading}
          disabled=${args.disabled}
          expanded=${args.expandedAccordion}
          size=${args.sizeAccordion}
          message=${args.message}
        >
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
      </ic-accordion-group>`;playground.storyName="Playground",playground.argTypes={appearance:{options:["dark","default","light"],control:{type:"radio"}},size:{options:["small","default","large"],control:{type:"radio"}},sizeAccordion:{options:["small","default","large"],control:{type:"radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`<ic-accordion-group\n        accessible-button-label=${args.accessibleButtonLabel}\n        group-title=${args.groupTitle}\n        expanded=${args.expanded}\n        single-expansion=${args.singleExpansion}\n        size=${args.size}\n        appearance=${args.appearance}\n      >\n        <ic-accordion\n          heading=${args.heading}\n          disabled=${args.disabled}\n          expanded=${args.expandedAccordion}\n          size=${args.sizeAccordion}\n          message=${args.message}\n        >\n        </ic-accordion>\n        <ic-accordion heading="Accordion 2">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion-group>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Accordion",tags:["stories-mdx"],includeStories:["defaultStory","expanded","icon","groupTitle","sizes","singleExpansion","lightText","parent","disabled","withPopoverContent","slottedHeadings","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_accordion_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","expanded","icon","groupTitle","sizes","singleExpansion","lightText","parent","disabled","withPopoverContent","slottedHeadings","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-accordion-ic-accordion-stories-mdx.917e06e3.iframe.bundle.js.map